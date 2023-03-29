---
title: "Hướng dẫn di chuyển từ WordPress sang Ghost | Ghost WordPress" 
seoTitle: "Hướng dẫn di chuyển từ WordPress sang Ghost | Ghost WordPress" 
description: "Hướng dẫn này là về cách di chuyển từ WordPress sang Ghost. Chúng tôi sẽ tìm hiểu cách di chuyển các bài đăng và trang của bạn sang ma từ trang web WordPress hiện có." 
date: Wed, 18 Nov 2020 10:07:06 +0000
author: Assad Mahmood
summary: "Ghost và WordPress là hai nền tảng xuất bản nội dung nguồn mở hàng đầu. Trong hướng dẫn này, chúng tôi sẽ học cách di chuyển nội dung từ WordPress sang Ghost." 
url: /vi/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
categories: ['Blogging']
---

## Ghost và WordPress là hai nền tảng xuất bản nội dung nguồn mở hàng đầu. Trong hướng dẫn này, chúng tôi sẽ học cách di chuyển nội dung từ WordPress sang Ghost.

{{< figure align=center src="images/ghostToWordpress-1024x536.png" alt="Di cư từ WordPress sang ma">}}


## Tổng quan
Trong quá khứ, chúng tôi đã xuất bản nhiều bài viết về các chủ đề như [Boost Office của bạn với tích hợp WordPress Civicrm miễn phí][1], [Cách tích hợp Diễn đàn diễn ngôn với WordPress][2], và nhiều hơn nữa. Ghost là một nền tảng blog nguồn mở mới nổi. Đây là một CMS Node.js để xuất bản nội dung và đi kèm với một giao diện đơn giản và sạch sẽ giúp nó dễ sử dụng. Nó là một nền tảng tuyệt vời cho người mới bắt đầu khi nó tập trung vào Markdown thay vì chỉnh sửa Wysiwyg. Sức mạnh và tốc độ của Node.js làm cho Ghost rất nhanh. Do tính đơn giản của nền tảng, rất nhiều người dùng đang chuyển đổi từ các nền tảng khác. Vì WordPress là nền tảng số một để quản lý nội dung.
Do đó, nhiều người dùng hơn **di chuyển từ WordPress sang Ghost** . Có rất nhiều nội dung bao gồm các tệp phương tiện, nhận xét, bài đăng, v.v. Có sẵn các plugin giúp bạn di chuyển nội dung từ WordPress sang Ghost. Lợi ích chính của việc áp dụng ma là nó tập trung vào tối ưu hóa công cụ tìm kiếm. Trong hướng dẫn Ghost WordPress này, chúng tôi sẽ trải qua tất cả các bước di chuyển bằng cách sử dụng plugin xuất chính thức WordPress.
* **[một phần giới thiệu briedf của wordpress][3]** 
* **[Ghost là gì?][4]** 
* **[Yêu cầu][5]** 
* **[Xuất nội dung từ Wrodpress bằng plugin][6]** 
* **[Nhập nội dung vào Ghost][7]** 
* **[Kết luận][8]** 

## **Một phần giới thiệu briedf của wordpress** {#wp}

[WordPress][9] là một nền tảng blog nguồn mở hàng đầu đã cung cấp một số lượng lớn các trang web. Phần mềm viết blog miễn phí này là tự lưu trữ, đa ngôn ngữ và cung cấp hỗ trợ cho nhiều ngôn ngữ. Hơn nữa, cộng đồng phát triển của WordPress rất sôi động và đã phát triển một nhóm các plugin hữu ích khổng lồ có sẵn dễ dàng. Các plugin này giải quyết hầu hết mọi trường hợp sử dụng của trang web doanh nghiệp của bạn. Ngoài ra, nó được viết bằng PHP và đi kèm với tài liệu toàn diện về phát triển và triển khai. Tất cả các mã nguồn có sẵn trên GitHub. Hơn nữa, nền tảng viết blog này có khả năng mở rộng cao, có thể định cấu hình và cung cấp tích hợp với các ứng dụng của bên thứ ba. Có một bảng điều khiển rất hợp lý và dễ hiểu, nơi người dùng có thể kéo và thả các yếu tố để sửa đổi giao diện và cảm nhận của trang web của họ.

## **Ghost là gì?** {#ghost}

[Ghost][10] là một nền tảng viết blog nguồn mở phổ biến khác. Đây là một trong những nền tảng xuất bản nội dung được sử dụng rộng rãi nhất được các nhà phát triển và chủ sở hữu trang web chấp nhận cao. Ngoài ra, Ghost rất thân thiện với SEO và đi kèm với các chủ đề, biểu mẫu, bản tin email và đăng ký tích hợp. Phần mềm viết blog miễn phí này được viết bằng JavaScript và tất cả các tài liệu có sẵn liên quan đến phát triển và triển khai.

## Yêu cầu {#requirements}

Trong phần Hướng dẫn Ghost WordPress, chúng ta sẽ thấy các yêu cầu cần thiết để di chuyển từ WordPress sang Ghost. Với plugin xuất khẩu WordPress chính thức, bạn có thể dễ dàng di chuyển nội dung của mình từ WordPress sang Ghost. Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn cách xuất nội dung từ WordPress sang trang web ma. Vì vậy, bạn phải cài đặt hoạt động của plugin WordPress và WordPress **được cài đặt** .

## Xuất nội dung từ WordPress {#export}

