---
title: "Cách sử dụng Nginx làm bộ cân bằng tải cho ứng dụng của bạn" 
seoTitle: "Cách sử dụng Nginx làm bộ cân bằng tải cho ứng dụng của bạn" 
description: "Nginx là một máy chủ web nguồn mở phổ biến. Nó được biết đến với hiệu suất cao và khả năng mở rộng. Trong hướng dẫn này, chúng ta sẽ học cách sử dụng Nginx làm bộ cân bằng tải" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx là phổ biến cho hiệu suất cao và khả năng mở rộng của nó. Nó là máy chủ web nguồn mở số 1. Trong hướng dẫn này, chúng tôi sẽ học cách sử dụng Nginx như một bộ cân bằng tải." 
url: /vi/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## NGINX là phổ biến cho hiệu suất và khả năng mở rộng cao của nó. Nó là máy chủ web nguồn mở số 1. Trong hướng dẫn này, chúng tôi sẽ học cách sử dụng Nginx như một bộ cân bằng tải.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Cách sử dụng Nginx làm bộ cân bằng tải">}}

Các trang web lưu lượng truy cập cao hiện đại phục vụ hàng trăm ngàn và trong một số trường hợp, hàng triệu yêu cầu đồng thời từ người dùng hoặc khách hàng và trả về chính xác dữ liệu văn bản, hình ảnh, video hoặc ứng dụng, tất cả đều nhanh chóng và đáng tin cậy. Để đáp ứng nhu cầu của các khối lượng lớn này và sức mạnh tính toán, bạn cần nhiều máy chủ hơn. Với nhiều máy chủ hơn, bạn cần một cách để tải cân bằng lưu lượng giữa các máy chủ này. Trong hướng dẫn blog này, chúng tôi sẽ khám phá bộ cân bằng tải là gì và làm thế nào chúng tôi có thể sử dụng Nginx làm bộ cân bằng tải.
Để định cấu hình cân bằng tải nginx như một điều kiện tiên quyết, bạn sẽ cần phải có ít nhất hai máy chủ với phần mềm máy chủ web được cài đặt và cấu hình để xem các lợi thế của việc cân bằng tải với NGINX. Nếu bạn đã có một máy chủ web đang chạy được thiết lập thì hãy sao chép nó bằng cách tạo một hình ảnh tùy chỉnh và triển khai nó lên một máy chủ web mới. Vì vậy, hãy để Lừa học cách thiết lập cấu hình cân bằng tải nginx từng bước cho các máy chủ đám mây của bạn.!
  * **[NGINX Web Server][1]**
  * **[Bộ cân bằng tải][2]**
  * **[Cài đặt nginx như bộ cân bằng tải (vòng tròn)][3]**
  * **[Giới thiệu về các chỉ thị ngược dòng khác nhau][4]**
  * **[Kết luận][5]**

## NGINX Web Server   {#Webserver}
Nginx là một máy chủ Web nguồn mở hiệu suất cao. Ngoài các khả năng của máy chủ HTTP, Nginx cũng có thể hoạt động như một máy chủ proxy cho email (IMAP, POP3 và SMTP) và proxy ngược và tải cân bằng nginx cho máy chủ HTTP, TCP và UDP. Nó cải thiện hiệu suất, độ tin cậy và bảo mật của các ứng dụng của bạn. Nó phổ biến cho bộ tính năng phong phú, cấu hình đơn giản và mức tiêu thụ tài nguyên thấp.
Nginx hoạt động như thế nào? Nginx thường được sử dụng làm bộ cân bằng tải proxy ngược Nginx làm điểm nhập duy nhất cho một ứng dụng web phân tán hoạt động trên nhiều máy chủ riêng biệt. Nó sử dụng một cách tiếp cận không đồng bộ, dựa trên sự kiện để cung cấp sử dụng bộ nhớ thấp và đồng thời cao. Bạn có thể đọc thêm về Nginx [tại đây][6].

## Load Balancer   {#LoadBalancer}
Cân bằng tải là quá trình phân phối lưu lượng mạng trên nhiều máy chủ. Và phần mềm của người Viking, hoặc phần cứng của người Viking, thực hiện quy trình phân phối này được gọi là bộ cân bằng tải. Một bộ cân bằng tải giống như một cảnh sát lưu lượng truy cập của người Viking đứng trước máy chủ của bạn và các yêu cầu của khách hàng định tuyến trên tất cả các máy chủ. Nó đảm bảo rằng ứng dụng của bạn vẫn hoạt động ngay cả khi một trong các máy chủ bị hỏng.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="nginx như bộ cân bằng tải">}}

Các chức năng chính của bộ cân bằng tải đang theo sau:
  * Phân phối các yêu cầu của khách hàng hoặc tải mạng hiệu quả trên nhiều máy chủ
  * Đảm bảo tính khả dụng và độ tin cậy cao bằng cách gửi yêu cầu chỉ đến các máy chủ trực tuyến
  * Cung cấp sự linh hoạt để thêm hoặc trừ các máy chủ khi nhu cầu ra lệnh

