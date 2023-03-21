---
title: "Async đang chờ gì trong JavaScript? | Hướng dẫn JavaScript" 
seoTitle: "Async đang chờ gì trong JavaScript?" 
description: "Async đang chờ gì trong JavaScript? Async & Await Keywords được sử dụng để vận hành các hoạt động không đồng bộ tốt hơn so với những lời hứa truyền thống trong JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Async đang chờ gì trong JavaScript? Async & Await Keywords được sử dụng để vận hành các hoạt động không đồng bộ tốt hơn so với những lời hứa truyền thống trong JavaScript." 
url: /vi/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 đã giới thiệu JavaScript Async/Await, đây là một trình bao bọc xung quanh những lời hứa. ASYNC/AIDIT được sử dụng để tiêu thụ các API dựa trên lời hứa theo cách hiện đại và đơn giản nhất.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Async đang chờ gì trong JavaScript??">}}


## Tổng quan
Chúng tôi đã đề cập [những lời hứa của JavaScript][1] trong bài đăng trên blog trước đây của chúng tôi và bạn phải truy cập nếu bạn muốn hiểu rõ về khái niệm đằng sau những lời hứa của JavaScript. Trong loạt bài [Hướng dẫn JavaScript][2], chúng tôi ở đây với một hướng dẫn JavaScript khác sẽ chứng minh các tính năng hiện đại của JavaScript Async/Await. Bài đăng trên blog này dành cho những người có kiến ​​thức trước về lời hứa của JavaScript. Hơn nữa, chúng tôi sẽ cố gắng bao gồm **Async/đang chờ đợi trong JavaScript **, và khi chúng tôi cần sử dụng Async/đang chờ đợi. Ngoài ra, chúng tôi cũng sẽ bao gồm các lỗi xử lý với async/đang chờ đợi. Vì vậy, hãy đọc kỹ cho hướng dẫn ** JavaScript Async/Await này**  để đánh dấu khái niệm này được kiểm tra.
Chúng tôi sẽ xem qua các phần sau trong JavaScript Async đang chờ đợi hướng dẫn:
  * **[Async/chờ đợi trong JavaScript | Async chờ đợi cú pháp][3]**
  * **[Khi nào nên sử dụng async/đang chờ?][4]**
  * **[Xử lý lỗi với Async/Await][5]**

## Async/chờ đợi trong JavaScript | Async Await Syntax   {#what-is-asyncawait-in-javascript-async-await-syntax}
ECMAScript 2017 đã phát hành các tính năng mới của JavaScript và Async/AIDIT là một trong những tính năng được sử dụng rộng rãi nhất trong số các tính năng này. Async/Await được xây dựng trên đỉnh của những lời hứa và thực sự là một cách hiện đại để xử lý những lời hứa của JavaScript.
Hãy xem cách sử dụng các từ khóa Async/Await trong mã JavaScript:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
Chà, từ khóa Async khi bắt đầu hàm ngụ ý rằng chức năng này sẽ trả về một lời hứa. Vì vậy, từ khóa đang chờ đợi luôn được sử dụng bên trong phần thân của hàm async để tạm dừng việc thực thi hàm cho đến khi lời hứa giải quyết. Điều quan trọng cần lưu ý ở đây là bạn không thể sử dụng từ khóa đang chờ đợi bên trong phần thân của một chức năng thông thường. Tuy nhiên, bạn chỉ có thể sử dụng chờ đợi với các hàm không đồng bộ được khai báo với từ khóa Async.

## Khi nào nên sử dụng async/đang chờ?   {#Khi-để-use-asyncawait}
Cho đến nay, bạn có câu trả lời cho  **Async đang chờ đợi trong JavaScript** . Vì đây chỉ là một trình bao bọc xung quanh JavaScript truyền thống hứa hẹn nên bạn nên sử dụng cách mới này để tạo và xử lý lời hứa theo cách sạch hơn và dễ đọc hơn. Ngoài ra, bạn có thể thoát khỏi nhiều cuộc gọi hứa hẹn. Sau đó, sử dụng Async/AIDIT, cuối cùng làm cho mã nguồn trở nên dễ quản lý và có thể duy trì hơn. Từ khóa đang chờ đóng gói câu lệnh .then () thành một dòng.

