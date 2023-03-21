---
title: "Hướng dẫn thiết lập cho Stack Lemp trên Ubuntu 18.04" 
seoTitle: "Hướng dẫn thiết lập cho Stack Lemp trên Ubuntu 18.04" 
description: "Ngăn xếp LEMP là một ngăn xếp phần mềm được sử dụng để phát triển và triển khai các ứng dụng web. Tìm hiểu cách cài đặt Nginx, MySQL và PHP trên Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Cài đặt & amp; Định cấu hình ngăn xếp LEMP để phát triển và triển khai các ứng dụng web. Hướng dẫn này sẽ hỗ trợ bạn cài đặt Nginx, MySQL và PHP trên Ubuntu 18.04." 
url: /vi/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Cài đặt & Định cấu hình ngăn xếp LEMP để phát triển và triển khai các ứng dụng web. Hướng dẫn này sẽ hỗ trợ bạn cài đặt Nginx, MySQL và PHP trên Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Cài đặt ngăn xếp Lemp trên Ubuntu">}}


## Tổng quan   {#Prerequisites}
Trong hướng dẫn này, chúng tôi sẽ cài đặt NGINX, MySQL và PHP (LEMP Stack) để phát triển và triển khai các ứng dụng web. Chúng tôi cũng sẽ định cấu hình một máy chủ web đến ứng dụng PHP máy chủ trên máy chủ Ubuntu 18.04. Chúng tôi sẽ bao gồm các phần sau trong hướng dẫn này.
  *[ **Điều kiện tiên quyết** ][1]
  *[ **STACK LEMP là gì?** ][2]
  *[ **Cài đặt Lemp** ][3]
  *[ **Kết luận** ][4]

## Điều kiện tiên quyết   {#Prerequisites}
Trước khi cài đặt phần mềm, bạn nên đáp ứng các yêu cầu sau.
  * Máy chủ có hệ điều hành Ubuntu
  *Người dùng không root với  **sudo**  đặc quyền

## Lemp Stack là gì?   {#Cái gì}
**LEMP Stack** là một tập hợp phần mềm có thể được sử dụng để chạy các ứng dụng web dựa trên PHP. LEMP là viết tắt của Linux, Nginx, MySQL và PHP. Ngăn xếp LEMP là một biến thể của ngăn xếp đèn. Cả LAMP và LEMP đều là các ngăn xếp phần mềm phổ biến để phát triển và triển khai các ứng dụng web. Có một sự khác biệt giữa hai ngăn xếp phần mềm này. LAMP sử dụng máy chủ web Apache, trong khi máy chủ LEMP sử dụng máy chủ web Nginx.

## Cài đặt LEMP   {#installation}
Trong phần này, chúng tôi sẽ tập trung vào cách cài đặt Nginx, MySQL và PHP trên Ubuntu 18.04. Trước hết, chúng tôi cần cập nhật các gói máy chủ bằng cách chạy lệnh bên dưới.
```
$ sudo apt update
```

### Cài đặt máy chủ web nginx
  *Chạy lệnh bên dưới để  **Cài đặt nginx trên ubuntu** .
```
$ sudo apt install nginx
```
  * Sau khi bạn thực hiện cài đặt Nginx, hãy mở trình duyệt web của bạn và nhập địa chỉ IP máy chủ của bạn. Nó sẽ hiển thị cho bạn trang Chào mừng mặc định Web Server.

{{< figure align=center src="images/nginx-home-1.png" alt="Trang máy chủ web nginx trang mặc định">}}


### Cài đặt MySQL
Bây giờ, bạn cần cài đặt máy chủ cơ sở dữ liệu MySQL để quản lý dữ liệu ứng dụng của bạn.
  *Chạy lệnh bên dưới để  **Cài đặt MySQL trên Ubuntu** .
```
$ sudo apt install mysql-server
```
  * Để bảo mật cài đặt MySQL, hãy chạy lệnh sau.
```
$ sudo mysql_secure_installation
```
  *Bạn sẽ được yêu cầu hoặc bạn muốn bật  **Xác thực plugin mật khẩu**  hoặc không. Nó tốt hơn để không kích hoạt nó như vậy, nhập N và nhấn Enter để di chuyển bước tiếp theo.
  * Tiếp theo, nó sẽ hỏi bạn một vài câu hỏi như được hiển thị dưới đây. Bạn cần trả lời tất cả các câu hỏi.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Bây giờ, máy chủ MySQL đang hoạt động. Bạn có thể kiểm tra nó với lệnh sau. Nhập mật khẩu tài khoản gốc Ubuntu của bạn, không phải là MySQL trong trường hợp nó được nhắc nhập mật khẩu.
```
$ sudo mysql
```
  * Nhập lệnh bên dưới để thoát khỏi MySQL.
```
mysql> exit
```

