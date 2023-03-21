---
title: "Cách chuyển đổi các quy tắc viết lại HTACCESS sang Nginx Viết lại các chỉ thị" 
seoTitle: "Cách chuyển đổi các quy tắc viết lại HTACCESS sang Nginx Viết lại các chỉ thị" 
description: "Nginx không hỗ trợ .htaccess viết lại các quy tắc, vì vậy các nhà phát triển phải chuyển đổi các quy tắc đó thành nginx viết lại các chỉ thị. Hãy tìm hiểu cách thực hiện chuyển đổi này." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "Nginx không hỗ trợ các quy tắc viết lại HTACCESS và các nhà phát triển yêu cầu chuyển đổi các quy tắc đó thành Nginx viết lại các chỉ thị. Chúng ta hãy học cách thực hiện chuyển đổi này." 
url: /vi/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## Nginx không hỗ trợ các quy tắc viết lại HTACCESS và các nhà phát triển yêu cầu chuyển đổi các quy tắc đó thành Nginx viết lại các chỉ thị. Hãy cùng học cách thực hiện chuyển đổi này.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Chuyển đổi .htaccess Viết lại các quy tắc sang Nginx Chỉ thị">}}

Trong hướng dẫn cuối cùng của chúng tôi, chúng tôi đã học [cách cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu][1]. Apache là một trong những webserver phổ biến nhất nhưng gần đây, Nginx đã tự mình trở thành đối thủ cạnh tranh với Apache. Nhưng Nginx không hỗ trợ các quy tắc viết lại HTACCESS. Vì vậy, trong bài viết này, chúng tôi sẽ học cách chuyển đổi các quy tắc viết lại HTACCESS sang Nginx viết lại các chỉ thị. Bắt đầu nào!
  * **[Nginx viết lại quy tắc][2]**
  *[**. Htaccess viết lại các quy tắc**][3]
  *[ **Chuyển đổi .htaccess Viết lại các quy tắc sang Nginx Viết lại Chỉ thị** ][4]
  *[ **Kết luận** ][5]

## nginx viết lại quy tắc   {#nginx}
Viết lại các quy tắc thay đổi phần hoặc tất cả URL trong yêu cầu của khách hàng, thường là để thông báo cho khách hàng rằng tài nguyên mà họ yêu cầu hiện đang cư trú tại một vị trí khác hoặc để kiểm soát luồng xử lý trong Nginx. Ví dụ: để chuyển tiếp các yêu cầu đến một máy chủ ứng dụng khi nội dung cần được tạo động. Chỉ thị Try_Files thường được sử dụng cho mục đích này.
Hai chỉ thị cho bản viết lại nginx đa năng là _return_ và _rewrite_, và Chỉ thị _Try_Files_ là một cách tiện dụng để trực tiếp yêu cầu đến máy chủ ứng dụng.
Chỉ thị trả lại là đơn giản hơn trong hai chỉ thị đa năng. Bạn gửi lại lợi nhuận trong bối cảnh máy chủ hoặc vị trí.
Ví dụ: ở đây, một ví dụ rất đơn giản chuyển hướng khách hàng sang tên miền mới bằng cách sử dụng Chỉ thị _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Nhưng điều gì sẽ xảy ra nếu bạn cần thực hiện sự khác biệt phức tạp giữa các URL, nắm bắt các phần tử trong URL ban đầu hoặc thay đổi hoặc thêm các phần tử trong đường dẫn? Bạn có thể sử dụng chỉ thị _rewrite_ trong các trường hợp như vậy.
Tại đây, một quy tắc Viết lại Nginx mẫu sử dụng Chỉ thị Viết lại. Nó phù hợp với các URL bắt đầu bằng chuỗi /bài hát và sau đó bao gồm /media /hoặc /audio /thư mục ở đâu đó sau đó trong đường dẫn. Nó thay thế các yếu tố đó bằng / mp3 / và thêm phần mở rộng tệp thích hợp, .mp3 hoặc .ra. Các biến $ 1 và $ 2 nắm bắt các yếu tố đường dẫn thay đổi. Ví dụ,/tải xuống/cdn-west/media/file1 trở thành/tải xuống/cdn-west/mp3/file1.mp3. Nếu có một phần mở rộng trên tên tệp (chẳng hạn như .flv), biểu thức sẽ loại bỏ nó và thay thế nó bằng .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess viết lại các quy tắc   {#Apache}
Tệp .htaccess kiểm soát một số cách mà một trang web có thể được truy cập, chặn và chuyển hướng. Nó thực hiện điều này bằng cách sử dụng một loạt một hoặc nhiều .htaccess viết lại các quy tắc. Các bản viết lại này được thực hiện bởi mô -đun Apache Mod Mod_rewrite.
MOD_REWRITE cung cấp một cách để sửa đổi các yêu cầu URL đến, một cách linh hoạt, dựa trên các quy tắc biểu thức thông thường. Điều này cho phép bạn ánh xạ bất kỳ URL nào lên cấu trúc URL nội bộ của bạn theo bất kỳ cách nào bạn muốn. Điều này cũng được sử dụng để làm cho các URL bên ngoài của bạn sạch sẽ và sau đó ánh xạ chúng lên các URL nội bộ trông xấu xí.
Ví dụ: sau đây .htaccess viết lại quy tắc làm lại một URL không www thành URL www.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Chuyển đổi .htaccess viết lại các quy tắc thành nginx viết lại các chỉ thị   {#convert}
Như chúng tôi đã trình bày trong ví dụ của chúng tôi ở trên để chuyển hướng URL không phải WWW sang URL WWW, hãy để Lừa chuyển đổi quy tắc viết lại .htaccess thành Chỉ thị Vinx.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Vì vậy, ở đây chúng tôi đã tạo hai khối _server_ riêng biệt, một cho _yourdomain.com_ và một cho _www.yourdomain.com_. Và trong khối _server_ cho _yourdomain.com_ chúng tôi sử dụng chỉ thị _return_ để chuyển hướng URL không phải WWW sang URL www.
Chuyển hướng tương tự mà chúng tôi đã thực hiện với Chỉ thị trả lại, cũng có thể được thực hiện với Chỉ thị Viết lại nhưng không được khuyến nghị.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Để rõ ràng hơn, hãy để chuyển đổi các quy tắc HTACCess WordPress thành Chỉ thị nginx Try_Files.
[WordPress.org phân phối][6] Một mặc định cơ bản **. Htaccess** với các tệp sau. HTAccess viết lại các quy tắc cho phép PromaLinks khá:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Tại đây, chỉ thị nginx try_files đã chuyển đổi
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Kết luận   {#conclusion}
Trong hướng dẫn này, chúng tôi đã khám phá các quy tắc viết lại của Apache .htaccess và cách chúng tôi có thể chuyển đổi các quy tắc .htaccess viết lại các quy tắc thành các chỉ thị nginx viết lại. Chúng tôi tiếp tục khám phá các chỉ thị nginx khác nhau có thể được sử dụng để viết lại các URL. Chúng tôi cũng đã đưa ra các quy tắc viết ví dụ cho cả Nginx và Apache. Hy vọng hướng dẫn là hữu ích cho bạn.

## Khám phá
  * [Cách cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu][1]
  * [Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược][7]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
