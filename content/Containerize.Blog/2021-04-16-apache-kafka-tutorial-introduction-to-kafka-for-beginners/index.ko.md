---
title: "Apache Kafka 튜토리얼 -초보자를위한 Kafka에 소개" 
seoTitle: "Apache Kafka 튜토리얼 -초보자를위한 Kafka에 소개" 
description: "Apache Kafka는 오픈 소스 분산 이벤트 스트리밍 플랫폼입니다. 이 튜토리얼은 Apache Kafka Ground Up을 이해하는 초보자 가이드입니다." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka는 오픈 소스 분산 이벤트 스트리밍 플랫폼입니다. 이 튜토리얼은 초보자의 관점에서 Kafka에 대한 소개를 제공합니다." 
url: /ko/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka는 오픈 소스 분산 이벤트 스트리밍 플랫폼입니다. 이 튜토리얼은 초보자의 관점에서 Kafka에 대한 소개를 제공합니다.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="Apache Kafka 오픈 소스 자습서">}}

최근에 우리는 Kafka와 Redis Pub-Sub의 차이점에 대해 설명하는“Kafka vs Redis Pub-Sub”에 관한 기사를 썼습니다. 이 기사에서 우리는 곧 Kafka 메시지 중개인 자체에 대해 설명했습니다. 따라서이 기사는 Apache Kafka 오픈 소스 분산 이벤트 스트리밍 플랫폼에 대한 통찰력을 제공하며 Kafka 분산 메시지 대기열로 시작하는 데 필요한 모든 소개를 제공합니다. 그래서 시작하겠습니다.
  * [아파치 카프카 소개][1]
  * [메시징 시스템이란 무엇입니까?][2]
  * [기본 용어][3]
  * [설치 단계][4]
  * [주제 만들기][5]
  * [주제에 메시지 작성][6]
  * [주제에서 메시지 읽기][7]
  * [결론][8]

## Apache Kafka 소개   {#intro}
Apache Kafka 오픈 소스 메시지 중개인은 LinkedIn에서 시작하여 나중에 오픈 소스 Apache 프로젝트가되었습니다. Kafka 메시지 중개인 소프트웨어는 Scala와 Java로 개발되었습니다. Apache Kafka Broker는 응용 프로그램, 서버 및 프로세서간에 데이터를 교환 할 수있는 게시중인 메시징 시스템입니다. 빠르고 확장 가능하며 디자인으로 배포됩니다. 초당 수백만 개의 데이터 또는 메시지를 처리 ​​할 수 ​​있습니다. 소스 (생산자) 시스템과 대상 (소비자) 시스템 사이의 중재자 역할을합니다. Netflix, Uber 및 수천 개의 그러한 회사와 같은 조직은 Apache Kafka의 실시간 스트리밍을 사용합니다. 다른 메시징 시스템과 비교할 때 Kafka 메시지 큐 소프트웨어는 더 나은 처리량, 내장 파티션, 복제 및 고유 결함 허용 오류가 있습니다. 이것은 대규모 메시지 처리 응용 프로그램에 적합합니다.

## 메시징 시스템이란 무엇입니까?   {#Messaging}
메시징 시스템은 둘 이상의 사람, 장치 등 간의 간단한 메시지 교환입니다. 한 응용 프로그램에서 다른 응용 프로그램으로 데이터 전송을 담당하므로 응용 프로그램은 데이터에 집중할 수 있지만 공유 방법에 대해 걱정하지 않습니다.
메시징 시스템의 한 가지 유형은 "포인트로 포인트 메시징 시스템"입니다. 이 시스템에서는 메시지가 생산자가 보냈을 때 큐에 저장됩니다. 주어진 시간에 한 명의 소비자 만 메시지를 소비 할 수 있습니다. 메시지가 소비되면 대기열에서 제거됩니다. 이 시스템의 예 중 하나는 주문 처리 시스템입니다. 하나의 프로세스 만 주문을 구할 수 있습니다.
다른 유형의 메시징 시스템은 발신자가 메시지를 보내고 수신자가 해당 메시지를 읽을 수있는 펍 서브 메시징 시스템입니다. Apache Kafka 메시징에서 발신자는 메시지를 게시하는 프로듀서로 알려져 있으며 수신기는 구독하여 해당 메시지를 소비하는 소비자로 알려져 있습니다. 이 시스템의 예로는 많은 채널을 게시하는 케이블 TV이며, 누구나 구독 채널을 사용할 때마다 선택한 채널을 구독하고받을 수 있습니다.

