---
title: "Cách thực hiện một trò chơi trên đầu bằng cách sử dụng GDevelop nguồn mở" 
seoTitle: "Cách thực hiện một trò chơi trên đầu bằng cách sử dụng GDevelop nguồn mở" 
description: "Làm thế nào để làm một trò chơi từ đầu? GDevelop cung cấp một giao diện người dùng hợp lý chứa đầy nhiều thành phần và hành vi để xây dựng các trò chơi video cho web, máy tính để bàn, iOS và Android." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Hướng dẫn phát triển trò chơi này giải thích những điều cơ bản của việc xây dựng một trò chơi đua xe tải. Bạn có thể cài đặt nó hoặc sử dụng ứng dụng trực tuyến của mình để xây dựng một trò chơi video thú vị." 
url: /vi/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Hướng dẫn phát triển trò chơi này giải thích những điều cơ bản của việc xây dựng một trò chơi đua xe tải. Bạn có thể cài đặt nó hoặc sử dụng ứng dụng trực tuyến của mình để xây dựng một trò chơi video thú vị.

{{< figure align=center src="images/gdevelop-game.png" alt="Cách tạo một trò chơi trên đầu">}}


## **Tổng quan**
Trong quá khứ gần, chúng tôi đã xuất bản nhiều bài đăng trên blog về phần mềm phát triển trò chơi miễn phí nguồn mở như [phần mềm phát triển trò chơi miễn phí hàng đầu năm 2021][1], [bắt đầu với sự phát triển trò chơi bằng cách sử dụng siêu năng lực][2], [trò chơi Hướng dẫn phát triển | Chuyển động của người chơi trong GDevelop][3], [Hướng dẫn phát triển trò chơi HTML5 cho các lập trình viên trò chơi video][4], [Làm thế nào ngành công nghiệp trò chơi toàn cầu tận dụng phần mềm nguồn mở][5], và [Hướng dẫn phát triển GDevelop để bắt đầu phát triển trò chơi][6 ]. Những tiến bộ mới nhất trong thời đại của internet đã mang lại xu hướng mới trong ngành công nghiệp trò chơi video. Một nền tảng xây dựng trò chơi nguồn mở cung cấp một hệ sinh thái hoàn chỉnh để phát triển các trò chơi một cách độc lập và các nhà phát triển sau đó trưởng thành nền tảng đó theo nhu cầu. Trong bài đăng trên blog này, chúng tôi sẽ học cách tạo một trò chơi trên đầu bằng cách sử dụng [GDevelop][7] bằng cách bao quát các điểm sau.
  * **[Tại sao chúng ta nên sử dụng GDevelop?][8]**
  * **[Thiết lập dự án][9]**
  * **[Làm thế nào để chuẩn bị nền và đối tượng?][10]**
  * **[Thêm Behviors vào đối tượng][11]**
  * **[Chạy trò chơi][12]**
  * **[Kết luận][13]**

## Tại sao chúng ta nên sử dụng GDevelop?   {#Tại sao}
[GDevelop][7] là một phần mềm chơi game nguồn mở. Nó đi kèm với khả năng tự lưu trữ và có nền tảng chéo trong tự nhiên. Bạn có thể tải xuống và cài đặt nó, hoặc bạn có thể sử dụng phiên bản trực tuyến của nó để chơi với nó. Người dùng không cần phải có bất kỳ kiến ​​thức lập trình nào để sử dụng Trình tạo trò chơi này. Trên hết, nó cung cấp giao diện người dùng kéo và thả đi kèm với các hành vi, mẫu và đối tượng trò chơi được xây dựng sẵn. Phần mềm phát triển trò chơi miễn phí này có cấu hình cao và cung cấp tích hợp với các thư viện của bên thứ ba. Để biết thêm thông tin về công cụ miễn phí này, bạn có thể kiểm tra liên kết này để tìm hiểu thêm về các tính năng của nó và quy trình thiết lập.

