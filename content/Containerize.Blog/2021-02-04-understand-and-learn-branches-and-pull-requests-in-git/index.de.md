---
title: "Zweige verstehen und lernen und Anfragen in Git ziehen" 
seoTitle: "Zweige verstehen und lernen und Anfragen in Git ziehen" 
description: "Git ist eines der beliebtesten Versionskontrollsysteme. In dieser Articl versteht wir, wie man Git -Zweige verwendet und Anfragen zieht." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Git Branch ist die grundlegende Komponente des Git -Versionskontrollsystems. Wir werden verschiedene Verzweigungsmodelle in diesem Tutorial untersuchen" 
url: /de/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## Git Branch ist die grundlegende Komponente des Git -Versionskontrollsystems. Wir werden verschiedene Verzweigungsmodelle in diesem Tutorial untersuchen

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Git Pull -Anfragen Zweige">}}

In unserem [letzten Artikel] [1] haben wir die Grundlagen von Git- und Versionskontrollsystemen erfahren. Wir haben Schritt für Schritt durchlaufen und gelernt, wie man ein Git -Repository einrichtet. Außerdem haben wir gelernt, wie man einen Zweig zu Änderungen hinzufügt und sie zurückversetzt, falls Sie Ihre Änderungen rückgängig machen möchten. Jetzt, da wir die Grundlagen von Versionskontrollsystemen verstehen, insbesondere Git. In diesem Blog -Beitrag werden wir also über die Verwendung von Git -Zweigen und an Anfragen übergehen. Wir lernen verschiedene Workflows kennen. Also lasst uns anfangen!
  *** [Was sind Git -Zweige] [2] **
  *** [Erstellen / Ändern von Git -Zweigen] [3] **
  *** [Was ist eine Pull -Anfrage] [4] **
  *** [Populäre Git -Verzweigungsmodelle] [5] **
  *[** Schlussfolgerung **] [6]

## Was sind Git -Zweige {#branch}

{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="Git -Zweige">}}

Lassen Sie uns über Zweige sprechen und warum wir Filialen brauchen und welche Verzweigungsstrategien wir verwenden können, um mit unserem Code effizient zu arbeiten. Wie der Name vorschlägt, stellt ein ** Zweig ** eine unabhängige Entwicklungslinie aus einer Wurzel dar.
Wenn Sie ein Repository erstellen, erstellen Sie im Grunde auch einen Zweig, den wir einen Master- (oder Standard) -Ast aufrufen können. Wir können Änderungen an unserer Master -Filiale begehen. Für den Fall, dass Sie jedoch an einer Funktion arbeiten müssen und Ihren Code nicht von der Master -Filiale trennen möchten. Hier helfen Ihnen Zweigstellen. Sie lassen Sie sich verzweigen und verschmelzen später später.

## Erstellen / Ändern von Git -Zweigen {#create}
```
git branch
```
Mit dem Befehl können Sie Filialen erstellen, auflisten, umbenennen und löschen. Sie können nicht zwischen Zweigen wechseln. Dafür müssen wir den Git -Checkout -Befehl verwenden. Oder wenn Sie Ihre Änderungen wieder zu einem Zweig verschmelzen möchten, müssen Sie den Befehl ** git merge ** verwenden.
Es ist wichtig zu verstehen, dass Zweige nur Hinweise auf sich verpflichten. Wenn Sie einen Zweig erstellen, muss Git einen neuen Zeiger erstellen, sondern das Repository nicht auf andere Weise ändert.
Verwenden Sie den folgenden Befehl, um einen Zweig zu erstellen
```
git branch <branch-name>
```
Sobald Sie an einem Zweig gearbeitet und in die Hauptcode -Basis verschmolzen haben, können Sie den Zweig löschen, ohne den Verlauf des folgenden Befehls zu verlieren
```
git branch -d <branch-name>
```

## Was ist eine Pull -Anforderung {#Pull}
Eine Pull -Anfrage ist eine Möglichkeit, einen Beitrag zu einem Softwareprojekt mit einem Versionskontrollsystem wie Git einzureichen. Entwickler verwenden Pull -Anfragen, um Änderungen an einer Codebasis vorzuschlagen. Sobald eine Pull-Anfrage geöffnet ist, können Sie die potenziellen Änderungen mit Mitarbeitern diskutieren und überprüfen und Follow-up-Commits hinzufügen, bevor Ihre Änderungen in den Basiszweig verschmolzen werden.
Wenn ein Entwickler eine Pull -Anfrage eröffnet, ist alles, was er an einen anderen Entwickler verlangt, einen Zweig aus seinem Repository in sein Repository. Dies bedeutet, dass er 4 Eingabewerte bereitstellen muss, um eine Pull -Anforderung zu erstellen: das Quell -Repository, den Quellzweig, das Zielrepository und den Zielzweig.

