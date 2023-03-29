---
title: "Jak utworzyć bot FAQ oparty na AI dla swojej firmy za pomocą BotPress" 
seoTitle: "Jak utworzyć bot FAQ oparty na AI dla swojej firmy za pomocą BotPress" 
description: "W tym poście na blogu dowiemy się, jak zautomatyzować zapytania klientów za pomocą bota FAQ opartego na AI za pomocą BotPress w Twojej witrynie." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "Firmy potrzebują lepszych platform obsługi klienta, aby skutecznie rozwiązać swoje zapytania. W tym samouczku dowiemy się, jak utworzyć bot oparty na AI za pomocą BotPress" 
url: /pl/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## Firmy potrzebują lepszych platform obsługi klienta, aby skutecznie rozwiązywać zapytania. W tym samouczku dowiemy się, jak utworzyć bot FAQ oparty na AI za pomocą BotPress

{{< figure align=center src="images/botpress-banner.png" alt="FAQ Bot dla Twojej firmy za pomocą BotPress">}}

Automatyzacja FAQ polega na poprawie wrażeń klienta online za pomocą chatbotów, aby odpowiedzieć na często zadawane pytania. Dzięki postępowi sztucznej inteligencji i uczenia maszynowego popyt na rozmowy oparte na AI zyskało dużą popularność i popyt. I dzieje się tak głównie dlatego, że cała firma chce poprawić swoją obsługę klienta, nawet gdy firma jest offline. Chatboty konwersacyjne umożliwiły to firmom, aby zapewnić swoim klientom zawsze dostępne wsparcie wysokiego dotyku. Celem tego postu na blogu jest pomoc w skonfigurowaniu bota FAQ opartego na AI za pomocą BotPress.
W tym artykule dowiemy się o module NLU Botpress oraz o tym, jak działa zrozumienie / przetwarzanie języka naturalnego i może pomóc firmom w osiągnięciu wysokiego poziomu satysfakcji klientów. Zacznijmy!
* **[Co to jest przetwarzanie języka naturalnego][1]** 
* [ **Określ swój przypadek użycia** ][2]
* [ **Zainstaluj botPress** ][3]
* [ **Utwórz nowy bot** ][4]
* [ **Trenuj bot pytań** ][5]
* [ **Wniosek** ][6]

## Co to jest przetwarzanie języka naturalnego {#nlu}

Przetwarzanie języka naturalnego (NLP) to gałąź sztucznej inteligencji, która pomaga komputerom zrozumieć, interpretować i manipulować językiem ludzkim. NLP pomaga komputerom komunikować się z ludźmi we własnym języku. I umożliwia komputerom przeczytanie tekstu, usłyszenie mowy, interpretację go, mierzenie sentymentu.
Podstawowe zadanie NLP obejmuje tokenizację i analizowanie, łodyga, oznaczenie części mowy, wykrywanie języka i identyfikację relacji semantycznych.
NLU jest modułem Botpress, który przetwarza każdy komunikat przychodzący i wykonuje klasyfikację intencyjną, identyfikację języka, ekstrakcję encji i oznaczenie szczelin.

## Określ swój przypadek użycia {#case}

Jeśli chcesz utworzyć chatbot AI FAQ, musisz mieć przypadek użycia swojej firmy. Ze względu na ten samouczek chcemy, aby nasi użytkownicy zadali dowolne przypadkowe pytanie związane z wyceną naszego produktu i naszym czasem biznesowym.

## Zainstaluj BotPress {#install}

Aby zainstalować BotPress, przejdź do [strony internetowej][7], kliknij „Pobierz za darmo” i wybierz swoją platformę. W tym samouczku używam wersji Mac. Po zakończeniu pobierania możesz wyodrębnić plik ZIP i uruchomić następujące polecenie na terminalu, przechodząc do odpowiedniego folderu.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="Botpress Start">}}


## Utwórz nowy bot {#create}

Teraz chcemy utworzyć nasz pierwszy bot, klikając **Utwórz bot**, a następnie wybierając **nowy bot** . Zadzwonię do naszego bota botem FAQ, a następnie jako szablon bota wybiorę **pusty bot** przed kliknięciem**Utwórz bot** .

{{< figure align=center src="images/create-bot.gif" alt="Utwórz nowy bot">}}

Teraz edytujemy ten bot w Botpress Studio Editor.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="BotPress Edit in Studio">}}

Teraz w studio masz wiele menu wzdłuż lewego paska bocznego. Ale ze względu na prostotę po prostu trzymamy się sekcji pytań i odpowiedzi.
Kliknij ikonę „Pytania i odpowiedzi” i dodaj możliwe / często zadawane pytania i ich odpowiednie odpowiedzi.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Botpress Pytania i odpowiedzi">}}


## Trenuj swojego bota FAQ {#train}

Po zakończeniu będziesz musiał wyszkolić bot FAQ, klikając przycisk „Train Chatbot” w prawym dolnym rogu sekcji Q&A.

{{< figure align=center src="images/train-bot.gif" alt="Botpress Train Bot">}}

Po zakończeniu szkolenia możesz przetestować bot FAQ za pomocą narzędzia wbudowanego emulatora.

{{< figure align=center src="images/test-faq-bot.gif" alt="Przetestuj swój bot FAQ">}}

Teraz, że masz gotowy bot FAQ, możesz wdrożyć ten bot na swojej stronie internetowej, postępując zgodnie z przewodnikiem Botpress [8].

## Wniosek {#conclusion}

W tym poście na blogu nauczyliśmy się i rozumiemy przetwarzanie języka naturalnego. Dostajemy również praktyczny proces tworzenia bota. Przeszkoliliśmy prosty bot FAQ, który pomaga Twoim klientom wiedzieć o terminach biznesowych i planach płatności. Celem samouczka było pomoc początkującym w rozpoczęciu pracy z botem FAQ opartym na AI za pomocą BotPress.



[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
