---
title: "Come creare e eseguire un bot in Rocket.Chat usando BotPress" 
seoTitle: "Come creare e eseguire un bot in Rocket.Chat usando BotPress" 
description: "Questa guida ti insegna con passi semplici e semplici che come creare Bot usando BotPress e la sua integrazione con Rocket.Chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "In questo tutorial, ti guideremo su come creare un bot usando BotPress ed è l'integrazione con Rocket.Chat" 
url: /it/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## In questo tutorial, ti guideremo su come creare un bot usando BotPress e la sua integrazione con Rocket.Chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Come creare e eseguire un bot in Rocket.Chat usando BotPress">}}

Un chatbot è un programma per computer progettato per simulare la conversazione umana. Probabilmente ne hai incontrato uno su Facebook Messenger, un sito Web di vendita al dettaglio. Tecnicamente parlando, i robot sono programmi automatizzati progettati per eseguire un'attività specifica.
Rocket.Chat incoraggia le integrazioni di automazione dei chatbot e della messaggistica. Pertanto, ha una documentazione completa per guidarti attraverso il processo di produzione dei bot.
In questo articolo, ti guideremo attraverso come creare un bot usando BotPress. E, come configurare Rocket.Chat con BotPress.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Crea un utente bot in Rocket.chat][3]
  * [Codifica il tuo bot usando botpress][4]
  * [Conclusione][5]

## # Rocket.Chat   {#RockEtchat}
Rocket.Chat è tra il popolare software di chat dal vivo in parte un progetto di chat dal vivo open source. Ha una versione di chat dal vivo gratuita come edizione della comunità. Inoltre, una versione di chat live ospitata a pagamento per grandi aziende con funzionalità di chat interna private. Questa applicazione di chat dal vivo funziona nel browser ma può essere installata anche sul tuo server. [Leggi di più][6]

## # botpress   {#botPress}
I chatbot conversazionali hanno reso possibile questo per le aziende per offrire ai propri clienti il ​​supporto ad alto tocco sempre disponibile che desiderano. BotPress è uno degli strumenti di creazione di bot open source più popolare con elaborazione del linguaggio naturale integrato. La tecnologia NLU di BotPress lo rende un passo avanti rispetto ai suoi concorrenti sul campo come Botkit, Dialogflow e Microsoft Bot Framework. [Leggi di più][7]

## # Crea un utente bot in Rocket.chat   {#CreateBotuser}
Per parlare con il tuo chatbot deve esserci un account utente preconfigurato sul server Rocket.Chat in cui il bot può accedere.
Per creare l'account è necessario disporre di privilegi di amministrazione:
  1. Nel topbar, fare clic sui tre punti (opzioni) e quindi fare clic su**Amministrazione**
  2. Seleziona**Utenti**dalla barra laterale sinistra
  3. Fare clic sul pulsante `+` (Aggiungi utente) nella barra laterale destra
  4. Nella finestra del profilo che appare, riempire _name_, _username_, _email_ e _password_ fields
  5. Abilita _verified_ azionamento sotto il campo _email_
  6. Disabilita _Require Password Cambia
  7. Seleziona `Bot` dal menu a discesa` Aggiungi ruolo e fai clic sul pulsante _add Role_ a destra
  8. Disabilita _Join Canali predefiniti_ e _Send Welcome email caselle
  9. Fare clic su _Save_
Una volta salvato, il bot verrà configurato con il nome utente e la password impostati nel passaggio 4. È possibile utilizzare le variabili ambientali "RocketCat \ _User" e "Rocketchat \ _Password" per accedere al server Rocket.Chat con questo nome utente e coppia di password.

Codice ## # Il tuo bot usando BotPress  {#CodeBot}
BotPress è un pacchetto Node.js e funziona con nodo e NPM.
Il modo più veloce per iniziare con BotPress è l'utilizzo di [BotPress-Kick-Starter][8] che è già integrato con Rocket.Chat tramite [connettore del canale BotPress][9].
Passare alla cartella in cui si desidera lavorare con il bot e procedere con i seguenti passaggi:
* * Installa pacchetto BotPress**
```
npm init -y
npm install botpress@10.40.0
```
* * Crea un bot**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
Il comando "BotPress init" avvia una procedura guidata che ti aiuterà a creare la configurazione iniziale. Dovresti vedere qualcosa come segue:
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
* * Installa il connettore BotPress e le dipendenze del bot**
```
npm install
npm install botpress-channel-rocketchat
```
configurare il bot
Apri la cartella "Config" e crea il file "Channel-Rocketchat.json" con il seguente contenuto:
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
* * Esegui il bot**
```
npm start
```
* * Parla con il tuo bot**
Sul server, accedi come utente normale (non l'utente del bot), vai nella stanza generale e parla con il tuo bot appena creato.

## # conclusioni   {#conclusione}
In questo articolo, abbiamo imparato a creare un bot in BotPress. E, come configurarlo con Rocket.chat. BotPress rende molto facile per gli utenti creare flussi di lavoro automatizzati innovativi. E, l'integrazione con Rocket.Chat ti consente di controllarli in modo conversazionale.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