## beliebte Verzweigungsmodelle {#Model}
Es gibt eine Reihe von Verzweigungsworkflows, die von der Entwicklergemeinschaft weltweit verwendet werden. Wir werden jedoch die drei beliebtesten Verzweigungsmodelle nacheinander diskutieren

### Git Flow
GitFlow Workflow ist ein Git -Workflow, der bei der kontinuierlichen Softwareentwicklung und der Implementierung von DevOps -Praktiken hilft. Der Git -Fluss ist der bekannteste Workflow auf dieser Liste. Es wurde von [Vincent Driessen im Jahr 2010] [7] erstellt und basiert auf zwei Hauptzweigen mit einer unendlichen Lebensdauer, zusammen mit anderen unterstützenden Zweigen wie Merkmalen-\*, Hotfixes-\*, die dann als individuell in den Entwicklungszweig in den Entwicklungszweig verschmelzen Artikel werden abgeschlossen.
  *** Master ** - Diese Filiale enthält Produktionscode. Der gesamte Entwicklungscode wird in den Master -Zweig zusammengefasst, sobald bereit für die Produktion gedrängt wird.
  *** entwickeln **-Diese Zweigstelle enthält Vorproduktionscode. Wenn die Funktionen fertig sind, werden sie in die Entwicklung verschmolzen.
Gitflow ist ideal für Projekte geeignet, die einen geplanten Release -Zyklus haben. Die Git -Geschichte wird jedoch unlesbar.

### Github Flow
Der Github -Fluss ist ein leichtgewichtiger Workflow. Es wurde 2011 von [Github] [8] erstellt und konzentriert sich hauptsächlich auf das agile Modell, wo Sie nicht auf einen Release -Zyklus warten. Stattdessen drängen Sie täglich Änderungen in die Produktion, wenn die Funktionen abgeschlossen werden.
Github Flow folgt den folgenden Prinzipien:
  * Alles in der "Master" -Ast ist bereitgestellt.
  * Um an etwas Neuem zu arbeiten, erstellen Sie einen separaten Zweig von Off Master mit einem Beschreibung Namen, z. B. "Image-Uploading"
  * Verlassen Sie sich vor Ort und regelmäßig auf diese Filiale und bringen Sie Ihre Arbeit regelmäßig in die gleich benannte Filiale auf dem Server.
  * Wenn Sie Feedback oder Hilfe benötigen oder der Meinung sind, dass der Zweig zur Verschmelzung bereit ist, öffnen Sie eine [Pull -Anfrage] [4]
  * Nachdem es überprüft und abgemeldet wurde, können Sie sie in den Master zusammenführen
  * Sobald es zusammengeführt und auf "Master" verschrieben wird, kann es in die Produktion eingesetzt werden.

### Gitlab Flow
Der GitLab Flow ist ein Workflow, der 2014 von GitLab erstellt wurde. Gitlab Flow ist eine einfachere Alternative zu Gitflow und kombiniert featurengesteuerte Entwicklung und Feature -Zweige mit Problemverfolgung. Der Hauptunterschied zwischen Gitlab Flow und Github Flow ist die Verwendung von Umgebungszweigen.
Entwickler erstellen einen ** entwickeln ** Zweig und machen dies zur Standardeinstellung, während Gitlab Flow sofort mit dem Hauptzweig funktioniert. Der GitLab Flow enthält mehrere Vorproduktionszweige. Und diese können verwendet werden, um das Zeug auf verschiedenen Ebenen zu testen. z. B. von der Testzweig bis zur Akzeptanz und dann von der Akzeptanz zur Produktion.

## Schlussfolgerung {#Conclusion}
In diesem Artikel haben wir etwas über die Git -Zweige gelernt und Anfragen gezogen. Wir haben die Bedeutung von Pull -Anfragen untersucht und wie sie in verschiedenen Git -Workflows verwendet werden können. Wir haben auch kurz verschiedene Git -Verzweigungsmodelle untersucht.
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
