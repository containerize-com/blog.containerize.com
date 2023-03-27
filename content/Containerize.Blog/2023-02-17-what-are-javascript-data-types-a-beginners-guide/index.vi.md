---
title: "Các loại dữ liệu JavaScript là gì? | Hướng dẫn dành cho người mới bắt đầu" 
seoTitle: "Các loại dữ liệu JavaScript là gì? | Hướng dẫn dành cho người mới bắt đầu" 
description: "Các loại dữ liệu JavaScript là gì? Thực hiện theo hướng dẫn của người mới bắt đầu để tìm hiểu 7 loại dữ liệu được sử dụng trong số JavaScript, chuỗi, boolean, null, không xác định, v.v." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "Sự phổ biến của JavaScript là không thể ngăn cản do khả năng thích ứng của nó. Thực hiện theo hướng dẫn của người mới bắt đầu JavaScript này và bắt đầu nuôi dưỡng chuyên môn của bạn trong Stack JS." 
url: /vi/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## Sự phổ biến của JavaScript là không thể ngăn cản do khả năng thích ứng của nó. Thực hiện theo hướng dẫn của người mới bắt đầu JavaScript này và bắt đầu nuôi dưỡng chuyên môn của bạn trong Stack JS.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |Các loại dữ liệu JavaScript là gì? | Hướng dẫn của người mới bắt đầu">}}


## Tổng quan
Bất kể bạn là một cấp độ tầm thường hay nhà phát triển có kinh nghiệm, bạn sẽ nhận được các giải pháp cho các vấn đề của bạn trong các công việc phát triển. [containerize.com][1] đã bắt đầu viết các bài đăng trên blog hướng dẫn trong danh mục lập trình và chúng tôi đang bắt đầu với một hướng dẫn của người mới bắt đầu  **JavaScript** . Vì chúng tôi đang bắt đầu nên bài viết này là về các loại dữ liệu JavaScript. Hãy cùng khám phá **Các loại dữ liệu JavaScript là gì và xem các ví dụ về cách bạn có thể sử dụng chúng trong mã nguồn một cách hiệu quả. Do đó, hãy xem kỹ hướng dẫn của người mới bắt đầu này để bạn có thể hiểu rõ về các loại dữ liệu**  JavaScript**.
Chúng tôi đang đề cập đến điểm sau:
  * [Kiểu dữ liệu là gì?][2]
  * [Kiểu dữ liệu JavaScript là gì?][3]

## Các loại dữ liệu được giải thích | Kiểu dữ liệu là gì? {#What-is-a-data-type}

Một kiểu dữ liệu là tất cả về việc nói với trình biên dịch cách diễn giải hoặc biên dịch dữ liệu. Việc sử dụng các loại dữ liệu là rất quan trọng và phải được sử dụng một cách khôn ngoan. Nói một cách đơn giản, đó là về định dạng của dữ liệu như số, chuỗi, boolean và nhiều hơn nữa. Tuy nhiên, có hai loại loại dữ liệu loại dữ liệu nguyên thủy và các loại dữ liệu không nguyên thủy. Có tám loại dữ liệu nguyên thủy mà chúng ta sẽ trải qua trong phần tiếp theo.

## Các loại dữ liệu JavaScript là gì? {#What-are-JavaScript-Data-Types}

Trên thực tế, JavaScript là một ngôn ngữ được gõ lỏng lẻo, điều đó có nghĩa là bạn không phải xác định loại biến một cách rõ ràng. Bạn có thể gán bất kỳ giá trị nào cho một biến và biến đó sẽ lưu trữ giá trị đó như Chuỗi, Bigint, Boolean hoặc nhiều hơn.

{{< figure align=center src="images/web-development.png" alt="Hướng dẫn của người mới bắt đầu JavaScript">}}


#### Kiểu dữ liệu nguyên thủy
Các loại dữ liệu nguyên thủy là những loại dữ liệu bất biến và không thể thay đổi sau khi tạo và khởi tạo. Tuy nhiên, bạn có thể gán lại một giá trị mới nhưng không thể thay đổi giá trị hiện có.
Ví dụ:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
Trong ví dụ trên, chuỗi là một loại dữ liệu nguyên thủy và giá trị cũ đang được thay thế bằng giá trị mới nhưng sự thay đổi trong giá trị hiện tại không được phản ánh. Vì vậy, chúng ta có thể thấy nó vẫn là tên của tôi, tên của tôi được thay đổi không phải là tên của tôi được thay đổi;

#### Kiểu dữ liệu không nguyên thủy
Các loại dữ liệu không định tuyến là có thể thay đổi, trong các từ đơn giản đối diện với các loại dữ liệu nguyên thủy.
Ví dụ:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Ngoài ra, các loại dữ liệu nguyên thủy được so sánh theo giá trị và các loại dữ liệu không định tuyến luôn được so sánh bằng tham chiếu.
Ví dụ:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
Bây giờ, hãy để Lừa qua từng loại dữ liệu. Có 6 loại dữ liệu nguyên thủy và 1 loại dữ liệu không nguyên thủy.
 **Các loại dữ liệu nguyên thủy bao gồm:**  
*  **Chuỗi**  : Kiểu dữ liệu này đại diện cho dữ liệu văn bản bao gồm một chuỗi các ký tự được bao quanh bởi các trích dẫn.
*  **Số**  : Nó đại diện cho dữ liệu thập phân/không decimal, đặc biệt là số nguyên hoặc float.
*  **Boolean**  : Biểu diễn các giá trị logic true hoặc false.
*  **Biểu tượng**  : Biểu tượng được sử dụng để giữ các giá trị duy nhất.
*  **Không xác định**  : Một biến không có bất kỳ giá trị hoặc biến không chính thức.
*  **null**  : Sự vắng mặt của bất kỳ giá trị nào được coi là null.
 **Kiểu dữ liệu không nguyên thủy bao gồm:**  
 **Đối tượng** : Nó được sử dụng để lưu trữ bộ sưu tập dữ liệu bao gồm các cặp giá trị khóa.

## Phần kết luận
Đây là kết thúc của hướng dẫn dành cho người mới bắt đầu  **JavaScript này** . Chúng tôi đã trải qua **loại dữ liệu JavaScript**  là gì? Ngoài ra, chúng tôi đã khám phá loại dữ liệu là gì trong một hạt. Bạn nên hiểu rõ hơn về các loại dữ liệu nguyên thủy và****trong JavaScript. Bài đăng trên blog này sẽ thực sự giúp bạn nếu bạn đang muốn chuẩn bị cho một cuộc phỏng vấn xin việc.
Cuối cùng, [containerize.com][1] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][4], [LinkedIn][5] và [Twitter][6].

## Đặt một câu hỏi
Bạn có thể cho chúng tôi biết về câu hỏi hoặc truy vấn của bạn trên [Diễn đàn] của chúng tôi [7].

## Câu hỏi thường gặp
 **8 loại dữ liệu JavaScript là gì?** 
Vui lòng truy cập [Liên kết][3] này để biết 8 loại dữ liệu JavaScript.

## Xem thêm
  * [Nguồn miễn phí & nguồn mở JavaScript Frameworks][8]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][9]
  * [Top 10 công nghệ nguồn mở để học vào năm 2022][10]



 [1]: https://www.containerize.com/
 [2]: #What-is-a-data-type
 [3]: #What-are-JavaScript-Data-Types
 [4]: https://web.facebook.com/containerize
 [5]: https://www.linkedin.com/company/containerize/
 [6]: https://twitter.com/containerize_co
 [7]: https://forum.containerize.com/
 [8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
 [9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
 [10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
