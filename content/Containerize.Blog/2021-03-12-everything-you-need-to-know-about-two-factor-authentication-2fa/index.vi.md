---
title: "Mọi thứ bạn cần biết về xác thực hai yếu tố (2FA)" 
seoTitle: "Mọi thứ bạn cần biết về xác thực hai yếu tố (2FA)" 
description: "Bài viết này giải thích chi tiết xác thực hai yếu tố (2FA) và cách thực hiện nó trong .NET5 bằng cách sử dụng IdentityServer4 và Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "Bài viết này giải thích chi tiết xác thực hai yếu tố và cách thực hiện nó trong .NET 5 bằng cách sử dụng các khung nhận dạng như IndentityServer4 và nhà cung cấp SMS (Twilio). & NBSP;" 
url: /vi/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Bài viết này giải thích chi tiết xác thực hai yếu tố và cách thực hiện nó trong .NET 5 bằng cách sử dụng các khung nhận dạng như IndentityServer4 và nhà cung cấp SMS (Twilio).
{{_LINE_11_}}
Nó chứa các phần sau:
  * [Xác thực hai yếu tố là gì? ][1]
  * [2FA hoạt động như thế nào?][2]
  * [2FA và xác thực đa yếu tố][3]
  * [Hạn chế của việc sử dụng 2FA][4]
  * [Thực hiện 2FA trong .NET5][5]
Trước hết, hãy để hiểu về 2FA là gì và tại sao nó cần phải là một phần không thể thiếu của mọi ứng dụng web hiện đại.

## Xác thực hai yếu tố là gì? {#2FA}

Một yếu tố trong bối cảnh này ngụ ý một cách bạn có thể thuyết phục một ứng dụng hoặc dịch vụ rằng bạn là chủ sở hữu của tài khoản. Tên người dùng/Mật khẩu được sử dụng rộng rãi làm yếu tố xác thực phổ biến nhất. Tuy nhiên, do nhiều vấn đề bảo mật liên quan đến CNTT và các vi phạm dữ liệu rộng rãi gần đây-Xác thực một yếu tố đã trở nên kém an toàn hơn.
Xác thực hai yếu tố là một lớp bảo mật bổ sung, xuất hiện trước khi bạn có thể truy cập vào tài khoản của mình. In-Addition vào quy trình đăng nhập tiêu chuẩn-Nó giới thiệu thêm một bước để xác minh danh tính người dùng bằng cách gửi mã (đến email của bạn hoặc dưới dạng tin nhắn văn bản). Theo cách này, danh tính của bạn được chứng minh và chỉ sau đó truy cập được cấp.

## 2FA hoạt động như thế nào? {#2fawork}

Trong 2FA, mật khẩu vẫn là yếu tố xác thực đầu tiên của bạn - vì vậy khi bạn đăng nhập vào tài khoản của mình, nó sẽ chuyển hướng bạn đến một trang khác nơi bạn được yêu cầu xác minh quyền sở hữu tài khoản. Điều này có thể được thực hiện bằng cách sử dụng nhiều cách khác nhau:
  1. Ứng dụng gửi mã xác minh thường được gọi là OTP (mật khẩu một lần) đến địa chỉ email của bạn.
  2. Mã được gửi dưới dạng tin nhắn văn bản trên điện thoại của bạn.
  3. Bạn cài đặt một ứng dụng Authenticator trên thiết bị di động thông qua đó bạn có thể ủy quyền cho các yêu cầu đăng nhập.
Lưu ý: Các mã xác minh này được tạo ngẫu nhiên và được hết hạn khi được sử dụng. Ngoài ra, chúng sống ngắn - vì vậy, có một cửa sổ ngắn trước khi bạn có thể sử dụng mã (điều này ngăn tin tặc để buộc các mã xác minh).

## Chúng ta có thể gọi 2FA là xác thực đa yếu tố không? {#MFA}

