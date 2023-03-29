---
title: "TestNet là gì và cách triển khai nó | Ethereum testnet '" 
seoTitle: "TestNet là gì và cách triển khai nó | Ethereum testnet" 
description: "Testnet là gì? Hướng dẫn này là về cách thiết lập nút Ethereum trên localhost. Blockchain là một mạng lưới các nút duy trì lịch sử của tất cả các giao dịch." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum là một mạng ngang hàng blockchain nguồn mở của các nút được kết nối. Hãy cùng học cách triển khai và tương tác với Node Ethereum trên máy chủ cục bộ." 
url: /vi/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum là một mạng ngang hàng blockchain nguồn mở của các nút được kết nối. Hãy cùng học cách triển khai và tương tác với Node Ethereum trên máy chủ cục bộ.

{{< figure align=center src="images/ether.png" alt="Testnet là gì">}}

Trong các bài đăng trên blog trước đây của chúng tôi, chúng tôi đã viết về nhiều chủ đề bao gồm [công nghệ blockchain cho doanh nghiệp][1], [viết một hợp đồng thông minh cơ bản][2] và [nền tảng blockchain phổ biến][3]. Có nhiều chủ đề mà chúng ta sẽ viết trong tương lai gần vì  **Công nghệ sổ cái phi tập trung**  đang tăng tốc với thời gian trôi qua. Mọi người hiện đang bắt đầu quan tâm đến các nền tảng quản lý tài sản kỹ thuật số do bảo mật và minh bạch. Ngoài ra, các giao dịch kỹ thuật số có thể truy nguyên, bất biến và các yếu tố như vậy mang lại sự tự tin cho những người liên quan đến độ tin cậy của công nghệ này. Có ba loại công khai blockchain, tư nhân và được phép. Tuy nhiên, người dùng có thể áp dụng bất kỳ loại nào tùy thuộc vào trường hợp sử dụng của họ.
Sự ra đời của công nghệ này đã mang lại một sự thay đổi lớn trong lĩnh vực ngân hàng vì nó đã thay đổi cách giao dịch tài chính. Trong bài đăng trên blog này, chúng tôi sẽ nói về Blockchain Ethereum về việc thiết lập Node Ethereum trên localhost và chúng tôi sẽ xem cách tương tác với mạng thử nghiệm. Chúng tôi sẽ bao gồm các điểm chính sau.
*  **testnet là gì?**  
*  **[Làm thế nào để thiết lập blockchain ethereum?][4]**  
*  **[Cách tương tác với Blockchain Ethereum?][5]**  
*  **[Kết luận][6]**  

## Testnet là gì? {#tetstnet}

Trong bài đăng trên blog này, chúng tôi sẽ triển khai một nút Ethereum trên localhost. Ethereum có nhiều mạng, mạng sản xuất được gọi là chính và mạng được sử dụng cho mục đích thử nghiệm được gọi là TestNet. Hầu hết các ứng dụng phi tập trung đều dựa trên blockchain [Ethereum][7]. Hợp đồng thông minh là một thành phần không thể thiếu của cơ sở hạ tầng phân tán này. Hơn nữa, Blockchain là một mạng lưới các máy tính có tên là nút Nodes. Tuy nhiên, mỗi nút chứa một bản sao của blockchain và do đó tham gia vào mạng. Blockchain Ethereum cũng có tiền điện tử riêng được gọi là ether ether. Tất cả các giao dịch được bảo mật bằng mã hóa. Ngoài ra, nó là một công nghệ sổ cái hoàn chỉnh không bao giờ tắt hoặc bị hỏng. Nó cho phép bạn viết các hợp đồng thông minh và các ứng dụng phi tập trung (DAPP) chạy trên các nút blockchain etherum.
Mạng blockchain phân tán nguồn mở này sử dụng thuật toán đồng thuận được gọi là Proof of Work (POW). Hơn nữa, kiến ​​trúc của Ethereum bao gồm năm lớp như máy ảo Ethereum, API máy khách Ethereum, hợp đồng thông minh, nút Ethereum và ứng dụng người dùng cuối. Máy ảo Ethereum cung cấp phần mềm và kiến ​​trúc nhận ra hợp đồng thông minh. Hợp đồng thông minh là phần mềm chi phối các giao dịch. Có sự hỗ trợ mạnh mẽ cho các công ty Ethereum Blockchain và Fortune 500 đã thể hiện sự quan tâm lớn để phát triển ở quy mô lớn hơn bằng cách sử dụng công nghệ này. Hơn nữa, Ethereum được viết bằng ngôn ngữ GO và mã nguồn của nó có sẵn trên [GitHub][8]. Tất cả các tài liệu có sẵn liên quan đến việc triển khai và phát triển vì nó có một cộng đồng sôi động.

## Làm thế nào để thiết lập blockchain Ethereum? {#setup}

Bây giờ, chúng tôi nhận thức được Testnet là gì. Trong phần này, chúng tôi sẽ thiết lập nút Ethereum trên máy cục bộ của chúng tôi. Trước khi đi xa hơn, hãy chắc chắn rằng bạn đã cài đặt các điều kiện tiên quyết sau đây.
  * [Homebrew][9] (cho macOS)

  * [GO7] (brew install go)
