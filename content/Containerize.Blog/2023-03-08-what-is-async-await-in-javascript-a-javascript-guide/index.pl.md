---
title: "Czego czeka async w JavaScript? |. Przewodnik JavaScript" 
seoTitle: "Czego czeka async w JavaScript?" 
description: "Czego czeka async w JavaScript? Asynchroniczne i czekające słowa kluczowe są używane do obsługi operacji asynchronicznych lepiej niż tradycyjne obietnice w JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Czego czeka async w JavaScript? Asynchroniczne i czekające słowa kluczowe są używane do obsługi operacji asynchronicznych lepiej niż tradycyjne obietnice w JavaScript." 
url: /pl/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 Wprowadzono JavaScript Async/Awacie, który jest opakowaniem wokół obietnic. Asynchronizacja/oczekiwanie służy do konsumpcji API opartych na obietnicy w nowoczesny i najprostszy sposób.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Czego czeka async w JavaScript??">}}


## Przegląd
Omówiliśmy [obietnice JavaScript][1] w naszym poprzednim poście na blogu i musisz odwiedzić, jeśli chcesz uzyskać jasne zrozumienie koncepcji obietnic JavaScript. W tej serii [samouczków JavaScript][2] jesteśmy tutaj z innym przewodnikiem JavaScript, który zademonstruje nowoczesne cechy asynchronizacji/oczekiwania JavaScript. Ten post na blogu jest przeznaczony dla tych, którzy mają wcześniejszą wiedzę na temat obietnic JavaScript. Ponadto postaramy się pokryć **Co to jest asynchronizacja/oczekiwanie w JavaScript  **i kiedy będziemy potrzebować asynchronizacji/oczekiwania. Ponadto będziemy również omawiać błędy obsługi asynchronizacji/oczekiwania. Dokładnie dokładnego przeczytania tego**   JavaScript Async/Okaj samouczek**, aby zaznaczyć tę koncepcję sprawdzoną.
Przejdziemy następujące sekcje w tym samouczku JavaScript Async:
  * **[Co to jest async/oczekuj w JavaScript | Async oczekuj składni][3]**
  * **[Kiedy używać async/oczekiwanie?][4]**
  * **[Obsługa błędów z asynchodem/oczekiwanie][5]**

## Co to jest async/czeka w JavaScript | Async Oczekiwaj składni   {#co-is-Asyncawait-in-javascript-Async-Await-Syntax}
EcMascript 2017 wydało nowe funkcje JavaScript i Async/Ataita, jest jednym z najczęściej używanych wśród tych funkcji. Async/Akacie jest zbudowany na obietnice i jest w rzeczywistości nowoczesnym sposobem obsługi obietnic JavaScript.
Zobaczmy, jak używać słów kluczowych async/oczekuj w kodzie JavaScript:
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
Cóż, słowo kluczowe async na początku funkcji sugeruje, że ta funkcja zwróci obietnicę. Tak więc oczekiwaj słowo kluczowe jest zawsze używane wewnątrz ciała funkcji asynchronicznej, aby zatrzymać wykonywanie funkcji, dopóki obietnica nie zostanie rozwiązana. Ważną rzeczą, na którą należy zwrócić uwagę, jest to, że nie można użyć słowa kluczowego wewnątrz ciała regularnej funkcji. Możesz jednak użyć oczekiwania tylko z funkcjami asynchronicznymi zadeklarowanymi za pomocą słowa kluczowego asynchronizacji.

## Kiedy korzystać z async/czekać?   {#Kiedy użycie-Asyncawait}
Do tej pory masz odpowiedź na  **Czego oczekuje async w JavaScript** . Ponieważ jest to tylko opakowanie wokół tradycyjnych obietnic JavaScript, więc lepiej wykorzystaj ten nowy sposób tworzenia i obsługi obietnic w bardziej czystszy i czytelny sposób. Ponadto możesz pozbyć się wielu obietnic. Then () przy użyciu async/oczekiwanie, które ostatecznie sprawiają, że kod źródłowy jest łatwiejszy i możliwy do utrzymania. Czeka na słowo kluczowe zawiera instrukcję .ten () w jednym wierszu.

