---
title: "Windows 'için Keepass şifre yöneticisini kurulup yönetin" 
seoTitle: "Windows için Keepass şifre yöneticisini kurulup yönetin" 
description: "Keepass, popüler, güvenli, ücretsiz ve açık kaynaklı bir şifre yöneticisidir. Bu kılavuz, Windows kullanıcılarının Keepass kullanarak şifreleri ayarlamasına ve yönetmelerine yardımcı olacaktır." 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepass, popüler, güvenli, ücretsiz ve açık kaynaklı bir şifre yöneticisidir. Bu kılavuz, Windows kullanıcılarının Keepass kullanarak şifreleri ayarlamasına ve yönetmelerine yardımcı olacaktır." 
url: /tr/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## Keepass, popüler, güvenli, ücretsiz ve açık kaynaklı bir şifre yöneticisidir. Bu kılavuz, Windows kullanıcılarının Keepass kullanarak şifreleri ayarlamasına ve yönetmelerine yardımcı olacaktır.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="Windows için Keepass şifre yöneticisini kurulup yönetin">}}


## Genel bakış {#overview}

Farklı web siteleri ve uygulamalar için tüm farklı şifre kombinasyonlarını hatırlamak kolay bir iş değildir ve bunları bir kağıda yazarken kolay bir çözüm gibi görünebilir. Bu yöntemde çok fazla güvenlik yoktur, çünkü kolayca kaybedebilirsiniz veya yanlış kişinin eline düşebilir.  **Keepass Parola Yöneticisi**  Windows için bu sorunların çözümlerinden biridir.
Parola yöneticileri ise, kullanıcıların tüm şifrelerini bir yerde depolamalarını ve ihtiyaç duydukları zaman erişmelerini kolaylaştırır. Keepass  **en iyi açık kaynak şifre yöneticilerinden biridir**  Dışarıda, sadece indirmek için ücretsiz değil, aynı zamanda taşınabilir ve şifre dosyasını bir USB'de depolayabilir veya Dropbox, Google Drive veya diğerlerine yükleyebilirsiniz. Bulut depolama seçeneği. Uçtan uca şifreleme ile, yalnızca şifrelerin sahibi, parola dosyasına güvenliği garanti eden ana anahtarla erişebilir. Açık kaynak şifre yöneticisi Keepass, kullanıcının teknik bilgiye sahip, eksik güvenlik özelliğinin olmadığından emin olmak için kaynak kodunu kendileri denetlemesine olanak tanır.
  * [Windows'ta Keepass'ı Kurulum][1]
  * [Keepass kullanarak şifreleri yönetin][2]
  * [Sonuç][3]

## Windows'ta Keepass'ı ayarlayın {#setup}

 **Indirin ve yükle** 
Keepass yazılımını yüklemeden önce, Windows sürüm 7, 8 veya 10 kullandığınızdan emin olun ve Keekass şifre yöneticisinin en son sürümüne sahip olun. Windows yükleyicisini gidip Windows için  **Keepass 2.47**  tıklayarak indirebilirsiniz.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="Windows için Keepass şifre yöneticisini kurun ve yönetin">}}

İndirme tamamlandıktan sonra, yükleyiciyi çalıştırın ve Keepass Manager'ın en son güncellemeleri için otomatik kontrolleri etkinleştirmeniz veya devre dışı bırakmanız istenecektir. Bu, en son sürümleri izinsiz otomatik olarak indireceği veya yükleyeceği anlamına gelmez. Keepass sunucusu açık kaynak yazılımı GNU GPL altında lisanslanmıştır. Kurulumdan sonra, şimdi aşağıdaki gibi boş bir pencere göreceksiniz:

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="Windows için Keepass şifre yöneticisini kurun ve yönetin">}}

 **Yeni veritabanı oluştur** 
Şimdi şifrelerinizi depolamak için bir veritabanı oluşturmaya başlayacağız, işte adımlar.  **Dosya** tıklayın. Bir veritabanının oluşturulacağı  **yeni**  seçin. Aşağıdaki istemi göreceksiniz. **Tamam'a tıklayın.**  

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="Windows için Keepass Parola Yöneticisi'ni kurun ve yönetin Yeni DB">}}

Burada bilgisayarımıza**KDBX dosyasını (tüm şifrelerinizi alacak) kaydetmeniz istenecektir. Bilgisayarınızda Keepass for ekiplerin bulunduğu aynı klasöre kaydettiğinizden emin olun.

## Keepass kullanarak şifreleri yönetin {#manage}

 **Ana şifre oluştur** 
Şimdi .kdbx dosyasına erişebileceğiniz şifre olacak bir ana anahtar oluşturmanız gerekecek. Parolanın büyük harf, küçük harfli alfabeler, özel karakterler, rakamlar vb. Keepass ücretsiz şifre yöneticisi, ana anahtarınızın ne kadar güçlü veya zayıf olduğu konusunda bir gösterge sağlayacaktır.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="Windows için Keepass şifre yöneticisini kurun ve yönetin">}}

 **Şifrelerinizi kaydedin** 
