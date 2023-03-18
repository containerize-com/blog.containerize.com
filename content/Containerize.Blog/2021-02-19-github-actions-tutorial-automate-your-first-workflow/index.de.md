---
title: "GitHub Action Tutorial | Automatisieren Sie Ihren ersten Workflow" 
seoTitle: "GitHub Action Tutorial | Automatisieren Sie Ihren ersten Workflow" 
description: "Befolgen Sie dieses Tutorial für GitHub -Aktionen, um zu untersuchen, wie wir mit GitHub -Aktionen unsere Softwareentwicklungs -Workflows aus unserem Repo automatisieren und ausführen können." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub hat GitHub -Aktionen eingeführt, mit denen Sie kontinuierliche Integration & amp; Kontinuierliche Bereitstellung mit einer Konfigurationsdatei in Ihrem Github -Repo." 
url: /de/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub hat GitHub -Aktionen eingeführt, mit denen Sie kontinuierliche Integration und kontinuierliche Bereitstellung mithilfe einer Konfigurationsdatei direkt in Ihrem Github -Repo einrichten können.

{{< figure align=center src="images/github-actions-workflows.png" alt="Github Action Tutorial">}}


## Überblick
Eine der besten Möglichkeiten, um die Produktivität in einem Softwareprojekt zu steigern, besteht darin, alles Handbuch oder Wiederholungen zu automatisieren. Und Sie sind vielleicht überrascht, wie einfach die Automatisierung implementiert werden kann, wenn Sie ein fantastisches Tool wie ** Github -Aktionen ** verwenden. Seit den letzten Artikeln habe ich über [Git] [1], [Versionskontrolle] [1] und [Automatisierung der Softwareentwicklungs -Workflows] [2] und über [kontinuierliche Integration und kontinuierliche Lieferung] [3] [3] [3] [3] [3] [3] ]. Hoffentlich sind Sie sich inzwischen bewusst, dass Repositorys und wie Sie sie benutzen können.
In der heutigen ** Github -Aktionen Tutorial ** werden wir GitHub -Aktionen untersuchen und wie Sie es zur Anwendungsautomatisierung, -anpassung und zur Ausführung Ihrer Softwareentwicklungs -Workflows in Ihrem Repository verwenden können. Also lasst uns anfangen
  *** [Überprüfen Sie CI/CD -Workflows] [4] **
  *** [Was sind Github -Aktionen] [5] **
  *** [Verständnis der YAML -Syntax] [6] **
  *** [Erstellen Sie Ihren ersten Workflow] [7] **
  *** [Fazit] [8] **

## CI/CD -Workflows {#cicd}
CI/CD ist eine Methode für häufige Bereitstellungen Ihrer Softwareentwicklungsprojekte für die Endbenutzer in verschiedenen Phasen mit Hilfe der Automatisierung. ** Continuous Integration & Continuous Deployment ** ist eher eine Philosophie und eine der Best Practices für DevOps -Teams, um kodische Änderungen häufiger und zuverlässig zu liefern.
** Continuous Integration ** ist eine Reihe von Praktiken, die Entwicklungsteams dazu ermutigen, häufig Code -to -Versions -Kontroll -Repositorys zu überprüfen. Und für jeden Druck zum Repository können Sie eine Reihe von Skripten erstellen, um Ihre Anwendung automatisch zu erstellen und zu testen. Diese Skripte verringern die Chancen, dass Sie Fehler in Ihrer Anwendung einführen.
** Continuous Deployment ** ist ein Schritt voraus in Ihren CI/CD -Workflows. Es erstellt und testet Ihre Anwendung nicht nur jedes Mal, wenn eine Codeänderung an die Codebasis gedrückt wird, sondern die Anwendung wird auch kontinuierlich auf Ihrem Server bereitgestellt.

## Was sind Github-Aktionen {#Github-Actions}
Im Abschnitt dieses Github Action -Tutorials werden wir wissen, was ** Github -Aktionen ** sind. GitHub -Aktionen sind jedoch eine API für Ursache und Wirkung auf GitHub. Es macht es einfach, alle Ihre Software -Workflows mit CI/CD zu automatisieren. Sie können einen beliebigen Workflow basierend auf jedem Ereignis entwerfen, z. B. (Drücken Sie zu einer Filiale, Zuganfrage usw.), während Github die Ausführung verwaltet. Sie müssen die Handlungen jedoch nicht selbst schreiben. Github hat einen eingebauten Marktplatz, auf dem Menschen von anderen Menschen geschaffene Aktionen finden können, und sie wiederverwenden, wenn er ihren Bedürfnissen entspricht. Github -Aktionen unterstützt Node.js, Python, Java, Ruby, PHP, Go, Rost, .NET und mehr. Erstellen, testen und bereitstellen Anwendungen in Ihrer Sprache Ihrer Wahl.

