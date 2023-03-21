---
title: "JavaScript 데이터 유형은 무엇입니까? | 초보자 가이드" 
seoTitle: "JavaScript 데이터 유형은 무엇입니까? | 초보자 가이드" 
description: "JavaScript 데이터 유형은 무엇입니까? 이 초보자 안내서를 따라 JavaScript 번호, 문자열, 부울, null, 정의되지 않은 등으로 사용되는 7 가지 데이터 유형을 배우십시오." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "자바 스크립트의 인기는 적응성으로 인해 막을 수 없습니다. 이 JavaScript 초보자 가이드를 따르고 JS 스택에 대한 전문 지식을 육성하십시오." 
url: /ko/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## javaScript의 인기는 적응성으로 인해 막을 수 없습니다. 이 JavaScript 초보자 가이드를 따르고 JS 스택에 대한 전문 지식을 육성하십시오.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |JavaScript 데이터 유형은 무엇입니까? | 초보자 가이드">}}


## 개요
평범한 수준이든 숙련 된 개발자이든 상관없이 개발 작업 중에 발생하는 문제에 대한 솔루션을 얻게됩니다. [Containerize.com][1]는 프로그래밍 범주에서 자습서 블로그 게시물을 작성하기 시작했으며 **JavaScript 초보자 가이드 **부터 시작합니다. 우리가 시작하기 때문에이 기사는 JavaScript 데이터 유형에 관한 것입니다.  **JavaScript 데이터 유형이란 무엇인지 ** 를 탐색하고 소스 코드에서 효율적으로 사용할 수있는 방법에 대한 예를 보자. 따라서이 초보자 안내서를 철저히 살펴보면 ** JavaScript 데이터 유형** 을 잘 이해할 수 있습니다.
우리는 다음과 같은 점을 다루고 있습니다.
  * [데이터 유형이란 무엇입니까?][2]
  * [JavaScript 데이터 유형은 무엇입니까?][3]

## 데이터 유형 설명 | 데이터 유형이란 무엇입니까?   {#what-is-a-data-type}
데이터 유형은 컴파일러에게 데이터를 해석하거나 컴파일하는 방법에 관한 것입니다. 데이터 유형의 사용은 중요하며 현명하게 사용해야합니다. 간단히 말해서, 그것은 숫자, 문자열, 부울 등과 같은 데이터의 형식에 관한 것입니다. 그러나 두 가지 범주의 데이터 유형 원시 데이터 유형과 비-프리맨티 데이터 유형이 있습니다. 다음 섹션에는 8 가지 기본 데이터 유형이 있습니다.

## JavaScript 데이터 유형이란 무엇입니까?   {#what-are-javaScript-data-types}
실제로 JavaScript는 느슨하게 입력 한 언어로 변수 유형을 명시 적으로 정의 할 필요가 없습니다. 변수에 값을 할당 할 수 있으며 해당 변수는 String, Bigint, Boolean 등과 같은 해당 값을 저장합니다.

{{< figure align=center src="images/web-development.png" alt="JavaScript 초보자 가이드">}}


#### 원시 데이터 유형
원시 데이터 유형은 불변성이며 생성 및 초기화 후에는 변경할 수없는 데이터 유형입니다. 그러나 새 값을 다시 할 수는 있지만 기존 값을 돌연변이 할 수는 없습니다.
예를 들어:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
위의 예에서 문자열은 원시 데이터 유형이며 이전 값은 새 값으로 대체되고 있지만 기존 값의 변경은 반영되지 않습니다. 그래서 우리는 그것이 여전히“나의 이름이 바뀌지 않았다”는 것이 아니라 여전히“나의 이름이 바뀌었다”는 것을 알 수 있습니다.

#### 비-프리맨티 데이터 유형
비 프리미티브 데이터 유형은 원시 데이터 유형과 반대되는 간단한 단어로 변이 가능합니다.
예를 들어:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
또한, 원시 데이터 유형은 값으로 비교되고, 비-프리맨티 데이터 유형은 항상 참조로 비교됩니다.
예를 들어:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
이제 데이터 유형을 하나씩 살펴 보겠습니다. 6 개의 원시 데이터 유형과 1 개의 비-프리맨티 데이터 유형이 있습니다.
**원시 데이터 유형은 다음과 같습니다.**
  * **문자열**  :이 데이터 유형은 인용문으로 둘러싸인 일련의 문자로 구성된 텍스트 데이터를 나타냅니다.
  * **숫자**  : 10 진수/비 정도 데이터, 특히 정수 또는 부유물을 나타냅니다.
  * **부울**  : 논리적 값의 표현 참 또는 거짓.
  * **기호**  : 기호는 고유 한 값을 유지하는 데 사용됩니다.
  * **정의되지 않은**  : 값이없는 변수 또는 초기화되지 않은 변수.
  * **NULL**  : 값이없는 것은 NULL로 간주됩니다.
**비 프리미티브 데이터 유형은 다음과 같습니다.**
**객체** : 키 값 쌍으로 구성된 데이터 모음을 저장하는 데 사용됩니다.

## 결론
이것은이 **JavaScript 초보자 가이드 **의 끝입니다. 우리는  **javaScript 데이터 유형이란 무엇입니까 ** ? 또한 간단히 말해서 데이터 유형이 무엇인지 탐색했습니다. JavaScript에서 비-프리미셜 및 ** 원시 데이터 유형** 에 대한 이해가 더 잘 이해되어야합니다. 이 블로그 게시물은 면접 준비를하려는 경우 실제로 도움이 될 것입니다.
마지막으로, [Containerize.com][1]는 추가 오픈 소스 제품 및 주제에 대한 블로그 게시물을 지속적으로 작성하고 있습니다. 또한 소셜 미디어 계정 [Facebook][4], [LinkedIn][5] 및 [Twitter][6]에서 우리를 따라갈 수 있습니다.

## 질문을하십시오
[포럼][7]에서 귀하의 질문이나 질문에 대해 알려주십시오.

## FAQ
**8 개의 JavaScript 데이터 유형은 무엇입니까?**
8 개의 JavaScript 데이터 유형을 알아 보려면이 [링크][3]을 방문하십시오.

## 또한보십시오
  * [무료 및 오픈 소스 인기있는 JavaScript 프레임 워크][8]
  * [무료 및 오픈 소스 소프트웨어를 사용하여 비즈니스 운영 자동화][9]
  * [2022 년에 학습 할 상위 10 개 오픈 소스 기술][10]

  
[1]: https://www.containerize.com/
[2]: #What-is-a-data-type
[3]: #What-are-JavaScript-Data-Types
[4]: https://web.facebook.com/containerize
[5]: https://www.linkedin.com/company/containerize/
[6]: https://twitter.com/containerize_co
[7]: https://forum.containerize.com/
[8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
[9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
