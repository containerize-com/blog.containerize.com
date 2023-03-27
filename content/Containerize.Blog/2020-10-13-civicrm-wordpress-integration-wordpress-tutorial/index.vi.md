---
title: "Tích hợp WordPress Civicrm | Hướng dẫn WordPress" 
seoTitle: "Tích hợp WordPress Civicrm | Hướng dẫn WordPress" 
description: "Tích hợp WordPress CivicRM cho phép bạn kiểm soát việc quản lý dữ liệu và quy trình công việc. Hướng dẫn tốt nhất về việc sử dụng hiệu quả của công dân nguồn mở với WordPress." 
date: Tue, 13 Oct 2020 08:23:40 +0000
author: muhammadmustafa
summary: "Trong hướng dẫn plugin WordPress này, chúng tôi sẽ học cách tích hợp CivicRM miễn phí với WordPress để đạt được lợi thế cạnh tranh về mặt quản lý liên lạc." 
url: /vi/civicrm-wordpress-integration-wordpress-tutorial/
categories: ['Blogging', 'Marketing Automation']
---

## Trong hướng dẫn plugin WordPress này, chúng tôi sẽ tìm hiểu cách tích hợp CivicRM miễn phí với WordPress để đạt được lợi thế cạnh tranh về mặt quản lý liên lạc.

{{< figure align=center src="images/integrate-civicrm-with-wordpress-banner-1024x536.png" alt="Civicrm WordPress">}}


## Tổng quan:
Chào mừng bạn đến với bài viết hướng dẫn này nói về **tích hợp WordPress của Civicrm** . Thực tế của vấn đề là chúng ta đang sống trong thời đại thông tin và dữ liệu. Một số điều cung cấp các tính năng đặc biệt cho doanh nghiệp của bạn như tự động hóa việc thu thập dữ liệu, giao tiếp nhất quán, các chiến dịch tiếp thị và các quy trình công việc kinh doanh khác. Trong thời đại hiện đại này, lượng dữ liệu đang tăng lên từng ngày. Các tổ chức nhận được dữ liệu này từ các nguồn dữ liệu khác nhau. Kết quả là, nó trở nên khó quản lý và biên dịch một lượng dữ liệu khổng lồ như vậy. Tuy nhiên, điều rất quan trọng là đảm bảo tính toàn vẹn và tính xác thực của dữ liệu là cơ sở của một chiến dịch tiếp thị hiệu quả. Ngoài ra, sự xuất hiện của dữ liệu ở nhiều nơi sinh ra sự rắc rối và quản lý sai lầm, và các nhóm hoạt động cảm thấy khó khăn khi xuất hiện trên cùng một trang và làm việc theo hướng thống nhất.
Mặt khác, có một số hệ thống quản lý nội dung đã đạt được sự hỗ trợ mạnh mẽ của cộng đồng người dùng và nhà phát triển vì quản lý nội dung mạnh mẽ và hệ thống tiếng vang thân thiện với SEO. Các hệ thống quản lý nội dung nguồn mở này cung cấp các phát triển và triển khai dễ dàng và nhanh chóng để đạt được các mục tiêu liên quan đến nội dung. Nó cung cấp hiệu quả chi phí, chức năng mở rộng và khả năng tự lưu trữ. Hướng dẫn plugin **WordPress này** là về sự tích hợp của [CIVICRM][2] với [WordPress][3] và chúng tôi sẽ bao gồm các điểm đạn sau đây
  * [Lợi ích của sự kết hợp này cho doanh nghiệp?][4]
  * [Làm thế nào để thiết lập cấu trúc thư mục?][5]
  * [Cách kích hoạt và cài đặt CivicRM trong WordPress?][6]

## Lợi ích của sự kết hợp này cho doanh nghiệp? {#benefits}

