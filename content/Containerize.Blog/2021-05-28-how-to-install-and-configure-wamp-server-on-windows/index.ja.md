---
title: "WindowsにWAMPサーバーをインストールして構成する方法" 
seoTitle: "WindowsにWAMPサーバーをインストールして構成する方法" 
description: "WampServerにWindowsにインストールし、PHPベースのWebアプリケーションの開発を迅速に開始します。 WAMPサーバーは、Windows 32と64ビットの両方で使用できます。" 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Apache2、PHP、およびMySQLを使用してWebアプリケーションを作成するためのWeb開発環境をセットアップします。この記事は、Wamp ServerにWindowsにインストールするのに役立ちます。" 
url: /ja/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## APACHE2、PHP、およびMySQLを使用してWebアプリケーションを作成するためのWeb開発環境をセットアップします。この記事は、Wamp ServerにWindowsにインストールするのに役立ちます。

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="WAMPサーバー">}}

すべての開発者は、プログラムを作成する前に、必要なソフトウェアをコンピューターにインストールする必要があります。初期には、開発者はすべてのソフトウェアを個別にインストールし、それらを協力するように構成する必要がありました。 ** WampServer **およびその他のWebソリューションスタックソフトウェアが利用可能になりました。これにより、必要なすべてのソフトウェアを1つのパッケージにバンドルします。開発環境を稼働させるために、1つのパッケージをインストールするだけです。
このブログ投稿では、次のセクションについて説明します。
  *[** WampServerとは？**] [1]
  *[** wampインストール**] [2]
  *[** wamp構成**] [3]
  *[**アクセスphpmyadmin **] [4]

## WampServerとは何ですか？ {#何}
WampServerは、PHPベースのアプリケーション用のWeb開発環境をセットアップするための無料のソリューションスタックです。 WAMPは（W  -  Windows、A  -  Apache、M  -  MySQL、およびP  -  PHP）の略です。さらに、データベースの管理のためのphpMyAdminと管理者も付属しています。 WAMPは人気のあるツールの1つであり、すぐにセットアップできます。さらに、コントロールパネルからWAMPサーバーを構成できます。アプリケーションを作成およびテストするための完全なWeb開発環境を提供します。 WampServerは、ニーズに応じてインストール中に選択できるいくつかのコンポーネントで構成されています。 WampServerには、PHPの複数のバージョンが付属しています。プロジェクトの要件に従って、PHPバージョンを簡単に変更できます。また、WampServerコントロールパネルからDBMS（データベース管理システム）を変更することもできます。

