---
title: "Cách tạo trang web học tập điện tử với Moodle LMS" 
seoTitle: "Cách tạo trang web học tập điện tử với Moodle LMS" 
description: "Moodle LMS là một giải pháp học tập điện tử miễn phí và nguồn mở để tạo ra một nền tảng học tập trực tuyến. Kiểm tra hướng dẫn để làm quen với nó." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Xây dựng một nền tảng học tập trực tuyến với nền tảng học tập điện tử nguồn mở. Bài viết này giải thích cách sử dụng Moodle LMS để tạo một trang web học tập từ xa." 
url: /vi/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Xây dựng một nền tảng học tập trực tuyến với nền tảng học tập điện tử nguồn mở. Bài viết này giải thích cách sử dụng Moodle LMS để tạo một trang web học tập từ xa.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Chúng tôi đã bị Covid 19 làm phiền trong hơn một năm. Mọi nơi trên thế giới đã được đặt dưới khóa. Nó có tác động tiêu cực đến cuộc sống của người dân và các doanh nghiệp trên toàn thế giới. Quan trọng hơn, nó có tác động lớn đến hệ thống giáo dục của chúng tôi. Các tổ chức giáo dục phải thực hiện chuyển đổi sang học tập trực tuyến để học sinh có thể tiếp tục giáo dục từ sự thoải mái của chính ngôi nhà của họ. Không có nền tảng học tập điện tử vững chắc và an toàn, việc học trực tuyến là không thể. Trong bài viết này, chúng tôi sẽ xem xét dự án  **Moodle Open Source** , cho phép giáo viên và học sinh giao tiếp và học hỏi từ bất cứ đâu.
Chúng tôi sẽ đề cập đến các phần sau trong bài viết này để  **Tạo trang web học tập điện tử**  bằng Moodle.
  * [Điều kiện tiên quyết][1]
  * [Moodle là gì?][2]
  * [Các tính năng của Moodle][3]
  * [Cài đặt Moodle][4]
  * [Kết luận][5]

## Điều kiện tiên quyết   {#Prerequisites}
Nếu bạn đã không có, bạn phải cài đặt và định cấu hình môi trường đèn trên máy chủ của mình.

## Moodle là gì?   {#Cái gì}
[**Moodle **][6] là một giải pháp học tập điện tử miễn phí và mở. Moodle là viết tắt của môi trường học tập động hướng đối tượng mô-đun. Nó được tạo ra để cung cấp cho các nhà giáo dục, quản trị viên và người học một nền tảng học tập điện tử để tạo và cung cấp môi trường học tập cá nhân. Hơn nữa, Moodle là một  **LMS phù hợp cho các trường học ** , các trường đại học và các khóa đào tạo chuyên nghiệp trong các công ty. Đây là một trong những giải pháp học tập từ xa  **phổ biến **  để tạo trang web LMS. Ngoài ra, Moodle cung cấp cho giáo viên và học sinh các công cụ phong phú và môi trường học tập hợp tác. Moodle có một ứng dụng di động cho điện thoại iPhone, Android và Windows và máy tính bảng. Ứng dụng di động có thể được sử dụng từ bất kỳ vị trí nào trên khắp thế giới. LMS  **tự lưu trữ này **  được viết trong PHP và lưu trữ dữ liệu trong cơ sở dữ liệu MySQL/PostgreSQL. Nó đi kèm với tài liệu người dùng và nhà phát triển rộng rãi. Tất cả các mã nguồn có sẵn tại [ **GitHub ** ][7]. Giấy phép cho nguồn mở ** Giải pháp học tập điện tử**  là GPLV3+.

## Các tính năng của Moodle   {#Features}
Moodle đi kèm với rất nhiều tính năng. Tuy nhiên, trong bài viết này, chúng tôi sẽ xem xét một số tính năng chính sau đây.
**Các công cụ và hoạt động hợp tác**: Diễn đàn, Wikis, Thuật ngữ, Hoạt động cơ sở dữ liệu và các công cụ khác cho phép người dùng hợp tác và học cùng nhau. Một nhóm các yếu tố trong một khóa học Moodle được gọi là một hoạt động. Một hoạt động thường là điều mà một học sinh làm trong đó mình tương tác với các học sinh khác và/hoặc giáo viên.
**Theo dõi tiến trình**: Các nhà giáo dục và sinh viên có thể theo dõi tiến trình và hoàn thành của họ bằng cách sử dụng nhiều công cụ để theo dõi các hoạt động hoặc tài liệu cụ thể cũng như ở cấp khóa học. Có một số cách để theo dõi sự tiến bộ của học sinh trong Moodle như điểm số, năng lực, hoàn thành hoạt động, hoàn thành khóa học, huy hiệu, báo cáo khóa học và phân tích.
**Quản lý plugins**: Plugin cho phép bạn mở rộng chức năng cơ bản của Moodle, bằng cách thêm các tính năng mới. Người dùng có thể thêm plugin cho nhiều tác vụ khác nhau như hoạt động bổ sung, loại câu hỏi đố mới, báo cáo mới, đầu nối hệ thống và nhiều tác vụ khác. Giao diện quản trị có thể được sử dụng để cài đặt và vô hiệu hóa các plugin.
**Quản lý khóa học**: Tạo và quản lý các khóa học đáp ứng nhiều nhu cầu khác nhau. Các lớp học do người hướng dẫn, các lớp học tự, các lớp pha trộn và các lớp hoàn toàn trực tuyến là tất cả các tùy chọn.
**Đánh giá ngang hàng và tự đánh giá**: Các hội thảo và khảo sát là các hoạt động tích hợp để khuyến khích học sinh xem, phân loại và xem xét lại của riêng họ và các bạn cùng lớp khác làm việc như một nhóm.

