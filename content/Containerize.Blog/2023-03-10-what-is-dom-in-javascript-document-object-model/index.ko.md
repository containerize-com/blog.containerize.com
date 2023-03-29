---
title: "JavaScript의 Dom은 무엇입니까? | 문서 개체 모델" 
seoTitle: "JavaScript의 Dom은 무엇입니까?" 
description: "JavaScript의 Dom은 무엇입니까? 이 안내서는 문서 개체 모델, DOM의 속성, DOM 수준 및 DOM 요소에 액세스하는 방법을 보여줍니다." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript의 Dom은 무엇입니까? 이 안내서는 문서 개체 모델, DOM의 속성, DOM 수준 및 DOM 요소에 액세스하는 방법을 보여줍니다." 
url: /ko/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## 웹 브라우저 내부의 HTML 문서 표현은 HTML DOM 트리로 취급됩니다. 일련의 객체이며 웹 페이지의 구조를 정의합니다.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="JavaScript의 Dom은 무엇입니까??">}}


## 개요
일련의 [JavaScript 프로그래밍][1]의 또 다른 흥미 진진한 블로그 게시물에 오신 것을 환영합니다. 이 기사에서는 웹 개발의 매우 기본적이지만 필수적인 개념을 다룰 것입니다. 예, 우리는 JavaScript의 문서 객체 모델을 다룰 것입니다. 과거에는 JavaScript 언어를 사용하여 개발을 시작 해야하는 JavaScript 자습서를 게시했습니다. 따라서이 중요한 개념과 관련된 것을 놓치지 않도록이 블로그 게시물을 철저히 읽는 것이 좋습니다. 이 안내서를 시작하고  **javaScript**  의 dom이 무엇인지, DOM 속성 및 프로그래밍 방식으로 상호 작용할 수있는 방법을 알아 보겠습니다.
이 JavaScript 안내서의 다음 주제를 다룰 것입니다.
*  **[문서 객체 모델 (dom)?][2]**  
*  **[dom 레벨][3]**  
*  **[DOM 속성은 무엇이며 액세스 방법은 무엇입니까?][4]**  

## 문서 개체 모델 (DOM)이란 무엇입니까? {#What-is-Document-Object-Model}

돔이 의지?  **문서 개체 모델 (DOM)**  는 웹 브라우저 내부의 웹 페이지를 나타내는 것입니다. 간단히 말해, 브라우저에서 HTML 문서의 요소의 계층 적 표현을 문서 개체 모델이라고합니다. 실제로 웹 브라우저에서 생성되는 트리 모양으로 형성됩니다. 그것은 나무 모양을 형성하는 서로 연결되는 다양한 노드로 구성됩니다. 또한 DOM 요소에는 속성과 이벤트가 첨부되어 있습니다.
실제로 Dom은 웹 페이지의 논리적 구조를 공식화하고 페이지 요소에 액세스하는 방법을 지시하는 프로그래밍 인터페이스입니다. 기본적으로 JavaScript는 Title, H1 등과 같은 HTML 태그를 인식하지 못합니다. 따라서 HTML 문서가 웹 브라우저에로드되면 DOM이 작성되면 JavaScript가 문서 요소를 이해할 수 있습니다.

## DOM 레벨 {#DOM-levels}

이 섹션에서는 다양한 수준의 DOM을 보여줍니다. 먼저 브라우저에는 항상 맨 위에있는 창 객체가 있으며 문서 노드가 있습니다. 아래 이미지를 살펴 보겠습니다.

{{< figure align=center src="images/DOM.png" alt="DOM 레벨">}}

위의 그림에서 DOM 요소를 볼 수 있습니다. 창과 문서는 최상위 브라우저 객체이며 HTML 요소를 루트로 가지고 있습니다. 계속해서 헤드와 바디 노드가 있으며 제목 노드는 헤드 노드에 속하며 바디 노드에는 웹 브라우저에서 렌더링되고 볼 수있는 모든 노드가 포함되어 있습니다. 또한 바디 요소에는 "HREF"속성을 포함하는 앵커 태그와 같은 이미지에서 볼 수있는 속성이 포함되어 있습니다. 마찬가지로, 다른 DOM 노드에는 IMG, META 등과 같은 다양한 속성이 포함되어 있습니다.

