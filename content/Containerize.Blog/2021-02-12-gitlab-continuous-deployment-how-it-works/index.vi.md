---
title: "Gitlab Triển khai liên tục | Làm thế nào nó hoạt động?" 
seoTitle: "Gitlab Triển khai liên tục | Làm thế nào nó hoạt động?" 
description: "Trong hướng dẫn này, chúng tôi sẽ xây dựng một đường ống triển khai liên tục với Gitlab. Gitlab Triển khai liên tục giúp DevOps thực hiện triển khai tự động." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "Triển khai tự động hợp lý hóa quy trình làm việc của bạn & amp; quá trình. Hướng dẫn Gitlab này giúp bạn học cách thiết lập một đường ống triển khai liên tục bằng Gitlab CI/CD." 
url: /vi/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## Triển khai tự động hợp lý hóa quy trình & quy trình làm việc của bạn. Hướng dẫn Gitlab này giúp bạn học cách thiết lập một đường ống triển khai liên tục bằng Gitlab CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="Gitlab triển khai liên tục">}}


## Tổng quan
Trong một vài bài viết gần đây, chúng tôi đã tìm hiểu về [những điều cơ bản về kiểm soát phiên bản][1] và sau đó chúng tôi nâng cao kiến ​​thức của mình bằng cách tìm hiểu về [mô hình phân nhánh khác nhau][2] và quy trình công việc. Hệ thống kiểm soát phiên bản đã mang lại hiệu quả trong thế giới phát triển, triển khai và tích hợp. Các nhà phát triển thấy rất dễ dàng để cam kết mã nguồn mà không phải lo lắng về các bản dựng và thử nghiệm. Ngành công nghiệp phần mềm đã đạt được sự tự tin và lợi thế cạnh tranh vì phương pháp này đã khởi động các triển khai.
**Việc triển khai liên tục Gitlab** và tích hợp giúp tìm ra các vấn đề dễ dàng. Hơn nữa, các nhà phát triển có thể theo dõi các lỗi và xử lý bỏ lỡ khác trong một khoảng thời gian ngắn hơn. Toàn bộ quá trình tự động hóa này mang lại sự tự do khỏi các nhiệm vụ diễn ra thường xuyên và giảm nhân lực và cơ hội lỗi. Hôm nay trong bài đăng trên blog này, chúng tôi sẽ khám phá về đường ống triển khai liên tục với Gitlab CI/CD. Vì vậy, hãy để bắt đầu bằng cách bao gồm các điểm sau!
* **[CI & CD][3]** 
* **[Người chạy Gitlab là gì][4]** 
* **[. Gitlab-ci.yml tệp][5]** 
* **[Tạo ứng dụng mẫu cơ bản][6]** 
* **[Kết luận][7]** 

## CI & CD là gì {#cicd}

Tích hợp liên tục (CI) là một trong những thực tiễn tốt nhất của DevOps để tự động hóa việc tích hợp các thay đổi mã từ nhiều người đóng góp vào một dự án phần mềm duy nhất. Điều này cho phép các nhà phát triển thường xuyên hợp nhất các thay đổi mã vào kho lưu trữ trung tâm nơi các bản dựng và kiểm tra sau đó được chạy. Triển khai liên tục (CD) di chuyển thêm một bước bằng cách tự động triển khai mã đến môi trường đích (sản xuất hoặc dàn dựng) sau khi mỗi mã cam kết và xây dựng.
Trước khi bạn bắt đầu, hãy đảm bảo bạn có một dự án trong Gitlab mà bạn muốn sử dụng CI/CD. Và bạn nên có quyền truy cập cấp độ duy trì hoặc chủ sở hữu vào dự án.

## Gitlab Runner là gì {#runner}

Sau khi hiểu **triển khai liên tục Gitlab** , Gitlab Runner là một chương trình nhẹ nhỏ được viết trong Go chạy các công việc liên quan đến tích hợp liên tục (CI) trên máy địa phương của bạn và gửi kết quả đến Gitlab để xem xét các thay đổi. Đây là một nhị phân thực thi duy nhất có thể được cài đặt trên bất kỳ hệ điều hành chính nào.
Trước khi chúng tôi tiến lên phía trước với Gitlab CI / CD, bạn cần đảm bảo rằng bạn có sẵn các vận động viên để chạy các nhiệm vụ của mình. Bạn có thể làm theo hướng dẫn chính thức để [Cài đặt][8] và [Đăng ký][9] Người chạy Gitlab.

