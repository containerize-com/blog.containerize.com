---
title: "Quản trị viên là gì? | Công cụ quản lý cơ sở dữ liệu nguồn mở" 
seoTitle: "Quản trị viên là gì? | Công cụ quản lý cơ sở dữ liệu nguồn mở" 
description: "Quản trị viên là gì? Một hệ thống quản lý cơ sở dữ liệu dựa trên web với giao diện thân thiện với nhà phát triển. Hãy thảo luận về cách quản lý cơ sở dữ liệu với một quản trị viên nguồn mở." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Quản trị viên là một hệ thống quản lý cơ sở dữ liệu dựa trên nguồn web nguồn mở để quản lý cơ sở dữ liệu. Hãy cùng học cách thiết lập quản trị viên trên localhost và xem xét các tính năng chính của nó." 
url: /vi/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Quản trị viên là một hệ thống quản lý cơ sở dữ liệu dựa trên nguồn web nguồn mở để quản lý cơ sở dữ liệu. Hãy cùng học cách thiết lập quản trị viên trên localhost và xem xét các tính năng chính của nó.
{{_LINE_11_}}

## Tổng quan
Các nhiệm vụ liên quan đến dữ liệu là quan trọng hơn bao giờ hết. Công cụ quản lý cơ sở dữ liệu đã trở thành một phần không thể thiếu của bất kỳ doanh nghiệp nào. Tuy nhiên, có nhiều hệ thống quản lý cơ sở dữ liệu dựa trên web cung cấp các giải pháp cho các nhiệm vụ đầy thách thức như vậy. Các doanh nghiệp đang tạo ra hàng tấn dữ liệu hàng ngày và trở nên khó duy trì. Ngoài ra, các tổ chức có xu hướng đơn giản hóa truy cập dữ liệu và kiểm soát dữ liệu. Các công cụ miễn phí này giúp giảm dự phòng dữ liệu, làm cho cơ sở dữ liệu hiệu quả và đáng tin cậy. Hơn nữa, chúng tôi đã xuất bản các bài đăng trên blog về các chủ đề như [Công cụ phần mềm DBMS nguồn mở hàng đầu][1], và một số khác.
Do đó, cộng đồng nguồn mở đã phát triển quản trị viên, một công cụ quản lý cơ sở dữ liệu miễn phí cấp doanh nghiệp. Trong hướng dẫn quản trị này, chúng tôi sẽ đề cập đến các điểm sau.
  * [Quản trị viên là gì?][2]
  * [Các tính năng quan trọng của quản trị viên][3]
  * [Quản trị viên vs phpmyadmin][4]
  * [Quản lý cơ sở dữ liệu với quản trị viên][5]
  * [Kết luận][6]

## Quản trị viên là gì?   {#Gì}
Khi nói đến công cụ quản lý cơ sở dữ liệu MySQL nhẹ, thân thiện với người dùng, quản trị viên đã trở nên phổ biến và mang lại nhiều cải tiến so với phpmyadmin. Ban đầu, công cụ quản lý cơ sở dữ liệu này được Jakub Vrana phát triển vào năm 2007 như là một giải pháp thay thế cho PHPMyAdmin, do đó, tất cả những gì bạn phải làm là tải xuống và cài đặt một tệp PHP nhẹ duy nhất trên cơ sở dữ liệu ứng dụng của bạn.
Là một công cụ quản lý cơ sở dữ liệu nguồn mở, nó cũng được sử dụng miễn phí và được viết bằng PHP. Điều gì làm cho hệ thống quản lý cơ sở dữ liệu dựa trên web này là một thiết kế giao diện người dùng tốt cho trải nghiệm người dùng liền mạch, cũng như các tính năng bảo mật mạnh mẽ để giữ dữ liệu an toàn khỏi mọi cuộc tấn công hoặc cố gắng hack độc hại. Công cụ quản lý cơ sở dữ liệu này dễ dàng thiết lập và yêu cầu các yêu cầu đơn giản như Ubuntu và LAMP. Người dùng có thể tìm thấy tài liệu toàn diện về phát triển và triển khai. Do đó, bạn có thể tìm thấy các tệp nguồn của hệ thống quản lý cơ sở dữ liệu dựa trên web này trên [GitHub][7].

## Các tính năng quan trọng của quản trị viên   {#Important}
Một số tính năng cơ bản nhưng quan trọng của công cụ quản lý cơ sở dữ liệu này bao gồm:
  * Nó có nhiều chức năng cơ sở dữ liệu bao gồm chọn cơ sở dữ liệu, chỉnh sửa bảng, chèn/chỉnh sửa dữ liệu trong các bảng và sắp xếp/tìm kiếm dữ liệu trong nhiều cột
  * Hỗ trợ nhiều cơ sở dữ liệu bao gồm: MySQL, PostgreSQL, SQLite, MS SQL, Oracle và SimpleDB cơ sở dữ liệu và hơn thế nữa
  * Nó có sẵn bằng 43 ngôn ngữ bao gồm tiếng Anh, tiếng Ả Rập, Ba Tư, Ba Lan, Hà Lan, v.v.
  * Bạn có thể dễ dàng chỉnh sửa các đối tượng cơ sở dữ liệu như chế độ xem, kích hoạt, quy trình lưu trữ, quyền của người dùng và nhiều hơn nữa.
  * Quản trị viên cũng cung cấp các biện pháp bảo mật chống lại tiêm SQL, ăn cắp phiên, các cuộc tấn công phần mềm kịch bản trang web (XSS) và các cuộc tấn công khác.

