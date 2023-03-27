---
title: "Czym jest obietnica w JavaScript? |. Samouczek JavaScript" 
seoTitle: "Czym jest obietnica w JavaScript?" 
description: "Czym jest obietnica w JavaScript? Obietnica jest blokiem kodu, który daje końcowy wynik operacji asynchronicznej, takiej jak oczekuje, zakończona lub odrzucona." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "Czym jest obietnica w JavaScript? Obietnica to blok kodu, który daje wynik końcowy operacji asynchronicznej, takiej jak ukończona lub odrzucona." 
url: /pl/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## Czy starasz się poznać koncepcję obietnic JavaScript? W tym artykule wyjaśniono, jak stworzyć obietnicę, dlaczego używamy obietnicy w JavaScript i nie tylko.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Przegląd
Mamy nadzieję, że lepiej rozumiesz [typy danych JavaScript][1]. To kolejny post na blogu w kategorii [Programming][2]. W tym samouczku JavaScript przejdziemy przez **, co jest obiecujące w JavaScript** , a wraz z tym zobaczymy, jakie są operacje asynchroniczne, wykorzystanie obietnic i jak stworzyć obietnice w JavaScript. Po pierwsze, asynchroniczny proces/operacja jest taka, która wykonuje niezależnie w odniesieniu do innych procesów i nie tworzy żadnego zablokowania. Dlatego musisz obsłużyć operacje asynchroniczne, w przeciwnym razie może to powodować nieprawidłowości w kodzie JavaScript. Zbadamy więc, w jaki sposób możemy obsłużyć operacje asynchroniczne za pomocą obietnic.
W tym samouczku JavaScript omówimy następujące punkty:
* **[Co jest obietnica w JavaScript? Wyjaśnione obietnice][3]** 
* **[Dlaczego używamy obietnicy w JavaScript?][4]** 
* **[Jak działa obietnica w JavaScript?][5]** 
* **[Jak stworzyć obietnicę?][6]** 

## Czym jest obietnica w JavaScript? Wyjaśniono obietnice {#What-is-promise-in-JavaScript-Promises-Explained}

Obietnica jest obiektem, który reprezentuje wartość pogody operacji asynchronicznej, która została rozwiązana, odrzucona lub jest w stanie oczekująca. Bardziej proste słowa, obietnice są używane do zwrócenia wartości, która ma być jeszcze wytworzona przez asynchroniczny blok kodu. W rzeczywistości istnieją trzy **stany obietnicy** i może to być w dowolnym z następujących stanów:
**Oczekujący** : Obietnica jest w stanie oczekującym, co oznacza, że ​​jest w fazie początkowej i obecnie jest w realizacji.
**spełnione** : Obietnica została rozwiązana, a wartość została zwrócona.
**Odrzucone** : Jest to stan spowodowany każdym błędem, co oznacza, że ​​obietnica została odrzucona.
Ważną rzeczą do rozważenia jest to, że wartość/stan zwrócony przez obietnicę jest niezmienna i nie można jej zmienić, co oznacza, że ​​obietnice upewniają się, że nie ma niezwykłego zachowania.

## Dlaczego używamy obietnicy w JavaScript? {#Why-we-use-promise-in-JavaScript}

Jeśli nie wiesz, że **Callback Hell**, pozwól mi podzielić się tym, co to jest. Po pierwsze, wywołanie zwrotne jest funkcją w innej funkcji. Zasadniczo funkcja wywołania zwrotnego jest przekazywana jako drugi argument w funkcji, która wykonuje się po otrzymaniu wyników. Tak więc, w wielu scenariuszach, musisz zagnieżdżać funkcję wywołania zwrotnego, a wraz ze wzrostem gniazdowania jest prawie niemożliwe do obsługi. Dlatego nazywamy to długie gniazdowanie funkcji wywołania zwrotnego**Piekło oddzwonienia** .
Tak więc obietnica jest sposobem na uniknięcie sytuacji piekielnej oddzwaniania. Zastosowanie obietnic zapewnia lepszą czytelność i lepszą obsługę błędów. Ponadto możesz lepiej obsługiwać operacje asynchroniczne, odzyskując zwróconą wartość i przekazując tę ​​wartość do następnej funkcji w łańcuchu.

