---
title: "Cách tạo và chạy bot trong Rocket.chat bằng cách sử dụng Botpress" 
seoTitle: "Cách tạo và chạy bot trong Rocket.chat bằng cách sử dụng Botpress" 
description: "Hướng dẫn này dạy cho bạn các bước đơn giản và dễ dàng rằng cách tạo bot bằng botpress và nó tích hợp với Rocket.chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn cách tạo bot bằng botpress và nó tích hợp với Rocket.chat" 
url: /vi/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## Trong hướng dẫn này, chúng tôi sẽ hướng dẫn bạn cách tạo bot bằng botpress và nó tích hợp với Rocket.chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Cách tạo và chạy bot trong Rocket.chat bằng cách sử dụng Botpress">}}

Chatbot là một chương trình máy tính được thiết kế để mô phỏng cuộc trò chuyện của con người. Bạn có thể gặp phải một người trên Facebook Messenger, một trang web bán lẻ. Về mặt kỹ thuật, bot là các chương trình tự động được thiết kế để thực hiện một nhiệm vụ cụ thể.
Rocket.Chat khuyến khích chatbot và tích hợp tự động hóa nhắn tin. Do đó, có tài liệu toàn diện để hướng dẫn bạn trong quá trình tạo bot.
Trong bài viết này, chúng tôi sẽ hướng dẫn bạn cách tạo bot bằng botpress. Và, làm thế nào để định cấu hình Rocket.chat với Botpress.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Tạo người dùng bot trong Rocket.chat][3]
  * [Mã bot của bạn bằng botpress][4]
  * [Kết luận][5]

## # Rocket.chat   {#Rocketchat}
Rocket.chat là một trong những phần mềm trò chuyện trực tiếp phổ biến một phần là một dự án trò chuyện trực tiếp nguồn mở. Nó có phiên bản trò chuyện trực tiếp miễn phí như một phiên bản cộng đồng. Cũng như, một phiên bản trò chuyện trực tiếp được lưu trữ được trả tiền cho các công ty lớn có các tính năng trò chuyện nội bộ riêng tư. Ứng dụng trò chuyện trực tiếp này chạy trong trình duyệt nhưng cũng có thể được cài đặt trên máy chủ của riêng bạn. [Đọc thêm][6]

## # botpress   {#botpress}
Chatbots trò chuyện đã giúp các doanh nghiệp này có thể cung cấp cho khách hàng của họ sự hỗ trợ cảm ứng cao luôn có sẵn mà họ muốn. Botpress là một trong những công cụ tạo bot nguồn mở phổ biến nhất với xử lý ngôn ngữ tự nhiên tích hợp. Công nghệ NLU của Botpress, làm cho nó đi trước các đối thủ cạnh tranh trong lĩnh vực như BotKit, Dialogflow và Microsoft Bot Framework. [Đọc thêm][7]

## # Tạo người dùng bot trong Rocket.Chat   {#CreateBotuser}
Để nói chuyện với chatbot của bạn, phải có tài khoản người dùng được cấu hình sẵn trên máy chủ Rocket.Chat mà bot có thể đăng nhập.
Để tạo tài khoản, bạn cần có đặc quyền quản trị viên:
  1. Trong topbar, nhấp vào ba dấu chấm (tùy chọn) và sau đó nhấp vào**Quản trị**
  2. Chọn**người dùng**từ thanh bên trái
  3. Nhấp vào nút `+` (Thêm người dùng) ở thanh bên phải
  4. Trong cửa sổ hồ sơ xuất hiện, điền vào _name_, _username_, _email_ và _password_ trường
  5. Bật _verified_ chuyển đổi dưới trường _email_
  6
  7
  8. Tắt các kênh mặc định _Join
  9. Nhấp vào _save_
Sau khi được lưu, bot sẽ được cấu hình với tên người dùng và mật khẩu được đặt ở bước 4. Bạn có thể sử dụng Rock Rocketchat \ _User và và Rocketchat \ _password, các biến môi trường để đăng nhập vào máy chủ tên lửa.

## # Mã bot của bạn bằng botpress   {#codeBot}
Botpress là gói Node.js và hoạt động với Node và NPM.
Cách nhanh nhất để bắt đầu với Botpress là sử dụng kho lưu trữ [botpress-kick][8] đã được tích hợp với Rocket.chat thông qua [đầu nối Botpress-Channel][9].
Điều hướng đến thư mục nơi bạn muốn làm việc với bot và tiến hành các bước sau:
* * Cài đặt gói botpress**
```
npm init -y
npm install botpress@10.40.0
```
* * Tạo bot**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
Lệnh của Bot Botpress init khởi chạy một trình hướng dẫn sẽ giúp bạn tạo cấu hình ban đầu. Bạn sẽ thấy một cái gì đó như sau:
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
* * Cài đặt Trình kết nối botpress và phụ thuộc bot**
```
npm install
npm install botpress-channel-rocketchat
```
Cấu hình bot
Mở thư mục cấu hình trên mạng và tạo tệp kênh kênh-rocketchat.json với nội dung sau:
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
* * Chạy bot**
```
npm start
```
* * Nói chuyện với bot của bạn**
Trên máy chủ, đăng nhập với tư cách là người dùng thông thường (không phải người dùng bot), vào phòng tổng hợp và nói chuyện với bot mới được tạo của bạn.

## # Kết luận   {#conclusion}
Trong bài viết này, chúng tôi đã học được cách tạo bot trong botpress. Và, làm thế nào để cấu hình nó với Rocket.chat. Botpress giúp người dùng rất dễ dàng xây dựng quy trình công việc tự động sáng tạo. Và, tích hợp với Rocket.chat cho phép bạn kiểm soát chúng theo cách trò chuyện.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
