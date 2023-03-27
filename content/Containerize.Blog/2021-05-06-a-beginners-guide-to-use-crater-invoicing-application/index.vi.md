---
title: "Hướng dẫn người mới bắt đầu sử dụng ứng dụng Hóa đơn Crater" 
seoTitle: "Hướng dẫn người mới bắt đầu sử dụng ứng dụng Hóa đơn Crater" 
description: "Một hướng dẫn để bắt đầu với một hệ thống hóa đơn nguồn mở. Hướng dẫn này về miệng núi lửa giúp bạn làm quen với các khái niệm và tính năng cốt lõi." 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "Hướng dẫn này sẽ giúp bạn tìm hiểu về các ứng dụng hóa đơn miệng núi lửa. Đây là một hệ thống hóa đơn nguồn miễn phí và mở cho các doanh nghiệp nhỏ." 
url: /vi/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## Hướng dẫn này sẽ giúp bạn tìm hiểu về các ứng dụng hóa đơn miệng núi lửa. Đây là một hệ thống hóa đơn nguồn miễn phí và mở cho các doanh nghiệp nhỏ.

{{< figure align=center src="images/blog-crater.png" alt="Hệ thống hóa đơn nguồn mở">}}

Mỗi doanh nghiệp cần một số loại hệ thống để quản lý hóa đơn, chi phí, thanh toán, và nhiều hơn nữa. Phần mềm lập hóa đơn giúp bạn quản lý nó để bạn có thể dễ dàng thực hiện các nhiệm vụ thanh toán và tập trung vào những thứ quan trọng khác. Trong bài đăng này, chúng tôi sẽ học cách thiết lập Crater và sử dụng nó để xử lý các hoạt động kế toán cho doanh nghiệp.
  * [Giới thiệu về miệng núi lửa][1]
  * [Quy trình cài đặt của miệng núi lửa][2]
  * [Khám phá tính năng][3]
  * [Kết luận][4]

## Giới thiệu về miệng núi lửa {#Introduction}

[Crater][5] là một ứng dụng thanh toán nguồn mở và miễn phí. Nó hoàn toàn miễn phí và bạn có thể dễ dàng cập nhật nó lên các phiên bản gần đây nhất. Đây là một hệ thống kế toán miễn phí cho các doanh nghiệp nhỏ và dịch giả tự do. Nó cũng là một giải pháp hóa đơn hoàn chỉnh, cho phép bạn theo dõi các chi phí và thanh toán, tính thuế và đưa ra ước tính và hóa đơn. Hơn nữa, nó đi kèm với các ứng dụng di động vượt trội cho các thiết bị iPhone và Android. Nó sẽ cho phép bạn quản lý nó từ bất kỳ nơi nào. Vì Crater là một phần mềm thanh toán dựa trên web, ứng dụng web được thiết kế với Laravel và Vuejs và các ứng dụng di động được xây dựng với React Native. Tất cả các tài liệu liên quan đến phát triển và triển khai có sẵn. Mã nguồn hoàn chỉnh có thể được tìm thấy tại [GitHub][6].

## Quy trình lắp đặt miệng núi lửa {#Installation}

Chúng tôi sẽ thảo luận về cách cài đặt Crater với phương pháp thủ công và sử dụng Docker trong phần này.

### Hướng dẫn cài đặt
  * Tải xuống phiên bản mới nhất từ.
  * Tải lên tệp zip đã tải xuống lên máy chủ của bạn và trích xuất nó.
  * Truyền miền của bạn vào thư mục công khai bên trong thư mục Crater.
  * Điều hướng đến gốc của dự án của bạn và thực hiện lệnh SUDO CHMOD -R 775 ./ Lệnh để gán các đặc quyền thích hợp.
  * Mở trang web của bạn trong trình duyệt và theo dõi trình hướng dẫn cài đặt.

### Cài đặt Docker
  * Cài đặt Docker trên máy chủ của bạn:.
  * Cài đặt Docker Compose bằng cách làm theo hướng dẫn này:.
  * Kho lưu trữ miệng núi lửa bằng cách sử dụng lệnh này.
