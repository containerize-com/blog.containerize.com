---
title: "Hướng dẫn về người mới bắt đầu để phát triển plugin phplist" 
seoTitle: "Hướng dẫn về người mới bắt đầu để phát triển plugin phplist" 
description: "Làm quen với kiến ​​trúc plugin phplist và tìm hiểu cách tạo plugin phplist cơ bản. Hướng dẫn này giúp bạn tùy chỉnh và tăng cường chức năng PHPLIST." 
date: Fri, 18 Dec 2020 19:51:33 +0000
author: Masood Anwer
summary: "Các plugin PHPLIST cho phép các nhà phát triển tùy chỉnh sản phẩm và nâng cao chức năng của nó. Trong bài đăng này, chúng tôi sẽ học cách tạo plugin cơ bản trong phplist." 
url: /vi/beginners-guide-to-develop-phplist-plugin/
categories: ['Newsletters']
---

## plugin phplist cho phép các nhà phát triển tùy chỉnh sản phẩm và nâng cao chức năng của nó. Trong bài đăng này, chúng tôi sẽ học cách tạo plugin cơ bản trong phplist.

{{< figure align=center src="images/phplist-plugin.png" alt="plugin phplist">}}

Hỗ trợ plugin là một phần thiết yếu của phần mềm, đặc biệt là cho các hệ thống nguồn mở. Điều này cho phép các nhà phát triển xây dựng một plugin mới để mở rộng các tính năng. **PHPLIST** khuyến khích sự phát triển của các plugin để các nhà phát triển có thể sử dụng chúng để thêm các tính năng mới theo yêu cầu kinh doanh của họ. Plugin phplist là một bộ sưu tập mã độc lập chứa mã cho PHP, HTML, CSS và JavaScript.
Các ứng dụng hỗ trợ các plugin vì nhiều lý do và một số trong số đó là:
  * Don lồng sửa đổi chức năng cốt lõi.
  * Cho phép các nhà phát triển tạo các tính năng mới.
  * Giảm kích thước của phần mềm.
Chúng tôi sẽ thảo luận chi tiết về các chủ đề dưới đây trong hướng dẫn này.
* [ **Điều kiện tiên quyết** ][2]
* [ **Khái niệm cơ bản về phát triển plugin phplist** ][3]
* [ **Tạo plugin phplist của chúng tôi** ][4]
* [ **Kết luận** ][5]

## Điều kiện tiên quyết {#Req}

  * Phiên bản mới nhất của phplist.
  * Làm quen với PHPLIST và PHP.
  * Hiểu về HTML / CSS và JavaScript.

## Khái niệm cơ bản về phát triển plugin phplist {#Basics}

Các phương pháp sau đây sẽ cải thiện chức năng của plugin phplist.
* **Trang** - Tạo các trang cho các hoạt động như báo cáo, thống kê, để hiển thị thông tin và nhiều trang khác.
* **móc** - Điều này cho phép bạn gọi chức năng ở những nơi cụ thể.
Có ba loại plugin đặc biệt cho phplist. Một plugin của mỗi loại chỉ có thể được bật.
* **Trình chỉnh sửa plugin** - Cho phép triển khai Trình chỉnh sửa cho các chiến dịch hoặc mẫu chỉnh sửa.
* **plugin xác thực** - Điều này cho phép thêm một cơ chế mới để xác thực quản trị viên.
* **Plugin người gửi email** -Cho phép triển khai một phương thức mới để gửi email thay vì chức năng tích hợp.

## Tạo plugin phplist của chúng tôi {#Create}

Trước hết, bạn cần mở rộng lớp lõi phplistplugin. Để tạo một plugin, bạn cần tạo một thư mục có tên là Hell Helloworld, trong plugin \ _rootDir và tạo một tệp có tên helloworld.php tại thư mục root của plugins. Bạn có thể kiểm tra tệp config.php để tìm giá trị cho biến plugin \ _rootDir. Sao chép mã bên dưới vào tệp Helloworld.php.
```
<?php
class helloworld extends phplistPlugin
{
    public $name = "Hello World";
    public $coderoot = PLUGIN_ROOTDIR . '/helloworld/';
    public $version = "1.0";
    public $authors = 'Masood Anwer';
    public $enabled = 1;
    public $description = 'My First Example Plugin';
    public $topMenuLinks = array(
      'main' => array('category' => 'subscribers'),
    );

    function __construct()
    {
        parent::__construct();
    }
}
?>
```
Bạn phải đặt $ Coderoot thành thư mục của plugin của bạn. Để đảm bảo rằng plugin được khởi tạo chính xác, bạn phải gọi hàm tạo cha mẹ. Tạo một tệp chính.php và đặt nó vào thư mục plugin của bạn. Sao chép mã sau vào nó.
```
<?php

defined('PHPLISTINIT') || die;

// get token
$tk = $_REQUEST['tk'];

?>
<p>Hello World!</p>
```
Đặt tệp lớp Helloworld.php và thư mục plugin của bạn vào plugin rootdir để cài đặt plugin. Để kích hoạt một plugin, nhấp vào tab Cấu hình trong thanh menu và sau đó nhấp vào quản lý các plugin. Trang plugin sẽ hiển thị cho bạn một danh sách các plugin có sẵn và bạn có thể bật/tắt biểu mẫu plugin của mình ở đó.
Bạn có thể truy cập plugin của mình bằng URL sau như http://example.com/admin/?page=main&pi=helloworld. Thay thế ví dụ.com bằng tên miền của bạn.

## Phần kết luận {#Con}

Chúng tôi đã học được những điều cơ bản của plugin plugin **phplist** phát triển và tạo ra một plugin mẫu. Như một điểm khởi đầu, bạn có thể làm theo hướng dẫn này và khám phá thêm phát triển plugin để tăng cường chức năng.
Cuối cùng, [ **containerize.com**][6] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với danh mục [****bản tin này** ][7] cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan.
* [ **PHPLIST** ][8]
* [ **MailTrain** ][9]
* [ **ListMonk** ][10]
* [ **moonmail** ][11]
* [ **Mailman** ][12]
* [ **Top 5 Phần mềm Bản tin nguồn mở vào năm 2021** ][13]
* [ **Cách định cấu hình ứng dụng nhiều người thuê trong phplist** ][14]
* [ **Cách tạo và gửi bản tin bằng Phplist** ][15]



[1]: https://products.containerize.com/newsletter/phplist
[2]: #Req
[3]: #Basics
[4]: #Create
[5]: #Con
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist/
[9]: https://products.containerize.com/newsletter/mailtrain/
[10]: https://products.containerize.com/newsletter/listmonk/
[11]: https://products.containerize.com/newsletter/moonmail/
[12]: https://products.containerize.com/newsletter/mailman/
[13]: https://blog.containerize.com/newsletter/top-5-open-source-newsletter-software-in-2021/
[14]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[15]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
