---
title: "Kaynak Kodu Yönetimi Yazılımı | Git nedir?" 
seoTitle: "Kaynak Kodu Yönetimi Yazılımı | Git nedir?" 
description: "Git nedir? GIT, kaynak dosyalarınızı kaydetmenize, incelemenize ve projeleri verimli bir şekilde yönetmenize olanak tanıyan ücretsiz bir kaynak kod yönetimi yazılımıdır." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "Bu makalede, git & amp; Git nasıl çalışır? Git, kaynak kodu, track & amp; Günlük sürümleri." 
url: /tr/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## Bu makalede, git ve git nasıl çalışır? GIT, kaynak kodu, iz ve günlük sürümlerini yönetmek için tasarlanmış bir sürüm kontrol sistemidir.

{{< figure align=center src="images/version-control-banner.png" alt="Kaynak Kodu Yönetim Yazılımı">}}


## Genel Bakış
Bir proje üzerinde çalışan bir yazılım geliştiricisi olarak sizi hayal edin. Üzerinde çalışan birden fazla kişiniz var. Ve kaynak kodunu içeren tek bir dosya var. Hepsi kodda değişiklik yaparken, her değişiklik yaptıklarında dosyanın farklı sürümlerine sahip olacaklar. Peki, şimdi aynı dosyanın farklı sürümlerini nasıl yöneteceğiz? Kaynak kodu yönetimi yazılımı devreye girer. Aynı dosyanın farklı sürümlerini yönetmenize ve birleştirmenize yardımcı olur. Ve hatta değişim geçmişini izlemenize izin ver. Ve her zaman dosyadaki değişiklikleri ve bu değişikliklerin neler yaptığından emin olabilirsiniz.
Bu makalede, GIT sürüm kontrol sistemi hakkında bilgi edineceğiz. Yazılım geliştirme kaynak kod dosyalarınızı veya diğer dosyalarınızı yönetmek için nasıl kullanabilirsiniz. Öyleyse başlayalım.
  ***[Sürüm Kontrol Sistemi Nedir][1]** 
  ***[git nedir][2]** 
  ***[git nasıl çalışır][3]** 
  ***[Git'i yükle][4]** 
  ***[bir depo oluşturma][5]** 
  ***[Depodaki değişiklikleri kaydet][6]** 
  ***[Deponun durumunu kontrol edin][7]** 
  ***[değişiklikleri geri al veya geri alma][8]** 
  ***[Sonuç][9]** 

## Sürüm Kontrol Sistemi nedir   {#Sürüm-Kontrol}
Sürüm kontrolü, belirli sürümleri daha sonra hatırlayabilmeniz için zaman içinde değişiklikleri veya dosya kümesinde değişiklikleri kaydeden bir sistemdir. Bir yazılım geliştiriciyseniz ve kaynak kodu dosyasının sürümlerini tutmak istiyorsanız, kaynak kodu yönetimi yazılımı sizin için çok yararlı bir şeydir. Seçilen dosyaları önceki bir duruma geri döndürmenize, tüm projeyi önceki bir duruma geri döndürmenize, zaman içinde değişiklikleri karşılaştırmanıza, bir soruna neden olabilecek bir şeyi en son kimin değiştirdiğini, bir sorunu ve ne zaman ve daha fazlasını görmenizi sağlar. Sürüm kontrolünü kullanmak, işinizi kaybetme konusunda asla endişelenmenize gerek yoktur.

## git   {#git}
Git, küçük ve çok büyük projelere hız ve verimlilikle her şeyi işlemek için tasarlanmış ücretsiz ve açık kaynaklı bir sürüm kontrol sistemidir. SVN ve CVS gibi eski merkezi sürüm kontrol sistemlerinin aksine, git sürüm denetimi dağıtılır. Her geliştirici yerel olarak kod deposunun tam geçmişine sahiptir. Yine de, ilk klonu biraz yavaşlatır. Ancak, bundan sonra, tüm taahhütler ve diğer operasyonlar çok hızlı. Git, birbirinden tamamen bağımsız olabilecek birden fazla yerel şubeye sahip olmanızı sağlar.

## git nasıl çalışır   {#how}
GIT kullanarak yerel deponuzda değişiklikler yapabilir ve bir barındırma aracına itebilirsiniz. Veya başkalarının değişikliklerini barındırma aracından yerel makinenize çekebilirsiniz. Kaynak kodu yönetimi yazılımının (GIT) nasıl çalıştığına dair temel bir genel bakış.
  1. Herhangi bir barındırma aracıyla bir "depo" oluşturun (GitHub, GitLab veya Bitbucket gibi)
  2. Depoyu yerel makinenize klonlayın
  3. Yerel deponuza bir dosya ekleyin
  4. Yerel deponuzda değişiklikleri kaydet (taahhüt)
  5. Uzak bir barındırma üzerinde ana şubenizdeki değişikliklerinizi “itin”
  6. Bir git barındırma aracı ile dosyanızda bir değişiklik yapın ve taahhüt edin
  7. Yerel makinenizdeki değişiklikleri “çekin”
  8. Bir "Şube" (Sürüm) Oluşturun, Bir Değişiklik Yapın, Değişikliği Yapın
  9. Bir "Çekme İsteği" açın (Ana Şubede Değişiklikler Önerme)
 10. Şubenizi ana dalda “birleştirin”

## Git   {#install}
Git'i bilgisayarınıza yüklemek için farklı yöntemler vardır. Bir paket olarak veya başka bir yükleyici aracılığıyla yükleyebilir veya kaynak kodunu indirebilir ve kendiniz derleyebilirsiniz.

### Linux'a yükleme
Basic Git araçlarını Linux'a bir ikili yükleyici aracılığıyla yüklemek istiyorsanız, bunu genellikle dağıtımınızla birlikte gelen paket yönetim aracı aracılığıyla yapabilirsiniz. Fedora (veya RHEL veya CentOS gibi yakından ilgili RPM tabanlı herhangi bir dağılım için “DNF” kullanabilirsiniz.
```
$ sudo dnf install git-all
```
Ubuntu gibi Debian tabanlı bir dağıtımdaysanız, “Apt” i deneyin.
```
$ sudo apt install git-all
```

### MacOS üzerine yükleme
Git'i Mac'e yüklemenin birkaç yolu vardır. En kolay olanı muhtemelen Xcode komut satırı araçlarını yüklemektir. Mavericks (10.9) ya da daha yüksekte bunu ilk kez terminalden **git**  çalıştırmaya çalışarak yapabilirsiniz.
```
$ git --version
```
Zaten yüklü değilseniz, yüklemenizi isteyecektir.

## bir depo oluşturma   {#init}
Git deposu, kod dosyalarınız için sanal depolama alanıdır. Kodunuzun gerektiğinde erişebileceğiniz farklı sürümlerini depolamanıza olanak tanır.
Yeni bir repo oluşturmak için **git init  **komutunu kullanacaksınız. Git Init, yeni bir repo'nun ilk kurulumu sırasında kullandığınız tek seferlik bir komuttur. Bu komutun yürütülmesi, mevcut çalışma dizininizde yeni bir .git alt dizin oluşturacaktır. Bu aynı zamanda yeni bir **  Master**  şube oluşturacaktır.

{{< figure align=center src="images/git-init-2.gif" alt="Git nedir">}}


## Deposite değişikliklerini kaydet   {#commit}
Artık bir deponun başlatıldığına göre, dosya sürümü değişiklikleri yapabilirsiniz.

{{< figure align=center src="images/git-add-commit-1.gif" alt="git taahhüdü">}}


## Havuzun durumunu kontrol edin   {#status}
**git durumu  **komutu, çalışma dizininin ve evreleme alanının durumunu görüntüler. Hangi değişikliklerin yapıldığını, hangisinin yapmadığını ve hangi dosyaların Kaynak Kod Yönetimi Yazılımı (GIT) tarafından izlenmediğini görmenizi sağlar. Durum çıktısı size taahhüt edilen proje geçmişi hakkında herhangi bir bilgi göstermez. Bunun için **  git günlük**  kullanmanız gerekir.

{{< figure align=center src="images/git-status-2.gif" alt="Kaynak Kodu Yönetim Yazılımı">}}

GIT Günlüğü size aşağıdaki çıktıyı gösterecektir
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Değişikliklerinizi geri döndür   {#Revert}
Repo'nuzda zaten taahhüt ettiğiniz bir değişikliği geri almak için GIT REVERT komutunu kullanabilirsiniz. İlk olarak, taahhüt listesini almak için "git günlüğü" komutunu kullanın
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Ardından, hangi taahhütte geri dönmek istediğinize karar verin. Ve aşağıdaki gibi git revert komutunu kullanın
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Gördüğünüz gibi Git Revert, “ikinci taahhütte” yapılan değişiklikleri geri alan yeni bir taahhüt yarattı.

## Çözüm
Artık GIT ve GIT'in nasıl çalıştığını tartıştığımız tüm makaleyi okuduğunuza göre, kaynak kod yönetimi yazılımının farkında olmalısınız. Bunun amacı nedir ve neden buna ihtiyacınız var. Git'in projenizin kaynak kodunu yönetmenize nasıl yardımcı olabileceğini araştırdık. Ayrıca, başlatma ve depo için farklı git komutlarının nasıl kullanılacağını, değişikliklerinizi kaydetmek ve değişikliklerin nasıl geri alınacağını öğrendik. Yaklaşan öğreticilerimizde GIT'i daha fazla keşfedeceğiz ve kodunuzu daha iyi yönetmek için farklı komutları nasıl kullanabileceğimizi paylaşacağız.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  *[**GitHub Eylemleri ile Yazılım Geliştirme İş Akışlarını Otomatikleştirin** ][10]
  ***[GITLAB CI/CD ile Sürekli Dağıtım Boru Hattı Nasıl Kurulur][11]** 
  ***[dalları anlayın ve öğrenin ve istekleri GIT'de çekin][12]** 
  ***[2021'de Top 5 Açık Kaynak Sürüm Kontrol Sistemleri][13]** 

  
[1]: #version-control
[2]: #git
[3]: #how
[4]: #install
[5]: #init
[6]: #commit
[7]: #status
[8]: #revert
[9]: #conclusion
[10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
