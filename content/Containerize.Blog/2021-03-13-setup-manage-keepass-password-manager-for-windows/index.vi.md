---
title: "Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows '" 
seoTitle: "Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows" 
description: "Keepass là một trình quản lý mật khẩu nguồn mở phổ biến, an toàn, miễn phí và nguồn mở. Hướng dẫn này sẽ giúp người dùng Windows thiết lập và quản lý mật khẩu bằng cách sử dụng Keepass." 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepass là một trình quản lý mật khẩu nguồn mở phổ biến, an toàn, miễn phí và nguồn mở. Hướng dẫn này sẽ giúp người dùng Windows thiết lập và quản lý mật khẩu bằng cách sử dụng Keepass." 
url: /vi/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## Keepass là một trình quản lý mật khẩu phổ biến, an toàn, miễn phí và nguồn mở. Hướng dẫn này sẽ giúp người dùng Windows thiết lập và quản lý mật khẩu bằng cách sử dụng Keepass.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows">}}


## Tổng quan {#overview}

Ghi nhớ tất cả các kết hợp mật khẩu khác nhau cho các trang web và ứng dụng khác nhau không phải là một nhiệm vụ dễ dàng và trong khi viết chúng xuống một mảnh giấy có vẻ như là một giải pháp dễ dàng. Có rất nhiều bảo mật trong phương pháp đó, vì bạn có thể dễ dàng mất nó hoặc nó có thể rơi vào tay người sai.  **Trình quản lý mật khẩu Keepass**  Đối với Windows là một trong những giải pháp cho những vấn đề này.
Mặt khác, người quản lý mật khẩu, giúp người dùng dễ dàng lưu trữ tất cả mật khẩu của họ ở một nơi và truy cập chúng bất cứ khi nào họ cần. Keepass là  **một trong những người quản lý mật khẩu nguồn mở tốt nhất**  ngoài kia, không chỉ miễn phí tải xuống mà còn có thể lưu trữ tệp mật khẩu trên USB hoặc tải nó lên Dropbox, Google Drive hoặc các loại khác của bạn tùy chọn lưu trữ đám mây. Với mã hóa từ đầu đến cuối, chỉ chủ sở hữu của mật khẩu mới có thể truy cập tệp mật khẩu bằng khóa chính, đảm bảo bảo mật. Là một trình quản lý mật khẩu nguồn mở cho phép người dùng có kiến ​​thức kỹ thuật cũng tự kiểm tra mã nguồn để đảm bảo rằng không có tính năng bảo mật bị thiếu.
  * [Thiết lập giữ trên Windows][1]
  * [Quản lý mật khẩu bằng cách sử dụng Keepass][2]
  * [Kết luận][3]

## Thiết lập giữ trên Windows {#setup}

 **Tải xuống cài đặt** 
Trước khi bạn cài đặt phần mềm Keepass, hãy đảm bảo bạn đang sử dụng Windows phiên bản 7, 8 hoặc 10 và có phiên bản mới nhất của Trình quản lý mật khẩu Keepass. Bạn có thể tải xuống trình cài đặt Windows bằng cách truy cập và nhấp vào  **Keepass 2.47**  cho Windows.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows">}}

Sau khi tải xuống hoàn tất, hãy chạy trình cài đặt và bạn sẽ được nhắc bật hoặc tắt kiểm tra tự động để cập nhật mới nhất của Keepass Manager. Điều này không có nghĩa là nó sẽ tự động tải xuống hoặc cài đặt các phiên bản mới nhất mà không cần sự cho phép. Phần mềm nguồn mở Keepass Server được cấp phép theo GNU GPL. Sau khi cài đặt, bây giờ bạn sẽ thấy một cửa sổ trống như sau:

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows">}}

 **Tạo cơ sở dữ liệu mới** 
Bây giờ chúng tôi sẽ bắt đầu tạo một cơ sở dữ liệu để lưu trữ mật khẩu của bạn, đây là các bước. Nhấp vào tệp*  ***. Chọn** MỚI **thông qua đó một cơ sở dữ liệu sẽ được tạo. Bạn sẽ thấy lời nhắc dưới đây. Nhấp vào**  OK.**

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows Mở DB mới">}}

Tại đây bạn sẽ được nhắc lưu tệp  **. KDBX**  (sẽ có tất cả mật khẩu của bạn) trên máy tính của bạn. Hãy chắc chắn rằng bạn lưu nó trong cùng một thư mục nơi giữ cho các nhóm được đặt trên máy tính của bạn.

## Quản lý mật khẩu bằng cách sử dụng Keepass {#manage}

 **Tạo mật khẩu chính** 
Bây giờ bạn sẽ phải tạo một khóa chính sẽ là mật khẩu mà bạn có thể truy cập tệp .kdbx. Đảm bảo rằng mật khẩu chứa kết hợp chữ viết hoa, bảng chữ cái viết thường, ký tự đặc biệt, chữ số, v.v. Tạo khóa chính mạnh, không thể truy cập rất quan trọng vì nó sẽ xác định bảo mật cơ sở dữ liệu mật khẩu của bạn. Trình quản lý mật khẩu miễn phí Keepass cũng sẽ cung cấp một chỉ số về mức độ mạnh của khóa chính của bạn.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows">}}

 **Lưu mật khẩu của bạn** 
