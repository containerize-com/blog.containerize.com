---
title: "Apache vs Nginx | Apache là gì? | Nginx là gì?" 
seoTitle: "Apache vs Nginx | Apache là gì? | Nginx là gì?" 
description: "Bài viết này là về Apache vs Nginx so sánh. Cả hai máy chủ web đều có nguồn mở, có thể định cấu hình và xử lý hơn một nửa lưu lượng truy cập internet của thế giới." 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apache sử dụng cách tiếp cận theo quy trình và Nginx sử dụng cách tiếp cận dựa trên sự kiện để xử lý các yêu cầu của người dùng. Hãy khám phá sự khác biệt giữa Apache và Nginx." 
url: /vi/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache sử dụng cách tiếp cận dựa trên quy trình và Nginx sử dụng cách tiếp cận dựa trên sự kiện để xử lý các yêu cầu của người dùng. Hãy khám phá sự khác biệt giữa Apache và Nginx.

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs Nginx">}}


## Tổng quan
Mặc dù Apache và Nginx chia sẻ nhiều phẩm chất, nhưng chúng không nên được coi là hoàn toàn có thể hoán đổi cho nhau. Cả hai máy chủ web nguồn mở đều khác nhau và nên được chọn theo nhu cầu của các ứng dụng web của bạn. Trong bài viết này, chúng tôi sẽ thảo luận về chi tiết **Apache vs nginx** .
  * [Apache là gì?][1]
  * [Nginx là gì?][2]
  * [Apache vs Nginx so sánh][3]
  * [Nginx tốt hơn Apache][4]
  * [Kết luận][5]
  * [Khám phá][6]

## Apache là gì? {#whatisapache}

Máy chủ Web Apache là một trong những máy chủ phổ biến nhất trên Internet và phục vụ hơn 27% trang web. Apache chủ yếu là sự lựa chọn đầu tiên của các nhà phát triển do tính linh hoạt, sức mạnh cũng như hỗ trợ rộng rãi và tài liệu chi tiết. Nó hỗ trợ các mô -đun có thể tải động cho phép các nhà phát triển dễ dàng mở rộng chức năng của nó.

## Nginx là gì? {#whatisnginx}

Bài viết này là về Apache vs Nginx so sánh. Cả hai máy chủ web đều có nguồn mở, có thể định cấu hình và xử lý hơn một nửa lưu lượng truy cập Internet trên thế giới.

## Apache vs nginx so sánh {#apachevsnginx}

Trong phần này, hãy để so sánh Apache và Nginx trên cơ sở hỗ trợ, tài liệu, loại nội dung và cấu trúc cấu hình.

#### Ngành kiến ​​​​trúc
Apache bắt đầu nhiều quy trình máy chủ để chia sẻ khối lượng công việc tại thời điểm khởi động. Có một quá trình cha mẹ và nhiều quá trình con. Mỗi quy trình con chịu trách nhiệm tạo các luồng máy chủ xử lý các yêu cầu đến. Apache sử dụng mô-đun đa xử lý để gán các quy trình con để chấp nhận các yêu cầu và các cổng mạng liên kết. Ngược lại, Nginx có kiến ​​trúc hướng sự kiện. Nginx có một quy trình chính kiểm soát việc đọc liên kết và cấu hình cổng. Quá trình chính tạo ra các quy trình phụ theo mô hình quy trình có thể dự đoán được, không giống như Apache cho phép máy chủ Nginx sử dụng tài nguyên hiệu quả hơn. Đối với mỗi yêu cầu mới, Nginx bắt đầu một sự kiện và tạo một bộ mô tả tệp chỉ chiếm một bộ nhớ quy trình nhỏ. Điều này làm cho Nginx có thể mở rộng hơn Apache. Apache tiêu thụ nhiều bộ nhớ quy trình hơn cho mỗi kết nối.

#### Mô -đun
Cả Apache và Nginx đều có khả năng mô -đun để mở rộng hoặc sửa đổi chức năng cốt lõi của nó. Việc triển khai cho các mô -đun là khác nhau cho cả Apache và Nginx và sự khác biệt chính là tải các mô -đun. Trong trường hợp của Apache, các mô -đun chỉ được tải động khi có nhu cầu về chúng. Ngược lại, các mô -đun Nginx được tích hợp vào lõi và được tải trên khởi động ngay cả khi bạn không cần chúng. Theo nghĩa đó, Apache là một nền tảng tùy biến hơn cho các nhà phát triển so với Nginx. Đây là một hạn chế đối với người dùng khi có liên quan đến tính linh hoạt nhưng trên lưu ý tích cực, nó có nghĩa là bảo mật tốt hơn vì các mô -đun động có thể đặt ra những lo ngại về bảo mật.

