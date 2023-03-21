---
title: "KeyCloak vs IdentityServer4 | Jakie są różnice?" 
seoTitle: "KeyCloak vs IdentityServer4 | Jakie są różnice?" 
description: "Ten post na blogu dotyczy porównania dwóch wiodących serwerów tożsamości typu open source KeyCloak vs IdentityServer4. Oba oprogramowanie są samowystarczalne i bogate." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeyCloak i IdentityServer4 to dostawcy tożsamości typu open source, którzy oferują pojedynczy znak na usługach, aby uzyskać dostęp do zasobów. Porównajmy te dwa oprogramowanie SSO." 
url: /pl/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## KeyCloak i IdentityServer4 to dostawcy tożsamości typu open source, którzy oferują pojedynczy znak na usługach, aby uzyskać dostęp do zasobów. Porównajmy te dwa oprogramowanie SSO.

{{< figure align=center src="images/open-source-sso.png" alt="KeyCloak vs IdentityServer4">}}


## Przegląd
W najbliższej przeszłości opublikowaliśmy kilka postów na blogu na tematy, takie jak wykorzystanie systemu SSO w celu lepszego rozwoju biznesu, a także 5 najlepszych oprogramowania typu open source w 2021 r. Artykuły te opisują szeroko używane oprogramowanie SSO i jego oprogramowanie SSO i jego open source Podstawowy wpływ na biznes. Jednak zarządzanie użytkownikami jest najbardziej krytycznym aspektem każdej aplikacji. We współczesnym świecie technologii cyberbezpieczeństwo jest gorącym tematem. Istnieje mnóstwo aplikacji, które użytkownicy odwiedzają, logują się i logują się. Użytkownik z wieloma zestawami poświadczeń jest bardziej wrażliwy i jest łatwym celem cyberataków.
Dlatego zawsze dobrym pomysłem jest dostęp do zasobów przy użyciu jednego zestawu poświadczeń. Oprogramowanie pojedynczego logowania umożliwia użytkownikom zalogowanie się do wielu aplikacji za pomocą jednej nazwy użytkownika i hasła. Użytkownicy będą logować się tylko raz i mogą uzyskać dostęp do wielu aplikacji bez ponownego zalogowania się. Takie podejście zyskuje popularność z dnia na dzień, ponieważ społeczność open source rozwija dostawców tożsamości open source, takich jak [IdentityServer4][1] i [KeyCloak][2]. W tym poście na blogu przejdziemy do dwóch najlepszych rozwiązań SSO open source i porównamy funkcje i zakresy, ponieważ tytuł sugeruje KeyCloak vs IdentityServer4. Poniższe punkty zostaną omówione.
  * **[Krótkie wprowadzenie IdentityServer4][3]**
  * **[Co to jest KeyCloak?][4]**
  * **[Porównanie KeyCloak i IdentityServer4][5]**
  * **[wniosek][6]**

## Krótkie wprowadzenie IdentityServer4   {#intro}
[IdentityServer4][1] to oprogramowanie SSO open source oparte na OpenId Connect i OAuth 2.0. To bezpłatne narzędzie jest zapisane w .NET Framework (4.5.x) i .NET Core, aby zapewnić usługi pojedynczej logowania w wielu aplikacjach. Jako serwer uwierzytelniający zapewnia token JWT, który można wykorzystać do dostępu do zasobów cyfrowych. Oferuje wiele przepisów, takich jak kontrola dostępu do interfejsu API, dostosowania interfejsu użytkownika, autoryzacja interfejsu API i dostawca oparty na roszczeniach. Ponadto jest elastyczny, rozszerzalny i ma możliwości samowystarczające. Ponadto obsługuje wiele przepływów i tożsamości federacyjnych, takich jak Google, Facebook, Twitter i inne sieci społecznościowe.
Cały kod źródłowy tego bezpłatnego oprogramowania pojedynczego logowania jest dostępny na [GitHub][7]. Dlatego użytkownicy mogą przejrzeć całą dokumentację dotyczącą wdrażania i rozwoju.

## Co to jest KeyCloak?   {#klucz}
[KeyCloak][2] to kolejne szeroko stosowane rozwiązanie uwierzytelniania. Oferuje zarządzanie tożsamością i dostępem za pomocą OpenId Connect, OAuth2.0 i SAML 2.0. To bezpłatne oprogramowanie zapewnia przyjazny interfejs użytkownika do zarządzania użytkownikami, ról, konfiguracjami i sesjami. Ponadto zapewnia integrację z aplikacjami innych firm, takich jak LDAP i Active Directory. Użytkownicy mogą wykorzystać swoje scentralizowane zarządzanie użytkownikami dzięki lepszej skalowalności i dostępności. Przede wszystkim zapewnia biblioteki klientów do integracji wraz z wieloma funkcjami, takimi jak logowania społecznościowe, federacja użytkowników, scentralizowane zarządzanie, zasady haseł, klastrowanie i adaptery. Cały kod źródłowy tego bezpłatnego pojedynczego znaku na oprogramowaniu jest dostępny na [GitHub][8]. Dlatego użytkownicy mogą przejrzeć całą dokumentację dotyczącą wdrażania i rozwoju.

