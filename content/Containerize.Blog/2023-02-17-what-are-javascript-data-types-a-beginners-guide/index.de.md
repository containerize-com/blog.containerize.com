---
title: "Was sind JavaScript -Datentypen? | Ein Anfängerführer" 
seoTitle: "Was sind JavaScript -Datentypen? | Ein Anfängerführer" 
description: "Was sind JavaScript -Datentypen? Befolgen Sie diese Anfängerhandbuch, um 7 Datentypen zu lernen, die in JavaScript -Nummer, String, Boolean, Null, undefiniert und vielem mehr verwendet werden." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "Die Popularität von JavaScript ist aufgrund seiner Anpassungsfähigkeit nicht aufzuhalten. Befolgen Sie diesen Leitfaden für JavaScript -Anfänger und fördern Sie Ihr Fachwissen in JS Stack." 
url: /de/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## Die Popularität von JavaScript ist aufgrund ihrer Anpassungsfähigkeit nicht aufzuhalten. Befolgen Sie diesen Leitfaden für JavaScript -Anfänger und fördern Sie Ihr Fachwissen in JS Stack.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |Was sind JavaScript -Datentypen? | Ein Anfängerführer">}}


## Überblick
Unabhängig davon, ob Sie ein mittelmäßiger oder erfahrener Entwickler sind, erhalten Sie die Lösungen für Ihre Probleme, die während der Entwicklungsjobs kommen. [Containerize.com] [1] hat begonnen, Tutorial -Blog -Beiträge in der Programmierkategorie zu schreiben, und wir beginnen mit einem**JavaScript -Anfänger -Leitfaden**. Da wir anfangen, geht es in diesem Artikel um JavaScript -Datentypen. Erforschen wir**Was sind JavaScript -Datentypen**und sehen Sie Beispiele dafür, wie Sie sie im Quellcode effizient verwenden können. Gehen Sie daher diese Anfängerleitfaden gründlich durch, damit Sie ein gutes Verständnis für**JavaScript -Datentypen**haben können.
Wir decken den folgenden Punkt ab:
  * [Was ist ein Datentyp?] [2]
  * [Was sind JavaScript -Datentypen?] [3]

## Datentypen erklärt | Was ist ein Datentyp? {#What-is-a-data-Typ}
Bei einem Datentyp geht es darum, dem Compiler mitzuteilen, wie die Daten interpretiert oder kompiliert werden sollen. Die Verwendung von Datentypen ist kritisch und muss mit Bedacht verwendet werden. In einfachen Worten geht es um das Format der Daten wie Anzahl, String, Boolescher und mehr. Es gibt jedoch zwei Kategorien von Datentypen primitive Datentypen und nichtprimitive Datentypen. Es gibt acht primitive Datentypen, die wir im nächsten Abschnitt durchlaufen werden.

## Was sind JavaScript -Datentypen? {#What-Are-JavaScript-Data-Type}}
Tatsächlich ist JavaScript eine locker getippte Sprache, was bedeutet, dass Sie den variablen Typ nicht explizit definieren müssen. Sie können einer Variablen einen beliebigen Wert zuweisen, und diese Variable speichert diesen Wert wie String, Bigint, Boolean oder mehr.

{{< figure align=center src="images/web-development.png" alt="JavaScript Anfängerhandbuch">}}


#### Primitive Datentypen
Primitive Datentypen sind solche, die nach der Erstellung und Initialisierung nicht verändert werden können. Sie können jedoch einen neuen Wert neu zuordnen, können jedoch den bestehenden Wert nicht mutieren.
Zum Beispiel:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
Im obigen Beispiel ist String ein primitiver Datentyp und der alte Wert wird durch den neuen Wert ersetzt, aber die Änderung des vorhandenen Werts wird nicht reflektiert. Wir können also sehen, dass es immer noch "Mein Name wird geändert" ist, nicht "Mein Name wird geändert";

#### Nicht primitive Datentypen
Nicht primitive Datentypen sind veränderlich, in einfachen Wörtern, die von primitiven Datentypen entgegengesetzt sind.
Zum Beispiel:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Darüber hinaus werden primitive Datentypen nach Wert verglichen, und nicht primitive Datentypen werden immer durch Referenz verglichen.
Zum Beispiel:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
Gehen wir nun die Datentypen einzeln durch. Es gibt 6 primitive Datentypen und 1 unprimitiver Datentyp.
* * Zu den primitiven Datentypen gehören:**
***String**: Dieser Datentyp repräsentiert Textdaten, die aus einer Abfolge von Zeichen bestehen, die von Zitaten umgeben sind.
***Nummer**: Es repräsentiert Dezimal-/Nicht-Dezimaldaten, insbesondere Ganzzahl oder Float.
***boolean**: Darstellung der logischen Werte wahr oder falsch.
***Symbol**: Symbol wird verwendet, um eindeutige Werte zu halten.
***undefiniert**: Eine Variable ohne Wert oder eine nicht initialisierte Variable.
***null**: Das Fehlen eines Werts wird als null betrachtet.
* * Nicht primitiver Datentyp enthält:**
* * Objekt**: Es wird verwendet, um die Sammlung von Daten zu speichern, die aus Schlüsselwertpaaren bestehen.

## Abschluss
Dies ist das Ende dieses JavaScript -Anfängerhandbuchs**. Wir haben**Was sind JavaScript -Datentypen**? Darüber hinaus haben wir untersucht, was ein Datentyp auf den Punkt gebracht hat. Sie sollten ein besseres Verständnis für nicht primitive und**primitive Datentypen**in JavaScript haben. Dieser Blog -Beitrag hilft Ihnen wirklich, wenn Sie sich auf ein Vorstellungsgespräch vorbereiten möchten.
Schließlich schreibt [Containerize.com] [1] kontinuierlich Blog-Beiträge zu weiteren Open-Source-Produkten und -Themen. Darüber hinaus können Sie uns in unseren Social -Media -Konten [Facebook] [4], [LinkedIn] [5] und [Twitter] [6] folgen.

## Stelle eine Frage
Sie können uns über Ihre Fragen oder Abfragen in unserem [Forum] [7] informieren.

## FAQs
* * Was sind die 8 JavaScript -Datentypen?**
Bitte besuchen Sie diesen [Link] [3], um die 8 JavaScript -Datentypen zu kennen.

## Siehe auch
  * [Kostenlose und Open Source Populär JavaScript -Frameworks] [8]
  * [Automatisieren Sie den Geschäftsbetrieb mit kostenloser und Open -Source -Software] [9]
  * [Top 10 Open Source -Technologien, die im Jahr 2022 lernen können] [10]
[1]: https://www.containerize.com/
[2]: #What-is-a-data-type
[3]: #What-are-JavaScript-Data-Types
[4]: https://web.facebook.com/containerize
[5]: https://www.linkedin.com/company/containerize/
[6]: https://twitter.com/containerize_co
[7]: https://forum.containerize.com/
[8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
[9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
