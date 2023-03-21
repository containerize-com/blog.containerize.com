---
title: "Jak Gatsby integruje się z WordPress? |. Gatsby WordPress" 
seoTitle: "Jak Gatsby integruje się z WordPress? |. Gatsby WordPress" 
description: "Użyj Gatsby WordPress razem, aby poprawić szybkość, skalowalność i bezpieczeństwo swojej witryny. W tym samouczku dowiesz się, jak korzystać z tego oprogramowania typu open source." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Skonfiguruj Open Source Gatsby z WordPress, aby zapewnić większą wrażenia użytkownika i ogólną wydajność. Dowiedzmy się, jak korzystać z tego statycznego generatora witryn." 
url: /pl/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Skonfiguruj open source Gatsby z WordPress, aby zapewnić większą wrażenia użytkownika i ogólną wydajność. Dowiedzmy się, jak korzystać z tego statycznego generatora witryn.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


## Przegląd
GatsByJS to bezpłatny i oparty na opachowym reakcie generator statycznych witryn zasilanych GraphQL. Wykorzystuje potężną wstępną konfigurację do budowy strony internetowej, która używa tylko plików statycznych do niewiarygodnie szybkich obciążeń stron. WordPress to świetna platforma blogowa typu open source. W rezultacie jest wiele osób, które wiedzą, jak dowiedzieć się, czy witryna jest witryną WordPress, aby mogli ją zhakować i ukraść informacje. Używanie Gatsby WordPress razem zapewni tę samą moc zarządzania treścią WordPress i szybkość Gatsby.
W tym artykule przyjrzymy się, czym jest Gatsby i dlaczego musisz go używać z oprogramowaniem CMS. Następnie szczegółowo omówimy, jak korzystać ze WordPress i Gatsby razem, aby zbudować niesamowitą stronę internetową. Zaczynajmy!
* [**Co to jest Gatsby**?][1]
* **[Plusy i wady korzystania z WordPress i Gatsby][2]**
* **[Jak używać gatsby z WordPress][3]**
* **[wniosek][4]**

## Co to jest Gatsby   {#gatsby}
Gatsby jest statycznym generatorem witryn. Oznacza to, że Gatsby generuje statyczne pliki HTML, które są przesyłane na serwer Twojej witryny. Gdy odwiedzający wyląduje na Twojej stronie, te pliki statyczne są podawane do przeglądarki, zamiast dynamicznej treści WordPress ogólnie służy. Jest to framework bezpłatny i open source oparty na React, który pomaga programistom budować płonące witryny i aplikacje.

## Plus i wady korzystania z WordPress i Gatsby   {#Proscons}
Zgodnie z oficjalnym [dokumentami][5] opracowali tabelę, dla której połączenie Gatsby WordPress jest świetne i dla których nie jest. Ze względu na łatwość wymieniam je tutaj.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress i Gatsby są świetne
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Zespoły treści, które czują się komfortowo z doświadczeniem edycji treści WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        Zespoły programistów, które cenią za pomocą popularnych technologii typu open source
{{_LINE_34_}}
{{_LINE_35_}}
        Przeprojektowania witryn z treścią już przechowywaną w WordPress
{{_LINE_37_}}
{{_LINE_38_}}
        Zespoły, które chcą posiadać swoje dane i stos techniczny
{{_LINE_40_}}
{{_LINE_41_}}
        Złożone przepływy pracy kontroli dostępu lub ograniczenia modelowania treści
{{_LINE_43_}}
{{_LINE_44_}}
        Projekty, w których bezpieczeństwo jest ważne
{{_LINE_46_}}
{{_LINE_47_}}
        Projekty o wysokim popycie, w których wydajność jest najważniejsza
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress i Gatsby nie są świetne
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Zespoły wymagające użycia motywów interfejsu WordPress
{{_LINE_59_}}
{{_LINE_60_}}
        Ci, którzy szukają w pełni zarządzanej Cmo
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Oprócz tych oficjalnych punktów chciałbym wymienić kilka zalet i wady korzystania z Gatsby WordPress
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Profesjonaliści
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Szybsze prędkości obciążenia - statyczne strony internetowe ładują się szybciej niż dynamiczne. W rezultacie wpływa to na ładowanie prędkości strony i ranking SEO.
{{_LINE_75_}}
{{_LINE_76_}}
        Mniejsze koszty serwera - ponieważ pliki statyczne nie wymagają specjalnych oprogramowania, dlatego statyczne strony HTML mogą być również obsługiwane z tańszych serwerów.
{{_LINE_78_}}
{{_LINE_79_}}
        Bardziej bezpieczne - dla witryn statycznych nie ma ruchomych elementów części, dlatego hakerzy nie ma szans na wykorzystanie oprogramowania.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Cons
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Krzywa uczenia się - wymaga dodatkowych umiejętności dla programistów. Jak nauka reactjs i grafql
{{_LINE_93_}}
{{_LINE_94_}}
        Tylko treść statyczna - jeśli chcesz obsługiwać dowolną dynamiczną zawartość. Wtedy Gatsby nie jest dla ciebie. Może serwować tylko pliki statyczne. Dlatego nie możesz mieć żadnego systemu komentowania, który pobiera dane z bazy danych.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## Jak używać Gatsby z WordPress   {#Howto}
