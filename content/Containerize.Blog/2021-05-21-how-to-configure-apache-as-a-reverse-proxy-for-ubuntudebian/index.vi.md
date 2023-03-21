---
title: "Cách định cấu hình Apache như một proxy ngược cho ubuntu/debian" 
seoTitle: "Cách định cấu hình Apache như một proxy ngược cho ubuntu/debian" 
description: "Cấu hình proxy ngược của Apache từng bước cho phép bạn chạy một hoặc nhiều máy chủ kết thúc trở lại phía sau máy chủ proxy với mod_proxy trên ubuntu/debian linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy cho phép bạn chạy một hoặc nhiều máy chủ back-end phía sau máy chủ proxy. Tại đây, cách thức cấu hình proxy Apache ngược trên hệ thống Ubuntu/Debian." 
url: /vi/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy cho phép bạn chạy một hoặc nhiều máy chủ back-end phía sau máy chủ proxy. Tại đây, cách thức cấu hình proxy Apache ngược trên hệ thống Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Cài đặt và định cấu hình proxy ngược Apache">}}


##**Tổng quan**
Apache Reverse Proxy cho phép tất cả lưu lượng truy cập và chuyển tiếp nó để chạy một hoặc nhiều máy chủ phụ trợ hoặc container phía sau máy chủ proxy, mà không làm lộ chúng một cách công khai. Máy chủ web back-end có thể là một máy chủ HTTP nguồn mở hoặc nguồn mở khác như Nginx. Máy chủ HTTP Apache2 là một trong những máy chủ web nguồn mở phổ biến nhất đang được sử dụng ngày nay.
Có nhiều lý do để cài đặt và định cấu hình máy chủ proxy. Ví dụ: proxy ngược có thể giúp bạn thêm bảo mật, để cân bằng tải, hạn chế quyền truy cập vào các vị trí nhất định để ngăn chặn các cuộc tấn công và nhiều hơn nữa. Bài viết này giải thích cách cài đặt và định cấu hình cấu hình proxy Apache Reverse Từng bước cho máy chủ HTTPS trên Ubuntu/Debian:
  * Cài đặt Apache2
  * Định cấu hình Apache2
  * Bật các mô -đun proxy của nó
  * Bật SSL
  * Khởi động lại Apache2
  * Phần kết luận

## Bước 1: Cài đặt Apache2
Cài đặt Apache2 rất đơn giản và dễ chạy. Để thực hiện cài đặt, hãy chạy các lệnh dưới đây một cách đơn giản:
Cập nhật sudo apt-get
sudo apt-get cài đặt apache2
{{_LINE_25_}}
Sau khi cài đặt Apache2 trên hệ thống của bạn, hãy sử dụng các lệnh SystemCTL sau trên phiên bản Ubuntu của Debian Linux hoặc Ubuntu Linux để dừng, khởi động, bật và khởi động lại Apache2 để luôn khởi động lại khi máy chủ khởi động.
sudo systemctl dừng apache2.service
sudo systemctl start apache2.service
SUDO SystemCtl Bật Apache2.Sservice
sudo systemctl khởi động lại apache2.sservice
{{_LINE_31_}}
Bạn có thể xem trạng thái máy chủ web bằng lệnh sau:
SUDO SystemCTL Status Apache2.Service
{{_LINE_34_}}
Để kiểm tra thiết lập Apache2, hãy mở trình duyệt của bạn và duyệt đến tên máy chủ máy chủ hoặc địa chỉ IP hệ thống của bạn và bạn sẽ thấy trang kiểm tra mặc định Apache2 như được hiển thị bên dưới. Khi bạn thấy điều đó, thì Apache2 đang hoạt động như mong đợi. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Cài đặt và định cấu hình proxy proxy ngược Apache cho ubuntu">}}


