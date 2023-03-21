---
title: "Bắt đầu với sự phát triển trò chơi bằng cách sử dụng siêu năng lực" 
seoTitle: "Bắt đầu với sự phát triển trò chơi bằng cách sử dụng siêu năng lực" 
description: "Siêu năng lực là một nhà sản xuất trò chơi 3D nguồn mở với sự hợp tác theo thời gian thực. Hướng dẫn này là về việc bắt đầu phát triển trò chơi bằng cách sử dụng siêu năng lực." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "Hành vi và chuyển động của các đối tượng trò chơi được kiểm soát bởi hình ảnh động. Trong hướng dẫn phát triển trò chơi này, chúng ta sẽ học cách làm động các nhân vật trò chơi." 
url: /vi/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## Hành vi và chuyển động của các đối tượng trò chơi được kiểm soát bởi hình ảnh động. Trong hướng dẫn phát triển trò chơi này, chúng ta sẽ học cách làm động các nhân vật trò chơi.

{{< figure align=center src="images/super.png" alt="Bắt đầu với sự phát triển trò chơi">}}


## **Tổng quan**
Trong loạt hướng dẫn phát triển trò chơi nguồn mở của chúng tôi, chúng tôi đã xuất bản các bài đăng trên blog về một số chủ đề phổ biến như [Hướng dẫn phát triển trò chơi | Chuyển động của người chơi trong GDevelop][1], [Hướng dẫn phát triển trò chơi HTML5 cho các lập trình viên trò chơi video][2], [Làm thế nào ngành công nghiệp trò chơi toàn cầu tận dụng phần mềm nguồn mở][3] và [Hướng dẫn phát triển GDevelop để bắt đầu phát triển trò chơi][4 ]. Bài viết hướng dẫn này là về việc bắt đầu phát triển trò chơi bằng cách sử dụng nguồn mở miễn phí [siêu năng lực][5] bằng cách bao gồm các điểm sau.
  * **[Các loại hình ảnh động trò chơi][6]**
  * **[Làm thế nào để tạo Sprites?][7]**
  * **[Làm việc với các cảnh][8]**
  * **[Ra mắt trò chơi trên localhost][9]**
  * **[Kết luận][10]**
Có nhiều phần mềm phát triển trò chơi nguồn mở cho người mới bắt đầu có khả năng tự lưu trữ. Tuy nhiên, [Superpowers][5] là một phần mềm tạo trò chơi 2D & 3D đa nền tảng. Nó cung cấp các thư viện tích hợp và ví dụ trò chơi giúp phát triển trò chơi dễ dàng cho các nhà phát triển trò chơi. Ứng dụng thiết kế trò chơi miễn phí này được viết bằng TypeScript và tất cả các tài liệu có sẵn tại [GitHub][11] về sự phát triển và triển khai. Trong bài đăng trên blog này, chúng tôi sẽ khám phá các siêu cường về việc sử dụng của họ.

## Các loại hình ảnh động trò chơi   {#types}
Hoạt hình là một phần quan trọng của trò chơi video. Các nhân vật trong các trò chơi phải phản ứng với các hành động của người dùng, hoạt hình phải trơn tru và đột ngột. Đó là về việc quản lý nhiều khung và các nhà làm phim hoạt hình tinh chỉnh các khung đó để tạo ra các hiệu ứng di chuyển. Hơn nữa, có các hình ảnh động 2D & 3D trong đó các đối tượng dường như di chuyển qua không gian ba chiều. Các nhà phát triển trò chơi và nhà thiết kế đồ họa tạo ra các mô hình 3D. Hoạt hình phụ thuộc vào bản chất của trò chơi và các loại phổ biến nhất như sau.
**Hoạt hình đi bộ: ** Hoạt hình đi bộ là về việc tạo ra một quá trình đi bộ trong đó các nhân vật làm động từng bước và đưa ra hình minh họa đi bộ.
**Hoạt hình nhàn rỗi: ** Đây là một loại hoạt hình rất quan trọng trong đó nhân vật không làm gì cả vì người dùng không nhấn bất kỳ bộ điều khiển nào.
**Chạy hoạt hình **: Chạy hoạt hình là một phần của mọi trò chơi trong đó đối tượng trò chơi thực hiện chu kỳ chạy. Loại này là loại phổ biến nhất và đòi hỏi sự chú ý nhiều hơn từ nhà phát triển.
**Chiến đấu hoạt hình **: Trong các trò chơi chiến đấu, nhiều nhân vật trò chơi chiến đấu với nhau.
**Hoạt hình nhảy **: Kiểu hoạt hình này đòi hỏi các kỹ năng và chuyên môn tốt hơn. Ký tự nén và giải phóng cơ thể để thực hiện minh họa nhảy.

## Làm thế nào để tạo Sprites?   {#Sprites}
Phần này của hướng dẫn làm trò chơi cho phép người dùng tạo các dự án và bắt đầu tạo Sprites cho trò chơi. Sprites là hình ảnh hoặc đồ họa không tĩnh không chỉ được sử dụng trong các trò chơi mà còn là một phần của thiết kế web. Chúng thường được vẽ trên một nền đang được làm mới liên tục.
Trước khi tiếp tục, hãy chắc chắn rằng bạn đã thiết lập siêu năng lực trên máy của mình. Bạn có thể theo liên kết này [Hướng dẫn phát triển trò chơi HTML5 cho các lập trình viên trò chơi video][2] để thiết lập nền tảng tạo trò chơi miễn phí này.
Đầu tiên, hãy mở ứng dụng vào trình duyệt và để cho một dự án trống mới. như thể hiện trong hình ảnh dưới đây.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Bắt đầu với sự phát triển trò chơi">}}

