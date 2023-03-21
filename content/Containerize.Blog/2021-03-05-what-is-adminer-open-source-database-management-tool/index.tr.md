---
title: "Yönetici nedir? | Açık kaynaklı veritabanı yönetim aracı" 
seoTitle: "Yönetici nedir? | Açık kaynaklı veritabanı yönetim aracı" 
description: "Yönetici nedir? Geliştirici dostu bir arayüze sahip web tabanlı bir veritabanı yönetim sistemi. Veritabanlarının açık kaynaklı bir yöneticiyle nasıl yönetileceğini tartışalım." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "Yönetici, veritabanlarını yönetmek için açık kaynaklı bir web tabanlı veritabanı yönetim sistemidir. LocalHost'ta Yönetici Kurulmayı ve Temel Özelliklerini Nasıl İnceleyeceğinizi Öğrenelim." 
url: /tr/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Adminer, veritabanlarını yönetmek için açık kaynaklı bir web tabanlı veritabanı yönetim sistemidir. LocalHost'ta Yönetici Kurulmayı ve Temel Özelliklerini Nasıl İnceleyeceğinizi Öğrenelim.
{{_LINE_11_}}

## Genel Bakış
Veri ile ilgili görevler artık her zamankinden çok daha kritik. Veritabanı yönetim aracı herhangi bir işletmenin ayrılmaz bir parçası haline gelmiştir. Ancak, bu tür zorlu görevlere çözüm sunan birçok web tabanlı veritabanı yönetim sistemi vardır. İşletmeler günlük olarak tonlarca veri üretiyor ve sürdürülmesi zorlaşıyor. Ayrıca, kuruluşlar veri erişimini ve veri kontrolünü basitleştirme eğilimindedir. Bu ücretsiz araçlar, veri artıklığını azaltmaya, veritabanlarını verimli ve güvenilir hale getirmeye yardımcı olur. Ayrıca, [En İyi Açık Kaynak DBMS Yazılım Araçları][1] ve biraz daha fazlası gibi konularda blog yayınları yayınladık.
Bu nedenle, açık kaynaklı topluluk, kurumsal düzeyde ücretsiz bir veritabanı yönetim aracı olan Adminer geliştirmiştir. Bu Yönetim Eğiticisi'nde aşağıdaki noktaları ele alacağız.
  * [Yönetici nedir?][2]
  * [Yöneticinin önemli özellikleri][3]
  * [Yönetici vs phpmyadmin][4]
  * [Veritabanlarını Yönetici Yönetin][5]
  * [Sonuç][6]

## Adminer nedir?   {#Ne}
Hafif, kullanıcı dostu, yüksek performanslı MySQL veritabanı yönetim aracı söz konusu olduğunda, Adminer geniş popülerlik kazanmış ve phpmyAdmin ile karşılaştırıldığında birçok iyileştirme sunar. Başlangıçta, bu veritabanı yönetim aracı Jakub Vrana tarafından 2007 yılında PhpmyAdmin'e alternatif olarak geliştirilmiştir, böylece tek yapmanız gereken uygulamanızın veritabanına tek, hafif bir PHP dosyasını indirmek ve yüklemektir.
Açık kaynaklı bir veritabanı yönetim aracı olarak, kullanımı ücretsizdir ve PHP'de yazılmıştır. Bu web tabanlı veritabanı yönetim sistemini birbirinden ayıran şey, kesintisiz bir kullanıcı deneyimi için iyi bir kullanıcı arayüz tasarımı ve verileri herhangi bir saldırıdan veya kötü niyetli hack denemelerinden korumak için güçlü güvenlik özellikleridir. Bu veritabanı yönetim aracının ayarlanması kolaydır ve Ubuntu ve lamba gibi basit gereksinimler gerektirir. Kullanıcılar geliştirme ve dağıtım ile ilgili kapsamlı belgeler bulabilirler. Bu nedenle, bu web tabanlı veritabanı yönetim sisteminin kaynak dosyalarını [GitHub][7] 'de bulabilirsiniz.

## Yöneticinin Önemli Özellikleri   {#Important}
Bu veritabanı yönetim aracının bazı temel ama önemli özellikleri şunlardır:
  * Seçim veritabanı, tabloları düzenleme, tablolara verileri ekle/düzenleme ve verileri birden çok sütunda sıralama/arama gibi birçok veritabanı işlevine sahiptir.
  * MySQL, PostgreSQL, SQLITE, MS SQL, Oracle ve SimpledB veritabanları ve daha fazlası dahil olmak üzere birden çok veritabanını destekler
  * İngilizce, Arapça, Farsça, Polonya, Hollandalı vb.
  * Görünümler, tetikleyiciler, saklı yordamlar, kullanıcı izinleri ve daha fazlası gibi veritabanı nesnelerini kolayca düzenleyebilirsiniz.
  * Adminer ayrıca SQL enjeksiyonu, oturum çalma, site komut dosyası (XSS) yazılım saldırıları ve diğer saldırılara karşı güvenlik önlemleri de sağlar.

