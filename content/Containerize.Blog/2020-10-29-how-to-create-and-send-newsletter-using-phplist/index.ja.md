---
title: "phplistを使用してニュースレターを作成および送信する方法" 
seoTitle: "phplistを使用してニュースレターを作成および送信する方法" 
description: "Phplistは、電子メールマーケティング用の主要なオープンソースニュースレターソフトウェアです。これは、ニュースレターキャンペーンを作成および送信するための初心者向けガイドです。" 
date: Thu, 29 Oct 2020 18:30:18 +0000
author: Masood Anwer
summary: "オープンソースのphplistを使用してニュースレターを作成して送信し、何百万人もの加入者にリーチします。製品の更新、プロモーション、新機能を備えたクライアントのエンゲージメントを強化します。" 
url: /ja/how-to-create-and-send-newsletter-using-phplist/
categories: ['Newsletters']
---

## オープンソースのphphplistを使用してニュースレターを作成および送信し、何百万人もの加入者にリーチします。製品の更新、プロモーション、新機能を備えたクライアントのエンゲージメントを強化します。

{{< figure align=center src="images/How-to-send-newsletter-in-phpList.png" alt="Phplistを使用してニュースレターを作成して送信します">}}

マーケティングは、オンラインまたはオフラインのビジネスの重要な部分です。電子メールマーケティングは、マーケティングのための最も簡単なツールの1つであり、多くの視聴者にメッセージを配信します。数百人のサブスクライバーに手動で電子メールを送信できますが、数千または数百万にメールを送信することは非常に困難です。そのため、自動化するために多くのオープンソースメールマーケティングツールが利用できます。
Phplistは、リストとニュースレターを管理するための最も人気のあるオープンソースソフトウェアです。このキャンペーンは、1つまたは多くのリストにメッセージを配信できるようにするPhplistのコアコンポーネントです。何百万人もの加入者にキャンペーンを設計して送信するために簡単に使用できます。 Phplistは、キャンペーン＆リストマネージャー、プラグイン、REST APIなどの印象的な機能セットを思いつきます。
このブログ投稿では、PHPHPLISTで電子メールキャンペーンの設計と送信に集中します。次のトピックについて説明します。
  * [ニュースレター/キャンペーンを作成] [2]
  * [スケジューリングキャンペーン] [3]
  * [キャンペーンにリストを割り当てる] [4]
  * [終了キャンペーン] [5]
  * [キューを処理] [6]
  * [結論] [7]

## **キャンペーン/ニュースレターを作成** {#create}
  * Phplistインストールの管理インターフェイスにログインします。 [**キャンペーンの開始または続行]ボタンをクリックするか、ダッシュボードでボタンを押すか、左側のナビゲーションでキャンペーンに基づいてキャンペーンリンクを送信します。
  * [新しいキャンペーン]ボタンをクリックします。
  *以下の画像に示すように、ライン、コンテンツ、フッターからの件名などのオプションをフィールドに入力します。

{{< figure align=center src="images/create-campaign.png" alt="Phplistのデザインニュースレター">}}


## **スケジューリングキャンペーン** {#schedule}
  *スケジューリングにより、キャンペーンを開始するときに日付を選択できます。キャンペーンは、選択した日付の前後に送信されません。
  *すぐにキャンペーンを送信したい場合は、日付を変更する必要はありません。

{{< figure align=center src="images/scheduling.png" alt="Phplistのニュースレターをスケジュールします">}}


## **キャンペーンにリストを割り当てます** {#List}
すべてのリストが[リスト]タブの下に表示されます。[適切なリスト]を選択します。キャンペーンは、リストのみを割り当てるために配信されます。ただし、リストの作成/更新中にリストをパブリックまたはプライベートにすることができます。

{{< figure align=center src="images/lists.png" alt="リストをphphplistのニュースレターに割り当てます">}}


## **仕上げキャンペーン** {#finish}
フィニッシュは、キャンペーン作成プロセスの最後のステップです。通知のメールを追加して、Google Analyticsトラッキングコードを追加できます。 **送信キャンペーン**ボタンをクリックして、サブスクライバーにメッセージの送信を開始します。これで、ニュースレターの設計とキャンペーンプロセスを完了しました。ただし、キューを処理する必要があり、次のセクションで詳細を読むことができます。

## **キューを処理** {#Queue}
プロセスキューは、キャンペーンの送信を開始するプロセスです。コマンドラインスクリプトで手動でプロセスを開始したり、Cronジョブを作成したりできます。少数のハンダー付きサブスクライバーのために手動でキューを処理するのは簡単です。しかし、数千/数百万人の加入者がいる場合、キューを処理するためにCronジョブを使用することは良いことです。情報を作成するための情報については、Phplistの公式[Webサイト] [8]にアクセスできます。

## **結論** {#conclusion}
Phplistは、電子メールマーケティングにオープンソースニュースレターソフトウェアを使用したい企業に最適なツールです。キャンペーンを設計および送信するためのプロセスを詳細に説明しました。次のニュースレターのためにそれに従って、Phplistの真の力を楽しむことができます。
最後に、いくつかのより魅力的なチュートリアルを使用して、[containerize.com] [9]はすべて、そのチュートリアルベースを強化するために設定されています。定期的な更新については、[Newsletter] [10]カテゴリに接続してください。
[1]: https://products.containerize.com/newsletter/phplist
[2]: #create
[3]: #schedule
[4]: #list
[5]: #finish
[6]: #queue
[7]: #conclusion
[8]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/newsletter/