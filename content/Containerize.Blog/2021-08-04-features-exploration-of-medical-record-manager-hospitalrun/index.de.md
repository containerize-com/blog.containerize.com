---
title: "Features Exploration des Krankenhausverwalters für Krankenakten für Krankenakten" 
seoTitle: "Features Exploration des Krankenhausverwalters für Krankenakten für Krankenakten" 
description: "Folgen Sie diesem Leitfaden zum Einstieg mit dem Krankenhausverwalter HospitalRun. Es ist Open Source, mehrsprachig und automatisiert viele wichtige Prozesse." 
date: Wed, 04 Aug 2021 18:37:19 +0000
author: muhammadmustafa
summary: "Das Krankenhausmanagementsystem ist ein wesentlicher Bestandteil der Gesundheitseinrichtungen. HospitalRun bietet Datenkontrolle, Zugangsrollen und Revenue Management." 
url: /de/features-exploration-of-medical-record-manager-hospitalrun/
categories: ['Healthcare Software']
---

## Krankenhausmanagementsystem ist ein wesentlicher Bestandteil der Gesundheitsbetriebe. HospitalRun bietet Datenkontrolle, Zugangsrollen und Revenue Management.

{{< figure align=center src="images/blog-banners-template-1.png" alt="Krankenaktenmanager">}}


## Überblick
Open Source [Healthcare Software][1] hat in der jüngeren Vergangenheit eine immense Popularität erlangt. Erstens liegt es auf den Fortschritt der Technologie. Zweitens beeinflusste Covid-19 die medizinische Industrie in jeder Hinsicht und brachte der Open-Source-Community eine neue Chance. Es ist von großer Bedeutung, den Patienten medizinische Gesundheitsdienste zu erbringen, wenn die ganze Welt eine entscheidende Zeit durchläuft. Glücklicherweise stehen mehrere Open -Source -Gesundheitsaktenmanagementlösungen zur Verfügung, die Datenzentralisierungen, Transparenz, Sicherheit, Integrationen und viele andere leistungsstarke Funktionen bereitstellen. Diese kostenlosen Gesundheitsdienste bieten ein reibungsloses Management von Arbeitsabläufen wie Ärzten, Patienten, Kliniken und anderen Mitarbeitern. Kürzlich hat [Containerize.com][2] einige Artikel zu Open -Source -Krankenhausinformationsmanagementsystemen veröffentlicht, die [Top 5 Open -Source -Patient -Gesundheitsdatensatzsoftware][3], [Feature Exploration of Medical Health Solution OpenEMR][4]. und [wie Online -Gesundheitssoftware die Gesundheitsbranche ermöglicht][5].
In der Vergangenheit haben wir einen Artikel geschrieben, der das Einrichtung von [Krankenhaus][6] über Localhost beschreibt. In diesem Blog -Beitrag werden wir [HospitalRun][6] weiter untersuchen, indem wir die folgenden Punkte abdecken.
*  **[Warum HospitalRun?][7]**  
*  **[Patienten und Planungsmodule][8]**  
*  **[Laborintegration und Medikamente][9]**  
*  **[Bildgebung und Vorfälle][10]**  
*  **[Schlussfolgerung][11]**  

## Warum HospitalRun? {#why}

Es gibt viele Gründe für die Popularität dieses Managers für Krankenakten. HospitalRun ist ein komplettes elektronisches Gesundheitsakten- und Krankenhausinformationssystem. Es unterstützt sowohl Offline- als auch Online -Versionen. Sie können Kliniken integrieren und Datensynchronisierung bereitstellen. Darüber hinaus ist es mehrsprachig, plattformübergreifend und bietet Selbsthostfunktionen. Dieses Patient -Record -System bietet Patient -Rekordmanagement, Terminplanung, Medikamente und verschreibungspflichtiges Management. Es gibt auch eine Bestimmung, um benutzerdefinierte Berichte zu generieren, die vollständige diagnostische Details enthalten. Darüber hinaus können medizinische Mitarbeiter das Patientenentladungsmodul unterstützen. Vor allem dieses Krankenhausmanagementsystem bietet das Management von versehentlichen und Notfällen. Es ist sicher, zuverlässig und benutzerfreundlich. Dieses System für medizinische Aufzeichnungen ist jedoch vollständig in JavaScript geschrieben und der gesamte Quellcode ist in [Github][12] mit Dokumentation zu Entwicklung und Bereitstellung verfügbar.

