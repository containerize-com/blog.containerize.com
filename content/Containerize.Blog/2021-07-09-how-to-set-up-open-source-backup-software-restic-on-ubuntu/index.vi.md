---
title: "Cách thiết lập phần mềm sao lưu nguồn mở Restic trên Ubuntu" 
seoTitle: "Cách thiết lập phần mềm sao lưu nguồn mở Restic trên Ubuntu" 
description: "Restic là một phần mềm sao lưu nguồn mở nhanh nhất, an toàn và là một trong những phần mềm sao lưu nguồn mở tốt nhất. Nó hỗ trợ AWS S3, Microsoft Azure, Google Cloud và các tùy chọn phụ trợ khác." 
date: Fri, 09 Jul 2021 20:38:14 +0000
author: Masood Anwer
summary: "Lấy sao lưu với phần mềm sao lưu nguồn mở và lưu trữ nó tại địa phương hoặc trên các phụ trợ bên ngoài. RESTIC là đa nền tảng và hỗ trợ nhiều loại lưu trữ." 
url: /vi/how-to-set-up-open-source-backup-software-restic-on-ubuntu/
categories: ['Backup Software']
---

## Lấy sao lưu với phần mềm sao lưu nguồn mở và lưu trữ nó tại địa phương hoặc trên các phụ trợ bên ngoài. RESTIC là đa nền tảng và hỗ trợ nhiều loại lưu trữ.

{{< figure align=center src="images/restic-post-banner.png" alt="Phần mềm sao lưu nguồn mở">}}

Một hệ thống sao lưu thực sự quan trọng đối với cả doanh nghiệp và cá nhân. Dữ liệu có thể bị mất vì nhiều lý do như tấn công mạng, lỗi hệ thống, loại bỏ tình cờ và nhiều hơn nữa. Bạn nên có một chiến lược sao lưu tốt tại chỗ để bạn có thể khôi phục dữ liệu của mình nhanh chóng. Hướng dẫn này sẽ chỉ cho bạn cách cài đặt và sử dụng phần mềm sao lưu nguồn mở  ****  RESTIC trên máy chủ Ubuntu của bạn.
Chúng tôi đã đề cập đến các phần sau trong hướng dẫn này.
  *[ **Điều kiện tiên quyết ** ][1]
  *[ **RESTIC là gì? ** ][2]
  *[ **Cài đặt RESTIC ** ][3]
  *[ **Cấu hình RESTIC ** ][4]
  *[ **Giải pháp thay thế cho Restic ** ][5]
  * **[Kết luận][6]**

## Điều kiện tiên quyết   {#Prerequisites}
Chương trình phần mềm sao lưu RESTIC hỗ trợ ba hệ điều hành chính Linux, MacOS và Windows. Trước khi cài đặt  **Sao lưu RESTIC ** , bạn nên đáp ứng các yêu cầu hệ thống sau.
  * Máy hoặc hệ thống máy tính để bàn với hệ điều hành Ubuntu chứa dữ liệu được sao lưu
  * Một phiên bản máy chủ Ubuntu mới nhất
  * Xác thực khóa SSH được cấu hình giữa hai máy khách và máy chủ
  * Người dùng không root có đặc quyền sudo
Với những bit này trong tay, hãy để di chuyển và đi làm.

## Restic là gì?   {#Restic}
[ **restic ** ][7] là một công cụ sao lưu nguồn mở tuyệt vời  **** . Nó có một tiện ích sao lưu miễn phí  ****  mà nhanh chóng, an toàn và hiệu quả. Chương trình sao lưu đa nền tảng của nó, do đó, nó sẽ chạy trên Linux, BSD, Mac OS X và Windows. Phần mềm sao lưu nguồn mở tốt nhất RESTIC rất dễ chạy và không yêu cầu máy chủ hoặc cấu hình phức tạp. Nó tạo ra một bản sao lưu của dữ liệu đã sửa đổi và cho phép người dùng khôi phục nó khi cần thiết. Hơn nữa, nó cung cấp một loạt các tùy chọn lưu trữ, bao gồm lưu trữ tự lưu trữ và lưu trữ internet. Hơn nữa, Restic Open Sure tự lưu trữ lưu trữ đám mây sử dụng các kỹ thuật mật mã mạnh mẽ để bảo vệ dữ liệu của bạn.
Restic không phải là một tiện ích sao chép tệp đơn giản. Nó chủ yếu được xây dựng trên hai khái niệm: ảnh chụp nhanh và kho lưu trữ.  **RESTIC **  Giải pháp sao lưu nguồn mở lưu thông tin dưới dạng ảnh chụp nhanh, sau đó được lưu trong kho lưu trữ. Nó được viết bằng ngôn ngữ lập trình GO. Restic Go dựa trên tiện ích sao lưu và ứng dụng sao lưu nguồn mở hoạt động trơn tru với nhiều hệ thống lưu trữ phụ trợ đám mây và địa phương. Mã nguồn của phần mềm sao lưu tệp nguồn mở RESTIC có sẵn tại [ **GitHub ** ][8]. Tuy nhiên, bạn có thể tìm thấy chi tiết [ **Tài liệu ** ][9] để cài đặt và sử dụng.
RESTIC tự lưu trữ bản sao lưu đám mây hỗ trợ các phụ trợ ngoài hộp để lưu trữ sao lưu.
  * Thư mục cục bộ
  * Máy chủ SFTP (qua SSH)
  * Máy chủ REST
  * AWS S3
  * Máy chủ nhỏ
  * Wasabi
  * Đám mây Alibaba
  * OpenStack Swift
  * Backblaze B2
  * Lưu trữ Blob Microsoft Azure
  * Lưu trữ đám mây Google
