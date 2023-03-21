---
title: "Jak zbudować aplikację Node.js z Docker na Ubuntu" 
seoTitle: "Jak zbudować aplikację Node.js z Docker na Ubuntu" 
description: "Jeśli jesteś zainteresowany Node.js i chcesz użyć Docker. Ten samouczek przejdzie cię, jak zbudować aplikację Nodejs z Dockerem." 
date: Fri, 25 Jun 2021 17:08:00 +0000
author: Assad Mahmood
summary: "W tym artykule wyjaśniono, jak zbudować aplikację Nodejs z konteneryzacją Docker. Docker pozwala pakować i uruchamiać aplikacje jako kontenery." 
url: /pl/how-to-build-a-node-js-application-with-docker-on-ubuntu/
categories: ['Software Development']
---

{{< figure align=center src="images/how-to-build-nodejs-application-with-docker.png" alt="Jak zbudować aplikację nodejs z Docker">}}


## W tym artykule wyjaśni ci, jak zbudować aplikację Nodejs z konteneryzacją Docker. Docker pozwala pakować i uruchamiać aplikacje jako kontenery.
Dzisiaj rozpoczynamy serię samouczków na temat narzędzi do tworzenia oprogramowania. W tym pierwszym artykule obejmuje sposób kontenerowania aplikacji node.js za pomocą Docker. Docker pomaga programistom pakować i uruchamiać aplikacje jako kontenery. Ponieważ pojemnik jest izolowanym procesem i lekką alternatywą dla maszyn wirtualnych. W tym artykule wyjaśniono, jak zbudować aplikację Nodejs z konteneryzacją Docker. Zacznijmy!
  *[**What Is Docker** ][1]
  * **[Wymagania wstępne][2]**
  *[**Ustawienie node.js aplikacja** ][3]
  *[**Write Dockerfile** ][4]
  *[**Zbuduj obraz i uruchom kontener Docker** ][5]
  *[**Wniosek** ][6]

## Co to jest Docker   {#Docker}
Docker to zestaw platformy jako produkty serwisowe, które wykorzystują wirtualizację poziomu systemu operacyjnego do dostarczania oprogramowania w pakietach o nazwie Containers. Jest to otwarta platforma do opracowywania, wysyłki i uruchamiania aplikacji. Docker umożliwia oddzielenie aplikacji od infrastruktury, aby szybko dostarczać oprogramowanie.
Docker używa architektury klienta-serwera. Klient Docker rozmawia z Docker Daemon, który prowadzi ciężkie podnoszenie budowania, uruchomienia i dystrybucji kontenerów Docker. Klient Docker i Demon komunikują się za pomocą interfejsu API REST, ponad gniazdem UNIX lub interfejsu sieciowego. Oto schemat architektury Docker.

{{< figure align=center src="images/docker-architecture-1024x540.png" alt="Architektura Docker">}}


## Wymagania wstępne   {#Prereq}
  * Serwer Ubuntu
  * Docker zainstalowany na serwerze
  * Zainstalowany node.js

## SEFIP NODE.JS Application   {#setUp}
Aby utworzyć swój obraz, najpierw musisz wykonać pliki aplikacji, które możesz następnie skopiować do kontenera. Te pliki będą zawierać statyczną treść, kod i zależności aplikacji.
Najpierw utwórz katalog do swojego projektu w katalogu domowym użytkownika nie-root. Następnie wykonaj poniżej polecenie w nowym folderze, który utworzyłeś.
```
npm init -y
npm i -s express
```
Powyższe polecenie skonfiguruje aplikację Node.js z Express Framework zainstalowaną jako zależność. Dodajmy następujący kod do pliku **app.js** .
```
const express = require(‘express’);
const app = express();
app.get(‘/’, function(req,res){
  res.send(“Hello World”);
});
const port = 3000;
app.listen(port, function () {
  console.log(‘Listening on port 3000!’)
})
```
Uruchom aplikację z node app.js
```
node app.js
```
Przejdź do przeglądarki do http: // Your \ _Server \ _IP: 3000. Zobaczysz następującą stronę docelową.
Teraz masz uruchomioną aplikację. Możemy teraz przejść, aby stworzyć Plik Docker, który pozwoli nam odtworzyć i skalować tę aplikację.

## Write DockerFile   {#DockerFile}
Korzystając z DockerFile, możesz określić, co zostanie zawarte w kontenerze aplikacji podczas jego wykonywania i środowisku kontenera.
Przede wszystkim utwórz DockerFile z następującym poleceniem u podstaw projektu.
```
vi Dockerfile
```
Dodaj następujące **z**  instrukcji, aby ustaw podstawowy obraz aplikacji:
```
FROM node:12-alpine
```
{{_LINE_43_}}
{{_LINE_44_}}
    Możesz dodać plik .dockerignore, aby usunąć pliki, które nie należą do Docker Image.
{{_LINE_46_}}
{{_LINE_47_}}
Utwórzmy **node_modules**  subdirectory w /home /node wraz z katalogiem aplikacji. Zapewni to, że mają one potrzebne uprawnienia, które będą ważne, gdy utworzymy lokalne moduły węzłów w kontenerze z instalacją NPM.
```
...
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
```
Następnie ustaw katalog roboczy aplikacji na/home/node/aplikacja:
```
...
WORKDIR /home/node/app
```
Następnie skopiuj pakiet.json i pakiet-lock.json, przypisz plik projektu do „węzła” użytkownika nie-root, a następnie uruchom instalację NPM
```
...
COPY package*.json ./
USER node
RUN npm install
```
Skopiuj kod aplikacji z odpowiednimi uprawnieniami do katalogu aplikacji na kontenerze
```
...
COPY --chown=node:node . .
```
Expose Command, aby wystawić port:
```
...
EXPOSE 3000
CMD [ "node", "app.js" ]
```
Ostateczna wersja DockerFile powinna wyglądać tak:
```
FROM node:12-alpine
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY package*.json ./
USER node
RUN npm install
COPY --chown=node:node . .
EXPOSE 3000
CMD [ "node", "app.js" ]
```

## buduj obraz i uruchom kontener   {#Build}
Uruchom następujące polecenie, aby wygenerować obraz Docker
```
docker build -t <<image_name>> .
```
Wygeneruje to _docker Image_, który można sprawdzić za pomocą polecenia Docker Images. Możliwe jest teraz utworzenie pojemnika z tym obrazem za pomocą następującego polecenia:
```
docker run — name <<container_name>> -p 3000:3000 -d <<image_name>>
```
To uruchomi kontener, który możesz zweryfikować, uruchamiając polecenie Docker PS. Teraz w przeglądarce, jeśli uzyskujesz dostęp do http: // localhost: 3000, zobaczysz aplikację Node.js. Jednak tym razem teraz działa z twojego kontenera Docker.

## Wniosek   {#Conclusion}
Rozwój z kontenerem Docker jest bardzo prosty i łatwy. Docker pomaga programistom pakować i uruchamiać aplikacje jako kontenery. W tym samouczku nauczyliśmy się budować aplikację node.js za pomocą kontenera Docker na Ubuntu. W nadchodzących artykułach napiszymy o większych zastosowaniach Docker, a także omówimy inne narzędzia.

## Badać
  * [Jak zainstalować wiele wersji PHP z Nginx na Ubuntu][7]
  * [Jak skonfigurować i skonfigurować Nginx jako odwrotną proxy][8]

  
[1]: #docker
[2]: #prereq
[3]: #setup
[4]: #dockerfile
[5]: #build
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
