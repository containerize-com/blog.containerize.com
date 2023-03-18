---
title: "Bir WordPress eklentisi geliştirelim | WordPress eklenti öğreticisi" 
seoTitle: "Bir WordPress eklentisi geliştirelim | WordPress eklenti öğreticisi" 
description: "WordPress Eklentileri Geliştirme ile ilgileniyor musunuz? Temel bir WordPress eklentisi oluşturmak için tam adımları açıklayan bu WordPress eklentisi eğitimini izleyin." 
date: Fri, 13 Nov 2020 13:30:43 +0000
author: Assad Mahmood
summary: "WordPress eklentisi, bir dizi özellik veya öğe sağlamak için web sitenizde etkinleştirdiğiniz bir modüldür. Bu eklentiler SEO optimize edilmiştir ve otomasyon sunar." 
url: /tr/lets-develop-a-wordpress-plugin-wordpress-plugin-tutorial/
categories: ['Blogging']
---

## WordPress eklentisi, bir dizi özellik veya öğe sağlamak için web sitenizde etkinleştirdiğiniz bir modüldür. Bu eklentiler SEO optimize edilmiştir ve otomasyon sunar.

{{< figure align=center src="images/Screenshot-2020-11-13-at-6.08.54-PM-1024x537.png" alt="WordPress eklenti öğreticisi">}}


## Genel Bakış
WordPress, kurumsal düzeyde açık kaynaklı bir blog platformudur. A ** WordPress eklentisi **, WordPress'in işlevselliğini geliştiren ve genişleten bağımsız bir kod kümesidir. PHP, HTML, CSS, JavaScript/JQuery kombinasyonunu kullanarak. Bir eklenti, web sitenizin herhangi bir bölümüne yeni özellikler ekleyebilir.
Web sitenize ekleyebileceğiniz işlevsellik, her bir eklentinin ne yapacağına bağlıdır. Her şeyi yapmak için bir WordPress eklentisi geliştirilebilir. Küçük bir görevden, bir dizi işlem gerçekleştiren ve kendi arayüzlerine sahip tam bir uygulamaya kadar. Eklentiler, işlevlerini yerine getirmek için kancalar, filtreler, kısa kodlar, widget'lar ve özel kod kullanarak temanızdan farklıdır ve bağımsız olarak çalışır.
Bu WordPress eklenti öğreticisinde, ilk WordPress eklentimizi nasıl oluşturacağımızı öğreneceğiz. Bir eklenti oluşturmanın en önemli nedeni, kendi kodunuzu WordPress Core kodundan ayırmanıza izin vermesidir.
  *** [Gereksinimler] [1] **
  *** [eklenti geliştirmenin temelleri] [2] **
  *** [WP eklentisi nasıl oluşturulur?] [3] **
  *** [Sonuç] [4] **

## Gereksinimler {#Requirements}
  * WordPress'in son sürümü
  * PHP / MySQL anlayışı
  * HTML / CSS ve JavaScript'in anlaşılması

## eklenti geliştirmenin temelleri {#basics}
Eklenti geliştirmenin bazı önemli yönleri hakkında konuşalım. Bu kavramların nasıl çalıştığına dair sağlam bir anlayış, kullanımı kolay ve sürdürülebilir işlevsellik oluşturmanıza yardımcı olacaktır.

### Hareketler
** Action Hooks ** ** WordPress ** ** eklentisinde çok kullanışlı bir araçtır ve bir temanın veya eklentinin belirli yerlerinde işlevleri (** Eylemler **) gerçekleştirmek için kullanılırlar. WordPress, temel işlevselliği boyunca tanımlanan düzinelerce eyleme sahiptir, her bir eylem benzersiz bir isimden oluşur. Daha fazla ayrıntı için [okuyun] [5].

### Filtreler
Bir WordPress filtresi, bir değişkeni (veya değişken serisini) kabul eden ve değiştirildikten sonra bunları geri döndüren bir kancadır. Bu filtreler genellikle varsayılan bilgileri manipüle etmek için bir yolunuz olması için kullanılır. Daha fazla ayrıntı için [okuyun] [6].

### Kısa kodlar
Kısa kodlar, içerikle dinamik etkileşimler gerçekleştirmek için kullanılabilen makrolardır. yani gönderiye bağlı resimlerden bir galeri oluşturma veya bir video oluşturma. Sonuç olarak, içeriği temiz ve semantik tutmanın değerli bir yoludur ve son kullanıcılara içeriklerinin sunumunu programlı olarak değiştirme yeteneğine izin verir. Daha fazla ayrıntı için [okuyun] [7].

