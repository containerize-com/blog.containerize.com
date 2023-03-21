---
title: "Architettura a base multi-tenancy e contenitori" 
seoTitle: "Architettura a base di tenancy e contenitori" 
description: "Segui questa guida per imparare a ottenere multi-tenancy in un'architettura basata su contenitori. La multi-tenancy di Kubernetes si riferisce a risorse condivise" 
date: 2023-03-01T00:00:00+00:00
author: muhammadmustafa
summary: "Segui questa guida per imparare a ottenere multi-tenancy in un'architettura basata su contenitori. La multi-tenancy di Kubernetes si riferisce a risorse condivise" 
url: /it/kubernetes-multi-tenancy-container-based-architecture/
categories: ['Programming']
---

Le risorse del cluster ## Kubernetes sono condivise tra tutti gli inquilini. Implementare l'approccio degli host di container multi-tenant per distribuire applicazioni ottimizzate e risparmio di risorse.

{{< figure align=center src="images/Kubernetes Multi-Tenancy & Container-Based Architecture.png" alt="Architettura Multi-Tenancy & Container Kifulnetes" caption="Kubernetes Multi-Tenancy & Container Based Architecture" >}}

Panoramica ##
Siamo qui con un altro entusiasmante post sul blog nella serie di multi-tenancy. Nel nostro precedente [articolo][1], abbiamo toccato il concetto di base dietro app multi-tenant, i pro e i contro e i tipi di architettura multi-tenant. Poiché è giunto il momento di servire più utenti/inquilini, gestire e utilizzare le risorse in modo efficiente. Quindi, la multi-tenancy è l'approccio principale per la costruzione di un'infrastruttura che gestisce contemporaneamente vari clienti/inquilini. Tuttavia, il nostro più recente [post sul blog][2] ha dimostrato l'architettura senza server, la containerizzazione e [Kubernetes][3]. Pertanto, in questo articolo, esploreremo l'architettura multi-tenancy e contenitori. Inoltre, vedremo come è possibile ottenere multi-tenancy nelle tue app [contenite][4].
I seguenti punti devono essere coperti in questo articolo:
  * **[host contenitori multi-tenant][5]**
  * **[Multi-tenancy di Kubernetes][6]**

## host contenitore multi-tenant   {#Multi-tenant-Container-Host}
La distribuzione delle applicazioni multi-tenant è un'attività critica quando si tratta di piattaforme di hosting. Sapete tutti che i contenitori sono leggeri rispetto alle macchine virtuali. La distribuzione dell'applicazione richiede solo pochi millisecondi per completare la distribuzione, mentre potrebbe essere una questione di pochi secondi o minuti nel caso di macchine virtuali.
Tuttavia, il raggiungimento della multi-tenancy in un'architettura a base di container è piuttosto semplice. Ogni inquilino è ospitato da un contenitore separato con isolamento completo e privacy dei dati. Ciò significa che il numero di contenitori dipende dal numero di inquilini. Inoltre, verranno utilizzati i seguenti strumenti per raggiungere questo approccio:
  * Docker e Docker Composi
  * Nginx
  * Istanza del database
  * Server delle applicazioni
Utilizzerai Docker per creare l'immagine che è un modello per costruire il contenitore. Inoltre, utilizzerai Docker Composi per girare più host del contenitore. Inoltre, utilizzerai NGINX per reindirizzare le richieste in arrivo all'inquilino adeguato. Pertanto, ogni host container contiene le istanze di applicazione e database in esecuzione e in esecuzione. Questo  **Metodo del contenitore multi-tenant **  non è ad alta intensità di risorse e offre robustezza nella gestione di vari inquilini e assicurarsi che l'isolamento e la sicurezza dei dati.

## kubernetes multi-tenancy   {#kubernetes-multi-tenancy-}
Kubernetes contiene molti componenti nella sua architettura come nodi, cluster, piano di controllo e altro ancora. Fondamentalmente, non esiste una multi-tenancy integrata in Kubernetes ma puoi raggiungerlo. Quindi, ci sono più applicazioni/inquilini che eseguono e condividono il cluster Kubernetes e il piano di controllo. D'altra parte, nelle app a singolo tenante, una singola istanza dell'applicazione occupa l'intero cluster Kubernetes.

{{< figure align=center src="images/kubernetes.svg" alt="Multi-tenancy di Kubernetes" >}}

Inoltre, andare un po 'più in profondità ci farà conoscere l'hosting degli inquilini nel cluster di Kubernetes. Ogni inquilino è associato a uno spazio dei nomi di Kubernetes che organizza il codice e impedisce le collisioni dei nomi. Esistono tre approcci per raggiungere la multi-tenancy in Kubernetes. Il primo è lo spazio dei nomi come servizio, il secondo è il cluster come servizio e il terzo è i piani di controllo come servizio.
In buonagno, il multi-tenancy di Kubernetes offre una soluzione economica all'organizzazione che si occupa di più interfacce utente. In effetti, puoi affrontare alcune sfide come la gestione degli utenti e una migliore gestione delle risorse. Tuttavia, dipende totalmente dal caso d'uso e dalla natura dell'applicazione che si punta.

## Conclusione
Questo ci porta alla fine di questo post sul blog. Abbiamo attraversato  **Kubernetes Multi-Tenancy & Container Based Architecture **  per il raggiungimento della multi-tenancy. Inoltre, ci sono molte librerie di terze parti disponibili per colmare le app multi-tenant con Kubernetes. Questo post sul blog ti aiuterà a comprendere il concetto di  **host contenitori multi-tenant ** . Ci sono altri post di blog interessanti che potresti trovare nella sezione "vedi anche".

## Connettiti con noi
Infine, [Containerize.com][7] offre post sul blog in corso su vari prodotti e argomenti open source. Puoi rimanere nel giro seguendoci sulle nostre piattaforme di social media, tra cui [Facebook][8], [LinkedIn][9] e [Twitter][10].

## Fai una domanda
Puoi farci sapere delle tue domande o domande sul nostro [forum][11].

## FAQ
**Cos'è il multi-tenancy in Kubernetes? **?
Segui questo [link][6] per conoscere il multi-tenancy di Kubernetes.
**Che cos'è un cluster multi-tenant vs singolo-tenant? **
In un cluster multi-tenant, tutti gli inquilini/client condividono il cluster di Kubernetes mentre, in un cluster a tenant singolo, c'è un cluster separato in esecuzione per ogni inquilino.

## Guarda anche
  * [Che cos'è il calcolo senza server? | Architettura senza server][12]
  * [Cos'è la multitenancy? | Perché un approccio multi-tenant?][13]
  * [Cos'è AI generativo | Intelligenza artificiale generativa][14]
  * [Come integrare CHATGPT con fogli Google][15]
  * [Come usare CHATGPT in VSCode | VScode Extension Code GPT][16]
  * [Cos'è Openai Chatbot GPT-3 | CHATGPT una rivoluzione AI][17]
  * [Un'introduzione all'intelligenza artificiale | Cos'è AI?][18]

  
[1]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[2]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/#Serverless-vs-Containers
[3]: https://products.containerize.com/devops/kubernetes/
[4]: https://www.containerize.com/
[5]: #Multi-Tenant-container-hosts
[6]: #Kubernetes-Multi-Tenancy-
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[13]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[14]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[15]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[16]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[17]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[18]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
