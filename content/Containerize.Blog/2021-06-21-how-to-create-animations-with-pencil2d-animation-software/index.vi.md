---
title: "Cách tạo hình ảnh động bằng phần mềm hoạt hình Pencil2D" 
seoTitle: "Cách tạo hình ảnh động bằng phần mềm hoạt hình Pencil2D" 
description: "Pencil2D là một phần mềm hoạt hình nguồn mở cho phép người dùng tạo hình ảnh động và phác thảo 2D. Bài viết này là về cách tạo hoạt hình với Pencil2D." 
date: Mon, 21 Jun 2021 06:45:42 +0000
author: bilalahmed
summary: "Pencil2D là một phần mềm hoạt hình nguồn mở cho phép người dùng tạo hình ảnh động và phác thảo 2D. Bài viết này là về cách tạo hoạt hình với Pencil2D." 
url: /vi/how-to-create-animations-with-pencil2d-animation-software/
categories: ['Animation Software']
---

{{< figure align=center src="images/How-To-Create-Animations-With-Pencil2D-Animation-Software.png" alt="Cách tạo hình ảnh động bằng phần mềm hoạt hình Pencil2D">}}


## **Bút chì2D là một phần mềm hoạt hình nguồn mở cho phép người dùng tạo hình ảnh động và phác thảo 2D. Bài viết này là về cách tạo hoạt hình với Pencil2D** .
Khi nói đến việc học với phần mềm mới để tạo hình ảnh động và hình minh họa, chúng tôi đã tạo ra một loạt các hướng dẫn và hướng dẫn có thể giúp bạn thành thạo phần mềm mới và tìm hiểu hình ảnh động. Cho dù bạn là người mới bắt đầu hay người dùng nâng cao, [bài viết trước đây của chúng tôi][1] có thể giúp bạn tìm đúng ứng dụng hoạt hình cho bạn. Hãy cùng bao gồm các chủ đề sau đây để tìm hiểu cách tạo hình ảnh động với phần mềm hoạt hình Pencil2D.
  * [Bút chì2D là gì?][2]
  * [Cách cài đặt Bút chì2D?][3]
  * [Tổng quan về giao diện ứng dụng][4]
  * [Làm thế nào để tạo hình ảnh động bằng bút chì2D?][5]
  * [Kết luận][6]

## Bút chì2D là gì?   {#what-is-pencil2d}
[Bút chì2D][7] là một ứng dụng hoạt hình truyền thống cho phép người dùng tạo bản phác thảo 2D của phim hoạt hình và hoạt hình cho các dự án khác nhau. Bạn có thể sử dụng Pencil2D cả cho các dự án cá nhân cũng như các nỗ lực thương mại, vì đây là một phần mềm hoạt hình nguồn mở được cấp phép theo giấy phép công cộng GNU. Sử dụng Pencil2D khá đơn giản, như bạn sẽ thấy thêm trong bài viết. Nó cũng có thể được sử dụng bởi cả hai họa sĩ hoạt hình mới bắt đầu cũng như người dùng chuyên nghiệp.
Với [Bút chì2D][7] Hoạt hình của bạn được lưu trữ trong các bản vẽ bitmap hoặc vector và sử dụng quy trình làm việc raster/vector để quản lý hiệu quả các hình ảnh động. Một số định dạng tệp có thể chấp nhận được trong khi sử dụng Pencil2D là PNG, JPEG, BMP, Tiff, vv cho hình ảnh và AVI, MP4, GIF và nhiều hơn nữa, cho video. Nó tương thích với Windows, Mac OS, Linux và FreeBSD.

## Làm thế nào để cài đặt Pencil2D?   {#install-pencil2d}
Mở thiết bị đầu cuối và cập nhật chỉ mục gói máy chủ cục bộ của bạn bằng cách nhập lệnh sau:
```
sudo apt-get update -y

```
Chạy lệnh sau trong thiết bị đầu cuối để cài đặt Bút chì2D:
```
sudo apt-get install -y pencil2d

```

