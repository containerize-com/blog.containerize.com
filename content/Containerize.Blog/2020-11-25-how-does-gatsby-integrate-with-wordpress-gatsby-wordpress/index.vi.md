---
title: "Làm thế nào để Gatsby tích hợp với WordPress? | Gatsby WordPress" 
seoTitle: "Làm thế nào để Gatsby tích hợp với WordPress? | Gatsby WordPress" 
description: "Sử dụng Gatsby WordPress cùng nhau để cải thiện tốc độ, khả năng mở rộng và bảo mật của trang web của bạn. Trong hướng dẫn này, bạn sẽ học cách sử dụng phần mềm nguồn mở này." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Định cấu hình Gatsby nguồn mở với WordPress của bạn để mang lại trải nghiệm người dùng và hiệu suất tổng thể lớn hơn. Hãy tìm hiểu cách sử dụng trình tạo trang web tĩnh này." 
url: /vi/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Định cấu hình Gatsby nguồn mở với WordPress của bạn để mang lại trải nghiệm người dùng và hiệu suất tổng thể lớn hơn. Hãy cùng học cách sử dụng trình tạo trang web tĩnh này.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


## Tổng quan
GatsByjs là một trình tạo trang tĩnh được sử dụng lại dựa trên phản ứng miễn phí và nguồn mở. Nó sử dụng cấu hình trước mạnh mẽ để xây dựng một trang web chỉ sử dụng các tệp tĩnh cho tải trang cực kỳ nhanh. WordPress là một nền tảng viết blog nguồn mở tuyệt vời. Do đó, có rất nhiều người biết cách tìm hiểu xem một trang web là trang web WordPress để họ có thể hack nó và đánh cắp thông tin. Sử dụng Gatsby WordPress cùng nhau sẽ cung cấp cho bạn sức mạnh tương tự của quản lý nội dung WordPress và tốc độ của Gatsby.
Trong bài viết này, chúng tôi sẽ xem xét Gatsby là gì và tại sao bạn cần sử dụng nó với phần mềm CMS. Sau đó, chúng tôi sẽ đi sâu vào chi tiết về cách sử dụng WordPress và Gatsby cùng nhau để xây dựng trải nghiệm trang web tuyệt vời. Hãy bắt đầu!
* [**Gatsby**là gì?][1]
* **[Ưu và nhược điểm của việc sử dụng WordPress và Gatsby][2]**
* **[Cách sử dụng Gatsby với WordPress][3]**
* **[Kết luận][4]**

## Gatsby   {#gatsby} là gì
Gatsby là một trình tạo trang web tĩnh. Điều này có nghĩa là Gatsby tạo ra các tệp HTML tĩnh được tải lên máy chủ trang web của bạn. Khi một khách truy cập hạ cánh trên trang web của bạn, các tệp tĩnh này được phục vụ cho trình duyệt của họ, thay vì nội dung động WordPress thường phục vụ. Đây là một khung nguồn miễn phí và mở dựa trên React giúp các nhà phát triển xây dựng các trang web và ứng dụng nhanh chóng.

## Ưu và nhược điểm của việc sử dụng WordPress và Gatsby   {#Proscons}
Theo chính thức của Gatsby, [tài liệu][5], họ đã biên soạn một bảng, người mà sự kết hợp của Gatsby WordPress là tuyệt vời và người mà nó không phải là người. Để dễ dàng, tôi đã liệt kê những người ở đây.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress và Gatsby là tuyệt vời cho
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Các nhóm nội dung thoải mái với trải nghiệm chỉnh sửa nội dung WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        Các nhóm phát triển đánh giá cao bằng cách sử dụng các công nghệ nguồn mở, phổ biến
{{_LINE_34_}}
{{_LINE_35_}}
        Thiết kế lại các trang web có nội dung đã được lưu trữ trong WordPress
{{_LINE_37_}}
{{_LINE_38_}}
        Các đội muốn sở hữu dữ liệu và ngăn xếp công nghệ của họ
{{_LINE_40_}}
{{_LINE_41_}}
        Quy trình kiểm soát truy cập phức tạp hoặc các hạn chế mô hình nội dung
{{_LINE_43_}}
{{_LINE_44_}}
        Các dự án mà bảo mật là quan trọng
{{_LINE_46_}}
{{_LINE_47_}}
        Các dự án nhu cầu cao trong đó hiệu suất là tối quan trọng
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress và Gatsby không tốt cho
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Các nhóm yêu cầu sử dụng các chủ đề UI WordPress
{{_LINE_59_}}
{{_LINE_60_}}
        Những người đang tìm kiếm một CMS Cloud được quản lý đầy đủ
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Bên cạnh những điểm chính thức này, tôi sẽ muốn liệt kê một số ưu và nhược điểm của việc sử dụng Gatsby WordPress
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Ưu điểm
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Tốc độ tải nhanh hơn - Trang web tĩnh tải nhanh hơn động. Kết quả là, nó tác động đến tốc độ tải trang của bạn và xếp hạng SEO.
{{_LINE_75_}}
{{_LINE_76_}}
        Ít chi phí máy chủ - vì các tệp tĩnh không cần phần mềm đặc biệt do đó các trang HTML tĩnh cũng có thể được phục vụ từ các máy chủ rẻ hơn.
{{_LINE_78_}}
{{_LINE_79_}}
        An toàn hơn - Đối với các trang web tĩnh, không có thành phần di chuyển nào của các bộ phận do đó không có cơ hội để tin tặc khai thác phần mềm của bạn.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Nhược điểm
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Học đường cong - Nó đòi hỏi các kỹ năng bổ sung cho các nhà phát triển. Giống như học tập Reactjs và GraphQL
{{_LINE_93_}}
{{_LINE_94_}}
        Chỉ nội dung tĩnh - nếu bạn cần phục vụ bất kỳ nội dung động nào. Sau đó, Gatsby là người dành cho bạn. Nó chỉ có thể máy chủ các tập tin tĩnh. Do đó, bạn không thể có bất kỳ hệ thống bình luận nào lấy dữ liệu từ cơ sở dữ liệu.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## Cách sử dụng Gatsby với WordPress   {#howto}
