---
title: "So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu" 
seoTitle: "So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu" 
description: "PHPMYADMIN ist eine Open -Source -Datenbankverwaltungssoftware, die in PHP geschrieben wurde. Wir lernen, wie Sie PhpMyAdmin mit Nginx installieren und MySQL über phpmyadmin verabreichen" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "PHPMYADMIN ist das in PHP geschriebene Open -Source -Datenbank -Management -Tool für die grafische Webschnittstelle. In diesem Tutorial lernen wir, wie Sie PhpMyAdmin mit Nginx installieren." 
url: /de/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## PHPMYADMIN ist das in PHP geschriebene Open -Source -Datenbankmanagement -Tool für die grafische Webschnittstelle. In diesem Tutorial lernen wir, wie Sie PhpMyAdmin mit Nginx installieren.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="So installieren und sichern Sie PhpMyAdmin mit Nginx auf Ubuntu">}}


## **Überblick**
PHPMYADMIN ist ein kostenloses und Open -Source -Datenbankverwaltungs -Tool, mit dem Benutzer eine Weboberfläche zur Verwaltung von MySQL- oder MariADB -Servern über eine intuitive Schnittstelle verwalten können. Dies ist eine der weithin unterstützten Software, die von den meisten beliebten Hosting-Anbietern angeboten wird, um Webadministratoren für das Erstellen von Datenbank in PhpMyAdmin zu ermöglichen und Datenbanken zu verwalten, SQL-Statements auszuführen, Daten einfach zu importieren und zu exportieren. Sie können in PhpMyAdmin mit Nginx über eine grafische Weboberfläche einfach auf Ihre MySQL- oder MariADB -Datenbanken zugreifen, die einfach neben einer PHP -Entwicklungsumgebung ausgeführt werden.
In dieser Anleitung werden wir Schritte beschreiben, wie man PhpMyAdmin mit Nginx auf Ubuntu 20.04 installiert und sichert. Sie müssen PhpMyAdmin auf Ubuntu Server installieren und konfigurieren, damit es einfach mit MySQL -Datenbanken und -Tabellen funktioniert. Lassen Sie uns also lernen, wie Sie PhpMyAdmin mit Nginx auf Ubuntu 20.04 / 20.10 installieren und sichern:
  * Voraussetzungen
  * PhpMyAdmin installieren
  * Datenbank konfigurieren
  * Symbolische Link erstellen
  * Zugriff auf PhpMyAdmin
  * Erstellen Sie MySQL Superuser
  * Sichern Sie PhpMyAdmin
  * Abschluss

## Schritt 1: Voraussetzungen {#ID-Förderung}}
Um diesem Handbuch zu folgen, benötigen Sie Ubuntu 20.04 -Server auf Ihrem lokalen Computer oder auf einem Remote -Server mit Voraussetzungen.
  * Sie sollten als Nicht-Root-Benutzer mit Sudo-Berechtigungen und aktivierter UFW-Firewall auf den Server zugreifen.
  * Es wird angenommen, dass Sie Nginx, MySQL und PHP auf Ubuntu bereits installiert haben.
  * Wie PhpMyAdmin MySQL -Anmeldeinformationen verwendet, um sich zu authentifizieren, sollten Sie auch SSL/TLS -Zertifikate installieren, um verschlüsseltem Datenverkehr zwischen Server und Client zu aktivieren.
Lassen Sie uns mit diesem Weg in den Weg rechnen, um PhpMyAdmin zu installieren und zu sichern, um eine Verbindung zum MySQL -Server herzustellen, um über Weboberflächen auf die Datenbank zuzugreifen.

## Schritt 2: Installieren Sie phpmyadmin {#id-1-install-PhpMyAdmin}}
Stellen Sie sicher, dass Sie alle Voraussetzungen in Ihrem System erfolgreich installiert haben, bevor Sie PHPMYADMIN auf Ubuntu 20.04 installieren. Aktualisieren Sie zunächst die Liste der Pakete:
```
sudo apt update 
```
Führen Sie nun den folgenden Befehl für die Installation des PHPMYADMIN -Pakets aus den Standard -Ubuntu -Repositories auf Ubuntu 20.04 / 20.10 aus:
```
sudo apt install phpmyadmin

```
Drücken Sie ** y ** und ** Eingeben **, wenn er gebeten wurde, fortzufahren. Wenn Sie aufgefordert werden, einen Webserver auszuwählen, da keine Option für ** nginx ** wie unten vorhanden ist, drücken Sie ** Registerkarte **, um OK auszuwählen, und dann ** eingeben **, um fortzufahren, ohne einen Webserver auszuwählen.

