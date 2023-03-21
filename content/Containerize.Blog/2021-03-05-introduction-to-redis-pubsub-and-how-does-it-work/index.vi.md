---
title: "Giới thiệu về Redis Pub/Sub và nó hoạt động như thế nào?" 
seoTitle: "Giới thiệu về Redis Pub/Sub và nó hoạt động như thế nào?" 
description: "Redis Pub/Sub là một dịch vụ nhắn tin thời gian thực linh hoạt, đáng tin cậy cho các ứng dụng độc lập để xuất bản và đăng ký các sự kiện không đồng bộ." 
date: Fri, 05 Mar 2021 11:12:55 +0000
author: Assad Mahmood
summary: "Redis Pub/Sub thực hiện một hệ thống nhắn tin thời gian thực, trong đó các nhà xuất bản, xuất bản lên một kênh/chủ đề và một số khách hàng có thể đăng ký vào kênh/chủ đề đó." 
url: /vi/introduction-to-redis-pubsub-and-how-does-it-work/
categories: ['Database Management Software']
---

## Redis Pub/Sub thực hiện một hệ thống nhắn tin thời gian thực, trong đó các nhà xuất bản, xuất bản lên một kênh/chủ đề và một số khách hàng có thể đăng ký vào kênh/chủ đề đó.

{{< figure align=center src="images/redis-pub-sub.png" alt="Redis Pub phụ">}}

Trong hướng dẫn cuối cùng của chúng tôi,  **[Hướng dẫn về người mới bắt đầu về cơ sở dữ liệu trong bộ nhớ Redis][1]**  Chúng tôi đã tìm hiểu về Redis như một cơ sở dữ liệu trong bộ nhớ. Và, làm thế nào điều này cạnh tranh với cơ sở dữ liệu NoQuery. Chúng tôi cũng đã học được nơi sử dụng redis và nơi sử dụng nó không tối ưu. Bây giờ xây dựng trên cơ sở kiến ​​thức đó, trong hướng dẫn này, chúng tôi sẽ tìm hiểu về Redis Pub/Sub, nó hoạt động như thế nào và cách sử dụng tốt nhất của hệ thống Redis Publish/đăng ký. Bắt đầu nào.
  * **[Mẫu xuất bản/đăng ký là gì?][2]**
  * **[Pub/Sub hoạt động như thế nào?][3]**
  * **[Khi nào bạn nên sử dụng Pub/Sub?][4]**
  * **[Cách sử dụng Redis Pub/Sub?][5]**
  * **[Kết luận][6]**

## Mẫu xuất bản/đăng ký là gì?   {#Gì}
Xuất bản/đăng ký hoặc trong Pub/Sub ngắn là một mẫu nhắn tin trong đó người gửi và người nhận tin nhắn don lồng trao đổi trực tiếp các tin nhắn đó. Thay vào đó, người gửi tin nhắn xuất bản nó lên một kênh/chủ đề. Và, tất cả những người muốn nhận những tin nhắn đó sẽ đăng ký vào kênh/chủ đề. Vì vậy, đó là một lời giải thích kỹ thuật. Trong cuộc sống hàng ngày của chúng tôi, chúng tôi sử dụng mô hình đăng ký xuất bản này khá thường xuyên trong khi sử dụng các nền tảng truyền thông xã hội như YouTube, Twitter, Facebook hoặc Instagram. Trường hợp các nhà sản xuất nội dung sản xuất nội dung và những người quan tâm sẽ theo dõi / đăng ký nội dung. Vì vậy, đây cũng là những gì chính xác các mẫu pub/sub làm trong kiến ​​trúc phần mềm.

## Pub/Sub hoạt động như thế nào?   {#Làm sao}
Trong sự nhấn mạnh phát triển phần mềm vào khả năng tái sử dụng là rất cao. Và tất cả các mẫu thiết kế dựa trên các thành phần hoặc mô -đun có thể tái sử dụng. Vì vậy, để hiểu quán rượu/sub, trước tiên bạn cần xem ý tưởng này đến từ đâu và làm thế nào các nhà phát triển tìm thấy nó như một mô hình.
Khi các kiến ​​trúc phần mềm phát triển và dựa trên mô-đun hơn, chúng trở thành, nhiều giao tiếp / nhắn tin tăng lên giữa các mô-đun và các thành phần. Giống như, hãy nghĩ về một mô -đun như một đơn vị xử lý lấy một số đầu vào và cung cấp một số đầu ra. Và mỗi đầu vào thực sự là một thông báo mà đơn vị xử lý xử lý và tạo một thông báo khác dưới dạng đầu ra. Đó sẽ là một đầu vào cho một số mô -đun khác. Vì vậy, sự gia tăng nhắn tin này đòi hỏi sự chú ý đặc biệt, vì có các ứng dụng có thể mở rộng, có một yêu cầu rằng các mô -đun và thành phần có thể hoạt động độc lập mà không cần phụ thuộc. Do đó, đã xuất hiện mẫu xuất bản/đăng ký.
Trong nhiều hệ thống Pub/Sub, các nhà xuất bản đăng tin nhắn lên một nhà môi giới tin nhắn trung gian hoặc xe buýt sự kiện và người đăng ký đăng ký đăng ký với nhà môi giới đó, cho phép nhà môi giới thực hiện lọc. Nhà môi giới thường thực hiện một cửa hàng và chức năng chuyển tiếp để định tuyến tin nhắn từ nhà xuất bản đến người đăng ký. Ngoài ra, nhà môi giới có thể ưu tiên các tin nhắn trong hàng đợi trước khi định tuyến.