## Cài đặt Moodle   {#moodle}
Thực hiện theo hướng dẫn từng bước dưới đây để cài đặt Moodle LMS trên Ubuntu 18.04.
  * Đầu tiên, hãy chạy các lệnh bên dưới để thay đổi tải xuống trực tiếp và tải xuống Moodle.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Chạy các lệnh sau tạo thư mục dữ liệu và đặt quyền.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Tạo tệp cấu hình nginx cho trang web Moodle.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Thêm mã bên dưới vào đó và lưu tệp.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Tạo SymLink để cho phép trang web mới được tạo.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Khởi động lại máy chủ web Nginx.
```
sudo systemctl restart nginx
```
  * Tiếp theo, mở trình duyệt của bạn và nhập http://example.com. Thay thế ví dụ trên mạng.com bằng tên miền thực tế hoặc IP của máy chủ của bạn.
  * Bây giờ, bạn có thể thấy trình hướng dẫn cài đặt. Chọn một ngôn ngữ và nhấp vào nút tiếp theo.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Chọn một ngôn ngữ">}}

  * Bạn cần xem xét và đảm bảo rằng URL trang web, thư mục gốc Moodle và các đường dẫn thư mục dữ liệu là chính xác. Bạn cũng có thể thay đổi đường dẫn thư mục dữ liệu trên đường dẫn và nó sẽ nằm ngoài thư mục mã Moodle để bảo mật. Nhấp vào nút tiếp theo.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Đặt đường dẫn thư mục dữ liệu">}}

  * Chọn trình điều khiển cơ sở dữ liệu trong bước này. Tuy nhiên, bạn có thể sử dụng một đã được chọn và nhấp vào nút tiếp theo.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - Chọn Trình điều khiển cơ sở dữ liệu">}}

  * Cung cấp cài đặt cơ sở dữ liệu như máy chủ cơ sở dữ liệu, tên cơ sở dữ liệu, người dùng cơ sở dữ liệu, mật khẩu cơ sở dữ liệu và tiền tố bảng. Nhấp vào nút tiếp theo.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Cài đặt cơ sở dữ liệu">}}

  * Nhấp vào nút Xác nhận để đồng ý với các điều khoản và điều kiện.
  * Bạn có thể thấy một danh sách các tiện ích mở rộng PHP cần thiết. Tuy nhiên, bạn sẽ phải cài đặt bất kỳ tiện ích bổ sung bị thiếu. Nhấp vào nút Tiếp tục để di chuyển bước tiếp theo.
  * Tại thời điểm này, bạn cần điền vào dữ liệu quản trị viên để tạo tài khoản. Nhấp vào nút Cập nhật Cập nhật hồ sơ.
  * Cung cấp thông tin cho trang web của bạn như tên trang web đầy đủ, tên ngắn cho trang web, tóm tắt frontpage, múi giờ mặc định và email không trả lời. Nhấp vào nút Lưu Thay đổi Thay đổi.
  * Hoàn thành đăng ký trang web của bạn bằng cách cung cấp thông tin như tên trang web, ngôn ngữ, khu vực, địa chỉ email, v.v.

## Kết luận   {#conclusion}
Chúng tôi đã học về Moodle và các tính năng chính của nó trong bài viết này. Chúng tôi cũng đã thực hiện một cách tiếp cận từng bước để thiết lập **Moodle LMS  **thành **  Tạo trang web học tập điện tử **. Bạn có thể xem lại Moodle, [**  Tài liệu chính thức**][8] để trở nên thoải mái hơn với các chức năng khác nhau như các khóa học, đăng ký sinh viên, tiến trình theo dõi, v.v. Tôi hy vọng bạn thấy bài đăng này hữu ích trong việc tạo một trang web LMS.
Cuối cùng, [**containerize.com **][9] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với hệ thống quản lý học tập [** **][10] cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  *[ **Công cụ LMS nguồn mở** ][11]
  *[ **Moodle-Hệ thống học tập điện tử** ][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
