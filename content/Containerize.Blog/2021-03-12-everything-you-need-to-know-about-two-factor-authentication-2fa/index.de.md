---
title: "Alles, was Sie über die Zwei-Faktor-Authentifizierung (2FA) wissen müssen" 
seoTitle: "Alles, was Sie über die Zwei-Faktor-Authentifizierung (2FA) wissen müssen" 
description: "In diesem Artikel werden die Zwei-Faktor-Authentifizierung (2FA) im Detail erläutert und wie sie in .NET5 mit IdentityServer4 und Twilio implementiert werden kann." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "In diesem Artikel wird die Zwei-Faktor-Authentifizierung im Detail erläutert und wie sie in .NET 5 unter Verwendung von Identitäts-Frameworks wie IdentityServer4 und einem SMS-Anbieter (Twilio) implementiert werden kann." 
url: /de/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## In diesem Artikel wird die Zwei-Faktor-Authentifizierung im Detail erläutert und wie diese in .NET 5 unter Verwendung von Identitäts-Frameworks wie IdentityServer4 und einem SMS-Anbieter (Twilio) implementiert werden kann.
{{_LINE_11_}}
Es enthält die folgenden Abschnitte:
  * [Was ist die Zwei-Faktor-Authentifizierung? ][1]
  * [Wie funktioniert 2FA?][2]
  * [2FA- und Multi-Faktor-Authentifizierung][3]
  * [Nachteile der Verwendung von 2FA][4]
  * [Implementieren von 2FA in .NET5][5]
Lassen Sie uns zunächst verstehen, was 2FA ist und warum es ein wesentlicher Bestandteil jeder modernen Webanwendung sein muss.

## Was ist eine Zwei-Faktor-Authentifizierung?   {#2fa}
Ein Faktor in diesem Zusammenhang impliziert eine Möglichkeit, eine App oder einen Dienst davon zu überzeugen, dass Sie der Eigentümer des Kontos sind. Benutzername/Kennwort wird häufig als der häufigste Authentifizierungsfaktor verwendet. Aufgrund vieler Sicherheitsprobleme im Zusammenhang mit der IT und den jüngsten weit verbreiteten Datenverletzungen ist die Einzelfaktorauthentifizierung weniger sicher geworden.
Die Zwei-Faktor-Authentifizierung ist eine zusätzliche Sicherheitsebene, die vor dem Zugriff auf Ihr Konto spielt. Einbeziehung zum Standard-Anmeldungsprozess-Es wird ein zusätzlicher Schritt eingeführt, um die Benutzeridentität durch Senden eines Codes (an Ihre E-Mail oder als Textnachricht) zu überprüfen. Auf diese Weise wird Ihre Identität bewiesen und nur dann wird der Zugang gewährt.

## Wie funktioniert 2FA?   {#2 -Fach}}
In 2FA ist das Passwort immer noch Ihr erster Authentifizierungsfaktor. Wenn Sie sich also bei Ihrem Konto anmelden, werden Sie zu einer anderen Seite umgeleitet, auf der Sie das Konto des Kontos überprüfen müssen. Dies kann auf verschiedene Arten erfolgen:
  1. Die Anwendung sendet einen Bestätigungscode, der häufig OTP (einmalige Passwörter) an Ihre E-Mail-Adresse bezeichnet wird.
  2. Code wird als Textnachricht auf Ihrem Telefon geliefert.
  3. Sie installieren eine Authenticator -App auf Mobilgeräten, über die Sie Anmeldeanforderungen autorisieren können.
HINWEIS: Diese Verifizierungscodes werden zufällig erzeugt und nach Verwendung abgelaufen. Außerdem sind sie von kurzer Dauer. Es gibt also ein kurzes Fenster, bevor Sie den Code verwenden können (dies verhindert, dass der Hacker die Bestätigungscodes brutal erzwingt).

