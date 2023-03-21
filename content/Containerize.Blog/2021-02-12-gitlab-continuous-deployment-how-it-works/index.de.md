---
title: "GitLab Continuous Deployment | Wie es funktioniert?" 
seoTitle: "GitLab Continuous Deployment | Wie es funktioniert?" 
description: "In diesem Tutorial erstellen wir eine kontinuierliche Einsatzpipeline mit GitLab. Die kontinuierliche Bereitstellung von GitLab hilft den DevOps bei der Durchführung der automatisierten Bereitstellung." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "Automatische Bereitstellung rationalisiert Ihren Workflow & amp; Prozesse. Mit diesem GitLab -Tutorial lernen Sie, eine kontinuierliche Bereitstellungspipeline mit GitLab CI/CD einzurichten." 
url: /de/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## Automatisierte Bereitstellung rationalisiert Ihren Workflow und Ihre Prozesse. Mit diesem GitLab -Tutorial lernen Sie, eine kontinuierliche Bereitstellungspipeline mit GitLab CI/CD einzurichten.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="GitLab Continuous -Bereitstellung">}}


## Überblick
In den letzten Artikeln haben wir die [Grundlagen der Versionskontrolle][1] gelernt und dann unser Wissen verstärkt, indem wir verschiedene [Verzweigungsmodelle][2] und Workflows kennengelernt haben. Das Versionskontrollsystem hat in der Welt der Entwicklung, des Einsatzes und der Integration Effizienz gebracht. Entwickler finden es super einfach, den Quellcode zu begehen, ohne sich über die Builds und Tests zu sorgen. Die Softwareindustrie hat Vertrauen und einen Wettbewerbsvorteil gewonnen, da dieser Ansatz die Bereitstellungen erhöht hat.
**GitLab Continuous Deployment**  und Integration hilft dabei, Probleme leicht zu finden. Darüber hinaus können Entwickler in kürzerer Zeit die Bugs und andere Miss -Handhabung verfolgen. Dieser gesamte Automatisierungsprozess verleiht den häufig vorkommenden Aufgaben von den Aufgaben und reduziert die Arbeitskräfte und die Chancen von Fehlern. Heute untersuchen wir in diesem Blog -Beitrag mit Gitlab CI/CD über eine kontinuierliche Bereitstellungspipeline. Beginnen wir also mit den folgenden Punkten!
  ***[Was ist CI & CD][3]** 
  ***[Was ist GitLab Runner][4]** 
  ***[. GitLab-ci.yml-Datei][5]** 
  ***[Erstellen Sie grundlegende Beispiel -App][6]** 
  ***[Schlussfolgerung][7]** 

## Was ist CI & CD   {#cicd}
Continuous Integration (CI) ist eine der besten Verfahren zur Automatisierung der Integration von Codeänderungen von mehreren Mitwirkenden in ein einzelnes Softwareprojekt. Auf diese Weise können Entwickler häufig Codeänderungen in ein zentrales Repository zusammenführen, in dem dann Builds und Tests ausgeführt werden. Continuous Deployment (CD) wird einen Schritt weiter und weiterhin weiterhin Code für die Zielumgebung (Produktion oder Staging) nach jedem Code automatisch bereitstellen.
Stellen Sie vor Beginn sicher, dass Sie ein Projekt in GitLab haben, für das Sie CI/CD verwenden möchten. Und Sie sollten einen Zugriff auf das Projekt auf dem Projekt auf dem Projekt haben.

## Was ist GitLab Runner   {#runner}
Nach dem Verständnis von **GitLab Continuous Deployment**  ist GitLab Runner ein kleines, leichtes Programm, das in GO geschrieben wurde, das Jobs mit Continuous Integration (CI) auf Ihrer lokalen Maschine ausführt und die Ergebnisse an GitLab sendet, um die Änderungen zu berücksichtigen. Es ist eine einzelne ausführbare Binärdatei, die auf jedem Hauptbetrieb installiert werden kann.
Bevor wir mit dem Gitlab CI / CD voranschreiten, müssen Sie sicherstellen, dass die Läufer zur Verfügung stehen, um Ihre Aufgaben auszuführen. Sie können dem offiziellen Leitfaden für [Installation][8] und [Register][9] GitLab Runner folgen.

