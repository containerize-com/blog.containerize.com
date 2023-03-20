---
title: "Quellcode -Management -Software | Was ist Git?" 
seoTitle: "Quellcode -Management -Software | Was ist Git?" 
description: "Was ist Git? Git ist eine kostenlose Software für die Quellcode -Verwaltung, mit der Sie Änderungen an Ihren Quelldateien aufzeichnen, überprüfen und Projekte effizient verwalten können." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "In diesem Artikel werden wir untersuchen, was Git & amp; Wie funktioniert Git? Git ist ein Versionskontrollsystem, mit dem Quellcode, Track & amp; Protokollversionen." 
url: /de/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## In diesem Artikel werden wir untersuchen, was Git ist und wie Git funktioniert? Git ist ein Versionskontrollsystem, das zum Verwalten von Quellcode, Track- und Protokollversionen entwickelt wurde.

{{< figure align=center src="images/version-control-banner.png" alt="Quellcode -Management -Software">}}


## Überblick
Stellen Sie sich vor, Sie als Softwareentwickler arbeiten an einem Projekt. Sie haben mehr als eine Person, die daran arbeitet. Und es gibt eine einzige Datei, die den Quellcode enthält. Da sie alle Änderungen am Code vornehmen, haben sie jedes Mal unterschiedliche Versionen der Datei, wenn sie eine Änderung vornehmen. Wie würden wir nun verschiedene Versionen derselben Datei verwalten? Hier beginnt die Software zur Quellcode -Verwaltung. Sie hilft Ihnen, verschiedene Versionen derselben Datei zu verwalten und zusammenzuführen. Und können Sie sogar die Veränderungsgeschichte zurückverfolgen. Und Sie können immer sicher sein, wer die Änderungen an der Datei vorgenommen hat und was diese Änderungen sind.
In diesem Artikel erfahren wir das Git -Versionskontrollsystem. So können Sie es verwenden, um Ihre Softwareentwicklungsquellcode -Dateien oder andere Dateien zu verwalten. Also lasst uns anfangen.
  *** [Was ist Versionskontrollsystem][1] **
  *** [Was ist git][2] **
  *** [Wie Git funktioniert][3] **
  *** [Git installieren][4] **
  *** [Einrichten eines Repositorys][5] **
  *** [Änderungen am Repository][6] **
  *** [Überprüfen Sie den Status von Repository][7] **
  *** [Änderungen zurückkehren oder rückgängig machen][8] **
  *** [Schlussfolgerung][9] **

## Was ist das Versionskontrollsystem {#Versionskontrolle}
Die Versionskontrolle ist ein System, das Änderungen an einer Datei oder einer Reihe von Dateien im Laufe der Zeit aufzeichnet, sodass Sie sich später an bestimmte Versionen erinnern können. Wenn Sie ein Softwareentwickler sind und Versionen der Quellcode -Datei aufbewahren möchten, ist die Software für die Quellcodeverwaltung eine sehr nützliche Sache für Sie. Sie können ausgewählte Dateien in einen früheren Status zurückversetzen, das gesamte Projekt in einen früheren Status zurückversetzen, Änderungen im Laufe der Zeit vergleichen und sehen, wer zuletzt etwas geändert hat, das möglicherweise ein Problem verursacht, wer ein Problem einführte und wann und mehr. Wenn Sie die Versionskontrolle verwenden, müssen Sie sich nie Sorgen machen, dass Sie Ihre Arbeit verlieren.

## Was ist git {#git}
Git ist ein kostenloses und open-Source-Versionskontrollsystem, das alles von kleinen bis sehr großen Projekten mit Geschwindigkeit und Effizienz abwickelt. Im Gegensatz zu älteren zentralisierten Versionskontrollsystemen wie SVN und CVS wird die Git -Versionskontrolle verteilt. Jeder Entwickler hat die volle Geschichte seines Code -Repositorys vor Ort. Es macht den anfänglichen Klon jedoch etwas langsam. Aber danach sind alle Commits und andere Operationen sehr schnell. Mit Git können Sie mehrere lokale Zweige haben, die völlig unabhängig voneinander sein können.

## Wie Git funktioniert {#How}
Mit Git können Sie Änderungen an Ihrem lokalen Repository vornehmen und es in ein Hosting -Tool verschieben. Oder Sie können die Änderungen anderer vom Hosting -Tool zu Ihrem lokalen Computer ziehen. Hier ist ein grundlegender Überblick darüber, wie Source Code Management Software (GIT) funktioniert.
  1. Erstellen Sie ein "Repository" mit einem Git jedes Hosting -Tool (wie Github, Gitlab oder Bitbucket)
  2. Klonen Sie das Repository in Ihre lokale Maschine
  3. Fügen Sie Ihrem lokalen Repository eine Datei hinzu
  4. Speichern (Commit) Änderungen an Ihrem lokalen Repository
  5. "Schieben" Ihre Änderungen in Ihrem Master -Zweig auf einem Remote -Hosting "
  6. Nehmen Sie eine Änderung Ihrer Datei mit einem Git -Hosting -Tool vor und Commit
  7. "Ziehen" die Änderungen an Ihrer lokalen Maschine
  8. Erstellen Sie eine "Zweigstelle" (Version), ändern Sie eine Änderung, begehen Sie die Änderung
  9. Öffnen Sie eine „Pull -Anfrage“ (Vorschläge Änderungen am Master -Zweig vor).
 10. „Fusion“ Ihren Zweig in den Master -Zweig „

