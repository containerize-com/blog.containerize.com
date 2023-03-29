---
title: "JavaScript에서 Async abeat 란 무엇입니까? | 자바 스크립트 가이드" 
seoTitle: "JavaScript에서 Async abeat 란 무엇입니까?" 
description: "JavaScript에서 Async abeat 란 무엇입니까? Async & Await 키워드는 JavaScript의 전통적인 약속보다 비동기 작업을 더 잘 작동하는 데 사용됩니다." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript에서 Async abeat 란 무엇입니까? Async & Await 키워드는 JavaScript의 전통적인 약속보다 비동기 작업을 더 잘 작동하는 데 사용됩니다." 
url: /ko/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017은 약속을 중심으로 래퍼 인 JavaScript Async/Await를 소개했습니다. 비동기/기다리는 것은 현대적이고 가장 간단한 방식으로 약속 기반 API를 소비하는 데 사용됩니다.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="JavaScript에서 Async abeat 란 무엇입니까??">}}


## 개요
우리는 이전 블로그 게시물에서 [JavaScript Promises][1]를 다루었 고 JavaScript 약속의 개념을 명확하게 이해하려면 방문해야합니다. 이 일련의 [JavaScript Tutorials][2]에서, 우리는 JavaScript Async/Await의 최신 기능을 보여주는 또 다른 JavaScript 안내서와 함께 있습니다. 이 블로그 게시물은 JavaScript 약속에 대한 사전 지식을 가진 사람들을위한 것입니다. 또한, 우리는  **JavaScript** 에서 비동기/대기하는 것과 Async/Await을 사용해야 할 때를 다루려고 노력할 것입니다. 또한 ASYNC/AWAIT으로 처리 오류를 다룰 것입니다. 따라서이 개념을 확인하기 위해이 **JavaScript Async/Await Tutorial**  을 철저히 읽으십시오.
이 JavaScript Async Await 튜토리얼의 다음 섹션을 살펴 보겠습니다.
*  **[JavaScript에서 Async/Await | 비동기 대기 구문][3]**  
*  **[Async/Await를 사용하는시기?][4]**  
*  **[비동기/대기로 오류 처리][5]**  

## javaScript |에서 비동기/기다리고있는 것은 무엇입니까? 비동기는 구문을 기다립니다 {#What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax}

ECMAScript 2017은 JavaScript 및 Async/Await의 새로운 기능을 출시했습니다. 이러한 기능 중에서 가장 널리 사용되는 것 중 하나입니다. Async/Await는 약속 위에 세워졌으며 실제로 JavaScript 약속을 처리하는 현대적인 방법입니다.
JavaScript 코드에서 Async/Await 키워드를 사용하는 방법을 살펴 보겠습니다.
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
기능 시작시 Async 키워드는이 기능이 약속을 반환 할 것임을 암시합니다. 따라서 AWAIT 키워드는 항상 비동기 기능의 본문 내에서 약속이 해결 될 때까지 기능의 실행을 일시 중지하기 위해 항상 사용됩니다. 여기서 주목해야 할 중요한 점은 일반 기능 본문 안에서 기다려있는 키워드를 사용할 수 없다는 것입니다. 그러나 Async 키워드로 선언 된 비동기 기능으로 만 기다릴 수 있습니다.

## Async/Await을 언제 사용합니까? {#When-to-use-AsyncAwait}

지금까지 JavaScript  **에서 비동기를 기다리는**  에 대한 답이 있습니다. 이것은 전통적인 JavaScript 약속을 중심으로 한 포장지 이므로이 새로운 방법을 사용하여보다 깨끗하고 읽기 쉬운 방식으로 약속을 만들고 처리하는 것이 좋습니다. 또한 Async/Await을 사용하여 여러 약속을 제거 할 수 있으며 결국 소스 코드를보다 관리 가능하고 유지 관리 할 수 ​​있습니다. Await 키워드는 .then () 문을 단일 줄로 캡슐화합니다.

## 비동기/기다리는 오류 처리 {#Error-handling-with-AsyncAwait}

