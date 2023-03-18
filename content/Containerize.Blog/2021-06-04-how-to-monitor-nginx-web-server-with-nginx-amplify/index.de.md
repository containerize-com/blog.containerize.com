---
title: "So überwachen Sie den NGINX -Webserver mit Nginx -Amplify" 
seoTitle: "So überwachen Sie den NGINX -Webserver mit Nginx -Amplify" 
description: "Nginx Amplify ist ein kostenloser Überwachungsagent für NGINX -Webserver und PHP -Anwendungen. In diesem Artikel geht es darum, den NGINX -Webserver mit Nginx -Amplify zu überwachen" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Überwachen Sie NGINX, PHP -Anwendungen, Betriebssystem mit NGINX -Amplifikation und Verbesserung der Konfiguration. Dieser Artikel führt Sie zum Einrichten und Konfigurieren von Nginx -Amplify." 
url: /de/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## Überwachen Sie NGINX, PHP -Anwendungen, Betriebssystem mit NGINX -Amplifikation und Verbesserung der Konfiguration. Dieser Artikel führt Sie zum Einrichten und Konfigurieren von Nginx -Amplify.

{{< figure align=center src="images/nginx-post.png" alt="Überwachen Sie den NGINX -Webserver mit Nginx Amplify">}}


## Übersicht {#install}
** Die Überwachung von Webserver ** ist für Websites mit hohem Handel sehr wichtig. Der ** Überwachungsagent ** wird regelmäßig wesentliche Metriken über den Webserver aufzeichnen. Diese kritischen Metriken können verwendet werden, um die NGINX -Konfiguration zu optimieren. Es wird Ihnen helfen, die Leistung Ihres Webservers und Ihrer Anwendung zu verbessern.
In diesem Blog -Beitrag werden wir die folgenden Abschnitte für ** nginx -Überwachung ** Open Source -Tool abdecken.
  * [Nginx Web Server] [1]
  * [Nginx Amplify] [2]
  * [Installieren Sie Nginx Amplify] [3]
  * [Überwachungsmetriken] [4]

## Nginx Web Server {#nginx}
[Nginx] [5] ist ein kostenloser und Open -Source -Webserver. Es ist einfach, leicht und einfach zu konfigurieren als Apache. Nginx Web Server arbeitet auch als Reverse Proxy, Lade -Balancer, Mail -Proxy und HTTP -Cache. Es funktioniert für HTTP-, HTTPS-, SMTP-, POP3- und IMAP -Protokolle. Nginx ist ein Hochgeschwindigkeits-, zuverlässiger und speicherischer Webserver, der die Leistung Ihrer Anwendungen verbessert. Darüber hinaus hat es immer beliebter und wird jetzt als der beliebteste Webserver angesehen. Darüber hinaus ist Nginx für jede Art von Website geeignet, einschließlich hochverträglicher Websites und Anwendungen. Es kann auf nahezu allen Betriebssystemen installiert und konfiguriert werden.

### nginx installieren
  * Führen Sie die folgenden Befehle aus, um den NGINX -Webserver zu installieren.
```
sudo apt update
sudo apt install nginx
```
  * Sobald Sie mit der Installation fertig sind, öffnen Sie Ihren Browser und geben Sie "http: // ip \ _of \ _your_server" ein. Sie sehen die folgende Begrüßungsseite.

{{< figure align=center src="images/nginx-home.png" alt="Willkommen bei nginx!">}}


## nginx Amplify {#amplify}
Nginx Amplify ist ein kostenloses Überwachungstool für Nginx Open Source, Nginx Plus und PHP-FPM. Es handelt sich um ein SaaS-basiertes Tool für die Überwachung und Anwendungen von NGINX Server. Benutzer können die Infrastrukturgüter problemlos im Auge behalten, die Leistung überwachen und die Konfiguration anpassen. Es gibt umfassende Informationen, die Benutzer verwenden können, um die Webserver- und Anwendungskonfiguration zu optimieren. Es fungiert als Agent auf dem Server, auf dem die NGINX- und PHP -Anwendungen gehostet werden. Nginx Amplify ist ein leichtes, Push -Protokoll und Überwachungsdaten, um Server zu verstärken, ohne die Leistung zu beeinträchtigen. Sie können Metriken auf dem Amplify Dashboard anzeigen. Der Agent ist für alle primären Betriebssysteme wie Rhel, Centos, Ubuntu, Debian, Fedora und FreeBSD verfügbar. Nginx Amplify verfügt über drei Hauptkomponenten wie Nginx Amplify Agent, Nginx Amplify Web UI und Nginx Amplify Backend.
  *** nginx Amplify Agent ** - Es arbeitet auf dem überwachten System. Die gesamte Kommunikation wird mit SSL/TLS verschlüsselt.
  *** nginx Amplify Web UI ** - Web -Benutzeroberfläche zeigt die Metriken für Webserver, Anwendungen und Betriebssysteme an.
  *** nginx Amplify Backend ** - Es ist eine Schlüsselkomponente, die als SAAS implementiert wird und für die Erfassung von Metriken, die Wartung einer Datenbank, die Ausführung einer Analytics -Engine und die Bereitstellung einer Kern -API verantwortlich ist.

