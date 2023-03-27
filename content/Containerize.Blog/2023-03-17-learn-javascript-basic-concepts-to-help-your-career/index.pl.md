---
title: "Naucz się podstawowych koncepcji JavaScript, aby pomóc swojej karierze" 
seoTitle: "Podstawowe koncepcje JavaScript" 
description: "Śledź ten samouczek JavaScript, aby nauczyć się podstawowych pojęć JavaScript. Rozpadki, podnoszenie i zamknięcia są bardzo podstawowymi, ale obowiązkowymi pojęciami w JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "Śledź ten samouczek JavaScript, aby nauczyć się podstawowych pojęć JavaScript. Rozpadki, podnoszenie i zamknięcia są bardzo podstawowymi, ale obowiązkowymi pojęciami w JavaScript." 
url: /pl/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## Poznajmy podstawowe podstawy JavaScript, które musi wiedzieć programista. Ten interpretowany język programowania jest szeroko stosowany do opracowywania aplikacji na poziomie przedsiębiorstw.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="Podstawowe koncepcje JavaScript">}}


## Przegląd
JavaScript to język skryptowy używany do tworzenia dynamicznych aplikacji internetowych. Używamy HTML i CSS do tworzenia statycznych stron internetowych, podczas gdy JavaScript służy do dodania interaktywności. W naszym poprzednim poście na blogu omówiliśmy [Model Object Document][1], a teraz omówimy inne ważne  **JavaScript Basic Concepts**  . Twórcy stron internetowych mają tendencję do wybierania tego języka scenariusza ze względu na jego bogate funkcje i ramy. Ponadto możesz rozwój na froncie i tylnym końcu, ucząc się JavaScript. Nie można jednak opracowywać tylko aplikacji internetowych, ale także aplikacji mobilnych. Ten samouczek JavaScript pomoże ci, jeśli przygotujesz się na sesję rozmowy kwalifikacyjnej. Niemniej jednak ten przewodnik jest wart przeczytania, aby dodać więcej do wiadra wiedzy.
W tym artykule omówimy następujące punkty:
*  **[Co podnosi się w JavaScript][2]**  
*  **[Zakres w JavaScript][3]**  
*  **[zamknięcia JavaScript][4]**  

## Co podnosi się w JavaScript {#What-is-hoisting-in-JavaScript}

Zjawisko podejmowania funkcji lub deklaracji zmiennej oprócz obecnego zakresu jest znane jako podnoszenie. Jest to bardzo krytyczna koncepcja i większość programistów JavaScript nie jest tego świadoma. Jednak ważną rzeczą, na którą należy zwrócić uwagę, jest to, że tylko deklaracje funkcji/zmiennej są przenoszone na górę, a nie inicjalizację funkcji/zmiennej.
Weźmy przykład i zobacz poniższy fragment kodu;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
W powyższym przykładzie kodu dokonaliśmy wywołania funkcji przed deklaracją funkcji, ale mimo że kod jest skutecznie wykonany i jest to spowodowane podnoszeniem JavaScript. Zasadniczo w czasie kompilacji interpreter JavaScript skanuje kod, zbiera wszystkie funkcje/zmienne i umieszcza je w pamięci zwanej środowiskiem leksykalnym. To samo dzieje się ze zmiennymi.
```
name = "mustafa";
console.log(name);
var name;

```
Podobnie inicjalizacja zmiennej nazwy została przeprowadzona przed jej deklaracją, a kod działa bez żadnego błędu. Ponownie, w czasie kompilacji, interpreter JS sprawdził środowisko leksykalne, aby znaleźć deklarację zmienną, a tym samym wykonał kod.
Tak więc, jeśli zadeklarujesz zmienne za pomocą słów kluczowych Let and Const, JavaScript nieco je podnosi.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
Wystąpił błąd w fragmencie kodu powyżej. Powodem jest to, że inicjalizacja nie została wykonana podczas podnoszenia tej zmiennej. Krótko mówiąc, wszystkie deklaracje są inicjowane przez „niezdefiniowane”, podczas gdy zmienne zadeklarowane „let” lub „const” nie są inicjowane w podnoszeniu.

## Zakres w JavaScript {#Scopes-in-JavaScript}

