---
title: "Tùy chỉnh Osticket-Thực hiện nhiều người thuê nhà trong Osticket" 
seoTitle: "Tùy chỉnh Osticket-Thực hiện nhiều người thuê nhà trong Osticket" 
description: "Việc thực hiện nhiều người thuê trong Osticket có thể tiết kiệm chi phí và sử dụng tài nguyên. Trong bài viết này, chúng tôi sẽ tùy chỉnh Osticket để đạt được nhiều thuê nhà." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Multi-Senant Osticket Helpdesk cho phép bạn tạo nhiều người thuê từ một lần cài đặt. Điều đó làm cho việc sử dụng tối ưu tài nguyên máy chủ web." 
url: /vi/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-Senant Osticket Helpdesk cho phép bạn tạo nhiều người thuê từ một lần cài đặt. Điều đó làm cho việc sử dụng tối ưu tài nguyên máy chủ web.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Tùy chỉnh Osticket - Thực hiện nhiều người thuê nhà trong Osticket">}}

Trong bài viết này, chúng tôi sẽ thảo luận về cách thực hiện tùy chỉnh Osticket để thực hiện nhiều người thuê nhà. Bài đăng này sẽ bao gồm các chủ đề sau:
  * [Tổng quan Osticket][1]
  * [Tổng quan về nhiều thuê][2]
  * [Lợi ích của nhiều người thuê][3]
  * [Thực hiện][3]
  * [Kết luận][4]

## Tổng quan về Osticket: {#osticket}

[Osticket][5] là một phần mềm Bàn trợ giúp dựa trên web hỗ trợ khách hàng trực tuyến nguồn mở. Nó cung cấp một bảng điều khiển trực quan và thành phần báo cáo thời gian thực. Nó có thể dễ dàng sử dụng mô -đun quản lý yêu cầu. Điều này cho phép bạn tạo các yêu cầu từ các biểu mẫu điện thoại, email và dựa trên web của bạn. Trong đó cung cấp nhiều tùy chọn để giúp điều chỉnh tất cả các phần của trải nghiệm hỗ trợ khách hàng như nhận xét và thông báo email.

## Tổng quan về nhiều tiền thuê nhà: {#multitenancy}

Multi-Sency đề cập đến việc thực hiện, trong đó nhiều trường hợp độc lập của một ứng dụng hoạt động trong một môi trường được chia sẻ. Các trường hợp (người thuê) được cô lập về mặt logic, nhưng được tích hợp vật lý. Một tổ chức có thể có nhiều phòng ban. Vì vậy, họ có thể tạo nhiều người thuê/phiên bản của cùng một ứng dụng. Ví dụ, trong trường hợp của chúng tôi, một hệ thống trợ giúp có thể được cấu hình cho các lĩnh vực khác nhau của cùng một tổ chức. Có thể có hàng trăm người thuê nhưng tất cả họ sẽ sử dụng cùng một tệp và do đó cùng một bộ lưu trữ. Điều này sẽ giảm chi phí lưu trữ cũng như nó sẽ tạo ra các nâng cấp dễ dàng hơn. Các nhà phát triển chỉ cần cập nhật các tệp từ một nơi thay vì thực hiện các thay đổi cho từng trang web riêng biệt.

## Những lợi ích của nhiều người thuê là gì? {#benefits}

Dưới đây là một số lợi ích quan trọng của nhiều người thuê nhà
*  **Tối ưu hóa tài nguyên:**   Một máy dành riêng cho một người thuê là hiệu quả. Bởi vì một người thuê không có khả năng sử dụng tất cả sức mạnh tính toán của máy. Chia sẻ máy sẽ tối đa hóa tính khả dụng tài nguyên.
*  **Chi phí thấp hơn:**   Với nhiều người thuê chia sẻ cùng một nguồn lực sẽ có giá thấp hơn nhiều so với mỗi người thuê yêu cầu cơ sở hạ tầng chuyên dụng của riêng họ.
*  **Lưu trữ hiệu quả:**   Ngoài ra, Osticket nhiều người thuê sẽ giảm chi phí lưu trữ xuống mức tối thiểu trong môi trường chung.
*  **Bảo mật:**   Với ít tương tác với thế giới bên ngoài, việc tiếp xúc với phần mềm độc hại bị giảm.
*  **Dễ dàng nâng cấp**  : Nâng cấp tệp chỉ ở một nơi thay vì cập nhật chúng một cách riêng biệt. Điều này sẽ tiết kiệm rất nhiều thời gian và công sức.

## Thực hiện Osticket nhiều người thuê nhà: {#implementation}

  * Tạo một tên cơ sở dữ liệu trống mới dưới dạng Main Main_DB.
  * Sau đó, hãy tạo bảng có tên là người thuê nhà, sẽ chứa chi tiết về tất cả người thuê.
  * Nó sẽ có các trường sau:
  1. site_name
  2. URL
  3. DB_NAME

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Tùy chỉnh Osticket - Thực hiện nhiều người thuê nhà trong Osticket">}}

  * Trường \ _name sẽ giữ tên của người thuê. Trường URL sẽ giữ URL hoàn chỉnh của người thuê. Trường DB \ _NAME sẽ giữ tên của cơ sở dữ liệu sẽ được tạo cho người thuê mới.
  * Sau khi mở tệp /include /ost-config.php đó và thêm mã sau
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Mã này sẽ cập nhật kết nối cơ sở dữ liệu mặc định. Trước tiên nó sẽ có được URL của người thuê hiện tại. Sau đó, nó sẽ nhận được tên của cơ sở dữ liệu theo URL đó. Đó là cách mà ứng dụng sẽ biết cơ sở dữ liệu nào sẽ kết nối. Mỗi người thuê sẽ có một cơ sở dữ liệu riêng biệt. Cơ sở dữ liệu sẽ được chọn trên cơ sở URL người thuê.
  * Để tạo một người thuê mới, chỉ cần thiết lập miền thuê mới trên máy chủ nginx. Sau đó, chỉ cần sao chép cơ sở dữ liệu Osticket hiện tại và đổi tên nó. Cuối cùng, thêm mục vào bảng Tenter Tenant của cơ sở dữ liệu của Main Main_DB.

## Phần kết luận: {#conclusion}

Osticket là một phần mềm quản lý bàn miễn phí và mở. Chúng tôi đã học cách thực hiện các tùy chỉnh Osticket để thực hiện nhiều người thuê trong Osticket để có thể tiết kiệm chi phí, tối ưu hóa ứng dụng và các yêu cầu tài nguyên thấp hơn. Nó sẽ làm cho cuộc sống dễ dàng hơn cho các nhà phát triển để tạo ra những người thuê mới trong một vài bước đơn giản. Do đó tạo ra nhiều người thuê Osticket từ cùng một cài đặt.

## Khám phá:
Vui lòng thanh toán trang sau để tìm hiểu thêm về Osticket:
  * [Osticket - Phần mềm trợ giúp nguồn mở miễn phí][5]
  * [Hướng dẫn dành cho người mới bắt đầu để phát triển plugin Osticket][6]
  * [Cách thiết lập phần mềm bàn trợ giúp trực tuyến bằng Osticket][7]
  * [Tự động hóa hệ thống bán vé bằng cách sử dụng WordPress và Osticket][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
