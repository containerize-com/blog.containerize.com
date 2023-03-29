---
title: "Lời hứa trong JavaScript là gì? | Hướng dẫn JavaScript" 
seoTitle: "Lời hứa trong JavaScript là gì?" 
description: "Lời hứa trong JavaScript là gì? Một lời hứa là một khối mã cho kết quả cuối cùng của một hoạt động không đồng bộ như đang chờ xử lý, hoàn thành hoặc bị từ chối." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "Lời hứa trong JavaScript là gì? Một lời hứa là một khối mã cho kết quả cuối cùng của một hoạt động không đồng bộ như đã hoàn thành hoặc bị từ chối." 
url: /vi/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## Bạn đang đấu tranh để tìm hiểu khái niệm về những lời hứa của JavaScript? Bài viết này sẽ giải thích làm thế nào để tạo ra một lời hứa, tại sao chúng ta sử dụng Promise trong JavaScript và hơn thế nữa.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Tổng quan
Chúng tôi hy vọng bạn hiểu rõ hơn về [loại dữ liệu JavaScript][1]. Bây giờ, đây là một bài đăng trên blog khác trong danh mục [Lập trình][2]. Trong hướng dẫn JavaScript này, chúng tôi sẽ trải qua **những gì được hứa hẹn trong JavaScript** , và cùng với đó, chúng tôi cũng sẽ thấy những gì là các hoạt động không đồng bộ, việc sử dụng lời hứa và cách tạo ra những lời hứa trong JavaScript. Đầu tiên, một quy trình/hoạt động không đồng bộ là một quy trình thực thi độc lập đối với các quy trình khác và không tạo ra bất kỳ tắc nghẽn nào. Do đó, bạn cần xử lý các hoạt động không đồng bộ nếu không nó có thể tạo ra sự bất thường trong mã JavaScript của bạn. Vì vậy, chúng tôi sẽ khám phá cách chúng tôi có thể xử lý các hoạt động không đồng bộ bằng cách sử dụng lời hứa.
Chúng tôi sẽ đề cập đến các điểm sau trong hướng dẫn JavaScript này:
* **[Lời hứa trong JavaScript là gì? Lời hứa đã giải thích][3]** 
* **[Tại sao chúng ta sử dụng Promise trong JavaScript?][4]** 
* **[Lời hứa hoạt động như thế nào trong JavaScript?][5]** 
* **[Làm thế nào để tạo ra một lời hứa?][6]** 

## Lời hứa trong JavaScript là gì? Lời hứa giải thích {#What-is-promise-in-JavaScript-Promises-Explained}

Một lời hứa là một đối tượng đại diện cho một giá trị của thời tiết hoạt động không đồng bộ mà nó được giải quyết, bị từ chối hoặc đang ở trong trạng thái đang chờ xử lý. Nói một cách đơn giản hơn, những lời hứa được sử dụng để trả về một giá trị chưa được tạo ra bởi một khối mã không đồng bộ. Trên thực tế, có ba **trạng thái hứa hẹn** và nó có thể ở bất kỳ trạng thái nào sau đây:
**Đang chờ xử lý** : Lời hứa đang ở trạng thái chờ xử lý, điều đó có nghĩa là nó trong giai đoạn bắt đầu và hiện đang được thực hiện.
**Hoàn thành** : Lời hứa được giải quyết và giá trị đã được trả lại.
**bị từ chối** : Đây là trạng thái gây ra bởi bất kỳ lỗi nào có nghĩa là lời hứa đã bị từ chối.
Một điều quan trọng cần xem xét ở đây là giá trị/trạng thái được trả lại bởi lời hứa là bất biến và không thể thay đổi, điều này có nghĩa là những lời hứa đảm bảo rằng không có hành vi bất thường.

## Tại sao chúng ta sử dụng Promise trong JavaScript? {#Why-we-use-promise-in-JavaScript}

Nếu bạn không biết **HELLBACK HELL**thì hãy để tôi chia sẻ nó là gì. Đầu tiên, một cuộc gọi lại là một hàm bên trong một chức năng khác. Về cơ bản, một hàm gọi lại được truyền dưới dạng đối số thứ hai trong một hàm thực thi khi nhận kết quả. Vì vậy, trong nhiều tình huống, bạn cần tổ chức năng gọi lại và khi làm tổ tăng, nó trở nên gần như không thể xử lý. Do đó, chúng tôi gọi đây là việc làm tổ dài các chức năng gọi lại**Callback Hell** .
Vì vậy, một lời hứa là một cách để tránh một tình huống gọi lại. Việc sử dụng lời hứa cho khả năng đọc tốt hơn và xử lý lỗi được cải thiện. Hơn nữa, bạn có thể xử lý tốt hơn các hoạt động không đồng bộ bằng cách truy xuất giá trị được trả về và chuyển giá trị đó cho hàm tiếp theo trong chuỗi.

