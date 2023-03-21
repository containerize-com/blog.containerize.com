---
title: "Comprendi e impara i rami e tira le richieste in Git" 
seoTitle: "Comprendi e impara i rami e tira le richieste in Git" 
description: "Git è uno dei sistemi di controllo della versione più popolari. In questa ewe Articl capirà come utilizzare le filiali GIT e le richieste di tiro." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Git Branch è il componente fondamentale del sistema di controllo della versione GIT. Esploreremo diversi modelli di ramificazione in questo tutorial" 
url: /it/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## Git Branch è il componente fondamentale del sistema di controllo della versione GIT. Esploreremo diversi modelli di ramificazione in questo tutorial

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Git pull richiede filiali">}}

Nel nostro [ultimo articolo][1], abbiamo appreso le basi dei sistemi di controllo GIT e della versione. Abbiamo attraversato passo dopo passo e abbiamo imparato a impostare un repository Git. Inoltre, abbiamo imparato come aggiungere modifiche a un ramo e ripristinarle nel caso in cui tu voglia annullare le modifiche. Ora che comprendiamo le basi dei sistemi di controllo della versione, in particolare, Git. Quindi, in questo post sul blog, passeremo a discutere su come utilizzare le filiali GIT e richiedere richieste. Impareremo a conoscere diversi flussi di lavoro. Quindi iniziamo!
  * **[Quali sono i rami git][2]**
  * **[Crea / modifica i rami GIT][3]**
  * **[Cos'è una richiesta di pull][4]**
  * **[Modelli di ramificazione GIT popolari][5]**
  *[ **conclusione** ][6]

## Cosa sono le filiali git   {#branch}

{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="rami git">}}

Parliamo di filiali e perché abbiamo bisogno di filiali e quali sono le strategie di ramificazione che possiamo usare per lavorare in modo efficiente con il nostro codice. Come suggerisce il nome un ramo **** rappresenta una linea di sviluppo indipendente da una radice.
Quando si crea un repository, fondamentalmente si crea anche un ramo, che possiamo chiamare un ramo master (o predefinito). Possiamo commettere modifiche al nostro ramo principale. Ma nel caso in cui devi lavorare su una funzione e non vuoi separare il tuo codice dal ramo principale. Quindi, è qui che i rami ti aiutano. Ti hanno lasciato diramarsi e poi unire in seguito.

## Crea / Modifica i rami GIT   {#Create}
```
git branch
```
Il comando ti consente di creare, elencare, rinominare ed eliminare le filiali. Non ti consente di passare da un ramo, per questo, dobbiamo usare il comando Git Checkout. O se si desidera unire le modifiche a una filiale, devi usare il comando  **Git Munge** .
È importante capire che le filiali sono solo suggerimenti per commettere. Quando crei un ramo, tutto ciò che Git deve fare è creare un nuovo puntatore, non cambia il repository in nessun altro modo.
Usa il comando seguente per creare una filiale
```
git branch <branch-name>
```
Una volta che hai finito di lavorare su una filiale e l'hai fusa nella base del codice principale, sei libero di eliminare la filiale senza perdere alcuna cronologia utilizzando il comando seguente
```
git branch -d <branch-name>
```

## Cos'è una richiesta pull   {#pull}
Una richiesta pull è un modo per inviare un contributo a un progetto software utilizzando un sistema di controllo della versione come GIT. Gli sviluppatori utilizzano richieste pull per proporre modifiche a una base di codice. Una volta aperta una richiesta di pull, è possibile discutere e rivedere i potenziali cambiamenti con i collaboratori e aggiungere commit di follow-up prima che le modifiche vengano unite nel ramo di base.
Quando uno sviluppatore apre una richiesta di pull, tutto ciò che sta facendo è richiedere a un altro sviluppatore, estrae una filiale dal suo repository nel loro repository. Ciò significa che deve fornire 4 valori di input per creare una richiesta pull: il repository di origine, il ramo di origine, il repository di destinazione e il ramo di destinazione.

## modelli di ramificazione popolari   {#model}
Esistono numerosi flussi di lavoro di ramificazione che sono in uso dalla comunità degli sviluppatori in tutto il mondo. Ma discuteremo dei tre modelli di ramificazione più popolari uno per uno

### flusso git
Gitflow Workflow è un flusso di lavoro Git che aiuta con lo sviluppo del software continuo e l'implementazione di pratiche DevOps. Il flusso Git è il flusso di lavoro più noto in questo elenco. È stato creato da [Vincent Driessen nel 2010][7] ed è basato su due rami principali con una vita infinita, insieme ad altri rami di supporto come caratteristiche-\*, hotfix-\* che poi si fondono nella filiale di sviluppo come individuo Gli articoli sono completati.
  * **Master**  - Questo ramo contiene codice di produzione. Tutto il codice di sviluppo viene fuso nel ramo principale una volta pronto per essere spinto alla produzione.
  * **Sviluppo** -Questo ramo contiene codice di pre-produzione. Quando le caratteristiche sono finite, si uniscono allo sviluppo.
Gitflow è ideale per progetti che hanno un ciclo di rilascio programmato. Tuttavia, la storia di Git diventa illeggibile.

### flusso GitHub
Il flusso GitHub è un flusso di lavoro leggero. È stato creato da [GitHub][8] nel 2011 e si concentra principalmente sul modello Agile, in cui non aspetti un ciclo di rilascio. Invece, si spinge le modifiche alla produzione su base giornaliera man mano che le funzionalità vengono complete.
GitHub Flow segue i seguenti principali:
  * Qualsiasi cosa nella filiale "master" è distribuibile.
  * Per lavorare su qualcosa di nuovo, crea un ramo separato di Off Master con un nome di descrizione, ad esempio "Image-Upload"
  * Impegnati a quella filiale a livello locale e regolarmente spingi il tuo lavoro sul ramo dello stesso nome sul server.
  * Quando hai bisogno di feedback o aiuto, oppure pensi che il ramo sia pronto per la fusione, apri una [richiesta pull][4]
  * Dopo aver recensito e firmato sulla funzione, puoi unire il maestro
  * Una volta unito e spinto a "Master", può essere distribuito in produzione.

### flusso gitlab
Il flusso Gitlab è un flusso di lavoro creato da Gitlab nel 2014. Gitlab Flow è un'alternativa più semplice a Gitflow e combina lo sviluppo guidato dalle funzionalità e le filiali delle caratteristiche con il monitoraggio dei problemi. La principale differenza tra il flusso di Gitlab e il flusso GitHub è l'uso di rami ambientali.
Gli sviluppatori creano un ramo  **Sviluppa**  e rendono il valore predefinito, mentre Gitlab Flow funziona immediatamente con il ramo "principale". Il flusso Gitlab incorpora più rami di pre-produzione. E quelli possono essere usati per testare le cose a diversi livelli. ad esempio dal ramo di prova all'accettazione e quindi dall'accettazione alla produzione.

## conclusioni   {#conclusion}
In questo articolo, abbiamo appreso le filiali GIT e le richieste di tiro. Abbiamo studiato l'importanza delle richieste pull e di come possono essere utilizzate in vari flussi di lavoro Git. Abbiamo anche esplorato brevemente diversi modelli di ramificazione GIT.

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
