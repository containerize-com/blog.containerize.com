---
title: "So installieren Sie Webmin mit SSL auf Ubuntu 20.04" 
seoTitle: "So installieren Sie Webmin mit SSL auf Ubuntu 20.04" 
description: "Webmin ist ein webbasiertes Systemverwaltungs-Tool für Unix-ähnliche Systeme. In diesem Artikel lernen wir, wie Sie Webmin mit SSL auf Ubuntu 20.04 installieren." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "WebMin ist ein webbasiertes Systemverwaltungs-Tool, das eine einfache Alternative zur Systemverwaltung der Befehlszeile ist. Dieser Artikel leitet, wie Sie Webmin installieren" 
url: /de/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="So installieren Sie Webmin">}}


## Webmin ist ein webbasiertes Systemadministrations-Tool, das eine einfache Alternative zur Systemverwaltung der Befehlszeilen darstellt. Dieser Artikel leitet, wie Sie Webmin installieren
Mit diesem Artikel „So installieren Sie Webmin mit SSL auf Ubuntu 20.04“ starten wir unsere neue Reihe von Tutorials in Webhosting -Software und -tools. Mit Webmin können Sie Benutzerkonten einrichten, die Dateifreigabe aktivieren, Apache und DNS -Einstellungen konfigurieren und viele weitere Aufgaben im Zusammenhang mit Webhosting ausführen. Sie können den gesamten Webhosting -Server verwalten. Es beseitigt die Mühe, Linux -Konfigurationsdateien manuell zu bearbeiten. Lernen wir also, wie Sie Webmin mit SSL installieren.
  *** [Einführung in Webmin] [1] **
  *[** hervorgehobene Merkmale **] [2]
  *[** unterstützte Betriebssysteme **] [3]
  *[** Webmin auf Ubuntu **] [4]
  *[** Apache mit webmin **] [5] installieren
  *[** Schlussfolgerung **] [6]

## Einführung in Webmin {#Intro}
Webmin ist eine webbasierte Schnittstelle für die Systemverwaltung für Linux. Es hilft Ihnen, Ihren eigenen Hosting -Server aus einem modernen Webbrowser aus der Ferne zu verwalten. Mit Webmin können Sie Betriebssysteminteralen wie Benutzerkonten, Apache, DNS, Dateifreigabe und vieles mehr konfigurieren. WebMin ermöglicht auch die Steuerung vieler Maschinen über eine einzelne Schnittstelle oder nahtlose Anmeldung auf anderen Webmin -Hosts auf demselben Subnetz oder LAN. Webmin, basierend auf Perl, wird als eigener Prozess und der Webserver ausgeführt. Und das Beste an Webmin ist seine 100% freie und offene Source und hat eine sehr florierende Entwicklergemeinschaft.

## Herstellte Funktionen {#Features}
  * Ermöglicht Sie, Domänen, DNS -Datensätze, Optionen und Ansichten zu binden und zu bearbeiten.
  * Hilft bei der Konfiguration einer Firewall durch Erstellen und Bearbeiten von Regeln mit IPFW.
  * Lassen Sie Sie Skripte einrichten, die zur Startzeit von /etc/init.d oder /etc/rc.local ausgeführt werden sollen
  * Sie können die Dateiübertragung vom Server auf mehrere Server planen
  * Ermöglicht Ihnen, RPMs, Debian und Solaris -Pakete über mehrere Server aus einer Quelle hinweg zu installieren
  * Es bietet Zugriff auf Berichte wie Bandbreitennutzung, Uploads, Downloads, Besucher usw.
  * Sie können geplante Cron -Jobs erstellen, die gleichzeitig auf mehreren Servern ausgeführt werden
  * Sie können Befehle auf mehreren Servern gleichzeitig ausführen
  * Ermöglicht Ihnen, Benutzer- oder Gruppendiskotas für lokale Dateisysteme einzurichten und zu bearbeiten.
  * Beinhaltet Sicherungs- und Wiederherstellung von Dateisystemen mithilfe der Müllkippe und Wiederherstellung der Befehlsfamilie
  * Mit einem ähnlichen Dateimanager wie Windows können Sie Berechtigungen auf Dateien und Verzeichnissen auf Ihrem Server anzeigen, bearbeiten und ändern
  * Sie können den Service -Standortprotokollserver konfigurieren
  * Berechtigungen in Dateien und Verzeichnissen in Ihrem System mit einem Windows-ähnlichen Dateimanager anzeigen, bearbeiten und ändern und ändern
  * Es hilft bei der Einrichtung von SSL -Tunneln zum Verschlüsselungsdiensten wie POP3 und IMAP mithilfe von Stunnel, die von INETD läuft.

