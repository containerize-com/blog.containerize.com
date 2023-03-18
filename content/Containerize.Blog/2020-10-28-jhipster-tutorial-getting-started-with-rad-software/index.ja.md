---
title: "Jhipsterチュートリアル| RADソフトウェアを始めます" 
seoTitle: "Jhipsterチュートリアル| RADソフトウェアを始めます" 
description: "初心者が始めるための段階的なJhipsterチュートリアル。この記事に従って、オープンソースJhipster RADソフトウェアを使用して最初のアプリケーションを設定します。" 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "ソースコードジェネレーターに飛び込みましょう。十分に文書化されたREST APIを備えたWebベースのレスポンシブアプリケーションを生成するために、すぐに使用できる機能を提供します。" 
url: /ja/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## ソースコードジェネレーターに飛び込みましょう。十分に文書化されたREST APIを備えたWebベースのレスポンシブアプリケーションを生成するために、すぐに使用できる機能を提供します。

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="Jhipsterチュートリアル">}}


## 概要：
私たちは最近、現在の時期に[radソフトウェア] [2]の重要性について[ブログ投稿] [1]を公開しました。テクノロジーは非常に高いペースで進化しています。ビジネスの要件とニーズは日々変化しています。より短い期間でソリューションを開発する競争があります。一方、すべてのビジネスは、できるだけ早く製品を立ち上げることで市場を獲得したいと考えています。したがって、オープンソースコミュニティは、**アジャイルソフトウェア開発**に基づいた多くのソフトウェアを開発しました。これらの無料の迅速なアプリケーション開発ソフトウェアは、迅速なプロトタイピング開発機能を備えたユーザーを促進します。製品の最初のリリースを構築および起動できるため、ユーザーフィードバックの入力によりさらにリリースを開発できます。さらに、これらのソフトウェアは、プロジェクトの任意の段階で変更を吸収するように設計されています。
一方、ソフトウェア開発チームは開発プロセスをスピードアップし、以前の配信を確認します。実際、それは費用対効果が高く、時間を節約し、開発者とユーザーに満足を与えます。迅速なアプリケーション開発は、計画を立てて厳格な締め切りを必要とする必要はありません。あなたはあなたの最終消費者が必要とするものを構築します。このJhipsterチュートリアルでは、[Jhipster] [3]をセットアップする方法を検討し、次のポイントをカバーして最初のアプリケーションを作成します。
  * [Jhipsterとは何ですか？それをインストールする方法は？] [4]
  * [基本アプリケーションを生成して実行する方法？] [5]
  * [生成されたアプリの管理ダッシュボードを探索] [6]
  * [結論] [7]

## Jhipsterとは何ですか？ {#インストール}
[Jhipster] [3]は、エンタープライズWebアプリケーションを生成するために使用されるオープンソースRADソフトウェアです。このオープンソースアプリケーションビルダーは、Angular、Vue.js、React.jsなどのサーバー側と人気のあるフロントエンドテクノロジーでJavaベースのスプリングブートフレームワークを提供します。このソースコードジェネレーターには、OAuth.20、JWTS、HTTPセッション認証などの複数のユーザー認証メカニズムを備えた堅牢なマイクロサービスアーキテクチャが含まれています。さらに、ユーザーがすべての機能を探索できるオンラインバージョンを提供します。この**オープンソースプロトタイピングツール**は、型の入力を少し入力してJavaScriptで記述されています。したがって、開発と展開に関する包括的なドキュメントを利用できます。開発者は[Github] [8]リポジトリでソースコードを見つけることができます。 GatlingやProtractorなどの一般的なテストフレームワークを使用して、テストを実行するための完全なサポートがあります。さらに、それは堅牢で安全で、クロスプラットフォームであり、サードパーティの統合をサポートします。
この** jhipsterチュートリアルでは、** Jhipsterのセットアップと使用について調べます。 [Jhipster] [3]は無料で、迅速なアプリケーション開発モデルの上に構築されています。開発者に優しいエコシステムを提供し、非常に有望であり、強力な迅速なWebアプリケーション開発ツールを作成します。
このオープンソースアプリケーションビルダーをどのようにインストールできるか見てみましょう。まず、次の前提条件をインストールします。
  * [Java 11 JDK] [9]
  * [node.js 10.20.1+] [10]
