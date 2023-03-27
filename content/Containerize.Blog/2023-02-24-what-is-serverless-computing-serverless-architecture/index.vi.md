---
title: "Máy tính không có máy chủ là gì? | Kiến trúc không có máy chủ" 
seoTitle: "Máy tính không có máy chủ là gì? | Kiến trúc không có máy chủ" 
description: "Tự động hóa cơ sở hạ tầng phụ trợ, quên đi rắc rối trong việc quản lý và bảo trì máy chủ. Chọn kiến ​​trúc không có máy chủ để hợp lý hóa phát triển phần mềm." 
date: Fri, 24 Feb 2023 12:48:19 +0000
author: muhammadmustafa
summary: "Tự động hóa cơ sở hạ tầng phụ trợ, và quên đi rắc rối của việc quản lý & amp; duy trì máy chủ. Chọn kiến ​​trúc không có máy chủ để hợp lý hóa phát triển phần mềm." 
url: /vi/what-is-serverless-computing-serverless-architecture/
categories: ['Programming']
---

## Tự động hóa cơ sở hạ tầng phụ trợ và quên đi sự rắc rối của việc quản lý và bảo trì máy chủ. Chọn kiến ​​trúc không có máy chủ để hợp lý hóa phát triển phần mềm.

{{< figure align=center src="images/What-is-Serverless-computing-Serverless-Architecture.png" alt="What is Serverless computing? ">}}


## Tổng quan
Những lợi thế của máy chủ không có thật. Hãy nói rằng doanh nghiệp của bạn [phần mềm][1] đang phát triển với tốc độ cao và bạn tìm thấy một nền tảng chịu trách nhiệm quản lý, duy trì và nhân rộng tài nguyên máy chủ phần mềm của bạn. Đó sẽ là một kịch bản tuyệt vời, nơi bạn sẽ thấy mình thoải mái khi quản lý phần phụ trợ và tập trung vào các phát triển ứng dụng hơn nữa. Các tổ chức liên quan đến [Phát triển ứng dụng nhanh (RAD)][2] có xu hướng lựa chọn kiến ​​trúc không có máy chủ. Do đó, chúng tôi sẽ đi tìm câu trả lời cho **Máy tính không có máy chủ** và cũng sẽ cố gắng bao quát các khía cạnh khác của nó. Đến cuối bài đăng trên blog này, bạn sẽ có một sự hiểu biết mạnh mẽ về kiến ​​trúc không có máy chủ**, các trường hợp sử dụng của nó và các đặc quyền của nó.
Các phần sau sẽ được thảo luận trong hướng dẫn này:
* **[Máy ​​tính không có máy chủ là gì?][3]** 
* [ **Serverless vs Container và Kubernetes** ][4]
* **[trường hợp sử dụng không có máy chủ][5]** 
* **[Lợi ích kinh doanh của máy tính không có máy chủ][6]** 

## Máy tính không có máy chủ là gì? {#What-is-serverless-computing}

Máy tính/Kiến trúc của Serverless là một phương pháp để các nhà phát triển xây dựng phần mềm cấp doanh nghiệp. Trong phương pháp này, các nhà phát triển không cần phải tham gia vào việc quản lý và cài đặt tài nguyên phụ trợ thay vì họ chỉ tập trung vào việc xây dựng logic kinh doanh ứng dụng. Vì vậy, bất kỳ nhà cung cấp dịch vụ đám mây nào thực hiện quản lý và bảo trì tài nguyên phụ trợ. Theo mô hình này, bạn trả tiền cho các dịch vụ đó và khoản thanh toán phụ thuộc vào việc sử dụng. Cách tiếp cận này dễ dàng thích nghi và đang trở nên phổ biến trong các nhà phát triển.

{{< figure align=center src="images/server.png" alt="Kiến trúc không có máy chủ">}}

