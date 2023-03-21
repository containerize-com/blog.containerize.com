---
title: "Tích hợp liên tục và triển khai liên tục từ máy chủ điều khiển nguồn" 
seoTitle: "Tích hợp liên tục và triển khai liên tục từ máy chủ điều khiển nguồn" 
description: "Công cụ triển khai miễn phí giúp các nhóm phát triển tự động hóa quy trình phân phối phần mềm. Nhanh chóng xây dựng, kiểm tra, triển khai phần mềm với kho lưu trữ Jenkins và GitHub." 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "Tự động hóa quy trình công việc phát triển bằng công cụ triển khai miễn phí. Chúng tôi sẽ tìm hiểu cách thiết lập CI/CD với Máy chủ tự động hóa Jenkins và GitHub để triển khai phần mềm." 
url: /vi/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## Tự động hóa quy trình công việc phát triển bằng công cụ triển khai miễn phí. Chúng tôi sẽ tìm hiểu cách thiết lập CI/CD với Máy chủ tự động hóa Jenkins và GitHub để triển khai phần mềm.

{{< figure align=center src="images/ci-cd-post.png" alt="Tích hợp liên tục và triển khai liên tục">}}

Các nhóm phát triển sử dụng các phương pháp khác nhau để triển khai phần mềm như FTP, kéo mã từ kho lưu trữ và nhiều phương pháp khác. Tất cả các phương pháp này được thực hiện thủ công và đòi hỏi rất nhiều nỗ lực. Chúng ta có thể thấy rằng nhiều nhóm theo phương pháp Agile để phát triển phần mềm. Vì vậy, họ phát hành các tính năng mới và sửa lỗi thường xuyên. Do đó, tự động hóa quy trình phân phối phần mềm giúp các nhóm khởi chạy các phiên bản mới một cách nhanh chóng và không có lỗi. Chúng tôi sẽ tìm hiểu cách sử dụng  **CI/CD với Jenkins **  và GitHub để tự động hóa quy trình phân phối phần mềm. Chúng tôi sẽ bao gồm các phần sau trong bài viết này.
  *[ **Jenkins là gì? ** ][1]
  *[ **Tích hợp liên tục ** ][2]
  *[ **Triển khai liên tục ** ][3]
  *[ **Định cấu hình Jenkins ** ][4]
  *[ **Tạo công việc Jenkins ** ][5]

## Jenkins là gì?   {#Jenkins}
**Jenkins  **là một công cụ triển khai miễn phí mạnh mẽ **   **để tự động hóa quy trình phân phối phần mềm. Nó là một máy chủ tự động hóa nguồn mở để xây dựng, thử nghiệm và triển khai. Jenkins sử dụng kiến ​​trúc nô lệ chính. Điều này cho phép các nhóm phần mềm chạy nhiều bản dựng và kiểm tra cho phần mềm đồng thời. Ngoài ra, có rất nhiều plugin có sẵn và các đội có thể sử dụng chúng khi cần thiết. Bạn có thể truy cập trang [**  Jenkins **][6] để biết thêm thông tin và cài đặt. Hơn nữa, bạn có thể tìm thấy mã nguồn tại Jenkins [ **GitHub ** ][7] Kho lưu trữ.

## Tích hợp liên tục   {#CI}
**Tích hợp liên tục ** là một thực tiễn phát triển yêu cầu các nhà phát triển thường xuyên tích hợp mã vào kho lưu trữ chung. Mỗi lần tích hợp/đẩy mã vào kho lưu trữ có thể được xác minh bằng cách xây dựng và kiểm tra tự động. Nó cũng cho phép các nhà phát triển dễ dàng xác định các vấn đề trong mã.

## Triển khai liên tục   {#CD}
**Triển khai liên tục ** là bước tiếp theo sau khi tích hợp liên tục. Nó sẽ cho phép các nhóm liên tục triển khai mã trên máy chủ. Hơn nữa, nó giúp các nhà phát triển giảm các nhiệm vụ lặp đi lặp lại và tăng sự nhanh nhẹn.

