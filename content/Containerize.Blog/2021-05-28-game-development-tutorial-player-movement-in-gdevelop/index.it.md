---
title: "Tutorial di sviluppo del gioco | Movimento del giocatore in GDEVVIO" 
seoTitle: "Tutorial di sviluppo del gioco | Movimento del giocatore in GDEVVIO" 
description: "Segui questo tutorial di sviluppo del gioco per conoscere le funzioni di gioco di base. Gdevelop è un software di creazione di giochi gratuiti per la costruzione e la pubblicazione di giochi." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Spostare gli oggetti sullo schermo è una parte cruciale di qualsiasi gioco. In questa guida allo sviluppo del gioco, impareremo come controllare e spostare gli oggetti di gioco in GDEVVive." 
url: /it/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Moving Objects sullo schermo è una parte cruciale di qualsiasi gioco. In questa guida allo sviluppo del gioco, impareremo come controllare e spostare gli oggetti di gioco in GDEVVive.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Tutorial di sviluppo del gioco">}}


Panoramica ##****
La comunità open source sta emergendo con il passaggio di ogni minuto. Ci sono giochi multipiattaforma, giochi per dispositivi mobili e giochi desktop. Vari tipi di giochi includono giochi d'azione, giochi di avventura, giochi di ruolo, giochi sportivi, giochi di puzzle, giochi di simulazione e molti altri. Pertanto, tutti questi diversi tipi di gioco hanno dato una spinta immensa al traffico poiché gli utenti di tutte le fasce di età tendono a giocare a questi giochi.
Inoltre, la pandemia ha portato un enorme cambiamento nello stile di vita delle persone che vivono in tutto il mondo. Le persone ora hanno più tempo. Tutte le attività offline sono diventate online. Pertanto, tendono a optare per il software online per svolgere compiti professionali e videogiochi in caso di intrattenimento. Per tutti questi motivi, questo settore ha guadagnato la sostenibilità e il supporto di utenti e sviluppatori. Nel recente passato, abbiamo scritto su argomenti come [HTML5 Game Development Tutorial per i programmatori di videogiochi][1], [come l'industria globale che sfrutta il software open source][2] e [tutorial GDEvelop per i principianti per iniziare lo sviluppo del gioco][3]. In questo tutorial di sviluppo del gioco, tratteremo i seguenti punti.
* **[Funziona l'esplorazione di GDevelop][4]** 
* **[lavorando su un gioco][5]** 
* **[Conclusione][6]** 

## Presentano l'esplorazione di GDevelop {#features}

[GDEVVive][7] è una piattaforma di costruzione di giochi open source. È altamente estensibile e offre un'interfaccia logica in cui gli utenti possono navigare facilmente. Questo software gratuito è scritto in C ++, TypeScript e JavaScript. Inoltre, è disponibile una documentazione completa per lo sviluppo e la distribuzione. Tutto il codice sorgente è disponibile su GitHub. Inoltre, ci sono molte caratteristiche che rendono questo software che rendono il software di spicco. Vediamo alcune delle caratteristiche chiave.
**Cross-piattaforma** : questa piattaforma di creazione di giochi è multipiattaforma e può essere distribuita su quasi tutti i sistemi operativi popolari come MacOS, Linux e Windows.
**Opzioni di esportazione** : GDEVVive consente agli utenti di esportare giochi sviluppati con un solo clic per Android, iOS e Web. I proprietari di giochi possono visualizzare annunci video sui loro giochi e può essere possibile con il supporto di ADMOB.
**Rich Game Objects** : questo produttore di giochi open source fornisce una vasta gamma di oggetti di gioco come sprite con animazioni, esplosioni di fuoco e altri effetti con l'aiuto di emettitori di particelle. Testo formattato, video incorporati e disegni forme personalizzate sono disponibili per portare effetti accattivanti nei giochi.
**Comportamenti versatili** : In questo articolo di sviluppo del gioco di base, ti mostreremo come possiamo aggiungere comportamenti diversi agli oggetti del gioco. Ci sono più comportamenti disponibili che sono pronti per l'uso e gli utenti possono svilupparsi ulteriormente secondo i requisiti. Succede tutto in una questione di pochi clic del mouse.
**Interfaccia avanzata** : in questo tutorial di progettazione del gioco, vedremo l'interfaccia utente di questo motore di gioco 3D. Gli utenti possono trascinare e rilasciare vari elementi di gioco e oggetti.

## Lavorando su un gioco {#working}

Questa sezione del tutorial di sviluppo del gioco elabora lo sviluppo del gioco di base con GDEVVive. Prima di andare oltre, assicurati di aver installato GDEVVive localmente sulla macchina.
Puoi visitare questo tutorial [GDevelop Tutorial per i principianti per iniziare lo sviluppo del gioco][3] per conoscere la creazione di questo editore di giochi su LocalHost.
Ora, apri l'editor e crea un nuovo progetto. In questo tutorial, creeremo una cartella su Google Drive per salvare i file di gioco. Ora fai clic su "Crea un nuovo progetto", aprirà una nuova finestra di dialogo, seleziona l'opzione "Empty Game" per iniziare a costruire un nuovo gioco.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Tutorial di sviluppo del gioco">}}

Nella barra del menu del progetto lato sinistro, fai clic su "Salva come" per salvare il gioco.
In primo luogo, aggiungiamo una scena. Per questo, fai clic sull'opzione "Scene" e rinominalo ad esempio "Prima scena" in questo tutorial mostrato nell'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" piattaforma di costruzione di giochi">}}

