---
title: "Keycloak vs identityServer4 | Quais são as diferenças?" 
seoTitle: "Keycloak vs identityServer4 | Quais são as diferenças?" 
description: "Esta postagem do blog é sobre a comparação dos dois principais servidores de identidade de código aberto Keycloak vs IdentityServer4. Ambos os softwares são auto-hospedados e ricos." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeyCloak e IdentityServer4 são provedores de identidade de código aberto que oferecem sinal único nos serviços para acessar recursos. Vamos comparar esses dois softwares SSO." 
url: /pt/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## keycloak e identityServer4 são provedores de identidade de código aberto que oferecem sinal único nos serviços para acessar recursos. Vamos comparar esses dois softwares SSO.

{{< figure align=center src="images/open-source-sso.png" alt="keycloak vs identityServer4">}}


## Visão geral
No passado, publicamos algumas postagens de blog sobre tópicos como alavancar o sistema SSO para um melhor crescimento dos negócios e o software de assinatura única de código aberto dos 5 no ano 2021. Esses artigos descrevem o software SSO de código aberto amplamente usado e seu software e seu seu Impactos centrais nos negócios. No entanto, o gerenciamento de usuários é o aspecto mais crítico de qualquer aplicativo. No mundo moderno da tecnologia, a segurança cibernética é um tópico quente. Existem toneladas de aplicativos que os usuários visitam, efetuam login e logot. Um usuário com vários conjuntos de credenciais é mais vulnerável e um alvo fácil dos ataques cibernéticos.
Portanto, é sempre uma boa idéia acessar recursos usando um único conjunto de credenciais. O software de sinal único permite que os usuários efetuem login em vários aplicativos usando um único nome de usuário e senha. Os usuários farão logon apenas uma vez e podem acessar muitos aplicativos sem fazer login novamente. Essa abordagem está ganhando popularidade dia a dia, pois a comunidade de código aberto está desenvolvendo provedores de identidade de código aberto como [identityServer4] [1] e [keycloak] [2]. Nesta postagem do blog, passaremos pelas duas principais soluções de SSO de código aberto e compararemos os recursos e os escopos, pois o título sugere o keycloak vs identityServer4. Os seguintes pontos serão cobertos.
  *** [Breve Introdução de IdentityServer4] [3] **
  *** [O que é keycloak?] [4] **
  *** [Comparação de keycloak & identityServer4] [5] **
  *** [Conclusão] [6] **

## breve introdução de identityServer4 {#intro}
[IdentityServer4] [1] é um software SSO de código aberto baseado no OpenID Connect e Oauth 2.0. Essa ferramenta gratuita é escrita na estrutura .NET (4.5.x) e .NET Core para fornecer serviços de assinatura única em vários aplicativos. Como um servidor de autenticação, ele fornece um token JWT que pode ser usado para acessar recursos digitais. Ele oferece muitas disposições, como controle de acesso para API, personalizações de interface do usuário, autorização da API e provedor baseado em reivindicações. Além disso, é flexível, extensível e vem com recursos de auto-hospedagem. Além disso, ele suporta vários fluxos e identidades federadas, como Google, Facebook, Twitter e outras redes sociais.
Todo o código-fonte deste software de sinal único gratuito está disponível no [GitHub] [7]. Portanto, os usuários podem passar por toda a documentação sobre implantação e desenvolvimento.

## O que é keycloak? {#chave}
[KeyCloak] [2] é outra solução de autenticação amplamente usada. Oferece gerenciamento de identidade e acesso usando o OpenID Connect, OAuth2.0 e SAML 2.0. Este software gratuito fornece uma interface do usuário fácil de usar para gerenciar usuários, funções, configurações e sessões. Além disso, fornece integrações com aplicativos de terceiros, como LDAP e Active Directory. Os usuários podem aproveitar seu gerenciamento centralizado de usuários com escalabilidade e disponibilidade aprimoradas. Acima de tudo, ele fornece bibliotecas de clientes para integrações, juntamente com muitos recursos, como logins sociais, federação de usuários, gerenciamento centralizado, políticas de senha, agrupamento e adaptadores. Todo o código -fonte deste sinal único gratuito no software está disponível no [GitHub] [8]. Portanto, os usuários podem passar por toda a documentação sobre implantação e desenvolvimento.