Bạn sẽ hạ cánh trong không gian dự án sau khi tạo dự án trống mới. Có các tùy chọn menu ở bảng điều khiển phía bên trái. Vì vậy, nhấp vào nút+++để mở hộp thoại tài sản. Chọn tùy chọn sprite và nhấn created.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Hướng dẫn làm trò chơi">}}

Bây giờ, tải lên hình ảnh mà chúng ta sẽ thêm hành vi. Bạn có thể làm điều đó bằng cách nhấp vào nút được đặt ở góc trên bên phải. Bảng điều khiển này là về cấu hình đối tượng.
Tiếp theo, bạn có thể đặt kích thước lưới theo lựa chọn của bạn. Có hai phần của vải. Phần trên hiển thị toàn bộ trong đó phần dưới hiển thị phần đã chọn mà chúng tôi dự định áp dụng hoạt hình. Bạn có thể làm điều đó bằng cách nhấn nút Cài đặt trực tuyến tại bảng điều khiển bên phải như trong hình bên dưới.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="Hướng dẫn phát triển trò chơi">}}

Sau đó, hãy để tạo ra hình ảnh động. Chúng ta có thể làm điều đó bằng cách nhấp vào nút Mới mới trong tab Animation. Bạn có thể thấy hình ảnh dưới đây.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Phần mềm phát triển trò chơi cho người mới bắt đầu">}}


## Làm việc với các cảnh   {#Scenes}
Trong phần này, chúng tôi sẽ thêm một cảnh vào trò chơi của chúng tôi. Đối với điều đó, một lần nữa mở hộp thoại tài sản và chọn cảnh Cảnh và nhấn nút Tạo. Bây giờ tạo một diễn viên bằng cách nhấp vào nút Star có sẵn ở góc trên cùng bên phải như trong hình ảnh bên dưới.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="Làm thế nào để tạo một trò chơi trên đầu cho người mới bắt đầu">}}

Sau đó, hãy tạo một thành phần mới bằng cách nhấp vào nút Thành phần mới được đặt trên bảng điều khiển bên phải. Chọn Trình kết xuất Sprite Sprite và HIT Tạo. Sau đó, kéo sprite được tạo ra từ bảng điều khiển phía bên trái và thả nó dưới phần trình kết xuất sprite. Ngoài ra, hãy tạo một diễn viên khác có tên là Camera Camera và tương tự, tạo ra một thành phần mới có tên là Camera.
Bạn có thể thay đổi chế độ camera, vì vậy hãy thay đổi nó thành chế độ chỉnh hình trên mạng như trong hình ảnh bên dưới.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Bắt đầu với phát triển trò chơi,">}}

Ở góc dưới bên trái, điều hướng đến tùy chọn Cài đặt và mở nó. Theo các phần của Sprite Sprite và các phần của Ngói, chèn 16 phần so với Pixel Pixel trên mỗi đơn vị. Sau đó, trong chế độ camera mặc định của người Viking, chọn 2D trong phần Cảnh trên mạng. Hơn nữa, trong phần Bản đồ gạch của người dùng, chiều rộng mặc định 36, chiều cao mặc định 28 và kích thước lưới đặt gạch 16. Không cần lưu nó, thay vào đó mọi thứ đều có trên tự động.

## Khởi chạy trò chơi trên localhost   {#local}
Vì vậy, chúng tôi gần với việc ra mắt hoạt hình siêu năng lực của trò chơi đầu tiên của chúng tôi. Tuy nhiên, một lần nữa chuyển đến tab Cài đặt và kéo cảnh từ bảng điều khiển bên trái và thả nó vào cảnh khởi động của Hồi giáo như trong hình ảnh bên dưới.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="Làm thế nào để tạo một trò chơi trên đầu cho người mới bắt đầu">}}

Bây giờ, nhấp vào người chơi của người chơi và trong thành phần của Sprite Sprite, chọn hoạt hình đối với thuộc tính của hoạt hình trực tuyến. Cuối cùng, khởi chạy ứng dụng bằng cách nhấp vào nút được đặt ở góc trên cùng bên trái. Tab mới sẽ hiển thị các đối tượng di chuyển trên màn hình.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Bắt đầu với sự phát triển trò chơi">}}


## Kết luận   {#conclusion}
Đây là kết thúc của hướng dẫn trong đó chúng tôi đã học cách làm một trò chơi trên đầu cho người mới bắt đầu. Do đó, bắt đầu với việc phát triển trò chơi trở nên dễ dàng khi có tài liệu chi tiết về phần mềm phát triển trò chơi có sẵn. Cuối cùng, [**containerize.com** ][12] đang trong một quá trình viết bài viết nhất quán về các chủ đề và sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với danh mục [Phần mềm phát triển trò chơi][13] này để cập nhật thường xuyên.

## Khám phá
  * [GDevelop][14]
  * [Godot][15]
  * [Siêu năng lực][5]
  * [Người tạo Cocos][16]
  * [Panda3d][17]
  * [PlayCanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
