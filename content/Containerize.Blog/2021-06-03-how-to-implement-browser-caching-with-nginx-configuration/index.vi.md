---
title: "Cách thực hiện bộ nhớ đệm trình duyệt với cấu hình nginx" 
seoTitle: "Cách thực hiện bộ nhớ đệm trình duyệt với cấu hình nginx" 
description: "Một trang web tải càng nhanh, khách truy cập càng có nhiều khả năng ở lại. Trong hướng dẫn này, chúng tôi sẽ triển khai bộ nhớ đệm của trình duyệt với cấu hình nginx." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Một trang web tải càng nhanh, khách truy cập càng có nhiều khả năng ở lại. Bài viết này hướng dẫn bạn cách thực hiện bộ nhớ đệm trình duyệt với các cấu hình nginx." 
url: /vi/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Tay tải trang web càng nhanh, khách truy cập càng có nhiều khả năng ở lại. Bài viết này hướng dẫn bạn cách thực hiện bộ nhớ đệm trình duyệt với các cấu hình nginx.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Cách thực hiện bộ nhớ đệm Browsr với cấu hình nginx">}}

Trong chuỗi hướng dẫn của Nginx của chúng tôi, chúng tôi đã đề cập [Cách sử dụng Nginx làm bộ cân bằng tải][1], [Cấu hình Nginx làm proxy ngược][2], [sử dụng nhiều phiên bản PHP với NGINX][3] và [ Các quy tắc để nginx viết lại chỉ thị][4]. Trong bài viết hôm nay, chúng tôi đang đề cập đến một chủ đề rất quan trọng giúp các doanh nghiệp cải thiện trải nghiệm người dùng của họ bằng cách tận dụng bộ nhớ đệm trình duyệt. Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn cách triển khai bộ nhớ đệm trình duyệt với cấu hình Nginx bằng mô -đun tiêu đề Nginx. Bắt đầu nào!
  * **[Bộ nhớ đệm của trình duyệt tận dụng][5]**
  *[**Mô -đun tiêu đề nginx** ][6]
  *[**T-TAGE và IF-NONE-MATCH** ][7]
  *[**Bộ nhớ đệm trình duyệt đòn bẩy với cấu hình nginx** ][8]
  *[**Kết luận** ][9]

## Trình duyệt bộ nhớ đệm của Trình duyệt
Một trang web tải càng nhanh, khách truy cập càng có nhiều khả năng ở lại trên trang web. Các trang web có nhiều hình ảnh và nội dung tương tác được tải trong nền làm cho trang web mở một nhiệm vụ phức tạp. Nó bao gồm yêu cầu nhiều tệp khác nhau từ từng máy chủ. Giảm thiểu số lượng của các yêu cầu này là một cách để tăng tốc trang web của bạn.
Một phương pháp để cải thiện hiệu suất trang web là _leveraging trình duyệt bộ nhớ đệm_. Trình duyệt bộ nhớ đệm đóng một vai trò rất lớn trong cơ chế bộ đệm để tăng tốc độ trang. Các tệp tĩnh như CSS, JS, JPEG, PNG, v.v. được sử dụng cho trang web có thể được lưu trên máy tính của khách truy cập để truy cập trong tương lai. Bất cứ khi nào khách truy cập gặp một trang mới trên trang web của bạn, các tệp trên có thể được truy cập từ máy tính của khách truy cập thay vì máy chủ được cung cấp của bạn, điều này sẽ tăng mạnh tốc độ tải trang.