## Xử lý lỗi với Async/Await   {#-Handling-With-Asyncawait}
Xử lý lỗi là một nhiệm vụ quan trọng khi phát triển phần mềm cấp doanh nghiệp. Có nhiều cách để bắt lỗi trong cách tiếp cận Async/đang chờ đợi.

{{< figure align=center src="images/async-await.png" alt="Hãy thử bắt Async đang chờ JavaScript">}}

**Hãy thử bắt Async đang chờ JavaScript**: Không có gì mới với phương pháp xử lý lỗi này. Tuy nhiên, bạn có thể sử dụng khối thử/bắt bên trong hàm Async như được hiển thị trong đoạn mã bên dưới:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Sử dụng khối thử/bắt, bạn có thể bắt được các ngoại lệ bên trong phần thân của hàm async.
Trong khi đó, có một cách tiếp cận khác để xử lý các lỗi trong đó bạn có thể nối khối .catch () ở cuối cuộc gọi chức năng. Vì Async/đang chờ trả lại một lời hứa, vì vậy bạn sẽ bắt được các lỗi trong khối .catch ().
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Phần kết luận
Chúng tôi đang kết thúc điều này **JavaScript Async đang chờ hướng dẫn **. Hy vọng bạn hiểu rõ hơn về ** Async đang chờ đợi gì trong JavaScript** . Ngoài ra, chúng tôi đã đi qua JavaScript Async đang chờ cú pháp làm cho mã nguồn ít phức tạp hơn. Tính năng JavaScript này đang được sử dụng rộng rãi do sử dụng và hiệu suất phong phú của nó. Trong những ngày tới, chúng tôi sẽ viết thêm về các tính năng và khái niệm của JavaScript để bạn có thể có được một lệnh mạnh mẽ đối với các khái niệm JS. Hơn nữa, có một số bài viết thú vị khác được đề cập trong phần "Xem thêm".

## Kết nối với chúng tôi
Cuối cùng, [containerize.com][6] cung cấp các hướng dẫn JavaScript đang diễn ra về các chủ đề thú vị khác nhau. Bạn có thể cập nhật bằng cách theo dõi chúng tôi trên các nền tảng truyền thông xã hội của chúng tôi, bao gồm [Facebook][7], [LinkedIn][8] và [Twitter][9].

## Đặt một câu hỏi
Bạn có thể cho chúng tôi biết về câu hỏi hoặc truy vấn của bạn trên [Diễn đàn] của chúng tôi [10].

## Câu hỏi thường gặp
**Async đang chờ gì trong JavaScript với ví dụ?**
Bạn có thể truy cập [liên kết][3] này để hiểu khái niệm về Async đang chờ đợi.
**Async đang chờ đợi gì vs Promise?**
 * ASYNC/AIDIT làm cho mã nguồn rõ ràng hơn và dễ đọc hơn so với những lời hứa trong đó chuỗi hứa hẹn có thể làm cho mã nguồn trở thành một mớ hỗn độn.
 * Xử lý lỗi là khá giống nhau trong cả hai phương pháp.
 * Gỡ lỗi là ít khó khăn hơn trong Async đang chờ đợi.
 * Lời hứa duy trì các quốc gia như chờ xử lý, giải quyết hoặc bị từ chối. Trong khi đó, async/đang chờ được giải quyết hoặc bị từ chối.

## Xem thêm
  * [Lời hứa trong JavaScript là gì? | Hướng dẫn JavaScript][1]
  * [Máy ​​tính không có máy chủ là gì? | Kiến trúc không có máy chủ][11]
  * [Đa dạng là gì? | Tại sao một cách tiếp cận nhiều người thuê?][12]
  * [AI là gì | Trí tuệ nhân tạo thế hệ][13]
  * [Cách tích hợp Chatgpt với Google Sheets][14]
  * [Cách sử dụng chatgpt trong VSCODE | Mã mở rộng VSCode GPT][15]
  * [Openai Chatbot GPT-3 | Chatgpt một cuộc cách mạng AI][16]
  * [Giới thiệu về Trí tuệ nhân tạo | AI là gì?][17]

  
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
