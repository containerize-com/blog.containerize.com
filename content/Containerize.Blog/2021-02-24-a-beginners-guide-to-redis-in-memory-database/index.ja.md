---
title: "Redis In-Memoryデータベースの初心者向けガイド" 
seoTitle: "Redis In-Memoryデータベースの初心者向けガイド" 
description: "Redis Inmemoryデータベースは、オープンソースのキー価値ストアです。 NOSQLデータベースとも呼ばれます。このRedisチュートリアルは、Redisのコアコンセプトについてガイドします。" 
date: Wed, 24 Feb 2021 11:48:57 +0000
author: Assad Mahmood
summary: "このチュートリアルは、Redis In-Memoryデータベースについて学ぶのに役立ちます。これはオープンソースであり、キー値ストアとも呼ばれます。これは、データベースの非関係の一種です。" 
url: /ja/a-beginners-guide-to-redis-in-memory-database/
categories: ['Database Management Software']
---

## このチュートリアルは、Redis In-Memoryデータベースについて学ぶのに役立ちます。これはオープンソースであり、キー値ストアとも呼ばれます。これは、データベースの非関係の一種です。

{{< figure align=center src="images/redis-in-memory-database.png" alt="インメモリデータベースRedis">}}

 **Redis** は実際には「 **re** mote **di** ctionary** s**erver」を表しています。データベースRedisは、オープンソースの高度なキー価値ストアです。文字列、ハッシュ、リスト、セット、ソートセットのいくつかのデータ型をサポートしています。そのため、データ構造サーバーと呼ばれることがよくあります。 RedisはCで書かれています。このRedisチュートリアルは、Redis Inmemoryデータベースの概念をよく理解しています。
*  **[NOSQLデータベースとは][1]**  
*  **[redisはnosqlデータベースですか？][2]**  
*  **[Redisを使用する時期？][3]**  
*  **[Redis vs他のキー価値ストア][4]**  
*  **[ubuntuにredisをインストール][5]**  
*  **[結論][6]**  

## NOSQLデータベースとは何ですか {#nosql}

NOSQLデータベースは非常に人気があります。大企業は、数百のペタバイトのデータを保存し、毎秒数百万のクエリを実行するために彼らに依存しています。しかし、NOSQLデータベースとは何ですか？どのように機能し、なぜ従来のリレーショナルデータベースよりもはるかに優れているのですか？まず、MySQL、Mariadb、SQL Serverなどのリレーショナルデータベースの問題をすばやく説明します。
リレーショナルデータベースは、リレーショナルデータを可能な限り効率的に保存するように構築されています。顧客、注文、製品のためのテーブルを用意して、論理的に結びつけることができます。このタイトな組織は、データを管理するのに最適ですが、スケーラビリティが低いコストがかかります。彼らはこれらの関係を維持する必要があり、それは集中的なプロセスであり、多くの記憶と計算力を必要とします。
一方、NOSQLデータベースは垂直方向と水平方向の両方でスケーリングできます。これを建物と比較できます。垂直方向のスケーリングとは、既存の建物に床を追加することを意味しますが、水平スケーリングとは建物を追加することを意味します。スキーマ変更は、リレーショナルデータベースの最大の課題の1つです。 NOSQLデータベースは、大量のデータと高いユーザーロードを使用して簡単にスケーリングすることを意味する固定スキーマを必要としません。

## RedisはNOSQLデータベースですか？ {#isnosql}

これは、インターネット上の開発者コミュニティ全体で最も人気のある質問の1つです。簡単な答えはイエスです。 Redisは、オープンソース内のメモリデータ構造ストアです。
実際には、ドキュメントデータベース、キー価値ストア、ワイド列ストア、グラフストアを含む4種類のNOSQLデータベースタイプがあります。したがって、サーバーRedis In-Memoryデータベースは、KeyvalueストアであるNOSQLデータベースカテゴリに分類されます。

## Redisをいつ使用するのですか？  {#when}

すべてのテクノロジーにはメリットとデメリットがあります。したがって、データベースで非常に多くのオプションが利用可能です。特定のテクノロジーをいつ使用しないかを理解することが重要になります。常にジョブに適したツールを選択してください。
安定した、予測可能な、リレーショナルデータの場合、リレーショナルデータベースを選択します。一時的な非常に動的なデータの場合、NOSQLデータベースを選択します。データベースのスキーマは、リレーショナルデータベースの最大の課題の1つであり、大きなデータベースリレーショナルで永遠に取得できます。
頻繁に変更される非常に動的なデータがあり、複雑なクエリを作成する必要がなく、データをキー価値のペアとして保存する必要がない場合は、Redisが潜在的に良い選択になる可能性があります。範囲クエリ、正規表現検索、インデックス作成、およびMapReduceを実行できる、より注目のドキュメント指向のデータベースが必要な場合は、MongoDB、CouchDBなどを確認する必要があります。
Redis Inmemoryデータベースの使用例は次のとおりです。
*  **アクセスロガー**  ：Fast Paceで多くのアクティビティを記録する必要がある場合、Redisは良い解決策です。
*  **カウンターの維持**  ：Redisを使用して異なるカウントを維持できます。カウンターをダウンロードします
*  **ユーザーの存在**  ：速度のため、ユーザーの「オンライン /オフライン」ステータスを保存するために使用できます。
*  **キュー**  ：Redisを使用して一時的なキューを維持して、バックグラウンドジョブを処理できます。

## Redis vs他のキー価値ストア {#other}

Redis In-Memoryデータベースは非常に高速で、1秒あたり約110000セット、約81000セットを1秒間獲得できます。文字列、ハッシュ、リスト、セット、ソートセットのいくつかのデータ型をサポートしています。 Redisはシングルスレッドで、酸に準拠することができます（原子性、一貫性、分離、耐久性）。他のNOSQLデータベースは通常、酸のコンプライアンスを提供しないか、部分的にそれを提供します。

## UbuntuにRedisをインストールします {#install}

UbuntuにRedisをインストールするには、端末に移動して、次のコマンドを入力します
```
$ sudo apt-get update 
$ sudo apt-get install redis-server
```
次のコマンドがRedisサーバーを開始します
```
$ redis-server
```
Redisサーバーが実行されているかどうかを確認するには、  **Redis-Cli**  コマンドを使用して接続できます。
```
$ redis-cli 
```
このコマンドは、次の出力を提供します。つまり、サーバーが実行されていることを意味し、今では接続されています。
```
redis 127.0.0.1:6379>
```
次に、次の  **ping** コマンドを入力すると、サーバーから **pong**  として応答が表示されます。
```
redis 127.0.0.1:6379> ping
PONG
```

## 結論 {#conclusion}

このRedisチュートリアルでは、Redis Inmemoryデータベースについて学びました。リレーショナルと非リレーショナル（NOSQL）データベースの主な違いを調査しました。また、いつRedisを使用する必要があり、最良のユースケースは何ですか。このチュートリアルは、進行中の一連のチュートリアルの一部です。今後の記事では、Redisの特定のユースケースをさらに検討します。



 [1]: #nosql
 [2]: #isnosql
 [3]: #when
 [4]: #other
 [5]: #install
 [6]: #conclusion
