---
title: "Wszystko, co musisz wiedzieć o uwierzytelnianiu dwuskładnikowym (2FA)" 
seoTitle: "Wszystko, co musisz wiedzieć o uwierzytelnianiu dwuskładnikowym (2FA)" 
description: "W tym artykule szczegółowo wyjaśniono uwierzytelnianie dwuskładnikowe (2FA) i sposób, w jaki można go zaimplementować w .NET5 przy użyciu IdentityServer4 i Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "W tym artykule szczegółowo wyjaśniono uwierzytelnianie dwuskładnikowe i sposób, w jaki można go zaimplementować w .NET 5 przy użyciu frameworków Identity, takich jak IdentityServer4 i dostawcy SMS (Twilio). & NBSP;" 
url: /pl/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Ten artykuł szczegółowo wyjaśnia uwierzytelnianie dwuskładnikowe i sposób, w jaki można go zaimplementować w .NET 5 przy użyciu frameworków tożsamości, takich jak IdentityServer4 i dostawca SMS (Twilio).
{{_LINE_11_}}
Zawiera następujące sekcje:
  * [Co to jest uwierzytelnianie dwuskładnikowe? ][1]
  * [Jak działa 2FA?][2]
  * [2FA i uwierzytelnianie wielu czynników][3]
  * [Wady używania 2FA][4]
  * [Wdrożenie 2FA w .NET5][5]
Po pierwsze, zrozummy, czym jest 2FA i dlaczego musi być integralną częścią każdej nowoczesnej aplikacji internetowej.

## Co to jest uwierzytelnianie dwuskładnikowe? {#2FA}

Czynnik w tym kontekście implikuje sposób przekonania aplikacji lub usługi, że jesteś właścicielem konta. Nazwa użytkownika/hasło jest szeroko stosowane jako najczęstszy współczynnik uwierzytelnienia. Jednak ze względu na wiele problemów związanych z tym bezpieczeństwa i najnowsze powszechne naruszenia danych-uwierzytelnianie jednoskładnikowe stało się mniej bezpieczne.
Uwierzytelnianie dwuskładnikowe jest dodatkową warstwą bezpieczeństwa, która wchodzi w grę, zanim będziesz mógł uzyskać dostęp do swojego konta. W dodaniu do standardowego procesu logowania-wprowadza dodatkowy krok w celu zweryfikowania tożsamości użytkownika poprzez wysyłanie kodu (do wiadomości e-mail lub wiadomości tekstowej). W ten sposób twoja tożsamość jest udowodniona i dopiero wtedy dostęp jest przyznawany.

## Jak działa 2FA? {#2fawork}

W 2FA hasło jest nadal pierwszym współczynnikiem uwierzytelniania - więc po zalogowaniu się na konto przekierowuje Cię na inną stronę, na której musisz zweryfikować własność konta. Można to zrobić przy użyciu różnych sposobów:
  1. Aplikacja wysyła kod weryfikacyjny często nazywany OTP (jednorazowe hasła) na adres e-mail.
  2. Kod jest dostarczany jako wiadomość tekstowa w telefonie.
  3. Instalujesz aplikację uwierzytelniającego na telefonie komórkowym, za pośrednictwem której możesz autoryzować żądania logowania.
Uwaga: Te kody weryfikacji są generowane losowo i wygasane po użyciu. Ponadto są one krótkie - więc jest krótkie okno, zanim będziesz mógł użyć kodu (uniemożliwia hakerowi brutalną wymuszanie kodów weryfikacji).

## Czy możemy nazwać 2FA jako uwierzytelnianie wieloskładnikowe? {#MFA}

