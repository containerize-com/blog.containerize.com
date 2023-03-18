---
title: "Kafka vs Redis Pub-Sub、あなたが知っておくべき違い" 
seoTitle: "Kafka vs Redis Pub-Sub、あなたが知っておくべき違い" 
description: "大量のデータを管理し、KafkaとRedisを混乱させるツールを探している場合。この記事Kafka vs Redis Pub-Subが役立ちます。" 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "RedisとKafkaは、たまたま独自の方法で同様の仕事をしている2つの異なるツールです。 Kafka vs Redisの比較は、あなたが知っておくべき洞察を提供します。" 
url: /ja/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## RedisとKafkaは、たまたま独自の方法で同様の仕事をしている2つの異なるツールです。 Kafka vs Redisの比較は、あなたが知っておくべき洞察を提供します。
「Redis」に関する一連の記事で、[Redisの基本] [1]について学び、[Redis Pub/Sub Works] [2]とこれがNOSQLデータベースとどのように競合するかを調査しました。今日のシリーズで前進することで、Redisをさまざまなタスクの競合他社の1つであるKafkaと比較します。この記事では、Kafka vs Redis Pub-Subでは、KafkaがRedisとどのように異なるか、そしてそれらの類似点は何であるかを探ります。それでは、始めましょう。
  *カフカとは何ですか？
  *レディスとは何ですか？
  *主な違いは何ですか？
  *いつ使用するか？
  * 結論

## カフカとは何ですか？
Apache Kafkaは、オープンソース分散イベントストリームプラットフォームです。高性能データパイプラインとストリーミング分析に使用されます。 Kafkaは[出版されたメッセージメッセージングシステム] [3]として機能します。これにより、新しいデータを高速で生成して処理でき、さらにデータベースにも保存できます。
Kafkaは、**サーバー**および**クライアント**で構成される分散システムです。裸のメタルハードウェア、仮想マシン、およびコンテナにオンプレミスおよびクラウド環境に展開できます。

## redisとは何ですか？
Redisは、オープンソースの高度なキー価値ストアです。文字列、ハッシュ、リスト、セット、ソートセットのいくつかのデータ型をサポートしています。そのため、データ構造サーバーと呼ばれることがよくあります。
Redisは、NOSQLデータベースとも考慮されます。彼のRedisとそれがどのように機能するかについての詳細な議論については、私たちの記事「[Redis Inmemoryデータベースの初心者ガイド] [1]」を参照できます。

## 主な違いは何ですか？
** Redis ** Pub-Subは、主に生成されたすべてのメッセージが一度にすべての消費者に配信され、データはどこにも保存されないため、火災と焦点システムのようなものです。 Redisに関してメモリに制限があります。また、生産者と消費者の数は、Redisのパフォーマンスに影響を与える可能性があります。
一方、** kafka **は、キューとして使用できる高スループットの分散ログです。また、キューから送信されたメッセージの持続性も提供します。
** Redis **サポート**プッシュベース**メッセージの配信。これは、Redisにプッシュされたすべてのメッセージがすべてのサブスクライバーに自動的に配信されることを意味します。
** Kafka **は、**メッセージの配信**をサポートしています。 Kafkaに公開された意味メッセージは、購読者に自動的に配布されません。代わりに、消費者はこれらのメッセージを消費する準備ができたらメッセージを求めます。
** Redis **は代わりにメッセージを保存せず、メッセージはすべての消費者に一度に配信され、その後削除されます。ただし、** kafka **はログであるため、常にメッセージがあります。これを監視することができます。保持ポリシーは7日間**保持**を設定できます。

## いつ使用するの？

### Redis
  *あなたが生成するすべてのメッセージが消費者に即座に配信される、火災と焦点の種類のシステムが必要な場合。
  ***速度**が最も関心がある場合。
  ***ストレージ**が重要ではなく、送信されたメッセージを保持したくない場合
  *対処されるデータの量はそれほど大きくありません。

### kafka
  ***信頼性**が必要な場合。
  *システムに、消費後も送信されたメッセージのコピーをシステムにしたい場合。
  ***速度**が大きな懸念事項ではない場合。
  *そして、あなたのデータサイズは巨大です。

## 結論
このチュートリアルKafka vs Redis Pub-Subで、KafkaとRedisを探索しました。それらの違いと類似点は何ですか？また、いつredisをすべきか、いつKafkaを使用するのが良いかを学びました。今後のチュートリアルでは、Kafkaと詳細な分析について詳しく説明します。
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#何
