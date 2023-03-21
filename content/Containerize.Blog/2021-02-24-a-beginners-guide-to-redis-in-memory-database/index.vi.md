---
title: "Hướng dẫn người mới bắt đầu về cơ sở dữ liệu trong bộ nhớ Redis" 
seoTitle: "Hướng dẫn người mới bắt đầu về cơ sở dữ liệu trong bộ nhớ Redis" 
description: "Redis cơ sở dữ liệu trong bộ nhớ là một cửa hàng giá trị khóa, nguồn mở. Nó cũng được gọi là cơ sở dữ liệu NoQuery. Hướng dẫn Redis này hướng dẫn bạn về các khái niệm cốt lõi của Redis." 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "Hướng dẫn này giúp bạn tìm hiểu về cơ sở dữ liệu trong bộ nhớ Redis. Nó là nguồn mở và còn được gọi là một cửa hàng giá trị khóa, đây là một loại cơ sở dữ liệu không quan hệ." 
url: /vi/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## Hướng dẫn này giúp bạn tìm hiểu về cơ sở dữ liệu trong bộ nhớ Redis. Nó là nguồn mở và còn được gọi là một cửa hàng giá trị khóa, đây là một loại cơ sở dữ liệu không quan hệ.

{{< figure align=center src="images/redis-in-memory-database.png" alt="Cơ sở dữ liệu trong bộ nhớ redis">}}

**redis **thực sự là viết tắt của  **re **  mote  **di **  ctionary ** s**  erver. Cơ sở dữ liệu Redis là một cửa hàng giá trị khóa mở, nguồn mở. Nó hỗ trợ một số loại dữ liệu: chuỗi, băm, danh sách, bộ và bộ được sắp xếp. Đó là lý do tại sao nó thường được gọi là máy chủ cấu trúc dữ liệu. Redis được viết trong C. Hướng dẫn Redis này cung cấp một sự hiểu biết tốt về các khái niệm cơ sở dữ liệu trong bộ nhớ của Redis.
  * **[Cơ sở dữ liệu Noql][1]** là gì
  * **[có phải là cơ sở dữ liệu NoQuery không?][2]**
  * **[Khi nào nên sử dụng Redis?][3]**
  * **[Redis so với các cửa hàng giá trị khóa khác][4]**
  * **[Cài đặt Redis trên Ubuntu][5]**
  * **[Kết luận][6]**

## Cơ sở dữ liệu NoQuery   {#nosql} là gì
Cơ sở dữ liệu NoQuery đã trở nên rất phổ biến. Các công ty lớn dựa vào họ để lưu trữ hàng trăm petabyte dữ liệu và chạy hàng triệu truy vấn mỗi giây. Nhưng cơ sở dữ liệu NoQuery là gì? Nó hoạt động như thế nào, và tại sao nó mở rộng quy mô tốt hơn nhiều so với cơ sở dữ liệu quan hệ truyền thống? Hãy bắt đầu bằng cách nhanh chóng giải thích vấn đề với cơ sở dữ liệu quan hệ như MySQL, Mariadb, SQL Server.
Cơ sở dữ liệu quan hệ được xây dựng để lưu trữ dữ liệu quan hệ hiệu quả nhất có thể. Bạn có thể có một bảng cho khách hàng, đơn đặt hàng và sản phẩm, liên kết với nhau một cách hợp lý. Tổ chức chặt chẽ này là tuyệt vời để quản lý dữ liệu của bạn, nhưng nó có chi phí cho khả năng mở rộng thấp. Họ phải duy trì các mối quan hệ này, và đó là một quá trình chuyên sâu, đòi hỏi nhiều bộ nhớ và tính toán sức mạnh.
Trong khi cơ sở dữ liệu NoQuery có thể mở rộng cả theo chiều dọc và chiều ngang. Bạn có thể so sánh điều này với một tòa nhà, quy mô theo chiều dọc có nghĩa là thêm nhiều sàn vào một tòa nhà hiện có, trong khi tỷ lệ ngang có nghĩa là thêm nhiều tòa nhà. Sửa đổi lược đồ là một trong những thách thức lớn nhất trong cơ sở dữ liệu quan hệ. Cơ sở dữ liệu NoQuery don lồng yêu cầu một lược đồ cố định có nghĩa là dễ dàng với một lượng lớn dữ liệu và tải người dùng cao.

## có phải là cơ sở dữ liệu NoQuery không?   {#isnosql}
Đây là một trong những câu hỏi phổ biến nhất được hỏi trên toàn cộng đồng nhà phát triển trên internet. Câu trả lời đơn giản là đồng ý. Redis là một cửa hàng cấu trúc dữ liệu trong bộ nhớ mở.
Trên thực tế, có 4 loại cơ sở dữ liệu NoQuery khác nhau, bao gồm: cơ sở dữ liệu tài liệu, cửa hàng giá trị khóa, cửa hàng cột rộng và cửa hàng đồ thị. Vì vậy, máy chủ redis trong cơ sở dữ liệu trong bộ nhớ, là một cửa hàng giá trị khóa nằm trong danh mục cơ sở dữ liệu NoQuery.