## adminer vs phpmyadmin   {#adminer}
Vì vậy, khi chúng ta nói về những gì quản trị viên, thì sẽ rất thú vị khi biết sự so sánh giữa quản trị viên so với phpmyadmin. Khi nói đến việc lựa chọn giữa quản trị viên và phpmyadmin, quản trị viên đứng đầu cho các tính năng linh hoạt và tải lên tệp ánh sáng mà nó cung cấp. Tương tự, so với phpmyadmin, nó hỗ trợ nhiều cơ sở dữ liệu bao gồm MySQL, SQLite và nhiều cơ sở dữ liệu khác. Tương tự, nó trực quan và thông minh hơn phpmyadmin hơn khi thêm các trường bổ sung mà quản trị viên thực hiện tự động hoặc thao tác với tất cả các chỉ mục cùng một lúc.

## Quản lý cơ sở dữ liệu với quản trị viên   {#Manage}
Trong phần của hướng dẫn quản trị viên này, chúng tôi sẽ trải qua cách chúng tôi có thể quản lý cơ sở dữ liệu với quản trị viên.
**Yêu cầu hệ thống**
Để quản trị viên chạy trên hệ thống của bạn, điều quan trọng là bạn phải có các yêu cầu sau đây đã được thiết lập trên máy chủ của mình:
  * Php phiên bản 5, 7 hoặc 8
  * Trình điều khiển cơ sở dữ liệu như MySQL, SQLite, PostgreSQL, v.v.
**Cài đặt**
Nếu bạn đã kiểm tra hai yêu cầu hệ thống này, thì chỉ cần tải xuống tệp từ [][8] và bắt đầu bằng cách tải tệp PHP lên máy chủ của bạn. Đối với máy chủ XAMPP, hãy đổi tên tệp đã tải xuống dưới dạng adminer adminer.php và đặt tệp này vào thư mục HTDOCS.
**Giao diện người dùng truy cập**
Sau khi trải qua điều đó là gì? Bây giờ hãy truy cập ứng dụng này từ http: address/adminer.php của bạn như được hiển thị:
{{_LINE_42_}}
**Kết nối với máy chủ**
Đăng nhập vào công cụ quản lý cơ sở dữ liệu miễn phí này bằng cách sử dụng tên người dùng và mật khẩu máy chủ của bạn. Bây giờ nếu bạn muốn chỉ truy cập một cơ sở dữ liệu thì hãy nhập tên của nó. Bạn có thể để trống trường này để truy cập tất cả các cơ sở dữ liệu đã tồn tại trên máy chủ.
**Quản lý cơ sở dữ liệu**
Sau khi đăng nhập, bạn sẽ thấy một danh sách tất cả các cơ sở dữ liệu hiện tại của bạn. Nhấp vào bất kỳ cơ sở dữ liệu để quản lý nó.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Quản lý cơ sở dữ liệu với công cụ quản lý cơ sở dữ liệu quản trị viên">}}

Trên màn hình tiếp theo, bạn sẽ thấy danh sách tất cả các bảng của cơ sở dữ liệu đã chọn. Từ đây, bạn có thể xuất cơ sở dữ liệu hoặc các bảng của nó, thêm hoặc chỉnh sửa bảng/cột, thay đổi dữ liệu thông qua các truy vấn SQL và nhiều hơn nữa như được hiển thị ở đây:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Công cụ quản lý cơ sở dữ liệu">}}

**Tạo cơ sở dữ liệu mới**
Để tạo cơ sở dữ liệu mới, hãy nhấp vào cơ sở dữ liệu Tạo cơ sở dữ liệu, hãy nhập tên cơ sở dữ liệu và nhấp vào Lưu Lưu.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Công cụ quản lý cơ sở dữ liệu">}}

**Chèn/cập nhật bản ghi**
Thêm hồ sơ mới vào một bảng là khá đơn giản. Nhấp vào liên kết mục mới sẽ chuyển hướng bạn đến màn hình chèn. Ở đây bạn sẽ có thể thêm dữ liệu mới cho tất cả các cột trong bảng, cùng với kiểu dữ liệu để thêm dữ liệu mới là một quy trình nhanh chóng.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Quản trị viên so với phpmyadmin">}}


## Kết luận   {#conclusion}
Điều này đưa chúng ta đến cuối hướng dẫn quản trị này. Chúng tôi đã trải qua một số chủ đề quan trọng như Quản trị viên, Quản trị viên vs PhpMyAdmin và các khía cạnh khác của hệ thống quản lý cơ sở dữ liệu dựa trên web nguồn mở này. Hy vọng, bài đăng trên blog này sẽ giúp bạn chắc chắn nếu bạn đang muốn cài đặt một công cụ quản lý cơ sở dữ liệu nguồn mở. Nó là giao diện trực quan, thông minh và dễ sử dụng làm cho nó trở thành một công cụ quản lý cơ sở dữ liệu rất phổ biến. Hơn nữa, nó hỗ trợ nhiều cơ sở dữ liệu bao gồm MySQL, SQLite, MongoDB và nhiều hơn nữa, cùng với các biện pháp bảo mật để bảo vệ và ngăn chặn bất kỳ sự kiện hack độc hại nào. Nói chung, công cụ quản lý cơ sở dữ liệu này không chỉ là nguồn mở mà còn sử dụng miễn phí.
Cuối cùng, [containerize.com][9] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với danh mục [Công cụ quản lý cơ sở dữ liệu][10] để cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][11], [LinkedIn][12] và [Twitter][13].

## Khám phá
Để tìm hiểu thêm về các công cụ quản lý cơ sở dữ liệu dựa trên web miễn phí, vui lòng kiểm tra các trang sau:
  * [Quản trị viên | Hệ thống quản lý cơ sở dữ liệu dựa trên web miễn phí][14]
  * [Công cụ phần mềm DBMS nguồn mở hàng đầu][1]
  * [Top 5 Công cụ quản lý cơ sở dữ liệu nguồn mở vào năm 2021][15]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
