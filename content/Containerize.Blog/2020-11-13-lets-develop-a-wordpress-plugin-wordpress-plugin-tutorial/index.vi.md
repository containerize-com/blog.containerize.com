---
title: "Hãy để phát triển một plugin WordPress | Hướng dẫn plugin WordPress" 
seoTitle: "Hãy để phát triển một plugin WordPress | Hướng dẫn plugin WordPress" 
description: "Quan tâm đến phát triển plugin WordPress? Thực hiện theo hướng dẫn plugin WordPress này mô tả các bước hoàn chỉnh để tạo một plugin WordPress cơ bản." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "Plugin WordPress là một mô -đun bạn kích hoạt trên trang web của mình để cung cấp một loạt các tính năng hoặc phần tử. Các plugin này được tối ưu hóa SEO và cung cấp tự động hóa." 
url: /vi/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## Plugin WordPress là một mô -đun bạn kích hoạt trên trang web của mình để cung cấp một loạt các tính năng hoặc yếu tố. Các plugin này được tối ưu hóa SEO và cung cấp tự động hóa.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="Hướng dẫn plugin WordPress">}}


## Tổng quan
WordPress là một nền tảng blog nguồn mở cấp doanh nghiệp. Plugin**WordPress**là một bộ mã độc lập giúp tăng cường và mở rộng chức năng của WordPress. Bằng cách sử dụng bất kỳ sự kết hợp của PHP, HTML, CSS, JavaScript/jQuery. Một plugin có thể thêm các tính năng mới vào bất kỳ phần nào trên trang web của bạn.
Chức năng bạn có thể thêm vào trang web của mình phụ thuộc vào những gì mỗi plugin cụ thể đã được tạo để làm. Một plugin WordPress có thể được phát triển để làm bất cứ điều gì. Từ một nhiệm vụ nhỏ đến một ứng dụng toàn diện thực hiện một số hoạt động và có giao diện riêng. Các plugin khác với chủ đề của bạn và làm việc độc lập, sử dụng móc, bộ lọc, mã ngắn, tiện ích và mã tùy chỉnh để thực hiện chức năng của chúng.
Trong hướng dẫn plugin WordPress này, chúng tôi sẽ học cách tạo plugin WordPress đầu tiên của chúng tôi. Lý do quan trọng nhất để tạo một plugin là vì nó cho phép bạn tách mã của riêng mình khỏi mã lõi WordPress.
* **[Yêu cầu][1]**
* **[Khái niệm cơ bản về phát triển plugin][2]**
* **[Cách tạo plugin WP?][3]**
* **[Kết luận][4]**

## Yêu cầu   {#Requirements}
  * Phiên bản mới nhất của WordPress
  * Hiểu về PHP / MySQL
  * Hiểu về HTML / CSS và JavaScript

## Cơ bản về phát triển plugin   {#Basics}
Hãy để một chút thời gian để nói về một số khía cạnh chính của phát triển plugin. Một sự hiểu biết vững chắc về cách các khái niệm này hoạt động sẽ giúp bạn xây dựng chức năng dễ sử dụng và duy trì.

## # Hành động
* * móc hành động**là một công cụ rất hữu ích trong**WordPress****plugin**và chúng được sử dụng để thực hiện các chức năng (**hành động**) ở những nơi cụ thể của một chủ đề hoặc plugin. WordPress có hàng tá hành động được xác định trong toàn bộ chức năng cốt lõi của nó, mỗi hành động bao gồm một tên duy nhất. Để biết thêm chi tiết [đọc][5].

## # Bộ lọc
Bộ lọc WordPress là một móc chấp nhận một biến (hoặc loạt biến) và trả lại chúng sau khi chúng đã được sửa đổi. Các bộ lọc này thường được sử dụng để bạn có cách điều khiển thông tin mặc định. Để biết thêm chi tiết [đọc][6].

## # Mã ngắn
Shortcodes là macro có thể được sử dụng để thực hiện các tương tác động với nội dung. I.E Tạo một bộ sưu tập từ các hình ảnh được gắn vào bài đăng hoặc hiển thị một video. Kết quả là, chúng là một cách có giá trị để giữ cho nội dung sạch sẽ và ngữ nghĩa trong khi cho phép người dùng cuối có khả năng lập trình thay đổi cách trình bày nội dung của họ. Để biết thêm chi tiết [đọc][7].

