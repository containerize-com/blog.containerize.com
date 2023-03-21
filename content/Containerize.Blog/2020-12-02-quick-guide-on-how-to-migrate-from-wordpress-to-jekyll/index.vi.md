---
title: "Cách di chuyển từ WordPress sang Jekyll" 
seoTitle: "Cách di chuyển từ WordPress sang Jekyll" 
description: "Trong hướng dẫn này, chúng tôi sẽ học cách di chuyển trang web của bạn từ WordPress sang Jekyll trong các bước nhanh chóng và dễ dàng. Bắt đầu nào!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "Trong hướng dẫn này, chúng tôi sẽ tìm hiểu cách di chuyển trang web của bạn từ WordPress sang Jekyll và lưu trữ nó với GitHub miễn phí" 
url: /vi/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## Trong hướng dẫn này, chúng tôi sẽ học cách di chuyển trang web của bạn từ WordPress sang Jekyll và lưu trữ nó với GitHub miễn phí

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress đến Jekyll">}}

Jeykll là một trình tạo trang web tĩnh nguồn mở. Nó biến đổi văn bản thuần túy của bạn thành các trang web tĩnh và blog. Nó lấy văn bản được viết bằng ngôn ngữ đánh dấu yêu thích của bạn (Markdown, Liquid, HTML / CSS) và sử dụng bố cục để tạo một trang web tĩnh. Jekyll là Blog Aware và Permalinks, Danh mục, trang, bài đăng và bố cục tùy chỉnh đều là những công dân hạng nhất. Một trong những lợi ích lớn nhất của Jekyll là bạn có thể lưu trữ trang web tĩnh của mình trên các trang GitHub và chạy trang web hoặc blog của bạn miễn phí. Vì vậy, việc di chuyển WordPress sang Jekyll có thể giúp bạn cải thiện hiệu suất và tốc độ trang web của bạn.
Trong bài đăng trên blog này, chúng tôi sẽ trải qua cách di chuyển trang web hoặc blog hiện tại của bạn từ WordPress sang Jekyll để có tốc độ và hiệu suất tốt hơn. Vậy hãy bắt đầu!
* **[Tại sao phải di chuyển?][1]**
* **[Cài đặt][2]**
* **[Nhập bài viết và trang WordPress vào][3]**
* **[Triển khai với các trang GitHub][4]**
* **[Kết luận][5]**

## Tại sao di cư?   {#Tại sao}
Trong Jekyll, bạn có thể nhận được 100/100 [điểm số của ngọn hải đăng][6] vì không có tương tác cơ sở dữ liệu. Và, tất cả các nội dung được xử lý trước và lưu dưới dạng các tệp HTML. Và, Jekyll sẽ chỉ thực hiện một lượng tối thiểu các yêu cầu HTTP. Do đó, nó siêu nhanh.

## Cài đặt và thiết lập Jekyll   {#install}
Jekyll được viết bằng Ruby. Vì vậy, bạn phải cài đặt nó đầu tiên trên máy tính của bạn. Hướng dẫn này giả định rằng bạn đã cài đặt Ruby trên máy tính của mình. Nếu không, bạn có thể làm theo [Hướng dẫn chính thức][7].
Đầu tiên, chúng tôi sẽ có tên là**jekyl Mở dòng lệnh và chạy mã sau.
```
gem install jekyll bundler
```
Sau đó, chạy lệnh sau để tạo một trang web mới. Điều này sẽ tạo một thư mục**myBlog**.
```
jekyll new myblog
```
Sau khi cài đặt, bạn có thể xây dựng trang web và cung cấp nó trên máy chủ cục bộ.
```
bundle exec jekyll serve
```
Trang web sẽ có sẵn trên http: // localhost: 4000. Nó cũng tạo ra một trang web****_ thư mục trong thư mục của bạn, đó là đầu ra cuối cùng của trang web là gì.

## Nhập các trang và bài viết WordPress   {#Import}
Một plugin không chính thức cho WordPress cũng có sẵn nhưng chúng tôi sẽ làm theo phương pháp chính thức trong hướng dẫn này. Nếu bạn muốn cho plugin xuất trình từ WordPess, bạn có thể [vào đây][8].
Để nhập các bài đăng của bạn từ một trang web WordPress tự lưu trữ, hãy chạy lệnh sau trên thiết bị đầu cuối của bạn.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
Điều này chỉ nhập dữ liệu & trang Post & Page. Nhà nhập khẩu này chỉ chuyển đổi các bài đăng của bạn và tạo ra vật phẩm mặt trước của YAML. Nó không nhập bất kỳ bố cục, kiểu dáng hoặc tệp bên ngoài (hình ảnh, CSS, v.v.).

## **Triển khai với các trang GitHub** {#Deploy}
Cho đến nay, chúng tôi đã tạo ra blog Jekyll của chúng tôi tại địa phương. Bây giờ chúng tôi sẽ triển khai nó trên GitHub. Trước hết, chúng tôi phải kiểm soát phiên bản trang web của mình bằng [git][9]. Chạy các lệnh sau trong thư mục của trang web.
```
git init
git add .
git commit -m "Initial Commit"
```
Khi cài đặt Jekyll, nó sẽ tự động tạo tệp**.
Sau đó, đăng nhập vào github và tạo một kho lưu trữ mới của bạn.github.io
Tiếp theo, sao chép URL HTTPS của kho lưu trữ.

{{< figure align=center src="images/github-img.png" alt="github url https">}}

Sau đó, thêm kho lưu trữ từ xa và đẩy mã.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Xong! Trang web của bạn bây giờ phải có sẵn trên yourName.github.io

## Kết luận   {#conclusion}
Trong bài viết này, chúng tôi đã học cách xây dựng một blog tĩnh với các trang web Jekyll. Sau đó, chúng tôi đã học cách xuất các bài đăng và trang của bạn từ WordPress sang Jekyll. Và cuối cùng, chúng tôi đã triển khai trang web cuối cùng đến các trang GitHub.

  
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
