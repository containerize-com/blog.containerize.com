---
title: "Cách tự động hóa giám sát ứng dụng web trong bộ đệm" 
seoTitle: "Cách tự động hóa giám sát ứng dụng web trong bộ đệm" 
description: "Bộ đệm giúp giám sát tất cả các dịch vụ của bạn và thông báo ngay cho người đăng ký. Bài viết này là về việc tích hợp plugin của bên thứ ba để tự động hóa giám sát." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "Trang trạng thái bộ đệm cho phép các doanh nghiệp nhận được thông báo tức thì về thời gian ngừng hoạt động của dịch vụ. Chúng tôi sẽ học cách tự động hóa giám sát ứng dụng web trong bộ đệm." 
url: /vi/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Trang trạng thái bộ đệm cho phép các doanh nghiệp nhận được thông báo tức thì về thời gian ngừng hoạt động của dịch vụ. Chúng tôi sẽ học cách tự động hóa giám sát ứng dụng web trong bộ đệm.

{{< figure align=center src="images/cachet-monitor.png" alt="Giám sát ứng dụng web">}}

Giám sát các ứng dụng và dịch vụ là một phần rất quan trọng trong kinh doanh trực tuyến. Trang web của bạn chạy 24x7 và bạn có thể hiểu sai bất cứ lúc nào. Bạn không thể biết một trong hai trang web đang hoạt động hoặc không cho đến khi bạn truy cập nó. Hơn nữa, khách hàng sẽ không có thông tin về vấn đề này. Họ có thể liên hệ với nhóm hỗ trợ của bạn cho thời gian ngừng hoạt động. Hơn nữa, điều này có thể dẫn đến việc khách hàng của bạn trở nên thất vọng. Tuy nhiên, bạn có thể giảm thời gian ngừng hoạt động bằng cách định cấu hình hệ thống trang trạng thái. Hệ thống trang trạng thái sẽ giám sát tất cả các dịch vụ của bạn suốt ngày đêm và gửi thông báo cho nhóm và khách hàng của bạn ngay lập tức. Điều này sẽ cho phép bạn thực hiện các bước nhanh chóng để khắc phục sự cố và khách hàng sẽ tiếp tục cập nhật về tiến trình. Trong bài đăng trên blog này, bạn sẽ tìm hiểu cách tích hợp thư viện của bên thứ ba với **bộ đệm**để**tự động giám sát** .
  * [Yêu cầu][1]
  * [Plugin giám sát thiết lập][2]
  * [Tạo dịch vụ Linux][3]
  * [Kết luận][4]

## Yêu cầu {#Yêu cầu}

  * Cài đặt phiên bản mới nhất của bộ đệm.
  * Làm quen với các dịch vụ Linux.

## Cài đặt plugin giám sát {#Plugin}

Sau đây là các bước để cài đặt và định cấu hình plugin để theo dõi trên Ubuntu.
  * Tải xuống nhị phân từ [trang phát hành][5].
  * Đổi tên tệp thành Bộ điều chỉnh bộ đệm.
  * Làm cho tệp thực thi với lệnh.
```
sudo chmod +x cachet-monitor
```
  * Đặt thực thi vào một thư mục đường dẫn, vì vậy bạn có thể truy cập trực tiếp qua thiết bị đầu cuối. Vì vậy, tôi khuyên bạn nên di chuyển theo **/usr/local/bin** .
  * Tạo tệp config.json bằng cách chạy lệnh sau.
```
sudo nano config.json
```
  * Sao chép mã dưới đây vào nó và lưu tệp.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Bây giờ, hãy kiểm tra cấu hình của bạn với lệnh này.
```
cachet-monitor -c config.json
```
  * Nếu mọi thứ hoạt động tốt, hãy chuyển sang phần tiếp theo và tạo dịch vụ Linux.

## Tạo dịch vụ Linux {#Service}

Sau đây là các bước để tạo và bắt đầu dịch vụ Linux để tự động hóa quá trình giám sát.
* Tạo một dịch vụ **Tệp dịch vụ bộ đệm .Service** .
```
sudo nano cachet-monitor.service
```
  * Sao chép mã dưới đây vào nó và lưu tệp.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Cập nhật cấu hình Systemd bằng cách chạy lệnh.
```
sudo systemctl daemon-reload
```
  * Kích hoạt dịch vụ giám sát bộ đệm bằng cách chạy lệnh, do đó, nó có thể tải khi khởi động hệ thống.
```
sudo systemctl enable cachet-monitor.service
```

## Phần kết luận {#Phần kết luận}

Bộ đệm A là miễn phí và **Trang trạng thái nguồn mở** Hệ thống. Tuy nhiên, nó không cung cấp tính năng ngoài hộp để theo dõi ứng dụng web****. Thay vào đó, nó có một API REST mạnh mẽ có thể được sử dụng để thực hiện các hành động như sự cố, thành phần, nhóm và nhiều hơn nữa. Trong bài viết này, chúng tôi đã sử dụng plugin của bên thứ ba để tự động hóa giám sát ứng dụng trong bộ đệm. Trên hết, bạn có thể phát triển plugin của riêng mình hoặc sử dụng bất kỳ plugin hiện có nào khác để thực hiện công việc.
Hơn nữa, [containerize.com][6] đang trên đường để tăng cường ngăn xếp các sản phẩm nguồn mở bằng nhiều ngôn ngữ và khung. Để cập nhật thường xuyên, vui lòng theo dõi danh mục [Trang][7] cho các bài viết thú vị hơn.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Hệ thống trang trạng thái nguồn mở tốt nhất][8]
  * [Bộ đệm - Phần mềm trang trạng thái nguồn miễn phí và nguồn mở][9]
  * [Top 5 Phần mềm trang trạng thái nguồn mở cho năm 2020][10]



[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
