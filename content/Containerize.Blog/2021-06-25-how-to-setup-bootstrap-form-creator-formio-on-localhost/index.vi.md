---
title: "Cách thiết lập Bootstrap Form Creator.io trên localhost" 
seoTitle: "Cách thiết lập Bootstrap Form Creator.io trên localhost" 
description: "Đi qua bài viết này và tìm hiểu cách thiết lập Formio trên localhost. Người tạo mẫu bootstrap này miễn phí, mở rộng và cung cấp các tích hợp của bên thứ ba." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Xây dựng các biểu mẫu dành riêng cho nhiệm vụ và có thể tùy chỉnh bằng cách sử dụng Trình tạo biểu mẫu HTML kéo và thả. Formio tự lưu trữ, điều khiển API, cung cấp các biểu mẫu và quản lý dữ liệu." 
url: /vi/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## Xây dựng các biểu mẫu dành riêng cho nhiệm vụ và có thể tùy chỉnh bằng cách sử dụng Trình tạo biểu mẫu HTML kéo và thả. Formio tự lưu trữ, điều khiển API, cung cấp các biểu mẫu và quản lý dữ liệu.

{{< figure align=center src="images/formio-1.png" alt="Bootstrap Form Creator">}}


## **Tổng quan**
Trong nhu cầu kinh doanh phát triển nhanh chóng, có rất nhiều hoạt động trực tiếp thuộc về giao dịch và tham gia công cộng. Sự tham gia này có thể là vật lý hoặc ảo. Đôi khi đó là về việc cung cấp dịch vụ và đôi khi là về việc thu thập dữ liệu hoặc phản hồi. Mặt khác, các tổ chức doanh nghiệp có xu hướng thu thập dữ liệu của khách hàng về sản phẩm và dịch vụ của họ. Do đó, lượng dữ liệu phụ thuộc vào phạm vi tiếp cận với đối tượng có liên quan. Tiếp theo, quản lý dữ liệu là một nhiệm vụ quan trọng khác và nó đòi hỏi sự chú ý to lớn.
Tuy nhiên, các lĩnh vực công ty sử dụng các biểu mẫu trực tuyến để đáp ứng nhu cầu liên quan đến thu thập dữ liệu. Có nhiều trang web có thể chứa nhiều hình thức như mẫu liên hệ, mẫu khiếu nại, mẫu phản hồi của khách hàng, mẫu đơn nhập học, v.v. Bây giờ, nó trở thành rắc rối để xây dựng, quản lý các biểu mẫu này và dữ liệu gửi. Đây là [form.io][1]. Form.io là một nhà tạo mẫu bootstrap nguồn mở cung cấp các khả năng quản lý dữ liệu và xây dựng biểu mẫu. Trong quá khứ gần đây, chúng tôi đã xuất bản một bài viết bao gồm [5 nhà xây dựng biểu mẫu trực tuyến nguồn mở hàng đầu vào năm 2020][2]. Trong bài đăng trên blog này, chúng tôi sẽ khám phá người tạo biểu mẫu bootstrap này cùng với quá trình thiết lập của nó trên localhost bằng cách bao gồm các điểm sau.
  * **[Hình thức là gì
  * **[Cách thiết lập Form.io trên localhost?][4]**
  * **[Làm thế nào để hình thức.io hoạt động?][5]**
  * **[Kết luận][6]**

## Form.io là gì?   {#Gì}
Form.io là một trình tạo mẫu nguồn mở miễn phí. Nó là phần mềm tự lưu trữ, đa ngôn ngữ và nhiều người thuê. Người tạo biểu mẫu HTML ** này cung cấp các quyền dựa trên vai trò cho người dùng và biểu mẫu. Form.io cung cấp xác thực OAuth và cho phép người dùng đăng nhập bằng các nhà cung cấp nhận dạng phổ biến như Google và Facebook. Hơn nữa, Trình tạo biểu mẫu HTML này dựa trên kiến ​​trúc không có máy chủ và người dùng có thể tạo và nhúng các biểu mẫu vào các ứng dụng khác bằng cách đặt một dòng mã duy nhất. Theo như giao diện người dùng, nó cung cấp giao diện người dùng logic với các tính năng kéo và thả. Có nhiều yếu tố HTML khác nhau ở một bên mà người dùng có thể kéo và thả để xây dựng biểu mẫu cần thiết. Người dùng có thể tiêm JavaScript tùy chỉnh cho chức năng nâng cao. Hơn nữa, người dùng có thể sửa đổi giao diện của biểu mẫu bằng CSS. Có các điều khoản để kiểm soát việc gửi và truy cập các biểu mẫu. Tuy nhiên, nhà sản xuất biểu mẫu HTML miễn phí này được viết bằng JavaScript và tất cả các mã nguồn đều có sẵn tại [GitHub][7].
Form.io cung cấp phạm vi rộng của các tính năng. Các tính năng chính được liệt kê dưới đây.
  * Đệ trình mẫu email
  * Quản lý dữ liệu
  * Nhà cung cấp OAuth
  * Các hình thức có thể nhúng
  * Bố cục thân thiện

## Làm thế nào để thiết lập Form.io trên localhost?   {#localhost}
Trong phần này của Hướng dẫn Trình tạo mẫu  **** , chúng ta sẽ xem cách thiết lập Form.io trên localhost. Thật dễ dàng để thiết lập vì nó cung cấp tài liệu toàn diện về việc triển khai và phát triển.
Trước khi đi xa hơn, hãy chắc chắn rằng bạn đã cài đặt các điều kiện tiên quyết sau đây.
  * Git
  * Nodejs
  * MongoDB
Khi các yêu cầu trước được cài đặt, hãy mở thiết bị đầu cuối chạy các lệnh sau:
```
mkdir formio<br>cd formio
```
Bây giờ, hãy chạy lệnh sau để sao chép mã nguồn của ứng dụng này:
```
git clone https://github.com/formio/formio.git
```
Khi một bản sao thành công, hãy chạy các lệnh sau để cài đặt các phụ thuộc:
```
cd formio <br>npm install
```
Sau đó, chạy ứng dụng bằng lệnh sau:
```
npm start 
```
Lệnh này sẽ hiển thị đầu ra sau với một số lời nhắc của người dùng:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Hướng dẫn xây dựng hình thức">}}

Bạn có thể truy cập ứng dụng trong trình duyệt tại địa chỉ sau.
```
http://localhost:3001 
```
Nó sẽ mở trang đăng nhập. Bạn có thể đăng nhập với thông tin đăng nhập mà bạn đã nhập trong quá trình cài đặt.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap Form Creator">}}


## Làm thế nào để Form.io hoạt động?   {#công việc}
Phân đoạn này mô tả cơ chế làm việc của [form.io][1]. Toàn bộ hệ sinh thái của nhà thiết kế hình thức này dựa trên các thành phần và thân thiện với nhà phát triển. Nó có thể mở rộng và cung cấp một giao diện nghỉ ngơi cho các ứng dụng của bên thứ ba. Vì vậy, hãy để Lừa xem cách tạo các biểu mẫu trong trình xây dựng hình thức  **này ** .
Sau khi đăng nhập, bạn sẽ hạ cánh trên trang sau.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="Kéo và thả Trình tạo hình thức HTML">}}

