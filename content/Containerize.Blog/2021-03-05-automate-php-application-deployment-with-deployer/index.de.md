---
title: "Automatisieren Sie die PHP -Anwendungsbereitstellung mit Deployer" 
seoTitle: "Automatisieren Sie die PHP -Anwendungsbereitstellung mit Deployer" 
description: "Stellen Sie die PHP -Anwendung mit Open -Source -Bereitstellungswerkzeug bereit und automatisieren Sie Bereitstellungsworkflows. Die einfache Veröffentlichung von Funktionen und Rollback für die frühere Version." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Automatisieren Sie den PHP -Anwendungsbereitstellungsprozess mit dem PHP -Bereitstellungstool. Wir werden lernen, wie der Bereitstellungsbereich eingerichtet wird, und diese zur Bereitstellung von PHP -Anwendungen verwenden." 
url: /de/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Automatisieren Sie den PHP -Anwendungsbereitstellungsprozess mit dem PHP -Bereitstellungstool. Wir werden lernen, wie der Bereitstellungsbereich eingerichtet wird, und diese zur Bereitstellung von PHP -Anwendungen verwenden.

{{< figure align=center src="images/deployer-blog-post.png" alt="PHP -Bereitstellungstool">}}

Nach der Entwicklung ist es ein sehr kritischer Auftrag, Anwendung auf dem Server bereitzustellen. Neue Funktionen und Fehlerbehebungen werden häufig von Teams veröffentlicht. Daher ist es den Teams vorzuziehen, manuelle Arbeiten zu eliminieren und den Prozess der ** Software -Bereitstellung ** zu automatisieren. Es würde es ermöglichen, Software -Teams auf wichtigere Aufgaben zu konzentrieren. Es gibt mehrere ** Open -Source -Bereitstellungs -Tool ** draußen, aber wir werden uns in diesem Tutorial auf ** PHP -Deploymer ** konzentrieren. Wir werden den folgenden Abschnitt in diesem Beitrag abdecken.
  *[** Was ist ein Bereitsteller **][1]
  *[** Installieren des Bereitstellers **][2]
  *[** PHP -Anwendung bereitstellen **][3]
  *[** Schlussfolgerung **][4]

## Was ist ein Bereitsteller {#What}
[** Deployer **][5] ist ein kostenloses und open-Source ** PHP-Bereitstellungswerkzeug **. Es ermöglicht Software-Teams zur Automatisierung von Bereitstellungsworkflows für PHP-basierte Anwendungen. Es ist sehr einfach zu installieren und einfach zu bedienen. Jeder, von Anfänger bis zu Expertenebene, kann es schnell für die Bereitstellung von PHP -Anwendungen verwenden. Deployer verfügt über außerhalb der Box-Rezepte/-Skripts für beliebte PHP-Frameworks, CMS und Einkaufswagen-Software. Darüber hinaus können Sie mit diesem ** Open -Source -Bereitstellungswerkzeug ** eine Laravel -Bereitstellung ** ausführen. Der Entwickler kann integrierte Rezepte für seine Projekte verwenden und sie zur Bereitstellung verwenden. Darüber hinaus können Sie einfach das Installations-/Bereitstellen -Skript mit dem Assistenten ** PHP Deployer ** erstellen. Darüber hinaus bietet dieses ** kostenlose Bereitstellungstool ** hervorragende Funktionen wie Zero-DownTime-Bereitstellungen, Rollback für die vorherige Version, SSH, parallele Ausführung und viele mehr.

## Installieren des Bereitstellers {#installing}
  * Der Einsatz hängt vom PHP ab. Sie sollten sicherstellen, dass PHP auf Ihrem Server ausgeführt wird. Sie können jedoch den folgenden Befehl verwenden, um PHP auf Ubuntu zu installieren.
```
sudo apt-get install php
```
  * Führen Sie die folgenden Befehle nacheinander aus, um den Bereitstellungseinsatz zu installieren.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## PHP -Anwendung {#deploy} bereitstellen
