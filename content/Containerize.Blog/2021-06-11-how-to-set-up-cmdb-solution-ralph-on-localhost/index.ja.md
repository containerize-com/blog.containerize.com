---
title: "CMDBソリューションラルフをローカルホストにセットアップする方法" 
seoTitle: "CMDBソリューションラルフをローカルホストにセットアップする方法" 
description: "このチュートリアルは、LocalHostでRalphをセットアップすることです。 Ralphは、資産と構成を追跡する機能を提供する無料のCMDBソリューションです。" 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "ITアセット管理ソリューションは、運用コストを削減し、効率を高めます。この記事は、ローカルマシンにCMDBソフトウェアRalphをセットアップする方法に関するものです。" 
url: /ja/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## ITアセット管理ソリューションは、運用コストを削減し、効率を高めます。この記事は、ローカルマシンにCMDBソフトウェアRalphをセットアップする方法に関するものです。

{{< figure align=center src="images/ralph.png" alt="CMDBソリューション">}}


##  **概要**  
現在の時点で、組織は巨大なITインフラストラクチャを採用することにより、テクノロジーのペースを満たすために繁栄しています。次に、このような巨大な環境を管理することは挑戦だけではありません。このような重要なタスクを達成するには、人材と技術力が必要です。時には、プリンター、デスクトップコンピューター、スキャナー、電話、その他のITアクセサリを含むシステムの複雑なネットワークを処理するプロセスと手順を策定する手間になります。同様に、ネットワーク内のマシンのダウンタイムの可能性が高いため、これらのノードの構成も重要です。したがって、これらの構成について一貫したチェックがあるはずです。
ただし、資産の追跡と記録を保持するために利用可能な多くのオープンソースとフリーソフトウェアがあります。このソフトウェアは、構成管理データベースソフトウェア（CMDB）として知られています。最近、[containerize.com][1]は、より良い資産と構成管理のために多くの機能を提供するCMDBソリューション[Ralph][2]を公開しました。このブログ投稿では、次のポイントをカバーしてラルフを探索します。
*  **[CMDBソフトウェア資産管理ラルフの簡単な紹介][3]**  
*  **[ラルフの機能][4]**  
*  **[localhostにラルフをセットアップする方法？][5]**  
*  **[結論][6]**  

## CMDBソフトウェア資産管理ラルフの簡単な紹介 {#intro}

Ralphは無料のオープンソースITアセット管理ソリューションです。クロスプラットフォームで、自己ホースト機能が備わっています。リアルタイムの資産追跡の完全なエコシステムがあります。したがって、ユーザーはレポートの分析を実行できます。これにより、ユーザーはライフサイクルに関する資産の詳細を記録できます。さらに、このオープンソースのデジタル資産管理ソフトウェアは、データセンター資産に関する情報を保存するためのスペースを提供します。一方、このCMDBソリューションは、ソフトウェア、ライセンス、証明書、その他の契約の管理のサポートも提供します。 Ralphは、資産管理をサポートするだけでなく、それらの資産に対するアクションを実行するための規定も提供します。ただし、アクションは、ホストの展開、請求書の生成、ドメイン追跡、または在庫管理に関連しています。
このIT Asset Management Solutionは、Restful Interfaceを作成します。開発者は、このオープンソースフリーツールによって公開されたAPIエンドポイントを使用して、多くのサードパーティアプリケーションを統合できます。さらに、RalphはHTML、CSS、およびJavaScriptの入力とともにPythonで書かれています。したがって、開発と展開に関して利用できる包括的なドキュメントがあります。この在庫管理ソリューションのソースコードは、[Github][7]で入手できます。

## ラルフの特徴 {#features}

ラルフは多くの機能を提供しています。ただし、次の重要な機能の一部について説明します。
 **拡張可能** ：このオープンソースのデジタル資産管理ソフトウェアは非常に拡張可能です。開発者は、ニーズに応じて、敷地内またはクラウドに展開できます。
 **データセンターのサポート:**  Ralphは、データウェアハウス、データセンタールーム、サーバー、ラックのサポートも提供しています。ユーザーは、すべてのコンポーネント、ネットワーク、および構成を追跡できます。
 **REST API** ：この無料のCMDBソフトウェアは非常にカスタマイズ可能です。実際、サードパーティの統合にREST APIを提供します。開発者は、要件に従って拡張できます。
 **直感的なユーザーインターフェイス:**  このCMDBソリューションでは、ユーザーが簡単にナビゲートできる論理ユーザーインターフェイスがあります。さらに、管理ダッシュボードは、リアルタイムで提供されるデータを表示するさまざまなウィジェットを提供します。
 **コマンドラインインターフェイス** ：Ralphは、ホストの展開のためのMACアドレスを発見する機能を提供するコマンドラインインターフェイスを思いつきます。
 **非物理的資産のサポート** ：この機器管理ソリューションは、物理資産のサポートを提供するだけでなく、ドメイン、ソフトウェア、ライセンスなどの非物理的リソースを管理します。

## LocalHostでRalphをセットアップする方法は？ {#setup}

このセクションでは、ローカルマシンのリソース管理ソフトウェアRalphのインストールプロセスを実行します。セットアップと使用は非常に簡単です。
次のセクションに移動する前に、次の前提条件をインストールしていることを確認してください。
  * [docker-compose][8]
  * [docker][9]
オープンソースソフトウェアのほとんどは、さまざまなプラットフォーム上の展開用のDocker画像を提供しています。開発者に容易になり、開発と展開プロセスを高速化します。
前提条件がインストールされたら、Dockerをオンにします。次に、端末を開き、次のコマンドを実行して空のディレクトリを作成します。
```
mkdir ralph<br>cd ralph
```
その後、「docker-compose.yml」という名前の新しいファイルを作成し、次のデータを入力します。
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
次に、ファイルを保存して、次のコマンドを実行してビルドを作成します。
```
docker-compose build

```
ビルドが成功したら、データベースの次のコマンドを実行します。
```
docker-compose run –rm web /root/init.sh

```
すべてがうまくいった場合は、次のコマンドを実行して、Dockerのコンテナをスピンアップします。
```
docker-compose up -d
```
そのコマンドを実行した後、以下の画像に示すように、Dockerコンテナは稼働します。

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="CMDBソリューション">}}

最後に、ブラウザを開き、このアドレスhttp://127.0.0.1でアプリケーションにアクセスします。
下の画像に示すように、ログインページが表示されます。

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="CMDBソリューション">}}


## 結論 {#結論}

このCMDBチュートリアルブログ投稿を行った後、良いCMDBソリューションがなければ、資産管理がほぼ不可能であることが明らかです。リソース管理ソフトウェアには、資産、構成、およびその関係の管理と追跡において特定の役割があります。デジタルまたは物理的な資産でほとんど行われていないこれらの変更を追跡するための規定があります。これらの無料ツールは、セットアップ、使用、および詳細なドキュメントとガイダンスを簡単に使用できます。最後に、[  **containerize.com** ][1]は、さらなるオープンソース製品に関する記事を書くことを目的としています。したがって、この[10] **[CMDBソフトウェア][11]**  最新のアップデートのカテゴリに連絡してください。

## 探検
*  **[CMDBソフトウェア][11]**  
*  **[ラルフ][2]**  
* [  **無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化**  ][12]
*  **[2021年に注目すべきソフトウェア開発動向][13]**  



[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