## Làm thế nào lời hứa hoạt động trong JavaScript? {#How-promise-works-in-JavaScript}

Bây giờ, hãy để hiểu về cơ chế làm việc đằng sau những lời hứa. Xin vui lòng xem các sơ đồ được đề cập dưới đây.

{{< figure align=center src="images/what-is-a-promise.png" alt="Làm thế nào lời hứa hoạt động trong JavaScript??" >}}

Theo quy trình công việc đã đề cập ở trên, các chi tiết triển khai khá rõ ràng. Lời hứa bắt đầu thực hiện khi tạo ra nó và đang ở trạng thái chờ xử lý chờ phản hồi. Có hai tùy chọn sẽ có dữ liệu hoặc sẽ có lỗi khi kết thúc xử lý. Khi nhận dữ liệu, nó đi vào khối .then () và nó đi vào khối .catch () trong trường hợp có lỗi.

## Làm thế nào để tạo ra một lời hứa? {#How-to-create-a-promise}

Cho đến nay, chúng tôi đã đề cập đến khái niệm cơ bản của lời hứa. Bây giờ, chúng ta sẽ khám phá làm thế nào chúng ta có thể tạo ra một lời hứa trong JavaScript. Chúng ta hãy sử dụng hàm tạo lời hứa sau đây để tạo ra một lời hứa.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Hứa trình xây dựng có một chức năng như một đối số một lần nữa lấy hai đối số trước, giải quyết và từ chối khác. Nó gọi phương thức resolve () trong trường hợp thành công và nó đi vào khối từ chối () trong trường hợp lỗi hoặc từ chối.
Chúng ta hãy đi sâu một chút và khám phá sự sáng tạo hứa hẹn thêm một chút.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
Trong đoạn mã ở trên, bạn có thể thực hiện thêm các cuộc gọi API trong khối resolve ().
Bây giờ, chúng ta hãy xem mô hình thực thi của một lời hứa JavaScript.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
Sau đây là đầu ra của đoạn mã trên:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Vì vậy, mã bên trong cơ thể Promise hoạt động đồng bộ để "thực thi đồng bộ" được in. Tiếp theo, khối .then () hoạt động không đồng bộ và chờ đợi cho đến khi kết quả được tạo ra nhưng việc thực hiện chương trình không dừng lại đó là lý do tại sao "Hello Word" được in và thực thi hứa hẹn đã được hoãn lại. Sau đó, chặn () chặn thực thi và trả về các giá trị mà nó đã hứa. Đó là câu chuyện về những lời hứa của JavaScript. Một lần nữa, vì JavaScript là một luồng, lời hứa được sử dụng để xử lý các hoạt động không đồng bộ theo cách không chặn.

## Phần kết luận
Đây là kết thúc của hướng dẫn **JavaScript**này. Hy vọng bạn có một ý tưởng tốt về những lời hứa của JavaScript. Chúng tôi đã đề cập **những gì là lời hứa trong JavaScript** , tại sao chúng tôi sử dụng Promise trong JavaScript,**Hoạt động hoạt động như thế nào trong JavaScript** , và làm thế nào để tạo ra một lời hứa. Hơn nữa, chúng tôi sẽ đề cập đến chủ đề này nhiều hơn về việc sử dụng và quy định tiên tiến của nó. Do đó, hãy xem qua bài viết này trong trường hợp bạn đang chuẩn bị cho một buổi phỏng vấn.

## Kết nối với chúng tôi
Cuối cùng, [containerize.com][7] cung cấp các hướng dẫn JavaScript đang diễn ra về các chủ đề thú vị khác nhau. Bạn có thể ở trong vòng lặp bằng cách theo dõi chúng tôi trên các nền tảng truyền thông xã hội của chúng tôi, bao gồm [Facebook][8], [LinkedIn][9], và [Twitter][10].

## Đặt một câu hỏi
Bạn có thể cho chúng tôi biết về các câu hỏi hoặc câu hỏi của bạn trên [Diễn đàn] của chúng tôi [11].

## Câu hỏi thường gặp
**Những lời hứa trong JavaScript với ví dụ là gì?** 
Vui lòng theo dõi [liên kết][3] để biết những lời hứa trong JavaScript là gì.

## Xem thêm
  * [Kiểu dữ liệu JavaScript là gì? | Hướng dẫn dành cho người mới bắt đầu][1]
  * [Kiến trúc dựa trên nhiều người thuê và container của Kubernetes][12]
  * [Máy ​​tính không có máy chủ là gì? | Kiến trúc không có máy chủ][13]
  * [Đa dạng là gì? | Tại sao một cách tiếp cận nhiều người thuê?][14]
  * [Kiểu dữ liệu JavaScript là gì? | Hướng dẫn dành cho người mới bắt đầu][15]



[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
