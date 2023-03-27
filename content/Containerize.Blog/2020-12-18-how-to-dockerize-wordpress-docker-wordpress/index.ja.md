---
title: "WordPressをDockerizeする方法| Docker WordPress" 
seoTitle: "WordPressをDockerizeする方法| Docker WordPress" 
description: "Docker＆Dockerは何を作曲していますか？この記事では、Docker、Docker Composesのインストール方法、およびWordPressをDockerコンテナにDockerizeする方法を学びます。" 
date: Fri, 18 Dec 2020 15:35:07 +0000
author: Assad Mahmood
summary: "コンテナソフトウェアは、アプリケーションとその依存関係をバンドルし、アプリを任意のコンピューティング環境で実行します。 WordPressをDockerizeする方法を学びましょう。" 
url: /ja/how-to-dockerize-wordpress-docker-wordpress/
categories: ['Blogging']
---

## コンテナソフトウェアはアプリケーション、その依存関係をバンドルし、コンピューティング環境でアプリを実行します。 WordPressをDockerizeする方法を学びましょう。

{{< figure align=center src="images/dockerwordpress.png" alt="Dockerize wordpress">}}


## 概要
[ブログ][1]オープンソースソフトウェアのカテゴリの別のブログ投稿へようこそ。 [無料のCivicRM WordPress統合でリードを後押し][2]、[WordPressとGatsbyでWebサイトを構築する方法][3]などのトピックに関するいくつかの記事を公開しました。ただし、この記事では、オープンソースのブログプラットフォームと **コンテナソフトウェア** に関するさらなる洞察と詳細をもたらします。 Dockerとは何かなど、いくつかのホットな質問をします。
コンテナ化は、仮想化の代替としてソフトウェア開発の大きな傾向になっています。これには、ソフトウェアコードとそのすべての依存関係をカプセル化またはバンドルすることで、一貫してインフラストラクチャで実行できるようにします。コンテナ化により、開発者はアプリケーションをより高速かつ安全に作成および展開できます。 Dockerは、開発者コミュニティ全体で使用される最も人気のあるコンテナ化アプリケーションです。このチュートリアルでは、Docker Composeを使用してWordPressをDockerizeする方法を学びます。それでは、次のポイントから始めましょう。
* [ **dockerとは？** ][4]
* [ **WordPress** ？][5]をDockerizeする必要がある理由
* **[Docker Composeをインストールする方法][6]** 
* **[dockerize wordpress][7]** 
* **[結論][8]** 

## Dockerとは何ですか？ {#docker}

簡単に言えば、Dockerはオープンソース **コンテナソフトウェア** であり、仮想化をより速く軽くします。それは非常に軽いので、Dockerコンテナはわずか数秒で起動できます。また、単一のPCで数十のDockerコンテナを簡単に実行できます。開発者は、Dockerを使用して、コンテナを使用してアプリケーションを作成、展開、および実行します。コンテナを使用すると、開発者は、ライブラリやその他の依存関係など、必要なすべての部品を使用してアプリケーションをパッケージ化し、1つのパッケージとして展開できます。そうすることで、開発者はアプリケーションが任意のインフラストラクチャで実行されることを保証することができます。さらに、あらゆる関連性に最大限の支援を提供するために常に生きている巨大な開発者とサポートコミュニティがいます。 Dockerは、その強力な機能と使用法により、あらゆるソフトウェアエンタープライズの必須コンポーネントになりました。

## なぜWordPressをDockerizeする必要があるのですか？ {#why}

このセクションでは、WordPressのDockerizingの背後にある必要性について知っています。 WordPressは、テクノロジーの世界で非常に採用されているトップのオープンソースブログソフトウェアです。ただし、WordPressをローカルに実行するには、Apache/Nginx、MySQL Server、PHP、およびその他の依存関係が必要です。また、ステージングまたは生産環境への展開は、これらの依存関係の管理に関しては悪夢です。時には、開発者やサポートエンジニアが時間と人材を要求するため、展開を繰り返し繰り返すのが面倒になります。
したがって、コンテナ化はこれであなたを助けることができます。必要なのはdockerだけです - インストール自体が数秒かかり、追加の構成は必要ありません
開発者のマシン、ステージ、ライブサーバーであろうと、それがどのようなOSであろうと、Dockerはどこでも同じ動作をします。これは、たとえば、ある環境に表示され、別の環境で再現できないバグを探す必要がないことを意味します。

## Docker Composeをインストールする方法 {#install}


### 前提条件
Docker Composeを使用して、Dockerコンテナで構築された孤立した環境でWordPressを簡単に実行できます。このガイドは、WordPressを設定および実行するためにComposeを使用する方法を示しています。
Docker ComposeはDockerエンジンに依存しているため、Dockerエンジンがインストールされていることを確認してください。 MacやWindows用のDockerデスクトップなどのデスクトップシステムでは、Docker Composeがこれらのデスクトップインストールの一部として含まれています。ただし、Linux Systemsでは、[公式ガイド][9]に従ってDockerエンジンをインストールします。

