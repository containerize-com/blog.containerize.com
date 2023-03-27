---
title: "Integriamo CHATGPT nell'app JavaScript | Tutorial Chatgpt" 
seoTitle: "Integrare chatgpt nell'app javascript" 
description: "Basta eseguire \"NPM I CHATGPT\" e iniziare a utilizzare OpenAI Chatbot nella tua applicazione Node.js. Segui questa guida per imparare a integrare CHATGPT nell'app JavaScript." 
date: 2023-03-15T00:00:00+00:00
author: Muhammad Mustafa
summary: "Basta eseguire \"NPM I CHATGPT\ e iniziare a utilizzare OpenAI Chatbot nella tua applicazione Node.js. Segui questa guida per imparare a integrare CHATGPT nell'app JavaScript." 
url: /it/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial/
tags: ["Integrate ChatGPT in JavaScript App", "ChatGPT tutorial", "ChatGPT JavaScript", "ChatGPT integration", "OpenAI Chatbot"]
categories: [ 'Artificial intelligence']
---

## Semplifica il tuo software aziendale integrando un chatbot virale basato su GPT-3. Questo tutorial CHATGPT mostra le fasi di integrazione e lo snippet del codice.

{{< figure align=center src="images/lets-integrate-chatgpt-in-javascript-app-chatgpt-tutorial.png" alt="Integrare chatgpt nell'app javascript">}}


Panoramica ##
Ciao lettori! Grazie mille per la tua schiacciante risposta ai post del blog che abbiamo pubblicato sulle integrazioni [CHATGPT][1]. Siamo qui con un altro utile tutorial  **Chatgpt** seguendo il tuo interesse. Inoltre, saremo in giro per pubblicare articoli utili ai tuoi accademici e alla tua carriera. Tuttavia, abbiamo iniziato una [serie][20] di tutorial JavaScript, quindi è il momento migliore per scrivere una guida che dimostra come **integrare CHATGPT in JavaScript AQPP**  programmaticamente. Inoltre, scriveremo lo snippet di codice per rendere questa funzionalità di chatbot virale**basata su GPT-3. A tale scopo, consentiremo la funzionalità di CHATGPT in un'app Node.js. Pertanto, un livello base di conoscenza precedente di Node.js è un vantaggio mentre attraversa questa guida.
Le seguenti sezioni saranno trattate in questo tutorial su chatgpt:
*  **[Prerequisiti - Chatgpt JavaScript Wrapper][2]**  
*  **[CHATGPT Integrazione con l'applicazione Node.js][3]**  

## Prerequisiti - wrapper javascript chatgpt {#Pre-requisites---ChatGPT-JavaScript-wrapper-}

Questa sezione dimostra i requisiti necessari per consentire l'integrazione di CHATGPT in un'applicazione basata su Node.JS. I requisiti sono semplici e facili da installare sul sistema.
Di seguito sono riportati i pre-richiedenti per praticare questa integrazione JavaScript di Chatgpt:

 * [Nodejs4](>= 18)

 * [NPM5](>=9)
 
Una volta installati i prerequisiti di cui sopra, il passo successivo è ottenere una chiave API OpenAI. Questa chiave viene utilizzata per effettuare richieste API al CHATGPT. Pertanto, visitare questo [link][6] per imparare a ottenere la chiave API Openi nel caso in cui non si conosca la procedura.
Tieni la chiave API in un luogo sicuro e questo è tutto per la fase dei requisiti.

## Integrazione CHATGPT con l'applicazione Node.js {#ChatGPT-integration-with-Node.js-application}

Ora, siamo tutti impostati su  **integriamo a livello di chatgpt nell'app JavaScript.**  Innanzitutto, apri il terminale ed esegui il seguente comando:
```
npm i chatgpt
```
Al momento della corretta esecuzione, seguire i seguenti passaggi e lo snippet del codice per effettuare una richiesta al modello GPT-3 per interagire con CHATGPT a livello di programmazione:
 * Importa il chatgptapi.
 * Inizializza il costruttore con la chiave API OpenAI.
 * Invoca il metodo SendMessage per inviare un messaggio al modello GPT-3 e ricevere la risposta.
 * Visualizza la risposta.
{{< gist mustafabutt-dev 772dc075f44561ff923e9b0fb761ed38 >}}
Copia e incolla lo snippet di codice sopra nel file del server principale ed esegui il comando seguente nel tuo terminale:
```
node index.js
```
 **Nota** : aggiungi ("tipo": "modulo",) nel file pacchetto.json nel caso in cui si ottiene un errore "non può utilizzare l'istruzione di importazione al di fuori di un modulo".
Puoi vedere l'output nell'immagine qui sotto:

{{< figure align=center src="images/chatgpt_tutorial.png" alt="Tutorial Chatgpt">}}

Inoltre, questo wrapper JavaScript Chatgpt consente di tracciare le conversazioni e inviare messaggi di follow-up. L'unica cosa che devi fare è passare "parentMessageId" nel corpo di richiesta come mostrato nello snippet di codice di seguito:
```
response = await api.sendMessage('How are you?', {
  parentMessageId: res.id
})
console.log(res.text);
```
Allo stesso modo, puoi esplorare molti altri metodi offerti [qui][7]. Questa integrazione di Openai Chatbot può dare un vantaggio competitivo alla tua applicazione a livello aziendale.

## Conclusione
Questo punto ci porta alla fine di questo tutorial  **Chatgpt** . Speriamo che tu abbia imparato a  **integrare CHATGPT nell'app JavaScript**  a livello di programmazione. Inoltre, hai lo snippet del codice di lavoro che puoi testare sulla macchina locale. Questo post sul blog è una risorsa se si prospera per imparare l'integrazione **CHATGPT**  nella tua applicazione Node.js.

## Connettiti con noi
Infine, [containerize.com][8] scrive continuamente post sul blog su diversi argomenti. Inoltre, puoi seguirci sui nostri account di social media [Facebook][9], [LinkedIn][10] e [Twitter][11].

## Fai una domanda
Puoi farci sapere delle tue domande o domande sul nostro [forum][12].

## FAQ
 **Come integrare CHATGPT con JavaScript?** 
Segui questo chatgpt [tutorial][2] per imparare i passaggi e lo snippet di codice per integrare a livello di programmazione CHATGPT nell'app JavaScript.

## Guarda anche
  * [Un'introduzione all'intelligenza artificiale | Cos'è AI?][13]
  * [Come integrare CHATGPT con fogli Google][14]
  * [Come usare CHATGPT in VSCode | VScode Extension Code GPT][15]
  * [Cos'è Openai Chatbot GPT-3 | CHATGPT una rivoluzione AI][16]
  * [Integrazione di Google Docs con Chatgpt | Openai GPT-3][17]
  * [Quali sono i primi 5 framework AI open source][18]
  * [Cos'è AI generativo | Intelligenza artificiale generativa][19]



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
