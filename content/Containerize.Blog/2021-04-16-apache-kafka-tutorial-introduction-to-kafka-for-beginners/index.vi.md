---
title: "Apache Kafka Hướng dẫn -Intrimtions to Kafka cho người mới bắt đầu" 
seoTitle: "Apache Kafka Hướng dẫn -Intrimtions to Kafka cho người mới bắt đầu" 
description: "Apache Kafka là một nền tảng phát trực tuyến sự kiện phân phối nguồn mở. Hướng dẫn này là một hướng dẫn cho người mới bắt đầu để hiểu Apache Kafka Up." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka là một nền tảng phát trực tuyến sự kiện phân phối nguồn mở. Hướng dẫn này cung cấp cho bạn một lời giới thiệu về Kafka từ quan điểm của người mới bắt đầu." 
url: /vi/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka là một nền tảng phát trực tuyến sự kiện phân phối nguồn mở. Hướng dẫn này cung cấp cho bạn một giới thiệu về Kafka từ góc độ của người mới bắt đầu.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Hướng dẫn nguồn mở Apache Kafka">}}

Gần đây, chúng tôi đã viết một bài viết về Kafka vs Redis Pub-Sub, trong đó giải thích về sự khác biệt giữa Kafka và Redis Pub-Sub. Trong bài báo đó, chúng tôi đã sớm giải thích về chính nhà môi giới tin nhắn Kafka. Vì vậy, bây giờ bài viết này cung cấp cho bạn nhiều cái nhìn sâu sắc hơn về nền tảng phát trực tuyến sự kiện phân phối nguồn mở Apache Kafka và cung cấp cho bạn tất cả các phần giới thiệu cần thiết để bắt đầu với hàng đợi tin nhắn phân tán Kafka. Vậy hãy bắt đầu.
  * [Giới thiệu về Apache Kafka][1]
  * [Hệ thống nhắn tin là gì?][2]
  * [Điều khoản cơ bản][3]
  * [Các bước cài đặt][4]
  * [Tạo một chủ đề][5]
  * [Viết tin nhắn vào chủ đề][6]
  * [Đọc tin nhắn từ chủ đề][7]
  * [Kết luận][8]

## Giới thiệu về Apache Kafka {#intro}

Nhà môi giới tin nhắn nguồn mở Apache Kafka đã được bắt đầu tại LinkedIn và sau đó trở thành một dự án Apache nguồn mở. Phần mềm môi giới tin nhắn Kafka được phát triển trong Scala và Java. Apache Kafka Broker là một hệ thống nhắn tin sao chép xuất bản, cho phép trao đổi dữ liệu giữa các ứng dụng, máy chủ và bộ xử lý. Nó là nhanh, có thể mở rộng và phân phối theo thiết kế. Nó có khả năng xử lý hàng triệu dữ liệu hoặc tin nhắn mỗi giây. Nó hoạt động như một trung gian hòa giải giữa hệ thống nguồn (nhà sản xuất) và hệ thống mục tiêu (người tiêu dùng). Các tổ chức như Netflix, Uber và hàng ngàn công ty như vậy sử dụng Apache Kafka Truyền phát thời gian thực. So với các hệ thống nhắn tin khác, phần mềm hàng đợi tin nhắn Kafka có thông lượng tốt hơn, phân vùng tích hợp, sao chép và dung sai lỗi vốn có. Điều này làm cho nó phù hợp với các ứng dụng xử lý tin nhắn quy mô lớn.

## Hệ thống nhắn tin là gì? {#messaging}

Hệ thống nhắn tin là một sự trao đổi đơn giản các tin nhắn giữa hai hoặc nhiều người, thiết bị, v.v. Nó chịu trách nhiệm truyền dữ liệu từ ứng dụng này sang ứng dụng khác, vì vậy các ứng dụng có thể tập trung vào dữ liệu, nhưng không lo lắng về cách chia sẻ nó.
Một loại hệ thống nhắn tin là hệ thống nhắn tin điểm đến điểm. Trong các thông điệp hệ thống này được lưu trữ trong một hàng đợi khi được gửi bởi nhà sản xuất. Chỉ có một người tiêu dùng có thể tiêu thụ một thông điệp tại bất kỳ thời điểm nào. Và, một khi tin nhắn được tiêu thụ, nó sẽ bị xóa khỏi hàng đợi. Một trong những ví dụ của hệ thống này là hệ thống xử lý đơn hàng. Nơi chỉ có một quá trình có thể thực hiện đơn đặt hàng.
Một loại hệ thống nhắn tin khác là hệ thống nhắn tin Pub-Sub cho phép người gửi gửi tin nhắn và người nhận để đọc tin nhắn đó. Trong tin nhắn Apache Kafka, người gửi được biết đến như một nhà sản xuất xuất bản tin nhắn và người nhận được biết đến như một người tiêu dùng tiêu thụ thông điệp đó bằng cách đăng ký vào nó. Một ví dụ về hệ thống này là truyền hình cáp của bạn xuất bản nhiều kênh và bất kỳ ai cũng có thể đăng ký lựa chọn các kênh của họ và nhận chúng bất cứ khi nào các kênh đăng ký của họ có sẵn.

## Điều khoản cơ bản {#terms}

