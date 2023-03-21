---
title: "2要素認証（2FA）について知っておくべきことすべて" 
seoTitle: "2要素認証（2FA）について知っておくべきことすべて" 
description: "この記事では、2要素（2FA）認証を詳細に説明し、IdentityServer4とTwilioを使用して.NET5でどのように実装できます。" 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "この記事では、IdentityServer4やSMSプロバイダー（TWILIO）などのIDフレームワークを使用して.NET 5で2要素認証を詳細に実装する方法について説明します。" 
url: /ja/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## この記事では、2要素認証を詳細に説明し、IdentionServer4やSMSプロバイダー（Twilio）などのIDフレームワークを使用して.NET 5でどのように実装できます。
{{_LINE_11_}}
次のセクションが含まれています。
  * [2要素認証とは何ですか？ ][1]
  * [2FAはどのように機能しますか？][2]
  * [2FAおよびマルチファクター認証][3]
  * [2FAを使用することの欠点][4]
  * [.NET5で2FAの実装][5]
まず、2FAとは何か、そしてそれがすべての最新のWebアプリケーションの不可欠な部分である必要がある理由を理解しましょう。

## 二因子認証とは何ですか？   {#2fa}
このコンテキストの要因は、あなたがあなたがアカウントの所有者であることをアプリまたはサービスに納得させる方法を意味します。ユーザー名/パスワードは、最も一般的な認証係数として広く使用されています。ただし、それに関連する多くのセキュリティ問題と最近の広範なデータ侵害により、単一因子認証は安全性が低下しています。
2要素認証は、アカウントにアクセスする前に機能するセキュリティの追加レイヤーです。標準のログインプロセスへの調整 - コードを送信してユーザーIDを検証するための追加のステップを導入します（メールまたはテキストメッセージとして）。このようにして、あなたの身元が証明され、その後のみアクセスが許可されます。

## 2FAはどのように機能しますか？   {#2fawork}
2FAでは、パスワードは依然として最初の認証係数です。そのため、アカウントにログインすると、アカウントの所有権を確認する必要がある別のページにリダイレクトされます。これは、さまざまな方法を使用して実行できます。
  1.アプリケーションは、多くの場合、OTP（1回限りのパスワード）と呼ばれる検証コードをメールアドレスに送信します。
  2.コードは、携帯電話のテキストメッセージとして配信されます。
  3.ログイン要求を承認できるモバイルにAuthenticatorアプリをインストールします。
注：これらの検証コードはランダムに生成され、使用されると期限切れになります。また、それらは短命です。したがって、コードを使用する前に短いウィンドウがあります（これにより、ハッカーが検証コードを強制的に強制的に防止します）。

## 多要素認証として2FAを呼び出すことはできますか？   {#mfa}
認証方法は、2要素に限定されません。多くのアプリやサービスは、ユーザーを2FAを超えて移動し、多要素認証を使用しています。
2FAとMFA（多要因認証）は、しばしば同じ意味で使用されます。ただし、違いがあります。多要因認証では、2つ以上の要因が使用されます。
ユーザーのIPアドレス、地理ロケーション、およびデバイス情報を、パスワードやOTPなどの他の要因に調整して、ユーザーのIDを確認できます。
したがって、2FAはMFAのサブセットであると言えます。 2FAでは、マルチファクターが2つ以上の要因を利用できるのは、2つの要因しかありません。 MFAは、従来の認証プロセスに複数のセキュリティを追加するため、ハッカーにとって困難になります。

## 2FAを使用した欠点はありますか？   {#mfa-cons}
最新のアプリに存在する多くの「セキュリティとプライバシー」ソリューションに似ています。また、ユーザーエクスペリエンスに摩擦を引き起こす可能性のある追加のステップが関係しているため、価格が付いています。不便です。
ただし、多くのアプリやサービスで採用されているため、このトレードオフは受け入れられています。

## 2FA認証を実装するにはどうすればよいですか？   {#実装2fa}
このセクションでは、IdentityServer4とTwilioを使用して.NET5に2FAを実装する方法を学びます。
それでは、Twilioでトライアルアカウントを作成しましょう。
  1.サインアップします
  2.有効な電話番号を提供して、アカウントを確認します。
アカウントが確認されたら、コンソールダッシュボードを使用できます。

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilioダッシュボード">}}

  1.アカウントSIDとAuthトークンをダッシュ​​ボードからコピーします。
  1. SMSを送信するために使用する番号を購入するために移動します/
注：Twilioは、電話番号を購入するために使用するすべてのトライアルアカウントで15ドルのクレジットを提供します。

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio-電話番号検索">}}

