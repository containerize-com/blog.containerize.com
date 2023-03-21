---
title: "JavaScript의 약속은 무엇입니까? | JavaScript 튜토리얼" 
seoTitle: "JavaScript의 약속은 무엇입니까?" 
description: "JavaScript의 약속은 무엇입니까? 약속은 보류, 완료 또는 거부와 같은 비동기 조작의 최종 결과를 제공하는 코드 블록입니다." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript의 약속은 무엇입니까? 약속은 완성 또는 거부와 같은 비동기 조작의 최종 결과를 제공하는 코드 블록입니다." 
url: /ko/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## JavaScript 약속의 개념을 배우기 위해 고군분투하고 있습니까? 이 기사는 약속을 만드는 방법, 우리가 JavaScript 등으로 약속을 사용하는 이유를 설명합니다.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## 개요
[JavaScript 데이터 유형][1]에 대해 더 잘 이해하기를 바랍니다. 이제 이것은 [프로그래밍][2] 카테고리의 또 다른 블로그 게시물입니다. 이 JavaScript 튜토리얼에서 우리는  **JavaScript ** 의 약속을 거치게 될 것입니다. 그리고 그와 함께, 우리는 또한 비동기 운영, 약속 사용 및 JavaScript에서 약속을 만드는 방법을 볼 것입니다. 첫째, 비동기 프로세스/작동은 다른 프로세스와 관련하여 독립적으로 실행되며 막힘을 생성하지 않는 프로세스입니다. 따라서 비동기 작업을 처리해야합니다. 그렇지 않으면 JavaScript 코드에서 이상이 발생할 수 있습니다. 따라서 우리는 약속을 사용하여 비동기 작업을 어떻게 처리 할 수 ​​있는지 탐구 할 것입니다.
이 JavaScript 튜토리얼에서 다음 사항을 다룰 것입니다.
  * **[JavaScript의 약속은 무엇입니까? 설명 된 약속]][3]**
  * **[JavaScript에서 약속을 사용하는 이유는 무엇입니까?][4]**
  * **[약속이 JavaScript에서 어떻게 작동 하는가?][5]**
  * **[약속을 만드는 방법?][6]**

## JavaScript의 약속은 무엇입니까?   {#what-is-promise-in-JavaScript-Promises-Mexplained} 설명}.
약속은 해결, 거부 또는 보류 상태에있는 비동기 작동 날씨의 값을 나타내는 대상입니다. 보다 간단한 단어로, 약속은 비동기 코드 블록에서 아직 생성되지 않은 값을 반환하는 데 사용됩니다. 실제로, 3 개의  **약속 상태 ** 가 있으며 다음과 같은 상태에있을 수 있습니다.
**보류 중 ** : 약속은 보류 상태에 있으며, 이는 시작 단계에 있으며 현재 실행 중입니다.
**이행 ** : 약속이 해결되고 가치가 반환되었습니다.
**거부 ** : 이것은 약속이 거부되었음을 의미하는 모든 오류로 인한 상태입니다.
여기서 고려해야 할 중요한 것은 약속에 의해 반환 된 가치/상태가 불변이며 변경 될 수 없으므로 약속이 특이한 행동이 없도록 약속을 의미합니다.

## 왜 우리는 JavaScript에서 약속을 사용합니까?   {#JavaScript의 We-We-use-promise}
당신이  **콜백 지옥 ** 를 모른다면, 그것이 무엇인지 공유하겠습니다. 첫째, 콜백은 다른 함수 내의 함수입니다. 기본적으로 콜백 함수는 결과를 수신 할 때 실행되는 함수에서 두 번째 인수로 전달됩니다. 따라서 많은 시나리오에서 콜백 기능을 중첩해야하며 중첩이 증가함에 따라 처리가 불가능 해집니다. 따라서, 우리는이 긴 콜백 기능  **콜백 지옥 ** 이라고합니다.
따라서 약속은 콜백 지옥 상황을 피하는 방법입니다. 약속의 사용은 더 나은 가독성과 개선 된 오류 처리를 제공합니다. 또한, 반환 된 값을 검색하고 해당 값을 체인의 다음 함수로 전달하여 비동기 작업을 더 잘 처리 할 수 ​​있습니다.