### Đang cài đạt PHP
Chúng tôi sẽ bao gồm việc cài đặt PHP-FPM để xử lý PHP. PHP-FPM là viết tắt của Trình quản lý quy trình FastCGI. Máy chủ web nginx không có bất kỳ chức năng tích hợp nào để xử lý PHP vì vậy, chúng tôi sẽ sử dụng PHP-FPM cho nó. Ngoài ra, chúng tôi sẽ cài đặt PHP-MYSQL để giao tiếp PHP với MySQL để quản lý dữ liệu.
  *Chạy lệnh bên dưới để  **Cài đặt PHP trên Ubuntu** .
```
$ sudo apt install php-fpm php-mysql
```
  * Bây giờ, bạn đã hoàn thành việc cài đặt PHP và tất cả các phần mềm cần thiết của ngăn xếp LEMP để chạy ứng dụng web.
  * Trong bước này, chúng tôi sẽ tạo tệp cấu hình NGINX để cho Nginx sử dụng bộ xử lý PHP cho nội dung động. Chạy lệnh bên dưới để tạo tệp cấu hình nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Sao chép mã vào tệp Cấu hình Nginx và lưu nó.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Hãy để xem xét ngắn gọn về các chỉ thị và khối vị trí này, vì vậy bạn có thể có thông tin cơ bản.
      * **Nghe** : Bạn có thể xác định cổng cho Nginx. Sử dụng cổng 80 cho HTTP và 443 cho các giao thức HTTPS.
      * **Root** : Xác định thư mục gốc cho dự án của bạn. Nginx sẽ sử dụng nó để phục vụ trang web hoặc ứng dụng web.
      * **INDEX** : Xác định thứ tự trong đó các tệp sẽ được phục vụ. Khi tệp chỉ mục được gọi, Nginx sẽ cung cấp tệp index.php.
      * **server_name** : Xác định tên miền hoặc IP công khai của máy chủ của bạn.
      ***Vị trí /**: Khối vị trí này có ** Try_Block**  Chỉ thị và khớp với URI được yêu cầu. Nginx trả về lỗi 404, nếu nó không tìm thấy tệp được yêu cầu.
      * **Vị trí ~ .php $** : Khối vị trí này xử lý việc xử lý PHP.
      ***Vị trí ~ /.ht**: Nginx không xử lý **. Htaccess  **Tệp và vị trí này chặn đối phó với nó. Nginx không phục vụ tệp .htaccess bằng cách xác định**   từ chối tất cả** Chỉ thị.
  * Tạo Symlink cho tệp Cấu hình NGINX mới được tạo để bật nó.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Chạy lệnh sau để kiểm tra tệp cấu hình nginx cho lỗi cú pháp.
```
$ sudo nginx -t
```
  * Khởi động lại máy chủ web Nginx.
```
$ sudo systemctl restart nginx
```

### Kiểm tra PHP
  * Để đảm bảo nginx phục vụ chính xác các trang PHP, chúng tôi sẽ tạo tệp PHP để kiểm tra các cấu hình.
  * Tạo tệp Info.php trong thư mục gốc của máy chủ web nginx bằng cách chạy lệnh bên dưới.
```
$ sudo nano /var/www/html/info.php
```
  * Thêm mã dưới đây vào đó và lưu tệp.
```
<?php
phpinfo();
```
  * Mở trình duyệt web của bạn và nhập tên miền hoặc máy chủ công khai IP theo sau là tên tệp PHP như http: // server \ _ip \ _or_domain/info.php. Bạn sẽ thấy trang dưới đây.

{{< figure align=center src="images/info-php.png" alt="Trang thông tin PHP">}}


## Kết luận   {#conclusion}
Trong hướng dẫn này, chúng tôi đã thảo luận về cách cài đặt và định cấu hình  **Lemp Stack** . Như bạn có thể thấy, việc định cấu hình các thành phần ngăn xếp phần mềm thực sự dễ dàng. Ngoài ra, bạn có thể bắt đầu tạo và phục vụ các ứng dụng web trong vài phút.
Cuối cùng, [**containerize.com **][5] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với ngăn xếp giải pháp máy chủ web này** ][6] cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  *[ **ngăn xếp giải pháp máy chủ web nguồn mở tốt nhất** ][7]
  * **[Công cụ pháp y kỹ thuật số nguồn mở phổ biến nhất][8]**
  * **[Top 5 phần mềm hàng đợi thông báo nguồn mở (MQ) vào năm 2021][9]**
  * **[Phần mềm chia sẻ tệp và lưu trữ đám mây nguồn mở tốt nhất][10]**
  *[ **Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu** ][11]
  *[ **Cách cài đặt nhiều phiên bản PHP với nginx trên ubuntu** ][12]
  *[ **Top 5 giấy phép nguồn mở được OSI-phê duyệt phổ biến nhất là 2021** ][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
