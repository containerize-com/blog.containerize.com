---
title: "Keycloak vs IdentityServer4 | Was sind die Unterschiede?" 
seoTitle: "Keycloak vs IdentityServer4 | Was sind die Unterschiede?" 
description: "In diesem Blog -Beitrag geht es um den Vergleich der beiden führenden Open -Source -Identitätsserver Keycloak vs IdentityServer4. Beide Software sind selbst gehostet und mit reichem Gesicht." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "Keycloak und IdentityServer4 sind Open -Source -Identitätsanbieter, die für Dienste ein einzelnes Zeichen für den Zugriff auf Ressourcen anbieten. Vergleichen wir diese beiden SSO -Software." 
url: /de/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## KeyCloak und IdentityServer4 sind Open -Source -Identitätsanbieter, die einzelne Anzeichen für Dienste für den Zugriff auf Ressourcen bieten. Vergleichen wir diese beiden SSO -Software.

{{< figure align=center src="images/open-source-sso.png" alt="Keycloak vs IdentityServer4">}}


## Überblick
In der nahen Vergangenheit haben wir einige Blog-Beiträge zu Themen veröffentlicht, wie z. Kernauswirkungen auf das Geschäft. Die Benutzerverwaltung ist jedoch der kritischste Aspekt jeder Anwendung. In der modernen Welt der Technologie ist die Cybersicherheit ein heißes Thema. Es gibt unzählige Anwendungen, die Benutzer besuchen, anmelden und sich anmelden. Ein Benutzer mit mehreren Anmeldeinformationen ist anfälliger und ein einfaches Ziel von Cyberangriffen.
Daher ist es immer eine gute Idee, mithilfe einer einzigen Reihe von Anmeldeinformationen auf Ressourcen zuzugreifen. Mit einer einzelnen Sign-On-Software können sich Benutzer mit einem einzelnen Benutzernamen und Kennwort bei mehreren Anwendungen anmelden. Benutzer melden sich nur einmal an und können auf viele Anwendungen zugreifen, ohne sich erneut anzumelden. Dieser Ansatz gewinnt Tag für Tag an Popularität, da die Open -Source -Community Open -Source -Identitätsanbieter wie [IdentityServer4] [1] und [Keycloak] [2] entwickelt. In diesem Blog -Beitrag werden wir die beiden besten Open -Source -SSO -Lösungen durchlaufen und die Funktionen und Bereiche vergleichen, wenn der Titel vorschlägt, dass Keycloak vs IdentityServer4. Die folgenden Punkte werden abgedeckt.
  *** [kurze Einführung von IdentityServer4] [3] **
  *** [Was ist Schlüsselkloak?] [4] **
  *** [Vergleich von Keycloak & IdentityServer4] [5] **
  *** [Schlussfolgerung] [6] **

## kurze Einführung von IdentityServer4 {#Intro}
[IdentityServer4] [1] ist eine Open -Source -SSO -Software, die auf OpenID Connect und OAuth 2.0 basiert. Dieses kostenlose Tool ist im .NET Framework (4.5.x) und im .NET Core geschrieben, um einzelne Sign-On-Dienste für mehrere Anwendungen bereitzustellen. Als Authentifizierungsserver bietet es ein JWT -Token, mit dem auf digitale Ressourcen zugreifen kann. Es bietet viele Bestimmungen wie Zugriffskontrolle für API, Benutzeroberflächenanpassungen, API-Autorisierung und anspruchsbasierte Anbieter. Darüber hinaus ist es flexibel, erweiterbar und verfügt über Selbsthostfunktionen. Darüber hinaus unterstützt es mehrere Flüsse und Föderierte Identitäten wie Google, Facebook, Twitter und andere soziale Netzwerke.
Der gesamte Quellcode dieser kostenlosen Single-Sign-Software ist in [GitHub] [7] verfügbar. Daher können Benutzer alle Dokumentationen bezüglich Bereitstellung und Entwicklung durchlaufen.

## Was ist Schlüsselkloak? {#Taste}
[Keycloak] [2] ist eine weitere weit verbreitete Authentifizierungslösung. Es bietet Identitäts- und Zugriffsmanagement mithilfe von OpenID Connect, OAuth2.0 und SAML 2.0. Diese kostenlose Software bietet eine benutzerfreundliche Benutzeroberfläche, um Benutzer, Rollen, Konfigurationen und Sitzungen zu verwalten. Darüber hinaus bietet es Integrationen mit Anwendungen von Drittanbietern wie LDAP und Active Directory. Benutzer können ihre zentralisierte Benutzerverwaltung mit verbesserter Skalierbarkeit und Verfügbarkeit nutzen. Vor allem bietet es Client -Bibliotheken für Integrationen sowie viele Funktionen wie Social Logins, User Federation, zentrales Management, Kennwortrichtlinien, Clustering und Adapter. Der gesamte Quellcode dieses kostenlosen Einzelzeichens auf Software ist in [Github] [8] verfügbar. Daher können Benutzer alle Dokumentationen bezüglich Bereitstellung und Entwicklung durchlaufen.

