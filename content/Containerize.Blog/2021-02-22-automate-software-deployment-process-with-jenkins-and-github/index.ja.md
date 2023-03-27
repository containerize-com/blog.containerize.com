---
title: "ソースコントロールサーバーからの継続的な統合と継続的な展開" 
seoTitle: "ソースコントロールサーバーからの継続的な統合と継続的な展開" 
description: "無料の展開ツールは、開発チームがソフトウェア配信ワークフローを自動化するのに役立ちます。 JenkinsとGitHubリポジトリを使用して、ソフトウェアを迅速に構築、テスト、展開します。" 
date: Mon, 22 Feb 2021 06:11:17 +0000
author: Masood Anwer
summary: "無料展開ツールを使用して開発ワークフローを自動化します。 Jenkins Automation ServerとGitHubでCI/CDをセットアップする方法を学び、ソフトウェア展開を行います。" 
url: /ja/automate-software-deployment-process-with-jenkins-and-github/
categories: ['Deployment Tools']
---

## 無料展開ツールを使用して開発ワークフローを自動化します。 Jenkins Automation ServerとGitHubでCI/CDをセットアップする方法を学び、ソフトウェア展開を行います。

{{< figure align=center src="images/ci-cd-post.png" alt="継続的な統合と継続的な展開">}}

開発チームは、FTP、リポジトリからコードを引き出すなど、ソフトウェアの展開にさまざまな方法を使用しています。これらの方法はすべて手動で実行され、多くの努力が必要です。ソフトウェア開発のために、より多くのチームがアジャイル方法論に従うことがわかります。そのため、彼らは頻繁に新機能とバグ修正をリリースします。したがって、ソフトウェア配信ワークフローの自動化は、チームが新しいバージョンを迅速かつエラーなしで起動するのに役立ちます。ソフトウェア配信プロセスを自動化するために、Jenkins **とGithubを使用して** CI/CDの使用方法を学びます。この記事では、次のセクションについて説明します。
* [ **ジェンキンスとは？** ][1]
* [ **連続統合** ][2]
* [ **継続的な展開** ][3]
* [ **ジェンキンスを構成** ][4]
* [ **Jenkins Jobを作成** ][5]

## ジェンキンスとは何ですか？ {#Jenkins}

**Jenkins **は、ソフトウェア配信プロセスを自動化するための強力な** 無料展開ツール **です。これは、構築、テスト、展開用のオープンソース自動化サーバーです。ジェンキンスはマスタースレーブアーキテクチャを使用しています。これにより、ソフトウェアチームは複数のビルドとソフトウェアのテストを同時に実行できます。さらに、利用可能なプラグインがたくさんあり、チームは必要に応じてそれらを使用できます。詳細とインストールについては、[** Jenkins Page**][6]にアクセスできます。さらに、Jenkins [** github**][7]リポジトリでソースコードを見つけることができます。

## 継続的インテグレーション {#CI}

**継続的な統合**は、開発者が共有リポジトリに頻繁にコードを統合する必要がある開発慣行です。リポジトリへのコードのすべての統合/プッシュは、自動化されたビルドとテストによって検証できます。また、開発者はコードの問題を簡単に識別することができます。

## 継続的な展開 {#CD}

**継続的な展開**は、継続的な統合後の次のステップです。チームがサーバーにコードを継続的に展開できるようになります。さらに、開発者が繰り返しのタスクを減らし、敏ility性を高めるのに役立ちます。

## Jenkinsを構成します {#Configure}

Jenkinsでの構成のためのステップバイステップガイドラインを以下に進みます。
  * Jenkinsサイトを開き、ログインします。
* 「SSH Over SSH」プラグインをインストールします。 [Jenkinsの管理]→[プラグインの管理]→[利用可能]をナビゲートして検索できます。
* 以下に示すように、ユーザー「Jenkins」としてビルドサーバーでSSHキーを生成します。
```
$ ssh-keygen
Generating public/private rsa key pair.
Enter file in which to save the key (/var/lib/jenkins/.ssh/id_rsa):
Created directory '/var/lib/jenkins/.ssh'.
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/lib/jenkins/.ssh/id_rsa.
Your public key has been saved in /var/lib/jenkins/.ssh/id_rsa.pub.
The key fingerprint is:
```
  * SSHを使用してターゲット/展開サーバーに接続します。コマンドを下回って実行し、PUBファイルの内容をターゲットサーバーに貼り付けます。
```
$ cd .ssh
$ nano authorized_keys
```
* ナビゲートして、「Jenkins→Configure System→SSHを介して公開」を管理します。
* ファイルパスを見つけたか、展開サーバー用に完了したものと同じコンテンツを貼り付けてSSHキーを追加します。
* 「SSHサーバー」の横にある[追加]ボタンをクリックして、SSHサーバーを追加します。
* 展開/ターゲットサーバーに名前、ホスト名、ユーザー名、およびリモートディレクトリを入力します。
  * [テスト構成]ボタンをクリックして、Jenkinsが展開サーバーに接続できることを確認します。
* 最後に、[保存]ボタンをクリックして情報を保存します。

## Jenkinsジョブを作成します {#Create}

これらの手順を使用して、Jenkinsのジョブを作成できます。
  * Jenkinsダッシュボードを開き、[新しいアイテム]ボタンをクリックします。
* プロジェクト名を入力し、「フリースタイルジョブ」を選択します。
* 「構成ウィンドウ」にGitHubリポジトリURLを入力します。
* 「環境のビルド」セクションで、これらのオプションを「ビルド開始前にワークスペースを削除する」と「ビルドの実行後にファイルを送信するか、SSHを介してコマンドを実行する」を確認します。
* ビルド環境に名前、ソースファイル、およびリモートディレクトリを入力します。
* ジョブを保存して構築します。
* 展開サーバーに接続し、コードがあることを確認します。

## 結論
この記事では、 **Jenkins Server**、 **継続的な統合** 、および **継続的な展開** について説明しました。また、**無料展開ツール** を構成する方法も学び、GitHubを使用して展開用のJenkinsジョブを作成しました。無料のCI/CDツールにより、開発チームはソフトウェア配信ワークフローを自動化し、重要なジョブに焦点を合わせることができます。次の投稿で他の展開ツールをカバーします。
最後に、[ **containerize.com**][8]は、さらにオープンソースの展開ツールに関する記事を公開します。したがって、定期的な更新については、[**展開ツール** ][9]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
* **[ジェンキンス][6]** 
* [ **ドローン** ][10]
* [ **deployer** ][11]
* [ **Capistrano** ][12]
* [ **ランチャー** ][13]
* [ **Concourse** ][14]
* [ **Ansible** ][15]
* [ **gocd** ][16]
* [ **2021年のトップ5オープンソース展開ツール** ][17]
* [ **DEPLOYARによるPHPアプリケーションの展開を自動化** ][18]



[1]: #Jenkins
[2]: #CI
[3]: #CD
[4]: #Configure
[5]: #Create
[6]: https://products.containerize.com/deployment-tools/jenkins
[7]: https://github.com/jenkinsci/jenkins
[8]: https://containerize.com
[9]: https://blog.containerize.com/category/deployment-tools/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/deployer/
[12]: https://products.containerize.com/deployment-tools/capistrano/
[13]: https://products.containerize.com/deployment-tools/rancher/
[14]: https://products.containerize.com/deployment-tools/concourse/
[15]: https://products.containerize.com/deployment-tools/ansible/
[16]: https://products.containerize.com/deployment-tools/gocd/
[17]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[18]: https://blog.containerize.com/deployment-tools/automate-php-application-deployment-with-deployer/