「SMS機能」をサポートする限り、任意の番号を選択できます。 （プロジェクトの後半で構成するために使用する電話番号を書き留めます）。
5.トライアルアカウントを使用すると、Twilioでは、以下のリンクを使用して管理できる検証済みの発信者IDにSMSを送信できます。
Twilioダッシュボードを使用して構成するために必要なのはこれだけです。
ASP.NETコアWebアプリを作成しましょう（以下のプロジェクトテンプレートを選択し、ターゲット.NET5をターゲットにします。

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio-新しいプロジェクト">}}

NugetのIdentityServer4、Twilioパッケージを統合します。
  1. `install -package IdentityServer4 -version 4.1.1`
  2. `インストールパッケージTwilio -version 5.55.0`
IdentityServer4クイックUIは以下で利用できます。
開発者シェルで以下のコマンドを実行して、プロジェクトに含めることができます。
`iex（（new-Object System.net.WebClient）.DownLoadString（ 'https://raw.githubusercontent.com/IdentityServer/IdentityServer4.Quickstart.ui/main/getmain.ps1'））`
それが正しくインストールされている場合 - プロジェクトにクイックスタートフォルダーが表示されます。

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="プロジェクト階層">}}

このプロジェクトを構築して実行しましょう。以下に示すように、ウェルカムページを表示できるはずです。

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

このテンプレートはメモリ内データストアを使用するため、テストユーザーをconfig.csファイルに追加できます

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="config.csクラス">}}

startup.csを開き、configservicesメソッドに次のIdentityServer4サービスを追加します。
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
次に、リクエストパイプラインにIdentityServerを追加します。
```
app.UseIdentityServer();
```
プロジェクトを実行して、**_/アカウント/ログイン_** に移動します

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4-ログイン">}}

**config.cs** に追加された資格情報でログイン
IdentityServerが設定されて実行されると。その後、Twilioを使用して2FAのサポートを追加できます。
次のクラスを追加しましょう：
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
この構成クラスは、依存関係噴射を使用して設定を注入するために使用されます。
  1.プロジェクトを右クリックして、Twilioの構成（SID、Token、PhoneNumber）でユーザーの秘密を追加します
  2. startup.csのconfigureServiceメソッドに設定を挿入します
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
startup.csが構成されています。これで、Twilioを使用してSMSを送信する責任を負うAuthMessagesErderと呼ばれる新しいサービスの追加に進むことができます。
AuthMessagesEnderが実装するインターフェイスを作成しましょう。
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
startup.csにこれを挿入します。
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
SMS送信コードは非常に簡単です。 Twilioクライアントを作成し、Messageresource.createAsyncメソッドを呼び出してSMSを送信します。
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
ログインメソッドを変更して、ユーザーが2FAを有効にしたかどうかを確認して、コード検証のためにリダイレクトできるようにします。
QuickStart/ViewsでverifyCode.cshtmlを追加します：

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FAの動作">}}

アカウント/ログインメソッドを変更して、資格情報を確認した後に検証コードを生成および送信します。現時点では、サインインリクエストを完了したくありません。
したがって、httpcontext.signinasyncメソッド呼び出しは削除され、代わりにランダム検証コードを生成して保存します（現在、デモンストレーションの目的でインメモリストアを使用しています）。
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="コードスクリーンショット">}}

次に、ユーザーをコード検証が実行され、サインインワークフローが完了する「VerifyCode」ページにリダイレクトします。
VerifyCodeアクションでは、メモリからユーザー情報とコード情報を取得し、提供されたコードと一致させるだけです。

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="コードスクリーンショット">}}

コードが一致している場合は、SigninaSyncメソッドを呼び出して認証要求を完了し、ユーザーを承認されたページにリダイレクトします。
プロジェクトを実行しましょう
ステップ-1：ユーザーは資格情報を提供します。

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2Fademo-ログイン">}}

ステップ2：資格情報が検証され、検証コードが送信されます。

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2Fademo -SMS">}}

ステップ3：ユーザーは正しいコードを検証します。

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2Fademo -VerifyCode">}}

ステップ4コードが検証され、2FA認証が完了しました。

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2Fademo-認定ページ">}}


## # 結論：
この記事では、IdentityServer4とTwilioを使用して、.NET5での2FAとその実装について学びました。この記事で使用されているサンプルコードをこの[Repo][6]からダウンロードできます。
2FAにSMSを使用すると、確かにセキュリティが強化されますが、[SIMスワップ攻撃][7]に対して依然として脆弱です。したがって、セキュリティ研究者は、2FAに、電話ネットワークで傍受できない認証アプリやセキュリティキー（[Yubikey][8]）などの他のアプローチを使用することを奨励しています。それについては、今後の記事で詳しく説明します。お楽しみに！

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