Bạn có thể sử dụng [ **rclone ** ][10] cho nhiều phụ trợ khác nhau ngoài những phụ trợ được liệt kê ở trên.

## Cài đặt RESTIC   {#installation}
Có nhiều cách khác nhau để cài đặt lưu trữ đám mây tự lưu trữ tốt nhất trên hệ điều hành Ubuntu của bạn. Chúng tôi sẽ bao gồm việc cài đặt lưu trữ tệp tự lưu trữ RESTIC bằng gói Ubuntu, Docker và mã nguồn.

### Cài đặt bằng cách sử dụng gói
  * Chạy lệnh bên dưới để cài đặt máy chủ sao lưu nguồn mở Restic trên hệ điều hành Ubuntu.
```
$ sudo apt-get install restic
```

### Cài đặt bằng Docker
  * Nhận hình ảnh Restic từ Dockerhub.
```
$ docker pull restic/restic
```

### Cài đặt bằng nguồn
  * Đầu tiên, bạn cần cài đặt ngôn ngữ lập trình GO để thiết lập RESTIC từ nguồn. Bạn có thể truy cập trang web chính thức [ **Golang ** ][11] để hướng dẫn cài đặt GO.
  * Tiếp theo, thực thi các lệnh bên dưới để cài đặt sao lưu gia tăng.
```
$ git clone https://github.com/restic/restic
$ cd restic
$ go run build.go
```
  * Bằng cách chỉ định HĐH mục tiêu trong lệnh, bạn có thể nhanh chóng biên dịch RESTIC cho tất cả các nền tảng được hỗ trợ. Dưới đây là một vài ví dụ.
```
$ go run build.go --goos windows --goarch amd64
$ go run build.go --goos freebsd --goarch 386
$ go run build.go --goos linux --goarch arm --goarm 6
```

## Cấu hình RESTIC   {#configuration}
Như chúng tôi đã đề cập ở trên rằng hệ thống sao lưu nguồn mở RESTIC dựa trên ảnh chụp nhanh và kho lưu trữ để sao lưu. Hãy cùng xem cách thiết lập một kho lưu trữ, chụp nhanh và sau đó khôi phục bản sao lưu.

### Tạo kho lưu trữ
  * Chạy lệnh sau để khởi tạo kho lưu trữ. Bạn cũng cần đặt mật khẩu cho kho lưu trữ.
```
$ restic init --repo /tmp/
```

### Dữ liệu sao lưu cho một thư mục cục bộ
  * Trong bước đầu tiên, chúng tôi đã tạo một kho lưu trữ để lưu trữ dữ liệu. Bây giờ, chúng tôi sẽ thêm dữ liệu vào kho lưu trữ để sao lưu. Thực thi lệnh sau.
```
$ restic --repo /tmp/backup backup ~/work
```

### khôi phục bản sao lưu
  * Lệnh khôi phục khôi phục các tập tin và thư mục. Các tệp không được khôi phục về vị trí ban đầu của chúng trong khi sử dụng sao lưu đám mây nguồn mở Restic. Bạn phải chọn vị trí đích cho các tệp được khôi phục bởi RESTIC.
```
$ restic restore 47a15bab -r /tmp/backup --target /tmp/backup/restore
```
  * Tuy nhiên, bạn có thể khôi phục ảnh chụp nhanh mới nhất mà không cần chỉ định ID ảnh chụp nhanh. Bạn cần thêm tham số mới nhất trong lệnh như dưới đây.
