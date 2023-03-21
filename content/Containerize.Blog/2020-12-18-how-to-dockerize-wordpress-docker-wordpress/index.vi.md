---
title: "Làm thế nào để Dockerize WordPress | Docker WordPress" 
seoTitle: "Làm thế nào để Dockerize WordPress | Docker WordPress" 
description: "Docker & Docker Compose là gì? Trong bài viết này, chúng tôi sẽ tìm hiểu cách cài đặt Docker, Docker Compose và cách Dockerize WordPress vào một thùng chứa Docker." 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "Một phần mềm container kết hợp một ứng dụng, phụ thuộc của nó và làm cho ứng dụng chạy trên bất kỳ môi trường điện toán nào. Hãy để học cách làm thế nào để Dockerize WordPress." 
url: /vi/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## Một phần mềm container kết hợp một ứng dụng, phụ thuộc của nó và làm cho ứng dụng chạy trên bất kỳ môi trường điện toán nào. Hãy để học cách làm thế nào để Dockerize WordPress.

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize WordPress">}}


## Tổng quan
Chào mừng bạn đến với một bài đăng trên blog khác trong danh mục [Blog][1] của phần mềm nguồn mở. Chúng tôi đã xuất bản một số bài viết về các chủ đề như [tăng cường khách hàng tiềm năng của bạn với tích hợp WordPress Civicrm miễn phí][2], [Cách xây dựng trang web của bạn với WordPress và Gatsby][3], và một số khác. Tuy nhiên, bài viết này sẽ mang đến những hiểu biết và chi tiết hơn nữa về nền tảng blog nguồn mở và phần mềm container****. Chúng tôi sẽ trải qua một số câu hỏi nóng như Docker &**cách cài đặt Docker Compose**và chúng tôi sẽ học cách Dockerize WordPress.
Container hóa đã trở thành một xu hướng chính trong phát triển phần mềm thay thế cho ảo hóa. Nó liên quan đến việc đóng gói hoặc kết hợp mã phần mềm và tất cả các phụ thuộc của nó để nó có thể chạy trên bất kỳ cơ sở hạ tầng nào một cách nhất quán. Container hóa cho phép các nhà phát triển tạo và triển khai các ứng dụng nhanh hơn và an toàn hơn. Docker là ứng dụng container hóa phổ biến nhất được sử dụng trên toàn cộng đồng nhà phát triển. Trong hướng dẫn này, chúng tôi sẽ tìm hiểu cách dockerize WordPress bằng Docker Compose. Vì vậy, hãy để bắt đầu với những điểm sau.
* [**Docker là gì?**][4]
* [**Tại sao bạn cần Dockerize WordPress**?][5]
* **[Cách cài đặt Docker Compose][6]**
* **[Dockerize WordPress][7]**
* **[Kết luận][8]**

## Docker là gì?   {#Docker}
Nói một cách đơn giản, Docker là phần mềm container nguồn mở****thực hiện ảo hóa nhanh hơn và nhẹ hơn. Nó có thể ánh sáng đến nỗi một container docker có thể được ra mắt chỉ trong vài giây. Và, bạn có thể dễ dàng chạy hàng chục container Docker trên một PC. Các nhà phát triển sử dụng Docker để tạo, triển khai và chạy các ứng dụng bằng cách sử dụng các container. Các container cho phép nhà phát triển đóng gói một ứng dụng với tất cả các bộ phận cần thiết, chẳng hạn như thư viện và các phụ thuộc khác và triển khai nó dưới dạng một gói. Bằng cách đó, nhà phát triển có thể yên tâm rằng ứng dụng sẽ chạy trên bất kỳ cơ sở hạ tầng nào. Ngoài ra, có một nhà phát triển và cộng đồng hỗ trợ khổng lồ luôn sống để cung cấp sự hỗ trợ tối đa trong bất kỳ liên quan nào. Docker đã trở thành một thành phần bắt buộc của bất kỳ doanh nghiệp phần mềm nào do các tính năng và cách sử dụng mạnh mẽ của nó.

## Tại sao bạn cần Dockerize WordPress?   {#Tại sao}
Trong phần này, chúng ta sẽ biết về nhu cầu đằng sau Dockerizing WordPress. WordPress là một phần mềm viết blog nguồn mở hàng đầu hàng đầu được thế giới công nghệ chấp nhận cao. Tuy nhiên, để chạy WordPress cục bộ, bạn cần Apache/Nginx, Máy chủ MySQL, PHP và hàng tấn các phụ thuộc khác. Và triển khai để tổ chức môi trường sản xuất hoặc sản xuất là một cơn ác mộng khi quản lý những phụ thuộc đó. Đôi khi, nó trở thành một rắc rối cho các nhà phát triển và hỗ trợ các kỹ sư lặp đi lặp lại các triển khai nhiều lần vì nó đòi hỏi thời gian và nhân lực.
Vì vậy, container hóa có thể giúp bạn với điều này. Tất cả những gì bạn cần là Docker - Bản thân cài đặt mất vài giây và không cần cấu hình bổ sung
Không có vấn đề gì nếu nó là một máy phát triển, giai đoạn hoặc máy chủ trực tiếp và nó là gì, Docker hoạt động giống nhau ở mọi nơi. Điều này có nghĩa là bạn đã giành chiến thắng để tìm kiếm các lỗi mà nói, xuất hiện trong một môi trường và không thể được sao chép trong một môi trường khác.