## wampインストール{#installation}
以下のステップバイステップガイドに従って、WindsにWAMPサーバーをインストールしてください。
  ***公式WebサイトからWampserver **をダウンロードします

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *** WampServer 32ビット**または** WampServer 64ビット**オペレーティングシステムに従ってインストーラーのバージョンを選択します。
  *** wampダウンロード**ファイルを見つけて、それをダブルクリックしてインストールプロセスを実行します。
  *言語を選択し、[OK]ボタンを押します。
  * [契約]チェックボックスを受け入れるIを選択し、[次のボタン]ボタンをクリックします。
  * WampServerのインストールに関する重要な情報を読み、次のボタンをクリックして続行します。
  * WAMPサーバーをインストールするフォルダーを選択し、[次のボタン]ボタンをクリックします。
  *以下のスクリーンショットに示すように、インストールするコンポーネントを選択する必要があります。開発中にすべてのPHPバージョンと切り替えを選択できます。また、mysqlとmariadbの両方をインストールすることもできます。

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * WampServerのショートカットを選択し、[次の]ボタンをクリックします。
  * [インストール]ボタンをクリックして、WampServerをインストールします。
  *次に、WAMPサーバーのデフォルトのブラウザとデフォルトのテキストエディターを選択します。
  *インストールが完了しました。 [完了]ボタンをクリックして、WAMPサーバーのインストールウィザードを終了します。
  *ブラウザを開き、アクセスするためにローカルホストを入力します。以下のページが表示されます。

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## wamp configuration {#configuration}
ここで、Webアプリケーションの開発とテスト中に役立ついくつかの構成を検討します。これで、デスクトップのショートカットWampServerアイコンをダブルクリックすることで、WampServerを開始できます。
  *** Services **  -  WampServerアイコンを左クリックして、すべてのサービスを開始、停止、再起動するオプションを確認できます。
  ***データベースの変更**  -  WAMPアイコンを右クリックして、[ツール]ダイアログボックスを開きます。ツールを選択し、「デフォルトのDBMS Mariadb MySQLを反転させる」をクリックします。 WAMPサーバーは自動的に再起動し、ブラウザでLocalHostを開くことでデフォルトのデータベースを確認できます。
  *** PHPバージョンの変更**  -  WAMPアイコンを右クリックして、[ツール]ダイアログボックスを開きます。ツールを選択してPHP CLIバージョンを変更し、必要なPHPバージョンをクリックします。
  ***仮想ホスト**  -  WampServerのWebインターフェイスを介して仮想ホストを簡単に追加できます。ブラウザでローカルホストを開き、[ツール]セクションの下にある[仮想ホストの追加]をクリックします。 「dev.example.comのような仮想ホストの名前」を入力し、プロジェクトの絶対パスを入力します。 [VirtualHostの作成]ボタンをクリックします。 Apacheサーバーを再起動して、新しく作成された仮想ホストをロードします。
  *** Apacheポートの変更**  - デフォルトでは、Apache Webサーバーはポート80で実行されます。Apacheに別のポートを使用する場合は、WampServerコントロールパネルから実行できます。 WAMPアイコンを右クリックして、[ツール]ダイアログボックスを開きます。ツールを選択し、「80以外のポートを使用」をクリックします。ダイアログボックスに新しいポート番号を入力し、[OK]ボタンをクリックします。
  **DBMSポートの変更**  - デフォルトでは、データベースサーバーはポート3306で実行されます。データベースサーバーに別のポートを使用する場合は、WampServerコントロールパネルから実行できます。 WAMPアイコンを右クリックして、[ツール]ダイアログボックスを開きます。ツールを選択し、[3306以外のポートを使用]をクリックします。ダイアログボックスに新しいポート番号を入力し、[OK]ボタンをクリックします。
  ***空のログ**  -  WamServerは、コントロールパネルからログをクリアする機能を提供します。 PHPエラーログ、Apacheエラーログ、Apacheアクセスログ、MySQLログ、MariadBログなどのログを空にすることができます。すべてのログを一度にクリアすることもできます。 WAMPアイコンを右クリックして、[ツール]ダイアログボックスを開きます。ツールを選択して空のログを選択すると、ログを削除するためのすべてのオプションがあります。
  ***言語の変更**  -  WampServerコントロールパネルの言語ができます。 WAMPアイコンを右クリックして、[ツール]ダイアログボックスを開きます。言語を選択し、必要な言語をクリックします。新しく選択された言語でコントロールパネルが表示されます。

## アクセスphpmyadmin {#phpmyadmin}
ブラウザにLocalHostを開いて、WampServerウェルカムページのPHPMyAdminリンクをクリックして、データベースの管理のために** phpmyadmin **にアクセスできます。また、http：// localhost/phpmyadmin urlにアクセスしてアクセスできます。

## 結論
WampServerについて議論し、Windowserver ** ITをWindowsにインストールするための完全なステップバイステップガイドについて説明しました。このチュートリアルに従ってすぐにコーディングを開始することにより、** WampServer **を簡単にインストールして構成できます。ソリューションスタックソフトウェアのその他のオプションについては、Exploreセクションの下のリンクにアクセスできます。
最後に、[** containerize.com **] [5]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[** Webサーバーソリューションスタック**] [6]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  *[**最高のオープンソースWebサーバーソリューションスタックオプション**] [7]
  *[** WindowsのLocalHostとしてXAMPPとPHPMYADMINをセットアップ**] [8]
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
