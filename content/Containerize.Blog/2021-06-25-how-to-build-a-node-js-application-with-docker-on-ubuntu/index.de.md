---
title: "So erstellen Sie eine node.js -Anwendung mit Docker auf Ubuntu" 
seoTitle: "So erstellen Sie eine node.js -Anwendung mit Docker auf Ubuntu" 
description: "Wenn Sie an Node.js interessiert sind und Docker verwenden möchten. Dieses Tutorial führt Sie durch und erstellt eine NodeJS -Anwendung mit Docker." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "In diesem Artikel wird Ihnen erklärt, wie Sie eine NodeJS -Anwendung mit Docker -Containerisierung erstellen. Docker ermöglicht das Verpacken und Ausführen von Anwendungen als Container." 
url: /de/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="So erstellen Sie eine NodeJS -Anwendung mit Docker">}}


## In diesem Artikel wird Ihnen erklärt, wie Sie eine NodeJS -Anwendung mit Docker -Containerisierung erstellen. Docker ermöglicht das Verpacken und Ausführen von Anwendungen als Container.
Heute beginnen wir eine Reihe von Tutorials über Softwareentwicklungswerkzeuge. In diesem ersten Artikel wird mithilfe von Docker eine Node.js -Anwendung behandelt. Docker hilft Entwicklern, Anwendungen als Container zu verpacken und auszuführen. Da der Behälter ein isolierter Prozess und eine leichte Alternative zu virtuellen Maschinen ist. In diesem Artikel wird erläutert, wie eine NodeJS -Anwendung mit Docker Containerisierung erstellt wird. Lass uns anfangen!
  *[** Was ist Docker **][1]
  *** [Voraussetzungen][2] **
  *[** setup node.js Anwendung **][3]
  *[** Schreiben Sie Dockerfile **][4]
  *[** Bild erstellen und Docker -Container ausführen **][5]
  *[** Schlussfolgerung **][6]

## Was ist Docker {#docker}
Docker ist eine Reihe von Plattform als Serviceprodukte, die die Virtualisierung auf OS-Ebene verwenden, um Software in Paketen zu liefern, die als Container bezeichnet werden. Es ist eine offene Plattform zum Entwickeln, Versand und Ausführen von Anwendungen. Mit Docker können Sie Ihre Anwendungen von Ihrer Infrastruktur trennen, damit Sie Software schnell liefern können.
Docker verwendet eine Client-Server-Architektur. Der Docker -Kunde spricht mit dem Docker -Daemon, der das starke Aufheben, Laufen und Verteilern Ihrer Docker -Container durchführt. Der Docker -Client und der Dämon kommunizieren mit einer REST -API über Unix -Sockets oder einer Netzwerkschnittstelle. Hier ist das Diagramm der Docker -Architektur.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Docker -Architektur">}}


## Voraussetzungen {#Prereq}
  * Ubuntu Server
  * Docker auf dem Server installiert
  * Npm npm installiert

## setup node.js application {#setup}
Um Ihr Bild zu erstellen, müssen Sie zunächst Ihre Anwendungsdateien erstellen, die Sie dann in Ihren Container kopieren können. Diese Dateien enthalten den statischen Inhalt, den Code und die Abhängigkeiten Ihrer Anwendung.
Erstellen Sie zunächst ein Verzeichnis für Ihr Projekt in Ihrem Home-Verzeichnis Ihres Nicht-Root-Benutzers. Führen Sie dann den Befehl unten in einem neuen Ordner aus, den Sie erstellt haben.
```
npm init -y
npm i -s express
```
Der obige Befehl setzt eine node.js -Anwendung mit Express -Framework ein, die als Abhängigkeit installiert ist. Fügen wir den folgenden Code in die Datei ** app.js ** hinzu.
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
Starten Sie die Anwendung mit Node App.js
```
node app.js
```
Navigieren Sie in Ihrem Browser zu http: // \ _server \ _IP: 3000. Sie sehen die folgende Zielseite.
Jetzt haben Sie eine Anwendung in Betrieb. Wir können nun die Dockerfile erstellen, mit der wir diese Anwendung neu erstellen und skalieren können.

## Schreiben Sie Dockerfile {#DockerFile}
Mit DockerFile können Sie angeben, was in Ihrem Anwendungscontainer bei seiner Ausführung und in der Containerumgebung enthalten ist.
Erstellen Sie zunächst DockerFile mit dem folgenden Befehl zur Stammwurzel Ihres Projekts.
```
vi Dockerfile
```
Fügen Sie die folgenden ** von ** Anweisungen hinzu, um das Basisbild der Anwendung festzulegen:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Sie können .Dockerignore -Datei hinzufügen, um Dateien zu entfernen, die nicht zum Docker -Image gehört.
{{_LINE_46_}}
{{_LINE_47_}}
Erstellen wir zusammen mit dem App -Verzeichnis die ** node_modules ** subdimalektorisch in /home /node. Dadurch wird sichergestellt, dass sie über die erforderlichen Berechtigungen verfügen, die wichtig sein werden, wenn wir lokale Knotenmodule im Container mit NPM -Installation erstellen.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Legen Sie als Nächstes das Arbeitsverzeichnis der Anwendung auf/home/node/App fest:
```
...
WORKDIR /home/node/app
```
Kopieren Sie als Nächst
```
...
COPY package*.json ./
USER node
RUN npm install
```
Kopieren Sie Ihren Anwendungscode mit den entsprechenden Berechtigungen in das Anwendungsverzeichnis im Container
```
...
COPY --chown=node:node . .
```
Befehl freilegen, um den Port aufzudecken:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
Die endgültige Version von DockerFile sollte wie folgt aussehen:
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

## Bild erstellen und Container ausführen {#build}
Führen Sie den folgenden Befehl aus, um Ihr Docker -Bild zu generieren
```
docker build -t <<image_name>> .
```
Dadurch wird ein _docker Image_ generiert, den Sie mit dem Befehl Docker Images überprüfen können. Es ist jetzt möglich, mit diesem Bild einen Container mit dem folgenden Befehl zu erstellen:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
Dadurch wird der Container gestartet, den Sie überprüfen können, indem Sie den Befehl Docker PS ausführen. Wenn Sie jetzt in Ihrem Browser auf http: // localhost: 3000 zugreifen, sehen Sie Ihre Node.js -App ausgeführt. Diesmal läuft es jedoch jetzt aus Ihrem Docker -Container.

## Schlussfolgerung {#Conclusion}
Die Entwicklung mit dem Docker -Container ist sehr einfach und einfach. Docker hilft Entwicklern, Anwendungen als Container zu verpacken und auszuführen. In diesem Tutorial haben wir gelernt, wie man eine node.js -Anwendung mit Docker Container auf Ubuntu erstellt. In kommenden Artikeln schreiben wir über weitere Verwendungen von Docker und werden auch andere Tools besprechen.

## Erkunden
  * [So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu][7]
  * [So richten und konfigurieren Sie Nginx als Reverse -Proxy][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
