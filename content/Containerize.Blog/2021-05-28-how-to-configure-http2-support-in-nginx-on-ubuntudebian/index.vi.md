---
title: "Cách định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian" 
seoTitle: "Cách định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian" 
description: "HTTP2 hoặc H2 là giao thức nhị phân và phiên bản cải tiến của giao thức HTTP" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 là một giao thức đa kênh mạnh mẽ để cải thiện tốc độ tải và bảo mật tải trang. Trong hướng dẫn này, chúng tôi sẽ học cách thiết lập Nginx với hỗ trợ HTTP/2." 
url: /vi/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## HTTP/2 là một giao thức đa kênh mạnh mẽ để cải thiện tốc độ tải và bảo mật tải trang. Trong hướng dẫn này, chúng tôi sẽ học cách thiết lập Nginx với hỗ trợ HTTP/2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx cho phép hỗ trợ HTTP2 trên Ubuntu và Debian">}}


## **Tổng quan**
Nginx là một máy chủ web nguồn mở và đáng tin cậy. Nó đã trở nên phổ biến do dấu chân bộ nhớ thấp, cân bằng tải, khả năng mở rộng cao, bộ đệm, hỗ trợ cho phần lớn các giao thức và proxy ngược. Bây giờ, hãy để nói về cách Nginx kích hoạt giao thức HTTP2.
Một trong những giao thức được NGINX hỗ trợ là HTTP/2 được xuất bản vào tháng 5 năm 2015. Ưu điểm chính của HTTP/2 là tốc độ chuyển cao của nó cho các trang web giàu nội dung, giảm tải trên máy chủ web và nó có thể bắt đầu nhiều yêu cầu song song Trong một kết nối TCP duy nhất. Nginx cho phép HTTP2 là phiên bản cải tiến của giao thức HTTP. Trước khi chúng tôi bắt đầu, chúng tôi sẽ cần một vài máy chủ Ubuntu hoặc Debian có chứng chỉ SSL. Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn từng bước về cách nginx cho phép HTTP2 trên Ubuntu.
  * Cập nhật các gói và cài đặt nginx
  * Kích hoạt hỗ trợ HTTP/2
  * Thêm tên máy chủ
  * Thêm chứng chỉ SSL
  * Loại bỏ các mật mã
  * Chuyển hướng tất cả các yêu cầu HTTP sang HTTPS
  * Khởi động lại nginx
  * Phần kết luận

