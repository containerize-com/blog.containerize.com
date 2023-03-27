---
title: "Come installare Webmin con SSL su Ubuntu 20.04" 
seoTitle: "Come installare Webmin con SSL su Ubuntu 20.04" 
description: "Webmin è uno strumento di amministrazione di sistema basato sul Web per sistemi simili a UNIX. In questo articolo impareremo come installare Webmin con SSL su Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin è uno strumento di amministrazione di sistema basato sul Web che è una semplice alternativa all'amministrazione del sistema di comando. Questo articolo guida come installare Webmin" 
url: /it/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Come installare Webmin">}}


## WebMin è uno strumento di amministrazione di sistema basato sul Web che è una semplice alternativa all'amministrazione del sistema di comando. Questo articolo guida come installare Webmin
Con questo articolo "Come installare WebMin con SSL su Ubuntu 20.04" stiamo iniziando la nostra nuova serie di tutorial su software e strumenti di hosting web. Con WebMin è possibile impostare account utente, abilitare la condivisione dei file, configurare le impostazioni di Apache e DNS ed eseguire molte altre attività relative al web hosting. Ti consente di gestire l'intero server di hosting web. Elimina manualmente il problema di modificare manualmente i file di configurazione Linux. Quindi impariamo come installare WebMin con SSL.
* **[Introduzione a WebMin][1]** 
* [ **Caratteristiche evidenziate** ][2]
* [ **Sistemi operativi supportati** ][3]
* [ **Installa webmin su Ubuntu** ][4]
* [ **Installa Apache usando WebMin** ][5]
* [ **conclusione** ][6]

## Introduzione a Webmin {#intro}

Webmin è un'interfaccia basata sul Web per l'amministrazione di sistema per Linux. Ti aiuta a gestire il tuo server di hosting da remoto da qualsiasi browser Web moderno. Con Webmin, è possibile configurare interni del sistema operativo come account utente, Apache, DNS, condivisione di file e molto altro. Webmin consente inoltre di controllare molte macchine tramite una singola interfaccia o di accedere senza soluzione di continuità su altri host Webmin sulla stessa sottorete o LAN. Webmin, basato su Perl, funziona come proprio processo e server web. E la parte migliore di Webmin è la sua libertà al 100% e open-source e ha una comunità di sviluppatori molto fiorente.

## Caratteristiche evidenziate {#features}

  * Consente di creare e modificare domini, record DNS, opzioni di bind e viste.
  * Aiuta a configurare un firewall creando e modificando le regole utilizzando IPFW.
  * Se non impostiamo gli script da eseguire al momento dell'avvio da /etc/init.d o /etc/rc.local
  * È possibile pianificare il trasferimento di file dal server a più server
  * Consente di installare pacchetti RPMS, Debian e Solaris su più server da una sorgente
  * Fornisce accesso a report come l'utilizzo della larghezza di banda, i caricamenti, i download, i visitatori, ecc.
  * È possibile creare lavori cron programmati che vengono eseguiti su più server contemporaneamente
  * Consente di eseguire comandi su più server contemporaneamente
  * Consente di configurare e modificare le quote di disco dell'utente o del gruppo per i filesystem locali
  * Include filesystem di backup e ripristino utilizzando il dump e ripristina la famiglia di comandi
  * Utilizzando un file manager simile a Windows, è possibile visualizzare, modificare e modificare le autorizzazioni su file e directory sul server
  * È possibile configurare il server del protocollo di posizione del servizio
  * Visualizza, modifica e modifica le autorizzazioni su file e directory sul sistema con un gestore file a forma di Windows
  * Aiuta a impostare tunnel SSL per crittografare i servizi come POP3 e IMAP, usando lo stornel di INETD.

## Sistemi operativi supportati {#support}