## Bước 2: Định cấu hình Apache2 dưới dạng proxy ngược
Apache2 được cài đặt thành công và sẵn sàng để sử dụng. Bây giờ bạn có thể định cấu hình Apache2 để hoạt động như một proxy ngược Apache2 Ubuntu. APACHE2 MODULE MODULE **ProxyPass  **và **  proxypassReverse  **Hàm cung cấp proxy ngược. Để sử dụng **  proxypass  **và**   proxypassreverse**, trước tiên bạn phải biết rằng nơi bạn muốn chỉ đạo lưu lượng truy cập trang web.
Máy chủ proxy ngược Apache2 sẽ lắng nghe tất cả lưu lượng truy cập trên cổng HTTP mặc định, đó là cổng 80 trong một thiết lập đơn giản. Máy chủ back-end lưu trữ nội dung trang web sẽ nghe trên một cổng tùy chỉnh và rất có thể là cổng 8080.
Trong bài viết trên blog này, chúng tôi sẽ thiết lập Apache2 để nghe trên cổng 80 và sau đó trực tiếp lưu lượng truy cập đến máy chủ back-end lắng nghe trên Cổng 8080. Chạy bên dưới lệnh để tạo tệp VirtualHost proxy có tên Apache2Proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Sau đó thêm khối mã sau trong tệp apache2proxy.conf và sau đó lưu nó.
{{_LINE_43_}}
        Trò chơi servername.com
        Serveralias www.example.com
        Serveradmin webmaster@example.com
        ErrorLog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir} /caccess.log kết hợp
        ProxyRequests tắt
{{_LINE_50_}}
          Đặt hàng từ chối, cho phép
          Cho phép từ tất cả
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxypassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Đặt hàng cho phép, từ chối
          Cho phép từ tất cả
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Tệp Apache2Proxy.conf chứa tên máy chủ của bạn cũng như proxy_pass nơi lưu lượng truy cập sẽ được định hướng khi nhận được bởi máy chủ proxy HTTP.

## Bước 3: Bật proxy Apache2
Apache2 Web Server hiện đã được cài đặt và thiết lập thành công. Apache có nhiều mô -đun đi kèm có sẵn trong đó. Các mô -đun này không được bật trong cài đặt Apache2 mới. Đầu tiên, chúng tôi sẽ cần kích hoạt các mô-đun mà chúng tôi cần để kích hoạt mô-đun Apache MOD_PROXY cần thiết và một số mô-đun bổ trợ của nó để hỗ trợ các giao thức mạng khác nhau. Chạy các lệnh được liệt kê dưới đây để bật các mô -đun proxy HTTP của nó.
Sudo A2enMod Proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
Bây giờ bật trang web ảo và khởi động lại Apache2 để cho phép tải lại cấu hình mô -đun Apache2.
sudo a2ensite apache2proxy.conf
sudo systemctl khởi động lại apache2.sservice
Khởi chạy một trình duyệt web mà bạn chọn và điều hướng đến tên máy chủ máy chủ của bạn như example.com. Bây giờ bạn sẽ được ủy quyền cho máy chủ Apache2 của mình trên cổng mặc định, tức là 8080.

## Bước 4: Bật SSL   {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
Nếu bạn muốn bật mô -đun SSL proxy ngược của Apache thì hãy chạy lệnh bên dưới để bật Apache Reverse Proxy HTTPS Proxy Pass:
sudo A2enMod SSL
Điều này sẽ cung cấp Apache Apache Reverse Proxy HTTP cho hỗ trợ HTTPS cho các máy chủ phụ trợ.

## Bước 5: Khởi động lại Apache2   {#Block-836BB4FF-17AD-4317-8ECB-153104BD28A7}
Để thực hiện các thay đổi này thành có hiệu lực, hãy khởi động lại Apache bằng cách chạy lệnh bên dưới:
sudo systemctl khởi động lại apache2.sservice
Chúc mừng! Bạn đã cài đặt thành công và cấu hình proxy ngược Apache2 trên hệ thống Linux của bạn.

##  **Kết luận:**    {#4A1A}
Trong hướng dẫn này, chúng tôi đã khám phá và thảo luận về từng bước của máy chủ proxy và Apache Reverse Proxy. Chúng tôi cũng đã học cách thiết lập và định cấu hình Apache2 như một proxy ngược trên hệ thống Linux. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ thảo luận về các chủ đề thú vị hơn về Apache và các ngăn xếp giải pháp máy chủ web khác.

## Khám phá
Bạn cũng có thể thích các bài viết liên quan hơn dưới đây:
  * [Làm thế nào để][1][Cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][2]
  * [Cách thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][3]
  * [Định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][4]
  * [Bảo mật và mã hóa Nginx với Let Let Encrypt trên Ubuntu 20.04][5]
  * [Cách cài đặt và định cấu hình Owncloud với Apache trên Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/vi/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
