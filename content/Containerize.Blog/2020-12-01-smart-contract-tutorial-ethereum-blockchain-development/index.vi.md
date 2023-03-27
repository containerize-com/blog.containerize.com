---
title: "Hướng dẫn hợp đồng thông minh | Phát triển blockchain Ethereum" 
seoTitle: "Hướng dẫn hợp đồng thông minh | Phát triển blockchain Ethereum" 
description: "Hướng dẫn hợp đồng thông minh này xây dựng các bước cơ bản để tạo ra các hợp đồng thông minh Ethereum. Ethereum là một mạng blockchain phân phối nguồn mở, an toàn." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum là một nền tảng trưởng thành để tạo ra các hợp đồng thông minh và các ứng dụng phi tập trung (DAPP). Thực hiện theo các bước này để tạo, kiểm tra và triển khai các hợp đồng thông minh." 
url: /vi/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum là một nền tảng trưởng thành để tạo ra các hợp đồng thông minh và các ứng dụng phi tập trung (DAPP). Thực hiện theo các bước này để tạo, kiểm tra và triển khai các hợp đồng thông minh.

{{< figure align=center src="images/contract.png" alt="Hướng dẫn hợp đồng thông minh">}}


## Tổng quan
Trong quá khứ gần đây, chúng tôi đã xuất bản một [bài đăng trên blog][1] làm nổi bật tác động và tầm quan trọng của công nghệ blockchain. Có một bài viết blog thú vị khác [NFT là gì? | Mã thông báo không nấm giải thích][2]. Công nghệ sổ cái phân tán dựa trên một số khái niệm cốt lõi như hợp đồng thông minh, nút, khai thác, thuật toán đồng thuận, giao dịch kỹ thuật số và mạng ngang hàng. Do đó, nó là nguồn mở, do đó, có một cửa sổ lớn cho một phần mở rộng liên quan đến các trường hợp sử dụng. Trên thực tế, có nhiều nền tảng quản lý tài sản kỹ thuật số nguồn mở và miễn phí được phân phối và yêu cầu một số phần mềm để chi phối các giao dịch.
Trong hướng dẫn hợp đồng thông minh này, chúng tôi sẽ học cách xây dựng một hợp đồng thông minh Ethereum bằng cách bao gồm các viên đạn sau.
* [ **Hợp đồng thông minh là gì?** ][3]
* [ **Cách xây dựng hợp đồng thông minh cơ bản?** ][4]
* [ **Cách chạy và triển khai hợp đồng thông minh?** ][5]
* [ **Kết luận** ][6]

## Hợp đồng thông minh là gì? {#what}

Hợp đồng thông minh là một chương trình chạy trên blockchain để chi phối các giao dịch kỹ thuật số. Phần mã này chứa các quy tắc và quy trình được xác định để đảm bảo tính minh bạch của một giao dịch. Mỗi hợp đồng thông minh chứa một địa chỉ và địa chỉ đó được sử dụng để truy cập bất kỳ chức năng nào của một hợp đồng thông minh cụ thể. Ngoài ra, các hợp đồng thông minh mang lại sự minh bạch, tin cậy và bảo mật vào mạng blockchain. Những đoạn mã này thực thi tự động sau khi một số điều kiện nhất định được đáp ứng.
Tuy nhiên, bất kỳ nhà phát triển nào cũng có thể viết một hợp đồng thông minh và triển khai nó qua mạng. Hơn nữa, các hợp đồng thông minh làm cho các quy trình khá mạnh mẽ vì không có sự phụ thuộc liên quan đến việc thực thi các đoạn mã này. Hơn nữa, hợp đồng thông minh lưu trữ thông tin cần thiết liên quan đến mọi giao dịch mà người tham gia có thể truy xuất và xác minh. Nhiều ngành công nghiệp như chăm sóc sức khỏe, ngân hàng, đang áp dụng công nghệ sổ cái phân tán này. Các tổ chức chính phủ cũng muốn triển khai các ứng dụng phi tập trung (DAPP) để mang lại tính xác thực và minh bạch vào hệ thống bầu cử. Có nhiều [nền tảng blockchain][7] như [Ethereum][8], [Ripple][9], [Corda][10], và một số khác, tuy nhiên, trong hướng dẫn này, chúng tôi sẽ xây dựng hợp đồng thông minh đầu tiên của chúng tôi trên Ethereum.

## Làm thế nào để xây dựng một hợp đồng thông minh cơ bản? {#build}

Trong phần này của hướng dẫn hợp đồng thông minh, chúng tôi sẽ thấy các bước để thiết lập môi trường cho hợp đồng thông minh đầu tiên của chúng tôi.
Hợp đồng thông minh có thể được viết bằng nhiều ngôn ngữ, nhưng, chúng ta sẽ sử dụng [tính vững chắc][11] đó là ngôn ngữ cấp cao để viết hợp đồng thông minh.
Chúng tôi sẽ sử dụng [Ethereum Studio][12] đó là IDE dựa trên web. Nó được sử dụng để viết các hợp đồng thông minh cũng như các ứng dụng phi tập trung để tương tác với các hợp đồng thông minh. Nó cung cấp một số mẫu dự án được xây dựng sẵn nơi bạn có thể bắt đầu viết logic của mình ngay lập tức.
Vì vậy, hãy mở [Ethereum Studio][12] IDE vào trình duyệt và bạn sẽ thấy giao diện sau.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Hướng dẫn hợp đồng thông minh">}}

