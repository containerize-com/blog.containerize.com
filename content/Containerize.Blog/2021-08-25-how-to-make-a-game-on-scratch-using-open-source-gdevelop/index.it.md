---
title: "Come fare un gioco su graffio usando open source gdevelop" 
seoTitle: "Come fare un gioco su graffio usando open source gdevelop" 
description: "Come fare un gioco da zero? GDEVVive offre un'interfaccia utente logica piena di molti componenti e comportamenti per creare videogiochi per web, desktop, iOS e Android." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Questo tutorial sullo sviluppo del gioco spiega le basi della costruzione di un gioco di corse di camion. Puoi installarlo o utilizzare la sua app online per creare un videogioco entusiasmante." 
url: /it/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Questo tutorial di sviluppo del gioco spiega le basi della costruzione di un gioco di corse di camion. Puoi installarlo o utilizzare la sua app online per creare un videogioco entusiasmante.

{{< figure align=center src="images/gdevelop-game.png" alt="Come fare una partita a scratch">}}


Panoramica ##  **** 
In The Near Past, abbiamo pubblicato molti post sul blog su software di sviluppo di giochi gratuito open source come [il top 5 software di sviluppo di giochi gratuito nell'anno 2021][1], [Introduzione allo sviluppo del gioco usando i superpowers][2], [gioco Tutorial di sviluppo | Movimento dei giocatori in GDEVVive][3], [tutorial di sviluppo del gioco HTML5 per programmatori di videogiochi][4], [come il settore globale del gioco che sfrutta il software open source][5] e [tutorial GDEVive per i principianti per iniziare lo sviluppo del gioco][6 ]. Gli ultimi progressi nell'era di Internet hanno portato nuove tendenze nel settore dei videogiochi. Una piattaforma di costruzione di giochi open source offre un ecosistema completo per sviluppare giochi in modo indipendente e gli sviluppatori quindi maturano quella piattaforma secondo le esigenze. In questo post sul blog, impareremo come fare un gioco su scratch usando [GDevelop][7] coprendo i seguenti punti.
  * **[Perché dovremmo usare GDevelop?][8]**
  * **[Impostazione del progetto][9]**
  * **[Come preparare lo sfondo e l'oggetto?][10]**
  * **[Aggiunta di Behviors all'oggetto][11]**
  * **[Running the Game][12]**
  * **[Conclusione][13]**

## Perché dovremmo usare GDevelop?   {#Perché}
[GDEVVive][7] è un software di gioco open source. Viene fornito con capacità di auto-hosting ed è di natura multipiattaforma. Puoi scaricarlo e installarlo, oppure puoi utilizzare la sua versione online per giocarci. Gli utenti non hanno bisogno di acquisire conoscenze di programmazione per utilizzare questo costruttore di giochi. Soprattutto, offre un'interfaccia utente di trascinamento che presenta comportamenti, modelli e oggetti di gioco pre-costruiti. Questo software di sviluppo del gioco gratuito è altamente configurabile e offre integrazioni con librerie di terze parti. Per ulteriori informazioni su questo strumento gratuito, è possibile controllare questo link per apprendere ulteriormente le sue funzionalità e il processo di configurazione.

## Impostazione del progetto   {#setting}
In questa sezione, creeremo il nostro progetto per la costruzione di un gioco di corse di camion con alcune funzionalità di base. Segui questo [link][6] se si desidera impostare sulla macchina locale o puoi utilizzare la versione online andando a questo [link][14].
Quindi, troverai la seguente schermata una volta clicca su "Crea un nuovo progetto" e quindi fai clic su "Game vuoto".

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Come fare una partita a scratch">}}

Puoi vedere la barra dei menu sul lato sinistro della finestra. Ora, fai clic sulle "scene", quindi fai doppio clic sul pulsante "Fare clic per aggiungere una scena". Successivamente, atterrerai allo schermo del gioco in cui puoi creare oggetti di gioco, background e comportamenti. Andando avanti, fai clic su "Aggiungi un nuovo oggetto" posizionato sul pannello laterale di destra e vedrai la finestra seguente.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Tutorial GDEVVive">}}


## come preparare lo sfondo e l'oggetto?   {#preparare}
Nella barra di ricerca, cerca l'oggetto del camion e fai doppio clic su di esso e premi "Aggiungi al gioco" una volta che arriva nei risultati. Ripeti questo passaggio per le due ruote e un oggetto della piattaforma. Ora, fai clic con il pulsante destro del mouse sull'oggetto Greenfloor e modifica.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="Tutorial di sviluppo del gioco">}}


## Aggiunta di Behviors all'oggetto   {#add}
Quindi, trascina e lascia cadere il Greenfloor sulla schermata del gioco e regola l'altezza e la larghezza in base al tuo desiderio. Trascina l'oggetto del camion e lascialo cadere sulla schermata del gioco e quindi gli oggetti della ruota. Andando avanti, fai clic con il pulsante destro del mouse sul corpo del camion e premi "Modifica Truckbody Object", fai clic sui comportamenti, fai clic su "Aggiungi un comportamento all'oggetto" e fai clic su "Physics Engine 2.0" e vedrai la seguente finestra.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Come fare una partita a scratch">}}

In questa finestra, è possibile modificare le configurazioni come densità, larghezza e altezza. Ora, ripeti lo stesso processo per l'oggetto Greenfloor ma mantieni il tipo "statico" e premi il pulsante "Applica". Ancora una volta, modifica l'oggetto Truckbody, premi "Modifica punti", premi "EDD Punti" e quindi inserisci il nome della ruota anteriore (ovvero FW in questo tutorial). Verrà creato un punto sull'oggetto, basta trascinare quel punto sulla posizione della ruota. Ripeti anche questo processo per la ruota posteriore e crea da x e y a 0 come mostrato nell'immagine seguente.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="Tutorial di sviluppo del gioco">}}