## Patienten und Planungsmodule {#modules}

In diesem Abschnitt werden wir das Dashboard dieses Krankenhausinformationsmanagementsystems durchlaufen. Sobald Sie sich angemeldet haben, landen Sie auf dem Armaturenbrett von HospitalRun, wie im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.40.46-1024x502.png" alt="Krankenaktenmanager">}}

Auf der oberen rechten Seite gibt es zwei Optionen. Erstens Einstellungen, in denen Benutzer eine Sprache wie Englisch, Italienisch, Türkisch und mehr auswählen können. Zweitens gibt es eine Option, um einen neuen Patientenakten, einen neuen Termin, eine Anforderung von Medikamenten, ein Anfrage -Labor, eine neue Bildgebungsanfrage und einen Vorfall zu melden.

{{< figure align=center src="images/Screenshot-2021-08-02-at-17.45.03-1024x576.png" alt="Krankenhausmanagementsystem">}}

Es gibt mehrere Optionen wie Patienten, Planung, Medikamente, Labors, Bildungen und Vorfälle auf der linken Seite. Im Patientenmodul können Sie neue Patientenakten hinzufügen und die Liste der bereits zusätzlichen Patienten sehen. Mit diesem kostenlosen Manager für medizinische Datensätze können Benutzer vollständige Patientenakten wie Name, Adresse, Kontakt, Patiententyp und andere grundlegende Details aufzeichnen. In der Patientenliste gibt es auch eine Suchleiste, in der Benutzer die Patienten in der Liste durchsuchen können. Darüber hinaus können medizinische Mitarbeiter im Planungsmodul einen Termin vereinbaren. Die Schnittstelle dieses Moduls ist im Bild unten gezeigt.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.23.42-1024x576.png" alt="Krankenhausinformationsmanagementsystem">}}

Die Schnittstelle zeigt die geplanten Termine. Darüber hinaus können Benutzer Filter anwenden, um die Anzahl der Termine pro Tag, pro Woche und pro Monat anzuzeigen. In der oberen rechten Ecke gibt es eine Option, in der Gesundheitsbeamte einen neuen Termin buchen können. Medizinische Beamte können Termindetails wie Startdatum, Enddatum, Grund und mehr einfügen.

## Laborintegration und Medikamente {#lab}

In diesem Abschnitt werden die Funktionen zweier herausragender Module dieser freien Gesundheitssoftware beschrieben. Mit dem Medikationsmodul können Benutzer Daten gegen Medikamente hinzufügen, in denen sie die Medikamentenpriorität wie Routine, dringend oder so schnell wie möglich festlegen können. In ähnlicher Weise gibt es eine Liste mit Medikamentenanfragen, in der Beamte nach Filtern suchen können.

{{< figure align=center src="images/Screenshot-2021-08-02-at-18.54.03-1024x576.png" alt="Krankenaktenmanagementsystem">}}

Im Labormodul können Gesundheitsbeamte Labor anfordern, indem sie Patienteninformationen, Besuch und Typ einfügen. Dabei können Mitarbeiter im Gesundheitswesen eine zusätzliche Notiz hinzufügen. In ähnlicher Weise gibt es Filter in der Option Laboranfragen, bei denen Benutzer Suchfunktionen ausführen können.

## Bildgebung und Vorfälle {#imaging}

