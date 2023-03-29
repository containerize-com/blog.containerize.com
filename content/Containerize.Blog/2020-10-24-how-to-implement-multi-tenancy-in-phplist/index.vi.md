---
title: "Cách định cấu hình ứng dụng nhiều người thuê trong phplist" 
seoTitle: "Cách định cấu hình ứng dụng nhiều người thuê trong phplist" 
description: "PHPLIST là một phần mềm bản tin nguồn miễn phí và mở. Định cấu hình ứng dụng nhiều người thuê và chạy một số trường hợp của một ứng dụng trong môi trường chung." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Hướng dẫn phát triển một ứng dụng nhiều người thuê trong phplist. Tính năng nhiều người thuê sử dụng một cài đặt duy nhất cho nhiều máy chủ để giảm chi phí lưu trữ." 
url: /vi/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## Hướng dẫn để phát triển một ứng dụng nhiều người thuê trong phplist. Tính năng nhiều người thuê sử dụng một cài đặt duy nhất cho nhiều máy chủ để giảm chi phí lưu trữ.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Ứng dụng nhiều người thuê">}}

Trong bài viết này, chúng tôi sẽ đề cập **nhiều người thuê là gì**và làm thế nào chúng tôi có thể định cấu hình**Ứng dụng nhiều người thuê** trong phplist.

## PHPLIST là gì?
Khi quyết định chiến lược tiếp thị, tiếp thị qua email là một phần quan trọng của mọi công ty kỹ thuật số trực tuyến. Phplist cho phép các doanh nghiệp tiếp cận một lượng lớn khán giả. Phplist được sử dụng rộng rãi **Phần mềm bản tin nguồn mở** để quản lý danh sách và gửi bản tin. Nó giúp các công ty tạo ra, lên lịch, gửi và phân tích các chiến dịch bản tin. Phplist hỗ trợ các tính năng như phân tích, phân đoạn, xử lý nảy, plugin, API và nhiều hơn nữa.

## Multi-Senancy là gì?
Multi-Sency là một kiến ​​trúc trong đó nhiều khách hàng/trang web được đại diện bởi một trường hợp duy nhất của ứng dụng phần mềm. Trong nhiều thuê nhà, trang web được coi là một người thuê nhà. Mỗi người thuê có các tính năng cụ thể như cấu hình, chủ đề, SMTP.
Một khía cạnh chính của điện toán đám mây là nhiều người thuê. Kiến trúc **nhiều người thuê** giúp các doanh nghiệp đạt được ROI tốt hơn bằng cách giảm chi phí bảo trì và cập nhật người thuê nhanh chóng. Ngoài ra, các ứng dụng được thiết kế trên kiến ​​trúc của nhiều người thuê có thể dễ dàng mở rộng.
Chúng tôi có thể thực hiện nhiều thuê bằng cách sử dụng các phương pháp sau.
  * Cơ sở dữ liệu được chia sẻ cho tất cả người thuê.
  * Riêng biệt cơ sở dữ liệu cho mỗi người thuê.
Chúng tôi sẽ sử dụng một cơ sở dữ liệu riêng cho mọi cách tiếp cận người thuê để thực hiện nhiều người thuê trong phplist.
  * [Lưu lượng yêu cầu xử lý][1]
  * [Cơ sở dữ liệu thiết lập cho người thuê][2]
  * [Định cấu hình Nginx cho người thuê][3]

## Xử lý luồng yêu cầu {#request}

  * Lấy một bản sao lưu tệp config.php của bạn và bạn có thể tìm thấy nó trong thư mục cấu hình.
  * Tạo tệp config.php mới và thêm mã sau trong đó để xử lý các trang web/người thuê.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Thay thế ví dụ.com bằng tên miền của bạn. Bạn cũng cần tạo một tệp cấu hình cho mỗi người thuê. Sao chép tệp sao lưu của config.php và lưu nó với một tên mới như config.example.com.php.

## Cơ sở dữ liệu thiết lập cho người thuê {#database}

  * Lấy một bản sao lưu của cơ sở dữ liệu PHPLIST hiện có. Sử dụng nó để tạo cơ sở dữ liệu cho người thuê mới.
  * Mở tệp config.example.com.php. Thay đổi thông tin xác thực cơ sở dữ liệu và bất kỳ cài đặt nào khác theo môi trường của bạn.

## Định cấu hình Nginx cho người thuê {#Nginx}

* Chuyển đến Thư mục Nginx **Cd/etc/nginx/site-Available** .
  * Sao chép tệp config.php mặc định và lưu nó với tên trang web của bạn như example.com.
* Mở ví dụ.com Cấu hình với **Sudo Nano Acression.com** .
  * Thay đổi đường dẫn gốc, server_name và bất kỳ cài đặt nào khác.
* Kiểm tra cấu hình với **sudo nginx -t** 
* Cuối cùng, tạo Symlink bằng cách thực thi **sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/sites-enable/** 
* Khởi động lại máy chủ web nginx bằng cách chạy **SUDO Systemctl khởi động lại nginx** , do đó nó có thể tải tệp cấu hình mới được tạo.

## Phần kết luận
Phần mềm nhiều người thuê có một số lợi thế so với ứng dụng thuê một như giảm chi phí bảo trì, sử dụng tài nguyên hiệu quả và dễ dàng cài đặt cập nhật. Nếu bạn định xây dựng phần mềm SaaS (phần mềm dưới dạng dịch vụ), bạn có thể theo dõi kiến ​​trúc nhiều người thuê và tận hưởng sức mạnh thực sự của nó.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [PHPLIST - Bản tin nguồn mở và phần mềm tiếp thị qua email][4]
  * [Cách tạo và gửi bản tin bằng Phplist][5]
  * [Cách thiết lập và xử lý nảy trong phplist][6]
  * [Hướng dẫn bắt đầu phát triển plugin phplist][7]
  * [Thiết lập quản lý độ nảy nâng cao và quy tắc nảy trong phplist][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