## Thiết lập dự án   {#SinSoning}
Trong phần này, chúng tôi sẽ tạo ra dự án của chúng tôi để xây dựng một trò chơi đua xe tải với một số chức năng cơ bản. Thực hiện theo điều này [liên kết][6] Nếu bạn muốn thiết lập trên máy cục bộ của mình hoặc bạn có thể sử dụng phiên bản trực tuyến bằng cách truy cập [link][14] này.
Vì vậy, bạn sẽ tìm thấy màn hình sau khi bạn nhấp vào trên Tạo một dự án mới và sau đó nhấp vào trò chơi trống rỗng.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Cách tạo một trò chơi trên đầu">}}

Bạn có thể thấy thanh menu ở phía bên trái của cửa sổ. Bây giờ, nhấp vào các cảnh của người Viking và sau đó nhấp đúp chuột vào Nhấp vào để thêm nút Cảnh. Sau đó, bạn sẽ hạ cánh trên màn hình trò chơi nơi bạn có thể tạo các đối tượng, hình nền và hành vi của trò chơi. Di chuyển về phía trước, nhấp vào trên Thêm Thêm một đối tượng mới được đặt trên bảng điều khiển bên phải và bạn sẽ thấy cửa sổ sau.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Hướng dẫn phát triển">}}


## Làm thế nào để chuẩn bị nền và đối tượng?   {#chuẩn bị}
Trong thanh tìm kiếm, hãy tìm đối tượng xe tải và nhấp đúp vào nó và nhấn vào Thêm vào trò chơi, một khi nó xuất hiện trong kết quả. Lặp lại bước này cho hai bánh xe và một đối tượng nền tảng. Bây giờ, nhấp chuột phải vào đối tượng Greenfloor và chỉnh sửa.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="Hướng dẫn phát triển trò chơi">}}


## Thêm Behviors vào đối tượng   {#ADD}
Tiếp theo, kéo và thả Greenfloor xuống màn hình trò chơi và điều chỉnh chiều cao và chiều rộng của nó theo mong muốn của bạn. Kéo đối tượng xe tải và thả nó trên màn hình trò chơi và sau đó các đối tượng bánh xe. Di chuyển về phía trước, nhấp chuột phải vào thân xe tải và nhấn Chỉnh sửa đối tượng Truckbody, nhấp vào hành vi, nhấp vào Thêm một hành vi vào đối tượng và nhấp vào động cơ vật lý 2.0 và bạn sẽ thấy cửa sổ sau.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Cách tạo một trò chơi trên đầu">}}

Trong cửa sổ này, bạn có thể sửa đổi các cấu hình như mật độ, chiều rộng và chiều cao. Bây giờ, hãy lặp lại quy trình tương tự cho đối tượng GreenFloor nhưng giữ cho loại tĩnh tĩnh và nhấn nút Áp dụng. Một lần nữa, chỉnh sửa đối tượng Truckbody, nhấn vào các điểm chỉnh sửa, đánh vào điểm EDD và sau đó chèn tên của bánh trước của bạn (tức là FW trong hướng dẫn này). Một điểm sẽ được tạo trên đối tượng, chỉ cần kéo điểm đó vào vị trí bánh xe. Lặp lại quá trình này cho bánh sau cũng và làm cho X và Y thành 0 như trong hình ảnh bên dưới.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="Hướng dẫn phát triển trò chơi">}}

Sau đó, chỉnh sửa cả hai đối tượng bánh xe và điều chỉnh điểm của chúng. Hơn nữa, một lần nữa chuyển đến tùy chọn chỉnh sửa của bánh xe, nhấn vào tab Hành vi của Cameron, chọn Động cơ Vật lý 2.0, và đặt các giá trị của loại, bán kính và mật độ như trong hình ảnh bên dưới.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="Phần mềm thiết kế trò chơi">}}