Hãy để chọn tùy chọn Hello Hello World và tạo dự án đầu tiên của chúng tôi. Bạn có thể thấy cấu trúc thư mục. Hơn nữa, có một cửa sổ đầu ra ở phía bên phải.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Hướng dẫn hợp đồng thông minh">}}

Có hai thư mục Ứng dụng ứng dụng và các hợp đồng và các hợp đồng.
Thư mục ứng dụng thuộc về ứng dụng web và chứa các tệp sau.
* **app.css** : cho kiểu dáng bố cục
* **app.html** : cho trang chủ
* **app.js** : Chứa logic kinh doanh để kết nối mặt trước với hợp đồng thông minh
Tương tự, thư mục Hợp đồng chứa tệp nguồn của hợp đồng.
Bây giờ, hãy để mở tệp Helloworld.sol có thể được tìm thấy tại các tệp/hợp đồng/helloworld.sol. Về cơ bản, đây là tệp chính chứa mã cho hợp đồng thông minh được viết theo độ rắn. Bạn có thể sửa đổi mã nếu bạn muốn, chúng tôi sẽ để nó như hiện tại.

## Làm thế nào để chạy và triển khai một hợp đồng thông minh? {#deploy}

Trong phần này của hướng dẫn hợp đồng thông minh, chúng ta sẽ xem cách chạy và triển khai hợp đồng thông minh. Ethereum Studio biên dịch mã Sollity vào mã byte. Do đó, hãy lưu mã và để cho triển khai hợp đồng thông minh đầu tiên của chúng tôi.
Trên bảng điều khiển bên tay trái, nhấn biểu tượng tên lửa.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="Hợp đồng thông minh là gì">}}

Bạn có thể định cấu hình và đặt các giá trị ban đầu cho hợp đồng thông minh của bạn như được hiển thị bên dưới.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Hợp đồng thông minh Ethereum">}}

Nhấn nút Lưu Lưu và nhấn nút Triển khai Triển khai để triển khai hợp đồng thông minh. Bạn sẽ thấy đầu ra sau và một thông báo trong cửa sổ bảng điều khiển ở phía dưới. Cửa sổ bảng điều khiển cung cấp các chi tiết như địa chỉ hợp đồng thông minh, không phải, gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="Hợp đồng thông minh là gì">}}

Sau đó, có một tùy chọn khác trên bảng điều khiển ở phía bên trái và đó là tùy chọn tương tác. Tùy chọn này cho phép bạn tương tác với hợp đồng thông minh của mình bằng cách gọi chức năng của nó và truyền giá trị.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="Hợp đồng thông minh là gì">}}

Hơn nữa, có một ứng dụng phía trước cho phép người dùng tương tác với hợp đồng thông minh từ trình duyệt. Ứng dụng dựa trên web này được gọi là một ứng dụng phi tập trung. Bạn có thể vượt qua giá trị và xem cửa sổ bảng điều khiển.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="Hợp đồng thông minh là gì">}}


## Phần kết luận {#con}

Điều này đưa chúng ta đến cuối hướng dẫn hợp đồng thông minh này. Tôi hy vọng bài viết này đã giúp bạn hiểu các bước chính của việc xây dựng và triển khai hợp đồng thông minh Ethereum. Khi công nghệ blockchain đang phát triển với tốc độ cao, đã đến lúc đạt được thực hành thực hành mạnh mẽ trên hệ thống echo của blockchain. Công nghệ sổ cái phân tán này có cấu hình cao và có thể mở rộng. Bài đăng trên blog này sẽ thực sự giúp bạn nếu bạn sẵn sàng học phát triển hợp đồng thông minh. Ngoài ra, có nhiều hướng dẫn hữu ích và các nền tảng quản lý tài sản kỹ thuật số nguồn mở được đề cập trong phần khám phá trên mạng bên dưới.
Cuối cùng, [Containererize.com][13] hoàn toàn dành riêng để biên dịch danh sách phần mềm nguồn mở. Có nhiều hướng dẫn và bài đăng trên blog về phần mềm nguồn mở và một số bài đăng trên blog đang được thực hiện. Do đó, vui lòng giữ liên lạc với danh mục [nền tảng blockchain][7] để cập nhật thường xuyên.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Ethereum][8]
  * [Vải Hyperledger][14]
  * [Openchain][15]
  * [Ripple][16]
  * [Multichain][17]
  * [Quorum của Consensys][18]
  * [NFT là gì? | Mã thông báo không phải là nấm giải thích][2]
  * [Cách thiết lập Mạng Blockchain Quorum của Consensys cục bộ][19]
  * [Top 5 nền tảng blockchain nguồn mở vào năm 2020][20]
  * [Hướng dẫn cơ bản về cách tạo hợp đồng thông minh Ethereum][21]
  * [Làm thế nào công nghệ phi tập trung nâng cấp chiến lược kinh doanh của bạn][22]
  * [Cách thiết lập Mạng Blockchain Quorum của Consensys cục bộ][19]



[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
