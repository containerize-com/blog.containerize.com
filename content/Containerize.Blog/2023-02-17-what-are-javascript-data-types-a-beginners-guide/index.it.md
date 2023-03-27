---
title: "Quali sono i tipi di dati JavaScript? | Una guida per principianti" 
seoTitle: "Quali sono i tipi di dati JavaScript? | Una guida per principianti" 
description: "Quali sono i tipi di dati JavaScript? Segui questa guida per principianti per apprendere 7 tipi di dati utilizzati nel numero JavaScript, stringa, booleano, null, indefinito e altro ancora." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "La popolarità di JavaScript è inarrestabile grazie alla sua adattabilità. Segui questa guida per principianti JavaScript e inizia a coltivare la tua esperienza in JS Stack." 
url: /it/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## La popolarità di JavaScript è inarrestabile grazie alla sua adattabilità. Segui questa guida per principianti JavaScript e inizia a coltivare la tua esperienza in JS Stack.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |Quali sono i tipi di dati JavaScript? | Una guida per principianti">}}


Panoramica ##
Non importa se sei un livello mediocre o uno sviluppatore esperto, otterrai le soluzioni ai tuoi problemi durante i lavori di sviluppo. [Containerize.com][1] ha iniziato a scrivere post sul blog di tutorial nella categoria di programmazione e stiamo iniziando con una Guida per principianti  **JavaScript** . Dal momento che stiamo iniziando, quindi questo articolo riguarda i tipi di dati JavaScript. Esploriamo  **Quali sono i tipi di dati JavaScript**  e vediamo esempi di come puoi usarli nel codice sorgente in modo efficiente. Pertanto, attraversa accuratamente questa guida per principianti in modo da poter avere una buona comprensione dei tipi di dati **JavaScript**  .
Stiamo coprendo il seguente punto:
  * [Che cos'è un tipo di dati?][2]
  * [Quali sono i tipi di dati JavaScript?][3]

## Tipi di dati spiegati | Cos'è un tipo di dati? {#What-is-a-data-type}

Un tipo di dati consiste nel dire al compilatore come interpretare o compilare i dati. L'uso dei tipi di dati è fondamentale e deve essere usato saggiamente. In parole semplici, si tratta del formato dei dati come numero, stringa, booleano e altro ancora. Tuttavia, esistono due categorie di tipi di dati tipi di dati primitivi e tipi di dati non prigionieri. Esistono otto tipi di dati primitivi che passeremo nella prossima sezione.

## Quali sono i tipi di dati JavaScript? {#What-are-JavaScript-Data-Types}

In effetti, JavaScript è un linguaggio tipizzato in modo libera, il che significa che non è necessario definire esplicitamente il tipo variabile. Puoi assegnare qualsiasi valore a una variabile e quella variabile memorizzerà quel valore come stringa, bigint, booleano o più.

{{< figure align=center src="images/web-development.png" alt="Guida per principianti JavaScript">}}


#### tipi di dati primitivi
I tipi di dati primitivi sono quelli che sono immutabili e non possono essere modificati dopo la creazione e l'inizializzazione. Tuttavia, è possibile riassegnare un nuovo valore ma non è possibile mutare il valore esistente.
Per esempio:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
Nell'esempio sopra, la stringa è un tipo di dati primitivi e il vecchio valore viene sostituito dal nuovo valore, ma la modifica del valore esistente non viene riflessa. Quindi, possiamo vedere che è ancora "il mio nome è cambiato" non "il mio nome è cambiato";

#### tipi di dati non prime
I tipi di dati non primari sono mutabili, in parole semplici opposte ai tipi di dati primitivi.
Per esempio:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Inoltre, i tipi di dati primitivi vengono confrontati per valore e i tipi di dati non prigionieri vengono sempre confrontati per riferimento.
Per esempio:
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
Ora, passiamo attraverso i tipi di dati uno per uno. Esistono 6 tipi di dati primitivi e 1 tipo di dati non prigioni.
 **I tipi di dati primitivi includono:**  
*  **String**  : questo tipo di dati rappresenta i dati testuali che consistono in una sequenza di caratteri circondati da citazioni.
*  **Numero**  : rappresenta dati decimali/non decimale, in particolare interi o galleggianti.
*  **booleano**  : rappresentazione di valori logici vere o falsa.
*  **Simbolo**  : il simbolo viene utilizzato per contenere valori unici.
*  **Undefined**  : una variabile senza alcun valore o una variabile non iniziale.
*  **null**  : l'assenza di qualsiasi valore è considerata null.
 **Il tipo di dati non prigioni include:**  
 **Oggetto** : viene utilizzato per archiviare la raccolta di dati costituiti da coppie di valore chiave.

## Conclusione
Questa è la fine di questa  **Guida per principianti JavaScript** . Abbiamo attraversato  **Quali sono i tipi di dati JavaScript**  ? Inoltre, abbiamo esplorato ciò che è un tipo di dati in breve. Dovresti avere una migliore comprensione dei tipi di dati non prigioni e **primitivi**  in JavaScript. Questo post sul blog ti aiuterà davvero se stai cercando di preparare un colloquio di lavoro.
Infine, [containerize.com][1] scrive continuamente post sul blog su ulteriori prodotti e argomenti open source. Inoltre, puoi seguirci sui nostri account di social media [Facebook][4], [LinkedIn][5] e [Twitter][6].

## Fai una domanda
Puoi farci sapere delle tue domande o domande sul nostro [forum][7].

## FAQ
 **Quali sono gli 8 tipi di dati JavaScript?** 
Visita questo [link][3] per conoscere gli 8 tipi di dati JavaScript.

## Guarda anche
  * [Framework JavaScript popolari gratuiti e open source][8]
  * [Automatizza le operazioni aziendali utilizzando software gratuito e open source][9]
  * [Top 10 Open Source Technologies da imparare nel 2022][10]



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
