---
title: "Impara i concetti di base JavaScript per aiutare la tua carriera" 
seoTitle: "Concetti di base JavaScript" 
description: "Segui questo tutorial JavaScript per imparare i concetti di base JavaScript. Scopi, sollevamento e chiusure sono concetti molto semplici ma obbligatori in JavaScript." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "Segui questo tutorial JavaScript per imparare i concetti di base JavaScript. Scopi, sollevamento e chiusure sono concetti molto semplici ma obbligatori in JavaScript." 
url: /it/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## apprendiamo alcuni fondamentali JavaScript di base che uno sviluppatore deve conoscere. Questo linguaggio di programmazione interpretato è ampiamente utilizzato per sviluppare app a livello aziendale.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="Concetti di base JavaScript">}}


Panoramica ##
JavaScript è un linguaggio di scripting utilizzato per sviluppare applicazioni dinamiche basate sul Web. Utilizziamo HTML e CSS per creare siti Web statici mentre JavaScript viene utilizzato per aggiungere interattività. Nel nostro precedente post sul blog, abbiamo coperto [Modello di oggetti documentali][1] e ora tratteremo alcuni altri importanti concetti di base JavaScript**. Gli sviluppatori Web tendono a optare per questo linguaggio di scripting grazie alle sue ricche caratteristiche e framework. Inoltre, puoi fare sviluppo sul front -end e sul back -end imparando JavaScript. Tuttavia, non è possibile sviluppare solo app Web ma anche app mobili. Questo tutorial JavaScript ti aiuterà se ti stai preparando per una sessione di intervista. Tuttavia, questa guida vale la pena leggere per aggiungere altro al secchio di conoscenza.
Tratteremo i seguenti punti in questo articolo:
*  **[cosa sta sollevando in javascript][2]**  
*  **[Scopes in JavaScript][3]**  
*  **[chiusure JavaScript][4]**  

## Cosa sta sollevando in JavaScript {#What-is-hoisting-in-JavaScript}

Il fenomeno dell'assunzione di funzionalità o dichiarazione variabile in cima all'ambito attuale è noto come sollevamento. Questo è un concetto molto critico e la maggior parte degli sviluppatori JavaScript non ne è consapevole. Tuttavia, una cosa importante da notare qui è che solo le dichiarazioni di funzione/variabile vengono portate in alto, non l'inizializzazione funzione/variabile.
Facciamo un esempio e vediamo lo snippet di codice di seguito;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
Nell'esempio di codice sopra, abbiamo effettuato la chiamata della funzione prima della dichiarazione della funzione, ma anche se il codice esegue correttamente e ciò è dovuto al sollevamento JavaScript. Fondamentalmente, durante il tempo di compilazione, l'interprete JavaScript scansiona il codice, raccoglie tutte le funzioni/variabili e metterle in memoria chiamata ambiente lessicale. La stessa cosa accade con le variabili.
```
name = "mustafa";
console.log(name);
var name;

```
Allo stesso modo, l'inizializzazione della variabile del nome è stata effettuata prima della sua dichiarazione e il codice funziona senza alcun errore. Ancora una volta, durante il tempo di compilazione, l'interprete JS ha esaminato l'ambiente lessicale per trovare la dichiarazione variabile e quindi eseguito il codice.
Quindi, se dichiari variabili con parole chiave Let e ​​const, JavaScript li solleverà in modo leggermente diverso.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
Si è verificato l'errore nello snippet di codice sopra. Il motivo è che l'inizializzazione non è stata eseguita mentre sollevava questa variabile. Per farla breve, tutte le dichiarazioni sono inizializzate con "indefinite" mentre le variabili dichiarate con "let" o "const" non sono inizializzate in zoo.

## Scopi in JavaScript {#Scopes-in-JavaScript}

