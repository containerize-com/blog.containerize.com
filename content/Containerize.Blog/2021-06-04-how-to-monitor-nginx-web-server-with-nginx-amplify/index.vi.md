---
title: "Cách giám sát máy chủ web nginx với nginx khuếch đại" 
seoTitle: "Cách giám sát máy chủ web nginx với nginx khuếch đại" 
description: "Nginx Amplify là một tác nhân giám sát miễn phí cho các ứng dụng Web Web và PHP của NGINX. Bài viết này là về cách giám sát máy chủ web nginx với nginx khuếch đại" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Giám sát Nginx, các ứng dụng PHP, hệ điều hành với nginx khuếch đại và cải thiện cấu hình. Bài viết này hướng dẫn bạn thiết lập và định cấu hình nginx khuếch đại." 
url: /vi/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Giám sát Nginx, các ứng dụng PHP, hệ điều hành với nginx khuếch đại và cải thiện cấu hình. Bài viết này hướng dẫn bạn thiết lập và định cấu hình nginx khuếch đại.

{{< figure align=center src="images/nginx-post.png" alt="Giám sát máy chủ web nginx với nginx khuếch đại">}}


## Tổng quan {#Install}

**Giám sát máy chủ web**rất quan trọng đối với các trang web giao thông cao. Tác nhân giám sát****sẽ ghi lại các số liệu thiết yếu về máy chủ web thường xuyên. Những số liệu quan trọng đó có thể được sử dụng để tối ưu hóa cấu hình Nginx. Nó sẽ giúp bạn cải thiện hiệu suất của máy chủ và ứng dụng web của bạn.
Trong bài đăng trên blog này, chúng tôi sẽ đề cập đến các phần sau đây để theo dõi **nginx** Công cụ nguồn mở.
  * [Máy ​​chủ web nginx][1]
  * [Nginx khuếch đại][2]
  * [Cài đặt nginx khuếch đại][3]
  * [Số liệu giám sát][4]

## Máy chủ web nginx {#Nginx}

[Nginx][5] là một máy chủ web nguồn mở và miễn phí. Nó đơn giản, nhẹ và dễ cấu hình hơn Apache. Máy chủ web nginx cũng hoạt động như một proxy ngược, cân bằng tải, proxy thư và bộ đệm HTTP. Nó hoạt động cho các giao thức HTTP, HTTPS, SMTP, POP3 và IMAP. Nginx là một máy chủ web tốc độ cao, đáng tin cậy và hiệu quả bộ nhớ, cải thiện hiệu suất của các ứng dụng của bạn. Hơn nữa, nó đã phát triển phổ biến và hiện được coi là máy chủ web phổ biến nhất. Hơn nữa, Nginx phù hợp cho bất kỳ loại trang web nào bao gồm các trang web và ứng dụng giao thông cao. Nó có thể được cài đặt và cấu hình trên gần như tất cả các hệ điều hành.

### Cài đặt nginx
  * Chạy bên dưới các lệnh để cài đặt máy chủ web nginx.
```
sudo apt update
sudo apt install nginx
```
  * Khi bạn đã hoàn tất việc cài đặt, hãy mở trình duyệt của bạn và gõ HTTP: // ip \ _of \ _your_server. Bạn sẽ thấy trang chào mừng dưới đây.

{{< figure align=center src="images/nginx-home.png" alt="Chào mừng đến nginx!">}}


## Nginx khuếch đại {#Amplify}

Nginx Amplify là một công cụ giám sát miễn phí cho Nguồn mở Ngon, Nginx Plus và PHP-FPM. Nó là một công cụ dựa trên SaaS để giám sát và ứng dụng máy chủ nginx. Người dùng có thể dễ dàng theo dõi tài sản cơ sở hạ tầng, giám sát hiệu suất và điều chỉnh cấu hình. Nó cung cấp thông tin toàn diện mà người dùng có thể sử dụng để tối ưu hóa cấu hình máy chủ web và ứng dụng. Nó hoạt động như một tác nhân trên máy chủ lưu trữ các ứng dụng NGINX và PHP. Nginx khuếch đại là một bản ghi nhẹ, đẩy và giám sát dữ liệu để khuếch đại các máy chủ mà không ảnh hưởng đến hiệu suất. Bạn có thể xem các số liệu trên bảng điều khiển khuếch đại. Đại lý có sẵn cho tất cả các hệ điều hành chính như Rhel, Centos, Ubuntu, Debian, Fedora và FreeBSD. Nginx Amplify có ba thành phần chính như Tác nhân khuếch đại nginx, nginx khuếch đại giao diện người dùng web và nginx khuếch đại phụ trợ.
* **Nginx khuếch đại tác nhân** - Nó hoạt động trên hệ thống đang được theo dõi. Tất cả các giao tiếp được mã hóa bằng SSL/TLS.
* **nginx khuếch đại giao diện người dùng web** - Web UI hiển thị các số liệu cho các máy chủ, ứng dụng và hệ điều hành web.
* **nginx khuếch đại phụ trợ** - Đây là một thành phần chính được triển khai dưới dạng SaaS và chịu trách nhiệm thu thập số liệu, duy trì cơ sở dữ liệu, chạy công cụ phân tích và cung cấp API lõi.

