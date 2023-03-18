---
title: "Phplistでバウンスをセットアップして処理する方法" 
seoTitle: "Phplistでバウンスをセットアップして処理する方法" 
description: "Phplistは、強力な自己ホストのメーリングリストおよびニュースレターマネージャーです。これは、企業がニュースレターキャンペーンを送信し、プロセスを簡単に跳ね返すのに役立ちます。" 
date: Fri, 13 Nov 2020 17:50:16 +0000
author: Masood Anwer
summary: "オープンソースのニュースレターと電子メールマーケティングソフトウェアを使用してキャンペーンを送信します。健康的なメーリングリストのために、PHLPLISTのバウンス管理をセットアップし、バウンス処理を自動化します。" 
url: /ja/how-to-setup-and-process-bounces-in-phplist/
categories: ['Newsletters']
---

## オープンソースニュースレターと電子メールマーケティングソフトウェアを使用してキャンペーンを送信します。健康的なメーリングリストのために、PHLPLISTのバウンス管理をセットアップし、バウンス処理を自動化します。

{{< figure align=center src="images/phplist-2.png" alt="プロセスはphphplistをバウンスします">}}

[マルチテナンシー] [1]および[Newsletterキャンペーンの送信] [2]を実装するための記事を書いています。この記事では、これらのポイントについて、PHPHPLISTのプロセスバウンスに関する詳細について説明します。
  * [phphplistとは？] [3]
  * [バウンスとは？] [4]
  * [バウンス管理のセットアップ] [5]
  * [バウンスを処理する方法？] [6]
  * [結論] [7]

## phphplistとは何ですか？ {#phplist}
Phplistは、ソフトウェアを送信する最も人気のある無料のオープンソースニュースレターです。 Phplistは、企業がマーケティングメール、製品の更新、アナウンスを加入者に送信することを可能にします。リストの管理、美しいニュースレターの設計、スケジュールキャンペーン、バウンス管理を支援します。 [続きを読む] [8]

## バウンスとは何ですか？ {#跳ねる、弾む}
バウンスは、数の理由が原因で配信できず、送信者に戻るメールメッセージです。メールボックスがいっぱいになっているなどの理由があり、電子メールアドレスが有効であるか、電子メールアドレスが誤っていないなどの理由があります。このため、無効なメールアドレスにメールを送信しないように、バウンスを処理する必要があります。

## Setup Bounce Management {#setup}
Bounce Managementをセットアップするには、config.phpファイルで次の設定を構成する必要があります。

{{< figure align=center src="images/bounce-handling-phplist.png" alt="Phplist-処理管理をバウンスします">}}

これらの構成については、以下のステップで詳しく説明します。
  *最初に、バウンスメッセージを受信する場所にメールアドレスを追加する必要があります。 ** message_envelope **変数を見つけて、メールアドレスを追加できます。
  *Phplistは、2つのプロトコル、** mboxとpop3 **を介して、バウンスメールボックスから電子メールを取得できます。したがって、** bounce_protocol **変数を見つけて、環境に従って変更します。
  *** mbox ** PrototColを設定している場合、ファイル形式を定義する必要があります。したがって、** bounce_mailbox **を見つけて、「/var/spool/mail/listbounces」のようなパスを設定します。
  *** pop3 **プロトコルを使用した場合、メールボックスに**ホスト、ユーザー名、およびパスワード**を構成する必要があります。これらの設定は、上記のスリーンショットで見ることができます。
  *** pop3 **プロトコルの上記の設定に加えて、ポートと暗号化を追加する必要がある場合があります。

## バウンスを処理する方法は？ {#プロセス}
Phplistは、プロセスバウンスの2つの方法をサポートしています：手動と自動化。バウンス処理を自動化するには、Cronジョブを作成する必要があります。また、** System> Process Bounces **ページにアクセスして、手動で処理することもできます。したがって、最初に**手動で\ _Process \ _Bounces **設定を要件に応じて変更する必要があります。 [phplist docs] [9]にアクセスして、プロセスバウンスのためにCronジョブをセットアップできます。

## 結論{#conclusion}
この投稿では、電子メールアドレスをバウンスし、プロセスバウンスを構成する方法を学びました。サブスクライバーの量が少ない場合は、手動方法でバウンスを簡単に処理できます。ただし、大規模なリストには自動化バウンス処理プロセスを使用する必要があります。時間を節約し、クリーンで有効なサブスクライバーリストを作成するのに役立ちます。
[1]: https://blog.containerize.com/newsletter/how-to-implement-multi-tenancy-in-phplist/
[2]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[3]: #phplist
[4]: #bounce
[5]: #setup
[6]: #process
[7]: #conclusion
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://www.phplist.org/manual/books/phplist-manual/page/setting-up-your-cron
