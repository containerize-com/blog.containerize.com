---
title: "Cách thiết lập phần mềm trò chuyện trực tiếp trên trang web | Rocket.Chat" 
seoTitle: "Cách thiết lập phần mềm trò chuyện trực tiếp trên trang web | Rocket.Chat" 
description: "Rocket.chat rất dễ thiết lập, giúp các nhóm và khách hàng giao tiếp hiệu quả. Phần mềm trò chuyện trực tiếp này là nguồn mở, đa nền tảng và tự lưu trữ." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "Phần mềm hỗ trợ trò chuyện trực tiếp mang lại sự tiện lợi và hiệu quả trong việc cung cấp hỗ trợ khách hàng. Hãy tìm hiểu cách cài đặt Rocket.Chat trên trang web kinh doanh của bạn." 
url: /vi/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## Phần mềm hỗ trợ trò chuyện trực tiếp mang lại sự tiện lợi và hiệu quả trong việc cung cấp hỗ trợ khách hàng. Hãy cùng học cách cài đặt Rocket.Chat trên trang web kinh doanh của bạn.

{{< figure align=center src="images/rocketchat-1.png" alt="Phần mềm trò chuyện trực tiếp">}}


## Tổng quan
Chúng tôi đã xuất bản một số bài đăng trên blog liên quan đến phần mềm trò chuyện trực tiếp nguồn mở như [phần mềm trò chuyện hỗ trợ khách hàng miễn phí hàng đầu cho trang web][1], [Tin nhắn tức thời WordPress sử dụng Rocket.chat][2], và một số khác. Trong bài đăng trên blog này, chúng tôi sẽ đi qua phần mềm hỗ trợ khách hàng hàng đầu Rocket.chat. Với sự gia tăng lớn trong lưu lượng truy cập trực tuyến, các doanh nghiệp cảm thấy khó khăn để giải trí một số lượng lớn các yêu cầu đúng hạn. Khách truy cập đến trang web của bạn, có xu hướng có được một số thông tin liên quan đến sản phẩm hoặc dịch vụ và rời khỏi trang web của bạn trong trường hợp không nhận được phản hồi. Do đó, hỗ trợ trò chuyện trực tiếp giúp bạn chào đón khách hàng của mình một cách chủ động trong khi họ đang đi qua trang web của bạn. Hoặc, trong trường hợp họ cần một số trợ giúp và làm rõ để đưa ra quyết định mua hàng của họ.
Hỗ trợ trò chuyện trực tiếp làm tăng cơ hội chuyển đổi khách truy cập thành khách hàng. Có rất nhiều nguồn mở**hỗ trợ trò chuyện trực tiếp Softwar**e có sẵn. Nhưng, Rocket.chat đã đạt được rất nhiều sức hấp dẫn vì các tính năng của nó. Và nó được coi là một giải pháp thay thế cho các phần mềm trò chuyện hàng đầu trong ngành như Slack và Microsoft Team. Trong bài viết này, chúng tôi sẽ học cách cài đặt Rocket.Chat trên máy chủ và sau đó là cách định cấu hình trên trang web của bạn. Vì vậy, hãy để bắt đầu bằng cách bao gồm các điểm sau.
* [**Rocket.cha**t?][3]
* **[Cách cài đặt Rocket.Chat?THERTHER4
* **[Bật tính năng trò chuyện trực tiếp][5]**
* **[Cài đặt tiện ích trò chuyện trực tiếp trên trang web của bạn][6]**
* **[Kết luận][7]**

## Rocket.chat   {#Intro} là gì
[Rocket.chat][8] là một trong những phần mềm trò chuyện trực tiếp phổ biến**. Nó có phiên bản trò chuyện trực tiếp miễn phí như một phiên bản cộng đồng cũng như phiên bản trò chuyện trực tiếp được lưu trữ được trả tiền cho các công ty lớn có các tính năng trò chuyện nội bộ riêng tư. Rocket.Chat hỗ trợ hỗ trợ khách hàng trò chuyện trực tiếp cùng với tính năng trò chuyện nhóm. Đó là nền tảng chéo và cung cấp hỗ trợ cho hầu hết các nền tảng phổ biến như Windows, Mac, Linux và các ứng dụng di động. Phần mềm hỗ trợ khách hàng**này**an toàn, có thể mở rộng và cung cấp tích hợp với các ứng dụng phổ biến của bên thứ ba như Trello, Google Drive, v.v. Có nhiều tính năng mạnh mẽ mà Rocket.chat cung cấp như nhiều phòng, phòng trò chuyện riêng và nhóm, thông báo, biểu tượng cảm xúc, xác thực LDAP và giao diện RESTful. Ngoài ra, công cụ miễn phí này rất dễ triển khai và đi kèm với khả năng tự lưu trữ. Hơn nữa, nó cung cấp một giao diện logic và thân thiện với người dùng, nơi người dùng có thể sửa đổi các chủ đề như tối, sáng hoặc đen.
Phần mềm hỗ trợ trò chuyện**này được viết bằng JavaScript, tất cả các tài liệu đều có sẵn liên quan đến phát triển và triển khai. Do đó, bạn có thể tìm thấy tất cả các mã nguồn trên [GitHub][9]. Để biết thêm chi tiết, bạn có thể đọc về Rocket.chat [tại đây][10].

## Cách cài đặt Rocket.Chat   {#install}
Vì vậy, chúng tôi biết Rocket.chat và trong phần này là gì, chúng tôi sẽ tìm hiểu cách cài đặt phần mềm trò chuyện trực tiếp này. Bạn có thể cài đặt Rocket.chat từ nhiều thị trường khác nhau, như Snaps Ubuntu, Dockerhub hoặc cài đặt nó trên máy chủ của riêng bạn. Trong bài viết này, chúng tôi sẽ tập trung vào cài đặt Rocket.Chat, thông qua Snaps trên Ubuntu. Đó là phương pháp cài đặt nhanh nhất.
Snaps là an toàn. Rocket.chat và tất cả các phụ thuộc của nó được phân lập với phần còn lại của hệ thống của bạn. Snaps cũng tự động cập nhật khi có một bản phát hành mới.
Trên Ubuntu trước, cài đặt Snap bằng lệnh sau
```
sudo apt-get install snapd
```
Sau đó cài đặt máy chủ Rocket.Chat thông qua lệnh snap.
```
sudo snap install rocketchat-server
```
Snap đã lên và chạy. Duyệt đến http: // localhost: 3000 và thiết lập Rocket.chat. Bạn có thể định cấu hình proxy nginx để lập bản đồ Rocket.Chat với tên miền của bạn.

## Bật tính năng trò chuyện trực tiếp   {#Enable}
Khi phần mềm Rocket.Chat được cài đặt và cấu hình, bước tiếp theo là kích hoạt các tính năng của nó. Phần này của bài đăng trên blog mô tả cách bật phần mềm hỗ trợ trò chuyện**trên trang web của bạn. Để kích hoạt tính năng LiveChat trên thể hiện Rocket.Chat của bạn:
1. Đi đến**Quản trị**

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Rocket.Chat Quản trị">}}

2. Tìm kiếm ‘**Omnichannel**‘ Trong**Cài đặt**và bật nó.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat Tìm kiếm Omini">}}

Sau khi được bật, một quản trị viên sẽ có quyền truy cập vào cài đặt bảng Omnichannel thông qua menu mới có tên Omnichannel ở menu thả xuống góc trên cùng bên trái.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Kênh Rocket.Chat Omini">}}

Và sau đó định cấu hình tiện ích trò chuyện trực tiếp

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat LiveChat Widget">}}


## **Cài đặt tiện ích trò chuyện trực tiếp trên trang web của bạn** {#Widget}
Trong phần này, chúng tôi sẽ cài đặt các tiện ích trò chuyện trực tiếp trên trang web kinh doanh. Bây giờ, để truy cập**Cài đặt LiveChat**Cài đặt:
Truy cập**Cài đặt LiveChat**trong cài đặt bảng điều khiển Omnichannel, như được hiển thị bên dưới và sao chép đoạn mã đã cho.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Tiện ích Rocket.Chat">}}

Và, dán mã này trên thẻ cuối cùng trên trang web của bạn; Tiện ích trò chuyện trực tiếp sẽ xuất hiện ở góc dưới bên phải của trang web của bạn. Như được hiển thị dưới đây theo cấu hình trò chuyện trực tiếp của bạn.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Phần mềm trò chuyện trực tiếp">}}

{{_LINE_48_}}

## Kết luận   {#conclusion}
Điều này đưa chúng ta đến cuối bài viết trên blog này. Trong bài viết này, chúng tôi đã trải qua Rocket.Chat, cách cài đặt Rocket.chat và chúng tôi cũng đã chỉ cho bạn cách cài đặt nó trên máy chủ của riêng bạn thông qua snaps Ubuntu. Chúng tôi cũng đã học cách kích hoạt tính năng trò chuyện trực tiếp và cài đặt tiện ích trên trang web của bạn. Ngoài ra,**Phần mềm hỗ trợ khách hàng**đã trở thành một thành phần bắt buộc của bất kỳ trang web kinh doanh nào do một số yếu tố mà chúng tôi đã thảo luận ở trên. Tuy nhiên, bài đăng trên blog này sẽ thực sự giúp bạn nếu bạn đang muốn triển khai một phần mềm trò chuyện trực tiếp nguồn mở trên trang web kinh doanh của bạn. Hơn nữa, có nhiều phần mềm hỗ trợ trò chuyện khác**& các bài viết có sẵn trong phần Khám phá trên mạng bên dưới mà bạn có thể xem.
Cuối cùng, [**containerize.com**][11] đang viết các bài viết trên nguồn mở hơn nữa**Ứng dụng trò chuyện nguồn mở.**Do đó, vui lòng giữ liên lạc với danh mục [Trò chuyện trực tiếp][12] để cập nhật thông thường. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][13], [LinkedIn][14] và [Twitter][15].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan.
  * [Zulip][16]
  * [LET-CHAT][17]
  * [Botpress][18]
  * [Cách tạo Bot FAQ dựa trên AI cho doanh nghiệp của bạn bằng BotPress][19]
  * [Top 5 Phần mềm trò chuyện hỗ trợ khách hàng miễn phí cho trang web][1]
  * [Tin nhắn tức thời WordPress bằng Rocket.chat][2]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][20]
  * [Cách tạo và chạy bot trong Rocket.chat bằng BotPress][21]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][20]

  
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