## Bước 1: Cập nhật các gói và cài đặt nginx   {#4597}
Bước đầu tiên là cập nhật và nâng cấp các kho lưu trữ trong hệ thống đóng gói APT. Sử dụng Update sẽ tải xuống các gói phiên bản mới nhất và nâng cấp sẽ cài đặt phiên bản mới nhất của các gói trong danh sách. Chạy lệnh APT dưới đây để cập nhật và nâng cấp các gói.
```
sudo apt-get update && apt-get upgrade
```
Bước tiếp theo là cài đặt phiên bản mới nhất của Gói Nginx. Hỗ trợ cho giao thức HTTP/2 đã được giới thiệu trong Nginx phiên bản 1.9.5 trở lên. Do đó, chúng tôi sẽ phải cài đặt phiên bản mới nhất của gói Nginx. Chạy lệnh Dưới đây Sử dụng Cài đặt APT để cài đặt các gói Nginx:
```
sudo apt-get install nginx
```
Bạn sẽ được nhắc xác nhận quá trình cài đặt từng bước. Chọn tùy chọn Có và kết thúc quá trình cài đặt. Sau khi quá trình cài đặt kết thúc, bước tiếp theo là kiểm tra phiên bản của gói cho dù chúng tôi có cài đặt đúng phiên bản hay không. Bạn có thể kiểm tra phiên bản của máy chủ web nginx bằng lệnh gõ:
```
sudo nginx -v
```
Đầu ra của lệnh kiểm tra phiên bản trên phải tương tự như sau:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Bước 2: Kích hoạt hỗ trợ http/2   {#f4d2}
Sau khi cài đặt gói Nginx, chúng tôi cần bật HTTP2 Nginx. Người dùng phải thay đổi cổng nghe từ 80 thành 443. Hãy để mở tệp cấu hình Nginx:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Bạn có thể thấy giá trị theo mặc định của Nginx được đặt để nghe là cổng 80.
Nghe 80 Default_Server;
Nghe [::]: 80 Default_Server;
Như bạn có thể thấy rằng có hai biến nghe khác nhau. Biến nghe đầu tiên là cho tất cả các kết nối IPv4Connection và biến thứ hai là cho các kết nối IPv6. Chúng tôi sẽ cho phép mã hóa cho cả hai biến. Thay đổi số cổng nghe thành 443 và thêm kết nối SSL cho giao thức HTTPS như được hiển thị bên dưới:
Nghe 443 SSL HTTP2 Default_Server;
Nghe [::]: 443 SSL http2 default_server;
Lưu ý rằng ngoài SSL, chúng tôi cũng đã thêm HTTP2. Nginx hiện có thể sử dụng các trình duyệt hỗ trợ giao thức HTTP/2.

## Bước 3: Thêm tên máy chủ   {#A745}
Bước tiếp theo là thay đổi máy chủ \ _name để tên máy chủ được liên kết với tên miền. Người dùng chỉ cần thay đổi tên máy chủ trong tệp cấu hình. Xác định vị trí mục nhập \ _name trong tệp cấu hình và thay đổi _ thành tên miền thực tế của bạn, như thế này:
```
server_name example.com www.example.com;
```
Lưu tệp cấu hình máy chủ bằng cách chỉnh sửa trong trình soạn thảo văn bản. Bạn có thể kiểm tra cấu hình nginx cho các lỗi cú pháp với lệnh:
```
sudo nginx -t
```
Nếu cú ​​pháp không có lỗi thì bạn sẽ thấy đầu ra dưới đây:
Nginx: Tệp cấu hình /etc/nginx/nginx.conf Cú pháp là OK
Nginx: Tệp cấu hình /etc/nginx/nginx.conf Kiểm tra thành công

## Bước 4: Thêm chứng chỉ SSL   {#37c0}
Bước tiếp theo là bật cấu hình nginx HTTPS để sử dụng chứng chỉ SSL của bạn. Bạn có thể tạo chứng chỉ tự ký hoặc [cài đặt chứng chỉ miễn phí từ Let Let Encrypt][1]. Nếu bạn không có chứng chỉ SSL thì xin vui lòng làm theo hướng dẫn này. Thêm chứng chỉ SSL của bạn bên trong thư mục cấu hình Nginx tương tự như:
```
sudo mkdir /etc/nginx/ssl
```
Sao chép chứng chỉ của bạn và khóa riêng vào vị trí này và cũng thay thế ví dụ.com bằng tên miền thực tế của bạn:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/ssl/example.com.key
Bây giờ mở tệp cấu hình máy chủ nginx một lần nữa. Thêm và định cấu hình các dòng SSL mới bên trong khối Máy chủ Nginx với vị trí chứng chỉ của bạn để bật cấu hình SSL nginx:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/ssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Lưu tệp nginx tệp và thoát trình soạn thảo văn bản.

## Bước 5: Loại bỏ các mật mã   {#D291}
Mật mã là một thuật toán được sử dụng trong mật mã để mã hóa và giải mã dữ liệu. Các bộ mật mã là một loạt các thuật toán mật mã được sử dụng để bảo mật các kết nối mạng. HTTP/2 có một danh sách đen khổng lồ của các mật mã không an toàn cần được loại bỏ. Ở đây chúng tôi sẽ sử dụng một bộ mật mã phổ biến, được phê duyệt bởi Internet Giants Cloudflare.
Mở tệp cấu hình nginx sau /etc/nginx/nginx.conf và thêm các dòng dưới đây chỉ sau ** ssl \ _prefer \ _server_ciphers trên.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Bạn có thể đặt GZIP thành TẮT và thêm proxy \ _Max \ _Temp \ _File \ _Size 0; Để tránh err \ _http2 \ _protocol_error nginx lỗi.

## Bước 6: Chuyển hướng tất cả các yêu cầu HTTP sang https   {#b387}
Bây giờ chúng ta nên nói với NGINX HTTP2 Proxy những gì nó chỉ nên phục vụ nội dung thông qua HTTPS chỉ khi máy chủ nhận được yêu cầu HTTP. Cuối cùng, bỏ qua các dòng được nhận xét, tệp cấu hình nginx của bạn /etc/nginx/sites-available/domain-name.com sẽ trông tương tự như thế này:
Máy chủ {Nghe 443 SSL HTTP2 Default_Server; Nghe [::]: 443 SSL http2 default_server; root/var/www/html; index index.html index.htm index.nginx-debian.html; server_name example.com; ; } ssl_certificate /etc/nginx/ssl/example.com.crt; Nghe [::]: 80; server_name ví dụ.com; Trả về 301 https: // $ server_name $ request_uri;}
Lưu tệp /etc/nginx/sites-available/domain-name.com và sau đó thoát. Kiểm tra các cấu hình để biết lỗi cú pháp:
```
sudo nginx -t
```

## Bước 7: Khởi động lại nginx   {#e687}
Để áp dụng tất cả các thay đổi, hãy khởi động lại máy chủ proxy ngược HTTP2 và kiểm tra trạng thái cấu hình.
sudo systemctl khởi động lại nginx
sudo systemctl status nginx

## **Kết luận:** {#4A1A}
Xin chúc mừng, bạn đã học được thành công cách thiết lập hỗ trợ HTTP2 HTTP2 trên máy chủ Ubuntu. Cài đặt nginx http2 của bạn hiện đang phục vụ các trang HTTP/2 và nó cũng xóa sự khác biệt giữa các giao thức HTTP/1 và HTTP/2. Nếu bạn vẫn phải đối mặt với bất kỳ vấn đề cấu hình nào, hãy cho chúng tôi biết trong phần bình luận.
Bạn có bất kỳ câu hỏi nào về giao thức ghép kênh HTTP2 không? _, PLEL_ [liên hệ][2].

## Khám phá
Bạn cũng có thể thích các bài viết dưới đây:
  * [Cách cấu hình Apache dưới dạng proxy ngược cho Ubuntu/Debian][3]
  * [Làm thế nào để][3][Cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][4]
  * [Cách thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][5]
  * [An toàn và mã hóa Nginx với Let Let Mã hóa trên Ubuntu 20.04][1]
  * [Cách cài đặt và định cấu hình Owncloud với Apache trên Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