Zakres jest jedną z podstawowych pojęć JavaScript, które musi znać programista. Jednak praca ze sprawami JavaScript nie jest prosta i jest nieco inna. Dlatego w JavaScript są trzy rodzaje zakresów, które są następujące:
 **Na poziomie blokowym** : Zmienne zadeklarowane za pomocą „Let” lub „Const” zawiera zakres na poziomie bloku.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
Zmienna „A” nie jest dostępna poza klęskami {}, ponieważ ma zakres na poziomie bloku.
 **Na poziomie funkcji** : Zmienne zadeklarowane wewnątrz funkcji JavaScript mają zakres lokalny.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Ważną rzeczą, na którą należy zwrócić uwagę, jest to, że zmienne zadeklarowane za pomocą „Let” „const” i „var” mają zakres funkcji wewnątrz ciała funkcyjnego.
 **Na poziomie globalnym** : Zmienne zadeklarowane poza funkcją stają się zmiennymi globalnymi. Bez względu na to, czy zadeklarowałeś je za pomocą słów kluczowych „Let”, „const” czy „var”. Ponadto zmienna staje się zmienną globalną, jeśli została zadeklarowana bez użycia żadnego słowa kluczowego, jak pokazano w fragmencie kodu poniżej:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## Zamknięcia JavaScript {#JavaScript-Closures}

Jest to kolejna ważna koncepcja, która wzmacnia twoją wiedzę JavaScript na temat zakresów i kapsułkowania danych. W najprostszej formie funkcja wewnątrz funkcji jest znana jako zamknięcie. Możesz wywołać zamknięcie funkcji wewnętrznej. Ta wewnętrzna funkcja ma trzy rodzaje zakresu:
 * Ma swój własny zakres na poziomie bloków.
 * Ma dostęp do zmiennych rodzica.
 * Zmienne w globalnym zakresie są również dostępne wewnątrz zamknięcia.
 Zobaczmy, jak stworzyć zamknięcie:
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
Zmienna nazwa_namalna jest dostępna wewnątrz funkcji o nazwie innerFunc, ale funkcja nadrzędna nie może mieć dostępu do zmiennej Last_name. To zachowanie pozwala programistom tworzyć prywatne zmienne w łańcuchu zakresu.

## Wniosek
Kończymy ten przewodnik JavaScript tutaj i mamy nadzieję, że lepiej rozumiesz  **JavaScript Podstawowe pojęcia** . Co więcej, przeszliśmy również przez **zamknięcia JavaScript, zakresy w JavaScript**  i podnoszenie. Istnieje wiele innych ważnych koncepcji, które są obowiązkowe dla początkujących. Tak więc ten artykuł pomoże ci, jeśli dobrze się rozwijasz, aby ulepszyć lub odświeżyć koncepcje JavaScript. Ponadto możesz przejrzeć posty na blogu wymienione w sekcji „patrz także”.

## Połącz się z nami
Wreszcie [Containerize.com][5] oferuje trwające samouczki JavaScript na różne ekscytujące tematy. Możesz pozostać w pętli, obserwując nas na naszych platformach społecznościowych, w tym [Facebook][6], [LinkedIn][7] i [Twitter][8].

## Zadać pytanie
Możesz poinformować nas o swoich pytaniach lub zapytaniach na naszym [forum][9].

## FAQ
 **Jakie są ważne pojęcia do nauczenia się w JavaScript?** 
Postępuj zgodnie z tym JavaScript dla początkujących [przewodnik][2], aby poznać podstawowe pojęcia JavaScript.

## Zobacz też
  * [Co to jest DOM w JavaScript? |. Model obiektu dokumentu][1]
  * [Co jest obiecujące w JavaScript? |. Samouczek JavaScript][10]
  * [Co to jest obliczenia bez serwera? |. Architektura bez serwera][11]
  * [Co to jest wielokrotność? |. Dlaczego podejście wielozadaniowe?][12]
  * [Co to jest AI | Generatywna sztuczna inteligencja][13]
  * [Czego czeka async w JavaScript? |. Przewodnik JavaScript][14]
  * [Jak korzystać z Chatgpt w VSCode | Kod rozszerzenia VSCode GPT][15]
  * [Co to jest Openai Chatbot GPT-3 | Chatgpt an AI Revolution][16]
  * [Wprowadzenie do sztucznej inteligencji | Co to jest AI?][17]
  * [Czego czeka async w JavaScript? |. Przewodnik JavaScript][18]



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
