---
title: "Cách bảo đảm Nginx với Let Let Encrypt trên Ubuntu 20.04" 
seoTitle: "Cách bảo đảm Nginx với Let Let Encrypt trên Ubuntu 20.04" 
description: "Cách thiết lập, mã hóa và bảo mật Nginx với chúng ta hãy mã hóa trên Ubuntu. Hãy mã hóa máy khách để tạo chứng chỉ để tự động định cấu hình nginx." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Các trang web bao gồm mã hóa SSL/TLS cho miền của nó để thu hút khách truy cập. Bài viết này giải thích việc sử dụng tiện ích certbot để có được chứng chỉ TLS/SSL cho Nginx." 
url: /vi/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

## Các trang web bao gồm mã hóa SSL/TLS cho miền của nó để thu hút khách truy cập. Bài viết này giải thích việc sử dụng tiện ích certbot để có được chứng chỉ TLS/SSL cho Nginx.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Bảo mật nginx với chúng ta hãy mã hóa trên Ubuntu">}}


##  **Tổng quan**  
Bất kỳ trang web nào tìm cách thu hút khách truy cập cần bao gồm mã hóa TLS/SSL cho tên miền của nó. Chứng chỉ miễn phí SSL đảm bảo kết nối an toàn giữa máy chủ web của bạn muốn mã hóa và bảo mật nginx và trình duyệt ứng dụng. Let Let Encrypt là một cơ quan chứng chỉ mở miễn phí, tự động và mở cho phép bạn thiết lập sự bảo vệ đó cho nginx ssl cho phép. Hãy để các chứng chỉ SSL miễn phí mã hóa được tất cả các trình duyệt chính tin cậy và có giá trị trong 90 ngày kể từ ngày phát hành.
Bài đăng trên blog này giải thích cách đơn giản nhất để mã hóa và bảo mật nginx chạy máy chủ web trên Ubuntu 20.04 / 18.04 bằng cách lấy Chinx HTTPS cho phép chứng chỉ sử dụng tiện ích NGINX CERTBOT và thiết lập chứng chỉ của bạn để tự động gia hạn. Hãy để bắt đầu và thiết lập cho các cấu hình Ubuntu nginx của Ubuntu.
  * Phụ thuộc và điều kiện tiên quyết
  * Cài đặt tiện ích certbot
  * Xác nhận cấu hình Nginx
  * Cho phép HTTPS qua tường lửa
  * Lấy chứng chỉ SSL
  * Phần kết luận

## Điều đầu tiên đầu tiên: phụ thuộc và điều kiện tiên quyết {#prerequisites}

Để theo dõi bài viết này, bạn sẽ cần theo các phụ thuộc và điều kiện tiên quyết để cài đặt LetSenCrypt Ubuntu nginx Utility:
  * Một người dùng Root hoặc root hỗ trợ sudo trên các máy cục bộ/từ xa.
  * Một hệ thống chạy Ubuntu 20.04 hoặc Ubuntu 18.04
  * Truy cập vào một thiết bị đầu cuối dòng lệnh
  * Đặc quyền sudo hoặc root trên máy cục bộ/từ xa
  * Nginx đã cài đặt và thiết lập
  * Một tên miền đã đăng ký chỉ vào IP công cộng
  * Một khối máy chủ được cấu hình cho tên miền đó
  * Tường lửa được cấu hình để chấp nhận kết nối trên các cổng 80 và 443.

## Bước 1 - Cài đặt Certbot {#step-1-—-installing-certbot}

Bước đầu tiên để đảm bảo nginx và mã hóa Nginx với Let Let Encrypt là cài đặt Nginx Certbot hoàn toàn có tính năng và dễ sử dụng để lấy và gia hạn cho phép mã hóa chứng chỉ SSL trên máy chủ của bạn. Để làm như vậy, hãy bắt đầu bằng cách mở một thiết bị đầu cuối trên Ubuntu và cập nhật kho lưu trữ cục bộ. Nhập Y và nhập nếu được nhắc.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Bây giờ, hãy để xác minh một số cài đặt cấu hình an toàn nginx.

## Bước 2 - Xác nhận cấu hình Nginx {#step-2-—-confirming-nginx-39-s-configuration}

Như đã giải thích trong phần phụ thuộc và điều kiện tiên quyết, bạn đã có tên miền đã đăng ký và certbot cần có thể tìm khối máy chủ nginx chính xác cho tên miền đó tự động định cấu hình SSL. Ví dụ, bài đăng trên blog này sử dụng blog tên miền.containerize.com và khối máy chủ cho tên miền của bạn tại /etc/nginx/sites-available/blog.containerize.com với chỉ thị server_name đã được đặt chính xác.
Để xác nhận, hãy mở tệp cấu hình cho tên miền của bạn bằng Nano hoặc Trình chỉnh sửa văn bản yêu thích của bạn:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Tìm dòng chỉ thị server_name hiện có trong file /etc/nginx/sites-available/blog.containerize.com. Nó sẽ giống như thế này:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Bây giờ xác minh cú pháp của các tệp cấu hình nginx của bạn và tải lại máy chủ Nginx để tải cài đặt cấu hình mới:
```
sudo nginx -t
sudo systemctl reload nginx

```
Certbot Utility bây giờ có thể tìm thấy Chỉ thị Khối máy chủ Nginx chính xác để bảo mật Nginx và tự động cập nhật nó. Trong bước tiếp theo, hãy để cập nhật tường lửa để cho phép lưu lượng truy cập HTTPS.

## Bước 3 - Cho phép HTTPS qua tường lửa {#step-3-—-allowing-https-through-the-firewall}