インストールが完了したら、端末を開き、次のコマンドを実行します。
`npm install -g generator -jhipster`
このコマンドは数分かかる場合があり、正常に完了した後、Jhipsterがマシンにインストールされます。
次のコマンドを確認して、インストールを確認できます。
`jhipster-version`

{{< figure align=center src="images/install-1024x564.png" alt="Jhipsterのインストール">}}


## 基本的なアプリケーションを生成して実行する方法は？ {#走る}
この** jhipsterチュートリアル**のセクションでは、このオープンソースRADソフトウェアを使用して最初のアプリケーションを生成する方法を学びます。
端子ウィンドウに戻り、次のコマンドを実行します。
`mkdir 1stappcd 1stapp/`
ディレクトリを作成した後、次のコマンドを以下に実行します。
「Jhipster」
このコマンドはプロセスを開始します。以下の画像でわかるように、フロントエンドおよびバックエンドテクノロジー、データベース、テストフレームワークなどのアプリケーション技術の好みに関するすべての質問に答えてください。

{{< figure align=center src="images/qst-1024x474.png" alt="Jhipsterチュートリアル">}}

すべての質問に答えた後、このソースコードジェネレーターはフォルダーにコードファイルを生成します。
次に、次のコマンドで生成されたアプリケーションを実行します。
`。/mvnw`
注：バックエンドのビルドオートメーションとしてMavenを選択した場合、このコマンドは機能します。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="Jhipsterチュートリアル">}}

http：// localhost：8080/でブラウザにアプリケーションにアクセスします。

## 生成されたアプリの管理ダッシュボードを探索{#Dashboard}
ブラウザでhttp：// localhost：8080/を押すと、次の画面が表示されます。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="コードジェネレーター">}}

上記の資格情報を使用して、管理者としてサインインできます。 Jhipsterは、2つのデフォルトのユーザーロールを提供します。サインインが成功した後、画像に次の規定が表示されます。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="オープンソースRADソフトウェア">}}

Jhipsterは、以下の画像で確認できるように、ユーザーを管理できる完全なユーザー管理を提供します。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="Jhipsterユーザー管理">}}

健康オプションは、ディスクスペースとデータベースに関する情報を提供します。

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="Jhipsterチュートリアル">}}

Jhipster管理ダッシュボードには、完全なロギングシステムがあります。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="オープンソースRADソフトウェア">}}

このオープンソースアプリケーションビルダーの管理ダッシュボードは、組み込みおよびカスタム機能のRESTエンドポイントも提供します。

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="オープンソースJhipster">}}


## 結論{#con}
これがこのJhipsterチュートリアルの終わりです。 **インスタントアプリ開発**を提供する多くのオープンソースRADプラットフォームがあります。問題とその解決策に対応するために常に生きている非常に活気のあるコミュニティがあります。多くの要因により、RAD方法論は名声を得ています。第一に、要件を完全に理解する必要はありません。第二に、最終消費者はソフトウェア開発のライフサイクルを通して関与しています。第三に、すべての利害関係者が乗船しているため、危険因子は非常に少ないです。ただし、RADソフトウェアは適応性があり、開発者に優しく、変更に柔軟です。コードジェネレーターが繰り返しのスクリプトを書き換えるという大きな時間を節約するため、それは大幅な時間を節約します。この** [Jhipster] [3]チュートリアル**記事は、いくつかの重要な洞察を強調しました。軽量で、いくつかの単純なシェルコマンドでセットアップしやすいです。
オープンソースの迅速なアプリケーション開発プラットフォームを真剣に探している場合は、このオープンソースアプリケーションビルダーを今すぐインストールしてください。最後に、[containerize.com] [11]は、より興味深いチュートリアルを使用して、チュートリアルベースを強化するためにすべて設定されています。定期的な更新については、この[迅速なアプリケーション開発] [2]カテゴリに接続してください。

## 探検
次のリンクが関連する場合があります。
  * [キューバプラットフォーム] [12]
  * [QuickApp] [13]
  * [Jhipster] [3]
  * [li3] [14]
  * [apache isis] [15]
  * [2021年のトップ5無料迅速なアプリケーション開発ソフトウェア] [16]
  * [ビジネスのための迅速なアプリケーション開発ソフトウェア| rad] [17]
  * [2021年にオープンソースソフトウェアを選択する前にレビューすること] [18]
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
