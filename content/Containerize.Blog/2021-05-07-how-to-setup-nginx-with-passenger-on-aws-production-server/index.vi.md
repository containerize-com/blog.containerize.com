---
title: "Cách thiết lập Nginx với hành khách trên máy chủ sản xuất AWS" 
seoTitle: "Cách thiết lập Nginx với hành khách trên máy chủ sản xuất AWS" 
description: "Bài đăng trên blog này mô tả các bước để cài đặt Nginx với hành khách thông qua hệ điều hành Ubuntu 20.04 LTS theo phương pháp APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Bài đăng trên blog này mô tả các bước để cài đặt Nginx với hành khách thông qua hệ điều hành Ubuntu 20.04 LTS theo phương pháp APT." 
url: /vi/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

## Bài đăng trên blog này mô tả các bước để cài đặt Nginx với hành khách thông qua hệ điều hành Ubuntu 20.04 LTS theo phương thức APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Thiết lập Nginx với hành khách trên máy chủ sản xuất AWS">}}


## **Tổng quan** :
Bạn cần cài đặt và định cấu hình **nginx với hành khách trên máy chủ sản xuất AWS** trước khi bạn triển khai ứng dụng của mình trên máy chủ sản xuất.
**Hành khách phusion nguồn mở** cung cấp rất nhiều tùy chọn tùy chỉnh và tính năng. Hành khách Một số tính năng được sử dụng để cải thiện các đặc điểm hiệu suất của ứng dụng. Một số hành vi ứng dụng tùy chỉnh hoặc xử lý kết nối, v.v ... Hai tùy chọn cấu hình cho hành khách là cần thiết để được thiết lập trong nginx, được đặt tên là hành khách \ _Enables và hành khách \ _root. Quá trình cài đặt này sẽ tự động thiết lập cả hai tùy chọn này.
Trong bài viết trên blog này, chúng tôi sẽ bao gồm một số bước cấu hình thiết yếu để cài đặt máy chủ ứng dụng web trên hệ điều hành Ubuntu theo phương thức **apt** . Bạn sẽ có thể triển khai và quản lý các ứng dụng web được viết trong Node.js, Python và Ruby sau khi đọc và theo dõi hướng dẫn dưới đây.
* **Nginx và hành khách là gì?** 
* **Cài đặt các gói Nginx và hành khách** 
* **Kích hoạt mô -đun nginx của hành khách và khởi động lại nginx** 
* **Xác thực cài đặt** 
* **Cập nhật hệ thống và hành khách** 
* **Các máy chủ web nguồn mở tốt nhất** 
  * **Phần kết luận** 

## 1. Nginx và hành khách là gì? {#step-4:-update-regularly}

**[Máy ​​chủ nginx là gì?][1] **Nginx là phần mềm máy chủ web miễn phí và nguồn mở cho web phục vụ như một proxy ngược, cân bằng tải HTTP, phát trực tuyến phương tiện, bộ đệm HTTP và proxy email cho IMAP, POP3 và SMTP. Nó có khả năng mở rộng cao, được thiết kế cho hiệu suất tối đa và sự ổn định. Nginx là hiệu suất cao không đồng bộ, máy chủ web không có luồng và điều khiển sự kiện cho phép xử lý nhiều yêu cầu của khách hàng cùng một lúc. Nó được viết bởi Igor Sysoev, được phát hành năm 2004 theo các điều khoản của giấy phép BSD 2 mệnh đề.** Nginx thực hiện nhanh hơn 2,5 lần**so với Apache và tiêu thụ ít bộ nhớ hơn theo một bài kiểm tra điểm chuẩn.
**[Hành khách là gì?][2] **Phusion Pascer còn được gọi là mod \ _rails và mod \ _rack, là một máy chủ web miễn phí và máy chủ ứng dụng web nguồn mở. Nó được thiết kế để nhanh, mạnh mẽ, giàu tính năng và nhẹ, tích hợp với Apache và Nginx. Nó cũng cải thiện bảo mật, độ tin cậy và khả năng mở rộng cho các ứng dụng. Nó cho phép quản trị viên có được cái nhìn sâu sắc về các hoạt động ứng dụng web, hiệu suất máy chủ. Máy chủ ứng dụng hành khách chạy và tự động quản lý các ứng dụng web của bạn một cách dễ dàng. Nó cũng có thể** phục vụ nhiều ứng dụng**đồng thời là nhiều người thuê và độc lập. Nó có thể xử lý các yêu cầu HTTP, quản lý các quy trình và tài nguyên và cho phép các nhiệm vụ quản trị, giám sát và chẩn đoán vấn đề. Phusion Pastenger là một máy chủ ứng dụng miễn phí với sự hỗ trợ để triển khai và quản lý sao băng, Ruby on Rails Nginx Pascer, JavaScript, Python và Node.js.

## 2. Cài đặt các gói Nginx và hành khách: {#step-1:-install-passenger-packages}