Befolgen Sie die Schritt-für-Schritt-Richtlinien, um die PHP-Anwendung ** mit Deployer bereitzustellen.
  * Erstellen Sie ein Verzeichnis für den Einsatz und navigieren Sie zum neu geschaffenen Verzeichnis.
```
sudo mkdir deployer
cd deployer
```
  * Führen Sie den folgenden Befehl aus, um ein Installationsskript zu generieren
```
dep init
```
  * Sie werden mit dem folgenden Bildschirm aufgefordert. Dies ist ein Deployer -Assistent zum Erstellen von grundlegendem Installationsskript.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Zuerst müssen Sie den Projekttyp auswählen, indem Sie eine Nummer eingeben. Sie können 0 eingeben, wenn Sie sich über den Projekttyp nicht sicher sind oder sich nur mit dem Bereitstellen kennenlernen.
  * Zweitens müssen Sie einen Git -Repository -Pfad bereitstellen. Es ist ein optionaler Schritt, Sie können ihn überspringen und später einen Pfad hinzufügen.
  * Im letzten Schritt können Sie Informationen an die Deployer -Community weitergeben, indem Sie Ja oder Nein eingeben, um sie zu überspringen.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
Sie müssen die folgenden Variablen für die Bereitstellung Ihrer PHP -Anwendung ändern.
  *** set (‘application’, "my_project"); ** - Anwendungsname festlegen.
  *** set ("repository", "); **-Setzen Sie den Git-Repository-Pfad wie" git@github.com: Masood/First-App-with-Deployer.git ". Sie müssen den Bereitstellungsschlüssel auf Ihr GitHub -Repository einstellen. Sie können nach dem Erstellen eines SSH -Schlüssels am Server suchen, wenn Sie damit nicht vertraut sind.
  *** Host ("project.com")
    -> set ("Deploy_path", "~/{{application}}"); ** -Setzen Sie den Projektnamen und definieren Sie den Pfad, wo Sie Dateien für Ihre Anwendung speichern möchten. Es würde aussehen wie/var/www/html/Deployer.
Führen Sie schließlich den folgenden Befehl aus, um Ihre PHP -Anwendung bereitzustellen.
```
dep deployer
```
Wenn Sie Probleme mit der neuen Version finden und Änderungen rollen möchten. Sie können dies tun, indem Sie einfach den folgenden Befehl ausführen.
```
dep rollback
```

## Schlussfolgerung {#Conclusion}
Wir haben über den Einsatz und die Installation in diesem Tutorial besprochen. Darüber hinaus haben wir eine vollständige Richtlinie für die Bereitstellung von PHP -basierten Anwendung aus GitHub Repository erstellt. Hoffentlich hilft Ihnen dieser Blog -Beitrag dabei, ** PHP -Anwendung ** mit Deployer bereitzustellen. Darüber hinaus werden wir mehr über dieses ** PHP -Bereitstellungswerkzeug ** in den kommenden Tutorials schreiben.
Schließlich befindet sich [** Containerize.com **][6] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher bleiben Sie mit dieser Kategorie [** Bereitstellungswerkzeuge **][7] in Kontakt, um die neuesten Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  *[** Deploymer **][8]
  *[** Jenkins **][9]
  *[** Drohne **][10]
  *[** Capistrano **][11]
  *[** Rancher **][12]
  *[** Concourse **][13]
  *[** Ansible **][14]
  *[** GOCD **][15]
  *[** Top 5 Open Source -Bereitstellungswerkzeuge in 2021 **][16]
  *[** Kontinuierliche Integration und kontinuierliche Bereitstellung vom Quellungssteuerserver **][17]

  
[1]: #What
[2]: #Installing
[3]: #Deploy
[4]: #Conclusion
[5]: https://deployer.org/
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/deployment-tools/
[8]: https://products.containerize.com/deployment-tools/deployer
[9]: https://products.containerize.com/deployment-tools/jenkins/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/capistrano/
[12]: https://products.containerize.com/deployment-tools/rancher/
[13]: https://products.containerize.com/deployment-tools/concourse/
[14]: https://products.containerize.com/deployment-tools/ansible/
[15]: https://products.containerize.com/deployment-tools/gocd/
[16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
