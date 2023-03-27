---
title: "Thiết lập Quản lý độ nảy nâng cao và Quy tắc nảy trong phplist" 
seoTitle: "Thiết lập Quản lý độ nảy nâng cao và Quy tắc nảy trong phplist" 
description: "Cho phép quản lý độ nảy nâng cao trong phplist và xử lý các email nảy. Tạo quy tắc nảy và tự động hóa quy trình để thực hiện các hành động khác nhau trên các tin nhắn được trả về." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "Tùy thuộc vào loại mã lỗi nảy được MTA trả lại, Quản lý độ nảy nâng cao cho phép tự động thực hiện các hành động khác nhau." 
url: /vi/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## Tùy thuộc vào loại mã lỗi nảy được MTA trả về, Quản lý độ nảy nâng cao cho phép tự động thực hiện các hành động khác nhau.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Thiết lập Quản lý độ nảy nâng cao và Quy tắc nảy trong phplist">}}

Trong hướng dẫn [trước][1] của chúng tôi, chúng tôi đã giải quyết  **xử lý phplist nảy** . Nếu bạn không quen thuộc với xử lý nảy, bạn có thể đọc nó. Bạn có thể tải xuống các email chưa được gửi vào dự án phplist của mình bằng cách sử dụng xử lý nảy. Làm thế nào để bạn xử lý các email đã tải xuống? Không có ý kiến ​​gì, hãy để Lôi xem xét về quản lý nảy trước cho phép bạn sắp xếp **email nảy**  . Mỗi tin nhắn email được trả lại đều có mã lỗi được trả về bởi MTA (Đại lý chuyển thư). Hơn nữa, bạn có thể xem lại tiêu đề email tin nhắn đã trả lại và nó chứa tất cả thông tin dọc theo mã lỗi.
  * [Cho phép xử lý độ nảy nâng cao][2]
  * [Thêm quy tắc nảy][3]
  * [Danh sách các quy tắc nảy][4]
  * [Kết luận][5]

## Bật khả năng xử lý độ nảy nâng cao {#Enable}

Đầu tiên, trước tiên, hãy kích hoạt xử lý nâng cao  **Bounce**  bằng cách sao chép mã bên dưới trong tệp Config.php.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
Sau đó, điều hướng đến  **Hệ thống> Quản lý Bounce> Liệt kê các quy tắc**  để tạo các quy tắc nảy.
Bạn có thể tạo các quy tắc nảy dựa trên các biểu thức thông thường. Bạn có thể tìm thấy lý do tại sao  **Email bật lại**  trong tiêu đề và sử dụng nó để biểu thức thông thường. Ngoài ra, chọn các hành động thích hợp dựa trên mã lỗi hoặc biểu thức thông thường. PHPLIST hỗ trợ các hành động sau. Tuyên bố hành động là tự giải thích nên chúng tôi không cần phải đi chi tiết.
  * Xóa thuê bao
  * Người đăng ký không xác nhận
  * Người đăng ký danh sách đen
  * Địa chỉ email danh sách đen
  * Xóa người đăng ký và nảy
  * Người đăng ký không xác nhận và xóa Bounce
  * Thêm người đăng ký vào danh sách không kết hợp và xóa Bounce
  * Thêm địa chỉ email vào danh sách không kết thúc và xóa Bounce
  * Xóa nảy

## Thêm quy tắc nảy {#Add}

Hãy để tạo ra quy tắc nảy đầu tiên của chúng tôi.
* Đầu tiên, nhập biểu thức chính quy như  **(tài khoản đã bị đình chỉ | không có tài khoản)**  
  * Sau đó, chọn hành động thích hợp
  * Cuối cùng, thêm ghi chú/bản ghi nhớ cho quy tắc

{{< figure align=center src="images/add-bounce-rule.png" alt="Tạo quy tắc nảy trong phplist">}}

Bạn có thể thêm các quy tắc nảy vì các lý do sau và chọn hành động thích hợp để xử lý nảy. Tuy nhiên, bạn có thể tìm kiếm các phản hồi SMTP và thêm nhiều quy tắc vào danh sách.
  * Người nhận lưu trữ
  * Loại = MX: Không tìm thấy máy chủ
  * Xin lỗi, không có hộp thư ở đây bằng tên đó
  * Hộp thư bị vô hiệu hóa
  * Tài khoản bị vô hiệu hóa
  * Hộp thư này đã bị chặn do không hoạt động
  * Người dùng không xác định
  * Không có người nhận như vậy
  * và như thế …
 **Lưu ý:**  Bạn phải kết thúc lý do nảy trong dấu ngoặc đơn và sử dụng ký hiệu ống **|**hoặc**  hoặc**câu lệnh, nếu bạn muốn thêm nhiều lý do trong một quy tắc nảy.

## Danh sách các quy tắc nảy {#List}

Sau khi tạo số lượng quy tắc, danh sách  **Bounce**  của bạn sẽ trông giống như trong ảnh chụp màn hình bên dưới. Bạn có thể thực hiện các hành động khác như thay đổi thứ tự và xóa trên trang này.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="Danh sách các quy tắc nảy">}}


## Phần kết luận {#Phần kết luận}

Trong hướng dẫn này, chúng tôi đã tìm hiểu về Quản lý Bounce  **nâng cao**  và phát triển các quy tắc nảy cần thiết. Thật tuyệt khi cho phép tính năng này để bạn có thể tự động hóa quá trình làm sạch địa chỉ email không hợp lệ từ danh sách của mình. Nó cũng sẽ cho phép bạn duy trì mức tối thiểu của các email được trả lại. Hơn nữa, danh sách của bạn sẽ có những người đăng ký hợp pháp.
Hơn nữa, [containerize.com][6] đang trên đường để tăng cường ngăn xếp các sản phẩm nguồn mở bằng nhiều ngôn ngữ và khung. Để cập nhật thường xuyên, vui lòng theo dõi danh mục [Bản tin][7] cho các bài viết thú vị hơn.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [PHPLIST - Bản tin nguồn mở và phần mềm tiếp thị qua email][8]
  * [Cách tạo và gửi bản tin bằng Phplist][9]
  * [Cách thiết lập và xử lý nảy trong phplist][1]
  * [Hướng dẫn bắt đầu phát triển plugin phplist][10]



 [1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
 [2]: #Enable
 [3]: #Add
 [4]: #List
 [5]: #Conclusion
 [6]: https://containerize.com
 [7]: https://blog.containerize.com/category/newsletter/
 [8]: https://products.containerize.com/newsletter/phplist
 [9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
 [10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