## Obsługa błędów za pomocą async/oczekiwaj   {#Błąd obsługi-z-asyncawait}
Obsługa błędów jest krytycznym zadaniem, jeśli chodzi o tworzenie oprogramowania na poziomie przedsiębiorstw. Istnieje wiele sposobów złapania błędów w podejściu asynchronizacji/oczekiwania.

{{< figure align=center src="images/async-await.png" alt="Spróbuj Catch Async Okając JavaScript">}}

**Spróbuj Catch Async Oczekiwać JavaScript**: Nic nowego w tym podejściu do obsługi błędów. Możesz jednak użyć bloku try/catch w funkcji asynchronicznej, jak pokazano w fragmencie kodu poniżej:
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
Za pomocą bloku Try/Catch możesz złapać wyjątki wewnątrz ciała funkcji asynchronizacji.
Natomiast istnieje inne podejście do obsługi błędów, w którym można dołączyć blok .catch () na końcu wywołania funkcji. Ponieważ async/Oczekiwanie zwraca obietnicę, więc łapiesz błędy w bloku .catch ().
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

## Wniosek
Kończymy ten **JavaScript Async Oczekuje się samouczka **. Mam nadzieję, że lepiej rozumiesz ** Czego czeka asynchronizacja w JavaScript** . Ponadto przeszliśmy przez JavaScript Async oczekując składni, która sprawia, że ​​kod źródłowy jest mniej złożony. Ta funkcja JavaScript jest szeroko stosowana ze względu na bogate wykorzystanie i wydajność. W nadchodzących dniach będziemy pisać dalej o funkcjach i koncepcjach JavaScript, abyś mógł uzyskać silne polecenie nad koncepcjami JS. Ponadto w sekcji „patrz także także” wymieniono inne interesujące artykuły.

## Połącz się z nami
Na koniec [Containerize.com][6] oferuje trwające samouczki JavaScript na różne ekscytujące tematy. Możesz być na bieżąco, obserwując nas na naszych platformach mediów społecznościowych, w tym [Facebook][7], [LinkedIn][8] i [Twitter][9].

## Zadać pytanie
Możesz poinformować nas o swoich pytaniach lub zapytaniach na naszym [forum][10].

## FAQ
**Czego czeka async w JavaScript z przykładem?**
Możesz odwiedzić ten [link][3], aby zrozumieć koncepcję asynchronizacji.
**Czym się czeka na async vs?**
 * Async/oczekiwanie sprawia, że ​​kod źródłowy jest bardziej wyraźniejszy i czytelny w porównaniu z obietnicami, w których łączenie obietnic może sprawić, że kod źródłowy jest bałaganem.
 * Obsługa błędów jest dość podobna w obu podejściach.
 * Oczekiwanie jest mniej trudne w oczekiwaniu na asynchronizację.
 * Obietnice utrzymują stany, takie jak oczekujące, rozwiązane lub odrzucone. Natomiast async/oczekuj jest rozwiązany lub odrzucony.

## Zobacz też
  * [Co jest obiecujące w JavaScript? |. Samouczek JavaScript][1]
  * [Co to jest obliczenia bez serwera? |. Architektura bez serwera][11]
  * [Co to jest wielokrotność? |. Dlaczego podejście wielozadaniowe?][12]
  * [Co to jest AI | Generatywna sztuczna inteligencja][13]
  * [Jak zintegrować chatgpt z arkuszami Google][14]
  * [Jak korzystać z Chatgpt w VSCode | Kod rozszerzenia VSCode GPT][15]
  * [Co to jest Openai Chatbot GPT-3 | Chatgpt an AI Revolution][16]
  * [Wprowadzenie do sztucznej inteligencji | Co to jest AI?][17]

  
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
