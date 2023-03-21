---
title: "Cosa è promessa in JavaScript? | Tutorial JavaScript" 
seoTitle: "Cosa è promessa in JavaScript?" 
description: "Cosa è promessa in JavaScript? Una promessa è un blocco di codice che fornisce il risultato finale di un'operazione asincrona come in sospeso, completato o respinto." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "Cosa è promessa in JavaScript? Una promessa è un blocco di codice che fornisce il risultato finale di un'operazione asincrona come completata o respinta." 
url: /it/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## Stai lottando per imparare il concetto di promesse JavaScript? Questo articolo spiegherà come creare una promessa, perché utilizziamo la promessa in JavaScript e altro ancora.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


Panoramica ##
Speriamo che tu abbia una migliore comprensione dei [tipi di dati JavaScript][1]. Ora, questo è un altro post sul blog nella categoria [Programmazione][2]. In questo tutorial JavaScript, passeremo attraverso  **ciò che è promettente in JavaScript ** , e insieme a questo, vedremo anche quali sono le operazioni asincroni, l'uso delle promesse e come creare promesse in JavaScript. Innanzitutto, un processo/operazione asincrono è uno che esegue in modo indipendente rispetto ad altri processi e non crea alcun blocco. Pertanto, è necessario gestire operazioni asincrone, altrimenti potrebbero creare anomalie nel codice JavaScript. Quindi, esploreremo come possiamo gestire operazioni asincrone usando promesse.
Copriremo i seguenti punti in questo tutorial JavaScript:
  * **[Che cosa è promettente in JavaScript? Promesse spiegate][3]**
  * **[Perché usiamo la promessa in JavaScript?][4]**
  * **[Come funziona la promessa in JavaScript?][5]**
  * **[come creare una promessa?][6]**

## Cosa è promessa in JavaScript? Promesse spiegate   {#what-is-promise-in-javascript-promises-spieinate}
Una promessa è un oggetto che rappresenta un valore di un'operazione di asincroni tempo che viene risolto, rifiutato o è in sospeso. In parole più semplici, le promesse vengono utilizzate per restituire un valore che deve ancora essere prodotto da un blocco di codice asincrono. In effetti, ci sono tre  **stati di promessa **  e può essere in uno dei seguenti stati:
**in sospeso **: la promessa è in uno stato in sospeso, il che significa che è in fase iniziale ed è attualmente in esecuzione.
**Completato **: la promessa è risolta e il valore è stato restituito.
**respinto **: questo è lo stato causato da qualsiasi errore, il che significa che la promessa è stata respinta.
Una cosa importante da considerare qui è che il valore/stato restituito dalla promessa è immutabile e non può essere modificato, il che significa che le promesse assicurano che non vi siano comportamenti insoliti.

## Perché usiamo la promessa in JavaScript?   {#Why-Use-Promise-in-JavaScript}
Se non sei a conoscenza di  **callback inferno ** , lasciami condividere ciò che è. Innanzitutto, un callback è una funzione all'interno di un'altra funzione. Fondamentalmente, una funzione di callback viene passata come secondo argomento in una funzione che esegue al momento della ricezione di risultati. Quindi, in molti scenari, è necessario nidificare una funzione di callback e quando aumenta la nidificazione, diventa quasi impossibile da gestire. Quindi, chiamiamo questa lunga nidificazione delle funzioni di callback  **Calloback Hell ** .
Quindi, una promessa è un modo per evitare una situazione infernale di callback. L'uso delle promesse offre una migliore leggibilità e una migliore gestione degli errori. Inoltre, è possibile gestire meglio le operazioni asincrone recuperando il valore restituito e passando quel valore alla funzione successiva nella catena.

## Come funziona la promessa in JavaScript?   {#How-Promise-Works-in-javascript}
Ora, capiamo il meccanismo di lavoro dietro le promesse. Si prega di dare un'occhiata al diagramma menzionato di seguito.

{{< figure align=center src="images/what-is-a-promise.png" alt="Come funziona la promessa in JavaScript??" >}}

Secondo il flusso di lavoro sopra menzionato, i dettagli dell'implementazione sono abbastanza chiari. Promise inizia l'esecuzione sulla sua creazione ed è nello stato in sospeso in attesa della risposta. Ci sono due opzioni o ci saranno dati o ci sarà un errore alla fine dell'elaborazione. Dopo aver ricevuto i dati, va nel blocco. Quindi () e va nel blocco .CATCH () in caso di errore.

## come creare una promessa?   {#How-to-Create-a-Promise}
Finora abbiamo coperto il concetto di base di promessa. Ora, esploreremo come possiamo creare una promessa in JavaScript. Usiamo il seguente costruttore di promesse per creare una promessa.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise Constructor prende una funzione come argomento che prende ancora due argomenti, si risolve e l'altro rifiuta. Invoca il metodo Resolve () in caso di successo e entra nel blocco di rifiuto () in caso di errore o rifiuto.
Andiamo un po 'in profondità ed esplorano un po' più la creazione della promessa.
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
Nello snippet di codice sopra, è possibile effettuare ulteriormente le chiamate API nel blocco Resolve ().
Ora, vediamo il modello di esecuzione di una promessa JavaScript.
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
Di seguito è riportato l'output dello snippet di codice sopra:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Quindi, il codice all'interno del corpo Promise funziona in modo sincrono in modo che l '"esecuzione sincrona" sia stampata. Successivamente, quindi () Block Works in modo asincrono e attende fino a quando il risultato non è stato generato, ma l'esecuzione del programma non si ferma ecco perché "Hello Word" viene stampata e l'esecuzione della promessa è stata differita. Successivamente, il blocco .Then () esegue e restituisce i valori che ha promesso. Questa è la storia delle promesse di Javascript. Ancora una volta, poiché JavaScript è a filo singolo, le promesse vengono utilizzate per gestire le operazioni asincrone in modo non bloccante.

## Conclusione
Questa è la fine di questo  **tutorial JavaScript ** . Spero che tu abbia una buona idea delle promesse di JavaScript. Abbiamo coperto  **ciò che è promettente in JavaScript ** , perché usiamo la promessa in JavaScript,  **Come la promessa funziona in JavaScript **  e come creare una promessa. Inoltre, tratteremo di più questo argomento per quanto riguarda il suo utilizzo e le disposizioni avanzate. Pertanto, passa attraverso questo articolo nel caso in cui ti stia preparando per una sessione di intervista.

## Connettiti con noi
Infine, [containerize.com][7] offre tutorial JavaScript in corso su vari argomenti entusiasmanti. Puoi rimanere nel giro seguendoci sulle nostre piattaforme di social media, tra cui [Facebook][8], [LinkedIn][9] e [Twitter][10].

## Fai una domanda
Puoi farci sapere delle tue domande o domande sul nostro [forum][11].

## FAQ
**Cosa sono promesse in JavaScript con esempio? **
Segui questo [link][3] per sapere cosa sono promesse in JavaScript.

## Guarda anche
  * [Quali sono i tipi di dati JavaScript? | Una guida per principianti][1]
  * [Architettura a base di container e contenitori di Kubernetes][12]
  * [Che cos'è il calcolo senza server? | Architettura senza server][13]
  * [Cos'è la multitenancy? | Perché un approccio multi-tenant?][14]
  * [Quali sono i tipi di dati JavaScript? | Una guida per principianti][15]

  
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
