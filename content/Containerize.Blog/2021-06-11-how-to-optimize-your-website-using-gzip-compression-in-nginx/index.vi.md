---
title: "Cách tối ưu hóa trang web của bạn bằng cách sử dụng nén gzip trong nginx" 
seoTitle: "Cách tối ưu hóa trang web của bạn bằng cách sử dụng nén gzip trong nginx" 
description: "Trong bài viết này, chúng tôi sẽ thảo luận về một phương pháp để tối ưu hóa tốc độ chuyển trang web của bạn bằng cách giảm kích thước tệp thông qua nén GZIP trong Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Hướng dẫn này hướng dẫn bạn cách tối ưu hóa hiệu suất trang web của bạn và làm cho nó nhanh bằng cách giảm kích thước tệp bằng cách sử dụng nén GZIP trong Nginx." 
url: /vi/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Hướng dẫn này hướng dẫn bạn cách tối ưu hóa hiệu suất trang web của bạn và làm cho nó nhanh bằng cách giảm kích thước tệp bằng cách sử dụng nén GZIP trong Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Cách bật nén gzip trong nginx">}}

Bài viết này là tiếp tục của loạt hướng dẫn của chúng tôi về Nginx. Cho đến nay, chúng tôi đã đề cập đến cách sử dụng Nginx làm bộ cân bằng tải, cách sử dụng Nginx làm proxy ngược. Và bây giờ, hướng dẫn này bao gồm một câu hỏi đòi hỏi khác, Làm thế nào để tối ưu hóa trang web của bạn bằng cách sử dụng nén GZIP trong Nginx. Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn từng bước về cách bật nén GZIP trong Nginx. Vậy hãy bắt đầu!
  * [Tối ưu hóa trang web với nén][1]
  * [Nén Gzip là gì?][2]
  * [Làm thế nào để nén gzip hoạt động?][3]
  * [Bật nén GZIP trong Nginx][4]
  * [Xác minh nén GZIP][5]
  * [Kết luận][6]

## Tối ưu hóa trang web với nén {#optimize}

Một hiệu suất của trang web phụ thuộc vào một số yếu tố. Một trong những yếu tố mà nó phụ thuộc vào một phần là kích thước của tất cả các tệp mà trình duyệt của người dùng phải tải xuống từ máy chủ của bạn. Việc giảm hoặc nén kích thước của các tệp được truyền đó có thể làm cho trang web của bạn tải nhanh hơn cho người dùng. Nó cũng có thể giảm hóa đơn cho trang web của bạn trong trường hợp nếu bạn trả tiền cho việc sử dụng băng thông trên các kết nối có đồng hồ đo. Vì vậy, nén có thể đóng một vai trò rất quan trọng trong tối ưu hóa trang web của bạn.
Vì Google và các công cụ tìm kiếm khác đang xem xét trải nghiệm người dùng (UX) của trang web là một yếu tố quan trọng trong các thuật toán xếp hạng của họ. Nó đã trở nên quan trọng hơn để cải thiện và tối ưu hóa trang web của bạn cho xếp hạng hàng đầu. Trong số các yếu tố quan trọng nhất cần chú ý là, tốc độ trang và thời gian tải. Và, cách nhanh nhất và dễ nhất để cải thiện tốc độ và hiệu suất trang web của bạn là cho phép nén GZIP trên trang web của bạn.

## Nén Gzip là gì? {#what-gzip}

GZIP là một định dạng tệp **Ứng dụng phần mềm** Được sử dụng để nén tệp và giải nén. Máy chủ web hoặc phần mềm khác sử dụng nén GZIP để nén các tệp dữ liệu trước khi được gửi đến trình duyệt của người dùng. Điều này làm giảm thời gian tải xuống tệp giúp trang web của bạn nhanh hơn. Tất cả các trình duyệt hiện đại hỗ trợ nén GZIP.
Nó cũng rất quan trọng cần lưu ý rằng việc nén GZIP phải được bật trên máy chủ web của bạn trước khi bạn có thể bật nén tệp và thư mục. Một thời gian ngắn, chúng tôi sẽ thấy cách bật nén GZIP trong Nginx.

## Làm thế nào để nén gzip hoạt động? {#how-gzip}

GZIP, phương pháp nén phổ biến nhất, được sử dụng bởi các máy chủ và trình duyệt web để nén và giải nén nội dung khi nó truyền qua Internet. Nó được sử dụng chủ yếu trên các tệp mã và văn bản, GZIP có thể giảm kích thước của các tệp JavaScript, CSS và HTML lên tới 90%.
Theo mặc định, nén GZIP không nén hình ảnh hoặc video. Đây là lý do tại sao hầu hết các công cụ kiểm tra tốc độ trang web như Google Pagespeed Insights rất khuyến khích cho phép nén GZIP.
Khi một máy chủ web nhận được yêu cầu cho một trang web, máy chủ web sẽ kiểm tra tiêu đề của yêu cầu kiểm tra xem trình duyệt có hỗ trợ GZIP không. Nếu vậy, máy chủ tạo ra đánh dấu cho trang trước khi áp dụng GZIP. GZIP chuyển đổi đánh dấu HTML thành dữ liệu nén sau đó được gửi cho người dùng cuối. Khi người dùng cuối nhận được dữ liệu nén, trình duyệt của họ đã giải nén nó.

## Bật nén gzip trong nginx {#enable-gzip}

Để thay đổi cấu hình nginx gzip, hãy mở tệp cấu hình nginx chính trong _VI_ hoặc trình soạn thảo văn bản yêu thích của bạn:
```
sudo vi /etc/nginx/nginx.conf
```
Tìm phần Cài đặt _GZIP_, trông như thế này:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Như bạn có thể thấy GZIP được bật theo mặc định với _GZIP trên; _ nhưng có những cài đặt GZIP được nhận xét khác.
Chúng tôi có thể bật cài đặt _GZIP_TYPES_ để bật nén trên các loại tệp chúng tôi muốn nén. Ví dụ
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Bây giờ khởi động lại Nginx để có hiệu lực cài đặt mới.

## Xác minh nén GZIP {#verify}

Bây giờ chúng tôi đã kích hoạt nén GZIP, hãy để xác minh nó.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
Phản hồi sẽ giữ nguyên vì nén đã được bật cho kiểu FileType đó:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Phần kết luận {#conclusion}

Trong bài viết này, chúng tôi đã học được rằng bạn có thể sử dụng mô -đun Nginx GZIP để tăng tốc độ chuyển tệp. Chúng tôi đã chỉ cho bạn từng bước làm thế nào để bật nén GZIP trong Nginx bằng mô -đun GZIP. Tài liệu chính thức cho [Mô -đun GZIP][7] liệt kê các chỉ thị cấu hình khác mà bạn có thể muốn xem xét. Hy vọng hướng dẫn này giúp bạn tối ưu hóa hiệu suất và tốc độ trang web của bạn.

## Khám phá
  * [Cách cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu][8]
  * [Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược][9]



[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
