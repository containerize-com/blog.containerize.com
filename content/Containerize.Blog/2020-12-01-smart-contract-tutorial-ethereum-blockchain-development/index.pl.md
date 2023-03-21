---
title: "Samouczek inteligentnego kontraktu | Rozwój Blockchain Ethereum" 
seoTitle: "Samouczek inteligentnego kontraktu | Rozwój Blockchain Ethereum" 
description: "Ten inteligentny samouczek umowy opracowuje podstawowe kroki w celu tworzenia inteligentnych umów Ethereum. Ethereum to open source, bezpieczna, rozproszona sieć blockchain." 
date: Tue, 01 Dec 2020 20:27:48 +0000
author: muhammadmustafa
summary: "Ethereum to dojrzała platforma do tworzenia inteligentnych umów i zdecentralizowanych aplikacji (DAPPS). Wykonaj następujące kroki, aby utworzyć, przetestować i wdrożyć inteligentne umowy." 
url: /pl/smart-contract-tutorial-ethereum-blockchain-development/
categories: ['Blockchain Platforms']
---

## Ethereum to dojrzała platforma do tworzenia inteligentnych umów i zdecentralizowanych aplikacji (DAPPS). Wykonaj następujące kroki, aby utworzyć, przetestować i wdrożyć inteligentne umowy.

{{< figure align=center src="images/contract.png" alt="Samouczek inteligentnego kontraktu">}}


## Przegląd
W niedawnej przeszłości opublikowaliśmy [post na blogu][1], który podkreśla wpływ i znaczenie technologii blockchain. Jest kolejny interesujący post na blogu [co to jest NFT? |. Tokeny nieokreślone wyjaśniły][2]. Technologia Ledger Distributed opiera się na niektórych podstawowych pojęciach, takich jak inteligentne kontrakty, węzły, wydobycie, algorytmy konsensusowe, transakcje cyfrowe i sieci peer-to-peer. Ponieważ jest to zatem open source, istnieje ogromne okno dla rozszerzenia dotyczących przypadków użycia. W rzeczywistości istnieje wiele platform zarządzania zasobami cyfrowymi i bezpłatnymi, które są rozpowszechniane i wymagają pewnego oprogramowania, aby rządzić transakcjami.
W tym inteligentnym samouczku kontraktowym nauczymy się, jak budować inteligentny kontrakt Ethereum, obejmując następujące punkty pocisków.
* [**Co to jest inteligentny kontrakt?**][3]
* [**Jak zbudować podstawowy inteligentny kontrakt?**][4]
* [**Jak uruchomić i wdrażać inteligentny kontrakt?**][5]
* [**Wniosek**][6]

## Co to jest inteligentny kontrakt?   {#Co}
Inteligentna umowa to program, który działa w blockchain, aby rządzić transakcjami cyfrowymi. Ten kawałek kodu zawiera zdefiniowane reguły i procedury, które zapewniają przejrzystość transakcji. Każda inteligentna umowa zawiera adres, a adres ten służy do uzyskania dostępu do dowolnej funkcji konkretnej inteligentnej umowy. Ponadto inteligentne umowy wprowadzają przejrzystość, zaufanie i bezpieczeństwo do sieci blockchain. Te elementy kodu wykonują automatycznie po spełnieniu określonych warunków.
Jednak każdy programista może napisać inteligentny kontrakt i wdrożyć ją w sieci. Ponadto inteligentne umowy sprawiają, że procesy są dość solidne, ponieważ nie ma zależności w wykonywaniu tych fragmentów kodu. Ponadto inteligentne umowy przechowują niezbędne informacje związane z każdą transakcją, którą uczestnicy mogą odzyskać i weryfikować. Wiele branż, takich jak opieka zdrowotna, bankowość, bardzo przyjmuje tę rozproszoną technologię księgi. Instytucje rządowe chcą również wdrażać zdecentralizowane aplikacje (DAPPS) w celu wprowadzenia autentyczności i przejrzystości w systemie wyborczym. Istnieje wiele [platform blockchain][7], takich jak [Ethereum][8], [Ripple][9], [Corda][10], a jednak jeszcze w tym przewodniku zbudujemy nasz pierwszy inteligentny kontrakt na Ethereum.

## Jak zbudować podstawową inteligentną umowę?   {#zbudować}
W tej sekcji Smart Contract Tutorial zobaczymy kroki w celu skonfigurowania środowiska dla naszej pierwszej inteligentnej umowy.
Inteligentne umowy mogą być napisane w wielu językach, ale użyjemy [solidności][11], który jest językiem na wysokim poziomie do pisania inteligentnych umów.
Użyjemy [Ethereum Studio][12], czyli IDE na podstawie internetowej. Służy do pisania inteligentnych umów, a także zdecentralizowanych aplikacji do interakcji z inteligentnymi umowami. Zapewnia wstępnie zbudowane szablony projektów, w których możesz od razu zacząć pisać swoją logikę.
Otwórz więc [Ethereum Studio][12] IDE w przeglądarce, a zobaczysz następujący interfejs.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.01.30-PM-1024x554.png" alt="Samouczek inteligentnego kontraktu">}}

Wybierzmy opcję „Hello World” i stwórz nasz pierwszy projekt. Możesz zobaczyć strukturę katalogu. Ponadto po prawej stronie znajduje się okno wyjściowe.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.03.12-PM-1024x578.png" alt="Samouczek inteligentnego kontraktu">}}

