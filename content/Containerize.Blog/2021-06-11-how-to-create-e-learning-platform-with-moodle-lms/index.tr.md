---
title: "Moodle LMS ile e-öğrenme web sitesi nasıl oluşturulur" 
seoTitle: "Moodle LMS ile e-öğrenme web sitesi nasıl oluşturulur" 
description: "Moodle LMS, bir çevrimiçi öğrenme platformu oluşturmak için ücretsiz ve açık kaynaklı bir e-öğrenme çözümüdür. Kendinizi tanımak için kılavuza göz atın." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Açık kaynaklı e-öğrenme platformuna sahip bir çevrimiçi öğrenme platformu oluşturun. Bu makalede, uzaktan eğitim sitesi oluşturmak için Moodle LMS'nin nasıl kullanılacağı açıklanmaktadır." 
url: /tr/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Açık kaynaklı e-öğrenme platformuna sahip bir çevrimiçi öğrenme platformu oluşturun. Bu makalede, uzaktan eğitim sitesi oluşturmak için Moodle LMS'nin nasıl kullanılacağı açıklanmaktadır.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Bir yıldan fazla bir süredir Covid 19 tarafından etkilendik. Dünyanın her kısmı kilitlenmiştir. Tüm dünyadaki insanların yaşamları ve işletmeleri üzerinde olumsuz bir etkisi vardır. Daha da önemlisi, eğitim sistemimiz üzerinde büyük bir etkisi vardır. Eğitim kurumları, öğrencilerin eğitimlerine kendi evlerinin rahatlığında devam edebilmeleri için çevrimiçi öğrenmeye geçiş yapmak zorundadır. Sağlam ve güvenli bir e-öğrenme platformu olmadan, çevrimiçi öğrenme imkansızdır. Bu makalede, öğretmenlerin ve öğrencilerin her yerden iletişim kurmalarını ve öğrenmelerini sağlayan ** Moodle Açık Kaynak ** projesine bakacağız.
Moodle kullanarak ** e-öğrenme web sitesi ** oluşturmak için bu makaledeki aşağıdaki bölümleri ele alacağız.
  * [Önkoşul][1]
  * [Moodle nedir?][2]
  * [Moodle'ın özellikleri][3]
  * [Moodle kurulumu][4]
  * [Sonuç][5]

## Önkoşullar {#prerequisites}
Henüz yapmadıysanız, sunucunuza lamba ortamını yüklemeniz ve yapılandırmanız gerekir.

## Moodle nedir? {#Ne}
[** Moodle **][6] ücretsiz ve açık kaynaklı bir e-öğrenme çözümüdür. Moodle, modüler nesne odaklı dinamik öğrenme ortamını temsil eder. Eğitimcilere, yöneticilere ve öğrencilere kişiselleştirilmiş öğrenme ortamları oluşturmak ve sunmak için bir e-öğrenme platformu vermek için oluşturuldu. Ayrıca, Moodle okullar için uygun bir ** lms, üniversiteler ve şirketlerde profesyonel eğitim kurslarıdır. Bir LMS web sitesi oluşturmak için popüler ** uzaktan eğitim ** çözümlerinden biridir. Buna ek olarak, Moodle öğretmenlere ve öğrencilere zengin araçlar ve işbirlikçi öğrenme ortamları sağlar. Moodle, iPhone, Android ve Windows telefonları ve tabletler için bir mobil uygulamaya sahiptir. Mobil uygulama dünyanın herhangi bir yerinden kullanılabilir. Bu ** kendi kendine barındırılan LMS ** PHP'de yazılır ve MySQL/PostgreSQL veritabanlarında verileri depolar. Kapsamlı kullanıcı ve geliştirici belgeleri ile birlikte gelir. Tüm kaynak kodu [** github **][7] adresinde mevcuttur. Bu açık kaynak ** e-öğrenme çözümü ** için lisans GPLV3 +'dır.

## Moodle özellikleri {#features}
Moodle birçok özellik ile geliyor. Ancak, bu makalede, aşağıdaki temel özelliklerden bazılarını gözden geçireceğiz.
** İşbirlikçi Araçlar ve Etkinlikler **: Forumlar, Wikiler, Sözlükler, Veritabanı etkinlikleri ve diğer araçlar, kullanıcıların birlikte çalışmasına ve birlikte öğrenmelerine olanak tanır. Moodle kursundaki bir grup unsur bir etkinlik olarak adlandırılır. Etkinlik tipik olarak bir öğrencinin yaptığı diğer öğrencilerle ve/veya öğretmenle etkileşime girdiği bir şeydir.
** İlerleme İlerleme **: Eğitimciler ve öğrenciler, belirli etkinlikleri veya materyalleri izlemek için çeşitli araçlar kullanarak ilerlemelerini ve tamamlanmalarını takip edebilirler. Moodle'da öğrenci ilerlemesini izlemenin notlar, yetkinlikler, etkinlik tamamlama, dersin tamamlanması, rozetler, kurs raporları ve analitik gibi birkaç yolu vardır.
** Eklentiler Yönetimi **: Eklentiler, yeni özellikler ekleyerek Moodle’ın temel işlevselliğini genişletmenizi sağlar. Kullanıcılar, ek etkinlikler, yeni sınav soru türleri, yeni raporlar, sistem konektörleri ve daha fazlası gibi çeşitli görevler için eklentiler ekleyebilir. Eklentileri yüklemek ve devre dışı bırakmak için bir yönetici arayüzü kullanılabilir.
** Kurs Yönetimi **: Çeşitli ihtiyaçları karşılayan kurslar oluşturun ve yönetin. Eğitmen liderliğindeki sınıflar, kendi kendine tempolu sınıflar, harmanlanmış sınıflar ve tamamen çevrimiçi sınıflar seçeneklerdir.
** Akran ve Öz Değerlendirme **: Çalıştaylar ve anketler, öğrencileri grup olarak kendi ve diğer sınıf arkadaşlarının çalışmalarını görüntülemeye, sınıflandırmaya ve gözden geçirmeye teşvik eden yerleşik etkinliklerdir.

## Moodle kurulumu {#moodle}
Ubuntu 18.04'e Moodle LMS'yi kurmak için aşağıda adım adım kılavuzu izleyin.
  * İlk olarak, DirectLory indir ve indirmek için aşağıdaki komutları çalıştırın Moodle'ı indirin.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Aşağıdaki komutları çalıştırın Veri dizini oluşturun ve izinleri ayarlayın.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Moodle sitesi için nginx yapılandırma dosyası oluşturun.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Aşağıdaki kodu ekleyin ve dosyayı kaydedin.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Yeni oluşturulan siteyi etkinleştirmek için SymLink oluşturun.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Nginx web sunucusunu yeniden başlatın.
```
sudo systemctl restart nginx
```
  * Ardından, tarayıcınızı açın ve http://example.com yazın. “Örnek.com” u sunucunuzun gerçek alan adı veya IP ile değiştirin.
  * Şimdi kurulum sihirbazını görebilirsiniz. Bir dil seçin ve sonraki düğmeye tıklayın.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Bir Dil Seçin">}}

  * Site URL'sinin, Moodle Kök Dizini ve Veri Dizini yollarının doğru olduğundan emin olmanız ve incelemeniz gerekir. “Veri dizini” yolunu da değiştirebilirsiniz ve güvenlik için Moodle Kod Dizini'nin dışında olmalıdır. Sonraki düğmeye tıklayın.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Veri dizin yolunu ayarlayın">}}

  * Bu adımda bir veritabanı sürücüsü seçin. Ancak, zaten seçilmiş olanı kullanabilir ve bir sonraki düğmeye tıklayabilirsiniz.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - Veritabanı Sürücüsü'nü seçin">}}

  * Veritabanı ana bilgisayar, veritabanı adı, veritabanı kullanıcısı, veritabanı parolası ve tablo ön eki gibi veritabanı ayarları sağlayın. Sonraki düğmeye tıklayın.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Veritabanı Ayarları">}}

  * Şartlar ve koşulları kabul etmek için onay düğmesine tıklayın.
  * Gerekli PHP uzantılarının bir listesini görebilirsiniz. Ancak, eksik eklentileri yüklemeniz gerekecektir. Bir sonraki adımı taşımak için devam et düğmesine tıklayın.
  * Bu noktada, bir hesap oluşturmak için yönetici verilerini doldurmanız gerekir. "Profili Güncelle" düğmesine tıklayın.
  * Siteniz için tam site adı, site için kısa isim, front-sayfa özeti, varsayılan saat dilimleri ve reply e-posta gibi bilgi verin. "Değişiklikleri Kaydet" düğmesine tıklayın.
  * Site adı, dil, bölge, e -posta adresi vb. Gibi bilgileri sağlayarak site kaydınızı tamamlayın.

## Sonuç {#Conclusion}
Moodle ve bu makaledeki ana özelliklerini öğrendik. Ayrıca e-öğrenme web sitesi ** oluşturmak için ** Moodle LMS ** kurmak için adım adım bir yaklaşımdan geçtik **. Kurslar, öğrenci kaydı, ilerleme izleme vb. Umarım bu yazıyı bir LMS web sitesi oluşturmada yararlı bulmuşsunuzdur.
Son olarak, [** Containerize.com **][9], daha sonraki açık kaynaklı ürünlere blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [** Öğrenme Yönetim Sistemi **][10] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  *[** Açık kaynaklı LMS araçları **][11]
  *[** Moodle-E-öğrenme sistemi **][12]

  
[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
