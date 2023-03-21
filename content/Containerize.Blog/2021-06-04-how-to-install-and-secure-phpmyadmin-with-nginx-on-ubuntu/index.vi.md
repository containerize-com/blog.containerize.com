---
title: "Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu" 
seoTitle: "Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu" 
description: "PHPMyAdmin là phần mềm quản lý cơ sở dữ liệu nguồn mở được viết bằng PHP. Chúng tôi sẽ học cách cài đặt phpmyadmin với nginx và quản lý mysql thông qua phpmyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PhpMyAdmin là công cụ quản lý cơ sở dữ liệu giao diện web đồ họa nguồn mở được viết bằng PHP. Trong hướng dẫn này, chúng tôi sẽ học cách cài đặt phpmyadmin với nginx." 
url: /vi/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PHPMyAdmin là công cụ quản lý cơ sở dữ liệu giao diện web đồ họa nguồn mở được viết bằng PHP. Trong hướng dẫn này, chúng tôi sẽ học cách cài đặt phpmyadmin với nginx.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu">}}


## **Tổng quan**
PHPMyAdmin là một công cụ quản lý cơ sở dữ liệu nguồn mở và miễn phí, cung cấp cho người dùng giao diện web để quản lý các máy chủ MYSQL hoặc MARIADB thông qua giao diện trực quan. Đây là một trong những phần mềm được hỗ trợ rộng rãi được cung cấp bởi hầu hết các nhà cung cấp dịch vụ lưu trữ phổ biến để cho phép các quản trị viên web tạo cơ sở dữ liệu trong phpmyadmin và quản lý cơ sở dữ liệu, thực hiện các statators SQL, nhập và xuất dữ liệu một cách dễ dàng. Bạn sẽ có thể truy cập cơ sở dữ liệu MySQL hoặc MariaDB của mình bằng phpmyadmin với NGINX thông qua giao diện web đồ họa một cách dễ dàng, chạy cùng với môi trường phát triển PHP.
Trong hướng dẫn này, chúng tôi sẽ mô tả các bước cách cài đặt và bảo mật phpmyadmin với NGINX trên Ubuntu 20.04. Bạn sẽ cần cài đặt và định cấu hình phpmyadmin trên máy chủ Ubuntu để cho phép nó hoạt động với cơ sở dữ liệu và bảng của MySQL một cách dễ dàng. Vì vậy, hãy để Lừa học cách cài đặt và bảo mật phpmyadmin với NGINX trên Ubuntu 20.04 / 20.10:
  * Điều kiện tiên quyết
  * Cài đặt phpmyadmin
  * Định cấu hình cơ sở dữ liệu
  * Tạo liên kết tượng trưng
  * Truy cập phpmyadmin
  * Tạo siêu người dùng MySQL
  * Phpmyadmin an toàn
  * Phần kết luận

## Bước 1: Điều kiện tiên quyết   {#id-Prerequisites}
Để làm theo hướng dẫn này, bạn sẽ cần máy chủ Ubuntu 20.04 chạy trên máy tính cục bộ của bạn hoặc trên một máy chủ từ xa với các điều kiện tiên quyết.
  * Bạn nên truy cập vào máy chủ với tư cách là người dùng không root với các đặc quyền sudo và bật tường lửa UFW.
  * Giả sử rằng bạn đã cài đặt Nginx, MySQL và PHP trên Ubuntu.
  * Vì PHPMyAdmin sử dụng thông tin đăng nhập MySQL để xác thực nên bạn cũng nên cài đặt chứng chỉ SSL/TLS để cho phép lưu lượng được mã hóa giữa máy chủ và máy khách.
Không có cách nào, hãy để bắt đầu cài đặt và bảo mật phpmyadmin để kết nối với máy chủ MySQL để truy cập cơ sở dữ liệu thông qua giao diện web.

## Bước 2: Cài đặt phpmyadmin   {#id-1-install-phpmyadmin}
Hãy chắc chắn rằng bạn đã cài đặt thành công tất cả các điều kiện tiên quyết trên hệ thống của mình trước khi cài đặt phpmyadmin trên Ubuntu 20.04. Bắt đầu bằng cách cập nhật danh sách các gói:
```
sudo apt update 
```
Bây giờ, hãy chạy lệnh sau để cài đặt gói PHPMyAdmin từ kho lưu trữ Ubuntu mặc định trên Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Nhấn  **y **  và  **Enter **  Khi được yêu cầu tiếp tục. Nếu bạn được nhắc chọn một máy chủ web, vì không có tùy chọn cho  **nginx **  như bên dưới, nhấn Tab  **để chọn OK và sau đó **  nhập ** để tiếp tục mà không cần chọn máy chủ web.