## Comparação de keycloak & identityServer4 {#comp}
Na seção deste artigo KeyCloak vs IdentityServer4, compararemos esses dois provedores de identidade de código aberto, analisando os recursos e outras características, cobrindo os seguintes pontos.
** Comunidade em pé **: Ambos os softwares SSO gratuitos são bem-remados na comunidade. No entanto, o keycloak tem melhores estatísticas no GitHub em comparação com o identityServer4. A Keycloak garantiu 9K Plus Stars e IdentityServer Stands com 3K Plus Stars no Github. No que diz respeito à documentação, ambas as soluções de autenticação gratuitas vêm com documentação abrangente sobre implantação e documentação.
** Recursos **: Em primeiro lugar, KeyCloak e IdentityServer4 são baseados no OpenID Connect e OAuth2.0. No entanto, o KeyCloak usa outro protocolo padrão SAML2.0. O KeyCloak vem com uma interface de usuário personalizável e fornece integrações com LDAP e Active Directory. [IdentityServer4] [1] usa OIDC, que é uma camada de autenticação no topo do OAuth2 para alcançar o SSO. O software SSO gratuito vem com imagens e desenvolvedores do Docker podem configurar usando o Docker. Além disso, o identityServer4 é leve em comparação com o keycloak.
** Pilha de tecnologia **: No que diz respeito às tecnologias, o keycloak é escrito principalmente em Java, com pouca contribuição de outros idiomas, como JavaScript, HTML e um pouco mais. Em segundo lugar, o identityServer4 é escrito principalmente C# com a entrada de alguns outros idiomas, como HTML e SCSS.
** Extensibilidade **: É uma das principais características de qualquer software de código aberto e ambos os dois SSO Software Developerly. Esses software fornecem integração com bibliotecas de terceiros. Além disso, a KeyCloak oferece adaptadores de clientes escritos em Java e JavaScript.
** Segurança: ** KeyCloak e IdentityServer4 implementaram mecanismos de segurança. Além disso, o IdentityServer4 usa tokens do portador para fins de autorização.

## Conclusão {#conclusion}
Este é o fim desta postagem do blog Keycloak vs IdentityServer4. Passamos por alguns aspectos proeminentes dos sistemas SSO gratuitos e elaboramos alguns recursos importantes. Portanto, você pode tirar uma conclusão sobre o qual o software de logon único gratuito é melhor. Este artigo certamente o ajudará a fazer a escolha certa para o produto certo para o seu negócio. Além disso, se você estiver ciente de seus casos de uso, a tomada de decisão se torna uma tarefa fácil. Além disso, você sempre opta por software que se encaixa bem em seus requisitos.
Ambos os softwares SSO fornecem facilidade à organização com a facilidade de acessar recursos. As organizações garantem a disponibilidade de recursos instalando um bom software de sinal único. Usres não precisam transportar vários conjuntos de credenciais; Em vez disso, eles podem usar um conjunto de credenciais, efetuar login apenas uma vez e depois disso, eles podem acessar vários sites sem fazer login novamente. Dá confiança, segurança e transparência a todo o sistema
Finalmente, ** [containerize.com] [9] ** tem escrito em outros produtos de código aberto. Por favor, mantenha contato com esta [****] [10] ** [Sign-On] [11] ** Categoria para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook] [12], [LinkedIn] [13] e [Twitter] [14].

## Explore
Você pode encontrar os seguintes links relevantes:
  *** [IdentityServer] [15] **
  *** [keycloak] [16] **
  *** [CAS] [17] **
  *** [Authelia] [18] **
  *** [WSO2] [19] **
  *** [OpenIdentityPlatform] [20] **
  *** [Freeipa] [21] **
  *** [5 Top 5 de código aberto de software de sinal único no ano de 2021] [22] **
  *** [Como aproveitar o sistema SSO para melhor crescimento dos negócios] [23] **
  *** [Automatize operações comerciais usando software de código aberto e gratuito] [24] **
[1]: https://products.containerize.com/single-sign-on/identity-server/
[2]: https://products.containerize.com/single-sign-on/keycloak/
[3]: #intro
[4]: #key
[5]: #comp
[6]: #Conclusion
[7]: https://github.com/IdentityServer
[8]: https://github.com/keycloak/keycloak
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/video-conferencing/
[11]: https://products.containerize.com/single-sign-on/
[12]: https://web.facebook.com/containerize
[13]: https://www.linkedin.com/company/containerize/
[14]: https://twitter.com/containerize_co
[15]: https://products.containerize.com/single-sign-on/identity-server
[16]: https://products.containerize.com/single-sign-on/keycloak
[17]: https://products.containerize.com/single-sign-on/cas
[18]: https://products.containerize.com/single-sign-on/authelia
[19]: https://products.containerize.com/single-sign-on/wso2
[20]: https://products.containerize.com/single-sign-on/openidentityplatform
[21]: https://products.containerize.com/single-sign-on/freeipa
[22]: https://blog.containerize.com/single-sign-on/top-5-open-source-single-sign-on-software-in-the-year-2021/
[23]: https://blog.containerize.com/single-sign-on/how-to-leverage-sso-solution-for-better-business-growth/
[24]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
