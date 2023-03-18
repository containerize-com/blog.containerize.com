---
title: "Mauticでマルチテナンシーを実装する方法" 
seoTitle: "Mauticでマルチテナンシーを実装する方法" 
description: "Mauticは、オープンソースのマーケティングオートメーションソリューションです。 Mauticにマルチテナンシーを実装すると、コストが削減され、効率とセキュリティが向上します。" 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Mauticでマルチテナンシーを実装することにより、コストを節約し、リソースの使用を最大化します。マルチテナンシーは、コードのカスタマイズ、アプリの更新、生産性の向上、メンテナンスの容易に役立ちます。" 
url: /ja/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Mauticでマルチテナンシーを実装することにより、コストを節約し、リソースの使用を最大化します。マルチテナンシーは、コードのカスタマイズ、アプリの更新、生産性の向上、メンテナンスの容易に役立ちます。

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Mauticでマルチテナンシーを実装する方法">}}

Mauticは無料でオープンソースのマーケティング自動化ソリューションで、マーケティングメール、ランディングページ、ワークフロー、マーケティングアクティビティの測定値を完全に制御できます。このチュートリアルの次のセクションについて説明します。
  * [マルチテナンシーとは] [1]
  * [Mauticとは] [2]
  * [Mauticにマルチテナンシーを実装] [3]
  * [結論] [4]

## マルチテナンシーとは{#multi-tenancy}
マルチテナントソフトウェアアーキテクチャでは、ソフトウェアアプリケーションの単一のインスタンスが複数のテナントにサービスを提供します。各テナントデータは、同じアプリケーションインスタンスを共有する他のテナントから分離されています。これらのテナントは論理的に分離されていますが、物理的に統合されています。これにより、すべてのテナントのデータセキュリティとプライバシーが保証されます。単一のアプリケーションインスタンスから複数のテナントを作成するには、メモリがはるかに少なくなります。テナントは、ソフトウェアメンテナンス、インフラストラクチャ、およびデータセンターの操作のためのリソースを共有し、コストを削減します。コストは、単一テナントのインフラストラクチャのコストよりも低い傾向があります。

## mautic {#mautic}とは
[Mautic] [5]は、無料でオープンソースのマーケティングソフトウェアです。 Mauticを使用して、マーケティングキャンペーン、リード生成、連絡先セグメンテーションなどの繰り返しマーケティングタスクを自動化します。リードジェネレーション、キャンペーンの構築、連絡先セグメンテーション、電子メールビルダー、A/Bテスト、ページビルダー、リード育成などを含む驚くべき機能があります。 Mauticは、人気のあるすべてのソーシャルプラットフォームとの統合もサポートしています。 Facebook、Twitter、LinkedIn。これらの信じられないほどの機能はすべて、全体的な顧客体験を後押しし、ビジネスのマーケティング自動化を改善するのに役立ちます。

## mautic {#implement}にマルチテナンシーを実装する
  *「main_db」という名前の新しい空のデータベースを作成します。
  *次に、すべてのテナントの詳細を保持する「テナント」という名前のテーブルを作成します。
  *図に示すように、サイト\ _name、url、db \ _nameを含む3つのフィールドがあります

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Mauticでマルチテナンシーを実装する方法">}}

  *その後、mautic/app/paths.phpファイルを開いて、このコードを追加します。
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  *これにより、URLパスに基づいて対応する構成ファイルが選択されます。
  *次に、現在のMauticインストールのデータベースをコピーし、新しいテナントに使用します。
  *その後、mautic/app/config/local.phpのコピーを作成し、[site_name] .phpに変更します。
  *最後に、新しいデータベースに従ってデータベース名、ホスト、パスワード、ユーザーを更新します。

## 結論{#conclusion}
Mauticは、無料で豊富な、豊富な、品質指向のマーケティング自動化ソリューションです。これにより、マーケティングキャンペーン、セグメント、フォーム、レポートなどを作成できます。 Mauticでマルチテナンシーを実装すると、コストが削減され、効率、スケーラビリティ、セキュリティが向上します。たった1つのインストールから何百ものテナントを簡単に作成できます。

## 探検
MauticとFacebookの詳細については、ご覧ください。
  * [Mautic |オープンソースコンテンツマーケティングテクノロジープラットフォーム] [5]
  * [キャンペーンビルダーを使用したモーティックキャンペーンをセットアップする方法] [6]
  * [鉛養育を自動化するためのDrupal Mautic統合] [7]
  * [MauticとWoocommerceの統合によるマーケティングオートメーション] [8]
  * [デジタルマーケティングの自動化のためにMautic＆Joomlaを統合] [9]
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