Successivamente, modifica entrambi gli oggetti della ruota e regola i loro punti. Inoltre, vai di nuovo all'opzione di modifica delle ruote, premi la scheda "Comportamento", seleziona "Physics Engine 2.0" e imposta i valori di tipo, raggio e densità come mostrato nell'immagine seguente.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="software di progettazione del gioco">}}

Ora, fai clic sulla scheda "Nuova scena", premi "Aggiungi nuovi eventi", premi "Aggiungi condizione", cerca "all'inizio della scena" e premi "OK". Quindi, premi "Aggiungi azione" Ricerca "Posizione X Camera Center" e imposta le seguenti configurazioni.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="software di sviluppo del gioco gratuito">}}

Ora, copia l'azione ma assicurati che l'azione copiata sia impostata su "Y". Aggiungi un'altra azione denominata "Cambia la fotocamera zoom", impostalo su 0,4 e trascina questa azione in alto. Aggiungi un'altra azione, cerca "Aggiungi un giunto ruota" e imposta le configurazioni per entrambe le ruote come mostrato di seguito.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Guida allo sviluppo del gioco">}}

Successivamente, aggiungi una nuova condizione, cerca "tasto premuto" e impostalo su sinistra. Ora, aggiungi azione, seleziona la prima ruota, cerca la velocità lineare X ", il segno di modifica per" sottrarre "e impostare il valore 50. Ripeti questo passaggio per la chiave giusta ma assicurati che il segno di modifica in Aggiungi come mostrato di seguito.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="Tutorial di sviluppo del gioco">}}


## esegue il gioco   {#run}
Una volta completati tutti i passaggi. È tempo di eseguire il gioco premendo il pulsante posizionato nell'angolo in alto a sinistra. Lancerà il gioco nella nuova finestra.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Come fare una partita a scratch">}}


## conclusioni   {#conclusion}
Questa è la fine di questo post sul blog e hai sicuramente saputo che come fare un gioco a scratch. Tuttavia, ci sono molti software di progettazione di giochi gratuiti ** disponibili sul mercato poiché questo settore sta guadagnando popolarità e domanda. Ci sono diversi motivi dietro di esso come il software open source sono scalabili, configurabili, economici e facili da mantenere. Inoltre, la domanda di costruttori di giochi multipiattaforma sta aumentando mentre gli sviluppatori trovano comodo costruire un gioco che funziona su tutte le piattaforme popolari come Android, iOS, Web e desktop. D'altra parte, l'avvento della pandemia ha cambiato la vita delle persone e ora preferiscono rimanere in casa. Quindi, le persone tendono a giocare ai videogiochi nel loro tempo libero.
Infine, [containerize.com][15] è pronto a migliorare la sua base di tutorial con alcuni tutorial di sviluppo del gioco più interessanti  **** . Si prega di rimanere in contatto con questa categoria [software di sviluppo del gioco][16] per aggiornamenti regolari.

## Esplorare
  * **[GDEVVive][7]**
  * **[Godot][17]**
  * **[Superpowers][18]**
  * **[Cocos Creator][19]**
  * **[Panda3d][20]**
  * **[Playcanvas][21]**
  * **[Introduzione allo sviluppo del gioco usando i superpoteri][2]**
  * **[Tutorial di sviluppo del gioco | Movimento del giocatore in GDEVVive][3]**
  * **[Tutorial di sviluppo del gioco HTML5 per programmatori di videogiochi][4]**
  * **[In che modo l'industria globale del gioco sfrutta il software open source][5]**
  * **[Tutorial GDevelop per i principianti per iniziare lo sviluppo del gioco][6]**
  *[ **Top 5 software di sviluppo del gioco gratuito nell'anno 2021 ** ][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
