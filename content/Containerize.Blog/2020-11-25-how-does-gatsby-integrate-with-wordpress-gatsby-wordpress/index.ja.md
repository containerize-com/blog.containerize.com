---
title: "GatsbyはWordPressとどのように統合しますか？ |ギャツビーワードプレス" 
seoTitle: "GatsbyはWordPressとどのように統合しますか？ |ギャツビーワードプレス" 
description: "Gatsby WordPressを一緒に使用して、ウェブサイトのスピード、スケーラビリティ、セキュリティを向上させます。このチュートリアルでは、これらのオープンソースソフトウェアの使用方法を学びます。" 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "WordPressでオープンソースGatsbyを構成して、ユーザーエクスペリエンスと全体的なパフォーマンスをもたらします。この静的サイトジェネレーターの使用方法を学びましょう。" 
url: /ja/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## WordPressでオープンソースGatsbyを構成して、ユーザーエクスペリエンスと全体的なパフォーマンスをもたらします。この静的サイトジェネレーターの使用方法を学びましょう。

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="ギャツビーワードプレス">}}


## 概要
Gatsbyjsは、無料でオープンソースのReactベースのGraphQL搭載の静的サイトジェネレーターです。強力な事前構成を使用して、非常に高速なページロードに静的ファイルのみを使用するWebサイトを構築します。 WordPressは、優れたオープンソースブログプラットフォームです。その結果、サイトがWordPressサイトであるかどうかを把握する方法を知っている人がたくさんいます。 Gatsby WordPressを一緒に使用すると、WordPressコンテンツ管理とギャツビーの速度と同じ力が得られます。
この記事では、Gatsbyとは何か、CMSソフトウェアで使用する必要がある理由について説明します。次に、WordPressとGatsbyを一緒に使用して素晴らしいWebサイト体験を構築する方法について詳しく説明します。はじめましょう！
  *[**ギャツビーとは**？] [1]
  *** [WordPressとGatsbyを使用する長所と短所] [2] **
  *** [WordPressでギャツビーの使用方法] [3] **
  *** [結論] [4] **

## ギャツビーとは{#gatsby}
Gatsbyは静的サイトジェネレーターです。これは、GatsbyがWebサイトのサーバーにアップロードされる静的HTMLファイルを生成することを意味します。訪問者がサイトに着地するとき、これらの静的ファイルは、一般的に機能する動的なコンテンツの代わりに、ブラウザに提供されます。これは、開発者が燃えるようなウェブサイトやアプリを構築するのに役立つReactに基づいた無料でオープンソースのフレームワークです。

## WordPressとGatsbyを使用する長所と短所{#Proscons}
ギャツビーの公式[文書] [5]によると、彼らはテーブルを編集しました。彼らはギャツビー・ワードプレスの組み合わせが素晴らしく、そうでない人です。簡単になるために、私はそれらをここにリストしています。
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPressとGatsbyは素晴らしいです
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        WordPressコンテンツの編集体験に満足しているコンテンツチーム
{{_LINE_31_}}
{{_LINE_32_}}
        人気のあるオープンソーステクノロジーを使用して大切な開発チーム
{{_LINE_34_}}
{{_LINE_35_}}
        WordPressに既に保存されているコンテンツを含むサイトの再設計
{{_LINE_37_}}
{{_LINE_38_}}
        データとハイテクスタックを所有したいチーム
{{_LINE_40_}}
{{_LINE_41_}}
        複雑なアクセス制御ワークフローまたはコンテンツモデリングの制限
{{_LINE_43_}}
{{_LINE_44_}}
        セキュリティが重要なプロジェクト
{{_LINE_46_}}
{{_LINE_47_}}
        パフォーマンスが最重要である高い需要プロジェクト
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPressとGatsbyはあまり良くありません
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        WordPress UIテーマの使用を必要とするチーム
{{_LINE_59_}}
{{_LINE_60_}}
        完全に管理されたクラウドCMSを探している人
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
これらの公式ポイントに加えて、Gatsby WordPressを一緒に使用することの長所と短所をリストアップしたいと思います
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      長所
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        より速い負荷速度 - 静的なWebサイトは、動的よりも速くロードされます。その結果、ページの読み込み速度とSEOランキングに影響を与えます。
{{_LINE_75_}}
{{_LINE_76_}}
        サーバーのコストが少ない - 静的ファイルには特別なソフトウェアは必要ないため、静的HTMLページも安価なサーバーから提供できます。
{{_LINE_78_}}
{{_LINE_79_}}
        より安全な - 静的サイトの場合、部品の移動コンポーネントはありません。したがって、ハッカーがソフトウェアを悪用する機会はありません。
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      短所
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        学習曲線 - 開発者に追加のスキルが必要です。 ReactjsやGraphQlの学習のように
{{_LINE_93_}}
{{_LINE_94_}}
        静的コンテンツのみ - 動的コンテンツを提供する必要がある場合。その後、ギャツビーはあなたのためではありません。静的ファイルのみをサーバーできます。したがって、データベースからデータを取得するコメントシステムはありません。
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## WordPressでギャツビーの使用方法{#howto}
Gatsbyをインストールする前に、Webサイト環境に[nodejs] [6]および[npm] [7]をインストールする必要があります。

