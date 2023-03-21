---
title: "Cos'è Async Wait in JavaScript? | Una guida JavaScript" 
seoTitle: "Cos'è Async Wait in JavaScript?" 
description: "Cos'è Async Wait in JavaScript? Le parole chiave Async & Awit sono usate per gestire operazioni asincrone meglio delle promesse tradizionali in JavaScript." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "Cos'è Async Wait in JavaScript? Le parole chiave Async & Awit sono usate per gestire operazioni asincrone meglio delle promesse tradizionali in JavaScript." 
url: /it/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017 ha introdotto JavaScript Async/Wait che è un involucro attorno alle promesse. L'asincronizzazione/Aspetta viene utilizzato per consumare API basate sulla promessa nel modo moderno e più semplice.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="Cos'è Async Wait in JavaScript??">}}


Panoramica ##
Abbiamo coperto [JavaScript Promises][1] nel nostro precedente post sul blog e devi visitare se vuoi ottenere una chiara comprensione del concetto dietro le promesse di JavaScript. In questa serie di [JavaScript Tutorials][2], siamo qui con un'altra guida JavaScript che dimostrerà le moderne caratteristiche dell'asincronizzazione JavaScript/Abvet. Questo post sul blog è per coloro che hanno una conoscenza preliminare delle promesse di JavaScript. Inoltre, cercheremo di coprire **ciò che è asincrone/attesa in JavaScript  **e quando dobbiamo usare Async/Abved. Inoltre, copriremo anche gli errori di gestione con asincroni/attesa. Quindi, dai una lettura approfondita a questo**   JavaScript Async/Aspetta Tutorial** per contrassegnare questo concetto controllato.
Passeremo attraverso le seguenti sezioni in questo asincrone JavaScript attende il tutorial:
  * **[Cos'è ASYNC/ATSED in JavaScript | Async Aspetta sintassi][3]**
  * **[quando usare asincroni/attesa?][4]**
  * **[Gestione degli errori con Async/Wait][5]**

## Cosa è asincrone/attesa in javascript | Async Attende la sintassi   {#what-is-asyncawait-in-javascript-async-wait-syntex}}
ECMAScript 2017 ha rilasciato nuove funzionalità di JavaScript e Async/Wait è una delle più utilizzate tra queste caratteristiche. L'asincronizzazione/attesa è costruito sopra le promesse ed è in realtà un modo moderno per gestire le promesse JavaScript.
Vediamo come usare le parole chiave asincriche/attenti nel codice JavaScript:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
Bene, la parola chiave Async all'inizio della funzione implica che questa funzione restituirà una promessa. Quindi, attendere la parola chiave viene sempre utilizzata all'interno del corpo della funzione asincrona per mettere in pausa l'esecuzione della funzione fino a quando la promessa non si risolve. La cosa importante da notare qui è che non puoi usare la parola chiave di attesa all'interno del corpo di una funzione regolare. Tuttavia, è possibile utilizzare solo con funzioni asincrone dichiarate con la parola chiave asincrima.

## Quando usare l'asincronizzazione/attesa?   {#Quando-to-usy-asyncawait}
Finora, hai la risposta a  **che cosa è Async in attesa in JavaScript** . Dal momento che questo è solo un involucro attorno alle tradizionali promesse JavaScript, quindi è meglio usare questo nuovo modo per creare e gestire le promesse in modo più pulito e leggibile. Inoltre, puoi sbarazzarti di molteplici promesse. QUELLE () Chiamate utilizzando asincroni/attesa che alla fine rende il codice sorgente più gestibile e mantenibile. La parola chiave di attesa incapsula l'istruzione .then () in una singola riga.

## Gestione degli errori con Async/Awet   {#Error-Handing-With-Asyncawait}
La gestione degli errori è un'attività critica quando si tratta di sviluppo del software a livello aziendale. Esistono diversi modi per catturare errori nell'approccio Async/Aspetta.

{{< figure align=center src="images/async-await.png" alt="Prova a catturare Async Aspetta JavaScript">}}

**Prova a catturare Async Attesa JavaScript**: niente di nuovo con questo approccio di gestione degli errori. Tuttavia, è possibile utilizzare un blocco Try/Catch all'interno di una funzione Async come mostrato nello snippet di codice di seguito:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Usando il blocco Try/Catch, è possibile catturare le eccezioni all'interno del corpo di una funzione asincrona.
Considerando che esiste un altro approccio alla gestione degli errori in cui è possibile aggiungere il blocco .CATCH () alla fine della chiamata di funzione. Poiché l'asincronizzazione/attesa restituisce una promessa, quindi catturi gli errori nel blocco .CATCH ().
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Conclusione
Stiamo terminando questo **JavaScript Async Aspetta il tutorial **. Spero che tu abbia una migliore comprensione di ** ciò che è Async attesa in JavaScript** . Inoltre, abbiamo attraversato JavaScript Async attende la sintassi che rende il codice sorgente meno complesso. Questa funzionalità JavaScript viene ampiamente utilizzata per il suo ricco utilizzo e le prestazioni. Nei prossimi giorni, scriveremo ulteriormente su funzionalità e concetti JavaScript in modo da poter ottenere un forte comando sui concetti di JS. Inoltre, ci sono altri articoli interessanti menzionati nella sezione "vedi anche".

## Connettiti con noi
Infine, [containerize.com][6] offre tutorial JavaScript in corso su vari argomenti entusiasmanti. Puoi rimanere aggiornato seguendoci sulle nostre piattaforme di social media, tra cui [Facebook][7], [LinkedIn][8] e [Twitter][9].

## Fai una domanda
Puoi farci conoscere le tue domande o domande sul nostro [forum][10].

## FAQ
**Che cos'è l'asincrone in attesa in javascript con esempio?**
Puoi visitare questo [link][3] per comprendere il concetto di asincrone atteso.
**Che cos'è Async Wait vs Promise?**
 * Async/Wait rende il codice sorgente più chiaro e leggibile rispetto alle promesse in cui il concatenamento della promessa può rendere il codice sorgente un disastro.
 * La gestione degli errori è abbastanza simile in entrambi gli approcci.
 * Il debug è meno difficile nell'asincronizzazione.
 * Promette mantengono gli stati come in sospeso, risolti o respinti. Considerando che l'asincronizzazione/attesa viene risolto o rifiutato.

## Guarda anche
  * [Che cosa è promessa in JavaScript? | Tutorial JavaScript][1]
  * [Che cos'è il calcolo senza server? | Architettura senza server][11]
  * [Cos'è la multitenancy? | Perché un approccio multi-tenant?][12]
  * [Cos'è AI generativo | Intelligenza artificiale generativa][13]
  * [Come integrare CHATGPT con fogli Google][14]
  * [Come usare CHATGPT in VSCode | VScode Extension Code GPT][15]
  * [Cos'è Openai Chatbot GPT-3 | CHATGPT una rivoluzione AI][16]
  * [Un'introduzione all'intelligenza artificiale | Cos'è AI?][17]

  
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