Bây giờ, hãy nhấp vào tab Cảnh mới của người Viking, nhấn vào Thêm các sự kiện mới, nhấn vào phần bổ sung, điều kiện, tìm kiếm ở phần đầu của cảnh, và nhấn vào OK OK. Sau đó, nhấn vào Thêm hành động Tìm kiếm tìm kiếm cho Trung tâm Camera Trung tâm X và đặt các cấu hình sau.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="Phần mềm phát triển trò chơi miễn phí">}}

Bây giờ, hãy sao chép hành động nhưng đảm bảo hành động được sao chép được đặt thành Thêm một hành động khác có tên là Thay đổi Camera Zoom, đặt nó thành 0,4 và kéo hành động này lên trên cùng. Thêm một hành động khác, hãy tìm kiếm các phần bổ sung bánh xe và đặt cấu hình cho cả hai bánh như dưới đây.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Hướng dẫn phát triển trò chơi">}}

Sau đó, thêm một điều kiện mới, tìm kiếm phím đã nhấn và đặt nó sang trái. Bây giờ, thêm hành động, chọn bánh xe đầu tiên, tìm kiếm vận tốc tuyến tính X, dấu hiệu sửa đổi để trừ phép và đặt giá trị 50. Lặp lại bước này cho phím phù hợp nhưng đảm bảo dấu hiệu sửa đổi thêm như hiển thị bên dưới.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="Hướng dẫn phát triển trò chơi">}}


## chạy trò chơi   {#run}
Một khi tất cả các bước được hoàn thành. Đã đến lúc chạy trò chơi bằng cách nhấn nút được đặt ở góc trên cùng bên trái. Nó sẽ ra mắt trò chơi vào cửa sổ mới.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Cách tạo một trò chơi trên đầu">}}


## Kết luận   {#conclusion}
Đây là kết thúc của bài đăng trên blog này và bạn chắc chắn đã biết rằng làm thế nào để làm một trò chơi trên đầu. Tuy nhiên, có rất nhiều phần mềm thiết kế trò chơi  **miễn phí **  có sẵn trên thị trường vì ngành này đang trở nên phổ biến và nhu cầu. Có một số lý do đằng sau nó như phần mềm nguồn mở có thể mở rộng, có thể định cấu hình, tiết kiệm chi phí và dễ bảo trì. Ngoài ra, nhu cầu về các nhà xây dựng trò chơi đa nền tảng đang tăng lên khi các nhà phát triển cảm thấy thoải mái khi xây dựng một trò chơi chạy trên tất cả các nền tảng phổ biến như Android, iOS, Web và Desktop. Mặt khác, sự ra đời của đại dịch đã thay đổi cuộc sống của mọi người và bây giờ họ thích ở trong nhà. Vì vậy, mọi người có xu hướng chơi trò chơi video trong thời gian giải trí của họ.
Cuối cùng, [Containererize.com][15] tất cả đã được thiết lập để tăng cường cơ sở hướng dẫn của nó với một số hướng dẫn phát triển trò chơi thú vị hơn **. Vui lòng duy trì kết nối với danh mục [Phần mềm phát triển trò chơi][16] này để cập nhật thường xuyên.

## Khám phá
  * **[GDevelop][7]**
  * **[Godot][17]**
  * **[Siêu năng lực][18]**
  * **[Người tạo Cocos][19]**
  * **[Panda3d][20]**
  * **[PlayCanvas][21]**
  * **[Bắt đầu với sự phát triển trò chơi bằng Siêu năng lực][2]**
  * **[Hướng dẫn phát triển trò chơi | Chuyển động của người chơi trong GDevelop][3]**
  * **[Hướng dẫn phát triển trò chơi HTML5 cho các lập trình viên trò chơi video][4]**
  * **[Làm thế nào ngành công nghiệp trò chơi toàn cầu tận dụng phần mềm nguồn mở][5]**
  * **[Hướng dẫn phát triển cho người mới bắt đầu phát triển trò chơi][6]**
  *[ **Phần mềm phát triển trò chơi miễn phí hàng đầu trong năm 2021 ** ][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
