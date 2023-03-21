---
title: "Come configurare il software di chat live sul sito Web | Rocket.Chat" 
seoTitle: "Come configurare il software di chat live sul sito Web | Rocket.Chat" 
description: "Rocket.Chat è facile da configurare, aiuta i team e i clienti a comunicare in modo efficiente. Questo software di chat dal vivo è open-source, multipiattaforma e autosufficiente." 
date: Thu, 24 Dec 2020 10:37:56 +0000
author: Assad Mahmood
summary: "Il software di supporto alla chat live offre comodità ed efficienza nella fornitura dell'assistenza clienti. Impariamo come installare Rocket.chat sul tuo sito web aziendale." 
url: /it/how-to-setup-live-chat-software-on-website-rocket-chat/
categories: ['Live Chat']
---

## Il software di supporto alla chat live offre comodità ed efficienza nella fornitura di assistenza clienti. Impariamo come installare Rocket.chat sul tuo sito Web aziendale.

{{< figure align=center src="images/rocketchat-1.png" alt="Software di chat dal vivo">}}


Panoramica ## 
Abbiamo pubblicato alcuni post di blog relativi a software di chat live open source come [il top 5 software di chat di assistenza clienti gratuiti per il sito Web][1], [messaggi istantanei di WordPress utilizzando Rocket.chat][2] e altri. In questo post sul blog, passeremo attraverso il miglior software di assistenza clienti Rocket.Chat. Con l'enorme aumento del traffico online, le aziende hanno difficoltà a intrattenere un gran numero di domande in tempo. I visitatori vengono sul tuo sito, tendono ad acquisire alcune informazioni relative ai prodotti o ai servizi e lasciano il tuo sito in caso di non ricevere risposta. Pertanto, l'assistenza alla chat dal vivo ti aiuta a salutare i tuoi clienti in modo pro-previsto mentre passano attraverso il tuo sito web. Oppure, nel caso in cui abbiano bisogno di aiuto e chiarimenti per prendere le loro decisioni di acquisto.
Il supporto della chat dal vivo aumenta la possibilità di convertire un visitatore in un cliente. Ci sono un sacco di software di supporto in chat open source****e disponibile. Ma Rocket.Chat ha guadagnato molta attrazione per le sue caratteristiche. E viene trattata come un'alternativa al software di chat leader del settore come Slack e Microsoft Team. In questo articolo, impareremo come installare Rocket.chat su un server e quindi come configurarlo sul tuo sito Web. Quindi, iniziamo coprendo i seguenti punti.
* [**Cos'è Rocket.cha**t?][3]
* **[Come installare Rocket.Chat?Ghy4 Lasting*
* **[Abilita caratteristica di chat live][5]**
* **[Installa widget di chat live sul tuo sito Web][6]**
* **[Conclusione][7]**

## cos'è Rocket.chat   {#intro}
[Rocket.chat][8] è tra il popolare software di chat live**. Ha una versione di chat live gratuita come edizione della community e una versione di chat live ospitata a pagamento per grandi aziende con funzionalità di chat interna private. Rocket.Chat supporta l'assistenza clienti di chat dal vivo insieme alla funzione di chat di team. È multipiattaforma e offre supporto per quasi tutte le piattaforme popolari come Windows, Mac, Linux e app mobili. Questo**Software di assistenza clienti**è sicuro, estensibile e offre integrazione con app popolari di terze parti come Trello, Google Drive e altro ancora. Ci sono molte potenti funzionalità che Rocket.Chat offre come più stanze, chat room e gruppi privati, notifiche, emoji, autenticazione LDAP e interfaccia riposante. Inoltre, questo strumento gratuito è facile da distribuire e viene fornito con funzionalità di auto-osting. Inoltre, offre un'interfaccia logica e intuitiva in cui gli utenti possono modificare temi come scuro, luce o nero.
Questo**software di supporto alla chat**è scritto in JavaScript, tutta la documentazione è disponibile per quanto riguarda lo sviluppo e la distribuzione. Pertanto, è possibile trovare tutto il codice sorgente su [github][9]. Per maggiori dettagli, puoi leggere su Rocket.chat [qui][10].

## come installare Rocket.chat   {#install}
Quindi, sappiamo cosa è Rocket.chat e in questa sezione, impareremo come installare questo software di chat dal vivo. Puoi installare Rocket.Chat da una varietà di mercati, come Ubuntu Snaps, Dockerhub o installarlo sul tuo server. In questo articolo, ci concentreremo sull'installazione di Rocket.Chat tramite Snaps su Ubuntu. Che è il metodo di installazione più veloce.
Gli snap sono sicuri. Rocket.Chat e tutte le sue dipendenze sono isolate dal resto del sistema. Gli snap aggiornano anche quando c'è una nuova versione.
In primo luogo su Ubuntu, installa Snap con il seguente comando
```
sudo apt-get install snapd
```
Quindi installare Rocket.Chat Server tramite comando snap.
```
sudo snap install rocketchat-server
```
Snap è già attivo e funzionante. Sfoglia su http: // localhost: 3000 e imposta Rocket.chat. È possibile configurare il proxy Nginx per mappare l'istanza di Rocket.Chat con il tuo dominio.

## Abilita Funzione di chat live   {#enable}
Una volta installato e configurato il software Rocket.Chat, il passaggio successivo consente di consentire le sue funzionalità. Questa sezione del post sul blog descrive come abilitare**software di supporto alla chat**sul tuo sito Web. Per abilitare la funzione LiveChat sull'istanza di Rocket.Chat:
1. Vai a**Amministrazione**

{{< figure align=center src="images/go-to-administration-1024x324.png" alt="Amministrazione Rocket.Chat">}}

2. Cerca "**Omnichannel**" in**Impostazioni**e abilitalo.

{{< figure align=center src="images/search-omini-in-settings-1024x453.png" alt="Rocket.Chat Search Omini">}}

Una volta abilitato, un amministratore avrà accesso alle impostazioni del pannello omnicanale tramite un nuovo menu chiamato Omnichannel nel menu a discesa in alto a sinistra.

{{< figure align=center src="images/omini-channel-menu-1024x324.png" alt="Rocket.Chat Omini Channel">}}

E quindi configurare il look e la sensazione del widget di chat live

{{< figure align=center src="images/livechat-widget-demo-1-1024x724.png" alt="Rocket.Chat LiveChat Widget">}}


## **Installa widget di chat live sul tuo sito Web** {#widget}
In questa sezione, installeremo widget di chat live sul sito Web aziendale. Ora, per accedere a**Installazione LiveChat**Impostazioni:
Vai all'installazione**LiveChat**nelle impostazioni del pannello omnicanale, come mostrato di seguito, e copia il pezzo di codice dato.

{{< figure align=center src="images/widget-install-1-1024x488.png" alt="Rocket.Chat Widget">}}

E incolla questo codice sopra l'ultimo tag sul tuo sito; Il widget di chat dal vivo apparirà nell'angolo in basso a destra della tua pagina web. Come mostrato di seguito secondo le configurazioni di chat live.
{{_LINE_46_}}

{{< figure align=center src="images/rocket.chat-widget-edited.png" alt="Software di chat dal vivo">}}

{{_LINE_48_}}

## conclusioni   {#conclusion}
Questo ci porta alla fine di questo post sul blog. In questo articolo, abbiamo attraversato ciò che è Rocket.Chat, come installare Rocket.Chat e ti abbiamo anche mostrato come installarlo sul tuo server tramite Ubuntu Snaps. Abbiamo anche imparato come abilitare la funzione di chat live e installare il widget sul tuo sito web. Inoltre,**Software di assistenza clienti**è diventato un componente indispensabile di qualsiasi sito Web aziendale a causa di alcuni fattori che abbiamo discusso sopra. Tuttavia, questo post sul blog ti aiuterà davvero se stai cercando di distribuire un software di chat live open source sul tuo sito Web aziendale. Inoltre, ci sono molti altri**software di supporto alla chat**e articoli disponibili nella sezione "Esplora" di seguito che puoi controllare.
Infine, [**Containerize.com**][11] sta scrivendo articoli su ulteriori app di chat open source**.**Pertanto, rimani in contatto con la categoria [CHAT Live][12] per aggiornamenti regolari. Inoltre, puoi seguirci sui nostri account di social media [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Esplorare
È possibile trovare i seguenti collegamenti pertinenti.
  * [Zulip][16]
  * [Let-chat][17]
  * [Botpress][18]
  * [Come creare un bot FAQ basato sull'intelligenza artificiale per la tua azienda usando BotPress][19]
  * [Top 5 software di chat di assistenza clienti gratuiti per il sito Web][1]
  * [Messaggi istantanei WordPress usando Rocket.chat][2]
  * [Automatizza le operazioni aziendali utilizzando software gratuito e open source][20]
  * [Come creare ed eseguire un bot in Rocket.chat usando BotPress][21]
  * [Automatizza le operazioni aziendali utilizzando software gratuito e open source][20]

  
[1]: https://blog.containerize.com/live-chat/top-5-free-customer-support-chat-software-for-website/
[2]: https://blog.containerize.com/blogging/instantly-communicate-with-customers-using-wordpress-and-rocket-chat/
[3]: #intro
[4]: #install
[5]: #enable
[6]: #widget
[7]: #conclusion
[8]: https://products.containerize.com/live-chat/rocketchat/
[9]: https://github.com/RocketChat/Rocket.Chat
[10]: https://products.containerize.com/live-chat/rocketchat
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/live-chat/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://products.containerize.com/live-chat/zulip/
[17]: https://products.containerize.com/live-chat/lets-chat/
[18]: https://products.containerize.com/live-chat/botpress/
[19]: https://blog.containerize.com/live-chat/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
[20]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[21]: https://blog.containerize.com/live-chat/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