## Können wir 2FA als Multi-Faktor-Authentifizierung anrufen?   {#Mfa}
Authentifizierungsmethoden sind nicht auf Zwei-Faktor beschränkt. Viele Apps und Dienste bewegen ihre Benutzer über 2FA hinaus und verwenden Multi-Faktor-Authentifizierung.
2FA und MFA (Multi-Faktor-Authentifizierung) werden häufig synonym verwendet. Es gibt jedoch einen Unterschied. In der Multi-Faktor-Authentifizierung werden zwei oder mehr Faktoren verwendet.
Es kann die IP-Adresse, die GEO-Standort- und Geräteinformationen eines Benutzers auf andere Faktoren wie ein Passwort und OTP überprüfen, um die Identität des Benutzers zu überprüfen.
Daher können wir sagen, dass der 2FA eine Teilmenge von MFA ist. In 2FA gibt es nur zwei Faktoren, während Multi-Faktor zwei oder mehr Faktoren verwenden kann. MFA erschwert es Hackern, da es im traditionellen Authentifizierungsprozess mehrere Sicherheitsebenen hinzufügt.

## Gibt es Nachteile mit 2FA?   {#mfa-cons}
Ähnlich wie viele „Sicherheits- und Privatsphäre“ -Lösungen, die in modernen Apps existieren. Es ist auch mit einem Preis verbunden - Unannehmlichkeiten, da ein zusätzlicher Schritt beteiligt ist, der zu Reibung in der Benutzererfahrung führt.
Es wird jedoch von vielen Apps und Dienstleistungen übernommen, sodass dieser Kompromiss akzeptabel wird.

## Wie kann ich eine 2FA -Authentifizierung implementieren?   {#implementieren2fa}
In diesem Abschnitt lernen wir, wie 2FA in .NET5 mit IdentityServer4 und Twilio implementiert werden kann.
Erstellen wir also ein Testkonto auf Twilio:
  1. Anmelden anmelden
  2. Überprüfen Sie Ihr Konto, indem Sie eine gültige Telefonnummer bereitstellen.
Sobald Ihr Konto überprüft wurde, können Sie das Konsolen -Dashboard verwenden.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio Dashboard">}}

  1. Kopieren Sie Ihr Konto Sid und Auth Token aus dem Dashboard.
  1. Navigieren Sie zum Kauf einer Nummer, die Sie zum Senden von SMS/ verwenden werden/
Hinweis: Twilio gibt 15 $ Credit auf allen Testkonten, mit denen Sie die Telefonnummer kaufen.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Telefonnummersuche">}}