### widget'lar
Widget'lar önemlidir, çünkü kullanımı kolay bir arayüz sağlarken eklentinizin kodunu yürütmenin başka bir yolu sunarlar. Çoğu tema bir veya daha fazla kenar çubuğunu destekleyeceğinden; Kendi widget'larınızı eklemek, bilgilerinizi temanın içinde görüntülemenize hızlı erişim sağlayacaktır.

## ** WP eklentisi nasıl oluşturulur? ** {#create}
WordPress eklenti öğreticisinin bu bölümünde, tek yapmanız gereken bir klasör oluşturmak ve ardından bir içerik satırı ile tek bir dosya oluşturmaktır. ** wp-content/eklentileri ** klasörüne gidin ve ** mytestplugin ** adlı yeni bir klasör oluşturun. Bu yeni klasörün içinde ** mytestplugin.php ** adlı bir dosya oluşturun. Dosyayı bir metin düzenleyicisinde açın ve aşağıdaki bilgileri yapıştırın:
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
Şimdi, eklentinizi etkinleştirmek için arka ucuna gidebilirsiniz. Hepsi bu kadar, ancak bu eklenti hiçbir şey yapmıyor. Ancak, aktif, çalışan bir eklentidir. Bir eklenti geliştirirken en iyi uygulama, kodunuzu düzgün bir şekilde uygun dosyalara ve klasörlere ayırmaktır.
Göstermek için, her yazının kaç kez görüntülendiğini saklayarak makalelerimizin popülaritesini izleyen test eklentimize işlevsellik ekleyelim.

### Sayfa görünümlerini saklama
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
Şimdiye kadar, bu WordPress eklenti öğreticisinde çok iyi. Ancak bu işlev asla çağrılmaz, bu yüzden aslında kullanılmayacaktır. Burası kancaların geldiği yerdir. Temanızın dosyalarına gidip işlevi oradan manuel olarak arayabilirsiniz. Ama o zaman temayı değiştirirseniz, böylece tüm amacı yenerseniz bu işlevselliği kaybedersiniz. Çoğu temada etiket bulunmadan hemen önce çalışan ** wp_head ** adlı bir kanca, böylece işlevimizi ** wp_head ** her ne zaman çalıştırdığında ayarlayabiliriz:
```
add_action("wp_head", "add_page_views");
```

### Sayfa Görünümlerini Gösteriyor
Şimdi yukarıdaki işlevde zaten sakladığımız sayfa görünümlerini döndüren başka bir işlev oluşturacağız. Kodu bir inceleyelim:
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
Şimdiye kadar, görünüm sayısını yeni aldık. Şimdi gösterelim. Karmaşık olması gerektiğini düşünüyor olabilirsiniz. Ancak, tıpkı bunun gibi çok basit:
```
echo get_page_views() . “view(s)”
```

## Sonuç {#Conclusion}
Bu WordPress eklenti öğreticisinin sonu. Bu makaleyi takip ederek ve yalnızca bir avuç işlev kullanarak, en popüler yayınlarımızı izlemek için temel bir eklenti oluşturduk. Bunu çok geliştirebiliriz, ancak amaç sadece temel bilgileri rahatlatmaktı. Dahası, WordPress geliştirme modellerini (eklentiler, kancalar vb.) Öğrenerek, size WordPress olmayan ortamlarda da hizmet verecek beceriler kazanıyorsunuz. Açık kaynak bloglama platformları ve açık kaynaklı CMS ile ilgili birçok blog yazısı vardır. aşağıdaki keşif bölümünde bulabilirsiniz. Bu blog yazısı, işletmeniz için açık kaynaklı bir bloglama platformu dağıtmak istiyorsanız size gerçekten yardımcı olabilir.
Son olarak, [Containerize.com] [8] diğer açık kaynaklı ürünler üzerine makaleler yazıyor. Bu nedenle, düzenli haberler ve güncellemeler için lütfen [bloglama] [9] ve [iş zekası yazılımı] [10] kategorileri ile iletişim halinde olun

## Keşfetmek
  * [WordPress için Matomo Nasıl Kurulur | WordPress Tutorial] [11]
  * [Ücretsiz Civicrm WordPress Entegrasyonu ile Kurşunlarınızı Artırın] [12]
  * [Eklenti WordPress'e nasıl yüklenir | Vanilya Forumu] [13]
  * [Joomla vs Drupal | 2021'de CMS karşılaştırması] [14]
  * [2021'de açık kaynaklı yazılım seçmeden önce gözden geçirilecek şeyler] [15]
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