Trên thực tế, có những phát triển nhanh chóng đã được quan sát thấy trong các công cụ và kỹ thuật phát triển phần mềm. Bạn có thể tận dụng tùy chọn giàn giáo phong phú nhằm tăng tốc các quy trình phát triển. Do đó, các nhà cung cấp dịch vụ đám mây khác nhau đã đưa ra một kiến ​​trúc **không có máy chủ** mà tiếp tục mang lại sự tự do cho các nhà phát triển về quản lý máy chủ. Ngoài ra, các nhà phát triển dành nhiều sự chú ý đến việc viết logic kinh doanh của ứng dụng và viết các tuyến phụ trợ để ánh xạ các yêu cầu lên nền tảng máy chủ.

## Máy chủ không có vs container và kubernetes {#Serverless-vs-Containers}

Một container là một ví dụ của hình ảnh Docker, chạy ứng dụng. Container hóa của bất kỳ ứng dụng nào làm giảm chi phí triển khai ứng dụng. Tuy nhiên, ứng dụng được chứa chứa trên bất kỳ nền tảng nào theo cách thống nhất và bạn có thể chuyển các container đến bất kỳ nền tảng nào khác mà không phải lo lắng về cơ sở hạ tầng cơ bản.
**Kiến trúc không có máy chủ** và container hóa cung cấp một số điều khoản tương tự cho các nhà phát triển. Cả hai môi trường đều trừ đi sự rắc rối của việc triển khai ứng dụng. Hơn nữa, các hệ sinh thái này được coi là tốt hơn so với máy ảo (VM). Ngoài ra, tỷ lệ tài nguyên được thực hiện trên cơ sở sử dụng trong máy chủ không có trong khi bạn phải mở rộng quy mô tài nguyên máy chủ trong bộ chứa.
Hãy nói về [Kubernetes][7], đó là phần mềm nguồn mở tự động hóa quản lý và triển khai container. Trong nhiều kịch bản, các container chạy các ứng dụng không có máy chủ nhưng [Kubernetes][7] không trực tiếp xử lý các container chạy các ứng dụng không có máy chủ. Tuy nhiên, có các tiện ích mở rộng tích hợp [Kubernetes][7] với các nhà cung cấp dịch vụ đám mây và xử lý tỷ lệ, định tuyến mạng, v.v.

## Trường hợp sử dụng máy chủ không có máy chủ {#Serverless-use-cases}

Có nhiều tình huống khác nhau, trong đó việc chọn không phát triển và triển khai dễ dàng. Một số trường hợp sử dụng nổi bật như sau:
**Phát triển API** : Kiến trúc không có máy chủ là ưu tiên hàng đầu của các nhà phát triển khi xây dựng API RESTful cho phần mềm kinh doanh của bạn. Các nhà phát triển chỉ tập trung vào việc xây dựng các tuyến API và phần còn lại thuộc về nhà cung cấp dịch vụ.
**Xây dựng phần mềm đa ngôn ngữ:**  Lựa chọn ngôn ngữ lập trình là một bước quan trọng trong phát triển phần mềm. Tuy nhiên, kiến ​​trúc không có máy chủ cung cấp một môi trường mà bạn có thể đi với bất kỳ ngôn ngữ nào để bắt đầu phát triển.
**Nhiệm vụ dựa trên sự kiện** : Các nhà phát triển có thể viết các chức năng không có máy chủ để xử lý các hành động dựa trên sự kiện. Ví dụ: tải lên ảnh của người dùng có thể kích hoạt một sự kiện như cập nhật cơ sở dữ liệu của người dùng. Vì vậy, tất cả những gì có thể được xử lý tốt bởi nhà cung cấp dịch vụ trong cơ sở hạ tầng không có máy chủ.
**Ứng dụng dựa trên đám mây:** Bạn cần đi với** Kiến trúc không có máy chủ**Nếu bạn đang xây dựng các ứng dụng web dựa trên đám mây có thể mở rộng. Hơn nữa, môi trường không có máy chủ làm cho sự phát triển trơn tru, kịp thời và hiệu quả về chi phí về số giờ của con người và triển khai.
**Quy trình nền hạng nặng** : Cơ sở hạ tầng không có máy chủ là lựa chọn tốt nhất cho trường hợp sử dụng này. Phần mềm có phụ trợ chịu trách nhiệm xử lý các nhiệm vụ mở rộng CPU là ứng cử viên phù hợp cho kiến ​​trúc này. Ngoài ra, bạn chỉ cần chăm sóc các nhiệm vụ phát triển cốt lõi và ngừng lo lắng về việc bảo trì và nhân rộng máy chủ.

