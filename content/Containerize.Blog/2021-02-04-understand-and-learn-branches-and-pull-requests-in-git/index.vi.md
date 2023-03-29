---
title: "Hiểu và tìm hiểu các chi nhánh và các yêu cầu kéo trong git" 
seoTitle: "Hiểu và tìm hiểu các chi nhánh và các yêu cầu kéo trong git" 
description: "Git là một trong những hệ thống kiểm soát phiên bản phổ biến nhất. Trong bài viết này, Ewe sẽ hiểu cách sử dụng các nhánh Git và các yêu cầu kéo." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Chi nhánh Git là thành phần cơ bản của hệ thống điều khiển phiên bản Git. Chúng tôi sẽ khám phá các mô hình phân nhánh khác nhau trong hướng dẫn này" 
url: /vi/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## GIT Branch là thành phần cơ bản của hệ thống điều khiển phiên bản Git. Chúng tôi sẽ khám phá các mô hình phân nhánh khác nhau trong hướng dẫn này

{{< figure align=center src="images/git-branches-pull-requests.png" alt="GIT PULL yêu cầu chi nhánh">}}

Trong [Bài viết cuối cùng][1], chúng tôi đã tìm hiểu về những điều cơ bản của các hệ thống kiểm soát phiên bản và GIT. Chúng tôi đã trải qua từng bước và học cách thiết lập kho lưu trữ Git. Ngoài ra, chúng tôi đã học cách thêm các thay đổi vào một nhánh và hoàn nguyên chúng trong trường hợp bạn muốn hoàn tác các thay đổi của mình. Bây giờ chúng tôi đã hiểu những điều cơ bản của các hệ thống điều khiển phiên bản, cụ thể là git. Vì vậy, trong bài đăng trên blog này, chúng tôi sẽ chuyển sang thảo luận về cách sử dụng các chi nhánh Git và các yêu cầu kéo. Chúng tôi sẽ tìm hiểu về các quy trình công việc khác nhau. Vậy hãy bắt đầu!
* **[Các nhánh git][2]** 
* **[Tạo / sửa đổi các nhánh Git][3]** 
* **[Yêu cầu kéo là gì][4]** 
* **[Mô hình phân nhánh Git phổ biến][5]** 
* [ **Kết luận** ][6]

## Chi nhánh Git là gì {#branch}


{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="chi nhánh git">}}

Hãy nói về các chi nhánh và tại sao chúng ta cần các chi nhánh và những chiến lược phân nhánh mà chúng ta có thể sử dụng để làm việc hiệu quả với mã của mình. Như tên cho thấy một nhánh****đại diện cho một dòng phát triển độc lập từ một gốc.
Khi bạn tạo một kho lưu trữ, về cơ bản, bạn cũng tạo một nhánh, chúng tôi có thể gọi một nhánh chính (hoặc mặc định). Chúng tôi có thể thực hiện các thay đổi cho chi nhánh chính của chúng tôi. Nhưng trong trường hợp bạn cần làm việc trên một tính năng và don don muốn tách mã của bạn khỏi nhánh chính. Vì vậy, đó là nơi mà các chi nhánh giúp bạn. Họ cho phép bạn phân nhánh và sau đó hợp nhất sau này.

## Tạo / sửa đổi các nhánh Git {#create}

```
git branch
```
Lệnh cho phép bạn tạo, liệt kê, đổi tên và xóa các nhánh. Nó không cho phép bạn chuyển đổi giữa các nhánh, vì điều này, chúng tôi phải sử dụng lệnh kiểm tra Git. Hoặc nếu bạn muốn hợp nhất các thay đổi của mình trở lại một nhánh thì bạn phải sử dụng lệnh **git merge** .
Điều quan trọng là phải hiểu rằng các chi nhánh chỉ là con trỏ để cam kết. Khi bạn tạo một nhánh, tất cả các cần phải làm là tạo một con trỏ mới, nó không thay đổi kho lưu trữ theo bất kỳ cách nào khác.
Sử dụng lệnh sau để tạo nhánh
```
git branch <branch-name>
```
Khi bạn đã hoàn thành công việc trên một chi nhánh và đã hợp nhất nó vào cơ sở mã chính, bạn sẽ tự do xóa chi nhánh mà không mất bất kỳ lịch sử nào bằng cách sử dụng lệnh sau
```
git branch -d <branch-name>
```

## Yêu cầu kéo là gì {#pull}

