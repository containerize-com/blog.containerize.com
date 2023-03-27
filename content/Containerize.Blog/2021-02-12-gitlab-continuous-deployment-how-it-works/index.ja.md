---
title: "gitlab連続展開|使い方？" 
seoTitle: "gitlab連続展開|使い方？" 
description: "このチュートリアルでは、GitLabを使用して継続的な展開パイプラインを構築します。 GitLabの継続的な展開は、DevOpsが自動展開を実行するのに役立ちます。" 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "自動展開はワークフロー＆amp;プロセス。このGitLabチュートリアルは、GitLab CI/CDを使用して継続的な展開パイプラインをセットアップすることを学ぶのに役立ちます。" 
url: /ja/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## Automated Deploymentは、ワークフローとプロセスを合理化します。このGitLabチュートリアルは、GitLab CI/CDを使用して継続的な展開パイプラインをセットアップすることを学ぶのに役立ちます。

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="gitlab連続展開">}}


## 概要
最後のいくつかの記事で、[バージョン制御の基本][1]について学び、次に、さまざまな[分岐モデル][2]とワークフローについて学ぶことで知識を高めました。バージョン制御システムは、開発、展開、統合の世界に効率をもたらしました。開発者は、ビルドやテストを心配することなく、ソースコードを非常に簡単にコミットすることが非常に簡単だと感じています。このアプローチが展開を強化したため、ソフトウェア業界は自信と競争力を獲得しています。
**gitlab継続的な展開** および統合は、問題を簡単に見つけるのに役立ちます。さらに、開発者は、バグやその他のミス処理を短時間で追跡できます。この自動化プロセス全体により、頻繁に行われるタスクからの自由が得られ、人材とエラーの可能性が減ります。本日、このブログ投稿では、GitLab CI/CDを使用した継続的な展開パイプラインについて説明します。それでは、次のポイントをカバーして始めましょう！
* **[CI＆CDとは][3]** 
* **[gitlabランナーとは][4]** 
* **[。gitlab-ci.ymlファイル][5]** 
* **[基本的なサンプルアプリを作成][6]** 
* **[結論][7]** 

## CIとCDとは何ですか {#cicd}

継続的統合（CI）は、複数の貢献者からのコードの変更の統合を単一のソフトウェアプロジェクトに自動化するDevOpsのベストプラクティスの1つです。これにより、開発者はコードの変更を中央リポジトリに頻繁にマージできます。そこでは、ビルドとテストが実行されます。継続的な展開（CD）は、各コードがコミットして構築された後にターゲット環境（生産またはステージング）にコードを自動的に展開することにより、さらに1つのステップを移動します。
開始する前に、CI/CDを使用したいプロジェクトがGitLabにあることを確認してください。そして、プロジェクトへのメンテナーまたはオーナーレベルのアクセスを持つ必要があります。

## Gitlabランナーとは何ですか {#runner}

**gitlabの継続的な展開** を理解した後、Gitlab RunnerはGOで書かれた小さな軽量プログラムで、ローカルマシンで連続統合（CI）関連のジョブを実行し、結果をGitLabに送信して変更を検討します。これは、任意の主要なOSにインストールできる単一の実行可能バイナリです。
GitLab CI / CDを前に進める前に、タスクを実行できるランナーを使用できるようにする必要があります。 [インストール][8]および[登録][9] GitLabランナーの公式ガイドに従うことができます。

## .gitlab-ci.ymlファイル {#yml}

**。gitlab-ci.yml**は、gitlab ci/cdの特定の手順を構成するファイルです。リポジトリのルートに配置され、プロジェクトの構築方法の定義が含まれています。 GitLabインスタンスにコミットをプッシュするたびに、GitLabはランナーを呼び出して、このファイル内で指示されているプロジェクトを構築およびテストします。

## サンプルアプリを作成します {#sample}

この **gitlabチュートリアル** のセクションでは、サンプルアプリを作成します。既にGitLabリポジトリを作成していると仮定すると、サンプルアプリケーションを作成して、アプリケーション用のCI / CDプロセスを設定します。
まず第一に、プロジェクトのrootでpackage.jsonファイルを作成します
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
ここで、プロジェクトのルートでapp.jsを作成します
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
**gitlab連続展開の最後のステップでは、**a** dockerfile**を作成し、次の内容を追加します。
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
DockerFileには、このアプリのビルドプロセスが含まれています。ノードコンテナの作成と依存関係のインストールが含まれます。
次に、 **。gitlab-ci.yml** ファイルを作成する必要があります。このファイルには、プロジェクトを構築するための指示が含まれています。 GitLabリポジトリにコミットをプッシュするたびに、GitLabはプロジェクトを構築するためにランナーを呼び出します。
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
ステージビルドが1つだけで、スクリプトとして **npmインストール** があります。これは、プロジェクトに変更が届くたびに手動で実行する必要があるコマンドです。そして、それがGitlabランナーが入ってくる場所であり、コミットするたびに自動的にこれを行うでしょう。
gitlabランナーを既にインストールしており、gitlabインスタンスに登録していると仮定すると、アプリケーションに簡単にコミットしてgitlabにプッシュすることで、gitlab ci / cdをアクションでテストできます。
その後、プロジェクトをGitLabで開き、My-Project→Pipelineに移動すると、作成したコミットの横に「合格」というタグが表示されます。その後のコミットにはタグもあります。

## 結論 {#conclusion}

これにより、この **gitlabチュートリアル**の終わりになります。この記事では、gitlabの連続統合の基本、 **ci＆cd** 、 **gitlabランナー** とは何か、および継続的な展開について学びました。さらに、CI / CD全体のワークフローでのランナーの使用を研究しました。また、GitLabを使用して継続的な展開をセットアップする方法を説明するサンプルプロジェクトも作成しました。このgitlabチュートリアルは、 **gitlab継続的な展開** を探している場合に本当に役立ちます。ただし、以下の「探索」セクションには、チェックアウトできる他の多くのリソースがあります。さらに、記事は、オープンソース、自己ホスト、および拡張可能な**バージョン制御システム** についてです。
最後に、[containerize.com][10]は、さらなるオープンソース製品とトピックに関するブログ投稿を継続的に執筆しています。したがって、定期的な更新については、[][11][バージョン制御ソフトウェア][12]カテゴリに連絡してください。さらに、ソーシャルメディアアカウント[Facebook][13]、[LinkedIn][14]、および[Twitter][15]でフォローできます。

## 探検
次のリンクが関連する場合があります。
  * [GitHubアクションでソフトウェア開発ワークフローを自動化][16]
  * [gitの枝を理解して学習し、リクエストをプルする][2]
  * [ソースコード管理ソフトウェア| gitとは？][17]
  * [2021年のトップ5オープンソースバージョン制御システム][18]
  * [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][19]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
