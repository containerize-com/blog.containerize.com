---
title: "Cách cài đặt và định cấu hình owncloud với Apache trên Ubuntu" 
seoTitle: "Cách cài đặt và định cấu hình owncloud với Apache trên Ubuntu" 
description: "Owncloud là phần mềm máy khách-máy chủ mã nguồn mở để tạo dịch vụ lưu trữ tệp. Trong hướng dẫn này, chúng tôi sẽ tìm hiểu cách cài đặt và định cấu hình owncloud trên ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "Owncloud là một bộ sưu tập phần mềm máy khách-máy khách mở để tạo máy chủ lưu trữ tệp. Hướng dẫn này là về cách định cấu hình owncloud trên Ubuntu." 
url: /vi/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## owncloud là một bộ sưu tập phần mềm máy khách-máy khách mở để tạo máy chủ lưu trữ tệp. Hướng dẫn này là về cách định cấu hình owncloud trên Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **Tổng quan** 
Owncloud là ứng dụng web doanh nghiệp nguồn mở mạnh mẽ và miễn phí và phổ biến được viết bằng PHP mà sử dụng để đồng bộ hóa dữ liệu và chia sẻ tệp. Nó cũng cho phép bạn dễ dàng quản lý các tệp dữ liệu, danh bạ, lịch, để làm danh sách và nhiều hơn nữa. Đây là một sự thay thế tuyệt vời cho các nền tảng đám mây phổ biến nhất như Google Drive, Dropbox, iCloud và các dịch vụ lưu trữ đám mây khác ngoài kia. Nhưng không giống như các dịch vụ lưu trữ đám mây khác, sở hữu tự lưu trữ tự do tạo ra đám mây chủ riêng.
Owncloud là một phần mềm đám mây riêng nguồn nguồn mở cung cấp quyền truy cập dữ liệu bằng giao diện web để tạo đám mây riêng. Nó cho phép bạn tạo máy chủ chia sẻ tệp của riêng mình, nơi bạn có thể dễ dàng xem và đồng bộ hóa các sự kiện lịch, tài liệu lưu trữ, hình ảnh, bản ghi, tác vụ, sách địa chỉ với dấu trang, tương tự như Dropbox và Google Drive. Nó cũng cung cấp các tùy chọn để đồng bộ hóa và chia sẻ dữ liệu trên tất cả các thiết bị dưới sự kiểm soát của bạn. Cài đặt và định cấu hình Owncloud hỗ trợ dữ liệu của bạn được đồng bộ hóa cho máy khách máy tính để bàn cũng như các thiết bị ứng dụng di động. Ngoài ra, bạn có thể dễ dàng thực hiện các hạn chế truy cập người dùng và nhóm trên các tệp trên mỗi người dùng bằng cách sử dụng Owncloud trên Ubuntu. Owncloud Open Open Source Storage Server là một ứng dụng nền tảng chéo và có thể được cài đặt trên tất cả các hệ điều hành phổ biến.
Hướng dẫn này sẽ giúp bạn thiết lập Owncloud và định cấu hình owncloud trên các hệ thống Ubuntu LTS.
  * Cài đặt máy chủ đèn
  * Tải xuống sở hữu
  * Tạo cơ sở dữ liệu và người dùng MySQL
  * Cài đặt owncloud
  * Những lựa chọn thay thế tốt nhất cho Owncloud là gì?
  * Phần kết luận

## Bước 1: Cài đặt máy chủ đèn
Để thiết lập máy chủ đám mây riêng và cách tạo một đám mây riêng, trước tiên chúng ta cần thiết lập một máy chủ đèn đang chạy. Nếu bạn đã cài đặt và chạy ngăn xếp đèn, hãy bỏ qua bước này khác sử dụng các lệnh sau để thiết lập đèn trên hệ thống Ubuntu của bạn.

### Cài đặt PHP
Bạn có thể cài đặt phiên bản Php 5.6 hoặc cao hơn trên hệ thống Ubuntu hoặc Debian bằng cách chạy các lệnh:
sudo apt-get install python-software-properies
sudo ppa thêm-apt-ept-end: ondrej/php
Cập nhật sudo apt-get
Sudo apt -get nâng cấp -y
sudo apt-get install -y php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### Cài đặt Apache2
Apache là phần mềm máy chủ web nguồn mở được sử dụng rộng rãi nhất. Tiếp theo, cài đặt máy chủ web Apache trên Ubuntu để thiết lập máy chủ đám mây của riêng bạn bằng cách chạy:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### Cài đặt MySQL
Hệ thống quản lý cơ sở dữ liệu quan hệ nguồn mở của MySQL là một thành phần của ngăn xếp phần mềm ứng dụng web LAMP và các loại khác. Bây giờ đã cài đặt MySQL trên Ubuntu bằng cách chạy bên dưới:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Bước 2: Tải xuống Owncloud trên Ubuntu
Sau khi định cấu hình thành công Máy chủ LAMP trên hệ thống Ubuntu của bạn, hãy để tải xuống giải pháp lưu trữ đám mây riêng mới của Owncloud từ [trang web chính thức][1].
CD /TMP
wget https://doad.Owncloud.org/community/Owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Sau khi tải xuống phần mềm Sở hữu máy chủ sở hữu đã hoàn thành, bây giờ trích xuất kho lưu trữ được tải xuống dưới tài liệu trang web Root và thiết lập các quyền phù hợp trên các tệp và thư mục bằng cách chạy để cài đặt Owncloud trên Ubuntu.
CD/var/www/html
sudo tar xjf /tmp/Owncloud-10.4.0.tar.bz2
sudo Chown -r www-data: www-data owncloud
sudo chmod -r 755 owncloud
{{_LINE_50_}}
Bây giờ, xóa tệp lưu trữ và khởi động lại máy chủ Apache.
sudo rm -f /tmp/Owncloud-10.4.0.tar.bz2
sudo systemctl khởi động lại apache2