## Nginx, mô-đun tiêu đề   {#tiêu đề-module}
Mô-đun _ngx \ _http \ _headers_module_ cho phép thêm các trường tiêu đề _Expires_ và _cache-control_, và các trường tùy ý, vào tiêu đề phản hồi. Chúng ta có thể sử dụng mô -đun tiêu đề để đặt các tiêu đề HTTP này. Mô -đun tiêu đề là một mô -đun Nginx lõi, có nghĩa là nó không cần phải cài đặt riêng để được sử dụng.
Cấu hình ví dụ trông như thế này:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## e-tag và if-none-match   {#etage}
Hãy giả sử rằng chúng tôi có một số tệp kiểm tra với các tiện ích mở rộng khác nhau, ví dụ: test.html, test.jpg, test.css và test.js. Theo mặc định, tất cả các tệp sẽ có cùng hành vi bộ đệm mặc định. Để kiểm tra các tiêu đề phản hồi của tệp bằng lệnh sau để yêu cầu một tệp từ máy chủ nginx cục bộ của chúng tôi và hiển thị các tiêu đề phản hồi:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
Trong dòng thứ hai đến cuối cùng, bạn sẽ tìm thấy tiêu đề _etag_, chứa một định danh duy nhất cho bản sửa đổi cụ thể này của tệp được yêu cầu. Nếu bạn thực hiện lệnh _curl_ cuối cùng liên tục, bạn sẽ tìm thấy chính xác giá trị ETAG.
Khi sử dụng trình duyệt web, giá trị _etag_ được lưu trữ và gửi lại cho máy chủ với tiêu đề yêu cầu _if-none-match_ khi người dùng làm mới trang hoặc cùng một tệp được yêu cầu bởi trình duyệt vì bất kỳ lý do gì.
Chúng ta có thể mô phỏng điều này trên dòng lệnh với lệnh sau.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Lưu ý số nhận dạng duy nhất, nó phải khớp với giá trị phản hồi chúng tôi nhận được từ cuộc gọi _CURL_ trước đây của chúng tôi. Phản hồi sẽ khác lần này:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Lần này, Nginx sẽ trả lời với **304 không được sửa đổi** . Nó đã thắng được gửi tập tin qua mạng một lần nữa; Thay vào đó, nó sẽ nói với trình duyệt rằng nó có thể sử dụng lại tệp mà nó đã tải xuống cục bộ. Điều này rất hữu ích vì nó làm giảm lưu lượng mạng. Nhưng trình duyệt vẫn phải thực hiện cuộc gọi HTTP để nhận phản hồi từ máy chủ, vẫn còn một thời gian.

## Bộ nhớ đệm của trình duyệt đòn bẩy với cấu hình nginx   {#nginx-configuration}
Trong ví dụ trước của chúng tôi, chúng tôi đã giải thích cách thẻ điện tử và IF-None-match giúp bạn giảm lưu lượng mạng. Nhưng vấn đề với `Etag` là trình duyệt luôn gửi yêu cầu đến máy chủ hỏi xem nó có thể sử dụng lại tệp được lưu trong bộ nhớ cache của nó không. Và điều này vẫn cần có thời gian để thực hiện yêu cầu và nhận được phản hồi.
Bây giờ với sự trợ giúp của mô -đun tiêu đề Nginx, chúng tôi sẽ làm cho trình duyệt lưu trữ một số tệp cục bộ mà không cần hỏi rõ ràng máy chủ.
Thêm 3 dòng sau trong tệp cấu hình nginx của bạn vào bộ đệm nội dung tĩnh trong nginx
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
Dòng đầu tiên hướng dẫn Nginx để lưu trữ nội dung trong trình duyệt máy khách trong 30 ngày (30D). Sau khoảng thời gian này, bất kỳ yêu cầu mới nào từ người dùng sẽ dẫn đến xác nhận lại bộ đệm và cập nhật từ trình duyệt khách.
Bạn có thể đặt các dòng trên trong các khối _Location_, _server_ hoặc _http_.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Khi bạn đặt chúng trong khối vị trí, chỉ có nội dung được phục vụ bởi vị trí đó sẽ được lưu trữ. Trong trường hợp trên, chỉ yêu cầu / tĩnh / sẽ được lưu trong bộ nhớ cache.
Nếu bạn muốn lưu trữ các loại tệp cụ thể, bạn có thể làm như vậy bằng cách sử dụng khối vị trí.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
Trong ví dụ trên, chúng tôi đang lưu trữ các loại tệp khác nhau như JS, JPG, CSS, v.v.
Tương tự, bạn có thể đặt cấu hình bộ đệm trong khối _server_ trước bất kỳ khối vị trí nào. Trong trường hợp này, tất cả các phản hồi từ máy chủ này sẽ được lưu trữ. Hoặc bạn có thể đặt nó trong khối _HTTP_, trong trường hợp này, tất cả các yêu cầu máy chủ được hỗ trợ bởi tệp cấu hình NGINX sẽ được lưu trong bộ đệm.

## Kết luận   {#conclusion}
Mô-đun Tiêu đề Nginx có thể được sử dụng để thêm bất kỳ tiêu đề tùy ý nào vào phản hồi, nhưng thiết lập đúng các tiêu đề kiểm soát bộ đệm là một trong những ứng dụng hữu ích nhất của nó. Nó giúp bạn cải thiện hiệu suất của trang web, đặc biệt là đối với người dùng trên các mạng có độ trễ cao hơn, như mạng sóng mang di động. Trong hướng dẫn này, chúng tôi đã học cách tận dụng bộ nhớ đệm của trình duyệt với cấu hình nginx. Hy vọng điều này sẽ giúp bạn cải thiện trải nghiệm người dùng của bạn trên trang web của bạn.

## Khám phá
  * [Cách cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu][3]
  * [Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược][2]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
