---
title: "Hướng dẫn về người mới bắt đầu để tạo mẫu Joomla cơ bản" 
seoTitle: "Hướng dẫn về người mới bắt đầu để tạo mẫu Joomla cơ bản" 
description: "Joomla là một hệ thống quản lý nội dung nguồn mở phổ biến. Trong hướng dẫn này, chúng tôi sẽ giải thích từng bước làm thế nào để tạo mẫu Joomla." 
date: Fri, 22 Jan 2021 08:30:26 +0000
author: Assad Mahmood
summary: "Joomla là một trong những hệ thống quản lý nội dung nguồn mở phổ biến nhất. Hướng dẫn này sẽ hướng dẫn bạn qua các bước cần thiết để tạo mẫu Joomla từ đầu." 
url: /vi/beginners-guide-to-create-a-basic-joomla-template/
categories: ['Content Management']
---

## Joomla là một trong những hệ thống quản lý nội dung nguồn mở phổ biến nhất. Hướng dẫn này sẽ hướng dẫn bạn qua các bước cần thiết để tạo mẫu Joomla từ đầu.

{{< figure align=center src="images/joomla-templates-2.png" alt="Mẫu Joomla cơ bản">}}

Trong thời đại kỹ thuật số này, một hệ thống quản lý nội dung là một nhu cầu cơ bản của bất kỳ doanh nghiệp nào cho tất cả các nhu cầu tạo nội dung của họ. Và, có một số phần mềm mở cũng như phần mềm CMS có sẵn trên thị trường. Chúng tôi cũng có [liệt kê][1] Một số phần mềm quản lý nội dung nguồn mở hàng đầu cho các doanh nghiệp. Joomla là một trong những phần mềm CMS nguồn mở phổ biến nhất và trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn từng bước và giải thích cách tạo mẫu Joomla từ đầu. Vậy hãy bắt đầu!
 **Lưu ý: Chúng tôi giả sử rằng bạn đã cài đặt phiên bản Joomla 2.5** 
*  **[Cấu trúc thư mục thiết lập][2]**  
*  **[Tạo tệp Templatedetails.xml cơ bản][3]**  
*  **[Tạo tệp index.php cơ bản][4]**  
*  **[Khám phá và cài đặt mẫu][5]**  
*  **[Gói mẫu][6]**  
*  **[Kết luận][7]**  

## Cấu trúc thư mục thiết lập {#setup}

Để tạo một mẫu Joomla rất cơ bản trước tiên, hãy tạo một thư mục mới trong thư mục Mẫu. Đặt tên cho thư mục bất cứ điều gì bạn muốn gọi mẫu của bạn, ví dụ:  **mynewtemplate**  .
Sử dụng trình soạn thảo văn bản yêu thích của bạn, hãy tạo các tệp  **index.php** và  **pemplatedetails.xml**  . Để quản lý hình ảnh và bảng phong cách của bạn, hãy tạo 2 thư mục mới được gọi là  **hình ảnh**  và  **CSS**  . Bên trong thư mục  **CSS**  Tạo một tệp có tên **Template.css**  .
Cấu trúc thư mục của bạn sẽ trông giống như thế này

{{< figure align=center src="images/Screenshot-2021-01-22-at-12.30.14-PM.png" alt="Cấu trúc thư mục mẫu Joomla">}}


## Tạo tệp Templatedetails.xml cơ bản {#xml}

Tệp  **Templatedetails.xml**  chứa tất cả các siêu dữ liệu về mẫu của bạn. Và, tập tin này là điều cần thiết mà không có nó, mẫu của bạn đã giành được bởi Joomla !.
```
<?xml version="1.0" encoding="utf-8"?>
<extension version="2.5" type="template">
	<name>mynewtemplate</name>
	<creationDate>2008-05-01</creationDate>
	<author>Auther Name</author>
	<authorEmail>auther@example.com</authorEmail>
	<authorUrl>http://www.example.com</authorUrl>
	<copyright>Auther Name 2020</copyright>
	<license>GNU/GPL</license>
	<version>1.0.0</version>
	<description>My New Template</description>
	<files>
		<filename>index.php</filename>
		<filename>templateDetails.xml</filename>
		<folder>images</folder>
		<folder>css</folder>
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
Nội dung của Templateetails.xml là tự giải thích. Bạn chỉ có thể sao chép nội dung sửa đổi các bit cần thiết.
Để lại các vị trí như hiện tại - đây là một bộ phổ biến để bạn có thể dễ dàng chuyển đổi từ các mẫu tiêu chuẩn.

## Tạo tệp index.php cơ bản {#php}

Index.php trở thành tệp bootstrap chính của mỗi trang mà joomla! cung cấp. Trang này sẽ hiển thị mã xương trần đã sẵn sàng để bạn cắt và dán vào thiết kế của riêng bạn.
```
<?php defined('_JEXEC') or die('Restricted access');?>
<!DOCTYPE html>
<html xml:lang="<?php echo $this->language; ?>" lang="<?php echo $this->language; ?>" >
<head>
<jdoc:include type="head" />
<link  href="<?php echo $this->baseurl ?>/templates/<?php echo $this->template ?>/css/template.css" type="text/css" />
</head>
<body>
<jdoc:include type="modules" name="top" /> 
<jdoc:include type="component" />
<jdoc:include type="modules" name="footer" />
</body>
</html>
```

## Khám phá và cài đặt mẫu {#install}

Trước tiên bạn cần nói với Joomla! mà bạn đã tạo ra một mẫu mới. Tính năng này được gọi là Khám phá tiện ích mở rộng và có thể được truy cập thông qua
```
Extensions -> Extension Manager -> Discover
```
Nhấp vào nút Khám phá để khám phá mẫu của bạn, sau đó chọn nó và nhấp vào Cài đặt để cài đặt nó. Bây giờ mẫu của bạn sẽ hiển thị trong Trình quản lý mẫu (Styles), có thể truy cập thông qua
```
Extensions -> Template Manager
```

## Gói mẫu {#packge}

Một thư mục không được giải nén với một số tệp không phải là một phương thức tốt để phân phối. Vì vậy, để phân phối, chúng ta nên tạo một gói mẫu của chúng tôi. Gói có thể ở định dạng zip (với phần mở rộng .zip).
Nếu mẫu của bạn nằm trong thư mục myTemplate/ sau đó để tạo gói bạn có thể kết nối với thư mục đó và sử dụng các lệnh như:
```
zip -r ..\mytemplate.zip .
```

## Phần kết luận {#conclusion}

Trong bài viết này, chúng tôi đã tìm hiểu về mẫu Joomla. Chúng tôi đã trải qua từng bước về cách tạo một mẫu Joomla. Đây chỉ là một hướng dẫn rất cơ bản để bắt đầu với việc tạo mẫu. Tất nhiên, bạn có thể xây dựng một mẫu rất tùy chỉnh và nâng cao dựa trên cấu trúc xương trần này.

## trang sản phẩm có liên quan
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Hướng dẫn phát triển mẫu Joomla cho người mới bắt đầu][8]



[1]: https://products.containerize.com/content-management
[2]: #setup
[3]: #xml
[4]: #php
[5]: #install
[6]: #package
[7]: #conclusion
[8]: https://blog.containerize.com/content-management/responsive-joomla-templates-tutorial/
