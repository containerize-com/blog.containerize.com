---
title: "ソースコード管理ソフトウェア| Gitとは何ですか？" 
seoTitle: "ソースコード管理ソフトウェア| Gitとは何ですか？" 
description: "Gitとは何ですか？ GITは、無料のソースコード管理ソフトウェアであり、録画したり、ソースファイルの変更を確認したり、プロジェクトを効率的に管理したりできます。" 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "この記事では、git＆amp;とは何ですか。 Gitの仕組みは？ GITは、ソースコード、トラック、amp;を管理するように設計されたバージョン制御システムです。ログバージョン。" 
url: /ja/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## この記事では、GitとGitの仕組みとは何かを調べますか？ Gitは、ソースコード、トラック、ログバージョンを管理するように設計されたバージョン制御システムです。

{{< figure align=center src="images/version-control-banner.png" alt="ソースコード管理ソフトウェア">}}


## 概要
プロジェクトに取り組んでいるソフトウェア開発者としてあなたを想像してください。あなたには複数の人がそれに取り組んでいます。また、ソースコードを含む単一のファイルがあります。彼らはすべてコードに変更を加えると、変更を加えるたびに異なるバージョンのファイルがあります。それでは、同じファイルの異なるバージョンをどのように管理しますか？そこで、ソースコード管理ソフトウェアが始まります。同じファイルの異なるバージョンを管理およびマージするのに役立ちます。また、変更履歴を追跡できます。そして、誰がファイルに変更を加え、それらの変更とは何かを確認することができます。
この記事では、Gitバージョン制御システムについて学びます。それを使用して、ソフトウェア開発ソースコードファイルまたはその他のファイルを管理する方法。それでは始めましょう。
*  **[バージョン制御システムとは][1]**  
*  **[gitとは][2]**  
*  **[Gitの仕組み][3]**  
*  **[gitをインストール][4]**  
*  **[リポジトリの設定][5]**  
*  **[リポジトリへの変更を保存][6]**  
*  **[リポジトリのステータスを確認][7]**  
*  **[変更または元に戻す][8]**  
*  **[結論][9]**  

## バージョン制御システムとは何ですか {#version-control}

バージョン制御は、特定のバージョンを後で思い出すことができるように、時間の経過とともにファイルまたはファイルのセットを記録するシステムです。あなたがソフトウェア開発者であり、ソースコードファイルのバージョンを保持したい場合、ソースコード管理ソフトウェアはあなたにとって非常に便利なことです。選択したファイルを以前の状態に戻し、プロジェクト全体を以前の状態に戻し、時間の経過とともに変化を比較し、問題を引き起こしている可能性のあるものを最後に変更し、誰が問題を導入したかなどを確認してください。バージョン制御を使用すると、仕事を失うことを心配する必要はありません。

## gitとは何ですか {#git}

GITは、スピードと効率を備えた小規模から非常に大きなプロジェクトまですべてを処理するように設計された無料のオープンソースバージョン制御システムです。 SVNやCVSなどの古い集中バージョン制御システムとは異なり、GITバージョン制御が分散されています。すべての開発者には、コードリポジトリの完全な履歴がローカルにあります。ただし、初期クローンを少し遅くします。しかし、その後、すべてのコミットやその他の事業は非常に速いです。 GITを使用すると、互いに完全に独立できる複数のローカルブランチを使用できます。

## Gitのしくみ {#how}

Gitを使用すると、ローカルリポジトリに変更を加えて、ホスティングツールにプッシュできます。または、ホスティングツールからローカルマシンに他の変更を引き出すことができます。ソースコード管理ソフトウェア（GIT）の仕組みの基本的な概要を以下に示します。
  1. Git Any Hosting Tool（GitHub、Gitlab、Bitbucketなど）を使用して「リポジトリ」を作成します
  2.リポジトリをローカルマシンにクローンします
  3.ローカルリポジトリにファイルを追加します
  4.ローカルリポジトリへの変更（コミット）を保存します
  5.リモートホスティングでマスターブランチに変更を「プッシュ」
  6. gitホスティングツールでファイルに変更を加えてコミットします
  7.ローカルマシンへの変更を「引く」
  8.「ブランチ」（バージョン）を作成し、変更を行い、変更をコミットします
  9.「プルリクエスト」を開き（マスターブランチの変更を提案）
 10.ブランチをマスターブランチに「マージ」する