Trước khi chúng tôi nói thêm về hàng đợi tin nhắn tốt nhất Apache Kafka, bạn phải hiểu một số điều khoản.
* **Chủ đề** : Một luồng tin nhắn thuộc về một danh mục cụ thể được gọi là một chủ đề.
* **Phân vùng** : Các chủ đề có thể có nhiều phân vùng, vì vậy chúng có thể xử lý một lượng dữ liệu tùy ý.
* **Phân vùng bù** : Mỗi thông báo được phân vùng có ID chuỗi duy nhất có tên là Offset Offset.
* **Bản sao của phân vùng** : Bản sao là bản sao lưu của một phân vùng. Chúng được sử dụng để ngăn ngừa mất dữ liệu.
* **Các nhà môi giới** : chịu trách nhiệm duy trì dữ liệu được công bố.
* **Cụm Kafka** : Kafka, có nhiều hơn một nhà môi giới được gọi là Cụm Kafka.
* **Nhà sản xuất** : Các nhà xuất bản của các tin nhắn thành một hoặc nhiều chủ đề.
* **Người tiêu dùng** : là người đọc dữ liệu từ các nhà môi giới. Họ đăng ký nhiều chủ đề và tiêu thụ bất cứ khi nào có một thông điệp trong chủ đề.
* **Lãnh đạo** : Node chịu trách nhiệm cho tất cả các lần đọc và ghi cho bất kỳ phân vùng nào.
* **Người theo dõi** : Node tuân theo các hướng dẫn lãnh đạo được gọi là người theo dõi.

## Các bước cài đặt {#steps}


### Bước 1 - Xác minh cài đặt Java
Hy vọng rằng bạn đã cài đặt Java trên máy của mình ngay bây giờ, vì vậy bạn chỉ cần xác minh nó bằng lệnh sau.
```
$ java -version
```
Nếu Java được cài đặt thành công trên máy của bạn, bạn có thể thấy phiên bản của Java đã cài đặt. Nếu không thì trước tiên bạn nên cài đặt Java.

### Bước 2 - Cài đặt khung ZooKeeper
Truy cập liên kết sau và tải xuống phiên bản mới nhất của Zookeeper.
{{_LINE_46_}}
Khi bạn đã hoàn tất việc cài đặt và cấu hình, bạn có thể bắt đầu người nhận vườn thú với lệnh sau
```
$ bin/zkServer.sh start
```
Và sau đó sử dụng lệnh sau để kết nối với ZooKeeper từ CLI
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
Sau khi kết nối, bạn sẽ thấy những thứ như thế này
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### Bước 3 - Cài đặt Apache Kafka
Tải xuống bản phát hành nhà môi giới tin nhắn tốt nhất KAFKA mới nhất và trích xuất nó từ URL sau
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
Chạy các lệnh sau để bắt đầu tất cả các dịch vụ theo đúng thứ tự:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
Mở một phiên thiết bị đầu cuối khác và chạy:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## Tạo một chủ đề {#create}

Để viết tin nhắn hoặc sự kiện của bạn vào các chủ đề, trước tiên bạn phải tạo một chủ đề. Để tạo một chủ đề, hãy mở thiết bị đầu cuối của bạn và chạy lệnh sau:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
Bây giờ chúng tôi đã tạo ra một chủ đề với cái tên Thời tiết đã cập nhật, nơi chúng tôi sẽ xuất bản thông tin về thời tiết và người tiêu dùng sẽ tiêu thụ những tin nhắn đó.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## Viết tin nhắn vào chủ đề {#write}

Chạy khách hàng của nhà sản xuất giao diện điều khiển để viết một vài sự kiện vào chủ đề của bạn. Theo mặc định, mỗi dòng bạn nhập sẽ dẫn đến một sự kiện riêng biệt được ghi vào chủ đề.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## Đọc tin nhắn từ chủ đề {#read}

Mở một phiên thiết bị đầu cuối khác và chạy ứng dụng khách tiêu dùng console để đọc các sự kiện bạn vừa tạo:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
Hãy thử nghiệm: Ví dụ: chuyển sang thiết bị đầu cuối nhà sản xuất của bạn (bước trước) để viết các sự kiện bổ sung và xem cách các sự kiện ngay lập tức xuất hiện trong thiết bị đầu cuối tiêu dùng của bạn.

## Phần kết luận {#conclusion}

Trong hướng dẫn này, chúng tôi đã tìm hiểu về những điều cơ bản của việc sử dụng Apache Kafka. Chúng tôi đã cài đặt dịch vụ xếp hàng Kafka và sau đó cấu hình nó. Chúng tôi cũng đã học cách tạo các chủ đề trong Kafka, gửi tin nhắn đến các chủ đề và cách đọc tin nhắn từ các chủ đề. Tôi hy vọng bài viết này hữu ích cho bạn. Hãy để gặp nhau trong bài viết tiếp theo.
Bạn sử dụng nền tảng phát trực tuyến sự kiện phân tán nguồn mở nào ?. Bạn có bất kỳ câu hỏi nào không?

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Phần mềm hàng đợi tin nhắn nguồn miễn phí và nguồn mở tốt nhất) phần mềm][10]
  * [Kafka vs Redis Pub-Sub, sự khác biệt mà bạn nên biết][11]
  * [Giới thiệu về Redis Pub/Sub và nó hoạt động như thế nào?][12]



[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
