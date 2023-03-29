---
title: "Cách phát triển một trò chơi video bằng cách sử dụng các siêu năng lực mở rộng" 
seoTitle: "Cách phát triển một trò chơi video bằng cách sử dụng các siêu năng lực mở rộng" 
description: "Làm thế nào để phát triển một trò chơi video? Siêu năng lực là một phát triển trò chơi HTML5 nguồn mở. Đó là nền tảng chéo và cho phép người dùng xây dựng các trò chơi 2D & 3D hoạt hình." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "Phần mềm thiết kế trò chơi video miễn phí để phát triển trò chơi video với chế độ ngoại tuyến. Tự lưu trữ nó, tạo 2D & amp hoạt hình; Trò chơi 3D với hiệu ứng âm thanh và phông chữ." 
url: /vi/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## Phần mềm thiết kế trò chơi video miễn phí để phát triển trò chơi video với chế độ ngoại tuyến. Tự lưu trữ nó, tạo các trò chơi 2D & 3D hoạt hình với hiệu ứng âm thanh và phông chữ.

{{< figure align=center src="images/superpowers.png" alt="cách phát triển một trò chơi video">}}


## Tổng quan
Trong quá khứ, một số bài viết đã được xuất bản trên danh mục [Phần mềm phát triển trò chơi][1] bao gồm cách ngành công nghiệp trò chơi toàn cầu tận dụng phần mềm nguồn mở và hướng dẫn GDevelop để bắt đầu phát triển trò chơi. Phát triển trò chơi video được lan truyền nhiều hơn trên toàn cầu với nhu cầu ngày càng tăng đối với các trò chơi giải trí. Tuy nhiên, nó liên quan đến ý tưởng, phát triển thiết kế, thử nghiệm liên tục, phát hành và phản hồi. Nói cách khác, nó liên quan đến các nhà thiết kế, kiến ​​trúc sư phần mềm, lập trình viên, người thử nghiệm và tài nguyên hỗ trợ. Ngoài ra, có nhiều loại trò chơi như trò chơi hành động, trò chơi giải đố, trò chơi đua xe, trò chơi nhận thức, và một số trò chơi khác.
Do đó, một hướng dẫn phát triển trò chơi tốt là rất cần thiết để bắt đầu bắt đầu với bất kỳ trình tạo trò chơi 3D nào. Cộng đồng nguồn mở đã phát triển nhiều phần mềm phát triển trò chơi cung cấp các tính năng và tiện ích cấp doanh nghiệp để phát triển các trò chơi 3D & 2D. Hướng dẫn phát triển trò chơi HTML5 này sẽ khám phá cách phát triển một trò chơi video bằng phần mềm phát triển trò chơi video miễn phí  **Superpowers**  bằng cách đề cập đến các điểm sau.
*  **[Siêu năng lực là gì][2]**  
*  **[Làm thế nào để thiết lập trên localhost?][3]**  
*  **[Bảng điều khiển của siêu năng lực?][4]**  
*  **[Kết luận][5]**  

## Siêu năng lực là gì {#intro}

[Superpowers][6] là một phần mềm nguồn mở để phát triển trò chơi video. Nó là linh hoạt, mạnh mẽ và mở rộng. Tuy nhiên, nó cung cấp hỗ trợ cho hoạt hình, mô hình 3D và một loạt các ví dụ trò chơi. Hơn nữa, nó cũng đi kèm với một phiên bản ngoại tuyến nơi người dùng có thể xây dựng các trò chơi mà không cần kết nối internet. Xuất bản bất kỳ dự án nào là dễ dàng đáng kinh ngạc và tất cả những gì xảy ra chỉ với một cú nhấp chuột. Có một bảng điều khiển trực quan cho người dùng nơi người dùng có thể điều hướng qua các yếu tố khác nhau một cách dễ dàng. Trên hết, có một báo cáo lỗi trực tiếp trong đó nó hiển thị lỗi cho nhà phát triển để tránh mọi sự mơ hồ hoặc lỗi. Siêu năng lực rất dễ thiết lập và yêu cầu các yêu cầu dễ dàng để lưu trữ trên các máy chủ hơn nữa, Trình tạo trò chơi 3D này được viết bằng TypeScript và đi kèm với tất cả các tài liệu liên quan đến phát triển và triển khai. Do đó, tất cả các mã nguồn có sẵn tại [GitHub][7].
Siêu năng lực cung cấp các điểm chính sau:
  * Báo cáo lỗi trực tiếp
  * Đa ngôn ngữ
  * Bệnh viện chéo
  * Phông chữ phong phú & hiệu ứng âm thanh
  * Tự lưu trữ

## Làm thế nào để thiết lập trên localhost? {#setup}

Nếu bạn vẫn đang tự hỏi làm thế nào để phát triển một trò chơi video thì trong phần này của bài viết, chúng ta sẽ học cách thiết lập các siêu cường trên localhost. Trong phần này, hướng dẫn phát triển trò chơi**này sẽ giải thích về quá trình thiết lập môi trường phát triển trò chơi.
Trước hết, hãy đảm bảo bạn đã cài đặt các điều kiện tiên quyết sau khi bắt đầu phát triển trò chơi video:
  * Git
  * NPM
  * Node.js
Các yêu cầu nêu trên rất dễ dàng và rất được biết đến vì vậy nó sẽ không phải là một nhiệm vụ khó khăn cho người mới bắt đầu. Khi các yêu cầu trên được cài đặt, hãy mở thiết bị đầu cuối và chạy lệnh sau để sao chép mã nguồn:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
Sau một bản sao thành công, hãy vào thư mục đã tải xuống bằng cách chạy lệnh sau:
```
cd superpowers/core
```
Bây giờ, hãy chạy lệnh sau để sao chép hệ thống trò chơi siêu năng lực:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
Sau đó, chạy lệnh sau để tạo bản dựng:
```
npm run build
```
Khi xây dựng thành công, hãy khởi động máy chủ bằng cách chạy lệnh sau:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="Hướng dẫn phát triển trò chơi HTML5">}}

