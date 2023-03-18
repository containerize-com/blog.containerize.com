---
title: "DeployerでPHPアプリケーションの展開を自動化します" 
seoTitle: "DeployerでPHPアプリケーションの展開を自動化します" 
description: "PHPアプリケーションをオープンソース展開ツールで展開し、展開ワークフローを自動化します。機能を簡単にリリースし、以前のバージョンにロールバックします。" 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "PHP展開ツールを使用して、PHPアプリケーション展開プロセスを自動化します。展開をセットアップする方法を学び、それを使用してPHPアプリケーションを展開します。" 
url: /ja/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## PHP展開ツールを使用して、PHPアプリケーション展開プロセスを自動化します。展開をセットアップする方法を学び、それを使用してPHPアプリケーションを展開します。

{{< figure align=center src="images/deployer-blog-post.png" alt="PHP展開ツール">}}

開発後にサーバーにアプリケーションを展開することは非常に重要な仕事です。多くの場合、新機能とバグ修正はチームによってリリースされます。そのため、チームが手動の作業を排除し、**ソフトウェアの展開**プロセスを自動化することが望ましいです。ソフトウェアチームがより重要なタスクに集中できるようになります。いくつかの**オープンソース展開ツール**がありますが、このチュートリアルには** PHP Deployer **に集中します。この投稿では、次のセクションについて説明します。
  *[**展開者とは**] [1]
  *[** deployer **] [2]のインストール
  *[** PHPアプリケーションを展開**] [3]
  *[**結論**] [4]

## deployerとは{#what}
[** Deployer **] [5]は無料でオープンソース** PHP展開ツール**です。これにより、PHPベースのアプリケーション用の展開ワークフローを自動化するソフトウェアチームが可能になります。インストールが非常に簡単で使いやすいです。初心者から専門家レベルの経験まで誰でも、PHPアプリケーションの展開にすばやく使用できます。 Deployerには、人気のあるPHPフレームワーク、CMS、ショッピングカートソフトウェア用のすぐに使用できるレシピ/スクリプトが付属しています。さらに、この**オープンソース展開ツール**で** Laravel展開**を実行できます。開発者は、プロジェクトに組み込みのレシピを使用して、展開に使用できます。さらに、** PHP Deployer ** Wizardを使用してスクリプトをインストール/デプロイすることを簡単に作成できます。さらに、この**無料展開ツール**は、ゼロダウンタイムの展開、以前のバージョンへのロールバック、SSH、並列実行など、優れた機能を提供します。

## deployerのインストール{#installing}
  *展開者はPHPに依存します。 PHPがサーバーで実行されていることを確認する必要があります。ただし、以下のコマンドを使用してUbuntuにPHPをインストールできます。
```
sudo apt-get install php
```
  *下を実行して、コマンドを1つずつインストールします。
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## PHPアプリケーションを展開{#Deploy}
段階的なガイドラインに従って、** deploy ** deplayerを展開します。
  *展開者のディレクトリを作成し、新しく作成されたディレクトリに移動します。
```
sudo mkdir deployer
cd deployer
```
  *以下のコマンドを実行して、インストールスクリプトを生成します
```
dep init
```
  *以下の画面でプロンプトが表示されます。これは、基本的なインストールスクリプトを作成するための展開ウィザードです。

{{< figure align=center src="images/deployer-1.png" alt="">}}

  *最初に、番号を入力してプロジェクトタイプを選択する必要があります。プロジェクトの種類がわからない場合、またはDeployerに精通している場合は、0を入力できます。
  *第二に、GITリポジトリパスを提供する必要があります。オプションのステップであるため、後でスキップしてパスを追加できます。
  *最後のステップでは、[はい]を選択して、Deployerコミュニティと情報を共有するか、NOを入力してスキップすることができます。
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
PHPアプリケーションを展開するには、次の変数を変更する必要があります。
  *** set（“ Application ’、' my_project '）; **  - アプリケーション名を設定します。
  *** set（ 'repository'、”）; GitHubリポジトリに展開キーを設定する必要があります。サーバーに慣れていない場合は、サーバーでSSHキーを作成する方法を検索できます。
  *** host（「project.com」）
     - > set（ 'deploy_path’、“〜/{{application}} ’）; **  - プロジェクト名を設定し、アプリケーション用のファイルを保存する場所を定義します。 /var/www/html/deployerのように見えます。
最後に、以下のコマンドを実行して、PHPアプリケーションを展開します。
```
dep deployer
```
新しいリリースに問題が見つかり、ロールバックの変更を希望する場合。以下のコマンドを実行するだけで、それを行うことができます。
```
dep rollback
```

## 結論{#conclusion}
このチュートリアルにデプロイヤーとインストール方法について説明しました。さらに、GitHubリポジトリからPHPベースのアプリケーションを展開するための完全なガイドラインを作成しました。うまくいけば、このブログ投稿が** DeployerでPHPアプリケーション**の展開を開始するのに役立つことを願っています。さらに、今後のチュートリアルでは、この** PHP展開ツール**について詳しく説明します。
最後に、[** containerize.com **] [6]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[**展開ツール**] [7]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  *[** Deployer **] [8]
  *[**ジェンキンス**] [9]
  *[**ドローン**] [10]
  *[** Capistrano **] [11]
  *[**ランチャー**] [12]
  *[** Concourse **] [13]
  *[** Ansible **] [14]
  *[** gocd **] [15]
  *[** 2021年のトップ5オープンソース展開ツール**] [16]
  *[**ソースコントロールサーバーからの継続的な統合と継続的な展開**] [17]
[1]: #What
[2]: #Installing
[3]: #Deploy
[4]: #Conclusion
[5]: https://deployer.org/
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/deployment-tools/
[8]: https://products.containerize.com/deployment-tools/deployer
[9]: https://products.containerize.com/deployment-tools/jenkins/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/capistrano/
[12]: https://products.containerize.com/deployment-tools/rancher/
[13]: https://products.containerize.com/deployment-tools/concourse/
[14]: https://products.containerize.com/deployment-tools/ansible/
[15]: https://products.containerize.com/deployment-tools/gocd/
[16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
