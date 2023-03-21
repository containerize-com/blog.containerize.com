---
title: "Cos'è la multitenancy? | Perché un approccio multi-tenant?" 
seoTitle: "Cos'è la multitenancy? | Perché un approccio multi-tenant?" 
description: "Cos'è la multitenancy? Segui questo post sul blog per apprendere il concetto reale dietro multi-tenancy e iniziare a costruire applicazioni multi-tenant scalabili." 
date: Tue, 21 Feb 2023 20:10:22 +0000
author: muhammadmustafa
summary: "Progetta un'architettura di applicazioni multi-tenant e soddisfare in modo efficiente i requisiti dell'utente. Esploriamo come la multitenancy ti consente di creare software scalabile." 
url: /it/what-is-multitenancy-why-a-multi-tenant-approach-2/
categories: ['Programming']
---

## Progetta un'architettura per applicazioni multi-tenant e soddisfa i requisiti dell'utente in modo efficiente. Esploriamo come la multitenancy ti consente di creare software scalabile.

{{< figure align=center src="images/What-is-Multitenancy-Why-a-multi-tenant-Approach.png" alt="What is Multitenancy? ">}}


Panoramica ##
Benvenuti in un altro post sul blog nella categoria [programmazione][1]. Discuteremo di un'architettura di applicazioni multi-tenant. In effetti, [containerize.com][2] ha una vasta gamma di app multi-tenant nel suo stack di prodotti open source. Le applicazioni multi-tenant open source includono [Form.io][3], [Botpress][4] e altro ancora. Inoltre, è disponibile [documentazione][5] per quanto riguarda l'architettura, la distribuzione, lo sviluppo e l'utilizzo di questi software open source. Il motivo alla base della scrittura di questo articolo è quello di comprendere il concetto alla base della multi-tenancy nello sviluppo del software. Quindi, scopriamo  **cos'è la multitenancy?**  Attraverseremo anche i pro e i contro della multitenancy e l'architettura a tenant multi-tenant vs singolo.
I seguenti punti saranno discussi in questo post:
  * [Cos'è la multitenancy? Multi-tenant vs single-tenant][6]
  * [Tipi di architettura per applicazioni multi-tenant][7]
  * [Vantaggi aziendali dell'app multi-tenant][8]
  * [Svantaggi in multi-tenancy][9]

## Che cos'è la multitenancy? Multi-tenant vs single-tenant   {#what-is-multitenancy-multi-tenant-vs-single-tenant}
La multitenancy si riferisce a una singola istanza del server che serve più inquilini di frontiera particolarmente noti. Ogni volta che ti imbatti in un software multi-tenant, dice al tuo cervello che questo software esegue una singola istanza di un server condiviso e più inquilini (client) sono collegati a questa istanza con diversi marchi.
Ad esempio, il software creato per un'università serve dipartimenti diversi con diversi marchi front-end e dati di programma. Fondamentalmente, esiste un'unica istanza del server che esegue e serve tutti gli inquilini. Inoltre, esiste una separazione dei dati e la privacy dei dati tra tutti gli inquilini. Inoltre, ogni inquilino ha la sua logica aziendale e recupera e memorizza i suoi dati in un'unica, ma privata/isolata.

{{< figure align=center src="images/multi-tenant-1.png" alt="Architettura multi-tenant">}}

Ora, diamo un'occhiata rapida all'architettura a tenant. Nell'architettura a tenant singolo, esiste un'istanza del server per inquilino. Ancora una volta, prendiamo un esempio di software universitario. L'approccio singolo-inquilino si riferisce a un'istanza del server per dipartimento e il numero di istanze dipende dal numero di dipartimenti (inquilini).

{{< figure align=center src="images/single-tenant-2.png" alt="Architettura a tenant singolo">}}


## Tipi di architettura dell'applicazione multi-tenant   {#tipi-di-multi-tenant-applicazione-architecture}
Finora, hai una comprensione della multi-tenancy e ora passeremo attraverso i suoi vari tipi.
**Un database-Un'istanza dell'app**: questo approccio è abbastanza popolare ed è stato ampiamente utilizzato per creare app multi-tenant. Secondo questo approccio, esiste un'istanza dell'applicazione in esecuzione con un singolo database. Inoltre, esiste uno schema condiviso e i dati dell'inquilino vengono archiviati in un'unica posizione contro il loro ID univoco.
**Database multiplo-Un'istanza dell'app:** In questa architettura dell'applicazione multi-tenant, solo un'istanza dell'applicazione viene eseguita con più database. Ogni inquilino ha il proprio schema di database in cui tutte le informazioni vengono salvate per ogni inquilino separatamente.
**Database multiplo: più istanze di app**: il terzo approccio si riferisce all'esecuzione di più istanze del server insieme a più database. Non c'è nulla di condiviso e ogni inquilino ha un completo isolamento e non c'è dipendenza tra gli inquilini.

## Business Beneficia
In questa sezione, attraverseremo alcuni importanti benefici di optare per la multitenancy. Anche se, possiamo andare a lungo a discutere dei vantaggi ma vediamo i seguenti punti:
**Scalabilità**: è facile ridimensionare un'architettura multi-tenant. Puoi scalare in orizzontale o verticalmente indipendentemente dal tipo che hai scelto.
**COSTRUITTO**: optare per la multitenancy risparmia i costi operativi. Esistono risorse condivise, quindi è sempre conveniente ampliare le risorse.
**Efficienza e flessibilità**: in un ambiente multitenant, si ottiene efficienza nello sviluppo e nella distribuzione. Ad esempio, è possibile eseguire uno script su uno schema di database condiviso per aggiornare tutti gli inquilini.
**Una migliore gestione delle risorse**: l'aggiunta e la rimozione delle risorse è semplice. Inoltre, questa architettura offre infrastrutture migliorate e ben gestite. Inoltre, ogni inquilino è privato e sicuro e ha accesso a un database condiviso/non condiviso.

## svantaggi in multi-tenancy   {#svantaggi-in-Multi-Tenancy}
Lo scopo di questo post sul blog è quello di dare un discreto senso di  **architettura multi-tenant.**  Pertanto, esploriamo alcuni dei contro allegati alla multi-tenancy.
**Meccanismo di autenticazione complesso**: a causa della natura condivisa dell'allocazione delle risorse nella multitenancy, ci sono protocolli rigorosi per i punti di accesso ai dati.
**Breakown del server:** È un punto importante da considerare durante la selezione dell'architettura delle applicazioni multi-tenant. Tutti gli inquilini diventano non funzionali ogni volta che il server è in calo per qualsiasi motivo.
**Rischio di privacy**: In un'architettura multi-tenant, c'è un alto rischio di violazione della sicurezza. In effetti, i dati di tutti gli inquilini sono archiviati in un database condiviso in modo che qualsiasi invasione di terze parti possa comportare la corruzione o il furto dei dati.

## Conclusione
Stiamo terminando questo post sul blog qui. Questo articolo ha la risposta alle tue domande come **Che cos'è la multitenancy **? Inoltre, abbiamo anche esplorato l'infrastruttura ** multi-tenant vs single-tenant** . Inoltre, questa guida ti aiuterà quando si sceglie l'architettura delle applicazioni multi-tenant o un singolo inquilino. Soprattutto, la multitenancy è la prima scelta se stai costruendo un SaaS. Ci sono altri post di blog interessanti che potresti trovare nella sezione "Vedi anche" che ti darà le ultime intuizioni nel mondo della tecnologia.
Infine, [containerize.com][2] scrive continuamente post sul blog su ulteriori prodotti e argomenti open source. Inoltre, puoi seguirci sui nostri account di social media [Facebook][10], [LinkedIn][11] e [Twitter][12].

## Fai una domanda
Puoi farci sapere delle tue domande o domande sul nostro [forum][13].

## FAQ
**Cos'è il multi-tenant con esempio?**
Visita questo [link][6] per sapere cos'è la multitenancy. Ci sono dettagli insieme ad esempi.
**Qual è il significato dell'architettura multi-tenant?**
A  **Architettura dell'applicazione multi-tenant**  indica una singola istanza di un server serve più inquilini (client). Si prega di visitare questo [link][7] per ulteriori dettagli.

## Guarda anche
  * [Cos'è AI generativo | Intelligenza artificiale generativa][14]
  * [Come integrare CHATGPT con fogli Google][15]
  * [Come usare CHATGPT in VSCode | VScode Extension Code GPT][16]
  * [Cos'è Openai Chatbot GPT-3 | CHATGPT una rivoluzione AI][17]
  * [Un'introduzione all'intelligenza artificiale | Cos'è AI?][18]

  
[1]: https://blog.containerize.com/category/programming/
[2]: https://www.containerize.com/
[3]: https://products.containerize.com/form/formio/
[4]: https://products.containerize.com/live-chat/botpress/
[5]: https://products.containerize.com/
[6]: #What-is-Multitenancy-Multi-Tenant-vs-Single-Tenant
[7]: #Types-of-Multi-Tenant-Application-Architecture
[8]: #Business-Benefits-of-Multi-Tenant-App
[9]: #Drawbacks-in-Multi-Tenancy
[10]: https://web.facebook.com/containerize
[11]: https://www.linkedin.com/company/containerize/
[12]: https://twitter.com/containerize_co
[13]: https://forum.containerize.com/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
