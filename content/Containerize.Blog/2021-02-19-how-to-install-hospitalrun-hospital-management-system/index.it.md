---
title: "Come installare HospitalRun | Sistema di gestione dell'ospedale" 
seoTitle: "Come installare HospitalRun | Sistema di gestione dell'ospedale" 
description: "Questo articolo ti aiuta a installare HospitalRun su LocalHost. Automatizzare i processi medici utilizzando un sistema di gestione ospedaliero gratuito, open source, gratuito." 
date: Fri, 19 Feb 2021 09:24:09 +0000
author: muhammadmustafa
summary: "Soluzione sanitaria autosufficiente per facilitare i medici e i pazienti. Impariamo come distribuire HospitalRun gratuito sul posto locale seguendo semplici passaggi." 
url: /it/how-to-install-hospitalrun-hospital-management-system/
categories: ['Healthcare Software']
---

## Soluzione sanitaria autosullata per facilitare i medici e i pazienti. Impariamo come implementare HospitalRun gratuito sul posto locale seguendo semplici passaggi.

{{< figure align=center src="images/hospitalrun.png" alt="Sistema di gestione dell'ospedale">}}


Panoramica ##
Di recente abbiamo pubblicato un post sul blog su [come il software sanitario online autorizza l'industria sanitaria][1] che descrive l'impatto del sistema di gestione ospedaliera open source sul settore sanitario. L'industria del software sanitario globale sta guadagnando un valore con il passare del tempo. Il fatto è che la tecnologia ha trasformato ogni campo della vita. Il numero di pazienti e membri del personale è così alto che è diventato una seccatura gestire dati così enormi. D'altra parte, ci sono molti compiti che richiedono tempo che svolgono ogni giorno e le entità sanitarie svolgono ripetutamente tali compiti. Pertanto, la comunità di fonti open-source ha sviluppato software medico open source forniti con molti moduli utili per soddisfare le esigenze sanitarie.
Il software medico open source è sviluppato per gestire i registri dei pazienti per quanto riguarda la loro storia medica e le disposizioni per la gestione dell'ospedale. Inoltre, il software sanitario open source sta sfruttando l'intelligenza artificiale per fornire livelli avanzati di servizi. La maggior parte dei trattamenti per la malattia viene ora gestita dal software che non solo diagnostica i problemi, ma fornisce anche assistenza nella cura. Tuttavia, ci sono molti software emergenti per gli ospedali. In questo post sul blog, tratteremo i seguenti punti.
  *[**Cos'è HospitalRun?** ][2]
  *[**Quali sono le caratteristiche di HospitalRun** ][3]
  *[**Fase di installazione di HospitalRun?** ][4]
  *[**conclusione** ][5]

## Cos'è HospitalRun?   {#intro}
HospitalRun è un sistema di gestione delle informazioni ospedaliere open source gratuita. Questa soluzione sanitaria gratuita è rispettosa dell'ambiente poiché gli utenti possono sfruttare appieno questo software gratuito anche se non esiste una connettività Internet. Fornisce molte funzionalità come la gestione degli utenti, le registrazioni dei pazienti, gli appuntamenti, il sistema di fatturazione, il sistema di scarico dei pazienti e altro ancora. L'interfaccia utente di questo sistema di eHealth open source è logica in cui gli utenti possono navigare facilmente attraverso diversi elementi. Inoltre, è facile da configurare e offre un'immagine Docker in cui gli sviluppatori possono distribuirla usando un'immagine Docker.
Questo **Sistema di gestione ospedaliera**  offre forniture per integrare i laboratori per centralizzare le cartelle cliniche del paziente. Inoltre, consente inoltre agli utenti di conservare i registri delle visite dei pazienti, dei farmaci e delle valutazioni. Questo sistema di dischi eHealth è sicuro, flessibile e offre integrazioni con applicazioni di terze parti. C'è una comunità molto vivace che fornisce supporto per HospitalRun. Inoltre, esiste un sistema di scarico del paziente completo. Questo software medico open source è completamente scritto in JavaScript. Inoltre, è disponibile una documentazione completa per lo sviluppo e la distribuzione. In effetti, questo software medico open source fornisce diversi dashboard per diversi dipartimenti come il dipartimento di supporto, il dipartimento clinico e il dipartimento amministrativo. Tutti questi ruoli sono dotati di diversi livelli di autorizzazione e accesso.

## Quali sono le caratteristiche di HospitalRun?   {#caratteristiche}
In questa sezione, esamineremo alcune delle seguenti caratteristiche chiave di questo sistema di eHealth.
  ***Ospetito auto** : HospitalRun viene fornito con capacità di auto-ospite e richiede meno sforzi per distribuire sui server.
  ***Pianificazione degli appuntamenti** : questo sistema sanitario consente agli utenti di pianificare gli appuntamenti. C'è un modulo completo per gli appuntamenti disponibili sulla dashboard. Inoltre, gli utenti possono cercare gli appuntamenti con l'aiuto dei filtri.
  ***Sistema di scarico del paziente** : questo sistema di gestione dell'ospedale mantiene la registrazione di pazienti che sono stati scaricati.
  ***Gestione dei farmaci** : questo sistema di registrazione eHealth consente agli utenti di registrare i dati completi dei farmaci di un particolare paziente.
  ***Gestione dei registri dei pazienti** : esiste un modulo completo per la gestione dei registri dei pazienti. Gli utenti possono registrare i dettagli dei nuovi pazienti, ammessi pazienti rispetto alla loro storia medica completa come medicina, rapporti e visite.
  ***Sistema di fatturazione personalizzato** : è disponibile un ricco sistema di fatturazione in questo software sanitario open source. Consente agli utenti di generare e gestire fatture con dettagli completi come prezzi di laboratorio, spese di rione, prezzi di imaging e ecc.
  ***Disterne mediche elettroniche** : questo software medico open source fornisce tutti i moduli necessari per mantenere i registri medici e amministrativi.
  ***Flessibile** : HospitalRun è abbastanza flessibile ed estensibile che gli sviluppatori possono estendere la sua funzionalità per soddisfare le funzionalità necessarie.

## Passaggi di installazione di HospitalRun?   {#Steps}
Questa sezione del post sul blog descrive le fasi di installazione di HospitalRun.
Prima di iniziare, installare prima i seguenti prerequisiti:
  * [Docker][6]
  * [Docker-compose][7]
Una volta installati i prerequisiti, scarica il codice sorgente da questo [link][8].
Successivamente, aprire il terminale ed eseguire i seguenti comandi:
CD generico
server CD
Ora, modifica la password sulla riga 8,9 di \ `conf/initcouch.sh \` e la password sulla riga 7 di _config-demo.js_.
Quindi, eseguire il seguente comando per creare build ed eseguire l'applicazione:
_docker-compone build && docker-compose up_
Successivamente, girerà il contenitore Docker come mostrato nell'immagine qui sotto:

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.45.48-1024x554.png" alt="Sistema di gestione dell'ospedale">}}

Infine, puoi accedere a questa soluzione sanitaria nel browser su http: // localhost/#/login. Mostrerà la seguente schermata di accesso.

{{< figure align=center src="images/Screenshot-2021-02-16-at-23.46.35-1024x676.png" alt="Sistema di gestione dell'ospedale">}}


## conclusioni   {#conclusion}
Questa è la fine di questo articolo di tutorial. Questo sistema di registrazione dei pazienti aiuta davvero ad automatizzare **servizi sanitari** . Il moderno sistema di gestione dell'ospedale open source viene fornito con strumenti analitici di dati che aiutano gli operatori sanitari a intraprendere le azioni necessarie per migliori strutture sanitarie. Questo post sul blog ti aiuterà davvero se stai seriamente cercando di distribuire un sistema di eHealth per il tuo ospedale/clinica. Queste soluzioni open source sono convenienti in quanto sono integrate con laboratori e altre cliniche e minimizzano anche le scartoffie informatizzando ogni processo. La soluzione sanitaria open source consente agli utenti di avere visioni di tutte le operazioni sanitarie come farmaci, dimissioni, report e gestione delle fatture dei pazienti. Inoltre, puoi concentrarti su altri compiti importanti come la pianificazione delle risorse e la valutazione del rischio. Tuttavia, ci sono molti altri software a livello aziendale per gli ospedali menzionati nella sezione "Esplora" di seguito.
Alla fine,  **** [containerize.com][9]**** ha lo scopo di scrivere su ulteriori prodotti open source. Pertanto, rimani in contatto con questa categoria [Healthcare Technologies][10] per gli ultimi aggiornamenti.

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [OpenEmr][11]
  * [OpenMrs][12]
  * [HospitalRun][13]
  * [Open Hospital][14]
  * [Solismed][15]
  * [Cose da rivedere prima di optare sul software open source nel 2021][16]
  * [Funziona l'esplorazione del direttore delle cartelle cliniche HospitalRun][17]
  * [Top 5 software di record di salute dei pazienti open source][18]
  * [Funziona l'esplorazione della soluzione per la salute medica OpenEMR][19]
  * [Come impostare EHealth System HospitalRun su LocalHost][20]
  * [Come il software sanitario online autorizza l'industria sanitaria][1]

  
[1]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[2]: #intro
[3]: #features
[4]: #steps
[5]: #Conclusion
[6]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Finstall%2F&h=b220f083ceda72a13e4e77091860b9761ee26229422b3c2590128582d7227f81&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[7]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fdocs.docker.com%2Fcompose%2Finstall%2F&h=58cfa40eb1b8827698a31cbe9ac3661def22ae2b5c28eb832c19da2e3b5a5b0d&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[8]: https://us13.mailchimp.com/mctx/clicks?url=https%3A%2F%2Fhospitalrun.fra1.cdn.digitaloceanspaces.com%2Fdeployments%2Fhr-1.0.0-beta-generic.zip&h=3e79da04f5c6cd968d616537e74f30eef38c16590dc0cbc1945ec8ad214de9c0&v=1&xid=b329e96801&uid=57968001&pool=contact_facing&subject=HospitalRun+1.0+Beta%3A+deploy+instruction
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/health-care-technologies
[11]: https://products.containerize.com/health-care-technologies/openemr
[12]: https://products.containerize.com/health-care-technologies/openmrs
[13]: https://products.containerize.com/healthcare-technologies/hospitalrun
[14]: https://products.containerize.com/healthcare-technologies/open-hospital
[15]: https://products.containerize.com/healthcare-technologies/solismed
[16]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
[17]: https://blog.containerize.com/healthcare-software/features-exploration-of-medical-record-manager-hospitalrun/
[18]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[19]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[20]: https://blog.containerize.com/healthcare-software/it/how-to-install-hospitalrun-hospital-management-system/
