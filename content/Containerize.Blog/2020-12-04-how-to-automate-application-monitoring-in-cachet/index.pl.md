---
title: "Jak zautomatyzować monitorowanie aplikacji internetowych w Cachet" 
seoTitle: "Jak zautomatyzować monitorowanie aplikacji internetowych w Cachet" 
description: "Cachet pomaga monitorować wszystkie Twoje usługi i natychmiast powiadomić subskrybentów. Ten artykuł dotyczy integracji wtyczki stron trzecich w celu automatyzacji monitorowania." 
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: "Strona statusu Cachet umożliwia firmom uzyskanie natychmiastowych powiadomień o przestojach serwisowych. Dowiemy się, jak automatyzować monitorowanie aplikacji internetowych w Cachet." 
url: /pl/how-to-automate-application-monitoring-in-cachet/
categories: ['Status Page']
---

## Strona statusu Cachet umożliwia firmom uzyskanie natychmiastowych powiadomień o przestojach serwisowych. Dowiemy się, jak automatyzować monitorowanie aplikacji internetowych w Cachet.

{{< figure align=center src="images/cachet-monitor.png" alt="Monitorowanie aplikacji internetowych">}}

Monitorowanie aplikacji i usług jest bardzo ważną częścią biznesu online. Twoja witryna działa 24x7 i możesz ją źle pomylić. Nie możesz wiedzieć, że żadna strona działa, czy nie, dopóki ją nie odwiedzisz. Ponadto klienci nie będą mieli informacji na temat problemu. Mogą skontaktować się z zespołem wsparcia w celu przestoju serwisowego. Ponadto może to prowadzić do rozczarowania Twoich klientów. Możesz jednak skrócić przestoje usługi, konfigurowanie systemu strony Status. System strony statusu będzie monitorować wszystkie Twoje usługi przez całą dobę i natychmiast wysyłać powiadomienia do twojego zespołu i klientów. Umożliwi to szybkie kroki w celu rozwiązania problemu, a klienci będą na bieżąco z postępem. W tym poście na blogu dowiesz się, jak zintegrować bibliotekę stron trzecich z **cachet**w celu**zautomatyzowania monitorowania** .
  * [Wymagania][1]
  * [Wtyczka monitorowania konfiguracji][2]
  * [Tworzenie usługi Linux][3]
  * [Wniosek][4]

## Wymagania {#Wymagania}

  * Zainstaluj najnowszą wersję Cachet.
  * Znajomi usługi Linux.

## Konfiguracja wtyczki monitorowania {#Plugin}

Poniżej znajdują się kroki do zainstalowania i skonfigurowania wtyczki do monitorowania na Ubuntu.
  * Pobierz binarny z [Strona wydania][5].
  * Zmień nazwę pliku na Cachet-Monitor.
  * Uczyń plik wykonywalny za pomocą polecenia.
```
sudo chmod +x cachet-monitor
```
  * Umieść wykonywację w katalogu ścieżki, abyś mógł uzyskać do niego dostęp bezpośrednio przez terminal. Proponuję więc poruszać się pod **/usr/lokal/bin** .
  * Utwórz plik config.json, uruchamiając następujące polecenie.
```
sudo nano config.json
```
  * Skopiuj poniższy kod do niego i zapisz plik.
```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```
  * Teraz przetestuj konfigurację za pomocą tego polecenia.
```
cachet-monitor -c config.json
```
  * Jeśli wszystko działa dobrze, przejdź do następnej sekcji i utwórz usługę Linux.

## Tworzenie usługi Linux {#Service}

Poniżej przedstawiono kroki do utworzenia i uruchomienia usługi Linux w celu zautomatyzowania procesu monitorowania.
* Utwórz usługę **plik Cachet-Monitor.service** .
```
sudo nano cachet-monitor.service
```
  * Skopiuj poniższy kod do niego i zapisz plik.
```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```
  * Zaktualizuj konfigurację SystemD, uruchamiając polecenie.
```
sudo systemctl daemon-reload
```
  * Włącz usługę Cachet-Monitor, uruchamiając polecenie, aby mogła ładować uruchamianie systemu.
```
sudo systemctl enable cachet-monitor.service
```

## Wniosek {#Wniosek}

Cachet A jest bezpłatny i **Strona stanu open source**System. Nie zapewnia jednak funkcji pudełka do**Monitorowanie aplikacji internetowych** . Zamiast tego ma potężny interfejs API REST, który można użyć do wykonywania takich działań, jak incydenty, komponenty, grupy i wiele innych. W tym artykule wykorzystaliśmy wtyczkę innych firm do automatyzacji monitorowania aplikacji w Cachet. Przede wszystkim możesz opracować własną wtyczkę lub użyć dowolnej innej istniejącej wtyczki do wykonania zadania.
Ponadto [Containerize.com][6] jest w drodze do ulepszenia stosu produktów open source w wielu językach i ramach. Aby uzyskać regularne aktualizacje, prosimy o to, aby kategoria [STATES][7] w celu uzyskania bardziej interesujących artykułów.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Najlepsze systemy strony stanu open source][8]
  * [CACHET - bezpłatne i oprogramowanie Status Status open source][9]
  * [Top 5 Oprogramowanie Status Status Open Source dla 2020][10]



[1]: #Requirements
[2]: #Plugin
[3]: #Service
[4]: #Conclusion
[5]: https://github.com/CastawayLabs/cachet-monitor/releases
[6]: https://www.containerize.com/
[7]: https://blog.containerize.com/category/status-page
[8]: https://products.containerize.com/status
[9]: https://products.containerize.com/status/cachet
[10]: https://blog.containerize.com/status-page/top-5-open-source-status-page-software-for-2020/