L'ambito è uno dei concetti di base JavaScript che uno sviluppatore deve conoscere. Tuttavia, lavorare con gli ambiti JavaScript non è semplice ed è un po 'diverso. Pertanto, ci sono tre tipi di ambiti in JavaScript e questi sono i seguenti:
 **a livello di blocco** : le variabili dichiarate con "let" o "const" contiene l'ambito a livello di blocco.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
La variabile "A" non è accessibile al di fuori delle parentesi graffe {} perché ha un ambito a livello di blocco.
 **Level di funzione** : le variabili dichiarate all'interno della funzione JavaScript hanno l'ambito locale.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Una cosa importante da notare qui è che le variabili dichiarate con "let" "const" e "var" hanno l'ambito della funzione all'interno del corpo della funzione.
 **A livello globale** : le variabili dichiarate al di fuori della funzione diventano variabili globali. Non importa se li hai dichiarati usando parole chiave "let", "const" o "var". Inoltre, una variabile diventa una variabile globale se dichiarata senza utilizzare alcuna parola chiave come mostrato nello snippet di codice di seguito:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## Chiusure JavaScript {#JavaScript-Closures}

Questo è un altro concetto importante che rafforza la tua conoscenza JavaScript sugli ambiti e l'incapsulamento dei dati. Nella forma più semplice, una funzione all'interno di una funzione è nota come chiusura. È possibile chiamare una chiusura della funzione interna. Questa funzione interiore ha tre tipi di portata:
 * Ha il suo ambito a livello di blocco.
 * Ha accesso alle variabili dei genitori.
 * Anche le variabili nell'ambito globale sono accessibili all'interno della chiusura.
 Vediamo come creare una chiusura:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
La variabile first_name è accessibile all'interno della funzione denominata Innerfunc ma la funzione principale non può avere accesso alla variabile Last_Name. Questo comportamento consente ai programmatori di creare variabili private nella catena dell'ambito.

## Conclusione
Stiamo terminando questa guida JavaScript qui e speriamo che tu abbia una migliore comprensione dei concetti di base  **JavaScript** . Inoltre, abbiamo anche attraversato **chiusure JavaScript, ampli in JavaScript**  e sollevatura. Ci sono molti altri concetti importanti che sono obbligatori per i principianti. Quindi, questo articolo ti aiuterà se si prospera per migliorare o aggiornare i tuoi concetti JavaScript. Inoltre, puoi passare attraverso i post del blog menzionati nella sezione "vedi anche".

## Connettiti con noi
Infine, [containerize.com][5] offre tutorial JavaScript in corso su vari argomenti entusiasmanti. Puoi rimanere nel giro seguendoci sulle nostre piattaforme di social media, tra cui [Facebook][6], [LinkedIn][7] e [Twitter][8].

## Fai una domanda
Puoi farci sapere delle tue domande o domande sul nostro [forum][9].

## FAQ
 **Quali sono i concetti importanti da imparare in JavaScript?** 
Segui questa [Guida][2] di JavaScript per conoscere i concetti di base JavaScript.

## Guarda anche
  * [Che cos'è Dom in JavaScript? | Document Object Model][1]
  * [Che cosa è promessa in JavaScript? | Tutorial JavaScript][10]
  * [Che cos'è il calcolo senza server? | Architettura senza server][11]
  * [Cos'è la multitenancy? | Perché un approccio multi-tenant?][12]
  * [Cos'è AI generativo | Intelligenza artificiale generativa][13]
  * [Che cos'è Async atteso in JavaScript? | Una guida JavaScript][14]
  * [Come usare CHATGPT in VSCode | VScode Extension Code GPT][15]
  * [Cos'è Openai Chatbot GPT-3 | CHATGPT una rivoluzione AI][16]
  * [Un'introduzione all'intelligenza artificiale | Cos'è AI?][17]
  * [Che cos'è Async atteso in JavaScript? | Una guida JavaScript][18]



 [1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
 [2]: #What-is-hoisting-in-JavaScript
 [3]: #Scopes-in-JavaScript
 [4]: #JavaScript-Closures
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
 [18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