Bây giờ, nhấp vào nút hình thức mới của người Viking và tạo biểu mẫu đầu tiên. Trang sau sẽ được hiển thị. Bạn có thể thấy có một bảng điều khiển ở phía bên trái có chứa phần tử HTML cho các biểu mẫu. Nó chứa bốn phần như các thành phần cơ bản, các thành phần đặc biệt, và nhiều hơn nữa.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="Người tạo hình thức HTML">}}

Bạn có thể đặt tên biểu mẫu cùng với các thuộc tính khác. Bây giờ, nếu bạn chọn một phần tử biểu mẫu từ phía bên trái và thả nó vào giữa, bạn sẽ thấy hộp thoại sau.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap Form Creator">}}

Bạn có thể thấy rằng nó cho phép bạn sửa đổi chủ đề biểu mẫu, xác thực và các sửa đổi khác. Khi bạn xây dựng biểu mẫu của mình, hãy nhấn nút tạo ra và bạn sẽ hạ cánh trên biểu mẫu được tạo.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="Kéo và thả Trình tạo hình thức HTML">}}

Biểu mẫu được tạo đi kèm với các tùy chọn khác nhau, nơi bạn có thể chỉnh sửa biểu mẫu và xem dữ liệu đã gửi. Trong tab Action Action Action, bạn có thể đặt các móc gửi biểu mẫu trước hoặc đăng như email, webhook và nhiều hơn nữa. Trên hết, mọi biểu mẫu được tạo đều có API và người dùng có thể truy cập nó bằng cách chuyển ID biểu mẫu.

## Kết luận   {#conclusion}
Đây là kết thúc của hướng dẫn xây dựng hình thức này. Hy vọng bạn đã tìm hiểu về người tạo hình thức bootstrap này về các tính năng, triển khai và sử dụng của nó. Ngoài ra, có nhiều nhà xây dựng biểu mẫu nguồn mở cung cấp một loạt các tính năng. Tuy nhiên, điều rất quan trọng là chọn sản phẩm tốt nhất đáp ứng nhu cầu kinh doanh của bạn. Do đó, trong bài đăng trên blog này, chúng tôi đã quan sát thấy rằng Form.io cung cấp các tùy chỉnh về chức năng, bố cục và phong cách. Nó cho phép bạn tạo các biểu mẫu đa năng mà bạn có thể lưu trữ trên các trang web trực tiếp của mình. Trên thực tế, bạn có thể thu thập dữ liệu theo cách được tổ chức tốt trong cơ sở dữ liệu của riêng bạn hoặc trong bất kỳ tùy chọn lưu trữ nào khác.
Cuối cùng, [ **containerize.com ** ][8] đang trong một quá trình viết bài viết nhất quán về các chủ đề và sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với danh mục [Mẫu][9] này để cập nhật thường xuyên.

## Khám phá
  * **[form.io][1]**
  * **[Orbeon][10]**
  * **[ohmyform][11]**
  * **[Webiny][12]**
  * **[formtools][13]**
  * **[FormBuilder][14]**
  * **[Mẫu Alpaca][15]**
  *[ **Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí ** ][16]
  *[ **Nhà xây dựng biểu mẫu trực tuyến nguồn mở hàng đầu 5 trong năm 2020 ** ][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
