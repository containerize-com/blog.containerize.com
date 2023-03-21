---
title: "HospitalRunのインストール方法|病院管理システム" 
seoTitle: "HospitalRunのインストール方法|病院管理システム" 
description: "この記事は、HospitalRunをLocalHostにインストールするのに役立ちます。豊富なフィーチャー、オープンソースの無料の病院管理システムを使用して、医療プロセスを自動化します。" 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "臨床医と患者を促進するための自己ホストのヘルスケアソリューション。簡単な手順に従って、LocalHostに無料のHospitalRunを展開する方法を学びましょう。" 
url: /ja/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## 臨床医と患者を促進するための自己ホストのヘルスケアソリューション。簡単な手順に従って、LocalHostに無料のHospitalRunを展開する方法を学びましょう。

{{< figure align=center src="images/hospitalrun.png" alt="病院管理システム">}}


## 概要
最近、[オンラインヘルスケアソフトウェアがヘルスケア業界に力を与えている方法][1]に関するブログ投稿を公開しました。グローバルなヘルスケアソフトウェア業界は、時間の経過とともに価値を獲得しています。実際のところ、テクノロジーはあらゆる分野を変えてきたということです。患者とスタッフの数は非常に高くなっているため、このような巨大なデータを管理するのが面倒になりました。一方、毎日行われる多くの時間のかかるタスクがあり、医療機関はそれらのタスクを繰り返し実行します。したがって、オープンソースのソースコミュニティは、ヘルスケアのニーズに対処するための多くの有用なモジュールが付属するオープンソースの医療ソフトウェアを開発しました。
オープンソースの医療ソフトウェアは、病院と病院管理の規定に関する患者の記録を管理するために開発されています。さらに、オープンソースのヘルスケアソフトウェアは、高度なレベルのサービスを提供するために人工知能を活用しています。現在、ほとんどの疾患治療は、問題を診断するだけでなく、治療法の支援も提供するソフトウェアによって処理されています。ただし、病院向けの多くの新興ソフトウェアがあります。このブログ投稿では、次のポイントについて説明します。
  *[ **HospitalRunとは？** ][2]
  *[**病院の特徴は何ですか**][3]
  *[ **HospitalRun？** ][4]のインストール手順
  *[**結論**][5]

## HospitalRunとは何ですか？   {#intro}
HospitalRunは、無料のオープンソース病院情報管理システムです。この無料のヘルスケアソリューションは、インターネット接続がない場合でもユーザーがこのフリーソフトウェアを最大限に活用できるため、環境に優しいです。ユーザー管理、患者登録、予約、請求システム、患者の退院システムなど、多くの機能を提供します。このオープンソースeHealthシステムのユーザーインターフェイスは、ユーザーが異なる要素を簡単にナビゲートできる場所で論理的です。さらに、セットアップが簡単で、開発者がDocker画像を使用して展開できるDocker画像を提供します。
この**病院管理システム**は、患者の医療記録を集中化するためにラボを統合するための規定を提供します。さらに、ユーザーは患者の訪問、投薬、評価の記録を維持することもできます。このeHealthレコードシステムは安全で柔軟で、サードパーティのアプリケーションとの統合を提供します。 HospitalRunのサポートを提供する非常に活気のあるコミュニティがあります。さらに、完全な患者の退院システムがあります。このオープンソースの医療ソフトウェアは、JavaScriptで完全に記述されています。さらに、開発と展開に関して利用できる包括的なドキュメントがあります。実際、このオープンソースの医療ソフトウェアは、サポート部門、臨床部門、管理部門など、さまざまな部門にさまざまなダッシュボードを提供しています。これらのすべての役割には、さまざまなレベルの許可とアクセスが付属しています。

