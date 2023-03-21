---
title: "Cài đặt XAMPP và PHPMyAdmin dưới dạng localhost trên Windows" 
seoTitle: "Cài đặt XAMPP và PHPMyAdmin dưới dạng localhost trên Windows" 
description: "Cài đặt XAMPP và PHPMyAdmin dưới dạng localhost trên Windows. Tạo môi trường thử nghiệm cục bộ miễn phí và nguồn mở của riêng bạn để kiểm tra và xây dựng các ứng dụng web." 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "Thiết lập môi trường phát triển với STACK SCREAL WEB Server (XAMPP) và phần mềm quản lý cơ sở dữ liệu (PHPMyAdmin) miễn phí)" 
url: /vi/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## Thiết lập môi trường phát triển với phần mềm quản lý máy chủ web miễn phí và nguồn mở (XAMPP) và phần mềm quản lý cơ sở dữ liệu (phpmyadmin)

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="Xampp và phpmyadmin với tư cách là localhost">}}

XAMPP và PHPMYADMIN là LocalHost cung cấp một máy chủ cục bộ cho các nhà phát triển kiểm tra và xây dựng các ứng dụng web. XAMPP là một máy chủ cục bộ được cài đặt trên máy tính/máy tính xách tay cá nhân. Nó cung cấp một môi trường cục bộ để tạo, chạy và kiểm tra các ứng dụng PHP trước khi triển khai chúng trên các máy chủ trực tiếp.
Chúng tôi sẽ trình bày các phần sau trong bài đăng trên blog này:
  * [Mô tả][1]
  * [Cài đặt XAMPP][2]
  * [Bảng điều khiển phpmyadmin][3]
  * [Suy nghĩ cuối cùng][4]

## Mô tả:   {#Descrip}
XAMPP là ngăn xếp giải pháp máy chủ web miễn phí và nguồn mở. Nó chứa Apache, MySQL, MariaDB, PHP và Perl. XAMPP có sẵn cho các hệ điều hành Windows. Nó là cực kỳ dễ dàng để cài đặt và sử dụng. Đó là lý do tại sao nó là môi trường phát triển PHP phổ biến nhất. XAMPP và PHPMYADMIN là Localhost cung cấp một môi trường hoàn chỉnh để phát triển và thử nghiệm ứng dụng web.
Bảng chữ cái trong XAMPP đứng cho:
***x**-Tăng cường đa nền tảng (hỗ trợ nhiều hệ điều hành bao gồm Linux, Windows và Mac OS)
***A**- Máy chủ Apache HTTP
***M**- Mariadb (cơ sở dữ liệu)
***P**- PHP
***P**- Perl

## Cài đặt XAMPP   {#xampp}
  * Tải xuống XAMPP từ [ở đây][5].

{{< figure align=center src="images/xampp1.png" alt="XAMPP là Localhost">}}

  * Cài đặt tệp thực thi.
  * Sau đó, nhấp vào tiếp theo.
  * Chọn các thành phần bạn muốn cài đặt.

{{< figure align=center src="images/xampp2.png" alt="XAMPP là Localhost Bước 2">}}

  * Đối với hầu hết các ứng dụng web, bạn chỉ cần _apache_, _mysql_, _php_ và _phpmyadmin_.
  * Chọn thư mục cài đặt nơi bạn muốn cài đặt XAMPP.
  * Bạn sẽ được hiển thị cảnh báo bảo mật Windows. Bạn phải kiểm tra tùy chọn sau: Các mạng _private, chẳng hạn như nhà của tôi hoặc mạng làm việc của tôi.
  * Cuối cùng nhấp vào trên mạng kết thúc để hoàn thành cài đặt.

{{< figure align=center src="images/xampp4.png" alt="XAMPP như Localhost Bước 3">}}

  * Sau khi cài đặt thành công, mở bảng điều khiển XAMPP.
  * Bắt đầu các dịch vụ của Apache Apache và và các dịch vụ của MySQ.

{{< figure align=center src="images/xampp5.png" alt="XAMPP như Localhost Bước 4">}}


## PhpmyAdmin Dashboard:   {#phpmyadmin}
Để truy cập bảng điều khiển PHPMyAdmin, hãy nhấp vào nút Quản trị viên bên cạnh dịch vụ MySQL. Bạn cũng có thể truy cập phpmyadmin bằng cách truy cập http: // localhost/phpmyadmin từ trình duyệt của bạn. Ở đây bạn có thể tạo cơ sở dữ liệu. Thực hiện theo các bước này để tạo cơ sở dữ liệu mới.
  * Từ bảng điều khiển, nhấp vào tab Cơ sở dữ liệu trên cơ sở dữ liệu.

{{< figure align=center src="images/db1.png" alt="Phpmyadmin tại Localhost Bước 1">}}

  * Nhập tên cơ sở dữ liệu và nhấp vào nút Tạo Tạo. Điều này chỉ đơn giản là tạo ra một cơ sở dữ liệu trống mới.

{{< figure align=center src="images/db2.png" alt="PHPMyAdmin tại Localhost Bước 2">}}

  * Tiếp theo bạn có thể tạo các bảng bằng cách chọn cơ sở dữ liệu mới được tạo.
  * Nhập tên bảng dưới cách tạo bảng.

{{< figure align=center src="images/db3-1024x234.png" alt="PHPMyAdmin tại Localhost Bước 3">}}

  * Chọn số cột.
  * Sau đó nhấp vào nút Go Go.
  * Sau đó, bạn cần điền vào biểu mẫu trên trang tiếp theo để hoàn thành việc tạo bảng.

{{< figure align=center src="images/db4-1024x564.png" alt="PHPMyAdmin tại Localhost Bước 4">}}


## Suy nghĩ cuối cùng:   {#final}
Cài đặt XAMPP rất đơn giản và thẳng tiến. Không mất quá 15 phút để thiết lập máy chủ XAMPP. Khi nó được cài đặt, các nhà phát triển có thể xây dựng và kiểm tra các ứng dụng web dựa trên PHP của họ ngay cả khi không có kết nối internet. Thay vì thử nghiệm các dự án trực tiếp trên một máy chủ web trực tiếp, nó rất đơn giản và tiết kiệm thời gian để kiểm tra chúng tại địa phương. Nó là một nền tảng tuyệt vời để người mới bắt đầu học hỏi, kiểm tra và đánh bóng các kỹ năng PHP, Perl và cơ sở dữ liệu của họ.

## Khám phá:
[Ngăn xếp giải pháp máy chủ web nguồn mở cho các nhà phát triển PHP & Perl][6]
[Tùy chọn ngăn xếp giải pháp máy chủ web nguồn mở tốt nhất][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
