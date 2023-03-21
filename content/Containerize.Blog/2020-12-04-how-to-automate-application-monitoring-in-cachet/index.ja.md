---
title: "CachetでWebアプリケーション監視を自動化する方法" 
seoTitle: "CachetでWebアプリケーション監視を自動化する方法" 
description: "Cachetは、すべてのサービスを監視し、購読者に即座に通知するのに役立ちます。この記事は、監視を自動化するためにサードパーティのプラグインを統合することに関するものです。" 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "Cachetステータスページにより、企業はサービスのダウンタイムに関するインスタント通知を取得できます。 CachetでWebアプリケーション監視を自動化する方法を学びます。" 
url: /ja/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Cachetステータスページでは、企業はサービスのダウンタイムに関するインスタント通知を取得できます。 CachetでWebアプリケーション監視を自動化する方法を学びます。

{{< figure align=center src="images/cachet-monitor.png" alt="Webアプリケーション監視">}}

アプリケーションとサービスの監視は、オンラインビジネスの非常に重要な部分です。あなたのウェブサイトは24時間365日実行されており、いつでも間違えます。どちらのサイトが機能しているかどうかはわかりません。さらに、顧客はこの問題に関する情報を持っていません。彼らはあなたのサポートチームにサービスのダウンタイムに連絡するかもしれません。さらに、これにより、顧客が失望するようになる可能性があります。ただし、ステータスページシステムを構成することにより、サービスのダウンタイムを短縮できます。ステータスページシステムは、24時間体制のすべてのサービスを監視し、チームと顧客にすぐに通知を送信します。これにより、問題を修正するための迅速な措置を講じることができ、クライアントは進捗状況について最新の状態に保ちます。このブログ投稿では、**cachet  **for **  automate Monitoring** とサードパーティライブラリを統合する方法を学びます。
  * [要件][1]
  * [監視プラグインのセットアップ][2]
  * [Linuxサービスの作成][3]
  * [結論][4]

## 要件 {#requirements}
  *最新バージョンのカチェットをインストールします。
  * Linuxサービスに精通しています。

## 監視プラグインをセットアップ {#plugin}
以下は、ubuntuで監視するためのプラグインをインストールして構成する手順です。
  * [リリースページ][5]からバイナリをダウンロードします。
  *ファイルの名前をCachet-Monitorに変更します。
  *コマンドを使用してファイルを実行可能にします。
```
sudo chmod +x cachet-monitor
```
  *実行可能ファイルをパスディレクトリに入れて、端末を介して直接アクセスできるようにします。だから、**/usr/local/bin **の下に移動することをお勧めします。
  *次のコマンドを実行して、config.jsonファイルを作成します。
```
sudo nano config.json
```
  *以下のコードをコピーしてファイルを保存します。
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  *次に、このコマンドで構成をテストします。
```
cachet-monitor -c config.json
```
  *すべてがうまく機能する場合は、次のセクションに移動してLinuxサービスを作成します。

## Linuxサービスの作成 {#Service}
以下は、監視プロセスを自動化するLinuxサービスを作成および開始する手順です。
  *サービスを作成します**Cachet-Monitor.Service** ファイル。
```
sudo nano cachet-monitor.service
```
  *以下のコードをコピーしてファイルを保存します。
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  *コマンドを実行してSystemD構成を更新します。
```
sudo systemctl daemon-reload
```
  *コマンドを実行してCachet-Monitorサービスを有効にするため、システムの起動にロードできます。
```
sudo systemctl enable cachet-monitor.service
```

## 結論 {#conclusion}
Cachet Aは無料で**オープンソースステータスページ**システムです。ただし、 **Webアプリケーション監視** のボックス外の機能は提供されません。代わりに、インシデント、コンポーネント、グループなどのアクションを実行するために使用できる強力なREST APIがあります。この記事では、サードパーティのプラグインを使用して、Cachetのアプリケーション監視を自動化しました。とりわけ、独自のプラグインを開発するか、他の既存のプラグインを使用してジョブを行うことができます。
さらに、[containerize.com][6]は、複数の言語とフレームワークでオープンソース製品のスタックを強化する途中です。定期的な更新については、より興味深い記事については[ステータスページ][7]カテゴリにご注目ください。

## 探検
次のリンクが関連する場合があります。
  * [最高のオープンソースステータスページシステム][8]
  * [CACHET  - 無料およびオープンソースのステータスページソフトウェア][9]
  * [2020年のトップ5オープンソースステータスページソフトウェア][10]

  
[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