Phương pháp xác thực không giới hạn ở hai yếu tố. Nhiều ứng dụng và dịch vụ đang di chuyển người dùng của họ ngoài 2FA và sử dụng xác thực đa yếu tố.
2FA và MFA (xác thực đa yếu tố) thường được sử dụng thay thế cho nhau. Tuy nhiên có một sự khác biệt. Trong xác thực đa yếu tố, hai hoặc nhiều yếu tố được sử dụng.
Nó có thể kiểm tra địa chỉ IP của người dùng, vị trí địa lý và thông tin thiết bị liên quan đến các yếu tố khác như mật khẩu và OTP để xác minh danh tính của người dùng.
Do đó, chúng ta có thể nói 2FA là một tập hợp con của MFA. Trong 2FA, sẽ chỉ có hai yếu tố trong khi nhiều yếu tố có thể sử dụng hai hoặc nhiều yếu tố. MFA gây khó khăn cho tin tặc vì nó bổ sung nhiều lớp bảo mật trong quá trình xác thực truyền thống.

## Có bất kỳ nhược điểm nào sử dụng 2FA? {#mfa-cons}

Tương tự như nhiều giải pháp bảo mật và bảo mật, tồn tại trong các ứng dụng hiện đại. Nó cũng đi kèm với một mức giá - sự bất tiện, vì có một bước bổ sung liên quan có thể gây ra ma sát trong trải nghiệm người dùng.
Tuy nhiên, nó được sử dụng bởi nhiều ứng dụng và dịch vụ, vì vậy sự đánh đổi này đang trở nên chấp nhận được.

## Làm thế nào tôi có thể thực hiện xác thực 2FA? {#implementing2fa}

Trong phần này, chúng tôi sẽ tìm hiểu cách triển khai 2FA trong .NET5 bằng cách sử dụng IdentityServer4 và Twilio.
Vì vậy, hãy để tạo một tài khoản dùng thử trên Twilio:
  1. Đăng ký trên
  2. Xác minh tài khoản của bạn bằng cách cung cấp số điện thoại hợp lệ.
Khi tài khoản của bạn được xác minh, bạn có thể sử dụng bảng điều khiển bảng điều khiển của họ.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Bảng điều khiển Twilio">}}

  1. Sao chép tài khoản SID và mã thông báo Auth của bạn từ bảng điều khiển.
  1. Điều hướng để mua một số mà bạn sẽ sử dụng để gửi SMS/
Lưu ý: Twilio cung cấp 15 đô la tín dụng trong tất cả các tài khoản dùng thử mà bạn sẽ sử dụng để mua số điện thoại.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Tìm kiếm số điện thoại">}}

