---
title: "メディカルレコードマネージャーHospitalRunの探索を特徴としています" 
seoTitle: "メディカルレコードマネージャーHospitalRunの探索を特徴としています" 
description: "このガイドに従って、医療記録マネージャーHospitalRunを始めましょう。これは、オープンソースであり、多言語であり、多くの重要なプロセスを自動化します。" 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "病院管理システムは、医療施設の重要な部分です。 HospitalRunは、データ制御、アクセスベースの役割、収益管理を提供します。" 
url: /ja/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## 病院管理システムは、ヘルスケア施設の重要な部分です。 HospitalRunは、データ制御、アクセスベースの役割、収益管理を提供します。

{{< figure align=center src="images/blog-banners-template-1.png" alt="医療記録マネージャー">}}


## 概要
オープンソース[ヘルスケアソフトウェア] [1]は、最近過去に非常に人気を博しています。第一に、それはテクノロジーの進歩によるものです。第二に、Covid-19はあらゆる方法で医療産業に影響を与え、オープンソースコミュニティに新しい機会を生み出しました。全世界が重要な時間を経ているとき、患者に最高品質の医療サービスを提供することが非常に重要です。幸いなことに、データの集中化、透明性、セキュリティ、統合、その他多くの強力な機能を提供するいくつかのオープンソースの健康記録管理ソリューションが利用可能です。これらの無料の医療サービスは、医師、患者、診療所、その他のスタッフなどのワークフローのスムーズな管理を提供します。最近、[containerize.com] [2]は、[トップ5オープンソース患者の健康記録ソフトウェア] [3]を含むオープンソースの病院情報管理システムに関するいくつかの記事を公開しています。 [オンラインヘルスケアソフトウェアがヘルスケア業界にどのように力を与えているか] [5]。
過去には、LocalHostで[HospitalRun] [6]のセットアップ手順について説明する記事を書きました。このブログ投稿では、以下のポイントをカバーすることにより、さらに[HospitalRun] [6]をさらに探索します。
  *** [なぜHospitalRun？] [7] **
  *** [患者とスケジューリングモジュール] [8] **
  *** [ラボの統合と薬] [9] **
  *** [イメージングとインシデント] [10] **
  *** [結論] [11] **

## なぜ病院が？ {#なぜ}
この医療記録マネージャーの人気の背後には多くの理由があります。 HospitalRunは、完全な電子健康記録と病院情報システムです。オフラインバージョンとオンラインバージョンの両方をサポートします。クリニックを統合し、データの同期を提供できます。さらに、それは多言語であり、クロスプラットフォームであり、自己ホスト機能を備えています。この患者記録システムは、患者の記録管理、予約のスケジューリング、薬、および処方管理を提供します。完全な診断の詳細を含むカスタムレポートを生成するための規定もあります。さらに、医療スタッフは患者の退院モジュールから支援を受けることができます。とりわけ、この病院管理システムは、偶発的および緊急事態の管理を提供します。安全で信頼性が高く、ユーザーフレンドリーです。ただし、この医療記録管理システムはJavaScriptで完全に記述されており、すべてのソースコードは[Github] [12]で開発と展開に関するドキュメントで入手できます。

## 患者とスケジューリングモジュール{#modules}
このセクションでは、この病院情報管理システムのダッシュボードを通過します。ログインすると、下の画像に示すように、HospitalRunのダッシュボードに着地します。

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="医療記録マネージャー">}}

右上には、2つのオプションがあります。まず、ユーザーが英語、イタリア語、トルコ語などの言語を選択できる設定。第二に、新しい患者記録、新しい予約、リクエスト薬、リクエストラボ、新しいイメージングリクエスト、およびレポートインシデントを作成するオプションがあります。

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="病院管理システム">}}

患者、スケジューリング、薬、ラボ、イメージ、左側に事件など、複数のオプションがあります。患者モジュールでは、新しい患者の記録を追加して、すでに追加されている患者のリストを見ることができます。この無料の医療記録マネージャーにより、ユーザーは、名前、住所、連絡先、患者タイプ、その他の基本的な詳細などの完全な患者記録を記録できます。患者リストには、ユーザーがリスト内の患者を検索できる検索バーもあります。さらに、スケジューリングモジュールでは、医療従事者は予約をスケジュールできます。このモジュールのインターフェイスは、下の画像に示されています。

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="病院情報管理システム">}}

インターフェイスには、予定されている予定が表示されます。さらに、ユーザーはフィルターを適用して、1日あたり、1週間、1か月あたりの予定数を確認できます。右上隅には、医療関係者が新しい任命を予約できるオプションがあります。医療関係者は、開始日、終了日、理由などの予約の詳細を挿入できます。

## ラボの統合と薬{#Lab}
このセクションでは、この無料のヘルスケアソフトウェアの2つの顕著なモジュールの機能について説明します。薬物モジュールにより、ユーザーは、ルーチン、緊急、またはASAPなどの薬物の優先順位を設定できる薬物に対してデータを追加できます。同様に、役人がフィルターで検索できる薬物リクエストリストがあります。

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="医療記録管理システム">}}

ラボモジュールでは、患者の情報、訪問、タイプを挿入することにより、医療担当者はラボをリクエストできます。それに加えて、医療従事者は追加のメモを追加できます。同様に、ユーザーが検索機能を実行できるラボリクエストオプションにはフィルターがあります。

## イメージングとインシデント{#imaging}
イメージングとは、電磁界でスキャンすることにより、何かの視覚的表現を作成することです。 Hospitlunは、イメージングレコードの管理を提供します。さらに、ユーザーは新しいイメージングリクエストを作成できるようになり、このモジュールは他のモジュールが相互にリンクされているため、患者のモジュールにリンクされます。同様に、ユーザーはイメージングリクエストのリストを見ることができます。次に、インシデントモジュールでは、職員は詳細を挿入することで事件を報告できます。したがって、ユーザーは既に報告されているインシデントのリストを見ることができます。下の画像に示すように、最後にも利用可能なインシデントのグラフィカルな表現があります。

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="健康記録管理">}}


## 結論{#conclusion}
これがこのブログ投稿の終わりです。実際、ほとんどの保健機関は手動の運用に依存しています。データのセキュリティと整合性に関して脆弱である可能性があります。ただし、自動化されたシステムにより、日常的なヘルスケア業務の基本的および最も重要な側面が確認されています。したがって、優れたオープンソースの医療記録マネージャーを設置すると、不正なソースから資産を保護し、簡単な自信を持って日常的なタスクを実行するのに役立ちます。これらのオープンソースソフトウェアは、医師、患者、診療所、ラボなどの複数のエンティティを同期し、ワークフローを簡単にします。一番下の行は、病院や診療所が最新の課題でクーデターするためにオープンソースソフトウェアを採用する時が来たということです。時間と労力を節約し、重要で重要なタスクに集中できます。
最後に、[containerize.com] [2]は、さらなるオープンソース製品に関する記事を書いています。したがって、定期的なニュースと更新については、[Healthcare Technologies] [1]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  * [openemr] [13]
  * [OpenMrs] [14]
  * [HospitalRun] [15]
  * [オープン病院] [16]
  * [solismed] [17]
  * [トップ5オープンソース患者の健康記録ソフトウェア] [3]
  * [医療ヘルスソリューションの探索を特徴とするOpenEMR] [4]
  * [localhostでeHealth System HospitalRunを設定する方法] [18]
  * [オンラインヘルスケアソフトウェアがヘルスケア業界を支援する方法] [5]
[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/