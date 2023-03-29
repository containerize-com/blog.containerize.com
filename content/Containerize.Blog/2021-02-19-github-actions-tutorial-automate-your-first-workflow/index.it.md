---
title: "GitHub Actions Tutorial | Automatizza il tuo primo flusso di lavoro" 
seoTitle: "GitHub Actions Tutorial | Automatizza il tuo primo flusso di lavoro" 
description: "Segui questo tutorial sulle azioni GitHub per esplorare che come possiamo utilizzare le azioni GitHub per automatizzare ed eseguire i nostri flussi di lavoro di sviluppo software dal nostro repository." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub ha introdotto azioni GitHub che consentono di impostare l'integrazione continua e l'amplificatore; Distribuzione continua utilizzando un file di configurazione nel tuo repository Github." 
url: /it/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub ha introdotto le azioni GitHub che consentono di impostare l'integrazione continua e la distribuzione continua utilizzando un file di configurazione nel proprio Repo GitHub.

{{< figure align=center src="images/github-actions-workflows.png" alt="GitHub Actions Tutorial">}}


Panoramica ##
Uno dei modi migliori per aumentare la produttività in un progetto software è automatizzare qualsiasi manuale o ripetitivo. E potresti essere sorpreso da quanto sia facile l'automazione da implementare quando usi uno strumento fantastico come **GitHub Actions** . Dagli ultimi articoli, ho scritto su [git][1], [controllo della versione][1] e [automazione dei flussi di lavoro di sviluppo del software][2] e su [integrazione continua e consegna continua][3 ]. Quindi spero che ormai sei ben consapevole dei repository e di come usarli.
Nel tutorial di oggi **GitHub Actions** , esploreremo le azioni GitHub e come puoi usarlo per l'automazione delle applicazioni, la personalizzazione e per eseguire i flussi di lavoro di sviluppo software nel tuo repository. Quindi iniziamo
* **[Recensione dei flussi di lavoro CI/CD][4]** 
* **[Quali sono le azioni GitHub][5]** 
* **[Comprensione della sintassi YAML][6]** 
* **[Creazione del tuo primo flusso di lavoro][7]** 
* **[Conclusione][8]** 

## Flussi di lavoro CI/CD {#cicd}

CI/CD è un metodo di frequenti distribuzioni dei progetti di sviluppo del software agli utenti finali in diverse fasi con l'aiuto dell'automazione. **Integrazione continua e distribuzione continua** è più una filosofia e una delle migliori pratiche per i team DevOps da implementare, per la fornitura di modifiche al codice più frequentemente e in modo affidabile.
**Integrazione continua** E, per ogni spinta al repository, è possibile creare una serie di script per creare e testare automaticamente l'applicazione. Questi script aiutano a ridurre le possibilità di introdurre errori nell'applicazione.
**La distribuzione continua** è un passo avanti nei flussi di lavoro CI/CD. Non solo ha creato e testato l'applicazione ogni volta che una modifica del codice viene spinta alla base di codice, ma l'applicazione viene anche distribuita continuamente sul server.

## Quali sono le azioni GitHub {#github-actions}

Nella sezione di questo tutorial sulle azioni GitHub, sapremo sapere cosa sono **GitHub Actions** . Tuttavia, le azioni di GitHub sono un'API per causa ed effetto su GitHub. Rende facile automatizzare tutti i flussi di lavoro software, ora con CI/CD. È possibile progettare qualsiasi flusso di lavoro, in base a qualsiasi evento, ad es. Tuttavia, non è necessario scrivere le azioni da solo. GitHub ha un mercato integrato in cui le persone possono trovare azioni create da altre persone e riutilizzarle se si adatta alle loro esigenze. GitHub Actions supporta Node.js, Python, Java, Ruby, Php, Go, Rust, .Net e altro ancora. Costruisci, testare e distribuire applicazioni nella tua lingua preferita.

## Sintassi di Yaml {#yaml}