## Cài đặt nginx dưới dạng tải cân bằng tải   {#setup}
Trước khi thiết lập cân bằng tải tải vòng tròn nginx, bạn nên cài đặt Nginx trên máy chủ của mình. Bạn có thể cài đặt nó một cách nhanh chóng với APT-Get:
```
sudo apt-get install nginx
```
Để thiết lập bộ cân bằng tải vòng tròn, chúng tôi sẽ cần sử dụng mô-đun ngược dòng Nginx. Chúng tôi sẽ cập nhật cấu hình bộ cân bằng tải nginx vào cài đặt Nginx. Hãy để mở cấu hình trang web của bạn. Vì lợi ích của ví dụ này, tôi đã sử dụng tệp cấu hình mặc định
```
sudo vi /etc/nginx/sites-available/default
```
Chúng ta cần thêm cấu hình cân bằng tải vào tệp để định cấu hình bộ cân bằng tải với Nginx.
Đầu tiên chúng ta cần bao gồm mô -đun ngược dòng để cân bằng tải ngược dòng nginx trông như thế này:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Sử dụng phần phụ trợ này ngược dòng làm điểm cuối proxy của bạn trong khối máy chủ của bạn:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Khởi động lại nginx
```
sudo service nginx restart
```
Miễn là bạn có tất cả các máy chủ tại chỗ, bạn sẽ thấy rằng bộ cân bằng tải nguồn mở Nginx sẽ bắt đầu phân phối khách truy cập cho các máy chủ như nhau. Phân phối bằng nhau này được gọi là cân bằng tải vòng tròn.

## Các chỉ thị ngược dòng   {#Upstream}
Trong ví dụ cuối cùng của chúng tôi, chúng tôi đã sử dụng một mô-đun ngược dòng đơn giản để thực hiện cân bằng tải vòng tròn để phân phối lưu lượng truy cập như nhau giữa các máy chủ. Tuy nhiên, có nhiều lý do tại sao điều này có thể không phải là cách hiệu quả nhất để làm việc với giao thông. Có một số chỉ thị mà chúng tôi có thể sử dụng để chỉ đạo khách truy cập trang web hiệu quả hơn.

## # Cân nặng
Một cách để bắt đầu phân bổ người dùng cho các máy chủ có độ chính xác hơn là phân bổ trọng lượng cụ thể cho một số máy nhất định. Nginx cho phép chúng tôi gán một số chỉ định tỷ lệ lưu lượng cần được chuyển đến mỗi máy chủ.
Một thiết lập cân bằng tải bao gồm trọng lượng máy chủ có thể trông như thế này:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
Trọng lượng mặc định là 1. Với trọng lượng 2, backend2.Exampl 1.

## # Hash
Hash IP cho phép các máy chủ trả lời khách hàng theo địa chỉ IP của họ, gửi khách truy cập trở lại cùng một VPS mỗi khi họ truy cập (trừ khi máy chủ đó bị hỏng). Nếu một máy chủ được biết là không hoạt động, nó nên được đánh dấu là xuống. Tất cả các IP được cho là định tuyến đến máy chủ Down sau đó được chuyển đến một máy thay thế.
Cấu hình dưới đây cung cấp một ví dụ:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

## # Max thất bại
Theo cài đặt vòng tròn mặc định, bộ cân bằng tải ứng dụng Nginx sẽ tiếp tục gửi dữ liệu đến các máy chủ riêng ảo, ngay cả khi các máy chủ không phản hồi. Max Fails có thể tự động ngăn chặn điều này bằng cách hiển thị các máy chủ không phản hồi không hoạt động trong một khoảng thời gian đã thiết lập.
Có hai yếu tố liên quan đến Max Fails: Max \ _Fails và Fall \ _Timeout. Max Fails đề cập đến số lần thử tối đa không thành công để kết nối với một máy chủ sẽ xảy ra trước khi nó được xem xét không hoạt động. Fall_Timeout Chỉ định độ dài của máy chủ được xem xét không hoạt động. Khi thời gian hết hạn, các nỗ lực mới để tiếp cận máy chủ sẽ khởi động lại. Giá trị thời gian chờ mặc định là 10 giây.
Một cấu hình mẫu có thể trông như thế này:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Kết luận:   {#conclusion}
Trong hướng dẫn cân bằng tải nginx này, chúng tôi đã tìm hiểu về NGNIX, cân bằng tải và cách thiết lập bộ cân bằng tải nginx để phân phối lưu lượng truy cập của bạn đến nhiều máy chủ. Chúng tôi cũng khám phá các thuật toán cân bằng tải khác nhau như vòng tròn, băm và MAX thất bại. Nếu bạn đang chạy một ứng dụng có khối lượng lớn và bạn cần phân phối tải trên các máy chủ khác nhau thì Nginx là một trong những lựa chọn tốt nhất cho bạn. Và quan trọng nhất là nó là máy chủ web miễn phí và nguồn mở miễn phí 100%.
_Your có thể tham gia với chúng tôi trên [Twitter][7], [LinkedIn][8] và trang [Facebook][9] của chúng tôi. Bộ cân bằng tải mạnh nào khác để cải thiện tính khả dụng và hiệu quả tài nguyên của máy chủ __ có sử dụng không? . Nếu bạn có bất kỳ câu hỏi hoặc phản hồi nào, xin vui lòng liên hệ][10].

## Khám phá
Bạn có thể tìm thấy các bài viết dưới đây có liên quan hơn
  * [Cách bảo mật và mã hóa Nginx với Let Let mã hóa trên Ubuntu 20.04][11]
  * [Apache vs Nginx - So sánh chi tiết vào năm 2021][12]

  
[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