Bây giờ hãy mở trình duyệt và truy cập ứng dụng tại liên kết sau:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## Bảng điều khiển của siêu năng lực? {#features}

Khi nhấn URL trên, bạn sẽ thấy trang chủ sau. Có các tùy chọn để sửa đổi hoặc tạo một dự án nền tảng 2D hoặc 2D mới.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="Phát triển trò chơi video">}}

Tiến về phía trước về câu hỏi làm thế nào để phát triển một trò chơi video, bạn sẽ thấy màn hình sau sau khi tạo một nền tảng 2D. Bạn có thể thấy các tùy chọn ở phía bên trái của cửa sổ, chẳng hạn như tạo cảnh, đặt gạch, bản đồ trò chơi và người chơi. Có một tùy chọn mã hóa trực tiếp nơi bạn có thể mã hóa hành vi của người dùng.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="Phát triển trò chơi video">}}

Hơn nữa, có một thanh cài đặt ở phía bên trái, nơi bạn có thể đặt hình ảnh động, kết xuất, tải lên hoặc tải xuống hình ảnh. Ở phía bên trái, có một tùy chọn để thêm nhiều tài sản vào dự án của bạn như trong hình ảnh dưới đây. Nó bao gồm mô hình mô hình 3D, tùy chọn FINT nếu muốn sửa đổi phông chữ. Ngoài ra, người dùng có thể thêm các cảnh, tập lệnh, shader và sprites. Hơn nữa, Trình tạo trò chơi 3D nguồn mở này cũng cho phép bạn thêm các hiệu ứng âm thanh khác nhau vào các trò chơi để thu hút các game thủ với các hiệu ứng âm thanh trò chơi tốt nhất có thể. Cuối cùng nhưng không kém phần quan trọng, nó cũng cho phép bạn thêm bản đồ gạch và bộ gạch.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="Thiết kế trò chơi video">}}

Tương tự như vậy, sau khi trải qua bài viết chơi game này, bạn có thể khám phá nó thêm và sử dụng tất cả các tính năng. Hơn nữa, bạn sẽ có thể hiểu cách tiếp tục bằng cách sử dụng SuperPowers Video Game Builder. Có hỗ trợ trực tuyến có sẵn cho phần mềm phát triển trò chơi này.

##  **Phần kết luận**  {#Conclusion}

Điều này mang lại kết thúc cho hướng dẫn phát triển trò chơi HTML5 này. Hy vọng, bài đăng trên blog này sẽ giúp bạn nếu bạn muốn bắt đầu phát triển trò chơi video. Chúng tôi đã khám phá những gì siêu năng lực, cách phát triển một trò chơi video, đây là một trình tạo trò chơi 3D nguồn mở và chúng tôi cũng đã trải qua quy trình cài đặt của nó trên localhost. Có nhiều ứng dụng thiết kế trò chơi video nguồn mở****cho phép người dùng xây dựng trò chơi từ đầu. Các lập trình viên trò chơi video sử dụng các nguyên tắc thiết kế trò chơi thiết yếu để xây dựng các trò chơi chất lượng cao. Bạn sẽ tìm hiểu thêm về việc xây dựng các trò chơi 2D & 3D trong các bài viết sắp tới của chúng tôi tại [Blog.containerize.com][8]. Có một nguồn mở khác, các nhà xây dựng trò chơi 3D tự lưu trữ và các bài viết có liên quan được đề cập trong phần khám phá trên mạng bên dưới.
Cuối cùng, containerize.com liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với danh mục [phát triển trò chơi video][9][][][10] để cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][11], [LinkedIn][12] và [Twitter][13].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [][14][GDevelop][14]
  * [][14][Godot][15]
  * [][14][Siêu năng lực][6]
  * [][14][Người tạo Cocos][16]
  * [][14][Panda3d][17]
*  **[Bắt đầu với sự phát triển trò chơi bằng cách sử dụng siêu năng lực][18]**  
*  **[Hướng dẫn phát triển trò chơi | Chuyển động của người chơi trong GDevelop][19]**  
* [  **Cách tạo một trò chơi trên đầu bằng cách sử dụng GDevelop nguồn mở**  ][20]
*  **[Làm thế nào ngành công nghiệp trò chơi toàn cầu tận dụng phần mềm nguồn mở][21]**  
*  **[Hướng dẫn phát triển cho người mới bắt đầu phát triển trò chơi][22]**  
* [  **Phần mềm phát triển trò chơi miễn phí hàng đầu trong năm 2021**  ][23]



 [1]: https://blog.containerize.com/category/game-development-software/
 [2]: #intro
 [3]: #setup
 [4]: #features
 [5]: #Conclusion
 [6]: https://products.containerize.com/game-development-software/superpowers/
 [7]: https://github.com/superpowers/superpowers-core
 [8]: https://blog.containerize.com/
 [9]: https://products.containerize.com/game-development-software/
 [10]: https://products.containerize.com/business-intelligence/
 [11]: https://web.facebook.com/containerize
 [12]: https://www.linkedin.com/company/containerize/
 [13]: https://twitter.com/containerize_co
 [14]: https://products.containerize.com/game-development-software/gdevelop/
 [15]: https://products.containerize.com/game-development-software/godot/
 [16]: https://products.containerize.com/game-development-software/cocos-creator/
 [17]: https://products.containerize.com/game-development-software/panda3d/
 [18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
 [19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
 [20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
 [21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
 [22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
 [23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
