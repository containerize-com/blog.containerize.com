---
title: "So erstellen und führen Sie einen Bot in Rocket.chat mit BotPress aus und führen Sie sie aus" 
seoTitle: "So erstellen und führen Sie einen Bot in Rocket.chat mit BotPress aus und führen Sie sie aus" 
description: "Dieser Leitfaden vermittelt Sie mit einfachen und einfachen Schritten, in denen Sie Bot mit BotPress erstellen und in die Integration in Rocket.chat sind." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "In diesem Tutorial führen wir Sie dazu, wie Sie einen Bot mit BotPress erstellen, und die Integration in Rocket.chat" 
url: /de/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## In diesem Tutorial führen wir Sie dazu, wie Sie einen Bot mit BotPress erstellen, und die Integration in Rocket.chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="So erstellen und führen Sie einen Bot in Rocket.chat mit BotPress aus und führen Sie sie aus">}}

Ein Chatbot ist ein Computerprogramm, das das menschliche Gespräch simulieren soll. Sie haben wahrscheinlich auf Facebook Messenger, einer Einzelhandelswebsite, auf einen gestoßen. Technisch gesehen sind Bots automatisierte Programme, um eine bestimmte Aufgabe auszuführen.
Rocket.chat fördert Chatbot- und Messaging -Automatisierungsintegrationen. Verfügt daher über umfassende Dokumentation, um Sie durch den Bot-Herstellungsprozess zu führen.
In diesem Artikel führen wir Sie durch das Erstellen eines Bots mit BotPress. Und wie man Rocket.chat mit BotPress konfigurieren.
  * [Rocket.Chat][1]
  * [Botpress][2]
  * [Erstellen Sie einen Bot -Benutzer in Rocket.chat][3]
  * [Codieren Sie Ihren Bot mit BotPress][4]
  * [Schlussfolgerung][5]

## # Rocket.chat   {#Rocketchat}
Rocket.chat gehört zu der beliebten Live -Chat -Software, die teilweise ein Open -Source -Live -Chat -Projekt ist. Es hat eine kostenlose Live -Chat -Version als Community -Ausgabe. Neben einer kostenpflichtigen Live -Chat -Version für große Unternehmen mit privaten internen Chat -Funktionen. Diese Live -Chat -Anwendung wird im Browser ausgeführt, kann jedoch auch auf Ihrem eigenen Server installiert werden. [Lesen Sie mehr][6]

## # BotPress   {#botpress}
Konversations -Chatbots haben es Unternehmen ermöglicht, ihren Kunden die immer verfügbare hohe Berührungsunterstützung zu bieten, die sie gewünscht haben. BotPress ist eines der beliebtesten Open-Source-Bot-Kreationsinstrumente mit integrierter Verarbeitung natürlicher Sprache. Die NLU -Technologie von Botpress macht es seinen Konkurrenten vor Ort wie Botkit, Dialogflow und Microsoft Bot Framework zu einem Schritt voraus. [Lesen Sie mehr][7]

## # Erstellen Sie einen Bot -Benutzer in Rocket.chat   {#createBotuser}
Um mit Ihrem Chatbot zu sprechen, muss ein Benutzerkonto auf dem Rocket.chat-Server vorkonfiguriert sein, auf den sich der Bot anmelden kann.
Um das Konto zu erstellen, benötigen Sie die Administratorrechte:
  1. Klicken Sie in der TopBar auf die drei Punkte (Optionen) und dann auf **Administration**  klicken
  2. Wählen Sie **Benutzer**  aus der linken Seitenleiste aus
  3. Klicken Sie in der rechten Seitenleiste auf die Schaltfläche "+` (Benutzer hinzufügen).
  4. Füllen Sie im angezeigten Profilfenster _name_, _username_, _email_ und _password_ fields aus
  5. Aktivieren Sie _verified_ unter das Feld _email_ umschalten
  6. deaktivieren
  7. Wählen Sie aus dem Dropdown -Menü "Rollen hinzufügen" `bot` und klicken Sie nach rechts auf _add rollen_
  8. deaktivieren
  9. Klicken Sie auf _save_
Nach dem Speichern wird der Bot mit dem in Schritt 4 festgelegten Benutzernamen und Kennwort konfiguriert.

## # codieren Ihren Bot mit BotPress   {#CodeBot}
BotPress ist ein Node.js -Paket und arbeitet mit Knoten und NPM.
Der schnellste Weg, um mit BotPress zu beginnen, ist die Verwendung von [Botpress-Kick-Starter][8] Repository, das bereits in Rocket.chat über [Botpress-Kanal-Anschluss][9] integriert ist.
Navigieren Sie zum Ordner, in dem Sie mit dem Bot arbeiten möchten, und fahren Sie mit den folgenden Schritten fort:
**BotPress -Paket installieren** 
```
npm init -y
npm install botpress@10.40.0
```
**Erstellen Sie einen Bot** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
Der Befehl „BotPress Init“ startet einen Assistenten, mit dem Sie die erste Konfiguration erstellen können. Sie sollten etwas wie folgt sehen:
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
**Installieren Sie den BotPress -Anschluss und die Bot -Abhängigkeiten **** 
```
npm install
npm install botpress-channel-rocketchat
```
Konfigurieren Sie den Bot
Öffnen Sie den Ordner "config" und erstellen Sie "Channel-Rocketchat.json" -Datei mit folgenden Inhalten:
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
**Führen Sie den Bot aus** 
```
npm start
```
**Sprechen Sie mit Ihrem Bot** 
Melden Sie sich auf dem Server als regulärer Benutzer (nicht als Bot -Benutzer) an, gehen Sie in den allgemeinen Raum und sprechen Sie mit Ihrem neu erstellten Bot.

## # Fazit   {#Conclusion}
In diesem Artikel haben wir gelernt, wie man einen Bot in Botpress erstellt. Und wie man es mit Rocket.chat konfigurieren. BotPress macht es den Benutzern sehr einfach, innovative automatisierte Workflows zu erstellen. In der Integration mit Rocket.chat können Sie sie auf konverselle Weise kontrollieren.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