## HospitalRunの機能は何ですか？   {#特徴}
このセクションでは、このeHealthシステムの次の重要な機能の一部を説明します。
  ***セルフホスト**：HospitalRunには自己ホスト機能が備わっており、サーバーへの展開の努力が少なくなります。
  ***予定のスケジューリング**：このヘルスシステムにより、ユーザーは予定をスケジュールできます。ダッシュボードで利用可能な予定の完全なモジュールがあります。さらに、ユーザーはフィルターの助けを借りて予定を検索できます。
  ***患者退院システム**：この病院管理システムは、退院した患者の記録を維持しています。
  ***薬物管理**：このeHealthレコードシステムにより、ユーザーは特定の患者の薬の完全なデータを記録できます。
  ***患者記録管理**：患者の記録管理のための完全なモジュールがあります。ユーザーは、新しい患者の詳細を記録し、薬、報告、訪問などの完全な病歴に対して患者を認めています。
  ***カスタマイズされた請求システム**：このオープンソースのヘルスケアソフトウェアには、豊富な請求システムがあります。ユーザーは、ラボの価格、病棟料金、イメージング価格などの完全な詳細を備えた請求書を生成および管理できます。
  ***電子医療記録**：このオープンソースの医療ソフトウェアは、医療および管理記録を維持するために必要なすべてのモジュールを提供します。
  ***柔軟な**：HospitalRunは柔軟で拡張可能であるため、開発者は機能を拡張して必要な機能を満たすことができます。

## HospitalRunのインストール手順？   {#steps}
ブログ投稿のこのセクションでは、HospitalRunのインストール手順について説明します。
開始する前に、最初に次の前提条件をインストールします。
  * [Docker][6]
  * [docker-compose][7]
前提条件がインストールされたら、この[リンク][8]からソースコードをダウンロードします。
その後、端末を開き、次のコマンドを実行します。
CDジェネリック
CDサーバー
次に、\ `conf/initcouch.sh \`の行8,9のパスワードを変更し、_config-demo.js_の行7のパスワードを変更します。
次に、次のコマンドを実行して、ビルドを作成してアプリケーションを実行します。
_docker-compose build && docker-compose up_
その後、下の画像に示すように、Dockerコンテナがスピンアップします。

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="病院管理システム">}}

最後に、http：// localhost/#/loginのブラウザでこのヘルスケアソリューションにアクセスできます。次のログイン画面が表示されます。

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="病院管理システム">}}


## 結論 {#conclusion}
これがこのチュートリアル記事の終わりです。この患者記録システムは、**ヘルスケアサービス**を自動化するのに本当に役立ちます。最新のオープンソース病院管理システムには、医療従事者がより良い医療施設のために必要な行動をとるのに役立つデータ分析ツールが搭載されています。このブログ投稿は、病院/診療所用のeHealthシステムを真剣に展開しようとしている場合に本当に役立ちます。これらのオープンソースソリューションは、ラボや他の診療所と統合されているため、費用対効果が高く、すべてのプロセスをコンピューター化することで書類を最小限に抑えます。オープンソースのヘルスケアソリューションにより、ユーザーは患者の薬、退院、レポート、請求管理など、すべてのヘルスケア業務のビジュアルを持つことができます。さらに、リソース計画やリスク評価など、他の重要なタスクに焦点を当てることができます。ただし、以下の「探索」セクションに記載されている病院向けの他の多くのエンタープライズレベルソフトウェアがあります。
最終的に、****[containerize.com][9] **** は、さらにオープンソース製品を書くことを目的としています。したがって、最新のアップデートについては、この[ヘルスケアテクノロジー][10]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  * [openemr][11]
  * [OpenMrs][12]
  * [HospitalRun][13]
  * [オープン病院][14]
  * [solismed][15]
  * [2021年にオープンソースソフトウェアを選択する前にレビューすること][16]
  * [メディカルレコードマネージャー病院の探索を特徴とする][17]
  * [トップ5オープンソース患者の健康記録ソフトウェア][18]
  * [医療健康ソリューションの探索を特徴とするOpenemr][19]
  * [localhostでeHealth System HospitalRunをセットアップする方法][20]
  * [オンラインヘルスケアソフトウェアがヘルスケア業界を支援する方法][1]

  
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/ja/how-to-install-hospitalrun-hospital-management-system/
