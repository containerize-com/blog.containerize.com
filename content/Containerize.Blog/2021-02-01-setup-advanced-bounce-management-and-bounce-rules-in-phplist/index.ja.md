---
title: "高度なバウンス管理とバウンスルールのセットアップは、PHPHPLISTでルールをバウンスします" 
seoTitle: "高度なバウンス管理とバウンスルールのセットアップは、PHPHPLISTでルールをバウンスします" 
description: "Phplistで高度なバウンス管理を有効にし、バウンスメールを処理します。バウンスルールを作成し、プロセスを自動化して、返されたメッセージでさまざまなアクションを実行します。" 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "MTAによって返されるバウンスエラーコードのタイプに応じて、Advanced Bounce Managementにより、異なるアクションの自動実行が可能になります。" 
url: /ja/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## MTAによって返されるバウンスエラーコードのタイプに応じて、Advanced Bounce Managementはさまざまなアクションの自動実行を許可します。

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="高度なバウンス管理とバウンスルールのセットアップは、PHPHPLISTでルールをバウンスします">}}

[以前][1]チュートリアルでは、すでに** phplistバウンス処理に対処していました**。バウンス処理に慣れていない場合は、読むことができます。 Bounce Processingを使用して、未配達の電子メールをPhplistプロジェクトにダウンロードできます。ダウンロードしたメールをどのように扱いますか？考えはありません。電子メールをバウンスする**を整理できるAdvant Bounce Managementをご覧ください。返されたすべての電子メールメッセージには、MTA（メール転送エージェント）によって返されるエラーコードがあります。さらに、返されたメッセージメールヘッダーを確認でき、エラーコードに沿ってすべての情報が含まれています。
  * [高度なバウンス処理を有効にする][2]
  * [バウンスルールを追加][3]
  * [バウンスルールをリスト][4]
  * [結論][5]

## Advanced Bounceハンドリングを有効にする{#Enable}
最初に、config.phpファイルのコードをコピーすることにより、アドバンスを有効にします**ハンドリング**。
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
その後、**システムに移動>バウンスの管理>バウンスルール**のリストバウンスルールを作成するために。
正規表現に基づいてバウンスルールを作成できます。 **電子メールバウンスをヘッダーに戻し、正規表現に使用する理由を見つけることができます。さらに、エラーコードまたは正規表現に基づいて適切なアクションを選択します。 Phplistは次のアクションをサポートしています。アクションステートメントは自明であるため、詳細に進む必要はありません。
  *サブスクライバーを削除します
  *未修正サブスクライバー
  *ブラックリストサブスクライバー
  *ブラックリストのメールアドレス
  *サブスクライバーとバウンスを削除します
  *未修正サブスクライバーとバウンスを削除します
  *サブスクライバーをDo-Not-Sendリストに追加し、バウンスを削除します
  *電子メールアドレスをDo-Not-Sendリストに追加し、バウンスを削除します
  *バウンスを削除します

## バウンスルールを追加{#Add}
最初のバウンスルールを作成しましょう。
  *最初に、**のような正規表現を入力します（アカウントが停止されました|アカウントは利用できません）**
  *その後、適切なアクションを選択します
  *最後に、ルールにメモ/メモを追加します

{{< figure align=center src="images/add-bounce-rule.png" alt="phplistでバウンスルールを作成します">}}

次の理由でバウンスルールを追加し、バウンスを処理するための適切なアクションを選択できます。ただし、SMTP応答を検索して、リストにさらにルールを追加できます。
  *アーカイブされた受信者
  * type = mx：ホストが見つかりません
  * 申し訳ありませんが、そのような名前のメールボックスはこちらにはありません
  *メールボックスが無効になっています
  *アカウントは無効です
  *このメールボックスは、不活性のためにブロックされています
  *ユーザー不明
  *そのような受信者はありません
  * 等々 …
**注：** 1つのバウンスルールに複数の理由を追加する場合は、括弧でバウンド理由を包み、パイプシンボル** | **または**ステートメントを使用する必要があります。

## リストバウンスルール{#List}
数のルールを作成した後、**バウンスルール**リストは、以下のスクリーンショットのように見えます。注文変更やこのページの削除など、他のアクションを実行できます。

{{< figure align=center src="images/bounce-regular-expressions.png" alt="バウンスルールのリスト">}}


## 結論{#conclusion}
このチュートリアルでは、Advanced ** Bounce Management **について学び、必要なバウンスルールを開発しました。リストから無効な電子メールアドレスをクリーニングするプロセスを自動化できるように、この機能を許可することは素晴らしいことです。また、返品された電子メールの最小レベルを維持することもできます。さらに、リストには正当な加入者がいます。
さらに、[containerize.com][6]は、複数の言語とフレームワークでオープンソース製品のスタックを強化する途中です。定期的な更新については、[Newsletters][7]カテゴリで、より興味深い記事をご覧ください。

## 探検
次のリンクが関連する場合があります。
  * [Phplist  - オープンソースニュースレターと電子メールマーケティングソフトウェア][8]
  * [phplistを使用してニュースレターを作成して送信する方法][9]
  * [phphplistでバウンスをセットアップして処理する方法][1]
  * [Phplistプラグインを開発するための初心者ガイド][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