## DOM 속성은 무엇이며 액세스 방법은 무엇입니까? {#What-are-DOM-properties-and-how-to-access-them}

지금까지 우리는 JavaScript의 DOM과 DOM 레벨에 대한 답을 생각해 냈으며 DOM 노드도 겪었습니다. 이 섹션에서는 DOM 속성을 거치고 어떻게 상호 작용할 수 있는지 볼 것입니다. 모든 DOM 요소에는 "P"태그와 같이 텍스트 속성이 있으며 IMG 태그에는 이미지가 있습니다. JavaScript 방법은 노드 값에 액세스하는 데 사용됩니다. 또한 이벤트 리스너를 DOM 요소에 추가/제거 할 수 있습니다.
다음  **dom 속성**  을 찾을 수 있습니다.
 **InnerHtml** :이 속성은 DOM 노드의 HTML 컨텐츠를 설정하거나 가져 오는 데 사용됩니다.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
 **InnerText** :이 DOM 속성을 사용하여 HTML 요소의 텍스트 내용에 액세스하거나 설정하십시오.
```
let textualContent = document.getElementById("customID").innerText;
```
 **ParentElement** :이 속성을 사용하여 요소의 상위 노드에 액세스 할 수 있습니다.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
 **스타일** : 요소의 스타일 속성을 업데이트하십시오.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
 **제목** :이 속성을 사용하여 DOM의 제목 요소를 업데이트하십시오.
```
document.getElementById("customID").title= "this is a web page";
```
 다음은 JavaScript DOM과 상호 작용하는 데 사용할 수있는 몇 가지 방법입니다.
 **addeventListener ()** :이 DOM 메소드는 이벤트 핸들러를 요소에 첨부하는 데 사용됩니다.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
 **getAttribute ()** :이 DOM 메소드는 이벤트 핸들러를 요소에 첨부하는 데 사용됩니다.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
 **getElementById ()** : 주어진 "ID"로 특정 요소를 얻는 메소드.
```
let element = document.getElementById("myID");
```
 **QuerySelector ()** :이 메소드를 사용하여 CSS 선택기와 일치하는 첫 번째 자식 요소를 얻으십시오.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
 **toString ()** :이 메소드를 사용하여 요소를 문자열로 변환 할 수 있습니다.
마찬가지로, 탐색 할 수있는 다른 많은 방법과 속성이 있습니다.

## 결론
우리는이 Javasxcript 튜토리얼을 끝내고 있습니다. 우리는 또한  **dom, dom leveles, html dom tree 및 dom properties**  를 통과했습니다. 이 블로그 게시물은 Javascrit 개념을 강력하게 잡고 자하는 초보자에게 매우 중요합니다. 또한 "참조"섹션에서 찾을 수있는 다른 관련 기사가 있습니다.

## 우리와 접촉
마지막으로, [Containerize.com][5]는 다양한 흥미로운 주제에 대한 진행중인 JavaScript 자습서를 제공합니다. [Facebook][6], [LinkedIn][7] 및 [Twitter][8]를 포함한 소셜 미디어 플랫폼에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][9]에서 귀하의 질문이나 질문에 대해 알려줄 수 있습니다.

## FAQ
 **JavaScript에서 DOM은 무엇입니까?** 
이 [링크][2]를 방문 하여이 질문에 대한 자세한 답변을 얻을 수 있습니다.

## 또한보십시오
  * [JavaScript의 약속은 무엇입니까? | JavaScript 튜토리얼][10]
  * [서버리스 컴퓨팅 란 무엇입니까? | 서버리스 아키텍처][11]
  * [다수의 란 무엇입니까? | 왜 멀티 테넌트 접근 방식인가?][12]
  * [생성 ai | 생성 인공 지능][13]
  * [JavaScript에서 Async 란 무엇입니까? | 자바 스크립트 가이드][14]
  * [vscode에서 chatgpt를 사용하는 방법 | VSCODE 확장 코드 GPT][15]
  * [OpenAi chatbot gpt-3 | chatgpt an ai 혁명][16]
  * [인공 지능 소개 | AI는 무엇입니까?][17]



 [1]: https://blog.containerize.com/categories/programming/
 [2]: #What-is-Document-Object-Model
 [3]: #DOM-levels
 [4]: #What-are-DOM-properties-and-how-to-access-them
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
