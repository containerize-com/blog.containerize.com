---
title: "Co to jest Testnet i jak go wdrożyć | Ethereum Testnet '" 
seoTitle: "Co to jest Testnet i jak go wdrożyć | Ethereum Testnet" 
description: "Co to jest Testnet? Ten przewodnik dotyczy tego, jak skonfigurować węzeł Ethereum na Localhost. Blockchain to sieć węzłów, które utrzymują historię wszystkich transakcji." 
date: Wed, 23 Dec 2020 11:32:05 +0000
author: muhammadmustafa
summary: "Ethereum to sieć Peer-to-Peer z blockchain open source połączonych węzłów. Nauczmy się wdrażać i wchodzić w interakcje z węzłem Ethereum na serwerze lokalnym." 
url: /pl/what-is-testnet-how-to-deploy-it-ethereum-testnet/
categories: ['Blockchain Platforms']
---

## Ethereum to sieć Peer-to-Peer z blockchain open source połączonych węzłów. Nauczmy się wdrażać i wchodzić w interakcje z węzłem Ethereum na serwerze lokalnym.

{{< figure align=center src="images/ether.png" alt="Co to jest testnet">}}

W naszych poprzednich postach na blogu pisaliśmy na wiele tematów, które obejmują [Technologia Blockchain for Business][1], [Pisanie podstawowego inteligentnego kontraktu][2] i [popularne platformy blockchain][3]. Istnieją dalsze tematy, o których napiszymy w najbliższej przyszłości, ponieważ  **decentralizowana technologia księgi**  zyskuje na upływu czasu. Ludzie zaczynają teraz interesować się platformami zarządzania aktywami cyfrowymi ze względu na bezpieczeństwo i przejrzystość. Ponadto transakcje cyfrowe są identyfikowalne, niezmienne, a takie czynniki dają pewności ludziom w zakresie niezawodności tej technologii. Istnieją trzy rodzaje blockchain publicznych, prywatnych i uprawnionych. Użytkownicy mogą jednak przyjąć dowolny typ w zależności od przypadków użycia.
Pojawienie się tej technologii przyniosło ogromną zmianę w sektorze bankowym, ponieważ zmieniła sposób transakcji finansowych. W tym poście na blogu porozmawiamy o Blockchain Ethereum w sprawie konfigurowania węzła Ethereum na Localhost i zobaczymy, jak wchodzić w interakcje z siecią testową. Omówimy następujące kluczowe punkty.
*  **Co to jest testnet?**  
*  **[Jak skonfigurować blockchain Ethereum?][4]**  
*  **[Jak wchodzić w interakcje z blockchainem Ethereum?][5]**  
*  **[wniosek][6]**  

## Co to jest Testnet? {#tetstnet}

W tym poście na blogu będziemy wdrożyć węzeł Ethereum na Localhost. Ethereum ma wiele sieci, sieć produkcyjna nazywa się Mainnet, a sieć używana do celów testowych nazywa się Testnet. Większość zdecentralizowanych aplikacji opiera się na blockchain [7]. Inteligentna umowa jest integralnym elementem tej rozproszonej infrastruktury. Ponadto Blockchain to sieć komputerów zwanych „węzłami”. Jednak każdy węzeł zawiera kopię blockchain, a zatem uczestniczy w sieci. Blockchain Ethereum ma również swoją własną kryptowalutę zwaną „eter”. Wszystkie transakcje są zabezpieczone kryptograficznie. Ponadto jest to kompletna technologia księgi, która nigdy się nie zamyka ani nie jest uszkodzona. Pozwala pisać inteligentne umowy i zdecentralizowane aplikacje (DAPPS), które działają na węzłach blockchain Etherum.
Ta rozproszona sieć blockchain open source wykorzystuje algorytm konsensusu o nazwie Proof of Work (Pow). Ponadto architektura Ethereum obejmuje pięć warstw, takich jak Ethereum Virtual Machine, Ethereum Client API, inteligentne kontrakty, węzły Ethereum i aplikacje użytkowników końcowych. Ethereum Virtual Machine oferuje oprogramowanie i architekturę, które rozpoznają inteligentne umowy. Inteligentne umowy to oprogramowanie regulujące transakcje. Istnieje silne poparcie dla firm Blockchain Ethereum, a firmy Fortune 500 wykazały duże zainteresowanie rozwojem na większą skalę przy użyciu tej technologii. Ponadto Ethereum jest napisane w języku Go, a jego kod źródłowy jest dostępny na [Github][8]. Dostępna jest cała dokumentacja dotycząca wdrażania i rozwoju, ponieważ ma tętniącą życiem społeczność.

