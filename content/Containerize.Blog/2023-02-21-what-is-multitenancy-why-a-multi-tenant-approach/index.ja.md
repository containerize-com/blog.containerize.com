---
title: "マルチテナンシーとは何ですか？ |なぜマルチテナントアプローチなのですか？" 
seoTitle: "マルチテナンシーとは何ですか？ |なぜマルチテナントアプローチなのですか？" 
description: "マルチテナンシーとは何ですか？このブログ投稿に従って、マルチテナンシーの背後にある実際の概念を学び、スケーラブルなマルチテナントアプリケーションの構築を開始します。" 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "マルチテナントアプリケーションアーキテクチャを設計し、ユーザーの要件を効率的に満たします。 Multitenancyを使用すると、スケーラブルなソフトウェアを構築する方法を調べてみましょう。" 
url: /ja/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## マルチテナントアプリケーションアーキテクチャを設計し、ユーザーの要件を効率的に満たします。 MultiTenancyを使用すると、スケーラブルなソフトウェアを構築する方法を調べてみましょう。

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


## 概要
[プログラミング][1]のカテゴリにある別のブログ投稿へようこそ。マルチテナントアプリケーションアーキテクチャについて説明します。実際、[containerize.com][2]は、オープンソース製品スタックに幅広いマルチテナントアプリを持っています。オープンソースマルチテナントアプリケーションには、[form.io][3]、[botpress][4]などが含まれます。さらに、これらのオープンソースソフトウェアのアーキテクチャ、展開、開発、および使用に関する完全な[ドキュメント][5]が利用可能です。この記事を書く背後にある理由は、ソフトウェア開発におけるマルチテナンシーの背後にある概念を理解することです。それで、  **マルチテナンシーとは何ですか？**  マルチテナントとマルチテナントVSシングルテナントアーキテクチャの長所と短所も通過します。
次のポイントについては、この投稿で説明します。
  * [マルチテナンシーとは何ですか？マルチテナント対シングルテナント][6]
  * [マルチテナントアプリケーションアーキテクチャの種類][7]
  * [マルチテナントアプリのビジネス上の利点][8]
  * [マルチテナンシーの欠点][9]

## マルチテナンシーとは何ですか？マルチテナントvsシングルテナント {#What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant}

Multitenancyとは、特に既知のテナントを複数のフロントエンドに提供する単一のサーバーインスタンスを指します。マルチテナントソフトウェアに出くわすたびに、このソフトウェアが共有サーバーの単一インスタンスを実行していることを脳に伝え、複数のテナント（クライアント）がこのインスタンスに異なるブランディングで接続されています。
たとえば、大学向けに構築されたソフトウェアは、さまざまなフロントエンドブランディングとプログラムデータを持つさまざまな部門にサービスを提供しています。基本的に、すべてのテナントを実行してサービスを提供するサーバーの単一のインスタンスがあります。さらに、すべてのテナントの間にデータ分離とデータプライバシーがあります。さらに、すべてのテナントには独自のビジネスロジックがあり、データを単一ではあるがプライベート/孤立した場所に保存して保存します。

{{< figure align=center src="images/multi-tenant-1.png" alt="マルチテナントアーキテクチャ">}}

それでは、シングルテナントアーキテクチャを簡単に見てみましょう。シングルテナントアーキテクチャでは、テナントごとに1つのサーバーインスタンスがあります。繰り返しますが、大学のソフトウェアの例を見てみましょう。シングルテナントアプローチは、部門ごとに1つのサーバーインスタンスを指し、インスタンスの数は部門の数（テナント）に依存します。

{{< figure align=center src="images/single-tenant-2.png" alt="シングルテナントアーキテクチャ">}}


## マルチテナントアプリケーションアーキテクチャの種類 {#Types-of-Multi-Tenant-Application-Architecture}

これまでのところ、あなたはマルチテナンシーを理解しており、今ではそのさまざまなタイプを経験します。
 **1つのデータベース -  1つのアプリインスタンス** ：このアプローチは非常に人気があり、マルチテナントアプリの構築に広く使用されています。このアプローチに従って、単一のデータベースで実行されているアプリケーションインスタンスが1つあります。さらに、共有スキーマがあり、テナントのデータは一意のIDに対して単一の場所に保存されます。
 **複数のデータベース -  1つのアプリインスタンス:**  このマルチテナントアプリケーションアーキテクチャでは、アプリケーションの1つのインスタンスのみが複数のデータベースで実行されます。すべてのテナントには、各テナントごとにすべての情報が個別に保存される独自のデータベーススキーマがあります。
 **複数のデータベース - 複数のアプリインスタンス** ：3番目のアプローチとは、複数のデータベースとともに複数のサーバーインスタンスを実行することを指します。共有されていないものは何もなく、各テナントには完全な隔離があり、テナント間に依存関係はありません。