Trước hết, bạn sẽ phải cài đặt plugin. Thực hiện theo các bước sau để cài đặt plugin
* Nhấp vào **plugins** từ menu thanh bên
* Nhấp vào **Thêm mới**và sử dụng trường tìm kiếm ở góc trên cùng bên phải để tìm kiếm**xuất khẩu ma** 
* **Cài đặt**và **Kích hoạt** plugin bởi Foundation**Ghost Foundation** 

{{< figure align=center src="images/ghost-activate-plugin.png" alt="Cài đặt và kích hoạt plugin Ghost cho WordPress">}}

* Sau khi plugin được kích hoạt điều hướng đến **công cụ** từ menu bên
* Nhấp vào **Xuất ra Ghost** với menu thanh bên.
  * Bạn sẽ được cung cấp một hướng dẫn về cách chuẩn bị nội dung WordPress của bạn cho Ghost.
  * Vì, Ghost sử dụng thẻ thay vì các danh mục nên plugin sẽ giúp bạn chuyển đổi các danh mục thành thẻ.
{{_LINE_37_}}
{{_LINE_38_}}
    Các bước sau đây sẽ thay đổi vĩnh viễn cấu trúc nội dung của trang web WordPress của bạn. Nếu bạn không chắc chắn thực hiện thay đổi này, vui lòng sử dụng công cụ xuất WordPress tiêu chuẩn trong Công cụ> Xuất để tạo bản sao lưu đầy đủ tất cả nội dung của bạn.
{{_LINE_40_}}
{{_LINE_41_}}
* Điều hướng đến **Nhập** trong menu thanh bên
* Nhấp vào **Chạy nhập cảnh** trong bộ chuyển đổi phân loại****mục nhập.
  * Sử dụng các hộp kiểm để chọn các danh mục bạn muốn nhập vào thẻ của mình và do đó vào trang web ma của bạn.
* Sau đó nhấp vào **Chuyển đổi danh mục thành thẻ** .
* Điều hướng trở lại **Xuất sang Ghost**trong**Công cụ** trong menu thanh bên.
* Nhấp vào nút **Tải xuống tệp Ghost** . Bạn đã tải xuống một tệp zip chứa tất cả nội dung của bạn.

## Nhập nội dung vào Ghost {#import}

Trong phần này của hướng dẫn Ghost WordPress, chúng tôi sẽ triển khai các bước để nhập nội dung vào Ghost.
* Đăng nhập vào Ghost Admin và điều hướng đến **Labs** Xem.
* Nhấp vào nút **Chọn tệp**trong tùy chọn**Nhập nội dung** và chọn tệp zip đã xuất của bạn
* Nhấp vào **Nhập** . Tất cả nội dung của bạn sau đó sẽ được nhập vào trang web ma của bạn.
Tại thời điểm này, Ghost không có bất kỳ hệ thống bình luận nào được xây dựng. Sự thay thế phổ biến nhất là Disqus.

## Phần kết luận {#conclusion}

Điều này đưa chúng ta đến cuối bài viết trên blog này. Trong hướng dẫn Ghost WordPress này, chúng tôi đã học cách chuẩn bị nội dung WordPress của bạn sẵn sàng để di chuyển sang ma. Chúng tôi đã sử dụng plugin di chuyển ma chính thức của Quỹ Ghost để thực hiện di chuyển. Ngoài ra, bài đăng trên blog này chắc chắn sẽ giúp bạn nếu bạn đang tìm cách di chuyển từ WordPress sang Ghost vì chúng tôi đã đề cập đến tất cả các bước cần thiết. Hơn nữa, có nhiều nền tảng xuất bản nội dung nguồn mở và các bài viết hướng dẫn được đề cập trong phần khám phá trên mạng bên dưới. Tuy nhiên, cả hai nền tảng blog nguồn mở này là phần mềm hàng đầu hàng đầu cung cấp các tính năng cấp doanh nghiệp để đáp ứng nhu cầu trang web kinh doanh của bạn.
Cuối cùng, [containerize.com][11] đã viết các bài đăng trên blog mới trên phần mềm nguồn mở hơn nữa. Do đó, vui lòng duy trì kết nối với nền tảng [này][12] để cập nhật thường xuyên.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [WordPress][9]
  * [Jekyll][13]
  * [Diễn ngôn][14]
  * [Ghost][10]
  * [Làm thế nào để Dockerize WordPress với Docker Compose][15]
  * [Cách bật nén GZIP trong WordPress để tốt hơn Pagspeed và SEO][16]
  * [Tăng cường khách hàng tiềm năng của bạn với tích hợp WordPress công dân miễn phí][1]
  * [Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket][17]
  * [Cách tích hợp diễn đàn diễn ngôn với WordPress][2]
  * [Tăng lưu lượng tìm kiếm trang web bằng cách theo dõi 7 blog SEO hàng đầu][18]
  * [Cách xây dựng trang web của bạn với WordPress và Gatsby][19]



[1]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[2]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[3]: #wp
[4]: #ghost
[5]: #requirements
[6]: #export
[7]: #import
[8]: #conclusion
[9]: https://products.containerize.com/blogging/wordpress/
[10]: https://products.containerize.com/blogging/ghost/
[11]: https://www.containerize.com/
[12]: https://blog.containerize.com/
[13]: https://products.containerize.com/blogging/jekyll/
[14]: https://products.containerize.com/discussion-forum/discourse/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
[17]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[18]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[19]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
