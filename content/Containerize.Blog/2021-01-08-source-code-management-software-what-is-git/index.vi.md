---
title: "Phần mềm quản lý mã nguồn | Git là gì?" 
seoTitle: "Phần mềm quản lý mã nguồn | Git là gì?" 
description: "Git là gì? Git là một phần mềm quản lý mã nguồn miễn phí cho phép bạn ghi lại, xem xét các thay đổi cho các tệp nguồn của bạn và quản lý các dự án một cách hiệu quả." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "Trong bài viết này, chúng tôi sẽ khám phá Git & amp; Git hoạt động như thế nào? Git là một hệ thống điều khiển phiên bản được thiết kế để quản lý mã nguồn, track & amp; phiên bản nhật ký." 
url: /vi/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## Trong bài viết này, chúng tôi sẽ khám phá Git & Git hoạt động như thế nào? Git là một hệ thống điều khiển phiên bản được thiết kế để quản lý các phiên bản Mã, Track & Log.

{{< figure align=center src="images/version-control-banner.png" alt="Phần mềm quản lý mã nguồn">}}


## Tổng quan
Hãy tưởng tượng bạn là một nhà phát triển phần mềm làm việc trong một dự án. Bạn có nhiều hơn một người làm việc trên nó. Và, có một tệp duy nhất chứa mã nguồn. Khi tất cả họ thực hiện các thay đổi đối với mã, họ sẽ có các phiên bản khác nhau của tệp mỗi khi chúng thực hiện thay đổi. Vì vậy, bây giờ làm thế nào chúng ta sẽ quản lý các phiên bản khác nhau của cùng một tệp? Đó là nơi mà phần mềm quản lý mã nguồn khởi động. Nó giúp bạn quản lý và hợp nhất các phiên bản khác nhau của cùng một tệp. Và thậm chí cho phép bạn theo dõi lại lịch sử thay đổi. Và bạn luôn có thể chắc chắn ai đã thực hiện các thay đổi cho tệp và những thay đổi đó là gì.
Trong bài viết này, chúng tôi sẽ tìm hiểu về hệ thống điều khiển phiên bản Git. Cách bạn có thể sử dụng nó để quản lý các tệp mã nguồn phát triển phần mềm hoặc bất kỳ tệp nào khác. Vậy hãy bắt đầu.
*  **[Hệ thống điều khiển phiên bản][1]**  
*  **[Git là gì][2]**  
*  **[Cách hoạt động của Git][3]**  
*  **[Cài đặt git][4]**  
*  **[Thiết lập kho lưu trữ][5]**  
*  **[Lưu các thay đổi vào kho lưu trữ][6]**  
*  **[Kiểm tra trạng thái của kho lưu trữ][7]**  
*  **[hoàn nguyên hoặc hoàn tác thay đổi][8]**  
*  **[Kết luận][9]**  

## Hệ thống điều khiển phiên bản là gì {#version-control}

Kiểm soát phiên bản là một hệ thống ghi lại các thay đổi thành một tệp hoặc bộ tệp theo thời gian để bạn có thể nhớ lại các phiên bản cụ thể sau. Nếu bạn là nhà phát triển phần mềm và muốn giữ các phiên bản của tệp mã nguồn, phần mềm quản lý mã nguồn là một điều rất hữu ích cho bạn. Nó cho phép bạn hoàn nguyên các tệp đã chọn trở lại trạng thái trước đó, hoàn nguyên toàn bộ dự án trở lại trạng thái trước đó, so sánh các thay đổi theo thời gian, xem ai đã sửa đổi lần cuối một thứ có thể gây ra vấn đề, người đã đưa ra một vấn đề và khi nào, và hơn thế nữa. Sử dụng kiểm soát phiên bản có nghĩa là bạn không bao giờ phải lo lắng về việc mất công việc của mình.

## Git là gì {#git}

Git là một hệ thống kiểm soát phiên bản nguồn miễn phí và mở được thiết kế để xử lý mọi thứ từ các dự án nhỏ đến rất lớn với tốc độ và hiệu quả. Không giống như các hệ thống điều khiển phiên bản tập trung cũ hơn như SVN và CVS, kiểm soát phiên bản Git được phân phối. Mỗi nhà phát triển đều có lịch sử đầy đủ của kho lưu trữ mã của họ tại địa phương. Mặc dù vậy, nó làm cho bản sao ban đầu hơi chậm. Nhưng, sau đó, tất cả các cam kết và các hoạt động khác đều rất nhanh. Git cho phép bạn có nhiều chi nhánh địa phương có thể độc lập với nhau.

## Làm thế nào Git hoạt động {#how}

Sử dụng Git, bạn có thể thực hiện các thay đổi cho kho lưu trữ cục bộ của mình và đẩy nó vào một công cụ lưu trữ. Hoặc bạn có thể kéo các thay đổi khác từ công cụ lưu trữ đến máy cục bộ của bạn. Dưới đây là tổng quan cơ bản về cách thức hoạt động của Phần mềm quản lý mã nguồn (GIT).
  1. Tạo một kho lưu trữ trên mạng với một công cụ lưu trữ bất kỳ công cụ nào (như GitHub, Gitlab hoặc Bitbucket)
  2. Bản sao kho lưu trữ vào máy cục bộ của bạn
  3. Thêm một tệp vào kho lưu trữ cục bộ của bạn
  4. Lưu (cam kết) thay đổi vào kho lưu trữ cục bộ của bạn
  5
  6. Thực hiện thay đổi tệp của bạn bằng công cụ lưu trữ Git và cam kết
  7. “Kéo” các thay đổi cho máy cục bộ của bạn
  8. Tạo một chi nhánh ”(phiên bản), thực hiện thay đổi, thực hiện thay đổi
  9. Mở một yêu cầu kéo "(đề xuất các thay đổi cho nhánh chính)
 10. “Merge” chi nhánh của bạn đến nhánh chính