## .gitlab-ci.yml tệp {#yml}

**. Gitlab-ci.yml**là một tệp mà bạn định cấu hình các hướng dẫn cụ thể cho Gitlab CI/CD. Nó được đặt vào gốc của kho lưu trữ của bạn và chứa các định nghĩa về cách xây dựng dự án của bạn. Mỗi khi chúng tôi đưa ra một cam kết vào phiên bản Gitlab của mình, Gitlab sẽ gọi một người chạy để xây dựng và kiểm tra dự án theo hướng dẫn trong tệp này.

## Tạo một ứng dụng mẫu {#sample}

Trong phần của hướng dẫn **gitlab** này, chúng tôi sẽ tạo một ứng dụng mẫu. Giả sử rằng bạn đã tạo ra một kho lưu trữ Gitlab, hãy để tạo một ứng dụng mẫu và chúng tôi sẽ thiết lập quy trình CI / CD cho ứng dụng.
Trước hết, hãy tạo tệp pack.json ở gốc của dự án của bạn
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Bây giờ tạo một app.js tại gốc của dự án của bạn
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
Trong bước cuối cùng của **Gitlab Triển khai liên tục,**Tạo một**Dockerfile** và thêm các nội dung sau vào nó:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
Dockerfile chứa quá trình xây dựng cho ứng dụng này. Nó liên quan đến việc tạo một thùng chứa nút và cài đặt các phụ thuộc.
Bây giờ chúng ta cần tạo tệp **. Gitlab-ci.yml** . Tệp này sẽ chứa các hướng dẫn để xây dựng dự án của chúng tôi. Mỗi khi chúng tôi thực hiện một cam kết vào kho Gitlab của chúng tôi, Gitlab sẽ gọi một người chạy để xây dựng dự án.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Chúng tôi chỉ có một bản dựng giai đoạn và nó chỉ có **cài đặt NPM** dưới dạng tập lệnh. Đây là một lệnh bạn sẽ phải chạy thủ công mỗi khi thay đổi đến dự án của bạn. Và, đó là nơi mà người chạy Gitlab đến và sẽ tự động làm điều này cho bạn mỗi khi bạn cam kết.
Bây giờ giả sử rằng bạn đã cài đặt trình chạy Gitlab và cũng đã đăng ký nó với phiên bản Gitlab của bạn, chúng tôi có thể kiểm tra Gitlab CI / CD hoạt động bằng cách thực hiện một cam kết đơn giản với ứng dụng và đẩy nó vào Gitlab.
Sau đó, bạn có thể mở dự án của mình trong Gitlab, đi đến My-Project → Pipeline và bạn sẽ thấy một thẻ nói rằng đã vượt qua bên cạnh cam kết mà bạn đã thực hiện. Các cam kết tiếp theo cũng sẽ có thẻ.

## Phần kết luận {#conclusion}

Điều này đưa chúng ta đến cuối cùng của hướng dẫn **Gitlab**. Trong bài viết này, chúng tôi đã tìm hiểu về những điều cơ bản của tích hợp liên tục Gitlab, **CI & CD** , **Người chạy Gitlab là gì** và triển khai liên tục. Hơn nữa, chúng tôi đã nghiên cứu những gì mà việc sử dụng các vận động viên trong quy trình làm việc CI / CD tổng thể. Chúng tôi cũng đã tạo một dự án mẫu giải thích cách thiết lập triển khai liên tục bằng Gitlab. Hướng dẫn Gitlab này thực sự sẽ giúp bạn nếu bạn đang tìm kiếm**triển khai liên tục Gitlab** . Tuy nhiên, có nhiều tài nguyên khác được đề cập trong phần Khám phá trên mạng bên dưới mà bạn có thể kiểm tra. Ngoài ra, các bài viết là về các hệ thống điều khiển phiên bản****là nguồn mở, tự lưu trữ và mở rộng.
Cuối cùng, [containerize.com][10] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Do đó, vui lòng giữ liên lạc với danh mục [][11][Phiên bản điều khiển][12] để cập nhật thường xuyên. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][13], [LinkedIn][14] và [Twitter][15].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
  * [Tự động hóa quy trình phát triển phần mềm với các hành động GitHub][16]
  * [Hiểu và tìm hiểu các chi nhánh và các yêu cầu kéo trong GIT][2]
  * [Phần mềm quản lý mã nguồn | Git là gì?][17]
  * [Top 5 Hệ thống điều khiển phiên bản nguồn mở vào năm 2021][18]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][19]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