## Bước 3: Tạo cơ sở dữ liệu và người dùng Owncloud
Sau khi trích xuất mã, bây giờ, hãy để tạo cơ sở dữ liệu MySQL và tài khoản người dùng để định cấu hình máy chủ lưu trữ đám mây cá nhân Owncloud. Sử dụng tập hợp các lệnh sau để đăng nhập vào máy chủ MySQL để tạo cơ sở dữ liệu và người dùng Owncloud.
mysql -u root -p
Nhập mật khẩu:
mysql> tạo cơ sở dữ liệu owncloud;
mysql> cấp tất cả trên owncloud.* to 'owncloud'@'localhost' được xác định bởi '_password_';
mysql> đặc quyền tuôn ra;
mysql> bỏ
{{_LINE_62_}}
Tiếp theo, chúng ta cần cài đặt owncloud trên Ubuntu từ giao diện web để tạo một đám mây riêng.

## Bước 4: Cài đặt Owncloud trên Ubuntu
Bây giờ hãy truy cập thư mục bảng điều khiển web Cloud Cloud Server tốt nhất của Owncloud trên trình duyệt web. Thay đổi localhost thành địa chỉ IP hoặc tên miền của máy chủ.
http: // localhost/owncloud/
{{_LINE_67_}}
Bạn sẽ thấy trang đăng nhập Owncloud nguồn mở. Nhập thông tin đăng nhập người dùng và mật khẩu của quản trị viên mới để tạo tài khoản quản trị viên và cung cấp vị trí của thư mục dữ liệu. Nếu mọi thứ ổn như vậy thì bạn nên lấy trang web như thế này.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Cài đặt owncloud với apache trên ubuntu">}}

{{_LINE_71_}}
Bây giờ trượt trang của bạn xuống. Trong biểu mẫu dưới đây, bạn cần nhập tên người dùng và mật khẩu cho người quản lý bảng chủ sở hữu đám mây cá nhân tốt nhất. Đồng thời cung cấp cơ sở dữ liệu cùng với tên người dùng và mật khẩu để kết nối máy chủ Owncloud với máy chủ cơ sở dữ liệu, vị trí của thư mục dữ liệu và nhấp vào **Cài đặt kết thúc** .
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Định cấu hình owncloud trên ubuntu">}}

{{_LINE_75_}}
Sau khi hoàn thành thiết lập, bạn sẽ nhận được bảng điều khiển quản trị viên. Nơi bạn có thể tạo người dùng, nhóm và gán cho họ quyền, v.v.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Cài đặt bảng điều khiển Owncloud">}}

{{_LINE_79_}}
Vâng! Chúng tôi được thực hiện với Hướng dẫn cài đặt Owncloud để xây dựng lưu trữ đám mây cá nhân. Bây giờ bạn đã biết cách cài đặt hoàn toàn Owncloud trên Ubuntu để xây dựng một đám mây riêng từng bước tương tự như Dropbox hoặc Google Drive.

## **Những lựa chọn thay thế tốt nhất cho Owncloud là gì?** {#4a1a}

Sau đây là các lựa chọn thay thế sở hữu bản thân và phần mềm lưu trữ tệp đối thủ cạnh tranh.
* **Seafile** là hệ thống phần mềm lưu trữ tệp đa nền tảng nguồn mở
* **NextCloud** là nền tảng lưu trữ đám mây miễn phí và nguồn mở
* **Resilio Sync** là ứng dụng đồng bộ hóa tệp PEER nguồn mở
* **Tế bào Pydio** là phần mềm chia sẻ và đồng bộ hóa tệp nguồn mở
* **Syncthing** là ứng dụng đồng bộ hóa tệp ngang hàng miễn phí và nguồn mở

## **Phần kết luận:**  {#block-dd1258f4-e0c5-4ac9-be18-7dd2a700f09e}

Chúc mừng! Bạn đã cài đặt thành công và cấu hình owncloud để xây dựng đám mây riêng của riêng bạn với Apache trên máy Ubuntu. Bây giờ dữ liệu của bạn không bao giờ nằm ​​trong tay của các bên thứ ba và có thể được quản lý riêng tư trong bộ lưu trữ máy chủ Ubuntu Ubuntu riêng. Nhiều công ty đang chọn để tạo ra các máy chủ riêng của họ với nhiều thông tin quan trọng do nhiều vấn đề với sự riêng tư của dữ liệu. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ thảo luận về các chủ đề thú vị hơn về các ngăn xếp giải pháp máy chủ web.
_Your có thể tham gia với chúng tôi trên [Twitter][2], [LinkedIn][3] và trang [Facebook][4] của chúng tôi. Bạn sử dụng giải pháp lưu trữ dựa trên đám mây nào trực tuyến ?. Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ][5].

## Khám phá:
Chúng tôi cũng có một số bài viết khác liên quan đến việc quản lý hàng ngày của máy chủ của bạn.
  * [Cách định cấu hình Apache dưới dạng proxy ngược cho Ubuntu/Debian][6]
  * [Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][7]
  * [Bảo mật và mã hóa Nginx với Let Let Encrypt trên Ubuntu 20.04][8]
  * [Định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][9]
  * [Thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][10]



[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
