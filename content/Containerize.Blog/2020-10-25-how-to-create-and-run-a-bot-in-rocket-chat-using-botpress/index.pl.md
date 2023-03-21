---
title: "Jak tworzyć i uruchomić bot w rakiecie. Chat za pomocą BotPress" 
seoTitle: "Jak tworzyć i uruchomić bot w rakiecie. Chat za pomocą BotPress" 
description: "Ten przewodnik uczy prostych i łatwych kroków, aby stworzyć bot za pomocą BotPress i jego integracja z Rocket.Chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "W tym samouczku poprowadzimy Cię, jak stworzyć bot za pomocą BotPress i jest to integracja z Rocket.chat" 
url: /pl/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## W tym samouczku poprowadzimy Cię, jak stworzyć bot za pomocą BotPress i jest to integracja z Rocket.chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Jak tworzyć i uruchomić bot w rakiecie. Chat za pomocą BotPress">}}

Chatbot to program komputerowy zaprojektowany do symulacji ludzkiej rozmowy. Prawdopodobnie spotkałeś jeden na Facebooku Messenger, witrynie detalicznej. Technicznie rzecz biorąc, boty to zautomatyzowane programy zaprojektowane do wykonania określonego zadania.
Rocket.chat zachęca do integracji chatbota i automatyzacji przesyłania wiadomości. Dlatego ma kompleksową dokumentację, która prowadzi Cię przez proces tworzenia bota.
W tym artykule poprowadzimy Cię, jak utworzyć bot za pomocą BotPress. Oraz jak skonfigurować Rocket.Chat z BotPress.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Utwórz użytkownika bota w Rocket.Chat][3]
  * [Kod bota za pomocą BotPress][4]
  * [Wniosek][5]

### rocket.chat   {#Rocketchat}
Rocket.chat jest jednym z popularnych oprogramowania na żywo, częściowo projektem czatu na żywo open source. Ma bezpłatną wersję czatu na żywo jako edycję społeczności. Oprócz płatnej wersji czatu na żywo dla dużych firm z prywatnymi funkcjami czatu wewnętrznego. Ta aplikacja czatu na żywo działa w przeglądarce, ale może być instalowana również na własnym serwerze. [Czytaj więcej][6]

### BotPress   {#BotPress}
Chatboty konwersacyjne umożliwiły to firmom, aby zapewnić swoim klientom zawsze dostępne wsparcie o wysokim dotyku. BotPress jest jednym z najpopularniejszych narzędzia do tworzenia bota open source z wbudowanym przetwarzaniem języka naturalnego. Technologia NLU Botpress sprawia, że ​​jest o krok przed konkurencjami w terenie, takimi jak Botkit, DioglogFlow i Microsoft Bot Framework. [Czytaj więcej][7]

### Utwórz użytkownika bota w rocket.chat   {#CreateBotuser}
Aby porozmawiać z chatbotem, na serwerze Rocket.Chat musi istnieć konto użytkownika.
Aby utworzyć konto, potrzebujesz uprawnień administratora:
  1. Na topbar kliknij trzy kropki (opcje), a następnie kliknij**Administracja**
  2. Wybierz**Użytkownicy**z lewego paska bocznego
  3. Kliknij przycisk `+` (Dodaj użytkownika) na prawym pasku bocznym
  4. W wyświetlonym oknie profilu wypełnij _name_, _username_, _email_ i _password_ pola
  5. Włącz _verified_ przełącz w polu _email_
  6. Wyłącz _ -require hasło Zmiana_ przełącz w polu _password_
  7. Wybierz `bot` z menu rozwijanego„ Dodaj rolę ”i kliknij przycisk _ADD Role_ po prawej stronie
  8. Wyłącz _join Domyślne kanały_ i _send Welcome E -mail_
  9. Kliknij _save_
Po zapisaniu bot zostanie skonfigurowany za pomocą nazwy użytkownika i hasła na kroku 4. Możesz użyć zmiennych środowiskowych „Rocketchat \ _User” i „Rocketchat \ _password”, aby zalogować się na serwer Rocket.chat z tą nazwą użytkownika i pary haseł.

### kod bot za pomocą botpress   {#CodeBot}
BotPress to pakiet Node.js i działa z węzłem i NPM.
Najszybszym sposobem na rozpoczęcie od BotPress jest użycie repozytorium [Botpress-Kick-Starter][8], które jest już zintegrowane z Rocket.Chat za pośrednictwem [złącza kanału Botpress][9].
Przejdź do folderu, w którym chcesz pracować z botem i kontynuuj następujące kroki:
* * Zainstaluj pakiet BotPress**
```
npm init -y
npm install botpress@10.40.0
```
* * Utwórz bot**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
Polecenie „BotPress Init” uruchamia kreatora, który pomoże Ci utworzyć początkową konfigurację. Powinieneś coś zobaczyć w następujący sposób:
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
* * Zainstaluj złącze BotPress i zależności botów**
```
npm install
npm install botpress-channel-rocketchat
```
Skonfiguruj bot
Otwórz folder „Config” i utwórz plik „Channel-cocketchat.json” za pomocą następującej zawartości:
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
* * Uruchom bot**
```
npm start
```
* * Porozmawiaj ze swoim botem**
Na serwerze Zaloguj się jako zwykły użytkownik (nie użytkownik bota), idź do ogólnego pokoju i porozmawiaj z nowo utworzonym botem.

### Wniosek   {#Conclusion}
W tym artykule nauczyliśmy się tworzyć bota w BotPress. I jak skonfigurować go z Rocket.Chat. BotPress ułatwia użytkownikom budowanie innowacyjnych zautomatyzowanych przepływów pracy. Oraz integracja z Rocket.chat pozwala kontrolować je w sposób konwersacyjny.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
