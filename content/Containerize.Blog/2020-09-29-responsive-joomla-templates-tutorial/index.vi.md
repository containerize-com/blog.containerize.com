---
title: "Hướng dẫn phát triển mẫu Joomla cho người mới bắt đầu" 
seoTitle: "Hướng dẫn phát triển mẫu Joomla cho người mới bắt đầu" 
description: "Tìm hiểu phát triển mẫu Joomla, cách thiết lập bố cục đáp ứng cho các trường hợp sử dụng khác nhau. Đặt các tập tin xác định lớp thiết kế của một trang web kinh doanh." 
date: Tue, 29 Sep 2020 07:25:12 +0000
author: muhammadmustafa
summary: "Xây dựng các mẫu Joomla rất chuyên nghiệp và có thể tùy chỉnh, cung cấp một loạt các tính năng như đa ngôn ngữ, SEO / người dùng thân thiện và các bảng màu phong phú." 
url: /vi/responsive-joomla-templates-tutorial/
categories: ['Content Management']
---

## Xây dựng các mẫu Joomla chuyên nghiệp và có thể tùy chỉnh cao cung cấp một loạt các tính năng như đa ngôn ngữ, SEO / người dùng thân thiện và phối màu phong phú. {.has-text-align-left}

{{< figure align=center src="images/banner_1200x628.png" alt="Phát triển mẫu Joomla">}}


## Tổng quan
Một trang web kinh doanh được thiết kế tốt đóng một phần quan trọng để mang và giữ chân khách truy cập bằng cách cho họ dễ dàng điều hướng.**Đầy đủ tính năng của Joomla**tạo điều kiện cho người dùng của mình với một số bố cục đáp ứng và phát triển mẫu Joomla kiểm soát thẩm mỹ của một trang web kinh doanh.
Trong giai đoạn phát triển, việc đặt các yếu tố thiết kế rất quan trọng để có được:
  * Tính nhất quán
  * Điều hướng dễ dàng
  * Sự đơn giản
  * Khả năng tương thích di động
  * Khả năng đọc
Đây là các mẫu**Joomla**. Phần mềm nguồn mở này cung cấp để phát triển hoặc sử dụng các bố cục đáp ứng được xác định trước cho tất cả các trang web thay vì viết mã cho từng trang một cách riêng biệt.
Trong bài đăng trên blog này, chúng tôi sẽ tìm hiểu những điều sau đây về cách tạo và thiết lập một mẫu thân thiện với người dùng****trong Joomla.
* [**Bố cục Joomla là gì?**][2]
* [**Cách tạo một mẫu đáp ứng đơn giản trong Joomla?**][3]
* [**Cách cài đặt mẫu Joomla?**][4]
* [**Kết luận**][5]

## Bố cục Joomla là gì?   {#Gì}
Joomla cung cấp các mẫu cho mặt trước cũng như cho phần cuối. Nó đi kèm với nhiều mẫu đã sẵn sàng và nó cung cấp cho các nhà phát triển xây dựng**Chủ đề Bootstrap phản hồi miễn phí**theo các trường hợp sử dụng của họ. Có hai loại mẫu trong Joomla.
* * Mẫu mặt trước:**Liên quan đến người dùng đối mặt với một phần của trang web doanh nghiệp.
* * Các mẫu back-end:**Các mẫu này được liên kết với logic kinh doanh của một trang web.

## Làm thế nào để tạo một mẫu đáp ứng đơn giản trong Joomla?   {#Làm sao}
Trong phần này, chúng tôi sẽ bao gồm các bước của hướng dẫn mẫu Joomla này.
Trước khi nhảy vào phần này, hãy chắc chắn rằng bạn có sự hiểu biết về những điều sau đây:
  * HTML
  * CSS
  * JavaScript
  * PHP
Vì vậy, việc tạo các mẫu tùy chỉnh trong Joomla chưa bao giờ khó khăn và phức tạp như vậy. Tuy nhiên, hãy để bắt đầu tạo mẫu Joomla đầu tiên của chúng tôi.