## Porównanie KeyCloak i IdentityServer4   {#Comp}
W sekcji tego artykułu KeyCloak vs IdentityServer4 porównamy tych dwóch dostawców tożsamości open source, przeglądając funkcje i inne cechy, obejmując następujące punkty.
**STOJA STALIZACJA**: Oba te bezpłatne oprogramowanie SSO są dobrze odrzucone w społeczności. Jednak KeyCloak ma lepsze statystyki na GitHub w porównaniu z IdentityServer4. KeyCloak zabezpieczył gwiazdki 9k plus, a tożsamość tożsamości z gwiazdami 3K plus na GitHub. Jeśli chodzi o dokumentację, oba bezpłatne rozwiązania uwierzytelniania mają kompleksową dokumentację dotyczącą wdrażania i dokumentacji.
**Funkcje**: Po pierwsze, KeyCloak i IdentityServer4 są oparte na Openid Connect i OAuth2.0. Jednak KeyCloak używa kolejnego standardowego protokołu SAML2.0. KeyCloak jest wyposażony w interfejs użytkownika, który można dostosować i zapewnia integrację z LDAP i Active Directory. [IdentityServer4][1] używa OIDC, która jest warstwą uwierzytelniania na szczycie OAuth2 w celu osiągnięcia SSO. Zarówno bezpłatne oprogramowanie SSO z obrazami Docker, jak i programiści mogą skonfigurować za pomocą Docker. Ponadto IdentityServer4 jest lekki w porównaniu do KeyCloak.
**Stack technologii**: Jeśli chodzi o technologie, KeyCloak jest napisany głównie w Javie z niewielkim wkładem innych języków, takich jak JavaScript, HTML i jeszcze więcej. Po drugie, IdentityServer4 jest napisane głównie C# z wprowadzeniem niektórych innych języków, takich jak HTML i SCSS.
**Rozszerzalność**: Jest to jedna z głównych cech każdego oprogramowania typu open source i obu przyjaznych programistom oprogramowania SSO. Oprogramowanie to zapewnia integrację z bibliotekami stron trzecich. Ponadto KeyCloak oferuje adaptery klientów napisane w Javie i JavaScript.
**Bezpieczeństwo:** KeyCloak i IdentityServer4 wdrożyli mechanizmy bezpieczeństwa. Ponadto IdentityServer4 używa tokenów nagłośniowych do celów autoryzacji.

## Wniosek   {#Conclusion}
To jest koniec tego postu na blogu KeyCloak vs IdentityServer4. Przeszliśmy kilka widocznych aspektów zarówno bezpłatnych systemów SSO i opracowaliśmy niektóre kluczowe funkcje. Dlatego możesz sam wyciągnąć wniosek o tym, które bezpłatne oprogramowanie pojedynczego logowania jest lepsze. Ten artykuł z pewnością pomoże ci dokonać właściwego wyboru dla odpowiedniego produktu dla Twojej firmy. Ponadto, jeśli jesteś świadomy swoich przypadków użycia, podejmowanie decyzji staje się łatwym zadaniem. Ponadto zawsze wybierasz oprogramowanie, które dobrze pasuje do twoich wymagań.
Oba te oprogramowanie SSO zapewnia łatwość organizacji z łatwością dostępu do zasobów. Organizacje upewniają się, że dostępność zasobów instalując dobre oprogramowanie pojedyncze logowania. USRES nie muszą nosić wielu zestawów poświadczeń; Mogą raczej użyć jednego zestawu poświadczeń, zalogować się tylko raz, a następnie mogą uzyskać dostęp do wielu stron bez ponownego zalogowania się. Daje to pewność siebie, bezpieczeństwo i przejrzystość całego systemu
Wreszcie  **[Containerize.com][9]**  pisze na temat dalszych produktów open source. Pozostań w kontakcie z tym [****][10] **[Kategoria pojedynczego podpisania][11]**  do regularnych aktualizacji. Ponadto możesz śledzić nas na naszych kontach w mediach społecznościowych [Facebook][12], [LinkedIn][13] i [Twitter][14].

## Badać
Możesz znaleźć istotne następujące linki:
  * **[IdentityServer][15]**
  * **[KeyCloak][16]**
  * **[CAS][17]**
  * **[Authelia][18]**
  * **[WSO2][19]**
  * **[OpenIdentityPlatform][20]**
  * **[freeipa][21]**
  * **[Top 5 Open Source Single On-On w roku 2021][22]**
  * **[Jak wykorzystać system SSO w celu lepszego rozwoju biznesu][23]**
  * **[Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source][24]**

  
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
