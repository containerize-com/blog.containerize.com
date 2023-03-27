---
title: "Jakie są typy danych JavaScript? |. Przewodnik dla początkujących" 
seoTitle: "Jakie są typy danych JavaScript? |. Przewodnik dla początkujących" 
description: "Jakie są typy danych JavaScript? Postępuj zgodnie z tym przewodnikiem dla początkujących, aby nauczyć się 7 typów danych używanych w numerze JavaScript, String, Boolean, Null, Undefined i więcej." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "Popularność JavaScript jest nie do powstrzymania ze względu na jego zdolność adaptacyjną. Śledź tego przewodnika JavaScript dla początkujących i zacznij pielęgnować swoją wiedzę specjalistyczną w stosie JS." 
url: /pl/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## Popularność JavaScript jest nie do powstrzymania ze względu na jego zdolność adaptacyjną. Śledź tego przewodnika JavaScript dla początkujących i zacznij pielęgnować swoją wiedzę specjalistyczną w stosie JS.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |Jakie są typy danych JavaScript? |. Przewodnik dla początkujących">}}


## Przegląd
Bez względu na to, czy jesteś przeciętnym poziomem, czy doświadczonym programistą, otrzymasz rozwiązania problemów związanych z pracą w rozwoju. [Containerize.com][1] rozpoczął pisanie postów na blogu w kategorii programowania i zaczynamy od  **JavaScript dla początkujących** . Ponieważ zaczynamy, więc ten artykuł dotyczył typów danych JavaScript. Zbadajmy  **Czym są typy danych JavaScript**  i zobacz przykłady, w jaki sposób możesz je efektywnie używać w kodzie źródłowym. Dlatego dokładnie przejdź przez przewodnika tego początkującego, aby dobrze zrozumieć **JavaScript Rodzaje danych**  .
Obejmujemy następujący punkt:
  * [Co to jest typ danych?][2]
  * [Co to są typy danych JavaScript?][3]

## Wyjaśnione typy danych | Co to jest typ danych? {#What-is-a-data-type}

Typ danych polega na informowaniu kompilatora, jak interpretować lub skompilować dane. Zastosowanie typów danych ma kluczowe znaczenie i należy go używać mądrze. Krótko mówiąc, chodzi o format danych, takich jak liczba, ciąg, boolean i więcej. Istnieją jednak dwie kategorie typów danych prymitywne typy danych i typy danych niepryminitywnych. Istnieje osiem prymitywnych typów danych, przez które przejdziemy w następnej sekcji.

## Jakie są typy danych JavaScript? {#What-are-JavaScript-Data-Types}

W rzeczywistości JavaScript jest luźno wpisanym językiem, co oznacza, że ​​nie musisz jawnie definiować typu zmiennego. Możesz przypisać dowolną wartość do zmiennej, a ta zmienna będzie przechowywać tę wartość, taką jak String, Bigint, Boolean lub więcej.

{{< figure align=center src="images/web-development.png" alt="Przewodnik dla początkujących JavaScript">}}


#### prymitywne typy danych
Prymitywne typy danych to te, które są niezmienne i nie można ich zmienić po utworzeniu i inicjalizacji. Możesz jednak ponownie przypisać nową wartość, ale nie możesz zmutować istniejącej wartości.
Na przykład:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
W powyższym przykładzie ciąg jest prymitywnym typem danych, a stara wartość jest zastępowana nową wartością, ale zmiana istniejącej wartości nie jest odzwierciedlona. Widzimy więc, że wciąż jest to „moje imię zmieniło się”, a nie „moje imię się zmieniło”;

####
Nieprzestite typy danych są zmienne, w prostych słowach przeciwieństwo prymitywnych typów danych.
Na przykład:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Ponadto prymitywne typy danych są porównywane według wartości, a typy danych niepryminitywnych są zawsze porównywane przez odniesienie.
Na przykład:
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
Teraz przejrzyjmy typy danych jeden po drugim. Istnieje 6 prymitywnych typów danych i 1 niepryminitywny typ danych.
 **Prymitywne typy danych obejmują:**  
*  **String**  : Ten typ danych reprezentuje dane tekstowe, które składają się z sekwencji znaków otoczonych cytatami.
*  **Numer**  : Reprezentuje dane dziesiętne/nie-decymalne, szczególnie liczbę całkowitą lub zmiennoprzecinkową.
*  **Boolean**  : Reprezentacja wartości logicznych True lub Fałsz.
*  **Symbol**  : Symbol służy do przechowywania unikalnych wartości.
*  **Undefined**  : zmienna bez żadnej wartości lub niezainicjowanej zmiennej.
*  **NULL**  : Brak dowolnej wartości jest uważana za NULL.
 **Nieprzestronny typ danych obejmuje:**  
 **Obiekt** : Służy do przechowywania gromadzenia danych składających się z par kluczowych.

## Wniosek
To jest koniec tego  **Guide JavaScript dla początkujących** . Przeszliśmy  **Czym są typy danych JavaScript**  ? Ponadto zbadaliśmy, jaki jest typ danych w skrócie. Powinieneś lepiej zrozumieć niepryminitywne i **prymitywne typy danych**  w JavaScript. Ten post na blogu naprawdę pomoże ci, jeśli chcesz przygotować do rozmowy kwalifikacyjnej.
Wreszcie [Containerize.com][1] ciągle pisze posty na blogu na temat dalszych produktów i tematów typu open source. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][4], [LinkedIn][5] i [Twitter][6].

## Zadać pytanie
Możesz poinformować nas o swoich pytaniach lub zapytaniach na naszym [forum][7].

## FAQ
 **Jakie są 8 typów danych JavaScript?** 
Odwiedź ten [link][3], aby poznać 8 typów danych JavaScript.

## Zobacz też
  * [Bezpłatne i open source popularne ramy JavaScript][8]
  * [Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][9]
  * [Top 10 technologii open source do nauki w 2022 r.][10]



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