오류 처리는 엔터프라이즈 수준의 소프트웨어 개발과 관련하여 중요한 작업입니다. Async/Await 접근법에서 오류를 잡는 방법에는 여러 가지가 있습니다.

{{< figure align=center src="images/async-await.png" alt="Async가 JavaScript를 기다립니다">}}

 **Catch Async Await javaScript** :이 오류 처리 방식의 새로운 것은 없습니다. 그러나 아래 코드 스 니펫에 표시된대로 비동기 기능 내부의 시도/캐치 블록을 사용할 수 있습니다.
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Try/Catch 블록을 사용하여 비동기 기능의 본문 내부에서 예외를 포착 할 수 있습니다.
반면, 기능 호출 끝에서 .catch () 블록을 추가 할 수있는 오류를 처리하는 또 다른 접근법이 있습니다. Async/Await은 약속을 반환하기 때문에 .catch () 블록에서 오류를 포착합니다.
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## 결론
우리는이  **JavaScript Async Await Tutorial** 을 끝내고 있습니다. JavaScript **에서 비동기를 기다리는 것**  에 대한 이해가 더 잘되기를 바랍니다. 또한, 우리는 소스 코드를 덜 복잡하게 만드는 JavaScript Async Await 구문을 거쳤습니다. 이 JavaScript 기능은 풍부한 사용 및 성능으로 인해 널리 사용됩니다. 앞으로, 우리는 JavaScript 기능과 개념에 대해 더 많이 작성하여 JS 개념에 대해 강력한 명령을 얻을 수 있습니다. 또한 "참조"섹션에 언급 된 다른 흥미로운 기사가 ​​있습니다.

## 우리와 접촉
마지막으로, [Containerize.com][6]는 다양한 흥미로운 주제에 대한 진행중인 JavaScript 자습서를 제공합니다. [Facebook][7], [LinkedIn][8] 및 [Twitter][9]를 포함한 소셜 미디어 플랫폼에서 우리를 팔로우하여 업데이트를 계속할 수 있습니다.

## 질문을하십시오
[포럼][10]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
 **예제와 함께 JavaScript에서 Async를 기다리는 것은 무엇입니까?** 
이 [링크][3]를 방문하여 비동기의 개념을 이해할 수 있습니다.
 **Async vs Promise vs Promise는 무엇입니까?** 
 * Async/Await는 약속 체인이 소스 코드를 혼란으로 만들 수있는 약속과 비교하여 소스 코드를보다 명확하고 읽을 수있게합니다.
 * 오류 처리는 두 가지 접근 방식에서 매우 유사합니다.
 * 디버깅은 비동기를 기다리는 경우 덜 어렵습니다.
 * 약속은 보류, 해결 또는 거부와 같은 국가를 유지합니다. 반면, 비동기/대기는 해결되거나 거부됩니다.

## 또한보십시오
  * [JavaScript의 약속은 무엇입니까? | JavaScript 튜토리얼][1]
  * [서버리스 컴퓨팅 란 무엇입니까? | 서버리스 아키텍처][11]
  * [다수의 란 무엇입니까? | 왜 멀티 테넌트 접근 방식인가?][12]
  * [생성 ai | 생성 인공 지능][13]
  * [Chatgpt를 Google 시트와 통합하는 방법][14]
  * [vscode에서 chatgpt를 사용하는 방법 | VSCODE 확장 코드 GPT][15]
  * [OpenAi chatbot gpt-3 | chatgpt an ai 혁명][16]
  * [인공 지능 소개 | AI는 무엇입니까?][17]



 [1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
 [2]: https://blog.containerize.com/categories/programming/
 [3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
 [4]: #When-to-use-AsyncAwait
 [5]: #Error-handling-with-AsyncAwait
 [6]: https://www.containerize.com/
 [7]: https://web.facebook.com/containerize
 [8]: https://www.linkedin.com/company/containerize/
 [9]: https://twitter.com/containerize_co
 [10]: https://forum.containerize.com/
 [11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
 [15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
