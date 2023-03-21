---
title: "Come creare un'applicazione Node.js con Docker su Ubuntu" 
seoTitle: "Come creare un'applicazione Node.js con Docker su Ubuntu" 
description: "Se sei interessato a node.js e vuoi usare Docker. Questo tutorial ti farà passare, come costruire un'applicazione Nodejs con Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "Questo articolo ti spiegherà come creare un'applicazione Nodejs con containerizzazione Docker. Docker consente di impacchettare ed eseguire applicazioni come contenitori." 
url: /it/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Come costruire l'applicazione Nodejs con Docker">}}


## Questo articolo ti spiegherà come creare un'applicazione Nodejs con containerizzazione Docker. Docker consente di impacchettare ed eseguire applicazioni come contenitori.
Oggi stiamo iniziando una serie di tutorial sugli strumenti di sviluppo del software. E questo primo articolo copre come containerizzare un'applicazione Node.js utilizzando Docker. Docker aiuta gli sviluppatori a impacchettare ed eseguire applicazioni come contenitori. Poiché il contenitore è un processo isolato e un'alternativa leggera alle macchine virtuali. Questo articolo spiega come creare un'applicazione Nodejs con containerizzazione Docker. Iniziamo!
  *[**Cos'è Docker** ][1]
  * **[Prerequisiti][2]**
  *[**Setup Node.js Applicazione** ][3]
  *[**Scrivi Dockerfile** ][4]
  *[**build immagine ed esegui contenitore docker** ][5]
  *[**conclusione** ][6]

## cos'è docker   {#docker}
Docker è un insieme di piattaforme come prodotti di servizio che utilizzano la virtualizzazione a livello di sistema operativo per fornire software in pacchetti chiamati contenitori. È una piattaforma aperta per lo sviluppo, la spedizione e l'esecuzione di applicazioni. Docker consente di separare le tue applicazioni dalla tua infrastruttura in modo da poter fornire rapidamente software.
Docker utilizza un'architettura client-server. Il cliente Docker parla con il demone Docker, che fa il pesante sollevamento dell'edificio, nella corsa e nella distribuzione dei container Docker. Il client e il demone Docker comunicano utilizzando un'API REST, su prese UNIX o un'interfaccia di rete. Ecco il diagramma dell'architettura Docker.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Architettura Docker">}}


## prerequisiti   {#Prereq}
  * Server Ubuntu
  * Docker installato sul server
  * Node.js npm installato

## setup node.js applicazione   {#setup}
Per creare la tua immagine, dovrai prima creare i file delle applicazioni, che puoi quindi copiare sul tuo contenitore. Questi file includeranno il contenuto, il codice e le dipendenze statici dell'applicazione.
Innanzitutto, crea una directory per il tuo progetto nella home directory dell'utente non root. Quindi, esegui il comando di seguito in una nuova cartella creata.
```
npm init -y
npm i -s express
```
Il comando sopra imposterà un'applicazione Node.js con framework Express installato come dipendenza. Aggiungiamo il seguente codice nel file **app.js** .
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Avviare l'applicazione con il nodo app.js
```
node app.js
```
Passa il browser su http: // your \ _server \ _ip: 3000. Vedrai la seguente pagina di destinazione.
Ora hai un'applicazione attivo e funzionante. Ora possiamo andare avanti per creare Dockerfile che ci consentirà di ricreare e ridimensionare questa applicazione.

## Scrivi Dockerfile   {#DockerFile}
Utilizzando Dockerfile, è possibile specificare cosa verrà incluso nel contenitore dell'applicazione quando viene eseguito e nell'ambiente del contenitore.
Prima di tutto crea Dockerfile con il seguente comando alla radice del progetto.
```
vi Dockerfile
```
Aggiungi le seguenti istruzioni **da**  per impostare l'immagine di base dell'applicazione:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    È possibile aggiungere il file .Dockerignore per rimuovere i file che non appartengono all'immagine Docker.
{{_LINE_46_}}
{{_LINE_47_}}
Creiamo **node_modules**  sottodirectory in /home /node insieme alla directory dell'app. Ciò assicurerà che abbiano le autorizzazioni necessarie, che saranno importanti quando creiamo moduli di nodo locali nel contenitore con NPM Installa.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Quindi, impostare la directory di lavoro dell'applicazione su/home/nodo/app:
```
...
WORKDIR /home/node/app
```
Quindi, copia package.json e pacchetto--Lock.json, assegna il file di progetto a un "nodo" dell'utente non root e quindi esegui l'installazione NPM
```
...
COPY package*.json ./
USER node
RUN npm install
```
Copia il codice dell'applicazione con le autorizzazioni appropriate nella directory dell'applicazione sul contenitore
```
...
COPY --chown=node:node . .
```
Esporre il comando per esporre la porta:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
La versione finale di Dockerfile dovrebbe apparire così:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## build immagine ed esegui contenitore   {#build}
Esegui il seguente comando per generare l'immagine Docker
```
docker build -t <<image_name>> .
```
Questo genererà un'immagine _docker che puoi controllare utilizzando il comando Docker Images. Ora è possibile creare un contenitore con questa immagine usando il seguente comando:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Ciò avvierà il contenitore che è possibile verificare eseguendo il comando Docker PS. Ora nel tuo browser se accedi a http: // localhost: 3000 vedrai la tua app node.js in esecuzione. Tuttavia questa volta ora è in esecuzione dal tuo contenitore Docker.

## conclusioni   {#conclusion}
Lo sviluppo con il contenitore Docker è molto semplice e facile. Docker aiuta gli sviluppatori a impacchettare ed eseguire applicazioni come contenitori. In questo tutorial abbiamo imparato a costruire un'applicazione Node.js usando Docker Container su Ubuntu. Nei prossimi articoli scriveremo di più usi di Docker e discuteremo anche di altri strumenti.

## Esplorare
  * [Come installare più versioni PHP con nginx su Ubuntu][7]
  * [Come configurare e configurare Nginx come proxy inverso][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
