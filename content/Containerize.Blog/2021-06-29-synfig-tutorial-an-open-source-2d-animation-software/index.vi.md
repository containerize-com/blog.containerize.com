---
title: "Hướng dẫn Synfig | Phần mềm hoạt hình 2D nguồn mở" 
seoTitle: "Hướng dẫn Synfig | Phần mềm hoạt hình 2D nguồn mở" 
description: "Tạo hình ảnh động 2D với Synfig là một quá trình miễn phí, liền mạch và nhanh chóng. Trong hướng dẫn này, bạn sẽ tìm thấy tất cả thông tin bạn cần để bắt đầu." 
date: Tue, 29 Jun 2021 08:08:53 +0000
author: yasir saeed
summary: "Tạo hình ảnh động 2D với Synfig là một quá trình miễn phí, liền mạch và nhanh chóng. Trong hướng dẫn này, bạn sẽ tìm thấy tất cả thông tin bạn cần để bắt đầu." 
url: /vi/synfig-tutorial-an-open-source-2d-animation-software/
categories: ['Animation Software']
---

## Tạo hình ảnh động 2D với Synfig là một quá trình miễn phí, liền mạch và nhanh chóng. Trong hướng dẫn này, bạn sẽ tìm thấy tất cả thông tin bạn cần để bắt đầu.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

  * [Synfig là gì?][1]
  * [Cách cài đặt Synfig?][2]
  * [Tổng quan về giao diện ứng dụng][3]
  * [Làm thế nào để tạo một hình ảnh động cơ bản với Synfig?][4]
  * [Kết luận][5]

## Synfig là gì?   {#Gì}
Synfig là một trong những phần mềm hoạt hình 2D tốt nhất đã được thiết kế cho các nghệ sĩ solo hoặc các nhóm nhỏ để quản lý quy trình và dự án hoạt hình của họ. Là một phần mềm hoạt hình nguồn mở, Synfig sử dụng một hệ thống hoạt hình Tween Tweenless, không chỉ cắt giảm thời gian để một hình ảnh động xử lý mà còn mang đến cho các nhà hoạt hình khả năng thêm khung vẽ khôn ngoan.
Khi nói đến việc sử dụng Synfig, nó thực sự là một phần mềm hoạt hình xử lý nhanh, nhẹ, có thể là một bổ sung tuyệt vời cho đường ống minh họa của bất kỳ nghệ sĩ nào làm việc độc tấu hoặc trong một nhóm nhỏ. Hơn nữa, cộng đồng Synfig là một nơi tích cực để tìm không chỉ các hướng dẫn về việc sử dụng ứng dụng phần mềm, mà còn giúp bạn tìm giải pháp trong trường hợp bạn chạy vào rào cản.
Bạn có thể dễ dàng sử dụng Synfig trên nhiều hệ điều hành bao gồm Windows, Mac OS và Linux. Xin lưu ý rằng trong khi sử dụng Synfig, hệ thống của bạn nên có:
  * RAM ít nhất 2GB trở lên
  * CPU lõi kép ở 2 GHz trở lên
Synfig đã được sử dụng để hoạt hình khá nhiều dự án phổ biến bao gồm Morevna: Demo Project, The Hạn chót của Morevna, phần mở đầu thám tử Polar của Cyan LOS và nhiều dự án thương mại khác. Điều này cho thấy phạm vi của Sylyfig vì nó cũng có thể được sử dụng cho cả các dự án thương mại và cá nhân. Cho dù bạn mới tham gia thế giới hoạt hình hay nâng cao trong sự nghiệp của mình, Synfig có thể tạo ra một phiên bản đẹp cho bộ kỹ năng của bạn và giúp bạn phát triển chặt chẽ trong việc tạo ra các hoạt hình 2D tuyệt vời. Nếu bạn đang muốn tìm hiểu thêm về các chương trình phần mềm hoạt hình khác thì bạn có thể xem các hướng dẫn và hướng dẫn khác mà chúng tôi đã thực hiện cho bạn.

## Cách cài đặt Synfig?   {#Cài đặt thế nào}
Để cài đặt phần mềm hoạt hình Synfig 2D trên thiết bị Linux, bạn có thể tải xuống trực tiếp tệp trình cài đặt từ trang chủ chính của Synfig. Bạn sẽ nhận được một tùy chọn để tải xuống tệp hình ảnh 32 bit hoặc 64 bit, chọn theo hệ thống của bạn.
Sau khi tải xuống, hãy mở dòng lệnh của bạn và nhập các lệnh sau:
```
sudo apt-get update
```
```
sudo apt-get install synfigstudio
```
Bây giờ bạn phải có thể truy cập Synfig Studio một cách dễ dàng.