## unterstützte Betriebssysteme {#Support}
Da verschiedene UNIX-ähnliche Betriebssysteme und Linux-Verteilungen für ihre verschiedenen Konfigurationsdateien verschiedene Stellen verwenden, kann Webmin nur Systeme unterstützen, für die sie konfiguriert wurden. Die folgenden Betriebssysteme werden von Version 1.979 von Webmin unterstützt:
  * Almalinux Linux
  * Alphacore Linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * Asianux Server
  * Bigblock
  * BSDI
  * Caixa Magica
  * Caldera OpenLinux
  * Caldera OpenLinux Esserver
  * Caos Linux
  * Cendio lbs Linux
  * CentOS Linux
  * Citrix Hypervisor
  * CloudLinux
  * Cloudrouter Linux
  * Kobalt Linux
  * Kohärente Technologie Linux
  * Conectiva Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * DEC/COMPAQ OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Endian Firewall Linux
  * Fedora Linux
  * FreeBSD
  * Generisches Linux
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM AIX
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Lycoris Desktop/LX
  * Mac OS X
  * MacOS Catalina
  * MacOS High Sierra
  * Macos Mojave
  * macos sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * MeistLinux
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * OpenSuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * Os x
  * PARDUS Linux
  * Pclinuxos Linux
  * PlayStation Linux
  * Raspbian Linux
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * Sci Linux
  * Wissenschaftliche Linux
  * SCO OpenServer
  * SCO Unixware
  * Sicheres Linux
  * SGI Irrix
  * Slackware Linux
  * Slamd64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Startcom Linux
  * Sun Java -Desktop -System
  * Sun Solaris
  * SUSE Linux
  * Suse OpenExchange Linux
  * SUSE SLES LINUXS
  * Synologie DSM
  * Tao Linux
  * Tawie Server Linux
  * Thizlinux Desktop
  * Thizserver
  * Tinysofa Linux
  * Treuez
  * Treuez SE
  * Turbrolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * Weißer Zwerg Linux
  * WhiteBox Linux
  * Wind River Linux
  * Fenster
  * X/OS Linux
  * Xandros Linux
  * XCP-ng Linux
  * XenServer Linux
  * Gelbe Hund Linux
  * Yoper Linux
Die derzeit am besten unterstützten Systeme sind Solaris, Linux (insbesondere Redhat) und FreeBSD.

## Webmin auf Ubuntu {#install} installieren
Um Webmin zu installieren, müssen Sie Zugriff auf einen Benutzer mit ** root ** -Rechnungen haben. Es wird empfohlen, einen Nicht-Root-Benutzer mit ** sudo ** Access einzurichten.
Zuerst SSH in Ihren Server mit dem folgenden Befehl
```
ssh user@server_IP_address
```
Um WebMin über _apt-get_ zu installieren, müssen Sie zuerst das WebMin-Repository zu Ihrer Datei _Sources.list_ hinzufügen. Öffnen Sie auf Ihrem Server die Datei _Sources.list_ in Ihrem bevorzugten Texteditor. Wir werden Vim in diesem Tutorial verwenden:
```
sudo vi /etc/apt/sources.list
```
Sobald die Datei geöffnet ist, fügen Sie die folgenden Zeilen am Ende der Datei hinzu.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Fügen Sie nun den Webmin -GPG -Schlüssel zu APT hinzu, sodass das von Ihnen hinzugefügte Quell -Repository vertrauen wird. Dieser Befehl wird das tun:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Vor der Installation von Webmin müssen Sie die Paketlisten von APT-Get aktualisieren:
```
sudo apt-get update
```
Führen Sie nun diesen APT-GET-Befehl aus, um Webmin zu installieren:
```
sudo apt-get install webmin 
```
Geben Sie y ein, um die Installation zu bestätigen. Nach Abschluss der Installation beginnt der Webmin -Dienst automatisch. Die Webschnittstelle wird auf dem Port 10000 ausgeführt. Sie können über die folgende URL auf die Schnittstelle zugreifen.
```
https://server_IP_address:10000
```
Sie werden mit einer Warnung aufgefordert, die besagt, dass das SSL -Zertifikat Ihres Servers nicht vertrauenswürdig ist. Dies liegt daran, dass WebMin nach der Installation automatisch ein SSL -Zertifikat generiert und installiert wird und das Zertifikat nicht von einer Zertifikatbehörde ausgestellt wurde, die von Ihrem Computer vertraut wird. Es ist in Ordnung, fortzufahren. Weisen Sie Ihren Webbrowser an, dem Zertifikat zu vertrauen.
Zu diesem Zeitpunkt sehen Sie den WebMin -Login -Bildschirm:

{{< figure align=center src="images/webmin-login-screen.png" alt="Installieren Sie Webmin">}}

Wenn Sie sich zum ersten Mal bei Webmin anmelden, werden Sie auf die Seite ** Systeminformationen ** übertragen. Es gibt Ihnen einen Überblick über die Ressourcen Ihres Systems und andere verschiedene Informationen.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Installieren Sie Webmin -Systeminformationen">}}


## APache mit Webmin {#Install-Apache} installieren} installieren
Webmin verfügt über eine Vielzahl von Modulen, die verschiedene Softwarepakete verwalten. So installieren Sie Apache mit Webmin die folgenden Anweisungen
** Schritt 1 **: Klicken Sie im Menü Navigation auf ** nicht verwendete Module **, um die Kategorie zu erweitern, und klicken Sie dann auf ** Apache-Webserver **.
Wenn Sie nicht Apache auf Ihrem Server installieren, benachrichtigt das Modul Sie und bietet Ihnen eine Möglichkeit, Apache zu installieren.
** Schritt 2 **: Verwenden Sie den ** Klicken Sie hier ** Link (im letzten Satz), um Apache über APT-Get über Webmin zu installieren.
Nach Abschluss der Apache -Installation wird auf Ihrem Server den Standard -Apache -Server ausgeführt.

## Schlussfolgerung {#Conclusion}
In diesem Artikel werden kurz zahlreiche Dinge erläutert, die Webmin tun kann. Webmin ist eines der besten Tools für die Verwaltung Ihrer Linux/UNIX -Server. In diesem Tutorial haben wir auch gelernt, wie man Webmin auf Ubuntu installiert, und wir haben auch besprochen, wie Apache auf Ihrem Server mithilfe von WebMin installiert wird.

## Erkunden
  * [So installieren Sie mehrere PHP -Versionen mit Nginx auf Ubuntu] [7]
  * [So richten und konfigurieren Sie Nginx als Reverse -Proxy] [8]
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