## Cài đặt nginx khuếch đại {#Install}

Thực hiện theo hướng dẫn từng bước để cài đặt nginx khuếch đại trên Ubuntu.
  * Đầu tiên, bạn cần tạo một tài khoản tại nginx [trang web][6].
  * Sau khi đăng nhập, bạn sẽ thấy màn hình bên dưới tại trang web nginx khuếch đại. Bây giờ, kết nối với máy chủ của bạn thông qua SSH và sử dụng các lệnh được đưa ra trong các bước dưới đây.

{{< figure align=center src="images/amplify-1.png" alt="Cài đặt nginx khuếch đại">}}

  * Chạy lệnh dưới đây để tải xuống tác nhân.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Thực hiện lệnh sau để cài đặt nginx khuếch đại trên máy chủ. Thay thế XXXXX bằng khóa API thực tế. Bạn có thể tìm thấy nó ở bảng điều khiển nginx khuếch đại.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Khi bạn đã hoàn tất việc cài đặt, bạn có thể kiểm tra trạng thái bằng lệnh sau.
```
$ sudo service amplify-agent status
```
  * Bây giờ, bạn cần định cấu hình Tác nhân khuếch đại nginx để xem các số liệu.

{{< figure align=center src="images/amplify-2-1.png" alt="Cấu hình giám sát Nginx">}}

  * Tạo một tệp mới với cấu hình stub_status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Sao chép mã dưới đây vào nó và lưu tệp.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Khởi động lại máy chủ web nginx để kích hoạt mô -đun stub_status.
```
$ sudo service nginx restart
```
  * Bây giờ, mở tệp cấu hình Nginx với lệnh sau.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Thêm mã dưới đây vào nó và lưu nó.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Khởi động lại dịch vụ Nginx để áp dụng tất cả các thay đổi.
```
$ sudo service nginx restart
```
  * Tiếp theo, điều hướng để khuếch đại bảng điều khiển và nhấp vào nút ‘Hoàn thành. Bạn sẽ xem trang sau.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Giám sát máy chủ web">}}

* Bạn có thể thấy các số liệu thống kê ở định dạng dễ dàng và dễ đọc hơn bằng cách nhấp vào tab **Tổng quan** . Nó sẽ trông như như hình dưới đây.

{{< figure align=center src="images/amplify-overview.png" alt="Chỉ số giám sát Nginx">}}


## Giám sát số liệu {#Monitoring}

Tác nhân Bộ khuếch đại nginx thu thập các loại dữ liệu sau:
* **Các số liệu nginx** -Nó thu thập các số liệu liên quan đến Nginx khác nhau từ Stub_Status, các tệp nhật ký và từ trạng thái quy trình.
* **Số liệu hệ thống** - Nginx khuếch đại theo dõi một loạt các số liệu hệ thống như sử dụng CPU, sử dụng bộ nhớ, lưu lượng mạng và nhiều hơn nữa.
* **Số liệu PHP-FPM** -Nếu nó xác định quy trình chính của PHP-FPM đang chạy, nó sẽ nhận được các số liệu từ trạng thái nhóm PHP-FPM.
* **Số liệu MySQL** - Bộ biến trạng thái toàn cầu MySQL có thể được tác nhân sử dụng để thu thập số liệu.
* **Siêu dữ liệu nginx** - Tác nhân thu thập dữ liệu về các trường hợp nginx như dữ liệu gói, thông tin xây dựng, đường dẫn nhị phân, cài đặt cấu hình xây dựng và nhiều hơn nữa.
* **Siêu dữ liệu hệ thống** - Đại lý thu thập dữ liệu về hệ điều hành, bao gồm tên máy chủ, thời gian hoạt động, hương vị hệ điều hành và các chi tiết khác.

## Phần kết luận
Chúng tôi đã đi qua máy chủ web nginx và Nginx khuếch đại tác nhân giám sát nâng cao rất chi tiết. Nginx khuếch đại khá đơn giản để thiết lập và định cấu hình. Ngoài ra, chúng tôi đã đi qua trong đó các số liệu quan trọng nginx khuếch đại có thể theo dõi **theo dõi nginx** . Các số liệu quan trọng này có thể được sử dụng để cải thiện cấu hình của máy chủ và ứng dụng web nginx của bạn.
Cuối cùng, [containerize.com][7] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với danh mục [Stack giải pháp máy chủ web][8] này cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Cách sử dụng Nginx làm bộ cân bằng tải cho ứng dụng của bạn][9]
  * [Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược][10]



[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
