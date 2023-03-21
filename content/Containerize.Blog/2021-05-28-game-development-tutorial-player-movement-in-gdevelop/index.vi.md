---
title: "Hướng dẫn phát triển trò chơi | Chuyển động của người chơi trong GDevelop" 
seoTitle: "Hướng dẫn phát triển trò chơi | Chuyển động của người chơi trong GDevelop" 
description: "Thực hiện theo hướng dẫn phát triển trò chơi này để tìm hiểu về các chức năng trò chơi cơ bản. GDevelop là một phần mềm tạo trò chơi miễn phí để xây dựng và xuất bản các trò chơi." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Di chuyển các đối tượng trên màn hình là một phần quan trọng của bất kỳ trò chơi nào. Trong hướng dẫn phát triển trò chơi này, chúng tôi sẽ học cách kiểm soát và di chuyển các đối tượng trò chơi trong GDevelop." 
url: /vi/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Các đối tượng di chuyển trên màn hình là một phần quan trọng của bất kỳ trò chơi nào. Trong hướng dẫn phát triển trò chơi này, chúng tôi sẽ học cách kiểm soát và di chuyển các đối tượng trò chơi trong GDevelop.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Hướng dẫn phát triển trò chơi">}}


## **Tổng quan**
Cộng đồng nguồn mở đang nổi lên với sự thông qua của mỗi phút. Có các trò chơi đa nền tảng, trò chơi di động và trò chơi máy tính để bàn. Nhiều loại trò chơi bao gồm các trò chơi hành động, trò chơi phiêu lưu, trò chơi nhập vai, trò chơi thể thao, trò chơi giải đố, trò chơi mô phỏng, và nhiều hơn nữa. Do đó, tất cả các loại trò chơi khác nhau này đã mang lại sự thúc đẩy to lớn cho lưu lượng truy cập vì người dùng từ tất cả các nhóm tuổi có xu hướng chơi các trò chơi này.
Hơn nữa, đại dịch đã mang đến một sự thay đổi lớn trong lối sống của những người sống trên toàn cầu. Mọi người bây giờ có nhiều thời gian hơn. Tất cả các hoạt động ngoại tuyến đã trở thành trực tuyến. Do đó, họ có xu hướng lựa chọn phần mềm trực tuyến để thực hiện các nhiệm vụ và trò chơi video chuyên nghiệp trong trường hợp giải trí. Do tất cả những lý do này, ngành công nghiệp này đã đạt được sự bền vững và sự hỗ trợ của người dùng và nhà phát triển. Trong quá khứ gần đây, chúng tôi đã viết về các chủ đề như [Hướng dẫn phát triển trò chơi HTML5 cho các lập trình viên trò chơi video][1], [làm thế nào ngành công nghiệp trò chơi toàn cầu tận dụng phần mềm nguồn mở][2] và [Hướng dẫn phát triển GDevelop để bắt đầu phát triển trò chơi][3]. Trong hướng dẫn phát triển trò chơi này, chúng tôi sẽ đề cập đến các điểm sau.
  * **[Tính năng Thăm dò GDevelop][4]**
  * **[Làm việc trên một trò chơi][5]**
  * **[Kết luận][6]**

## Tính năng Thăm dò GDevelop   {#Features}
[GDevelop][7] là một nền tảng xây dựng trò chơi nguồn mở. Nó rất có thể mở rộng và cung cấp một giao diện logic nơi người dùng có thể điều hướng dễ dàng. Phần mềm miễn phí này được viết bằng C ++, TypeScript và JavaScript. Hơn nữa, có tài liệu toàn diện có sẵn liên quan đến phát triển và triển khai. Tất cả các mã nguồn có sẵn tại GitHub. Hơn nữa, có nhiều tính năng làm cho phần mềm làm cho trò chơi này trở nên nổi bật. Hãy cùng xem một số tính năng chính.
**Cao nguyên chéo**: Nền tảng tạo trò chơi này là đa nền tảng và nó có thể được triển khai trên hầu hết tất cả các hệ điều hành phổ biến như MacOS, Linux và Windows.
**Tùy chọn xuất**: GDevelop cho phép người dùng xuất các trò chơi được phát triển chỉ bằng một lần nhấp cho Android, iOS và Web. Chủ sở hữu trò chơi có thể hiển thị quảng cáo video trên các trò chơi của họ và có thể với sự hỗ trợ của Admob.
**Các đối tượng trò chơi phong phú**: Nhà sản xuất trò chơi nguồn mở này cung cấp một loạt các đối tượng trò chơi như sprites với hình ảnh động, vụ nổ lửa và các hiệu ứng khác với sự trợ giúp của các bộ phát hạt. Văn bản được định dạng, video nhúng và vẽ các hình dạng tùy chỉnh có sẵn để đưa các hiệu ứng bắt mắt vào các trò chơi.
**Hành vi đa năng**: Trong bài viết phát triển trò chơi cơ bản này, chúng tôi sẽ chỉ cho bạn cách chúng tôi có thể thêm các hành vi khác nhau vào các đối tượng trò chơi. Có nhiều hành vi có sẵn sẵn sàng sử dụng và người dùng có thể phát triển hơn nữa theo yêu cầu. Tất cả xảy ra trong một vấn đề của một vài lần nhấp chuột.
**Giao diện nâng cao**: Trong hướng dẫn thiết kế trò chơi này, chúng ta sẽ thấy giao diện người dùng của công cụ trò chơi 3D này. Người dùng có thể kéo và thả các yếu tố và đối tượng trò chơi khác nhau.