## Tổng quan về giao diện ứng dụng   {#application-giao diện}
Trước khi chúng tôi bắt đầu với hướng dẫn thực tế của Pencil2D về cách tạo hình ảnh động bằng Pencil2D, đây là một chút tổng quan về giao diện người dùng và một số công cụ và tính năng tốt để biết:
  ***Bảng trắng:**  Khi bạn khởi chạy Pencil2D lần đầu tiên, bạn sẽ thấy một bảng trắng chính ở giữa, được bao quanh bởi các bảng điều khiển, công cụ và tính năng nơi bạn sẽ tạo phần chính của hoạt hình
  ***Công cụ:**  Ở phía bên trái, bạn sẽ tìm thấy tính năng Công cụ bao gồm Công cụ Brush, Bút chì, Công cụ xóa, Công cụ xô để thêm màu sắc và tất cả các tính năng sẽ cho phép bạn phác thảo một bộ phim hoạt hình hoặc hoạt hình và xác định nó.
  ***Box Tùy chọn:**  Bên dưới hộp Công cụ bạn có khả năng bao gồm hoặc xóa cửa sổ Tùy chọn nơi bạn có tùy chọn để xác định các thuộc tính của các công cụ bạn sử dụng. Chẳng hạn, nếu bạn sử dụng một bàn chải, bạn có thể chuyển đổi giữa độ dày của bàn chải, màu sáng hoặc màu tối sẽ xuất hiện và các tính năng tương tự.
  ***Hộp hiển thị:**  Bên dưới cửa sổ Tùy chọn là hộp hiển thị nơi bạn có thể điều khiển bản phác thảo mà bạn đã vẽ trên bảng trắng, chẳng hạn như lật nó phải hoặc trái, áp dụng da hành tây cho các bản phác thảo trước đó và hơn thế nữa.
  ***Bảng màu:**  Ở đây bạn sẽ tìm thấy tất cả các màu có sẵn có thể được thêm vào bản vẽ của bạn.
  ***Hộp màu:**  Ngay bên dưới bảng màu là hộp màu cho phép bạn chọn các màu màu cụ thể từ bánh xe màu.
  ***Bảng thời gian:**  Đây là một trong những phần quan trọng nhất của Pencil2D cho phép bạn áp dụng các lớp cho hoạt hình của bạn bắt đầu với lớp bitmap, lớp vector và lớp camera. Bạn cũng có thể thêm các khung chính để tạo hoạt hình video, xóa và sao chép các khung, v.v.
Khi bạn đã thành thạo và hiểu các công cụ này, bạn có thể bắt đầu tạo hình ảnh động và phác thảo ngay lập tức, hoặc thử và học khi bạn đi.

## Làm thế nào để tạo hình ảnh động với PENGIN2D?   {#created-animations}
Bây giờ, chúng ta có thể chuyển sang tạo một hình ảnh động cơ bản với Pencil2D.
{{_LINE_38_}}
{{_LINE_39_}}

{{< figure align=center src="images/IMG-20210617-WA0049.jpg" alt="Tạo hình ảnh động với phần mềm hoạt hình Bút chì2D">}}

{{_LINE_41_}}
{{_LINE_42_}}

{{< figure align=center src="images/IMG-20210617-WA0050.jpg" alt="Tạo hình ảnh động với phần mềm hoạt hình Bút chì2D">}}

{{_LINE_44_}}
{{_LINE_45_}}

{{< figure align=center src="images/IMG-20210617-WA0051.jpg" alt="Tạo hình ảnh động với phần mềm hoạt hình Bút chì2D">}}

{{_LINE_47_}}
{{_LINE_48_}}

{{< figure align=center src="images/IMG-20210617-WA0053.jpg" alt="Tạo hình ảnh động với phần mềm hoạt hình Bút chì2D">}}

{{_LINE_50_}}
{{_LINE_51_}}

{{< figure align=center src="images/IMG-20210617-WA0048.jpg" alt="Tạo hình ảnh động với phần mềm hoạt hình Bút chì2D">}}

{{_LINE_53_}}
{{_LINE_54_}}
Bây giờ bạn có thể nhúng hoạt hình vào một trang web, phát vào trình duyệt hoặc máy tính để bàn của bạn và hơn thế nữa.

## Kết luận   {#conclusion}
Như bạn có thể thấy từ hướng dẫn trên, việc tạo hình ảnh động với Pencil2D khá dễ hiểu và thực thi. Phần mềm hoạt hình đã được tạo ra theo cách để trở nên thân thiện với người mới bắt đầu cũng như nhanh chóng được chấp nhận bởi các chuyên gia. Có nhiều tùy chọn có sẵn trong Pencil2D khi tạo ra các bản phác thảo hoặc hình ảnh động 2D và bất kỳ họa sĩ minh họa nào cũng có thể thực sự tạo ra một danh mục đầu tư mạnh mẽ với ứng dụng.
[Bút chì2D][7] tương thích với nhiều hệ điều hành như chúng tôi đã đề cập trước đó, vì vậy bạn có thể chỉ cần cắm và chơi với phần mềm hoạt hình trong môi trường bạn chọn. Nếu bạn đang tìm kiếm thêm hướng dẫn về Pencil2D, bạn chỉ cần đi và xem trang web của họ. Chúng tôi cũng đã tạo ra nhiều hướng dẫn và hướng dẫn để sử dụng các chương trình phần mềm hoạt hình khác mà bạn có thể tìm thấy trên trang web của chúng tôi, vì vậy hãy kiểm tra chúng để rõ ràng hơn.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Bút chì2D | Phần mềm hoạt hình 2D miễn phí của đa nền tảng & nguồn mở][7]
  * [Hướng dẫn bắt đầu để bắt đầu chỉnh sửa hình ảnh miễn phí bằng Digikam][8]
  * [Phần mềm hoạt hình nguồn mở tốt nhất][9]

  
[1]: https://blog.containerize.com/
[2]: #what-is-pencil2d
[3]: #install-pencil2d
[4]: #application-interface
[5]: #create-animations
[6]: #conclusion
[7]: https://products.containerize.com/animation-software/pencil2d/
[8]: https://blog.containerize.com/animation-software/beginners-guide-to-start-free-image-editing-using-digikam/
[9]: https://products.containerize.com/animation-software/
