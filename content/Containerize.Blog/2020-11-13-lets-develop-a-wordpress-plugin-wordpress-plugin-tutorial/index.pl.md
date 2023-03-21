---
title: "Opracujmy wtyczkę WordPress | Samouczek wtyczki WordPress" 
seoTitle: "Opracujmy wtyczkę WordPress | Samouczek wtyczki WordPress" 
description: "Interesujesz się tworzeniem wtyczek WordPress? Postępuj zgodnie z tym samouczkiem wtyczki WordPress, który opisuje pełne kroki w celu utworzenia podstawowej wtyczki WordPress." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "Wtyczka WordPress to moduł, który aktywujesz na swojej stronie internetowej, aby zapewnić serię funkcji lub elementów. Te wtyczki są zoptymalizowane SEO i oferują automatyzację." 
url: /pl/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## WordPress wtyczka to moduł, który aktywujesz na swojej stronie internetowej, aby zapewnić serię funkcji lub elementów. Te wtyczki są zoptymalizowane SEO i oferują automatyzację.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="Samouczek wtyczki WordPress">}}


## Przegląd
WordPress to platforma blogowa na poziomie open source na poziomie przedsiębiorstwa.**wtyczka WordPress**to samodzielny zestaw kodu, który ulepsza i rozszerza funkcjonalność WordPress. Za pomocą dowolnej kombinacji PHP, HTML, CSS, JavaScript/JQuery. Wtyczka może dodawać nowe funkcje do dowolnej części Twojej witryny.
Funkcjonalność, którą możesz dodać do swojej witryny, zależy od tego, co została stworzona przez każdą konkretną wtyczkę. Można opracować wtyczkę WordPress do zrobienia wszystkiego. Od niewielkiego zadania po aplikację pełnoziarnistą, która wykonuje szereg operacji i ma swoje własne interfejsy. Wtyczki różnią się od motywu i pracują niezależnie, używając haczyków, filtrów, skrótów, widżetów i niestandardowego kodu do wykonywania ich funkcjonalności.
W tym samouczku wtyczki WordPress nauczymy się, jak utworzyć naszą pierwszą wtyczkę WordPress. Najważniejszym powodem utworzenia wtyczki jest to, że umożliwia ona oddzielenie własnego kodu od kodu podstawowego WordPress.
* **[wymagania][1]**
* **[Podstawy rozwoju wtyczek][2]**
* **[Jak utworzyć wtyczkę WP?][3]**
* **[wniosek][4]**

## wymagania   {#Requirements}
  * Najnowsza wersja WordPress
  * Zrozumienie PHP / MySQL
  * Zrozumienie HTML / CSS i JavaScript

## Podstawy rozwoju wtyczek   {#basics}
Poświęćmy chwilę, aby porozmawiać o niektórych kluczowych aspektach tworzenia wtyczek. Solidne zrozumienie, w jaki sposób działają te pojęcia, pomoże Ci zbudować łatwą w użyciu i utrzymanie funkcjonalności.

## # Działania
* * Haczyki akcji**są bardzo przydatnym narzędziem w**WordPress****wtyczka**i są używane do wykonywania funkcji (**Działania**) w określonych miejscach motywu lub wtyczki. WordPress ma dziesiątki działań zdefiniowanych w swojej podstawowej funkcjonalności, każde działanie składające się z unikalnej nazwy. Aby uzyskać więcej informacji [przeczytaj][5].

## # filtry
Filtr WordPress to hak, który akceptuje zmienną (lub serię zmiennych) i zwraca je po ich zmodyfikowaniu. Te filtry są często używane, aby mieć sposób manipulowania domyślnymi informacjami. Aby uzyskać więcej informacji [przeczytaj][6].

## # skróty
Skróty to makra, które można użyć do wykonywania dynamicznych interakcji z zawartością. tj. Tworzenie galerii z obrazów dołączonych do postu lub renderowanie wideo. W rezultacie są one cennym sposobem na utrzymanie treści w czystości i semantyce, jednocześnie umożliwiając użytkownikom końcowym pewną zdolność do programowej zmiany prezentacji ich treści. Aby uzyskać więcej informacji [przeczytaj][7].

## # widżety
Widżety są ważne, ponieważ podają inne środki wykonywania kodu wtyczki, jednocześnie zapewniając łatwy w użyciu interfejs. Ponieważ większość tematów będzie obsługiwać jedno lub więcej pasków bocznych; Dodanie własnych widżetów zapewni szybki dostęp do wyświetlania informacji w motywie.

