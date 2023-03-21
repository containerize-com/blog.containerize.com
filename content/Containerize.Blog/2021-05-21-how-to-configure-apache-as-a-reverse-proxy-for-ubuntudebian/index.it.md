---
title: "Come configurare Apache come proxy inverso per Ubuntu/Debian" 
seoTitle: "Come configurare Apache come proxy inverso per Ubuntu/Debian" 
description: "La configurazione proxy di Apache inversa passo dopo passo consente di eseguire uno o più server back -end dietro un server proxy con mod_proxy su Ubuntu/Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "Apache Reverse Proxy consente di eseguire uno o più server back-end dietro un server proxy. Ecco come configurare Apache Reverse Proxy sul sistema Ubuntu/Debian." 
url: /it/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## Apache Reverse Proxy consente di eseguire uno o più server back-end dietro un server proxy. Ecco come configurare Apache Reverse Proxy sul sistema Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Installare e configurare Apache Reverse Proxy">}}


Panoramica ## ****
Apache Reverse Proxy consente a tutto il traffico e lo inoltra di eseguire uno o più server back -end o contenitori dietro un server proxy, senza esporli pubblicamente. Il server Web back-end può essere un altro server HTTP APACHE2 o open source come NGINX. Apache2 HTTP Server è uno dei server Web open source più popolare che viene utilizzato oggi.
Esistono molti motivi per installare e configurare un server proxy. Ad esempio, il proxy inverso può aiutarti ad aggiungere sicurezza, per il bilanciamento del carico, limitare l'accesso a determinate posizioni al fine di prevenire attacchi e molti altri. Questo articolo spiega come installare e configurare la configurazione del proxy di Apache Reverse passo dopo passo per il server HTTPS su Ubuntu/Debian:
  * Installazione di Apache2
  * Configurare Apache2
  * Abilita i suoi moduli proxy
  * Abilita SSL
  * Riavvia Apache2
  * Conclusione

## Passaggio 1: installa Apache2
L'installazione di Apache2 è molto semplice e facile da eseguire. Per fare installazioni, eseguire i comandi seguenti semplicemente:
Sudo Apt-get Aggiornamento
sudo apt-get installa apache2
{{_LINE_25_}}
Dopo aver installato Apache2 sul sistema, utilizzare i seguenti comandi SystemCtl su Debian Linux o Ubuntu Linux Versione Ubuntu per arrestare, avviare, abilitare e riavviare Apache2 per riavviare sempre quando il server si avvia.
sudo systemctl stop apache2.service
sudo systemctl avvia apache2.service
sudo systemctl abilita apache2.service
sudo systemctl riavvio apache2.service
{{_LINE_31_}}
È possibile visualizzare lo stato del server Web utilizzando il seguente comando:
sudo systemctl status apache2.service
{{_LINE_34_}}
Per verificare la configurazione APACHE2, aprire il browser e navigare al nome host del server o all'indirizzo IP del sistema e dovresti vedere la pagina di prova predefinita Apache2 come mostrato di seguito. Quando lo vedi, Apache2 funziona come previsto. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Installa e configura Apache Reverse Proxy Proxy per Ubuntu">}}


## Passaggio 2: configurare Apache2 come proxy inverso
Apache2 è installato correttamente e pronto per l'uso. Ora puoi configurare Apache2 per funzionare come proxy inverso Apache2 Ubuntu. ProxyPass **e  **ProxyPassReverse **  Funzione di Apache2 Proxy Module  **forniscono un proxy inverso. Per utilizzare **  ProxyPass  **e**   ProxyPassReverse**, devi prima sapere che dove si desidera dirigere il traffico del sito.
Il server proxy inverso Apache2 ascolterà tutto il traffico sulla porta HTTP predefinita, che è la porta 80 in una semplice configurazione. Il server back-end che ospita il contenuto del sito Web ascolterà una porta personalizzata ed è molto probabilmente la porta 8080.
In questo articolo del blog, stiamo andando a impostare Apache2 per ascoltare la porta 80 e quindi dirigere il traffico verso il server back-end che ascolta la porta 8080. Esegui il comando sotto per creare un file VirtualHost proxy chiamato Apache2Proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Quindi aggiungere il seguente blocco di codici nel file Apache2Proxy.Conf e quindi salvalo.
{{_LINE_43_}}
        ServerName Esempio.com
        Serveralias www.example.com
        ServerAdmin webmaster@example.com
        Errorlog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir} /access.log combinato
        Proxyrequests
{{_LINE_50_}}
          Ordina Nega, consentire
          Consentire da tutti
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxyPassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Ordine consentire, negando
          Consentire da tutti
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
Il file apache2proxy.conf contiene il nome del server e il proxy_pass in cui il traffico verrà diretto quando ricevuto dal server proxy HTTP.

## Passaggio 3: Abilita Proxy Apache2
APACHE2 Web Server è ora installato e configurato correttamente. Apache ha molti moduli in bundle disponibili in bundle in esso. Questi moduli non sono abilitati nell'installazione Fresh Apache2. Innanzitutto dovremo abilitare i moduli di cui abbiamo bisogno per abilitare il modulo Apache Mod_Proxy richiesto e molti dei suoi moduli aggiuntivi per supportare diversi protocolli di rete. Esegui i comandi elencati di seguito per abilitare i suoi moduli proxy HTTP.
proxy sudo a2enmod
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
Ora abilita il sito VirtualHost e riavvia Apache2 per abilitare la configurazione dei moduli Apache2.
sudo a2ensite apache2proxy.conf
sudo systemctl riavvio apache2.service
Avvia un browser Web di tua scelta e naviga sul nome host del server come Esempio.com. Ora sarai proxetto al tuo server Apache2 sulla porta predefinita, ovvero 8080.

## Passaggio 4: Abilita SSL   {#BLOCK-07B86D83-DCA0-4924-B991-206719C342EB}
Se si desidera abilitare il modulo SSL proxy Apache Reverse, eseguire il comando sotto per abilitare Apache Reverse Proxy HTTPS Proxy Pass:
sudo a2enmod ssl
Ciò fornirà il proxy di Apache Reverse sicuro al supporto HTTPS ai server di backend.

## Passaggio 5: Riavvia Apache2   {#BLOCK-836BB4FF-17AD-4317-8ECB-153104BD28A7}
Per rendere in vigore queste modifiche, riavvia Apache eseguendo il comando seguente:
sudo systemctl riavvio apache2.service
Congratulazioni! Hai installato e configurato correttamente il proxy inverso Apache2 sul sistema Linux.

##  **Conclusione:**    {#4a1a}
In questo tutorial, abbiamo esplorato e discusso ciò che è un server proxy e una configurazione di esempio proxy di reverse Apache Passo dopo passo. Abbiamo anche imparato come impostare e configurare Apache2 come proxy inverso su un sistema Linux. Nei nostri prossimi tutorial, discuteremo di argomenti più interessanti su Apache e altri stack di soluzione del server Web.

## Esplorare
Potresti anche apprezzare gli articoli più correlati:
  * [How to][1][Installa e fissa phpmyadmin con nginx su Ubuntu][2]
  * [Come configurare Nginx con il passeggero sul server di produzione AWS][3]
  * [Configura supporto HTTP/2 in NGINX su Ubuntu/Debian][4]
  * [Sicuro e crittografico nginx con let's crittograpt su ubuntu 20.04][5]
  * [Come installare e configurare OwnCloud con Apache su Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/it/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
