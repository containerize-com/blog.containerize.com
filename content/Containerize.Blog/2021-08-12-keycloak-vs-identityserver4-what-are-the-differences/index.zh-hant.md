---
title: "KeyCloak vs IdentityServer4 |有什麼區別？" 
seoTitle: "KeyCloak vs IdentityServer4 |有什麼區別？" 
description: "這篇博客文章是關於對兩個領先的開源身份服務器KeyCloak vs IdentityServer4進行比較。這兩個軟件都是自託管和功能豐富的。" 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeyCloak和IdentityServer4是開源身份提供商，提供有關訪問資源的服務的單個標誌。讓我們比較這兩個SSO軟件。" 
url: /zh-hant/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## KeyCloak和IdentityServer4是開源身份提供商，提供有關訪問資源的服務的單個標誌。讓我們比較這兩個SSO軟件。

{{< figure align=center src="images/open-source-sso.png" alt="KeyCloak vs IdentityServer4">}}


## 概述
在近乎過去，我們發表了一些有關主題的博客文章，例如如何利用SSO系統來改善業務增長，以及2021年的前5個開源單登錄軟件。這些文章描述了廣泛使用的開源SSO軟件及核心對業務的影響。但是，用戶管理是任何應用程序中最關鍵的方面。在現代技術世界中，網絡安全是一個熱門話題。用戶訪問，登錄和註銷的應用程序有很多應用程序。具有多組憑據的用戶更脆弱，並且是網絡攻擊的簡單目標。
因此，使用一組憑據訪問資源始終是一個好主意。單個登錄軟件使用戶可以使用單個用戶名和密碼登錄到多個應用程序。用戶只會登錄一次，並且可以訪問許多應用程序，而無需再次登錄。隨著開源社區正在開發開源身份提供商，例如[IdentityServer4][1]和[KeyCloak][2]，這種方法日復一日地越來越受歡迎。在這篇博客文章中，我們將瀏覽前兩個開源SSO解決方案，並將比較標題所暗示的KeyCloak vs IdentityServer4的功能和範圍。以下幾點將涵蓋。
  * **[簡要介紹IdentityServer4][3]**
  * **[什麼是KeyCloak？][4]**
  * **[KeyCloak＆IdentityServer的比較4][5]**
  * **[結論][6]**

##簡要介紹IdentityServer4   {#intro}
[IdentityServer4][1]是基於OpenID Connect和OAuth 2.0的開源SSO軟件。此免費工具寫在.NET框架（4.5.x）和.NET Core中，以在多個應用程序上提供單個登錄服務。作為身份驗證服務器，它提供了可用於訪問數字資源的JWT令牌。它提供了許多規定，例如API的訪問控制，用戶界面自定義，API授權和基於索賠的提供商。此外，它是靈活的，可擴展的，並且具有自託管功能。此外，它支持多個流和聯合身份，例如Google，Facebook，Twitter和其他社交網絡。
此免費的單登錄軟件的所有源代碼都可以在[Github][7]上找到。因此，用戶可以詳細介紹有關部署和開發的所有文檔。

##什麼是KeyCloak？   {#鑰匙}
[KeyCloak][2]是另一種廣泛使用的身份驗證解決方案。它使用OpenID Connect，OAuth2.0和SAML 2.0提供身份和訪問管理。該免費軟件提供了一個用戶友好的UI，可以管理用戶，角色，配置和會話。此外，它提供了與LDAP和Active Directory等第三方應用程序的集成。用戶可以通過增強的可擴展性和可用性來利用其集中式用戶管理。最重要的是，它為集成提供客戶庫以及許多功能，例如社交登錄，用戶聯合會，集中管理，密碼策略，集群和適配器。該軟件上此免費單個符號的所有源代碼都可以在[GitHub][8]上找到。因此，用戶可以詳細介紹有關部署和開發的所有文檔。

## KeyCloak＆IdentityServer4   {#comp}的比較
在此KeyCloak vs IdentityServer4文章的部分中，我們將通過涵蓋以下幾點來研究功能和其他特徵來比較這兩個開源身份提供商。
**社區站立**：這兩個免費的SSO軟件都在社區中得到很好的評價。但是，與IdentityServer4相比，KeyCloak在GitHub上具有更好的統計數據。 KeyCloak在Github上獲得了9K Plus Stars和IdentityServer的冠軍。就文檔而言，這兩種免費身份驗證解決方案都包含有關部署和文檔的全面文檔。
**功能**：首先，KeyCloak和IdentityServer4基於OpenID Connect和Oauth2.0。但是，KeyCloak使用另一種標準協議SAML2.0。 KeyCloak帶有可自定義的用戶界面，並提供與LDAP和Active Directory的集成。 [IdentityServer4][1]使用OIDC，這是OAuth2頂部的身份驗證層來實現SSO。兩個免費的SSO軟件都帶有Docker圖像，開發人員可以使用Docker設置。此外，與KeyCloak相比，IdentityServer4是輕量級的。
**技術堆棧**：就技術而言，KeyCloak主要用Java編寫，而其他語言的輸入很少，例如JavaScript，HTML等。其次，IdentityServer4主要用其他語言（例如HTML和SCSS）的輸入編寫C＃。
**可擴展性**：它是任何開源軟件的主要特徵之一，也是這些SSO軟件開發人員友好的。這些軟件提供了與第三方庫的集成。此外，KeyCloak提供了用Java和JavaScript編寫的客戶適配器。
**安全：** KeyCloak和IdentityServer4已實施了安全機制。此外，IdentityServer4使用承載令牌用於授權目的。

##結論 {#conclusion}
這是此KeyCloak vs IdentityServer4博客文章的終結。我們瀏覽了免費SSO系統的一些突出方面，並詳細介紹了一些關鍵功能。因此，您可以自己得出一個結論，即哪種免費的單登錄軟件更好。本文肯定會幫助您為適合您的業務的正確產品做出正確的選擇。此外，如果您非常了解自己的用例，那麼決策將成為一項容易的任務。此外，您始終選擇適合您需求的軟件。
這兩個SSO軟件都可以輕鬆地訪問資源，從而使組織輕鬆。組織通過安裝良好的單登錄軟件來確保資源的可用性。 USRE不需要攜帶多組憑證；相反，他們可以使用一組憑據，僅登錄一次，然後可以訪問多個網站而無需再次登錄。它為整個系統提供了信心，安全性和透明度
最後， **[containerize.com][9]** 一直在寫進一步的開源產品。請與此[****][10]**保持聯繫[單登錄][11]**類別，以進行常規更新。此外，您可以在我們的社交媒體帳戶上關注我們[Facebook][12]，[LinkedIn][13]和[Twitter][14]。

## 探索
您可能會發現以下鏈接相關：
  * **[IdentityServer][15]**
  * **[KeyCloak][16]**
  * **[CAS][17]**
  * **[authelia][18]**
  * **[WSO2][19]**
  * **[openidentityplatform][20]**
  * **[freeipa][21]**
  * **[2021年的前5個開源單登錄軟件][22]**
  * **[如何利用SSO系統來改善業務增長][23]**
  * **[使用免費和開源軟件自動化業務運營][24]**

  
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
