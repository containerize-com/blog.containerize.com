---
title: "Cách cài đặt NextCloud với Apache trên máy chủ Ubuntu" 
seoTitle: "Cách cài đặt NextCloud với Apache trên máy chủ Ubuntu" 
description: "NextCloud là một giải pháp lưu trữ đám mây tự lưu trữ nguồn mở được viết bằng PHP. Bài viết này sẽ chỉ ra cách cài đặt NextCloud với Apache trên Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "NextCloud là phần mềm hợp tác và đồng bộ hóa các tệp nguồn mở. Hướng dẫn này sẽ chỉ ra cách cài đặt NextCloud với Apache trên Ubuntu." 
url: /vi/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud là phần mềm đồng bộ hóa và hợp tác tệp nguồn mở tự lưu trữ. Hướng dẫn này sẽ chỉ ra cách cài đặt NextCloud với Apache trên Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Cách cài đặt NextCloud với Apache trên Ubuntn">}}


## **Tổng quan**
**[NextCloud][1]**là một giải pháp lưu trữ đám mây tự do và miễn phí ****  được viết bằng ngôn ngữ lập trình PHP. Nó cung cấp quyền truy cập dữ liệu bằng giao diện web và chức năng tương tự như Dropbox. Các giải pháp lưu trữ đám mây độc quyền như Dropbox và Google Drive thuận tiện nhưng chúng có thể được sử dụng để thu thập dữ liệu cá nhân vì các tệp của bạn được lưu trữ trên hệ thống của chúng. Nếu bạn cần an toàn, an toàn và tuân thủ đồng bộ hóa và chia sẻ giải pháp chia sẻ thì bạn có thể chuyển sang máy chủ NextCloud nguồn mở. Thiết lập NextCloud có thể được cài đặt trên máy chủ nhà riêng của bạn hoặc trên máy chủ riêng ảo.
NextCloud Open Source cung cấp **mã hóa từ đầu đến cuối** , có nghĩa là các tệp có thể được mã hóa trên thiết bị khách trước khi được tải lên máy chủ. Nó cũng có thể được tích hợp với một bộ văn phòng trực tuyến như Collobora, OnllyOffice NextCloud để bạn có thể tạo và chỉnh sửa các tệp tài liệu, PPT, XLS trực tiếp từ máy khách NextCloud. Bạn có thể chia sẻ và đồng bộ hóa một hoặc nhiều tệp và thư mục trên máy tính của bạn với máy chủ NextCloud của bạn sau khi tải xuống máy khách NextCloud. Tải xuống Desktop NextCloud và khách hàng di động cung cấp các tùy chọn để đồng bộ hóa và chia sẻ trên tất cả các thiết bị dưới sự kiểm soát của bạn. Đặt các tệp dữ liệu trong các thư mục được chia sẻ cục bộ của bạn và các tệp đó ngay lập tức được đồng bộ hóa với máy chủ và các thiết bị khác bằng ứng dụng máy khách, ứng dụng iOS hoặc thiết bị Android NextCloud Desktop.
Hướng dẫn này sẽ giúp bạn cài đặt NextCloud trên hệ điều hành Ubuntu 20.04 LTS Linux với Apache.
  ***Cài đặt các điều kiện tiên quyết (ngăn xếp đèn)** 
  ***Tải xuống Lưu trữ NextCloud trên Ubuntu** 
  ***Tạo cơ sở dữ liệu MySQL** 
  ***Chạy trình cài đặt web NextCloud** 
  ***Gói lên** 

## Bước 1: Cài đặt các điều kiện tiên quyết (ngăn xếp đèn)
Điều đầu tiên để cài đặt NextCloud trên Ubuntu là bạn phải chạy **Máy chủ đèn  **trên hệ thống Ubuntu LTS của bạn. Đăng nhập vào hệ thống của bạn và truy cập cửa sổ thiết bị đầu cuối. Nếu bạn đã chạy **  Ngăn xếp đèn**  Bỏ qua, bước khác, hãy sử dụng các lệnh sau để cài đặt các phụ thuộc cần thiết.

### Cài đặt PHP
Hãy bắt đầu với việc cài đặt phiên bản PHP 5.6 hoặc cao hơn trên máy chủ Ubuntu của bạn:
Cập nhật sudo apt-get
sudo apt-get install -y php-gd php-curl php-zip php-xml php-mbstring
Bạn có thể xác minh phiên bản PHP bằng lệnh sau:
PHP -V
{{_LINE_29_}}

### Cài đặt Apache2
Tiếp theo, cài đặt Apache với lệnh:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl khởi động lại apache2
{{_LINE_34_}}

