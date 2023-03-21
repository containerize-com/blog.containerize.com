---
title: "Cách thực hiện nhiều người thuê nhà trong Maitic" 
seoTitle: "Cách thực hiện nhiều người thuê nhà trong Maitic" 
description: "Mautic là một giải pháp tự động hóa tiếp thị nguồn mở. Thực hiện nhiều người thuê trong Maitic làm giảm chi phí, cải thiện hiệu quả và bảo mật." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Tiết kiệm chi phí và tối đa hóa việc sử dụng tài nguyên bằng cách thực hiện nhiều người thuê trong Mautic. Multi-Sency giúp tùy chỉnh mã, cập nhật ứng dụng, cải thiện năng suất và bảo trì dễ dàng." 
url: /vi/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Tiết kiệm chi phí và tối đa hóa việc sử dụng tài nguyên bằng cách thực hiện nhiều người thuê trong MAntic. Multi-Sency giúp tùy chỉnh mã, cập nhật ứng dụng, cải thiện năng suất và bảo trì dễ dàng.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Cách thực hiện nhiều người thuê nhà trong Maitic">}}

Maitic là một giải pháp tự động hóa tiếp thị nguồn miễn phí và miễn phí, cung cấp cho bạn sự kiểm soát hoàn toàn đối với các email tiếp thị, trang đích, quy trình làm việc và các biện pháp cho các hoạt động tiếp thị của bạn. Chúng tôi sẽ bao gồm các phần sau trong hướng dẫn này:
  * [Đa tiền thuê là gì][1]
  * [Maintic là gì][2]
  * [Thực hiện nhiều thuê nhà ở Maitic][3]
  * [Kết luận][4]

## Multi-Sency   {#Multi-Sency}
Trong kiến ​​trúc phần mềm nhiều người thuê, một trường hợp duy nhất của ứng dụng phần mềm phục vụ nhiều người thuê. Mỗi dữ liệu người thuê được phân lập từ người thuê khác chia sẻ cùng một trường hợp ứng dụng. Những người thuê này được cô lập về mặt logic, nhưng tích hợp vật lý. Điều này đảm bảo bảo mật dữ liệu và quyền riêng tư cho tất cả người thuê. Tạo nhiều người thuê từ một trường hợp ứng dụng duy nhất đòi hỏi bộ nhớ ít hơn nhiều. Người thuê chia sẻ tài nguyên và giảm chi phí để bảo trì phần mềm, cơ sở hạ tầng và hoạt động của trung tâm dữ liệu. Chi phí có xu hướng thấp hơn so với cơ sở hạ tầng một người thuê.

## MAUTIC là gì   {#Mautic}
[Mautic][5] là một phần mềm tiếp thị nguồn mở và miễn phí. Tự động hóa các nhiệm vụ tiếp thị lặp đi lặp lại như các chiến dịch tiếp thị, tạo khách hàng tiềm năng, phân khúc liên hệ, vv sử dụng Maitic. Nó có các tính năng gây sửng sốt bao gồm thế hệ khách hàng tiềm năng, xây dựng chiến dịch, phân khúc liên hệ, trình tạo email, thử nghiệm A/B, xây dựng trang, nuôi dưỡng khách hàng tiềm năng và nhiều hơn nữa. Maitic cũng hỗ trợ tích hợp với tất cả các nền tảng xã hội phổ biến, ví dụ: Facebook, Twitter, LinkedIn. Tất cả những tính năng đáng kinh ngạc này giúp bạn tăng trải nghiệm khách hàng tổng thể và cải thiện tự động hóa tiếp thị cho doanh nghiệp của bạn.

## Triển khai nhiều người thuê trong MAntic   {#Implement}
  * Tạo một cơ sở dữ liệu trống mới có tên là Main Main_DB.
  * Sau đó, hãy tạo bảng có tên là người thuê nhà, sẽ chứa chi tiết về tất cả người thuê.
  * Nó sẽ có 3 trường bao gồm trang web \ _name, url và db \ _name như trong hình

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Cách thực hiện nhiều người thuê nhà trong Maitic">}}

  * Sau đó, tệp MAUTIC/APP/PATHP.php mở và thêm mã này:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Điều này sẽ chọn tệp cấu hình tương ứng trên cơ sở đường dẫn URL.
  * Sau đó, sao chép cơ sở dữ liệu của cài đặt Maitic hiện tại và sử dụng nó cho người thuê mới.
  * Sau đó, hãy tạo bản sao của Mautic/app/config/local.php và đổi tên nó thành [site_name] .php.
  * Cuối cùng, cập nhật tên cơ sở dữ liệu, máy chủ, mật khẩu và người dùng theo cơ sở dữ liệu mới.

## Kết luận   {#conclusion}
Mautic là một giải pháp tự động hóa tiếp thị miễn phí, phong phú và định hướng chất lượng. Nó cho phép bạn tạo các chiến dịch tiếp thị, phân khúc, biểu mẫu, báo cáo và nhiều hơn nữa. Việc thực hiện nhiều người thuê trong Maitic làm giảm chi phí, cải thiện hiệu quả, khả năng mở rộng và bảo mật. Dễ dàng tạo ra hàng trăm người thuê chỉ từ một lần cài đặt.

## Khám phá
Để tìm hiểu thêm về Mautic và Facebook, vui lòng truy cập:
  * [Mautic | Nền tảng công nghệ tiếp thị nội dung nguồn mở][5]
  * [Cách thiết lập các chiến dịch Maitic bằng cách sử dụng Trình tạo chiến dịch][6]
  * [Tích hợp Maitic Drupal để tự động hóa việc nuôi dưỡng chì][7]
  * [Tự động hóa tiếp thị với tích hợp Maitic và WooC Commerce][8]
  * [Tích hợp Mautic & Joomla cho tự động hóa tiếp thị kỹ thuật số][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