Theo đề xuất trong bài viết này Điều kiện tiên quyết, bạn sẽ cần điều chỉnh các cài đặt để cho phép lưu lượng truy cập HTTPS. Để đảm bảo rằng tường lửa của bạn được bật và hoạt động, hãy chạy lệnh bên dưới:
```
sudo ufw status

```
Đầu ra sẽ cho bạn biết UFW đang hoạt động và cung cấp cho bạn một danh sách các quy tắc đã đặt. Nó chỉ hiển thị lưu lượng HTTP được phép đến máy chủ web. Để cho phép lưu lượng được mã hóa, bạn có thể thêm hồ sơ nginx HTTPS hoặc sử dụng Nginx Full và xóa quy tắc NGINX HTTP hiện có. Cho phép lưu lượng truy cập nginx https bằng cách nhập lệnh:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Xác minh quy tắc HTTPS cho phép lưu lượng HTTPS bằng cách nhập lệnh trạng thái UFW:
```
sudo ufw status

```
Tiếp theo, hãy để chạy Certbot và lấy chứng chỉ của chúng tôi.

## Bước 4 - Lấy chứng chỉ SSL {#step-4-—-obtaining-an-ssl-certificate}

Plugin nginx, cho certbot sẽ chăm sóc việc cấu hình lại nginx và tải lại cấu hình của nó khi cần thiết. Do đó, chỉ bạn mới cần tạo chứng chỉ bằng phích cắm nginx bằng cách thực thi lệnh sau:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Nếu đây là lần đầu tiên bạn chạy Certbot Utility thì CertBot yêu cầu bạn định cấu hình cài đặt HTTPS của mình. Bạn sẽ được nhắc nhập địa chỉ email và đồng ý với các điều khoản dịch vụ. Sau khi nhấn Enter, cấu hình sẽ được cập nhật và Nginx sẽ tải lại để chọn cài đặt mới. Cuối cùng, Certbot sẽ hiển thị với một tin nhắn cho bạn biết rằng chứng chỉ đã được tạo thành công và nơi chứng chỉ của bạn được lưu trữ.
Chứng chỉ của bạn được tải xuống, cài đặt và tải với Chứng chỉ SSL nginx cho phép cấu hình. Hãy thử tải lại trang web của bạn bằng cách sử dụng https: // và nhận thấy chỉ báo bảo mật trình duyệt của bạn. Nó sẽ chỉ ra rằng trang web được bảo mật đúng cách, thường là với biểu tượng khóa. Nếu bạn kiểm tra máy chủ của mình bằng cách sử dụng thử nghiệm SSL Labs Server, nó sẽ nhận được điểm A cho Nginx và LetSenCrypt.
Hãy để kết thúc bằng cách thử nghiệm quá trình gia hạn.

## Bước 5-Xác minh tự động gia hạn certbot {#step-5-—-verifying-certbot-auto-renewal}

Vì cho phép các chứng chỉ mã hóa hết hạn mỗi chín mươi (90) ngày và nginx SSL cho phép khuyến khích người dùng thiết lập và tự động gia hạn công việc. Đầu tiên, hãy mở tệp cấu hình Crontab cho người dùng hiện tại:
```
sudo crontab -e
```
Thêm một công việc cron chạy lệnh certbot, certbot gia hạn nginx gia hạn chứng chỉ nếu phát hiện chứng chỉ sẽ hết hạn trong vòng 30 ngày. Lên lịch để chạy hàng ngày vào một thời điểm cụ thể, ví dụ: 05:00 A.M.
```
sudo certbot renew --dry-run

```
Công việc cron cũng nên bao gồm thuộc tính của nhóm, như trong lệnh trên. Điều này hướng dẫn chứng chỉ SSL RENX RENT không bao gồm bất kỳ đầu ra nào sau khi thực hiện nhiệm vụ. Bật gia hạn chứng chỉ tự động. Khi bạn đã thêm công việc cron, lưu các thay đổi và thoát khỏi tệp.

## Phần kết luận {#conclusion}

Trong bài viết này, chúng tôi đã học cách nginx cài đặt chứng chỉ SSL cho phép. Chúng tôi đã tải xuống chứng chỉ SSL cho tên miền của bạn và cấu hình Nginx để sử dụng các chứng chỉ này. Ngoài ra, bạn nên tự động bật Certbot để gia hạn chứng chỉ cho SSL nginx LetSenCrypt. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ thảo luận về các chủ đề thú vị hơn về cách bảo mật máy chủ web với công nghệ bảo mật tiêu chuẩn cho phép giao tiếp được mã hóa giữa trình duyệt web và máy chủ web.
_Your có thể tham gia với chúng tôi trên [Twitter][1], [LinkedIn][2] và trang [Facebook][3] của chúng tôi. Bạn sử dụng giao thức mật mã nào để cung cấp bảo mật truyền thông qua mạng máy tính ?. Nếu bạn có bất kỳ câu hỏi nào, xin vui lòng liên hệ][4].

## Khám phá
Bạn có thể tìm thấy các liên kết có liên quan sau đây để giám sát hiệu suất của máy chủ và đảm bảo độ tin cậy và bảo mật của nó:
  * [Cách cấu hình Apache dưới dạng proxy ngược cho Ubuntu/Debian][5]
  * [Cách cài đặt và bảo mật phpmyadmin với nginx trên ubuntu][6]
  * [Định cấu hình hỗ trợ HTTP/2 trong Nginx trên Ubuntu/Debian][7]
  * [Thiết lập Nginx với hành khách trên máy chủ sản xuất AWS][8]
  * [Cách cài đặt và định cấu hình Owncloud với Apache trên Ubuntu][9]



 [1]: https://twitter.com/containerize_co
 [2]: https://www.linkedin.com/company/containerize/
 [3]: http://facebook.com/containerize
 [4]: mailto:yasir.saeed@aspose.com
 [5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
 [6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
 [7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
 [8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
 [9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