## Làm việc trên một trò chơi   {#working}
Phần này của hướng dẫn phát triển trò chơi xây dựng sự phát triển trò chơi cơ bản với GDevelop. Trước khi đi xa hơn, hãy chắc chắn rằng bạn đã cài đặt GDevelop tại địa phương trên máy của bạn.
Bạn có thể truy cập hướng dẫn này [Hướng dẫn phát triển GDevelop cho người mới bắt đầu để bắt đầu phát triển trò chơi][3] để có được kiến ​​thức về việc thiết lập trình chỉnh sửa trò chơi này trên Localhost.
Bây giờ, hãy mở ra biên tập viên và tạo một dự án mới. Trong hướng dẫn này, chúng tôi sẽ tạo một thư mục trên Google Drive để lưu các tệp trò chơi. Bây giờ hãy nhấp vào trên mạng Tạo một dự án mới, nó sẽ mở ra một hộp thoại mới, chọn tùy chọn Trò chơi trống rỗng để bắt đầu xây dựng một trò chơi mới.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Hướng dẫn phát triển trò chơi">}}

Ở phía bên trái, thanh menu dự án, nhấp vào Lưu Lưu dưới dạng để lưu trò chơi.
Đầu tiên, hãy để thêm một cảnh. Đối với điều đó, nhấp vào tùy chọn Cảnh trên các cảnh trên mạng và đổi tên nó, ví dụ như cảnh đầu tiên, trong hướng dẫn này được hiển thị trong hình ảnh dưới đây.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" Nền tảng xây dựng trò chơi">}}

Sau khi tạo cảnh, mở nó và thêm một đối tượng. Để thêm một đối tượng, hãy nhấp vào Thêm một đối tượng mới xuất hiện trên bảng điều khiển bên phải. Cuối cùng, nó sẽ mở một hộp thoại mới chứa các tài sản khác nhau. Tuy nhiên, hãy để Lừa chọn đối tượng Red Red Ship Hit, Thêm vào trò chơi và đóng hộp thoại.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Hướng dẫn phát triển trò chơi">}}

Tiếp theo, bạn sẽ thấy một đối tượng xuất hiện trên bảng điều khiển bên trái. Kéo nó vào màn hình chính và nhấn nút xuất hiện ở góc trên cùng bên trái để khởi chạy trò chơi. Do đó, nó sẽ mở trò chơi vào một cửa sổ mới như trong hình dưới đây.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Hướng dẫn phát triển trò chơi">}}

Cho đến bây giờ, bạn không thể chơi với đối tượng này vì không có hành vi được thêm vào nó. Vì vậy, hãy để thêm một hành vi cho đối tượng này. Đối với điều đó, nhấp vào đối tượng tàu và nhấn đối tượng Chỉnh sửa. Nó sẽ mở một hộp thoại mới, điều hướng đến tab Hành vi, chọn chuyển động từ trên xuống và nhấn vào ứng dụng. Bây giờ, hãy xem trước trò chơi và bạn sẽ thấy rằng bạn có thể di chuyển đối tượng tàu trên màn hình bằng các phím mũi tên bàn phím của bạn. Bây giờ, bạn sẽ nhận thấy rằng đối tượng tàu tắt màn hình. Do đó, để giải quyết vấn đề này, hãy để chỉnh sửa đối tượng và điều hướng đến các hành vi. Nhấp vào Thêm một hành vi vào đối tượng. Bây giờ, điều hướng đến tìm kiếm các hành vi mới, và tìm kiếm hành vi trên màn hình trên màn hình trong thanh tìm kiếm như trong hình ảnh dưới đây.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Phát triển GDE">}}

Tiếp theo, chọn nó và cài đặt nó vào dự án và nhấn áp dụng. Một điều nữa là điều chỉnh điểm trung tâm của đối tượng. Vì vậy, hãy để Lừa đi một lần nữa đến các thuộc tính đối tượng và các điểm chỉnh sửa trên đường xuất hiện ở phía dưới. Bạn sẽ hạ cánh trên màn hình sau.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Hướng dẫn thiết kế trò chơi">}}

Vì vậy, kéo dấu xuất hiện ở góc trên cùng bên trái vào trung tâm của đối tượng sau đó đóng và áp dụng. Bây giờ, nếu bạn khởi động lại trò chơi, bạn sẽ thấy những thay đổi.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Hướng dẫn phát triển trò chơi">}}


## Kết luận   {#conclusion}
Đây là kết thúc của hướng dẫn phát triển trò chơi này. Hy vọng, bài đăng trên blog này sẽ hữu ích cho các nhà phát triển trò chơi. Hướng dẫn này giúp bạn có thể làm việc với các đối tượng trò chơi và thêm các hành vi. Trong tương lai, Containererize.com sẽ xuất bản các bài đăng trên blog và các bài viết hướng dẫn về phần mềm thiết kế trò chơi video nguồn mở tiếp theo. Do đó, vui lòng duy trì kết nối với danh mục [phần mềm phát triển trò chơi][8] này tại [containerize.com][9] để cập nhật thường xuyên.

## Khám phá
  * [GDevelop][7]
  * [Godot][10]
  * [Siêu năng lực][11]
  * [Người tạo Cocos][12]
  * [Panda3d][13]

  
[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/vi/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