##**Cấu trúc thư mục thiết lập**
Trước hết, hãy tạo một thư mục có tên là**myTemplate**bên trong thư mục****.
Tạo các tệp sau đây bên trong thư mục**MyTemplate**:
***index.php**: Đây là tệp cốt lõi chứa mã HTML và PHP cho toàn bộ trang mẫu.
***Templatedetails.xml**: Tệp này chứa dữ liệu meta của mẫu và bắt buộc vì được Joomla chú ý.
Bây giờ, hãy tạo ba thư mục bên trong thư mục**MyTemplate**với các tên sau:
***JS**: Thư mục này sẽ chứa tất cả các tệp JavaScript cần thiết cho mẫu
***CSS**: Tất cả các tệp CSS để tạo kiểu sẽ đi vào thư mục này
***Hình ảnh**: Hình ảnh được sử dụng bởi mẫu sẽ nằm trong thư mục này
Tạo một tệp CSS có tên là**Mẫu.css**bên trong thư mục****CSS**.
```
* mytemplate/
**css/
*** template.css
**images/
**js/
**index.php
**templateDetails.xml
```
Cuối cùng, đây là cách cấu trúc thư mục sẽ trông như thế nào.

## hãy đặt một số mã
Đặt mã này vào tệp**Templatedetails.xml**.
```

<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mytemplate</name>
	<creationDate>2020-08-26</creationDate>
	<author>Mustafa</author>
	<authorEmail>Mustafa@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Mustafa 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.2</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
                <folder>js</folder>
	</files>
	<positions>
		<position>breadcrumb</position>
		<position>left</position>
		<position>right</position>
		<position>top</position>
		<position>user1</position>
		<position>user2</position>
		<position>user3</position>
		<position>user4</position>
		<position>footer</position>
	</positions>
</extension>
```
Như đã đề cập trước đó, tệp này chứa siêu dữ liệu về các bố cục phản hồi được xác định giữa các thẻ đánh dấu. Tuy nhiên, bạn có thể thay đổi thông tin chung như tên, tác giả và mô tả.
Tệp này cũng chứa thông tin về các tệp và thư mục khác được sử dụng bởi mẫu.
Bây giờ, hãy mở tệp**index.php**và bắt đầu đặt mã sau:
```
<?php defined( '_JEXEC' ) or die( 'Restricted access' );?>
```
Tệp này sẽ bắt đầu với dòng này để ngăn những người khác đọc mã PHP của bạn.
```
<!DOCTYPE html>
```
Điều này là để cho trình duyệt biết về loại tài liệu.
```
<html xmlns="http://www.w3.org/1999/xhtml" 
   xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
```
Các tài liệu HTML bắt đầu với dòng này và thuộc tính**XMLNS**cho biết không gian tên XML cho tài liệu.
```
<head>
    <jdoc:include type="head" />
    <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
    ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js

    <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />

    https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
    https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
</head>
```
Dòng đầu tiên sau khi thẻ bảo Joomla đặt thông tin tiêu đề như thông tin siêu dữ liệu và tiêu đề trang.
Có một liên kết đến bảng kiểu bên ngoài trong dòng thứ hai và dòng thứ ba liên kết tệp JavaScript bên ngoài.
Phần còn lại của các tệp cho phép bootstrap vào mẫu.
```
<body>

    <!-- main container -->
    <div class='main_container'>
    
        <!-- header -->
        <div class='header'>Header</div>
    
        <!-- mid container - includes main content area and right sidebar -->
        <div class='mid_container'>
    
            <!-- main content area -->
            <div class='main_content_area'>
    
            </div>
    
            <!-- right sidebar -->
            <div class='right_sidebar'>
                <jdoc:include type="modules" name="position-7" style="well" />
            </div>
    
            <div style='clear:both;'></div>
    
        </div>
    
        <!-- footer -->
        <div class='footer'>
            Footer
        </div>
    
    </div>
</body>
```
Phần cơ thể bắt đầu sau khi phần đầu chứa tất cả dữ liệu sẽ được phản ánh ở mẫu để người dùng xem và điều hướng.
```
<jdoc:include type="modules" name="position-7" style="well" />
```
Tuyên bố này được gọi là câu lệnh JDOC được sử dụng để hướng dẫn Joomla thêm một mô-đun có tên là Vị trí-7. Có một số câu lệnh JDOC thường được sử dụng trong**Phát triển mẫu Joomla**.
Đây là tệp hoàn chỉnh cuối cùng**index.php**với tất cả các mã cần thiết cho một mẫu joomla cơ bản.
```
<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
    <head>
        <jdoc:include type="head" />
        <link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
        ?php%20echo%20$this-baseurl%20?/templates/?php%20echo%20$this-template%20?/js/index.js
    
        <link  href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" type="text/css" />
    
        https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js
        https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js
    </head>

    <body>
    
        <!-- main container -->
        <div class='main_container'>
        
            <div class='header'>Header</div>
        
            <!-- mid container - includes main content area and right sidebar -->
            <div class='mid_container'>
        
                <!-- main content area -->
                <div class='main_content_area'>
        
                </div>
        
                <!-- right sidebar -->
                <div class='right_sidebar'>
                    <jdoc:include type="modules" name="position-7" style="well" />
                </div>
        
                <div style='clear:both;'></div>
        
            </div>
        
            <!-- footer -->
            <div class='footer'>
                Footer
            </div>
        
        </div>
    </body>
</html>
```
Mọi thứ được đặt ra cho một mẫu rất cơ bản. Bây giờ, đã đến lúc cài đặt nó trên máy chủ Joomla và xem cách nó tiếp tục.

