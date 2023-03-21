---
title: "Cách bật nén GZIP trong WordPress | Gzip WordPress" 
seoTitle: "Cách bật nén GZIP trong WordPress | Gzip WordPress" 
description: "Bạn có muốn kích hoạt nén GZIP trong WordPress để tăng tốc trang web của bạn không? Trong bài đăng trên blog này, chúng tôi sẽ học cách kích hoạt nén trong WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "Tốc độ trang và thời gian tải là các yếu tố chính để xếp hạng tốt hơn trong các công cụ tìm kiếm. Nén Gzip có thể làm cho nó xảy ra và cung cấp một lợi thế cạnh tranh." 
url: /vi/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## Tốc độ trang và thời gian tải là yếu tố chính để xếp hạng tốt hơn trong các công cụ tìm kiếm. Nén Gzip có thể làm cho nó xảy ra và cung cấp một lợi thế cạnh tranh.

{{< figure align=center src="images/Asset-1.png" alt="Bật nén GZIP">}}


## Tổng quan
Vì Google và các công cụ tìm kiếm khác đang xem xét trải nghiệm người dùng (UX) của trang web là một yếu tố quan trọng trong các thuật toán xếp hạng của họ. Nó đã trở nên quan trọng hơn để cải thiện và tối ưu hóa trang web của bạn cho xếp hạng hàng đầu. Trong số các yếu tố quan trọng nhất cần chú ý là, tốc độ trang và thời gian tải. Và, cách nhanh nhất và dễ nhất để cải thiện tốc độ và hiệu suất của trang web là cho phép nén GZIP trên trang web của bạn. Có một cơ hội mà máy chủ web của bạn tự động cho phép nén GZIP cho bạn. Nếu không, bạn phải tự mình thực hiện nhiệm vụ quan trọng này.
Trong bài viết này, chúng tôi sẽ chỉ cho bạn chính xác cách dễ dàng kích hoạt nén GZIP trong WordPress. Bắt đầu nào!
* [**Nén gzip**là gì?][1]
* [**Làm thế nào để nén gzip hoạt động?**][2]
* **[Cách xác minh xem nén GZIP có được bật không?][3]**
* **[Bật nén gzip trong WordPress][4]**
* **[Kết luận][5]**

## Nén Gzip là gì?   {#Gì}
GZIP là định dạng tệp**và ứng dụng phần mềm**Được sử dụng để nén và giải nén tệp. Máy chủ web hoặc phần mềm khác sử dụng nén GZIP để nén các tệp dữ liệu trước khi được gửi đến trình duyệt của người dùng. Điều này làm giảm thời gian tải xuống tệp giúp trang web của bạn nhanh hơn. Tất cả các trình duyệt hiện đại hỗ trợ nén GZIP.
Nó cũng rất quan trọng cần lưu ý rằng việc nén GZIP phải được bật trên máy chủ web của bạn trước khi bạn có thể bật nén tệp và thư mục. Một thời gian ngắn, chúng tôi sẽ thấy cách xác minh xem máy chủ web của bạn có bật GZIP hay không.

## Nén Gzip hoạt động như thế nào?   {#công việc}
GZIP, phương pháp nén phổ biến nhất, được sử dụng bởi các máy chủ và trình duyệt web để nén và giải nén nội dung khi nó truyền qua Internet. Nó được sử dụng chủ yếu trên các tệp mã và văn bản, GZIP có thể giảm kích thước của các tệp JavaScript, CSS và HTML lên tới 90%. Theo mặc định, nén GZIP không nén hình ảnh hoặc video. Đối với điều đó, bạn sẽ cần tối ưu hóa hình ảnh cho web trên trang web WordPress của bạn. Đây là lý do tại sao hầu hết các công cụ kiểm tra tốc độ trang web như Google Pagespeed Insights rất khuyến khích cho phép nén GZIP.
Khi một máy chủ web nhận được yêu cầu cho một trang web, máy chủ web sẽ kiểm tra tiêu đề của yêu cầu kiểm tra xem trình duyệt có hỗ trợ GZIP không. Nếu vậy, máy chủ tạo ra đánh dấu cho trang trước khi áp dụng GZIP. GZIP chuyển đổi đánh dấu HTML thành dữ liệu được nén sau đó được gửi cho người dùng cuối. Khi người dùng cuối nhận được dữ liệu nén, trình duyệt của họ đã giải nén nó.