## gitをインストールします {#install}

コンピューターにGitをインストールするには、さまざまな方法があります。パッケージとして、または別のインストーラーを介してインストールするか、ソースコードをダウンロードして自分でコンパイルすることができます。

### Linuxでのインストール
バイナリインストーラーを介してLinuxに基本的なGitツールをインストールする場合は、通常、配布に伴うパッケージ管理ツールを介してそれを行うことができます。 Fedora（またはRhelやCentosなどの密接に関連するRPMベースの分布）の場合、「DNF」を使用できます。
```
$ sudo dnf install git-all
```
UbuntuなどのDebianベースの分布を使用している場合は、「apt」を試してみてください。
```
$ sudo apt install git-all
```

### MacOSにインストールします
MacにGitをインストールする方法はいくつかあります。最も簡単なのは、おそらくXcodeコマンドラインツールをインストールすることです。 Mavericks（10.9）以上では、最初にターミナルから  **git**  を実行しようとするだけでこれを行うことができます。
```
$ git --version
```
まだインストールされていない場合は、インストールするように促されます。

## リポジトリのセットアップ {#init}

gitリポジトリは、コードファイルの仮想ストレージです。これにより、さまざまなバージョンのコードを保存でき、必要に応じてアクセスできます。
新しいリポジトリを作成するには、  **git init** コマンドを使用します。 Git initは、新しいリポジトリの最初のセットアップ中に使用する1回限りのコマンドです。このコマンドを実行すると、現在の作業ディレクトリに新しい.GITサブディレクトリが作成されます。これにより、新しい **マスター**  ブランチも作成されます。

{{< figure align=center src="images/git-init-2.gif" alt="gitとは何ですか">}}


## 変更をリポジトリに保存します {#commit}

リポジトリが初期化されたので、ファイルバージョンの変更をコミットできます。

{{< figure align=center src="images/git-add-commit-1.gif" alt="gitコミット">}}


## リポジトリのステータスを確認してください {#status}

 **gitステータス** コマンドは、作業ディレクトリの状態とステージング領域を表示します。ソースコード管理ソフトウェア（GIT）によって追跡されていないファイルがステージングされていない変更を確認できます。ステータス出力は、コミットされたプロジェクトの履歴に関する情報を表示しません。このためには、 **git log** を使用する必要があります。

{{< figure align=center src="images/git-status-2.gif" alt="ソースコード管理ソフトウェア">}}

Gitログは、次の出力を表示します
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## 変更を元に戻します {#revert}

Git Revertコマンドを使用して、レポで既にコミットしている変更を元に戻すことができます。まず、「git log」コマンドを使用してコミットのリストを取得します
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
次に、どのコミットを戻したいかを決定します。そして、以下のようにgit revertコマンドを使用します
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
ご覧のとおり、Git Revertは、「2番目のコミット」で行われた変更を元に戻す新しいコミットを作成しました。

## 結論
GitとGitの仕組みについて説明した記事全体を読んだので、ソースコード管理ソフトウェアに注意する必要があります。それの目的は何ですか、そしてなぜあなたはそれを必要とするのですか。 Gitがプロジェクトのソースコードの管理にどのように役立つかを調査しました。また、さまざまなGITコマンドを使用して初期化とリポジトリを使用し、変更を保存する方法、および変更を元に戻す方法についても学びました。今後のチュートリアルでは、gitを詳細に調べ、さまざまなコマンドを使用してコードをより適切に管理する方法を共有します。

## 探検
次のリンクが関連する場合があります。
* [  **GitHubアクションでソフトウェア開発ワークフローを自動化**  ][10]
*  **[gitlab ci/cdを使用して継続的な展開パイプラインをセットアップする方法][11]**  
*  **[枝を理解して学習し、gitでリクエストをプルする][12]**  
*  **[2021年のトップ5オープンソースバージョン制御システム][13]**  



 [1]: #version-control
 [2]: #git
 [3]: #how
 [4]: #install
 [5]: #init
 [6]: #commit
 [7]: #status
 [8]: #revert
 [9]: #conclusion
 [10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
 [11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
 [12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
 [13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
