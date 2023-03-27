---
title: "Come utilizzare Nginx come bilanciamento del carico per l'applicazione" 
seoTitle: "Come utilizzare Nginx come bilanciamento del carico per l'applicazione" 
description: "Nginx è un popolare server Web open source. È ben noto per alte prestazioni e scalabilità. In questo tutorial, impareremo a usare Nginx come bilanciamento del carico" 
date: Fri, 30 Apr 2021 07:31:14 +0000
author: Assad Mahmood
summary: "Nginx è popolare per le sue alte prestazioni e scalabilità. È il server Web open source numero 1. In questo tutorial, impareremo a usare Nginx come bilanciamento del carico." 
url: /it/how-to-use-nginx-as-load-balancer-for-your-application/
categories: ['Web Server Solution Stack']
---

## nginx è popolare per le sue alte prestazioni e scalabilità. È il server Web open source numero 1. In questo tutorial, impareremo a usare Nginx come bilanciamento del carico.

{{< figure align=center src="images/nginx-as-load-balancer.png" alt="Come utilizzare Nginx come bilanciamento del carico">}}

I moderni siti Web ad alto traffico servono centinaia di migliaia e in alcuni casi milioni di richieste simultanee da utenti o clienti e restituiscono i dati corretti di testo, immagini, video o applicazioni, il tutto in modo rapido e affidabile. Per soddisfare le esigenze di questi volumi elevati e la potenza di calcolo hai bisogno di più server. Con più server, hai bisogno di un modo per caricare il bilanciamento del traffico tra questi server. In questo tutorial sul blog, esploreremo cos'è un bilanciamento del carico e come possiamo usare Nginx come bilanciamento del carico.
Per configurare il bilanciamento del carico Nginx come prerequisito, è necessario disporre di almeno due host con un software Web Server installato e configurato per vedere i vantaggi del bilanciamento del carico con NGINX. Se hai già un host Web in esecuzione impostata, duplicalo creando un'immagine personalizzata e distribuirla su un nuovo server Web. Quindi, impariamo come impostare la configurazione di bilanciamento del carico Nginx passo dopo passo per i tuoi server cloud.!
* **[NGINX Web Server][1]** 
* **[Bilancante carico][2]** 
* **[Imposta nginx come bilanciamento del carico (round robin)][3]** 
* **[Informazioni su diverse direttive a monte][4]** 
* **[conclusione][5]** 

## Server Web Nginx {#webserver}

Nginx è un server Web open source ad alte prestazioni. Oltre alle sue funzionalità del server HTTP, NGINX può anche funzionare come server proxy per e -mail (IMAP, POP3 e SMTP) e un proxy inverso e per caricare il saldo NGINX per server HTTP, TCP e UDP. Migliora le prestazioni, l'affidabilità e la sicurezza delle applicazioni. È popolare per il suo ricco set di funzionalità, la configurazione semplice e il basso consumo di risorse.
Come funziona Nginx? Nginx è comunemente usato come NGINX Reverse Proxy Load Balancer come singolo punto di ingresso a un'applicazione Web distribuita che lavora su più server separati. Utilizza un approccio asincrono, basato su eventi per offrire un basso utilizzo della memoria e una concorrenza elevata. Puoi leggere di più su Nginx [qui][6].

## Carico Balancer {#loadbalancer}

Il bilanciamento del carico è il processo di distribuzione del traffico di rete su più server. E il "software" o "hardware" che esegue questo processo di distribuzione si chiama bilanciamento del carico. Un bilanciamento del carico è come un "poliziotto del traffico" davanti ai server e le richieste dei client di routing su tutti i server. Assicura che la tua applicazione rimanga operativa anche se uno dei server diminuisce.

{{< figure align=center src="images/223F67DC-2518-4CDD-883A-7DAF3C78A7CC.png" alt="Nginx come bilanciamento del carico">}}

Le funzioni principali di un bilanciamento del carico stanno seguendo:
  * Distribuisce richieste client o caricamento di rete in modo efficiente su più server
  * Garantisce un'elevata disponibilità e affidabilità inviando richieste solo ai server online
  * Fornisce la flessibilità di aggiungere o sottrarre i server come impone della domanda

## Imposta nginx come bilanciamento del carico {#setup}

Prima di impostare il bilanciamento del carico rotondo NGINX, è necessario che NGINX sia installato sul server. Puoi installarlo rapidamente con Apt-get:
```
sudo apt-get install nginx
```
Per impostare un bilanciamento del carico round-robin, dovremo utilizzare il modulo a monte NGINX. Aggiorneremo la configurazione del bilanciamento del carico Nginx nelle impostazioni NGINX. Apriamo la configurazione del tuo sito Web. Per motivi di questo esempio, sto usando il file di configurazione predefinito
```
sudo vi /etc/nginx/sites-available/default
```
Dobbiamo aggiungere la configurazione di bilanciamento del carico al file per configurare il bilanciamento del carico con NGINX.
Per prima cosa dobbiamo includere il modulo a monte per il bilanciamento del carico a monte NGINX che assomiglia a questo:
```
upstream backend  {
  server backend1.example.com;
  server backend2.example.com;
  server backend3.example.com;
}
```
Usa questo backend a monte come endpoint proxy nel blocco del server:
```
server {
  location / {
    proxy_pass  http://backend;
  }
}
```
Riavvia Nginx
```
sudo service nginx restart
```
Finché hai tutti i server in atto, ora dovresti scoprire che il bilanciamento del carico open source NGINX inizierà a distribuire equamente i visitatori ai server. Questa uguale distribuzione è chiamata bilanciamento del carico round-robin.

