---
title: "Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket" 
seoTitle: "Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket" 
description: "Quản lý tất cả các yêu cầu hỗ trợ của bạn ở một nơi bằng bàn trợ giúp Osticket. Chuyển đổi các yêu cầu được tạo qua email, điện thoại và các biểu mẫu thành vé dựa trên web." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Quản lý tất cả các yêu cầu hỗ trợ của bạn ở một nơi bằng Osticket. Chuyển đổi các yêu cầu được tạo qua email, điện thoại và biểu mẫu thành vé dựa trên web đơn giản." 
url: /vi/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Quản lý tất cả các yêu cầu hỗ trợ của bạn ở một nơi bằng Osticket. Chuyển đổi các yêu cầu được tạo qua email, điện thoại và biểu mẫu thành vé dựa trên web đơn giản.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket">}}

Osticket là một giải pháp phần mềm bàn trợ giúp trực tuyến nguồn mở. Osticket Helpdesk là một giải pháp thay thế miễn phí cho các hệ thống hỗ trợ khách hàng chi phí cao và phức tạp. Nó đơn giản, nhẹ, đáng tin cậy, dựa trên web và dễ thiết lập và sử dụng. Phần tốt nhất là, nó hoàn toàn miễn phí. Chúng tôi sẽ bao gồm các phần sau trong hướng dẫn này:
  * [Osticket là gì?][1]
  * [Ưu và nhược điểm của Osticket][2]
  * [Làm thế nào để thiết lập Osticket?][3]
  * [Kết luận][4]

## Osticket là gì?   {#osticket}
Osticket cung cấp một bảng điều khiển thân thiện với người dùng và thành phần báo cáo thời gian thực. Người dùng chỉ có thể đăng nhập và tạo vé trong một vài bước dễ dàng. Họ có thể tạo vé thông qua trang web, email hoặc điện thoại của bạn. Vé đến sau đó sẽ được lưu và gán cho các đại lý. Đại lý sẽ nhận được thông báo email và sẽ trả lời các truy vấn để giúp giải quyết các vấn đề của họ. Khách hàng và đại lý có thể thảo luận chi tiết và tiến bộ trong phần bình luận. Khách hàng có thể theo dõi các yêu cầu và tiến trình của họ thông qua cổng thông tin khách hàng tích hợp được cung cấp bởi phần mềm bàn trợ giúp trực tuyến này.

## Ưu và nhược điểm của Osticket   {#Pros}

## ## Ưu điểm
  * Osticket cực kỳ thân thiện với người dùng cho cả người dùng cuối và đại lý hỗ trợ.
  * Được đóng gói với các tính năng phong phú, Osticket có mọi thứ bạn cần mà không quá phức tạp.
  * Osticket hoàn toàn miễn phí và phần mềm quản lý vé nguồn mở.
  * Nó là nhẹ, an toàn, đáng tin cậy và dễ dàng cài đặt phần mềm quản lý bàn trợ giúp.
  * Thật linh hoạt khi chạy trên tất cả các máy chủ web phổ biến bao gồm Apache, Nginx, LightTPD và IIS, v.v.

## ## nhược điểm
  * Osticket không cung cấp chi tiết phân tích vé và số liệu thống kê như các hệ thống bàn trợ giúp trả phí khác.
  * Giao diện người dùng của nó rất đơn giản và cơ bản khi so sánh với các hệ thống hỗ trợ khác.

## Làm thế nào để cài đặt Osticket?   {#Làm sao}
Thực hiện theo các bước này để cài đặt Osticket với Nginx trên Ubuntu 18.04 LTS.
  * Tạo một thư mục mới cho Osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Tải xuống thiết lập Osticket mới nhất bằng cách sử dụng các lệnh sau.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Sau đó, hãy tạo tệp cấu hình từ tệp mẫu bằng các lệnh này.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Sau đó, thay đổi quyền sở hữu của thư mục web Osticket thành người dùng và nhóm www-data.
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Sau đó, tạo tệp cấu hình máy chủ ảo mới.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Sau đó, dán mã cấu hình vào nó.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Thay đổi tên máy chủ theo tên miền của bạn. Lưu file và thoát.
  * Bây giờ liên kết tệp máy chủ ảo này với thư mục hỗ trợ trang web bằng cách sử dụng lệnh sau
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Kiểm tra bất kỳ lỗi cấu hình nào bằng lệnh sau
```
nginx -t
```
  * Bây giờ khởi động lại dịch vụ Nginx bằng lệnh sau
```
sudo systemctl restart nginx

```
  * Bây giờ hãy nhập tên miền của bạn vào bất kỳ trình duyệt web nào để bắt đầu Trình hướng dẫn cài đặt như trong hình sau đây

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket">}}

  * Kích hoạt các tiện ích mở rộng cần thiết từ php.ini và nhấp vào Tiếp tục.
* Điền vào tất cả thông tin cần thiết và nhấp vào nút**Cài đặt ngay bây giờ**nút**.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket">}}

  * Trong cài đặt cơ sở dữ liệu, nhập dbname, tên người dùng và mật khẩu.
  * Cuối cùng nhấp vào nút Cài đặt ngay bây giờ
  * Sau khi cài đặt hoàn tất, nó sẽ hiển thị trang với thông báo thành công.
  * Tiếp theo, thay đổi quyền của OST-config.php để xóa truy cập ghi bằng cách chạy lệnh sau:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Kết luận   {#conclusion}
Osticket phù hợp nhất cho các công ty có ngân sách thấp hoặc những người muốn có một hệ thống bàn trợ giúp đơn giản chứ không phải là một hệ thống phức tạp. Nó đơn giản, nhẹ, đáng tin cậy, nguồn mở và phần mềm bàn trợ giúp trực tuyến hoàn toàn miễn phí. Điều này làm cho Osticket trở thành một sự thay thế tuyệt vời cho các hệ thống hỗ trợ khách hàng chi phí cao hơn. Để tìm hiểu thêm về các tính năng của Osticket và hướng dẫn cài đặt, vui lòng xem hướng dẫn sau đây.

## Khám phá
[Nguồn mở tốt nhất và phần mềm bàn trợ giúp CNTT miễn phí][5]
[Hệ thống chăm sóc khách hàng và trợ giúp dựa trên vé miễn phí phổ biến][6]
[Hướng dẫn dành cho người mới bắt đầu để phát triển plugin Osticket][7]
[Cách thực hiện nhiều người thuê trong Osticket][8]
[Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
