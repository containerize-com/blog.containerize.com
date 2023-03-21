---
title: "Hướng dẫn từng bước để thiết lập nguồn mở Jitsi Meet" 
seoTitle: "Hướng dẫn từng bước để thiết lập nguồn mở Jitsi Meet" 
description: "Tìm hiểu cách thiết lập Jitsi Meet. Đây là một phần mềm hội nghị video nguồn mở được thiết kế để đáp ứng nhu cầu giao tiếp từ xa và cung cấp các tính năng mạnh mẽ" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi gặp gỡ mang đến những người từ xa với nhau để tiến hành các cuộc họp hiệu quả. Hãy tìm hiểu cách thiết lập phần mềm hội nghị video này và khám phá các tính năng của nó" 
url: /vi/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi gặp gỡ mang đến những người từ xa với nhau để tiến hành các cuộc họp hiệu quả. Hãy cùng học cách thiết lập phần mềm hội nghị video này và khám phá các tính năng của nó

{{< figure align=center src="images/jitsi-bannerF.png" alt="Phần mềm hội nghị video">}}


## Tổng quan
Gần đây chúng tôi đã xuất bản một [bài đăng trên blog][1] nói về tác động của [phần mềm hội nghị video][2] đối với khu vực công ty. Tuy nhiên, trong bài viết này, chúng tôi sẽ đề cập đến các điểm sau.
  * [Giới thiệu ngắn gọn về Meet Jitsi][3]
  * [Làm thế nào để thiết lập Jitsi gặp?][4]
  * [Jitsi Gặp gỡ các tính năng Thăm dò][5]
  * [Kết luận][6]

## Giới thiệu ngắn gọn về Jitsi Meet   {#Intro}
[JITSI Meet][7] là một phần mềm cộng tác video nguồn mở, an toàn và có thể mở rộng hoàn toàn miễn phí. Nó cung cấp một số tính năng phổ biến như hội nghị video đa nhóm với mã hóa đầy đủ, hỗ trợ cho etherpad và ghi video/âm thanh. Phần mềm tương thích WEBRTC này cho phép bạn mời nhiều người dùng như bạn muốn vào một cuộc họp video.
Sự gia tăng của các cuộc họp ảo bắt đầu trong thời gian gần đây và mọi người tin rằng giao tiếp thông qua các cuộc gọi video/âm thanh hiệu quả và hợp tác hơn. Trên hết, danh mục phần mềm này không chỉ hoạt động trên máy tính xách tay/máy tính để bàn mà còn cho phép người tham gia tham dự các cuộc họp video được bảo mật trực tiếp thông qua điện thoại di động của họ.

## Làm thế nào để thiết lập Jitsi gặp nhau?   {#cài đặt}
Trong phần này, chúng tôi sẽ tham gia vào quá trình cài đặt của Jitsi Meet. Đầu tiên, hãy chắc chắn rằng bạn đã cài đặt các điều kiện tiên quyết sau.
  * [Docker][8]
Khi Docker được cài đặt, hãy tải xuống tệp zip của mã nguồn từ [liên kết][9] này.
Mở thiết bị đầu cuối và chạy lệnh sau
`CD Docker-Jitsi-Treet`
Sau đó, chạy lệnh sau để tạo `.env`
`CP env.example .Env`
Bây giờ, chạy lệnh sau để tạo các thư mục cần thiết.
`mkdir -p ~/.jitsi-meet-cfg/{Web/letSencrypt, bảng điểm, prosody/config, prosody/prosody-plugins-custom, jicofo, jvb, jigasi, jibri}`
Cuối cùng, chạy lệnh này để quay hình ảnh Docker và truy cập ứng dụng tại URL này trong trình duyệt.
`Docker -Compose Up -d`

## jitsi đáp ứng các tính năng khám phá   {#features}
Phần mềm trò chuyện video miễn phí này cung cấp nhiều tính năng phong phú. Đây là trang chủ sẽ được hiển thị đầu tiên.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="Trao đổi video">}}

Nhập chú thích của cuộc họp và nhấn vào Go Go và bạn sẽ đến cửa sổ luồng video sau.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="phần mềm mã nguồn mở">}}

Bạn có thể mời mọi người vào cuộc họp bằng cách chia sẻ liên kết được hiển thị trong cửa sổ bật lên. Hơn nữa, bạn có thể nhúng luồng video ở bất cứ đâu bằng cách lấy mã.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="phần mềm mã nguồn mở">}}

Nó cung cấp cho bạn tùy chọn để chia sẻ màn hình của bạn với những người tham gia khác.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Trò chuyện video">}}

Từ góc trên bên phải, bạn có thể thấy các chi tiết của kết nối video của mình.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Trò chuyện video miễn phí">}}

Jitsi Meet cung cấp trò chuyện tích hợp với biểu tượng cảm xúc.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Phần mềm cuộc họp video">}}


## Kết luận   {#con}
Trong bài viết này, chúng tôi đã trải qua một phần mềm truyền thông từ xa tuyệt đẹp và quá trình cài đặt của nó. Hơn nữa, đây là thời điểm cao để lựa chọn các giải pháp tốt nhất để đồng bộ hóa nhu cầu kinh doanh với các công nghệ phát triển. Cuối cùng, [containerize.com][10] đã làm việc để mở rộng danh sách phần mềm hội nghị video. Do đó, vui lòng duy trì kết nối với danh mục [Phần mềm hội nghị video][2] để cập nhật thường xuyên.

## trang sản phẩm có liên quan
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Jitsi gặp][7]
  * [BigBluebutton][11]
  * [OpenVidu][12]
  * [Phần tử][13]
  * [Dây][14]

  
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
