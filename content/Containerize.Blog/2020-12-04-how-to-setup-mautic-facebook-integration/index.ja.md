---
title: "Mauticのセットアップ方法 -  Facebook統合" 
seoTitle: "Mauticのセットアップ方法 -  Facebook統合" 
description: "Mautic -Facebookの統合は、Facebookのリードを困難なくMauticシステムに同期させるのに役立ち、マーケティングキャンペーンでそれらを使用します。" 
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: "Facebookのフェッチは、Mauticにつながり、連絡先をセグメントに追加し、電子メールキャンペーンを実行します。また、これらの連絡先を使用して、Facebook広告のカスタムオーディエンスを作成します。" 
url: /ja/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']
---

## FacebookのフェッチはMauticにつながり、連絡先をセグメントに追加し、メールキャンペーンを実行します。また、これらの連絡先を使用して、Facebook広告のカスタムオーディエンスを作成します。

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="Mautic -Facebook統合のセットアップ方法">}}

Mauticはマーケティングオートメーションソフトウェアであり、マーケティングアクティビティのマーケティングメール、ランディングページ、ワークフローを完全に制御します。 Mauticのドリップキャンペーンは、ターゲットオーディエンスを引き付け、製品について最新の状態に保つのに役立ちます。 Mautic Facebook Integrationは、Mauticに新しいリードを追加する方法を提供します。このMautic  -  Facebookの統合により、FacebookキャンペーンからのリードがMauticに自動的に追加されます。
このチュートリアルの次のセクションについて説明します。
  * [Facebook開発者アカウントを構成] [1]
  * [Facebook開発者のアプリを構成] [2]
  * [mauticプラグイン構成] [3]
  * [結論] [4]

## Facebook開発者アカウントを構成{#Account}
  * [開発者のためのFacebook] [5]に行く
  *アカウントがない場合は、アカウントを登録します。
  *新しいアカウントを登録するには、右上隅から「開始」をクリックしてクリックします。
  *その後、Facebookアカウントを選択して「続行」を押します。
  *次に、ポップアップウィンドウから[開発者]ボタンをクリックします。

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="MAUTIC -Facebook統合 - 開発者アカウントを登録します">}}


## Facebook開発者のアプリを構成{#App}
  *「最初のアプリの作成」をクリックします

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic  -  Facebook統合 - 最初のアプリを作成します">}}

  *「ビジネス統合の管理」をクリックして、「続行」を押します。

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic  -  Facebook統合 - 目的を選択します">}}

  *次のウィンドウで、アプリ名を入力し、アプリの目的を選択します。 [アプリの作成]ボタンをクリックします。

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic  -  Facebook統合 - アプリを作成するためのフォームに記入">}}

  *次のステップは、Facebookログインをセットアップすることです。 Productsページから、「Facebookログイン」ボックスの下にある[セットアップ]ボタンをクリックします。

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic  -  Facebook統合 - セットアップFBログイン">}}

  *左メニューから、製品の下の「設定」をクリックします - > Facebookログイン。

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic  -  Facebook統合 -  FBログインを構成します">}}

  * Mautic WebサイトURLを入力します。 「クライアントOAuthログイン」と「Web OAuthログイン」を「はい」に設定します。
  * [設定]  - > [基本設定]に移動します。ページの下部から、[プラットフォームの追加]ボタンをクリックします。その後、ポップアップウィンドウが開きます。 WebサイトURLを入力して、変更を保存します。

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic  -  Facebook統合 - プラットフォームとしてWebサイトを追加します">}}


## mauticプラグイン構成{#configuration}
  * Mautic Dashboardに移動します。
  *次に、右上隅から「設定」に移動します。
  *「プラグイン」をクリックします。
  *その後、「Facebook」プラグインの設定を開きます。
  *次に、クライアントIDとクライアントシークレットを入力します。上記の手順に従って作成したばかりのFacebook開発者アプリからこれらのキーを入手してください。

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic  -  Facebook統合 -  MauticでFBプラグインを構成する">}}

  *「Authorize App」ボタンを押します。
  *その後、新しいFacebook認証ウィンドウが開きます。プロンプトに従って、アプリ認証を完了します。
  *承認が成功した後、MauticのFacebookプラグインから[マッピングの連絡先]タブに移動します。
  *ここでは、連絡先フィールドをFacebookフィールドにマップできます。
  *最後に、設定を公開すると、行ってもいいです。

## 結論{#conclusion}
Mautic  -  Facebookの統合は、Facebookのリードを困難なくMauticシステムに同期させるのに役立ちます。 Mautic Appでは、これらすべてのリードをセグメントに追加できます。メールマーケティングキャンペーンを実行できます。これは、あなたのビジネスがより大きなターゲットオーディエンスに製品/サービスを成長させ、販売し、販売するのに役立ちます。

## 探検
MauticとFacebookの詳細については、ご覧ください。
  * [Mautic |オープンソースコンテンツマーケティングテクノロジープラットフォーム] [6]
  * [キャンペーンビルダーを使用したモーティックキャンペーンをセットアップする方法] [7]
  * [鉛育成を自動化するためのDrupal Mautic統合] [8]
  * [MauticとWoocommerceの統合によるマーケティングオートメーション] [9]
  * [デジタルマーケティングの自動化のためにMautic＆Joomlaを統合] [10]
[1]: #account
[2]: #app
[3]: #configuration
[4]: #conclusion
[5]: https://developers.facebook.com/docs/apps#register
[6]: https://products.containerize.com/marketing-automation/mautic
[7]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[8]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[9]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[10]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
