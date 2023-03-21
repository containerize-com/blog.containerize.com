---
title: "Hướng dẫn hành động GitHub | Tự động hóa quy trình làm việc đầu tiên của bạn" 
seoTitle: "Hướng dẫn hành động GitHub | Tự động hóa quy trình làm việc đầu tiên của bạn" 
description: "Thực hiện theo hướng dẫn của GitHub Action để khám phá rằng làm thế nào chúng ta có thể sử dụng các hành động của GitHub để tự động hóa và thực hiện quy trình phát triển phần mềm từ repo của chúng tôi." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub đã giới thiệu các hành động GitHub cho phép bạn thiết lập tích hợp liên tục & amp; Triển khai liên tục bằng cách sử dụng tệp cấu hình ngay trong repo GitHub của bạn." 
url: /vi/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub đã giới thiệu các hành động GitHub cho phép bạn thiết lập tích hợp liên tục & triển khai liên tục bằng cách sử dụng tệp cấu hình ngay trong repo GitHub của bạn.

{{< figure align=center src="images/github-actions-workflows.png" alt="Hướng dẫn hành động GitHub">}}


## Tổng quan
Một trong những cách tốt nhất để tăng năng suất trong dự án phần mềm là tự động hóa bất cứ điều gì thủ công hoặc lặp đi lặp lại. Và bạn có thể ngạc nhiên về mức độ tự động hóa dễ dàng khi bạn sử dụng một công cụ tuyệt vời như  **GitHub Action ** . Kể từ vài bài viết cuối cùng, tôi đã viết về [Git][1], [Kiểm soát phiên bản][1] và [Tự động hóa quy trình phát triển phần mềm][2] và về [tích hợp liên tục và phân phối liên tục][3 ]. Vì vậy, hy vọng bây giờ, bạn nhận thức rõ về kho lưu trữ và cách sử dụng chúng.
Trong ngày hôm nay, hướng dẫn hành động của GitHub **, chúng tôi sẽ khám phá các hành động của GitHub và cách bạn có thể sử dụng nó để tự động hóa ứng dụng, tùy chỉnh và thực hiện quy trình phát triển phần mềm của bạn ngay trong kho lưu trữ của bạn. Vậy hãy bắt đầu
  * **[Xem lại quy trình làm việc CI/CD][4]**
  * **[Hành động GitHub][5]**
  * **[Hiểu cú pháp YAML][6]**
  * **[Tạo quy trình làm việc đầu tiên của bạn][7]**
  * **[Kết luận][8]**

## CI/CD Workflows   {#cicd}
CI/CD là một phương pháp triển khai thường xuyên các dự án phát triển phần mềm của bạn cho người dùng cuối ở các giai đoạn khác nhau với sự trợ giúp của tự động hóa.  **Tích hợp liên tục & triển khai liên tục **  là một triết lý nhiều hơn và là một trong những thực tiễn tốt nhất để các nhóm DevOps thực hiện, để cung cấp các thay đổi mã thường xuyên và đáng tin cậy hơn.
**Tích hợp liên tục ** là một tập hợp các thực tiễn khuyến khích các nhóm phát triển kiểm tra các kho lưu trữ kiểm soát mã để phiên bản thường xuyên. Và, với mỗi lần đẩy vào kho lưu trữ, bạn có thể tạo một tập hợp các tập lệnh để xây dựng và kiểm tra ứng dụng của mình một cách tự động. Các tập lệnh này giúp giảm cơ hội bạn đưa ra lỗi trong ứng dụng của mình.
**Triển khai liên tục ** là một bước đi trước trong quy trình công việc CI/CD của bạn. Nó không chỉ được xây dựng và kiểm tra ứng dụng của bạn mỗi khi thay đổi mã được đẩy vào cơ sở mã, mà ứng dụng cũng được triển khai liên tục đến máy chủ của bạn.

## Hành động github   {#github-actions} là gì
Trong phần của hướng dẫn hành động GitHub này, chúng ta sẽ biết những gì  **hành động GitHub ** . Tuy nhiên, các hành động của GitHub là API cho nguyên nhân và hiệu quả đối với GitHub. Nó giúp dễ dàng tự động hóa tất cả các quy trình công việc phần mềm của bạn, bây giờ với CI/CD. Bạn có thể thiết kế bất kỳ quy trình công việc nào, dựa trên bất kỳ sự kiện nào, ví dụ (đẩy vào nhánh, yêu cầu kéo, v.v.), trong khi GitHub quản lý việc thực hiện. Tuy nhiên, bạn không cần phải tự viết các hành động. GitHub có một thị trường sẵn có, nơi mọi người có thể tìm thấy những hành động được tạo ra bởi người khác và tái sử dụng chúng nếu nó phù hợp với nhu cầu của họ. Các hành động của GitHub hỗ trợ Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, v.v. Xây dựng, kiểm tra và triển khai các ứng dụng bằng ngôn ngữ bạn chọn.

