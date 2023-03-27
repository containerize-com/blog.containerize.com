---
title: "Cách cài đặt và định cấu hình WAMP Server trên Windows" 
seoTitle: "Cách cài đặt và định cấu hình WAMP Server trên Windows" 
description: "Cài đặt WampServer trên Windows và nhanh chóng bắt đầu phát triển các ứng dụng web dựa trên PHP. WAMP Server có sẵn cho cả Windows 32 và 64 bit." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Thiết lập môi trường phát triển web để tạo các ứng dụng web với Apache2, PHP và MySQL. Bài viết này giúp bạn cài đặt WAMP Server trên Windows." 
url: /vi/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Thiết lập môi trường phát triển web để tạo các ứng dụng web với Apache2, PHP và MySQL. Bài viết này giúp bạn cài đặt WAMP Server trên Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Máy chủ Wamp">}}

Mỗi nhà phát triển phải có phần mềm cần thiết được cài đặt trên máy tính của mình trước khi viết chương trình. Trong những ngày đầu, các nhà phát triển đã phải cài đặt mọi phần mềm một cách riêng biệt và sau đó định cấu hình chúng để làm việc cùng nhau.  **WampServer**  và phần mềm Stack Solution STACK khác hiện có sẵn, gói tất cả các phần mềm cần thiết thành một gói. Bạn chỉ cần cài đặt một gói để có môi trường phát triển của bạn hoạt động.
Trong bài đăng trên blog này, chúng tôi sẽ bao gồm các phần sau.
* [  **Wamperver là gì?**  ][1]
* [  **Cài đặt Wamp**  ][2]
* [  **Cấu hình WAMP**  ][3]
* [  **Access phpmyadmin**  ][4]

## Wamperver là gì? {#What}

Wamperver là một ngăn xếp giải pháp miễn phí để thiết lập môi trường phát triển web cho các ứng dụng dựa trên PHP. WAMP là viết tắt của (W - Windows, A - Apache, M - MySQL và P - PHP). Ngoài ra, nó cũng đi kèm với phpmyadmin và quản trị viên để quản lý cơ sở dữ liệu. WAMP là một trong những công cụ phổ biến và bạn có thể nhanh chóng thiết lập nó. Hơn nữa, bạn có thể định cấu hình máy chủ WAMP từ bảng điều khiển. Nó cung cấp một môi trường phát triển web hoàn chỉnh để tạo và thử nghiệm các ứng dụng. WampServer bao gồm một số thành phần mà bạn có thể chọn trong quá trình cài đặt theo nhu cầu của bạn. Wamperver đi kèm với nhiều phiên bản của PHP. Bạn có thể dễ dàng thay đổi phiên bản PHP theo yêu cầu của dự án. Ngoài ra, bạn có thể thay đổi DBMS (Hệ thống quản lý cơ sở dữ liệu) từ bảng điều khiển WampServer.

## Cài đặt Wamp {#Installation}

Thực hiện theo hướng dẫn từng bước dưới đây để cài đặt WAMP Server trên Windows.
*  **Tải xuống WampServer**  từ trang web chính thức

{{< figure align=center src="images/wamp-download.png" alt="">}}

* Chọn  **WampServer 32 bit** hoặc **WampServer 64 bit**  Phiên bản của trình cài đặt theo hệ điều hành của bạn.
* Xác định vị trí  **Tệp tải xuống**  và nhấp đúp vào nó để chạy quá trình cài đặt.
  * Chọn ngôn ngữ và sau đó nhấn nút OK.
  * Chọn hộp kiểm Tôi chấp nhận thỏa thuận và sau đó nhấp vào nút tiếp theo.
  * Đọc thông tin quan trọng về cài đặt Wamperver và nhấp vào nút tiếp theo để tiếp tục.
  * Chọn một thư mục nơi bạn muốn cài đặt máy chủ WAMP và nhấp vào nút tiếp theo.
  * Bạn phải chọn các thành phần mà bạn muốn cài đặt như trong ảnh chụp màn hình dưới đây. Bạn có thể chọn tất cả các phiên bản PHP và chuyển đổi trong quá trình phát triển. Ngoài ra, bạn có thể cài đặt cả MySQL và MariaDB.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Chọn phím tắt cho WampServer và nhấp vào nút tiếp theo.
  * Nhấp vào nút Cài đặt để cài đặt WampServer.
  * Bây giờ, chọn trình duyệt văn bản mặc định và trình soạn thảo văn bản mặc định cho máy chủ WAMP.
  * Cài đặt của bạn đã hoàn tất. Nhấp vào nút Kết thúc để thoát Trình hướng dẫn cài đặt WAMP Server.
  * Mở trình duyệt của bạn và nhập Localhost để truy cập nó. Bạn sẽ thấy trang dưới đây.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## Cấu hình WAMP {#Configuration}