Yêu cầu kéo là một cách để gửi đóng góp cho dự án phần mềm bằng hệ thống điều khiển phiên bản như Git. Các nhà phát triển sử dụng các yêu cầu kéo để đề xuất các thay đổi đối với cơ sở mã. Khi yêu cầu kéo được mở, bạn có thể thảo luận và xem xét các thay đổi tiềm năng với cộng tác viên và thêm các cam kết tiếp theo trước khi các thay đổi của bạn được hợp nhất vào nhánh cơ sở.
Khi một nhà phát triển mở một yêu cầu kéo, tất cả những gì anh ta đang làm là yêu cầu một nhà phát triển khác, kéo một nhánh từ kho lưu trữ của anh ta vào kho lưu trữ của họ. Điều này có nghĩa là anh ta cần cung cấp 4 giá trị đầu vào để tạo yêu cầu kéo: kho lưu trữ nguồn, nhánh nguồn, kho lưu trữ đích và nhánh đích.

## Mô hình phân nhánh phổ biến {#model}

Có một số quy trình công việc phân nhánh O đang được sử dụng bởi cộng đồng nhà phát triển trên toàn thế giới. Nhưng, chúng tôi sẽ thảo luận về ba mô hình phân nhánh phổ biến nhất từng người một

### Dòng chảy Git
Gitflow Workflow là một quy trình công việc GIT giúp phát triển phần mềm liên tục và thực hiện các thực tiễn DevOps. Dòng chảy Git là quy trình công việc được biết đến nhiều nhất trong danh sách này. Nó được tạo ra bởi [Vincent Driessen vào năm 2010][7] và nó dựa trên hai nhánh chính có tuổi thọ vô hạn, cùng với các nhánh hỗ trợ khác như các tính năng-\*, hotfixes-\* sau đó hợp nhất vào nhánh phát triển như cá nhân Các mặt hàng được hoàn thành.
* **Master** - Chi nhánh này chứa mã sản xuất. Tất cả các mã phát triển được hợp nhất vào nhánh chính khi sẵn sàng để được thúc đẩy để sản xuất.
* **Phát triển** -Chi nhánh này chứa mã tiền sản xuất. Khi các tính năng kết thúc thì chúng được hợp nhất thành phát triển.
Gitflow phù hợp lý tưởng cho các dự án có chu kỳ phát hành theo lịch trình. Mặc dù, lịch sử Git trở nên không thể đọc được.

### Dòng chảy GitHub
Dòng chảy GitHub là một quy trình làm việc nhẹ. Nó được tạo ra bởi [GitHub][8] vào năm 2011 và chủ yếu tập trung vào mô hình Agile, nơi bạn không chờ đợi một chu kỳ phát hành. Thay vào đó, bạn thúc đẩy các thay đổi để sản xuất hàng ngày khi các tính năng hoàn thành.
Dòng chảy GitHub theo sau các hiệu trưởng:
  * Bất cứ điều gì trong chi nhánh Master Master có thể triển khai.
  * Để làm việc trên một cái gì đó mới, hãy tạo một nhánh riêng biệt của Master với một số tên mô tả, ví dụ:
  * Cam kết với chi nhánh đó cục bộ và thường xuyên đẩy công việc của bạn đến cùng một nhánh tên trên máy chủ.
  * Khi bạn cần phản hồi hoặc trợ giúp, hoặc bạn nghĩ rằng chi nhánh đã sẵn sàng để hợp nhất, hãy mở [yêu cầu kéo][4]
  * Sau khi được xem xét và đăng nhập vào tính năng này, bạn có thể hợp nhất nó vào Master
  * Một khi nó được hợp nhất và được đẩy sang ‘Master, nó có thể được triển khai để sản xuất.

### Dòng chảy Gitlab
Dòng chảy Gitlab là một quy trình công việc do Gitlab tạo ra vào năm 2014. Dòng chảy Gitlab là một giải pháp thay thế đơn giản hơn cho GitFlow và kết hợp phát triển tính năng phát triển và các nhánh tính năng theo dõi vấn đề. Sự khác biệt chính giữa dòng gitlab và dòng github là việc sử dụng các nhánh môi trường.
Các nhà phát triển tạo ra một nhánh **phát triển** và biến điều đó thành mặc định, trong khi luồng gitlab hoạt động với nhánh chính ngay lập tức. Dòng gitlab kết hợp nhiều nhánh tiền sản xuất. Và, chúng có thể được sử dụng để kiểm tra các công cụ ở các cấp độ khác nhau. ví dụ: từ chi nhánh thử nghiệm đến chấp nhận và sau đó từ chấp nhận đến sản xuất.

## Phần kết luận {#conclusion}

Trong bài viết này, chúng tôi đã tìm hiểu về các chi nhánh Git và các yêu cầu kéo. Chúng tôi đã nghiên cứu tầm quan trọng của các yêu cầu kéo và cách chúng có thể được sử dụng trong các quy trình công việc khác nhau. Chúng tôi cũng khám phá các mô hình phân nhánh Git khác nhau một thời gian ngắn.



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