{{< figure align=center src="images/mysql-setup.png" alt="Cài đặt và bảo mật phpmyadmin cho Nginx trên Ubuntu 20.04">}}


## Bước 2: Định cấu hình cơ sở dữ liệu   {#id-1-install-phpmyadmin}
Tiếp theo, chọn  **Có **  và nhấn  **Enter **  để cài đặt và thiết lập cơ sở dữ liệu bằng cách sử dụng công cụ DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Cách cấu hình MySQL với phpmyadmin">}}

Mật khẩu ứng dụng MySQL được PHPMyAdmin sử dụng nội bộ để liên lạc với cơ sở dữ liệu MySQL. Nhập mật khẩu mới cho phpmyadmin DBMS để đăng ký làm cơ sở dữ liệu mới, chọn OK và nhấn Enter để tiếp tục.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Cách cấu hình MySQL cho phpmyadmin">}}

Bạn sẽ được nhắc xác nhận mật khẩu, nhập cùng một mật khẩu, chọn  **ok **  và nhấn  **enter ** . Chúc mừng! PHPMyAdmin đã được cài đặt thành công trên hệ thống của bạn.

## Bước 4: Tạo liên kết tượng trưng   {#id-2-create-symbolic-link}
Có một số cách để định cấu hình Nginx để phục vụ các tệp phpmyadmin. Nếu khối máy chủ miền của bạn đã được thiết lập để phục vụ các yêu cầu PHP thì bạn phải tạo một liên kết tượng trưng từ các tệp cài đặt PhpMyAdmin nginx/usr/share/phpmyadmin đến thư mục gốc tài liệu tên miền của bạn. Vị trí mặc định của root tài liệu nginx trong Ubuntu 20.04/20.10 phải là/var/www/html/và nó có thể khác nhau tùy thuộc vào thiết lập INS của bạn. Root tài liệu của bạn có thể được đặt ví dụ trong /var/www/example.com/public_html.
Tiếp theo, chúng tôi sẽ tạo một liên kết tượng trưng từ thư mục phpmyadmin/usr/share/phpmyadmin đến gốc tài liệu của bạn. Ở đây chúng tôi sẽ giả sử rằng root tài liệu của chúng tôi là/var/www/html/và chúng tôi chỉ cần thêm phpmyadmin vào cuối của điều này. Điều này sẽ cho phép chúng tôi truy cập phpmyadmin tại url example.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Bước 5: Truy cập phpmyadmin   {#id-3-test-phpmyadmin}
Bây giờ bạn sẽ có thể truy cập giao diện web PHPMyAdmin bằng cách truy cập máy chủ/tên miền máy chủ hoặc địa chỉ IP công khai của bạn theo tên domain.com/phpmyadmin trong trình duyệt web yêu thích của bạn. Ví dụ: http://example.com/phpmyadmin hoặc http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
Trên các máy chủ Ubuntu chạy với MySQL 5.7 trở lên, bạn sẽ không thể đăng nhập vào cơ sở dữ liệu phpmyadmin miễn phí bằng tài khoản gốc mặc định MySQL và sẽ gặp lỗi như _ Truy cập bị từ chối cho người dùng ‘root. Thay vào đó, bạn nên tạo một tài khoản Superuser mới chỉ dành cho phpmyadmin. Tiếp theo, chúng tôi sẽ tạo tài khoản gốc MySQL để đăng nhập vào phpmyadmin.

..
Trong thiết bị đầu cuối, hãy bắt đầu bằng cách đăng nhập vào MySQL bằng mật khẩu gốc MySQL của bạn mà bạn có thể đã tạo mật khẩu gốc khi bạn cài đặt cơ sở dữ liệu PHPMyAdmin MySQL lần đầu tiên.
```
sudo mysql -u root -p
```
Sau khi đăng nhập vào MySQL, hãy thêm một siêu người dùng MySQL mới với tên người dùng mà bạn chọn. Trong ví dụ này, chúng tôi đang gọi nó là Yasiradmin. [Bấm vào đây để tạo mật khẩu mạnh][2] và thay thế mới \ _password \ _here bên dưới bằng nó.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Bây giờ, cấp đặc quyền của SuperUser cho người dùng mới Yasiradmin của chúng tôi.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Bây giờ thoát khỏi phiên MySQL. Bây giờ bạn sẽ có thể truy cập phpmyadmin bằng thông tin đăng ký siêu người dùng mới này.

{{< figure align=center src="images/image.png" alt="Cách đăng nhập phpmyadmin trên Ubuntu 20.04">}}

Rất khuyến khích bạn thiết lập một số bảo mật bổ sung cho phpmyadmin để bảo mật phpmyadmin nginx. Bạn sẽ có thể thay đổi và truy cập URL phpmyadmin thành một cái gì đó như URL tối nghĩa.

## Bước 7: an toàn phpmyadmin   {#id-6-secure-phpmyadmin được đề xuất}
Tiếp theo, chúng tôi muốn thiết lập xác thực trong Nginx để cung cấp một lớp bảo mật bổ sung. Bây giờ chúng tôi sẽ cài đặt Apache2-Utils, có thể tạo tệp .htpasswd hoạt động với cả máy chủ nginx và apache2.
```
sudo apt install apache2-utils
```
Sau khi cài đặt, chúng ta có thể tạo tệp .htpasswd. Thay đổi tên người dùng mà bạn chọn. [Tạo mật khẩu][3] và giữ an toàn.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Bây giờ sẽ có một tệp .htpasswd chứa tên người dùng và mật khẩu được mã hóa của bạn. Bạn có thể kiểm tra điều này với lệnh bên dưới:
```
cat /etc/nginx/.htpasswd
```
Bạn sẽ thấy một cái gì đó như tên người dùng: $ APR1SDFSDF4435SDTSKLFWMMG1SFDSDGG4
Bây giờ chúng tôi cần thêm 2 chỉ thị vào tệp cấu hình Nginx của chúng tôi. Vị trí của tệp cấu hình có thể thay đổi tùy thuộc vào cài đặt của bạn, mặc dù đường dẫn tệp mặc định thường là tại/etc/nginx/site-a-available/mặc định. Nếu bạn thiết lập nhiều tên miền thì tệp cấu hình của bạn có thể được đặt ở một nơi nào đó như /etc/nginx/sites-available/example.com
Trong ví dụ này, chúng tôi sẽ giả sử tệp cấu hình nginx là tại/etc/nginx/sites-allo khả dụng/mặc định. Mở tệp để chỉnh sửa nó.
```
sudo nano /etc/nginx/sites-available/default
```
Cuộn xuống và tìm kiếm các khối vị trí và dán vào một khối mới bên dưới chúng với tên của thư mục phpmyadmin bị che khuất của bạn, trong ví dụ này Aspose_hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Lưu tệp và thoát (nhấn Ctrl + X, nhấn Y và sau đó nhấn Enter). Kiểm tra xem tệp Nginx config có hợp lệ không, nếu không máy chủ có thể gặp sự cố khi khởi động lại bằng lệnh chạy.
```
sudo nginx -t
```
Nếu hợp lệ, tải lại Nginx config.
```
sudo service nginx reload
```
Bây giờ khi truy cập ví dụ.com/aspose_hidden, bạn nên được trình bày với một cửa sổ xác thực.

{{< figure align=center src="images/auth3.png" alt="Cách bảo mật phpmyadmin">}}

Bạn đã hoàn thành tất cả với các cài đặt PHPMyAdmin trên máy chủ Ubuntu.

## Kết luận:   {#id-what-next}
Xin chúc mừng, bạn đã cài đặt thành công phpmyadmin với NGINX cho máy chủ Ubuntu 20.04 / 20.10 và hiện có thể quản lý MySQL thông qua PHPMyAdmin. Bây giờ, bạn có thể bắt đầu tạo cơ sở dữ liệu, người dùng, bảng của MySQL, thực hiện truy vấn MySQL và các hoạt động khác.
Nếu bạn có câu hỏi, hãy nói với tôi dưới đây trong phần bình luận.

## Khám phá
Bạn cũng có thể thích các bài viết liên quan hơn dưới đây:
  * [Cách cấu hình Apache dưới dạng proxy ngược cho Ubuntu/Debian][4]
  * [Cách bảo mật và mã hóa Nginx với Let Let mã hóa trên Ubuntu 20.04][5]
  * [Cách định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][6]
  * [Cách thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][7]
  * [Cách cài đặt và định cấu hình Owncloud với Apache trên Ubuntu][8]

  
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
