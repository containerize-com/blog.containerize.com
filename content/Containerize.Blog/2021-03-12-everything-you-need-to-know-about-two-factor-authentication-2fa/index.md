---
title: Everything You Need to Know About Two-Factor Authentication (2FA)
seoTitle: Everything You Need to Know About Two-Factor Authentication (2FA)
description: This article explains two-factor (2FA) authentication in detail and how to It can be implemented in .NET5 using IdentityServer4 and Twilio.
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: 'This article explains two-factor authentication in detail and how to It can be implemented in .NET 5 using Identity Frameworks like IdentityServer4 and an SMS Provider (Twilio).&nbsp;'
url: /single-sign-on/everything-you-need-to-know-about-two-factor-authentication-2fa/
aliases: 
    -  /2021/03/12/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']

---
## This article explains two-factor authentication in detail and how to It can be implemented in .NET 5 using Identity Frameworks like IdentityServer4 and an SMS Provider (Twilio). 

<img src="http://localhost/wordpress/wp-content/uploads/2021/03/everything-you-need-to-know-about-2fa.png" alt="Two-factor Authentication (2fA) with .NET5 IdentityServer4 and twilio">  

It contains the following sections:

  * [What is Two-Factor Authentication? ][1]
  * [How does 2FA work?][2]
  * [2FA and Multi-Factor Authentication][3]
  * [Drawbacks of using 2FA][4] 
  * [Implementing 2FA in .NET5][5] 

First off, Let’s understand What 2FA is and why it needs to be an integral part of every modern web application. 

## What is Two-Factor Authentication? {#2FA}

A factor in this context implies a way you can convince an app or service that you are the owner of the account. Username/password is widely used as the most common authentication factor. However, Due to many security issues associated with it and recent widespread data breaches – single-factor authentication has become less secure.  

Two-factor authentication is an additional layer of security, which comes into play before you can access your account. In-addition to the standard login process –  It introduces an extra step to verify user identity by sending a code (to your email or as a text message). In this way, your identity is proved and only then access is granted. 

## How does 2FA work?  {#2fawork}

In 2FA, password is still your first authentication factor – so when you login to your account It will redirect you to another page where you are required to verify the account ownership. This can be done using various ways: 

  1. Application sends a verification code often called OTP ( one-time passwords) to your Email address. 
  2. Code is delivered as a text message on your phone. 
  3. You install an authenticator app on mobile through which you can authorize login requests. 

Note: These verification codes are generated randomly and are expired once used. Also,they are short lived – so there’s a short window before you can use the code (This prevents the hacker to brute force the verification codes). 

## Can we call 2FA as Multi-Factor Authentication?  {#MFA}

Authentication methods are not limited to two-factor. Many apps and services are moving their users beyond 2FA and using Multi-Factor Authentication.

2FA and MFA (multi-factor authentication) are often used interchangeably. However there is a difference. In multi-factor authentication two or more factors are used.

It can check a user’s IP address, geo-location and device information in-addition to other factors such as a password and OTP to verify the user’s identity. 

Therefore, we can say the 2FA is a subset of MFA. In 2FA there will only be two factors whereas multi-factor can utilize two or more factors. MFA makes it difficult for hackers as it adds multiple layers of security in the traditional authentication process. 

## Are there any drawbacks using 2FA? {#mfa-cons}

Similar to many ‘security and privacy’ solutions that exist in modern apps. It also comes with a  price – Inconvenience,  as there is an additional step  involved which may cause friction in user experience.

However, It’s being adopted by many apps and services so this trade-off is becoming acceptable. 

## How can I implement 2FA Authentication? {#implementing2fa}

In this section, we will learn how to implement 2FA in .NET5 using IdentityServer4 and Twilio. 

So Let’s create a trial account on Twilio:

  1. Signup on <https://www.twilio.com/>
  2. Verify your account by providing a valid phone number. 

 Once your account is verified you can then use their console dashboard.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio Dashboard">}}  

  1. Copy your Account SID and Auth Token from the Dashboard. 

  1. Navigate to <https://www.twilio.com/console/phone-numbers/search> to Buy a Number That you will use for sending SMS/ 

Note: Twilio gives 15$ credit in all trial accounts which you will use to buy the phone number. 

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Phone Number Search ">}}  

You may choose any number as long as it supports ‘SMS Capabilities’. (Note down your phone number which we will use to configure later in our project). 