Trước khi bạn có thể cài đặt Gatsby, bạn cần cài đặt [NodeJS][6] và [NPM][7] trong môi trường trang web của bạn.

### Bước 1 - Cài đặt Gatsby
```
npm install -g gatsby-cli
```
Lệnh này tự động chạy trình cài đặt. Nó tải xuống và cài đặt tất cả các phụ thuộc trước khi cài đặt Gatsby. Sau khi hoàn thành, bạn có thể bắt đầu tạo trang web Gatsby đầu tiên của mình.
```
gatsby new gatsby-site
```
Điều này sẽ tải xuống mẫu khởi động Gatsby, và đặt nó vào thư mục/gatsby-wordpress. Sau khi cài đặt hoàn tất, bạn có thể mở phiên bản phát triển của trang web
```
gatsby develop
```
Bây giờ, trong trình duyệt web của bạn, nhập _http: // localhost: 8000_ và mẫu mặc định của bạn sẽ mở.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Mẫu bắt đầu Gatsby">}}


### Bước 2 - Kết nối Gatsby với WordPress
Trong phần này của Gatsby WordPress Guide, chúng tôi sẽ kết nối trình tạo trang web tĩnh này với WordPress. Bạn có một trang web tĩnh cơ bản, nhưng bạn cần tích hợp nó với WordPress. Điều này trỏ trang web Gatsby của bạn vào địa chỉ của blog WordPress của bạn, cho phép nó lấy dữ liệu mới nhất khi bạn chạy máy chủ phát triển. Sau khi kết nối, Gatsby sẽ xây dựng một trang web tĩnh dựa trên mẫu hiện tại của bạn.
Cài đặt plugin WordPress nguồn Gatsby từ kho lưu trữ NPM.
```
npm install gatsby-source-wordpress
```

### Bước 3 - Cấu hình Gatsby
Đặt mã sau vào tệp _gatsby-config.js_ của bạn
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
Cập nhật mã này để trỏ đến trang web WordPress của bạn. Nếu trang web của bạn được lưu trữ cục bộ, sau baseURL, bạn có thể sử dụng _localhost: 8888/wordpress_ thay vì trang web của bạn URL. Sau khi lưu tệp, bạn sẽ cần xây dựng các mẫu trang của mình.

### Bước 4 - Mẫu trang xây dựng
Các mẫu trang xây dựng cho phép Trình tạo trang web này tạo một bài đăng cho mỗi trang trên trang web WordPress của bạn. Plugin nguồn sẽ lấy dữ liệu bạn cần từ WordPress cho các trang này, nhưng bạn sẽ phải tạo mẫu thiết kế.
Trong tệp _gatsby-node.js_ của bạn, hãy thêm mã sau
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Sau khi gọi tất cả dữ liệu, Gatsby sẽ tạo một trang cho mỗi bài đăng. Sử dụng lệnh phát triển, bạn có thể điều hướng đến từng trang mới bằng URL được tạo.

## Kết luận   {#conclusion}
Trong hướng dẫn Gatsby WordPress này, chúng tôi đã đề cập đến cách tạo một trang web Gatsby từ WordPress. Chúng tôi đã học được những ưu và nhược điểm của hai phần mềm nguồn mở này là gì. Chúng tôi cũng đề cập đến cách cài đặt và bắt đầu với môi trường phát triển Gatsby.
Cuối cùng, [containerize.com][8] đang viết bài về các sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với danh mục Nền tảng nguồn mở [Blog][9] để biết tin tức và cập nhật thường xuyên.

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
