---
title: "Tudo o que você precisa saber sobre a autenticação de dois fatores (2FA)" 
seoTitle: "Tudo o que você precisa saber sobre a autenticação de dois fatores (2FA)" 
description: "Este artigo explica a autenticação de dois fatores (2FA) em detalhes e como ele pode ser implementado no .NET5 usando o IdentityServer4 e o Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "Este artigo explica a autenticação de dois fatores em detalhes e como ele pode ser implementado no .NET 5 usando estruturas de identidade como o IdentityServer4 e um provedor SMS (Twilio). & Nbsp;" 
url: /pt/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## Este artigo explica a autenticação de dois fatores em detalhes e como ele pode ser implementado no .NET 5 usando estruturas de identidade como o IdentityServer4 e um provedor SMS (Twilio).
{{_LINE_11_}}
Ele contém as seguintes seções:
  * [O que é autenticação de dois fatores? ][1]
  * [Como funciona o 2FA?][2]
  * [2FA e autenticação multifatorial][3]
  * [Desvantagens do uso do 2FA][4]
  * [Implementando 2FA em .NET5][5]
Primeiro, vamos entender o que é 2FA e por que ele precisa ser parte integrante de todos os aplicativos da web modernos.

## O que é autenticação de dois fatores?   {#2fa}
Um fator nesse contexto implica uma maneira de convencer um aplicativo ou serviço de que você é o proprietário da conta. O nome de usuário/senha é amplamente utilizado como o fator de autenticação mais comum. No entanto, devido a muitos problemas de segurança associados a TI e violações de dados generalizadas recentes-a autenticação de fator único se tornou menos seguro.
A autenticação de dois fatores é uma camada adicional de segurança, que entra em jogo antes que você possa acessar sua conta. A adição no processo de login padrão-ele introduz uma etapa extra para verificar a identidade do usuário enviando um código (para o seu email ou como uma mensagem de texto). Dessa forma, sua identidade é comprovada e só então o acesso é concedido.

## Como funciona o 2FA?   {#2Fawork}
No 2FA, a senha ainda é seu primeiro fator de autenticação - então, quando você faz login na sua conta, ela o redirecionará para outra página em que você precisar verificar a propriedade da conta. Isso pode ser feito usando várias maneiras:
  1. O aplicativo envia um código de verificação frequentemente chamado OTP (senhas únicas) para o seu endereço de e-mail.
  2. O código é entregue como uma mensagem de texto no seu telefone.
  3. Você instala um aplicativo autenticador no celular, através do qual pode autorizar solicitações de login.
NOTA: Esses códigos de verificação são gerados aleatoriamente e expirados uma vez usados. Além disso, eles têm vida curta - então há uma janela curta antes que você possa usar o código (isso impede o hacker para forçar os códigos de verificação).

## podemos chamar 2fa de autenticação multifatorial?   {#Mfa}
Os métodos de autenticação não se limitam a dois fatores. Muitos aplicativos e serviços estão movendo seus usuários além do 2FA e usando a autenticação multifatorial.
2FA e MFA (autenticação multifatorial) são frequentemente usados ​​de forma intercambiável. No entanto, há uma diferença. Na autenticação de vários fatores, dois ou mais fatores são usados.
Ele pode verificar o endereço IP de um usuário, localização geográfica e informações de dispositivo em relação a outros fatores, como uma senha e OTP, para verificar a identidade do usuário.
Portanto, podemos dizer que o 2FA é um subconjunto de MFA. No 2FA, haverá apenas dois fatores, enquanto o multi-fator pode utilizar dois ou mais fatores. O MFA torna difícil para hackers, pois adiciona várias camadas de segurança no processo de autenticação tradicional.

## Existem desvantagens usando 2fa?   {#MFA-CONS}
Semelhante a muitas soluções de "segurança e privacidade" que existem em aplicativos modernos. Ele também tem um preço - inconveniente, pois há uma etapa adicional envolvida que pode causar atrito na experiência do usuário.
No entanto, está sendo adotado por muitos aplicativos e serviços, portanto essa compensação está se tornando aceitável.

## Como posso implementar a autenticação 2FA?   {#implementando2fa}
Nesta seção, aprenderemos a implementar o 2FA no .NET5 usando o IdentityServer4 e o Twilio.
Então, vamos criar uma conta de avaliação no Twilio:
  1. Inscreva -se
  2. Verifique sua conta fornecendo um número de telefone válido.
Depois que sua conta for verificada, você poderá usar o painel do console.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Painel de Twilio">}}

  1. Copie sua conta SID e autentique o token do painel.
  1. Navegue para comprar um número que você usará para enviar SMS/
NOTA: O Twilio fornece 15 $ Credit em todas as contas de avaliação que você usará para comprar o número de telefone.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - Pesquisa de número de telefone">}}

