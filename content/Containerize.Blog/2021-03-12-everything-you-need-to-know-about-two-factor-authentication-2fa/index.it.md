---
title: "Tutto ciò che devi sapere sull'autenticazione a due fattori (2FA)" 
seoTitle: "Tutto ciò che devi sapere sull'autenticazione a due fattori (2FA)" 
description: "Questo articolo spiega l'autenticazione a due fattori (2FA) in dettaglio e come può essere implementato in .NET5 utilizzando IdentityServer4 e Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "Questo articolo spiega l'autenticazione a due fattori in dettaglio e come può essere implementato in .NET 5 utilizzando framework di identità come IdentityServer4 e un provider SMS (TWIIO). & NBSP;" 
url: /it/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Questo articolo spiega in dettaglio l'autenticazione a due fattori e come può essere implementato in .NET 5 utilizzando framework di identità come IdentityServer4 e un provider SMS (TWIIO).
{{_LINE_11_}}
Contiene le seguenti sezioni:
  * [Che cos'è l'autenticazione a due fattori? ][1]
  * [Come funziona 2FA?][2]
  * [Autenticazione 2FA e multi-fattore][3]
  * [Svantaggi dell'utilizzo di 2FA][4]
  * [Implementazione di 2FA in .NET5][5]
Prima di tutto, capiamo cos'è 2FA e perché deve essere parte integrante di ogni moderna applicazione Web.

## Che cos'è l'autenticazione a due fattori?   {#2fa}
Un fattore in questo contesto implica un modo in cui puoi convincere un'app o un servizio che sei il proprietario dell'account. Nome utente/password è ampiamente utilizzato come fattore di autenticazione più comune. Tuttavia, a causa di molti problemi di sicurezza associati ad esso e recenti violazioni dei dati diffusi, l'autenticazione a fattore singolo è diventata meno sicura.
L'autenticazione a due fattori è un ulteriore livello di sicurezza, che entra in gioco prima di poter accedere al tuo account. In-ADDIZIONE al processo di accesso standard: introduce un passaggio aggiuntivo per verificare l'identità dell'utente inviando un codice (alla tua e-mail o come messaggio di testo). In questo modo, la tua identità è dimostrata e viene concesso solo l'accesso.

## Come funziona 2FA?   {#2Fawork}
In 2FA, la password è ancora il tuo primo fattore di autenticazione, quindi quando accedi al tuo account ti reindirizzerà a un'altra pagina in cui è necessario verificare la proprietà dell'account. Questo può essere fatto usando vari modi:
  1. L'applicazione invia un codice di verifica spesso chiamato OTP (password una tantum) al tuo indirizzo e-mail.
  2. Il codice viene consegnato come messaggio di testo sul tuo telefono.
  3. Installa un'app di autenticatore su dispositivi mobili attraverso la quale è possibile autorizzare le richieste di accesso.
Nota: questi codici di verifica vengono generati in modo casuale e scaduti una volta utilizzati. Inoltre, hanno una vita di breve

## Possiamo chiamare 2FA come autenticazione a più fattori?   {#Mfa}
I metodi di autenticazione non sono limitati a due fattori. Molte app e servizi stanno spostando i loro utenti oltre 2FA e utilizzando l'autenticazione a più fattori.
2FA e MFA (autenticazione a più fattori) sono spesso usati in modo intercambiabile. Tuttavia c'è una differenza. Nell'autenticazione a più fattori vengono utilizzati due o più fattori.
Può controllare l'indirizzo IP di un utente, la geo-locazione e le informazioni sul dispositivo nell'aggiunta di altri fattori come una password e OTP per verificare l'identità dell'utente.
Pertanto, possiamo dire che il 2FA è un sottoinsieme di MFA. In 2FA ci saranno solo due fattori mentre il multi-fattore può utilizzare due o più fattori. L'MFA rende difficile per gli hacker in quanto aggiunge più livelli di sicurezza nel tradizionale processo di autenticazione.

## Ci sono degli svantaggi usando 2FA?   {## MFA-CONS}
Simile a molte soluzioni di "sicurezza e privacy" che esistono nelle app moderne. Viene inoltre con un prezzo - inconveniente, in quanto è coinvolto un ulteriore passo che può causare attrito nell'esperienza dell'utente.
Tuttavia, viene adottato da molte app e servizi, quindi questo compromesso sta diventando accettabile.

## Come posso implementare l'autenticazione 2FA?   {#implementing2fa}
In questa sezione, impareremo come implementare 2FA in .NET5 usando IdentityServer4 e Twilio.
Quindi creiamo un account di prova su Twilio:
  1. Iscriviti
  2. Verifica il tuo account fornendo un numero di telefono valido.
Una volta verificato il tuo account, è possibile utilizzare la loro dashboard console.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio Dashboard">}}

  1. Copia il tuo account Sid e Auth Token dalla dashboard.
  1. Passare per acquistare un numero che utilizzerai per l'invio di SMS/
Nota: Twilio fornisce 15 $ credito in tutti gli account di prova che utilizzerai per acquistare il numero di telefono.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Ricerca dei numeri di telefono">}}

Puoi scegliere qualsiasi numero purché supporti le "capacità SMS". (Nota il numero di telefono che useremo per configurare più avanti nel nostro progetto).
5. Utilizzando l'account di prova, Twilio consente solo di inviare SMS a un ID chiamante verificato che è possibile gestire utilizzando il link di seguito:
Questo è tutto ciò di cui hai bisogno per configurare usando Twilio Dashboard.
Creiamo un'app Web Core ASP.NET (Seleziona il modello di progetto come di seguito e Target .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - Nuovo progetto">}}

Ora integreremo IdentityServer4, pacchetti Twilio di Nuget.
  1. `Installa -Package IdentityServer4 -Version 4.1.1`
  2. `Installa -Package Twilio -Version 5.55.0`
IdentityServer4 Quick Ui è disponibile su:
Puoi includerlo nel tuo progetto eseguendo il comando seguente nella shell sviluppatore:
`Iex ((new-object system.net.webClient) .DownloadString ('https://raw.githubusercontent.com/IdentityServer/IdentityServer4.quickstart.ui/main/getmain.ps1'))`
Se fosse installato correttamente, vedresti la cartella QuickStart nel tuo progetto:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Gerarchia del progetto">}}

Costruiamo ed eseguiamo questo progetto. Dovresti essere in grado di vedere la pagina di benvenuto come mostrato di seguito:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Questo modello utilizza l'archivio dati in memoria in modo da poter aggiungere gli utenti di test nel file config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Classe config.cs">}}

Apri Startup.cs e aggiungi i seguenti servizi IdentityServer4 nel metodo ConfigServices:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Ora aggiungi IdentityServer nella pipeline di richiesta:
```
app.UseIdentityServer();
```
Esegui il progetto e naviga su **_/account/login _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Login">}}

Accedi con le credenziali aggiunte in **config.cs** 
Una volta configurato e in esecuzione IdentityServer. Possiamo quindi aggiungere supporto per 2FA usando Twilio.
Aggiungiamo la seguente classe:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Questa classe di configurazione verrà utilizzata per iniettare le impostazioni utilizzando l'iniezione di dipendenza.
  1. Click destro sul progetto e aggiungi i segreti dell'utente con la configurazione di Twilio (SID, Token, Phonenumber)
  2. Impostazioni iniettate nel metodo Configuraservice di startup.cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs è stato configurato. Ora possiamo passare all'aggiunta di un nuovo servizio chiamato Authmessagesender che sarà responsabile dell'invio di SMS utilizzando Twilio.
Creiamo un'interfaccia che AuthMessender implementerà.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Lo inietteremo in startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
Il codice di invio di SMS è piuttosto semplice. Creiamo semplicemente un client Twilio e invochiamo il metodo di messageresource.createasync per inviare SMS.
```
public Task SendSmsAsync(string number, string message)
{
              var sid = _twilioSettings.Value.Sid;
            var token = _twilioSettings.Value.Token;
            var from = _twilioSettings.Value.From;
            TwilioClient.Init(sid, token);
            MessageResource.CreateAsync(new PhoneNumber(number),
                from: new PhoneNumber(from),
                body: message);
            return Task.FromResult(0);
}

```
Modificheremo il metodo di accesso per verificare se l'utente ha abilitato 2FA in modo da poterli reindirizzare per la verifica del codice.
Aggiungi VerifyCode.cshtml in QuickStart/Visualizzazioni:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA in azione">}}

Modifica il metodo dell'account/accesso per generare e inviare il codice di verifica dopo la verifica delle credenziali. Non vogliamo completare l'accesso in questo momento.
Pertanto, la chiamata del metodo HTTPContext.signinasync verrà rimossa e invece genereremo semplicemente un codice di verifica casuale e lo memorizzeremo (attualmente stiamo utilizzando il negozio in memoria a scopo dimostrativo).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Screenshot del codice">}}

E quindi reindirizzeremo l'utente alla pagina "VerifyCode" in cui verrà eseguita la verifica del codice e il flusso di lavoro dell'accesso verrà completato.
Nell'azione VerifyCode stiamo semplicemente recuperando le informazioni sull'utente e sul codice dalla memoria e lo abbiniamo al codice fornito.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Screenshot del codice">}}

Se il codice viene abbinato, completiamo semplicemente la richiesta di autenticazione invocando il metodo SigninAsync e reindirizza l'utente alla pagina autorizzata.
Eseguiamo il progetto
Passaggio -1: l'utente fornisce credenziali.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2Fademo - Login">}}

Passaggio 2: le credenziali vengono verificate e viene inviato un codice di verifica:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2Fademo - SMS">}}

Step-3: l'utente verifica il codice corretto.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2FADEMO - VerifyCode">}}

Il codice Step-4 viene verificato e l'autenticazione 2FA è stata completata.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2Fademo - Pagina autorizzata">}}


## # Conclusione:
In questo articolo, abbiamo appreso 2FA e la sua implementazione in .NET5 usando IdentityServer4 e Twilio. È possibile scaricare il codice di esempio utilizzato in questo articolo da questo [Repo][6].
L'uso di SMS per 2FA sicuramente rafforza la tua sicurezza, ma è ancora vulnerabile agli [attacchi di scambio SIM][7]. Pertanto, i ricercatori della sicurezza stanno incoraggiando 2FA a utilizzare altri approcci come le app di autenticato e le chiavi di sicurezza ([Yubikey][8]) che non possono essere intercettate sulla rete telefonica. Impareremo di più su questo in un prossimo articolo: rimanete sintonizzati!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
