---
title: "So konfigurieren Sie die Multi-Mieter-Anwendung in Phplisten" 
seoTitle: "So konfigurieren Sie die Multi-Mieter-Anwendung in Phplisten" 
description: "Phplist ist eine kostenlose und Open -Source -Newsletter -Software. Konfigurieren Sie die Anwendung mit mehreren Mietern und führen Sie mehrere Instanzen einer Anwendung in einer gemeinsam genutzten Umgebung aus." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Tutorial zur Entwicklung einer Multi-Mieter-Anwendung in Phplisten. Die Multi-Tenant-Funktion verwendet eine einzelne Installation für mehrere Hosts, um die Hostingkosten zu senken." 
url: /de/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## Tutorial zur Entwicklung einer Multi-Mieter-Anwendung in Phplisten. Die Multi-Tenant-Funktion verwendet eine einzelne Installation für mehrere Hosts, um die Hostingkosten zu senken.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Multi-Mieter-Anwendung Phplist">}}

In diesem Artikel werden wir **, was Multi-Menancy**ist und wie wir**Multi-Mieter-Anwendung** in Phplist konfigurieren können.

## Was ist Phplist?
Bei der Entscheidung der Marketingstrategie ist E -Mail -Marketing ein wesentlicher Bestandteil jedes Online -digitalen Unternehmens. Phplist ermöglicht es Unternehmen, ein großes Publikum zu erreichen. Phplist wird weit verbreitet **Open Source Newsletter -Software** zum Verwalten von Listen und zum Senden von Newslettern. Es hilft Unternehmen, Newsletter -Kampagnen zu erstellen, zu planen, zu senden und zu analysieren. Phplist unterstützt Funktionen wie Analytics, Segmentierung, Sprungverarbeitung, Plugins, APIs und vieles mehr.

## Was ist Multi-Messen?
Multi-Menancy ist eine Architektur, bei der viele Kunden/Websites durch eine einzelne Instanz einer Softwareanwendung dargestellt werden. In der Multi-Messen wird der Standort als Mieter angesehen. Jeder Mieter verfügt über bestimmte Funktionen wie Konfiguration, Themen, SMTP.
Ein Hauptaspekt des Cloud-Computing ist Multi-Messen. Die **Multi-Mieter-Architektur** hilft Unternehmen, einen besseren ROI zu erzielen, indem die Wartungskosten und schnelle Aktualisierungen des Mieters gesenkt werden. Außerdem können Anwendungen, die auf der Architektur von Multi-Mietern konzipiert sind, leicht skalierbar sein.
Wir können Multi-Messen implementieren, indem wir die folgenden Ansätze verwenden.
  * Shared Database für alle Mieter.
  * Separate Datenbank für jeden Mieter.
Wir werden eine separate Datenbank für jeden Mieteransatz verwenden, um Multi-Messen in Phplisten zu implementieren.
  * [Handlungsanforderungsfluss][1]
  * [Setup -Datenbank für Mieter][2]
  * [Konfigurieren Sie Nginx für Mieter][3]

## Anforderungsfluss verarbeiten {#request}

  * Nehmen Sie eine Sicherung Ihrer Datei config.php und Sie finden sie unter dem Konfigurationsverzeichnis.
  * Erstellen Sie eine neue Datei config.php und fügen Sie den folgenden Code hinzu, um Websites/Mieter zu behandeln.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Ersetzen Sie example.com durch Ihren Domainnamen. Sie müssen auch eine Konfigurationsdatei für jeden Mieter erstellen. Kopieren Sie die Sicherungsdatei von config.php und speichern Sie sie mit einem neuen Namen wie config.example.com.php.

## Setup -Datenbank für Mieter einrichten {#database}

  * Nehmen Sie eine Sicherung der vorhandenen Phplist -Datenbank. Verwenden Sie es, um eine Datenbank für den neuen Mieter zu erstellen.
  * Öffnen Sie die Datei config.example.com.php. Ändern Sie Datenbankanmeldeinformationen und andere Einstellungen in Ihrer Umgebung.

## Konfigurieren Sie Nginx für den Mieter {#Nginx}

* Gehen Sie zum Nginx-Verzeichnis **CD/etc/nginx/seiten-verfügbar** .
  * Kopieren Sie die Datei config.php und speichern Sie sie mit Ihrem Site -Namen wie Beispiel.com.
* Öffnen Sie die example.com -Konfiguration mit **sudo nano example.com** .
  * Ändern Sie den Stammpfad, Server_Name und alle anderen Einstellungen.
* Testen Sie Konfigurationen mit **sudo nginx -t** 
* Schließlich erstellen Sie Symlink, indem Sie **sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/seiten-enabled/** ausführen
* Starten Sie den Nginx -Webserver neu, indem Sie **sudo systemctl neu starten nginx** , damit die neu erstellte Konfigurationsdatei geladen werden kann.

## Abschluss
Multi-Tenancy-Software hat einige Vorteile im Vergleich zu einer Einzelmedanz-Anwendung wie die Reduzierung der Wartungskosten, der effektiven Ressourcennutzung und der einfach zu installierenden Aktualisierungen. Wenn Sie SaaS-Software (Software als Service) -Software erstellen möchten, können Sie der Multi-Mieter-Architektur folgen und ihre wahre Leistung genießen.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [Phplist - Open -Source -Newsletter und E -Mail -Marketing -Software][4]
  * [So erstellen und senden Sie den Newsletter mit Phplist][5]
  * [So richten und verarbeiten Sie in Phplisten][6]
  * [Anfängerleitfaden zur Entwicklung von Phplist -Plugin][7]
  * [Setup Advanced Bounce Management und Bounce -Regeln in Phplist][8]



[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
