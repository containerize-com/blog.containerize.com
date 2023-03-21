---
title: "Cách cài đặt nền tảng chia sẻ và đồng bộ hóa tệp Pydio trên Ubuntu" 
seoTitle: "Cách cài đặt nền tảng chia sẻ và đồng bộ hóa tệp Pydio trên Ubuntu" 
description: "PYDIO là một phần mềm chia sẻ tài liệu hợp tác và chia sẻ tài liệu hợp tác tự lưu trữ. Hãy xem lại cách cài đặt công cụ chia sẻ và đồng bộ hóa tệp Pydio." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "Pydio là một nền tảng chia sẻ và đồng bộ hóa tệp dựa trên đám mây để truy cập tất cả dữ liệu ở bất cứ đâu và trên bất kỳ thiết bị nào. Hướng dẫn này là về cách cài đặt Pydio trên Ubuntu." 
url: /vi/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydio là một nền tảng chia sẻ và đồng bộ hóa tệp dựa trên đám mây để truy cập tất cả dữ liệu ở mọi nơi và trên bất kỳ thiết bị nào. Hướng dẫn này là về cách cài đặt Pydio trên Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Cách cài đặt nền tảng chia sẻ và đồng bộ hóa tệp Pydio trên Ubuntu">}}


## **Tổng quan**
Tế bào Pydio là một phần mềm chia sẻ và đồng bộ hóa tệp nguồn mở. Nó cung cấp một điểm truy cập duy nhất vào tất cả các lưu trữ dữ liệu của bạn và nó là một giải pháp thay thế cho Owncloud và NextCloud cung cấp dịch vụ lưu trữ, chia sẻ tệp và đồng bộ hóa. Pydio là một nền tảng chia sẻ tệp nguồn mở doanh nghiệp tương tự như Dropbox và các nền tảng lưu trữ khác. Nó giúp bạn kết nối an toàn tất cả các tệp và thiết bị của bạn trong một nền tảng.
Tế bào Pydio là một nền tảng cộng tác và đồng bộ hóa các tệp dựa trên đám mây. Phần mềm nguồn mở này chạy trên cơ sở hạ tầng CNTT cá nhân của bạn và giúp nhân viên của bạn bảo vệ và giám sát dữ liệu kinh doanh của bạn. Bạn có thể đồng bộ hóa dữ liệu của mình và truy cập nó từ mọi nơi bằng ứng dụng di động, phần mềm máy tính để bàn hoặc trình duyệt web bằng các ô Pydio. Ứng dụng chia sẻ tệp tốt nhất của các ô Pydio dựa trên kiến ​​trúc dịch vụ vi mô và được viết bằng ngôn ngữ lập trình Golang.
Hướng dẫn này sẽ giúp bạn cài đặt và định cấu hình phần mềm chia sẻ tệp PYDIO tự lưu trữ và nền tảng đồng bộ hóa trên các hệ thống Ubuntu LTS.
  * Bắt đầu
  * Cài đặt máy chủ đèn
  * Cài đặt pydio trên ubuntu
  * Tạo cơ sở dữ liệu PYDIO và người dùng
  * Truy cập pydio trên trình duyệt của bạn
  * Phần kết luận

## Bước 1: Bắt đầu
Trước khi cài đặt, bạn cần đảm bảo rằng hệ thống của bạn đang chạy các gói mới nhất. Sử dụng lệnh bên dưới để cập nhật máy chủ Ubuntu 20.04 của bạn.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Sau khi cập nhật, chúng tôi luôn khuyên bạn nên khởi động lại máy chủ của bạn cho các thay đổi mới có hiệu lực.
```
sudo reboot
```

## Bước 2: Cài đặt máy chủ đèn
Để thiết lập máy chủ chia sẻ tệp doanh nghiệp an toàn Pydio và cách tạo một đám mây riêng nguồn mở, trước tiên chúng tôi cần thiết lập một máy chủ đèn đang chạy. Nếu bạn đã cài đặt và chạy ngăn xếp đèn, hãy bỏ qua bước này khác sử dụng các lệnh sau để thiết lập đèn trên hệ thống Ubuntu của bạn.

