---
title: "Hướng dẫn JHipster | Bắt đầu với phần mềm rad" 
seoTitle: "Hướng dẫn JHipster | Bắt đầu với phần mềm rad" 
description: "Một hướng dẫn JHipster từng bước cho người mới bắt đầu bắt đầu. Theo dõi bài viết này để thiết lập ứng dụng đầu tiên với phần mềm JHipster RAD nguồn mở." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Hãy cùng đi sâu vào một trình tạo mã nguồn. Nó cung cấp các tính năng vượt trội để tạo các ứng dụng đáp ứng dựa trên web với API REST được ghi chép lại." 
url: /vi/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## Hãy để đi sâu vào một trình tạo mã nguồn. Nó cung cấp các tính năng vượt trội để tạo các ứng dụng đáp ứng dựa trên web với API REST được ghi chép lại.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Hướng dẫn JHipster">}}


## Tổng quan:
Gần đây chúng tôi đã xuất bản một [bài đăng trên blog][1] về tầm quan trọng của [phần mềm rad][2] trong thời gian hiện tại. Công nghệ đang phát triển với tốc độ rất cao. Yêu cầu và nhu cầu kinh doanh đang thay đổi từng ngày. Có một cuộc đua để phát triển các giải pháp trong một khoảng thời gian ngắn hơn. Mặt khác, mọi doanh nghiệp đều muốn nắm bắt thị trường bằng cách ra mắt sản phẩm càng sớm càng tốt. Do đó, cộng đồng nguồn mở đã phát triển nhiều phần mềm dựa trên sự phát triển phần mềm  **Agile**  . Những phần mềm phát triển ứng dụng nhanh chóng miễn phí này tạo điều kiện cho người dùng có khả năng phát triển tạo mẫu nhanh. Nó cho phép bạn xây dựng và khởi động bản phát hành ban đầu của sản phẩm và do đó, bạn có thể phát triển các bản phát hành tiếp theo với đầu vào phản hồi của người dùng. Ngoài ra, các phần mềm này được thiết kế để hấp thụ bất kỳ thay đổi nào ở bất kỳ giai đoạn nào của dự án.
Trong khi đó, các nhóm phát triển phần mềm tăng tốc quá trình phát triển của họ và đảm bảo giao hàng sớm hơn. Trên thực tế, nó hiệu quả về chi phí, tiết kiệm thời gian và mang lại sự hài lòng cho các nhà phát triển và người dùng. Phát triển ứng dụng nhanh là đủ linh hoạt để bạn không cần phải có kế hoạch và thời hạn nghiêm ngặt. Bạn xây dựng những gì người tiêu dùng cuối cùng của bạn cần. Trong hướng dẫn JHipster này, chúng tôi sẽ xem xét cách thiết lập [JHipster][3] và tạo ứng dụng đầu tiên của chúng tôi bằng nó bằng cách bao gồm các điểm sau:
  * [JHipster là gì và cách cài đặt nó?][4]
  * [Làm thế nào để tạo và chạy một ứng dụng cơ bản?][5]
  * [Khám phá bảng điều khiển quản trị của ứng dụng được tạo][6]
  * [Kết luận][7]

## Jhipster là gì và làm thế nào để cài đặt nó? {#install}

[JHipster][3] là một phần mềm RAD nguồn mở được sử dụng để tạo các ứng dụng web doanh nghiệp. Trình tạo ứng dụng nguồn mở này cung cấp khung khởi động Spring dựa trên Java trên các công nghệ phía trước và đầu tiên phổ biến như Angular, Vue.js và React.js. Trình tạo mã nguồn này bao gồm kiến ​​trúc microservice mạnh mẽ với nhiều cơ chế xác thực người dùng như OAuth.20, JWTS và xác thực phiên HTTP. Hơn nữa, nó cung cấp một phiên bản trực tuyến nơi người dùng có thể khám phá tất cả các tính năng. Công cụ tạo mẫu nguồn mở  **này**  được viết bằng JavaScript với một ít đầu vào của TypeScript. Do đó, tài liệu toàn diện có sẵn liên quan đến phát triển và triển khai. Các nhà phát triển có thể tìm thấy mã nguồn tại [GitHub][8] repo. Có sự hỗ trợ hoàn chỉnh để chạy các thử nghiệm bằng cách sử dụng các khung thử nghiệm phổ biến như Gatling và Protractor. Hơn nữa, nó là mạnh mẽ, an toàn, đa nền tảng và hỗ trợ tích hợp của bên thứ ba.
Trong hướng dẫn  **jhipster này,**  chúng tôi sẽ khám phá jhipster về thiết lập và sử dụng của nó. [JHipster][3] là miễn phí và được xây dựng trên đầu mô hình phát triển ứng dụng nhanh. Nó cung cấp một hệ sinh thái thân thiện với nhà phát triển khá hứa hẹn và đưa ra các công cụ phát triển ứng dụng web nhanh chóng mạnh mẽ.
Hãy để xem làm thế nào chúng ta có thể cài đặt Trình tạo ứng dụng nguồn mở này. Đầu tiên, chúng tôi sẽ cài đặt các điều kiện tiên quyết sau đây.
  * [Java 11 JDK][9]
  * [Node.js 10.20.1+][10]
Sau khi cài đặt hoàn tất, hãy mở thiết bị đầu cuối và chạy lệnh sau.
`NPM install -g Generator -jhipster`
Lệnh này có thể mất vài phút và sau khi hoàn thành thành công, JHipster sẽ được cài đặt trên máy của bạn.
Bạn có thể kiểm tra lệnh sau để kiểm tra cài đặt.
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Cài đặt jhipster">}}


