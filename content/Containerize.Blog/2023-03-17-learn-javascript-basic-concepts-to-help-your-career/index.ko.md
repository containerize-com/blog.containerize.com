---
title: "경력을 돕기 위해 JavaScript 기본 개념을 배우십시오" 
seoTitle: "JavaScript 기본 개념" 
description: "이 JavaScript 자습서를 따라 JavaScript 기본 개념을 배우십시오. 스코프, 호이 스팅 및 클로저는 매우 기본적이지만 JavaScript의 필수 개념입니다." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "이 JavaScript 자습서를 따라 JavaScript 기본 개념을 배우십시오. 스코프, 호이 스팅 및 클로저는 매우 기본적이지만 JavaScript의 필수 개념입니다." 
url: /ko/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## 개발자가 알아야 할 핵심 JavaScript 기본 사항을 배우자. 이 해석 된 프로그래밍 언어는 엔터프라이즈 수준의 앱을 개발하는 데 널리 사용됩니다.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="JavaScript 기본 개념">}}


## 개요
JavaScript는 동적 웹 기반 애플리케이션을 개발하는 데 사용되는 스크립팅 언어입니다. 우리는 HTML 및 CSS를 사용하여 정적 웹 사이트를 구축하는 반면 JavaScript는 상호 작용을 추가하는 데 사용됩니다. 이전 블로그 게시물에서 [Document Object Model][1]를 다루었으며 이제 다른 중요한  **JavaScript 기본 개념** 을 다룰 것입니다. 웹 개발자는 풍부한 기능과 프레임 워크로 인해이 스크립팅 언어를 선택하는 경향이 있습니다. 또한 JavaScript를 학습하여 프론트 엔드와 백엔드에서 개발을 수행 할 수 있습니다. 그러나 웹 앱뿐만 아니라 모바일 앱도 개발할 수 있습니다. 이 JavaScript 자습서는 인터뷰 세션을 준비하는 경우 도움이됩니다. 그럼에도 불구하고,이 가이드는 지식 버킷에 더 많은 것을 추가하기 위해 읽을 가치가 있습니다.
이 기사에서 다음 사항을 다룰 것입니다.
  * **[JavaScript에서 들어오는 것][2]**
  * **[JavaScript의 스코프][3]**
  * **[JavaScript 폐쇄][4]**

## JavaScript   {#What-is-Hoisting-in-JavaScript}
현재 범위 위에 기능 또는 가변 선언을 취하는 현상은 호이 스팅이라고합니다. 이것은 매우 중요한 개념이며 대부분의 JavaScript 개발자는 그것을 알지 못합니다. 그러나 여기서 주목해야 할 중요한 사항은 함수/변수 선언 만 기능/변수 초기화가 아니라 상단으로 가져옵니다.
예를 들어 아래 코드 스 니펫을 참조하십시오.
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
위의 코드 예제에서는 함수 선언 전에 함수 호출을했지만 코드가 성공적으로 실행되고 JavaScript Hoisting 때문입니다. 기본적으로 컴파일 시간 동안 JavaScript 통역사는 코드를 스캔하고 모든 기능/변수를 수집 한 후 어휘 환경이라는 메모리에 넣습니다. 변수도 마찬가지입니다.
```
name = "mustafa";
console.log(name);
var name;

```
마찬가지로, 이름 변수 초기화는 선언 전에 수행되었으며 코드는 오류없이 작동합니다. 컴파일 시간 동안 JS 통역사는 어휘 환경을 조사하여 변수 선언을 찾아서 코드를 실행했습니다.
따라서 LET 및 Const 키워드로 변수를 선언하면 JavaScript가 조금 다르게 들어 올립니다.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
위의 코드 스 니펫의 오류가 발생했습니다. 그 이유는이 변수를 들어 올리는 동안 초기화가 수행되지 않았기 때문입니다. 간단히 말해서, 모든 선언은 "정의되지 않은"것으로 초기화되는 반면, "let"또는 "const"로 선언 된 변수는 호이 스팅에서 초기화되지 않습니다.

