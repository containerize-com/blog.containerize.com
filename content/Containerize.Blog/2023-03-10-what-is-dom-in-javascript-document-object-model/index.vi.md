---
title: "Dom trong JavaScript là gì? | Mô hình Đối tượng Tài liệu" 
seoTitle: "Dom trong JavaScript là gì?" 
description: "Dom trong JavaScript là gì? Hướng dẫn này sẽ chứng minh mô hình đối tượng tài liệu, thuộc tính của DOM, mức độ của DOM và cách truy cập các thành phần DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "Dom trong JavaScript là gì? Hướng dẫn này sẽ chứng minh mô hình đối tượng tài liệu, thuộc tính của DOM, mức độ của DOM và cách truy cập các thành phần DOM." 
url: /vi/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Biểu diễn của một tài liệu HTML bên trong trình duyệt web được coi là cây HTML DOM. Nó là một loạt các đối tượng và xác định cấu trúc của một trang web.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="Dom trong JavaScript là gì??">}}


## Tổng quan
Chào mừng bạn đến với một bài đăng trên blog thú vị khác trong loạt [chương trình JavaScript][1]. Trong bài viết này, chúng tôi sẽ chạm vào một khái niệm rất cơ bản nhưng thiết yếu về phát triển web. Có, chúng tôi sẽ bao gồm mô hình đối tượng tài liệu trong JavaScript. Trước đây, chúng tôi đã xuất bản các hướng dẫn JavaScript bắt buộc phải bắt đầu phát triển bằng ngôn ngữ JavaScript. Do đó, chúng tôi khuyên bạn nên đọc bài đăng trên blog này để bạn không bỏ lỡ bất cứ điều gì liên quan đến khái niệm quan trọng này. Hãy bắt đầu hướng dẫn này và tìm hiểu  **Dom trong JavaScript**  , các thuộc tính của DOM và cách bạn có thể tương tác với nó theo chương trình.
Chúng tôi sẽ đề cập các chủ đề sau trong hướng dẫn JavaScript này:
*  **[Mô hình đối tượng tài liệu là gì (DOM)?][2]**  
*  **[Cấp độ DOM][3]**  
*  **[Thuộc tính DOM là gì và cách truy cập chúng?][4]**  

## Mô hình đối tượng tài liệu (DOM) là gì? {#What-is-Document-Object-Model}

DOM là viết tắt của?  **Mô hình đối tượng tài liệu (DOM)**  là đại diện của một trang web bên trong trình duyệt web. Đơn giản, biểu diễn phân cấp của các yếu tố của tài liệu HTML trong trình duyệt được gọi là mô hình đối tượng tài liệu. Nó được hình thành trong một hình dạng cây thực sự được tạo bởi trình duyệt web. Nó bao gồm các nút khác nhau được kết nối với nhau tạo thành hình dạng cây. Ngoài ra, các yếu tố DOM có các thuộc tính và sự kiện gắn liền với chúng.
Trên thực tế, DOM là một giao diện lập trình hình thành cấu trúc logic của một trang web và quyết định cách truy cập các yếu tố trang. Về cơ bản, JavaScript không nhận ra các thẻ HTML như Tiêu đề, H1 và v.v. Do đó, một khi tài liệu HTML được tải vào trình duyệt web, DOM được tạo ra sau đó giúp JavaScript hiểu được các phần tử tài liệu.

## Cấp độ DOM {#DOM-levels}

Phần này sẽ chứng minh các cấp độ khác nhau của DOM. Đầu tiên, có một đối tượng cửa sổ trong trình duyệt luôn ở trên cùng và sau đó có một nút tài liệu. Hãy xem hình ảnh dưới đây:

{{< figure align=center src="images/DOM.png" alt="Cấp độ DOM">}}

Chà, bạn có thể thấy các phần tử DOM trong hình trên. Cửa sổ và tài liệu là các đối tượng trình duyệt cấp cao nhất và sau đó chúng ta có phần tử HTML làm gốc. Di chuyển, chúng ta có các nút đầu và cơ thể, nút tiêu đề thuộc về nút đầu và nút cơ thể chứa tất cả các nút được hiển thị và hiển thị trong trình duyệt web. Hơn nữa, các phần tử cơ thể chứa các thuộc tính mà chúng ta có thể thấy trong hình ảnh như thẻ neo chứa thuộc tính "href". Tương tự, các nút DOM khác chứa các thuộc tính khác nhau như IMG, meta, v.v.

## Thuộc tính DOM là gì và cách truy cập chúng? {#What-are-DOM-properties-and-how-to-access-them}

