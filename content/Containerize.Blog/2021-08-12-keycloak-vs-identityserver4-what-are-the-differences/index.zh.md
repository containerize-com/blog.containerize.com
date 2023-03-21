---
title: "KeyCloak vs IdentityServer4 |有什么区别？" 
seoTitle: "KeyCloak vs IdentityServer4 |有什么区别？" 
description: "这篇博客文章是关于对两个领先的开源身份服务器KeyCloak vs IdentityServer4进行比较。这两个软件都是自托管和功能丰富的。" 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeyCloak和IdentityServer4是开源身份提供商，提供有关访问资源的服务的单个标志。让我们比较这两个SSO软件。" 
url: /zh/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## KeyCloak和IdentityServer4是开源身份提供商，提供有关访问资源的服务的单个标志。让我们比较这两个SSO软件。

{{< figure align=center src="images/open-source-sso.png" alt="KeyCloak vs IdentityServer4">}}


## 概述
在近乎过去，我们发表了一些有关主题的博客文章，例如如何利用SSO系统来改善业务增长，以及2021年的前5个开源单登录软件。这些文章描述了广泛使用的开源SSO软件及核心对业务的影响。但是，用户管理是任何应用程序中最关键的方面。在现代技术世界中，网络安全是一个热门话题。用户访问，登录和注销的应用程序有很多应用程序。具有多组凭据的用户更脆弱，并且是网络攻击的简单目标。
因此，使用一组凭据访问资源始终是一个好主意。单个登录软件使用户可以使用单个用户名和密码登录到多个应用程序。用户只会登录一次，并且可以访问许多应用程序，而无需再次登录。随着开源社区正在开发开源身份提供商，例如[IdentityServer4][1]和[KeyCloak][2]，这种方法日复一日地越来越受欢迎。在这篇博客文章中，我们将浏览前两个开源SSO解决方案，并将比较标题所暗示的KeyCloak vs IdentityServer4的功能和范围。以下几点将涵盖。
  ***[简要介绍IdentityServer4][3]** 
  ***[什么是KeyCloak？][4]** 
  ***[KeyCloak＆IdentityServer的比较4][5]** 
  ***[结论][6]** 

## 简要介绍IdentityServer4   {#intro}
[IdentityServer4][1]是基于OpenID Connect和OAuth 2.0的开源SSO软件。此免费工具写在.NET框架（4.5.x）和.NET Core中，以在多个应用程序上提供单个登录服务。作为身份验证服务器，它提供了可用于访问数字资源的JWT令牌。它提供了许多规定，例如API的访问控制，用户界面自定义，API授权和基于索赔的提供商。此外，它是灵活的，可扩展的，并且具有自托管功能。此外，它支持多个流和联合身份，例如Google，Facebook，Twitter和其他社交网络。
此免费的单登录软件的所有源代码都可以在[Github][7]上找到。因此，用户可以详细介绍有关部署和开发的所有文档。

## 什么是KeyCloak？   {#钥匙}
[KeyCloak][2]是另一种广泛使用的身份验证解决方案。它使用OpenID Connect，OAuth2.0和SAML 2.0提供身份和访问管理。该免费软件提供了一个用户友好的UI，可以管理用户，角色，配置和会话。此外，它提供了与LDAP和Active Directory等第三方应用程序的集成。用户可以通过增强的可扩展性和可用性来利用其集中式用户管理。最重要的是，它为集成提供客户库以及许多功能，例如社交登录，用户联合会，集中管理，密码策略，集群和适配器。该软件上此免费单个符号的所有源代码都可以在[GitHub][8]上找到。因此，用户可以详细介绍有关部署和开发的所有文档。

## KeyCloak＆IdentityServer4   {#comp}的比较
在此KeyCloak vs IdentityServer4文章的部分中，我们将通过涵盖以下几点来研究功能和其他特征来比较这两个开源身份提供商。
**社区站立**：这两个免费的SSO软件都在社区中得到很好的评价。但是，与IdentityServer4相比，KeyCloak在GitHub上具有更好的统计数据。 KeyCloak在Github上获得了9K Plus Stars和IdentityServer的冠军。就文档而言，这两种免费身份验证解决方案都包含有关部署和文档的全面文档。
**功能**：首先，KeyCloak和IdentityServer4基于OpenID Connect和Oauth2.0。但是，KeyCloak使用另一种标准协议SAML2.0。 KeyCloak带有可自定义的用户界面，并提供与LDAP和Active Directory的集成。 [IdentityServer4][1]使用OIDC，这是OAuth2顶部的身份验证层来实现SSO。两个免费的SSO软件都带有Docker图像，开发人员可以使用Docker设置。此外，与KeyCloak相比，IdentityServer4是轻量级的。
**技术堆栈**：就技术而言，KeyCloak主要用Java编写，而其他语言的输入很少，例如JavaScript，HTML等。其次，IdentityServer4主要用其他语言（例如HTML和SCSS）的输入编写C#。
**可扩展性**：它是任何开源软件的主要特征之一，也是这些SSO软件开发人员友好的。这些软件提供了与第三方库的集成。此外，KeyCloak提供了用Java和JavaScript编写的客户适配器。
**安全：** KeyCloak和IdentityServer4已实施了安全机制。此外，IdentityServer4使用承载令牌用于授权目的。

## 结论 {#conclusion}
这是此KeyCloak vs IdentityServer4博客文章的终结。我们浏览了免费SSO系统的一些突出方面，并详细介绍了一些关键功能。因此，您可以自己得出一个结论，即哪种免费的单登录软件更好。本文肯定会帮助您为适合您的业务的正确产品做出正确的选择。此外，如果您非常了解自己的用例，那么决策将成为一项容易的任务。此外，您始终选择适合您需求的软件。
这两个SSO软件都可以轻松地访问资源，从而使组织轻松。组织通过安装良好的单登录软件来确保资源的可用性。 USRE不需要携带多组凭证；相反，他们可以使用一组凭据，仅登录一次，然后可以访问多个网站而无需再次登录。它为整个系统提供了信心，安全性和透明度
最后，**[containerize.com][9] **一直在写进一步的开源产品。请与此[****][10] **保持联系[单登录][11]** 类别，以进行常规更新。此外，您可以在我们的社交媒体帐户上关注我们[Facebook][12]，[LinkedIn][13]和[Twitter][14]。

## 探索
您可能会发现以下链接相关：
  ***[IdentityServer][15]** 
  ***[KeyCloak][16]** 
  ***[CAS][17]** 
  ***[authelia][18]** 
  ***[WSO2][19]** 
  ***[openidentityplatform][20]** 
  ***[freeipa][21]** 
  ***[2021年的前5个开源单登录软件][22]** 
  ***[如何利用SSO系统来改善业务增长][23]** 
  ***[使用免费和开源软件自动化业务运营][24]** 

  
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