## Làm thế nào để cài đặt mẫu Joomla?   {#cài đặt}
Quá trình cài đặt mẫu Joomla khá thẳng và dễ dàng. Có các bước sau để cài đặt:
Chuyển đến phần mở rộng của " -> Quản lý -> Cài đặt

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.38.29-PM-1024x324.png" alt="Hình ảnh thiết lập cài đặt joomla">}}

Tại đây bạn có thể thấy mẫu Joomla mới được phát triển của mình trong danh sách như trong hình ảnh dưới đây.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.39.49-PM-1024x322.png" alt="Danh sách mẫu Joomla">}}

Bây giờ, chọn mẫu, nhấn vào cài đặt và một thông báo thành công sẽ xuất hiện về việc cài đặt thành công.
Sau khi mẫu được cài đặt, bạn có thể truy cập và sửa đổi các tệp mẫu trong bảng điều khiển của Joomla và xem trước các thay đổi từ tùy chọn xem trước mẫu.

{{< figure align=center src="images/Screen-Shot-2020-09-25-at-12.46.35-PM-1024x580.png" alt="Joomla">}}

Bây giờ, bạn có thể xem mẫu Joomla đầu tiên của bạn vào trình duyệt!

## Kết luận   {#conclusion}
Một mẫu tốt và đáp ứng là nền tảng cho mô hình trang web tổng thể.**Bố cục đáp ứng**Tại Joomla là đa chức năng và có thể được sử dụng cho các dự án khác nhau. Từ việc viết mã đến phát triển mẫu Joomla trở nên rất đơn giản với sự trợ giúp của bảng điều khiển quản trị trực quan. Joomla cung cấp quyền kiểm soát hoàn toàn đối với sự phát triển mẫu để đáp ứng mong muốn của người dùng.
Vì**Phần mềm CMS**Danh mục đang được cải thiện nhất quán và nhiều hướng dẫn hơn về các hệ thống quản lý nội dung khác sẽ được thêm vào danh sách, vui lòng giữ liên lạc với phần [Hệ thống quản lý nội dung][6] để cập nhật thường xuyên.

## trang sản phẩm có liên quan
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Joomla][1]
  * [Drupal][7]
  * [Pyro][8]
  * [Django CMS][9]
  * [Umbraco CMS][10]
  * [Bê tông5][11]
  * [Grav][12]
  * [Craft][13]
  * [Contao][14]
  * [Fork][15]
  * [Nhà máy lọc dầu CMS][16]
  * [Locomotivecms][17]

  
[1]: https://products.containerize.com/content-management/joomla
[2]: #what
[3]: #how
[4]: #install
[5]: #Conclusion
[6]: https://href.li/?https://products.containerize.com/content-management
[7]: https://products.containerize.com/content-management/drupal
[8]: https://products.containerize.com/content-management/pyro
[9]: https://products.containerize.com/content-management/django
[10]: https://products.containerize.com/content-management/umbraco
[11]: https://products.containerize.com/content-management/concrete5
[12]: https://products.containerize.com/content-management/grav
[13]: https://products.containerize.com/content-management/craft
[14]: https://products.containerize.com/content-management/contao
[15]: https://products.containerize.com/content-management/fork
[16]: https://products.containerize.com/content-management/refinery-cms
[17]: https://products.containerize.com/content-management/locomotive-cms