## Cài đặt Git {#install}

Có các phương pháp khác nhau có sẵn để cài đặt git trên máy tính của bạn. Bạn có thể cài đặt nó dưới dạng gói hoặc thông qua trình cài đặt khác hoặc tải xuống mã nguồn và tự biên dịch nó.

### Cài đặt trên Linux
Nếu bạn muốn cài đặt các công cụ GIT cơ bản trên Linux thông qua trình cài đặt nhị phân, bạn thường có thể thực hiện như vậy thông qua công cụ quản lý gói đi kèm với phân phối của bạn. Đối với Fedora (hoặc bất kỳ phân phối dựa trên RPM liên quan chặt chẽ nào, chẳng hạn như Rhel hoặc Centos), bạn có thể sử dụng
```
$ sudo dnf install git-all
```
Nếu bạn là một bản phân phối dựa trên Debian, chẳng hạn như Ubuntu, hãy thử APT APT,
```
$ sudo apt install git-all
```

### Cài đặt trên macOS
Có một số cách để cài đặt git trên máy Mac. Dễ nhất có lẽ là cài đặt các công cụ dòng lệnh XCode. Trên Mavericks (10.9) trở lên, bạn có thể làm điều này chỉ bằng cách cố gắng chạy  **git**  từ nhà ga lần đầu tiên.
```
$ git --version
```
Nếu bạn đã cài đặt nó, nó sẽ nhắc bạn cài đặt nó.

## Thiết lập kho lưu trữ {#init}

Kho lưu trữ Git là lưu trữ ảo cho các tệp mã của bạn. Nó cho phép bạn lưu trữ các phiên bản khác nhau của mã mà bạn có thể truy cập khi cần.
Để tạo repo mới, bạn sẽ sử dụng lệnh  **git init** . Git init là một lệnh một lần bạn sử dụng trong quá trình thiết lập ban đầu của repo mới. Thực hiện lệnh này sẽ tạo ra một thư mục con .git mới trong thư mục làm việc hiện tại của bạn. Điều này cũng sẽ tạo ra một nhánh **Master**  mới.

{{< figure align=center src="images/git-init-2.gif" alt="Git là gì">}}


## Lưu các thay đổi vào kho lưu trữ {#commit}

Bây giờ bạn có một kho lưu trữ được khởi tạo, bạn có thể thực hiện các thay đổi phiên bản tệp cho nó.

{{< figure align=center src="images/git-add-commit-1.gif" alt="Git cam kết">}}


## Kiểm tra trạng thái của kho lưu trữ {#status}

Lệnh  **GIT** hiển thị trạng thái của thư mục làm việc và khu vực dàn. Nó cho phép bạn xem những thay đổi nào đã được dàn dựng, nơi mà thiên đường, và các tệp nào được theo dõi bởi Phần mềm quản lý mã nguồn (GIT). Đầu ra trạng thái không cho bạn thấy bất kỳ thông tin nào liên quan đến lịch sử dự án đã cam kết. Đối với điều này, bạn cần sử dụng nhật ký **git**  .

{{< figure align=center src="images/git-status-2.gif" alt="Phần mềm quản lý mã nguồn">}}

Nhật ký git sẽ hiển thị cho bạn đầu ra theo dõi
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Hoàn nguyên các thay đổi của bạn {#revert}

Bạn có thể sử dụng lệnh GIT trở lại để hoàn tác thay đổi mà bạn đã cam kết trong repo của mình. Đầu tiên, hãy sử dụng lệnh của Nhật Bản "để có được danh sách các cam kết
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Sau đó, quyết định bạn muốn hoàn nguyên cam kết nào. Và, sử dụng lệnh git hoàn nguyên như bên dưới
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Như bạn có thể thấy Git trở lại đã tạo ra một cam kết mới làm mất đi những thay đổi được thực hiện trong cam kết thứ hai.

## Phần kết luận
Bây giờ bạn đã đọc qua toàn bộ bài viết nơi chúng tôi đã thảo luận về Git & Git hoạt động như thế nào, bạn nên biết về phần mềm quản lý mã nguồn. Mục đích của nó là gì và tại sao bạn cần nó. Chúng tôi đã khám phá cách Git có thể giúp bạn quản lý mã nguồn dự án của bạn. Và, chúng tôi cũng đã tìm hiểu về cách sử dụng các lệnh GIT khác nhau để khởi tạo và kho lưu trữ, lưu các thay đổi của bạn và cách hoàn tác các thay đổi. Trong các hướng dẫn sắp tới của chúng tôi, chúng tôi sẽ khám phá Git nhiều hơn và sẽ chia sẻ cách chúng tôi có thể sử dụng các lệnh khác nhau để quản lý mã của bạn tốt hơn.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
* [  **Tự động hóa quy trình phát triển phần mềm với các hành động GitHub**  ][10]
*  **[Cách thiết lập đường ống triển khai liên tục với Gitlab CI/CD][11]**  
*  **[Hiểu và tìm hiểu các nhánh và yêu cầu kéo trong GIT][12]**  
*  **[Top 5 Hệ thống điều khiển phiên bản nguồn mở vào năm 2021][13]**  



 [1]: #version-control
 [2]: #git
 [3]: #how
 [4]: #install
 [5]: #init
 [6]: #commit
 [7]: #status
 [8]: #revert
 [9]: #conclusion
 [10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
 [11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
 [12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
 [13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
