---
title: "Cách thiết lập và xử lý nảy trong phplist" 
seoTitle: "Cách thiết lập và xử lý nảy trong phplist" 
description: "PHPLIST là danh sách gửi thư tự lưu trữ mạnh mẽ và người quản lý bản tin. Nó giúp các doanh nghiệp gửi các chiến dịch bản tin và xử lý dễ dàng." 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "Gửi chiến dịch với bản tin nguồn mở và phần mềm tiếp thị qua email. Thiết lập quản lý nảy trong phplist và tự động hóa xử lý nảy cho danh sách gửi thư lành mạnh." 
url: /vi/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## Gửi chiến dịch với bản tin nguồn mở và phần mềm tiếp thị qua email. Thiết lập quản lý nảy trong phplist và tự động hóa xử lý nảy cho danh sách gửi thư lành mạnh.

{{< figure align=center src="images/phplist-2.png" alt="Quá trình nảy phplist">}}

Chúng tôi đã viết các bài viết để thực hiện [nhiều người thuê][1] và [gửi chiến dịch bản tin][2] trong phplist. Trong bài viết này, chúng tôi sẽ trình bày các điểm này một cách chi tiết về quá trình nảy trong phplist.
  * [PHPLIST là gì?][3]
  * [Bounce là gì?][4]
  * [Quản lý nảy thiết lập][5]
  * [Làm thế nào để xử lý nảy?][6]
  * [Kết luận][7]

## PHPLIST là gì?   {#Phplist}
PHPLIST là phần mềm gửi bản tin miễn phí và nguồn mở phổ biến nhất. PHPLIST cho phép các doanh nghiệp gửi email tiếp thị, cập nhật sản phẩm và thông báo cho người đăng ký. Nó giúp các doanh nghiệp quản lý danh sách, thiết kế bản tin đẹp, chiến dịch lịch trình và quản lý nảy. [Đọc thêm][8]

## Bounce là gì?   {#nảy}
Bounce là một tin nhắn email không thể được gửi vì số lượng lý do và trả lại cho người gửi. Chúng tôi có thể có những lý do như hộp thư là đầy đủ, địa chỉ email không còn hợp lệ hoặc địa chỉ email không chính xác. Vì điều này, bạn phải xử lý nảy để bạn không gửi email đến địa chỉ email không hợp lệ.

## Quản lý độ nảy   {#setup}
Để thiết lập Quản lý nảy, bạn cần định cấu hình các cài đặt sau trong tệp Config.php.

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist - Quản lý xử lý nảy">}}

Chúng tôi sẽ giải thích trong các bước dưới đây thêm về các cấu hình này.
  * Trước tiên, bạn cần thêm địa chỉ email nơi bạn muốn nhận tin nhắn nảy. Bạn có thể tìm thấy biến**message_envelope**và thêm địa chỉ email của bạn.
* PHPLIST có thể tìm nạp email từ hộp thư nảy thông qua hai giao thức,**mbox và pop3**. Vì vậy, hãy tìm**bounce_protocol**biến và thay đổi nó theo môi trường của bạn.
* Nếu bạn đã đặt**mbox**prototcol, bạn cần xác định định dạng tệp cho nó. Vì vậy, hãy tìm**Bounce_Mailbox**và đặt đường dẫn như ‘/var/spool/mail/listbounces.
* Trong trường hợp bạn đã sử dụng giao thức**pop3**, bạn cần cấu hình**máy chủ, tên người dùng và mật khẩu**cho hộp thư. Bạn có thể thấy các cài đặt này trong Sreenshot trên.
* Ngoài các cài đặt trên cho giao thức**POP3**, bạn có thể cần thêm cổng và mã hóa.

## Làm thế nào để xử lý nảy?   {#quá trình}
PHPLIST hỗ trợ hai phương pháp cho quá trình nảy: thủ công và tự động. Bạn sẽ phải tạo công việc cron để tự động hóa xử lý nảy. Bạn cũng có thể xử lý thủ công Bounce bằng cách truy cập**System> Quy trình Bounce**Trang. Do đó, trước tiên, bạn cần thay đổi**thủ công \ _Process \ _bounces**Cài đặt theo yêu cầu của bạn. Bạn có thể truy cập [tài liệu phplist][9] để thiết lập công việc cron cho quá trình nảy.

## Kết luận   {#conclusion}
Trong bài đăng này, chúng tôi đã học được cách định cấu hình địa chỉ email nảy và xử lý nảy. Bạn có thể dễ dàng xử lý nảy với phương pháp thủ công, nếu bạn có ít số lượng thuê bao. Tuy nhiên, bạn phải sử dụng quá trình xử lý nảy tự động cho các danh sách lớn. Nó sẽ tiết kiệm thời gian của bạn và giúp bạn tạo danh sách thuê bao sạch và hợp lệ.

  
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
