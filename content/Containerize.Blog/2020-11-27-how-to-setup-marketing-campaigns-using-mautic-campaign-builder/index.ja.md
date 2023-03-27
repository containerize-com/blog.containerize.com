---
title: "キャンペーンビルダーを使用したMauticキャンペーンをセットアップする方法" 
seoTitle: "キャンペーンビルダーを使用したMauticキャンペーンをセットアップする方法" 
description: "Mauticでキャンペーンを構成するためのステップバイセットアップガイドと、マーケティングアクティビティのマーケティングメール、ランディングページ、ワークフローを完全に制御します。" 
date: Fri, 27 Nov 2020 09:46:58 +0000
author: bilalahmed
summary: "Mauticキャンペーンビルダーを使用してキャンペーンを簡単に作成できます。ターゲットオーディエンスを引き付け、製品について最新の状態に保ち、顧客に変換します。" 
url: /ja/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
categories: ['Marketing Automation']
---

## Mautic Campaign Builderを使用してキャンペーンを簡単に作成できます。ターゲットオーディエンスを引き付け、製品について最新の状態に保ち、顧客に変換します。

{{< figure align=center src="images/mautic.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}

この記事では、Mauticでキャンペーンをセットアップする方法を学びます。次のセクションについて説明します。
  * [Mauticとは？][1]
  * [Mauticでフォームを作成する方法？][2]
  * [Mauticでキャンペーンを作成する方法？][3]
  * [結論][4]

## Mauticとは何ですか？ {#mautic}

Mauticは、オープンソースのマーケティングオートメーションソフトウェアです。マーケティング活動のためのマーケティングメール、ランディングページ、ワークフローを完全に制御できます。ランディングページ、フォームから作成されたリードを取得し、潜在的な顧客に変換する方法を自動化します。これらはすべて、スマートドリップキャンペーンを作成することで実現できます。これにより、潜在的な顧客が製品/サービスに関して最新の状態になります。

## Mauticでフォームを作成する方法は？ {#forms}

  * MAUITCインストールにログインします。
  * [コンポーネント]タブに移動し、「フォーム」をクリックします。
* 右上隅から「新しい」をヒットします。
* 「新しいキャンペーンフォーム」オプションを選択します。このスクリーンショットに示すように、フォーム構成ページを開きます。

{{< figure align=center src="images/Mautic-Campaign-Create-Form-1024x424.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}

  * [詳細]タブにフォーム名を入力します。他のフィールドはオプションです。
* 次のタブ「フィールド」に移動します。
* ここでは、訪問者を入力したいデータフィールドを作成できます。
* ここに示すようにフィールドを作成します。

{{< figure align=center src="images/Mautic-Campaign-Forms-Form-fields-1024x525.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}

* フィールドタイプを選択し、フィールド名を入力します。
* その後、「追加」をクリックして「保存と閉じる」を押します。
* その簡単なのは、Mauticでフォームを作成することです。

## Mauticでキャンペーンを作成する方法は？ {#campaigns}

* キャンペーンに移動します。右上から「新しい」をクリックします。
* 名前を入力し、「公開」を「はい」に設定します。

{{< figure align=center src="images/Create-new-campaign-1024x437.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}

* 次に、「キャンペーンビルダーの起動」をクリックします。
* ソースとして「キャンペーンフォーム」を選択し、フォームを選択します。

{{< figure align=center src="images/Mautic-Select-campaign-source.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}

* ここで、ユーザーが最後のセクションで作成したフォームに記入するたびにトリガーされる「アクション」と「アクション」を作成します。

{{< figure align=center src="images/Mautic-Campaign-Choose-action.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}

* 次のように「電子メールを送信」イベントを選択して、フォローアップメールを送信できます。

{{< figure align=center src="images/Send-email-to-user-when-form-is-filled.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}

* フォローアップメールを構成し、メール名を入力し、「新しい電子メール」がまだない場合は「新しい電子メール」を作成します。最後に、[追加]をクリックします。

{{< figure align=center src="images/Mautic-Campaign-Configure-follow-up-email.png" alt="デジタルマーケティングのためのMauticキャンペーンをセットアップする方法">}}


## 結論： {#conclusion}

3つの非常に簡単な手順に従って、ドリップマーケティングキャンペーンをセットアップすることを学びました。キャンペーンソースとして必要なフォームの作成、キャンペーンの作成、電子メールの構成などが含まれます。このチュートリアルで非常に基本的なキャンペーンを作成しました。ただし、Mautic Campaign Builderを使用して複雑なキャンペーンを作成できます。 Mauticが初めての場合は、次のガイドを使用してインストールする方法を確認してください。
[Mauticの概要とインストール][5]

## 探検：
これらの記事は、MauticをWordPressやJoomlaと統合し、Mauticでマルチテナンシーの実装を開始するのに役立つ場合に非常に役立ちます。
[MauticとWordPress WooCommerceを使用したマーケティングオートメーション][6]
[マーケティングオートメーションのためにMauticをJoomlaと統合する][7]
[Mauticでマルチテナンシーを実装する方法][8]



 [1]: #mautic
 [2]: #forms
 [3]: #campaigns
 [4]: #conclusion
 [5]: https://products.containerize.com/marketing-automation/mautic
 [6]: https://blog.containerize.com/wp-admin/post.php?post=388&action=edit
 [7]: https://blog.containerize.com/wp-admin/post.php?post=233&action=edit
 [8]: https://blog.containerize.com/marketing-automation/how-to-implement-multi-tenancy-in-mautic/
