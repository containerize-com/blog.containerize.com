---
title: "Cách sử dụng chatgpt trong VSCODE | Mã mở rộng VSCode GPT" 
seoTitle: "Cách sử dụng chatgpt trong VSCODE | Mã mở rộng VSCode GPT" 
description: "Hãy để trí tuệ nhân tạo viết và tối ưu hóa mã nguồn bằng API OpenAI. Mã mở rộng VSCODE GPT được cung cấp bởi GPT-3, đây là mô hình NLP nguồn mở." 
date: Tue, 17 Jan 2023 10:26:29 +0000
author: muhammadmustafa
summary: "Bài viết này sẽ giới thiệu Chatgpt cho VSCode. Một mã máy phát mã OpenAI GPT dựa trên mô hình GPT-3 do trí tuệ nhân tạo nguồn mở." 
url: /vi/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
categories: ['Artificial intelligence']
---

##  **Bài viết này sẽ giới thiệu Chatgpt cho VSCode. Một mã máy phát mã OpenAai GPT dựa trên mô hình GPT-3 do trí tuệ nhân tạo nguồn mở.** 

{{< figure align=center src="images/How-to-use-ChatGPT-in-VSCode-The-VSCode-Extension-CodeGPT-1.png" alt="Mã mở rộng VSCode GPT">}}


## Tổng quan
Nghĩ rằng bạn là người mới bắt đầu hoặc một lập trình viên cấp độ có kinh nghiệm và bạn đã làm việc trong một dự án phát triển. Vì vậy, điều gì sẽ xảy ra nếu [Trí tuệ nhân tạo hỗ trợ][1] **Mã mở rộng VSCode GPT**  hỗ trợ bạn viết mã nguồn bằng bất kỳ ngôn ngữ lập trình nào? Ví dụ: nếu bạn yêu cầu AI viết mã cho phần tử đầu vào HTML và AI trả về. Tuyệt vời?
Vâng, nó không chỉ tuyệt vời mà là một điều kích thích tư duy là AI sẽ tạo ra mã nguồn của phần mềm của chúng tôi. Chà, bài đăng trên blog này sẽ trình bày một trình tạo mã [openai][2]** **có tên [mã GPT][3], được cung cấp bởi [nguồn mở][4]**  gpt-3 **. Chúng tôi sẽ thông qua việc cài đặt và thiết lập các quy trình của mã mở rộng VSCode này GPT. Ngoài ra, chúng tôi cũng sẽ khám phá những gì nó cung cấp cho các nhà phát triển và cộng đồng. Tuy nhiên, nếu bạn đã bỏ qua bài đăng trên blog gần đây của chúng tôi trên  **[TONGPT][5]** , thì phải truy cập [liên kết][6] này để có được cái nhìn tổng quan chi tiết về điều này ** ai chatbot.** 
Chúng tôi sẽ bao gồm các điểm sau:
  *[ **Mã GPT là gì?** ][7]
  *[ **Cách cài đặt mã mở rộng VSCode GPT?** ][8]
  *[ **Truy xuất khóa API OpenAI & Cấu hình mã GPT** ][9]
  *[ **Bắt đầu sử dụng Code GPT-Trình tạo mã Openai được hỗ trợ AI** ][10]

## Mã GPT là gì?   {#What-is-codegpt}
[Code GPT][3] là tiện ích mở rộng mã **Visual Studio  **cho phép bạn tạo đoạn mã từ văn bản thuần túy trong trình soạn thảo. Trình tạo mã Openai **  này dựa trên API OpenAI để xử lý và tạo phản hồi của ngôn ngữ tự nhiên. Tuy nhiên, Code GPT được xây dựng trên đầu GPT-3, là mô hình được đào tạo trước, vì vậy mọi yêu cầu được thực hiện đối với mã GPT đều được GPT-3 xử lý và mô hình này đủ thông minh để áp dụng nhiều tình huống. Ngoài ra, tiện ích mở rộng ** VSCODE**  cho phép bạn khúc xạ và cải thiện các đoạn mã cùng với việc tạo mã. Trên thực tế, toàn bộ môi trường mang lại cho bạn cảm giác chính xác rằng bạn đang sử dụng [TNTGPT][11] trong Trình chỉnh sửa mã Visual Studio.

## Làm thế nào để cài đặt mã mở rộng VSCode GPT? /
Trong phần này, chúng tôi sẽ trải qua các bước để cài đặt **mã mở rộng VSCode GPT.  **Với mục đích này, hãy đảm bảo bạn đã cài đặt mã Visual Studio trên máy của mình. Bạn có thể cài đặt tiện ích mở rộng này từ thị trường**   [VSCode][12]** một cách dễ dàng.
Mở Trình chỉnh sửa VSCode, vào phần mở rộng của Cameron và nhập mã GPT vào thanh tìm kiếm. Sẽ có nhiều tiện ích mở rộng với tên CodeGpt nhưng bạn phải cài đặt tiện ích mở rộng như trong hình dưới đây:

{{< figure align=center src="images/codegpt-installation-1024x640.png" alt="Cài đặt mã GPT">}}

Vui lòng cập nhật VSCODE lên phiên bản mới nhất trong trường hợp bạn gặp lỗi tương thích. Hơn nữa, phần mở rộng VSCode này đang được phát triển nhất quán, vì vậy cơ hội hành vi bất thường không thể được bỏ qua.

## Truy xuất khóa & cấu hình mã API OpenAI
Sau khi cài đặt hoàn tất, bước tiếp theo là lấy khóa API từ Openai, [trang web][13]. Bạn cần khóa API này để kích hoạt các tính năng của tiện ích mở rộng  **mã GPT** . Để có được API, hãy truy cập [liên kết] này [13] và tạo tài khoản nếu chưa được tạo.

