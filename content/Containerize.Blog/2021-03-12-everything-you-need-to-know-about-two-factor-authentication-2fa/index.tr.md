---
title: "İki faktörlü kimlik doğrulama hakkında bilmeniz gereken her şey (2FA)" 
seoTitle: "İki faktörlü kimlik doğrulama hakkında bilmeniz gereken her şey (2FA)" 
description: "Bu makalede, iki faktörlü (2FA) kimlik doğrulamasını ayrıntılı olarak açıklamaktadır ve bunun nasıl uygulanacağı .NET5'te kimlikserver4 ve twilio kullanılarak." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "Bu makalede, iki faktörlü kimlik doğrulamasını ayrıntılı olarak açıklamaktadır ve bunun nasıl uygulanacağı .NET 5'te IdentityServer4 ve bir SMS sağlayıcısı (Twilio) gibi kimlik çerçeveleri kullanılarak. & Nbsp;" 
url: /tr/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Bu makale, iki faktörlü kimlik doğrulamasını ayrıntılı olarak açıklamaktadır ve bunun nasıl uygulanacağı .NET 5'te IdentityServer4 ve bir SMS sağlayıcısı (Twilio) gibi kimlik çerçeveleri kullanılarak.
{{_LINE_11_}}
Aşağıdaki bölümleri içerir:
  * [İki faktörlü kimlik doğrulaması nedir? ][1]
  * [2FA nasıl çalışır?][2]
  * [2FA ve Çok Faktörlü Kimlik Doğrulama][3]
  * [2FA kullanmanın dezavantajları][4]
  * [.NET5'te 2FA uygulamak][5]
Öncelikle, 2FA'nın ne olduğunu ve neden her modern web uygulamasının ayrılmaz bir parçası olması gerektiğini anlayalım.

## İki faktörlü kimlik doğrulaması nedir?   {#2fa}
Bu bağlamdaki bir faktör, bir uygulamayı veya hizmeti hesabın sahibi olduğunuza ikna edebilmenin bir yolunu ima eder. Kullanıcı adı/şifre en yaygın kimlik doğrulama faktörü olarak yaygın olarak kullanılır. Bununla birlikte, BT ile ilişkili birçok güvenlik sorunu ve son yaygın veri ihlalleri nedeniyle-tek faktörlü kimlik doğrulaması daha az güvenli hale gelmiştir.
İki faktörlü kimlik doğrulama, hesabınıza erişmeden önce devreye giren ek bir güvenlik katmanıdır. Standart Oturum Açma işlemine ek olarak-bir kod göndererek (e-postanıza veya kısa mesaj olarak) kullanıcı kimliğini doğrulamak için ekstra bir adım sunar. Bu şekilde kimliğiniz kanıtlanır ve ancak o zaman erişim verilir.

## 2FA nasıl çalışır?   {#2Fawork}
2FA'da şifre hala ilk kimlik doğrulama faktörünüzdür - bu nedenle hesabınıza giriş yaptığınızda sizi hesap sahipliğini doğrulamanız gereken başka bir sayfaya yönlendirir. Bu çeşitli yollar kullanılarak yapılabilir:
  1. Uygulama, e-posta adresinize genellikle OTP (bir kerelik şifreler) adı verilen bir doğrulama kodu gönderir.
  2. Kod, telefonunuzda kısa mesaj olarak teslim edilir.
  3. Mobile'a giriş isteklerine izin verebileceğiniz bir kimlik doğrulayıcı uygulaması yüklersiniz.
Not: Bu doğrulama kodları rastgele oluşturulur ve kullanıldıktan sonra süresi dolur. Ayrıca, kısa ömürlüdürler - bu nedenle kodu kullanmadan önce kısa bir pencere vardır (bu, bilgisayar korsanının doğrulama kodlarını zorlamasını önler).

## 2FA'yı çok faktörlü kimlik doğrulaması olarak arayabilir miyiz?   {#Mfa}
Kimlik doğrulama yöntemleri iki faktörle sınırlı değildir. Birçok uygulama ve hizmet kullanıcılarını 2FA'nın ötesine taşıyor ve çok faktörlü kimlik doğrulama kullanıyor.
2FA ve MFA (çok faktörlü kimlik doğrulama) genellikle birbirinin yerine kullanılır. Ancak bir fark var. Çok faktörlü kimlik doğrulamada iki veya daha fazla faktör kullanılır.
Kullanıcının kimliğini doğrulamak için bir kullanıcının IP adresini, coğrafi konum ve cihaz bilgilerini şifre ve OTP gibi diğer faktörlere kontrol edebilir.
Bu nedenle, 2FA'nın MFA'nın bir alt kümesi olduğunu söyleyebiliriz. 2FA'da sadece iki faktör olacaktır, oysa çok faktör iki veya daha fazla faktör kullanabilir. MFA, geleneksel kimlik doğrulama sürecine birden fazla güvenlik katmanı eklediği için bilgisayar korsanları için zorlaştırır.

## 2FA kullanarak herhangi bir dezavantaj var mı?   {#mfa-cons}
Modern uygulamalarda bulunan birçok 'güvenlik ve gizlilik' çözümüne benzer. Ayrıca, kullanıcı deneyiminde sürtünmeye neden olabilecek ek bir adım olduğu için bir fiyat - rahatsızlık ile birlikte gelir.
Ancak, birçok uygulama ve hizmet tarafından kabul edilmektedir, böylece bu değiş tokuş kabul edilebilir hale gelir.

## 2FA kimlik doğrulamasını nasıl uygulayabilirim?   {#uygulama2fa}
Bu bölümde, kimlikserver4 ve Twilio'yu kullanarak .NET5'te 2FA'nın nasıl uygulanacağını öğreneceğiz.
Öyleyse Twilio'da bir deneme hesabı oluşturalım:
  1. kaydolun
  2. Geçerli bir telefon numarası sağlayarak hesabınızı doğrulayın.
Hesabınız doğrulandıktan sonra konsol kontrol panellerini kullanabilirsiniz.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio Gösterge Tablosu">}}

  1. Hesabınızı SID ve Auth Tokeninizi gösterge tablosundan kopyalayın.
  1. SMS/ göndermek için kullanacağınız bir numara satın almak için gezinir/
Not: Twilio, telefon numarasını satın almak için kullanacağınız tüm deneme hesaplarında 15 $ kredi verir.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Telefon numarası araması">}}

"SMS yeteneklerini" desteklediği sürece herhangi bir sayı seçebilirsiniz. (Projemizde daha sonra yapılandırmak için kullanacağımız telefon numaranızı not edin).
5. Deneme hesabını kullanarak Twilio, yalnızca aşağıdaki bağlantıyı kullanarak yönetebileceğiniz doğrulanmış bir arayan kimliğine SMS göndermenizi sağlar:
Twilio gösterge tablosunu kullanarak yapılandırmanız gereken tek şey budur.
Bir ASP.NET Core web uygulaması oluşturalım (aşağıdaki gibi Proje Şablonu'nu seçin ve .NET5'i hedefleyin.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - Yeni Proje">}}

Şimdi Nuget'ten IdentityServer4, Twilio paketlerini entegre edeceğiz.
  1. `` `` ``
  2. `` Yükleme Paketi Twilio -Sürümü 5.55.0 '
IdentityServer4 Quick Ui şu adresten ulaşılabilir:
Geliştirici kabuğunda aşağıdaki komutu çalıştırarak projenize ekleyebilirsiniz:
`IEX ((new-nesnesti System.net.Net.WebClient) .downloadString ('https://raw.githubusercontent.com/Idendentyserver/IdendentityServer4.quickstart.ui/main/getmain.ps1'))` `
Doğru yüklenmişse - projenizdeki QuickStart klasörünü görürsünüz:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Proje hiyerarşisi">}}

Bu projeyi oluşturalım ve yürütelim. Karşılama sayfasını aşağıda gösterildiği gibi görebilmeniz gerekir:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Bu şablon bellek içi veri deposunu kullanır, böylece test kullanıcılarınızı config.cs dosyasına ekleyebilirsiniz

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Config.cs sınıfı">}}

Startup.cs'i açın ve ConfigServices Yönteminde Aşağıdaki IdentityServer4 hizmetlerini ekleyin:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Şimdi İstek Boru Hattı'na IdentityServer ekleyin:
```
app.UseIdentityServer();
```
Projeyi çalıştırın ve **_/hesap/giriş _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Giriş">}}

**config.cs**  'da eklendiği gibi kimlik bilgileriyle giriş yapın
IdentityServer yapılandırıldıktan ve çalıştırıldıktan sonra. Daha sonra Twilio kullanarak 2FA için destek ekleyebiliriz.
Aşağıdaki sınıfı ekleyelim:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Bu yapılandırma sınıfı, bağımlılık enjeksiyonu kullanılarak ayarları enjekte etmek için kullanılacaktır.
  1. Projeyi sağlayın ve Twilio’nun Yapılandırması ile Kullanıcı Sırlarını Ekleyin (SID, Jeton, Phonenumber)
  2. Startup.cs ConfigureService yöntemine ayarları enjekte edin
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs yapılandırıldı. Şimdi, Twilio kullanarak SMS göndermekten sorumlu olacak AuthMessagSender adlı yeni bir hizmet eklemeye devam edebiliriz.
AuthMeSageSender'in uygulayacağı bir arayüz oluşturalım.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Bunu startup.cs'ye enjekte edeceğiz.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
SMS gönderme kodu oldukça basit. Sadece bir Twilio istemcisi oluşturuyoruz ve SMS göndermek için Messageresource.createAreasync yöntemini çağırıyoruz.
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
Kod doğrulaması için bunları yeniden yönlendirebilmemiz için kullanıcının 2FA'yı etkinleştirip etkinleştirmediğini kontrol etmek için giriş yöntemini değiştireceğiz.
QuickStart/Görünümlere Verifycode.cshtml adını ekleyin:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA eylemde">}}

Kimlik bilgilerini doğruladıktan sonra doğrulama kodu oluşturmak ve göndermek için hesap/giriş yöntemini değiştirin. Şu anda oturum açma talebini tamamlamak istemiyoruz.
Bu nedenle, httpcontext.signinasync yöntem çağrısı kaldırılacak ve bunun yerine rastgele bir doğrulama kodu oluşturacağız ve saklayacağız (şu anda gösteri amacıyla bellek içi mağaza kullanıyoruz).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Kod ekran görüntüsü">}}

Ve sonra kullanıcıyı kod doğrulamasının gerçekleştirileceği ve oturum açma iş akışının tamamlanacağı “VerifyCode” sayfasına yönlendireceğiz.
VerifyCode Action'da kullanıcı ve kod bilgilerini bellekten getirip verilen kodla eşleştiriyoruz.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Kod ekran görüntüsü">}}

Kod eşleşirse, Signinasync yöntemini çağırarak ve kullanıcıyı yetkili sayfaya yönlendirerek kimlik doğrulama isteğini tamamlarız.
Projeyi çalıştıralım
Adım -1: Kullanıcı kimlik bilgileri sağlar.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2FADemo - Giriş">}}

Adım-2: Kimlik bilgileri doğrulanır ve bir doğrulama kodu gönderilir:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo - SMS">}}

Adım-3: Kullanıcı doğru kodu doğrular.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2FADemo - VerifyCode">}}

Adım-4 kodu doğrulandı ve 2FA kimlik doğrulaması tamamlandı.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2FADemo - Yetkili Sayfa">}}


### Çözüm:
Bu makalede, 2FA'yı ve .NET5'teki uygulamasını kimlikserver4 ve Twilio'yu kullanarak öğrendik. Bu makalede kullanılan örnek kodunu bu [repo][6] 'dan indirebilirsiniz.
2FA için SMS kullanmak güvenliğinizi kesinlikle güçlendirir, ancak [SIM takas saldırılarına] karşı savunmasızdır [7]. Bu nedenle, güvenlik araştırmacıları 2FA'yı, telefon ağında ele geçirilemeyen Authenticator uygulamaları ve güvenlik anahtarları ([Yubikey][8]) gibi diğer yaklaşımları kullanmaya teşvik ediyor. Bu konuda daha fazla bilgi edineceğimiz bir makalede - bizi izlemeye devam edin!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
