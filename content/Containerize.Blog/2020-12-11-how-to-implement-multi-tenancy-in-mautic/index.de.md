---
title: "So implementieren Sie Multi-Messen in Mautic" 
seoTitle: "So implementieren Sie Multi-Messen in Mautic" 
description: "Mautic ist eine Open -Source -Marketing -Automatisierungslösung. Durch die Implementierung von Multi-Mieter in Mautic wird die Kosten gesenkt und die Effizienz und Sicherheit verbessert." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Sparen Sie Kosten und maximieren Sie die Ressourcenverbrauch, indem Sie Multi-Messen in Mautic implementieren. Multi-Menancy hilft bei Codeanpassungen, App-Updates, verbesserter Produktivität und einfacher Wartung." 
url: /de/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Sparen Sie die Kosten und maximieren Sie die Ressourcennutzung durch die Implementierung von Multi-Tenancy in Mautic. Multi-Menancy hilft bei Codeanpassungen, App-Updates, verbesserter Produktivität und einfacher Wartung.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="So implementieren Sie Multi-Messen in Mautic">}}

MAUTIC ist eine kostenlose und Open -Source -Marketing -Automatisierungslösung, mit der Sie Ihre Marketing -E -Mails, Zielseiten, Workflows und die Maßnahmen für Ihre Marketingaktivitäten vollständig kontrollieren können. Wir werden die folgenden Abschnitte in diesem Tutorial behandeln:
  * [Was ist Multi-Messen][1]
  * [Was ist mautisch][2]
  * [Implementieren Sie Multi-Messen in Mautic][3]
  * [Schlussfolgerung][4]

## Was ist Multi-Tenancy   {#Multi-Tenancy}
In einer Softwarearchitektur mit mehreren Mietern dient einer einzigen Instanz einer Softwareanwendung mehrere Mieter. Jede Mieterdaten werden von anderen Mieter isoliert, die dieselbe Anwendungsinstanz teilen. Diese Mieter sind logisch isoliert, aber physisch integriert. Dies gewährleistet die Datensicherheit und Privatsphäre für alle Mieter. Das Erstellen mehrerer Mieter aus einer einzelnen Anwendungsinstanz erfordert viel weniger Speicher. Die Mieter teilen Ressourcen und senken die Kosten für Software -Wartung, Infrastruktur und Rechenzentrumsvorgänge. Die Kosten sind tendenziell niedriger als die einer Einzelvermietungsinfrastruktur.

## Was ist mauic   {#meus}
[MAUTIC][5] ist eine kostenlose und Open -Source -Marketing -Software. Automatisieren Sie sich wiederholende Marketingaufgaben wie Marketingkampagnen, Lead -Generierung, Kontaktsegmentierung usw. unter Verwendung von MAUTIC. Es verfügt über überraschende Funktionen, darunter Lead -Generierung, Kampagnenaufbau, Kontaktsegmentierung, E -Mail -Builder, A/B -Tests, Page Builder, Lead Nurturing und mehr. Mautic unterstützt auch die Integration mit allen beliebten sozialen Plattformen, z. Facebook, Twitter, LinkedIn. All diese unglaublichen Funktionen helfen Ihnen, das allgemeine Kundenerlebnis zu verbessern und die Marketingautomatisierung für Ihr Unternehmen zu verbessern.

## Implementieren Sie Multi-Menancy in Mautic   {#Implement}
  * Erstellen Sie eine neue leere Datenbank mit dem Namen "main_db".
  * Erstellen Sie dann Tabelle mit dem Namen "Mieter", die Details zu allen Mietern enthält.
  * Es werden 3 Felder enthalten, einschließlich Site \ _name, URL und DB \ _name, wie in Abbildung gezeigt

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="So implementieren Sie Multi-Messen in Mautic">}}

  * Danach öffnen Sie die Datei Mautic/App/Paths.php und fügen Sie diesen Code hinzu:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Dies wählt die entsprechende Konfigurationsdatei auf der Grundlage des URL -Pfades aus.
  * Kopieren Sie dann die Datenbank der aktuellen mauischen Installation und verwenden Sie sie für einen neuen Mieter.
  * Erstellen Sie anschließend Kopie von Mautic/App/config/local.php und benennen Sie sie in [Site_Name] .Php um.
  * Aktualisieren Sie den Datenbanknamen, den Host, das Kennwort und den Benutzer endlich gemäß der neuen Datenbank.

## Schlussfolgerung   {#Conclusion}
Mautic ist eine kostenlose, reichhaltige und qualitativ hochwertige Marketing-Automatisierungslösung. Sie können Marketingkampagnen, Segmente, Formulare, Berichte und vieles mehr erstellen. Durch die Implementierung von Multi-Mieter in Mautic wird die Kosten gesenkt und die Effizienz, Skalierbarkeit und Sicherheit verbessert. Erstellen Sie einfach Hunderte von Mietern aus nur einer Installation.

## Erkunden
Um mehr über Mautic und Facebook zu erfahren, besuchen Sie bitte:
  * [Mautic | Open -Source -Content -Marketing -Technologieplattform][5]
  * [So richten Sie Mauterkampagnen mit einem Kampagnenbauer ein][6]
  * [Drupal Mautic Integration zur Automatisierung der Lead -Pflege][7]
  * [Marketing -Automatisierung mit Mautic und WooCommerce Integration][8]
  * [Mautic & Joomla für digitale Marketingautomatisierung][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