5. Using trial account, Twilio only allows you to send sms to a verified caller IDs which you can manage using below link: <https://www.twilio.com/console/phone-numbers/verified> 

That’s all you need to configure using Twilio Dashboard. 

Let’s create a ASP.NET Core Web App (Select Project template as below and target .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - New Project">}}  

We will now integrate IdentityServer4,Twilio packages from NuGet. 

  1. `Install-Package IdentityServer4 -Version 4.1.1`
  2. `Install-Package Twilio -Version 5.55.0`

IdentityServer4 Quick UI is available at: <https://github.com/IdentityServer/IdentityServer4.Quickstart.UI>

You can include it in your project by running the below command in developer shell:

`iex ((New-Object System.Net.WebClient).DownloadString('<a href="https://raw.githubusercontent.com/IdentityServer/IdentityServer4.Quickstart.UI/main/getmain.ps1">https://raw.githubusercontent.com/IdentityServer/IdentityServer4.Quickstart.UI/main/getmain.ps1</a>'))`

If it was installed correctly – You would see the QuickStart folder in your project:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Project Hierarchy ">}}  

Let’s build and run this project. You should be able to see the welcome page as shown below:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}  

This Template uses in-memory data store so you may add your test users in Config.cs file

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Config.cs Class">}}  

Open Startup.cs and add following IdentityServer4 Services in ConfigServices method:


```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```


Now add IdentityServer in request pipeline :


```
app.UseIdentityServer();
```


Run the project and Navigate to **_/account/login _**

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Login ">}}  

Login with the credentials as added in **config.cs **

Once IdentityServer is configured and running. We can then add support for 2FA using Twilio. 

Let’s add following class:


```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```


This configuration class will be used to inject settings using dependency injection. 

  1. RightClick on the project and add the user secrets with Twilio’s configuration (Sid, Token, PhoneNumber)
  2. Inject settings in ConfigureService method of Startup.cs


```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```


Startup.cs has been configured. We can now move on to adding a new service called AuthMessageSender which will be responsible for sending SMS using Twilio.

Let’s create an interface which AuthMessageSender will implement.


```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```


We will inject this in Startup.cs.


```
services.AddTransient <ISmsSender, AuthMessageSender>();

```


The SMS sending code is pretty simple. We simply create a Twilio client and invoke MessageResource.CreateAsync method to send SMS.


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


We will modify the Login method to check if the user has enabled 2FA so we can redirect them for code verification.

Add VerifyCode.cshtml in QuickStart/Views:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA In Action ">}}  

Modify Account/Login method to generate and send verification code after verifying credentials. We don’t want to complete the sign in request at this moment.

Therefore, HttpContext.SignInAsync method call will be removed, and instead we will simply generate a random verification code and store it (Currently we are using in-memory store for demonstration purpose).


```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```


{{< figure align=center src="images/code-1024x521.png" alt="Code Screenshot ">}}  

And then we will redirect the user to the “VerifyCode” page where code verification will be performed and the sign-in workflow will be completed.

In VerifyCode action we are simply fetching user and code information from memory and matching it with the provided code.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Code Screenshot ">}}  

If the code is matched then we simply complete the authentication request by invoking SignInAsync method and redirect the user to the authorized page.

Let’s run the project

Step -1 : User provides credentials. 

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2FADemo - Login ">}}  

Step-2: Credentials are verified and a verification code is sent:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2FADemo - SMS ">}}  

Step-3: User verifies the correct code.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2FADemo - VerifyCode ">}}  

Step-4 Code is verified and the 2FA authentication has been completed.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2FADemo - Authorized Page ">}}  

### Conclusion: 

In this article, we have learned about 2FA and Its implementation in .NET5 using IdentityServer4 and Twilio. You can download the sample code used in this article from this [repo][6].

Using SMS for 2FA surely strengthens your security but It’s still vulnerable to [SIM Swap Attacks][7]. Therefore, Security researchers are encouraging 2FA to use other approaches like Authenticator apps and Security Keys ([YubiKey][8]) which can’t be intercepted on the phone network. We will learn more on that in an upcoming article – Stay Tuned!

 [1]: #2FA
 [2]: #2fawork
 [3]: #MFA
 [4]: #mfa-cons
 [5]: #implementing2fa
 [6]: https://github.com/csehammad/2FAUsingIdentityServer4
 [7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
 [8]: https://www.yubico.com/