## yaml syntax {#yaml}
Lassen Sie uns zunächst mit den Syntaxen und Terminologien der ** Github -Aktionen ** vertraut.
  *** Workflow: ** Da die GitHub-Aktion die Einrichtung bietet, um End-to-End-Kontinuierintegration und kontinuierliche Bereitstellung zu erstellen.
  *** Job **: Dieser Begriff bezieht sich auf alle Aufgaben in einem einzigen Workflow. Ein Workflow enthält mehr als einen Job, und es ist erforderlich, dass alle ihre Ausführung abschließen, um ein Fehler zu verhindern.
  *** Schritt: ** Für einen Job muss er alle darin eingebetteten Schritte ausführen.
  *** Aktion: ** Aktion ist die primäre Teilmenge des Schritts und die kleinste Teilmenge des Workflows. Jeder Schritt besteht aus mehreren Aktionen, die erfolgreich ausgeführt werden müssen.
Wie Sie sehen können, sind Workflow, Job, Schritt und Maßnahmen voneinander abhängig, und eine erfolgreiche Ausführung von allem ist für den erfolgreichen Abschluss der CI/CD -Pipeline erforderlich.

## Erstellen Sie einen Workflow {#Workflow}
In einem Softwareentwicklungsprojekt ist eines der Probleme mit der Entwicklungsteams das Format des Quellcode und der Best Practices -Durchsetzung. Dieses Problem ist für die größeren Teams offensichtlicher. Da sie mehr Entwickler betreffen und jeder seinen eigenen Stil des Schreibens von Codes hat. Die Verwendung von Linterpaketen ist also in den Teams sehr häufig. Aber jetzt können Sie mit ** Github -Aktionen ** den Linter jedes Mal durchsetzen, wenn jemand den Code zum Github -Repo drückt.
In diesem Tutorial für GitHub-Aktionen fügen Sie einen Workflow hinzu, der mehrere Codierungssprachen unter Verwendung der Aktion [Github Super-Linter] [9] enthält. Der Workflow verwendet Super-Linter, um Ihren Quellcode jedes Mal zu validieren, wenn ein neues Komitee in Ihr Repository weitergegeben wird.
Erstellen Sie aus Ihrem Repository auf GitHub eine neue Datei im Verzeichnis **. Github/Workflows ** mit dem Namen ** Superlinter.yml ** und kopieren Sie den folgenden Inhalt in sie
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Um Ihren Workflow auszuführen, fordern Sie Änderungen in Ihr Github -Repository an und überschreiten Sie sie. Dieses Push -Ereignis löst den Superlinter -Workflow aus. Und jetzt können Sie die Ergebnisse Ihres Workflows anzeigen, indem Sie auf die Registerkarte der Aktion gehen

{{< figure align=center src="images/actions-tab.png" alt="GitHub Action Tutorial">}}

Klicken Sie in der linken Seitenleiste auf den Workflow, den Sie sehen möchten.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="GitHub Action Workflow">}}

Der Super-L-L-Liege-Workflow, den Sie gerade hinzugefügt haben, werden jedes Mal, wenn Code in Ihr Repository weitergeleitet wird, um Probleme in Ihrem Code zu finden. Ihr Repository kann mehrere Workflows haben, die unterschiedliche Jobs basierend auf verschiedenen Ereignissen auslösen. GitHub -Aktionen können Ihnen helfen, nahezu alle Aspekte Ihrer Anwendungsentwicklungsprozesse zu automatisieren. Dies war nur eine grundlegende Einführung in die Github -Aktionen. Es stehen unzählige [Ressourcen] [10] für eingehende Kenntnisse von Github-Aktionen zur Verfügung, die Sie verwenden können.

## Schlussfolgerung {#Conclusion}
In diesem Tutorial ** Github Actions ** haben wir über ** kontinuierliche Integration und kontinuierliche Bereitstellung ** und ** Was sind Github -Aktionen ** erfahren. Und wir haben auch untersucht, wie wir ** Github -Aktionen ** verwenden können, um einen CI/CD -Workflow zu erstellen. Wir haben einen einfachen Super-L-Linter-Workflow vom GitHub Action Marketplace verwendet, um Inkonsistenzen in unserer Codebasis herauszufinden. In den kommenden Artikeln werden wir die GitHub -Aktionen ausführlicher untersuchen. Darüber hinaus finden Sie andere Blog -Beiträge, die sich mit dem im Abschnitt "Explore" erwähnten ** Versionskontrollsystem ** im Abschnitt "Explore" beziehen.
Schließlich schreibt [containerize.com] [11] ständig Blog -Beiträge zu weiteren Open -Source -Produkten und -Themen. Bitte bleiben Sie mit der Kategorie [Versionskontrollsoftware] [12] in Kontakt, um regelmäßige Updates zu erhalten. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook] [13], [LinkedIn] [14] und [Twitter] [15] folgen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [GitLab Continuous Deployment | Wie funktioniert es?] [16]
  * [Verstehen und lernen Sie Zweige und ziehen Sie Anfragen in Git] [2]
  * [Software für Quellcodeverwaltung | Was ist Git?] [17]
  * [Top 5 Open Source -Versionskontrollsysteme in 2021] [18]
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
