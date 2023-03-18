---
title: "Osticketプラグインの開発方法|ソフトウェアをヘルプします" 
seoTitle: "Osticketプラグインの開発方法|ソフトウェアをヘルプします" 
description: "このチュートリアルに従って、Osticketプラグインの開発方法を学びます。これにより、顧客コミュニケーションを管理し、問題解決を自動化します。" 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Osticketプラグインを作成して、Osticketインストールに機能を追加します。このオープンソースのチケットシステムは、企業が顧客を効率的に処理するのに役立ちます。" 
url: /ja/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Osticketプラグインを作成して、Osticketのインストールに機能を追加します。このオープンソースのチケットシステムは、企業が顧客を効率的に処理するのに役立ちます。

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="ソフトウェアをヘルプします">}}


## 概要
[ヘルプデスクチケットソフトウェア] [1]のシリーズの別の興味深いブログ投稿へようこそ。 [人気のある無料チケットベースのヘルプデスクおよびカスタマーケアシステム] [2]、[WordPressとOsticketを使用した自動チケットシステム] [3]などのトピックに関するいくつかのブログ投稿を公開しました。ただし、Osticketは、顧客がスタッフをサポートするためにクエリと苦情を報告するために設計されたオープンソースのチケットベースのヘルプデスクシステムです。この無料サポートシステムは、電話、電子メール、フォームからの問い合わせをWebベースのチケットに変換する簡単な使用可能なお問い合わせモジュールを提供します。サポートスタッフが顧客に信じられないほどのクライアントサポートエクスペリエンスを提供できるようにする幅広い機能とオプションを提供します。
このオープンソースチケットシステム（Osticket）は、クライアント、ページ、通知に送信されるメッセージなど、クライアントサポートエクスペリエンスのすべての部分を調整するための多数のオプションを提供する完全に柔軟なサポートチケットフレームワークです。彼の記事では、Osticketプラグインの開発を学び、ニーズに応じて機能を強化します。そのために、次のトピックについて説明します。
  * [なぜプラグインを使用するのか？] [4]
  * [要件] [5]
  * [Osticketのプラグインを開発する方法？] [6]
  * [結論] [7]

## なぜプラグインを使用するのですか？ {#なぜ}
このトピックでは、この**ヘルプデスクソフトウェア**（Osticket）のコア機能を拡張するためのシンプルなプラグインを作成する方法を学びます。プラグインはソフトウェアであり、アプリ/ソフトウェアのコア機能を拡張します。さらに、機能を拡張するプラグインの膨大なスタックを備えた多くのエンタープライズレベルのオープンソースソフトウェアがあります。さらに、これらの一般的なオープンソースソフトウェアには、WordPress、Joomlaなどが含まれます。何よりも、活気に満ちた生きているコミュニティは、ニーズに応じてプラグインをサポートおよび開発します。ただし、フレームワークは、プラグインの開発に関する包括的なドキュメントを提供します。以下は、アプリがプラグインをサポートするいくつかの理由です。
  *サードパーティの開発者は、アプリケーションの機能を拡張するソフトウェアコンポーネントを作成できます。
  *プラグインを使用すると、新機能を簡単に統合できます。
  *また、アプリケーションのサイズと複雑さを高めることはありません。
  *開発者は、コアアプリケーションとは別にプラグインのコードを維持および管理できます。

## 要件{#requirements}
** It HelpDeskソフトウェア**ガイドのこのセクションでは、Osticketプラグインを開発するために必要な要件について説明します。
  * PHPバージョン5.6以上
  * Osticketのインストール
  *基本的なPHP知識

## Osticketのプラグインを開発する方法は？ {#どうやって}
このセクションでは、このオープンソースチケットシステム（Osticket）のプラグイン開発の手順を進めます。
  *プラグインのフォルダーを /include /pluginsディレクトリに作成します。このチュートリアルでは、** Osticketシステム**をRedmineと統合するデモプラグインを作成します。
  *次の必要なファイル：Plugin.phpとconfig.phpが必要です。
  * Plugin.phpファイルには、プラグインの一般的な説明が含まれています。 Plugin.phpファイルで次のサンプルコードを使用してください。
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  *次に、上記のコードからID、名前、著者名、プラグインクラス名を置き換えます。
  *その後、プラグイン構成オプションをOsticketのバックエンドに表示する必要があります。次のサンプルコードをconfig.phpファイルに追加します。
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  *その結果、これにより、ここに示すように、構成ページにユーザー名とパスワードフィールドが作成されます。

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Osticketプラグインを開発するための初心者向けガイド">}}

  *以下は、利用可能なクラスフィールドのリストで、「[install_root]/include/class.forms.php`で定義されています。
      * TextBoxField  - テキストボックス
      * Textareafield  - テキストエリア
      * Threadentryfield  - ディスカッションスレッドに使用される豊かなテキストエリア
      * DateTimeField  -  jQuery DatePicker
      *電話フィールド - 電話番号用に最適化されたテキストボックス
      *ブールフィールド - チェックボックス
      * ChoiceField  - ドロップダウン選択フィールド
      *セクションブレイクフィールド - 水平セクションブレイク
  *その後、プラグインの機能が定義されるファイルを作成する必要があります。
  *ファイル名は、Plugin.phpファイルで定義されているものと同じである必要があります。つまり、redmine.php。
  *これは、クラスdynabicredminepluginを保持する必要があります。次のサンプルコードをご覧ください。
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  *このコードは構成値を取得し、機能でこれらの値を使用できます。このファイルでは、プラグインの機能を要件として追加できます。

## 結論{#conclusion}
これにより、このブログ投稿の最後になります。 Osticketは、開発者向けのプラグイン構造を提供するチケット管理ソフトウェアであるため、要件に応じて新しい機能を追加できます。プラグインは、任意のアプリ/ソフトウェアのコア機能を拡張するコンポーネントです。彼の記事では、この**カスタマーサポートシステム**（Osticket）のプラグインの開発について説明しました。これは、開発者が要件に応じてカスタム機能と拡張機能を追加するのに役立ちます。したがって、このブログ投稿は、あなたのビジネスのために** helpdeskソフトウェア**を展開しようとしている場合に本当に役立ちます。さらに、他の** helpdeskチケットソフトウェア**や、以下の「探索」セクションに記載されている記事があります。
最後に、[containerize.com] [8]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。したがって、定期的な更新については、[ヘルプデスクチケットソフトウェア] [1]カテゴリに連絡してください。さらに、ソーシャルメディアアカウント[Facebook] [9]、[LinkedIn] [10]、および[Twitter] [11]でフォローできます。

## 探検
次のリンクが関連する場合があります。
  * [uvdesk] [12]
  * [Zammad] [13]
  * [freescout] [14]
  * [ヘルディ] [15]
  * [ベストオープンソースと無料のヘルプデスクソフトウェア] [16]
  * [人気のある無料チケットベースのヘルプデスクとカスタマーケアシステム] [2]
  * [Osticketを使用してオンラインヘルプデスクソフトウェアをセットアップする方法] [17]
  * [Osticketでマルチテナンシーを実装する方法] [18]
  * [WordPressとOsticketを使用したチケットシステムを自動化] [3]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化] [19]
[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
