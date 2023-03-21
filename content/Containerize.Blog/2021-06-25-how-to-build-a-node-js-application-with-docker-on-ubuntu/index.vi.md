---
title: "Cách xây dựng ứng dụng Node.js với Docker trên Ubuntu" 
seoTitle: "Cách xây dựng ứng dụng Node.js với Docker trên Ubuntu" 
description: "Nếu bạn quan tâm đến Node.js và muốn sử dụng Docker. Hướng dẫn này sẽ hướng dẫn bạn, làm thế nào để xây dựng một ứng dụng NodeJS với Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "Bài viết này sẽ giải thích cho bạn cách xây dựng ứng dụng NodeJS với bộ chứa Docker. Docker cho phép đóng gói và chạy các ứng dụng dưới dạng container." 
url: /vi/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Cách xây dựng ứng dụng NodeJS với Docker">}}


## Bài viết này sẽ giải thích cho bạn cách xây dựng ứng dụng NodeJS với bộ chứa Docker. Docker cho phép đóng gói và chạy các ứng dụng dưới dạng container.
Hôm nay chúng tôi đang bắt đầu một loạt các hướng dẫn về các công cụ phát triển phần mềm. Và bài viết đầu tiên này bao gồm cách chứa một ứng dụng Node.js bằng Docker. Docker giúp các nhà phát triển đóng gói và chạy các ứng dụng dưới dạng container. Vì container là một quá trình bị cô lập và là một sự thay thế nhẹ cho các máy ảo. Bài viết này giải thích cách xây dựng một ứng dụng NodeJS với bộ chứa Docker. Bắt đầu nào!
  *[**Docker là gì** ][1]
  * **[Điều kiện tiên quyết][2]**
  *[**Ứng dụng Setup Node.js** ][3]
  *[**Viết Dockerfile** ][4]
  *[**Xây dựng hình ảnh và chạy container Docker** ][5]
  *[**Kết luận** ][6]

## Docker   {#Docker} là gì
Docker là một bộ nền tảng như một sản phẩm dịch vụ sử dụng ảo hóa cấp độ OS để cung cấp phần mềm trong các gói gọi là container. Nó là một nền tảng mở để phát triển, vận chuyển và chạy các ứng dụng. Docker cho phép bạn tách các ứng dụng của mình khỏi cơ sở hạ tầng để bạn có thể cung cấp phần mềm nhanh chóng.
Docker sử dụng kiến ​​trúc máy khách-máy chủ. Khách hàng Docker nói chuyện với Docker Daemon, nơi thực hiện công việc xây dựng, chạy và phân phối các thùng chứa Docker của bạn. Máy khách Docker và Daemon giao tiếp bằng API REST, trên các ổ cắm UNIX hoặc giao diện mạng. Đây là sơ đồ của kiến ​​trúc Docker.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Kiến trúc Docker">}}


## Điều kiện tiên quyết   {#Prereq}
  * Máy chủ Ubuntu
  * Docker được cài đặt trên máy chủ
  * Node.js NPM đã cài đặt

## Ứng dụng Node.js Ứng dụng   {#Setup}
Để tạo hình ảnh của bạn, trước tiên bạn sẽ cần tạo các tệp ứng dụng của mình, sau đó bạn có thể sao chép vào thùng chứa của mình. Các tệp này sẽ bao gồm nội dung, mã và phụ thuộc tĩnh ứng dụng của bạn.
Đầu tiên, hãy tạo một thư mục cho dự án của bạn trong thư mục nhà của người dùng không root của bạn. Sau đó, thực thi lệnh bên dưới trong một thư mục mới mà bạn đã tạo.
```
npm init -y
npm i -s express
```
Lệnh trên sẽ thiết lập ứng dụng Node.js với Framework Express được cài đặt dưới dạng phụ thuộc. Hãy để thêm mã sau vào tệp **app.js** .
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Bắt đầu ứng dụng với Node App.js
```
node app.js
```
Điều hướng trình duyệt của bạn đến http: // \ _server của bạn \ _ip: 3000. Bạn sẽ thấy trang đích sau.
Bây giờ bạn có một ứng dụng lên và chạy. Bây giờ chúng ta có thể chuyển sang tạo Dockerfile cho phép chúng ta tái tạo và mở rộng ứng dụng này.

## Viết Dockerfile   {#DockerFile}
Sử dụng Dockerfile, bạn có thể chỉ định những gì sẽ được bao gồm trong thùng chứa ứng dụng của bạn khi nó được thực thi và môi trường container.
Trước hết, tạo Dockerfile với lệnh sau tại gốc của dự án của bạn.
```
vi Dockerfile
```
Thêm các mục sau **từ**  hướng dẫn để đặt hình ảnh cơ sở của ứng dụng:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Bạn có thể thêm tệp .dockerignore để xóa các tệp không thuộc về hình ảnh Docker.
{{_LINE_46_}}
{{_LINE_47_}}
Hãy để tạo ra **node_modules**  thư mục con trong /home /node cùng với thư mục ứng dụng. Điều này sẽ đảm bảo rằng họ có các quyền cần thiết, điều này sẽ rất quan trọng khi chúng tôi tạo các mô -đun nút cục bộ trong thùng chứa với cài đặt NPM.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Tiếp theo, đặt thư mục làm việc của ứng dụng thành/home/node/app:
```
...
WORKDIR /home/node/app
```
Tiếp theo, sao chép gói.json và pack-lock.json, gán tệp dự án cho người dùng không root
```
...
COPY package*.json ./
USER node
RUN npm install
```
Sao chép mã ứng dụng của bạn với các quyền thích hợp vào thư mục ứng dụng trên container
```
...
COPY --chown=node:node . .
```
Phơi bày lệnh để lộ cổng:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
Phiên bản cuối cùng của Dockerfile sẽ trông như thế này:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## xây dựng hình ảnh và chạy bộ chứa   {#Build}
Chạy lệnh sau để tạo hình ảnh Docker của bạn
```
docker build -t <<image_name>> .
```
Điều này sẽ tạo ra một hình ảnh _Docker_ mà bạn có thể kiểm tra bằng cách sử dụng lệnh Docker Images. Bây giờ có thể tạo một thùng chứa với hình ảnh này bằng lệnh sau:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Điều này sẽ bắt đầu container mà bạn có thể xác minh bằng cách chạy lệnh Docker PS. Bây giờ trong trình duyệt của bạn nếu bạn truy cập http: // localhost: 3000 bạn sẽ thấy ứng dụng Node.js của bạn đang chạy. Tuy nhiên, lần này bây giờ nó chạy từ container Docker của bạn.

## Kết luận   {#conclusion}
Phát triển với container Docker rất đơn giản và dễ dàng. Docker giúp các nhà phát triển đóng gói và chạy các ứng dụng dưới dạng container. Trong hướng dẫn này, chúng tôi đã học cách xây dựng ứng dụng Node.js bằng cách sử dụng container Docker trên Ubuntu. Trong các bài viết sắp tới, chúng tôi sẽ viết về việc sử dụng nhiều hơn của Docker và chúng tôi cũng sẽ thảo luận về các công cụ khác.

## Khám phá
  * [Cách cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu][7]
  * [Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
