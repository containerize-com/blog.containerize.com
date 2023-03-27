---
title: "Automatizza la distribuzione dell'applicazione PHP con il distributore" 
seoTitle: "Automatizza la distribuzione dell'applicazione PHP con il distributore" 
description: "Distribuire l'applicazione PHP con lo strumento di distribuzione open source e automatizzare i flussi di lavoro di distribuzione. Rilasciare facilmente funzionalità e rollback alla versione precedente." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Automatizzare il processo di distribuzione dell'applicazione PHP con lo strumento di distribuzione PHP. Impareremo come configurare il distributore e utilizzarlo per distribuire l'applicazione PHP." 
url: /it/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Automatizza il processo di distribuzione dell'applicazione PHP con lo strumento di distribuzione PHP. Impareremo come configurare il distributore e utilizzarlo per distribuire l'applicazione PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Strumento di distribuzione PHP">}}

È un lavoro molto fondamentale distribuire l'applicazione sul server dopo lo sviluppo. Nuove funzionalità e correzioni di bug vengono spesso rilasciate dai team. Quindi, è preferibile per i team eliminare il lavoro manuale e automatizzare il processo  **Distribuzione del software** . Consentirebbe ai team software di concentrarsi su compiti più importanti. Esistono diversi  **strumento di distribuzione open source**  là fuori, ma ci concentreremo su **PHP Deployer**  in questo tutorial. Copriremo la sezione seguente in questo post.
* [  **What Is Deployer**  ][1]
* [  **Installazione di Deployer**  ][2]
* [  **Distribuisci applicazione PHP**  ][3]
* [  **conclusione**  ][4]

## Cosa è distribuito {#What}

[  **Deployer** ][5] è uno strumento di distribuzione PHP gratuito e aperto*  ***. Consente ai team software di automatizzare i flussi di lavoro di distribuzione per applicazioni basate su PHP. È molto semplice da installare e facile da usare. Chiunque, da principiante all'esperienza a livello di esperti, può utilizzarlo rapidamente per la distribuzione di applicazioni PHP. Deployer viene fornito con ricette/script fuori box per famosi framework PHP, CMS e software del carrello della spesa. Inoltre, puoi fare**  Laravel Deployment  **con questo**  Strumento di distribuzione open source  **. Lo sviluppatore può utilizzare ricette integrate per i loro progetti e utilizzarle per la distribuzione. Inoltre, è possibile creare facilmente lo script di installazione/distribuzione con la procedura guidata**  PHP Disployer **. Inoltre, questo**  strumento di distribuzione gratuito**offre funzionalità eccellenti come distribuzioni a tempo zero, rollback alla versione precedente, SSH, esecuzione parallela e molti altri.

## Installazione di Deployer {#Installing}

  * Deployer dipende da PHP. Dovresti assicurarti che PHP sia in esecuzione sul tuo server. Tuttavia, è possibile utilizzare il comando di seguito per installare PHP su Ubuntu.
```
sudo apt-get install php
```
  * Esegui comandi sotto uno per uno per installare Deployer.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## Distribuire l'applicazione PHP {#Deploy}

Segui le linee guida passo-passo per  **distribuire l'applicazione PHP**  con il distributore.
  * Crea una directory per il distributore e vai alla directory appena creata.
```
sudo mkdir deployer
cd deployer
```
  * Esegui il comando seguente per generare uno script di installazione
```
dep init
```
  * Ti verrà richiesto la schermata seguente. Questa è una procedura guidata distribuita per creare script di installazione di base.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Innanzitutto, è necessario selezionare il tipo di progetto inserendo un numero. Puoi inserire 0, se non sei sicuro del tipo di progetto o semplicemente acquisire familiarità con Deployer.
  * In secondo luogo, è necessario fornire un percorso del repository Git. È un passaggio opzionale, puoi saltarlo e aggiungere un percorso in seguito.
  * Nell'ultimo passaggio, è possibile condividere informazioni con la comunità distribuita selezionando sì o inserire NO per saltarla.
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
È necessario modificare le seguenti variabili per la distribuzione dell'applicazione PHP.
*  **Set ("Applicazione", "My_Project");**  - Imposta il nome dell'applicazione.
*  **set ("repository", ");**  -Imposta percorso del repository git come" git@github.com: masood/prima-app-with-deployer.git ". È necessario impostare la chiave di distribuzione sul repository GitHub. Puoi cercare come creare una chiave SSH sul server, se non ne hai familiarità.
***host ("progetto.com")
    -> Set ("Deploy_Path", "~/{{Application}}");**-Imposta il nome del progetto e definisce il percorso in cui si desidera archiviare file per l'applicazione. Sarebbe come/var/www/html/depolayer.
Infine, esegui il comando seguente per distribuire l'applicazione PHP.
```
dep deployer
```
Se trovi problemi con la nuova versione e desideri il rollback. Puoi farlo semplicemente eseguendo il comando seguente.
```
dep rollback
```

## Conclusione {#Conclusione}

Abbiamo discusso di Deployer e su come installarlo in questo tutorial. Inoltre, abbiamo creato linee guida complete per la distribuzione dell'applicazione basata su PHP dal repository GitHub. Spero che questo post sul blog ti aiuti ad avviare  **Distribuisci applicazione PHP** con Deployer. Inoltre, scriveremo di più su questo **strumento di distribuzione PHP**  nei prossimi tutorial.
Infine, [  **Containerize.com** ][6] è in un processo coerente di scrittura di post sul blog su altri ultimi prodotti open source. Pertanto, resta in contatto con questa categoria [ **Strumenti di distribuzione**  ][7] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
* [  **Deployer**  ][8]
* [  **Jenkins**  ][9]
* [  **drone**  ][10]
* [  **Capistrano**  ][11]
* [  **rancher**  ][12]
* [  **Concourse**  ][13]
* [  **ansible**  ][14]
* [  **GOCD**  ][15]
* [  **Top 5 Strumenti di distribuzione open source nel 2021**  ][16]
* [  **Integrazione continua e distribuzione continua dal server di controllo sorgente**  ][17]



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
