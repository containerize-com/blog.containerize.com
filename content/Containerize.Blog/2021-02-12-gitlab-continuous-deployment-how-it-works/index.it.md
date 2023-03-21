---
title: "Distribuzione continua di Gitlab | Come funziona?" 
seoTitle: "Distribuzione continua di Gitlab | Come funziona?" 
description: "In questo tutorial, costruiremo una pipeline di distribuzione continua con Gitlab. La distribuzione continua Gitlab aiuta i DevOps a eseguire la distribuzione automatizzata." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "La distribuzione automatizzata semplifica il flusso di lavoro & amp; processi. Questo tutorial GitLab ti aiuta a imparare a impostare una pipeline di distribuzione continua utilizzando Gitlab CI/CD." 
url: /it/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

La distribuzione automatizzata ## semplifica il flusso di lavoro e i processi. Questo tutorial GitLab ti aiuta a imparare a impostare una pipeline di distribuzione continua utilizzando Gitlab CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="Gitlab Continua Distribuzione">}}


Panoramica ##
Negli ultimi articoli, abbiamo appreso le [basi del controllo della versione][1] e quindi abbiamo migliorato le nostre conoscenze imparando a conoscere diversi [modelli di ramificazione][2] e flussi di lavoro. Il sistema di controllo della versione ha portato efficienza nel mondo dello sviluppo, dell'implementazione e dell'integrazione. Gli sviluppatori trovano molto facile commettere il codice sorgente senza preoccuparsi delle build e dei test. L'industria del software ha acquisito fiducia e un vantaggio competitivo in quanto questo approccio ha avviato le distribuzioni.
**Gitlab Continua Deployment ** e l'integrazione aiutano a trovare facilmente problemi. Inoltre, gli sviluppatori possono tenere traccia dei bug e di altri maneggevoli in un arco di tempo più breve. L'intero processo di automazione fornisce libertà dai compiti che svolgono frequentemente e riduce la forza lavoro e le possibilità di errori. Oggi in questo post sul blog esploreremo sulla pipeline di distribuzione continua con Gitlab CI/CD. Quindi, iniziamo coprendo i seguenti punti!
  * **[What Is CI & CD][3]**
  * **[What is gitlab runner][4]**
  * **[. File gitlab-ci.yml][5]**
  * **[Crea app campione di base][6]**
  * **[Conclusione][7]**

## What is ci & cd   {#cicd}
L'integrazione continua (CI) è una delle migliori pratiche DevOps per automatizzare l'integrazione delle modifiche al codice da più collaboratori in un singolo progetto software. Ciò consente agli sviluppatori di unire frequentemente le modifiche al codice in un repository centrale in cui vengono quindi eseguite build e test. La distribuzione continua (CD) sposta un ulteriore passo avanti distribuendo automaticamente il codice nell'ambiente target (produzione o stadiazione) dopo che ogni codice si impegna e si basa.
Prima di iniziare, assicurati di avere un progetto in Gitlab per il quale vorresti usare CI/CD. E dovresti avere accesso manutentore o a livello di proprietario al progetto.

## cos'è il ghiantner gitlab   {#runner}
Dopo aver compreso **Gitlab Continuous Deployment** , Gitlab Runner è un piccolo programma leggero scritto in GO che esegue lavori relativi a continui integrazione (CI) sulla macchina locale e invia i risultati a Gitlab per considerare le modifiche. È un singolo binario eseguibile che può essere installato su qualsiasi sistema operativo importante.
Prima di andare avanti con il Gitlab CI / CD devi assicurarti di avere i corridori disponibili per eseguire le tue attività. È possibile seguire la Guida ufficiale a [Installa][8] e [Register][9] Gitlab Runner.

## .gitlab-ci.yml File   {#yml}
**. Gitlab-ci.yml ** è un file in cui si configurano istruzioni specifiche per Gitlab CI/CD. È posizionato nella radice del repository e contiene definizioni di come costruire il progetto. Ogni volta che spingiamo un commit nella nostra istanza Gitlab, Gitlab avrebbe invocato un corridore per costruire e testare il progetto come indicato all'interno di questo file.

## crea un'app di esempio   {#sample}
Nella sezione di questo **tutorial gitlab** , creeremo un'app di esempio. Supponendo che tu abbia già creato un repository GitLab, creiamo un'applicazione di esempio e imposteremo un processo CI / CD per l'applicazione.
Prima di tutto, crea il file package.json nella radice del tuo progetto
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Ora crea un'app.js alla radice del tuo progetto
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
Nell'ultima fase di **Gitlab Continua distribuzione,  **Crea un **  Dockerfile**  e aggiungi i seguenti contenuti:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
Dockerfile contiene il processo di build per questa app. Implica la creazione di un contenitore di nodi e l'installazione delle dipendenze.
Ora dobbiamo creare un file **. Gitlab-ci.yml **. Questo file conterrebbe le istruzioni per creare il nostro progetto. Ogni volta che spingiamo un commit nel nostro repository Gitlab, Gitlab avrebbe invocato un corridore per costruire il progetto.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Abbiamo solo una build in una fase e ha solo **NPM Installa**  come script. Questo è un comando che dovresti eseguire manualmente ogni volta che arriva un cambiamento al tuo progetto. Ed è qui che entra in gioco il Runner Gitlab e lo farebbe automaticamente ogni volta che ti impegni.
Ora supponendo di aver già installato il Runner Gitlab e di averlo anche registrato con la tua istanza Gitlab, possiamo testare il Gitlab CI / CD in azione facendo un semplice commit nell'applicazione e spingendolo a Gitlab.
Puoi quindi aprire il tuo progetto in GitLab, andare alla pipeline My-Project → e vedrai un tag che dice "passato" accanto al commit che hai fatto. I commit successivi avranno anche tag.

## conclusioni   {#conclusion}
Questo ci porta alla fine di questo **tutorial gitlab **. In questo articolo, abbiamo appreso le basi dell'integrazione continua di Gitlab,  **What Is CI & CD ** ,  **What Is Gitlab Runner **  e la distribuzione continua. Inoltre, abbiamo studiato a cosa serve i corridori nel flusso di lavoro CI / CD complessivo. Abbiamo anche creato un progetto di esempio che spiega come impostare la distribuzione continua utilizzando Gitlab. Questo tutorial Gitlab ti aiuterà davvero se stai cercando  **Gitlab Continua Deployment ** . Tuttavia, ci sono molte altre risorse menzionate nella sezione "Esplora" di seguito che è possibile controllare. Inoltre, gli articoli riguardano  **sistemi di controllo della versione**   che sono open source, autosullati ed estensibili.
Infine, [Containerize.com][10] scrive continuamente post sul blog su ulteriori prodotti e argomenti open source. Pertanto, rimanete in contatto con la categoria [][11][Software di controllo della versione][12] per aggiornamenti regolari. Inoltre, puoi seguirci sui nostri account di social media [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Automatizza i flussi di lavoro di sviluppo del software con le azioni GitHub][16]
  * [Comprendi e impara i rami e tira le richieste in git][2]
  * [Software di gestione del codice sorgente | Cos'è git?][17]
  * [Top 5 Sistemi di controllo della versione open source nel 2021][18]
  * [Automatizza le operazioni aziendali utilizzando software gratuito e open source][19]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
