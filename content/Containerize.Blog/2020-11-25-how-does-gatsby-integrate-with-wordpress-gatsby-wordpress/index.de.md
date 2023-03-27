---
title: "Wie integriert sich Gatsby in WordPress? | Gatsby WordPress" 
seoTitle: "Wie integriert sich Gatsby in WordPress? | Gatsby WordPress" 
description: "Verwenden Sie Gatsby WordPress zusammen, um die Geschwindigkeit, Skalierbarkeit und Sicherheit Ihrer Website zu verbessern. In diesem Tutorial lernen Sie, wie Sie diese Open-Source-Software verwenden." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Konfigurieren Sie Open Source Gatsby mit Ihrem WordPress, um eine größere Benutzererfahrung und die Gesamtleistung zu erzielen. Lassen Sie uns lernen, wie Sie diesen statischen Site -Generator verwenden." 
url: /de/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Konfigurieren Sie Open Source Gatsby mit Ihrem WordPress, um eine größere Benutzererfahrung und die Gesamtleistung zu erzielen. Lassen Sie uns lernen, wie Sie diesen statischen Site -Generator verwenden.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


## Überblick
Gatsbyjs ist ein kostenloser und open-Source-React-basiertes, von GraphQL betriebener statischer Site-Generator. Es verwendet leistungsstarke Vorkonfiguration, um eine Website zu erstellen, auf der nur statische Dateien für unglaublich schnelle Seite geladen werden. WordPress ist eine großartige Open -Source -Blogging -Plattform. Infolgedessen gibt es viele Leute, die wissen, wie sie herausfinden können, ob eine Website eine WordPress -Site ist, damit sie sie hacken und Informationen stehlen können. Wenn Sie Gatsby WordPress zusammen verwenden, erhalten Sie die gleiche Leistung des WordPress -Inhaltsmanagements und der Geschwindigkeit des Gatsby.
In diesem Artikel werden wir uns ansehen, was Gatsby ist und warum Sie es mit CMS -Software verwenden müssen. Anschließend werden wir uns mit WordPress und Gatsby zusammen um ein erstaunliches Website -Erlebnis handeln. Lasst uns beginnen!
* [ **Was ist Gatsby** ?][1]
* **[Vor- und Nachteile der Verwendung von WordPress und Gatsby][2]** 
* **[So verwenden Sie Gatsby mit WordPress][3]** 
* **[Schlussfolgerung][4]** 

## Was ist Gatsby {#gatsby}

Gatsby ist ein statischer Site -Generator. Dies bedeutet, dass Gatsby die statischen HTML -Dateien generiert, die auf den Server Ihrer Website hochgeladen werden. Wenn ein Besucher auf Ihrer Website landet, werden diese statischen Dateien seinem Browser zugestellt, anstatt dass der dynamische Inhalt WordPress im Allgemeinen dient. Es handelt sich um ein kostenloses und Open-Source-Framework, das auf React basiert und Entwicklern hilft, wahlförmige Websites und Apps zu erstellen.

## Vor- und Nachteile der Verwendung von WordPress und Gatsby {#proscons}

Laut Gatsbys offiziellem [Dokumenten][5] haben sie einen Tisch zusammengestellt, für den die Kombination von Gatsby WordPress großartig ist und für die es nicht ist. Um die Leichtigkeit zu erleichtern, liste ich diese hier auf.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress und Gatsby sind großartig für
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        Inhaltsteams, die sich mit der WordPress -Inhaltsbearbeitung wohl fühlen
{{_LINE_31_}}
{{_LINE_32_}}
        Entwicklungsteams, die mit beliebten Open-Source-Technologien schätzen,
{{_LINE_34_}}
{{_LINE_35_}}
        Redesigns von Websites mit bereits in WordPress gespeicherten Inhalten
{{_LINE_37_}}
{{_LINE_38_}}
        Teams, die ihre Daten und ihren Tech -Stack besitzen möchten
{{_LINE_40_}}
{{_LINE_41_}}
        Komplexe Zugriffskontroll -Workflows oder Inhaltsmodellierungsbeschränkungen
{{_LINE_43_}}
{{_LINE_44_}}
        Projekte, bei denen Sicherheit wichtig ist
{{_LINE_46_}}
{{_LINE_47_}}
        Hohe Nachfrageprojekte, bei denen die Leistung von größter Bedeutung ist
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress und Gatsby sind nicht großartig für
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        Teams, die die Verwendung von WordPress -UI -Themen benötigen
{{_LINE_59_}}
{{_LINE_60_}}
        Diejenigen, die nach einem vollständig verwalteten Cloud -CMS suchen
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Neben diesen offiziellen Punkten möchte ich einige Vor- und Nachteile der gemeinsamen Verwendung von Gatsby WordPress auflisten
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Profis
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Schnellere Lastgeschwindigkeiten - Statische Websites laden schneller als dynamisch. Infolgedessen wirkt es sich auf Ihre Seite aus, die Geschwindigkeiten und das SEO -Ranking lädt.
{{_LINE_75_}}
{{_LINE_76_}}
        Weniger Serverkosten - da statische Dateien keine speziellen Software benötigen, können statische HTML -Seiten auch von billigeren Servern serviert werden.
{{_LINE_78_}}
{{_LINE_79_}}
        Sicherer - Für statische Websites gibt es keine beweglichen Komponenten von Teilen, daher keine Chance für Hacker, Ihre Software auszunutzen.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Nachteile
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Lernkurve - Es erfordert zusätzliche Fähigkeiten für die Entwickler. Wie Lernen Reactjs und GraphQL
{{_LINE_93_}}
{{_LINE_94_}}
        Nur statischer Inhalte - wenn Sie einen dynamischen Inhalt bedienen müssen. Dann ist Gatsby nichts für Sie. Es können nur statische Dateien server. Daher können Sie kein Kommentarsystem haben, das die Daten aus der Datenbank abruft.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## So verwenden Sie Gatsby mit WordPress {#howto}

