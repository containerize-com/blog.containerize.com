---
title: "Botpress를 사용하여 비즈니스를위한 AI 기반 FAQ 봇을 만드는 방법" 
seoTitle: "Botpress를 사용하여 비즈니스를위한 AI 기반 FAQ 봇을 만드는 방법" 
description: "이 블로그 게시물에서는 웹 사이트에서 Botpress를 사용하여 AI 기반 FAQ 봇을 사용하여 고객 쿼리를 자동화하는 방법을 배웁니다." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "기업은 쿼리를 효율적으로 해결하기 위해 더 나은 고객 지원 플랫폼이 필요합니다. 이 튜토리얼에서는 Botpress를 사용하여 AI 기반 FAQ 봇을 만드는 방법을 배울 것입니다." 
url: /ko/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## 비즈니스는 쿼리를 효율적으로 해결하기 위해 더 나은 고객 지원 플랫폼이 필요합니다. 이 자습서에서는 Botpress를 사용하여 AI 기반 FAQ 봇을 만드는 방법을 배웁니다.

{{< figure align=center src="images/botpress-banner.png" alt="Botpress를 사용하여 비즈니스를위한 FAQ 봇">}}

FAQ 자동화는 챗봇을 사용하여 자주 묻는 질문에 답변하여 고객의 경험을 온라인으로 향상시키는 것으로 구성됩니다. 인공 지능 및 머신 러닝의 발전으로 AI 기반 대화적인 챗봇에 대한 수요는 많은 인기와 수요를 얻었습니다. 그리고 이것은 대부분 모든 비즈니스가 비즈니스가 오프라인 상태 일 때에도 고객 경험을 향상시키기를 원하기 때문입니다. 대화적인 챗봇은 비즈니스가 고객에게 항상 원하는 하이 터치 지원을 제공 할 수있게 해주었습니다. 이 블로그 게시물의 목적은 Botpress를 사용하여 AI 기반 FAQ 봇을 설정하는 데 도움이됩니다.
이 기사에서는 Botpress의 NLU 모듈과 자연어 이해 / 처리가 어떻게 작동하는지에 대해 배우고 기업이 높은 고객 만족도를 달성 할 수 있도록 도울 수 있습니다. 시작하자!
* **[자연어 처리는 무엇입니까][1]** 
* [ **사용 사례를 결정** ][2]
* [ **Botpress 설치** ][3]
* [ **새로운 봇 만들기** ][4]
* [ **Q & A BOT를 훈련 시키십시오** ][5]
* [ **결론** ][6]

## 자연어 처리 가란 무엇입니까? {#nlu}

NLP (Natural Language Processing)는 컴퓨터가 인간 언어를 이해, 해석 및 조작하는 데 도움이되는 인공 지능의 지점입니다. NLP는 컴퓨터가 자신의 언어로 인간과 의사 소통하는 데 도움이됩니다. 또한 컴퓨터가 텍스트를 읽고, 연설을 듣고, 해석하고, 감정을 측정 할 수있게합니다.
NLP의 기본 작업에는 토큰 화 및 구문 분석, 스템 밍, 부품 태그 태깅, 언어 탐지 및 시맨틱 관계 식별이 포함됩니다.
NLU는 모든 들어오는 메시지를 처리하고 의도 분류, 언어 식별, 엔티티 추출 및 슬롯 태깅을 수행하는 Botpress의 모듈입니다.

## 사용 사례를 결정하십시오 {#case}

FAQ AI 챗봇을 만들려면 비즈니스에 대한 사용 사례가 있어야합니다. 이 튜토리얼을 위해, 우리는 사용자가 제품 가격 및 비즈니스 타이밍과 관련된 임의의 질문을하기를 원합니다.

## Botpress를 설치하십시오 {#install}

Botpress를 설치하려면 [웹 사이트][7]로 가서 '무료 다운로드'를 클릭하고 플랫폼을 선택하십시오. 이 튜토리얼에는 Mac 버전을 사용하고 있습니다. 다운로드가 완료되면 오른쪽 폴더로 이동하여 ZIP 파일을 추출하고 터미널에서 다음 명령을 실행할 수 있습니다.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="Botpress 시작">}}


## 새 봇을 만듭니다 {#create}

이제 봇 만들기 **를 클릭 한 다음**새로운 봇 **를 선택하여 실제로 첫 번째 봇을 만들고 싶습니다. 봇을 FAQ 봇에게 전화 한 다음 봇 템플릿으로** 봇**를 클릭하기 전에** 빈 봇**를 선택합니다.

{{< figure align=center src="images/create-bot.gif" alt="새 뷰트를 만듭니다">}}

이제 Botpress Studio 편집기 에서이 봇을 편집 할 것입니다.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="스튜디오에서 Botpress 편집">}}

이제 스튜디오에는 왼쪽 사이드 바를 따라 많은 메뉴가 있습니다. 그러나 단순성을 위해 Q & A 섹션을 고수 할 것입니다.
"Q & A"아이콘을 클릭하고 가능한 / 자주 묻는 질문 및 적절한 답변을 추가하십시오.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Botpress Q & A">}}


## FAQ 봇을 훈련시킵니다 {#train}

이제 완료되면 Q & A 섹션의 오른쪽 하단에있는 "Train Chatbot"버튼을 클릭하여 FAQ 봇을 훈련시켜야합니다.

{{< figure align=center src="images/train-bot.gif" alt="Botpress Train Bot">}}

교육이 완료된 후 내장 에뮬레이터 도구를 사용하여 FAQ 봇을 테스트 할 수 있습니다.

{{< figure align=center src="images/test-faq-bot.gif" alt="FAQ 봇을 테스트하십시오">}}

이제 FAQ 봇이 준비되어 있으면 Botpress의 [공식 포함][8] 안내서를 따라 웹 사이트 에이 봇을 배포 할 수 있습니다.

## 결론 {#conclusion}

이 블로그 게시물에서 우리는 자연어 처리를 배우고 이해합니다. 우리는 또한 봇 제작 과정을 실시합니다. 우리는 고객이 비즈니스 타이밍 및 지불 계획에 대해 알 수 있도록 간단한 FAQ 봇을 교육했습니다. 튜토리얼의 목적은 초보자가 Botpress를 사용하여 AI 기반 FAQ 봇을 신속하게 시작하는 데 도움이되었습니다.



[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
