---
title: "Kafka vs Redis Pub-Sub, 알아야 할 차이점" 
seoTitle: "Kafka vs Redis Pub-Sub, 알아야 할 차이점" 
description: "많은 양의 데이터를 관리하고 Kafka와 Redis를 혼동하는 도구를 찾고 있다면. 이 기사 kafka vs redis pub-sub가 당신을 도울 것입니다." 
date: Fri, 09 Apr 2021 07:43:18 +0000
author: Assad Mahmood
summary: "Redis와 Kafka는 자신의 방식으로 비슷한 작업을 수행하는 두 가지 도구입니다. Kafka vs Redis 비교는 당신이 알아야 할 통찰력을 제공합니다." 
url: /ko/kafka-vs-redis-pub-sub-differences-which-you-should-know/
categories: ['Database Management Software']
---

{{< figure align=center src="images/kafka-vs-redis.png" alt="Kafka vs Redis Pub Sub">}}


## Redis와 Kafka는 자신의 방식으로 비슷한 작업을 수행하는 두 가지 도구입니다. Kafka vs Redis 비교는 당신이 알아야 할 통찰력을 제공합니다.
“Redis”에 관한 일련의 기사에서 우리는 [Redis의 기본][1]에 대해 배웠고 [Redis Pub/Sub Works][2]와 NOSQL 데이터베이스와 어떻게 경쟁하는지 탐색했습니다. 오늘 시리즈에서 우리는 Redis를 다양한 작업의 경쟁사 중 하나 인 Kafka와 비교할 것입니다. 이 기사에서 Kafka vs Redis Pub-Sub에서는 Kafka가 Redis와 어떻게 다른지, 그리고 그 유사점이 무엇인지 탐구 할 것입니다. 그래서 시작하겠습니다.
  * Kafka는 무엇입니까?
  * Redis는 무엇입니까?
  * 주요 차이점은 무엇입니까?
  * 언제 어느 것을 사용해야합니까?
  * 결론

## Kafka는 무엇입니까?
Apache Kafka는 오픈 소스 분산 이벤트 스트림 플랫폼입니다. 고성능 데이터 파이프 라인 및 스트리밍 분석에 사용됩니다. Kafka는 [Publish-Subscribe 메시징 시스템][3] 역할을합니다. 이를 통해 고속으로 생성 된 새 데이터를 처리 할 수 ​​있으며 일부 데이터베이스에도 저장할 수 있습니다.
Kafka는 **서버  **및 **  클라이언트** 로 구성된 분산 시스템입니다. 베어 메탈 하드웨어, 가상 머신 및 온 프레미스 및 클라우드 환경의 컨테이너에 배치 할 수 있습니다.

## Redis는 무엇입니까?
Redis는 오픈 소스, 고급 키 가치 저장소입니다. 문자열, 해시, 목록, 세트 및 정렬 된 세트의 여러 데이터 유형을 지원합니다. 그렇기 때문에 종종 데이터 구조 서버라고합니다.
Redis는 또한 NOSQL 데이터베이스로 간주됩니다. He Redis에 대한 자세한 토론과 그것이 어떻게 작동하는지에 대한 자세한 내용은 우리의 기사를 참조하십시오.“[Memory In Memory 데이터베이스에 대한 초보자 안내서][1].

## 주요 차이점은 무엇입니까?
**Redis ** Pub-Sub는 주로 생성 된 모든 메시지가 한 번에 모든 소비자에게 전달되는 화재 및 포 게트 시스템과 같습니다. 데이터는 어디에도 저장되지 않습니다. Redis와 관련하여 메모리에 제한이 있습니다. 또한 생산자와 소비자의 수는 Redis의 성능에 영향을 줄 수 있습니다.
반면 **Kafka** 는 대기열로 사용할 수있는 높은 처리량, 분산 로그입니다. 또한 대기열을 통해 전송 된 메시지에 대한 지속성을 제공합니다.
**redis **는 **푸시 기반**  메시지 전달을 지원합니다. 즉, Redis로 추진 된 모든 메시지는 모든 가입자에게 자동으로 전달됩니다.
**Kafka **는 **PUTL 기반**  메시지 전달을 지원합니다. Kafka에 게시 된 메시지는 가입자에게 자동으로 배포되지 않습니다. 대신 소비자는 메시지를 소비 할 준비가되었을 때 메시지를 요청합니다.
**redis **는 메시지를 대신 저장하지 않으며 메시지는 모든 소비자에게 한 번에 전달 된 다음 제거됩니다. 그러나 **Kafka  **로그이기 때문에 항상 메시지가 있습니다. 보존 정책을 설정하여 7 일 **  보유** 라고 말하면이를 모니터링 할 수 있습니다.

## 언제 어느 것을 사용할 수 있습니까?

### redis
  * 당신이 생산하는 모든 메시지가 소비자에게 즉시 전달되는 화재 앤 포 게트 시스템을 원한다면.
  *속도 **가 가장 걱정되는 경우*.
  *storage **가 중요하지 않은 경우, 시스템이 전송 된 메시지를 보유하는 것을 원하지 않습니다.
  * 처리 될 데이터의 양은 크지 않습니다.

### Kafka
  *당신이 원한다면 **신뢰성** .
  * 시스템에 소비 후에도 전송 된 메시지 사본을 갖기를 원한다면.
  *속도 **가 큰 관심사가 아니라면*.
  * 그리고 데이터 크기는 엄청납니다.

## 결론
이 튜토리얼 Kafka vs Redis Pub-Sub에서 우리는 Kafka와 Redis를 탐구했습니다. 그들의 차이점과 유사점은 무엇입니까? 우리는 또한 당신이 Redis해야 할 때와 Kafka를 사용하는 것이 좋을 때를 배웠습니다. 다가오는 자습서에서는 Kafka 및 심층 분석에 대한 자세한 내용을 살펴 보겠습니다.

  
[1]: https://blog.containerize.com/database-management-software/a-beginners-guide-to-redis-in-memory-database/
[2]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
[3]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/

#무엇