{{< figure align=center src="images/mysql-setup.png" alt="Installieren und sicherer phpmyadmin für nginx auf Ubuntu 20.04">}}


## Schritt 2: Datenbank konfigurieren {#id-1-install-Phpmyadmin}}
Wählen Sie als Nächstes ** Ja ** und drücken Sie ** Eingeben **, um die Datenbank mithilfe von DBConfig-Common-Tool zu installieren und einzurichten:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="So konfigurieren Sie MySQL mit PhpMyAdmin">}}

Das MySQL -Anwendungskennwort wird intern von PhpMyAdmin verwendet, um mit der MySQL -Datenbank zu kommunizieren. Geben Sie ein neues Kennwort für PhpMyAdmin DBMS ein, um sich als neue Datenbank zu registrieren, wählen Sie OK und drücken Sie die Eingabetaste, um fortzufahren.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="So konfigurieren Sie MySQL für phpmyadmin">}}

Sie werden aufgefordert, das Passwort zu bestätigen, dasselbe Passwort einzugeben, ** OK ** und drücken Sie ** eingeben **. Glückwunsch! PhpMyAdmin wurde erfolgreich in Ihrem System installiert.

## Schritt 4: Erstellen symbolischer Link {#id-2-create-symbolische Link}}
Es gibt verschiedene Möglichkeiten, wie Sie die NGINX so konfigurieren können, dass sie PhpMyAdmin -Dateien bedient. Wenn der Serverblock Ihrer Domäne bereits so eingerichtet ist, dass die PHP -Anforderungen gestellt werden, müssen Sie einen symbolischen Link aus dem PhpMyAdmin Nginx -Installationsdateien/usr/share/phpmyadmin zu Ihrem Domain -Dokument -Root -Verzeichnis erstellen. Der Standardstandort des Nginx -Dokumentstammes in Ubuntu 20.04/20.10 sollte/var/www/html/je nach INS -Setup unterschiedlich sein. Ihr Dokumentrouch kann beispielsweise in /var/www/example.com/public_html gefunden werden.
Als nächstes erstellen wir einen symbolischen Link aus dem PhpMyAdmin -Verzeichnis/usr/share/phpmyadmin zu Ihrem Dokumentwurzel. Hier gehen wir davon aus, dass unser Dokument -Root/var/www/html/und wir einfach Phpmyadmin zum Ende hinzufügen werden. Auf diese Weise können wir auf PHPMYADMIN unter URL example.com/phpmyadmin zugreifen
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Schritt 5: Zugriff auf PhpMyAdmin {#ID-3-Test-Phpmyadmin}}
Sie sollten nun in der Lage sein, auf die Weboberfläche von PHPMyAdmin zugreifen zu können, indem Sie den Host-/Domain -Namen oder die öffentliche IP -Adresse Ihres Servers besuchen, gefolgt von Domain.com/Phpmyadmin in Ihrem bevorzugten Webbrowser. Zum Beispiel http://example.com/phpmyadmin oder http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
Auf Ubuntu -Servern, die mit MySQL 5.7 und später ausgeführt werden, können Sie sich nicht in der kostenlosen PhpMyAdmin -Datenbank mit dem MySQL -Standard -Root -Konto anmelden und erhalten einen Fehler wie _ "Zugriff auf den Benutzer" root "@’ localhost "_". Stattdessen sollten Sie ein neues Superuser -Konto nur für PhpMyAdmin erstellen. Als nächstes erstellen wir MySQL Root -Konto, um sich bei PHPMYADMIN anzumelden.

## Schritt 6: MySQL Superuser {#id-4-create-mysql-superuser} erstellen
Melden Sie sich im Terminal mit Ihrem MySQL -Stammkennwort in MySQL an, das Sie möglicherweise zum ersten Mal ein Stammkennwort erstellt haben, wenn Sie PhpMyAdmin MySQL -Datenbank installiert haben.
```
sudo mysql -u root -p
```
Fügen Sie nach dem MySQL einen neuen MySQL -Superuser mit dem Benutzernamen Ihrer Wahl hinzu. In diesem Beispiel nennen wir es Yasiradmin. [Klicken Sie hier, um ein starkes Kennwort zu generieren] [2] und ersetzen Sie das neue \ _password \ _here unten damit.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Gewähren Sie jetzt Superuser -Berechtigungen an unseren neuen Benutzer Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Beenden Sie nun die MySQL -Sitzung. Mit diesen neuen Superuser -Anmeldeinformationen sollten Sie jetzt in der Lage sein, PhpMyAdmin zugreifen zu können.

{{< figure align=center src="images/image.png" alt="Wie man phpmyadmin auf Ubuntu 20.04 anmelde">}}

Es wird dringend empfohlen, dass Sie eine zusätzliche Sicherheit für PhpMyAdmin einrichten, um PHPMYADMIN NGINX zu sichern. Sie sollten in der Lage sein, PHPMYADMIN -URL zu einer dunklen URL zu ändern und zugreifen zu können.

## Schritt 7: Secure PhpMyAdmin {#ID-6-Secure-PhpMyAdmin empfohlen}
Als nächstes möchten wir die Authentifizierung in NGINX einrichten, um eine zusätzliche Sicherheitsebene bereitzustellen. Wir werden jetzt Apache2-Utils installieren, mit denen die .htpasswd-Datei generiert werden kann, die sowohl mit Nginx- als auch mit Apache2-Servern funktioniert.
```
sudo apt install apache2-utils
```
Nach der Installation können wir die .htpasswd -Datei generieren. Ändern Sie den Benutzernamen Ihrer Wahl. [Ein Passwort generieren] [3] und schützen Sie es.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Es gibt jetzt eine .htpasswd -Datei mit Ihrem Benutzernamen und Ihrem verschlüsselten Passwort. Sie können dies mit dem folgenden Befehl überprüfen:
```
cat /etc/nginx/.htpasswd
```
Sie sollten so etwas wie Benutzername sehen: $ apr1sdfsdf4435sdtsklfwmmg1sfdgg4
Wir müssen jetzt 2 Anweisungen zu unserer Nginx -Konfigurationsdatei hinzufügen. Der Speicherort der Konfigurationsdatei kann je nach Installationen variieren. Der Standarddateipfad ist jedoch normalerweise bei/etc/nginx/seites-verfügbar/standardmäßig. Wenn Sie mehrere Domänen einrichten, befindet sich Ihre Konfigurationsdatei möglicherweise in einem Ort wie /etc/nginx/sites-available/example.com
In diesem Beispiel gehen wir davon aus, dass sich die Nginx-Konfigurationsdatei unter/etc/nginx/sites-verfügbar befindet. Öffnen Sie die Datei, um sie zu bearbeiten.
```
sudo nano /etc/nginx/sites-available/default
```
Scrollen Sie nach unten und suchen Sie nach den Standortblöcken und fügen Sie in einem neuen Block darunter mit dem Namen Ihres verdeckten Phpmyadmin -Ordners in diesem Beispiel ASSON_HIDDEN ein.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Datei speichern und beenden (drücken Sie Strg + x, drücken Sie y und drücken Sie die Eingabetaste). Überprüfen Sie, ob die Nginx -Konfigurationsdatei gültig ist, da der Server ansonsten durch das Ausführen des Befehls zum Neustart abstürzen kann.
```
sudo nginx -t
```
Wenn gültig ist, laden Sie die Nginx -Konfiguration neu.
```
sudo service nginx reload
```
Wenn Sie nun Beispiele in eXEGECTION.com/asiple_hidden besuchen, sollten Sie ein Authentifizierungsfenster präsentiert werden.

{{< figure align=center src="images/auth3.png" alt="So sichern Sie PhpMyAdmin">}}

Sie sind alle mit PhpMyAdmin -Installationen auf Ubuntu Server fertig.

## Schlussfolgerung: {#id-What-Next}
Herzlichen Glückwunsch, Sie haben PhpMyAdmin mit Nginx für Ubuntu 20.04 / 20.10 Server erfolgreich installiert und können nun MySQL über PhpMyAdmin verwalten. Jetzt können Sie anfangen, MySQL -Datenbanken, Benutzer, Tabellen, MySQL -Abfragen und verschiedene andere Operationen durchzuführen.
Wenn Sie Fragen haben, können Sie es mir unten im Kommentarbereich mitteilen.

## Erkunden
Möglicherweise mögen Ihnen auch die folgenden verwandten Artikel:
  * [So konfigurieren Sie Apache als umgekehrter Proxy für Ubuntu/Debian] [4]
  * [So sichern und verschlüsseln Sie Nginx mit uns auf Ubuntu 20.04] [5]
  * [So konfigurieren Sie HTTP/2 -Unterstützung in Nginx auf Ubuntu/Debian] [6]
  * [So richten Sie Nginx mit Passagier auf AWS Production Server] [7]
  * [So installieren und konfigurieren Sie OwnCloud mit Apache auf Ubuntu] [8]
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
