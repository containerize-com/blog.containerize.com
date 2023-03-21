---
title: "WindowsのLocalHostとしてXAMPPとPHPMYADMINをセットアップします" 
seoTitle: "WindowsのLocalHostとしてXAMPPとPHPMYADMINをセットアップします" 
description: "WindowsのLocalHostとしてXAMPPとPHPMYADMINをセットアップします。独自の無料でオープンソースのローカルテスト環境を作成して、Webアプリをテストおよび構築します。" 
date: Mon, 26 Oct 2020 07:29:24 +0000
author: bilalahmed
summary: "無料およびオープンソースWebサーバーソリューションスタック（XAMPP）およびデータベース管理ソフトウェア（PHPMyAdmin）を使用して開発環境をセットアップします" 
url: /ja/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
categories: ['Database Management Software', 'Web Server Solution Stack']
---

## 無料およびオープンソースのWebサーバーソリューションスタック（XAMPP）およびデータベース管理ソフトウェア（PHPMyAdmin）を使用して開発環境をセットアップ

{{< figure align=center src="images/xampp-phpmyadmin-blog-1024x536.png" alt="xamppとphpmyadmin as localhost">}}

LocalHostとしてのXAMPPとPHPMyAdminは、開発者がWebアプリをテストおよび構築するためのローカルサーバーを提供します。 XAMPPは、パーソナルコンピューター/ラップトップにインストールされているローカルサーバーです。ライブサーバーに展開する前に、PHPアプリケーションを作成、実行、テストするローカル環境を提供します。
このブログ投稿の次のセクションについて説明します。
  * [説明][1]
  * [XAMPPインストール][2]
  * [phpmyadminダッシュボード][3]
  * [最終的な考え][4]

## 説明： {#description}
XAMPPは無料でオープンソースのWebサーバーソリューションスタックです。 Apache、MySQL、MariadB、PHP、およびPerlが含まれています。 XAMPPは、Windowsオペレーティングシステムで利用できます。インストールと使用は非常に簡単です。そのため、最も人気のあるPHP開発環境です。 LocalHostとしてのXAMPPとPHPMyAdminは、Webアプリの開発とテストのための完全な環境を提供します。
XAMPPのアルファベットは次のとおりです。
  ***x**   - クロスプラットフォーム（Linux、Windows、Mac OSなどの複数のオペレーティングシステムをサポート）
  ***a**   -  apache httpサーバー
  ***M**   -  Mariadb（データベース）
  ***p**   -  php
  ***p**   -  perl

## XAMPPインストール {#XAMPP}
  * [こちら][5]からXAMPPをダウンロードします。

{{< figure align=center src="images/xampp1.png" alt="localhostとしてxampp">}}

  *実行可能ファイルをインストールします。
  *次に、「次」をクリックします。
  *インストールするコンポーネントを選択します。

{{< figure align=center src="images/xampp2.png" alt="LocalHost Step 2としてXAMPP">}}

  *ほとんどのWebアプリの場合、_apache_、_mysql_、_php_、_phpmyadmin_のみが必要です。
  * XAMPPをインストールするインストールディレクトリを選択します。
  * Windowsセキュリティアラートが表示されます。次のオプションを確認する必要があります。「_私の家やワークネットワークなどのネットワーク」_。
  *最後に「完了」をクリックして、インストールを完了します。

{{< figure align=center src="images/xampp4.png" alt="LocalHost Step 3としてのXAMPP">}}

  *インストールが成功した後、XAMPPコントロールパネルを開きます。
  *「Apache」および「MySQL」サービスを開始します。

{{< figure align=center src="images/xampp5.png" alt="LocalHost Step 4としてのXAMPP">}}


## phpmyadminダッシュボード： {#phpmyadmin}
phpmyAdminダッシュボードにアクセスするには、MySQLサービスの横にある[管理]ボタンをクリックします。また、ブラウザからhttp：// localhost/phpmyadminにアクセスして、phpmyadminにアクセスすることもできます。ここでは、データベースを作成できます。これらの手順に従って、新しいデータベースを作成します。
  *ダッシュボードから、[データベース]タブをクリックします。

{{< figure align=center src="images/db1.png" alt="LocalHostステップ1のphpMyAdmin">}}

  *データベース名を入力し、[作成]ボタンをクリックします。これにより、新しい空のデータベースが作成されます。

{{< figure align=center src="images/db2.png" alt="LocalHostステップ2のphpMyAdmin">}}

  *次に、新しく作成されたデータベースを選択してテーブルを作成できます。
  *「テーブルの作成」にテーブル名を入力します。

{{< figure align=center src="images/db3-1024x234.png" alt="LocalHostステップ3のphpMyAdmin">}}

  *列の数を選択します。
  *次に、[GO]ボタンをクリックします。
  *その後、テーブルの作成を終了するには、次のページのフォームに記入する必要があります。

{{< figure align=center src="images/db4-1024x564.png" alt="LocalHostステップ4のphpMyAdmin">}}


## 最終的な考え： {#final}
XAMPPのインストールはシンプルで簡単です。セットアップXAMPPサーバーまで15分以内です。インストールされると、開発者はインターネットに接続しなくても、PHPベースのWebアプリを構築およびテストできます。ライブWebサーバーでプロジェクトを直接テストする代わりに、ローカルでテストするのは簡単で時間が節約されます。初心者がPHP、Perl、およびデータベースのスキルを学び、テストし、磨くのに最適なプラットフォームです。

## 探検：
[PHPおよびPERL開発者向けのオープンソースWebサーバーソリューションスタック][6]
[ベストオープンソースWebサーバーソリューションスタックオプション][7]

  
[1]: #description
[2]: #xampp
[3]: #phpmyadmin
[4]: #final
[5]: https://www.apachefriends.org/de/download.html
[6]: https://products.containerize.com/solution-stack/xampp
[7]: https://products.containerize.com/solution-stack/
