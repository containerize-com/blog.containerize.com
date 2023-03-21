---
title: "Co to jest DOM w JavaScript? |. Dokument Model obiektu" 
seoTitle: "Co to jest DOM w JavaScript?" 
description: "Co to jest DOM w JavaScript? Ten przewodnik pokazuje model obiektu dokumentu, właściwości DOM, poziomy DOM i sposób dostępu do elementów DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "Co to jest DOM w JavaScript? Ten przewodnik pokazuje model obiektu dokumentu, właściwości DOM, poziomy DOM i sposób dostępu do elementów DOM." 
url: /pl/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Reprezentacja dokumentu HTML w przeglądarce internetowej jest traktowana jako drzewo html DOM. Jest to seria obiektów i definiuje strukturę strony internetowej.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="Co to jest DOM w JavaScript??">}}


## Przegląd
Witamy w innym ekscytującym poście na blogu z serii [programowania JavaScript][1]. W tym artykule dotkniemy bardzo podstawowej, ale niezbędnej koncepcji tworzenia stron internetowych. Tak, zamierzamy omówić model Document Obiekt w JavaScript. W przeszłości opublikowaliśmy samouczki JavaScript, które są obowiązkowe do rozpoczęcia rozwoju za pomocą języka JavaScript. Dlatego sugerujemy dokładnie przeczytanie tego postu na blogu, aby nie przegapić niczego związanego z tą ważną koncepcją. Rozpocznijmy ten przewodnik i dowiedz się  **What Is Dom w JavaScript** , DOM właściwości i jak możesz z nim interakcja programatycznie.
W tym przewodniku JavaScript omówimy następujące tematy:
  * **[Co to jest model obiektu dokumentu (DOM)?][2]**
  * **[poziomy DOM][3]**
  * **[Jakie są właściwości DOM i jak uzyskać do nich dostęp?][4]**

## Czym jest model Document Object (DOM)?   {#Co-is-dokument-obiekt-model}
DOM oznacza?  **Model obiektu Dokument (DOM)**  to reprezentacja strony internetowej w przeglądarce internetowej. Po prostu hierarchiczna reprezentacja elementów dokumentu HTML w przeglądarce jest znana jako model obiektu dokumentu. Powstaje w kształcie drzewa, który jest faktycznie generowany przez przeglądarkę internetową. Składa się z różnych węzłów, które są ze sobą połączone, tworząc kształt drzewa. Ponadto elementy DOM mają do nich atrybuty i zdarzenia.
W rzeczywistości DOM to interfejs programowania, który formułuje logiczną strukturę strony internetowej i dyktuje sposób dostępu do elementów strony. Zasadniczo JavaScript nie rozpoznaje znaczników HTML, takich jak tytuł, H1 i itp. Dlatego po załadowaniu dokumentu HTML do przeglądarki internetowej utworzono DOM, co pozwala JavaScript zrozumieć elementy dokumentu.

## Dom Poziomy   {#DOM-LEVELS}
W tej sekcji pokazuje różne poziomy DOM. Po pierwsze, w przeglądarce znajduje się obiekt okienny, który jest zawsze na górze, a następnie jest węzeł dokumentów. Rzućmy okiem na obraz poniżej:

{{< figure align=center src="images/DOM.png" alt="Poziomy DOM">}}

Cóż, możesz zobaczyć elementy DOM na powyższym zdjęciu. Okno i dokument to najwyższe obiekty przeglądarki, a następnie mamy element HTML jako root. Idąc dalej, mamy węzły głowy i ciała, węzeł tytułowy należy do węzła głowy, a węzeł ciała zawiera wszystkie węzły, które są renderowane i widoczne w przeglądarce internetowej. Ponadto elementy ciała zawierają atrybuty, które możemy zobaczyć na obrazie, takie jak znacznik kotwicy zawierający atrybut „HREF”. Podobnie inne węzły DOM zawierają różne atrybuty, takie jak IMG, meta i wiele innych.

