---
title: "Zintegrujmy Chatgpt w aplikacji JavaScript | Samouczek Chatgpt" 
seoTitle: "Zintegruj Chatgpt w aplikacji JavaScript" 
description: "Po prostu uruchom NPM I Chatgpt i zacznij używać Openai Chatbot w swojej aplikacji Node.js. Śledź ten przewodnik, aby dowiedzieć się, jak zintegrować ChatGPT z aplikacją JavaScript." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "Po prostu uruchom NPM I Chatgpt i zacznij używać Openai Chatbot w swojej aplikacji Node.js. Śledź ten przewodnik, aby dowiedzieć się, jak zintegrować ChatGPT z aplikacją JavaScript." 
url: /pl/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## Uspoperatuj swoje oprogramowanie biznesowe, integrując wirusowy chatbot oparty na GPT-3. Ten samouczek Chatgpt pokazuje etapy integracji i fragment kodu.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="Zintegruj Chatgpt w aplikacji JavaScript">}}


## Przegląd
Witaj czytelnicy! Dziękuję bardzo za przytłaczającą odpowiedź na posty na blogu, które opublikowaliśmy na integracji [Chatgpt][1]. Jesteśmy tutaj z kolejnym użytecznym  **chatgpt samouczek** po twoim zainteresowaniu. Ponadto będziemy w pętli, aby publikować artykuły korzystne dla twoich naukowców i kariery. Jednak rozpoczęliśmy [serię][20] samouczków JavaScript, więc jest to najlepszy czas na napisanie przewodnika, który pokazuje, jak  **zintegrować Chatgpt w JavaScript AQPP**  programowo. Ponadto napiszemy fragment kodu, aby ta funkcja oparta na GPT-3 **wirusowa**  . W tym celu włączymy funkcjonalność CHATGPT w aplikacji Node.js. Dlatego podstawowy poziom wcześniejszej wiedzy na temat Node.js jest plusem, przechodząc ten przewodnik.
Poniższe sekcje zostaną omówione w tym samouczku Chatgpt:
*  **[Wymagania wstępne - OPRACJA JAVASCRIPT CHATGPT][2]**  
*  **[Integracja Chatgpt z aplikacją Node.js][3]**  

## Wymagania wstępne - opakowanie JavaScript Chatgpt {#Pre-requisites---ChatGPT-JavaScript-wrapper-}

W tej sekcji pokazuje wymagania potrzebne do włączenia integracji CHATGPT w aplikacji opartej na node.js. Wymagania są proste i łatwe w instalacji w systemie.
Poniżej znajdują się wstępne wyprzedzenie do ćwiczenia tej integracji JavaScript Chatgpt:

 * [NodeJS4](>= 18)

 * [NPM5](>=9)
 
Po zainstalowaniu powyższych warunków wstępnych następnym krokiem jest uzyskanie klawisza API Openai. Ten klawisz służy do programów prośby API do Chatgpt. Dlatego odwiedź ten [link][6], aby dowiedzieć się, jak uzyskać klucz API Openai na wypadek, gdybyś nie znał procedury.
Zachowaj swój klucz API w bezpiecznym miejscu, a to wszystko w fazie wymagań.

## Integracja Chatgpt z aplikacją Node.js {#ChatGPT-integration-with-Node.js-application}

Teraz wszyscy jesteśmy ustawione na  **Zintegruj Chatgpt w aplikacji JavaScript programowo.**  Najpierw otwórz terminal i uruchom następujące polecenie:
```
npm i chatgpt
```
Po udanym uruchomieniu wykonaj następujące kroki i fragment kodu, aby złożyć prośbę do modelu GPT-3, aby programowo interakcja z Chatgpt:
 * Zaimportuj chatgptapi.
 * Zainicjuj konstruktor za pomocą klucza API Openai.
 * Przywołaj metodę sendMessage, aby wysłać wiadomość do modelu GPT-3 i odbierać odpowiedź.
 * Wyświetl odpowiedź.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
Skopiuj i wklej powyższy fragment kodu do głównego pliku serwera i uruchom następujące polecenie w terminalu:
```
node index.js
```
 **Uwaga** : Dodaj („Type”: „moduł”,) do pliku pakietu.json na wypadek, gdybyś otrzymał błąd „Nie możesz użyć instrukcji importu poza modułem”.
Możesz zobaczyć dane wyjściowe na poniższym obrazku:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="Samouczek Chatgpt">}}

Ponadto to opakowanie JavaScript Chatgpt pozwala śledzić rozmowy i wysyłać wiadomości kolejne. Jedyne, co musisz zrobić, to przekazać „ParentMessageID” w ciele żądania, jak pokazano w fragmencie kodu poniżej:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
Podobnie możesz zbadać wiele innych oferowanych metod [tutaj][7]. Ta integracja Openai Chatbot może dać przewagę konkurencyjną aplikacji na poziomie przedsiębiorstwa.

## Wniosek
Ten punkt prowadzi nas do końca tego  **chatgpt** . Mamy nadzieję, że nauczyłeś się, jak  **zintegrować Chatgpt w aplikacji JavaScript**  programowo. Ponadto masz fragment kodu roboczego, który możesz przetestować na komputerze lokalnym. Ten post na blogu jest zasobem, jeśli dobrze się nauczysz, aby nauczyć się **integracja chatgpt**  w aplikacji Node.js.

## Połącz się z nami
Wreszcie [Containerize.com][8] Ciągle pisze posty na blogu na różne tematy. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][9], [LinkedIn][10] i [Twitter][11].

## Zadać pytanie
Możesz poinformować nas o swoich pytaniach lub zapytaniach na naszym [forum][12].

## FAQ
 **Jak zintegrować chatgpt z JavaScript?** 
Postępuj zgodnie z tym chatgpt [samouczek][2], aby poznać kroki i fragment kodu, aby programowo zintegrować Chatgpt w aplikacji JavaScript.

## Zobacz też
  * [Wprowadzenie do sztucznej inteligencji | Co to jest AI?][13]
  * [Jak zintegrować chatgpt z arkuszami Google][14]
  * [Jak korzystać z Chatgpt w VSCode | Kod rozszerzenia VSCode GPT][15]
  * [Co to jest Openai Chatbot GPT-3 | Chatgpt an AI Revolution][16]
  * [Integracja Dokumentów Google z Chatgpt | Openai GPT-3][17]
  * [Jakie jest 5 najlepszych frameworków AI open source][18]
  * [Co to jest AI | Generatywna sztuczna inteligencja][19]



[1]: https://blog.containerize.com/categories/artificial-intelligence/
[2]: #Pre-requisites---ChatGPT-JavaScript-wrapper-
[3]: #ChatGPT-integration-with-Node.js-application
[4]: https://nodejs.org/en/download/
[5]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
[6]: https://blog.containerize.com/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/#Retrieve-OpenAI-API-Key-configure-CodeGPT-
[7]: https://www.npmjs.com/package/chatgpt#intro
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://forum.containerize.com/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[20]: https://blog.containerize.com/categories/programming/
