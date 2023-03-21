---
title: "Introduzione allo sviluppo del gioco usando i superpoteri" 
seoTitle: "Introduzione allo sviluppo del gioco usando i superpoteri" 
description: "Superpowers è un produttore di giochi 3D open source con collaborazione in tempo reale. Questo tutorial riguarda l'inizio dello sviluppo del gioco usando i superpoteri." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "Il comportamento e il movimento degli oggetti di gioco sono controllati dalle animazioni. In questo tutorial sullo sviluppo del gioco, impareremo come animare i personaggi del gioco." 
url: /it/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## Il comportamento e il movimento degli oggetti di gioco sono controllati dalle animazioni. In questo tutorial sullo sviluppo del gioco, impareremo come animare i personaggi del gioco.

{{< figure align=center src="images/super.png" alt="Iniziare con lo sviluppo del gioco">}}


Panoramica ## **** 
Nella nostra serie di tutorial di sviluppo di giochi open source, abbiamo pubblicato post sul blog su alcuni argomenti popolari come [Tutorial di sviluppo del gioco | Movimento dei giocatori in GDEVVive][1], [tutorial di sviluppo del gioco HTML5 per programmatori di videogiochi][2], [come il settore globale del gioco che sfrutta il software open source][3] e [tutorial GDEVVive per i principianti per iniziare lo sviluppo del gioco][4 ]. Questo articolo di tutorial riguarda l'inizio con lo sviluppo del gioco utilizzando Open Source [superpoteri][5] coprendo i seguenti punti.
  * **[tipi di animazioni di gioco][6]**
  * **[Come creare sprite?][7]**
  * **[Lavorare con le scene][8]**
  * **[Avvio del gioco su localhost][9]**
  * **[conclusione][10]**
Ci sono molti software di sviluppo del gioco open source per principianti disponibili con funzionalità di auto-hosting. Tuttavia, [SuperPowers][5] è un software di creazione di giochi 2D e 3D multipiattaforma. Fornisce librerie integrate ed esempi di gioco che rendono facile lo sviluppo del gioco per gli sviluppatori di giochi. Questa app di progettazione del gioco gratuita è scritta in TypeScript e tutta la documentazione è disponibile su [GitHub][11] per quanto riguarda lo sviluppo e la distribuzione. In questo post sul blog, esploreremo i superpoteri per quanto riguarda il loro utilizzo.

## tipi di animazioni di gioco   {#Types}
Le animazioni sono una parte vitale dei videogiochi. I personaggi dei giochi devono rispondere alle azioni dell'utente, l'animazione dovrebbe essere fluida e brusca. Si tratta di gestire più frame e animatori affinano quei frame per produrre effetti in movimento. Inoltre, ci sono animazioni 2D e 3D in cui gli oggetti sembrano muoversi attraverso lo spazio tridimensionale. Gli sviluppatori di giochi e i graphic designer creano modelli 3D. Le animazioni dipendono dalla natura del gioco e i tipi più comuni sono i seguenti.
**Walk Animation: ** Walk Animation parla della creazione di un processo a piedi in cui i personaggi animano ogni passo e danno illustrazioni a piedi.
**Animazione inattiva: ** Questo è un tipo molto importante di animazione in cui il personaggio non fa nulla perché l'utente non preme alcun controller.
**Esegui animazione **: l'animazione RUN fa parte di ogni gioco in cui l'oggetto Game esegue il ciclo di corsa. Questo tipo è il tipo più comune e richiede più attenzione da parte dello sviluppatore.
**Animazione da combattimento **: nei giochi di combattimento, più personaggi di gioco combattono tra loro.
**Jump Animation **: questo tipo di animazione richiede migliori abilità e competenze. Il personaggio comprime e rilascia il corpo per eseguire l'illustrazione del salto.

## come creare sprite?   {#sprites}
Questa sezione della Guida per la creazione di giochi consente agli utenti di creare progetti e iniziare a creare sprite per il gioco. Gli sprite sono immagini non statiche o grafiche che non sono solo utilizzate nei giochi ma anche in parte del web design. Questi sono normalmente disegnati su uno sfondo che viene aggiornato costantemente.
Prima di andare avanti, assicurati di aver impostato superpoteri sulla macchina. Puoi seguire questo link [tutorial di sviluppo del gioco HTML5 per i programmatori di videogiochi][2] per impostare questa piattaforma di creazione di giochi gratuiti.
Innanzitutto, apri l'applicazione nel browser e creiamo un nuovo progetto vuoto. come mostrato nell'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Iniziare con lo sviluppo del gioco">}}

