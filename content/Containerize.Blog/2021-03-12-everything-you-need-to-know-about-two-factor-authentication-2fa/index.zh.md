---
title: "您需要了解的有关两因素身份验证（2FA）的所有信息" 
seoTitle: "您需要了解的有关两因素身份验证（2FA）的所有信息" 
description: "本文详细说明了两因素（2FA）身份验证，以及如何使用IdentityServer4和Twilio在.net5中实现它。" 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "本文详细说明了两因素身份验证，以及如何使用IdentityServer4和SMS提供商（Twilio）（Twilio）等身份框架在.NET 5中实现它。＆nbsp;" 
url: /zh/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## 本文详细说明了两因素身份验证，以及如何使用IdentityServer4和SMS提供商（Twilio）（Twilio）等身份框架在.NET 5中实现它。
{{_LINE_11_}}
它包含以下各节：
  * [什么是两因素身份验证？ ][1]
  * [2FA如何工作？][2]
  * [2FA和多因素身份验证][3]
  * [使用2FA的缺点][4]
  * [实现2FA In .NET5][5]
首先，让我们了解2FA是什么，以及为什么它需要成为每个现代Web应用程序的组成部分。

## 什么是两因素身份验证？ {#2FA}

在这种情况下，一个因素意味着您可以说服应用程序或服务是帐户的所有者的一种方式。用户名/密码被广泛用作最常见的身份验证因素。但是，由于与IT相关的许多安全问题以及最近广泛的数据泄露，单因素身份验证变得越来越少。
两因素身份验证是另外的安全层，在您访问帐户之前，它就发挥了作用。标准登录过程的附件 - 它引入了额外的步骤来通过发送代码（您的电子邮件或文本消息）来验证用户身份。通过这种方式，您的身份得到证明，只有这样授予访问权限。

## 2FA如何工作？ {#2fawork}

在2FA中，密码仍然是您的第一个身份验证因素 - 因此，当您登录到帐户时，它将将您重定向到另一个页面，在此页面上，您需要验证帐户所有权。这可以通过多种方式完成：
  1.应用程序将通常称为OTP（一次性密码）的验证代码发送到您的电子邮件地址。
  2.代码在手机上作为短信传递。
  3.您在移动设备上安装了一个身份验证器应用程序，您可以通过该应用程序授权登录请求。
注意：这些验证代码是随机生成的，并在使用后过期。另外，它们是短暂的 - 因此，在您使用代码之前，有一个简短的窗口（这可以防止黑客强迫验证代码）。

## 我们可以将2FA称为多因素身份验证吗？ {#MFA}

身份验证方法不限于两因素。许多应用程序和服务正在将其用户超过2FA并使用多因素身份验证。
2FA和MFA（多因素身份验证）通常可以互换使用。但是有区别。在多因素身份验证中，使用了两个或多个因素。
它可以检查用户的IP地址，地理位置和设备信息的附件，以验证用户身份的其他因素，例如密码和OTP。
因此，我们可以说2FA是MFA的子集。在2FA中，只有两个因素，而多因素可以利用两个或多个因素。 MFA使黑客难以在传统身份验证过程中增加多层安全性。

## 使用2FA有任何缺点吗？ {#mfa-cons}

类似于现代应用中存在的许多“安全和隐私”解决方案。这也带来了价格 - 不便，因为涉及的另一个步骤可能会导致用户体验摩擦。
但是，许多应用程序和服务都采用它，因此这种权衡已成为可以接受的。

## 如何实现2FA身份验证？ {#implementing2fa}

在本节中，我们将学习如何使用IdentityServer4和Twilio在.NET5中实现2FA。
因此，让我们在Twilio上创建一个试用帐户：
  1.注册
  2.通过提供有效的电话号码来验证您的帐户。
验证您的帐户后，您可以使用其控制台仪表板。

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio仪表板">}}

  1.从仪表板复制您的帐户SID和auth令牌。
  1.导航到购买您将用于发送SMS/的号码
注意：Twilio在所有试用帐户中都提供15美元的信用，您将用于购买电话号码。

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio-电话号码搜索">}}

