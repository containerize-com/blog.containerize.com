---
title: "Moodle LMSを使用してeラーニングWebサイトを作成する方法" 
seoTitle: "Moodle LMSを使用してeラーニングWebサイトを作成する方法" 
description: "Moodle LMSは、オンライン学習プラットフォームを作成するための無料でオープンソースのeラーニングソリューションです。それに慣れるためのガイドをチェックしてください。" 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "オープンソースのeラーニングプラットフォームを使用して、オンライン学習プラットフォームを構築します。この記事では、Moodle LMSを使用して遠隔学習サイトを作成する方法について説明します。" 
url: /ja/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## オープンソースのeラーニングプラットフォームを使用して、オンライン学習プラットフォームを構築します。この記事では、Moodle LMSを使用して遠隔学習サイトを作成する方法について説明します。

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

私たちは1年以上Covid 19に苦しんでいます。世界のあらゆる部分が封鎖の下に置かれています。世界中の人々の生活や企業に悪影響を及ぼします。さらに重要なことは、それが私たちの教育システムに大きな影響を与えることです。教育機関は、学生が自分の家の快適さから教育を継続できるように、オンライン学習に移行する必要があります。堅実で安全なeラーニングプラットフォームがなければ、オンライン学習は不可能です。この記事では、** Moodle Open Source ** Projectを見ていきます。これにより、教師と学生はどこからでもコミュニケーションを取り、学ぶことができます。
この記事の次のセクションについては、e-learningウェブサイト**を作成して、Moodleを使用して**を作成します。
  * [前提条件][1]
  * [Moodleとは？][2]
  * [Moodleの特徴][3]
  * [Moodleのインストール][4]
  * [結論][5]

## Prererequisites {#prerequisites}
まだ持っていない場合は、サーバーにランプ環境をインストールして構成する必要があります。

## Moodleとは何ですか？ {#何}
[** Moodle **][6]は、無料でオープンソースのeラーニングソリューションです。 Moodleは、モジュラーオブジェクト指向の動的学習環境を表しています。教育者、管理者、学習者に、個別の学習環境を作成および提供するためのeラーニングプラットフォームを提供するために作成されました。さらに、Moodleは学校に適した** LMS **、大学、企業の専門的なトレーニングコースです。 LMS Webサイトを作成するための人気のある**遠隔学習**ソリューションの1つです。さらに、Moodleは教師と生徒に豊富なツールと共同学習環境を提供します。 Moodleには、iPhone、Android、Windowsの携帯電話とタブレット用のモバイルアプリがあります。モバイルアプリは、世界中のあらゆる場所から使用できます。この**自己ホスト型LMS **はPHPで記述されており、MySQL/PostgreSQLデータベースにデータを保存しています。広範なユーザーと開発者のドキュメントが付属しています。すべてのソースコードは[** github **][7]で利用できます。このオープンソースのライセンス** eラーニングソリューション**はgplv3+です。

## Moodle {#Features}の機能
Moodleには多くの機能が付属しています。ただし、この記事では、次の主要な機能のいくつかについて説明します。
**コラボレーションツールとアクティビティ**：フォーラム、WIKI、用語集、データベースアクティビティ、およびその他のツールにより、ユーザーは共同で学習できます。 Moodleコースの要素のグループは、アクティビティと呼ばれます。アクティビティは、通常、学生が他の生徒や教師とやり取りすることをすることです。
**進捗状況を追跡**：教育者と学生は、特定のアクティビティや資料を追跡するためのさまざまなツールを使用して、コースレベルでのさまざまなツールを使用して、進行状況と完成を追跡できます。成績、能力、アクティビティの完了、コースの完了、バッジ、コースレポート、分析など、ムードルの学生の進捗状況を追跡する方法はいくつかあります。
**プラグイン管理**：プラグインを使用すると、新しい機能を追加することでMoodleの基本機能を拡張できます。ユーザーは、追加のアクティビティ、新しいクイズ質問タイプ、新しいレポート、システムコネクタなど、さまざまなタスクにプラグインを追加できます。管理インターフェイスを使用して、プラグインをインストールおよび無効にできます。
**コース管理**：さまざまなニーズを満たすコースを作成および管理します。インストラクター主導のクラス、セルフペースのクラス、ブレンドクラス、および完全にオンラインクラスはすべてオプションです。
**ピアと自己評価**：ワークショップと調査は、学生がグループとして自分自身や他のクラスメートの仕事を視聴、評価し、レビューすることを奨励する組み込みの活動です。

## Moodleインストール{#moodle}
以下のステップバイステップガイドに従って、Ubuntu 18.04にMoodle LMSをインストールしてください。
  *最初に、以下のコマンドを実行して、DirectloryのダウンロードとダウンロードMoodleを変更します。
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  *次のコマンドを実行して、データディレクトリを作成し、権限を設定します。
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Moodleサイトのnginx構成ファイルを作成します。
```
sudo nano /etc/nginx/sites-available/moodle
```
  *以下のコードをそれに追加し、ファイルを保存します。
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  *新しく作成されたサイトを有効にするためのSymlinkを作成します。
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * nginx webサーバーを再起動します。
```
sudo systemctl restart nginx
```
  *次に、ブラウザを開き、http：//example.comと入力します。 「Example.com」をサーバーの実際のドメイン名またはIPに置き換えます。
  *ここで、インストールウィザードを見ることができます。言語を選択し、[次のボタン]をクリックします。

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle-言語を選択します">}}

  *サイトURL、Moodleルートディレクトリ、およびデータディレクトリパスが正しいことを確認し、確認する必要があります。 「データディレクトリ」パスを変更することもできます。また、セキュリティのためにMoodleコードディレクトリの外側にある必要があります。次のボタンをクリックします。

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle -Data Directoryパスを設定します">}}

  *このステップでデータベースドライバーを選択します。ただし、すでに選択したものを使用して、次のボタンをクリックできます。

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle-データベースドライバーを選択します">}}

  *データベースホスト、データベース名、データベースユーザー、データベースパスワード、テーブルプレフィックスなどのデータベース設定を提供します。次のボタンをクリックします。

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle-データベース設定">}}

  *契約条件に同意するには、確認ボタンをクリックします。
  *必要なPHP拡張機能のリストを見ることができます。ただし、不足しているアドオンをインストールする必要があります。 [続行]ボタンをクリックして、次のステップを移動します。
  *この時点で、アカウントを作成するには、管理者データを入力する必要があります。 [プロファイルの更新]ボタンをクリックします。
  *完全なサイト名、サイトの短い名前、FrontPageの要約、デフォルトのタイムゾーン、無償の電子メールなど、サイトに情報を提供します。 [変更の保存]ボタンをクリックします。
  *サイト名、言語、地域、電子メールアドレスなどの情報を提供して、サイト登録を完了します。

## 結論{#conclusion}
この記事では、Moodleとその主な機能について学びました。また、** Moodle lms **から** eラーニングWebサイト**を作成するための段階的なアプローチを調べました。 Moodleの[**公式ドキュメント**][8]を確認して、コース、学生登録、追跡の進捗状況などのさまざまな機能により快適になることができます。この投稿がLMS Webサイトの作成に役立つことを願っています。
最後に、[** containerize.com **][9]は、最新のオープンソース製品に関するブログ投稿を書く一貫したプロセスにあります。したがって、最新のアップデートについては、この[**学習管理システム**][10]カテゴリに連絡してください。

## 探検
次のリンクが関連する場合があります。
  *[**オープンソースLMSツール**][11]
  *[** Moodle  -  eラーニングシステム**][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