Dopo aver creato la scena, aprila e aggiungi un oggetto. Per l'aggiunta di un oggetto, fare clic su "Aggiungi un nuovo oggetto" che appare sul pannello laterale di destra. Alla fine, aprirà una nuova finestra di dialogo contenente risorse diverse. Tuttavia, selezioniamo l'oggetto "nave rossa" premere "Aggiungi al gioco" e chiudiamo la finestra di dialogo.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Guida allo sviluppo del gioco">}}

Successivamente, vedrai un oggetto che appare sul pannello laterale a sinistra. Trascinalo sulla schermata principale e premi il pulsante che appare nell'angolo in alto a sinistra per avviare il gioco. Quindi, aprirà il gioco in una nuova finestra come mostrato nell'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Tutorial di sviluppo del gioco">}}

Fino ad ora, non puoi giocare con questo oggetto in quanto non vi è alcun comportamento aggiunto. Quindi, aggiungiamo un comportamento a questo oggetto. Per questo, fai clic sull'oggetto della nave e premi "Modifica oggetto". Aprirà una nuova finestra di dialogo, passerà alla scheda Comportamenti, seleziona "Movimento dall'alto verso il basso" e premi "Applica". Ora, visualizza in anteprima il gioco e vedrai che puoi spostare l'oggetto della nave sullo schermo usando i tasti freccia della tastiera. Ora noterai che l'oggetto navale si spenga dallo schermo. Pertanto, per risolvere questo problema, modifichiamo l'oggetto e navigiamo verso i comportamenti. Fai clic su "Aggiungi un comportamento all'oggetto". Ora, vai a "Cerca nuovi comportamenti" e cerca il comportamento "Resta sullo schermo" nella barra di ricerca come mostrato nell'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="GDEVVIO">}}

Quindi, selezionalo e installalo nel progetto e premi applicare. Un'altra cosa è regolare il punto centrale dell'oggetto. Quindi, andiamo di nuovo alle proprietà dell'oggetto e "Modifica punti" che appaiono in basso. Atterrete sulla schermata seguente.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Tutorial di progettazione del gioco">}}

Quindi, trascina il segno che appare nell'angolo in alto a sinistra al centro dell'oggetto, quindi chiudere e applicare. Ora, se rilanci il gioco, vedrai le modifiche.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Tutorial di sviluppo del gioco">}}


## Conclusione {#Conclusione}

Questa è la fine di questo tutorial di sviluppo del gioco. Spero che questo post sul blog sia utile per gli sviluppatori di giochi. Questo tutorial ti ha permesso di lavorare con gli oggetti di gioco e aggiungere comportamenti. In futuro, Containerize.com pubblicherà post di blog e articoli di tutorial su ulteriori software di progettazione di videogiochi open source. Pertanto, rimanete in contatto con questa categoria [software di sviluppo del gioco][8] su [Containerize.com][9] per aggiornamenti regolari.

## Esplorare
  * [GDEVVive][7]
  * [Godot][10]
  * [Superpowers][11]
  * [Cocos Creator][12]
  * [Panda3d][13]



[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/it/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
