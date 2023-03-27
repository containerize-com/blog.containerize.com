---
title: "Cách thiết lập giải pháp CMDB RALPH trên localhost" 
seoTitle: "Cách thiết lập giải pháp CMDB RALPH trên localhost" 
description: "Hướng dẫn này là về việc thiết lập Ralph trên Localhost. RALPH là một giải pháp CMDB miễn phí cung cấp các tính năng để theo dõi tài sản và cấu hình." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "Giải pháp quản lý tài sản CNTT giảm chi phí hoạt động và tăng hiệu quả. Bài viết này là về cách thiết lập phần mềm CMDB RALPH trên máy cục bộ của bạn." 
url: /vi/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## Giải pháp quản lý tài sản CNTT giảm chi phí hoạt động và tăng hiệu quả. Bài viết này là về cách thiết lập phần mềm CMDB RALPH trên máy cục bộ của bạn.

{{< figure align=center src="images/ralph.png" alt="Giải pháp CMDB">}}


##  **Tổng quan**  
Tại thời điểm hiện tại, các tổ chức đang phát triển mạnh để đáp ứng tốc độ công nghệ bằng cách sử dụng cơ sở hạ tầng CNTT khổng lồ. Tiếp theo, nó không ít hơn một thách thức để quản lý môi trường lớn như vậy. Nó đòi hỏi nhân lực và sức mạnh công nghệ để hoàn thành các nhiệm vụ quan trọng như vậy. Đôi khi, nó trở thành rắc rối khi xây dựng các quy trình và quy trình để xử lý các mạng phức tạp của các hệ thống bao gồm máy in, máy tính để bàn, máy quét, điện thoại và các phụ kiện CNTT khác. Tương tự như vậy, các cấu hình của các nút này cũng rất quan trọng vì có nhiều cơ hội ngừng hoạt động của bất kỳ máy nào trong mạng. Do đó, cần có một kiểm tra nhất quán đối với các cấu hình này.
Tuy nhiên, có nhiều phần mềm nguồn mở và phần mềm miễn phí có sẵn để theo dõi và ghi lại tài sản. Phần mềm này được gọi là Phần mềm cơ sở dữ liệu quản lý cấu hình (CMDB). Gần đây, [containerize.com][1] đã xuất bản giải pháp CMDB [RALPH][2] cung cấp nhiều tính năng để quản lý tài sản và cấu hình tốt hơn. Trong bài đăng trên blog này, chúng tôi sẽ khám phá Ralph bằng cách đề cập đến các điểm sau.
*  **[Giới thiệu ngắn gọn về quản lý tài sản phần mềm CMDB Ralph][3]**  
*  **[Các tính năng của Ralph][4]**  
*  **[Làm thế nào để thiết lập Ralph trên localhost?][5]**  
*  **[Kết luận][6]**  

## Giới thiệu ngắn gọn về quản lý tài sản phần mềm CMDB Ralph {#intro}

Ralph là một giải pháp quản lý tài sản CNTT nguồn mở miễn phí. Nó là đa nền tảng và đi kèm với khả năng tự lưu trữ. Có một hệ sinh thái hoàn chỉnh của theo dõi tài sản thời gian thực. Do đó, người dùng có thể thực hiện phân tích để báo cáo. Nó cho phép người dùng ghi lại chi tiết về tài sản về vòng đời của họ. Hơn nữa, phần mềm quản lý tài sản kỹ thuật số nguồn mở này cung cấp không gian để lưu trữ thông tin về tài sản của trung tâm dữ liệu. Mặt khác, giải pháp CMDB này cũng cung cấp hỗ trợ cho việc quản lý phần mềm, giấy phép, chứng chỉ và các hợp đồng khác. Ralph không chỉ hỗ trợ quản lý tài sản mà còn cung cấp các điều khoản để thực hiện các hành động trên các tài sản đó. Tuy nhiên, các hành động liên quan đến việc triển khai máy chủ, tạo hóa đơn, theo dõi miền hoặc quản lý hàng tồn kho.
Giải pháp quản lý tài sản CNTT này đưa ra một giao diện RESTful. Các nhà phát triển có thể tích hợp nhiều ứng dụng của bên thứ ba bằng cách sử dụng các điểm cuối API được hiển thị bởi công cụ miễn phí nguồn mở này. Ngoài ra, RALPH được viết bằng Python cùng với đầu vào của HTML, CSS và JavaScript. Do đó, có tài liệu toàn diện có sẵn liên quan đến phát triển và triển khai. Mã nguồn của giải pháp quản lý chứng khoán này có sẵn tại [GitHub][7].

## Các tính năng của Ralph {#features}

