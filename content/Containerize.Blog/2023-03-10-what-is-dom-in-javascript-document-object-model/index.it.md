---
title: "Cos'è DOM in JavaScript? | Document Modello a oggetti" 
seoTitle: "Cos'è DOM in JavaScript?" 
description: "Cos'è DOM in JavaScript? Questa guida dimostrerà il modello a oggetti di documento, le proprietà di DOM, i livelli di DOM e come accedere agli elementi DOM." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "Cos'è DOM in JavaScript? Questa guida dimostrerà il modello a oggetti di documento, le proprietà di DOM, i livelli di DOM e come accedere agli elementi DOM." 
url: /it/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## La rappresentazione di un documento HTML all'interno di un browser Web è trattata come un albero DOM HTML. È una serie di oggetti e definisce la struttura di una pagina web.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="Cos'è DOM in JavaScript??">}}


Panoramica ##
Benvenuti in un altro entusiasmante post sul blog nella serie di [programmazione JavaScript][1]. In questo articolo, toccheremo un concetto molto semplice ma essenziale di sviluppo web. Sì, copriremo il modello di oggetti documenti in JavaScript. In passato, abbiamo pubblicato tutorial JavaScript che sono obbligatori per iniziare lo sviluppo usando il linguaggio JavaScript. Pertanto, ti suggeriamo di leggere a fondo questo post sul blog in modo da non perdere nulla legato a questo concetto importante. Iniziamo questa guida e scopriamo  **cosa è DOM in JavaScript** , DOM Properties e come è possibile interagire con essa a livello di programmazione.
Tratteremo i seguenti argomenti in questa guida JavaScript:
  * **[Cos'è il modello di oggetti documentari (DOM)?][2]**
  * **[livelli di dom][3]**
  * **[Cosa sono le proprietà Dom e come accedervi?][4]**

## Che cos'è il modello di oggetti documenti (DOM)?   {#What-is-document-object-model}
Dom sta per?  **Document Object Model (DOM)**  è la rappresentazione di una pagina Web all'interno di un browser Web. Semplicemente, la rappresentazione gerarchica degli elementi di un documento HTML in un browser è nota come modello di oggetti documenti. È formato a forma di albero che è effettivamente generato dal browser Web. È costituito da vari nodi che sono collegati tra loro formando una forma di albero. Inoltre, gli elementi DOM hanno attributi ed eventi ad essi collegati.
In effetti, DOM è un'interfaccia di programmazione che formula la struttura logica di una pagina Web e detta il modo per accedere agli elementi di pagina. Fondamentalmente, JavaScript non riconosce tag HTML come titolo, H1 e ecc. Pertanto, una volta che un documento HTML viene caricato in un browser Web, DOM viene creato che quindi consente a JavaScript di comprendere gli elementi del documento.

## dom livelli   {#dom-levels}
Questa sezione dimostrerà i vari livelli di DOM. Innanzitutto, c'è un oggetto di finestra in un browser che è sempre in cima, e poi c'è un nodo di documento. Diamo un'occhiata all'immagine qui sotto:

{{< figure align=center src="images/DOM.png" alt="Livelli DOM">}}

Bene, puoi vedere gli elementi DOM nell'immagine sopra. La finestra e il documento sono gli oggetti del browser di livello superiore e quindi abbiamo l'elemento HTML come radice. Andando avanti, abbiamo i nodi della testa e del corpo, il nodo del titolo appartiene al nodo della testa e il nodo del corpo contiene tutti i nodi resi e visibili nel browser Web. Inoltre, gli elementi del corpo contengono attributi che possiamo vedere nell'immagine come il tag di ancoraggio contenente l'attributo "href". Allo stesso modo, altri nodi DOM contengono vari attributi come IMG, Meta e altro.

## Cosa sono le proprietà DOM e come accedervi?   {#What-are-dom-properties-and-how-to-access-them}
Finora, abbiamo escogitato una risposta a ciò che è DOM in JavaScript e DOM, e abbiamo anche attraversato i nodi DOM. In questa sezione, passeremo attraverso le proprietà DOM e vedremo come possiamo interagire con loro. Ogni elemento DOM ha un valore collegato ad esso come il tag "P" ha proprietà di testo, il tag IMG ha l'immagine e così via. I metodi JavaScript vengono utilizzati per accedere ai valori dei nodi. Inoltre, è possibile aggiungere/rimuovere gli ascoltatori di eventi agli elementi DOM.
Puoi trovare le seguenti  **Dom Properties** :
**INNERHTML**: questa proprietà viene utilizzata per impostare o recuperare il contenuto HTML di un nodo DOM.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**InnerText**: utilizzare questa proprietà DOM per accedere o impostare il contenuto testuale di un elemento HTML.
```
let textualContent = document.getElementById("customID").innerText;
```
**parentelement**: è possibile utilizzare questa proprietà per accedere al nodo genitore dell'elemento.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**Stile**: aggiorna l'attributo di stile di un elemento.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**Titolo**: usa questa proprietà per aggiornare l'elemento del titolo di DOM.
```
document.getElementById("customID").title= "this is a web page";
```
 Di seguito sono riportati alcuni dei metodi che possiamo usare per interagire con JavaScript DOM:
**ADDEventListener ()**: questo metodo DOM viene utilizzato per allegare un gestore di eventi a un elemento.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: questo metodo DOM viene utilizzato per allegare un gestore di eventi a un elemento.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: metodo per ottenere un elemento specifico con il dato "ID".
```
let element = document.getElementById("myID");
```
**QuerySelector ()**: usa questo metodo per ottenere il primo elemento figlio che viene abbinato a un selettore CSS.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString ()**: è possibile utilizzare questo metodo per convertire un elemento in una stringa.
Allo stesso modo, ci sono molti altri metodi e proprietà che puoi esplorare.

## Conclusione
Stiamo terminando questo tutorial Javasxcript qui con la speranza che tu abbia una buona comprensione di **What Is Dom in JavaScript **. Abbiamo anche attraversato ** DOM, livelli DOM, albero DOM HTML e proprietà DOM** . Questo post sul blog è molto essenziale per i neofiti che stanno cercando di avere una forte presa sui concetti di Javascrit. Inoltre, ci sono altri articoli pertinenti che puoi trovare nella sezione "vedi anche".

## Connettiti con noi
Infine, [containerize.com][5] offre tutorial JavaScript in corso su vari argomenti entusiasmanti. Puoi rimanere nel giro seguendoci sulle nostre piattaforme di social media, tra cui [Facebook][6], [LinkedIn][7] e [Twitter][8].

## Fai una domanda
Puoi farci sapere delle tue domande o domande sul nostro [forum][9].

## FAQ
**Cosa viene usato Dom in JavaScript?**
Puoi visitare questo [link][2] per ottenere una risposta dettagliata a questa domanda.

## Guarda anche
  * [Che cosa è promessa in JavaScript? | Tutorial JavaScript][10]
  * [Che cos'è il calcolo senza server? | Architettura senza server][11]
  * [Cos'è la multitenancy? | Perché un approccio multi-tenant?][12]
  * [Cos'è AI generativo | Intelligenza artificiale generativa][13]
  * [Che cos'è Async atteso in JavaScript? | Una guida JavaScript][14]
  * [Come usare CHATGPT in VSCode | VScode Extension Code GPT][15]
  * [Cos'è Openai Chatbot GPT-3 | CHATGPT una rivoluzione AI][16]
  * [Un'introduzione all'intelligenza artificiale | Cos'è AI?][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
[5]: https://www.containerize.com/
[6]: https://web.facebook.com/containerize
[7]: https://www.linkedin.com/company/containerize/
[8]: https://twitter.com/containerize_co
[9]: https://forum.containerize.com/
[10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