## Lợi ích kinh doanh của máy tính không có máy chủ {#Business-benefits-of-Serverless-Computing}

Trong phần này, chúng ta sẽ nói về các lợi thế cốt lõi sau đây được đính kèm với điện toán không có máy chủ này:** 
**Triển khai không rắc rối:**  Triển khai phần mềm là một công việc thích hợp. Do đó, kiến ​​trúc không có máy chủ cung cấp các triển khai ứng dụng mạnh mẽ chỉ mất vài phút hoặc vài giờ.
**Hiệu quả phát triển** : Vì bảo trì và quản lý phụ trợ được thực hiện bởi các nhà phát triển nhà cung cấp dịch vụ đám mây sử dụng đầy đủ thời gian của họ trong phát triển phần mềm.
**Tỷ lệ tự động** : Bất cứ khi nào, cần phải mở rộng quy mô máy chủ, nó được thực hiện bởi nhà cung cấp dịch vụ đám mây. Một lần nữa cứu trợ cho các nhà phát triển.
**Hiệu quả về chi phí**:**  Kiến trúc không có máy chủ**có hiệu quả về chi phí vì bạn chỉ trả tiền cho những gì và khi bạn sử dụng nó. Hóa đơn tài chính của bạn phụ thuộc vào thời gian khi bạn đang hoạt động.

## Phần kết luận
Đó là nó cho bài viết trên blog này. Chúng tôi đã trải qua **Máy tính không có máy chủ**và cách nó tận dụng thế giới công nghệ. Ngoài ra, chúng tôi đã khám phá **các trường hợp sử dụng máy chủ** và **Lợi ích của máy tính không có máy chủ** và chúng tôi cũng đã chạm vào**serverless vs Container** . Bài đăng trên blog này sẽ thực sự giúp bạn nếu bạn sẵn sàng lựa chọn kiến ​​trúc không có máy chủ.

## Kết nối với chúng tôi
Cuối cùng, [containerize.com][8] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở khác. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][9], [LinkedIn][10] và [Twitter][11].

## Đặt một câu hỏi
Bạn có thể cho chúng tôi biết về câu hỏi hoặc truy vấn của bạn trên [Diễn đàn] của chúng tôi [12].

## Câu hỏi thường gặp
**Máy tính không có máy chủ** là gì?
Vui lòng theo dõi [liên kết][3] để biết máy chủ là gì và làm thế nào nó có thể mang lại hiệu quả trong việc phát triển và triển khai ứng dụng của bạn.

## Xem thêm
  * [Đa dạng là gì? | Tại sao một cách tiếp cận nhiều người thuê?][13]
  * [AI là gì | Trí tuệ nhân tạo thế hệ][14]
  * [Cách tích hợp Chatgpt với Google Sheets][15]
  * [Cách sử dụng chatgpt trong VSCODE | Mã mở rộng VSCode GPT][16]
  * [Openai Chatbot GPT-3 | Chatgpt một cuộc cách mạng AI][17]
  * [Giới thiệu về Trí tuệ nhân tạo | AI là gì?][18]



[1]: https://products.containerize.com/
[2]: https://products.containerize.com/rad/
[3]: #What-is-serverless-computing
[4]: #Serverless-vs-Containers
[5]: #Serverless-use-cases
[6]: #Business-benefits-of-Serverless-Computing
[7]: https://products.containerize.com/devops/kubernetes/
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