## # Cài đặt PHP
Bạn có thể cài đặt PHP trên hệ thống Ubuntu hoặc Debian của mình bằng cách chạy các lệnh:
sudo apt-get install python-software-properies
sudo ppa thêm-apt-ept-end: ondrej/php
sudo apt-get install -y php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

## # Cài đặt Apache2
Apache là phần mềm máy chủ web nguồn mở được sử dụng rộng rãi nhất. Tiếp theo, cài đặt máy chủ web Apache trên Ubuntu bằng cách chạy:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

## # Cài đặt MySQL
Hệ thống quản lý cơ sở dữ liệu quan hệ nguồn mở của MySQL là một thành phần của ngăn xếp phần mềm ứng dụng web LAMP và các loại khác. Bây giờ đã cài đặt MySQL trên Ubuntu bằng cách chạy bên dưới:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Sau khi cài đặt hoàn tất, hãy mở  **Php.ini**  Tệp cấu hình để chỉnh sửa. Sử dụng trình chỉnh sửa tệp ưa thích của bạn.
Thực hiện các thay đổi đối với tệp php.ini như dưới đây. Mở hai tệp và thực hiện các thay đổi như được hiển thị
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Thực hiện các thay đổi sau
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Lưu và đóng tệp và tiến hành chỉnh sửa tệp php.ini khác
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Bước 3: Cài đặt Pydio trên Ubuntu
Trước tiên, bạn cần thêm kho phần mềm chia sẻ tệp miễn phí tốt nhất PYDIO vào máy chủ Ubuntu 20.04 của bạn vì nó chưa có sẵn. Ngoài ra, hãy thêm hệ thống chia sẻ tệp tốt nhất PYDIO cho khóa công khai kinh doanh và tiếp tục cập nhật kho lưu trữ hệ thống của bạn.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Bây giờ là lúc để cài đặt Pydio EFSS và phần mềm chia sẻ tài liệu. Chạy lệnh như được hiển thị
```
sudo apt install -y pydio pydio-all
```
Bật mô -đun Apache Rewrite bằng cách sử dụng các lệnh được hiển thị bên dưới và khởi động lại và bật Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Xác nhận rằng dịch vụ Apache đang chạy bằng lệnh dưới đây:
```
sudo systemctl status apache2
```
Đầu ra phải được hiển thị nếu cài đặt được thực hiện đúng, cho thấy dịch vụ Apache2 đang chạy.

## Bước 4: Tạo cơ sở dữ liệu Pydio và người dùng
Sau khi trích xuất mã, bây giờ, hãy để tạo cơ sở dữ liệu MySQL và tài khoản người dùng để định cấu hình Pydio. Sử dụng bộ lệnh sau để đăng nhập vào máy chủ MySQL để tạo cơ sở dữ liệu và người dùng AjaxPlorer Sharesync hoặc Pydio.
mysql -u root -p
Nhập mật khẩu:
mysql> tạo cơ sở dữ liệu pydio;
mysql> cấp tất cả trên pydio.* to 'pydio'@'localhost' được xác định bởi '_password_';
mysql> đặc quyền tuôn ra;
mysql> bỏ
{{_LINE_69_}}
Tiếp theo, chúng ta cần cài đặt Pydio trên Ubuntu từ giao diện web để tạo đám mây riêng.

## Bước 5: Truy cập pydio trên trình duyệt của bạn
Mở trình duyệt của bạn và nhập URL _HTTP: /// PYDIO_. Bạn sẽ thấy một trang như được hiển thị
Phần mềm chia sẻ tệp và chia sẻ tệp đám mây riêng của Pydio hiện đã được cài đặt và định cấu hình, đã đến lúc truy cập giao diện web của họ.
Mở trình duyệt của bạn và nhập URL http: // your -server -ip / pydio. Bạn sẽ được chuyển hướng đến trang sau:

