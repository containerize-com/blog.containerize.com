---
title: "Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược" 
seoTitle: "Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược" 
description: "Hướng dẫn này là về cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược. Nginx được coi là một trong những máy chủ Web proxy ngược nguồn mở phổ biến nhất." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "Nginx là một máy chủ web nguồn mở cũng có thể hoạt động như một proxy ngược. Hướng dẫn này sẽ giúp bạn học cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược." 
url: /vi/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## Nginx là một máy chủ web nguồn mở cũng có thể hoạt động như một proxy ngược. Hướng dẫn này sẽ giúp bạn học cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Sử dụng nginx làm máy chủ proxy ngược">}}


## Tổng quan:
Nginx và Apache là hai máy chủ web nguồn mở phổ biến nhất **thường được sử dụng với PHP. Một proxy ngược hoặc cổng hoạt động như một kết nối giữa máy khách và máy chủ. Máy khách và máy chủ trao đổi thông tin với nhau để làm việc liên tục và hiệu quả. Các proxy ngược phổ biến nhất là ** nginx và Apache**  và cả hai có thể được cấu hình trên cùng một máy ảo khi lưu trữ nhiều trang web. Một proxy ngược bảo vệ các máy chủ web khỏi các cuộc tấn công và cổng kết nối xuất hiện cho máy khách giống như một máy chủ web thông thường trong đó không có cấu hình nginx proxy ngược đặc biệt. Khách hàng gửi yêu cầu trong khi proxy ngược lại quyết định truyền thông tin được yêu cầu và sau đó cung cấp kết quả đầu ra cuối cùng cho máy khách.
Sau rất nhiều sự đánh giá cao cho loạt bài hướng dẫn của chúng tôi về Redis, chúng tôi đã nhận được rất nhiều yêu cầu để bắt đầu một loạt trên Nginx hướng dẫn. Vì vậy, tuần trước chúng tôi đã bắt đầu với một hướng dẫn về cách sử dụng [bộ cân bằng tải proxy ngược nginx][1] cho các ứng dụng của bạn. Ví dụ cấu hình proxy ngược Nginx đơn giản này cung cấp nhiều lợi ích hiệu suất proxy ngược và ngge linx. Nginx Proxy ngược đơn giản là máy chủ proxy nginx nguồn mở được sử dụng tích cực nhất trên internet. Trong hướng dẫn này, chúng tôi sẽ  **Định cấu hình và khám phá cách sử dụng Nginx làm proxy ngược**  và cách thiết lập nó làm proxy ngược trên một máy chủ. Vậy hãy bắt đầu!
  * Khong biet?
  * Chuyển tiếp vs proxy ngược
  * Định cấu hình proxy ngược
  * Những lợi thế của proxy ngược nginx là gì?
  * Phần kết luận

## Khong biet?
**Một máy chủ proxy** hoạt động như một cổng giữa bạn và Internet. Nó có một máy chủ trung gian tách biệt người dùng cuối với các trang web mà họ duyệt. Các máy chủ proxy cung cấp các cấp độ chức năng, bảo mật và quyền riêng tư khác nhau theo trường hợp sử dụng của bạn hoặc chính sách của công ty.
Với một máy chủ proxy, lưu lượng truy cập Internet chảy qua máy chủ proxy trên đường đến địa chỉ bạn yêu cầu. Yêu cầu sau đó quay trở lại thông qua cùng một máy chủ proxy đó (chủ yếu) và sau đó máy chủ proxy chuyển tiếp dữ liệu nhận được từ trang web cho bạn.

## chuyển tiếp vs proxy ngược:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx như máy chủ proxy ngược">}}

Nói chung khi chúng ta nói về proxy, hầu hết thời gian chúng ta có nghĩa là proxy chuyển tiếp.  **proxy chuyển tiếp**  là tuyệt vời để tránh các hạn chế của quốc gia, như tường lửa lớn của Trung Quốc. Khách hàng chỉ cần kết nối với các tài nguyên bị chặn thông qua proxy chuyển tiếp. Các proxy chuyển tiếp có thể ẩn danh tính của người dùng bằng cách thay đổi địa chỉ IP của họ. Vì vậy, về cơ bản, nginx là proxy chuyển tiếp nằm giữa máy khách và internet, vì vậy máy chủ cuối không biết về máy khách thực tế.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx như proxy ngược">}}

**Proxy ngược **cũng đóng vai trò là trung gian nhưng họ ngồi ở phía bên kia của kết nối. Các proxy ngược là tuyệt vời ở ** cân bằng tải** , tối ưu hóa web và bảo mật. Proxy ngược thường được sử dụng để phân phối tải giữa một số máy chủ, hiển thị liền mạch nội dung từ các trang web khác nhau hoặc truyền yêu cầu xử lý cho các máy chủ ứng dụng qua các giao thức khác ngoài HTTP.