## Jak skonfigurować Ethereum Blockchain? {#setup}

Teraz jesteśmy świadomi tego, co jest Testnet. W tej sekcji skonfigurujemy węzeł Ethereum na naszej maszynie lokalnej. Przed pójściem dalej upewnij się, że zainstalowałeś następujące warunki wstępne.
  * [HOMEBREW][9] (dla macOS)

  * [Go7] (brew install go)
Po wprowadzeniu warunków, uruchom następujące polecenie, aby sklonować kod źródłowy:
```
git clone https://github.com/ethereum/go-ethereum
```
Po udanym klonie przejdź do katalogu:
```
cd go-ethereum
```
Teraz uruchom następujące polecenie, aby zbudować program Geth:
```
make geth
```
{{_LINE_31_}}
{{_LINE_32_}}
    Notatka
{{_LINE_34_}}
  W przypadku jakiegokolwiek błędu zainstaluj Xcode, uruchamiając Xcode-Select-Install i spróbuj ponownie
{{_LINE_36_}}
Tak więc skonfigurowałeś wszystkie warunki wstępne i kod źródłowy. Dlatego uruchom następujące polecenie, aby uruchomić węzeł:
```
build/bin/geth
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.19.44-PM-1024x409.png" alt="Węzeł Ethereum">}}


## Jak wchodzić w interakcje z blockchainem Ethereum? {#interact}

W tej sekcji mówi o interakcji z działającym węzłem Ethereum, który jest w pełni zsynchronizowany z blockchainem. Możemy użyć oprogramowania GETH do interakcji i wysyłania poleceń do sieci testowej.
W tym celu uwzględnijmy zmienną środowiskową Build/Bin/Geth do $ Path, uruchamiając następujące polecenia:
```
cd build/bin/<br />sudo scp geth /usr/local/bin
```
Następnie zatrzymaj serwer, który wychowałeś powyżej i uruchom sieć testową z następującymi flagami:
geth - -testnet - -rpc - -rpcapi = "db, eth, net, web3, osobiste, Web3"
{{_LINE_46_}}

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-1.40.12-PM-1024x314.png" alt="Co to jest testnet">}}

Następnie musisz otworzyć nowe okno terminala i dołączyć polecenie Geth do węzła, uruchamiając następujące polecenie:
```
geth attach http://127.0.0.1:8545
```

{{< figure align=center src="images/Screen-Shot-2020-12-22-at-2.19.49-PM-1024x120.png" alt="Digital Asset Management Platform">}}

Geth otworzy okno konsoli, w którym możesz wchodzić w interakcje z siecią testową. Poniższe polecenie utworzy konto, które posiada wirtualną walutę i parę klucza publicznego/prywatnego:
```
personal.newAccount()
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.51.05-AM-1-1024x397.png" alt="Zdecentralizowana technologia księgi">}}

Aby sprawdzić swoje konto, możesz uruchomić następujące polecenie:
```
eth.accounts
```

{{< figure align=center src="images/Screen-Shot-2020-12-21-at-1.53.45-AM-1024x408.png" alt="Co to jest testnet">}}

Podobnie istnieje wiele poleceń, których można użyć do interakcji z blockchainem Ethereum.

## Wniosek {#Wniosek}