Ralph cung cấp nhiều tính năng. Tuy nhiên, chúng tôi sẽ đề cập đến một số tính năng chính sau đây.
 **Mở rộng** : Phần mềm quản lý tài sản kỹ thuật số nguồn mở này rất có thể mở rộng. Các nhà phát triển có thể triển khai nó trên cơ sở hoặc trên đám mây theo nhu cầu của họ.
 **Hỗ trợ cho các trung tâm dữ liệu:**  RALPH cũng cung cấp hỗ trợ cho kho dữ liệu, phòng trung tâm dữ liệu, máy chủ và giá đỡ. Người dùng có thể theo dõi tất cả các thành phần, mạng và cấu hình của họ.
 **REST API** : Phần mềm CMDB miễn phí này có khả năng tùy biến cao. Trên thực tế, nó cung cấp API REST cho các tích hợp của bên thứ ba. Các nhà phát triển có thể mở rộng nó theo yêu cầu của họ.
 **Giao diện người dùng trực quan:**  Có một giao diện người dùng logic có sẵn trong giải pháp CMDB này, nơi người dùng có thể điều hướng dễ dàng. Hơn nữa, bảng điều khiển quản trị cung cấp các tiện ích khác nhau hiển thị dữ liệu đến trong thời gian thực.
 **Giao diện dòng lệnh** : RALPH đi kèm với giao diện dòng lệnh cung cấp một cơ sở để khám phá các địa chỉ MAC để triển khai máy chủ.
 **Hỗ trợ tài sản phi vật lý** : Giải pháp quản lý thiết bị này không chỉ cung cấp hỗ trợ cho tài sản vật lý mà còn quản lý các tài nguyên phi vật lý như miền, phần mềm và giấy phép.

## Làm thế nào để thiết lập Ralph trên localhost? {#setup}

Trong phần này, chúng tôi sẽ trải qua quá trình cài đặt phần mềm quản lý tài nguyên RALPH trên máy cục bộ. Nó khá dễ dàng để thiết lập và sử dụng.
Trước khi chuyển sang phần tiếp theo, hãy đảm bảo bạn đã cài đặt các điều kiện tiên quyết sau đây.
  * [Docker-compose][8]
  * [Docker][9]
Hầu hết các phần mềm nguồn mở cung cấp hình ảnh docker cho các triển khai trên các nền tảng khác nhau. Nó giúp các nhà phát triển dễ dàng và tăng tốc quá trình phát triển và triển khai.
Khi điều kiện tiên quyết được cài đặt, hãy bật Docker. Bây giờ, hãy mở thiết bị đầu cuối và chạy lệnh sau để tạo thư mục trống:
```
mkdir ralph<br>cd ralph
```
Sau đó, tạo một tệp mới có tên ‘Docker-compose.yml, và điền nó với các dữ liệu sau.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Bây giờ, hãy lưu tệp và chạy lệnh sau để tạo bản dựng:
```
docker-compose build

```
Khi xây dựng thành công, hãy chạy lệnh sau cho cơ sở dữ liệu:
```
docker-compose run –rm web /root/init.sh

```
Nếu mọi việc suôn sẻ, hãy chạy lệnh sau để quay bộ container Docker:
```
docker-compose up -d
```
Sau khi chạy lệnh đó, các thùng chứa Docker sẽ hoạt động và chạy như trong hình dưới đây:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Giải pháp CMDB">}}

Cuối cùng, mở trình duyệt và truy cập ứng dụng tại địa chỉ này http://127.0.0.1.
Nó sẽ hiển thị trang đăng nhập như trong hình dưới đây:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Giải pháp CMDB">}}


## Phần kết luận {#Phần kết luận}

Sau khi trải qua bài đăng trên blog hướng dẫn CMDB này, một điều rõ ràng là quản lý tài sản gần như không thể nếu không có giải pháp CMDB tốt. Phần mềm quản lý tài nguyên có vai trò cụ thể trong việc quản lý và theo dõi tài sản, cấu hình và mối quan hệ của chúng. Có những điều khoản để theo dõi những thay đổi hầu như không được thực hiện trên tài sản kỹ thuật số hoặc vật lý. Các công cụ miễn phí này rất dễ dàng để thiết lập, sử dụng và đi kèm với tài liệu và hướng dẫn chi tiết. Cuối cùng, [  **containerize.com** ][1] được dự định viết bài viết về các sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với điều này [][10] **[Phần mềm CMDB][11]**  Danh mục cho các bản cập nhật mới nhất.

## Khám phá
*  **[Phần mềm CMDB][11]**  
*  **[Ralph][2]**  
* [  **Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí**  ][12]
*  **[Xu hướng phát triển phần mềm để xem xét vào năm 2021][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