## **Jak utworzyć wtyczkę WP?** {#Create}
W tej sekcji samouczka wtyczki WordPress wszystko, co musisz zrobić, to utworzyć folder, a następnie utworzyć pojedynczy plik z jedną linią treści. Przejdź do folderu**WP-Content/wtyczki**i utwórz nowy folder o nazwie**MyTestPlugin**. W tym nowym folderze utwórz plik o nazwie**MyTestplugin.php**. Otwórz plik w edytorze tekstu i wklej w nim następujące informacje:
```
<?php
   /*
   Plugin Name: My Test Plugin
   Plugin URI: http://my-test-plugin.com
   description: >-
  a plugin to create test plugin development
   Version: 1.2
   Author: Mr. Test
   Author URI: http://my-test-plugin.com
   License: GPL2
   */
?>
```
Teraz możesz przejść do tylnego końca, aby aktywować swoją wtyczkę. To wszystko, chociaż ta wtyczka nic nie robi. Ale jest to aktywna, funkcjonująca wtyczka. Najlepszą praktyką podczas opracowywania wtyczki jest staranne oddzielenie kodu na odpowiednie pliki i foldery.
Aby zademonstrować, dodajmy funkcjonalność do naszej wtyczki testowej, która śledzi popularność naszych artykułów, przechowując, ile razy każdy post był oglądany.

## # przechowywanie wyświetleń strony
```
function add_page_views() {
   if(is_single()) {
      global $post;
      $current_views = get_post_meta($post->ID, "page_views", true);
      if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
         $current_views = 0;
      }
      $new_views = $current_views + 1;
      update_post_meta($post->ID, "page_views", $new_views);
      return $new_views;
   }
}
```
Jak dotąd, tak dobrze w tym samouczku wtyczki WordPress. Ale ta funkcja nigdy nie jest wywoływana, więc tak naprawdę nie będzie używana. Tutaj pojawiają się haczyki. Możesz wejść do plików motywu i odtąd ręcznie wywołać funkcję. Ale wtedy straciłbyś tę funkcjonalność, jeśli kiedykolwiek zmieniłeś temat, pokonując w ten sposób cały cel. Hak, o nazwie**wp_head**, który działa tuż przed obecnością znacznika w większości tematów, więc możemy po prostu ustawić naszą funkcję na działanie, gdy**WP_HEAD**uruchamia się, jak więc:
```
add_action("wp_head", "add_page_views");
```

## # Pokazanie widoków strony
Teraz utworzymy inną funkcję, która zwraca widoki strony, które już przechowyliśmy w powyższej funkcji. Rzućmy okiem na kod:
```
function get_page_views() {
   global $post;
   $current_views = get_post_meta($post->ID, "page_views", true);
   if(!isset($current_views) OR empty($current_views) OR !is_numeric($current_views) ) {
      $current_views = 0;
   }

   return $current_views;
}
```
Do tej pory właśnie odzyskaliśmy liczbę widoków. Pokażmy teraz. Być może myślisz, że to musi być złożone. Ale to jest bardzo proste w ten sposób:
```
echo get_page_views() . “view(s)”
```

## Wniosek   {#Conclusion}
To jest koniec tego samouczka wtyczki WordPress. Postępując zgodnie z tym artykułem i stosując tylko garść funkcji, stworzyliśmy podstawową wtyczkę do śledzenia naszych najpopularniejszych postów. Możemy to znacznie poprawić, ale celem było po prostu wygodne ubranie w podstawy. Ponadto, ucząc się niektórych wzorców rozwoju WordPress (wtyczki, haczyki itp.), Zyskujesz umiejętności, które będą ci służyć w środowiskach innych niż WordPress. Istnieje wiele innych postów na blogu związanych z platformami blogowymi typu open source i CMS open source. które można znaleźć w sekcji Explore poniżej. Ten post na blogu może naprawdę pomóc, jeśli chcesz wdrożyć platformę blogowania open source dla swojej firmy.
Wreszcie [Containerize.com][8] pisze artykuły na temat dalszych produktów typu open source. Dlatego prosimy o kontakt z [blogowaniem][9] i [oprogramowanie Business Intelligence][10] kategorii regularnych wiadomości i aktualizacji

## Badać
  * [Jak zainstalować Matomo dla WordPress | Samouczek WordPress][11]
  * [Zwiększ swoje leady za pomocą bezpłatnej integracji WordPress Civicrm][12]
  * [Jak zainstalować wtyczkę w WordPress | Forum waniliowe][13]
  * [Joomla vs Drupal | Porównanie CMS w 2021 r.][14]
  * [Rzeczy do przejrzenia przed wyborem oprogramowania open source w 2021 r.][15]

  
[1]: #requirements
[2]: #basics
[3]: #create
[4]: #conclusion
[5]: https://developer.wordpress.org/plugins/hooks/
[6]: https://developer.wordpress.org/plugins/hooks/filters/
[7]: https://developer.wordpress.org/plugins/shortcodes/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://blog.containerize.com/blogging/how-to-install-matomo-for-wordpress-wordpress-tutorial/
[12]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
[13]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[14]: https://blog.containerize.com/content-management/joomla-vs-drupal-cms-comparison-in-2021/
[15]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
