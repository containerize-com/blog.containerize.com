---
title: "オープンソースJitsi Meetをセットアップするためのステップバイステップガイド" 
seoTitle: "オープンソースJitsi Meetをセットアップするためのステップバイステップガイド" 
description: "Jitsi Meetをセットアップする方法を学びます。これは、リモート通信のニーズを満たすように設計されたオープンソースのビデオ会議ソフトウェアであり、強力な機能を提供します" 
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meetは、リモートの人々を結び付けて効果的な会議を行います。このビデオ会議ソフトウェアをセットアップする方法を学び、その機能を探りましょう" 
url: /ja/how-to-set-up-open-source-jitsi-meet/
categories: ['Video Conferencing Software']
---

## Jitsi Meetは、リモートの人々を結び付けて効果的な会議を行います。このビデオ会議ソフトウェアをセットアップし、その機能を探求する方法を学びましょう

{{< figure align=center src="images/jitsi-bannerF.png" alt="ビデオ会議ソフトウェア">}}


## 概要
私たちは最近、[ビデオ会議ソフトウェア][2]が企業部門に与える影響について語っている[ブログ投稿][1]を公開しました。ただし、この記事では、次のポイントについて説明します。
  * [Jitsi Meetの簡単な紹介][3]
  * [Jitsi Meetをセットアップする方法？][4]
  * [Jitsi Meet Feature Exploration][5]
  * [結論][6]

## Jitsi Meetの簡単な紹介{#intro}
[Jitsi Meet][7]は、完全に無料のオープンソースで、安全でスケーラブルなビデオコラボレーションソフトウェアです。完全な暗号化、EtherPadのサポート、ビデオ/オーディオ録音を備えたマルチパルティビデオ会議など、いくつかの一般的な機能を提供します。このWeBRTC互換性のあるソフトウェアを使用すると、ビデオミーティングに必要なだけ多くのユーザーを招待できます。
仮想会議の台頭は最近始まり、人々はビデオ/オーディオ通話によるコミュニケーションがより効果的かつ共同作業的であると考えています。何よりも、このカテゴリのソフトウェアは、ラップトップ/デスクトップで機能するだけでなく、参加者が携帯電話を介して顔を合わせて安全なビデオ会議に出席することもできます。

## Jitsi Meetをセットアップする方法は？ {#設定}
このセクションでは、Jitsi Meetのインストールプロセスに入ります。まず、次の前提条件をインストールしていることを確認してください。
  * [Docker][8]
Dockerがインストールされたら、この[リンク][9]からソースコードのzipファイルをダウンロードします。
端子を開き、次のコマンドを実行します
`cd docker-jitsi-meet`
その後、次のコマンドを実行して `.env`を作成します
`cp env.example .env`
次に、次のコマンドを実行して、必要なディレクトリを作成します。
`mkdir -p〜/.jitsi-meet-cfg/{web/letsencrypt、prosody/config、solody/prosody-plugins-custom、jicofo、jvb、jigasi、jibri}`
最後に、このコマンドを実行してDocker画像をスピンアップし、ブラウザのこのURLでアプリケーションにアクセスします。
`docker -compose up -d`

## Jitsi Meet Feature Exploration {#Features}
この無料のビデオチャットソフトウェアは、多くの豊富な機能を提供します。これは、最初に表示されるホームページです。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="ビデオ会議">}}

会議のキャプションを入力して「Go」を押すと、次のビデオストリームウィンドウに着陸します。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="オープンソースソフトウェア">}}

ポップアップウィンドウに表示されているリンクを共有することで、人々を会議に招待できます。さらに、コードを取得して、ビデオストリームをどこにでも埋め込むことができます。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="オープンソースソフトウェア">}}

画面を他の参加者と共有するオプションが提供されます。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="ビデオチャット">}}

右上隅から、ビデオ接続の詳細を確認できます。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="無料のビデオチャット">}}

Jitsi Meetは、絵文字との統合チャットを提供しています。

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="ビデオ会議ソフトウェア">}}


## 結論{#con}
この記事では、見事なリモート通信ソフトウェアとそのインストールプロセスを実行しました。さらに、ビジネスニーズを進化するテクノロジーと同期するための最良のソリューションを選択する時が来ました。最終的に、[containerize.com][10]は、ビデオ会議ソフトウェアのリストを拡張するために取り組んできました。したがって、定期的な更新については、[ビデオ会議ソフトウェア][2]カテゴリに接続してください。

## 関連する製品ページ
次のリンクが関連する場合があります。
  * [jitsi Meet][7]
  * [bigbluebutton][11]
  * [OpenVidu][12]
  * [要素][13]
  * [ワイヤー][14]

  
[1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
[2]: https://products.containerize.com/video-conferencing/
[3]: #intro
[4]: #setup
[5]: #features
[6]: #con
[7]: https://products.containerize.com/video-conferencing/jitsi
[8]: https://www.docker.com/products/docker-desktop
[9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/video-conferencing/bigbluebutton
[12]: https://products.containerize.com/video-conferencing/openvidu
[13]: https://products.containerize.com/video-conferencing/element
[14]: https://products.containerize.com/video-conferencing/wire