{{< figure align=center src="images/Pydio-Installer.png" alt="Trình cài đặt Pydio">}}

Xác nhận tất cả các điều khiển và nhấp vào nút  **Tiếp tục cài đặt Pydio** . Bạn sẽ xem trang sau:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Trình hướng dẫn thiết lập Pydio">}}

Chọn ngôn ngữ của bạn và nhấp vào  **Bắt đầu Wizard** . Bạn sẽ xem trang sau:

{{< figure align=center src="images/Starting-the-setting.png" alt="Bắt đầu cài đặt Pydio">}}

Nhập tên chương trình và tin nhắn chào mừng. Sau đó nhấp vào nút  **Tiếp theo** . Bạn sẽ xem trang sau:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Nhập ứng dụng Pydio">}}

Tiếp theo, nhập tài khoản quản trị viên của bạn và nhấp vào nút  **Tiếp theo** . Bạn sẽ xem trang sau:

{{< figure align=center src="images/MySQL-database-settings.png" alt="Cài đặt cơ sở dữ liệu MySQL">}}

Sau đó nhập chi tiết cơ sở dữ liệu của bạn, chẳng hạn như tên cơ sở dữ liệu, tên người dùng và mật khẩu. Sau đó nhấp vào nút  **Kiểm tra kết nối DB** . Bạn sẽ xem trang sau:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Tùy chọn nâng cao PYDIO">}}

Tiếp theo, nhấp vào nút  **Cài đặt Pydio** . Một khi cài đặt đã được hoàn thành thành công. Bạn sẽ được chuyển hướng đến trang sau:

{{< figure align=center src="images/Pydio-Login.png" alt="Đăng nhập PYDIO">}}

Sau đó nhập tên người dùng và mật khẩu của bạn cho quản trị viên. Sau đó nhấp vào nút [Enter]. Bạn sẽ xem trang sau:

Vâng! Xong rôi. Bây giờ bạn đã biết cách cài đặt hoàn toàn PYDIO tự lưu trữ tệp đồng bộ hóa và phần mềm chia sẻ tệp nguồn mở trên Ubuntu để xây dựng một đám mây riêng từng bước tương tự như Dropbox hoặc Google Drive.

##  **Kết luận:**    {#4A1A}
Trong hướng dẫn này, bạn đã cài đặt thành công các tệp bảo mật nguồn mở của các ô Pydio trên hệ thống Ubuntu của bạn. Bạn có thể sử dụng bài viết này để tạo cơ sở hạ tầng đám mây để lưu trữ, bảo vệ và chia sẻ các tệp của bạn trong đám mây tự lưu trữ. Sử dụng chia sẻ tài liệu hợp tác Pydio và ứng dụng chia sẻ tệp miễn phí tốt nhất để có được quyền kiểm soát dữ liệu của bạn nhiều hơn và đảm bảo sự hợp tác hiệu quả trong tổ chức kinh doanh của bạn. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ thảo luận về các chủ đề thú vị hơn về các giải pháp lưu trữ đám mây nguồn mở và các công cụ cộng tác chia sẻ tệp.
_Your có thể tham gia với chúng tôi trên [Twitter][1], [LinkedIn][2] và trang [Facebook][3] của chúng tôi. Bạn sử dụng nền tảng chia sẻ nguồn mở _file nào trên nền tảng đám mây ?. Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ][4].

## Khám phá:
Chúng tôi cũng có một số bài viết khác liên quan đến việc quản lý hàng ngày của máy chủ của bạn.
  * [Cách cấu hình Apache dưới dạng proxy ngược cho Ubuntu/Debian][5]
  * [Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][6]
  * [An toàn và mã hóa Nginx với Let Let Encrypt trên Ubuntu 20.04][7]
  * [Định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][8]
  * [Thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
