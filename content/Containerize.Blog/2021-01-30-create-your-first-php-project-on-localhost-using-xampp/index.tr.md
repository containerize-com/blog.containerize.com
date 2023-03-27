---
title: "XAMPP kullanarak Localhost'ta ilk PHP projenizi oluşturun '" 
seoTitle: "XAMPP kullanarak Localhost'ta ilk PHP projenizi oluşturun" 
description: "Ücretsiz ve açık kaynaklı web sunucusu XAMPP kullanarak web geliştirme ortamını kurun. Birkaç kolay adım izleyerek PHP projelerinizi Localhost'ta oluşturun ve test edin." 
date: Sat, 30 Jan 2021 06:00:06 +0000
author: bilalahmed
summary: "Ücretsiz ve açık kaynaklı XAMPP sunucusunu kullanarak web geliştirme ortamını kurun. Birkaç kolay adımı izleyerek PHP projelerinizi Localhost'ta öğrenin, oluşturun ve test edin." 
url: /tr/create-your-first-php-project-on-localhost-using-xampp/
categories: ['Web Server Solution Stack']
---

## Ücretsiz ve açık kaynaklı XAMPP sunucusunu kullanarak web geliştirme ortamını kurun. Birkaç kolay adımı izleyerek PHP projelerinizi Localhost'ta öğrenin, oluşturun ve test edin.

{{< figure align=center src="images/Create-you-first-php-project-using-xamppA.png" alt="XAMPP Açık Kaynak Web Server ile ilk PHP projenizi oluşturun">}}

XAMPP, canlı sunuculara dağıtmadan önce bir PHP projesi oluşturmak, çalıştırmak ve test etmek için yerel bir ortam sağlayan açık kaynaklı bir web sunucusudur. Geliştiricilerin web uygulamalarını test etmeleri ve oluşturması için yerel bir sunucu sağlar. Bu blog gönderisindeki aşağıdaki bölümleri ele alacağız:
  * [Gereksinimler][2]
  * [XAMPP Nedir][3]
  * [PHP komut dosyası oluştur][4]
  * [PHP komut dosyasını çalıştırın ve test edin][5]
  * [Sonuç][6]

## Gereksinimler {#requirements}

  * XAMPP kurulumu
  * Kod Editör Uygulaması
  * Temel PHP bilgisi
  * Temel HTML ve JavaScript Bilgisi

## XAMPP nedir? {#xampp}

XAMPP, açık kaynaklı bir web sunucusu çözüm yığınıdır. Apache, MySQL, MariaDB, PHP ve Perl içerir. Kurulumu ve kullanımı son derece kolaydır. Bu yüzden en popüler PHP geliştirme ortamı. XAMPP Server, PHP Web Uygulaması Geliştirme için eksiksiz bir ortam sağlar. Henüz XAMPP çalışma kurulumunuz yoksa, XAMPP'yi yüklemek için bu kılavuzu izleyin:
[Windows'ta Localhost olarak XAMP ve PHPMyAdmin kurulum][7]

## PHP komut dosyası oluştur {#php}

  * Yukarıdaki öğreticiyi takip ederek XAMPP'yi zaten yüklediğinizi varsayarsak, şimdi basit bir PHP komut dosyası oluşturalım ve XAMPP'de test edelim.
  * Önce editörünüzü açın. Bir programlama düzenleyiciniz yoksa, not defterini açmanız yeterlidir.
  * Aşağıdaki kodu girin
```
<?php
echo "This is my first PHP project";
?>
```
  * Sağ üst köşedeki "Dosya" yı tıklayın.
  * “AS AS” düğmesine basın.
  * Adını “.php” uzantısı ile girin.
* “Tür Olarak Kaydet” için “Tüm Dosyalar (\*. \*)” Seçeneğini seçin.
  * Ve son olarak “Kaydet” düğmesine basın.

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1024x598.png" alt="XAMPP Açık Kaynak Web Server ile ilk PHP projenizi oluşturun">}}


## PHP komut dosyasını çalıştırın ve test edin {#test}

  * Bu PHP komut dosyasını XAMPP kurulumunuzdaki HTDOCS klasörüne kopyalayın. Çoğunlukla HTDOCS klasörü burada bulunur: C: \ XAMPP \ HTDOCS
  * Tarayıcınızı açın.
  * Localhost'a git/\ _first \ _php_project.php

{{< figure align=center src="images/Create-your-first-PHP-Project-using-XAMPP-1-e1606805534747.png" alt="XAMPP Açık Kaynak Web Server ile ilk PHP projenizi oluşturun">}}

Tebrikler! İlk PHP projenizi yeni oluşturdunuz.

## Çözüm {#conclusion}

İlk web projesini oluşturmak yeni başlayanlar için her zaman çok heyecan vericidir. İlk dinamik betiğinizi tasarladığınızda, çalıştırdığınızda ve tarayıcınızda çalıştığını görünce harika hissettirir. Umarım bu basit rehber, Xampp Açık Kaynak Web Server ile ilk PHP projenizi oluşturmanıza ve çalıştırmanıza yardımcı olmuştur.

## Keşfetmek
XAMPP ve PHPMyAdmin hakkında daha fazla bilgi edinmek için kılavuzları takip edin:
[Windows'ta Localhost olarak XAMP ve PHPMyAdmin kurulum][7]
[PHP & Perl geliştiricileri için ücretsiz web sunucusu çözümü yığını][1]



[1]: https://products.containerize.com/solution-stack/xampp
[2]: #requirements
[3]: #xampp
[4]: #php
[5]: #test
[6]: #conclusion
[7]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
