---
title: "CivicRM WordPress統合| WordPressチュートリアル" 
seoTitle: "CivicRM WordPress統合| WordPressチュートリアル" 
description: "CivicRM WordPress統合を使用すると、データとワークフローの管理を制御できます。 WordPressを使用したオープンソースCivicRMの効果的な使用に関するベストガイド。" 
date: Tue, 13 Oct 2020 08:23:40 +0000
author: muhammadmustafa
summary: "このWordPressプラグインチュートリアルでは、無料のCivicRMをWordPressと統合して、連絡先管理の観点から競争力のある利点を獲得する方法を学びます。" 
url: /ja/civicrm-wordpress-integration-wordpress-tutorial/
categories: ['Blogging', 'Marketing Automation']
---

## このWordPressプラグインチュートリアルでは、無料のCivicRMをWordPressと統合して、連絡先管理の観点から競争上の利点を獲得する方法を学びます。

{{< figure align=center src="images/integrate-civicrm-with-wordpress-banner-1024x536.png" alt="civicrm wordpress">}}


## 概要：
** civicrm wordpress統合**についてのこのチュートリアル記事へようこそ。問題の事実は、私たちが情報とデータの時代に生きているということです。特定のものは、データの収集、一貫したコミュニケーション、マーケティングキャンペーン、その他のビジネスワークフローなど、ビジネスに特徴的な機能を提供します。この現代では、データの量は日々増加しています。組織は、さまざまなデータソースからこのデータを受け取ります。その結果、このような膨大な量のデータを管理してコンパイルすることが困難になります。ただし、データの整合性と信頼性が効果的なマーケティングキャンペーンの基礎であることを確認することが非常に重要です。さらに、複数の場所でデータが発生すると、手間と管理ミスが生まれ、運用チームは同じページに登場して統一された方向に動作することが難しいと感じています。
一方、堅牢なコンテンツ管理とSEOに優しいエコーシステムのために、ユーザーと開発者コミュニティの強力なサポートを獲得したコンテンツ管理システムがいくつかあります。これらのオープンソースコンテンツ管理システムは、コンテンツ関連の目標を達成するための簡単で迅速な開発と展開を提供します。費用効率、拡張可能な機能、自己ホスティング機能を提供します。この** WordPressプラグインチュートリアル**は、[CivicRM][2]と[WordPress][3]の統合に関するもので、次の箇条書きをカバーします。
  * [ビジネスのためのこの組み合わせの利点？][4]
  * [ディレクトリ構造のセットアップ方法？][5]
  * [WordPressでCivicRMをアクティブ化してインストールする方法？][6]

## この組み合わせの利点はビジネスのためですか？ {#利点}
この** wordpressチュートリアル**のセクションでは、** civicrm wordpress **統合の中心的な利点を調べます。 [WordPress][3]の人気は、競争が市場で増加しているため、増加しています。 WordPressコミュニティは、プラグインのバケットを強化するための新しいプラグインを開発しています。したがって、WordPressのプラグインのプールにCivicRMを追加することは、ビジネスワークフローを自動化および集中化するために繁栄する組織から大きな注目を集めています。
この統合は、特定の側面のために重要です。まず、[Civicrm][2]は、さまざまな場所に住むユーザーの連絡先ソースを管理する手間を削除します。第二に、データの定期的なバックアップを取得することにより、完全なセキュリティを提供します。第三に、それはウェブベースでオープンソースであり、どこからでもデータにアクセスできることを意味します。このオープンソースマーケティングオートメーションツールは、市民セクター向けに開発されています。ワンストップソリューションを提供することにより、さまざまなシートやデータベースにデータをエクスポートする必要がありました。このオープンソースCRMソフトウェアは、すべてのデータをニュースレター、イベント管理サイト、貢献管理、ケース管理などのさまざまなソースから来るデータベースに保存します。これらのオープンソース構成関係管理ソフトウェアは、セットアップが簡単で、多くの機能を提供できます。無制限のカスタムデータセット、タスク管理、ユーザー管理、オープン誓約やメンバーシップなどを追跡します。

## ディレクトリ構造をセットアップする方法は？ {#ディレクトリ}
この** WordPressプラグインチュートリアル**を開始する前に、WordPressを設定し、プラグインをインストールしてアクティブ化するための基本的な理解があると仮定します。さらに、WordPressとその機能のセットアップに関する情報[こちら][7]を見つけることができます。
まず、この[サイト][8]からCivicRMをダウンロードします。 「WordPressのcivicrmx.x.xをダウンロード」などの名前のオプションを選択します。
ダウンロードした後、ZIPファイルをこの場所 /WPコンテンツ /プラグインに配置し、抽出します。このディレクトリに「書き込み」アクセスがあることを確認してください。
このコマンドを使用して、「書き込み」アクセス許可を与えることができます。 `sudo chmod 777 server_path/wp-content/plugins/civicrm`
次に、この場所 /WPコンテンツ /アップロードに「CivicRM」という名前の空のフォルダーを作成し、次のコマンドを使用して「書き込み」アクセスを提供します。
`sudo chmod 777 server_path/wp-content/uploads/civicrm`
**注**：これらのディレクトリをデフォルトに戻すことを忘れないでください。次のコマンドを実行して、これらのディレクトリのデフォルトステータスを復元できます。
{{_LINE_29_}}
{{_LINE_30_}}
{{_LINE_31_}}
      sudo chown -r username server_path/wp -content/uploads/civicrmsudo chown -r username server_path/wp -content/plugins/civicrm
{{_LINE_33_}}
{{_LINE_34_}}
{{_LINE_35_}}
CivicRM WordPress統合のこのセクションが完了しました。次のセクションに移動しましょう。