## nginx amplify {#install} installieren
Folgen Sie unten schrittweise Anleitung zur Installation von Nginx Amplify auf Ubuntu.
  * Zuerst müssen Sie ein Konto an der Nginx [Website] [6] erstellen.
  * Nach dem Anmeldung sehen Sie den folgenden Bildschirm auf der Nginx Amplify -Website. Stellen Sie nun über SSH eine Verbindung zu Ihrem Server her und verwenden Sie Befehle in den folgenden Schritten.

{{< figure align=center src="images/amplify-1.png" alt="Installieren Sie Nginx Amplify">}}

  * Führen Sie den folgenden Befehl aus, um den Agenten herunterzuladen.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Führen Sie den folgenden Befehl aus, um die NGINX -Amplifikation auf dem Server zu installieren. Ersetzen Sie XXXXX durch die tatsächliche API -Taste. Sie finden es unter Nginx Amplify Dashboard.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Sobald Sie mit der Installation fertig sind, können Sie den Status mit dem folgenden Befehl überprüfen.
```
$ sudo service amplify-agent status
```
  * Jetzt müssen Sie Nginx Amplify Agent so konfigurieren, dass die Metriken angezeigt werden.

{{< figure align=center src="images/amplify-2-1.png" alt="NGINX -Überwachungskonfiguration">}}

  * Erstellen Sie eine neue Datei mit der Configuration stub_status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Kopieren Sie den folgenden Code ein und speichern Sie die Datei.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Starten Sie den Nginx -Webserver neu, um das Modul stub_status zu aktivieren.
```
$ sudo service nginx restart
```
  * Öffnen Sie nun die Nginx -Konfigurationsdatei mit dem folgenden Befehl.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Fügen Sie den folgenden Code hinzu und speichern Sie es.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Starten Sie den Nginx -Dienst neu, um alle Änderungen anzuwenden.
```
$ sudo service nginx restart
```
  * Navigieren Sie als Nächstes zum Amplify Dashboard und klicken Sie auf die Schaltfläche "Beenden". Sie sollten die folgende Seite sehen.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Webserverüberwachung">}}

  *Sie können die Statistiken in einfacherem und lesbarerem Format sehen, indem Sie auf die Registerkarte ** Übersicht ** klicken. Es wird wie unten gezeigt aussehen.

{{< figure align=center src="images/amplify-overview.png" alt="NGINX -Überwachungsstatistiken">}}


## Überwachungsmetriken {#Monitoring}
Nginx Amplify Agent sammelt die folgenden Datenarten:
  *** nginx Metriken **-Es sammelt verschiedene nginx-bezogene Metriken von stub_status, protokolliert Dateien und aus dem Prozessstatus.
  *** Systemmetriken ** - Nginx Amplify überwacht eine Vielzahl von Systemmetriken wie CPU -Nutzung, Speicherverbrauch, Netzwerkverkehr und vieles mehr.
  *** PHP-FPM-Metriken **-Wenn es einen laufenden PHP-FPM-Masterprozess identifiziert, wird Metriken aus dem Php-FPM-Poolstatus erhalten.
  *** MySQL -Metriken ** - Der MySQL Global Status -Satz von Variablen kann vom Agenten zum Sammeln von Metriken verwendet werden.
  *** nginx metadata ** - Der Agent sammelt Daten zu Nginx -Instanzen wie Paketdaten, Erstellen von Informationen, Binärpfad, Erstellung von Konfigurationseinstellungen und vielem mehr.
  *** Systemmetadaten ** - Der Agent sammelt Daten zum Betriebssystem, einschließlich Hostname, Verfügbarkeit, Betriebssystem und andere Details.

## Abschluss
Wir haben den NGINX -Webserver und den NGINX -Amplify Advanced Monitoring Agent genauso detailliert durchgesehen. Nginx Amplify ist recht einfach eingerichtet und konfiguriert. Darüber hinaus haben wir uns über die kritischen Metriken handelt, die Nginx Amplify auf ** überwachen kann, um Nginx ** zu überwachen. Diese wichtigen Metriken können verwendet werden, um die Konfiguration Ihres Nginx -Webservers und -Apps zu verbessern.
Schließlich befindet sich [Containerize.com] [7] in einem konsistenten Prozess des Schreibens von Blog -Posts zu weiteren neuesten Open -Source -Produkten. Daher finden Sie in Kontakt mit dieser Kategorie [Web Server -Lösung] [8] für die neuesten Updates.

## Erkunden
Möglicherweise finden Sie die folgenden Links relevant:
  * [So verwenden Sie Nginx als Lastausgleich für Ihre Anwendung] [9]
  * [So richten und konfigurieren Sie Nginx als Reverse Proxy] [10]
[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
