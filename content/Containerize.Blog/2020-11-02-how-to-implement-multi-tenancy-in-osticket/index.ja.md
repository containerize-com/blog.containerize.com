---
title: "Osticketカスタマイズ -  Osticketにマルチテナンシーを実装します" 
seoTitle: "Osticketカスタマイズ -  Osticketにマルチテナンシーを実装します" 
description: "Osticketにマルチテナンシーを実装すると、コストとリソースの使用率を節約できます。この記事では、マルチテナンシーを実現するためにOsticketのカスタマイズを行います。" 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "マルチテナントOsticket HelpDeskを使用すると、1つのインストールから複数のテナントを作成できます。これにより、Webサーバーリソースを最適に使用できます。" 
url: /ja/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-Tenant Osticket HelpDeskを使用すると、1つのインストールから複数のテナントを作成できます。これにより、Webサーバーリソースを最適に使用できます。

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Osticketのカスタマイズ -  Osticketにマルチテナンシーを実装します">}}

この記事では、Multi-Tenancyを実装するためにOsticketのカスタマイズを作成する方法について説明します。この投稿では、次のトピックについて説明します。
  * [Osticketの概要][1]
  * [マルチテナントの概要][2]
  * [マルチテナンシーの利点][3]
  * [実装][3]
  * [結論][4]

## osticketの概要：{#osticket}
[Osticket][5]は、オープンソースのオンラインカスタマーサポートWebベースのヘルプデスクソフトウェアです。直感的なコントロールパネルとリアルタイムレポートコンポーネントを提供します。お問い合わせ管理モジュールを簡単に使用できます。これにより、携帯電話、電子メール、Webベースのフォームから問い合わせを作成できます。これは、コメントや電子メール通知など、クライアントサポートエクスペリエンスのすべての部分を調整するのに役立つ多数のオプションを提供します。

## マルチテナントの概要：{#multitenancy}
マルチテナンシーとは、アプリの複数の独立したインスタンスが共有環境で動作する実装を指します。インスタンス（テナント）は論理的に分離されていますが、物理的に統合されています。組織には複数の部門がある可能性があります。そのため、同じアプリの複数のテナント/インスタンスを作成できます。たとえば、この場合、同じ組織の異なるドメインに対してヘルプデスクシステムを構成できます。何百ものテナントがいる可能性がありますが、それらはすべて同じファイルを使用しているため、同じストレージを使用します。これにより、ストレージコストが削減され、アップグレードが容易になります。開発者は、各サイトの変更を個別に変更するのではなく、1か所からファイルを更新するだけです。

## マルチテナンシーの利点は何ですか？ {#利点}
マルチテナンシーの重要な利点を次に示します
  ***リソースの最適化：** 1つのテナント用に予約された1つのマシンは効率的ではありません。 1人のテナントがすべてのマシンのコンピューティングパワーを使用する可能性は低いためです。マシンを共有すると、リソースの可用性が最大になります。
  ***コストの削減：**複数のテナントが同じリソースを共有している場合、各テナントが独自の専用インフラストラクチャを必要とした場合よりもはるかに低くなります。
  ***効率的なホスティング：**また、マルチテナントのOsticketは、共有環境でホスティングコストを最小限に抑えます。
  ***セキュリティ：**外の世界との相互作用が少ないため、悪意のあるソフトウェアへの露出が削減されます。
  ***簡単なアップグレード**：個別に更新する代わりに、ファイルを1か所でのみアップグレードします。これにより、多くの時間と労力が節約されます。

## マルチテナントOsticketの実装：{#Implementation}
  *「main_db」として新しい空のデータベース名を作成します。
  *次に、すべてのテナントの詳細を保持する「テナント」という名前のテーブルを作成します。
  *次のフィールドがあります。
  1. site_name
  2. URL
  3. db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Osticketのカスタマイズ -  Osticketにマルチテナンシーを実装します">}}

  *サイト\ _Nameフィールドには、テナントの名前が保持されます。 URLフィールドは、テナントの完全なURLを保持します。 DB \ _NAMEフィールドは、新しいテナント用に作成されるデータベースの名前を保持します。
  *その後、Open /include/ost-config.phpファイルと次のコードを追加します
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  *このコードは、デフォルトのデータベース接続を更新します。最初に現在のテナントのURLを取得します。その後、そのURLに従ってデータベースの名前を取得します。これが、アプリがどのデータベースに接続するかを知る方法です。すべてのテナントには別のデータベースがあります。データベースは、テナントURLに基​​づいて選択されます。
  *新しいテナントを作成するには、NGINXサーバーに新しいテナントドメインを設定するだけです。その後、現在のOsticketデータベースをコピーして名前を変更します。最後に、「main_db」データベースの「テナント」テーブルにエントリを追加します。

## 結論：{#conclusion}
Osticketは、無料でオープンソースITヘルプデスク管理ソフトウェアです。 OsticketにMulti-Tenancyを実装するためにOsticketのカスタマイズを作成して、コストを節約し、アプリを最適化し、リソース要件を削減する方法を学びました。開発者は、いくつかの簡単なステップで新しいテナントを作成することが容易になります。したがって、同じインストールから複数のOsticketテナントを作成します。

## 探検：
Osticketの詳細については、次のページをチェックアウトしてください。
  * [Osticket  - 無料のオープンソースヘルプデスクソフトウェア][5]
  * [Osticketプラグインを開発するための初心者向けガイド][6]
  * [OSTICKETを使用してオンラインヘルプデスクソフトウェアをセットアップする方法][7]
  * [WordPressとOsticketを使用したチケットシステムを自動化][8]

  
[1]: #osticket
[2]: #multitenancy
[3]: #benefits
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/osticket
[6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