## Installieren Sie Git {#install}
Es stehen verschiedene Methoden zur Verfügung, um Git auf Ihrem Computer zu installieren. Sie können es als Paket oder über einen anderen Installateur installieren oder den Quellcode herunterladen und selbst kompilieren.

### auf Linux installieren
Wenn Sie die grundlegenden Git -Tools auf Linux über einen binären Installateur installieren möchten, können Sie dies im Allgemeinen über das mit Ihrer Verteilung gelieferte Paket -Management -Tool tun. Für Fedora (oder eine eng verwandte RPM-basierte Verteilung wie Rhel oder CentOS) können Sie „DNF“ verwenden
```
$ sudo dnf install git-all
```
Wenn Sie in einer Debian-basierten Verteilung wie Ubuntu sind, versuchen Sie es mit "Apt"
```
$ sudo apt install git-all
```

### auf macOS installieren
Es gibt verschiedene Möglichkeiten, Git auf einem Mac zu installieren. Am einfachsten ist es wahrscheinlich, die Xcode -Befehlszeilen -Tools zu installieren. Bei Mavericks (10.9) oder darüber können Sie dies einfach tun, indem Sie versuchen, ** Git ** vom Terminal zum ersten Mal auszuführen.
```
$ git --version
```
Wenn Sie es noch nicht installiert haben, werden Sie aufgefordert, es zu installieren.

## Einrichten eines Repositorys {#init}
Ein Git -Repository ist virtueller Speicher für Ihre Codedateien. Sie können verschiedene Versionen Ihres Codes speichern, auf die Sie bei Bedarf zugreifen können.
Um ein neues Repo zu erstellen, verwenden Sie den Befehl ** git init **. Git Init ist ein einmaliger Befehl, den Sie während der ersten Einrichtung eines neuen Repo verwenden. Durch die Ausführung dieses Befehls wird ein neues .git -Unterverzeichnis in Ihrem aktuellen Arbeitsverzeichnis erstellt. Dies erstellt auch einen neuen ** Master ** Zweig.

{{< figure align=center src="images/git-init-2.gif" alt="Was ist Git">}}


## Änderungen in Repository {#Commit} speichern
Nachdem Sie ein Repository initialisiert haben, können Sie Änderungen der Dateiversion festlegen.

{{< figure align=center src="images/git-add-commit-1.gif" alt="Git Commit">}}


## Überprüfen Sie den Status von Repository {#Status}
Der Befehl ** git status ** zeigt den Status des Arbeitsverzeichnisses und den Staging -Bereich an. Sie können feststellen, welche Änderungen inszeniert wurden, was nicht und welche Dateien nicht von der Software für Source Code Management (GIT) nachverfolgt werden. Die Statusausgabe zeigt Ihnen keine Informationen über die festgelegte Projekthistorie. Dafür müssen Sie das ** Git -Protokoll ** verwenden.

{{< figure align=center src="images/git-status-2.gif" alt="Quellcode -Management -Software">}}

Das Git -Protokoll zeigt Ihnen die folgende Ausgabe
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Wege deine Änderungen {#Revert} kehren zurück
Sie können den Befehl git revert verwenden, um eine Änderung rückgängig zu machen, die Sie bereits in Ihrem Repo verpflichtet haben. Verwenden Sie zunächst den Befehl „Git log“, um die Liste der Commits zu erhalten
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Entscheiden Sie dann, welches Verpflichtung Sie zurückkehren möchten. Und verwenden Sie den Befehl git revert wie unten wie unten
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Wie Sie sehen können, hat Git Revert ein neues Commit geschaffen, das die Änderungen, die im „zweiten Commit“ vorgenommen wurden, rückgängig gemacht haben.

## Abschluss
Nachdem Sie den gesamten Artikel gelesen haben, in dem wir besprochen haben, was Git ist und wie Git funktioniert, sollten Sie sich über die Software zur Quellcodeverwaltung bewusst sein. Was ist der Zweck und warum brauchen Sie es? Wir haben untersucht, wie der GIT Ihnen helfen kann, den Quellcode Ihres Projekts zu verwalten. Und wir haben auch gelernt, wie Sie verschiedene GIT -Befehle verwenden, um zu initialisieren und zu repositorisieren, Ihre Änderungen zu speichern und die Änderungen rückgängig zu machen. In unseren bevorstehenden Tutorials werden wir den Git mehr untersuchen und teilen, wie wir verschiedene Befehle verwenden können, um Ihren Code besser zu verwalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  *[** Automatisieren Sie Softwareentwicklungsworkflows mit GitHub -Aktionen **][10]
  *** [So richten Sie eine kontinuierliche Bereitstellungspipeline mit GitLab CI/CD ein][11] **
  *** [Verstehen und lernen Sie Zweige und ziehen Sie Anfragen in Git][12] **
  *** [Top 5 Open Source -Versionskontrollsysteme in 2021][13] **

  
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