## Làm thế nào để tạo và chạy một ứng dụng cơ bản? {#run}

Trong phần của hướng dẫn  **jhipster**  này, chúng tôi sẽ tìm hiểu cách tạo ứng dụng đầu tiên của mình bằng phần mềm RAD nguồn mở này.
Quay trở lại cửa sổ Terminal, chạy các lệnh sau:
`MKDIR 1STAPPCD 1STAPP/`
Sau khi thực hiện các thư mục, hãy chạy lệnh sau đây được đề cập dưới đây:
`jhipster`
Lệnh này sẽ bắt đầu quá trình. Trả lời tất cả các câu hỏi liên quan đến các tùy chọn công nghệ ứng dụng như công nghệ đầu tiên và đầu cuối, cơ sở dữ liệu, khung thử nghiệm và nhiều hơn nữa như bạn có thể thấy trong hình ảnh dưới đây.

{{< figure align=center src="images/qst-1024x474.png" alt="Hướng dẫn JHipster">}}

Sau khi trả lời tất cả các câu hỏi, trình tạo mã nguồn này sẽ tạo các tệp mã vào thư mục của bạn.
Bây giờ, hãy chạy ứng dụng được tạo bằng lệnh sau:
`./MVNW`
Lưu ý: Lệnh này sẽ hoạt động nếu bạn đã chọn Maven làm tự động hóa bản dựng cho phần phụ trợ.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Hướng dẫn JHipster">}}

Truy cập ứng dụng của bạn vào trình duyệt tại http: // localhost: 8080/.

## Khám phá bảng điều khiển quản trị của ứng dụng được tạo {#dashboard}

Khi bạn nhấn http: // localhost: 8080/trong trình duyệt của bạn, bạn sẽ thấy màn hình sau.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="Trình tạo mã">}}

Bạn có thể sử dụng thông tin đăng nhập được đề cập để đăng nhập làm quản trị viên. JHipster cung cấp hai vai trò người dùng mặc định. Sau khi đăng nhập thành công, bạn sẽ có các điều khoản sau đây được hiển thị trong hình ảnh.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Phần mềm RAD nguồn mở">}}

JHipster cung cấp quản lý người dùng hoàn chỉnh nơi bạn có thể quản lý người dùng như bạn có thể thấy trong hình ảnh bên dưới.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Quản lý người dùng JHipster">}}

Tùy chọn sức khỏe cung cấp cho bạn thông tin về không gian và cơ sở dữ liệu đĩa của bạn.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Hướng dẫn JHipster">}}

Có một hệ thống ghi nhật ký hoàn chỉnh có sẵn trong bảng điều khiển quản trị viên JHipster.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Phần mềm RAD nguồn mở">}}

Bảng điều khiển quản trị của Trình tạo ứng dụng nguồn mở này cũng cung cấp các điểm cuối còn lại của các chức năng tích hợp và tùy chỉnh.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Nguồn mở jhipster">}}


## Phần kết luận {#con}

Đây là kết thúc của hướng dẫn JHipster này. Có nhiều nền tảng RAD nguồn mở cung cấp  **Phát triển ứng dụng tức thì** . Có một cộng đồng rất sôi động luôn sống động để đáp ứng các vấn đề và giải pháp của họ. Phương pháp rad đang đạt được danh tiếng do nhiều yếu tố. Thứ nhất, không cần phải hiểu đầy đủ về các yêu cầu. Thứ hai, người tiêu dùng cuối cùng tham gia trong suốt vòng đời phát triển phần mềm. Thứ ba, yếu tố rủi ro là rất ít vì tất cả các bên liên quan đều ở trên tàu. Tuy nhiên, phần mềm RAD có thể thích ứng, thân thiện với nhà phát triển và linh hoạt với các thay đổi. Nó tiết kiệm rất nhiều thời gian khi các trình tạo mã tiết kiệm thời gian lớn để viết lại các tập lệnh lặp đi lặp lại. Điều này **[jhipster][3] Bài viết hướng dẫn**  đã nêu bật một số hiểu biết quan trọng. Nó nhẹ và dễ dàng để thiết lập với một vài lệnh shell đơn giản.
Vui lòng cài đặt Trình tạo ứng dụng nguồn mở này ngay hôm nay nếu bạn đang tìm kiếm một nền tảng phát triển ứng dụng nhanh nguồn mở nguồn mở. Cuối cùng, [containerize.com][11] đã được thiết lập để tăng cường cơ sở hướng dẫn của nó với một số hướng dẫn thú vị hơn. Vui lòng duy trì kết nối với danh mục [phát triển ứng dụng nhanh][2] này để cập nhật thường xuyên.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Nền tảng Cuba][12]
  * [QuickApp][13]
  * [JHipster][3]
  * [li3][14]
  * [Apache ISIS][15]
  * [Top 5 Phần mềm phát triển ứng dụng nhanh miễn phí vào năm 2021][16]
  * [Phần mềm phát triển ứng dụng nhanh cho doanh nghiệp | Rad][17]
  * [Những điều cần xem xét trước khi chọn phần mềm nguồn mở vào năm 2021][18]



 [1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
 [2]: https://products.containerize.com/rad
 [3]: https://products.containerize.com/rad/jhipster
 [4]: #install
 [5]: #run
 [6]: #dashboard
 [7]: #con
 [8]: https://github.com/jhipster/generator-jhipster
 [9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
 [10]: https://nodejs.org/en/
 [11]: https://www.containerize.com/
 [12]: https://products.containerize.com/rad/cuba
 [13]: https://products.containerize.com/rad/quickapp
 [14]: https://products.containerize.com/rad/li3
 [15]: https://products.containerize.com/rad/apache-isis
 [16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
 [17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
 [18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