## JavaScript의 스코프   {#Scopes-in-JavaScript}
범위는 개발자가 알아야 할 JavaScript 기본 개념 중 하나입니다. 그러나 JavaScript Scopes로 작업하는 것은 간단하지 않으며 조금 다릅니다. 따라서 JavaScript에는 세 가지 유형의 스코프가 있으며 다음과 같습니다.
**블록 레벨** : "let"또는 "const"로 선언 된 변수에는 블록 레벨 범위가 포함됩니다.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
변수 "a"는 곱슬 괄호 {} 외부에서는 블록 레벨 스코프가 있기 때문에 액세스 할 수 없습니다.
**함수 수준** : JavaScript 함수 내부에서 선언 된 변수에는 로컬 범위가 있습니다.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
여기서 주목해야 할 것은 "let" "const"및 "var"로 선언 된 변수가 함수 본문 내부에 함수 범위를 가지고 있다는 것입니다.
**글로벌 레벨** : 함수 외부로 선언 된 변수는 글로벌 변수가됩니다. "let", "const"또는 "var"키워드를 사용하여 선언했는지 여부에 관계없이. 또한 아래 코드 스 니펫에 표시된대로 키워드를 사용하지 않고 선언 된 경우 변수는 다음과 같습니다.
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## JavaScript Closures   {#JavaScript-Closures}
이것은 범위 및 데이터 캡슐화에 대한 JavaScript 지식을 강화하는 또 다른 중요한 개념입니다. 가장 간단한 형태에서 함수 내부의 함수를 폐쇄라고합니다. 내부 기능을 폐쇄라고 할 수 있습니다. 이 내부 기능에는 세 가지 유형의 범위가 있습니다.
 * 자체 블록 레벨 범위가 있습니다.
 * 부모의 변수에 액세스 할 수 있습니다.
 * 글로벌 범위의 변수는 폐쇄 내부에서도 액세스 할 수 있습니다.
 폐쇄를 만드는 방법을 봅시다 :
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
변수 first_name은 innerfunc이라는 함수 내에서 액세스 할 수 있지만 부모 함수는 last_name 변수에 액세스 할 수 없습니다. 이 동작을 통해 프로그래머는 스코프 체인에서 개인 변수를 생성 할 수 있습니다.

## 결론
우리는이 JavaScript 가이드를 여기에서 끝내고 있습니다. **JavaScript 기본 개념 **을 더 잘 이해하기를 바랍니다. 또한, 우리는 또한 ** JavaScript 폐쇄, JavaScript** 의 범위 및 Hoisting을 통과했습니다. 초보자에게는 필수적 인 다른 중요한 개념이 많이 있습니다. 따라서이 기사는 JavaScript 개념을 개선하거나 새로 고치기 위해 번성하는 경우 도움이됩니다. 또한 "참조"섹션에 언급 된 블로그 게시물을 살펴볼 수 있습니다.

## 우리와 접촉
마지막으로, [Containerize.com][5]는 다양한 흥미로운 주제에 대한 진행중인 JavaScript 자습서를 제공합니다. [Facebook][6], [LinkedIn][7] 및 [Twitter][8]를 포함한 소셜 미디어 플랫폼에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][9]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
**JavaScript에서 배우는 중요한 개념은 무엇입니까?**
JavaScript 초보자의 [가이드][2]를 따라 JavaScript 기본 개념을 알 수 있습니다.

## 또한보십시오
  * [JavaScript의 DOM은 무엇입니까? | 문서 개체 모델][1]
  * [JavaScript의 약속은 무엇입니까? | JavaScript 튜토리얼][10]
  * [서버리스 컴퓨팅 란 무엇입니까? | 서버리스 아키텍처][11]
  * [다수의 란 무엇입니까? | 왜 멀티 테넌트 접근 방식인가?][12]
  * [생성 ai | 생성 인공 지능][13]
  * [JavaScript에서 Async 란 무엇입니까? | 자바 스크립트 가이드][14]
  * [vscode에서 chatgpt를 사용하는 방법 | VSCODE 확장 코드 GPT][15]
  * [OpenAi chatbot gpt-3 | chatgpt an ai 혁명][16]
  * [인공 지능 소개 | AI는 무엇입니까?][17]
  * [JavaScript에서 Async 란 무엇입니까? | 자바 스크립트 가이드][18]

  
[1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
[2]: #What-is-hoisting-in-JavaScript
[3]: #Scopes-in-JavaScript
[4]: #JavaScript-Closures
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
