---
title: "Lighttpd | Come configurare e configurare il server Web open source '" 
seoTitle: "Lighttpd | Come configurare e configurare il server Web open source" 
description: "Segui questo articolo per imparare a configurare e configurare il server Web open source. Lightttpd è un server Web conforme che viene fornito con un solido controllo del carico della CPU." 
date: Wed, 16 Dec 2020 12:53:41 +0000
author: bilalahmed
summary: "Configurare un server Web sicuro, leggero e open source. Lighttpd è un server Web gratuito a livello aziendale e più adatto per siti Web altamente performanti." 
url: /it/lighttpd-how-to-setup-configure-open-source-web-server/
categories: ['Web Server Solution Stack']
---

## Configurare un server Web sicuro, leggero e open source. Lighttpd è un server Web gratuito a livello aziendale e più adatto per siti Web altamente performanti.

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Websites.png" alt="server web open source">}}

Benvenuti in un altro post sul blog nella categoria [Web Server Solution Stack][1]. Abbiamo pubblicato molti articoli come [[Setup XAMPP e PhpMyAdmin come LocalHost su Windows][2]][3], [top 5 stack di soluzione di server Web open source nel 2021][4] e alcuni altri. Questi articoli hanno dimostrato i processi di configurazione di vari server Web open source insieme agli articoli di guida dettagliati. In effetti, un server web è stato introdotto negli anni '90 e da allora ha guadagnato la massima popolarità nel mondo digitale. Ci sono molti fattori che sono allegati al servizio di contenuto su Internet o Intranet. Tuttavia, una parte enorme del settore digitale è collegata alle aziende o alle comunità che mantengono soluzioni di web server. Pertanto, fattori come robustezza, sicurezza, affidabilità, archiviazione, ottimizzazione dei dati e alcuni altri fattori sono i pilastri principali di un sistema digitale a livello aziendale.
Inoltre, Open Source Community ha sviluppato molti server Webserver Open Sources e Web Proxy per consentire al settore aziendale di stabilire i propri server Web per ospitare siti Web e software aziendali. Lighttpd Web è uno stack di soluzione Web Server gratuita e open source, progettato appositamente per le macchine Linux. In questo post sul blog, passeremo attraverso LightTPD coprendo il seguente punto.
  * [Cos'è Lightttpd?][5]
  * [Benefici di Lightttpd][6]
  * [Come configurare Lightttpd?][7]
  * [Conclusione][8]

## Cos'è Lightttpd? {#what}

Rispetto ad altri server Web come Apache e Nginx, il server Web LightTPD ha una piccola impronta di memoria, quindi fornisce un'efficace gestione del carico CPU. Questo server Web leggero fornisce set di funzionalità avanzate tra cui FastCGI, SCGI, Auth, Output-Compression e URL-Rewriting, ecc. Consente di utilizzare applicazioni Web scritte in qualsiasi linguaggio di programmazione con il server. FastCGI di Lightttpd può essere configurato per supportare PHP. Oltre a PHP, supporta anche altri linguaggi di programmazione tra cui Python, Perl, Ruby e molti altri.
Esistono molti server Web open source e server di proxy Web, ma LightTPD è in cima all'elenco che viene ampiamente utilizzato. Questa soluzione Web Server è molto facile da configurare e richiede requisiti semplici come Ubuntu 18.04. Inoltre, coloro che desiderano distribuire questa soluzione open source possono scaricare l'ultima versione da questo [link][9]. Soprattutto, supporta molte lingue diverse da PHP come Python, Ruby, Perl e altro ancora. Inoltre, tutta la documentazione è disponibile per quanto riguarda lo sviluppo e la distribuzione. Pertanto, gli sviluppatori possono trovare il codice sorgente su [github][10].

## Vantaggi di LightPD {#benefits}

In questa sezione, passeremo i vantaggi e la fornitura offerta da questo server Web open source. Pertanto, se stai cercando un server Web veloce, efficiente e sicuro, il server Web LightTPD è la scelta migliore per te. Non richiede molta memoria e utilizzo della CPU. Il che lo rende uno dei migliori per qualsiasi progetto che richiede velocità e prestazioni elevate. Lightttpd può gestire fino a 10000 connessioni in parallelo su un singolo server. Lightttpd è la soluzione perfetta per ogni server che soffre di velocità o problemi di prestazioni. Questa soluzione gratuita è economica ed efficiente in termini di risorse.
Inoltre, questa soluzione Web Server offre supporto per quasi tutte le piattaforme popolari come Windows, Linux, Solaris e MacOS. Allo stesso modo, LightTPD è molto per i sistemi incorporati e ha la possibilità di servire contenuti statici e dinamici per più utenti anche con risorse limitate. Noto per la sua sicurezza, velocità, conformità e flessibilità, LightTPD sta rapidamente ridefinendo l'efficienza di un server web.
Lightttpd offre i seguenti vantaggi di spicco:
  * Supporto HTTP/2
  * Supporto per interfacce FastCGI, SCGI, CGI
  * TLS OCSP graffetta
  * Mod_Proxy fa richieste HTTP/1.1 ai backend (modifica da HTTP/1.0)
  * Supporto per l'utilizzo di chroot e mod_rewrite

## Come configurare LightTPD? {#configure}

In questa sezione di questo post sul blog, esploriamo i passaggi per configurare LightTPD. L'installazione di LightTPD su Ubuntu è molto semplice e diretta. Basta usare il seguente comando e sei a posto
```
$ sudo apt install lighttpd
```
È inoltre possibile installare LightTPD direttamente dalla sorgente. Per installare da Git, utilizzare questi comandi
```
git clone https://git.lighttpd.net/lighttpd/lighttpd1.4.git
cd lighttpd1.4
./autogen.sh
```
Per installare da SVN, utilizzare questi comandi
```
svn checkout https://github.com/lighttpd/lighttpd1.4/trunk lighttpd1.4
```
Usa questo comando per recuperare gli aggiornamenti
```
svn update
```
Per installare dipendenze, eseguire questo comando
```
apt-get build-dep lighttpd
```
Successivamente, utilizzare il comando Configura come segue
```
./configure --help
```
Build Using Using Make Command
```
make
```
Dopo una build riuscita, ora installa il pacchetto
```
su make install
```
Controlla se Lightttpd è configurato e installato correttamente visitando l'URL [http: // your-server-ip][11]. Dovresti vedere la pagina seguente

{{< figure align=center src="images/How-to-Setup-and-Configure-Lighttpd-for-High-Performance-Web-1024x506.png" alt="Come configurare e configurare LightTPD per siti Web ad alte prestazioni">}}


## Conclusione {#conclusion}

Questo ci porta alla fine di questo post sul blog. Abbiamo attraversato ciò che è Lightttpd? Come configurare LightTPD? e impostazione della procedura. Lighttpd è un server Web gratuito, ad alte prestazioni e open source progettato per ambienti critici per la velocità. L'impronta di memoria bassa, il carico della CPU e le ottimizzazioni di velocità lo rendono adatto ai server che soffrono di problemi di carico. È leggero, sicuro e veloce rispetto ad altri server Web, il che lo rende una delle migliori scelte per siti Web ad alte prestazioni e di velocità. Lighttpd ha una comunità molto viva e vibrante che fornisce supporto per problemi e domande. Esistono molti prodotti open open source e post sul blog pertinenti che puoi passare che sono menzionati nella sezione "Esplora" di seguito. Pertanto, questo articolo può davvero aiutarti se stai cercando di optare per un server Web open source per la tua attività.
Infine,  **[containerize.com][12]**  ha scritto su ulteriori prodotti open source. Si prega di rimanere in contatto con questa categoria [Web Server Solution Stack][1] per aggiornamenti regolari. Inoltre, puoi seguirci sui nostri account di social media [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Esplorare
Potresti trovare i seguenti collegamenti pertinenti:
  * [XAMPP][16]
  * [Nginx][17]
  * [Caddy][18]
  * [Lightttpd | Soluzione open source e server Web leggero][19]
  * [Migliori opzioni di stack di soluzione del server Web open source][1]
  * [Top 5 stack di soluzione del server Web open source nel 2021][4]
  * [Setup XAMPP e PhpMyAdmin come LocalHost su Windows][2]



 [1]: https://products.containerize.com/solution-stack/
 [2]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
 [3]: https://blog.containerize.com/2020/12/16/setup-and-configure-lighttpd-web-server-for-high-performance-websites/
 [4]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
 [5]: #what
 [6]: #benefits
 [7]: #configure
 [8]: #conclusion
 [9]: http://www.lighttpd.net/download/
 [10]: https://github.com/lighttpd/lighttpd1.4
 [11]: http://your-server-ip/
 [12]: https://www.containerize.com/
 [13]: https://web.facebook.com/containerize
 [14]: https://www.linkedin.com/company/containerize/
 [15]: https://twitter.com/containerize_co
 [16]: https://products.containerize.com/solution-stack/xampp/
 [17]: https://products.containerize.com/solution-stack/nginx/
 [18]: https://products.containerize.com/solution-stack/caddy/
 [19]: https://products.containerize.com/solution-stack/lighttpd