## .gitlab-ci.yml Datei   {#yml}
Das **. GitLab-ci.yml ** ist eine Datei, in der Sie bestimmte Anweisungen für GitLab CI/CD konfigurieren. Es befindet sich in die Wurzel Ihres Repositorys und enthält Definitionen, wie Ihr Projekt erstellt werden soll. Jedes Mal, wenn wir uns für unsere Gitlab -Instanz einsetzen, rief Gitlab einen Läufer auf, um das Projekt wie in dieser Datei angewiesenen zu erstellen und zu testen.

## Erstellen Sie eine Beispiel -App   {#Sample}
Im Abschnitt dieses **GitLab -Tutorials**  erstellen wir eine Beispiel -App. Unter der Annahme, dass Sie bereits ein GitLab -Repository erstellt haben, erstellen wir eine Beispielanwendung und wir stellen einen CI / CD -Prozess für die Anwendung ein.
Erstellen Sie zunächst die Datei Package.json am Stamm Ihres Projekts
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
Erstellen Sie nun eine App.js zum Stammpunkt Ihres Projekts
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
Im letzten Schritt von **GitLab Continuous -Bereitstellung erstellen Sie eine  **Dockerfile**   und fügen Sie den folgenden Inhalt hinzu:
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
DockerFile enthält den Erstellungsprozess für diese App. Dabei erstellen Sie einen Knotencontainer und die Installation der Abhängigkeiten.
Jetzt müssen wir eine **. Gitlab-ci.yml ** Datei erstellen. Diese Datei würde die Anweisungen zum Erstellen unseres Projekts enthalten. Jedes Mal, wenn wir uns für unser Gitlab -Repository einsetzen, berufen Gitlab einen Läufer, um das Projekt zu erstellen.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Wir haben nur eine Stufe Build und es hat nur **npm install**  als Skript. Dies ist ein Befehl, den Sie jedes Mal manuell ausführen müssten, wenn eine Änderung zu Ihrem Projekt kommt. Und hier kommt der Gitlab -Läufer ins Spiel und würde dies jedes Mal automatisch für Sie tun, wenn Sie sich eingehen.
Angenommen, Sie haben den GitLab -Läufer bereits installiert und ihn auch in Ihrer GitLab -Instanz registriert, können wir den GitLab CI / CD in Aktion testen, indem wir uns einfach für die Anwendung einsetzen und nach GitLab drücken.
Sie können Ihr Projekt dann in Gitlab öffnen, zu My-Project → Pipeline gehen und sehen, dass neben dem von Ihnen vorgenommenen Commit ein Tag mit der Aufschrift „bestanden“ wird. Nachfolgende Commits haben auch Tags.

## Schlussfolgerung   {#Conclusion}
Dies bringt uns zum Ende dieses **Gitlab -Tutorials **. In diesem Artikel haben wir die Grundlagen der kontinuierlichen Integration von Gitlab,  **Was ist CI & CD ** ,  **Was ist GitLab Runner **  und kontinuierliche Bereitstellung erfahren. Darüber hinaus haben wir untersucht, was Läufer im gesamten CI / CD -Workflow verwendet. Wir haben auch ein Beispielprojekt erstellt, in dem erklärt wird, wie die kontinuierliche Bereitstellung mit GitLab eingerichtet wird. Dieses GitLab -Tutorial hilft Ihnen wirklich, wenn Sie nach  **GitLab kontinuierlicher Bereitstellung **  suchen. Es gibt jedoch viele andere Ressourcen, die im Abschnitt „Explore“ unten erwähnt werden, damit Sie möglicherweise auschecken. Darüber hinaus handelt es sich bei den Artikeln um  **Versionskontrollsysteme**  , die Open Source, selbst gehostet und erweiterbar sind.
Schließlich schreibt [Containerize.com][10] ständig Blog -Beiträge zu weiteren Open -Source -Produkten und -Themen. Bitte bleiben Sie mit der Kategorie [[][11][Versionskontrollsoftware][12] in Kontakt, um regelmäßige Aktualisierungen zu erzielen. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook][13], [LinkedIn][14] und [Twitter][15] folgen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Automatisieren Sie Softwareentwicklungs -Workflows mit GitHub -Aktionen][16]
  * [Verstehen und lernen Sie Zweige und ziehen Sie Anfragen in Git][2]
  * [Software für Quellcodeverwaltung | Was ist Git?][17]
  * [Top 5 Open Source -Versionskontrollsysteme in 2021][18]
  * [Automatisieren Geschäftsbetriebe mit kostenloser und Open -Source -Software][19]

  
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
