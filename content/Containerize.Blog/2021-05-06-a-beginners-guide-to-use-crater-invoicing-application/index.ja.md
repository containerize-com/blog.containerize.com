---
title: "クレーターの請求アプリケーションを使用するための初心者ガイド" 
seoTitle: "クレーターの請求アプリケーションを使用するための初心者ガイド" 
description: "オープンソースの請求書システムを始めるためのチュートリアル。このクレーターのガイドラインは、コアの概念と機能に精通するのに役立ちます。" 
date: Thu, 06 May 2021 21:23:50 +0000
author: Masood Anwer
summary: "このチュートリアルは、クレーターの請求アプリケーションについて学ぶのに役立ちます。これは、小規模企業向けの無料でオープンソースの請求書システムです。" 
url: /ja/a-beginners-guide-to-use-crater-invoicing-application/
categories: ['Invoicing']
---

## このチュートリアルは、クレーターの請求アプリケーションについて学ぶのに役立ちます。これは、小規模企業向けの無料でオープンソースの請求書システムです。

{{< figure align=center src="images/blog-crater.png" alt="オープンソースの請求書システム">}}

すべてのビジネスには、請求書、費用、支払いなどを管理するための何らかのシステムが必要です。請求ソフトウェアは、請求タスクを簡単に実行し、他の重要なものに焦点を合わせることができるように、それを管理するのに役立ちます。この投稿では、クレーターをセットアップし、ビジネスの会計業務を処理するために使用する方法を学びます。
  * [クレーターについての紹介][1]
  * [クレーターの設置手順][2]
  * [機能探査][3]
  * [結論][4]

## はじめにクレーターについて {#introduction}
[クレーター][5]は、無料でオープンソースの請求アプリケーションです。絶対に無料で、最新のバージョンに簡単に更新できます。これは、中小企業やフリーランサー向けの無料会計システムです。また、完全な請求書ソリューションであり、費用と支払いを追跡し、税金を計算し、見積もりと請求書を作成できます。さらに、iPhoneおよびAndroidデバイス用のすぐに使用できるモバイルアプリケーションが付属しています。任意の場所から管理することができます。 CraterはWebベースの請求ソフトウェアであるため、WebアプリケーションはLaravelとVuejsを使用して設計されており、モバイルアプリはReactネイティブで構築されています。開発と展開に関連するすべてのドキュメントが利用可能です。完全なソースコードは[Github][6]にあります。

## クレーターのインストール手順 {#installation}
このセクションでは、手動の方法でクレーターをインストールし、Dockerを使用する方法について説明します。

## # マニュアルインストール
  *最新バージョンからダウンロードします。
  *ダウンロードしたzipファイルをサーバーにアップロードし、抽出します。
  *ドメインをクレーターフォルダー内のパブリックディレクトリに向けます。
  *プロジェクトのルートに移動し、「sudo chmod -r 775 ./」コマンドを実行して、適切な特権を割り当てます。
  *ブラウザでサイトを開き、インストールウィザードをフォローします。

## # Dockerのインストール
  *サーバーにDockerをインストールする：。
  *このガイドに従ってDocker Composeをインストールしてください。
  *このコマンドを使用して、クローンクレーターリポジトリ。
```
git clone https://github.com/bytefury/crater
```
  *クレーターをインストールするために、下のコマンドを1つずつ実行します。
```
$ cd crater
$ cp .env.example .env
$ docker-compose up -d
$ ./docker-compose/setup.sh
```
  *ブラウザでクレーターサイトを開き、インストールウィザードに従ってください。

## 機能探査 {#feature}
このセクションでは、このオープンソース請求アプリケーションのコア機能を調査します。インストールが完了したら、サイトhttp://example.comを開き、アプリケーションにログインします。
  ***ダッシュボード**  - ログインした後、アプリのビュー全体を表示するダッシュボードに移動します。

{{< figure align=center src="images/crater-dashboard-1024x479.png" alt="">}}

  ***設定**  -  [設定]ページに移動し、アカウント設定、会社の情報、設定、カスタマイズ、通知、支払いモジュールなどのさまざまなWebアプリケーション設定を追加します。

{{< figure align=center src="images/crater-settings-1024x478.png" alt="">}}

  ***アイテム**  - アイテムタブには、サイドバーメニューからアクセスできます。このタブから、アイテムを管理できます。推定値と請求書を作成しながらアイテムを使用できます。
  ***見積もり**  - 料金、割引、在庫などを含む包括的な見積もりを作成します。 3つのビルトインテンプレートの1つを使用して、推定値を作成できます。追加の税金を推定に追加することができ、それらを複合税として追加することもできます。
  ***請求書**  - プロの請求書を作成し、クライアントに送信します。利用可能なテンプレートを使用して、請求書を生成できます。請求書に追加の税金と複合税を追加できます。さらに、顧客にパーセンテージまたは固定値の割引を提供できます。さらに、個々のアイテムと請求書全体に割引を適用できます。
  ***支払い**  - このモジュールは、クライアントから得た支払いを追跡し続けるのに役立ちます。
  ***費用**  - 費用モジュールは、さまざまなサービスにどれだけの費用をかけるかを追跡するのに役立ちます。
  ***税金**  - この機能を使用すると、税金を簡単に管理できます。請求書総額または個々のアイテムに複数の税金を追加できます。
  ***レポート**  -  1人または複数の顧客向けであろうと、すべての請求書に関する包括的な情報を取得します。クレーターサポートには、販売レポート、利益および損失レポート、費用報告書、税金報告書など、4種類のレポートが付属しています。

## 結論 {#conclusion}
クレーターとそれを手動でDockerでセットアップする方法について学びました。また、すべての会計請求ソフトウェアが提供すべき機能のいくつかを調べました。うまくいけば、このガイドがあなたのビジネスのためにオープンソースの請求書システムを迅速に実装するのに役立つことを願っています。
最後に、[containerize.com][7]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。したがって、定期的な更新については、[請求書][8]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  * [クレーター - 中小企業向けの無料会計システム][5]
  * [2021年のトップ5オープンソースアカウンティングソフトウェア][9]

  
[1]: #Introduction
[2]: #Installation
[3]: #Feature
[4]: #Conclusion
[5]: https://products.containerize.com/invoicing/crater/
[6]: https://github.com/bytefury/crater
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/invoicing/
[9]: https://blog.containerize.com/invoicing/top-5-open-source-accounting-software-in-the-year-2021/