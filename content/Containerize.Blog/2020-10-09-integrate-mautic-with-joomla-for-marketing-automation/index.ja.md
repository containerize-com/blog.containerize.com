---
title: "デジタルマーケティングの自動化のためにMautic＆Joomlaを統合します」" 
seoTitle: "Mautic＆Joomlaをデジタルマーケティングの自動化に統合します" 
description: "MauticとJoomlaの統合は、デジタルマーケティングの自動化でビジネスを支援します。 Mauticキャンペーンを通じて製品を販売するのに役立ちます。" 
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: "MauticとJoomlaの統合は、デジタルマーケティングの自動化でビジネスを支援します。オンラインのMauticキャンペーンを通じて製品を販売するのに役立ちます。" 
url: /ja/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']
---

## MauticとJoomlaの統合は、デジタルマーケティングの自動化でビジネスを支援します。オンラインのMauticキャンペーンを通じて製品を販売するのに役立ちます。

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="MauticとJoomlaの統合">}}


## この統合があなたのビジネスにどのように役立つか：
MauticとJoomlaの統合により、製品/サービスを非常に簡単だが効率的な方法で販売することができます。 Mautic A Free Open-Sourceマーケティングソリューションは、マーケティングキャンペーンを非常に制御でき、状況に応じてドリップキャンペーンを継続するのは非常に簡単です。たとえば、顧客が電子メールを読んだり、製品ページにアクセスした場合に情報を提供します。その情報を使用すると、キャンペーンをセットアップして、その顧客のために次のメールを送信し続けるかどうかを決定できます。この統合は、デジタルマーケティングの自動化に役立ちます。このブログ投稿では、次のセクションでご案内します。
  * [概要][1]
  * [Joomlaプラグインのインストール][2]
  * [Mautic Configuration][3]
  * [結論][4]

## 概要： {#OverView}
Mauticは、オープンソースのマーケティング自動化システムです。無料のマーケティングソフトウェアです。それを使用して、無制限のキャンペーンを作成して、ターゲットを絞った顧客にマーケティングメールを送信できます。
Joomlaは、Webサイトを開発するための無料のオープンソースコンテンツ管理システムでもあります。 Joomlaでビジネスウェブサイトをセットアップするのは非常に簡単です。要件に応じて使用できる数千の拡張機能があります。

## Joomlaプラグインのインストール： {#Plugin}
  * [プラグイン][5]をダウンロードします。
  *次に、拡張機能に移動します - > manage-> install。
  * Mautic URLを入力します。
  * Mauticインスタンスからロードされた1 PX GIF画像を挿入します。
  *次のコードスニペットを使用したJoomlaコンテンツに埋め込まれたフォーム：{mautic type =” form” id}
  *次に、Mautic Appにフォームを作成し、URLからIDを取得できます。
  *ダイナミックコンテンツは、次のコードsnipptを使用して追加することもできます。
  * slot_nameは、キャンペーンに「動的なコンテンツを要求する」決定を追加するときに指定したスロットの識別子です。
インストール後、Joomlaサイトにフォームを作成および埋め込む必要があります。これらのフォームは、連絡先情報をMauticに送信します。 Joomlaでプラグインの構成が完了したら、次のステップはMauticで構成することです。

## mautic構成： {#mautic}
  * Mauticサイトに移動し、設定に移動します。
  *構成をクリックします。
  * API設定から、APIを有効にします。
  * MauticをJoomlaに接続するには、サイトにSSL証明書が必要です。
  *次に、API資格情報に移動する必要があります。
  *WebサイトにSSLがない場合（**http **：//yourjoomlasite.comにアクセス）、OAUTH1を選択します。サイトにSSLがある場合（ **https**  ：//yourjoomlasite.comに移動します）、OAUTH2を選択します。
  * [新規]をクリックして、名前（必要なものは何でもできます）とJoomlaの完全なURLを提供してください！サイト（[https://yourjoomlasite.com][6]）
  * [保存]をクリックして閉じます。
  *ここでは、パブリックキーとプライベートキーを入手できます。
  * Joomlaサイトに移動して、以前にインストールしたMauticプラグインを見つけます。
  * Mauticサイトから作成したパブリックキーとシークレットキーを入力します。
  * OAUTH1またはOAUTH2（Mauticで選択したのと同じ）のいずれかを選択し、登録ユーザーをYESに送信します。
  *プラグインを保存して公開します。
  *その後、Joomlaサイトを承認できるようになります。
  * Joomlaは、Mautic Instanceに承認を再ダイレクトします。
  *「承認」をクリックしてください。それだけです。
  * Mauticサイトに連絡先を取得し始めます。

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="MauticとJoomlaの統合">}}


## 結論： {#conclusion}
この記事では、MauticとJoomlaがどのようにデジタルマーケティングの自動化に役立つかについて説明しました。このオープンソースの無料マーケティングソリューションを使用すると、Joomlaサイトから来るすべての連絡先をグループ化し、それらを使用してマーケティングキャンペーンを作成できます。 Mauticを使用すると、セグメントを作成できるため、ニーズに応じてさまざまなセグメントでさまざまなキャンペーンを実行できます。詳細な概要については、[Joomla][7]および[Mautic][8]ブログを確認してください。

## 探検：
次のリンクが関連する場合があります。
  * [Joomla][7]
  * [Mautic][8]
  * [Mauticのセットアップ方法 -  Facebook統合][9]
  * [鉛育成を自動化するためのDrupal Mautic統合][10]
  * [MauticとWordPress WooCommerceを使用したマーケティングオートメーション][11]
  * [Mauticでマーケティングキャンペーンをセットアップする方法][12]

  
[1]: #overview
[2]: #plugin
[3]: #mautic
[4]: #conclusion
[5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
[6]: https://href.li/?https://yourjoomlasite.com
[7]: https://products.containerize.com/content-management/joomla
[8]: https://products.containerize.com/marketing-automation/mautic
[9]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[10]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[11]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[12]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