Bạn có thể chọn bất kỳ số nào miễn là nó hỗ trợ ‘khả năng SMS. (Lưu ý số điện thoại của bạn mà chúng tôi sẽ sử dụng để định cấu hình sau trong dự án của chúng tôi).
5. Sử dụng tài khoản dùng thử, Twilio chỉ cho phép bạn gửi SMS đến ID người gọi đã được xác minh mà bạn có thể quản lý bằng liên kết bên dưới:
Đó là tất cả những gì bạn cần để định cấu hình bằng bảng điều khiển Twilio.
Hãy để tạo một ứng dụng web ASP.NET Core (chọn Mẫu dự án như bên dưới và Target .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - Dự án mới">}}

Bây giờ chúng tôi sẽ tích hợp các gói IdentityServer4, Twilio từ Nuget.
  1. trứng
  2. `Cài đặt gói Twilio -Version 5.55.0`
IeditityServer4 UI nhanh có sẵn tại:
Bạn có thể đưa nó vào dự án của mình bằng cách chạy lệnh bên dưới trong shell nhà phát triển:
`IEX ((hệ thống mới-object.net.webclient) .doLoadString ('https://raw.githubusercontent.com/identityserver/identityserver4.quickstart.ui/main/getmain.p
Nếu nó được cài đặt chính xác - bạn sẽ thấy thư mục nhanh trong dự án của mình:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Hệ thống phân cấp dự án">}}

Hãy để xây dựng và điều hành dự án này. Bạn sẽ có thể xem trang Chào mừng như được hiển thị bên dưới:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Mẫu này sử dụng lưu trữ dữ liệu trong bộ nhớ để bạn có thể thêm người dùng thử nghiệm vào tệp config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Lớp config.cs">}}

Mở startup.cs và thêm Dịch vụ IdentityServer4 trong Phương thức ConfigService:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Bây giờ thêm danh tính trình điều khiển vào đường ống yêu cầu:
```
app.UseIdentityServer();
```
Chạy dự án và điều hướng đến **_/tài khoản/đăng nhập _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="Nhận dạngServer4 - Đăng nhập">}}

Đăng nhập với thông tin đăng nhập được thêm vào **config.cs** 
Khi IdentityServer được cấu hình và chạy. Sau đó, chúng tôi có thể thêm hỗ trợ cho 2FA bằng Twilio.
Hãy để thêm lớp sau:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Lớp cấu hình này sẽ được sử dụng để tiêm cài đặt bằng cách sử dụng tiêm phụ thuộc.
  1. Nhấp chuột phải vào dự án và thêm bí mật người dùng với cấu hình Twilio, (SID, mã thông báo, Phonenumber)
  2
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs đã được cấu hình. Bây giờ chúng tôi có thể chuyển sang thêm một dịch vụ mới có tên AuthMessagesEnder, người sẽ chịu trách nhiệm gửi SMS bằng Twilio.
Hãy để tạo ra một giao diện mà AuthMessageSender sẽ thực hiện.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Chúng tôi sẽ tiêm này trong startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
Mã gửi SMS khá đơn giản. Chúng tôi chỉ cần tạo một ứng dụng khách Twilio và gọi phương thức MessagereSource.CreateAsync để gửi SMS.
```
public Task SendSmsAsync(string number, string message)
{
              var sid = _twilioSettings.Value.Sid;
            var token = _twilioSettings.Value.Token;
            var from = _twilioSettings.Value.From;
            TwilioClient.Init(sid, token);
            MessageResource.CreateAsync(new PhoneNumber(number),
                from: new PhoneNumber(from),
                body: message);
            return Task.FromResult(0);
}

```
Chúng tôi sẽ sửa đổi phương thức đăng nhập để kiểm tra xem người dùng đã bật 2FA để chúng tôi có thể chuyển hướng chúng để xác minh mã.
Thêm VerifyCode.CSHTML trong QuickStart/lượt xem:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA trong hành động">}}

Sửa đổi phương thức tài khoản/đăng nhập để tạo và gửi mã xác minh sau khi xác minh thông tin đăng nhập. Chúng tôi không muốn hoàn thành dấu hiệu trong yêu cầu tại thời điểm này.
Do đó, cuộc gọi phương thức httpContext.signinasync sẽ bị xóa và thay vào đó chúng tôi sẽ chỉ cần tạo mã xác minh ngẫu nhiên và lưu trữ nó (hiện chúng tôi đang sử dụng cửa hàng trong bộ nhớ cho mục đích trình diễn).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Ảnh chụp màn hình mã">}}

Và sau đó, chúng tôi sẽ chuyển hướng người dùng đến trang VerifyCode, nơi sẽ xác minh mã và quy trình công việc đăng nhập sẽ được hoàn thành.
Trong hành động của VerifyCode, chúng tôi chỉ đơn giản là tìm nạp thông tin về người dùng và mã từ bộ nhớ và khớp với mã được cung cấp.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Ảnh chụp màn hình mã">}}

Nếu mã được khớp thì chúng tôi chỉ cần hoàn thành yêu cầu xác thực bằng cách gọi phương thức SignInasync và chuyển hướng người dùng đến trang được ủy quyền.
Hãy để điều hành dự án
Bước -1: Người dùng cung cấp thông tin đăng nhập.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2Fademo - Đăng nhập">}}

Bước 2: Thông tin xác thực được xác minh và mã xác minh được gửi:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2Fademo - SMS">}}

Bước 3: Người dùng xác minh mã chính xác.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2Fademo - VerifyCode">}}

Mã bước 4 được xác minh và xác thực 2FA đã được hoàn thành.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2Fademo - Trang được ủy quyền">}}


### Phần kết luận:
Trong bài viết này, chúng tôi đã tìm hiểu về 2FA và việc triển khai của nó trong .NET5 bằng cách sử dụng IdentityServer4 và Twilio. Bạn có thể tải xuống mã mẫu được sử dụng trong bài viết này từ [repo][6] này.
Sử dụng SMS cho 2FA chắc chắn tăng cường bảo mật của bạn nhưng nó vẫn dễ bị tổn thương bởi [các cuộc tấn công hoán đổi SIM][7]. Do đó, các nhà nghiên cứu bảo mật đang khuyến khích 2FA sử dụng các phương pháp khác như ứng dụng xác thực và khóa bảo mật ([Yubikey][8]) có thể bị chặn trên mạng điện thoại. Chúng tôi sẽ tìm hiểu thêm về điều đó trong một bài viết sắp tới - hãy theo dõi!



[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