## Yönetici vs phpmyadmin   {#adminer}
Dolayısıyla, admin ne olduğu hakkında konuştuğumuzda, Adminer ile Phpmyadmin arasındaki karşılaştırmayı bilmek ilginç olurdu. Yönetici ve phpmyadmin arasında seçim söz konusu olduğunda, yönetici esnek özellikler ve sağladığı ışık dosya yüklemesi için üstte gelir. Benzer şekilde, PhpmyAdmin ile karşılaştırıldığında, MySQL, SQLITE ve diğerleri dahil olmak üzere birden fazla veritabanını destekler. Benzer şekilde, yöneticinin otomatik olarak yaptığı ek alanlar ekleme veya aynı anda tüm dizinlerle manipülasyon söz konusu olduğunda PhpmyAdmin'den daha sezgisel ve daha akıllıdır.

## Veritabanlarını Yönetici ile Yönetin   {#Manage}
Bu Yönetim Eğiticisi bölümünde, veritabanlarını Yönetici ile nasıl yönetebiliriz.
**Sistem gereksinimleri**
Yöneticinin sisteminizde çalışması için, sunucunuzda zaten ayarlanmış aşağıdaki gereksinimlere sahip olmanız önemlidir:
  * PHP sürüm 5, 7 veya 8
  * MySQL, SQLITE, PostgreSQL vb.
**Kurulum**
Bu iki sistem gereksinimini kontrol ettirdiyseniz, dosyayı [][8] 'den indirin ve PHP dosyasını sunucunuza yükleyerek başlayın. XAMPP sunucusu için, indirilen dosyayı “Adminer.php” olarak yeniden adlandırın ve bu dosyayı HTDOCS klasörüne koyun.
**Kullanıcı arayüzüne erişim** 
Bunu yaptıktan sonra yönetici nedir? Şimdi bu uygulamaya HTTP: IP-Adres/Adminer.php'den gösterildiği gibi erişin:
{{_LINE_42_}}
**Sunucuya bağlan**
Sunucunuzun kullanıcı adını ve şifresini kullanarak bu ücretsiz veritabanı yönetim aracına giriş yapın. Şimdi yalnızca bir veritabanına erişmek istiyorsanız adını girin. Sunucuda zaten var olan tüm veritabanlarına erişmek için bu alanı boş bırakabilirsiniz.
**Veritabanlarını Yönet** 
Girişten sonra, mevcut tüm veritabanlarınızın bir listesini göreceksiniz. Yönetmek için herhangi bir veritabanına tıklayın.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Veritabanlarını Yönetici Veritabanı Yönetim Aracı ile Yönetin">}}

Bir sonraki ekranda, seçilen tüm veritabanlarının tüm tablolarının listesini göreceksiniz. Buradan veritabanını veya tablolarını dışa aktarabilir, tablo/sütun ekle veya düzenleyebilir, SQL sorguları aracılığıyla verileri değiştirebilir ve burada gösterildiği gibi çok daha fazlası olabilir:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Veritabanı Yönetim Aracı">}}

**Yeni veritabanı oluştur** 
Yeni bir veritabanı oluşturmak için “Veritabanı Oluştur” u tıklayın, veritabanı adını girin ve “Kaydet” i tıklayın.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Veritabanı Yönetim Aracı">}}

**Kayıtları ekleyin/güncelle** 
Bir tabloya yeni kayıtlar eklemek oldukça basittir. Sizi ekran ekranına yönlendirecek yeni öğe bağlantısını tıklayın. Burada, veri türü ile birlikte tablodaki tüm sütunlar için yeni veriler ekleyebileceksiniz, böylece yeni veriler eklemek hızlı bir işlemdir.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Yönetici vs phpmyadmin">}}


## Sonuç   {#Conclusion}
Bu bizi bu Yönetim Eğiticinin sonuna getirir. Bu açık kaynak web tabanlı veritabanı yönetim sisteminin Adminer, Adminer vs PhpmyAdmin ve diğer yönleri gibi bazı önemli konulardan geçtik. Umarım, bu blog yazısı, açık kaynaklı bir veritabanı yönetim aracı kurmak istiyorsanız kesinlikle size yardımcı olacaktır. Sezgisel, akıllı ve kullanımı kolay arayüz, onu çok popüler bir veritabanı yönetim aracı haline getirir. Ayrıca, MySQL, SQLITE, MongoDB ve çok daha fazlası dahil olmak üzere birçok veritabanını ve kötü niyetli hack olaylarını korumak ve önlemek için güvenlik önlemleri destekler. Sonuçta, bu veritabanı yönetim aracı sadece açık kaynak değil, aynı zamanda kullanımı ücretsizdir.
Son olarak, [Containerize.com][9] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [Veritabanı Yönetimi Araçları][10] kategorisiyle iletişime geçin. Dahası, bizi sosyal medya hesaplarımızda [Facebook][11], [LinkedIn][12] ve [Twitter][13] 'te takip edebilirsiniz.

## Keşfetmek
Ücretsiz web tabanlı veritabanı yönetim araçları hakkında daha fazla bilgi edinmek için lütfen aşağıdaki sayfaları kontrol edin:
  * [Yönetim | Ücretsiz Web Tabanlı Veritabanı Yönetim Sistemi][14]
  * [En iyi açık kaynaklı DBMS yazılım araçları][1]
  * [2021'de Top 5 Açık Kaynak Veritabanı Yönetim Araçları][15]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