Trong phần của hướng dẫn **WordPress này**, chúng ta sẽ xem xét các lợi ích cốt lõi của việc tích hợp**Civicrm WordPress** . Sự phổ biến của [WordPress][3] đang tăng lên khi sự cạnh tranh đang tăng lên trên thị trường. Cộng đồng WordPress đã phát triển các plugin mới để tăng cường xô plugin. Do đó, việc bổ sung Civicrm vào nhóm plugin của WordPress đã thu hút được sự chú ý rất lớn từ các tổ chức phát triển mạnh để tự động hóa và tập trung vào quy trình làm việc kinh doanh của họ.
Sự tích hợp này là quan trọng do các khía cạnh nhất định. Đầu tiên, [CIVICRM][2] loại bỏ rắc rối trong việc quản lý các nguồn liên hệ của người dùng nằm ở những nơi khác nhau. Thứ hai, nó cung cấp bảo mật hoàn toàn bằng cách sao lưu dữ liệu thường xuyên của bạn. Thứ ba, nó dựa trên web và nguồn mở có nghĩa là bạn có thể truy cập dữ liệu của mình từ bất cứ đâu. Công cụ tự động hóa tiếp thị nguồn mở này được phát triển cho khu vực dân sự. Nó đã loại bỏ nhu cầu xuất dữ liệu sang các bảng và cơ sở dữ liệu khác nhau bằng cách cung cấp một giải pháp một cửa. Phần mềm CRM nguồn mở này lưu trữ tất cả dữ liệu vào cơ sở dữ liệu đến từ nhiều nguồn khác nhau như bản tin, trang web quản lý sự kiện, quản lý đóng góp, quản lý trường hợp, v.v. Các bộ dữ liệu tùy chỉnh không giới hạn, quản lý nhiệm vụ, quản lý người dùng, theo dõi các cam kết và thành viên mở, và nhiều hơn nữa.

## Làm thế nào để thiết lập một cấu trúc thư mục? {#directory}

Trước khi bắt đầu hướng dẫn plugin **WordPress này** , chúng tôi cho rằng bạn đã thiết lập WordPress và có sự hiểu biết cơ bản để cài đặt và kích hoạt các plugin. Hơn nữa, bạn có thể tìm thấy thông tin [tại đây][7] về việc thiết lập WordPress và các tính năng của nó.
Đầu tiên, tải xuống Civicrm từ [Trang web][8]. Chọn một tùy chọn có tên như là Tải xuống Civicrmx.x.x cho WordPress.
Sau khi tải xuống, hãy đặt tệp zip vào vị trí này /wp-content /plugin và trích xuất nó. Hãy chắc chắn rằng thư mục này có quyền truy cập của Viết.
Bạn có thể sử dụng lệnh này để cấp quyền truy cập của Write Write. `sudo Chmod 777 Server_Path/WP-Content/Plugins/Civicrm`
Thứ hai, tạo một thư mục trống có tên là Civ CivrMRM vào vị trí này /WP-Content /Uploads và cung cấp quyền truy cập của Write Write bằng cách sử dụng lệnh sau.
`sudo Chmod 777 Server_Path/WP-Content/Uploads/Civicrm`
**Lưu ý** : Đừng quên thay đổi các thư mục này thành mặc định. Bạn có thể chạy các lệnh sau để khôi phục trạng thái mặc định của các thư mục sau:
{{_LINE_29_}}
{{_LINE_30_}}
{{_LINE_31_}}
      Sudo Chown -r Tên người dùng Server_Path/WP -Content/Uploads/Civicrmsudo Chown -r Tên người dùng Server_Path/WP -Content/Plugins/Civicrm
{{_LINE_33_}}
{{_LINE_34_}}
{{_LINE_35_}}
Phần này của tích hợp WordPress Civicrm được hoàn thành. Hãy để di chuyển đến phần tiếp theo.

## Làm thế nào để kích hoạt và cài đặt Civicrm trong WordPress? {#install}

Phần này của hướng dẫn WordPress cho thấy các bước cài đặt và kích hoạt của công cụ tiếp thị dựa trên web* ***CIVICRM. Sau khi thiết lập cấu trúc thư mục, hãy truy cập các plugin****-> **Các plugin đã cài đặt** và bạn sẽ thấy Civicrm trong danh sách.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.18.07-1024x544.png" alt="Civicrm WordPress">}}

Lượt truy cập **kích hoạt** .

{{< figure align=center src="images/civi-1024x581.jpeg" alt="Hướng dẫn tự động hóa tiếp thị">}}

Sau khi kích hoạt CIVICRM, bạn sẽ tìm thấy tùy chọn CivicRM ở phía trên bên phải của trang WP-Admin. Chỉ cần nhấn tùy chọn đó và bạn sẽ hạ cánh trên màn hình **cài đặt** .
Trang sau sẽ được hiển thị với các chi tiết yêu cầu cùng với cấu hình cơ sở dữ liệu.

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.56.14-1024x632.png" alt="Hướng dẫn tự động hóa tiếp thị">}}

