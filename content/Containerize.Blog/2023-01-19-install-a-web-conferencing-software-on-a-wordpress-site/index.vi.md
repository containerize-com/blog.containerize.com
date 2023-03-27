---
title: "Cài đặt phần mềm hội nghị web trên trang web WordPress" 
seoTitle: "Cài đặt phần mềm hội nghị web trên trang web WordPress" 
description: "Thực hiện theo hướng dẫn này để tìm hiểu về một phần mềm hội nghị web nguồn mở BigBluebutton. Hãy khám phá cách cài đặt Plugin BigBluebutton trên WordPress." 
date: Thu, 19 Jan 2023 20:06:03 +0000
author: muhammadmustafa
summary: "Cài đặt Plugin BigBluebutton trên trang web doanh nghiệp dựa trên WordPress của bạn để tiến hành các cuộc họp ảo. Nó là miễn phí, nguồn mở và cung cấp một loạt các tính năng." 
url: /vi/install-a-web-conferencing-software-on-a-wordpress-site/
categories: ['Blogging', 'Video Conferencing Software']
---

## Cài đặt Plugin BigBluebutton trên trang web doanh nghiệp dựa trên WordPress của bạn để tiến hành các cuộc họp ảo. Nó là miễn phí, nguồn mở và cung cấp một loạt các tính năng.

{{< figure align=center src="images/Install-a-Web-Conferencing-Software-on-a-WordPress-Site.png" alt="Phần mềm hội nghị web trên trang web WordPress">}}


## Tổng quan
Chúng tôi ở đây với một bài đăng trên blog khác trong danh mục [Phần mềm hội nghị video nguồn mở][1]. Có một số cách nhất định để giao tiếp từ xa như email và cuộc gọi video. Tuy nhiên, các cuộc họp trực tiếp luôn hiệu quả hơn và thuận tiện hơn so với email hoặc trò chuyện. Trong thế giới phát triển nhanh chóng này, mọi người thực sự không quan tâm đến thời gian và không gian. Bây giờ, các tổ chức nhỏ/lớn đã bắt đầu sử dụng  **các công cụ cộng tác từ xa** để tiến hành các hội nghị ảo. Mặc dù có nhiều nền tảng cuộc họp web cung cấp các công cụ mạnh mẽ để tiến hành các hội nghị video, tất cả chúng đều được trả tiền. Vì vậy, cảm nhận được nhu cầu này, cộng đồng nguồn mở đã phát triển một số giải pháp cấp độ doanh nghiệp cho  **Dịch vụ hội nghị web**  . Ngoài ra, các nền tảng miễn phí này đưa ra một thị trường khổng lồ và được hỗ trợ bởi một cộng đồng nhà phát triển sôi động. Trong bài đăng trên blog này, chúng tôi sẽ tìm hiểu **Cách cài đặt phần mềm hội nghị web**  trên trang web [WordPress][2].
Các điểm sau sẽ được đề cập trong bài viết này:
* [  **BigBluebutton là gì?**  ][3]
* [  **Một phần giới thiệu ngắn gọn về WordPress**  ][4]
*  **[Cách cài đặt Plugin BigBluebutton trong WordPress?][5]**  

##  **BigBluebutton là gì?**  {#What-is-BigBlueButton}

[BigBluebutton][6] là một phần mềm cộng tác video miễn phí nguồn mở*  ***với một loạt các tính năng cấp doanh nghiệp. Phần mềm nguồn mở này rất có thể mở rộng và cung cấp tích hợp với nhiều ứng dụng phổ biến như WordPress, [Redmine][7], [Schoology][8], [Drupal][9] và Canvas. Ngoài ra, nó cung cấp một bảng trắng được chia sẻ, gửi tin nhắn công cộng/riêng tư, âm thanh HD, giơ tay điện tử, cùng với các công cụ trình bày phong phú. Hơn nữa,**  BigBluebutton**được hỗ trợ HTML5 và hoạt động tốt trên tất cả các trình duyệt web phổ biến.
Hơn nữa, phần mềm hội nghị web**này có một cộng đồng nhà phát triển rất lớn và sống động. Có các số liệu thống kê rất tốt trên [GitHub repo][10] với 7,8k sao và dĩa 5,8k. BigBluebutton được viết bằng JavaScript cùng với đầu vào từ các ngôn ngữ khác như Java và Ruby. Trên thực tế, các nhà phát triển có thể tìm thấy tài liệu toàn diện về phát triển, triển khai và sử dụng. Vì vậy, bạn có thể thiết lập phần mềm tự lưu trữ này trên một máy chủ cục bộ hoặc đám mây một cách dễ dàng.