### Cài đặt MySQL
Với sự phụ thuộc ngoài đường, bước tiếp theo cần được chăm sóc là đảm bảo máy chủ cơ sở dữ liệu MySQL. Cài đặt máy chủ cơ sở dữ liệu MySQL bằng cách chạy:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Bước 2: Tải xuống Lưu trữ NextCloud trên Ubuntu
Tại thời điểm viết bài viết này, phiên bản mới nhất NextCloud là 22.0.0beta5. Sau khi định cấu hình thành công Máy chủ LAMP trên hệ thống của bạn, hãy để tải xuống NextCloud từ [trang web chính thức của nó][2].
CD /TMP
wget https://doad.nextcloud.com/server/release/nextcloud-22.0.0beta5.zip
{{_LINE_43_}}
Sau khi hoàn tất tải xuống máy chủ NextCloud, trích xuất Lưu trữ đã tải xuống trong Root tài liệu trang web và thiết lập quyền sở hữu của thư mục NextCloud thành www-data trên các tệp và thư mục.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo Chown -r www-data: www-data nextcloud
sudo chmod -r 755 nextcloud
{{_LINE_49_}}
Bây giờ, xóa tập tin lưu trữ đã tải xuống.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Bước 3: Tạo cơ sở dữ liệu MySQL
Sau khi trích xuất mã nguồn, hãy để tạo cơ sở dữ liệu và tài khoản người dùng MySQL NextCloud để định cấu hình NextCloud. Sử dụng bộ lệnh sau để đăng nhập vào máy chủ MySQL, tạo cơ sở dữ liệu NextCloud, người dùng và thoát khỏi bảng điều khiển MySQL.
mysql -u root -p
Nhập mật khẩu:
MySQL> Tạo cơ sở dữ liệu NextCloud;
mysql> cấp tất cả trên nextcloud.
mysql> đặc quyền tuôn ra;
mysql> bỏ
{{_LINE_61_}}

## Bước 4: Chạy Trình cài đặt web NextCloud
Tại thời điểm này, NextCloud cài đặt Ubuntu 20.04 thành công và được cấu hình. Bây giờ, hãy mở thư mục cấu hình NextCloud trong trình duyệt web như bên dưới và nhập URL http://your-domain.com. Thay đổi localhost thành địa chỉ IP hoặc tên miền của máy chủ. Bạn sẽ thấy màn hình sau:
http: // localhost/nextcloud/hoặc http: // your_domain_name/nextcloud/
{{_LINE_65_}}
Nhập thông tin đăng nhập quản trị viên mới để tạo tài khoản quản trị viên và cung cấp vị trí của thư mục dữ liệu.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Cách cài đặt NextCloud với Apache trên máy chủ Ubuntu Linux">}}

{{_LINE_69_}}
Bây giờ trượt trang của bạn xuống và nhập tên cơ sở dữ liệu, tên người dùng cơ sở dữ liệu, mật khẩu và nhấp vào nút **Kết thúc cài đặt** .
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Cách cài đặt NextCloud Ubuntu 20.04 với Apache">}}

{{_LINE_73_}}
Khi cài đặt đã hoàn tất, bạn sẽ thấy bảng điều khiển Quản trị viên NextCloud trong màn hình sau. Tại đây bạn có thể tạo người dùng, nhóm, gán cho họ quyền, v.v.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Cài đặt NextCloud trên Ubuntu với Apache">}}

{{_LINE_77_}}
Xin chúc mừng, bạn có một giải pháp đám mây trên cơ sở NextCloud hoạt động trên hệ thống Ubuntu LTS của bạn. Bây giờ bạn có thể bắt đầu tùy chỉnh máy chủ đám mây của mình để đáp ứng hoàn hảo nhu cầu của bạn.

## **Gói lên:** {#4A1A}
Chúc mừng! Bạn đã thành công **được cấu hình và cài đặt NextCloud trên máy chủ Ubuntu với Apache** . Bạn đã học được cách tạo một đám mây riêng. NextCloud Ubuntu Server là một nền tảng cộng tác lưu trữ đám mây tuyệt vời, có thể phục vụ bất kỳ ai có nhu cầu lưu trữ đám mây riêng tư hoặc hybrid. Bây giờ bạn đã biết cách cài đặt NextCloud trên Ubuntu và dữ liệu của bạn an toàn và bảo mật trong đám mây tự lưu trữ của bạn. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ thảo luận về các chủ đề thú vị hơn liên quan đến các ngăn xếp giải pháp máy chủ web.
Bạn thích giải pháp lưu trữ tự lưu trữ dựa trên đám mây nào ?. Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng [hãy liên hệ][3] ._

## Khám phá:
Bạn có thể thích các bài viết liên quan đến việc quản lý hàng ngày của máy chủ của bạn.
  * [Cách cài đặt và định cấu hình Owncloud với Apache trên Ubuntu][4]
  * [Cách định cấu hình Apache dưới dạng proxy ngược cho Ubuntu hoặc Debian][5]
  * [Cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][6]
  * [An toàn và mã hóa Nginx với Let Let Encrypt trên Ubuntu 20.04][7]
  * [Định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][8]
  * [Thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][9]

  
[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