### ステップ1  - ギャツビーをインストールします
```
npm install -g gatsby-cli
```
このコマンドは、インストーラーを自動的に実行します。 Gatsbyをインストールする前に、すべての依存関係をダウンロードしてインストールします。それが完了したら、最初のGatsby Webサイトの作成を開始できます。
```
gatsby new gatsby-site
```
これにより、ギャツビーのスターターテンプレートをダウンロードして、ディレクトリ/ギャツビーワードプレスに配置します。インストールが完了したら、サイトの開発バージョンを開くことができます
```
gatsby develop
```
次に、Webブラウザで、_http：// localhost：8000_を入力し、デフォルトのテンプレートを開く必要があります。

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Gatsbyスターターテンプレート">}}


### ステップ2  - ギャツビーをWordPressに接続します
Gatsby WordPressガイドのこのセクションでは、この静的サイトジェネレーターをWordPressに接続します。基本的な静的Webサイトがありますが、WordPressと統合する必要があります。これにより、GatsbyサイトにWordPressブログのアドレスに向けられているため、開発サーバーを実行するときに最新のデータをプルできるようになります。接続されると、Gatsbyは現在のテンプレートに基づいて静的Webサイトを構築します。
NPMリポジトリからGatsbyソースWordPressプラグインをインストールします。
```
npm install gatsby-source-wordpress
```

### ステップ3  -  Gatsbyを構成します
_gatsby-config.js_ファイルに次のコードを入れます
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
このコードを更新して、WordPress Webサイトを指すようにします。ウェブサイトがローカルでホストされている場合、baseurlの後、_localhost：8888/wordpress_を使用することができます。ファイルを保存した後、ページテンプレートを作成する必要があります。

### ステップ4  - ページテンプレートを構築します
ビルディングページテンプレートでは、このサイトジェネレーターがWordPress Webサイトのすべてのページの投稿を生成できます。ソースプラグインは、これらのページのWordPressから必要なデータをプルしますが、デザインテンプレートを作成する必要があります。
_gatsby-node.js_ファイルで、次のコードを追加します
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
すべてのデータを呼び出した後、Gatsbyは各投稿のページを生成します。開発コマンドを使用して、生成されたURLを使用して、新しいページごとにナビゲートできます。

## 結論{#conclusion}
このGatsby WordPressチュートリアルでは、WordPressからGatsby Webサイトを生成する方法について説明しました。これら2つのオープンソースソフトウェアの長所と短所は何かを学びました。また、ギャツビー開発環境からインストールして始める方法についても取り上げました。
最後に、[containerize.com] [8]は、さらなるオープンソース製品に関する記事を書いています。したがって、定期的なニュースと更新については、オープンソース[ブログ] [9]プラットフォームカテゴリと連絡を取り合ってください。
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