##  **Một đoạn giới thiệu ngắn gọn về WordPress**  {#A-brief-intro-to-WordPress}

[WordPress][2] là một trong những nền tảng blog nguồn mở  **hàng đầu**  trong danh mục phần mềm trang web. Phần mềm nguồn mở này thân thiện với người dùng ngay cả một nhà phát triển web cấp độ mới bắt đầu có thể thực hiện việc xây dựng trang web và khởi chạy nó. Ngoài ra, WordPress có thể cấu hình cao và bạn có thể tùy chỉnh nó theo yêu cầu kinh doanh của bạn. Trên hết, nó có một [Marketplace][11] lớn, nơi bạn có thể tìm thấy một số plugin.
Phần mềm blog  **này**  đi kèm với các khả năng tự lưu trữ và có sẵn hỗ trợ hoàn toàn cho nhiều ngôn ngữ. Hơn nữa, có các số liệu thống kê rất tốt trên [GitHub][12] của nó và bạn có thể tải xuống mã nguồn và thiết lập nó dễ dàng. Hơn nữa, bạn có thể cài đặt một plugin cho bất kỳ chức năng nào trong trang web WordPress của bạn. Trong thực tế, bạn có thể tìm thấy các plugin cho các trang web thuộc bất kỳ danh mục nào. Nó chủ yếu được viết bằng PHP và bạn có thể tìm thấy các hướng dẫn đầy đủ về phát triển, triển khai và sử dụng.

##  **Cách cài đặt Plugin BigBluebutton trong WordPress?**  {#How-to-install-BigBlueButton-plugin-in-WordPress}

Phần này sẽ trình bày cách  **cài đặt phần mềm hội nghị web trên trang web WordPress**  . Ngoài ra, chúng tôi cũng sẽ khám phá plugin BigBluebutton hơn một chút. Trước khi di chuyển xa hơn, hãy đảm bảo bạn đã cài đặt WordPress trên máy của mình và có một trang web kinh doanh lên và chạy.
Vui lòng truy cập [Liên kết][2] này trong trường hợp bạn chưa cài đặt WordPress, bạn có thể tìm thấy các hướng dẫn cài đặt hoàn chỉnh.
Hãy bắt đầu quá trình cài đặt của BigBluebutton [plugin][13] trên WordPress.
Chuyển đến bảng điều khiển WordPress và mở tùy chọn plugin plugin và nhấn vào Thêm mới. Viết BigBluebutton vào thanh tìm kiếm và bạn sẽ tìm thấy plugin hiển thị vị trí thứ nhất trong tìm kiếm như trong hình dưới đây:
{{_LINE_29_}}
Bây giờ, hãy nhấn nút Instal Instal Now ngay bây giờ để cài đặt phần mềm hội nghị web  **này**  và nhấn vào kích hoạt trực tuyến để kích hoạt plugin. Khi kích hoạt còn sống, bạn có thể bắt đầu sử dụng phần mềm hội nghị truyền hình này. Di chuyển về phía trước, bạn có thể thấy một bổ sung mới của một mục menu, phòng phòng trên bảng điều khiển bên trái của cửa sổ như trong hình ảnh bên dưới.

{{< figure align=center src="images/bigbluebutton-plugin-1024x516.png" alt="Plugin BigBluebutton">}}