## Tổng quan về giao diện ứng dụng   {#Ứng dụng giao diện}
Như chúng tôi đã đề cập ở trên, Synfig Studio là một phần mềm hoạt hình nguồn mở cho phép người dùng tạo các hình ảnh động 2D hoàn hảo, xử lý nhanh chóng. Để hiểu các công cụ và tính năng, đây là một cái nhìn tổng quan nhanh về Synfig Studio khi bạn bắt đầu sử dụng nó lần đầu tiên.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-1-1024x649.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

  ***Canvas:  **Canvas là mẫu rô màu xám ở giữa nơi bạn có thể phác thảo hình ảnh hoạt hình của mình và áp dụng các hiệu ứng, lớp, khung và chỉnh sửa của mình. Ở đây bạn sẽ tìm thấy các khung vẽ được bao quanh bởi các nút ở bên phải để **  khóa/mở khóa  **khung hình chính, chuyển sang chế độ hoạt hình ** ,  **Một hình tam giác màu đen nhỏ ở góc trên bên trái được gọi là **  caret**  và Dòng thời gian trong trường hợp bạn đã xác định một hình ảnh động khác không.
  ***Công cụ:**  Hộp công cụ là một trong những thành phần chính của Synfig nơi bạn sẽ tìm thấy tất cả các công cụ bạn sẽ cần để thao tác các đối tượng. Từ kích thước bàn chải, màu sắc, áp dụng độ dốc, xóa hình ảnh động, áp dụng các văn bản và hơn thế nữa, bạn sẽ tìm thấy tất cả những gì bạn cần để tạo hình ảnh động và chỉnh sửa chúng trong bảng hộp công cụ ở phía trên bên trái.
  ***Bảng theo dõi thời gian:**  Khi tạo hình ảnh động, thời gian là chìa khóa và với bảng theo dõi thời gian, bạn có thể điều chỉnh các khung chính và mọi điểm riêng (các biểu tượng đồ họa xuất hiện trên bảng theo dõi thời gian để chỉ ra điều chỉnh của bất kỳ tham số) có liên quan.
  ***Bảng tham số:**  Ở đây bạn sẽ tìm thấy tất cả các tùy chọn và cài đặt chi tiết cho các yếu tố hoạt động trên hoạt hình của bạn như màu sắc, chiều rộng, độ mờ, v.v. Đây là một trong những thành phần cốt lõi của Synfig.
Bây giờ hãy chuyển sang tạo một hình ảnh động với Synfig Studios.

## Làm thế nào để tạo một hình ảnh động cơ bản với Synfig?   {#created-animation}
Trong phần này của bài đăng, chúng tôi sẽ cung cấp cho bạn một hướng dẫn từng bước về cách tạo một hình ảnh động cơ bản với Synfig Studio. Hãy bắt đầu nào.
{{_LINE_40_}}
{{_LINE_41_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-02.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_43_}}
{{_LINE_44_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-03.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_46_}}
{{_LINE_47_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-04.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_49_}}
{{_LINE_50_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-05.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_52_}}
{{_LINE_53_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-06.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_55_}}
{{_LINE_56_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-07.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_58_}}
{{_LINE_59_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-08.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_61_}}
{{_LINE_62_}}

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-09.png" alt="Synfig hướng dẫn một phần mềm hoạt hình 2D nguồn mở">}}

{{_LINE_64_}}
{{_LINE_65_}}
Và ở đó bạn có một hướng dẫn cơ bản về cách tạo một hình ảnh động trong Synfig Studio.

## Kết luận   {#conclusion}
Sử dụng phần mềm hoạt hình 2D Synfig khá đơn giản và dễ dàng nếu bạn đã sử dụng phần mềm hoạt hình cho công việc của mình. Ngay cả khi bạn chưa quen với ngành công nghiệp hoạt hình, hiểu giao diện là một nhiệm vụ dễ dàng. Chúng tôi hy vọng bạn tìm thấy hướng dẫn này hữu ích và có thể tạo hoạt hình 2D cho các dự án học tập, thương mại hoặc cá nhân khác nhau để tạo ra một danh mục đầu tư.
_ Phần mềm hoạt hình nguồn mở yêu thích nhất của bạn là gì ?. Bạn có bất kỳ câu hỏi nào về phần mềm hoạt hình không?

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Phần mềm hoạt hình nguồn mở tốt nhất][7]
  * [Synfig | Bộ hoạt hình 2D dựa trên vector nguồn miễn phí và mở][8]
  * [Cách tạo hình ảnh động với phần mềm hoạt hình Pencil2D][9]
  * [Hướng dẫn bắt đầu để bắt đầu chỉnh sửa hình ảnh miễn phí bằng Digikam][10]

  
[1]: #what
[2]: #how-to-install
[3]: #application-interfae
[4]: #create-animation
[5]: #conclusion
[6]: mailto:yasir.saeed@aspose.com
[7]: https://products.containerize.com/animation-software/
[8]: https://products.containerize.com/animation-software/synfig/
[9]: https://blog.containerize.com/animation-software/how-to-create-animations-with-pencil2d-animation-software/
[10]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