## Vergleich von KeyCloak & IdentityServer4 {#Comp}
Im Abschnitt dieses Artikels KeyCloak vs IdentityServer4 werden wir diese beiden Open -Source -Identitätsanbieter vergleichen, indem wir uns mit den folgenden Punkten und anderen Merkmalen befassen.
** Community Standing **: Beide kostenlose SSO-Software sind in der Community gut wiedergegeben. Keycloak hat jedoch bessere Statistiken für GitHub als der Identitätserver4. Keycloak hat 9K Plus Stars und IdentityServer -Ständer mit 3K Plus -Stars auf Github gesichert. In Bezug auf die Dokumentation sind beide kostenlosen Authentifizierungslösungen umfassende Dokumentationen bezüglich Bereitstellung und Dokumentation ausgestattet.
** Merkmale **: Erstens basieren Keycloak und IdentityServer4 auf OpenID Connect und OAuth2.0. Keycloak verwendet jedoch ein weiteres Standardprotokoll saml2.0. KeyCloak verfügt über eine Benutzeroberfläche, die anpassbar ist und Integrationen mit LDAP und Active Directory bietet. [IdentityServer4] [1] verwendet OIDC, eine Authentifizierungsschicht auf OAuth2, um den SSO zu erreichen. Beide kostenlose SSO -Software werden mit Docker -Bildern geliefert und Entwickler können mit Docker einrichten. Darüber hinaus ist IdentityServer4 im Vergleich zu Keycloak leicht.
** Tech Stack **: Was die Technologien betrifft, ist Keycloak hauptsächlich in Java mit wenig Eingabe anderer Sprachen wie JavaScript, HTML und einigen mehr geschrieben. Zweitens ist IdentityServer4 hauptsächlich C# mit der Eingabe einiger anderer Sprachen wie HTML und SCSS geschrieben.
** Erweiterbarkeit **: Es ist eine der Haupteigenschaften jeder Open-Source-Software und beiden SSO-Softwareentwicklerfreunden. Diese Software bietet Integration in Bibliotheken von Drittanbietern. Darüber hinaus bietet KeyCloak Kundenadapter an, die in Java und JavaScript geschrieben wurden.
** Sicherheit: ** Keycloak und IdentityServer4 haben Sicherheitsmechanismen implementiert. Darüber hinaus verwendet IdentityServer4 Bearer -Token für Autorisierungszwecke.

## Schlussfolgerung {#Conclusion}
Dies ist das Ende dieses Blog -Posts von Keycloak vs IdentityServer4. Wir haben einige herausragende Aspekte von freien SSO -Systemen durchgemacht und auf einige wichtige Funktionen ausgearbeitet. Daher können Sie selbst eine Schlussfolgerung darüber ziehen, welche kostenlose Single-Anmelde-Software besser ist. Dieser Artikel hilft Ihnen sicherlich dabei, die richtige Wahl für das richtige Produkt für Ihr Unternehmen zu treffen. Wenn Sie sich Ihrer Anwendungsfälle bewusst sind, wird die Entscheidungsfindung außerdem zu einer leichten Aufgabe. Darüber hinaus entscheiden Sie sich immer für Software, die gut zu Ihren Anforderungen passt.
Beide SSO -Software bieten dem Unternehmen eine einfache Weise mit dem einfachen Zugriff auf Ressourcen. Unternehmen stellen sicher, dass die Verfügbarkeit von Ressourcen durch die Installation einer guten Single-Sign-Software installiert wird. USRES müssen nicht mehrere Anmeldeinformationen tragen. Vielmehr können sie einen Satz von Anmeldeinformationen verwenden, sich nur einmal anmelden und danach können sie auf mehrere Websites zugreifen, ohne sich erneut anzumelden. Es gibt dem gesamten System Vertrauen, Sicherheit und Transparenz
Schließlich hat ** [containerize.com] [9] ** über weitere Open -Source -Produkte geschrieben. Bitte bleiben Sie in Kontakt mit dieser [****] [10] ** [einzelner Signal] [11] ** Kategorie für regelmäßige Updates. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook] [12], [LinkedIn] [13] und [Twitter] [14] folgen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  *** [IdentityServer] [15] **
  *** [KeyCloak] [16] **
  *** [cas] [17] **
  *** [Authelia] [18] **
  *** [Wso2] [19] **
  *** [OpenIdentityPlatform] [20] **
  *** [FreeIpa] [21] **
  *** [Top 5 Open-Source-Single-Sign-On-Software im Jahr 2021] [22] **
  *** [Wie man das SSO -System für ein besseres Geschäftswachstum nutzt] [23] **
  *** [Automatisieren Sie den Geschäftsbetrieb mit kostenloser und Open -Source -Software] [24] **
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
