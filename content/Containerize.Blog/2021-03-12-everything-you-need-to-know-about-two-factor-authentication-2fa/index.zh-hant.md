---
title: "您需要了解的有關兩因素身份驗證（2FA）的所有信息" 
seoTitle: "您需要了解的有關兩因素身份驗證（2FA）的所有信息" 
description: "本文詳細說明了兩因素（2FA）身份驗證，以及如何使用IdentityServer4和Twilio在.net5中實現它。" 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "本文詳細說明了兩因素身份驗證，以及如何使用IdentityServer4和SMS提供商（Twilio）（Twilio）等身份框架在.NET 5中實現它。＆nbsp;" 
url: /zh-hant/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

##本文詳細說明了兩因素身份驗證，以及如何使用IdentityServer4和SMS提供商（Twilio）（Twilio）等身份框架在.NET 5中實現它。
{{_LINE_11_}}
它包含以下各節：
  * [什麼是兩因素身份驗證？ ][1]
  * [2FA如何工作？][2]
  * [2FA和多因素身份驗證][3]
  * [使用2FA的缺點][4]
  * [實現2FA In .NET5][5]
首先，讓我們了解2FA是什麼，以及為什麼它需要成為每個現代Web應用程序的組成部分。

## 什麼是兩因素身份驗證？ {#2FA}

在這種情況下，一個因素意味著您可以說服應用程序或服務是帳戶的所有者的一種方式。用戶名/密碼被廣泛用作最常見的身份驗證因素。但是，由於與此相關的許多安全問題以及最近廣泛的數據洩露，因此單因素身份驗證變得不太安全。
兩因素身份驗證是另外的安全層，在您訪問帳戶之前，它就發揮了作用。標準登錄過程的附件 - 它引入了額外的步驟來通過發送代碼（您的電子郵件或短信）來驗證用戶身份。通過這種方式，您的身份得到證明，只有這樣授予訪問權限。

## 2FA如何工作？ {#2fawork}

在2FA中，密碼仍然是您的第一個身份驗證因素 - 因此，當您登錄到帳戶時，它將將您重定向到另一個頁面，在此頁面上，您需要驗證帳戶所有權。這可以通過多種方式完成：
  1.應用程序將通常稱為OTP（一次性密碼）的驗證代碼發送到您的電子郵件地址。
  2.代碼在手機上作為短信傳遞。
  3.您在移動設備上安裝了一個身份驗證器應用程序，您可以通過該應用程序授權登錄請求。
注意：這些驗證代碼是隨機生成的，並在使用後過期。另外，它們是短暫的 - 因此，在您使用代碼之前，有一個簡短的窗口（這可以防止黑客強迫驗證代碼）。

## 我們可以將2FA稱為多因素身份驗證嗎？ {#MFA}

身份驗證方法不限於兩因素。許多應用程序和服務正在將其用戶超過2FA並使用多因素身份驗證。
2FA和MFA（多因素身份驗證）通常可以互換使用。但是有區別。在多因素身份驗證中，使用了兩個或多個因素。
它可以檢查用戶的IP地址，地理位置和設備信息的附件，以驗證用戶身份的其他因素，例如密碼和OTP。
因此，我們可以說2FA是MFA的子集。在2FA中，只有兩個因素，而多因素可以利用兩個或多個因素。 MFA使黑客難以在傳統身份驗證過程中增加多層安全性。

## 使用2FA有任何缺點嗎？ {#mfa-cons}

類似於現代應用中存在的許多“安全和隱私”解決方案。這也帶來了價格 - 不便，因為涉及的另一個步驟可能會導致用戶體驗摩擦。
但是，許多應用程序和服務都採用它，因此這種權衡已成為可以接受的。

## 如何實現2FA身份驗證？ {#implementing2fa}

在本節中，我們將學習如何使用IdentityServer4和Twilio在.NET5中實現2FA。
因此，讓我們在Twilio上創建一個試用帳戶：
  1.註冊
  2.通過提供有效的電話號碼來驗證您的帳戶。
驗證您的帳戶後，您可以使用其控制台儀表板。

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio儀表板">}}

  1.從儀表板複製您的帳戶SID和auth令牌。
  1.導​​航到購買您將用於發送SMS/的號碼
注意：Twilio在所有試用帳戶中都提供15美元的信用，您將用於購買電話號碼。

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio-電話號碼搜索">}}

