---
title: "Jak skonfigurować formularz bootstrap Form.io na LocalHost" 
seoTitle: "Jak skonfigurować formularz bootstrap Form.io na LocalHost" 
description: "Przejrzyj ten artykuł i dowiedz się, jak skonfigurować Formio na LocalHost. Ten twórca formularza Bootstrap jest bezpłatny, rozszerzony i oferuje integracje stron trzecich." 
date: Fri, 25 Jun 2021 10:30:28 +0000
author: muhammadmustafa
summary: "Zbuduj formy specyficzne dla zadań i konfigurowalne za pomocą konstruktora formularzy przeciągania i upuszczenia HTML. Formio jest samowystarczalny, napędzany interfejsem API zapewnia formularze i zarządzanie danymi." 
url: /pl/how-to-setup-bootstrap-form-creator-formio-on-localhost/
categories: ['Form']
---

## zbuduj formularze specyficzne dla zadań i dostosowywane za pomocą konstruktora formularzy przeciągania i upuszczenia HTML. Formio jest samowystarczalny, napędzany interfejsem API zapewnia formularze i zarządzanie danymi.

{{< figure align=center src="images/formio-1.png" alt="Bootstrap Form Creator">}}


## **Przegląd**
W szybko rozwijających się potrzebach istnieje wiele operacji, które bezpośrednio należą do publicznego handlu i zaangażowania. To zaangażowanie może być fizyczne lub wirtualne. Czasami chodzi o świadczenie usług, a czasem chodzi o gromadzenie danych lub opinii. Z drugiej strony organizacje korporacyjne mają tendencję do gromadzenia danych klientów na temat ich produktów i usług. Dlatego ilość danych zależy od zasięgu odpowiednich odbiorców. Następnie zarządzanie danymi jest kolejnym krytycznym zadaniem i wymaga ogromnej uwagi.
Jednak sektory korporacyjne używają formularzy online do zaspokojenia potrzeb związanych z gromadzeniem danych. Istnieje wiele stron internetowych, które mogą zawierać wiele formularzy, takich jak formularz kontaktowy, formularz skargi, formularz opinii klientów, formularz wstępu i wiele innych. Teraz kłopot staje się kłopot z budowaniem, zarządzaniem tymi formularzami i danymi przesyłania. Nadchodzi [Form.io][1]. Form.io to twórca formularza open source, który zapewnia możliwości budowania i zarządzania danymi. W niedawnej przeszłości opublikowaliśmy artykuł, który obejmował [Top 5 Open Source Online Builders w roku 2020][2]. W tym poście na blogu zbadamy twórcę formularza bootstrap wraz z procesem konfigurowania na LocalHost, obejmując następujące punkty.
  * **[Co to jest forme.io?oru 3]**
  * **[Jak skonfigurować formę.io na LocalHost?][4]**
  * **[Jak działa forma.io?][5]**
  * **[wniosek][6]**

## Co to jest form.io?   {#Co}
Form.io to bezpłatny konstruktor formularzy open source. Jest ono hostowane, wielojęzyczne i wieloczęściowe. Ten  **HTML Forms Creator **  oferuje uprawnienia oparte na role dla użytkowników i formularzy. Form.io zapewnia uwierzytelnianie OAuth i pozwala użytkownikom zalogować się za pomocą popularnych dostawców tożsamości, takich jak Google i Facebook. Ponadto ten konstruktor formularzy HTML oparty jest na architekturze bez serwera, a użytkownicy mogą generować i osadzić formularze w innych aplikacjach, po prostu umieszczając pojedynczy wiersz kodu. Jeśli chodzi o interfejs użytkownika, oferuje logiczny interfejs użytkownika z funkcjami przeciągania i upuszczania. Z jednej strony istnieją różne elementy HTML, które użytkownicy mogą przeciągnąć i upuszczać, aby zbudować potrzebną formę. Użytkownicy mogą wstrzyknąć niestandardowy JavaScript, aby uzyskać ulepszoną funkcjonalność. Ponadto użytkownicy mogą modyfikować wygląd i styl formularza za pomocą CSS. Istnieją postanowienia kontrolne zgłoszenia i dostępu formularzy. Jednak ten bezpłatny twórca formularzy HTML jest napisany w JavaScript, a cały kod źródłowy jest dostępny na [Github][7].
FORM.io zapewnia szeroką ocenę funkcji. Kluczowe funkcje są wymienione poniżej.
  * Zgłoszenie formularza e -mailowego
  * Zarządzanie danymi
  * Dostawcy OAuth
  * Formularze wbudowane
  * Przyjazny układ

## Jak skonfigurować formę.io na LocalHost?   {#Lokalny Gospodarz}
W tej sekcji samouczka  **Form Builder **  zobaczymy, jak skonfigurować formę.io na LocalHost. Jest łatwy do skonfigurowania, ponieważ zapewnia kompleksową dokumentację dotyczącą wdrażania i rozwoju.
Przed pójściem dalej upewnij się, że zainstalowałeś następujące warunki wstępne.
  * Git
  * NodeJS
  * MongoDB