## Cách cài đặt Docker Compose   {#install}

### Điều kiện tiên quyết
Bạn có thể sử dụng Docker Compose để dễ dàng chạy WordPress trong một môi trường bị cô lập được xây dựng với các thùng chứa Docker. Hướng dẫn này trình bày cách sử dụng Compose để thiết lập và chạy WordPress.
Docker Compose dựa vào công cụ Docker, vì vậy hãy chắc chắn rằng bạn đã cài đặt Công cụ Docker. Trên các hệ thống máy tính để bàn như Docker Desktop cho Mac và Windows, Docker Compose được bao gồm như một phần của các cài đặt máy tính để bàn đó. Tuy nhiên, trên Linux Systems trước tiên, hãy cài đặt Công cụ Docker bằng cách làm theo [hướng dẫn chính thức của họ][9].

### Cài đặt Compose trên Linux
Chạy lệnh này để tải xuống bản phát hành ổn định hiện tại của Docker Compose:
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
Áp dụng các quyền thực thi cho nhị phân:
```
sudo chmod +x /usr/local/bin/docker-compose
```
Kiểm tra cài đặt bằng lệnh phiên bản chạy:
```
docker-compose --version
```

### Xác định Dockerfile cho WordPress
Điều đầu tiên chúng ta cần làm là xác định hình ảnh của chúng ta sẽ trông như thế nào trong**_ Dockerfile _**. Đó là một tệp văn bản được thêm vào thư mục với các nguồn ứng dụng của bạn.
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
Càng**/var/www/html/wordpress**sẽ chứa nội dung đầy đủ của wordpress cùng với chủ đề, plugin và nội dung. Nếu kho lưu trữ của bạn chỉ chứa chủ đề hoặc plugin thì chỉ cần thêm thư mục có liên quan.
Tạo tệp docker-compose.yml bắt đầu blog WordPress của bạn và một phiên bản MySQL riêng biệt với giá treo âm lượng để tồn tại dữ liệu:
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
Bây giờ, hãy chạy lệnh trong thư mục dự án của bạn
```
docker-compose up -d
```
Điều này chạy**_ docker-compose Up _**ở chế độ tách rời, kéo các hình ảnh docker cần thiết và bắt đầu các thùng chứa cơ sở dữ liệu WordPress và cơ sở dữ liệu.
Khi các thùng chứa đã bắt đầu, bạn có thể mở URL trong trình duyệt web và bắt đầu sử dụng ứng dụng của mình:
```
http://localhost:8000
```

## Kết luận   {#conclusion}
Điều này đưa chúng ta đến cuối bài viết trên blog này. Trong bài viết này, chúng tôi đã tìm hiểu về Docker là gì,**Cách cài đặt Docker Compose**. Chúng tôi cũng đã học được cách dockerize WordPress bằng cách sử dụng docker-compose. Ngoài ra, chúng tôi đã giới thiệu cho bạn khái niệm đằng sau Docker và cách bạn có thể xác định các ứng dụng đa năng đơn giản. Tuy nhiên, phần mềm container nguồn mở này**là một lựa chọn hàng đầu cho tất cả các tổ chức phần mềm. Do đó, bài viết này sẽ thực sự giúp bạn nếu bạn đang muốn chọn Docker cho các ứng dụng của bạn. Có nhiều bài viết và phần mềm viết blog có liên quan khác được liệt kê trong phần Khám phá trên mạng bên dưới.
Cuối cùng, [Containererize.com][10] đang viết các bài viết trên các sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với danh mục [Blog][1] để biết tin tức và cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][11], [LinkedIn][12] và [Twitter][13].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [WordPress][14]
  * [Jekyll][15]
  * [Diễn ngôn][16]
  * [Ghost][17]
  * [Làm thế nào để Dockerize WordPress với Docker Compose][18]
  * [Tăng cường khách hàng tiềm năng của bạn với tích hợp WordPress công dân miễn phí][2]
  * [Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket][19]
  * [Cách tích hợp diễn đàn diễn ngôn với WordPress][20]
  * [Tăng lưu lượng tìm kiếm trang web bằng cách theo dõi 7 blog SEO hàng đầu][21]
  * [Cách xây dựng trang web của bạn với WordPress và Gatsby][3]
  * [Cách bật nén GZIP trong WordPress để tốt hơn Pagspeed và SEO][22]

  
[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/vi/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