Bây giờ là lúc để cài đặt hành khách và Nginx. Bạn sẽ có thể dễ dàng triển khai một trong những máy chủ web phổ biến theo hướng dẫn này. Các lệnh được liệt kê dưới đây sẽ cài đặt hành khách và Nginx thông qua kho lưu trữ APT của Phusion. Nếu bạn đã cài đặt Nginx thì các lệnh này sẽ nâng cấp Nginx lên phiên bản Phusion, với hành khách được biên dịch trong:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Kích hoạt mô -đun Nginx của hành khách và khởi động lại Nginx: {#step-2:-enable-the-passenger-nginx-module-and-restart-nginx}

EDIT /etc/nginx/nginx.conf và Unomment bao gồm /etc/nginx/passenger.conf ;. Ví dụ: bạn có thể thấy điều này:
```
# include /etc/nginx/passenger.conf;
```
Xóa các ký tự ‘#, như thế này:
```
include /etc/nginx/passenger.conf;
```
Nếu bạn không thấy một phiên bản nhận xét của bao gồm /etc/nginx/passenger.conf; Bên trong nginx.conf, sau đó bạn cần phải tự chèn nó. Chèn nó vào /etc/nginx/nginx.conf bên trong khối http.
http {
    bao gồm /etc/ngginx/passenger.conf;
    ...
}
Khi bạn hoàn thành bước này, **Khởi động lại nginx** :
```
$ sudo service nginx restart
```

## 4. Xác nhận cài đặt: {#step-3:-check-installation}

Sau khi cài đặt, vui lòng xác thực cài đặt trong thiết bị đầu cuối bằng cách chạy lệnh `sudo/usr/bin/paslenger-config xác nhận-install`:
```
sudo /usr/bin/passenger-config validate-install
```
Tất cả các séc sẽ vượt qua. Nếu bất kỳ kiểm tra nào không vượt qua, vui lòng làm theo các đề xuất trên màn hình.
Cuối cùng, kiểm tra xem Nginx có bắt đầu các quy trình lõi hành khách hay không. Chạy `sudo/usr/sbin/hành khách-stats`. Bạn sẽ thấy các quy trình nginx cũng như các quy trình của hành khách. Ví dụ như dưới đây:
```
sudo /usr/sbin/passenger-memory-stats
```
Nếu bạn không thấy bất kỳ quy trình NGINX hoặc quy trình hành khách nào, thì bạn có thể gặp một số vấn đề cài đặt hoặc vấn đề cấu hình. Vui lòng tham khảo [Hướng dẫn xử lý sự cố][3].

## 5. Cập nhật hệ thống và hành khách: {#step-4:-update-regularly}

Các bản cập nhật nginx, cập nhật hành khách và cập nhật hệ thống được phân phối thông qua Trình quản lý gói **APT** thường xuyên. Bạn nên chạy lệnh sau đây thường xuyên để cập nhật chúng:
Cập nhật sudo apt-get
Sudo Apt-get nâng cấp
Bạn không cần phải khởi động lại web hoặc ứng dụng sau khi cập nhật và bạn cũng không cần sửa đổi bất kỳ tệp cấu hình nào sau khi cập nhật. Đó là tất cả được chăm sóc tự động cho bạn bởi APT.

## 6. **Máy chủ web nguồn mở tốt nhất** : {#step-4:-update-regularly}

** Máy chủ web nguồn mở là gì? Về cơ bản, nó xử lý các yêu cầu thông qua giao thức mạng HTTP để phân phối thông tin trên World Wide Web.
Hơn 80% các ứng dụng và trang web web được cung cấp bởi các máy chủ web nguồn mở. Ở đây tôi đã liệt kê một số **các máy chủ web nguồn mở phổ biến nhất** và bạn có thể dễ dàng triển khai một trong những máy chủ web phổ biến này.
* **Máy chủ Apache HTTP** 
* **Máy chủ web LightTpd** 
* **Máy chủ web OpenLitespeed** 
* **Máy chủ web Apache Tomcat** 
* **Máy chủ web Caddy** 

## [][4. Kết luận: {#next-step}

Xin chúc mừng, bạn đã cài đặt thành công và định cấu hình Nginx với hành khách trên máy chủ sản xuất **AWS**cho ứng dụng web của bạn. Vui lòng xem các hướng dẫn khác nhau trong [Thư viện hành khách][5] để thành thạo hoàn toàn máy chủ ứng dụng hành khách. Bạn có thể đặc biệt quan tâm đến [triển khai tự động hóa][6] Hướng dẫn về ứng dụng Ruby của bạn thông qua**Capistrano** , dạy bạn cách tự động triển khai các bản cập nhật ứng dụng trong tương lai mà không cần quá nhiều công việc thủ công. Bây giờ bạn đã sẵn sàng để triển khai ứng dụng web của mình trên các trường hợp sản xuất AWS.
_ Web máy chủ web miễn phí và ứng dụng web nguồn mở Máy chủ_ Bạn có thích **Phát triển web hoặc lưu trữ** Need_ ?. Bạn có bất kỳ câu hỏi nào về máy chủ web miễn phí và máy chủ ứng dụng web nguồn mở không ?, PLEL_ [liên hệ][7].

## Khám phá
Bạn có thể tìm thấy các bài đăng trên blog có liên quan sau:
  * [Cách cấu hình Apache dưới dạng proxy ngược cho Ubuntu/Debian][8]
  * [Cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][9]
  * [Định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][10]
  * [An toàn và mã hóa Nginx với Let Let Encrypt trên Ubuntu 20.04][11]
  * [Cách cài đặt và định cấu hình Owncloud với Apache trên Ubuntu][12]



[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