您可以選擇任何數字，只要它支持“ SMS功能”。 （請注意您將在項目以後將使用的電話號碼）。
5.使用試用帳戶，Twilio僅允許您將SMS發送到經過驗證的呼叫者ID，您可以使用以下鏈接進行管理：
這就是您需要使用Twilio儀表板配置的所有內容。
讓我們創建一個ASP.NET Core Web應用程序（在下面選擇項目模板和目標.NET5。

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="視覺工作室 - 新項目">}}

現在，我們將集成Nuget的IdentityServer4，Twilio軟件包。
  1.`install -package IdentityServer4 -version 4.1.1`
  2.`install -package twilio -version 5.55.0`
IdentityServer4快速UI可用：
您可以通過在開發人員Shell中運行以下命令來將其包括在項目中：
`iex（（new-object system.net.webclient）.downloadstring（'https://raw.githubusercontent.com/indistityserver/indistityserver/indentityserver4.quickstart.ui/main/getmain/getmain.ps1'））
如果安裝正確 - 您會看到項目中的Quickstart文件夾：

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="項目層次結構">}}

讓我們構建並運行這個項目。您應該能夠看到歡迎頁面，如下所示：

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

此模板使用內存數據存儲，因此您可以在Config.cs文件中添加測試用戶

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="config.cs類">}}

打開startup.cs，並在配置服務方法中添加以下IdentityServer4服務：
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
現在，在請求管道中添加IdentityServer：
```
app.UseIdentityServer();
```
運行項目並導航到 **_/account/登錄_** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4-登錄">}}

使用 **config.cs** 中添加的憑據登錄
一旦配置並運行IdentityServer。然後，我們可以使用Twilio添加對2FA的支持。
讓我們添加以下課程：
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
此配置類將使用依賴注入來注入設置。
  1.右鍵單擊項目，並使用Twilio的配置添加用戶秘密（SID，令牌，Phonenumber）
  2.啟動的配置服務方法中的注入設置。cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
已配置了startup.cs。現在，我們可以繼續添加一個名為AuthmessageSender的新服務，該服務將負責使用Twilio發送SMS。
讓我們創建一個authmessagesender將實現的接口。
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
我們將將其註入startup.cs。
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
SMS發送代碼非常簡單。我們只需創建一個Twilio客戶端並調用Messageresource.createasync方法即可發送SMS。
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
我們將修改登錄方法以檢查用戶是否已啟用了2FA，以便我們可以重定向將其重定向以進行代碼驗證。
在QuickStart/views中添加verifycode.cshtml：

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA行動">}}

修改帳戶/登錄方法在驗證憑據後生成和發送驗證代碼。目前，我們不想在請求中完成標誌。
因此，將刪除httpcontext.signinasync方法調用，相反，我們將簡單地生成一個隨機驗證代碼並存儲它（當前我們正在使用內存商店以進行演示目的）。
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="代碼屏幕截圖">}}

然後，我們將將用戶重定向到“ verifyCode”頁面，其中將執行代碼驗證，並將完成登錄工作流程。
在驗證代碼操作中，我們只是從內存中獲取用戶和代碼信息，然後將其與提供的代碼匹配。

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="代碼屏幕截圖">}}

如果匹配代碼，則只需通過調用SignInasync方法來完成身份驗證請求，然後將用戶重定向到授權頁面。
讓我們運行該項目
步驟-1：用戶提供憑據。

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2fademo-登錄">}}

步驟2：驗證憑證並發送了驗證代碼：

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo -SMS">}}

步驟3：用戶驗證正確的代碼。

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2fademo -verifyCode">}}

驗證了步驟4代碼，並且2FA身份驗證已完成。

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo-授權頁面">}}


＃## 結論：
在本文中，我們使用IdentityServer4和Twilio了解了2FA及其在.NET5中的實現。您可以從此[repo][6]中下載本文中使用的示例代碼。
使用SMS進行2FA肯定會增強您的安全性，但仍然容易受到[SIM SHAP攻擊][7]的影響。因此，安全研究人員鼓勵2FA使用其他方法，例如Authenticator應用程序和安全密鑰（[Yubikey][8]），這些方法無法在電話網絡上截獲。我們將在即將發表的文章中了解更多信息 - 敬請期待！



[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