Metody uwierzytelniania nie są ograniczone do dwuskładnikowego. Wiele aplikacji i usług przenosi swoich użytkowników poza 2FA i korzysta z uwierzytelniania wieloskładnikowego.
2FA i MFA (uwierzytelnianie wielu czynników) są często używane zamiennie. Jest jednak różnica. W uwierzytelnianiu wieloczynnikowym stosuje się dwa lub więcej czynników.
Może sprawdzić adres IP użytkownika, geo-lokalizację i informacje o urządzeniu w przypadku innych czynników, takich jak hasło i OTP w celu zweryfikowania tożsamości użytkownika.
Dlatego możemy powiedzieć, że 2FA jest podzbiorem MFA. W 2FA będą tylko dwa czynniki, podczas gdy wieloczynnik może wykorzystywać dwa lub więcej czynników. MFA utrudnia hakerom, ponieważ dodaje wiele warstw bezpieczeństwa w tradycyjnym procesie uwierzytelniania.

## Czy są jakieś wady za pomocą 2FA? {#mfa-cons}

Podobne do wielu rozwiązań „bezpieczeństwa i prywatności”, które istnieją w nowoczesnych aplikacjach. Ma również cenę - niedogodności, ponieważ istnieje dodatkowy krok, który może powodować tarcie w doświadczeniu użytkownika.
Jest to jednak przyjmowane przez wiele aplikacji i usług, więc ten kompromis staje się akceptowalny.

## Jak mogę wdrożyć uwierzytelnianie 2FA? {#implementing2fa}

W tej sekcji dowiemy się, jak wdrożyć 2FA w .NET5 przy użyciu IdentityServer4 i Twilio.
Utwórzmy więc konto próbne na Twilio:
  1. Zarejestruj się
  2. Sprawdź swoje konto, podając ważny numer telefonu.
Po zweryfikowaniu konta możesz następnie użyć ich pulpitu konsoli.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Pulpit nawigacyjny Twilio">}}

  1. Skopiuj swoje konto SID i token autora z pulpitu nawigacyjnego.
  1. Przejdź do zakupu numeru, którego użyjesz do wysyłania SMS -ów/
Uwaga: Twilio przekazuje 15 $ kredytów na wszystkich kontach próbnych, których użyjesz do zakupu numeru telefonu.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - wyszukiwanie numeru telefonu">}}