Cho đến nay, chúng tôi đã đưa ra một câu trả lời cho những gì DOM trong các cấp độ JavaScript và DOM, và chúng tôi cũng đã đi qua các nút dom. Trong phần này, chúng tôi sẽ đi qua các thuộc tính của DOM và sẽ xem làm thế nào chúng ta có thể tương tác với chúng. Mỗi phần tử DOM có một giá trị được liên kết với nó, chẳng hạn như Thẻ "P" có thuộc tính văn bản, thẻ IMG có hình ảnh, v.v. Các phương thức JavaScript được sử dụng để truy cập các giá trị của các nút. Hơn nữa, bạn có thể thêm/xóa người nghe sự kiện vào các thành phần DOM.
Bạn có thể tìm thấy các thuộc tính  **DOM sau đây**  :
 **InsideHtml** : Thuộc tính này được sử dụng để đặt hoặc tìm nạp nội dung HTML của nút dom.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
 **InnerText** : Sử dụng thuộc tính DOM này để truy cập hoặc đặt nội dung văn bản của phần tử HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
 **ParentEuity** : Bạn có thể sử dụng thuộc tính này để truy cập nút cha của phần tử.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
 **Kiểu** : Cập nhật thuộc tính kiểu của một phần tử.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
 **Tiêu đề** : Sử dụng thuộc tính này để cập nhật phần tử tiêu đề của DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 Sau đây là một số phương pháp chúng ta có thể sử dụng để tương tác với JavaScript DOM:
 **addEventListener ()** : phương thức DOM này được sử dụng để gắn trình xử lý sự kiện vào một phần tử.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
 **getAttribution ()** : phương thức DOM này được sử dụng để gắn trình xử lý sự kiện vào một phần tử.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
 **getEuityById ()** : Phương thức để có được một yếu tố cụ thể với "id" đã cho.
```
let element = document.getElementById("myID");
```
 **QuerySelector ()** : Sử dụng phương pháp này để có được phần tử con đầu tiên đang được khớp với bộ chọn CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
 **toString ()** : Bạn có thể sử dụng phương thức này để chuyển đổi một phần tử thành một chuỗi.
Tương tự như vậy, có nhiều phương pháp và thuộc tính khác mà bạn có thể khám phá.

## Phần kết luận
Chúng tôi đang kết thúc hướng dẫn Javasxcript này ở đây với hy vọng bạn có hiểu biết tốt về  **Dom trong JavaScript** . Chúng tôi cũng đã trải qua các thuộc tính **DOM, DOM, HTML DOM và DOM**  . Bài đăng trên blog này rất cần thiết cho những người mới, những người đang muốn có một sự kìm kẹp mạnh mẽ đối với các khái niệm Javascrit. Ngoài ra, có những bài viết có liên quan khác mà bạn có thể tìm thấy trong phần "Xem thêm".

## Kết nối với chúng tôi
Cuối cùng, [containerize.com][5] cung cấp các hướng dẫn JavaScript đang diễn ra về các chủ đề thú vị khác nhau. Bạn có thể ở trong vòng lặp bằng cách theo dõi chúng tôi trên các nền tảng truyền thông xã hội của chúng tôi, bao gồm [Facebook][6], [LinkedIn][7] và [Twitter][8].

## Đặt một câu hỏi
Bạn có thể cho chúng tôi biết về câu hỏi hoặc truy vấn của bạn trên [Diễn đàn] của chúng tôi [9].

## Câu hỏi thường gặp
 **Dom được sử dụng trong JavaScript là gì?** 
Bạn có thể truy cập [liên kết][2] này để có được câu trả lời chi tiết cho câu hỏi này.

## Xem thêm
  * [Lời hứa trong JavaScript là gì? | Hướng dẫn JavaScript][10]
  * [Máy ​​tính không có máy chủ là gì? | Kiến trúc không có máy chủ][11]
  * [Đa dạng là gì? | Tại sao một cách tiếp cận nhiều người thuê?][12]
  * [AI là gì | Trí tuệ nhân tạo thế hệ][13]
  * [Async đang chờ gì trong JavaScript? | Hướng dẫn JavaScript][14]
  * [Cách sử dụng chatgpt trong VSCODE | Mã mở rộng VSCode GPT][15]
  * [Openai Chatbot GPT-3 | Chatgpt một cuộc cách mạng AI][16]
  * [Giới thiệu về Trí tuệ nhân tạo | AI là gì?][17]



 [1]: https://blog.containerize.com/categories/programming/
 [2]: #What-is-Document-Object-Model
 [3]: #DOM-levels
 [4]: #What-are-DOM-properties-and-how-to-access-them
 [5]: https://www.containerize.com/
 [6]: https://web.facebook.com/containerize
 [7]: https://www.linkedin.com/company/containerize/
 [8]: https://twitter.com/containerize_co
 [9]: https://forum.containerize.com/
 [10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
 [11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
 [15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
