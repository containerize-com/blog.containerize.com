---
title: "WordPress'ten Jekyll'e nasıl geçilir" 
seoTitle: "WordPress'ten Jekyll'e nasıl geçilir" 
description: "Bu öğreticide, sitenizi WordPress'ten Jekyll'e hızlı ve kolay adımlarla nasıl geçireceğinizi öğreneceğiz. Başlayalım!" 
date: Wed, 02 Dec 2020 13:37:14 +0000
author: Assad Mahmood
summary: "Bu öğreticide, web sitenizi WordPress'ten Jekyll'e nasıl taşıyacağınızı öğreneceğiz ve Github ile ücretsiz olarak ev sahipliği yapacağız." 
url: /tr/quick-guide-on-how-to-migrate-from-wordpress-to-jekyll/
categories: ['Blogging']
---

## Bu öğreticide, web sitenizi WordPress'ten Jekyll'e nasıl geçeceğinizi öğreneceğiz ve Github ile ücretsiz olarak barındıracağız.

{{< figure align=center src="images/wordpress-to-jeykll.png" alt="WordPress'e Jekyll">}}

Jeykll açık kaynaklı statik site üreticisidir. Düz metninizi statik web sitelerine ve bloglara dönüştürür. En sevdiğiniz işaretleme (Markdown, Liquid, HTML / CSS) dilinde yazılmış metni alır ve statik bir web sitesi oluşturmak için düzenleri kullanır. Jekyll blog farkındalık ve uygun bağlantılar, kategoriler, sayfalar, yayınlar ve özel düzenler birinci sınıf vatandaşlardır. Jekyll'in en büyük faydalarından biri, statik web sitenizi GitHub sayfalarında barındırabilmeniz ve web sitenizi veya blogunuzu ücretsiz olarak çalıştırabilmenizdir. Dolayısıyla, Jekyll Taşıma'dan WordPress, web sitenizin performansını ve hızını artırmanıza yardımcı olabilir.
Bu blog yazısında, mevcut web sitenizi veya blogunuzu daha iyi hız ve performans için WordPress'ten Jekyll'e nasıl geçeceğimizden geçeceğiz. Öyleyse başlayalım!
  *** [neden taşınmalı?] [1] **
  *** [kurulum] [2] **
  *** [WordPress yayınlarını ve sayfaları içine aktarın] [3] **
  *** [GitHub sayfalarıyla dağıtım] [4] **
  *** [Sonuç] [5] **

## Neden taşınır? {#Neden}
Jekyll'de 100/100 [deniz feneri puanı] [6] alabilirsiniz çünkü veritabanı etkileşimi yoktur. Ve tüm içerik önceden işlenir ve HTML dosyaları olarak kaydedilir. Ve Jekyll sadece minimum miktarda HTTP isteği yapacak. Bu nedenle, süper hızlı.

## Kurulum ve Ayarlama Jekyll {#install}
Jekyll Ruby'de yazılmıştır. Yani, önce bilgisayarınıza yüklemeniz gerekir. Bu kılavuz, bilgisayarınıza zaten Ruby'nin kurulduğunu varsayar. Değilse [resmi rehber] [7] 'i takip edebilirsiniz.
İlk olarak, Ruby'yi yükledikten sonra mevcut olacak “** Gem **” komutunu kullanarak “** jekyl **” ve “** Bundler **” taşlayacağız. Komut satırını açın ve aşağıdaki kodu çalıştırın.
```
gem install jekyll bundler
```
Ardından, yeni bir site oluşturmak için aşağıdaki komutu çalıştırın. Bu bir ** myblog ** klasörü oluşturur.
```
jekyll new myblog
```
Yüklendikten sonra, siteyi oluşturabilir ve yerel bir sunucuda kullanılabilir hale getirebilirsiniz.
```
bundle exec jekyll serve
```
Site http: // localhost: 4000 adresinden satışa sunulacak. Ayrıca, klasörünüzde sitenin nihai çıktısı olan bir “** _ site **” klasörü oluşturur.

## WordPress sayfalarını ve yayınlarını içe aktarın {#import}
WordPress için resmi olmayan bir eklenti de mevcuttur, ancak bu öğreticideki resmi yöntemi takip edeceğiz. Wordpess ihracatçı eklentisini denemek istiyorsanız [buraya gidebilirsiniz] [8].
Gönderilerinizi kendi kendine barındırılan bir WordPress web sitesinden içe aktarmak için, terminalinizde aşağıdaki komutu çalıştırın.
```
ruby -r rubygems -e 'require "jekyll-import";
    JekyllImport::Importers::WordPress.run({
      "dbname"         => "",
      "user"           => "",
      "password"       => "",
      "host"           => "localhost",
      "port"           => "3306",
      "socket"         => "",
      "table_prefix"   => "wp_",
      "site_prefix"    => "",
      "clean_entities" => true,
      "comments"       => true,
      "categories"     => true,
      "tags"           => true,
      "more_excerpt"   => true,
      "more_anchor"    => true,
      "extension"      => "html",
      "status"         => ["publish"]
    })'
```
Bu yalnızca Post & Page Veri ve İçeriğini içe aktarır. Bu ithalatçı yalnızca yayınlarınızı dönüştürür ve YAML önünü oluşturur. Herhangi bir mizanpaj, stil veya harici dosyalar (görüntüler, CSS, vb.) İçe aktarmaz.

## ** Github sayfalarıyla dağıtım ** {#deploy}
Şimdiye kadar Jekyll blogumuzu yerel olarak oluşturduk. Şimdi GitHub'a dağıtacağız. Her şeyden önce, [GIT] [9] kullanarak sitemizi kontrol etmeliyiz. Sitenin klasöründe aşağıdaki komutları çalıştırın.
```
git init
git add .
git commit -m "Initial Commit"
```
Jekyll'i yüklerken, en azından aşağıdaki içerikle kökte otomatik olarak bir “**. Gitignore **” dosyası oluşturmalıdır.
Ardından, GitHub'a giriş yapın ve yeni bir depo oluşturun Yourname.github.io
Ardından, deponun HTTPS URL'sini kopyalayın.

{{< figure align=center src="images/github-img.png" alt="GitHub HTTPS URL">}}

Ardından, uzak depoyu ekleyin ve koda basın.
```
git remote add origin https://github.com/{yourname}/{yourname}.github.io.git
git push origin master
```
Tamamlamak! Siteniz artık yoMame.github.io adresinde mevcut olmalıdır.

## Sonuç {#Conclusion}
Bu makalede, Jekyll siteleri ile statik bir blog oluşturmayı öğrendik. Ardından, yayınlarınızı ve sayfalarınızı WordPress'ten Jekyll'e nasıl dışa aktaracağınızı öğrendik. Ve son olarak, son siteyi GitHub sayfalarına dağıttık.
[1]: #why
[2]: #install
[3]: #import
[4]: #deploy
[5]: #conclusion
[6]: https://web.dev/performance-scoring/
[7]: https://www.ruby-lang.org/en/documentation/installation/
[8]: https://wordpress.org/plugins/jekyll-exporter/
[9]: https://git-scm.com/
