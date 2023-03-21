---
title: "Jak konfigurować lokalnie sieć Blockchain Quorum" 
seoTitle: "Jak konfigurować lokalnie sieć Blockchain Quorum" 
description: "Postępuj zgodnie z tym przewodnikiem, aby dowiedzieć się o procesie instalacji Consensys Quorum Blockchain na LocalHost. Konsensys Quorum to blockchain oparty na Etherum Open Source." 
date: Fri, 30 Apr 2021 11:49:30 +0000
author: muhammadmustafa
summary: "Ustal własną publiczną/prywatną sieć blockchain do zarządzania i monitorowania transakcji cyfrowych i monitorowania biznesowych. Nauczmy się skonfigurować Konsensys Quorum na LocalHost." 
url: /pl/how-to-setup-consensys-quorum-blockchain-network-locally/
categories: ['Blockchain Platforms']
---

## Ustanowienie własnej publicznej/prywatnej sieci blockchain do zarządzania transakcjami cyfrowymi i monitorującymi biznesową. Nauczmy się skonfigurować Konsensys Quorum na LocalHost.

{{< figure align=center src="images/quorum.png" alt="Konsensys Quorum">}}


## Przegląd
W niedawnej przeszłości opublikowaliśmy posty na blogu na niektóre tematy związane z Blockchain, takie jak [Top 5 Open Source Blockchain w 2020 r.][1], [Podstawowy przewodnik na temat utworzenia Ethereum Smart Contract][2], [Jak zdecentralizowane Technologia aktualizuje twoją strategię biznesową][3] i [Przewodnik dla początkujących o konfiguracji węzła Ethereum na LocalHost][4]. W tym artykule zobaczymy, jak skonfigurować Consensys Quorum Blockchain Network na Localhost, obejmując następujące punkty.
  * **[Krótkie wprowadzenie Konsensys Quorum][5]**
  * **[Jakie są warunki wstępne i **procedura instalacji **?][6]** 
  * **[Jak założyć sieć?][7]**
  * **[wniosek][8]**

##  **Krótkie wprowadzenie Consensys Quorum** {#Introduction}
[Consensys Quorum][9] to platforma typu open source oparta na **decentralizowanej technologii księgi **. Zapewnia jednak całkowicie przyjazne dla programistów środowisko do budowania aplikacji opartych na blockchain, które obsługują szybkie i wysokie przejście transakcji. Jest to  **Ethereum **  oparte na rozszerzonym i oferuje wiele wtyczek. Ponadto ten rozproszony system open source ma wysokie standardy bezpieczeństwa i prywatności. Ponadto istnieje wiele potężnych funkcji, takich jak pozwolenie na interfejsy API i monitorowanie. Ponadto ta ** platforma DLT**  jest samodzielna i zawiera szczegółową dokumentację dotyczącą rozwoju i wdrażania. Kod źródłowy tego bezpłatnego oprogramowania jest dostępny na [GitHub][10].
Consensys Quorum oferuje następujące ważne funkcje:
  * Architektura wtyczki
  * Ethereum
  * Bezpieczne
  * Samodzielnie
  * Sieć publiczna/prywatna
[Dowiedz się więcej o Consensys Quorum][11]

## ** **Jakie są warunki wstępne i procedura instalacji?** **   {#Wymagania wstępne}
W tej sekcji zainstalujemy wymagane zależności i skonfigurujemy lokalne środowisko. Przed przejściem do następnego kroku upewnij się, że zainstalowałeś następujące warunki wstępne:
  * Nodejs v10+
  * Docker
  * Kompozycja dokera
Po zainstalowaniu warunków wstępnych uruchom następujące polecenie, aby uruchomić narzędzie QuickStart oparte na CLI.
```
npx quorum-dev-quickstart
```
Odpowiedz jednak na pytania, aby zakończyć instalację, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-04-30-at-03.32.07-1024x677.png" alt="Konsensys Quorum">}}


## ** **Jak założyć sieć?** **   {#start}
Teraz mamy kod źródłowy. Kolejnym krokiem jest uczynienie sieci na żywo.
Uruchom następujące polecenie, aby dostać się do katalogu głównego.
```
cd quorum-test-network
```
Następnie uruchom następujące polecenie, aby uruchomić wszystkie kontenery Docker:
```
./run.sh
```

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.31-1024x305.png" alt="Konsensys Quorum">}}

Po uruchomieniu wszystkich kontenerów Docker możesz uzyskać dostęp do Eksploratora bloków na następujący adres:
```
http://localhost:25000
```
[] ()
Ponadto możesz wchodzić w interakcje z Eksploratorem bloków, jak pokazano na poniższym obrazku.

{{< figure align=center src="images/Screenshot-2021-04-26-at-20.42.03-1024x615.png" alt="system rozproszony open source">}}

Podobnie możesz zatrzymać całą sieć, uruchamiając następujące polecenie:
```
./stop.sh 
```

## Wniosek   {#Conclusion}
To jest koniec tego samouczka. Przede wszystkim konsensys Ethereum Quorum to  **cyfrowa technologia finansowa**  opracowana specjalnie dla przypadków użycia finansowego. Ma algorytm konsensusowy oparty na głosowaniu. Jednak głównym motywem tej zdecentralizowanej technologii jest budowanie wydajnych rozwiązań dla przedsiębiorstw.
Wreszcie [Containerize.com][12] opublikował wiele technicznych postów na blogu i samouczkach na temat popularnych produktów open source na [blog.containeryze.com][13]. Dlatego trzymaj się kategorii [platform blockchain][14] do regularnych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Ethereum][15]
  * [Hyperledger Fabric][16]
  * [OpenChain][17]
  * [Ripple][18]
  * [Multichain][19]
  * [Consensys Quorum][9]

  
[1]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[2]: https://blog.containerize.com/
[3]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
[4]: https://blog.containerize.com/2020/12/23/a-beginners-guide-to-setup-ethereum-node-on-localhost/
[5]: #Introduction
[6]: #pre-requisites
[7]: #start
[8]: #Conclusion
[9]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[10]: https://github.com/ConsenSys/quorum
[11]: https://consensys.net/quorum/
[12]: https://www.containerize.com/
[13]: https://blog.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/
[15]: https://products.containerize.com/blockchain-platforms/ethereum
[16]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[17]: https://products.containerize.com/blockchain-platforms/openchain
[18]: https://products.containerize.com/blockchain-platforms/ripple
[19]: https://products.containerize.com/blockchain-platforms/multichain