## Cấu hình nginx dưới dạng proxy ngược:
Khi Nginx ủy quyền một yêu cầu, nó sẽ gửi yêu cầu đến một máy chủ proxied được chỉ định, lấy phản hồi và gửi lại cho máy khách. Có thể yêu cầu proxy đến máy chủ HTTP hoặc máy chủ không phải HTTP bằng giao thức được chỉ định. Các giao thức được hỗ trợ bao gồm  **fastcgi, uwsgi, scgi và memcached** .
Để chuyển yêu cầu cho máy chủ được proxied HTTP, chỉ thị **proxy_pass  **được chỉ định bên trong vị trí**  **. Ví dụ:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Cấu hình ví dụ proxy ngược nginx này dẫn đến việc chuyển tất cả các yêu cầu được xử lý ở vị trí này đến máy chủ được ủy quyền tại địa chỉ được chỉ định. Địa chỉ này có thể được chỉ định dưới dạng tên miền hoặc địa chỉ IP. Địa chỉ cũng có thể bao gồm một cổng:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Bạn thậm chí có thể chuyển các tiêu đề được sửa đổi hoặc tùy chỉnh cho máy chủ được ủy quyền trong nginx  **proxy \ _set \ _header**  Máy chủ bên dưới trong ví dụ.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
Nginx cũng hỗ trợ bộ đệm giúp cải thiện hiệu suất. Với bộ đệm được bật Nginx sẽ lưu trữ phản hồi mà nó nhận được từ máy chủ được ủy quyền miễn là máy khách cần tải xuống.
Thay vì ủy quyền tất cả các yêu cầu cho một máy chủ duy nhất, bạn cũng có thể  **thiết lập nhiều máy chủ phụ trợ**  và để tải cân bằng nginx giữa các máy chủ được ủy quyền đó. Chúng tôi đã đề cập đến điều này trong hướng dẫn của chúng tôi về [cân bằng tải nginx][1].

## Ưu điểm của proxy ngược nginx là gì?
Sau đây là những lợi ích của việc thiết lập máy chủ proxy ngược nginx:
  *Nginx là một trong những máy chủ web nguồn mở phổ biến nhất** cũng là công cụ proxy phổ biến nhất. Nginx Reverse Proxy Config rất đơn giản để thực hiện vì nó cung cấp cho người dùng bảo mật cao cấp chống lại các cuộc tấn công của DDOS và DOS Web Server.
  *Nó giúp tạo ra tải cân bằng giữa các trang web lưu lượng truy cập cao và các máy chủ phụ trợ như  **dropbox, Netflix và Zynga** .
  * Nó cung cấp cơ chế bộ nhớ đệm cho máy chủ back-end chậm hơn và các trang web lưu lượng truy cập cao để thiết lập máy chủ ảo proxy ngược nginx. Nó không yêu cầu thiết lập một quy trình mới cho mỗi yêu cầu web từ phía máy khách.
  * Nó cũng hoạt động như một máy chủ proxy ngược cho nhiều giao thức như HTTP, HTTPS, TCP, UDP, SMTP, IMAP và POP3, v.v.
  *Nginx có thể  **Xử lý hơn 10000 kết nối**  với dấu chân bộ nhớ thấp và có thể vận hành nhiều máy chủ web trên một địa chỉ IP duy nhất.
  * Nó cũng giúp bộ đệm nội dung trang và thực hiện mã hóa SSL để giảm tải từ máy chủ máy chủ web. Nginx là một trong những máy chủ web tốt nhất để cải thiện hiệu suất của nội dung tĩnh bằng cách nén nó và tăng thời gian tải.
  * Nó là một công cụ tuyệt vời cho môi trường nhiều máy chủ và nó cũng có thể hữu ích cho các tác vụ khác nhau như giữ một máy chủ ẩn danh.

## Phần kết luận:
Trong hướng dẫn proxy đảo ngược **nginx này **, chúng tôi đã khám phá một máy chủ proxy nginx là gì và thiết lập proxy ngược nginx. Sự khác biệt giữa phía trước so với Reverse Proxy Server nginx. Chúng tôi cũng đã học bằng cách ví dụ làm thế nào để thiết lập Nginx làm proxy ngược. Bây giờ bạn hoàn toàn hiểu cách cài đặt ** Nginx Reverse Proxy Cấu hình Proxy từng bước** . Hướng dẫn trên giúp bạn bắt đầu với một proxy ngược được thiết lập. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ thảo luận về các chủ đề thú vị hơn về Nginx.
_ Máy chủ _reverse Proxy_ yêu thích nhất của bạn là dễ dàng, năng động và đầy đủ tính năng ?. Bạn có bất kỳ câu hỏi nào về hàng đầu_ _Open Nguồn _RVerse prox__y,  **Balancer tải cho HTTP và TCP**  Ứng dụng dựa trên

## Khám phá
Bạn có thể tìm thấy các bài viết dưới đây có liên quan hơn
  * [Cách cấu hình Apache dưới dạng proxy ngược cho Ubuntu/Debian][3]
  * [Bảo mật Nginx với Let Let Encrypt trên Ubuntu 20.04][4]
  * [Cách sử dụng Nginx làm bộ cân bằng tải cho ứng dụng của bạn][1]
  * [Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][5]
  * [Định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][6]
  * [Cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu][7]
  * [Thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