{{< figure align=center src="images/openai-key-1024x630.png" alt="API Oepnai">}}

Trong hình ảnh trên, bạn có thể thấy nút tạo khóa Secret Secret mới. Nhấp vào nút này và bạn sẽ nhận được khóa để giữ nó trong một không gian an toàn. Bây giờ, bước cuối cùng là đặt khóa bí mật này vào cài đặt của  **mã mở rộng VSCode GPT.**  Để đạt được điều đó, hãy thực hiện các bước sau:
  * Nhấn lệnh "Shift+P"
  * Viết mã GPT và chọn khóa CodeGPT: Đặt khóa API
  * Cuối cùng, chèn phím và nhấn vào Enter Enter như trong hình dưới đây:

{{< figure align=center src="images/openai-API-1024x606.png" alt="Chatgpt cho VSCode">}}

Khi tất cả được hoàn thành thành công, cuối cùng bạn sẽ có  **CODE GPT Tiện ích mở rộng**  được cài đặt trong mã Visual Studio của bạn. Trong phần tiếp theo, chúng tôi sẽ đi sâu hơn nữa để khám phá các tính năng được cung cấp bởi tiện ích mở rộng VSCode này.

## Bắt đầu sử dụng Code GPT-Trình tạo mã Openai được hỗ trợ AI
Cho đến nay, chúng tôi đã thiết lập tiện ích mở rộng mã GPT trong mã Visual Studio. Để tận dụng mã mở rộng VSCODE GPT** này, hãy nhấn lệnh+Shift+P, Chọn Hỏi CodeGpt và viết câu hỏi của bạn vào trường đầu vào, chẳng hạn như mã ghi cho một phần tử đầu vào trong HTML và bạn sẽ nhận được Phản hồi trong thanh bên như trong hình dưới đây:

{{< figure align=center src="images/chatgpt-for-vscode-1024x522.png" alt="Chatgpt cho VSCode">}}

Ngoài ra, bạn có thể chọn một đoạn mã và yêu cầu Codegpt giải thích đoạn mã đã chọn. Ví dụ: chúng tôi đã chọn đoạn mã mã và hỏi mở rộng VSCode, Giải thích đoạn mã này và phản hồi được hiển thị trong bảng điều khiển bên như trong hình dưới đây.

{{< figure align=center src="images/VSCode-Extension-Code-GPT-1024x398.png" alt="Trình tạo mã Openapi,">}}

Về cơ bản, phản hồi này được tạo và trả về bởi mô hình  **nguồn mở GPT-3** . Tương tự như vậy, bạn đã thấy tiện ích mở rộng VSCODE này tuyệt vời như thế nào và nó giống như một nhà thờ cho VSCode.

## gói lên
Để kết luận, chúng tôi đã làm phong phú trình chỉnh sửa mã Visual Studio của chúng tôi với Trình tạo mã Openai được hỗ trợ **AI.  **Phần mở rộng VSCode này giúp các nhà phát triển tạo, khúc xạ và ghi lại mã nguồn bằng các ngôn ngữ lập trình khác nhau. Hơn nữa, bạn có thể hỏi**   Mã mở rộng VSCode GPT** để giải thích một phần cụ thể của mã nguồn. Trên hết, bạn có thể tìm thấy các vấn đề được đính kèm với đoạn mã đã chọn có thể mang lại sự cải thiện được đề xuất bởi tiện ích mở rộng VSCODE này. Cuối cùng, có một số bài viết rất có liên quan được liệt kê trong phần Xem thêm nữa.
Cuối cùng, [containerize.com][4] liên tục viết các bài đăng trên blog về các sản phẩm và chủ đề nguồn mở tiếp theo. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][14], [LinkedIn][15] và [Twitter][16].

## Đặt một câu hỏi
Bạn có thể cho chúng tôi biết về câu hỏi hoặc truy vấn của bạn trên [Diễn đàn] của chúng tôi [17].

## Câu hỏi thường gặp
**Mã GPT được sử dụng để làm gì?**
[Code GPT][3] là một phần mở rộng và tối ưu hóa mã dựa trên trí tuệ nhân tạo. Điều này được xây dựng trên đỉnh của GPT-3 nguồn mở được cung cấp bởi Openai. Để biết thêm chi tiết, hãy truy cập liên kết này.
**Cách tích hợp mã GPT với VSCODE?**
Vui lòng truy cập [Liên kết][9] này để cài đặt tiện ích mở rộng VSCode do AI này chạy.

## Xem thêm
  * [Openai Chatbot GPT-3 | Chatgpt một cuộc cách mạng AI][6]
  * [Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][18]

  
[1]: https://blog.containerize.com/category/artificial-intelligence/
[2]: https://openai.com/
[3]: https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3
[4]: https://www.containerize.com/
[5]: https://en.wikipedia.org/wiki/GPT-3
[6]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[7]: #What-is-CodeGPT
[8]: #How-to-install-the-VSCode-extension-CodeGPT
[9]: #Retrieve-OpenAI-API-Key-configure-CodeGPT-
[10]: #Start-using-CodeGPT---an-AI-Powered-OpenAI-Code-Generator
[11]: https://openai.com/blog/chatgpt/
[12]: https://marketplace.visualstudio.com/vscode
[13]: https://beta.openai.com/account/api-keys
[14]: https://web.facebook.com/containerize
[15]: https://www.linkedin.com/company/containerize/
[16]: https://twitter.com/containerize_co
[17]: https://forum.containerize.com/
[18]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