#### Hỗ trợ & Tài liệu
Apache là người chiến thắng rõ ràng ở đây nếu chúng ta so sánh nó trên cơ sở hỗ trợ và tài liệu vì nó đã có mặt trên thị trường quá lâu. Có một thư viện lớn các tài liệu có sẵn cho máy chủ Apache. Một cách tương đối, Nginx cũng đang trở nên phổ biến do hiệu suất cao và việc sử dụng tài nguyên và do đó hỗ trợ và tài liệu của nó đang phát triển nhanh chóng.

#### Nội dung tĩnh so với động
Apache phục vụ cả nội dung tĩnh cũng như động. Mặt khác, Nginx không có khả năng phục vụ nội dung động để chuyển các yêu cầu đó cho phần mềm của bên thứ ba. Các máy chủ Apache xử lý nội dung tĩnh bằng các phương thức dựa trên tệp thông thường của nó.

#### Tệp vs diễn giải dựa trên URI
Apache Server có khả năng diễn giải một yêu cầu là tài nguyên vật lý trên hệ thống tập tin hoặc là vị trí URI. Mặt khác, Nginx được thiết kế để hoạt động như một máy chủ web và máy chủ proxy. Do kiến ​​trúc cần thiết cho hai vai trò này, nó hoạt động chủ yếu với URI, dịch sang hệ thống tập tin khi cần thiết. Nginx không chỉ định cấu hình cho thư mục hệ thống tập tin và thay vào đó, nó phân tích chính URI.

#### Cấu hình
Apache cung cấp khả năng cho các nhà phát triển đặt cấu hình ở cấp độ thư mục bằng cách sử dụng tệp được gọi là .htaccess. Nhưng trong trường hợp Nginx, không có cơ chế nào như vậy để đặt cấu hình ở cấp độ thư mục. Apache cung cấp sự linh hoạt hơn Nginx về mặt cấu hình.

## Nginx có tốt hơn Apache không? {#nginx}

Nginx nhanh hơn Apache để phục vụ nội dung tĩnh. Vì vậy, nếu ứng dụng web của bạn phục vụ nhiều nội dung tĩnh thì có Nginx tốt hơn và nhanh hơn Apache. Theo như nội dung động có liên quan, cả hai máy chủ web gần như mang lại hiệu suất giống nhau nên không có người chiến thắng rõ ràng ở đây. Cả Apache và Nginx đều chạy trên hầu hết các hệ điều hành, nhưng hiệu suất của Nginx trên Windows không tốt so với Apache. Nếu hệ điều hành của bạn là một hệ thống giống như UNIX và ứng dụng web của bạn có hiệu suất quan trọng thì có, Nginx tốt hơn Apache.

## Phần kết luận {#conclusion}

Cả Apache và Nginx đều có khả năng theo cách riêng của họ. Chúng tôi đã thảo luận về so sánh Apache vinx, Apache là gì, Nginx là gì về chi tiết và sự khác biệt giữa Apache và Nginx. Chọn một từ hai máy chủ web phổ biến nhất này hoàn toàn phụ thuộc vào các yêu cầu của các ứng dụng web của bạn. Lựa chọn phụ thuộc vào kỳ vọng của bạn với hiệu suất, sử dụng tài nguyên, tốc độ, khả năng mở rộng và hỗ trợ của máy chủ web. Cả hai đều có lợi ích riêng của họ. Không có máy chủ web phù hợp với một kích cỡ, vì vậy hãy sử dụng giải pháp phù hợp nhất với mục tiêu và kỳ vọng của bạn.
Cuối cùng, [containerize.com][7] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với danh mục [Máy ​​chủ web nguồn mở][8] để cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][9], [LinkedIn][10] và [Twitter][11].

## Khám phá {#explore}

Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Top 5 Ngăn xếp giải pháp máy chủ web nguồn mở vào năm 2021][12]
  * [Cài đặt XAMPP và PHPMyAdmin là Localhost trên Windows][13]
  * [XAMPP | Ngăn xếp giải pháp máy chủ web miễn phí và nguồn mở][14]
  * [Nginx | Máy chủ web nhẹ và hiệu suất cao][15]
  * [Hướng dẫn thiết lập cho Stack Lemp trên Ubuntu 18.04][16]



[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
