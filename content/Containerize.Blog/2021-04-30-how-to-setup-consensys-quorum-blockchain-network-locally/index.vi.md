---
title: "Cách thiết lập Mạng Blockchain Quorum Consensys cục bộ" 
seoTitle: "Cách thiết lập Mạng Blockchain Quorum Consensys cục bộ" 
description: "Thực hiện theo hướng dẫn này để tìm hiểu về quá trình cài đặt của blockchain đại biểu của Consensys trên localhost. Consensys Quorum là blockchain dựa trên etherum nguồn mở." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Thiết lập mạng blockchain công cộng/riêng tư của riêng bạn để quản lý và giám sát các giao dịch kỹ thuật số kinh doanh. Chúng ta hãy tìm hiểu cách thiết lập Quorum của Consensys trên Localhost." 
url: /vi/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Thiết lập mạng blockchain công cộng/riêng tư của riêng bạn để quản lý và giám sát các giao dịch kỹ thuật số kinh doanh. Hãy cùng học cách thiết lập Quorum của Consensys trên Localhost.

{{< figure align=center src="images/quorum.png" alt="Consensys Quorum">}}


## Tổng quan
Trong quá khứ gần đây, chúng tôi đã xuất bản các bài đăng trên blog về một số chủ đề liên quan đến blockchain như [Top 5 Nền tảng blockchain nguồn mở vào năm 2020][1], [Hướng dẫn cơ bản về cách tạo hợp đồng thông minh Ethereum][2], [làm thế nào Công nghệ nâng cấp chiến lược kinh doanh của bạn][3] và [Hướng dẫn của người mới bắt đầu để thiết lập nút Ethereum trên localhost][4]. Trong bài viết này, chúng ta sẽ xem cách thiết lập mạng Blockchain của Consensys Quorum trên Localhost bằng cách bao quát các điểm sau.
  * **[Giới thiệu ngắn gọn về Quorum của Consensys][5]**
  * **[Quy trình cài đặt trước và **** ** là gì?][6]** 
  * **[Làm thế nào để khởi động mạng?][7]**
  * **[Kết luận][8]**

##  **Giới thiệu ngắn gọn về Quorum của Consensys**    {#Introduction}
[Quorum của Consensys][9] là một nền tảng nguồn mở dựa trên **Công nghệ sổ cái phi tập trung **. Tuy nhiên, nó cung cấp một môi trường hoàn toàn thân thiện với nhà phát triển để xây dựng các ứng dụng dựa trên blockchain để xử lý các giao dịch nhanh và thông lượng cao. Đó là  **Ethereum **  dựa trên, mở rộng và cung cấp nhiều plugin. Hơn nữa, hệ thống phân phối nguồn mở này đi kèm với các tiêu chuẩn bảo mật và quyền riêng tư cao. Ngoài ra, có nhiều tính năng mạnh mẽ như API cho phép và giám sát. Hơn nữa, nền tảng ** DLT này**  tự lưu trữ và cung cấp tài liệu chi tiết về phát triển và triển khai. Mã nguồn của phần mềm miễn phí này có sẵn tại [GitHub][10].
Consensys Quorum cung cấp các tính năng quan trọng sau:
  * Kiến trúc có thể cắm được
  * Dựa trên Ethereum
  * Chắc chắn
  * Tự lưu trữ
  * Mạng công cộng/riêng tư
[Tìm hiểu thêm về Quorum của Consensys][11]

##**** Quy trình cài đặt trước và yêu cầu trước là gì?
Trong phần này, chúng tôi sẽ cài đặt các phụ thuộc cần thiết và thiết lập môi trường địa phương. Trước khi đi đến bước tiếp theo, hãy chắc chắn rằng bạn đã cài đặt các điều kiện tiên quyết sau:
  * Nodejs v10+
  * Docker
  * Docker-compose
Sau khi các điều kiện tiên quyết được cài đặt, hãy chạy lệnh sau để bắt đầu tiện ích nhanh dựa trên CLI.
```
npx quorum-dev-quickstart
```
Tuy nhiên, trả lời các câu hỏi để hoàn thành cài đặt như trong hình ảnh dưới đây.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Consensys Quorum">}}


## ** **Cách khởi động mạng?** **   {#start}
Bây giờ, chúng tôi có mã nguồn tại chỗ. Vì vậy, bước tiếp theo là làm cho mạng sống.
Chạy lệnh sau để vào thư mục gốc.
```
cd quorum-test-network
```
Sau đó, hãy chạy lệnh sau để bắt đầu tất cả các thùng chứa Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Consensys Quorum">}}

Khi tất cả các thùng chứa Docker đang hoạt động, bạn có thể truy cập trình thám hiểm khối tại địa chỉ sau:
```
http://localhost:25000
```
[] ()
Hơn nữa, bạn có thể tương tác với trình thám hiểm khối như trong hình dưới đây.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="Hệ thống phân phối nguồn mở">}}

Tương tự, bạn có thể dừng toàn bộ mạng bằng cách chạy lệnh sau:
```
./stop.sh 
```

## Kết luận   {#conclusion}
Đây là kết thúc của hướng dẫn này. Trên hết, Ethereum dựa trên đồng thuận đại biểu là một công nghệ tài chính kỹ thuật số **** được phát triển đặc biệt cho các trường hợp sử dụng tài chính. Nó có một thuật toán đồng thuận dựa trên bỏ phiếu. Tuy nhiên, động cơ chính của công nghệ phi tập trung này là xây dựng các giải pháp hiệu quả cho các doanh nghiệp.
Cuối cùng, [containerize.com][12] đã xuất bản nhiều bài đăng trên blog kỹ thuật và hướng dẫn về các sản phẩm nguồn mở phổ biến tại [blog.containerize.com][13]. Do đó, hãy gắn bó với danh mục [nền tảng blockchain][14] để cập nhật thường xuyên.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Ethereum][15]
  * [Vải Hyperledger][16]
  * [Openchain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [Quorum của Consensys][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
