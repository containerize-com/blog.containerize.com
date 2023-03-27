---
title: "Bắt đầu với một máy phát biểu mẫu HTML | Trình tạo Mẫu" 
seoTitle: "Bắt đầu với một máy phát biểu mẫu HTML | Trình tạo Mẫu" 
description: "FormBuilder là một trình tạo biểu mẫu HTML miễn phí và đa ngôn ngữ với giao diện người dùng kéo và thả. Thực hiện theo hướng dẫn này để tìm hiểu làm thế nào để thiết lập nó trên localhost." 
date: Wed, 08 Sep 2021 18:01:02 +0000
author: muhammadmustafa
summary: "Trình chỉnh sửa biểu mẫu nguồn mở được hỗ trợ JavaScript với nhiều cấu hình, mẫu hình thức có thể định cấu hình và điều khiển tùy chỉnh. Hãy tìm hiểu cách thiết lập FormBuilder." 
url: /vi/getting-started-with-a-html-form-generator-formbuilder/
categories: ['Form']
---

## Trình chỉnh sửa biểu mẫu nguồn mở được hỗ trợ JavaScript với nhiều cấu hình, mẫu hình thức có thể định cấu hình và điều khiển tùy chỉnh. Hãy cùng học cách thiết lập FormBuilder.

{{< figure align=center src="images/formbuilder.png" alt="Trình tạo biểu mẫu HTML">}}


## **Tổng quan** 
Gần đây chúng tôi đã xuất bản một số bài viết về các chủ đề như [Cách thiết lập Bootstrap Form Creator.io trên localhost][1] và [5 nhà xây dựng biểu mẫu trực tuyến nguồn mở hàng đầu trong năm 2020][2]. Bài đăng trên blog đầu tiên là một bài viết hướng dẫn thể hiện quy trình thiết lập và tính năng của Trình tạo mẫu Bootstrap [Form.io][3]. Bài viết thứ hai nói về các nhà xây dựng mẫu nguồn mở được sử dụng rộng rãi. Tại thời điểm hiện tại, tương tác hai chiều là điều quan trọng nhất giữa các nhà cung cấp dịch vụ và người tiêu dùng dịch vụ. Các tổ chức có xu hướng nhận được phản hồi nhất quán về dịch vụ của họ và sau đó họ xây dựng các chiến lược kinh doanh trong tương lai. Tuy nhiên, các hình thức là để thu thập và lưu trữ thông tin từ khách hàng. Các doanh nghiệp sản xuất một số hình thức để thu thập dữ liệu về các hoạt động liên tục khác nhau và có nhiều loại hình thức Một số trong số chúng là một trang đơn và một số trong số chúng là các hình thức nhiều trang. Một số doanh nghiệp đã nhúng các biểu mẫu trên cổng thông tin trực tuyến của họ hoặc một số trong số họ sử dụng email hoặc các loại phương tiện khác để hiển thị các biểu mẫu của họ để thu thập dữ liệu.
Do đó, có nhiều biểu mẫu nguồn mở và phần mềm quản lý dữ liệu có sẵn với các khả năng của Trình tạo mẫu phong phú. Trong bài viết này, chúng tôi sẽ khám phá Trình tạo biểu mẫu HTML miễn phí **[FormBuilder][4]** bằng cách bao gồm các điểm sau.
* **[FormBuilder là gì?][5]** 
* [ **Cách thiết lập?** ][6]
* [ **Cách tạo biểu mẫu bằng FormBuilder?** ][7]
* **[Kết luận][8]** 

## FormBuilder là gì? {#what}

