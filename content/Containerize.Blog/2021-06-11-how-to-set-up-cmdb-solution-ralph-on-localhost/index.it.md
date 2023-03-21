---
title: "Come impostare la soluzione CMDB Ralph su localhost" 
seoTitle: "Come impostare la soluzione CMDB Ralph su localhost" 
description: "Questo tutorial riguarda la creazione di Ralph su LocalHost. Ralph è una soluzione CMDB gratuita che fornisce funzionalità per tenere traccia delle risorse e delle configurazioni." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "La soluzione di gestione patrimoniale IT riduce i costi operativi e aumenta l'efficienza. Questo articolo riguarda come impostare il software CMDB Ralph sulla macchina locale." 
url: /it/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

## La soluzione di gestione patrimoniale IT riduce i costi operativi e aumenta l'efficienza. Questo articolo riguarda come impostare il software CMDB Ralph sulla macchina locale.

{{< figure align=center src="images/ralph.png" alt="Soluzione CMDB">}}


Panoramica ## ****
Nel momento in cui le organizzazioni sono prosperate per soddisfare il ritmo della tecnologia impiegando un'enorme infrastruttura IT. Successivamente, non è meno di una sfida gestire ambienti così enormi. Richiede forza lavoro e potere tecnologico per svolgere tali compiti critici. A volte, diventa una seccatura formulare processi e procedure per gestire reti complesse di sistemi che includono stampanti, computer desktop, scanner, telefoni e altri accessori IT. Allo stesso modo, anche le configurazioni di questi nodi sono importanti in quanto vi sono elevate possibilità di fermo di qualsiasi macchina nella rete. Quindi, dovrebbe esserci un controllo coerente su queste configurazioni.
Tuttavia, ci sono molti software open source e gratuiti disponibili per tenere traccia e record di risorse. Questo software è noto come software di database di gestione della configurazione (CMDB). Di recente, [Containerize.com][1] ha pubblicato una soluzione CMDB [Ralph][2] che fornisce molte funzionalità per una migliore gestione delle risorse e della configurazione. In questo post sul blog, esploreremo Ralph coprendo i seguenti punti.
  * **[Breve introduzione del software CMDB Gestione asset Ralph][3]**
  * **[Caratteristiche di Ralph][4]**
  * **[Come impostare Ralph su localhost?][5]**
  * **[Conclusione][6]**

## BREVE INTRODUZIONE DEL SOFTWARE CMDB GESTIONE ASSET RALPH   {#Intro}
Ralph è una soluzione di gestione patrimoniale IT open source gratuita. È multipiattaforma e viene fornito con capacità di auto-osting. C'è un ecosistema completo di monitoraggio delle risorse in tempo reale. Pertanto, gli utenti possono eseguire analisi per i report. Consente agli utenti di registrare i dettagli delle risorse sul loro ciclo di vita. Inoltre, questo software di gestione delle risorse digitali open source offre spazio per l'archiviazione di informazioni sulle risorse del data center. D'altra parte, questa soluzione CMDB fornisce anche supporto per la gestione di software, licenza, certificati e altri contratti. Ralph non solo supporta la gestione delle risorse, ma fornisce anche disposizioni per eseguire azioni su tali attività. Tuttavia, le azioni sono legate alla distribuzione di un host, alla generazione di fatture, al monitoraggio del dominio o alla gestione dell'inventario.
Questa soluzione di gestione delle risorse IT emette un'interfaccia riposante. Gli sviluppatori possono integrare molte applicazioni di terze parti utilizzando gli endpoint API esposti da questo strumento gratuito open source. Inoltre, Ralph è scritto in Python insieme all'input di HTML, CSS e JavaScript. Pertanto, è disponibile una documentazione completa per lo sviluppo e la distribuzione. Il codice sorgente di questa soluzione di gestione delle azioni è disponibile su [GitHub][7].