### Linuxにコンポーシングをインストールします
このコマンドを実行して、Docker Composeの現在の安定したリリースをダウンロードしてください。
```
sudo curl -L "https://github.com/docker/compose/releases/download/1.27.4/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```
実行可能な権限をバイナリに適用します。
```
sudo chmod +x /usr/local/bin/docker-compose
```
[バージョン]コマンドを実行してインストールをテストします。
```
docker-compose --version
```

### WordPressのDockerFileを定義します
最初にする必要があるのは、 **_ dockerfile _** で画像がどのように見えるかを定義することです。これは、アプリケーションのソースを使用してディレクトリに追加されるテキストファイルです。
```
FROM wordpress:php7.1-apache
COPY . /var/www/html/wordpress
```
「 **/var/www/html/wordpress** 」には、テーマ、プラグイン、コンテンツとともに、WordPressの完全な内容が含まれます。リポジトリにテーマまたはプラグインのみが含まれている場合は、関連するフォルダーを追加するだけです。
WordPressブログを開始するDocker-Compose.ymlファイルと、データ永続性のためのボリュームマウントを備えた別のMySQLインスタンスを作成します。
```
version: '3.3'

services:
   db:
     image: mysql:5.7
     volumes:
       - db_data:/var/lib/mysql
     restart: always
     environment:
       MYSQL_ROOT_PASSWORD: somewordpress
       MYSQL_DATABASE: wordpress
       MYSQL_USER: wordpress
       MYSQL_PASSWORD: wordpress

   wordpress:
     depends_on:
       - db
     build: .
     ports:
       - "8000:80"
     restart: always
     environment:
       WORDPRESS_DB_HOST: db:3306
       WORDPRESS_DB_USER: wordpress
       WORDPRESS_DB_PASSWORD: wordpress
       WORDPRESS_DB_NAME: wordpress
volumes:
    db_data: {}
```
次に、プロジェクトディレクトリでコマンドを実行します
```
docker-compose up -d
```
これにより、 **_ Docker-Compose up _** detached Modeで実行され、必要なDocker画像を引いて、WordPressおよびデータベースコンテナを起動します。
コンテナが開始されたら、WebブラウザーでURLを開き、アプリケーションの使用を開始できます。
```
http://localhost:8000
```

## 結論 {#conclusion}

これにより、このブログ投稿の最後になります。この記事では、Dockerとは何か、 **Docker Compose**のインストール方法について学びました。また、Docker-Composeを使用してWordPressをDockerizeする方法も学びました。さらに、Dockerの背後にあるコンセプトと、単純なマルチコンテナーアプリケーションを定義する方法を紹介しました。ただし、このオープンソース**コンテナソフトウェア** は、すべてのソフトウェア組織にとって主要なオプションです。したがって、この記事は、アプリケーションのDockerを選択しようとしている場合に本当に役立ちます。以下の「探索」セクションにリストされている他の多くの関連記事やブログソフトウェアがリストされています。
最後に、[containerize.com][10]は、さらなるオープンソース製品に関する記事を書いています。したがって、定期的なニュースと更新については、[ブログ][1]カテゴリに連絡してください。さらに、ソーシャルメディアアカウント[Facebook][11]、[LinkedIn][12]、および[Twitter][13]でフォローできます。

## 探検
次のリンクが関連する場合があります。
  * [WordPress][14]
  * [Jekyll][15]
  * [談話][16]
  * [ゴースト][17]
  * [Docker ComposeでWordPressをDockerizeする方法][18]
  * [無料のCivicRM WordPress統合でリードを後押し][2]
  * [WordPressとOsticketを使用したチケットシステムを自動化][19]
  * [談話フォーラムをWordPressと統合する方法][20]
  * [トップ7のSEOブログをフォローしてウェブサイトの検索トラフィックを増やす][21]
  * [WordPressとGatsbyでWebサイトを構築する方法][3]
  * [より良いパグスピードとSEOのためにWordPressでGZIP圧縮を有効にする方法][22]



[1]: https://products.containerize.com/blogging/
[2]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[3]: https://blog.containerize.com/blogging/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
[4]: #docker
[5]: #why
[6]: #install
[7]: #dockerize
[8]: #conclusion
[9]: https://docs.docker.com/engine/install/#server
[10]: https://www.containerize.com/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/blogging/wordpress/
[15]: https://products.containerize.com/blogging/jekyll/
[16]: https://products.containerize.com/discussion-forum/discourse/
[17]: https://products.containerize.com/blogging/ghost/
[18]: https://blog.containerize.com/blogging/ja/how-to-dockerize-wordpress-docker-wordpress/
[19]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[20]: https://blog.containerize.com/blogging/how-to-integrate-discourse-forum-with-wordpress/
[21]: https://blog.containerize.com/blogging/increase-website-search-traffic-by-following-top-7-seo-blogs/
[22]: https://blog.containerize.com/2020/12/12/how-to-enable-gzip-compression-in-wordpress-for-better-speed/