Bây giờ, chúng tôi sẽ xem xét một vài cấu hình giúp bạn trong quá trình phát triển và thử nghiệm các ứng dụng web. Bây giờ bạn có thể bắt đầu Wamperver bằng cách nhấp đúp vào biểu tượng WampServer phím tắt trên máy tính để bàn của bạn.
*  **Dịch vụ**  -Bạn có thể thấy các tùy chọn để bắt đầu, dừng và khởi động lại tất cả các dịch vụ bằng cách nhấp chuột trái trên biểu tượng WampServer.
*  **Thay đổi cơ sở dữ liệu**  -Nhấp chuột phải vào biểu tượng WAMP để mở hộp thoại Công cụ. Chọn các công cụ và nhấp vào Đảo ngược DBMS DBMS MariaDB MySQL. WAMP Server sẽ tự động khởi động lại và bạn có thể thấy cơ sở dữ liệu mặc định bằng cách mở localhost trong trình duyệt của mình.
*  **Thay đổi phiên bản PHP**  -Nhấp chuột phải vào biểu tượng WAMP để mở hộp thoại Công cụ. Chọn các công cụ và thay đổi phiên bản PHP CLI và nhấp vào phiên bản PHP bạn muốn.
*  **Máy chủ ảo**  - Bạn có thể dễ dàng thêm máy chủ ảo thông qua giao diện web của WampServer. Mở Localhost trong trình duyệt của bạn và nhấp vào trên Thêm Thêm một máy chủ ảo trong phần Công cụ. Nhập tên tên của máy chủ ảo như dev.example.com và nhập đường dẫn tuyệt đối của dự án. Nhấp vào nút Bắt đầu tạo nút Virtualhost. Khởi động lại máy chủ Apache để tải máy chủ ảo mới được tạo.
*  **Thay đổi cổng Apache**  - Theo mặc định, máy chủ web Apache chạy trên cổng 80. Nếu bạn muốn sử dụng một cổng khác cho Apache, bạn có thể làm điều đó từ bảng điều khiển WampServer. Nhấp chuột phải vào biểu tượng WAMP để mở hộp thoại Công cụ. Chọn các công cụ và nhấp vào trên sử dụng một cổng khác ngoài 80. Nhập số cổng mới vào hộp thoại và nhấp vào nút OK.
*  **Thay đổi cổng DBMS**  - Theo mặc định, máy chủ cơ sở dữ liệu chạy trên cổng 3306. Nếu bạn muốn sử dụng một cổng khác cho máy chủ cơ sở dữ liệu, bạn có thể thực hiện nó từ bảng điều khiển WampServer. Nhấp chuột phải vào biểu tượng WAMP để mở hộp thoại Công cụ. Chọn các công cụ và nhấp vào trên mạng Sử dụng một cổng khác 3306. Nhập số cổng mới vào hộp thoại và nhấp vào nút OK.
*  **Nhật ký trống**  - Wamserver cung cấp chức năng để xóa nhật ký khỏi bảng điều khiển. Bạn có thể trống nhật ký như nhật ký lỗi PHP, nhật ký lỗi Apache, nhật ký truy cập Apache, nhật ký MySQL và nhật ký Mariadb. Thậm chí bạn có thể xóa tất cả các nhật ký cùng một lúc. Nhấp chuột phải vào biểu tượng WAMP để mở hộp thoại Công cụ. Chọn các công cụ và chọn nhật ký trống, bạn sẽ tìm thấy tất cả các tùy chọn để xóa nhật ký.
*  **Thay đổi ngôn ngữ**  - Bạn có thể ngôn ngữ cho bảng điều khiển WampServer. Nhấp chuột phải vào biểu tượng WAMP để mở hộp thoại Công cụ. Chọn ngôn ngữ và nhấp vào ngôn ngữ cần thiết. Bạn sẽ thấy bảng điều khiển trong ngôn ngữ mới được chọn.

## Truy cập phpmyadmin {#phpMyAdmin}

Bạn có thể truy cập  **phpmyadmin**  để quản lý cơ sở dữ liệu của bạn bằng cách mở localhost trong trình duyệt của bạn và sau đó nhấp vào liên kết phpmyadmin trên trang Wampserver. Ngoài ra, bạn có thể truy cập nó bằng cách truy cập http: // url localhost/phpmyadmin.

## Phần kết luận
Chúng tôi đã thảo luận về WampServer và hướng dẫn từng bước hoàn chỉnh để  **Cài đặt WampServer** nó trên Windows. Bạn có thể dễ dàng cài đặt và định cấu hình **WampServer**  bằng cách làm theo hướng dẫn này và bắt đầu mã hóa ngay lập tức. Bạn có thể truy cập các liên kết trong phần Khám phá để biết thêm tùy chọn về phần mềm Stack STACK.
Cuối cùng, [  **containerize.com**  ][5] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với ngăn xếp giải pháp máy chủ web này**][6] cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
* [  **Tùy chọn ngăn xếp giải pháp máy chủ web nguồn mở tốt nhất**  ][7]
* [  **Cài đặt XAMPP và PHPMyAdmin với tư cách là LocalHost trên Windows**  ][8]



 [1]: #What
 [2]: #Installation
 [3]: #Configuration
 [4]: #phpMyAdmin
 [5]: https://containerize.com
 [6]: https://blog.containerize.com/category/web-server-solution-stack/
 [7]: https://products.containerize.com/solution-stack/
 [8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
