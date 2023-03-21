---
title: "Cách thiết lập máy chủ thư bằng Postal trên Ubuntu" 
seoTitle: "Cách thiết lập máy chủ thư bằng Postal trên Ubuntu" 
description: "Gửi email từ các ứng dụng web của bạn với máy chủ thư nguồn mở. Bưu điện cho phép bạn gửi email bằng API SMTP & HTTP và cũng theo dõi lưu lượng truy cập email." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Gửi và nhận email với một máy chủ thư nguồn mở. Bài viết này sẽ hỗ trợ bạn cài đặt và định cấu hình máy chủ thư bưu chính cho công ty của bạn." 
url: /vi/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Gửi và nhận email với một máy chủ thư nguồn mở. Bài viết này sẽ hỗ trợ bạn cài đặt và định cấu hình máy chủ thư bưu chính cho công ty của bạn.

{{< figure align=center src="images/postal-banner.png" alt="Máy chủ thư nguồn mở">}}

Gửi email về các loại sự kiện khác nhau là cần thiết cho các ứng dụng hiện đại. Mỗi doanh nghiệp cần một máy chủ thư **đáng tin cậy  **cho các email gửi đi. Hơn nữa, các công ty cần một máy chủ thư để gửi email số lượng lớn cho các chiến dịch tiếp thị, bản tin và nhiều nhiệm vụ khác. Có một số máy chủ thư nguồn mở **  có sẵn cho việc này. Tuy nhiên, chúng tôi sẽ thảo luận chi tiết về máy chủ ****  trong bài đăng này và bao gồm các chủ đề sau.
  * [Máy ​​chủ thư bưu chính là gì?][1]
  * [Các tính năng của Bưu điện][2]
  * [Cài đặt bưu chính][3]
  * [Kết luận][4]

## Máy chủ thư bưu chính là gì?   {#Thuộc về bưu điện}
[**Bưu điện **][5] là một máy chủ thư nguồn mở miễn phí và  **** . Nó là một máy chủ thư đầy đủ tính năng cho các trang web và ứng dụng web. Máy chủ thư bưu điện là một giải pháp thay thế cho máy chủ  **mail phổ biến hiện có **  như SendGrid và MailGun.  **Bưu điện **  là một nền tảng gửi email nguồn mở mạnh mẽ, an toàn và có thể mở rộng. Tất cả các mã nguồn và tài liệu có sẵn tại [ **GitHub ** ][6]. Bạn có thể tải xuống, cài đặt nó trên máy chủ riêng của bạn và kiểm soát hoàn toàn nó. Bạn cũng có thể cải thiện và tăng cường nó theo nhu cầu kinh doanh. Ngoài ra, ** Máy chủ thư bưu chính**  hỗ trợ nhiều tổ chức.
Người dùng có thể xem đồ thị và số liệu thống kê hiển thị khối lượng thư đến và gửi đi. Ngoài ra, bạn có thể truy cập vào hàng đợi tin nhắn và gửi đầy đủ. Máy chủ thư bưu điện cung cấp chức năng cho webhooks. Bạn có thể thiết lập webhooks để nhận thông tin trực tiếp về thông tin giao hàng trong thời gian thực. Nó cũng cung cấp lưu giữ tin nhắn cho phép bạn lưu trữ và kiểm tra tất cả các tin nhắn gửi và nhận. Gửi email là rất quan trọng trong doanh nghiệp để đảm bảo rằng người dùng nhận được email. Tuy nhiên, đôi khi email không gửi cho người dùng và bạn phải điều tra vấn đề. Máy chủ thư  **đến và gửi đi**  cũng cung cấp ghi nhật ký và công cụ hoàn chỉnh để thực hiện điều tra.

