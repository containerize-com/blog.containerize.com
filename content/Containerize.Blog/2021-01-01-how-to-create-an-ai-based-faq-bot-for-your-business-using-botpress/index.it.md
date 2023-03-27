---
title: "Come creare un bot FAQ basato sull'intelligenza artificiale per la tua attività utilizzando BotPress" 
seoTitle: "Come creare un bot FAQ basato sull'intelligenza artificiale per la tua attività utilizzando BotPress" 
description: "In questo post sul blog, impareremo come automatizzare le domande dei tuoi clienti utilizzando un bot FAQ basato sull'intelligenza artificiale utilizzando BotPress sul tuo sito Web." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "Le aziende hanno bisogno di migliori piattaforme di assistenza clienti per risolvere in modo efficiente le loro domande. In questo tutorial, impareremo come creare un bot FAQ basato sull'intelligenza artificiale usando BotPress" 
url: /it/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## Le aziende hanno bisogno di migliori piattaforme di assistenza clienti per risolvere in modo efficiente le loro domande. In questo tutorial, impareremo come creare un bot FAQ basato sull'intelligenza artificiale usando BotPress

{{< figure align=center src="images/botpress-banner.png" alt="FAQ BOT per la tua attività utilizzando BotPress">}}

L'automazione delle FAQ consiste nel migliorare l'esperienza del tuo cliente online utilizzando i chatbot per rispondere a domande frequenti. Con i progressi nell'intelligenza artificiale e nell'apprendimento automatico, la domanda di chatbot conversazionali basati sull'intelligenza artificiale ha guadagnato molta popolarità e domanda. E questo è principalmente perché tutto il business vuole migliorare la propria esperienza del cliente anche quando l'azienda è offline. I chatbot conversazionali hanno reso possibile questo per le aziende per offrire ai propri clienti il ​​supporto ad alto tocco sempre disponibile che desiderano. Lo scopo di questo post sul blog è di aiutarti a creare un bot FAQ basato sull'intelligenza artificiale usando BotPress.
In questo articolo, apprenderemo il modulo NLU del BotPress e come funziona la comprensione / elaborazione del linguaggio naturale e può aiutare le aziende a raggiungere un alto livello di soddisfazione dei clienti. Iniziamo!
* **[Che cos'è l'elaborazione del linguaggio naturale][1]** 
* [ **Determina il caso d'uso** ][2]
* [ **Installa BotPress** ][3]
* [ **Crea un nuovo bot** ][4]
* [ **Allena il tuo bot Q&A** ][5]
* [ **conclusione** ][6]

## Cos'è l'elaborazione del linguaggio naturale {#nlu}

Natural Language Processing (NLP) è un ramo dell'intelligenza artificiale che aiuta i computer a comprendere, interpretare e manipolare il linguaggio umano. La PNL aiuta i computer a comunicare con gli umani nella propria lingua. E consente ai computer di leggere un testo, ascoltare il discorso, interpretarlo, misurare il sentimento.
Il compito di base della PNL include tokenizzazione e analisi, steli, etichettatura parte di vendita, rilevamento del linguaggio e identificazione delle relazioni semantiche.
NLU è il modulo di BotPress che elabora ogni messaggio in arrivo ed esegue la classificazione degli intenti, l'identificazione del linguaggio, l'estrazione dell'entità e la codifica delle slot.

## Determina il tuo caso d'uso {#case}

Se vuoi creare un chatbot AI FAQ, devi avere un caso d'uso per la tua attività. Per motivi di questo tutorial, vogliamo che i nostri utenti facciano qualsiasi domanda casuale relativa ai prezzi del nostro prodotto e ai tempi delle nostre attività.

## Installa BotPress {#install}

Per installare BotPress, vai sul loro [sito Web][7], fai clic su "Scarica gratuitamente" e seleziona la tua piattaforma. Per questo tutorial, sto usando la versione MAC. Una volta completato il download, è possibile estrarre il file zip ed eseguire il seguente comando sul tuo terminale andando nella cartella giusta.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="Inizio BotPress">}}


## Crea un nuovo bot {#create}

Ora, vogliamo effettivamente creare il nostro primo bot facendo clic su **Crea bot**e quindi selezionando **Nuovo bot** . Chiamerò il nostro bot il bot delle FAQ, e poi come modello di bot, selezionerò **vuoto bot** prima di fare clic su**Crea bot** .

{{< figure align=center src="images/create-bot.gif" alt="Crea-nuov-bot">}}

Ora modificheremo questo bot in BotPress Studio Editor.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="Modifica botpress in studio">}}

Ora, in studio, hai un certo numero di menu lungo la barra laterale sinistra. Ma per semplicità, ci atterremo alla sezione Domande e risposte.
Fai clic sull'icona "Domande e risposte" e aggiungi domande possibili / frequenti e le loro risposte appropriate.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Domande e risposte di Botpress">}}


## Allena il tuo bot FAQ {#train}

Una volta terminato ora dovrai addestrare il tuo bot FAQ facendo clic sul pulsante "Train Chatbot" nell'angolo in basso a destra della sezione Domande e risposte.

{{< figure align=center src="images/train-bot.gif" alt="Bot del treno Botpress">}}

Dopo che la formazione è stata eseguita, è possibile testare il bot delle FAQ utilizzando lo strumento emulatore integrato.

{{< figure align=center src="images/test-faq-bot.gif" alt="Metti alla prova il tuo bot FAQ">}}

Ora, che hai il tuo bot FAQ pronto, puoi distribuire questo bot sul tuo sito Web seguendo la [8] Guida di BotPress [8].

## Conclusione {#conclusion}

In questo post sul blog, abbiamo imparato e compreso l'elaborazione del linguaggio naturale. Ottiamo anche la nostra pratica con il processo di creazione di bot. Abbiamo formato un semplice bot FAQ che aiuta i tuoi clienti a conoscere i tuoi tempi aziendali e i tuoi piani di pagamento. Lo scopo del tutorial era aiutare i principianti a iniziare rapidamente con un bot FAQ a base di AI che utilizza BotPress.



[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
