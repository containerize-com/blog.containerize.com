---
title: "Come proteggere Nginx con Let's Cript su Ubuntu 20.04" 
seoTitle: "Come proteggere Nginx con Let's Cript su Ubuntu 20.04" 
description: "Come configurare, crittografare e proteggere nginx con let's cript su Ubuntu. Crittiamo il client per generare certificati per configurare automaticamente Nginx." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "I siti Web includono la crittografia SSL/TLS per il suo dominio per attirare i visitatori. Questo articolo spiega l'uso dell'utilità certbot per ottenere certificati TLS/SSL per NGINX." 
url: /it/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

I siti Web ## includono la crittografia SSL/TLS per il suo dominio per attirare i visitatori. Questo articolo spiega l'uso dell'utilità certbot per ottenere certificati TLS/SSL per NGINX.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Proteggere nginx con let's cript su ubuntu">}}


Panoramica ## ****
Qualsiasi sito Web che cerca di attirare i visitatori deve includere la crittografia TLS/SSL per il suo dominio. I certificati gratuiti SSL assicurano una connessione sicura tra il tuo server Web come crittografare e proteggere i browser NGINX e dell'applicazione. Crittografia è un'autorità di certificazione gratuita, automatizzata e aperta che consente di impostare tale protezione per Nginx SSL LetSTancrypt. Crittiamo i certificati SSL gratuiti sono attendibili da tutti i principali browser e validi per i prossimi 90 giorni dalla data di emissione.
Questo post sul blog spiega il modo più semplice per crittografare e proteggere Nginx eseguendo il server Web su Ubuntu 20.04 / 18.04 ottenendo i certificati NGINX HTTPS LetSencrypt utilizzando l'utilità NGINX CERTBOT e impostare i certificati per rinnovarlo automaticamente. Iniziamo e configurano le configurazioni di Ubuntu nginx.
  * Dipendenze e prerequisiti
  * Installazione dell'utilità certbot
  * Confermare la configurazione di Nginx
  * Consentire HTTPS tramite il firewall
  * Ottenere un certificato SSL
  * Conclusione

## prima cose: dipendenze e prerequisiti   {#prerequisites}
Per seguire questo articolo, avrai bisogno di seguenti dipendenze e prerequisiti per installare le utility Ubuntu nginx:
  * Un utente di root o root abilitato su SUDO su macchine locali/remote.
  * Un sistema che esegue Ubuntu 20.04 o Ubuntu 18.04
  * Accesso a un terminale di riga di comando
  * Sudo o privilegi di root su macchine locali/remote
  * Nginx installato e impostato
  * Un nome di dominio registrato che indica l'IP pubblico
  * Un blocco server configurato per quel nome di dominio
  * Il firewall è configurato per accettare connessioni sulle porte 80 e 443.

## PASSAGGIO 1-Installazione di certbot   {#step-1 -—- Installation-CertBot}
Il primo passo per proteggere Nginx e crittografare Nginx con Let's Cryppt è l'installare il pacchetto NGINX CERTBOT in piena misura e facile da usare per ottenere e rinnovare i certificati SSL di crittografia sul server. Per fare ciò, inizia aprendo un terminale su Ubuntu e aggiornando il repository locale. Digitare y e immettere se richiesto.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Ora verifichiamo alcune delle impostazioni di configurazione Secure NGINX.

## Passaggio 2-Conferma di NGINX Configuration   {#Step-2 -—- Conferming-Nginx-39-S-Configuration}
Come spiegato nella sezione Dipendenza e Prerequisiti, è necessario avere già un dominio registrato e CERTBOT deve essere in grado di trovare il blocco server Nginx corretto per quel dominio per configurare automaticamente SSL. Ad esempio, questo post sul blog utilizza Domain Blog.Containerize.com e Server Block per il tuo dominio all'indirizzo /etc/nginx/sites-available/blog.containerize.com con la direttiva Server_Name già impostata correttamente.
Per confermare, aprire il file di configurazione per il tuo dominio usando Nano o il tuo editor di testo preferito:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Trova la riga della direttiva Server_Name esistente nel file /etc/nginx/sites-available/blog.containerize.com. Dovrebbe sembrare come questo:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Ora verifica la sintassi dei file di configurazione Nginx e ricarica il server Nginx per caricare le nuove impostazioni di configurazione:
```
sudo nginx -t
sudo systemctl reload nginx

```
L'utilità certBot ora può trovare la direttiva Block Server NGINX corretta per proteggere NGINX e aggiornarla automaticamente. Nel prossimo passaggio, aggiorniamo il firewall per consentire il traffico HTTPS.