## Các tính năng của Bưu chính   {#Features}
Máy chủ thư bưu điện cung cấp rất nhiều tính năng. Tuy nhiên, chúng tôi sẽ thảo luận về các tính năng chính sau trong bài viết này.
**Gửi email**: Máy chủ thư bưu điện cung cấp hai kỹ thuật cho các email gửi đi bao gồm API HTTP và SMTP. Bạn có thể dễ dàng sử dụng API HTTP để tích hợp với các ứng dụng web. Bạn cũng có thể sử dụng máy chủ SMTP để tích hợp với các ứng dụng và hệ thống hiện có.
**Email đến **: **Thư đến  **có thể được chuyển tiếp đến điểm cuối HTTP,**   Máy chủ SMTP** và các địa chỉ email khác bằng máy chủ thư bưu chính.
**Kiểm tra spam và virus**: Spamassassin và Clamav có thể được tích hợp với bưu chính để tự động quét các tin nhắn đến và đi khi chúng đi qua các máy chủ thư. Tính năng này cũng bị tắt theo mặc định.
**Nhấp và mở theo dõi**: Mở email và nhấp chuột có thể được theo dõi với Bưu điện. Bưu điện sẽ quét các tin nhắn gửi đi của bạn và thay thế bất kỳ liên kết nào bằng một liên kết mới đi qua máy chủ web bưu chính của bạn. Khi người dùng nhấp vào liên kết, Bưu điện ghi lại hành động và ngay lập tức chuyển hướng chúng đến URL ban đầu. Tuy nhiên, điều này không được kích hoạt theo mặc định.
**Nhóm IP**: Bưu điện cho phép bạn gửi tin nhắn từ nhiều địa chỉ IP khác nhau. Điều này cho phép bạn gán nhiều địa chỉ IP cho các máy chủ thư khác nhau hoặc gửi từ các IP khác nhau tùy thuộc vào địa chỉ người gửi hoặc người nhận.

## Cài đặt bưu chính   {#installation}
Thực hiện theo hướng dẫn từng bước dưới đây để cài đặt phần mềm máy chủ thư  **mail**  trên Ubuntu 18.04.
  * Đầu tiên, bạn cần kết nối máy chủ của bạn Vis SSH. Chạy lệnh sau để cập nhật hệ thống với các gói có sẵn mới nhất.
```
sudo apt-get update
```

### Cài đặt máy chủ cơ sở dữ liệu Mariadb
  * Chạy lệnh để cài đặt Mariadb.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Sau khi bạn hoàn thành việc cài đặt. Bây giờ, bạn cần bảo mật nó bằng cách chạy lệnh dưới đây.
```
mysql_secure_installation
```
  * Tiếp theo, nó sẽ hỏi bạn một vài câu hỏi như được hiển thị dưới đây. Bạn cần trả lời tất cả các câu hỏi.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Kết nối với máy chủ Mariadb với lệnh sau.
```
mysql -u root -p
```
  * Tạo một cơ sở dữ liệu cho bưu chính.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Tiếp theo, tạo người dùng cơ sở dữ liệu có tên là "Postaluser" với mật khẩu mới.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Sau đó, hãy cấp cho người dùng quyền truy cập đầy đủ vào cơ sở dữ liệu Postaluser ".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Tiếp theo, xóa các đặc quyền và thoát khỏi vỏ mariadb với lệnh sau.
```
FLUSH PRIVILEGES;
EXIT;
```

### Cài đặt Ruby
  * Đầu tiên, thêm PPA của bên thứ ba để cài đặt Ruby. Chạy các lệnh sau.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Cập nhật các gói Ubuntu.
```
sudo apt update
```
  * Cài đặt Ruby bằng cách chạy lệnh bên dưới.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Cài đặt Rabbitmq
  * Erlang được yêu cầu cài đặt RabbitMQ, vì vậy, bạn cũng cần cài đặt nó. Thêm khóa kho Erlang vào Ubuntu với lệnh bên dưới.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Tiếp theo, thêm kho lưu trữ Erlang với lệnh sau.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Chạy các lệnh sau để cài đặt Erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Khi bạn đã hoàn tất việc cài đặt Erlang, bạn có thể tiến hành cài đặt RabbitMQ. Thêm kho lưu trữ RabbitMQ vào Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Thêm khóa GPG RabbitMQ với lệnh sau.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Chạy các lệnh bên dưới để cài đặt gói RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Chạy lệnh bên dưới để bật RabbitMQ, vì vậy nó luôn bắt đầu khi hệ thống khởi động.