## Jak działa obietnica w JavaScript? {#How-promise-works-in-JavaScript}

Teraz zrozummy mechanizm pracujący stojący za obietnicami. Spójrz na wspomniany poniżej schemat.

{{< figure align=center src="images/what-is-a-promise.png" alt="Jak działa obietnica w JavaScript??" >}}

Zgodnie z wymienionym powyżej przepływem pracy szczegóły wdrożenia są dość jasne. Obietnica rozpoczyna wykonywanie jego stworzenia i jest w stanie oczekującym na odpowiedź. Istnieją dwie opcje albo będą dane, albo wystąpi błąd po zakończeniu przetwarzania. Po otrzymaniu danych trafia do bloku .then () i przechodzi do bloku .catch () w przypadku błędu.

## Jak stworzyć obietnicę? {#How-to-create-a-promise}

Do tej pory omówiliśmy podstawową koncepcję obietnicy. Teraz zbadamy, jak możemy stworzyć obietnicę w JavaScript. Użyjmy następującego konstruktora obietnicy, aby stworzyć obietnicę.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Obietnicy konstruktor pełni funkcję argumentu, który ponownie przyjmuje dwa argumenty, rozwiązuje, a drugie odrzucenie. Wzywa metodę rozstrzyp () w przypadku sukcesu i przechodzi do bloku odrzucania () w przypadku błędu lub odrzucenia.
Chodźmy trochę głęboko i odkryjmy stworzenie obietnicy.
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
W powyższym fragmencie kodu możesz dalej wykonywać wywołania API w bloku RESPOID ().
Zobaczmy teraz wzór wykonania obietnicy JavaScript.
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
Poniżej znajduje się wyjście powyższego fragmentu kodu:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Tak więc kod wewnątrz ciała obietnicy działa synchronicznie, więc wydrukowano „wykonanie synchroniczne”. Następnie blok .ten () działa asynchronicznie i czeka, aż wynik zostanie wygenerowany, ale wykonanie programu nie zatrzymuje się, dlatego „Hello Word” jest drukowane i wykonanie obietnicy zostało odroczone. Następnie blok .then () wykonuje i zwraca obiecane wartości. Taka jest historia obietnic JavaScript. Ponownie, ponieważ JavaScript jest pojedynczy gwint, obietnice są używane do obsługi operacji asynchronicznych w sposób nie blokujący.

## Wniosek
To jest koniec tego **samouczka JavaScript**. Mam nadzieję, że masz dobry pomysł na obietnice JavaScript. Omówiliśmy **What jest obiecujący w JavaScript** , dlaczego używamy obietnicy w JavaScript,**Jak obietnica działa w JavaScript** i jak stworzyć obietnicę. Ponadto omówimy ten temat więcej o jego zaawansowanym wykorzystaniu i przepisach. Dlatego przejrzyj ten artykuł na wypadek, gdybyś przygotowywał się na sesję rozmowy kwalifikacyjnej.

## Połącz się z nami
Wreszcie [Containerize.com][7] oferuje trwające samouczki JavaScript na różne ekscytujące tematy. Możesz pozostać w pętli, obserwując nas na naszych platformach społecznościowych, w tym [Facebook][8], [LinkedIn][9] i [Twitter][10].

## Zadać pytanie
Możesz poinformować nas o swoich pytaniach lub zapytaniach na naszym [forum][11].

## FAQ
**Jakie są obietnice w JavaScript z przykładem?** 
Połącz ten [link][3], aby wiedzieć, jakie są obietnice w JavaScript.

## Zobacz też
  * [Co to są typy danych JavaScript? |. Przewodnik dla początkujących][1]
  * [Kubernetes Multi-to-to-Bate Architecture i architektura oparta na kontenerze][12]
  * [Co to jest obliczenia bez serwera? |. Architektura bez serwera][13]
  * [Co to jest wielokrotność? |. Dlaczego podejście wielozadaniowe?][14]
  * [Co to są typy danych JavaScript? |. Przewodnik dla początkujących][15]



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