## Cấu hình Jenkins   {#configure}
Thực hiện theo hướng dẫn từng bước để cấu hình trong Jenkins.
  * Mở trang web Jenkins của bạn và đăng nhập.
  * Cài đặt plugin xuất bản qua plugin SSH. Bạn có thể tìm kiếm nó bằng cách điều hướng đến Quản lý Jenkins → Quản lý các plugin → Có sẵn.
  * Tạo khóa SSH trên máy chủ xây dựng với tư cách là người dùng Jen Jenkins, như được hiển thị bên dưới.
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * Kết nối với máy chủ đích/triển khai bằng SSH. Chạy lệnh bên dưới và dán nội dung tệp quán rượu lên máy chủ đích.
```
$ cd .ssh
$ nano authorized_keys
```
  * Điều hướng để quản lý Jen Jenkins → Cấu hình hệ thống → Xuất bản qua SSH.
  * Thêm phím SSH bằng cách định vị đường dẫn tệp hoặc dán các nội dung giống như được thực hiện cho máy chủ triển khai.
  * Thêm một máy chủ SSH bằng cách nhấp vào nút Thêm Thêm vào bên cạnh các máy chủ SSH SSH.
  * Nhập tên, tên máy chủ, tên người dùng và thư mục từ xa cho máy chủ triển khai/đích.
  * Nhấp vào nút Cấu hình kiểm tra để đảm bảo rằng Jenkins có thể kết nối với máy chủ triển khai.
  * Cuối cùng, nhấp vào nút Lưu để lưu trữ thông tin.

## Tạo công việc Jenkins   {#Create}
Bạn có thể sử dụng các bước này để tạo công việc Jenkins.
  * Mở bảng điều khiển Jenkins và nhấp vào nút Mục mới.
  * Nhập tên dự án và chọn công việc tự do.
  * Nhập URL kho lưu trữ GitHub trong cửa sổ cấu hình trên mạng.
  * Trong phần Môi trường Xây dựng, hãy kiểm tra các tùy chọn này, xóa không gian làm việc trước khi xây dựng bắt đầu và các tệp gửi hoặc thực hiện các lệnh qua SSH sau khi bản dựng chạy.
  * Nhập tên, tệp nguồn và thư mục từ xa trong môi trường xây dựng.
  * Tiết kiệm công việc và xây dựng nó.
  * Kết nối với máy chủ triển khai và đảm bảo rằng mã ở đó.

## Phần kết luận
Chúng tôi đã thảo luận về máy chủ  **Jenkins ** ,  **Tích hợp liên tục **  và  **triển khai liên tục **  trong bài viết này. Chúng tôi cũng đã học được cách định cấu hình công cụ triển khai  **miễn phí **  và tạo công việc Jenkins để triển khai bằng GitHub. Công cụ CI/CD miễn phí cho phép nhóm phát triển tự động hóa quy trình phân phối phần mềm và tập trung vào các công việc quan trọng. Chúng tôi sẽ bao gồm các công cụ triển khai khác trong các bài viết sắp tới.
Cuối cùng, [ **containerize.com ** ][8] sẽ xuất bản các bài viết về các công cụ triển khai nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với [ **Công cụ triển khai ** ][9] danh mục để cập nhật thường xuyên.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * **[Jenkins][6]**
  *[ **drone ** ][10]
  *[ **Trình triển khai ** ][11]
  *[ **Capistrano ** ][12]
  *[ **Rancher ** ][13]
  *[ **Concference ** ][14]
  *[ **Ansible ** ][15]
  *[ **GOCD ** ][16]
  *[ **Top 5 công cụ triển khai nguồn mở vào năm 2021 ** ][17]
  *[ **Tự động triển khai ứng dụng PHP với người triển khai ** ][18]

  
[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
