---
title: "Apache Kafkaチュートリアル - 初心者向けのKafkaへの紹介" 
seoTitle: "Apache Kafkaチュートリアル - 初心者向けのKafkaへの紹介" 
description: "Apache Kafkaは、オープンソース分散イベントストリーミングプラットフォームです。このチュートリアルは、Apache Kafkaのゼロを理解するための初心者ガイドです。" 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafkaは、オープンソース分散イベントストリーミングプラットフォームです。このチュートリアルでは、初心者の観点からKafkaの紹介を提供します。" 
url: /ja/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafkaは、オープンソース分散イベントストリーミングプラットフォームです。このチュートリアルでは、初心者の観点からKafkaの紹介を提供します。

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafkaオープンソースチュートリアル">}}

最近、KafkaとRedis Pub-Subの違いについて説明する「Kafka vs Redis Pub-Sub」に関する記事を書きました。その記事では、Kafka Message Broker自体についてまもなく説明しました。そのため、この記事では、Apache Kafka Open Source分散イベントストリーミングプラットフォームに関するより多くの洞察を提供し、Kafka分散メッセージキューからのキックスタートに必要なすべての紹介を提供します。それでは、始めましょう。
  * [Apache Kafkaの紹介][1]
  * [メッセージングシステムとは？][2]
  * [基本的な用語][3]
  * [インストール手順][4]
  * [トピックを作成][5]
  * [トピックにメッセージを書く][6]
  * [トピックからメッセージを読む][7]
  * [結論][8]

## apache kafkaの紹介 {#intro}
Apache KafkaオープンソースメッセージブローカーはLinkedInで開始され、後にオープンソースApacheプロジェクトになりました。 Kafka Message Brokerソフトウェアは、ScalaとJavaで開発されています。 Apache Kafka Brokerは、アプリケーション、サーバー、プロセッサ間でデータを交換できるようにする出版されたメッセージングシステムです。高速でスケーラブルで、設計によって配布されます。数百万のデータやメッセージを1秒間に処理できます。ソース（プロデューサー）システムとターゲット（消費者）システムの間のメディエーターとして機能します。 Netflix、Uber、および数千のそのような企業などの組織は、Apache Kafkaのリアルタイムストリーミングを利用しています。他のメッセージングシステムと比較して、Kafkaメッセージキューソフトウェアには、スループット、組み込みのパーティション、複製、および固有のフォールトトレランスが優れています。これにより、大規模なメッセージ処理アプリケーションに適しています。

## メッセージングシステムとは何ですか？   {#messaging}
メッセージングシステムは、2人以上の人、デバイスなどの間のメッセージの簡単な交換です。あるアプリケーションから別のアプリケーションへのデータ転送を担当するため、アプリケーションはデータに焦点を合わせることができますが、共有する方法については心配しません。
メッセージングシステムの1つのタイプは、「ポイントツーポイントメッセージングシステム」です。このシステムでは、プロデューサーから送信されると、メッセージはキューに保存されます。いつでもメッセージを消費できる消費者は1人だけです。また、メッセージが消費されると、キューから削除されます。このシステムの例の1つは、注文処理システムです。 1つのプロセスのみが順序を調達できる場合。
別のタイプのメッセージングシステムは、送信者がメッセージと受信者がそのメッセージを読むことを可能にするPub-Subメッセージングシステムです。 Apache Kafka Messagingでは、送信者はメッセージを公開するプロデューサーとして知られており、受信者は消費者として知られています。このシステムの例は、多くのチャネルを公開するケーブルテレビであり、誰でもチャンネルの選択を購読して、サブスクライブされたチャネルが利用可能になるたびにそれらを取得できます。

## 基本用語 {#terms}
BestメッセージキューApache Kafkaについて詳しく説明する前に、いくつかの用語を理解する必要があります。
  ***トピック**：特定のカテゴリに属する​​メッセージのストリームはトピックと呼ばれます。
  ***パーティション**：トピックには多くのパーティションがある可能性があるため、任意の量のデータを処理できます。
  ***パーティションオフセット**：各パーティションメッセージには、「オフセット」と呼ばれる一意のシーケンスIDがあります。
  ***パーティションのレプリカ**：レプリカはパーティションのバックアップです。データの損失を防ぐために使用されます。
  ***ブローカー**：公開されたデータを維持する責任があります。
  ***Kafka Cluster** ：Kafkaが複数のブローカーを持っていることはKafka Clusterと呼ばれます。
  ***プロデューサー**：メッセージの出版社は1つ以上のトピックへの出版社です。
  ***消費者**：ブローカーのデータの読者です。彼らは複数のトピックを購読し、トピックにメッセージがあるたびに消費します。
  ***リーダー**：特定のパーティションのすべての読み取りと書き込みの責任ノードです。
  ***フォロワー**：リーダーの指示に続くノードはフォロワーと呼ばれます。

## インストール手順 {#steps}

### ステップ1  -  Javaのインストールの検証
うまくいけば、あなたはすでにあなたのマシンにJavaをマシンにインストールしているので、次のコマンドを使用してそれを確認するだけです。
```
$ java -version
```
Javaがマシンに正常にインストールされている場合、インストールされているJavaのバージョンが表示されます。そうでない場合は、最初にJavaをインストールする必要があります。

### ステップ2  -  Zookeeperフレームワークのインストール
次のリンクにアクセスして、Zookeeperの最新バージョンをダウンロードしてください。
{{_LINE_46_}}
インストールと構成が完了したら、次のコマンドでZookeeperを開始できます
```
$ bin/zkServer.sh start
```
次に、次のコマンドを使用して、CLIからZookeeperに接続します
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
接続されたら、このようなものが見えます
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### ステップ3  -  Apache Kafkaのインストール
最新のKafka Best Message Brokerリリースをダウンロードして、次のURLから抽出します
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
すべてのサービスを正しい順序で開始するために、次のコマンドを実行します。
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
別の端末セッションを開き、実行します。
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## トピックを作成 {#create}
メッセージやイベントをトピックに書き込むには、最初にトピックを作成する必要があります。トピックを作成するには、端末を開き、次のコマンドを実行します。
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
今、私たちは天気に関する情報を公開し、消費者がそれらのメッセージを消費する「Weather-Updates」という名前のトピックを作成しました。
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## メッセージをトピックに書き込む {#write}
コンソールプロデューサーのクライアントを実行して、トピックにいくつかのイベントを作成します。デフォルトでは、入力する各行は、トピックに書き込まれる別のイベントになります。
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## トピックからメッセージを読む {#read}
別の端末セッションを開き、コンソールのコンシューマクライアントを実行して、作成したばかりのイベントを読み取ります。
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
実験してください。たとえば、プロデューサーターミナル（前のステップ）に戻り、追加のイベントを作成し、消費者端末にイベントがすぐに表示される方法を確認してください。

## 結論 {#conclusion}
このチュートリアルでは、Apache Kafkaの使用の基本について学びました。 Kafka Queuingサービスをインストールしてから構成しました。また、Kafkaでトピックを作成し、トピックにメッセージを送信し、トピックからメッセージを読む方法を学びました。この記事があなたに役立つことを願っています。次の記事でお会いしましょう。
_使用していますか？質問はありますか？、Please_ [連絡を取ります][9]。

## 探検
次のリンクが関連する場合があります。
  * [最高の無料およびオープンソースメッセージキュー（MQ）ソフトウェア][10]
  * [Kafka vs Redis Pub-Sub、知っておくべき違い][11]
  * [Redis Pub/Subの紹介とそれはどのように機能しますか？][12]

  
[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