Nhấn nút Kiểm tra kiểm tra và cài đặt nút Civicrm. CIVICRM sẽ được cài đặt thành công và một thông báo thành công sẽ xuất hiện nếu các hướng dẫn trên đã được tuân thủ chính xác.

{{< figure align=center src="images/Screenshot-2020-10-10-at-03.06.05-1024x630.png" alt="Tích hợp WordPress Civicrm">}}

Cuối cùng, tab Menu **Civicrm WordPress** sẽ xuất hiện ở đầu bảng điều khiển quản trị viên.

{{< figure align=center src="images/Screenshot-2020-10-09-at-23.22.03-1024x586.png" alt="Hướng dẫn phát triển plugin WordPress">}}


## Phần kết luận
Tích hợp WordPress **Civicrm**là một tiện ích bổ sung thực sự hữu ích khi quản lý lưu trữ khổng lồ thông tin người dùng phân tán. Nó làm cho các quy trình công việc phức tạp đơn giản bằng cách cung cấp một bảng điều khiển trực quan. Bộ đôi của hai phần mềm nguồn mở này cung cấp giao diện thân thiện với người dùng cùng với các tiện ích khác nơi người dùng có thể điều hướng dễ dàng. May mắn thay, cộng đồng nguồn mở đã phát triển rất nhiều công cụ tự động hóa tiếp thị như [Mautic][9], [Suitecrm][10], [Espocm][11], v.v. Tất cả các giải pháp này đều miễn phí và dễ dàng triển khai trên đám mây hoặc trên localhost. Trên hết, các giải pháp này đi kèm với tài liệu toàn diện về phát triển và triển khai. Tuy nhiên, hướng dẫn plugin**WordPress này** sẽ rất hữu ích nếu bạn đang tìm cách tích hợp phần mềm tự động hóa tiếp thị với phần mềm quản lý nội dung của mình.
Cuối cùng, [Containererize.com][12] đang trong quá trình viết các hướng dẫn tiếp theo về việc tích hợp một số phần mềm nguồn mở khác. Để cập nhật thường xuyên, hãy giữ liên lạc với [Tự động hóa tiếp thị][1] và [Blog][13].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Hướng dẫn dành cho người mới bắt đầu về tích hợp WordPress Diễn đàn Vanilla][14]
  * [Làm thế nào để Dockerize WordPress với Docker Compose][15]
  * [Di chuyển từ WordPress sang Jekyll][16]
  * [Cách xây dựng trang web của bạn với WordPress và Gatsby][17]
  * [Hướng dẫn người mới bắt đầu di chuyển sang ma từ WordPress][18]
  * [Cách thực hiện nhiều người thuê trong Mautic][19]
  * [Cách thiết lập Maitic - Tích hợp Facebook][20]
  * [Thiết lập các chiến dịch Maitic bằng cách sử dụng Trình tạo chiến dịch][21]
  * [Tích hợp Maitic Drupal để tự động hóa việc nuôi dưỡng chì][22]
  * [Tin nhắn tức thời WordPress bằng Rocket.chat][23]
  * [Cách tích hợp Diễn đàn diễn ngôn với WordPress][24]
  * [Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket][25]
  * [Tự động hóa tiếp thị với tích hợp Maitic và WooC Commerce][26]
  * [Top 5 Nền tảng blog nguồn mở vào năm 2020][27]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][28]



[1]: https://products.containerize.com/marketing-automation
[2]: https://products.containerize.com/marketing-automation/civicrm
[3]: https://products.containerize.com/blogging/wordpress
[4]: #benefits
[5]: #directory
[6]: #install
[7]: https://products.containerize.com/blogging/wordpress/
[8]: https://civicrm.org/download
[9]: https://products.containerize.com/marketing-automation/mautic/
[10]: https://products.containerize.com/marketing-automation/suitecrm/
[11]: https://products.containerize.com/marketing-automation/espocrm/
[12]: https://href.li/?https://www.containerize.com/
[13]: https://products.containerize.com/blogging
[14]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
[17]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[18]:https://blog.containerize.com/blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
[19]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
[20]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[21]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[22]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[23]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[24]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[25]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[26]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[27]: https://blog.containerize.com/2020/10/07/top-5-open-source-blogging-platform-in-2020/
[28]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