Poiché diversi sistemi operativi simili a UNIX e distribuzioni Linux utilizzano posizioni diverse per i loro vari file di configurazione, WebMIN può supportare solo sistemi per i quali è stato configurato. I seguenti sistemi operativi sono supportati dalla versione 1.979 di Webmin:
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * Server Asianux
  * Bigblock
  * Bsdi
  * Caixa Magica
  * Caldera OpenLinux
  * Caldera OpenLinux Eserver
  * Caos Linux
  * Cendio lbs Linux
  * Centos Linux
  * Citrix Hypervisor
  * CloudLinux
  * Cloudrouter Linux
  * Cobalt Linux
  * Tecnologia coerente Linux
  * Conectiva Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * DEC/Compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Endian Firewall Linux
  * Fedora Linux
  * FREEBBSD
  * Linux generico
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * Hp/ux
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Desktop Lycoris/LX
  * Mac OS X
  * macos catalina
  * MacOS High Sierra
  * macos mojave
  * macos sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * Principalmente Linux
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * Opensuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * OS X.
  * Pardo Linux
  * Pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Linux scientifico
  * SCO OpenServer
  * SCO Unixware
  * Secure Linux
  * Sgi Irix
  * Slackware Linux
  * Slamd64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * Sistema desktop java sun java
  * Sun Solaris
  * Suse linux
  * SUSE OPENExchange Linux
  * SUSE SLES LINUX
  * Sinologia DSM
  * Tao Linux
  * Tawie Server Linux
  * Desktop ThizLinux
  * Thizserver
  * Tinysofa Linux
  * Trustx
  * Trustx SE
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * White Dwarf Linux
  * Whitebox Linux
  * Wind River Linux
  * Finestre
  * X/OS Linux
  * Xandros Linux
  * Xcp-ng Linux
  * XenServer Linux
  * Dog giallo Linux
  * Yoper Linux
I sistemi meglio supportati al momento sono Solaris, Linux (Redhat in particolare) e FreeBSD.

## Installa Webmin su Ubuntu {#install}

Per installare WebMin, dovrai avere accesso a un utente con privilegi **root**. Si consiglia di impostare un utente non root con l'accesso**sudo** .
Prima SSH nel tuo server utilizzando il comando seguente
```
ssh user@server_IP_address
```
Per installare WebMin tramite _apt-get_, è necessario prima aggiungere il repository WebMin al file _sources.list_. Sul tuo server, apri il file _sources.list_ nel tuo editor di testo preferito. Useremo VIM in questo tutorial:
```
sudo vi /etc/apt/sources.list
```
Una volta aperto il file aggiungi le seguenti righe alla fine del file.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Ora aggiungi la chiave GPG di WebMin ad APT, quindi il repository di origine aggiunto sarà attendibile. Questo comando lo farà:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Prima di installare Webmin, è necessario aggiornare gli elenchi dei pacchetti di Apt-get:
```
sudo apt-get update
```
Ora esegui questo comando APT-get per installare WebMin:
```
sudo apt-get install webmin 
```
Immettere y per confermare l'installazione. Al termine dell'installazione, il servizio WebMIN avverrà automaticamente. E l'interfaccia Web verrà eseguita sulla porta 10000. È possibile accedere all'interfaccia utilizzando il seguente URL.
```
https://server_IP_address:10000
```
Ti verrà richiesto un avvertimento che dice che il certificato SSL del tuo server non è attendibile. Questo perché WebMIN genera e installa automaticamente un certificato SSL dopo l'installazione e il certificato non è stato emesso da un'autorità di certificazione che è attendibile dal tuo computer. Va bene procedere. Individua al tuo browser Web di fidarsi del certificato.
A questo punto, vedrai la schermata di accesso a Webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Installa webmin">}}

Quando si accede per la prima volta a Webmin, verrai portato alla pagina **Informazioni di sistema** . Ti dà una panoramica delle risorse del tuo sistema e di altre informazioni varie.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Installa le informazioni sul sistema Webmin">}}


## Installa Apache usando WebMin {#install-apache}

WebMin viene fornito con una grande varietà di moduli che gestiscono diversi pacchetti software. Per installare Apache usando WebMin seguire le istruzioni di seguito
**Passaggio 1 **: nel menu di navigazione, fare clic su** Moduli non utilizzati**per espandere la categoria, quindi fare clic su** Apache WebServer**.
Se non hai Apache installato sul tuo server, il modulo ti avviserà e ti fornirà un modo per installare Apache.
**Passaggio 2**: usa** Fare clic qui**Link (nell'ultima frase) per installare Apache tramite APT-get tramite Webmin.
Al termine dell'installazione di Apache, il server eseguirà il server Apache predefinito.

## Conclusione {#conclusion}

Questo articolo discute brevemente di numerose cose che Webmin può fare, Webmin è uno dei migliori strumenti per gestire i server Linux/Unix. In questo tutorial abbiamo anche imparato come installare Webmin su Ubuntu, e abbiamo anche discusso di come installare Apache sul tuo server utilizzando Webmin.

## Esplorare
  * [Come installare più versioni PHP con nginx su Ubuntu][7]
  * [Come configurare e configurare Nginx come proxy inverso][8]



[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