Istnieją dwa foldery „App” i „kontrakty”.
Folder aplikacji należy do aplikacji internetowej i zawiera następujące pliki.
***app.css**: do stylizacji układu
***app.html**: dla strony głównej
***App.js**: zawiera logikę biznesową, aby połączyć front z inteligentnym kontraktem
Podobnie folder kontraktów zawiera plik źródłowy umowy.
Otwórzmy teraz plik HelloWorld.sol, który można znaleźć w plikach/kontraktach/helloworld.sol. Zasadniczo jest to główny plik zawierający kod inteligentnego kontraktu napisanego w solidności. Możesz zmodyfikować kod, jeśli chcesz, zostawimy go takim, jakim jest.

## Jak uruchomić i wdrożyć inteligentną umowę?   {#wdrożyć}
W tej sekcji inteligentnego samouczka kontraktowego zobaczymy, jak uruchomić i wdrożyć inteligentną umowę. Ethereum Studio kompiluje kod solidności w kodzie bajtów. Dlatego zapisz kod i wdrożymy naszą pierwszą inteligentną umowę.
Na lewym panelu bocznym naciśnij ikonę rakiety.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.32-PM-1024x550.png" alt="Co to jest inteligentny kontrakt">}}

Możesz skonfigurować i ustawić początkowe wartości inteligentnego kontraktu, jak pokazano poniżej.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.41.45-PM-1024x572.png" alt="Ethereum Smart kontrakt">}}

Naciśnij przycisk „Zapisz” i naciśnij przycisk „Wdrożenie”, aby wdrożyć inteligentną umowę. Zobaczysz następujące dane wyjściowe i komunikat w oknie konsoli na dole. Okno konsoli podaje dane, takie jak inteligentny adres kontraktowy, Nonce, Gasslimit.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.54.29-PM-733x1024.png" alt="Co to jest inteligentny kontrakt">}}

Następnie na panelu znajduje się inna opcja po lewej stronie i jest to opcja interakcji. Ta opcja umożliwia interakcję z inteligentnym kontraktem, wywołując jej funkcję i przekazując wartości.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-5.58.00-PM-1024x578.png" alt="Co to jest inteligentny kontrakt">}}

Ponadto istnieje aplikacja front-end, która pozwala użytkownikom interakcję z inteligentnym kontraktem z przeglądarki. Ta aplikacja internetowa nazywa się zdecentralizowaną aplikacją. Możesz przekazać wartość i zobaczyć okno konsoli.

{{< figure align=center src="images/Screen-Shot-2020-11-30-at-6.02.38-PM-746x1024.png" alt="Co to jest inteligentny kontrakt">}}


## Wniosek   {#Con}
To prowadzi nas do końca tego inteligentnego samouczka kontraktowego. Mam nadzieję, że ten artykuł pomógł ci zrozumieć kluczowe kroki budowania i wdrażania Ethereum Smart Contrar. Ponieważ technologia Blockchain ewoluuje w wysokim tempie, nadszedł czas, aby uzyskać silną praktyczną praktykę nad systemem echo blockchain. Ta rozproszona technologia księgi jest wysoce konfigurowalna i rozszerzalna. Ten post na blogu naprawdę pomoże ci, jeśli chcesz nauczyć się inteligentnego rozwoju kontraktów. Ponadto istnieje wiele pomocnych samouczków i platform zarządzania zasobami cyfrowymi typu open source wymienionych w sekcji „Explore” poniżej.
Ostatecznie [Containerize.com][13] jest w pełni poświęcony kompilacji listy oprogramowania open source. Istnieje wiele samouczków i postów na blogu na temat oprogramowania typu open source, a wiele postów na blogu znajduje się w przygotowaniu. Dlatego prosimy o kontakt z kategorią [platform Blockchain][7] w celu regularnych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Ethereum][8]
  * [Hyperledger Fabric][14]
  * [OpenChain][15]
  * [Ripple][16]
  * [Multichain][17]
  * [Consensys Quorum][18]
  * [Co to jest NFT? |. Wyjaśniono tokeny nieokreślone][2]
  * [Jak konfigurować lokalnie sieć Blockchain Quorum Blockchain][19]
  * [Top 5 platform blockchain open source w 2020 r.][20]
  * [Podstawowy przewodnik na temat utworzenia Ethereum Smart Contract][21]
  * [Jak zdecentralizowana technologia ulepsza twoją strategię biznesową][22]
  * [Jak konfigurować lokalnie sieć Blockchain Quorum Blockchain][19]

  
[1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
[2]: https://blog.containerize.com/blockchain-platforms/what-is-nft-non-fungible-tokens-explained/
[3]: #what
[4]: #build
[5]: #deploy
[6]: #con
[7]: https://products.containerize.com/blockchain-platforms/
[8]: https://products.containerize.com/blockchain-platforms/ethereum
[9]: https://ripple.com/
[10]: https://www.corda.net/
[11]: https://docs.soliditylang.org/en/v0.7.4/
[12]: https://studio.ethereum.org/
[13]: https://www.containerize.com/
[14]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
[15]: https://products.containerize.com/blockchain-platforms/openchain
[16]: https://products.containerize.com/blockchain-platforms/ripple
[17]: https://products.containerize.com/blockchain-platforms/multichain
[18]: https://products.containerize.com/blockchain-platforms/consensys-quorum
[19]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
[20]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
[21]: https://blog.containerize.com/
[22]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