Sie können eine beliebige Zahl auswählen, solange es „SMS -Funktionen“ unterstützt. (Beachten Sie Ihre Telefonnummer, mit der wir später in unserem Projekt konfigurieren werden.)
5. Mit Twilio können Sie mithilfe von Testkonto SMS an eine verifizierte Anrufer -IDs senden, die Sie mit dem folgenden Link verwalten können:
Dies ist alles, was Sie mithilfe von Twilio Dashboard konfigurieren müssen.
Erstellen wir eine ASP.NET -Kern -Web -App (wählen Sie die Projektvorlage wie unten und Target .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - neues Projekt">}}

Wir werden jetzt IdentityServer4, Twilio -Pakete von Nuget integrieren.
  1. `Install -Package IdentityServer4 -version 4.1.1`
  2. `Installpackage Twilio -Version 5.55.0`
IdentityServer4 Quick UI ist verfügbar unter:
Sie können es in Ihr Projekt einbeziehen, indem Sie den folgenden Befehl in Developer Shell ausführen:
`iex ((New-Object System.net.Webclient) .Downloadstring ('https://raw.githubuSercontent.com/identityserver/idallityServer4.quickstart.ui/main/getmain.ps1'))` ``
Wenn es richtig installiert würde, sehen Sie den QuickStart -Ordner in Ihrem Projekt:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Projekthierarchie">}}

Lassen Sie uns dieses Projekt erstellen und durchführen. Sie sollten in der Lage sein, die Begrüßungsseite wie unten gezeigt zu sehen:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Diese Vorlage verwendet In-Memory-Datenspeicher, sodass Sie Ihre Testbenutzer in config.cs-Datei hinzufügen können

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Config.cs Klasse">}}

Öffnen Sie Startup.cs und fügen Sie die folgenden IdentityServer4 -Dienste in der Konfigurationsservices -Methode hinzu:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Fügen Sie nun IdentityServer in Anforderungspipeline hinzu:
```
app.UseIdentityServer();
```
Führen Sie das Projekt aus und navigieren Sie zu **_/Konto/Login _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Login">}}

Melden Sie sich mit den Anmeldeinformationen an, wie in **config.cs**  hinzugefügt
Sobald IdentityServer konfiguriert ist und ausgeführt wird. Wir können dann mit Twilio Unterstützung für 2FA hinzufügen.
Fügen wir die folgende Klasse hinzu:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Diese Konfigurationsklasse wird verwendet, um Einstellungen mithilfe der Abhängigkeitsinjektion zu injizieren.
  1. Rechtsklick im Projekt und fügen Sie die Benutzergeheimnisse mit Twilio -Konfiguration hinzu (SID, Token, PhonNumber)
  2. Einstellungen in die KonfigurationService -Methode von startup.cs einlegen
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs wurde konfiguriert. Wir können nun zum Hinzufügen eines neuen Dienstes namens AuthMessagesender übergehen, der für das Senden von SMS mit Twilio verantwortlich ist.
Lassen Sie uns eine Schnittstelle erstellen, die AuthMessagesender implementiert.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Wir werden dies in Startup.cs injizieren.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
Der SMS -Sendecode ist ziemlich einfach. Wir erstellen einfach einen Twilio -Client und rufen Messageresource.Createasync -Methode zum Senden von SMS auf.
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
Wir werden die Anmeldemethode ändern, um zu überprüfen, ob der Benutzer 2FA aktiviert hat, damit wir sie für die Codeüberprüfung umleiten können.
Fügen Sie in QuickStart/Ansichten verififyCode.cshtml hinzu:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2fa in Aktion">}}

Ändern Sie die Konto-/Anmeldemethode, um den Verifizierungscode nach Überprüfung von Anmeldeinformationen zu generieren und zu senden. Wir möchten das Anmeldung in diesem Moment nicht in der Anfrage abschließen.
Daher wird der Aufruf von httpcontext.Signinasync-Methoden entfernt. Stattdessen generieren wir einfach einen zufälligen Verifizierungscode und speichern ihn (derzeit verwenden wir In-Memory-Store für Demonstrationszwecke).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Code Screenshot">}}

Und dann werden wir den Benutzer auf die Seite "verifizieren
In der Aktion verifizieren

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Code Screenshot">}}

Wenn der Code übereinstimmt, schließen wir einfach die Authentifizierungsanforderung durch, indem wir die SigninaSync -Methode aufrufen und den Benutzer auf die autorisierte Seite umleiten.
Lassen Sie uns das Projekt durchführen
Schritt -1: Der Benutzer bietet Anmeldeinformationen an.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2Fademo - Login">}}

Schritt-2: Anmeldeinformationen werden verifiziert und ein Verifizierungscode gesendet:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2Fademo - SMS">}}

Schritt 3: Benutzer überprüft den richtigen Code.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2Fademo - VerifyCode">}}

Step-4-Code wird verifiziert und die 2FA-Authentifizierung wurde abgeschlossen.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo - Autorisierte Seite">}}


### Abschluss:
In diesem Artikel haben wir mit IdentityServer4 und Twilio von 2FA und seiner Implementierung in .NET5 erfahren. Sie können den in diesem Artikel verwendeten Beispielcode aus diesem [Repo][6] herunterladen.
Die Verwendung von SMS für 2FA stärkt Ihre Sicherheit sicher, ist jedoch immer noch anfällig für [SIM -Swap -Angriffe][7]. Daher ermutigen Sicherheitsforscher 2FA, andere Ansätze wie Authenticator -Apps und Sicherheitsschlüssel ([Yubikey][8]) zu verwenden, die nicht in das Telefonnetzwerk abgefangen werden können. In einem kommenden Artikel werden wir mehr darüber erfahren - bleiben Sie dran!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
