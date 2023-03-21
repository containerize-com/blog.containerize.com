---
title: "Apache vs nginx |アパッチとは何ですか？ | nginxとは何ですか？" 
seoTitle: "Apache vs nginx |アパッチとは何ですか？ | nginxとは何ですか？" 
description: "この記事は、Apache vs Nginxの比較に関するものです。どちらのWebサーバーもオープンソースで構成可能であり、世界のインターネットトラフィックの半分以上を処理します。" 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "Apacheはプロセス駆動型アプローチを使用し、Nginxはイベント駆動型アプローチを使用してユーザー要求を処理します。 ApacheとNginxの違いを調査しましょう。" 
url: /ja/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apacheはプロセス駆動型アプローチを使用し、Nginxはイベント駆動型アプローチを使用してユーザー要求を処理します。 ApacheとNginxの違いを調査しましょう。

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs Nginx">}}


## 概要
ApacheとNginxは多くの資質を共有していますが、それらは完全に交換可能と見なされるべきではありません。両方のオープンソースWebサーバーは互いに異なり、Webアプリケーションのニーズに応じて選択する必要があります。この記事では、**apache vs nginx** 比較について詳しく説明します。
  * [アパッチとは？][1]
  * [nginxとは？][2]
  * [apache vs nginx比較][3]
  * [nginxはapacheよりも優れています][4]
  * [結論][5]
  * [探検][6]

## Apacheとは何ですか？   {#whatisapache}
Apache Webサーバーは、インターネット上で最も人気のあるサーバーの1つであり、27％以上のWebサイトにサービスを提供しています。 Apacheは、その柔軟性、パワー、広範なサポート、および詳細なドキュメントのために、主に開発者の最初の選択肢です。動的にロード可能なモジュールをサポートし、開発者が機能を簡単に拡張できるようにします。

## NGINXとは何ですか？   {#whatisnginx}
この記事は、Apache vs Nginxの比較に関するものです。両方のWebサーバーはオープンソースで構成可能であり、世界のインターネットトラフィックの半分以上を処理します。

## apache vs nginx比較 {#apachevsnginx}
このセクションでは、サポート、ドキュメント、コンテンツタイプ、および構成構造に基づいて、ApacheとNginxを比較しましょう。

#### 建築
Apacheは、複数のサーバープロセスを開始して、ブート時間にワークロードを共有します。親プロセスと多くの子プロセスがあります。各子プロセスは、着信要求を処理するサーバースレッドを作成する責任があります。 Apacheは、マルチプロセスモジュールを使用して、子供のプロセスを割り当ててリクエストを受け入れ、ネットワークポートを結合します。それどころか、Nginxはイベント主導のアーキテクチャを備えています。 Nginxには、ポートバインディングと構成の読み取りを制御するマスタープロセスがあります。マスタープロセスは、Nginxサーバーがより効率的にリソースを使用できるようにするApacheとは異なり、予測可能なプロセスモデルに従ってサブプロセスを作成します。新しい要求ごとに、Nginxはイベントを開始し、小さなプロセスメモリのみを占めるファイル記述子を作成します。これにより、NginxはApacheよりもスケーラブルになります。 Apacheは、接続ごとにはるかに多くのプロセスメモリを消費します。

#### モジュール
ApacheとNginxの両方に、コア機能を拡張または変更するためにモジュールを使用する機能があります。モジュールの実装はApacheとNginxの両方で異なり、主な違いはモジュールの負荷です。 Apacheの場合、モジュールは必要な場合にのみ動的にロードされます。それどころか、Nginxモジュールはコアに統合され、必要でなくてもブートにロードされます。その意味で、Apacheは、Nginxと比較して、開発者にとってよりカスタマイズ可能なプラットフォームです。これは、柔軟性に関する限り、ユーザーにとっては制限ですが、肯定的な注意点として、動的モジュールがセキュリティ上の懸念を引き起こす可能性があるため、セキュリティの向上を意味します。

#### サポートとドキュメント
サポートとドキュメントに基づいてそれが長い間市場に出ていたので、Apacheはここで明確な勝者です。 Apacheサーバー用の利用可能なドキュメントの大きなライブラリがあります。それに比べて、Nginxはそのパフォーマンスとリソースの利用により人気が高まっているため、サポートとドキュメントが急速に成長しています。

#### static vs動的コンテンツ
Apacheは、独自に静的コンテンツと動的コンテンツの両方を提供します。一方、Nginxには動的なコンテンツを提供する機能がないため、これらの要求をサードパーティソフトウェアに渡します。 Apacheサーバーは、従来のファイルベースの方法を使用して静的コンテンツを処理します。

#### ファイル対URIベースの解釈
Apache Serverには、リクエストをファイルシステム上の物理リソースとして、またはURIの場所として解釈する機能があります。一方、Nginxは、Webサーバーとプロキシサーバーの両方としても機能するように設計されています。これらの2つの役割に必要なアーキテクチャのため、主にURISで動作し、必要に応じてファイルシステムに翻訳します。 NginxはFilesystemディレクトリの構成を指定せず、代わりにURI自体を解析します。

#### 構成
Apacheは、開発者が.htaccessと呼ばれるファイルを使用してディレクトリレベルで構成を設定できるようにします。しかし、Nginxの場合、ディレクトリレベルで構成を設定するメカニズムはありません。 Apacheは、構成の観点からNginxよりも柔軟性を提供します。

## nginxはapacheよりも優れていますか？   {#nginx}
Nginxは、静的コンテンツを提供するためにApacheよりも高速です。したがって、Webアプリケーションが多くの静的コンテンツを提供する場合、はいNginxはApacheよりも優れています。動的なコンテンツに関する限り、両方のWebサーバーはほぼ同じパフォーマンスを提供するため、ここには明確な勝者はいません。 ApacheとNginxの両方がほぼすべてのオペレーティングシステムで実行されますが、WindowsでのNginxのパフォーマンスはApacheのパフォーマンスと比較してそれほど良くありません。オペレーティングシステムはUNIXのようなシステムであり、Webアプリケーションがパフォーマンスクリティカルである場合、ええ、NginxはApacheよりも優れています。

## 結論 {#conclusion}
ApacheとNginxの両方は、独自の方法で能力があります。 Apache vs nginxの比較、Apacheとは何か、Nginxとは何か、ApacheとNginxの違いについて説明しました。これら2つの最も人気のあるWebサーバーから1つを選択することは、Webアプリの要件に完全に依存します。選択は、パフォーマンス、リソースの利用、速度、スケーラビリティ、およびWebサーバーのサポートを含む期待に依存します。どちらにも独自の利点があります。すべてのサイズのWebサーバーはありませんので、目標と期待に最適なソリューションを使用してください。
最後に、[containerize.com][7]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。したがって、定期的な更新については、[オープンソースWebサーバー][8]カテゴリに連絡してください。さらに、ソーシャルメディアアカウント[Facebook][9]、[LinkedIn][10]、および[Twitter][11]でフォローできます。

## Explore   {#explore}
次のリンクが関連する場合があります。
  * [2021年のトップ5オープンソースWebサーバーソリューションスタック][12]
  * [windowsのlocalhostとしてxamppとphpmyadminをセットアップ][13]
  * [xampp |無料およびオープンソースWebサーバーソリューションスタック][14]
  * [nginx |軽量で高性能のWebサーバー][15]
  * [Ubuntu 18.04のLEMPスタックのセットアップチュートリアル][16]

  
[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
