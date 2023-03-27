---
title: "Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket" 
seoTitle: "Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket" 
description: "Tích hợp Osticket-Wordpress cung cấp một cách để khách hàng tạo vé hỗ trợ từ trang web WordPress và quản lý chúng từ bảng điều khiển Osticket." 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "Tự động hóa quy trình trợ giúp với tích hợp WordPress và Osticket liền mạch. Chuyển đổi khách hàng, hỏi thông qua các biểu mẫu dựa trên web thành vé hỗ trợ." 
url: /vi/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Tự động hóa quy trình trợ giúp với tích hợp WordPress và Osticket liền mạch. Chuyển đổi khách hàng, hỏi thông qua các biểu mẫu dựa trên web thành vé hỗ trợ.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="Tích hợp Osticket-Wordpress để tự động hóa hệ thống bán vé">}}

Khách hàng của bạn có thể có các truy vấn liên quan đến sản phẩm/dịch vụ của bạn. Họ sẽ gửi các truy vấn của họ thông qua các hình thức khác nhau trên trang web WordPress của bạn. Tích hợp Osticket-Wordpress giúp chuyển đổi các truy vấn đó thành vé. Nó gửi dữ liệu qua API đến Hệ thống Helpdesk của Osticket.
Osticket là một hệ thống bán vé giúp trợ giúp miễn phí và miễn phí. Khách hàng có thể tạo vé liên quan đến các truy vấn của họ trên Osticket. Hệ thống trợ giúp này giúp bất kỳ tổ chức nào dễ dàng quản lý các truy vấn đến từ khách hàng của họ. Quản trị viên có thể tạo các phòng ban và nhóm, và gán vé cho các đại lý khác nhau theo bản chất của vé được tạo ra. Hệ thống nguồn mở miễn phí này sẽ theo dõi các vấn đề. Nó cho phép cả khách hàng và đại lý nhận xét về vé để thảo luận về tiến trình. Chúng tôi sẽ trình bày các phần sau trong bài đăng trên blog này:
  * [Quá trình tích hợp][1]
  * [Cài đặt plugin WordPress][2]
  * [Quy trình xác thực][3]
  * [Kết luận][4]

## Quá trình hội nhập: {#integration}

Tích hợp Osticket và WordPress yêu cầu một biểu mẫu liên hệ trên trang web WordPress với các trường sau
  1. Giúp chủ đề
  2. Email
  3. Tên đầy đủ
  4. Chủ đề
  5. Tin nhắn
Biểu mẫu liên hệ phải gửi email, vì plugin này nối hàm wp_mail để lấy dữ liệu biểu mẫu.

## Cài đặt plugin WordPress: {#wordpress}

  1. Chuyển đến bảng điều khiển quản trị của trang web WordPress của bạn.
  2. Tiếp theo đi đến phần plugins.
  3. Sau đó cài đặt [plugin][5] này.
  4. Sau đó kích hoạt plugin.
  5. và truy cập vào cài đặt của người Viking -> Trình kết nối Osticket.
  6. Sau đó nhập URL của trang web Osticket của bạn, tức là [http: //your.domain/api/tickets.json][6]
  7. Nhập khóa API được tạo từ bảng quản trị Osticket (được giải thích trong phần tiếp theo).
  8. Cuối cùng, điền vào tất cả các trường để ánh xạ dữ liệu từ mẫu liên hệ của bạn đến các trường vé Osticket.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="Tích hợp Osticket-Wordpress để tự động hóa hệ thống bán vé">}}


## Quy trình xác thực: {#auth}

Xác thực API được thực hiện thông qua các khóa API được cấu hình trong bảng quản trị của Osticket. Các khóa API được tạo và liên kết với địa chỉ IP nguồn được xác minh dựa trên IP nguồn của các yêu cầu API HTTP. Để tạo khóa API
  1. Chuyển đến bảng quản trị của Osticket.
  2. Nhấp vào Quản lý trên mạng.
  3. Chuyển đến Menu phụ Keys API Phím.
  4. Nhấp vào trên Thêm Thêm khóa API mới.
  5. Đặt trạng thái trên mạng thành hoạt động.
  6. Kiểm tra hộp kiểm có thể tạo vé.
  7. Nhập địa chỉ IP của trang web WordPress của bạn và nhấn vào Thêm khóa.

{{< figure align=center src="images/osticket-1024x729.png" alt="Tích hợp Osticket-Wordpress để tự động hóa hệ thống bán vé">}}


## Phần kết luận: {#conclusion}

Tích hợp Osticket-Wordpress sẽ tự động hóa quá trình bán vé. Do đó, nó sẽ làm cho cuộc sống dễ dàng hơn cho nhóm hỗ trợ. Các yêu cầu trên trang web WordPress sẽ tự động chuyển đổi thành vé hỗ trợ trên Osticket. Để nhóm hỗ trợ có thể quản lý tất cả các truy vấn của khách hàng dễ dàng và hiệu quả hơn. Đại lý hỗ trợ sẽ được thông báo bằng thông báo email. Do đó, các đại lý có thể giải quyết các truy vấn của khách hàng đúng hạn. Phần bình luận trên Osticket giúp cả khách hàng và các đại lý hỗ trợ giao tiếp hiệu quả và kịp thời. Nó cũng giúp các nhà quản lý dễ dàng theo dõi tiến trình cho mỗi vé.

## Khám phá:
Để tìm hiểu thêm về Osticket và WordPress, vui lòng kiểm tra các trang này:
  * [Osticket - Hệ thống bán vé trợ giúp nguồn mở miễn phí][7]
  * [WordPress - Nguồn mở miễn phí và CMS được sử dụng rộng rãi nhất và công cụ viết blog][8]
  * [Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket][9]



[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