```
sudo systemctl enable rabbitmq-server
```
  * Tiếp theo, bạn sẽ cần phải tạo RabbitMQ Vhost và người dùng cho Bưu điện. Chạy lệnh sau cho nó.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Cài đặt NodeJS
  * Thêm kho lưu trữ NodeJS với lệnh sau.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Tiếp theo, chạy lệnh bên dưới để cài đặt NodeJS.
```
sudo apt-get install nodejs
```

### Cài đặt máy chủ thư bưu điện
  * Đầu tiên, bạn cần tạo người dùng cho máy chủ thư bưu chính. Tạo nó với lệnh sau.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Tiếp theo, cho phép Ruby nghe trên các cổng web.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Cài đặt tất cả các viên đá quý cần thiết với các lệnh sau.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Tạo một cấu trúc thư mục cho bưu chính.
```
sudo mkdir -p /opt/postal/app
```
  * Tiếp theo, tải về phiên bản mới nhất của Bưu điện.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Trích xuất tệp đã tải xuống với lệnh sau.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Tiếp theo, thay đổi quyền sở hữu của thư mục bưu chính.
```
sudo chown -R postal:postal /opt/postal
```
  * Tạo một Symlink cho nhị phân bưu chính bằng cách chạy lệnh bên dưới.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Cài đặt tất cả các phụ thuộc cần thiết.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Chạy lệnh bên dưới để khởi tạo cấu hình bưu chính.
```
sudo postal initialize-config
```
  * Tiếp theo, chạy lệnh sau để mở tệp cấu hình bưu chính.
```
sudo nano /opt/postal/config/postal.yml
```
  * Thực hiện các thay đổi được chỉ định trong in đậm và lưu tệp.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * Lệnh chạy để khởi tạo cơ sở dữ liệu.
```
sudo postal initialize
```
  * Tạo người dùng quản trị cho Bưu điện.
```
sudo postal make-user
```
  * Tiếp theo, bạn sẽ cần cung cấp chi tiết tài khoản người dùng như hiển thị bên dưới.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :*********

User has been created with e-mail address admin@example.com
```
  * Cuối cùng, chạy lệnh sau để bắt đầu và kiểm tra trạng thái của ứng dụng bưu chính.
```
sudo -u postal postal start
sudo -u postal postal status
```

### Cài đặt nginx
  * Chạy lệnh bên dưới để cài đặt máy chủ web nginx.
```
sudo apt install nginx
```
  * Tiếp theo, sao chép Cấu hình nginx bưu chính để sử dụng nó làm máy chủ ảo.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Tạo chứng chỉ SSL tự ký.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Sau đó, bạn sẽ cần trả lời các câu hỏi.
  * Mở tệp máy chủ ảo mặc định nginx.
  * Thay đổi giá trị của server_name và lưu tệp.
  * Cuối cùng, khởi động lại máy chủ web Nginx bằng cách chạy lệnh bên dưới.
```
sudo systemctl restart nginx
```
  * Cuối cùng, hãy mở trình duyệt của bạn và nhập URL https://postal.example.com. Bạn sẽ được chuyển hướng đến trang đăng nhập.

## Kết luận   {#conclusion}
Chúng tôi đã đi qua phần giới thiệu và các tính năng chính của máy chủ thư bưu chính ở độ sâu lớn. Chúng tôi cũng bao gồm các hướng dẫn từng bước để thiết lập  **Đại lý chuyển thư này** . Hơn nữa, chúng tôi đã đưa ra một số cái nhìn sâu sắc về thiết lập. Thiết lập một máy chủ thư bưu chính là một quá trình đơn giản. Tôi hy vọng rằng bài viết này thực sự hữu ích trong việc thiết lập và định cấu hình một máy chủ thư bưu chính cho doanh nghiệp của bạn.
Cuối cùng, [**containerize.com **][7] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với danh mục [**  email giao dịch này**][8] cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  *[ **Phần mềm email giao dịch hàng đầu** ][9]
  *[ **Potal - Máy chủ thư nguồn mở** ][5]
  *[ **5 Phần mềm máy chủ thư nguồn mở tốt nhất cho các doanh nghiệp vào năm 2020** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