Bir ana anahtar oluşturduktan sonra, veritabanı şifreleri kaydetmeye başlayabileceğiniz yerden açılır. Keepass, varsayılan olarak 2 şifre girişi sağlar, bunları silebilir ve kendiniz eklemeye başlayabilirsiniz.

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="Windows için Keepass şifre yöneticisini kurulup yönetin">}}

Yeni bir giriş oluşturmak için yeni bir şifre girişi oluşturmak için Sarı Anahtar simgesine tıklayın. Parolanızı girmeniz, tekrarlamanız, bu şifrenin kullanılacağı URL'yi, kullanıcı adı ve daha fazlasını sağlamanız gereken yeni bir ekran açılacaktır. Parolayı girerken, noktalarla gizlenir ve sağdaki  **Üç Nokta simgesine**  tıklayarak açıklanabilir.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="Windows için Keepass şifre yöneticisini kurulup yönetin">}}

 **Keepass kullanarak giriş yapın** 
Veritabanına kaydedilen şifrelerle giriş yapmak için:
* Parola girişine sağ tıklayın ve  **Kopyala Kullanıcı Adını Kopyala**  Şimdi bu kullanıcı adını kullanıcı adı için web sitesinin alanına yapıştırın.
* Şimdi Keepass Parola Yöneticisi'ndeki aynı girişe sağ tıklayın ve  **Parolayı Kopyala**  seçin ve şifre alanının bulunduğu web sitesine yapıştırın.
  * Kopyalama ve yapıştırmanızla hızlı olmanız gerektiğini lütfen unutmayın, çünkü şifre 12 saniye sonra Keepass tarafından panonuzdan kaldırılır. Bu zaman kısıtlaması Keepass Password Safe Manager ile değiştirilebilir.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="Windows için Keepass şifre yöneticisini kurulup yönetin">}}

 **Dikkate alınması gereken diğer şifre yöneticisi seçenekleri:**  
Piyasada düzinelerce başka açık kaynak şifre yöneticisi var. Benzersiz ve karmaşık şifreleri depolamak için güvenli, popüler, kendi kendine barındırılan ve açık kaynak şifre yöneticileri kullanarak hesapların kimlik bilgilerinizi güvende tutabilirsiniz. Aşağıda listelenen birkaç şifre yöneticisi:
* [  **Padloc**  ][4] aileler ve ekipler için basit, güvenli minimalist şifre yöneticisi ve veri yönetimi olarak tasarlanmıştır.
* [  **Passbolt**  ][5], Agile ve DevOps ekiplerinin ihtiyaçları için tasarlanmış kendi kendine erişim kolay bir şifre yöneticisidir.
* [  **Parola Güvenli**  ][6] güvenli, basit ve anlaşılması kolay arayüze sahip açık kaynaklı şifre yöneticisi programıdır.
* [  **Bitwarden**  ][7] güvenli, ücretsiz indirmek ve açık kaynaklı entegre şifre yönetimi çözümüdür.
* [  **PSONO**  ][8] kendi kendine barındırılan bir kimlik bilgileri ve ekipler için şifre yöneticisidir. Maksimum güvenlik için çok katmanlı şifreleme sağlar.

## Çözüm {#conclusion}

Keepass, şifrelerinizi yönetmenin kolay, güvenli ve taşınabilir bir yoludur. Şifrelerinizi özelleştirmenize, güvenli kombinasyonlar oluşturmanıza ve kullanıcı adıyla farklı web siteleri için birden fazla şifre girişini kaydetmenize olanak tanır. En iyi şifre yöneticisi Keepass'ı kullanmak, uçtan uca şifreleme mekanizması kullandığı ve maksimum güvenlik için SH-256 karma işlevine dayandığı için güvenlidir.
Ayrıca, [  **Containerize.com** ][9] açık kaynaklı ürünlerin birden fazla dil ve çerçevede yığınını geliştirme yolunda. Düzenli güncellemeler için lütfen daha ilginç makaleler için **[şifre yönetimi][10]**  kategorisinde bizi izlemeye devam edin.

## Keşfetmek
Bu makalede Windows için Keepass şifre yöneticisinin nasıl kurulacağını ve yönetileceğini tartıştık. İlgili aşağıdaki bağlantıları bulabilirsiniz:
*  **[2021'de Top 5 Açık Kaynak Şifre Yöneticisi][11]**  
*  **[En İyi Açık Kaynak Şifre Yönetim Yazılımı][12]**  
*  **[Keepass | Güvenli, Taşınabilir ve Açık Kaynak Şifre Yöneticisi][13]**  



 [1]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#setup
 [2]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#manage
 [3]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#conclusion
 [4]: https://padloc.app/
 [5]: https://products.containerize.com/password-management/passbolt/
 [6]: https://products.containerize.com/password-management/password-safe/
 [7]: https://products.containerize.com/password-management/bitwarden/
 [8]: https://products.containerize.com/password-management/psono/
 [9]: https://www.containerize.com/
 [10]: https://blog.containerize.com/category/password-management/
 [11]: https://blog.containerize.com/password-management/top-5-open-source-password-managers-in-2021/
 [12]: https://products.containerize.com/password-management/
 [13]: https://products.containerize.com/password-management/keepass
