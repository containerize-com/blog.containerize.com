---
title: "Kafka vs Redis Pub-Sub, sự khác biệt mà bạn nên biết" 
seoTitle: "Kafka vs Redis Pub-Sub, sự khác biệt mà bạn nên biết" 
description: "Nếu bạn đang tìm kiếm các công cụ để quản lý một lượng lớn dữ liệu và nhầm lẫn giữa Kafka và Redis. Bài viết này Kafka vs Redis Pub-Sub sẽ giúp bạn." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis và Kafka là hai công cụ khác nhau tình cờ thực hiện các công việc tương tự theo cách riêng của họ. So sánh Kafka vs Redis cung cấp cho bạn cái nhìn sâu sắc mà bạn nên biết." 
url: /vi/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## Redis và Kafka là hai công cụ khác nhau đang thực hiện các công việc tương tự theo cách riêng của họ. So sánh Kafka vs Redis cung cấp cho bạn cái nhìn sâu sắc mà bạn nên biết.
Trong loạt bài viết của chúng tôi về Red Redis, chúng tôi đã tìm hiểu về [những điều cơ bản của Redis][1], sau đó chúng tôi đã khám phá [cách thức hoạt động của Redis Pub/Sub][2] và cách cạnh tranh với cơ sở dữ liệu NoQuery. Tiến về phía trước trong loạt bài hôm nay của chúng tôi, chúng tôi sẽ so sánh Redis với Kafka, một trong những đối thủ cạnh tranh trong các nhiệm vụ khác nhau. Trong bài viết này Kafka vs Redis Pub-Sub, chúng tôi sẽ khám phá những gì Kafka là cách mà nó khác với Redis, và những điểm tương đồng trong đó là gì. Vậy hãy bắt đầu.
  * Kafka là gì?
  * Redis là gì?
  * Cái gì là sự khác biệt chính?
  * Khi nào nên sử dụng cái nào?
  * Phần kết luận

## kafka là gì?
Apache Kafka là một nền tảng luồng sự kiện phân phối nguồn mở. Nó được sử dụng cho các đường ống dữ liệu hiệu suất cao và phân tích phát trực tuyến. Kafka hoạt động như một hệ thống nhắn tin [xuất bản Subscribe][3]. Với điều này, bạn có thể xử lý dữ liệu mới vì nó được tạo ở tốc độ cao và ngoài ra cũng có thể lưu nó vào một số cơ sở dữ liệu.
Kafka là một hệ thống phân tán bao gồm **máy chủ  **và **  khách hàng** . Nó có thể được triển khai trên phần cứng kim loại trần, máy ảo và các container trong môi trường trên cơ sở cũng như đám mây.

## Redis là gì?
Redis là một cửa hàng giá trị khóa mở, nguồn mở. Nó hỗ trợ một số loại dữ liệu: chuỗi, băm, danh sách, bộ và bộ được sắp xếp. Đó là lý do tại sao nó thường được gọi là máy chủ cấu trúc dữ liệu.
Redis cũng được coi là cơ sở dữ liệu NoQuery. Để thảo luận chi tiết về anh ấy Redis và cách thức hoạt động, bạn có thể tham khảo bài viết của chúng tôi [Hướng dẫn về người mới bắt đầu về cơ sở dữ liệu trong bộ nhớ Redis][1].

## Cái gì là sự khác biệt chính?
**Redis ** Pub-Sub chủ yếu giống như một hệ thống lửa và trước khi tất cả các thông điệp bạn tạo sẽ được gửi cho tất cả người tiêu dùng cùng một lúc và dữ liệu không được lưu trữ ở bất cứ đâu. Bạn có những hạn chế trong bộ nhớ đối với Redis. Ngoài ra, số lượng nhà sản xuất và người tiêu dùng có thể ảnh hưởng đến hiệu suất của redis.
Mặt khác, **kafka**  là một nhật ký cao, nhật ký phân tán có thể được sử dụng làm hàng đợi. Nó cũng cung cấp sự kiên trì cho các tin nhắn được gửi qua hàng đợi.
**redis **hỗ trợ  **dựa trên đẩy**   gửi tin nhắn. Điều này có nghĩa là mọi tin nhắn được đẩy đến Redis sẽ được gửi tự động cho tất cả các thuê bao.
**Kafka **, tuy nhiên, hỗ trợ ** Việc gửi tin nhắn dựa trên kéo. Có nghĩa là các tin nhắn được xuất bản cho Kafka don lồng được phân phối cho người đăng ký tự động. Thay vào đó, người tiêu dùng yêu cầu các tin nhắn khi họ sẵn sàng tiêu thụ những tin nhắn đó.
**Redis **không lưu trữ tin nhắn thay thế, tin nhắn được gửi cùng một lúc cho tất cả người tiêu dùng và sau đó bị xóa. Tuy nhiên,  **kafka **  là một nhật ký, bạn luôn có tin nhắn. Bạn có thể theo dõi điều này bằng cách đặt chính sách duy trì nói 7 ngày  **Giữ chân**  .

## Khi nào nên sử dụng cái nào?

### redis
  * Nếu bạn muốn một loại hệ thống lửa và trước, trong đó tất cả các thông điệp bạn tạo ra được gửi ngay lập tức cho người tiêu dùng.
  *Nếu **tốc độ**  được quan tâm nhất.
  *Nếu **lưu trữ**  không quan trọng và bạn không muốn hệ thống của mình giữ thông điệp đã được gửi
  * Lượng dữ liệu sẽ được xử lý không phải là rất lớn.

### Kafka
  *Nếu bạn muốn **độ tin cậy** .
  * Nếu bạn muốn hệ thống của mình có một bản sao các tin nhắn đã được gửi ngay cả sau khi tiêu thụ.
  *Nếu **tốc độ**  không phải là một mối quan tâm lớn.
  * Và kích thước dữ liệu của bạn là rất lớn.

## Phần kết luận
Trong hướng dẫn này Kafka vs Redis Pub-Sub, chúng tôi đã khám phá Kafka và Redis. Sự khác biệt và điểm tương đồng của họ là gì? Chúng tôi cũng đã học được khi bạn nên làm lại và khi nó tốt để sử dụng kafka. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ khám phá thêm về Kafka và phân tích chuyên sâu.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#Gì