## 약속은 JavaScript에서 어떻게 작동합니까?   {#how-promise-works-in-JavaScript}
이제 약속의 비하인드 메커니즘을 이해해 봅시다. 아래에 언급 된 다이어그램을 살펴보십시오.

{{< figure align=center src="images/what-is-a-promise.png" alt="JavaScript에서 약속은 어떻게 작동합니까??" >}}

위에서 언급 한 워크 플로에 따르면 구현 세부 정보는 매우 명확합니다. 약속은 창조시 실행을 시작하며 응답을 기다리는 보류 상태에 있습니다. 데이터가 있거나 처리가 끝날 때 오류가 발생하는 두 가지 옵션이 있습니다. 데이터를 수신하면 .then () 블록으로 들어가면 오류가 발생한 경우 .catch () 블록으로 들어갑니다.

## 약속을 만드는 방법?   {##how-to-a-promise}
지금까지 우리는 약속의 기본 개념을 다루었습니다. 이제 우리는 JavaScript에서 약속을 어떻게 만들 수 있는지 탐구 할 것입니다. 다음 약속 생성자를 사용하여 약속을 만들어 봅시다.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
약속 생성자는 다시 두 가지 인수를 다시 한 번, 해결하고 다른 거부를하는 인수로 기능을 취합니다. 성공의 경우 resolve () 메소드를 호출하고 오류 또는 거부의 경우 Reject () 블록으로 들어갑니다.
조금 깊이 가서 약속 창조물을 조금 더 탐구합시다.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
위의 코드 스 니펫에서는 resolve () 블록에서 API 호출을 추가로 만들 수 있습니다.
이제 JavaScript 약속의 실행 패턴을 보자.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
다음은 위의 코드 스 니펫의 출력입니다.
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
따라서 Promise Body 내부의 코드는 동기식으로 작동하여 "동기 실행"이 인쇄됩니다. 다음으로,. () 블록은 비동기 적으로 작동하고 결과가 생성 될 때까지 대기하지만 프로그램 실행이 중지되지 않아서 "hello Word"가 인쇄되고 약속 실행이 연기 된 이유입니다. 그 후. () 블록은 약속 한 값을 실행하고 반환합니다. 그것이 JavaScript 약속의 이야기입니다. 다시 말하지만, JavaScript는 단일 스레드이므로, 약속은 비동기 작업을 비 블로킹 방식으로 처리하는 데 사용됩니다.

## 결론
이것은  **JavaScript 튜토리얼 ** 의 끝입니다. JavaScript 약속에 대한 좋은 아이디어가 있기를 바랍니다. 우리는  **JavaScript ** 의 약속이 무엇인지, JavaScript에서 약속을 사용하는 이유,  **JavaScript ** 에서 약속이 어떻게 작동하는지, 그리고 약속을 만드는 방법을 다루었습니다. 또한 고급 사용 및 조항과 관련 하여이 주제를 더 다룰 것입니다. 따라서 인터뷰 세션을 준비하는 경우이 기사를 살펴보십시오.

## 우리와 접촉
마지막으로, [Containerize.com][7]는 다양한 흥미로운 주제에 대한 진행중인 JavaScript 자습서를 제공합니다. [Facebook][8], [LinkedIn][9] 및 [Twitter][10]을 포함한 소셜 미디어 플랫폼에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][11]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
**예시와 함께 JavaScript의 약속은 무엇입니까? **
이 [링크][3]를 따라 JavaScript의 약속이 무엇인지 알 수 있습니다.

## 또한보십시오
  * [JavaScript 데이터 유형은 무엇입니까? | 초보자 가이드][1]
  * [Kubernetes 다중 테넌시 및 컨테이너 기반 아키텍처][12]
  * [서버리스 컴퓨팅 란 무엇입니까? | 서버리스 아키텍처][13]
  * [다수의 란 무엇입니까? | 왜 멀티 테넌트 접근 방식인가?][14]
  * [JavaScript 데이터 유형은 무엇입니까? | 초보자 가이드][15]

  
[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