Você pode escolher qualquer número, desde que ofereça 'recursos de SMS'. (Anote seu número de telefone que usaremos para configurar mais adiante em nosso projeto).
5. Usando a conta de teste, o Twilio apenas permite que você envie SMS para um IDS de chamadas verificado que você pode gerenciar usando o link abaixo:
É tudo o que você precisa configurar usando o Twilio Painel.
Vamos criar um aplicativo Web ASP.NET Core (selecione Modelo de Projeto abaixo e Target .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - novo projeto">}}

Agora, integraremos o IdentityServer4, Pacotes Twilio da Nuget.
  1. `Install -Package IdentityServer4 -version 4.1.1`
  2. `Install -Package Twilio -version 5.55.0`
IdentityServer4 Ui Quick está disponível em:
Você pode incluí -lo em seu projeto executando o comando abaixo no Shell do desenvolvedor:
`iex ((new-object System.net.webclient) .DownloadString ('https://raw.githubusercontent.com/IdentityServer/IdentityServer4.quickstart.ui/main/getmain.ps1')`
Se fosse instalado corretamente - você veria a pasta QuickStart em seu projeto:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="Hierarquia do projeto">}}

Vamos construir e executar este projeto. Você deve poder ver a página de boas -vindas como mostrado abaixo:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

Este modelo usa o armazenamento de dados na memória para que você possa adicionar seus usuários de teste no arquivo config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="Classe config.cs">}}

Open Startup.cs e adicione os seguintes serviços IdentityServer4 no método ConfigServices:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
Agora adicione o IdentityServer no Pedido Pipeline:
```
app.UseIdentityServer();
```
Execute o projeto e navegue para **_/conta/login _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - Login">}}

Faça login com as credenciais, conforme adicionado em **config.cs** 
Uma vez que o IdentityServer esteja configurado e em execução. Em seguida, podemos adicionar suporte ao 2FA usando o Twilio.
Vamos adicionar aula seguinte:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
Esta classe de configuração será usada para injetar configurações usando injeção de dependência.
  1. Clique com a direita no projeto e adicione os segredos do usuário com a configuração do Twilio (Sid, Token, PhoneNumber)
  2. Injetar as configurações no método do ConfigurService de startup.cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
Startup.cs foi configurado. Agora, podemos avançar para adicionar um novo serviço chamado AuthMessageSender, que será responsável pelo envio de SMS usando o Twilio.
Vamos criar uma interface que o AuthMessageSender implementará.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
Vamos injetar isso no startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
O código de envio do SMS é bem simples. Simplesmente criamos um cliente do Twilio e chamamos o método MessagerReSource.Createasync para enviar SMS.
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
Modificaremos o método de login para verificar se o usuário ativou o 2FA para que possamos redirecioná -los para verificação de código.
Adicionar verifyCode.cshtml em quickstart/views:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA em ação">}}

Modifique o método da conta/login para gerar e enviar o código de verificação após a verificação de credenciais. Não queremos concluir a solicitação de sinal neste momento.
Portanto, a chamada do método httpContext.SigninaSync será removida e, em vez disso, simplesmente geraremos um código de verificação aleatório e o armazenaremos (atualmente estamos usando o armazenamento na memória para fins de demonstração).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="Captura de tela de código">}}

E então redirecionaremos o usuário para a página "VerificoCode", onde a verificação do código será executada e o fluxo de trabalho de assinatura será concluído.
Na ação verificada, estamos simplesmente buscando informações de usuário e código da memória e combinando com o código fornecido.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="Captura de tela de código">}}

Se o código for correspondido, simplesmente concluímos a solicitação de autenticação, invocando o método SigninaSync e redirecionando o usuário para a página autorizada.
Vamos executar o projeto
Etapa -1: O usuário fornece credenciais.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2FadeMo - Login">}}

Etapa 2: Credenciais são verificadas e um código de verificação é enviado:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2FadeMo - SMS">}}

Etapa 3: o usuário verifica o código correto.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2FadeMo - Verifique o código">}}

O código da etapa 4 é verificado e a autenticação 2FA foi concluída.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2FadeMo - Página autorizada">}}


### Conclusão:
Neste artigo, aprendemos sobre o 2FA e sua implementação no .NET5 usando o IdentityServer4 e o Twilio. Você pode baixar o código de exemplo usado neste artigo deste [repo][6].
O uso de SMS para 2FA certamente fortalece sua segurança, mas ainda é vulnerável a [SIM Swap Attacks][7]. Portanto, os pesquisadores de segurança estão incentivando o 2FA a usar outras abordagens, como aplicativos autenticadores e chaves de segurança ([Yubikey][8]) que não podem ser interceptadas na rede telefônica. Aprenderemos mais sobre isso em um próximo artigo - fique atento!

  
[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