## YAML Cú pháp   {#yaml}
Trước tiên, hãy làm quen với các cú pháp và thuật ngữ của các hành động  **github ** .
  * **Quy trình công việc: **  Vì hành động GitHub cung cấp cơ sở để xây dựng các khả năng tích hợp và triển khai liên tục  **liên tục **  Các khả năng, thuật ngữ này đề cập đến điểm đó khi luồng bắt đầu thực hiện bởi công cụ CI.
  * **Công việc ** : Thuật ngữ này đề cập đến tất cả các nhiệm vụ trong một quy trình công việc duy nhất. Một quy trình làm việc chứa nhiều hơn một công việc và tất cả họ phải hoàn thành việc thực hiện của họ để ngăn chặn thất bại.
  * **Bước: **  Để một công việc hoàn thành việc thực hiện, nó phải hoàn thành tất cả các bước được nhúng trong đó.
  * **Hành động: **  Hành động là tập hợp con chính của bước và tập hợp con nhỏ nhất của quy trình làm việc. Mỗi bước bao gồm nhiều hành động phải được thực hiện thành công.
Như bạn có thể thấy quy trình công việc, công việc, bước và hành động phụ thuộc lẫn nhau và thực hiện thành công mọi thứ là cần thiết để hoàn thành thành công đường ống CI/CD.

## Tạo một quy trình công việc   {#workflow}
Trong một dự án phát triển phần mềm, một trong những nhóm phát triển có vấn đề phải đối mặt là định dạng của mã nguồn và thực tiễn tốt nhất. Vấn đề này là rõ ràng hơn cho các đội lớn hơn. Vì họ liên quan đến nhiều nhà phát triển hơn và mọi người đều có phong cách viết riêng của họ. Vì vậy, việc sử dụng các gói linter là rất phổ biến trên các nhóm. Nhưng bây giờ với  **GitHub Action ** , bạn thực sự có thể thực thi Linter mỗi khi ai đó đẩy mã vào repo GitHub.
Trong hướng dẫn của GitHub Action, bạn sẽ thêm một quy trình công việc xáo trộn nhiều ngôn ngữ mã hóa bằng cách sử dụng hành động [GitHub Super linter][9]. Quy trình công việc sử dụng siêu linter để xác thực mã nguồn của bạn mỗi khi một cam kết mới được đẩy vào kho lưu trữ của bạn.
Từ kho lưu trữ của bạn trên github, hãy tạo một tệp mới trong **.
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Để chạy quy trình làm việc của bạn, hãy cam kết và thúc đẩy thay đổi vào kho GitHub của bạn. Sự kiện đẩy này sẽ kích hoạt quy trình công việc SuperLinter. Và, bây giờ bạn có thể xem kết quả của quy trình làm việc của bạn bằng cách vào tab hành động

{{< figure align=center src="images/actions-tab.png" alt="Hướng dẫn hành động GitHub">}}

Trong thanh bên trái, nhấp vào quy trình công việc bạn muốn xem.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Github hành động quy trình làm việc">}}

Quy trình công việc siêu linter bạn vừa thêm chạy mỗi thời gian mã được đẩy vào kho lưu trữ của bạn để giúp bạn tìm thấy sự cố trong mã của mình. Kho lưu trữ của bạn có thể có nhiều quy trình công việc kích hoạt các công việc khác nhau dựa trên các sự kiện khác nhau. Các hành động của GitHub có thể giúp bạn tự động hóa gần như mọi khía cạnh của các quy trình phát triển ứng dụng của bạn. Đây chỉ là một giới thiệu cơ bản về các hành động GitHub. Có hàng tấn [tài nguyên][10] có sẵn cho kiến ​​thức chuyên sâu về các hành động của GitHub, mà bạn có thể sử dụng.

## Kết luận   {#conclusion}
Trong hướng dẫn hành động  **github này ** , chúng tôi đã tìm hiểu về  **tích hợp liên tục & triển khai liên tục **  và  **Hành động của GitHub là gì ** . Và, chúng tôi cũng đã khám phá cách chúng tôi có thể sử dụng  **các hành động GitHub **  để xây dựng quy trình làm việc CI/CD. Chúng tôi đã sử dụng một quy trình công việc siêu linter đơn giản từ thị trường GitHub Action, để tìm hiểu bất kỳ sự không nhất quán nào trong cơ sở mã của chúng tôi. Trong các bài viết sắp tới, chúng tôi sẽ khám phá các hành động của GitHub về chiều sâu hơn. Ngoài ra, bạn có thể tìm thấy các bài đăng trên blog khác liên quan đến hệ thống điều khiển phiên bản  ****  được đề cập trong phần khám phá trên mạng bên dưới.
Cuối cùng, [containerize.com][11] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với danh mục [Phần mềm điều khiển phiên bản][12] để cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][13], [LinkedIn][14] và [Twitter][15].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Gitlab Triển khai liên tục | Nó hoạt động như thế nào?][16]
  * [Hiểu và tìm hiểu các chi nhánh và các yêu cầu kéo trong GIT][2]
  * [Phần mềm quản lý mã nguồn | Git là gì?][17]
  * [Top 5 Hệ thống điều khiển phiên bản nguồn mở vào năm 2021][18]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
