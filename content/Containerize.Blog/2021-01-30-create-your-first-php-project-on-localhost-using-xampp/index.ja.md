---
title: "XAMPPを使用してLocalHostで最初のPHPプロジェクトを作成します" 
seoTitle: "XAMPPを使用して、LocalHostで最初のPHPプロジェクトを作成します" 
description: "無料およびオープンソースのWebサーバーXAMPPを使用したWeb開発環境をセットアップします。いくつかの簡単な手順に従って、LocalHostでPHPプロジェクトを作成してテストします。" 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "無料およびオープンソースXAMPPサーバーを使用したWeb開発環境をセットアップします。いくつかの簡単な手順に従って、LocalHostでPHPプロジェクトを学び、作成し、テストします。" 
url: /ja/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## 無料およびオープンソースXAMPPサーバーを使用したWeb開発環境をセットアップします。いくつかの簡単な手順に従って、LocalHostでPHPプロジェクトを学び、作成し、テストします。

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="XAMPPオープンソースWebサーバーで最初のPHPプロジェクトを作成する">}}

XAMPPは、ライブサーバーに展開する前にPHPプロジェクトを作成、実行、テストするためのローカル環境を提供するオープンソースWebサーバーです。開発者がWebアプリをテストおよび構築するためのローカルサーバーを提供します。このブログ投稿の次のセクションについて説明します。
  * [要件] [2]
  * [XAMPPとは] [3]
  * [PHPスクリプトを作成] [4]
  * [PHPスクリプトを実行およびテスト] [5]
  * [結論] [6]

## 要件{#requirements}
  * XAMPPインストール
  *コードエディターアプリケーション
  *基本的なPHP知識
  *基本的なHTMLおよびJavaScriptの知識

## xamppとは何ですか？ {#xampp}
XAMPPは、オープンソースのWebサーバーソリューションスタックです。 Apache、MySQL、MariadB、PHP、およびPerlが含まれています。インストールと使用は非常に簡単です。そのため、最も人気のあるPHP開発環境です。 XAMPPサーバーは、PHP Webアプリ開発のための完全な環境を提供します。 XAMPPが機能していない場合は、このガイドに従ってXAMPPをインストールしてください。
[windowsのローカルホストとしてxamppとphpmyadminをセットアップ] [7]

## PHPスクリプトを作成{#PHP}
  *上記のチュートリアルをフォローしてXAMPPを既にインストールしていると仮定して、簡単なPHPスクリプトを作成してXAMPPでテストしましょう。
  *最初に編集者を開きます。プログラミングエディターがない場合は、メモ帳を開くだけです。
  *次のコードを入力します
```
<?php
echo "This is my first PHP project";
?>
```
  *右上隅にある「ファイル」をクリックします。
  * [AS SAVE]ボタンを押します。
  *拡張機能「.php」で名前を入力します。
  *「タイプとして保存」の場合、「すべてのファイル（\*。\*）」オプションを選択します。
  *そして最後に「保存」ボタンを押します。

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="XAMPPオープンソースWebサーバーで最初のPHPプロジェクトを作成する">}}


## 実行およびテストphpスクリプト{#test}
  *このPHPスクリプトをXAMPPインストール内のHTDOCSフォルダーにコピーします。ほとんどのhtdocsフォルダーはここにあります：c：\ xampp \ htdocs
  *ブラウザを開きます。
  * localhost/my \ _first \ _php_project.phpに移動します

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="XAMPPオープンソースWebサーバーで最初のPHPプロジェクトを作成する">}}

おめでとう！最初のPHPプロジェクトを作成しました。

## 結論{#conclusion}
最初のWebプロジェクトを作成することは、初心者にとって常に非常にエキサイティングです。最初のダイナミックスクリプトを設計し、それを実行してブラウザで動作するのを表示すると、気持ちがいいです。このシンプルなガイドが、XAMPPオープンソースWebサーバーを使用して最初のPHPプロジェクトの作成と実行に役立つことを願っています。

## 探検
XAMPPとPHPMyAdminの詳細については、次のガイドをチェックアウトしてください。
[windowsのローカルホストとしてxamppとphpmyadminをセットアップ] [7]
[PHPおよびPERL開発者向けの無料のWebサーバーソリューションスタック] [1]
[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