Bei der Bildgebung geht es darum, eine visuelle Darstellung von etwas durch Scannen mit einem elektromagnetischen Feld zu erstellen. HospitalRun bietet Management von Bildgebungsunterlagen. Darüber hinaus können Benutzer neue Bildgebungsanforderungen erstellen, und dieses Modul ist mit dem Modul des Patienten verknüpft, da andere Module miteinander verbunden sind. In ähnlicher Weise können Benutzer die Liste der Bildgebungsanforderungen sehen. Als nächstes können Beamte im Vorfälle einen Vorfall melden, indem sie die Details einfügen. Daher können Benutzer die Liste der bereits gemeldeten Vorfälle sehen. Es gibt eine grafische Darstellung von Vorfällen, die auch im letzten im Bild unten gezeigt sind.

{{< figure align=center src="images/Screenshot-2021-08-02-at-19.59.11-1024x577.png" alt="Gesundheitsaktenmanagement">}}


## Abschluss {#Abschluss}

Dies ist das Ende dieses Blog -Beitrags. Tatsächlich sind die meisten Gesundheitsinstitutionen von manuellen Vorgängen abhängig. Dies könnte in Bezug auf Datensicherheit und Integrität anfällig sein. Automatische Systeme stellen jedoch sicher, dass die grundlegenden und kritischsten Aspekte des routinemäßigen Gesundheitsbetriebs. Daher schützt die Installation eines guten Open-Source-Managers für Krankenakten Ihr Vermögen vor nicht autorisierten Quellen und hilft Ihnen, routinemäßige Aufgaben mit Leichtigkeit und Selbstvertrauen auszuführen. Diese Open -Source -Software synchronisieren mehrere Unternehmen wie Ärzte, Patienten, Kliniken und Labors und erleichtern den Workflow. Das Fazit ist, dass es höchste Zeit ist, eine Open -Source -Software für Ihr Krankenhaus oder Ihre Klinik mit den neuesten Herausforderungen zu erhalten. Sie können Ihre Zeit und Bemühungen sparen und sich auf wichtige, kritische Aufgaben konzentrieren.
Schließlich schreibt [containerize.com][2] Artikel über weitere Open -Source -Produkte. Bitte bleiben Sie mit der Kategorie [Gesundheitstechnologien][1] in Kontakt, um regelmäßig Nachrichten und Updates zu erhalten.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [OpenEMR][13]
  * [OpenMRS][14]
  * [HospitalRun][15]
  * [Offenes Krankenhaus][16]
  * [Solismed][17]
  * [Top 5 Open -Source -Patient -Gesundheitsdatensatzsoftware][3]
  * [Features Exploration of Medical Health Solution OpenEMR][4]
  * [So richten Sie EHEACE SYSTEMS HospitalRun auf Localhost][18]
  * [Wie Online -Gesundheitssoftware die Gesundheitsbranche ermöglicht][5]



[1]: https://products.containerize.com/healthcare-technologies/
[2]: https://www.containerize.com/
[3]: https://blog.containerize.com/2021/03/05/top-5-open-source-patient-record-management-software/
[4]: https://blog.containerize.com/healthcare-software/open-source-medical-software-openemr-features/
[5]: https://blog.containerize.com/2021/02/12/how-online-healthcare-software-empowers-healthcare-industry/
[6]: https://products.containerize.com/healthcare-technologies/hospitalrun/
[7]: #why
[8]: #modules
[9]: #lab
[10]: #imaging
[11]: #Conclusion
[12]: https://github.com/HospitalRun/hospitalrun
[13]: https://products.containerize.com/health-care-technologies/openemr
[14]: https://products.containerize.com/health-care-technologies/openmrs
[15]: https://products.containerize.com/healthcare-technologies/hospitalrun
[16]: https://products.containerize.com/healthcare-technologies/open-hospital
[17]: https://products.containerize.com/healthcare-technologies/solismed
[18]: https://blog.containerize.com/healthcare-software/how-to-install-hospitalrun-hospital-management-system/
