---
title: "Prestashopモジュールを作成するための初心者ガイド" 
seoTitle: "Prestashopモジュールを作成するための初心者ガイド" 
description: "Prestashopは、オンラインストアをセットアップするための効率的で費用対効果の高いオープンソースeコマースソフトウェアです。 Prestashopアドオンは、所有者が機能を拡大するのに役立ちます。" 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Prestashopモジュールは、ショップの機能を改善できる小さなプログラムです。このチュートリアルで基本モジュールを構築する方法を学びます。" 
url: /ja/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Prestashopモジュールは、ショップの機能を改善できる小さなプログラムです。このチュートリアルで基本的なモジュールを構築する方法を学びます。

{{< figure align=center src="images/prestashop-module.png" alt="Prestashopモジュール">}}

** Prestashop **は、100％無料でオープンソースのeコマースソフトウェアです。これにより、店主はオンラインプレゼンスを簡単に設定し、ビジネスを大規模にスケールアップすることができます。 Prestashopにはデフォルトの機能が搭載されており、ビジネス要件のために時々より多くの機能が必要になります。 Prestashopのマーケットプレイスは、ストア機能を拡大するために使用できるアドオン機能を見つけるのに最適な場所です。さらに、市場で無料モジュールと有料モジュールの両方を見つけることができます。ただし、カスタムモジュールもゼロから作成できます。
以下のトピックについて詳細に説明します** Prestashopモジュール**を作成します。
  * [要件][1]
  * [モジュール開発の基本][2]
  * [Prestashopモジュールを作成][3]
  * [結論][4]

## 要件{#req}
  * Prestashop 1.6以上をインストールします。
  * Prestashopに精通しています。
  * PHPの理解。

## モジュール開発の基本{#basics}
コーディングを開始する前に、** Prestashopモジュール開発**のコアコンセプトについて知ることが本当に重要です。これにより、モジュールをすばやく構築および管理できます。
**構成**  - 構成を使用すると、モジュール固有のテーブルを必要とせずにショップデータベースにデータを保存できます。構成テーブルには、どこからでもアクセスできるキー値プロパティのリストが含まれています。
**フック**  - フックは、特定のPrestashopイベントをコードに接続する方法です。フックを使用して、ページにコードを配置し、特定のイベントで電子メールを送信するなどの特定のアクションを使用できます。
**ウィジェット**  - モジュール開発者は、ウィジェットを使用して、必要に応じてコンテンツを表示します。
** Doctrine **  -  Doctrine is ormでは、オブジェクトを介してデータベースデータを管理できます。これにより、簡単な通話で挿入/更新アクションを実行できる抽象レイヤーが提供されます。

## Prestashopモジュールを作成{#create}
  *** myfirstmodule ** in **モジュール** Prestashopインストールのディレクトリという名前のモジュールディレクトリを作成します。すべてのファイルをモジュールディレクトリに配置します。
  *名前** myfirstmodule.php **でメインファイルを作成し、次のコードをコピーします。
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
  *[install（）** and ** uninstall（）**メソッドを作成します。 ** myfirstmodule.php **ファイルに次の方法を追加します。
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  *登録されたフックをアクティブにするための特別な方法を呼び出します。これらの方法を使用して、「Hello World！」を表示します。サイドバーへのテキスト。 ** myfirstmodule.php **ファイルに次のコードを追加します。
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
  *最後に、管理者セクションを開き、アップロードして** Prestashopモジュール**をインストールします。

## 結論{#conclusion}
このチュートリアルで** Prestashopモジュール**を構築するためのコアコンセプトについて説明しました。さらに、より多くのアドバンスモジュールの出発点として使用できる基本的なモジュールを開発しました。 [containerize.com][5]は、新しいチュートリアルブログ投稿に一貫して取り組んでいます。最新の更新については、[ショッピングカートソフトウェア][6]カテゴリにご連絡ください。

## 探検
** Prestashopモジュールの作成チュートリアル**に加えて、次のリンクが役立ちます。
  * [Prestashop  - 無料のショッピングカートソフトウェア][7]
  * [2020年のトップ5オープンソースショッピングカートソフトウェア][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
