---
title: "GitHubアクションチュートリアル|最初のワークフローを自動化します" 
seoTitle: "GitHubアクションチュートリアル|最初のワークフローを自動化します" 
description: "このgithubアクションチュートリアルに従って、githubアクションを使用してリポジトリからソフトウェア開発ワークフローを自動化および実行するにはどうすればよいかを調べてください。" 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHubは、継続的な統合＆amp;をセットアップできるGithubアクションを導入しました。 githubリポジトリに右の構成ファイルを使用した継続的な展開。" 
url: /ja/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## Githubは、GitHubリポジトリの構成ファイルを使用して継続的な統合と継続的な展開をセットアップできるGitHubアクションを導入しました。

{{< figure align=center src="images/github-actions-workflows.png" alt="GitHubアクションチュートリアル">}}


## 概要
ソフトウェアプロジェクトで生産性を向上させる最良の方法の1つは、マニュアルや繰り返しを自動化することです。そして、** githubアクション**のような素晴らしいツールを使用するとき、自動化がどれほど簡単であるかに驚くかもしれません。最後のいくつかの記事以来、[git][1]、[バージョンコントロール][1]、[ソフトウェア開発ワークフローの自動][2]、および[継続的統合と継続的な配信][3について書いています[3 ]。したがって、今では、あなたはリポジトリとそれらの使用方法をよく知っていることを願っています。
今日の** githubアクションチュートリアル**では、GitHubアクションを調査し、アプリケーションの自動化、カスタマイズ、およびリポジトリでソフトウェア開発ワークフローを実行するために使用する方法を調査します。それでは、始めましょう
  *** [CI/CDワークフローをレビュー][4] **
  *** [githubアクションとは][5] **
  *** [YAML構文の理解][6] **
  *** [最初のワークフローの作成][7] **
  *** [結論][8] **

## CI/CDワークフロー{#CICD}
CI/CDは、自動化の助けを借りて、さまざまな段階のエンドユーザーにソフトウェア開発プロジェクトを頻繁に展開する方法です。 **継続的な統合と継続的な展開**は、より頻繁かつ確実にコードの変更を提供するために、DevOpsチームが実装するための哲学であり、ベストプラクティスの1つです。
**継続的な統合**は、開発チームがコードを頻繁にバージョン制御リポジトリにチェックインすることを奨励する一連のプラクティスです。また、リポジトリへのプッシュごとに、一連のスクリプトを作成して、アプリケーションを自動的に構築およびテストすることができます。これらのスクリプトは、アプリケーションにエラーを導入する可能性を減らすのに役立ちます。
**継続的な展開**は、CI/CDワークフローの一歩先を行っています。コードの変更がコードベースにプッシュされるたびに、アプリケーションを構築およびテストするだけでなく、アプリケーションもサーバーに継続的に展開されます。

## githubアクションとは{#github-actions}
このGitHubアクションチュートリアルのセクションでは、** Githubアクション**とは何かを知るようになります。ただし、GitHubアクションは、GitHubの原因と結果のAPIです。これにより、すべてのソフトウェアワークフローを簡単に自動化できます。現在はCI/CDを使用しています。 GitHubが実行を管理しながら、あらゆるイベント（ブランチへのプッシュ、プルリクエストなど）に基づいて、任意のワークフローを設計できます。ただし、自分でアクションを書く必要はありません。 Githubには、人々が他の人によって作成されたアクションを見つけることができ、ニーズに合っていれば再利用できる組み込み市場があります。 GitHubアクションは、node.js、python、java、ruby、php、go、rust、.netなどをサポートしています。選択した言語でアプリケーションを構築、テスト、展開します。

## yaml構文{#yaml}
最初に、** githubアクション**の構文と用語に精通しましょう。
  ***ワークフロー：** GitHubアクションは、エンドツーエンドの統合と継続的な展開**機能を構築する機能を提供するため、この用語は、CIツールによってフローが実行される時点を指します。
  *** job **：この用語は、単一のワークフロー内のすべてのタスクを指します。ワークフローには複数のジョブが含まれており、障害を防ぐためにすべてのジョブが実行を完了することが必要です。
  ***ステップ：**ジョブが実行を完了するには、埋め込まれたすべてのステップを完了する必要があります。
  ***アクション：**アクションは、ステップの主要なサブセットであり、ワークフローの最小サブセットです。すべてのステップは、正常に実行される必要がある複数のアクションで構成されています。
ご覧のとおり、ワークフロー、ジョブ、ステップ、およびアクションは相互依存しており、CI/CDパイプラインを正常に完了するためにはすべての成功した実行が必要です。

## ワークフローを作成{#workflow}
ソフトウェア開発プロジェクトでは、開発チームが直面する問題の1つは、ソースコードの形式とベストプラクティスの執行です。この問題は、大規模なチームにとってより明白です。より多くの開発者が関与しており、誰もが独自の執筆コードを持っているためです。したがって、リンターパッケージの使用はチーム全体で非常に一般的です。しかし、** githubアクション**を使用すると、誰かがコードをGitHubリポジトリに押し込むたびに、実際にリナーを実施できます。
このGitHubアクションチュートリアルでは、[GitHub Super-Linter][9]アクションを使用して複数のコーディング言語を並べるワークフローを追加します。ワークフローは、スーパーリンターを使用して、リポジトリに新しいコミットがプッシュされるたびにソースコードを検証します。
GitHubのリポジトリから、**。Github/Workflows **名前付きディレクトリに新しいファイルを作成します。
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
ワークフローを実行するには、GitHubリポジトリに変更を犯してプッシュします。このプッシュイベントは、スーパーリンターワークフローをトリガーします。そして、これで、アクションのタブに移動することで、ワークフローの結果を表示できます

{{< figure align=center src="images/actions-tab.png" alt="GitHubアクションチュートリアル">}}

左側のサイドバーで、表示したいワークフローをクリックします。

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="GitHubアクションワークフロー">}}

追加したスーパーリンターワークフローは、コードがリポジトリにプッシュされるたびに実行されるたびに実行され、コードの問題を見つけるのに役立ちます。リポジトリには、異なるイベントに基づいて異なるジョブをトリガーする複数のワークフローがあります。 GitHubアクションは、アプリケーション開発プロセスのほぼすべての側面を自動化するのに役立ちます。これは、GitHubアクションの基本的な紹介にすぎませんでした。 GitHubアクションに関する詳細な知識に利用できる[リソース][10]がたくさんあります。

## 結論{#conclusion}
この** githubアクションチュートリアル**で、**継続的な統合と継続的な展開**と** githubアクション**について学びました**。また、** githubアクション**を使用してCI/CDワークフローを構築する方法も調査しました。 GitHub Actions Marketplaceのシンプルなスーパーライターワークフローを使用して、コードベースの矛盾を見つけました。今後の記事では、GitHubアクションをより深く調べます。さらに、以下の「Explore」セクションに記載されている**バージョン制御システム**に関連する他のブログ投稿を見つけることができます。
最後に、[containerize.com][11]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。したがって、定期的な更新については、[バージョン制御ソフトウェア][12]カテゴリに連絡してください。さらに、ソーシャルメディアアカウント[Facebook][13]、[LinkedIn][14]、および[Twitter][15]でフォローできます。

## 探検
次のリンクが関連する場合があります。
  * [gitlab連続展開|どのように機能しますか？][16]
  * [gitの枝を理解して学習し、リクエストをプルする][2]
  * [ソースコード管理ソフトウェア| gitとは？][17]
  * [2021年のトップ5オープンソースバージョン制御システム][18]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