您可以选择任何数字，只要它支持“ SMS功能”。 （请注意您将在项目以后将使用的电话号码）。
5.使用试用帐户，Twilio仅允许您将SMS发送到经过验证的呼叫者ID，您可以使用以下链接进行管理：
这就是您需要使用Twilio仪表板配置的所有内容。
让我们创建一个ASP.NET Core Web应用程序（在下面选择项目模板和目标.NET5。

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="视觉工作室 - 新项目">}}

现在，我们将集成Nuget的IdentityServer4，Twilio软件包。
  1.`install -package IdentityServer4 -version 4.1.1`
  2.`安装包装twilio -version 5.55.0`
IdentityServer4快速UI可用：
您可以通过在开发人员Shell中运行以下命令来将其包括在项目中：
`iex（（new-object system.net.webclient）.downloadstring（'https://raw.githubusercontent.com/indistityserver/indistityserver/indentityserver4.quickstart.ui/main/getmain/getmain.ps1'））
如果安装正确 - 您会看到项目中的Quickstart文件夹：

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="项目层次结构">}}

让我们构建并运行这个项目。您应该能够看到欢迎页面，如下所示：

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

此模板使用内存数据存储，因此您可以在Config.cs文件中添加测试用户

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="config.cs类">}}

打开startup.cs，并在配置服务方法中添加以下IdentityServer4服务：
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
现在，在请求管道中添加IdentityServer：
```
app.UseIdentityServer();
```
运行项目并导航到 **_/account/登录_** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4-登录">}}

使用 **config.cs** 中添加的凭据登录
一旦配置并运行IdentityServer。然后，我们可以使用Twilio添加对2FA的支持。
让我们添加以下课程：
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
此配置类将使用依赖注入来注入设置。
  1.右键单击项目，并使用Twilio的配置添加用户秘密（SID，令牌，Phonenumber）
  2.启动的配置服务方法中的注入设置。cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
已配置了startup.cs。现在，我们可以继续添加一个名为AuthmessageSender的新服务，该服务将负责使用Twilio发送SMS。
让我们创建一个authmessagesender将实现的接口。
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
我们将将其注入startup.cs。
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
SMS发送代码非常简单。我们只需创建一个Twilio客户端并调用Messageresource.createasync方法即可发送SMS。
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
我们将修改登录方法以检查用户是否已启用2FA，以便我们可以重定向将其重定向以进行代码验证。
在QuickStart/views中添加verifycode.cshtml：

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA行动">}}

修改帐户/登录方法在验证凭据后生成和发送验证代码。目前，我们不想在请求中完成标志。
因此，将删除httpcontext.signinasync方法调用，相反，我们将简单地生成一个随机验证代码并存储它（当前我们正在使用内存商店以进行演示目的）。
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="代码屏幕截图">}}

然后，我们将将用户重定向到“ verifyCode”页面，其中将执行代码验证，并将完成登录工作流程。
在验证代码操作中，我们只是从内存中获取用户和代码信息，然后将其与提供的代码匹配。

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="代码屏幕截图">}}

如果匹配代码，则只需通过调用signAsynasync方法来完成身份验证请求，然后将用户重定向到授权页面。
让我们运行该项目
步骤-1：用户提供凭据。

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2fademo-登录">}}

步骤2：验证凭证并发送了验证代码：

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo -SMS">}}

步骤3：用户验证正确的代码。

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2fademo -verifyCode">}}

验证了步骤4代码，并且2FA身份验证已完成。

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo-授权页面">}}


### 结论：
在本文中，我们使用IdentityServer4和Twilio了解了2FA及其在.NET5中的实现。您可以从此[repo][6]中下载本文中使用的示例代码。
使用SMS进行2FA肯定会增强您的安全性，但仍然容易受到[SIM SHAP攻击][7]的影响。因此，安全研究人员鼓励2FA使用其他方法，例如Authenticator应用程序和安全密钥（[Yubikey][8]），这些方法无法在电话网络上截获。我们将在即将发表的文章中了解更多信息 - 敬请期待！



[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
