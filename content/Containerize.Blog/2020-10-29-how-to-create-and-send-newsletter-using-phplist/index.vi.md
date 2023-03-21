---
title: "Cách tạo và gửi bản tin bằng Phplist" 
seoTitle: "Cách tạo và gửi bản tin bằng Phplist" 
description: "PHPLIST là phần mềm bản tin nguồn mở hàng đầu để tiếp thị qua email. Đây là hướng dẫn của người mới bắt đầu để tạo và gửi các chiến dịch bản tin." 
date: Thu, 29 Oct 2020 18:30:18 +0000
author: Masood Anwer
summary: "Tạo và gửi bản tin bằng Phplist nguồn mở và tiếp cận với hàng triệu người đăng ký. Tăng cường sự tham gia của khách hàng với các bản cập nhật sản phẩm, chương trình khuyến mãi và các tính năng mới." 
url: /vi/how-to-create-and-send-newsletter-using-phplist/
categories: ['Newsletters']
---

## Tạo và gửi bản tin bằng Phplist nguồn mở và tiếp cận với hàng triệu người đăng ký. Tăng cường sự tham gia của khách hàng với các bản cập nhật sản phẩm, chương trình khuyến mãi và các tính năng mới.

{{< figure align=center src="images/How-to-send-newsletter-in-phpList.png" alt="Tạo và gửi bản tin bằng Phplist">}}

Tiếp thị là một phần quan trọng của bất kỳ doanh nghiệp trực tuyến hoặc ngoại tuyến. Tiếp thị qua email là một trong những công cụ dễ nhất để tiếp thị và cung cấp thông điệp đến khán giả lớn. Bạn có thể gửi email đến vài trăm người đăng ký theo cách thủ công nhưng rất khó để gửi email đến hàng ngàn hoặc thậm chí hàng triệu người. Vì vậy, có rất nhiều công cụ tiếp thị email nguồn mở có sẵn để tự động hóa nó.
PHPLIST là phần mềm nguồn mở phổ biến nhất để quản lý danh sách và bản tin. Chiến dịch là một thành phần cốt lõi của phplist cho phép bạn gửi tin nhắn đến một hoặc nhiều danh sách. Bạn có thể dễ dàng sử dụng nó để thiết kế và gửi các chiến dịch cho hàng triệu người đăng ký. PHPLIST đưa ra một bộ tính năng ấn tượng như người quản lý chiến dịch & danh sách, plugin, API REST và nhiều tính năng khác.
Trong bài đăng trên blog này, chúng tôi sẽ tập trung vào việc thiết kế và gửi chiến dịch email trong phplist. Chúng tôi sẽ bao gồm các chủ đề sau đây.
  * [Tạo bản tin/Chiến dịch][2]
  * [Chiến dịch lập kế hoạch][3]
  * [Gán danh sách cho chiến dịch][4]
  * [Chiến dịch kết thúc][5]
  * [Xử lý hàng đợi][6]
  * [Kết luận][7]

##**Tạo Chiến dịch/Bản tin** {#Create}
  * Đăng nhập vào giao diện quản trị của cài đặt phplist của bạn. Nhấp vào**Bắt đầu hoặc tiếp tục nút**nút trên bảng điều khiển hoặc gửi liên kết chiến dịch trong chiến dịch trong điều hướng bên trái.
  * Nhấp vào Bắt đầu nút Chiến dịch mới.
  * Điền vào các trường với các tùy chọn như chủ đề, từ dòng, nội dung và chân trang như trong hình ảnh dưới đây.

{{< figure align=center src="images/create-campaign.png" alt="Thiết kế bản tin trong phplist">}}


##**Chiến dịch lập lịch** {#schedule}
  * Lập lịch cho phép bạn chọn ngày khi bạn muốn bắt đầu chiến dịch. Chiến dịch sẽ không được gửi trước/sau ngày được chọn.
  * Bạn không cần phải thay đổi ngày, nếu bạn muốn gửi chiến dịch ngay lập tức.

{{< figure align=center src="images/scheduling.png" alt="Lên lịch bản tin trong Phplist">}}


##**gán danh sách cho chiến dịch** {#list}
Tất cả các danh sách sẽ hiển thị trong tab Danh sách, chọn Danh sách thích hợp. Chiến dịch sẽ cung cấp để chỉ gán danh sách. Tuy nhiên, bạn có thể làm cho danh sách công khai hoặc riêng tư trong khi tạo/cập nhật danh sách.

{{< figure align=center src="images/lists.png" alt="Gán danh sách cho bản tin trong phplist">}}


##**Chiến dịch kết thúc** {#finish}
Kết thúc là bước cuối cùng trong quá trình tạo chiến dịch. Bạn có thể thêm email để thông báo, thêm mã theo dõi Google Analytics. Nhấp vào nút**Gửi chiến dịch**để bắt đầu gửi tin nhắn cho người đăng ký. Bây giờ, bạn đã thực hiện với quá trình thiết kế bản tin và chiến dịch. Nhưng, bạn cần xử lý hàng đợi và bạn có thể đọc thêm về nó trong phần tiếp theo.

##**xử lý hàng đợi** {#queue}
Hàng đợi quy trình là quá trình để bắt đầu gửi chiến dịch. Bạn có thể bắt đầu quá trình thủ công, với tập lệnh dòng lệnh hoặc tạo công việc cron. Nó dễ dàng xử lý hàng đợi thủ công cho một vài thuê bao Hundered. Nhưng, thật tốt khi sử dụng Cron Job để xử lý hàng đợi, nếu bạn có hàng ngàn/triệu người đăng ký. Bạn có thể truy cập phplist chính thức [Trang web][8] để biết thông tin để tạo công việc cron.

##**Kết luận** {#conclusion}
PHPLIST là một công cụ hoàn hảo cho các doanh nghiệp muốn sử dụng phần mềm bản tin nguồn mở để tiếp thị qua email. Chúng tôi đã mô tả quá trình chi tiết để thiết kế và gửi các chiến dịch. Bạn có thể theo dõi nó cho bản tin tiếp theo của bạn và tận hưởng sức mạnh thực sự của phplist.
Cuối cùng, với một số hướng dẫn hấp dẫn hơn, [containerize.com][9] đều được thiết lập để tăng cường cơ sở hướng dẫn của nó. Để cập nhật thường xuyên, vui lòng duy trì kết nối với danh mục [Bản tin][10].

  
[1]: https://products.containerize.com/newsletter/phplist
[2]: #create
[3]: #schedule
[4]: #list
[5]: #finish
[6]: #queue
[7]: #conclusion
[8]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/newsletter/