Przed zainstalowaniem Gatsby musisz zainstalować [Nodejs][6] i [NPM][7] w środowisku witryny.

### Krok 1 - Zainstaluj Gatsby
```
npm install -g gatsby-cli
```
To polecenie uruchamia instalator automatycznie. Pobiera i instaluje wszystkie zależności przed zainstalowaniem Gatsby. Po zakończeniu możesz zacząć tworzyć swoją pierwszą stronę internetową Gatsby.
```
gatsby new gatsby-site
```
To pobranie szablonu startowego Gatsby i umieszcza go w katalogu/Gatsby-Wordpress. Po zakończeniu instalacji możesz otworzyć wersję programistyczną witryny
```
gatsby develop
```
Teraz, w przeglądarce internetowej, wprowadź _http: // localhost: 8000_ i domyślny szablon powinien otworzyć.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Szablon startera Gatsby">}}


### Krok 2 - Podłącz Gatsby do WordPress
W tej sekcji przewodnika Gatsby WordPress połączymy ten statyczny generator strony z WordPress. Masz podstawową statyczną stronę internetową, ale musisz zintegrować ją z WordPress. To wskazuje twoją stronę Gatsby na adres bloga WordPress, umożliwiając jej pobieranie najnowszych danych podczas uruchamiania serwera programistycznego. Po podłączeniu Gatsby zbuduje statyczną stronę internetową opartą na bieżącym szablonie.
Zainstaluj wtyczkę WordPress Gatsby Source z repozytorium NPM.
```
npm install gatsby-source-wordpress
```

### Krok 3 - Skonfiguruj Gatsby
Umieść następujący kod w swoim pliku _gatsby-config.js_
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
Zaktualizuj ten kod, aby wskazać swoją witrynę WordPress. Jeśli Twoja witryna jest hostowana lokalnie, po BaseUrl możesz użyć _localhost: 8888/WordPress_ zamiast adresu URL witryny. Po zapisaniu pliku musisz zbudować szablony stron.

### Krok 4 - Wykonaj szablony strony
Budowanie szablonów strony umożliwiają ten generator witryny generowanie postu dla każdej strony na Twojej stronie WordPress. Wtyczka źródłowa wyciągnie potrzebne dane z WordPress dla tych stron, ale musisz utworzyć szablon projektowy.
W pliku _gatsby-node.js_ dodaj następujący kod
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Po wywołaniu wszystkich danych Gatsby wygeneruje stronę dla każdego postu. Korzystając z polecenia programu, możesz przejść do każdej nowej strony za pomocą wygenerowanego adresu URL.

## Wniosek   {#Conclusion}
W tym samouczku Gatsby WordPress omówiliśmy, jak wygenerować stronę internetową Gatsby z WordPress. Dowiedzieliśmy się, jakie są zalety i wady tych dwóch oprogramowania typu open source. Omówiliśmy również sposób instalowania i rozpoczęcia od środowiska programistycznego Gatsby.
Wreszcie [Containerize.com][8] pisze artykuły na temat dalszych produktów typu open source. Dlatego prosimy o kontakt z kategorią platformy open source [blogowanie][9] w celu regularnych wiadomości i aktualizacji.

  
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