Możesz wybrać dowolny numer, o ile obsługuje „możliwości SMS”. (Zanotuj swój numer telefonu, którego użyjemy do skonfigurowania późniejszego naszego projektu).
5. Korzystając z konta próbnego, Twilio pozwala tylko wysyłać SMS do zweryfikowanych identyfikatorów dzwoniącego, które możesz zarządzać za pomocą poniższego linku:
To wszystko, co musisz skonfigurować za pomocą pulpitu nawigacyjnego Twilio.
Utwórzmy aplikację internetową ASP.NET Core (wybierz szablon projektu jak poniżej i Target .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - nowy projekt">}}

Teraz zintegrujemy pakiety IdentityServer4, Twilio z Nuget.
  1. `instalacja tożsamości tożsamościServer4 -version 4.1.1`
  2. `instalacja pakietu Twilio -version 5.55.0 '
IdentityServer4 Szybki interfejs użytkownika jest dostępny pod adresem:
Możesz go dołączyć w swoim projekcie, uruchamiając poniższe polecenie w Shell Shell:
`ieex ((new-obiekt system.net.webclient) .DownloadString ('https://raw.githubusercontent.com/identityServer/InterityServer4.quickstart.ui/Main/getmain.ps1'))` `
Gdyby został poprawnie zainstalowany - zobaczysz folder QuickStart w swoim projekcie:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Hierarchia projektu">}}

Zbudujmy i uruchommy ten projekt. Powinieneś być w stanie zobaczyć stronę powitalną, jak pokazano poniżej:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Ten szablon wykorzystuje magazyn danych w pamięci, dzięki czemu możesz dodać użytkowników testu w pliku config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Config.cs klasa">}}

Otwórz startup.cs i dodaj następujące usługi IdentityServer4 w Metodzie ConfigServices:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Teraz dodaj IdentityServer w rurociągu żądania:
```
app.UseIdentityServer();
```
Uruchom projekt i przejdź do **_/konto/login _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Zaloguj się">}}

Zaloguj się z poświadczeniami, jak dodano w **config.cs** 
Po skonfigurowaniu i uruchomieniu IdentityServer. Następnie możemy dodać obsługę 2FA za pomocą Twilio.
Dodajmy następującą klasę:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Ta klasa konfiguracji zostanie użyta do wstrzykiwania ustawień za pomocą wtrysku zależności.
  1. Kliknij prawym przyciskiem prawym prawym prawym prawym przyciskiem na projekt i dodaj tajemnice użytkownika z konfiguracją Twilio (SID, Token, PhoneNumber)
  2. Ustawienia wstrzykiwania w metodzie konfiguracyjnej Uruchamiania.cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs został skonfigurowany. Możemy teraz przejść do dodania nowej usługi o nazwie AuthMessagesender, która będzie odpowiedzialna za wysyłanie SMS za pomocą Twilio.
Utwórzmy interfejs, który zaimplementuje AuthMessagesender.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Będziemy to wstrzykiwać w startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
Kod wysyłania SMS jest dość prosty. Po prostu tworzymy klienta Twilio i wywołujemy metodę MessageResource.CreateAsync do wysyłania SMS.
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
Zmodyfikujemy metodę logowania, aby sprawdzić, czy użytkownik włączył 2FA, abyśmy mogli je przekierować w celu weryfikacji kodu.
Dodaj VerifyCode.cshtml w QuickStart/Views:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA w akcji">}}

Zmodyfikuj metodę konta/logowania w celu wygenerowania i wysyłania kodu weryfikacji po weryfikacji poświadczeń. W tej chwili nie chcemy wypełniać logowania.
Dlatego wywołanie metody httpcontext.signinAsync zostanie usunięte, a zamiast tego po prostu wygenerujemy losowy kod weryfikacyjny i przechowujemy go (obecnie używamy sklepu w pamięci do celów demonstracyjnych).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Zrzut ekranu kodu">}}

A następnie przekierujemy użytkownika do strony „VerifyCode”, w której zostanie wykonana weryfikacja kodu, a przepływ pracy zostanie zakończony.
W VerifyCode Action po prostu pobieramy informacje o użytkowniku i kodzie z pamięci i dopasowujemy je do dostarczonego kodu.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Zrzut ekranu kodu">}}

Jeśli kod jest dopasowany, po prostu wypełniamy żądanie uwierzytelniania, wywołując metodę SignaSync i przekierowujemy użytkownika na autoryzowaną stronę.
Uruchommy projekt
Krok -1: Użytkownik zapewnia poświadczenia.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2fademo - login">}}

Krok 2: Uwierzytelności są weryfikowane i wysyłany jest kod weryfikacji:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo - SMS">}}

Krok 3: Użytkownik weryfikuje prawidłowy kod.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2fademo - VerifyCode">}}

Kod stopnia 4 jest weryfikowany, a uwierzytelnianie 2FA zostało zakończone.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo - autoryzowana strona">}}


### Wniosek:
W tym artykule dowiedzieliśmy się o 2FA i jego wdrożeniu w .NET5 przy użyciu IdentityServer4 i Twilio. Możesz pobrać przykładowy kod użyty w tym artykule z tego [Repo][6].
Używanie SMS dla 2FA z pewnością wzmacnia twoje bezpieczeństwo, ale nadal jest podatne na [ataki zamiany SIM][7]. Dlatego badacze bezpieczeństwa zachęcają 2FA do korzystania z innych podejść, takich jak aplikacje uwierzytelniające i klucze bezpieczeństwa ([Yubikey][8]), których w sieci telefonicznej nie można przechwycić. Dowiemy się więcej o tym w nadchodzącym artykule - bądźcie czujni!



[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