Po zainstalowaniu powyższych warunków wstępnych otwórz terminal Uruchom następujące polecenia:
```
mkdir formio<br>cd formio
```
Teraz uruchom następujące polecenie, aby sklonować kod źródłowy tej aplikacji:
```
git clone https://github.com/formio/formio.git
```
Po udanym klonie uruchom następujące polecenia, aby zainstalować zależności:
```
cd formio <br>npm install
```
Następnie uruchom aplikację z następującym poleceniem:
```
npm start 
```
To polecenie wyświetli następujące dane wyjściowe z niektórymi monitami użytkownika:

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.09.46-1024x472.png" alt="Samouczek budowniczy formularza">}}

Możesz uzyskać dostęp do aplikacji w przeglądarce na następujący adres.
```
http://localhost:3001 
```
Otworzy stronę logowania. Możesz zalogować się z poświadczeniami, które wprowadziłeś podczas procesu instalacji.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.29.11-1024x576.png" alt="Bootstrap Form Creator">}}


## Jak działa forma.io?   {#praca}
Ten segment opisuje mechanizm pracy [Form.io][1]. Cały ekosystem tego projektanta formularza opiera się na komponentach i przyjaznym dla programistów. Jest rozszerzalny i zapewnia spokojny interfejs dla aplikacji innych firm. Zobaczmy więc, jak tworzyć formularze w tym  **Builder formularzy ** .
Po zalogowaniu wylądujesz na następnej stronie.

{{< figure align=center src="images/Screenshot-2021-06-25-at-12.57.18-1024x487.png" alt="Przeciągnij i upuść konstruktor formularzy HTML">}}

Teraz kliknij przycisk „Nowy formularz” i utwórz pierwszy formularz. Pokazana zostanie następna strona. Możesz zobaczyć, że po lewej stronie znajduje się panel, który zawiera element HTML dla formularzy. Zawiera cztery sekcje, takie jak „podstawowe komponenty”, „specjalne komponenty” i wiele innych.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.32-1024x527.png" alt="HTML Form Creator">}}

Możesz ustawić nazwę formularza wraz z innymi atrybutami. Teraz, jeśli wybierzesz element formularza od lewej strony i upuści go na środek, zobaczysz następujące okno dialogowe.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.01.55-1024x574.png" alt="Bootstrap Form Creator">}}

Możesz zobaczyć, że umożliwia modyfikację motywu formularza, sprawdzania poprawności i innych modyfikacji. Po zbudowaniu formularza naciśnij przycisk „Utwórz”, a wylądujesz na wygenerowanym formularzu.

{{< figure align=center src="images/Screenshot-2021-06-25-at-13.12.48-1024x519.png" alt="Przeciągnij i upuść konstruktor formularzy HTML">}}

Wygenerowany formularz ma różne opcje, w których można edytować formularz i wyświetlić przesłane dane. Na karcie „Forma Actions” możesz ustawić haczyki przed przesyłaniem formularza przed lub opublikowania, takie jak e -mail, Webhook i wiele innych. Przede wszystkim każdy wygenerowany formularz jest wyposażony w interfejs API, a użytkownicy mogą do niego uzyskać dostęp, przekazując identyfikator formularza.

## Wniosek   {#Conclusion}
To jest koniec tego samouczka budowniczego formularzy. Mam nadzieję, że dowiedziałeś się o tym twórcy formularzy bootstrap dotyczących jego funkcji, wdrażania i użytkowania. Ponadto istnieje wiele budowniczych form open source, które zapewniają szeroką gamę funkcji. Jednak bardzo ważne jest, aby wybrać najlepszy produkt, który spełnia potrzeby biznesowe. Dlatego w tym poście na blogu zaobserwowaliśmy, że Form.io zapewnia dostosowania dotyczące funkcjonalności, układu i stylu. Umożliwia generowanie wielofunkcyjnych formularzy, które możesz hostować na swoich stronach internetowych na żywo. W rzeczywistości możesz gromadzić dane w dobrze zorganizowany sposób we własnej bazie danych lub w dowolnej innej opcji pamięci.
Wreszcie [ **Containerize.com ** ][8] jest w spójnym procesie pisania artykułów na dalsze tematy i produkty open source. Dlatego prosimy o kontakt z tą kategorią [formularza][9] w celu regularnych aktualizacji.

## Badać
  * **[form.io][1]**
  * **[Orbeon][10]**
  * **[OHMYFORM][11]**
  * **[Webiny][12]**
  * **[FormTools][13]**
  * **[FormBuilder][14]**
  * **[Forma alpaca][15]**
  *[ **Zautomatyzuj operacje biznesowe za pomocą oprogramowania bezpłatnego i open source ** ][16]
  *[ **Top 5 Open Source Online Builders w roku 2020 ** ][2]

  
[1]: https://products.containerize.com/form/formio/
[2]: https://blog.containerize.com/form/top-5-open-source-online-form-builders-in-year-2020/
[3]: #what
[4]: #localhost
[5]: #work
[6]: #Conclusion
[7]: https://github.com/formio/formio
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/form/
[10]: https://products.containerize.com/form/orbeon/
[11]: https://products.containerize.com/form/ohmyform/
[12]: https://products.containerize.com/form/webiny/
[13]: https://products.containerize.com/form/formtools/
[14]: https://products.containerize.com/form/formbuilder/
[15]: https://products.containerize.com/form/alpaca/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