## Direttive a monte {#upstream}

Nel nostro ultimo esempio, abbiamo usato un semplice modulo a monte per eseguire il bilanciamento del carico rotondo per distribuire il traffico equamente tra i server. Tuttavia, ci sono molte ragioni per cui questo potrebbe non essere il modo più efficiente di lavorare con il traffico. Esistono diverse direttive che possiamo utilizzare per dirigere i visitatori del sito in modo più efficace.

### Peso
Un modo per iniziare ad allocare gli utenti ai server con maggiore precisione è allocare peso specifico a determinate macchine. Nginx ci consente di assegnare un numero che specifica la proporzione di traffico che dovrebbe essere indirizzata a ciascun server.
Una configurazione bilanciata del carico che includeva il peso del server potrebbe apparire così:
```
upstream backend  {
  server backend1.example.com weight=1;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```
Il peso predefinito è 1. con un peso di 2, backend2. Example verrà inviato il doppio del traffico del backend1 e il backend3, con un peso di 4, affronterà il doppio del traffico del backend2 e quattro volte più del backend 1.

### hash
IP Hash consente ai server di rispondere ai client in base al proprio indirizzo IP, inviando i visitatori allo stesso VP ogni volta che visitano (a meno che quel server non sia inattivo). Se è noto che un server è inattivo, dovrebbe essere contrassegnato come giù. Tutti gli IP che avrebbero dovuto instradare verso il server verso il basso sono quindi indirizzati a uno alternativo.
La configurazione seguente fornisce un esempio:
```
upstream backend {
  ip_hash;
  server   backend1.example.com;
  server   backend2.example.com;
  server   backend3.example.com  down;
 }
```

### max fallisce
Secondo le impostazioni di round-robin predefinite, il bilanciamento del carico dell'applicazione Nginx continuerà a inviare dati ai server privati ​​virtuali, anche se i server non rispondono. Max Fails può impedire automaticamente questo rendendo i server non rispondenti non operativi per un determinato periodo di tempo.
Ci sono due fattori associati al massimo di fallimento: max \ _fails e caduta \ _timeout. Max non si riferisce al numero massimo di tentativi non riusciti di connettersi a un server che dovrebbe verificarsi prima che sia considerato inattivo. Fall_timeout specifica la lunghezza di ciò che il server è considerato inoperante. Una volta scaduto il tempo, i nuovi tentativi di raggiungere il server si riprenderanno. Il valore di timeout predefinito è di 10 secondi.
Una configurazione di esempio potrebbe apparire così:
```
upstream backend  {
  server backend1.example.com max_fails=3  fail_timeout=15s;
  server backend2.example.com weight=2;
  server backend3.example.com weight=4;
}
```

## Conclusione: {#conclusion}

In questo tutorial di bilanciamento del carico NGINX, abbiamo appreso di NGNIX, bilanciamento del carico e come impostare il bilanciamento del carico Nginx per distribuire il traffico a più server. Abbiamo anche esplorato diversi algoritmi di bilanciamento del carico come round-robin, hash e max fallisce. Se si esegue un'applicazione con un volume elevato e devi distribuire carico su server diversi, NGINX è una delle migliori scelte per te. E, soprattutto, è il server Web gratuito e open source al 100%.
_Le il tuo può unirsi a noi su [Twitter][7], [LinkedIn][8] e la nostra pagina [Facebook][9]. Quale altro potente bilanciamento del carico per migliorare la disponibilità e l'efficienza delle risorse dei server __Do usi? . In caso di domande o feedback, per favore [mettiti in contatto][10].

## Esplorare
Potresti trovare più articoli di seguito correlati
  * [Come proteggere e crittografare Nginx con let's Crypt su Ubuntu 20.04][11]
  * [Apache vs Nginx - Confronto dettagliato nel 2021][12]



[1]: #webserver
[2]: #loadbalancer
[3]: #setup
[4]: #upstream
[5]: #conclusion
[6]: https://products.containerize.com/solution-stack/nginx
[7]: https://twitter.com/containerize_co
[8]: https://www.linkedin.com/company/containerize/
[9]: http://facebook.com/containerize
[10]: mailto:yasir.saeed@aspose.com
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/2021/02/26/apache-vs-nginx-detailed-comparison-in-2021/
