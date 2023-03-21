---
title: "Tích hợp Mautic & Joomla cho tự động hóa tiếp thị kỹ thuật số " 
seoTitle: "Tích hợp Mautic & Joomla cho tự động hóa tiếp thị kỹ thuật số" 
description: "Tích hợp Mautic và Joomla có thể giúp doanh nghiệp của bạn tự động hóa tiếp thị kỹ thuật số. Nó giúp tiếp thị sản phẩm thông qua các chiến dịch Maitic." 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "Tích hợp Mautic và Joomla có thể giúp doanh nghiệp của bạn tự động hóa tiếp thị kỹ thuật số. Nó giúp tiếp thị sản phẩm thông qua các chiến dịch Maitic trực tuyến." 
url: /vi/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## Tích hợp Mautic và Joomla có thể giúp doanh nghiệp của bạn tự động hóa tiếp thị kỹ thuật số. Nó giúp tiếp thị sản phẩm thông qua các chiến dịch Maitic trực tuyến.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Tích hợp Ma Ma và Joomla">}}


## Làm thế nào tích hợp này có thể giúp doanh nghiệp của bạn:
Tích hợp Maitic và Joomla sẽ cho phép bạn tiếp thị sản phẩm/dịch vụ của mình một cách rất dễ dàng nhưng hiệu quả. Một giải pháp tiếp thị nguồn mở miễn phí cung cấp cho bạn một sự kiểm soát tuyệt vời đối với các chiến dịch tiếp thị và rất đơn giản để tiếp tục chiến dịch nhỏ giọt theo tình huống. Ví dụ: nó cung cấp cho bạn thông tin rằng nếu khách hàng đã đọc email hoặc truy cập các trang sản phẩm của bạn. Sử dụng thông tin đó, bạn có thể thiết lập các chiến dịch để quyết định có nên tiếp tục gửi email tiếp theo cho khách hàng đó hay không. Sự tích hợp này sẽ giúp trong tự động hóa tiếp thị kỹ thuật số. Bài đăng trên blog này sẽ hướng dẫn bạn các phần sau:
  * [Tổng quan][1]
  * [Cài đặt plugin Joomla][2]
  * [Cấu hình Maitic][3]
  * [Kết luận][4]

## Tổng quan:   {#Overview}
Mautic là một hệ thống tự động hóa tiếp thị nguồn mở. Nó là một phần mềm tiếp thị miễn phí. Bạn có thể sử dụng nó để tạo các chiến dịch không giới hạn để gửi email tiếp thị cho khách hàng được nhắm mục tiêu.
Joomla cũng là một hệ thống quản lý nội dung nguồn mở miễn phí để phát triển các trang web. Rất dễ dàng để thiết lập các trang web kinh doanh của bạn trên Joomla. Nó có hàng ngàn phần mở rộng có thể được sử dụng theo yêu cầu của bạn.

## Cài đặt plugin Joomla:   {#Plugin}
  * Tải xuống [plugin][5].
  * Sau đó chuyển đến tiện ích mở rộng -> Quản lý -> Cài đặt.
  * Nhập URL Mautic.
  * Nó sẽ chèn 1 hình ảnh gif px được tải từ thể hiện MAUTIC của bạn.
  * Các biểu mẫu nhúng trong nội dung Joomla bằng cách sử dụng đoạn mã sau: {Mautic Type = hình thức hình thức ID id}
  * Sau đó, bạn có thể tạo biểu mẫu trong ứng dụng Maitic của bạn và lấy ID từ URL.
  * Nội dung động cũng có thể được thêm vào bằng cách sử dụng mã sau Snippt: {Mautic Type = Nội dung Nội dung Slot Slot = Khăn slot_name,} Nội dung mặc định tại đây. {/Mautic}
  * slot_name là định danh của khe mà bạn đã chỉ định khi thêm một quyết định của Nội dung động yêu cầu của bạn vào chiến dịch của bạn.
Sau khi cài đặt, bạn cần tạo và nhúng các biểu mẫu trên trang web Joomla của mình. Các biểu mẫu này sẽ gửi thông tin liên hệ qua Maitic. Khi bạn đã hoàn thành cấu hình plugin trên Joomla, bước tiếp theo sẽ là cấu hình nó trên Maitic.

## Cấu hình Mautic:   {#Mautic}
  * Truy cập trang web Maitic của bạn, chuyển sang cài đặt.
  * Nhấp vào cấu hình.
  * Từ cài đặt API, bật API.
  * Để kết nối Mautic với Joomla, bạn phải có chứng chỉ SSL trên các trang web của mình.
  * Tiếp theo bạn cần phải truy cập thông tin đăng nhập API.
* Nếu trang web của bạn không có SSL (vì vậy bạn truy cập**http**: //yourjoomlasite.com), chọn OAuth1. Nếu bạn có SSL trên trang web của mình (vì vậy bạn truy cập**https**: //yourjoomlasite.com), chọn oauth2.
  * Nhấp vào mới, cung cấp một tên (có thể là bất cứ điều gì bạn muốn) và URL đầy đủ của Joomla của bạn! Trang web ([https://yourjoomlasite.com][6])
  * Nhấp vào Lưu và đóng.
  * Ở đây bạn có thể nhận được khóa công khai và riêng tư.
  * Truy cập trang web Joomla của bạn và tìm plugin Maitic bạn đã cài đặt trước đó.
  * Nhập các khóa công khai và bí mật mà bạn đã tạo từ trang web Maitic của bạn.
  * Chọn OAuth1 hoặc OAuth2 (giống như bạn đã chọn trong Mautic) và đặt Gửi người dùng đã đăng ký thành Có.
  * Lưu và xuất bản plugin.
  * Sau đó, bạn sẽ có thể ủy quyền cho trang web Joomla của bạn.
  * Joomla sẽ định hướng lại theo ví dụ Maitic để ủy quyền.
  * Nhấp vào ủy quyền của người Viking và đó là nó.
  * Bạn sẽ bắt đầu nhận liên hệ vào trang web Maitic của bạn.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Tích hợp Maitic và Joomla">}}


## Kết luận:   {#conclusion}
Trong bài viết này, chúng tôi đã thảo luận về cách Mautic và Joomla cùng nhau có thể giúp trong tự động hóa tiếp thị kỹ thuật số. Giải pháp tiếp thị miễn phí nguồn mở này sẽ cho phép bạn nhóm tất cả các liên hệ đến từ trang web Joomla và tạo các chiến dịch tiếp thị bằng cách sử dụng chúng. Mautic cho phép bạn tạo các phân đoạn, để bạn có thể chạy các chiến dịch khác nhau trên các phân khúc khác nhau theo nhu cầu của bạn. Vui lòng kiểm tra [Joomla][7] và [Mautic][8] blog để biết tổng quan chi tiết.

## Khám phá:
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Joomla][7]
  * [Mautic][8]
  * [Cách thiết lập Maitic - Tích hợp Facebook][9]
  * [Tích hợp Maitic Drupal để tự động hóa việc nuôi dưỡng chì][10]
  * [Tự động hóa tiếp thị bằng cách sử dụng Maitic và WordPress WooC Commerce][11]
  * [Cách thiết lập các chiến dịch tiếp thị trong Mautic][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
