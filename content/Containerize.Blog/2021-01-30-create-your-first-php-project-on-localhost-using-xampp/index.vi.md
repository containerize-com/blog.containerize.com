---
title: "Tạo dự án PHP đầu tiên của bạn trên localhost bằng XAMPP '" 
seoTitle: "Tạo dự án PHP đầu tiên của bạn trên localhost bằng XAMPP" 
description: "Thiết lập môi trường phát triển web bằng máy chủ web miễn phí và nguồn mở XAMPP. Tạo và kiểm tra các dự án PHP của bạn trên localhost bằng cách làm theo một vài bước dễ dàng." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Thiết lập môi trường phát triển web bằng máy chủ XAMPP nguồn miễn phí và nguồn mở. Tìm hiểu, tạo và kiểm tra các dự án PHP của bạn trên localhost bằng cách làm theo một vài bước dễ dàng." 
url: /vi/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Cài đặt môi trường phát triển web bằng máy chủ XAMPP nguồn miễn phí và mở. Tìm hiểu, tạo và kiểm tra các dự án PHP của bạn trên localhost bằng cách làm theo một vài bước dễ dàng.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="Tạo dự án PHP đầu tiên của bạn với máy chủ web nguồn mở XAMPP">}}

XAMPP là một máy chủ web nguồn mở cung cấp môi trường cục bộ để tạo, chạy và kiểm tra dự án PHP trước khi triển khai nó trên các máy chủ trực tiếp. Nó cung cấp một máy chủ cục bộ cho các nhà phát triển để kiểm tra và xây dựng các ứng dụng web. Chúng tôi sẽ trình bày các phần sau trong bài đăng trên blog này:
  * [Yêu cầu][2]
  * [XAMPP là gì][3]
  * [Tạo tập lệnh PHP][4]
  * [Chạy và kiểm tra tập lệnh PHP][5]
  * [Kết luận][6]

## Yêu cầu   {#Requirements}
  * Cài đặt XAMPP
  * Ứng dụng Trình chỉnh sửa mã
  * Kiến thức PHP cơ bản
  * Kiến thức cơ bản HTML và JavaScript

## xampp là gì?   {#xampp}
XAMPP là một ngăn xếp giải pháp máy chủ web nguồn mở. Nó chứa Apache, MySQL, MariaDB, PHP và Perl. Nó là cực kỳ dễ dàng để cài đặt và sử dụng. Đó là lý do tại sao nó là môi trường phát triển PHP phổ biến nhất. XAMPP Server cung cấp một môi trường hoàn chỉnh để phát triển ứng dụng web PHP. Nếu bạn không có cài đặt làm việc XAMPP, thì hãy làm theo hướng dẫn này để cài đặt XAMPP:
[Cài đặt XAMPP và PHPMyAdmin là Localhost trên Windows][7]

## Tạo tập lệnh PHP   {#PHP}
  * Giả sử rằng bạn đã cài đặt XAMPP bằng cách làm theo hướng dẫn ở trên, bây giờ hãy để tạo ra một tập lệnh PHP đơn giản và kiểm tra nó trên XAMPP.
  * Trước tiên hãy mở trình chỉnh sửa của bạn. Nếu bạn không có một trình soạn thảo lập trình, chỉ cần mở Notepad.
  * Nhập mã sau
```
<?php
echo "This is my first PHP project";
?>
```
  * Nhấp vào tệp File File ở góc trên cùng bên phải.
  * Nhấn nút Lưu dưới dạng nút.
  * Nhập tên với tiện ích mở rộng .Php.
  *Đối với Save Save dưới dạng loại, chọn tùy chọn Tất cả các tệp (\*. \*).
  * Và cuối cùng nhấn nút Lưu Lưu.

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="Tạo dự án PHP đầu tiên của bạn với máy chủ web nguồn mở XAMPP">}}


## chạy và kiểm tra tập lệnh php   {#test}
  * Sao chép tập lệnh PHP này vào thư mục HTDOCS bên trong cài đặt XAMPP của bạn. Thư mục chủ yếu là HTDOCS cư trú tại đây: C: \ XAMPP \ HTDOCS
  * Mở trình duyệt của bạn.
  * Truy cập localhost/của tôi \ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="Tạo dự án PHP đầu tiên của bạn với máy chủ web nguồn mở XAMPP">}}

Chúc mừng! Bạn vừa tạo dự án PHP đầu tiên của bạn.

## Kết luận   {#conclusion}
Tạo dự án web đầu tiên luôn rất thú vị cho người mới bắt đầu. Nó cảm thấy tuyệt vời khi bạn thiết kế tập lệnh động đầu tiên của bạn, chạy nó và xem nó hoạt động trên trình duyệt của bạn. Tôi hy vọng hướng dẫn đơn giản này đã giúp bạn tạo và chạy dự án PHP đầu tiên của bạn với máy chủ web nguồn mở XAMPP.

## Khám phá
Để tìm hiểu thêm về XAMPP và PHPMYADMIN, hãy kiểm tra các hướng dẫn theo hướng dẫn:
[Cài đặt XAMPP và PHPMyAdmin là Localhost trên Windows][7]
[Ngăn xếp giải pháp máy chủ web miễn phí cho các nhà phát triển PHP & Perl][1]

  
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