## 기본 용어   {#terms}
Best Message Deue Apache Kafka에 대해 더 많이 이야기하기 전에 일부 용어를 이해해야합니다.
  ***주제**  : 특정 범주에 속하는 메시지 스트림을 주제라고합니다.
  ***파티션**  : 주제에는 많은 파티션이있을 수 있으므로 임의의 양의 데이터를 처리 할 수 ​​있습니다.
  ***파티션 오프셋**  : 각 파티션 된 메시지에는 "오프셋"이라는 고유 한 시퀀스 ID가 있습니다.
  ***파티션의 복제본**  : 복제본은 파티션의 백업입니다. 데이터 손실을 방지하는 데 사용됩니다.
  ***브로커**  : 게시 된 데이터를 유지 관리 할 책임이 있습니다.
  ***Kafka Cluster**  : Kafka는 둘 이상의 브로커가 Kafka Cluster라고합니다.
  ***제작자**  : 메시지 게시자는 하나 이상의 주제에 대한 메시지입니다.
  ***소비자**  : 브로커의 데이터 독자입니다. 그들은 여러 주제를 구독하고 주제에 메시지가있을 때마다 소비합니다.
  ***리더**  : 모든 판독 값을 담당하는 노드는 주어진 파티션에 대해 씁니다.
  ***팔로워**  : 리더 지침을 따르는 노드를 팔로워라고합니다.

## 설치 단계   {#steps}

### 1 단계 - Java 설치 확인
현재 컴퓨터에 이미 Java를 설치 했으므로 다음 명령을 사용하여 확인하십시오.
```
$ java -version
```
Java가 컴퓨터에 성공적으로 설치된 경우 설치된 Java 버전을 볼 수 있습니다. 그렇지 않다면 먼저 Java를 설치해야합니다.

### 2 단계 - Zookeeper 프레임 워크 설치
다음 링크를 방문하여 최신 버전의 Zookeeper를 다운로드하십시오.
{{_LINE_46_}}
설치 및 구성이 완료되면 다음 명령으로 Zookeeper를 시작할 수 있습니다.
```
$ bin/zkServer.sh start
```
그런 다음 다음 명령을 사용하여 CLI에서 Zookeeper에 연결하십시오.
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
일단 연결되면 이런 일이 보일 것입니다
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### 3 단계 - Apache Kafka 설치
최신 Kafka Best Message Broker 릴리스를 다운로드하여 다음 URL에서 추출하십시오.
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
올바른 순서로 모든 서비스를 시작하려면 다음 명령을 실행하십시오.
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
다른 터미널 세션을 열고 실행하십시오.
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## 주제 만들기   {#Create}
메시지 나 이벤트를 주제에 작성하려면 먼저 주제를 만들어야합니다. 주제를 만들려면 터미널을 열고 다음 명령을 실행하십시오.
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
이제 우리는 날씨에 대한 정보를 게시 할 "Weather-Updates"라는 이름의 주제를 만들었고 소비자는 해당 메시지를 소비 할 것입니다.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## 주제   {#write}에 메시지를 쓰십시오.
콘솔 생산자 클라이언트를 실행하여 주제에 몇 가지 이벤트를 작성하십시오. 기본적으로 입력 한 각 라인은 별도의 이벤트가 주제에 기록됩니다.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## 주제   {#read}에서 메시지 읽기
다른 터미널 세션을 열고 콘솔 소비자 클라이언트를 실행하여 방금 만든 이벤트를 읽으십시오.
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
예를 들어, 실험하십시오 : 예를 들어, 생산자 터미널 (이전 단계)으로 다시 전환하여 추가 이벤트를 작성하고 소비자 터미널에 이벤트가 어떻게 나타나는지 확인하십시오.

## 결론   {#conclusion}
이 튜토리얼에서 우리는 Apache Kafka 사용의 기본 사항에 대해 배웠습니다. Kafka 대기 서비스를 설치 한 다음 구성했습니다. 또한 Kafka에서 주제를 작성하고 주제로 메시지를 보내는 방법 및 주제에서 메시지를 읽는 방법을 배웠습니다. 이 기사가 당신에게 유용했기를 바랍니다. 다음 기사에서 만나자.
_ 어떤 오픈 소스 분산 이벤트 스트리밍 플랫폼을 사용하십니까?. 질문이 있습니까?, 제발 _ [연락을 취합니다][9].

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [최고의 무료 및 오픈 소스 메시지 큐 (MQ) 소프트웨어][10]
  * [Kafka vs Redis Pub-Sub, 당신이 알아야 할 차이][11]
  * [Redis Pub/Sub에 대한 소개 및 어떻게 작동합니까?][12]

  
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