Vì vậy, bây giờ, bạn có thể tạo phòng họp bằng cách tạo và xuất bản các phòng nơi bạn có thể tiến hành các cuộc họp video với bạn bè. Ngoài ra, bạn có thể tùy chỉnh giao diện của các phòng bằng cách thay đổi màu nền và tải lên logo thương hiệu. Trong hình ảnh dưới đây, bạn có thể thấy rằng chúng tôi đã tạo một cuộc họp và giao diện người dùng của phòng họp rất phong phú với các tính năng như trò chuyện trực tiếp và ghi chú chia sẻ.

{{< figure align=center src="images/bigbluebutton-plugin-ui-1024x532.png" alt="UI plugin bigbluebutton">}}


## gói lên
Điều này đưa chúng ta đến cuối bài viết trên blog này. Chúng tôi hy vọng bạn đã học được cách cài đặt  **Phần mềm hội nghị web** trên trang web WordPress. Hơn nữa, chúng tôi cũng đã trải qua quá trình sáng tạo phòng họp.  **Plugin BigBluebutton**  cung cấp rất nhiều khi tiến hành các cuộc họp trực tiếp ảo. Vì phần mềm hội nghị web **này**  là nguồn mở để bạn có thể tùy chỉnh nó để đáp ứng các yêu cầu kinh doanh của mình. Hơn nữa, bạn có thể tìm thấy một số bài viết thực sự thú vị trong phần Xem thêm.
Cuối cùng, [containerize.com][14] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với [[phần mềm hội nghị video][1] và [nền tảng viết blog][15] danh mục][16] để cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][17], [LinkedIn][18] và [Twitter][19].

## Đặt một câu hỏi
Bạn có thể cho chúng tôi biết về câu hỏi hoặc truy vấn của bạn trên [Diễn đàn] của chúng tôi [20].

## Câu hỏi thường gặp
 **Làm cách nào để thêm cuộc gọi video vào trang web WordPress của tôi?** 
Bạn có thể thêm phần mềm hội nghị web vào trang web [WordPress][2] của bạn bằng cách sử dụng BigBluebutton [plugin][13] này. Phần mềm này là nguồn mở và cung cấp nhiều tính năng để thiết lập các cuộc gọi video trực tiếp.
 **Làm cách nào để thêm BigBluebutton vào WordPress?** 
Thực hiện theo điều này [liên kết][5] để tìm hiểu quá trình cài đặt và thiết lập quy trình trên [WordPress][2].

## Xem thêm
  * [Jitsi Gặp gỡ WordPress là gì và cách cài đặt nó là gì?][21]
  * [Top 5 phần mềm hội nghị video nguồn mở năm 2021][22]
  * [Hướng dẫn từng bước để thiết lập các nguồn mở Jitsi Meet][23]



 [1]: https://products.containerize.com/video-conferencing/
 [2]: https://products.containerize.com/blogging/wordpress/
 [3]: #What-is-BigBlueButton
 [4]: #A-brief-intro-to-WordPress
 [5]: #How-to-install-BigBlueButton-plugin-in-WordPress
 [6]: https://products.containerize.com/video-conferencing/bigbluebutton/
 [7]: https://products.containerize.com/project-management/redmine/
 [8]: https://app.schoology.com/login
 [9]: https://products.containerize.com/content-management/drupal/
 [10]: https://github.com/bigbluebutton/bigbluebutton
 [11]: https://wordpress.org/plugins/
 [12]: https://github.com/WordPress/WordPress
 [13]: https://wordpress.org/plugins/video-conferencing-with-bbb/
 [14]: https://www.containerize.com/
 [15]: https://products.containerize.com/blogging/
 [16]: https://products.containerize.com/social-network-platforms/
 [17]: https://web.facebook.com/containerize
 [18]: https://www.linkedin.com/company/containerize/
 [19]: https://twitter.com/containerize_co
 [20]: https://forum.containerize.com/
 [21]: https://blog.containerize.com/blogging/what-is-jitsi-meet-wordpress-plugin-and-how-to-install-it/
 [22]: https://blog.containerize.com/video-conferencing-software/top-5-open-source-video-conferencing-software-of-2021/
 [23]: https://blog.containerize.com/video-conferencing-software/how-to-set-up-open-source-jitsi-meet/