## # Widgets
Các tiện ích rất quan trọng vì chúng cung cấp cho bạn một phương tiện khác để thực hiện mã plugin của bạn trong khi cung cấp giao diện dễ sử dụng. Vì hầu hết các chủ đề sẽ hỗ trợ một hoặc nhiều thanh bên; Thêm các tiện ích của riêng bạn sẽ cho phép bạn truy cập nhanh để hiển thị thông tin của bạn bên trong chủ đề.

## **Cách tạo plugin WP?** {#Create}
Trong phần này của hướng dẫn plugin WordPress, tất cả những gì bạn cần làm là tạo một thư mục và sau đó tạo một tệp duy nhất với một dòng nội dung. Điều hướng đến thư mục**WP-Content/Plugin**và tạo một thư mục mới có tên**MyTestPlugin**. Bên trong thư mục mới này, hãy tạo một tệp có tên**mytestplugin.php**. Mở tệp trong trình soạn thảo văn bản và dán các thông tin sau trong đó:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Bây giờ, bạn có thể đi vào phần cuối để kích hoạt plugin của bạn. Đó là tất cả, mặc dù plugin này không làm gì cả. Nhưng, nó là một plugin hoạt động, hoạt động. Thực tiễn tốt nhất khi phát triển một plugin là tách biệt mã của bạn thành các tệp và thư mục phù hợp.
Để chứng minh, hãy để thêm chức năng cho plugin thử nghiệm của chúng tôi theo dõi mức độ phổ biến của các bài viết của chúng tôi bằng cách lưu trữ số lần mỗi bài đăng đã được xem.

## # Lượt xem trang
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
Cho đến nay, rất tốt trong hướng dẫn plugin WordPress này. Nhưng chức năng này không bao giờ được gọi, vì vậy nó đã giành chiến thắng thực sự được sử dụng. Đây là nơi các móc đi vào. Bạn có thể vào các tập tin chủ đề của bạn và gọi chức năng theo cách thủ công từ đó. Nhưng sau đó bạn sẽ mất chức năng đó nếu bạn đã thay đổi chủ đề, do đó đánh bại toàn bộ mục đích. Một móc, có tên**wp_head**, chạy ngay trước khi thẻ có mặt trong hầu hết các chủ đề, vì vậy chúng tôi chỉ có thể đặt chức năng của mình để chạy bất cứ khi nào**wp_head**chạy, như vậy:
```
add_action("wp_head", "add_page_views");
```

## # Hiển thị chế độ xem trang
Bây giờ chúng tôi sẽ tạo một chức năng khác trả về các chế độ xem trang mà chúng tôi đã lưu trữ trong hàm trên. Hãy để một cái nhìn vào mã:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
Cho đến nay, chúng tôi vừa lấy lại số lượng quan điểm. Bây giờ, hãy để cho thấy nó. Bạn có thể nghĩ rằng nó phải phức tạp. Nhưng, nó rất đơn giản như thế này:
```
echo get_page_views() . “view(s)”
```

## Kết luận   {#conclusion}
Đây là kết thúc của hướng dẫn plugin WordPress này. Bằng cách làm theo bài viết này và chỉ sử dụng một số ít các chức năng, chúng tôi đã tạo một plugin cơ bản để theo dõi các bài viết phổ biến nhất của chúng tôi. Chúng tôi có thể cải thiện nó rất nhiều, nhưng mục đích chỉ là để làm cho bạn thoải mái với những điều cơ bản. Hơn nữa, bằng cách tìm hiểu một số mô hình phát triển WordPress (plugin, móc, v.v.), bạn cũng đang đạt được các kỹ năng sẽ phục vụ bạn trong môi trường không phải là người không muốn. Có nhiều bài đăng trên blog khác liên quan đến nền tảng blog nguồn mở và CMS nguồn mở. mà bạn có thể tìm thấy trong phần khám phá dưới đây. Bài đăng trên blog này thực sự có thể giúp bạn nếu bạn đang tìm cách triển khai một nền tảng blog nguồn mở cho doanh nghiệp của bạn.
Cuối cùng, [containerize.com][8] đang viết bài về các sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với các danh mục [viết blog][9] và [Phần mềm Business Intelligence][10]

## Khám phá
  * [Cách cài đặt Matomo cho WordPress | Hướng dẫn WordPress][11]
  * [Tăng cường khách hàng tiềm năng của bạn với tích hợp WordPress công dân miễn phí][12]
  * [Cách cài đặt plugin trong WordPress | Diễn đàn Vanilla][13]
  * [Joomla vs Drupal | So sánh CMS năm 2021][14]
  * [Những điều cần xem xét trước khi chọn phần mềm nguồn mở vào năm 2021][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