## Passaggio 3-Consentire HTTPS tramite il firewall   {#Step-3 -—- permettendo-https-through-the-firewall}
Come consigliato in questo articolo, dovrai regolare le impostazioni per consentire il traffico HTTPS. Per assicurarti che il tuo firewall sia abilitato e attivo, eseguire il comando seguente:
```
sudo ufw status

```
L'output dovrebbe dirti che UFW è attivo e darti un elenco di regole impostate. Mostra solo il traffico HTTP è consentito al server Web. Per consentire il traffico crittografato, è possibile aggiungere il profilo HTTPS NGINX o utilizzare NGINX Full ed eliminare la regola NGINX HTTP esistente. Consenti il ​​traffico HTTPS NGINX digitando il comando:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Verifica la regola HTTPS che consente il traffico HTTPS digitando il comando di stato UFW:
```
sudo ufw status

```
Successivamente, eseguiamo certbot e prendiamo i nostri certificati.

## PASSAGGIO 4-Ottenimento di un certificato SSL   {#Step-4 --- Ottenimento-A-SSL-certificato}
Il plug -in di NGINX per CERTBOT si occuperà della riconfigurazione di NGINX e ricaricherà la sua configurazione quando necessario. Pertanto, solo tu è necessario generare certificati con il plug -in NGINX eseguendo il seguente comando:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Se è la prima volta che esegui l'utilità certBot, CERTBOT ti chiede di configurare le impostazioni HTTPS. Ti verrà richiesto di inserire un indirizzo e -mail e accettare i termini del servizio. Dopo aver premuto ENTER, la configurazione verrà aggiornata e NGINX si ricaricherà per raccogliere le nuove impostazioni. Infine, CertBot verrà visualizzato con un messaggio che ti dice che è stato generato con successo un certificato e dove sono archiviati i certificati.
I certificati vengono scaricati, installati e caricati con certificato Nginx SSL LetSencrypt Configurazioni. Prova a ricaricare il tuo sito Web utilizzando https: // e nota l'indicatore di sicurezza del tuo browser. Dovrebbe indicare che il sito è adeguatamente fissato, di solito con un'icona di blocco. Se si verifica il tuo server utilizzando il test del server SSL Labs, otterrà un grado A per NGINX e leTsCrypt.
Finiamo testando il processo di rinnovo.

## PASSAGGIO 5-Verificante del rinnovo automatico certBot   {#Step-5 --- Verifica-Certbot-Auto-Renewal}
Dal momento che i certificati di crittografia scadono ogni novanta (90) giorni e Nginx SSL LetSencrypt incoraggia gli utenti a impostare e lavoro di rinnovo automatico Cron. Innanzitutto, aprire il file di configurazione di Crrontab per l'utente corrente:
```
sudo crontab -e
```
Aggiungi un lavoro cron che esegue il comando certbot, certbot rinnova nginx rinnova il certificato se rileva il certificato scadrà entro 30 giorni. Pianificarlo per funzionare quotidianamente in un periodo specificato, ad esempio 05:00.
```
sudo certbot renew --dry-run

```
Il lavoro Cron dovrebbe includere anche l'attributo –Quet, come nel comando sopra. Ciò indica che Nginx Renew Cerchite SSL di non includere alcun output dopo aver eseguito l'attività. Abilita il rinnovo del certificato automatico. Dopo aver aggiunto il lavoro Cron, salvare le modifiche ed uscire dal file.

## conclusioni   {#conclusion}
In questo articolo, abbiamo imparato come installare Nginx LetSencrypt SSL. Abbiamo scaricato i certificati SSL per il tuo dominio e configurato NGINX per utilizzare questi certificati. Inoltre, dovresti aver abilitato CERTBOT di rinnovare automaticamente i certificati per SSL NGINX LetSTancrypt. Nei nostri prossimi tutorial, discuteremo di argomenti più interessanti su come proteggere un server Web con una tecnologia di sicurezza standard che consente una comunicazione crittografata tra un browser Web e un server Web.
_ Il tuo può unirsi a noi su [Twitter][1], [LinkedIn][2] e la nostra pagina [Facebook][3]. Quale protocollo crittografico usi per fornire sicurezza delle comunicazioni su una rete di computer?. In caso di domande, per favore_ [mettiti in contatto][4].

## Esplorare
È possibile trovare i seguenti collegamenti pertinenti per monitorare le prestazioni del server e garantirne l'affidabilità e la sicurezza:
  * [Come configurare Apache come proxy inverso per Ubuntu/Debian][5]
  * [Come installare e fissare PhpMyAdmin con Nginx su Ubuntu][6]
  * [Configura supporto HTTP/2 in NGINX su Ubuntu/Debian][7]
  * [Imposta nginx con il passeggero sul server di produzione AWS][8]
  * [Come installare e configurare OwnCloud con Apache su Ubuntu][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