Bevor Sie Gatsby installieren können, müssen Sie [NodeJS][6] und [NPM][7] in Ihrer Website -Umgebung installieren.

### Schritt 1 - Installieren Sie Gatsby
```
npm install -g gatsby-cli
```
In diesem Befehl wird das Installationsprogramm automatisch ausgeführt. Es wird alle Abhängigkeiten heruntergeladen und installiert, bevor Gatsby installiert wird. Sobald dies abgeschlossen ist, können Sie Ihre erste Gatsby -Website erstellen.
```
gatsby new gatsby-site
```
Dadurch wird die Starter-Vorlage von Gatsby heruntergeladen und in das Verzeichnis/Gatsby-Wortpress eingelegt. Sobald die Installation abgeschlossen ist, können Sie die Entwicklungsversion der Website öffnen
```
gatsby develop
```
Geben Sie nun in Ihrem Webbrowser _http: // localhost: 8000_ ein und Ihre Standardvorlage sollte geöffnet werden.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Gatsby Starter -Vorlage">}}


### Schritt 2 - Schließen Sie Gatsby mit WordPress an
In diesem Abschnitt des Gatsby WordPress -Handbuchs verbinden wir diesen statischen Site -Generator mit WordPress. Sie haben eine grundlegende statische Website, müssen sie jedoch in WordPress integrieren. Dadurch zeigt Ihre Gatsby -Website auf die Adresse Ihres WordPress -Blogs, sodass sie die neuesten Daten beim Ausführen des Entwicklungsservers abrufen können. Sobald Gatsby angeschlossen ist, erstellt er eine statische Website basierend auf Ihrer aktuellen Vorlage.
Installieren Sie das Gatsby Source WordPress -Plugin im NPM -Repository.
```
npm install gatsby-source-wordpress
```

### Schritt 3 - Gatsby konfigurieren
Geben Sie den folgenden Code in Ihre _gatsby-config.js_-Datei ein
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
Aktualisieren Sie diesen Code, um auf Ihre WordPress -Website zu verweisen. Wenn Ihre Website lokal gehostet wird, können Sie nach BaseUrl _localHost: 8888/Wordpress_ anstelle der URL Ihrer Website verwenden. Nach dem Speichern der Datei müssen Sie Ihre Seitenvorlagen erstellen.

### Schritt 4 - Seitenvorlagen erstellen
Erstellen Sie Seitenvorlagen mit diesem Site -Generator, einen Beitrag für jede Seite auf Ihrer WordPress -Website zu generieren. Das Quell -Plugin zieht die Daten aus, die Sie für diese Seiten von WordPress benötigen. Sie müssen jedoch die Entwurfsvorlage erstellen.
Fügen Sie in Ihrer Datei _gatsby-node.js_ den folgenden Code hinzu
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
Nach dem Aufrufen aller Daten generiert Gatsby für jeden Beitrag eine Seite. Mit dem Befehl entwickeln können Sie mit der generierten URL zu jeder neuen Seite navigieren.

## Abschluss {#conclusion}

In diesem Gatsby WordPress -Tutorial haben wir von WordPress eine Gatsby -Website generiert. Wir haben gelernt, was die Vor- und Nachteile dieser beiden Open -Source -Software sind. Wir haben auch die Installation und Start mit der Gatsby -Entwicklungsumgebung behandelt.
Schließlich schreibt [Containerize.com][8] Artikel über weitere Open -Source -Produkte. Bitte bleiben Sie mit der Kategorie "Open Source][9] Plattform für regelmäßige Nachrichten und Updates in Kontakt.



[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