[FormBuilder][4] là một nhà thiết kế biểu mẫu nguồn mở cho phép người dùng tạo các biểu mẫu tương tác. Nó là an toàn, có thể mở rộng và đi kèm với khả năng tự lưu trữ. Trình tạo biểu mẫu HTML này là đa ngôn ngữ và cung cấp hỗ trợ cho nhiều ngôn ngữ. Có một giao diện người dùng thân thiện với người dùng, nơi người dùng có thể kéo và thả các thành phần biểu mẫu để hình thành mẫu biểu mẫu cần thiết. Hơn nữa, nó cung cấp các điều khiển phong phú và các mẫu hình thức cấu hình. Ngoài ra, người dùng có thể tạo nhiều tab trên giao diện người dùng để xây dựng các biểu mẫu nhiều trang. Trên hết, người dùng có thể có xu hướng xây dựng biểu mẫu miễn phí này bằng cách phát triển các plugin của mình. Nó có tất cả các tài liệu có sẵn liên quan đến phát triển và triển khai. Nó được viết bằng Node.js và tất cả các mã nguồn có sẵn trên [GitHub][9].
Dưới đây là những điểm nổi bật hàng đầu của Mẫu.IO
  * I18N Tích hợp
  * Hình thức nhiều trang
  * Có thể mở rộng
  * Hỗ trợ cho các khung đầu tiên JavaScript phổ biến
  * Kéo và thả ui

## Làm thế nào để thiết lập? {#setup}

Phần này của hướng dẫn xây dựng biểu mẫu sẽ chỉ cho bạn cách thiết lập FormBuilder trên máy cục bộ.
Trước khi đi xa hơn, hãy chắc chắn rằng bạn đã cài đặt các điều kiện tiên quyết sau đây.
  * Node.js> = 10.9.0
  * NPM
  * Git
Sau khi cài đặt các điều kiện tiên quyết, hãy chạy lệnh sau để sao chép mã nguồn của ứng dụng này:
```
git clone https://github.com/kevinchappell/formBuilder
```
Tiếp theo, chạy các lệnh sau để cài đặt các phụ thuộc:
```
cd form-builder<br>npm install 
```
Sau đó, bạn có thể bắt đầu ứng dụng bằng cách chạy lệnh sau:
```
npm start
```
Cuối cùng, lệnh trên sẽ mở ứng dụng vào trình duyệt tại địa chỉ sau:
```
http://localhost:8080/
```

## Làm thế nào để tạo các biểu mẫu bằng FormBuilder? {#how}

Trong phần này, chúng tôi sẽ khám phá các tính năng của trình tạo biểu mẫu HTML này và chúng tôi sẽ tìm hiểu làm thế nào chúng tôi có thể tạo các biểu mẫu.
Giao diện người dùng sau sẽ xuất hiện khi bạn khởi động máy chủ.

{{< figure align=center src="images/Screenshot-2021-09-08-at-18.43.50-1024x574.png" alt="Trình tạo biểu mẫu HTML">}}

Di chuyển về phía trước, bạn có thể thấy thanh menu ở phía bên phải. Nó chứa các yếu tố biểu mẫu như nút, hộp kiểm, trường văn bản, trường dữ liệu, tiêu đề, đoạn văn, v.v. Tuy nhiên, bạn có thể kéo các yếu tố này và thả ở khu vực giữa (có thể bỏ rơi) của màn hình. Ở góc trên cùng bên trái, có một tùy chọn để bật phiên bản bootstrap của ứng dụng. Ở góc trên cùng bên trái, có một thả xuống nơi người dùng có thể chọn bất kỳ ngôn ngữ có sẵn nào.

{{< figure align=center src="images/Screenshot-2021-09-08-at-21.29.20-1024x578.png" alt="Biên tập mẫu">}}

Tiếp theo, chúng ta có thể kéo và thả bất kỳ phần tử biểu mẫu nào vào khu vực có thể bỏ rơi. Hơn nữa, chúng ta có thể chỉnh sửa các cấu hình của bất kỳ phần tử nào như trong hình trên. Có một tùy chọn để tạo một bản sao của phần tử hiện có. Chúng ta có thể thay đổi vị trí của các yếu tố với nhau.

{{< figure align=center src="images/Screenshot-2021-09-08-at-23.02.50-1024x575.png" alt="Trình tạo biểu mẫu HTML">}}