Sau khi tạo khóa chính, cơ sở dữ liệu sẽ mở ở nơi bạn có thể bắt đầu lưu mật khẩu. Keepass cung cấp 2 mục mật khẩu dưới dạng mặc định, bạn có thể xóa chúng và bắt đầu thêm của riêng bạn.

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows">}}

Để tạo một mục mới, nhấp vào biểu tượng khóa màu vàng để tạo mục nhập mật khẩu mới. Một màn hình mới sẽ mở ở nơi bạn sẽ được yêu cầu nhập mật khẩu của mình, lặp lại, cung cấp URL mà mật khẩu này sẽ được sử dụng, tên người dùng và hơn thế nữa. Trong khi nhập mật khẩu, nó sẽ được che giấu bằng các dấu chấm và có thể được tiết lộ bằng cách nhấp vào biểu tượng  **ba chấm**  ở bên phải.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows">}}

 **Đăng nhập bằng cách sử dụng Keepass** 
Để đăng nhập bằng mật khẩu được lưu trên cơ sở dữ liệu:
* Nhấp chuột phải vào mục nhập mật khẩu và chọn  **Sao chép tên người dùng**  Bây giờ dán tên người dùng này vào trường Trang web cho tên người dùng.
* Bây giờ nhấp chuột phải vào cùng một mục trong Trình quản lý mật khẩu Keepass và chọn  **Sao chép mật khẩu**  và dán lại vào trang web nơi trường mật khẩu.
  * Xin lưu ý rằng bạn phải nhanh chóng sao chép và dán, vì mật khẩu được xóa khỏi bảng tạm của bạn bằng cách giữ sau 12 giây. Hạn chế lần này có thể được thay đổi thông qua Trình quản lý an toàn mật khẩu giữ.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="Thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows">}}

 **Các tùy chọn Trình quản lý mật khẩu khác để xem xét:**  
Có hàng tá người quản lý mật khẩu nguồn mở khác có sẵn trên thị trường. Bạn có thể giữ thông tin đăng nhập tài khoản của mình bằng cách sử dụng một người quản lý mật khẩu nguồn mở và an toàn, phổ biến, tự lưu trữ và lưu trữ để lưu trữ mật khẩu độc đáo và phức tạp. Dưới đây được liệt kê là một vài người quản lý mật khẩu hàng đầu:
* [  **Padloc**  ][4] được thiết kế như người quản lý mật khẩu tối giản đơn giản, an toàn và quản lý dữ liệu cho các gia đình và nhóm.
* [  **passbolt**  ][5] là một trình quản lý mật khẩu dễ dàng truy cập tự lưu trữ được thiết kế cho nhu cầu của các nhóm Agile và DevOps.
* [  **Mật khẩu an toàn**  ][6] là chương trình Trình quản lý mật khẩu nguồn mở với giao diện an toàn, đơn giản và dễ hiểu.
* [  **Bitwarden**  ][7] là một giải pháp quản lý mật khẩu tích hợp nguồn an toàn, miễn phí và miễn phí.
* [  **PSONO**  ][8] là thông tin đăng nhập và trình quản lý mật khẩu tự lưu trữ cho các nhóm. Nó cung cấp mã hóa nhiều lớp cho bảo mật tối đa.

## Phần kết luận {#conclusion}

Keepass là một cách dễ dàng, an toàn và di động để quản lý mật khẩu của bạn. Nó cho phép bạn tùy chỉnh mật khẩu của mình, tạo các kết hợp an toàn và lưu nhiều mục mật khẩu cho các trang web khác nhau với tên người dùng. Sử dụng Keepass Trình quản lý mật khẩu tốt nhất cũng được bảo mật vì nó sử dụng cơ chế mã hóa từ đầu đến cuối và dựa vào chức năng băm SH-256 để bảo mật tối đa.
Hơn nữa, [  **containerize.com** ][9] đang trên đường để tăng cường ngăn xếp các sản phẩm nguồn mở bằng nhiều ngôn ngữ và khung. Để cập nhật thường xuyên, vui lòng theo dõi **[Quản lý mật khẩu][10]**  Danh mục cho các bài viết thú vị hơn.

## Khám phá
Trong bài viết này, chúng tôi đã thảo luận về cách thiết lập và quản lý Trình quản lý mật khẩu Keepass cho Windows. Bạn có thể tìm thấy các liên kết sau có liên quan:
*  **[Top 5 Trình quản lý mật khẩu nguồn mở vào năm 2021][11]**  
*  **[Phần mềm quản lý mật khẩu nguồn mở tốt nhất][12]**  
*  **[Keepass | Trình quản lý mật khẩu nguồn an toàn, di động & mở][13]**  



 [1]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#setup
 [2]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#manage
 [3]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#conclusion
 [4]: https://padloc.app/
 [5]: https://products.containerize.com/password-management/passbolt/
 [6]: https://products.containerize.com/password-management/password-safe/
 [7]: https://products.containerize.com/password-management/bitwarden/
 [8]: https://products.containerize.com/password-management/psono/
 [9]: https://www.containerize.com/
 [10]: https://blog.containerize.com/category/password-management/
 [11]: https://blog.containerize.com/password-management/top-5-open-source-password-managers-in-2021/
 [12]: https://products.containerize.com/password-management/
 [13]: https://products.containerize.com/password-management/keepass