## **Khi nào bạn nên sử dụng pub/sub?**    {#when}
Các ứng dụng trò chuyện là một trường hợp sử dụng cổ điển của mẫu quán rượu/phụ. Trong một ứng dụng trò chuyện, người tham gia có thể đăng ký vào các phòng trò chuyện có một chủ đề quán rượu/phụ được chỉ định. Khi người dùng gửi tin nhắn đến phòng trò chuyện, ứng dụng trò chuyện của cô ấy xuất bản tin nhắn về chủ đề phòng trò chuyện đó. Người đăng ký của chủ đề nhận được tin nhắn.
Dịch vụ hàng đợi tin nhắn / hàng đợi tin nhắn hoặc các ứng dụng xử lý hàng loạt cũng có thể sử dụng mẫu Pub / Sub. Trường hợp tất cả những người muốn một nhiệm vụ cụ thể được thực hiện sẽ xuất bản tin nhắn lên hàng đợi và các đơn vị xử lý đã đăng ký hàng đợi đó sẽ nhận được thông báo để xử lý công việc.
Hãy thảo luận về một số lợi thế của mẫu quán rượu/phụ
  * Khớp nối lỏng lẻo giữa các thành phần hệ thống
  * Xem tốt hơn về quy trình làm việc trên toàn hệ thống
  * Cho phép tích hợp tốt hơn và nhanh hơn
  * Đảm bảo khả năng mở rộng mượt mà hơn
  * Độ tin cậy nhất quán được đảm bảo
  * Xây dựng độ đàn hồi
  * Mô đun hóa phần mềm
  * Phát triển phần mềm bất khả tri ngôn ngữ
  * Sự rõ ràng trong logic kinh doanh
  * Cải thiện khả năng đáp ứng

## Cách sử dụng Redis Pub/Sub   {#Redis-Pubsub}
Đối với cài đặt Redis, bạn có thể tham khảo [hướng dẫn cuối cùng của tôi][1]. Ví dụ này giải thích cách các nhà xuất bản và khái niệm thuê bao hoạt động. Trong ví dụ sau, một khách hàng đăng ký một kênh có tên ‘RedisChat.
```
redis 127.0.0.1:6379> SUBSCRIBE redisChat  
Reading messages... (press Ctrl-C to quit) 
1) "subscribe" 
2) "redisChat" 
3) (integer) 1 
```
Bây giờ, hai máy khách đang xuất bản các tin nhắn trên cùng một kênh có tên ‘RedisChat, và máy khách được đăng ký ở trên đang nhận tin nhắn.
```
redis 127.0.0.1:6379> PUBLISH redisChat "Redis is a great"  
(integer) 1  
redis 127.0.0.1:6379> PUBLISH redisChat "Learn redis"  
(integer) 1   
1) "message" 
2) "redisChat" 
3) "Redis is a great" 
1) "message" 
2) "redisChat" 
3) "Learn redis" 

```

## Kết luận   {#conclusion}
Trong hướng dẫn này, chúng tôi đã tìm hiểu về mẫu thiết kế xuất bản/đăng ký. Và khám phá cách hoạt động của Redis Pub/Sub. Chúng tôi cũng khám phá những trường hợp sử dụng tốt nhất của Redis Pub/Sub, nhắn tin thời gian thực. Trong hướng dẫn sắp tới của tôi, chúng tôi sẽ khám phá Redis hơn nữa và giải thích cách chúng tôi có thể sử dụng Redis Pub/Sub với Node.js để xây dựng một ứng dụng trò chuyện thời gian thực.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: #what
[3]: #how
[4]: #when
[5]: #redis-pubsub
[6]: #conclusion