## **Cách xác minh xem nén gzip có được bật không?** {#verify}
Máy chủ web của bạn có thể kích hoạt nén trong WordPress theo mặc định. Tuy nhiên, đây không phải là trường hợp. Bạn có thể xác định để xem bạn đã bật nén GZIP bằng cách sử dụng Chrome, devtools.
Mở trang web của bạn trong trình duyệt Chrome, sau đó nhấp chuột phải vào bất cứ đâu trên trang và chọn**Kiểm tra**để**Mở các công cụ nhà phát triển**.
Tiếp theo, điều hướng đến tab**mạng**và nhấp vào URL chính của trang web từ phần Tên tên. Chọn tab**tiêu đề**, sau đó cuộn xuống để tìm phần**tiêu đề phản hồi**:

{{< figure align=center src="images/gzip-determine.gif" alt="Xác minh mã hóa nội dung">}}

Ở đó, bạn sẽ xem liệu nén GZIP có được bật hay không.

## Bật nén GZIP trong WordPress   {#Enable}
Nếu bạn đã xác định rằng việc nén WordPress Gzip chưa được bật**, có nhiều phương thức bạn có thể sử dụng để chạy nó. Cách dễ nhất là sử dụng một số plugin WordPress như [WP Rocket][6], [WP Super Cache][7] hoặc [W3 Total Cache][8]. Tuy nhiên, bạn có thể thực hiện thủ công điều này ở cấp độ máy chủ bằng tệp .htaccess hoặc bằng cách cập nhật cấu hình nginx của bạn.

## # bằng cách chỉnh sửa tệp .htaccess
Một trong những cách phổ biến nhất để kích hoạt nén WordPress Gzip là**Chỉnh sửa tệp _.htaccess_ của bạn**. Tuy nhiên, điều này liên quan đến nguy cơ phá vỡ một cái gì đó. Đây là một tệp máy chủ nhạy cảm và một động tác sai có thể gây ra nhiều vấn đề.
Để giảm rủi ro, hãy chắc chắn**Lưu một bản sao của tệp gốc**trước khi thực hiện bất kỳ thay đổi nào. Tệp _.htaccess_ phải có trong thư mục gốc**của trang web của bạn**. Sau khi bạn mở _.htaccess_, thêm mã sau bên dưới các phần được đánh dấu bởi các thẻ `# bắt đầu wordpress` và`# end wordpress`
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
* * Lưu tệp**và tải nó lên máy chủ trang web của bạn. Khi bạn đã hoàn thành, hãy kiểm tra xem GZIP có được bật bằng cách sử dụng Chrome DevTools như đã giải thích ở trên không.

## Bật nén gzip trong nginx
Để**Bật nén**, bao gồm chỉ thị**gzip**với tham số ON.**gzip**trên; Theo mặc định,**nginx**Chỉ nén các phản hồi với Text Text/HTML. Để nén các phản hồi với các loại MIME khác, bao gồm Chỉ thị GZIP_TYPES và liệt kê các loại bổ sung.
Bạn có thể bật nén GZIP trong WordPress bằng cách**Mở tệp _Nginx.conf_ của bạn**và thêm mã sau:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## Kết luận   {#conclusion}
Đây là kết thúc của hướng dẫn Gzip WordPress này. Có nhiều cách để tối ưu hóa trang web của bạn về tốc độ và hiệu suất. Trong hướng dẫn GZIP WordPress này, chúng tôi đã trải qua quá trình nén GZIP, tầm quan trọng của việc nén GZIP và các bước cài đặt của nó. Ngoài ra, có nhiều liên kết có liên quan được đề cập trong phần khám phá trên mạng bên dưới.
Cuối cùng, [Containererize.com][9] đang viết bài về các sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với danh mục [Blog][10] để biết tin tức và cập nhật thường xuyên.

## Khám phá
  * [Matomo][11]
  * [Hợp lý][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Làm thế nào để Dockerize WordPress với Docker Compose][15]
  * [Làm thế nào các công cụ phân tích kinh doanh miễn phí hỗ trợ doanh nghiệp của bạn][16]
  * [Top 5 Công cụ thông minh kinh doanh nguồn mở của năm 2021][17]
  * [Cách cài đặt plugin trong WordPress | Diễn đàn Vanilla][18]
  * [Tăng cường khách hàng tiềm năng của bạn với tích hợp WordPress công dân miễn phí][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