## WordPressでCivicRMをアクティブ化してインストールする方法は？ {#インストール}
WordPressチュートリアルのこのセクションでは、** Webベースのマーケティングツール** CivicRMのインストールとアクティベーションの手順を示しています。ディレクトリ構造をセットアップした後、**プラグイン**  - > **インストールされたプラグイン**に移動すると、リストにCivicRMが表示されます。

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.18.07-1024x544.png" alt="civicrm wordpress">}}

「** Activate **」を押します。

{{< figure align=center src="images/civi-1024x581.jpeg" alt="マーケティングオートメーションガイド">}}

CivicRMをアクティブにした後、WP-Adminページの右上にCivicRMオプションがあります。そのオプションを押すだけで、**インストール**画面に着陸します。
次のページには、データベース構成とともに要件の詳細が表示されます。

{{< figure align=center src="images/Screenshot-2020-10-10-at-02.56.14-1024x632.png" alt="マーケティングオートメーションガイド">}}

「要件を確認し、CivicRMをインストールする」ボタンを押します。 CIVICRMは正常にインストールされ、上記の指示が正しく順守されている場合、成功メッセージが表示されます。

{{< figure align=center src="images/Screenshot-2020-10-10-at-03.06.05-1024x630.png" alt="CivicRM WordPress統合">}}

最後に、** CivicRM WordPress統合**メニュータブが管理ダッシュボードの上部に表示されます。

{{< figure align=center src="images/Screenshot-2020-10-09-at-23.22.03-1024x586.png" alt="WordPressプラグイン開発チュートリアル">}}


## 結論
** civicrm wordpress統合**は、散在するユーザー情報の膨大なストレージの管理に関して、本当に役立つアドオンです。直感的なダッシュボードを提供することにより、複雑なワークフローをシンプルにします。これら2つのオープンソースソフトウェアのデュオは、ユーザーが簡単にナビゲートできる他のユーティリティとともに、ユーザーフレンドリーなインターフェイスを提供します。幸いなことに、オープンソースコミュニティは、[Mautic][9]、[SuiteCRM][10]、[ESPOCRM][11]など、非常に多くのマーケティング自動化ツールを開発しました。これらのソリューションはすべて無料で、クラウドまたはLocalHostに展開しやすくなります。とりわけ、これらのソリューションには、開発と展開に関する包括的なドキュメントが付属しています。ただし、この** WordPressプラグインチュートリアル**は、Marketing Automationソフトウェアをコンテンツ管理ソフトウェアと統合しようとしている場合に非常に役立ちます。
最後に、[containerize.com][12]は、他のオープンソースソフトウェアの統合に関するさらなるチュートリアルを作成する過程にあります。定期的な更新については、[マーケティングオートメーション][1]および[ブログ][13]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  * [バニラフォーラムのワードプレス統合に関する初心者ガイド][14]
  * [Docker ComposeでWordPressをDockerizeする方法][15]
  * [WordPressからJekyllへの移行][16]
  * [WordPressとGatsbyでWebサイトを構築する方法][17]
  * [ワードプレスからゴーストに移住するための初心者ガイド][18]
  * [Mauticでマルチテナンシーを実装する方法][19]
  * [Mauticのセットアップ方法 -  Facebook統合][20]
  * [キャンペーンビルダーを使用したMauticキャンペーンのセットアップ][21]
  * [鉛養育を自動化するためのDrupal Mautic統合][22]
  * [rocket.chatを使用したWordPressインスタントメッセージング][23]
  * [談話フォーラムをWordPressと統合する方法][24]
  * [WordPressとOsticketを使用したチケットシステムを自動化][25]
  * [MauticとWoocommerceの統合によるマーケティングオートメーション][26]
  * [2020年のトップ5オープンソースブログプラットフォーム][27]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][28]

  
[1]: https://products.containerize.com/marketing-automation
[2]: https://products.containerize.com/marketing-automation/civicrm
[3]: https://products.containerize.com/blogging/wordpress
[4]: #benefits
[5]: #directory
[6]: #install
[7]: https://products.containerize.com/blogging/wordpress/
[8]: https://civicrm.org/download
[9]: https://products.containerize.com/marketing-automation/mautic/
[10]: https://products.containerize.com/marketing-automation/suitecrm/
[11]: https://products.containerize.com/marketing-automation/espocrm/
[12]: https://href.li/?https://www.containerize.com/
[13]: https://products.containerize.com/blogging
[14]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/blogging/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
[17]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[18]:https://blog.containerize.com/blogging/a-guide-to-migrate-from-wordpress-to-ghost-ghost-wordpress/
[19]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
[20]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/
[21]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[22]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[23]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[24]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[25]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[26]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[27]: https://blog.containerize.com/2020/10/07/top-5-open-source-blogging-platform-in-2020/
[28]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