## caratteristiche di ralph   {#features}
Ralph offre molte funzionalità. Tuttavia, menzioneremo alcune delle seguenti funzionalità chiave.
**Extensible**: questo software di gestione delle risorse digitali open source è altamente estensibile. Gli sviluppatori possono distribuirlo nei locali o sul cloud secondo le loro esigenze.
**Supporto per i data center:** Ralph offre anche supporto per i data warehouse, sale da data center, server e rack. Gli utenti possono tenere traccia di tutti i componenti, la loro rete e le configurazioni.
**REST API**: questo software CMDB gratuito è altamente personalizzabile. In effetti, fornisce un'API REST per integrazioni di terze parti. Gli sviluppatori possono estenderlo in base alle loro esigenze.
**Interfaccia utente intuitiva:** È disponibile un'interfaccia utente logica in questa soluzione CMDB in cui gli utenti possono navigare facilmente. Inoltre, la dashboard di amministrazione fornisce vari widget che mostrano i dati in arrivo in tempo reale.
**Interfaccia della riga di comando**: Ralph presenta un'interfaccia di comando che fornisce una funzione per scoprire gli indirizzi MAC per la distribuzione degli host.
**Supporto per attività non fisiche**: questa soluzione di gestione delle apparecchiature non solo fornisce supporto per le risorse fisiche, ma gestisce anche risorse non fisiche come domini, software e licenze.

## Come impostare Ralph su LocalHost?   {#impostare}
In questa sezione, passeremo attraverso il processo di installazione del software di gestione delle risorse Ralph sulla macchina locale. È abbastanza facile da configurare e utilizzare.
Prima di passare alla sezione successiva, assicurati di aver installato i seguenti prerequisiti.
  * [Docker-compose][8]
  * [Docker][9]
La maggior parte del software open source offre immagini Docker per le distribuzioni su varie piattaforme. Dà facilità agli sviluppatori e accelera il processo di sviluppo e distribuzione.
Una volta installati i prerequisiti, accendi Docker. Ora, apri il terminale ed esegui il seguente comando per creare una directory vuota:
```
mkdir ralph<br>cd ralph
```
Successivamente, crea un nuovo file chiamato "Docker- compose.yml" e popolalo con i seguenti dati.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Ora, salva il file ed esegui il seguente comando per effettuare la build:
```
docker-compose build

```
Dopo una build riuscita, eseguire il seguente comando per il database:
```
docker-compose run –rm web /root/init.sh

```
Se tutto va bene, esegui il seguente comando per far girare il contenitore Docker:
```
docker-compose up -d
```
Dopo aver eseguito quel comando, i container Docker saranno attivi e funzionanti come mostrato nell'immagine seguente:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Soluzione CMDB">}}

Infine, aprire il browser e accedere all'applicazione a questo indirizzo http://127.0.0.1.
Mostrerà la pagina di accesso come mostrato nell'immagine seguente:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Soluzione CMDB">}}


## conclusioni   {#conclusion}
Dopo aver attraversato questo post sul blog di tutorial CMDB, una cosa è chiara che la gestione patrimoniale è quasi impossibile senza una buona soluzione CMDB. Il software di gestione delle risorse ha ruoli specifici nella gestione e monitoraggio di risorse, configurazioni e loro relazioni. Ci sono disposizioni per tenere traccia di tali cambiamenti apportati a malapena su attività digitali o fisiche. Questi strumenti gratuiti sono facili da configurare, utilizzare e sono dotati di documentazione e guida dettagliati. Infine, [**containerize.com **][1] ha lo scopo di scrivere articoli su ulteriori prodotti open source. Pertanto, rimani in contatto con questo [][10]**  [software CMDB][11]** per gli ultimi aggiornamenti.

## Esplorare
  * **[software CMDB][11]**
  * **[Ralph][2]**
  *[ **automatizza le operazioni aziendali utilizzando software gratuito e open source** ][12]
  * **[Tendenze di sviluppo del software per cercare nel 2021][13]**

  
[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