## Khi nào nên sử dụng redis?   {#khi}
Mỗi công nghệ đều có giá trị và điểm yếu của nó. Vì vậy, với rất nhiều tùy chọn có sẵn trong cơ sở dữ liệu. Điều quan trọng là phải hiểu khi nào và khi nào không sử dụng một công nghệ cụ thể. Luôn chọn công cụ phù hợp cho công việc.
Đối với dữ liệu ổn định, có thể dự đoán và dữ liệu quan hệ chọn cơ sở dữ liệu quan hệ. Đối với dữ liệu tạm thời, năng động cao chọn cơ sở dữ liệu NoQuery. Lược đồ cho cơ sở dữ liệu là một trong những thách thức lớn nhất trong cơ sở dữ liệu quan hệ và có thể mất mãi mãi trong quan hệ cơ sở dữ liệu lớn.
Nếu bạn có dữ liệu rất năng động thay đổi thường xuyên và bạn không phải thực hiện các truy vấn phức tạp, thay vào đó muốn lưu trữ dữ liệu dưới dạng các cặp giá trị khóa, thì Redis có thể là một lựa chọn tốt. Nếu bạn cần một cơ sở dữ liệu định hướng tài liệu đặc trưng hơn cho phép bạn thực hiện các truy vấn phạm vi, tìm kiếm biểu thức thông thường, lập chỉ mục và MapReduce, bạn nên kiểm tra MongoDB, CouchDB hoặc tương tự.
Một số trường hợp sử dụng ví dụ của cơ sở dữ liệu trong bộ nhớ Redis như sau:
  * **Access logger** : Khi bạn cần đăng nhập nhiều hoạt động với tốc độ nhanh, Redis là một giải pháp tốt.
  * **Duy trì bộ đếm** : Bạn có thể sử dụng redis để duy trì số lượng khác nhau, ví dụ: Tải xuống quầy
  * **Sự hiện diện của người dùng** : Do tốc độ, bạn có thể sử dụng nó để lưu trữ trạng thái trực tuyến / ngoại tuyến của người dùng.
  * **Hàng đợi** : Bạn có thể sử dụng Redis để duy trì hàng đợi tạm thời để xử lý các công việc nền.

## redis vs các cửa hàng khóa-giá trị khác   {#other}
Redis cơ sở dữ liệu trong bộ nhớ rất nhanh và có thể thực hiện khoảng 110000 bộ mỗi giây, khoảng 81000 nhận được mỗi giây. Nó hỗ trợ một số loại dữ liệu: chuỗi, băm, danh sách, bộ và bộ được sắp xếp. Redis là một luồng đơn cho phép nó tuân thủ axit (tính nguyên tử, tính nhất quán, cách ly và độ bền). Các cơ sở dữ liệu NoQuery khác thường không cung cấp sự tuân thủ axit hoặc chúng cung cấp một phần.

## Cài đặt Redis trên Ubuntu   {#install}
Để cài đặt Redis trên Ubuntu, hãy vào thiết bị đầu cuối và nhập các lệnh sau
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
Lệnh sau sẽ khởi động máy chủ Redis
```
$ redis-server
```
Để xác minh xem máy chủ Redis đang chạy, bạn có thể sử dụng lệnh  **redis-cli**  để kết nối với nó.
```
$ redis-cli 
```
Lệnh này sẽ cung cấp cho bạn đầu ra sau, có nghĩa là máy chủ đang chạy và bây giờ bạn được kết nối.
```
redis 127.0.0.1:6379>
```
Bây giờ hãy nhập lệnh **ping  **sau đây và bạn sẽ nhận được phản hồi từ máy chủ là**   pong**.
```
redis 127.0.0.1:6379> ping
PONG
```

## Kết luận   {#conclusion}
Trong hướng dẫn Redis này, chúng tôi đã tìm hiểu về cơ sở dữ liệu trong bộ nhớ Redis. Chúng tôi đã khám phá sự khác biệt chính giữa cơ sở dữ liệu quan hệ và phi quan hệ (NoQuery). Ngoài ra, đã học được khi nào chúng ta nên sử dụng redis và các trường hợp sử dụng tốt nhất là gì. Hướng dẫn này là một phần của một loạt các hướng dẫn đang diễn ra. Trong các bài viết sắp tới, chúng tôi sẽ khám phá thêm các trường hợp sử dụng cụ thể của Redis.

  
[1]: #nosql
[2]: #isnosql
[3]: #when
[4]: #other
[5]: #install
[6]: #conclusion
