---
title: "Cách thực hiện theo dõi ứng dụng web với Statping" 
seoTitle: "Cách thực hiện theo dõi ứng dụng web với Statping" 
description: "Statping là một trong những công cụ giám sát trang web tốt nhất cho phép bạn giám sát tất cả các dịch vụ. Kết xuất trang trạng thái đẹp cho dịch vụ trưng bày thời gian hoạt động." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Tự động giám sát trang web của bạn, ứng dụng web, API với các công cụ giám sát miễn phí và giới thiệu dịch vụ thời gian hoạt động với hệ thống trang trạng thái nguồn mở." 
url: /vi/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Tự động giám sát trang web của bạn, ứng dụng web, API với các công cụ giám sát miễn phí và giới thiệu dịch vụ thời gian hoạt động với hệ thống trang trạng thái nguồn mở.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Giám sát ứng dụng web">}}

Statping là một phần mềm trang trạng thái nguồn mở **và một trong những công cụ giám sát trang web  **tốt nhất**  . Nó cũng sử dụng để giám sát các dịch vụ như dịch vụ HTTP, TCP, UDP, ICMP và GRPC. Statping tự động tìm nạp các dịch vụ, giám sát chúng và hiển thị trang trạng thái đẹp. Đó là đa nền tảng và bạn có thể cài đặt nó trên các hệ điều hành LIUNX, MAC và Windows. Hơn nữa, nó cho phép sử dụng hệ thống cơ sở dữ liệu MySQL, Postgres hoặc SQLite để lưu trữ thông tin. Hơn nữa, nó đi kèm với các ứng dụng di động cho các thiết bị iPhone và Android.
Hãy cùng xem xét các tính năng cốt lõi của việc thống kê.
  ***Giám sát dịch vụ**  - Statping cho phép bạn dễ dàng theo dõi tất cả các dịch vụ HTTP, TCP, UDP, GRPC và ICMP của bạn.
  ***Thông báo** -Statping hỗ trợ hầu hết các ứng dụng của bên thứ ba chính để nhận thông báo.
  ***Ứng dụng di động**  - Sử dụng ứng dụng miễn phí cho các thiết bị iPhone & Android và quản lý mọi thứ khi đang di chuyển.
  ***OAuth Authenticatio**  N - Hỗ trợ xác thực OAuth cho các dịch vụ phổ biến như GitHub, Google, Slack và nhà cung cấp OpenID tùy chỉnh. Sử dụng tính năng này và tăng bảo mật.
Chúng tôi sẽ đề cập đến các chủ đề sau đây trong hướng dẫn này.
  * [Cài đặt trên Linux][1]
  * [Cấu hình dịch vụ Systemd][2]
  * [Tạo dịch vụ để giám sát][3]
  * [Kết luận][4]

## Cài đặt trên Linux   {#installing}
Chạy lệnh bên dưới để cài đặt thống kê.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Cấu hình dịch vụ Systemd   {#configure}
Thiết lập dịch vụ SystemD là một cách tuyệt vời để đảm bảo rằng máy chủ Statping của bạn có thể tự động khởi động lại khi cần thiết. Để tạo một dịch vụ SystemD, hãy làm theo các bước dưới đây.
  * Đầu tiên, chạy lệnh bên dưới để tạo tệp mới.
```
sudo nano /etc/systemd/system/statping.service
```
  * Sao chép mã dưới đây và dán vào đó.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Cuối cùng, sử dụng các lệnh bên dưới để bật và khởi động Dịch vụ SystemD.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Tạo dịch vụ để giám sát   {#Create}
  * Mở trình duyệt của bạn, nhập URL để đăng nhập vào cài đặt Statping của bạn.
  * Nhấp vào liên kết Dịch vụ trong điều hướng hàng đầu. Nó sẽ hiển thị cho bạn trang dịch vụ trông giống như bên dưới.

{{< figure align=center src="images/statping-dashboard.png" alt="Danh sách giám sát dịch vụ web">}}

  * Nhấp vào nút Tạo để thêm dịch vụ mới để giám sát. Điền vào các trường cần thiết như tên dịch vụ, loại dịch vụ, kiểm tra khoảng thời gian, điểm cuối dịch vụ (URL), v.v.

## Kết luận   {#conclusion}
Chúng tôi đã tìm hiểu về việc thống kê, cách cài đặt nó trên Linux và cách tạo dịch vụ SystemD trong hướng dẫn này. Hơn nữa, chúng tôi đã tạo ra một dịch vụ mới để giám sát và giới thiệu cho bạn về các tính năng khác nhau. Chúng tôi hy vọng rằng hướng dẫn này sẽ hỗ trợ bạn bắt đầu sử dụng Statping để thực hiện **Giám sát dịch vụ web  **và **  Giám sát ứng dụng web** .
Cuối cùng, [**containerize.com **][5] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với danh mục [ **Trạng thái**  ][6] cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  *[**Phần mềm trang trạng thái nguồn mở top 5 cho năm 2020** ][7]
  *[**Statping** ][8]
  *[**Bộ đệm** ][9]
  *[**Giám sát** ][10]
  *[**Staytus** ][11]
  *[**Upptime** ][12]
  *[**trạng thái** ][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