```
git clone https://github.com/bytefury/crater
```
  * Chạy bên dưới các lệnh từng người một để cài đặt Crater.
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  * Mở trang web miệng núi lửa trong trình duyệt của bạn và làm theo trình hướng dẫn cài đặt.

## Tính năng Thăm dò {#Feature}

Trong phần này, chúng tôi sẽ khám phá các tính năng cốt lõi của ứng dụng thanh toán nguồn mở này. Khi bạn đã hoàn tất việc cài đặt, hãy mở trang web của bạn http://example.com và đăng nhập vào ứng dụng.
*  **Bảng điều khiển**  - Sau khi đăng nhập, bạn sẽ được đưa vào bảng điều khiển, hiển thị toàn bộ chế độ xem ứng dụng.

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

*  **Cài đặt**  - Bây giờ điều hướng đến trang Cài đặt và thêm các cài đặt ứng dụng web khác nhau như cài đặt tài khoản, thông tin công ty, tùy chọn, tùy chỉnh, thông báo, mô -đun thanh toán, v.v.

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

*  **Các mục**  - tab Các mục có thể truy cập từ menu thanh bên. Từ tab này, bạn có thể quản lý các mặt hàng của bạn. Bạn có thể sử dụng các mục trong khi tạo ước tính và hóa đơn.
*  **Ước tính**  - Tạo một báo giá toàn diện bao gồm giá, giảm giá, hàng tồn kho, v.v. Một trong ba mẫu tích hợp có thể được sử dụng để tạo ước tính. Thuế bổ sung có thể được thêm vào ước tính, và chúng cũng có thể được thêm vào dưới dạng thuế hỗn hợp.
*  **Hóa đơn**  - Tạo hóa đơn chuyên nghiệp và gửi chúng cho khách hàng của bạn. Bạn có thể sử dụng các mẫu có sẵn để tạo hóa đơn. Bạn có thể thêm thuế bổ sung vào hóa đơn, cũng như thuế hỗn hợp. Hơn nữa, bạn có thể cung cấp một tỷ lệ phần trăm hoặc giảm giá có giá trị cố định cho khách hàng của bạn. Hơn nữa, bạn có thể áp dụng giảm giá cho các mặt hàng riêng lẻ cũng như số tiền hóa đơn tổng thể.
*  **Thanh toán**  - Mô -đun này giúp bạn tiếp tục theo dõi các khoản thanh toán mà bạn đã nhận được từ khách hàng của mình.
*  **Chi phí**  - Mô -đun chi phí giúp bạn theo dõi số tiền bạn chi cho các dịch vụ khác nhau.
*  **Thuế**  - Sử dụng tính năng này, bạn có thể dễ dàng quản lý thuế của mình. Bạn có thể thêm nhiều thuế vào tổng số tiền hóa đơn hoặc trên từng mặt hàng.
*  **Báo cáo**  - Nhận thông tin toàn diện về tất cả các hóa đơn của bạn, cho dù họ là một hoặc một số khách hàng. Hỗ trợ của Crater đi kèm với bốn loại báo cáo như báo cáo bán hàng, báo cáo lãi & lỗ, báo cáo chi phí và báo cáo thuế.

## Phần kết luận {#Phần kết luận}

Chúng tôi đã học về miệng núi lửa và làm thế nào để thiết lập nó theo cách thủ công và với Docker. Chúng tôi cũng đã xem xét một số tính năng mà mọi phần mềm thanh toán kế toán sẽ cung cấp. Hy vọng, hướng dẫn này có thể hỗ trợ bạn nhanh chóng thực hiện một hệ thống hóa đơn nguồn mở cho doanh nghiệp của bạn.
Cuối cùng, [containerize.com][7] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với danh mục [Hóa đơn][8] để cập nhật thường xuyên.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Crater - Hệ thống kế toán miễn phí cho doanh nghiệp nhỏ][5]
  * [Top 5 phần mềm kế toán nguồn mở trong năm 2021][9]



 [1]: #Introduction
 [2]: #Installation
 [3]: #Feature
 [4]: #Conclusion
 [5]: https://products.containerize.com/invoicing/crater/
 [6]: https://github.com/bytefury/crater
 [7]: https://containerize.com
 [8]: https://blog.containerize.com/category/invoicing/
 [9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/