## Czym są właściwości DOM i jak uzyskać do nich dostęp?   {#Co-tom-properties-and-how-to-access-them}
Do tej pory wymyśliliśmy odpowiedź na poziomy DOM na poziomie JavaScript i DOM, a także przeszliśmy przez węzły DOM. W tej sekcji przejdziemy przez właściwości DOM i zobaczymy, jak możemy z nimi oddziaływać. Każdy element DOM ma połączoną wartość, taką jak znacznik „P”, ma właściwość tekstową, znacznik IMG ma obraz i tak dalej. Metody JavaScript są używane do dostępu do wartości węzłów. Ponadto możesz dodać/usunąć słuchaczy zdarzeń do elementów DOM.
Możesz znaleźć następujące  **właściwości DOM** :
**InnerHtml**: Ta właściwość służy do ustawiania lub pobierania zawartości HTML węzła DOM.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**Innertext**: Użyj tej właściwości DOM, aby uzyskać dostęp lub ustawić treść tekstu elementu HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
**Paretellement**: Możesz użyć tej właściwości, aby uzyskać dostęp do węzła nadrzędnego elementu.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**Styl**: Zaktualizuj atrybut stylu elementu.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**Tytuł**: Użyj tej właściwości, aby zaktualizować element tytułowy DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 Poniżej przedstawiono niektóre metody, które możemy użyć do interakcji z JavaScript DOM:
**AddEventListener ()**: Ta metoda DOM służy do podłączenia obsługi zdarzeń do elementu.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: Ta metoda DOM służy do przymocowania obsługi zdarzeń do elementu.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: Metoda uzyskania określonego elementu z podanym „id”.
```
let element = document.getElementById("myID");
```
**querySelelect ()**: Użyj tej metody, aby uzyskać pierwszy element dziecięcy, który jest dopasowany do selektora CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**ToString ()**: Możesz użyć tej metody do konwersji elementu na ciąg.
Podobnie istnieje wiele innych metod i właściwości, które można zbadać.

## Wniosek
Kończymy ten samouczek JavaSxcript tutaj z nadzieją, że dobrze rozumiesz **What Is Dom w JavaScript **. Przeszliśmy również przez ** DOM, poziomy DOM, HTML DOM Tree i właściwości DOM** . Ten post na blogu jest wysoce niezbędny dla początkujących, którzy chcą mieć silny przyczepność do koncepcji JavaScrit. Ponadto istnieją inne istotne artykuły, które można znaleźć w sekcji „patrz także”.

## Połącz się z nami
Wreszcie [Containerize.com][5] oferuje trwające samouczki JavaScript na różne ekscytujące tematy. Możesz pozostać w pętli, obserwując nas na naszych platformach społecznościowych, w tym [Facebook][6], [LinkedIn][7] i [Twitter][8].

## Zadać pytanie
Możesz poinformować nas o swoich pytaniach lub zapytaniach na naszym [forum][9].

## FAQ
**Czego jest używane w JavaScript?**
Możesz odwiedzić ten [link][2], aby uzyskać szczegółową odpowiedź na to pytanie.

## Zobacz też
  * [Co jest obiecujące w JavaScript? |. Samouczek JavaScript][10]
  * [Co to jest obliczenia bez serwera? |. Architektura bez serwera][11]
  * [Co to jest wielokrotność? |. Dlaczego podejście wielozadaniowe?][12]
  * [Co to jest AI | Generatywna sztuczna inteligencja][13]
  * [Czego czeka async w JavaScript? |. Przewodnik JavaScript][14]
  * [Jak korzystać z Chatgpt w VSCode | Kod rozszerzenia VSCode GPT][15]
  * [Co to jest Openai Chatbot GPT-3 | Chatgpt an AI Revolution][16]
  * [Wprowadzenie do sztucznej inteligencji | Co to jest AI?][17]

  
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