Khi bạn đã hoàn thành việc xây dựng biểu mẫu, bạn có thể hiển thị biểu mẫu bằng cách nhấn nút Render Render được đặt ở giữa trên cùng. Hơn nữa, có nhiều tùy chọn biểu mẫu khác nhau, nơi người dùng có thể nhận được HTML được tạo ra phía sau các biểu mẫu. Có các tùy chọn khác cũng như tải mẫu người dùng, hiển thị dữ liệu người dùng, biểu mẫu người dùng và biểu mẫu người dùng rõ ràng. Cùng với các tính năng này, có nhiều hành động biểu mẫu có sẵn như là Get GetFieldTyPes, trả về các loại trường đã đăng ký cho biểu mẫu. Tương tự, có nhiều hành động khác như hiển thị dữ liệu, nhận XML, đặt dữ liệu, chuyển đổi chỉnh sửa và một số hành động khác. Tuy nhiên, có nhiều thứ khác mà bạn có thể tự kiểm tra. Vì nó là nguồn mở, bạn có thể sửa đổi nó theo yêu cầu của bạn.

## Phần kết luận {#Phần kết luận}

Đây là kết thúc của bài viết trên blog. Chúng tôi hy vọng hướng dẫn này sẽ thực sự giúp bạn nếu bạn đang tìm cách triển khai một trình tạo biểu mẫu HTML nguồn mở. Bài viết này đã đề cập đến nhiều khía cạnh của FormBuilder để bạn có thể dễ dàng đưa ra lựa chọn xem xét nhu cầu kinh doanh của mình. Những nhà xây dựng mẫu nguồn mở miễn phí này có hiệu quả về chi phí và tiết kiệm thời gian. Các công cụ miễn phí này không chỉ cung cấp các khả năng xây dựng hình thức mà còn cung cấp các biểu mẫu và quản lý dữ liệu. Bạn có thể định cấu hình các biểu mẫu với các ứng dụng web của bên thứ ba. Ngoài ra, nó loại bỏ sự rắc rối của việc tạo các hình thức khác nhau cho các ứng dụng kinh doanh khác nhau thay vì chủ doanh nghiệp có thể tạo ra bất kỳ hình thức nào bằng cách sử dụng các nhà xây dựng hình thức nguồn mở này. Hơn nữa, có những plugin có sẵn cho các trình chỉnh sửa biểu mẫu mà các nhà phát triển có thể sửa đổi theo yêu cầu. Do đó, đã đến lúc tự động hóa các tác vụ lặp đi lặp lại như vậy bằng cách sử dụng một trình tạo mẫu HTML miễn phí tốt.
Cuối cùng, [Containererize.com][10] đang viết các bài viết trên các sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với danh mục [Mẫu][11] để biết tin tức và cập nhật thường xuyên.

## Khám phá
* **[form.io][3]** 
* **[Orbeon][12]** 
* **[ohmyform][13]** 
* **[Webiny][14]** 
* **[formtools][15]** 
* **[FormBuilder][4]** 
* **[Mẫu Alpaca][16]** 
* [ **Cách thiết lập biểu mẫu Bootstrap Formor.io trên localhost** ][1]
* [ **Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí** ][17]
* [ **Nhà xây dựng biểu mẫu trực tuyến nguồn mở hàng đầu 5 trong năm 2020** ][2]



[1]: https://blog.containerize.com/form/how-to-setup-bootstrap-form-creator-formio-on-localhost/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/form/formbuilder/
[5]: #what
[6]: #setup
[7]: #how
[8]: #Conclusion
[9]: https://github.com/kevinchappell/formBuilder
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/healthcare-technologies/
[12]: https://products.containerize.com/form/orbeon/
[13]: https://products.containerize.com/form/ohmyform/
[14]: https://products.containerize.com/form/webiny/
[15]: https://products.containerize.com/form/formtools/
[16]: https://products.containerize.com/form/alpaca/
[17]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