Sau khi các điều kiện tiên quyết được đặt ra, vui lòng chạy lệnh sau để sao chép mã nguồn:
```
git clone https://github.com/ethereum/go-ethereum
```
Khi một bản sao thành công, hãy đi vào thư mục:
```
cd go-ethereum
```
Bây giờ, hãy chạy lệnh sau để xây dựng chương trình Geth:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Ghi chú
{{_LINE_34_}}
  Trong trường hợp có bất kỳ lỗi nào, vui lòng cài đặt xcode bằng cách chạy xcode-select-install và thử lại
{{_LINE_36_}}
Vì vậy, bạn đã thiết lập tất cả các điều kiện tiên quyết và mã nguồn. Do đó, hãy chạy lệnh sau để khởi động nút:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Nút Ethereum">}}


## Làm thế nào để tương tác với blockchain ethereum? {#interact}

Phần này nói về sự tương tác với một nút ethereum đang chạy được đồng bộ hóa hoàn toàn với blockchain. Chúng ta có thể sử dụng phần mềm Geth để tương tác và gửi các lệnh đến mạng thử nghiệm.
Vì vậy, hãy để bao gồm Build/bin/geth trong biến môi trường Path Path bằng cách chạy các lệnh sau:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Sau đó, hãy dừng máy chủ mà bạn đã đưa lên trên và chạy mạng thử nghiệm bằng các cờ sau:
geth -testnet -rpc -rpcapi = "db, eth, net, web3, cá nhân, web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Testnet là gì">}}

Tiếp theo, bạn cần mở một cửa sổ thiết bị đầu cuối mới và gắn lệnh geth vào nút bằng cách chạy lệnh sau:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="Nền tảng quản lý tài sản kỹ thuật số">}}

Geth sẽ mở một cửa sổ giao diện điều khiển nơi bạn có thể tương tác với mạng thử nghiệm. Lệnh sau đây sẽ tạo một tài khoản chứa tiền ảo và cặp khóa công khai/riêng tư:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Công nghệ sổ cái phi tập trung">}}

Để kiểm tra tài khoản của bạn, bạn có thể chạy lệnh sau:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Testnet là gì">}}

Tương tự như vậy, có nhiều lệnh mà bạn có thể sử dụng để tương tác với Blockchain Ethereum.

## Phần kết luận {#Phần kết luận}

Đây là kết thúc của hướng dẫn này. Chúng tôi đã học  **TestNet** là gì và quá trình thiết lập nút Ethereum trên máy cục bộ. Blockchain Ethereum là một giải pháp tổng quát cho hầu hết các ứng dụng phi tập trung. Hầu hết các doanh nghiệp và các cơ quan chính phủ có xu hướng áp dụng công nghệ này để mang lại sự mạnh mẽ, minh bạch, sẵn có và trách nhiệm. Ngoài ra, hướng dẫn blockchain **này**  sẽ thực sự giúp bạn nếu bạn dự định bắt đầu phát triển trên blockchain Ethereum vì nó tận dụng các hợp đồng thông minh. Blockchain Etheruem ổn định và phổ biến hơn vì nó có hàng ngàn nút trực tiếp. Hơn nữa, các doanh nghiệp có thể dễ dàng phát triển và triển khai các mạng Blockchain Ethereum mà không dành thêm thời gian. Yếu tố khác đằng sau độ tin cậy của Ethereum là nó cung cấp sự phát triển của các hợp đồng thông minh theo cách mà các nền tảng quản lý tài sản kỹ thuật số khác**không cung cấp.
Các bản cập nhật mới nhất trong mạng Ethereum đã làm cho mạng hiệu quả và hiệu quả hơn về chi phí. Trên thực tế, có rất nhiều tài liệu có sẵn trên đám mây thể hiện các khía cạnh quan trọng của etheruem liên quan đến mục đích đầu tư và phát triển. Đối với các nhà phát triển, nó cung cấp một hệ sinh thái thân thiện với nhà phát triển với các tiện ích được tạo sẵn. Đối với người khai thác, có một tiền thưởng dưới dạng ether bất cứ khi nào họ khai thác một khối mới vào blockchain. Hơn nữa, [containerize.com][10] đã xuất bản nhiều bài đăng trên blog kỹ thuật và hướng dẫn về các sản phẩm nguồn mở phổ biến tại [blog.containerize.com][11]. Do đó, hãy kết nối với danh mục [nền tảng blockchain][12] để cập nhật thường xuyên.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Ethereum][7]
  * [Vải Hyperledger][13]
  * [Openchain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [Quorum của Consensys][17]
  * [Cách thiết lập Mạng Blockchain Quorum của Consensys cục bộ][18]
  * [Top 5 nền tảng blockchain nguồn mở vào năm 2020][3]
  * [Hướng dẫn cơ bản về cách tạo hợp đồng thông minh Ethereum][2]
  * [Làm thế nào công nghệ phi tập trung nâng cấp chiến lược kinh doanh của bạn][19]



 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/
 [3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
 [4]: #setup
 [5]: #interact
 [6]: #Conclusion
 [7]: https://products.containerize.com/blockchain-platforms/ethereum
 [8]: https://github.com/ethereum/go-ethereum
 [9]: https://brew.sh/
 [10]: https://www.containerize.com/
 [11]: https://blog.containerize.com/
 [12]: https://products.containerize.com/blockchain-platforms/
 [13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
 [14]: https://products.containerize.com/blockchain-platforms/openchain
 [15]: https://products.containerize.com/blockchain-platforms/ripple
 [16]: https://products.containerize.com/blockchain-platforms/multichain
 [17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
 [18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
 [19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
