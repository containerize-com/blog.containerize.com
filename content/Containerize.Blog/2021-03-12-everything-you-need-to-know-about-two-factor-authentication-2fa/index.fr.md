---
title: "Tout ce que vous devez savoir sur l'authentification à deux facteurs (2FA)" 
seoTitle: "Tout ce que vous devez savoir sur l'authentification à deux facteurs (2FA)" 
description: "Cet article explique en détail l'authentification à deux facteurs (2FA) et comment peut être implémenté dans .NET5 en utilisant IdentityServer4 et Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "Cet article explique en détail l'authentification à deux facteurs et comment peut être implémentée dans .NET 5 en utilisant des cadres d'identité comme IdentityServer4 et un fournisseur SMS (Twilio). & Nbsp;" 
url: /fr/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Cet article explique en détail l'authentification à deux facteurs et comment peut-être être implémenté dans .NET 5 en utilisant des cadres d'identité comme IdentityServer4 et un fournisseur SMS (Twilio).
{{_LINE_11_}}
Il contient les sections suivantes:
  * [Qu'est-ce que l'authentification à deux facteurs? ][1]
  * [Comment fonctionne 2FA?][2]
  * [2FA et authentification multi-facteurs][3]
  * [Inconvénients de l'utilisation de 2FA][4]
  * [Implémentation de 2FA dans .NET5][5]
Tout d'abord, comprenons ce qu'est 2FA et pourquoi il doit faire partie intégrante de chaque application Web moderne.

## Qu'est-ce que l'authentification à deux facteurs? {# 2FA}
Un facteur dans ce contexte implique un moyen de convaincre une application ou un service que vous êtes propriétaire du compte. Le nom d'utilisateur / mot de passe est largement utilisé comme facteur d'authentification le plus courant. Cependant, en raison de nombreux problèmes de sécurité qui y sont associés et des violations de données généralisées récentes - l'authentification à facteur unique est devenue moins sécurisée.
L'authentification à deux facteurs est une couche de sécurité supplémentaire, qui entre en jeu avant de pouvoir accéder à votre compte. En cours au processus de connexion standard - il introduit une étape supplémentaire pour vérifier l'identité de l'utilisateur en envoyant un code (à votre e-mail ou en SMS). De cette façon, votre identité est prouvée et ce n'est qu'à ce que l'accès soit accordé.

## Comment fonctionne 2FA? {# 2fawork}
Dans 2FA, le mot de passe est toujours votre premier facteur d'authentification - donc lorsque vous vous connectez à votre compte, il vous redirigera vers une autre page où vous devez vérifier la propriété du compte. Cela peut être fait en utilisant différentes manières:
  1. L'application envoie un code de vérification souvent appelé OTP (mot de passe ponctuel) à votre adresse e-mail.
  2. Le code est livré en SMS sur votre téléphone.
  3. Vous installez une application Authenticator sur mobile à travers laquelle vous pouvez autoriser les demandes de connexion.
Remarque: Ces codes de vérification sont générés au hasard et sont expirés une fois utilisés. En outre, ils sont de courte durée - il y a donc une courte fenêtre avant de pouvoir utiliser le code (cela empêche le pirate de forcer brute les codes de vérification).

## Pouvons-nous appeler 2FA comme authentification multi-facteurs? {#Mfa}
Les méthodes d'authentification ne sont pas limitées aux deux facteurs. De nombreuses applications et services déplacent leurs utilisateurs au-delà de 2FA et utilisent l'authentification multi-facteurs.
2FA et MFA (authentification multi-facteurs) sont souvent utilisés de manière interchangeable. Cependant, il y a une différence. Dans l'authentification multi-facteurs, deux ou plusieurs facteurs sont utilisés.
Il peut vérifier l'adresse IP d'un utilisateur, la géo-localisation et les informations sur les informations de l'appareil à d'autres facteurs tels qu'un mot de passe et un OTP pour vérifier l'identité de l'utilisateur.
Par conséquent, nous pouvons dire que le 2FA est un sous-ensemble de MFA. En 2FA, il n'y aura que deux facteurs alors que le multi-facteurs peut utiliser deux ou plusieurs facteurs. Le MFA rend difficile les pirates car il ajoute plusieurs couches de sécurité dans le processus d'authentification traditionnel.

## Y a-t-il des inconvénients utilisant 2FA? {# MFA-Cons}
Semblable à de nombreuses solutions de «sécurité et de confidentialité» qui existent dans les applications modernes. Il a également un prix - un inconvénient, car il existe une étape supplémentaire qui peut provoquer une friction dans l'expérience utilisateur.
Cependant, il est adopté par de nombreuses applications et services, ce compromis devient donc acceptable.

## Comment puis-je implémenter l'authentification 2FA? {# implémenting2fa}
Dans cette section, nous apprendrons à implémenter 2FA dans .NET5 en utilisant IdentityServer4 et Twilio.
Créons donc un compte d'essai sur Twilio:
  1. S'inscrire sur
  2. Vérifiez votre compte en fournissant un numéro de téléphone valide.
Une fois votre compte vérifié, vous pouvez ensuite utiliser leur tableau de bord console.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio Tableau de bord">}}

  1. Copiez le jeton SID et AUTH de votre compte dans le tableau de bord.
  1. Accédez à acheter un numéro que vous utiliserez pour envoyer des SMS /
Remarque: Twilio donne 15 $ de crédit dans tous les comptes d'essai que vous utiliserez pour acheter le numéro de téléphone.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Recherche de numéro de téléphone">}}

Vous pouvez choisir n'importe quel nombre tant qu'il prend en charge les «capacités SMS». (Notez votre numéro de téléphone que nous utiliserons pour configurer plus tard dans notre projet).
5. En utilisant le compte d'essai, Twilio vous permet uniquement d'envoyer des SMS à un ID d'appelant vérifié que vous pouvez gérer en utilisant le lien ci-dessous:
C'est tout ce dont vous avez besoin pour configurer à l'aide du tableau de bord Twilio.
Créons une application Web ASP.NET Core (sélectionnez le modèle de projet comme ci-dessous et cibler .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - Nouveau projet">}}

Nous allons désormais intégrer les packages IdentityServer4, Twilio de NuGet.
  1. `INSTALLAGE IdentityServer4 - Version 4.1.1`
  2. `Installer-Package Twilio -Version 5.55.0`
IdentityServer4 Ui rapide est disponible sur:
Vous pouvez l'inclure dans votre projet en exécutant la commande ci-dessous dans le développeur Shell:
`IEX ((new-object system.net.webclient) .DownloadString ('https://raw.githubusercontent.com/IdentityServer/IdentityServer4.Quickstart.Ui/Main/Getmain.PS1'))`
S'il était installé correctement - vous verriez le dossier QuickStart dans votre projet:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Hiérarchie du projet">}}

Construisons et exécutons ce projet. Vous devriez être en mesure de voir la page de bienvenue comme indiqué ci-dessous:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Ce modèle utilise la boutique de données en mémoire afin que vous puissiez ajouter vos utilisateurs de test dans le fichier config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Classe config.cs">}}

Ouvrez startup.cs et ajoutez les services IdentityServer4 suivants dans la méthode de configuration:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Ajoutez maintenant IdentityServer dans le pipeline de demande:
```
app.UseIdentityServer();
```
Exécutez le projet et accédez à ** _ / compte / connexion _ **

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Connexion">}}

Connectez-vous avec les informations d'identification comme ajouté dans ** config.cs **
Une fois qu'identityServer est configuré et en cours d'exécution. Nous pouvons ensuite ajouter la prise en charge de 2FA à l'aide de Twilio.
Ajoutons la classe suivante:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Cette classe de configuration sera utilisée pour injecter des paramètres en utilisant l'injection de dépendance.
  1. cliquez avec droite sur le projet et ajoutez les secrets de l'utilisateur avec la configuration de Twilio (sid, jeton, phonenumber)
  2. Injecter les paramètres dans la méthode de configuration de startup.cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs a été configuré. Nous pouvons maintenant passer à l'ajout d'un nouveau service appelé AuthMessageSender qui sera responsable de l'envoi de SMS à l'aide de Twilio.
Créons une interface que AuthMessageSender implémentera.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Nous injecterons cela dans startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
Le code d'envoi SMS est assez simple. Nous créons simplement un client Twilio et invoquons la méthode MessageResource.Createasync pour envoyer des SMS.
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
Nous modifierons la méthode de connexion pour vérifier si l'utilisateur a activé 2FA afin que nous puissions les rediriger pour la vérification du code.
Ajouter VerifyCode.cshtml dans QuickStart / Views:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2fa en action">}}

Modifiez la méthode du compte / de la connexion pour générer et envoyer du code de vérification après la vérification des informations d'identification. Nous ne voulons pas terminer la demande de connexion en ce moment.
Par conséquent, l'appel de méthode httpcontext.signInasync sera supprimé, et à la place, nous générerons simplement un code de vérification aléatoire et le stockons (actuellement nous utilisons un magasin en mémoire à des fins de démonstration).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Capture d'écran de code">}}

Et puis nous redirigerons l'utilisateur vers la page «VerifyCode» où la vérification du code sera effectuée et le flux de connexion sera terminé.
Dans VerifyCode Action, nous allons simplement récupérer les informations de l'utilisateur et de code à partir de la mémoire et la faire correspondre avec le code fourni.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Capture d'écran de code">}}

Si le code est apparié, nous terminons simplement la demande d'authentification en invoquant la méthode SignInasync et redirigez l'utilisateur vers la page autorisée.
Exécutons le projet
Étape -1: L'utilisateur fournit des informations d'identification.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2FADEMO - Connexion">}}

Étape-2: les informations d'identification sont vérifiées et un code de vérification est envoyé:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo - SMS">}}

Étape 3: L'utilisateur vérifie le code correct.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2fademo - VerifyCode">}}

Le code étape-4 est vérifié et l'authentification 2FA est terminée.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo - page autorisée">}}


### Conclusion:
Dans cet article, nous avons appris sur 2FA et sa mise en œuvre dans .NET5 en utilisant IdentityServer4 et Twilio. Vous pouvez télécharger l'exemple de code utilisé dans cet article à partir de ce [Repo][6].
L'utilisation de SMS pour 2FA renforce sûrement votre sécurité, mais elle est toujours vulnérable aux [attaques d'échange SIM][7]. Par conséquent, les chercheurs en sécurité encouragent le 2FA à utiliser d'autres approches telles que les applications d'authentification et les clés de sécurité ([Yubikey][8]) qui ne peuvent pas être interceptées sur le réseau téléphonique. Nous en apprendrons plus à ce sujet dans un prochain article - restez à l'écoute!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
