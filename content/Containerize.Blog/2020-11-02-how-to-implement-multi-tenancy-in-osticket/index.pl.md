---
title: "Dostosowywanie Osticket-wdrożenie wielopoziomowej w Osticket" 
seoTitle: "Dostosowywanie Osticket-wdrożenie wielopoziomowej w Osticket" 
description: "Wdrożenie wielozadaniowości w Osticket może zaoszczędzić koszty i wykorzystanie zasobów. W tym artykule wykonamy dostosowanie Osticket, aby osiągnąć wielokrotność." 
date: Mon, 02 Nov 2020 13:33:19 +0000
author: bilalahmed
summary: "Wielopoziomowy Helpdesk Osticket pozwala tworzyć wielu najemców z jednej instalacji. To sprawia, że ​​optymalnie wykorzystuje zasoby serwera WWW." 
url: /pl/how-to-implement-multi-tenancy-in-osticket/
categories: ['Help Desk']
---

## Multi-lokal helpdesk pozwala tworzyć wielu najemców z jednej instalacji. To sprawia, że ​​optymalnie wykorzystuje zasoby serwera WWW.

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket.png" alt="Dostosowanie Osticket - wdrożyć wielozadaniowość w Osticket">}}

W tym artykule omówimy, jak dostosowywać Osticket w celu wdrożenia wielozadaniowości. Ten post obejmie następujące tematy:
  * [Osticket Przegląd][1]
  * [Omówienie wielopozłaniowe][2]
  * [Korzyści z wielokrotności][3]
  * [Wdrożenie][3]
  * [Wniosek][4]

## Przegląd Osticket: {#osticket}

[Osticket][5] to oprogramowanie internetowe internetowe oparte na obsłudze klienta internetowego. Zapewnia intuicyjny panel sterowania i komponent raportowania w czasie rzeczywistym. Ma łatwy w użyciu moduł zarządzania zapytań. Umożliwia to tworzenie zapytań z telefonu, e-maila i formularzy internetowych. Który oferuje wiele opcji, które pomogą dostosować wszystkie części obsługi klienta, takie jak komentarze i powiadomienia e -mail.

## Omówienie wielozadaniowości: {#multitenancy}

Wielozadaniowość odnosi się do implementacji, w której wiele niezależnych instancji aplikacji działa w wspólnym środowisku. Instancje (najemcy) są logicznie izolowane, ale fizycznie zintegrowane. Organizacja może mieć wiele działów. Aby mogli tworzyć wiele najemców/instancji tej samej aplikacji. Na przykład w naszym przypadku system pomocy technicznej można skonfigurować dla różnych domen tej samej organizacji. Mogą istnieć setki najemców, ale wszyscy będą używać tych samych plików, a zatem tej samej pamięci. Zmniejszy to koszty przechowywania, a także ułatwi ulepszenia. Deweloperzy muszą tylko aktualizować pliki z jednego miejsca zamiast wprowadzać zmiany dla każdej witryny osobno.

## Jakie są korzyści z wielozadaniowości? {#benefits}

Oto kilka kluczowych korzyści z wielobornościowej
*  **Optymalizacja zasobów:**   Jedna maszyna zarezerwowana dla jednego najemcy nie jest wydajna. Ponieważ jeden najemca prawdopodobnie nie będzie korzystał z całej mocy obliczeniowej maszyny. Udostępnianie maszyn zmaksymalizuje dostępność zasobów.
*  **Niższe koszty:**   Wraz z wieloma najemcami dzielącymi te same zasoby będą kosztować znacznie niższe niż w przypadku, gdy każdy najemca wymagał własnej dedykowanej infrastruktury.
*  **Efektywne hosting:**   Również Osticket z wieloma górnictwem obniży koszty hostingu do minimum w wspólnym środowisku.
*  **Bezpieczeństwo:**   Przy mniejszej interakcji ze światem zewnętrznym, narażenie na złośliwe oprogramowanie jest zmniejszone.
*  **Łatwa aktualizacja**  : Uaktualnij pliki tylko w jednym miejscu zamiast aktualizować je osobno. Zaoszczędzi to dużo czasu i wysiłku.

## Wdrożenie Osticketu Multi-Tenant: {#implementation}

  * Utwórz nowe puste nazwy bazy danych jako „main_db”.
  * Następnie utwórz tabelę o nazwie „Najemca”, który będzie zawierał szczegółowe informacje na temat wszystkich najemców.
  * Będzie miał następujące pola:
  1. Site_name
  2. URL
  3. nazwa db_name

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-osTicket-database.png-1024x131.jpg" alt="Dostosowanie Osticket - wdrożyć wielozadaniowość w Osticket">}}

  * Site \ _name Field będzie zawierać nazwę najemcy. Pole URL pomieści pełny adres URL najemcy. Pole db \ _name będzie przechowywać nazwę bazy danych, która zostanie utworzona dla nowego najemcy.
  * Po tym plik Open /include/OST-Config.php i dodaj następujący kod
```
$url = $_SERVER['SERVER_NAME'];
$conn = new mysqli(DBHOST,DBUSER,DBPASS,DBSITES);
$sql = "select * from ost_sites where url = '$url'";
$res = $conn->query($sql);
$row = $res->fetch_array();


if ($url == $row['url']) {
	define('DBNAME',$row['db_name']);
} else {
	define('DBNAME','dynabic_osticket');
}

```
  * Ten kod zaktualizuje domyślną łączność bazy danych. Najpierw dostanie adres URL obecnego najemcy. Następnie otrzyma nazwę bazy danych zgodnie z tym adresem URL. W ten sposób aplikacja będzie wiedziała, z którą bazą danych można połączyć. Każdy najemca będzie miał osobną bazę danych. Baza danych zostanie wybrana na podstawie adresu URL najemcy.
  * Aby stworzyć nowego najemcę, po prostu skonfiguruj nową domenę najemcy na serwerze Nginx. Następnie skopiuj bieżącą bazę danych Osticket i zmień jej nazwę. Na koniec dodaj wpis do tabeli „najemcy” bazy danych „Main_db”.

## Wniosek: {#conclusion}

Osticket to bezpłatne i open source IT Oprogramowanie zarządzania działem pomocy technicznej. Nauczyliśmy się, w jaki sposób dostosowywania Osticket w celu wdrożenia wielozadaniowości w Osticket może zaoszczędzić koszty, zoptymalizować aplikację i niższe wymagania dotyczące zasobów. Ułatwi życie programistom tworzenie nowych najemców w kilku prostych krokach. W związku z tym stwórz wielu najemców Osticket z tej samej instalacji.

## Badać:
Sprawdź następującą stronę, aby dowiedzieć się więcej o Osticket:
  * [Osticket - bezpłatne oprogramowanie pomocnicze open source][5]
  * [Przewodnik dla początkujących o opracowaniu wtyczki Osticket][6]
  * [Jak skonfigurować oprogramowanie do pomocy internetowej za pomocą Osticket][7]
  * [Zautomatyzuj system biletów za pomocą WordPress i Osticket][8]



 [1]: #osticket
 [2]: #multitenancy
 [3]: #benefits
 [4]: #conclusion
 [5]: https://products.containerize.com/helpdesk/osticket
 [6]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
 [7]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
 [8]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
