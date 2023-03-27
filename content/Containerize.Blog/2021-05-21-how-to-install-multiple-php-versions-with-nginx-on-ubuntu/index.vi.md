---
title: "Cách cài đặt nhiều phiên bản PHP với nginx trên Ubuntu" 
seoTitle: "Cách cài đặt nhiều phiên bản PHP với nginx trên Ubuntu" 
description: "Bài viết giải thích cách cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu. Chúng tôi sẽ đi qua các hướng dẫn từng bước về cách cài đặt PHP với NGINX." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Nếu bạn đang tìm cách sử dụng nhiều phiên bản PHP với NGINX thì trong bài viết này, chúng tôi sẽ hướng dẫn bạn từng bước về cách cài đặt PHP với NGINX trên Ubuntu." 
url: /vi/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP với nhiều phiên bản php nginx">}}


## Nếu bạn đang tìm cách sử dụng nhiều phiên bản PHP với NGINX thì trong bài viết này, chúng tôi sẽ hướng dẫn bạn từng bước về cách cài đặt PHP với NGINX trên Ubuntu.
Bài viết này là tiếp tục của loạt bài của chúng tôi về các hướng dẫn về Nginx. Cho đến nay, chúng tôi đã đề cập đến cách sử dụng Nginx làm bộ cân bằng tải, cách sử dụng Nginx làm proxy ngược. Và bây giờ hướng dẫn này bao gồm một câu hỏi đòi hỏi khác, cách sử dụng nhiều phiên bản PHP với NGINX. Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn từng bước về cách cài đặt PHP trên Ubuntu, cách định cấu hình PHP với NGINX và cuối cùng là cách bạn có thể cài đặt nhiều phiên bản PHP với NGINX. Vậy hãy bắt đầu!
  * [Cài đặt Nginx][1]
  * [Cài đặt nhiều phiên bản PHP][2]
  * [Tạo nhiều trang web với PHP][3]
  * [Định cấu hình Nginx để chạy các phiên bản khác nhau cho các trang web][4]
  * [Kết luận][5]

## Cài đặt Nginx {#nginx}

Nginx (được phát âm là động cơ của Cá-X) là một máy chủ web nguồn mở thường được sử dụng làm bộ đệm proxy hoặc http ngược. Nó có sẵn cho Linux miễn phí.
Để cài đặt Nginx, hãy sử dụng lệnh sau:
```
sudo apt update
sudo apt install nginx
```
Sau khi cài đặt hoàn thành, bạn có thể mở ra HTTP: // LocalHost, trong trình duyệt của bạn và bạn đã thiết lập tất cả.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Cài đặt php với nginx">}}


## Cài đặt nhiều phiên bản PHP {#php}

 **PHP** (Từ viết tắt đệ quy cho **PHP: Bộ tiền xử lý siêu văn bản** ) là một ngôn ngữ kịch bản đa năng phổ biến, phổ biến, được sử dụng rộng rãi và phù hợp nhất để phát triển các trang web và các ứng dụng dựa trên web. Đây là ngôn ngữ kịch bản phía máy chủ có thể được nhúng trong HTML.
Hiện tại, có ba phiên bản được hỗ trợ của  **PHP** , tức là  **Php 5.6**  ,  **7.0,**  và  **8.0**  . Có nghĩa là  **Php 5.3**  ,  **5.4,**  và **5.5**  đều đã đến cuối đời; Chúng không còn được hỗ trợ với các bản cập nhật bảo mật. Vì vậy, trước tiên, hãy cài đặt Php 7.0 và PHP 7.2 với PHP-FPM.
Trên thực tế, trước khi chúng ta di chuyển với cài đặt trước tiên cho phép nhấn mạnh rằng Php-FPM là gì.  **PHP-FPM**  (Từ viết tắt của Trình quản lý quy trình FastCGI**) là một triển khai FastCGI thay thế thay thế cực kỳ phổ biến. PHP-FPM bao gồm nhiều tính năng có thể chứng minh có lợi cho các trang web nhận lưu lượng truy cập với khối lượng lớn thường xuyên.
Để cài đặt Php 7.0 và 7.2 trước tiên, bạn sẽ cần thêm kho lưu trữ PHP vào máy chủ của mình để cài đặt nhiều phiên bản PHP. Bạn có thể thêm kho lưu trữ ONDREJ PHP với lệnh sau:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Khi kho lưu trữ được cập nhật, hãy cài đặt Php 7.0, Php 7.2 và PHP-FPM với lệnh sau:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Sau khi cài đặt đã hoàn tất, hãy kiểm tra trạng thái của PHP-FPM bằng lệnh sau:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Tạo nhiều trang web với PHP {#web}

Trang mặc định được đặt trong/var/www/html/vị trí. Bạn có thể đặt các trang tĩnh của mình ở đây hoặc sử dụng máy chủ ảo và đặt vị trí khác
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Tiếp theo, hãy tạo tệp index.php cho SITE1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Bây giờ hãy tạo tệp index.php cho SITE2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Sau đó, thay đổi quyền sở hữu của cả hai trang web thành www-data:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## Định cấu hình Nginx {#configure}

Tiếp theo, bạn sẽ cần tạo một tệp máy chủ ảo Nginx cho DOMAIN SITE1.Containerize.com sử dụng PHP 7.0. Và một cái khác cho Site2.Containerize.com sử dụng PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Thêm các dòng sau:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Bây giờ hãy tạo tệp thứ hai cho Site2.Containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Sau đó, bật cả hai tệp máy chủ ảo với lệnh sau:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Cuối cùng, hãy khởi động lại dịch vụ NGINX và PHP-FPM để áp dụng tất cả các thay đổi cấu hình:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## Phần kết luận {#conclusion}

Trong hướng dẫn này, chúng tôi đã khám phá cách làm nhiều phiên bản PHP trên Ubuntu. Chúng tôi đã học cách cài đặt Nginx. Sau đó, chúng tôi đã khám phá cách thiết lập hai trang web khác nhau trong Nginx. Và cuối cùng chúng tôi đã học được cách định cấu hình hai trang web khác nhau với các phiên bản PHP khác nhau với NGINX. Hy vọng hướng dẫn đã giúp bạn.

## Khám phá
  * [Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược][6]
  * [Cách sử dụng Nginx làm bộ cân bằng tải cho ứng dụng của bạn][7]



 [1]: #nginx
 [2]: #php
 [3]: #web
 [4]: #configure
 [5]: #conclusion
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
