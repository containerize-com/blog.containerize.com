---
title: "Software di gestione del codice sorgente | Cos'è Git?" 
seoTitle: "Software di gestione del codice sorgente | Cos'è Git?" 
description: "Cos'è Git? Git è un software di gestione del codice sorgente gratuito che consente di registrare, rivedere le modifiche ai file di origine e gestire i progetti in modo efficiente." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "In questo articolo, esploreremo ciò che è git & amp; Come funziona Git? GIT è un sistema di controllo della versione progettato per gestire il codice sorgente, traccia e amp; Versioni di registro." 
url: /it/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## In questo articolo, esploreremo cos'è Git e come funziona Git? Git è un sistema di controllo della versione progettato per gestire le versioni di codice sorgente, traccia e registro.

{{< figure align=center src="images/version-control-banner.png" alt="Software di gestione del codice sorgente">}}


Panoramica ##
Immagina come sviluppatore di software che lavora su un progetto. Hai più di una persona che ci lavora. E c'è un singolo file contenente il codice sorgente. Dato che tutti apportano modifiche al codice, avranno versioni diverse del file ogni volta che apportano una modifica. Quindi, ora come gestiremo diverse versioni dello stesso file? È qui che entra in gioco il software di gestione del codice sorgente. Ti aiuta a gestire e unire diverse versioni dello stesso file. E anche lasciarti rintracciare la storia del cambiamento. E puoi sempre essere sicuro di chi ha apportato le modifiche al file e quali sono quelle modifiche.
In questo articolo, apprenderemo il sistema di controllo della versione GIT. Come puoi utilizzarlo per gestire i file di codice sorgente di sviluppo del software o qualsiasi altro file. Quindi iniziamo.
  * **[Cos'è il sistema di controllo della versione][1]**
  * **[cosa è git][2]**
  * **[come funziona git][3]**
  * **[Installa git][4]**
  * **[Impostazione di un repository][5]**
  * **[Salva modifiche al repository][6]**
  * **[Controlla lo stato del repository][7]**
  * **[Ripristina o annulla modifiche][8]**
  * **[conclusione][9]**

## Cos'è il sistema di controllo versione   {#versione-controllo}
Il controllo della versione è un sistema che registra le modifiche in un file o un set di file nel tempo in modo da poter ricordare versioni specifiche in seguito. Se sei uno sviluppatore di software e desideri conservare le versioni del file di codice sorgente, il software di gestione del codice sorgente è una cosa molto utile per te. Ti consente di ripristinare i file selezionati in uno stato precedente, ripristinare l'intero progetto a uno stato precedente, confrontare le modifiche nel tempo, vedere chi ha modificato l'ultima modifica di qualcosa che potrebbe causare un problema, che ha introdotto un problema e quando e altro ancora. L'uso del controllo della versione significa che non devi mai preoccuparti di perdere il lavoro.

## cosa è git   {#git}
Git è un sistema di controllo della versione gratuito e open source progettato per gestire tutto, dai progetti piccoli a molto grandi con velocità ed efficienza. A differenza dei vecchi sistemi di controllo della versione centralizzati come SVN e CVS, il controllo della versione GIT è distribuito. Ogni sviluppatore ha la storia completa del proprio repository di codice a livello locale. Tuttavia, rende il clone iniziale un po 'lento. Ma, dopo ciò, tutti gli commit e altre operazioni sono molto veloci. Git ti consente di avere più filiali locali che possono essere completamente indipendenti l'uno dall'altro.

## come funziona git   {#how}
Usando Git puoi apportare modifiche al repository locale e spingerlo a uno strumento di hosting. Oppure puoi estrarre le modifiche degli altri dallo strumento di hosting alla macchina locale. Ecco una panoramica di base di come funziona il software di gestione del codice sorgente (GIT).
  1. Crea un "repository" con uno strumento di hosting Git (come Github, Gitlab o BitBucket)
  2. Clona il repository sulla macchina locale
  3. Aggiungi un file al repository locale
  4. Salva (commetti) modifiche al repository locale
  5. "Spingi" le modifiche al ramo principale su un hosting remoto
  6. Apporta una modifica al tuo file con uno strumento di hosting Git e commetti
  7. "Tira" le modifiche alla macchina locale
  8. Crea una "filiale" (versione), apporta una modifica, commetti la modifica
  9. Apri una "richiesta pull" (proponi modifiche al ramo principale)
 10. "Unisci" il tuo ramo al ramo principale

## Installa git   {#install}
Esistono diversi metodi disponibili per l'installazione di Git sul tuo computer. Puoi installarlo come pacchetto o tramite un altro installatore o scaricare il codice sorgente e compilarlo da solo.

### Installazione su Linux
Se si desidera installare gli strumenti GIT di base su Linux tramite un installatore binario, in genere puoi farlo tramite lo strumento di gestione del pacchetto fornito con la tua distribuzione. Per Fedora (o qualsiasi distribuzione basata su RPM strettamente correlata, come RHEL o CENTOS), è possibile utilizzare "DNF"
```
$ sudo dnf install git-all
```
Se hai una distribuzione basata su Debian, come Ubuntu, prova "Apt"
```
$ sudo apt install git-all
```

### Installazione su macOS
Esistono diversi modi per installare Git su un Mac. Il più semplice è probabilmente installare gli strumenti di riga di comando Xcode. Su Mavericks (10.9) o superiore puoi farlo semplicemente cercando di correre  **git**  dal terminale la prima volta.
```
$ git --version
```
Se non lo hai già installato, ti chiederà di installarlo.

## Impostazione di un repository   {#init}
Un repository Git è l'archiviazione virtuale per i file di codice. Ti consente di archiviare diverse versioni del tuo codice, a cui è possibile accedere quando necessario.
Per creare un nuovo repository, utilizzerai il comando **git init **. Git init è un comando una tantum utilizzato durante la configurazione iniziale di un nuovo repository. L'esecuzione di questo comando creerà una nuova sottodirectory .git nella directory di lavoro corrente. Questo creerà anche un nuovo ramo ** master** .

{{< figure align=center src="images/git-init-2.gif" alt="Cosa è git">}}


## Salva modifiche al repository   {#Commit}
Ora che hai un repository inizializzato, puoi commettere modifiche alla versione del file ad esso.

{{< figure align=center src="images/git-add-commit-1.gif" alt="commit git">}}


## Controlla lo stato del repository   {#status}
Il comando **GIT  **visualizza lo stato della directory di lavoro e l'area di gestione temporanea. Ti consente di vedere quali modifiche sono state messe in scena, che non sono state e quali file non vengono tracciati dal software di gestione del codice sorgente (GIT). L'output di stato non mostra alcuna informazione relativa alla cronologia del progetto impegnata. Per questo, è necessario utilizzare il log**   git**.

{{< figure align=center src="images/git-status-2.gif" alt="Software di gestione del codice sorgente">}}

Il registro Git ti mostrerà seguendo l'output
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

## ripristina le modifiche   {#revert}
Puoi usare il comando Git Revert per annullare una modifica che hai già impegnato nel tuo repository. Innanzitutto, usa il comando "Git Log" per ottenere l'elenco dei commit
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
Quindi, decidi quale commit vuoi tornare. E usa il comando Git Revert come sotto
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
Come puoi vedere Git Revert ha creato un nuovo commit che annulla le modifiche apportate nel "secondo commit".

## Conclusione
Ora che hai letto l'intero articolo in cui abbiamo discusso di ciò che è Git e come funziona Git, dovresti essere consapevole del software di gestione del codice sorgente. Qual è lo scopo e perché ne hai bisogno. Abbiamo esplorato come il GIT può aiutarti a gestire il codice sorgente del tuo progetto. E abbiamo anche appreso come utilizzare diversi comandi GIT per inizializzare e repository, salvare le modifiche e come annullare le modifiche. Nei nostri prossimi tutorial, esploreremo di più il git e condivideremo il modo in cui possiamo usare comandi diversi per gestire meglio il tuo codice.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  *[ **Automatizza i flussi di lavoro di sviluppo del software con azioni GitHub** ][10]
  * **[Come impostare una pipeline di distribuzione continua con gitlab ci/cd][11]**
  * **[Comprendi e impara i rami e pull le richieste in git][12]**
  * **[Top 5 Sistemi di controllo della versione open source nel 2021][13]**

  
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
