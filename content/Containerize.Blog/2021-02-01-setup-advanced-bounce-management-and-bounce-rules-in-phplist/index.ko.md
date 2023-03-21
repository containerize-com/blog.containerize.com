---
title: "Phplist의 고급 바운스 관리 및 바운스 규칙을 설정합니다" 
seoTitle: "Phplist의 고급 바운스 관리 및 바운스 규칙을 설정합니다" 
description: "Phplist에서 고급 바운스 관리를 활성화하고 바운스 전자 메일을 처리하십시오. 바운스 규칙을 작성하고 프로세스를 자동화하여 반환 된 메시지에 대한 다양한 작업을 수행하십시오." 
date: Mon, 01 Feb 2021 19:28:58 +0000
author: Masood Anwer
summary: "MTA가 반환하는 바운스 오류 코드 유형에 따라 고급 바운스 관리를 통해 자동화 된 작업을 자동화 할 수 있습니다." 
url: /ko/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
categories: ['Newsletters']
---

## MTA가 반환하는 바운스 오류 코드 유형에 따라 Advanced Bounce Management를 사용하면 다른 작업을 자동화 할 수 있습니다.

{{< figure align=center src="images/advanced-bounce-management-in-phpList.png" alt="Phplist의 고급 바운스 관리 및 바운스 규칙을 설정합니다">}}

우리의 [이전][1] 튜토리얼에서 우리는 이미 **phplist 바운스 처리 **를 다루었습니다. 바운스 처리에 익숙하지 않은 경우 읽을 수 있습니다. 바운스 처리를 사용하여 배송되지 않은 이메일을 Phplist 프로젝트에 다운로드 할 수 있습니다. 다운로드 된 이메일을 어떻게 처리합니까? 전혀 알지 못합니다. ** 바운스 이메일** 를 정렬 할 수있는 Advance Bounce Management를 살펴 보겠습니다. 반환 된 모든 이메일 메시지에는 MTA (Mail Transfer Agent)가 반환하는 오류 코드가 있습니다. 또한 반환 된 메시지 이메일 헤더를 검토 할 수 있으며 오류 코드를 따라 모든 정보가 포함되어 있습니다.
  * [고급 바운스 취급 활성화][2]
  * [바운스 규칙 추가][3]
  * [목록 바운스 규칙][4]
  * [결론][5]

## 고급 바운스 취급 활성화   {#enable}
먼저 config.php 파일에서 아래 코드를 복사하여 Advanced  **바운스 처리** 를 활성화하십시오.
```
define('USE_ADVANCED_BOUNCEHANDLING',1);
```
그런 다음  **시스템> 바운스 관리> 목록 바운스 규칙** 로 이동하여 바운스 규칙을 작성하십시오.
정규 표현식을 기반으로 바운스 규칙을 만들 수 있습니다. **이메일이 헤더에서 **** 에 반송 된 이유를 찾아 정규 표현식에 사용하는 이유를 찾을 수 있습니다. 또한 오류 코드 또는 정규 표현식에 따라 적절한 작업을 선택하십시오. Phplist는 다음과 같은 조치를 지원합니다. 행동 진술은 자기 설명이므로 자세히 설명 할 필요가 없습니다.
  * 가입자 삭제
  * 확인되지 않은 가입자
  * 블랙리스트 가입자
  * 블랙리스트 이메일 주소
  * 가입자 및 바운스 삭제
  * 확인되지 않은 가입자 및 바운스 삭제
  * 가입자 추가 DO-NOT-SEND 목록에 추가 및 바운스 삭제
  * do-not-send 목록에 이메일 주소를 추가하고 바운스 삭제
  * 바운스 삭제

## 바운스 규칙 추가   {#add}
첫 번째 바운스 규칙을 만들어 봅시다.
  *먼저 **(계정이 정지되었습니다 | 계정을 사용할 수 없음) **와 같은 정규 표현을 입력하십시오.** 
  * 그 후에는 적절한 조치를 선택하십시오
  * 마지막으로 규칙에 대한 메모/메모 추가

{{< figure align=center src="images/add-bounce-rule.png" alt="Phplist에서 바운스 규칙을 만듭니다">}}

다음과 같은 이유로 바운스 규칙을 추가하고 바운스 처리에 적합한 조치를 선택할 수 있습니다. 그러나 SMTP 응답을 검색하고 목록에 더 많은 규칙을 추가 할 수 있습니다.
  * 보관 된 수신자
  * type = mx : 호스트를 찾을 수 없습니다
  * 죄송합니다. 그 이름으로 사서함이 없습니다
  * 사서함 비활성화
  * 계정은 비활성화되었습니다
  *이 사서함은 비 활동으로 인해 차단되었습니다
  * 알 수없는 사용자
  * 그러한 수신자는 없습니다
  * 등등 …
**참고 : **한 번의 바운스 규칙에 여러 가지 이유를 추가하려면 파이프 기호  **| **  또는 ** 또는**  문을 사용해야합니다.

## 목록 바운스 규칙   {#list}
규칙의 수를 만들면  **Bounce Rules**  목록은 아래 스크린 샷과 같이 보입니다. 이 페이지에서 주문 변경 및 삭제와 같은 다른 작업을 수행 할 수 있습니다.

{{< figure align=center src="images/bounce-regular-expressions.png" alt="바운스 규칙 목록">}}


## 결론   {#conclusion}
이 튜토리얼에서 우리는 Advanced  **Bounce Management** 에 대해 배웠고 필요한 바운스 규칙을 개발했습니다. 목록에서 유효하지 않은 이메일 주소를 청소하는 프로세스를 자동화 할 수 있도록이 기능을 허용하는 것이 좋습니다. 또한 반환 된 이메일의 최소 수준을 유지할 수 있습니다. 또한 귀하의 목록에는 합법적 인 가입자가 있습니다.
또한, [Containerize.com][6]는 여러 언어 및 프레임 워크로 오픈 소스 제품의 스택을 향상시키기위한 길에 있습니다. 정기적으로 업데이트하려면 [뉴스 레터][7] 카테고리에서 더 흥미로운 기사에 대해 계속 지켜봐 주시기 바랍니다.

## 탐구하다
다음 링크를 찾을 수 있습니다.
  * [Phplist - 오픈 소스 뉴스 레터 및 이메일 마케팅 소프트웨어][8]
  * [phplist를 사용하여 뉴스 레터를 작성하고 보내는 방법][9]
  * [Phplist에서 바운스를 설정하고 프로세스하는 방법][1]
  * [Phplist 플러그인 개발을위한 초보자 안내서][10]

  
[1]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[2]: #Enable
[3]: #Add
[4]: #List
[5]: #Conclusion
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/newsletter/
[8]: https://products.containerize.com/newsletter/phplist
[9]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[10]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
