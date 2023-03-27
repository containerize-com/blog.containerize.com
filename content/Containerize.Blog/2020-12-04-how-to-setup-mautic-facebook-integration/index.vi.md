---
title: "Cách thiết lập Maitic - Tích hợp Facebook" 
seoTitle: "Cách thiết lập Maitic - Tích hợp Facebook" 
description: "MAINTIC - Tích hợp Facebook có thể giúp đồng bộ hóa các dẫn đầu trên Facebook của bạn vào hệ thống Maitic mà không gặp khó khăn gì và sau đó sử dụng chúng trong các chiến dịch tiếp thị." 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Lấy Facebook dẫn đến Mautic, thêm danh bạ vào một phân khúc và chạy các chiến dịch email. Đồng thời sử dụng các liên hệ này để tạo đối tượng tùy chỉnh cho quảng cáo Facebook." 
url: /vi/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## Tìm nạp Facebook dẫn đến Maitic, thêm danh bạ vào một phân khúc và chạy các chiến dịch email. Đồng thời sử dụng các liên hệ này để tạo đối tượng tùy chỉnh cho quảng cáo Facebook.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Cách thiết lập Maitic - tích hợp Facebook">}}

Mautic là một phần mềm tự động hóa tiếp thị và cung cấp hoàn toàn kiểm soát email tiếp thị, trang đích và quy trình làm việc cho các hoạt động tiếp thị. Các chiến dịch nhỏ giọt của Mautic giúp thu hút đối tượng mục tiêu và cập nhật chúng về các sản phẩm của bạn. Tích hợp Maitic Facebook cung cấp một cách để các khách hàng tiềm năng mới được thêm vào Mautic. Với sự tích hợp MAUTIC - Facebook này, các khách hàng tiềm năng từ chiến dịch Facebook của bạn sẽ được tự động thêm vào Mautic.
Chúng tôi sẽ bao gồm các phần sau trong hướng dẫn này:
  * [Định cấu hình tài khoản nhà phát triển Facebook][1]
  * [Định cấu hình ứng dụng của nhà phát triển Facebook][2]
  * [Cấu hình plugin Maitic][3]
  * [Kết luận][4]

## Định cấu hình tài khoản nhà phát triển Facebook {#account}

  * Truy cập [Facebook cho các nhà phát triển][5]
  * Đăng ký tài khoản của bạn nếu bạn không có.
  * Để đăng ký một tài khoản mới, hãy truy cập và nhấp vào trên Get Get bắt đầu từ góc trên bên phải.
  * Sau đó, chọn tài khoản Facebook của bạn và nhấn vào Tiếp tục.
  * Sau đó, từ cửa sổ bật lên, nhấp vào nút của nhà phát triển.

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Maitic - Tích hợp Facebook - Tài khoản nhà phát triển đăng ký">}}


## Định cấu hình ứng dụng nhà phát triển Facebook {#app}

  * Nhấp vào "Tạo ứng dụng đầu tiên"

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic - Tích hợp Facebook - Tạo ứng dụng đầu tiên">}}

  * Nhấp vào trên Quản lý tích hợp kinh doanh và nhấn vào tiếp tục.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Maitic - Tích hợp Facebook - Chọn mục đích">}}

  * Trong cửa sổ tiếp theo, nhập tên ứng dụng và chọn mục đích ứng dụng. Nhấp vào nút Tạo ứng dụng.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="MAUTIC - Tích hợp Facebook - điền vào biểu mẫu để tạo ứng dụng">}}

  * Bước tiếp theo là thiết lập đăng nhập Facebook. Từ trang Sản phẩm, nhấp vào nút Thiết lập trên mạng trong hộp đăng nhập Facebook của Facebook.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Maitic - Tích hợp Facebook - Đăng nhập FB Cài đặt">}}

  * Từ menu bên trái, nhấp vào Cài đặt trực tuyến trong các sản phẩm -> Đăng nhập Facebook.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="MAUTIC - Tích hợp Facebook - Cấu hình đăng nhập FB">}}

  * Nhập URL trang web Mautic của bạn. Đặt ứng dụng khách OAuth đăng nhập và đăng nhập Web OAuth đăng nhập thành
  * Bây giờ đi đến Cài đặt -> Cài đặt cơ bản. Từ dưới cùng của trang, nhấp vào nút+ Thêm nút nền tảng. Sau đó, một cửa sổ bật lên sẽ mở. Nhập URL trang web của bạn và lưu các thay đổi.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic - Tích hợp Facebook - Thêm trang web làm nền tảng">}}


## Cấu hình plugin Maitic {#configuration}

  * Đi đến bảng điều khiển Mautic.
  * Sau đó, chuyển sang các cài đặt trên mạng từ góc trên cùng bên phải.
  * Nhấp vào plugin plugin.
  * Sau đó, hãy mở cài đặt plugin của Facebook Facebook.
  * Sau đó nhập ID máy khách và bí mật của khách hàng. Nhận các khóa này từ ứng dụng Nhà phát triển Facebook mà bạn vừa tạo các bước sau đây.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="MAUTIC - Tích hợp Facebook - Cấu hình plugin FB trên Mautic">}}

  * Nhấn nút Ứng dụng ủy quyền.
  * Sau đó, một cửa sổ ủy quyền Facebook mới sẽ mở. Thực hiện theo các lời nhắc để hoàn thành ủy quyền ứng dụng.
  * Sau khi ủy quyền thành công, hãy chuyển sang tab Lập bản đồ liên hệ với plugin trên Facebook Mautic.
  * Tại đây bạn có thể ánh xạ các trường liên hệ của mình đến các trường Facebook.
  * Cuối cùng, xuất bản các cài đặt và bạn tốt để đi.

## Phần kết luận {#conclusion}

MAINTIC - Tích hợp Facebook có thể giúp đồng bộ hóa các dẫn đầu trên Facebook của bạn vào hệ thống Maitic mà không gặp khó khăn gì. Trong ứng dụng Maitic, bạn có thể thêm tất cả các khách hàng tiềm năng này vào một phân đoạn. Bạn có thể chạy các chiến dịch tiếp thị qua email trên chúng. Điều này thực sự có thể giúp doanh nghiệp của bạn phát triển, tiếp thị và bán sản phẩm/dịch vụ cho đối tượng mục tiêu lớn hơn nhiều.

## Khám phá
Để tìm hiểu thêm về Mautic và Facebook, vui lòng truy cập:
  * [Mautic | Nền tảng công nghệ tiếp thị nội dung nguồn mở][6]
  * [Cách thiết lập các chiến dịch Maitic bằng cách sử dụng Trình tạo chiến dịch][7]
  * [Tích hợp Maitic Drupal để tự động hóa việc nuôi dưỡng chì][8]
  * [Tự động hóa tiếp thị với tích hợp Maitic và WooC Commerce][9]
  * [Tích hợp Mautic & Joomla cho tự động hóa tiếp thị kỹ thuật số][10]



[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
