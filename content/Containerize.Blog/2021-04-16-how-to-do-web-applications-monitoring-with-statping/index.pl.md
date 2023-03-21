---
title: "Jak monitorować aplikacje internetowe za pomocą statku" 
seoTitle: "Jak monitorować aplikacje internetowe za pomocą statku" 
description: "Statping jest jednym z najlepszych narzędzi do monitorowania stron internetowych, które umożliwia monitorowanie wszystkich usług. Renderować piękną stronę statusu dla prezentacji usług aktualizacji." 
date: Fri, 16 Apr 2021 18:12:12 +0000
author: Masood Anwer
summary: "Automatycznie monitoruj swoje strony internetowe, aplikacje internetowe, interfejsy API za pomocą bezpłatnych narzędzi monitorowania i prezentuj czas aktualności z systemem strony Status Open Source." 
url: /pl/how-to-do-web-applications-monitoring-with-statping/
categories: ['Status Page']
---

## Automatycznie monitoruj swoje strony internetowe, aplikacje internetowe, interfejsy API za pomocą bezpłatnych narzędzi monitorowania i prezentuj czas aktualności z systemem strony stanu open source.

{{< figure align=center src="images/How-to-monitor-websites-with-statping.png" alt="Monitorowanie aplikacji internetowych">}}

Statping to oprogramowanie do strony stanu open source **i jedno z  **najlepszych narzędzia do monitorowania witryny**  . Wykorzystuje również do monitorowania usług takich jak usługi HTTP, TCP, UDP, ICMP i GRPC. Stwierdzanie automatycznie pobiera usługi, monitoruje je i renderuje piękną stronę statusu. Jest wieloplatformowy i można go zainstalować w systemach operacyjnych Liunx, Mac i Windows. Ponadto pozwala korzystać z systemu bazy danych MySQL, Postgres lub SQLite do przechowywania informacji. Ponadto jest wyposażony w aplikacje mobilne na urządzeniach iPhone'a i Androida.
Spójrzmy na podstawowe cechy statku.
  ***Monitorowanie usług**  - Utrzymanie umożliwia łatwe śledzenie wszystkich usług HTTP, TCP, UDP, GRPC i ICMP.
  ***Powiadomienia** -STATPPINE potwierdza większość głównych aplikacji innych firm do otrzymywania powiadomień.
  ***Aplikacja mobilna**  - Użyj bezpłatnej aplikacji na urządzenia iPhone i Android i zarządzaj wszystkim w podróży.
  ***OAuth Authenticatio**  n - Obsługuje uwierzytelnianie OAuth dla popularnych usług, takich jak Github, Google, Slack i Custom OpenId dostawca. Użyj tej funkcji i zwiększ bezpieczeństwo.
W tym samouczku omówimy następujące tematy.
  * [Instalowanie na Linux][1]
  * [Skonfiguruj usługę SystemD][2]
  * [Utwórz usługę do monitorowania][3]
  * [Wniosek][4]

## Instalowanie w Linux   {#Installing}
Uruchom poniżej, polecenie instalacji.
```
curl -o- -L https://statping.com/install.sh | bash
```

## Skonfiguruj usługę SystemD   {#Configure}
Konfigurowanie usługi SystemD jest doskonałym sposobem na zapewnienie, że serwer Statping może automatycznie ponownie uruchomić ponowne uruchomienie. Aby utworzyć usługę SystemD, wykonaj poniższe czynności.
  * Po pierwsze, uruchom poniżej polecenie, aby utworzyć nowy plik.
```
sudo nano /etc/systemd/system/statping.service
```
  * Skopiuj poniżej kod i wklej w nim.
```
[Unit]
Description=Statping Server
After=network.target
After=systemd-user-sessions.service
After=network-online.target

[Service]
Type=simple
Restart=always
ExecStart=/usr/local/bin/statping
WorkingDirectory=/usr/local/bin

[Install]
WantedBy=multi-user.target
```
  * Wreszcie użyj poniżej poleceń, aby włączyć i uruchomić usługę SystemD.
```
systemctl daemon-reload
systemctl enable statping
systemctl start statping
```

## Utwórz usługę do monitorowania   {#Create}
  * Otwórz przeglądarkę, wprowadź adres URL w celu zalogowania się do instalacji statku.
  * Kliknij link usług w najlepszej nawigacji. Pokazuje Ci stronę Usług, która wygląda poniżej jednej.

{{< figure align=center src="images/statping-dashboard.png" alt="Lista monitorowania usług internetowych">}}

  * Kliknij przycisk Utwórz, aby dodać nową usługę do monitorowania. Wypełnij wymagane pola, takie jak nazwa usługi, typ usługi, interwał kontroli, punkt końcowy usługi (URL) itp.

## Wniosek   {#Conclusion}
Dowiedzieliśmy się o statku, jak zainstalować go w Linux i jak utworzyć usługę SystemD w tym samouczku. Ponadto stworzyliśmy nową usługę do monitorowania i przedstawiania różnych funkcji. Mamy nadzieję, że ten przewodnik pomoże Ci zacząć korzystać z statku do wykonywania **Monitorowanie usług internetowych  **i **  Monitorowanie aplikacji internetowych** .
Wreszcie [**Containerize.com **][5] jest w spójnym procesie pisania postów na blogu na temat dalszych najnowszych produktów typu open source. Dlatego pozostań w kontakcie z tą kategorią [ **Status**  ][6], aby uzyskać najnowsze aktualizacje.

## Badać
Możesz znaleźć istotne następujące linki:
  *[**Top 5 Oprogramowanie Status Status open source dla 2020** ][7]
  *[**Statping** ][8]
  *[**CACHET** ][9]
  *[**Monitor** ][10]
  *[**Staytus** ][11]
  *[**Upptime** ][12]
  *[**Statusfy** ][13]

  
[1]: #Installing
[2]: #Configure
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/status-page/
[7]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
[8]: https://products.containerize.com/status/statping
[9]: https://products.containerize.com/status/cachet/
[10]: https://products.containerize.com/status/monitoror/
[11]: https://products.containerize.com/status/staytus/
[12]: https://products.containerize.com/status/upptime/
[13]: https://products.containerize.com/status/statusfy/
