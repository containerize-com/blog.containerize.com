---
title: "WordPressとOsticketを使用したチケットシステムを自動化します" 
seoTitle: "WordPressとOsticketを使用したチケットシステムを自動化します" 
description: "Osticket-WordPress Integrationは、顧客がWordPressサイトからサポートチケットを生成し、Osticketダッシュボードから管理する方法を提供します。" 
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: "シームレスなWordPressとOsticket統合でHelpDeskプロセスを自動化します。 Webベースのフォームを介して顧客の問い合わせをサポートチケットに変換します。" 
url: /ja/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']
---

## Seamless WordPressとOsticket統合でHelpDeskプロセスを自動化します。 Webベースのフォームを介して顧客の問い合わせをサポートチケットに変換します。

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="チケットシステムを自動化するためのOsticket-WordPress統合">}}

顧客は、製品/サービスに関する質問をすることができます。 WordPressサイトのさまざまなフォームを通じてクエリを送信します。 Osticket-WordPressの統合は、これらのクエリをチケットに変換するのに役立ちます。 APIを介してOsticket HelpDeskシステムにデータを送信します。
Osticketは、オープンソースで無料のヘルプデスクチケットシステムです。顧客は、Osticketでのクエリに関するチケットを作成できます。このヘルプデスクシステムにより、どの組織が顧客から来るクエリを管理することが非常に簡単になります。管理者は、部門とチームを作成し、作成されたチケットの性質に応じてさまざまなエージェントにチケットを割り当てることができます。この無料のオープンソースシステムは、問題を追跡します。顧客とエージェントの両方がチケットにコメントして進捗状況について話し合うことができます。このブログ投稿の次のセクションについて説明します。
  * [統合プロセス][1]
  * [WordPressプラグインのインストール][2]
  * [認証手順][3]
  * [結論][4]

## 統合プロセス： {#integration}

OsticketとWordPressの統合には、次のフィールドがあるWordPressサイトの連絡フォームが必要です
  1.トピックをヘルプします
  2.メール
  3.フルネーム
  4.件名
  5.メッセージ
このプラグインがwp_mail関数をフックしてフォームのデータを取得するため、フォームにお問い合わせフォームを送信する必要があります。

## WordPressプラグインのインストール： {#wordpress}

  1. WordPressサイトの管理ダッシュボードに移動します。
  2.次に、プラグインセクションに移動します。
  3.次に、この[プラグイン][5]をインストールします。
  4.その後、プラグインをアクティブにします。
  5.「設定」 - >「Osticket Connector」に移動します。
  6.次に、OsticketサイトのURLを入力します。
  7. Osticket管理パネルから作成されたAPIキーを入力します（次のセクションで説明）。
  8.最終的に、すべてのフィールドに記入して、連絡先フォームからOsticketのチケットフィールドにデータをマッピングします。

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="チケットシステムを自動化するためのOsticket-WordPress統合">}}


## 認証手順： {#auth}

API認証は、Osticketの管理パネル内で構成されたAPIキーを介して実行されます。 APIキーは生成され、HTTP APIリクエストのソースIPに対して検証されたソースIPアドレスにリンクされます。 APIキーを作成します
  1. Osticketの管理パネルに移動します。
  2.「管理」をクリックします。
  3.サブメニュー「APIキー」に移動します。
  4.「新しいAPIキーの追加」をクリックします。
  5.「ステータス」をアクティブに設定します。
  6.チェックボックス「チケットを作成できます」を確認します。
  7. WordPressサイトのIPアドレスを入力し、「キーを追加」を押します。

{{< figure align=center src="images/osticket-1024x729.png" alt="チケットシステムを自動化するためのOsticket-WordPress統合">}}


## 結論： {#conclusion}

Osticket-Wordpress統合により、チケットプロセスが自動化されます。したがって、サポートチームの生活が楽になります。 WordPress Webサイトでの問い合わせは、オスティケのサポートチケットに自動的に変換されます。サポートチームがすべての顧客のクエリをより簡単かつ効率的に管理できるようにします。サポートエージェントは、電子メール通知によって通知されます。したがって、エージェントは顧客の質問を時間通りに解決できます。 Osticketのコメントセクションは、顧客とサポートエージェントの両方が効果的かつタイムリーにコミュニケーションをとるのに役立ちます。また、マネージャーが各チケットの進捗状況を簡単に追跡できるようになります。

## 探検：
OsticketとWordPressの詳細については、これらのページをご覧ください。
  * [Osticket  - 無料のオープンソースヘルプデスクチケットシステム][7]
  * [WordPress  - 無料のオープンソースと最も広く使用されているCMSおよびブログツール][8]
  * [Osticketを使用してオンラインヘルプデスクソフトウェアをセットアップする方法][9]



[1]: #integration
[2]: #wordpress
[3]: #auth
[4]: #conclusion
[5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
[6]: https://href.li/?http://your.domain/api/tickets.json
[7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
[8]: https://href.li/?https://products.containerize.com/blogging/wordpress
[9]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