Acquisiamo per la prima volta le sintassi e le terminologie delle azioni **github** .
* **Flusso di lavoro:** Poiché l'azione GitHub fornisce la struttura per creare end-to-end**Integrazione continua e distribuzione continua** Capacità, questo termine si riferisce a quel punto quando il flusso inizia a eseguire dallo strumento CI.
* **Job** : questo termine si riferisce a tutte le attività in un singolo flusso di lavoro. Un flusso di lavoro contiene più di un lavoro ed è necessario per tutti loro di completare la loro esecuzione per prevenire il fallimento.
* **Passaggio:**  Per un lavoro per completare la sua esecuzione, deve completare tutti i passaggi incorporati in essa.
* **Azione:**  L'azione è il sottoinsieme principale del passaggio e il più piccolo sottoinsieme di flusso di lavoro. Ogni passo è costituito da più azioni che devono essere eseguite correttamente.
Come puoi vedere il flusso di lavoro, il lavoro, il passo e l'azione sono interdipendenti e l'esecuzione riuscita di tutto è necessaria per il completamento con successo della pipeline CI/CD.

## Crea un flusso di lavoro {#workflow}

In un progetto di sviluppo del software, uno dei team di sviluppo dei problemi che affrontano è il formato del codice sorgente e l'applicazione delle migliori pratiche. Questo problema è più ovvio per le squadre più grandi. In quanto coinvolgono più sviluppatori e ognuno ha il proprio stile di codici di scrittura. Quindi l'uso di pacchetti Linter è molto comune tra i team. Ma ora con **GitHub Actions** , puoi effettivamente far rispettare il Linter ogni volta che qualcuno spinge il codice al Repo di Github.
In questo tutorial sulle azioni GitHub, aggiungerai un flusso di lavoro che lancia più linguaggi di codifica usando l'azione [GitHub Super-Linter][9]. Il flusso di lavoro utilizza Super-Linter per convalidare il codice sorgente ogni volta che un nuovo commit viene spinto al tuo repository.
Dal tuo repository su GitHub, crea un nuovo file nella directory **GitHub/Workflows denominata** SuperLinter.yml**e copia i seguenti contenuti in esso
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
Per eseguire il flusso di lavoro, commetti e spingi le modifiche al repository GitHub. Questo evento push attiverà il flusso di lavoro SuperLinter. E ora puoi visualizzare i risultati del flusso di lavoro andando nella scheda dell'azione

{{< figure align=center src="images/actions-tab.png" alt="GitHub Actions Tutorial">}}

Nella barra laterale sinistra, fai clic sul flusso di lavoro che si desidera vedere.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Flusso di lavoro delle azioni GitHub">}}

Il flusso di lavoro Super-Linter che hai appena aggiunto esegue ogni codice temporale viene spinto nel tuo repository per aiutarti a trovare problemi nel tuo codice. Il tuo repository può avere più flussi di lavoro che attivano lavori diversi in base a eventi diversi. Le azioni di GitHub possono aiutarti ad automatizzare quasi ogni aspetto dei processi di sviluppo dell'applicazione. Questa è stata solo un'introduzione di base alle azioni di GitHub. Ci sono tonnellate di [risorse][10] disponibili per una conoscenza approfondita delle azioni GitHub, che puoi usare.

## Conclusione {#conclusion}

In questo **GitHub Actions Tutorial**, abbiamo appreso **Integrazione continua e distribuzione continua** e **Quali sono le azioni GitHub** . E abbiamo anche esplorato come possiamo usare**GitHub Actions** per costruire un flusso di lavoro CI/CD. Abbiamo usato un semplice flusso di lavoro super-linter dal mercato delle azioni GitHub, per scoprire eventuali incoerenze nella nostra base di codice. Nei prossimi articoli, esploreremo le azioni di GitHub in modo più approfondito. Inoltre, è possibile trovare altri post sul blog relativi al sistema di controllo della versione****menzionato nella sezione "Esplora" di seguito.
Infine, [containerize.com][11] scrive continuamente post di blog su ulteriori prodotti e argomenti open source. Pertanto, rimani in contatto con la categoria [Software di controllo della versione][12] per aggiornamenti regolari. Inoltre, puoi seguirci sui nostri account di social media [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [Distribuzione continua di Gitlab | Come funziona?][16]
  * [Comprendi e impara i rami e tira le richieste in git][2]
  * [Software di gestione del codice sorgente | Cos'è git?][17]
  * [Top 5 Sistemi di controllo della versione open source nel 2021][18]



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