Atterrete nello spazio del progetto dopo aver creato il nuovo progetto vuoto. Ci sono opzioni di menu nel pannello laterale a sinistra. Quindi, fai clic sul pulsante "+" per aprire la finestra di dialogo Asset. Seleziona l'opzione Sprite e premi crea.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Guida alla creazione di giochi">}}

Ora, caricalo l'immagine su cui aggiungeremo comportamenti. Puoi farlo facendo clic sul pulsante posizionato nell'angolo in alto a destra. Questo pannello riguarda la configurazione dell'oggetto.
Successivamente, puoi impostare la dimensione della griglia secondo la tua scelta. Ci sono due parti della tela. La parte superiore mostra il foglio completo in cui la parte inferiore mostra la parte selezionata su cui siamo destinati ad applicare l'animazione. Puoi farlo premendo il pulsante "Imposta" sul pannello laterale di destra come mostrato nell'immagine in basso.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="Tutorial di sviluppo del gioco">}}

Dopodiché, creiamo animazioni. Possiamo farlo facendo clic sul pulsante "Nuovo" nella scheda Animazione. Puoi vedere l'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="Software di sviluppo del gioco per principianti">}}


## lavorando con le scene   {#Scenes}
In questa sezione, aggiungeremo una scena al nostro gioco. Per questo, apri ancora una volta la finestra di dialogo Asset e seleziona "Scena" e premi il pulsante Crea. Ora crea un attore facendo clic sul pulsante Star disponibile nell'angolo in alto a destra come mostrato nell'immagine in basso.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="Come fare una partita a scratch per i principianti">}}

Successivamente, crea un nuovo componente facendo clic sul pulsante "Nuovo componente" posizionato sul pannello laterale di destra. Seleziona "Renderer Sprite" e premere Crea. Quindi, trascina lo sprite creato dal pannello laterale a sinistra e lascialo cadere sotto la sezione del rendering sprite. Inoltre, crea un altro attore chiamato "Camera" e allo stesso modo crea un nuovo componente chiamato Camera.
È possibile modificare la modalità fotocamera, quindi cambiarla in modalità "ortografica" come mostrato nell'immagine seguente.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Iniziare con lo sviluppo del gioco,">}}

Nell'angolo in basso a sinistra, vai all'opzione Impostazioni e aprila. Sotto le sezioni "sprite" e "mappa delle piastrelle", inserire 16 contro "pixel per unità". Quindi nella "modalità fotocamera predefinita", selezionare 2D nella sezione "Scena". Inoltre, nella sezione "Mappa delle piastrelle", larghezza predefinita 36, ​​altezza predefinita 28 e dimensione della griglia set di piastrelle 16. Non è necessario salvarla, piuttosto tutto è su Autosave.

## lancia il gioco su localhost   {#local}
Quindi, siamo vicini al lancio dell'animazione Superpowers del nostro primo gioco. Tuttavia, vai di nuovo alla scheda Impostazioni e trascina la scena dal pannello laterale di sinistra e lasciala cadere contro la "scena di avvio" come mostrato nell'immagine qui sotto.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="Come fare una partita a scratch per i principianti">}}

Ora, fai clic su "Player" e sotto il componente "Sprite Rieder", seleziona Animazione contro l'attributo "Animazione". Infine, avvia l'applicazione facendo clic sul pulsante posizionato nell'angolo in alto a sinistra. La nuova scheda mostrerà gli oggetti in movimento sullo schermo.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Iniziare con lo sviluppo del gioco">}}


## conclusioni   {#conclusion}
Questa è la fine del tutorial in cui abbiamo imparato a fare un gioco a scratch per i principianti. Pertanto, iniziare con lo sviluppo del gioco diventa facile quando è disponibile una documentazione dettagliata del software di sviluppo del gioco. Infine, [**containerize.com** ][12] è in un processo coerente di scrittura su ulteriori argomenti e prodotti open source. Pertanto, rimani in contatto con questa categoria [software di sviluppo del gioco][13] per aggiornamenti regolari.

## Esplorare
  * [GDEVVive][14]
  * [Godot][15]
  * [Superpowers][5]
  * [Cocos Creator][16]
  * [Panda3d][17]
  * [Playcanvas][18]

  
[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