## マルチテナントアプリのビジネス上の利点 {#Business-Benefits-of-Multi-Tenant-App}

このセクションでは、マルチテナンシーを選択することの顕著な利点を説明します。しかし、私たちは特典について長い間話し合うことができますが、次の点を見てみましょう。
 **スケーラビリティ** ：マルチテナントアーキテクチャを簡単にスケーリングできます。選択したタイプに関係なく、水平または垂直にスケーリングできます。
 **費用対効果の高い** ：マルチテナントを選択すると、運用コストが節約されます。リソースが共有されているため、リソースをスケールアップすることは常に費用対効果が高いです。
 **効率と柔軟性** ：マルチテナント環境では、開発と展開の効率を達成します。たとえば、共有データベーススキーマでスクリプトを実行して、すべてのテナントを更新できます。
 **より良いリソース管理** ：リソースの追加と削除は簡単です。さらに、このアーキテクチャは、改善され、適切に管理されたインフラストラクチャを提供します。さらに、すべてのテナントはプライベートで安全で、共有/非共有データベースにアクセスできます。

## マルチテナンシーの欠点 {#Drawbacks-in-Multi-Tenancy}

このブログ投稿の目的は、**マルチテナントアーキテクチャの公正な感覚を与えることです。
 **複雑な認証メカニズム** ：マルチテナンシーにおけるリソース割り当ての共有性により、データアクセスポイントには厳密なプロトコルがあります。
 **サーバーの内訳:**  マルチテナントアプリケーションアーキテクチャを選択する際に考慮すべき主要なポイントです。すべてのテナントは、何らかの理由でサーバーがダウンしているときはいつでも機能しなくなります。
 **プライバシーリスク** ：マルチテナントアーキテクチャでは、セキュリティ侵害のリスクが高くなっています。実際、すべてのテナントのデータは共有データベースに保存されているため、サードパーティの侵略がデータの破損や盗難につながる可能性があります。

## 結論
ここでこのブログ投稿を終了しています。この記事には、  **MultiTenancy** とは何かなどの質問に対する答えがありますか？さらに、 **マルチテナント対シングルテナント**  インフラストラクチャも調査しました。さらに、このガイドは、マルチテナントアプリケーションアーキテクチャまたは単一のテナントを選択するときに支援します。とりわけ、SaaSを構築する場合は、マルチテナンシーが最初の選択肢です。 「参照」セクションには、テクノロジーの世界に関する最新の洞察を提供する他の興味深いブログ投稿があります。
最後に、[containerize.com][2]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。さらに、ソーシャルメディアアカウント[Facebook][10]、[LinkedIn][11]、および[Twitter][12]でフォローできます。

## 質問する
[フォーラム][13]での質問や質問についてお知らせください。

## FAQ
 **マルチテナントとは何ですか？** 
この[リンク][6]をご覧ください。例とともに詳細があります。
 **マルチテナントアーキテクチャの意味は何ですか？** 
A  **マルチテナントアプリケーションアーキテクチャ**  は、複数のテナント（クライアント）にサービスを提供するサーバーの単一インスタンスを意味します。詳細については、この[リンク][7]に移動してください。

## 参照
  * [生成AI |とは何ですか生成人工知能][14]
  * [ChatGptをGoogleシートと統合する方法][15]
  * [vscodeでchatgptの使用方法| VSCODE拡張コードGPT][16]
  * [Openai Chatbot gpt-3 | ai革命をchatgpt][17]
  * [人工知能の紹介| aiとは？][18]



 [1]: https://blog.containerize.com/category/programming/
 [2]: https://www.containerize.com/
 [3]: https://products.containerize.com/form/formio/
 [4]: https://products.containerize.com/live-chat/botpress/
 [5]: https://products.containerize.com/
 [6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
 [7]: #Types-of-Multi-Tenant-Application-Architecture
 [8]: #Business-Benefits-of-Multi-Tenant-App
 [9]: #Drawbacks-in-Multi-Tenancy
 [10]: https://web.facebook.com/containerize
 [11]: https://www.linkedin.com/company/containerize/
 [12]: https://twitter.com/containerize_co
 [13]: https://forum.containerize.com/
 [14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/