Oto koniec tego samouczka. Nauczyliśmy się  **What Is Testnet** i konfiguracja procesu węzła Ethereum na komputerze lokalnym. Blockchain Ethereum jest uogólnionym rozwiązaniem dla większości zdecentralizowanych zastosowań. Większość firm i departamentów rządowych ma tendencję do przyjęcia tej technologii, aby zapewnić solidność, przejrzystość, dostępność i odpowiedzialność. Ponadto ten  **samouczek Blockchain**  naprawdę pomoże Ci, jeśli planujesz rozpocząć rozwój Ethereum Blockchain, ponieważ wykorzystuje inteligentne umowy. Blockchain Etheruem jest bardziej stabilny i popularny, ponieważ ma tysiące węzłów na żywo. Ponadto przedsiębiorstwa mogą łatwo rozwijać i wdrożyć sieci Blockchain Ethereum bez spędzania dodatkowego czasu. Innym czynnikiem wiarygodności Ethereum jest to, że oferuje on opracowanie inteligentnych kontraktów w sposób, którego nie oferują inne **platformy zarządzania aktywami cyfrowymi**  .
Najnowsze aktualizacje w sieci Ethereum sprawiły, że sieć była bardziej opłacalna i wydajna. W rzeczywistości w chmurze dostępnych jest o wiele więcej materiałów, które pokazują ważne aspekty Etheruem w zakresie celów inwestycyjnych i rozwojowych. Dla programistów zapewnia ekosystem przyjazny dla programistów z gotowymi narzędziami. Dla górników istnieje nagroda w postaci eteru, ilekroć wydobywają nowy blok do blockchain. Ponadto [Containerize.com][10] opublikował wiele technicznych postów i samouczków na temat popularnych produktów open source na [blog.containeryze.com][11]. Dlatego pozostań w kontakcie z kategorią [platform Blockchain][12] w celu regularnych aktualizacji.

## Badać
Możesz znaleźć istotne następujące linki:
  * [Ethereum][7]
  * [What is Ethereum? (ETH)][20]
  * [Hyperledger Fabric][13]
  * [OpenChain][14]
  * [Ripple][15]
  * [Multichain][16]
  * [Consensys Quorum][17]
  * [Jak konfigurować lokalnie sieć Blockchain Quorum Blockchain][18]
  * [Top 5 platform blockchain open source w 2020 r.][3]
  * [Podstawowy przewodnik na temat utworzenia Ethereum Smart Contract][2]
  * [Jak zdecentralizowana technologia aktualizuje twoją strategię biznesową][19]



 [1]: https://blog.containerize.com/2020/11/27/how-blockchain-technology-can-upgrade-your-business-strategy/
 [2]: https://blog.containerize.com/
 [3]: https://blog.containerize.com/blockchain-platforms/top-5-open-source-blockchain-platforms-in-2020/
 [4]: #setup
 [5]: #interact
 [6]: #Conclusion
 [7]: https://products.containerize.com/blockchain-platforms/ethereum
 [8]: https://github.com/ethereum/go-ethereum
 [9]: https://brew.sh/
 [10]: https://www.containerize.com/
 [11]: https://blog.containerize.com/
 [12]: https://products.containerize.com/blockchain-platforms/
 [13]: https://products.containerize.com/blockchain-platforms/hyperledger-fabric
 [14]: https://products.containerize.com/blockchain-platforms/openchain
 [15]: https://products.containerize.com/blockchain-platforms/ripple
 [16]: https://products.containerize.com/blockchain-platforms/multichain
 [17]: https://products.containerize.com/blockchain-platforms/consensys-quorum
 [18]: https://blog.containerize.com/blockchain-platforms/how-to-setup-consensys-quorum-blockchain-network-locally/
 [19]: https://blog.containerize.com/2020/11/27/how-decentralized-technology-upgrades-your-business-strategy/
 [20]: https://docs.koinize.com/cryptocurrencies/ethereum-eth/