```
$ restic restore latest -r /tmp/backup --target /tmp/backup/restore
```

### Làm việc với ảnh chụp nhanh
Trong phần này, chúng tôi sẽ xem xét một số tính năng chụp nhanh.
  * Chạy lệnh sau để liệt kê xuống Snaphosts.
```
$ restic snapshots -r /tmp/backup
```
  * Bạn có thể so sánh hai ảnh chụp nhanh với lệnh sau.
```
$ restic diff -r /tmp/backup First_Snapshot_ID Second_Snapshot_ID
```
  * Bạn có thể cần phải xóa một bản sao lưu cũ để giải phóng không gian lưu trữ. Để xóa ảnh chụp nhanh, chạy lệnh bên dưới.
```
$ restic -r /srv/restic-repo forget bdbd3439
```

## lựa chọn thay thế cho restic
RESTIC là ứng dụng phần mềm sao lưu nguồn mở phổ biến nhất và nó đảm bảo tính bảo mật và tính toàn vẹn của dữ liệu tệp quan trọng của bạn. Sau đây là các lựa chọn thay thế phổ biến nhất và các đối thủ cạnh tranh hàng đầu cho công cụ sao lưu dữ liệu RESTIC.
  * Glacier Amazon
  * Nhân rộng
  * Runrestic
  * Afi
  * Sao lưu mưa
  * Borg
  * Sao lưu Veeam
  * Cổng lưu trữ AWS
  * Sự gắn kết

## Phần kết luận
Trong bài viết này, chúng tôi đã đề cập đến phần mềm sao lưu nguồn mở miễn phí  **** . Chúng tôi cũng đã thảo luận về một số kỹ thuật cài đặt, cũng như cách tạo bản sao lưu và cách khôi phục sao lưu. Có nhiều hình thức lưu trữ sao lưu dữ liệu khác và chúng tôi chỉ đề cập đến một hình thức trong bài viết này. Các loại lưu trữ phụ trợ còn lại sẽ được đề cập trong các ấn phẩm trong tương lai. Chúng tôi hy vọng rằng hướng dẫn này sẽ đóng vai trò là điểm khởi đầu để bạn sử dụng công cụ sao lưu nguồn mở tốt nhất RESTIC để thực hiện và khôi phục bản sao lưu.
Cuối cùng, [ **containerize.com ** ][12] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với danh mục [ **bản sao lưu này ** ][13] cho các bản cập nhật mới nhất.
_ Phần mềm sao lưu nguồn mở và miễn phí yêu thích nhất của bạn là gì ?. Bạn có bất kỳ câu hỏi nào về phần mềm sao lưu nguồn mở không?

## Khám phá:
Chúng tôi cũng có một số thông tin liên quan khác từ OSS Watch:
  * [Top 5 Phần mềm lưu trữ đám mây nguồn mở vào năm 2021][15]
  * [Cách cài đặt NextCloud với Apache trên máy chủ Ubuntu][16]
  * [Cài đặt và định cấu hình Owncloud với Apache trên Ubuntu][17]
  * [Cách cài đặt nền tảng chia sẻ và đồng bộ hóa tệp Pydio trên Ubuntu][18]
  * [NSQ vs Kafka | Sự khác biệt chính là gì?][19]
  * [NextCloud vs owncloud | Sự khác biệt là gì?][20]
  * [Phần mềm chia sẻ tệp và lưu trữ đám mây nguồn mở tốt nhất][21]

  
[1]: #Prerequisites
[2]: #Restic
[3]: #Installation
[4]: #Configuration
[5]: #Alternativestorestic
[6]: #Conclusion
[7]: https://restic.net/
[8]: https://github.com/restic/restic
[9]: https://restic.readthedocs.io/
[10]: https://rclone.org/
[11]: https://golang.org/doc/install
[12]: https://containerize.com
[13]: https://blog.containerize.com/category/backup-software/
[14]: mailto:yasir.saeed@aspose.com
[15]: https://blog.containerize.com/backup-and-sync-software/top-5-open-source-cloud-storage-software-in-2021/
[16]: https://blog.containerize.com/backup-and-sync-software/how-to-install-nextcloud-with-apache-on-ubuntu-server/
[17]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[18]: https://blog.containerize.com/backup-and-sync-software/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
[19]: https://blog.containerize.com/backup-and-sync-software/nsq-vs-kafka-what-are-the-key-differences/
[20]: https://blog.containerize.com/backup-and-sync-software/nextcloud-vs-owncloud-what-are-the-differences/
[21]: https://products.containerize.com/backup-and-sync/
