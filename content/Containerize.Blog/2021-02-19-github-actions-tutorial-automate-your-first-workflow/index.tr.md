---
title: "Github Eylemler Eğitimi | İlk iş akışınızı otomatikleştirin" 
seoTitle: "Github Eylemler Eğitimi | İlk iş akışınızı otomatikleştirin" 
description: "Repo'umuzdan yazılım geliştirme iş akışlarımızı otomatikleştirmek ve yürütmek için GitHub Eylemleri'ni nasıl kullanabileceğimizi araştırmak için bu GitHub Eylemleri Eğitimi'ni izleyin." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "GitHub, sürekli entegrasyon ve amp; Github repo'nuzda bir yapılandırma dosyası kullanarak sürekli dağıtım." 
url: /tr/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## GitHub, GitHub repo'nuzda bir yapılandırma dosyasını kullanarak sürekli entegrasyon ve sürekli dağıtım ayarlamanıza izin veren GitHub eylemlerini tanıttı.

{{< figure align=center src="images/github-actions-workflows.png" alt="Github Eylemler Eğitimi">}}


## Genel Bakış
Bir yazılım projesinde verimliliği artırmanın en iyi yollarından biri, manuel veya tekrarlayan her şeyi otomatikleştirmektir. Ve  **GitHub Eylemleri **  gibi harika bir araç kullandığınızda otomasyonun uygulanması ne kadar kolay olduğuna şaşırabilirsiniz. Son birkaç makaleden bu yana, [GIT][1], [sürüm kontrolü][1] ve [yazılım geliştirme iş akışlarının otomasyonu][2] ve [sürekli entegrasyon ve sürekli teslimat][3 hakkında yazıyorum ]. Umarım şimdiye kadar, depoların ve bunların nasıl kullanılacağının farkındasınız.
Bugünün  **GitHub Eylemleri Eğitimi **  'da GitHub eylemlerini ve bunu uygulama otomasyonu, özelleştirme ve yazılım geliştirme iş akışlarınızı deponuzda yürütmek için nasıl kullanabileceğinizi keşfedeceğiz. Öyleyse başlayalım
  * **[CI/CD iş akışlarını gözden geçirin][4] ** 
  * **[GitHub Eylemleri Nelerdir][5] ** 
  * **[YAML sözdizimini anlamak][6] ** 
  * **[ilk iş akışınızı oluşturma][7] ** 
  * **[Sonuç][8] ** 

## CI/CD iş akışları   {#cicd}
CI/CD, yazılım geliştirme projelerinizin son kullanıcılara, otomasyon yardımıyla farklı aşamalarda sık sık dağıtımın bir yöntemidir.  **Sürekli Entegrasyon ve Sürekli Dağıtım **  Daha çok bir felsefe ve DevOps ekiplerinin uygulanması, kod değişikliklerini daha sık ve güvenilir bir şekilde sunmak için en iyi uygulamalardan biridir.
 **Sürekli Entegrasyon ** , geliştirme ekiplerini sürüm kontrol depolarına sık sık kod kontrol etmeye teşvik eden bir dizi uygulamadır. Ve depoya yapılan her itme için, uygulamanızı otomatik olarak oluşturmak ve test etmek için bir dizi komut dosyası oluşturabilirsiniz. Bu komut dosyaları, uygulamanızda hatalar getirme şansını azaltmaya yardımcı olur.
 **Sürekli Dağıtım **  CI/CD iş akışlarınızda bir adım önde. Bir kod değişikliği kod tabanına her itildiğinde yalnızca uygulamanızı oluşturmak ve test etmekle kalmaz, aynı zamanda uygulama da sürekli olarak sunucunuza dağıtılır.

## GitHub Eylemleri Nedir   {#Github-Actions}
Bu GitHub Eylemleri öğreticisinin bölümünde,  **Github Eylemleri **  ne olduğunu öğreneceğiz. Bununla birlikte, GitHub eylemleri GitHub üzerindeki neden ve etki için bir API'dır. Şimdi CI/CD ile tüm yazılım iş akışlarınızı otomatikleştirmenizi kolaylaştırır. Github yürütmeyi yönetirken, herhangi bir etkinliğe göre herhangi bir iş akışını tasarlayabilirsiniz. Ancak, eylemleri kendiniz yazmanız gerekmez. Github, insanların diğer insanlar tarafından oluşturulan eylemleri bulabileceği ve ihtiyaçlarına uygunsa onları yeniden kullanabilecekleri dahili bir pazara sahiptir. GitHub eylemleri Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET ve daha fazlasını destekler. Uygulamaları tercih ettiğiniz dilde oluşturun, test edin ve dağıtın.

## YAML Sözdizimi   {#yaml}
Önce  **GitHub Eylemlerinin **  sözdizimlerini ve terminolojilerini bilelim.
  * **İş Akışı: **  GitHub eylemi, uçtan uca  **sürekli entegrasyon ve sürekli dağıtım **  özellikleri oluşturma tesisini sağladığından, bu terim, akış CI aracı tarafından yürütülmeye başladığında bu noktayı ifade eder.
  * **İş ** : Bu terim, tek bir iş akışındaki tüm görevleri ifade eder. Bir iş akışı birden fazla iş içerir ve hepsinin başarısızlığı önlemek için yürütmelerini tamamlamaları gerekir.
  * **Adım: **  Bir işin yürütülmesini tamamlaması için, içine gömülü tüm adımları tamamlamalıdır.
  * **Eylem: **  Eylem, adımın birincil alt kümesi ve iş akışının en küçük alt kümesidir. Her adım, başarılı bir şekilde yürütülmesi gereken birden fazla eylemden oluşur.
Gördüğünüz gibi iş akışını, iş, adım ve eylem birbirine bağlıdır ve CI/CD boru hattının başarılı bir şekilde tamamlanması için her şeyin başarılı bir şekilde yürütülmesi gereklidir.

## bir iş akışı oluştur   {#workflow}
Bir yazılım geliştirme projesinde, geliştirme ekiplerinin karşılaştığı sorunlardan biri kaynak kodunun biçimi ve en iyi uygulamaların uygulanmasıdır. Bu sorun daha büyük takımlar için daha açıktır. Daha fazla geliştirici içerdikleri ve herkesin kendi yazma kodu tarzı vardır. Dolayısıyla Linter paketlerinin kullanımı ekipler arasında çok yaygındır. Ama şimdi  **GitHub Eylemleri **  ile, birisi kodu Github Repo'ya her ittiğinde Linter'ı gerçekten zorlayabilirsiniz.
Bu GitHub Eylemleri öğreticisinde, [GitHub Super-Linter][9] eylemini kullanarak birden fazla kodlama dilini ayarlayan bir iş akışı ekleyeceksiniz. İş akışı, deponuza her yeni bir taahhüt itildiğinde kaynak kodunuzu doğrulamak için süper linter kullanır.
GitHub'daki deponuzdan **. GitHub/Workflows  **dizininde **  SuperLinter.yml ** adlı yeni bir dosya oluşturun ve aşağıdaki içeriği içine kopyalayın
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
İş akışınızı çalıştırmak için değişiklikleri GitHub deponuza götürün ve itin. Bu push etkinliği süperterer iş akışını tetikleyecektir. Ve şimdi, eylemin sekmesine girerek iş akışınızın sonuçlarını görüntüleyebilirsiniz.

{{< figure align=center src="images/actions-tab.png" alt="Github Eylemler Eğitimi">}}

Sol kenar çubuğunda, görmek istediğiniz iş akışını tıklayın.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Github Eylemler İş Akışı">}}

Kodunuzdaki sorunları bulmanıza yardımcı olmak için deposunuza her itildiğinde çalıştırma eklediğiniz süper linter iş akışı. Deponuz, farklı olaylara dayalı farklı işleri tetikleyen birden fazla iş akışına sahip olabilir. GitHub eylemleri, uygulama geliştirme süreçlerinizin neredeyse her yönünü otomatikleştirmenize yardımcı olabilir. Bu sadece GitHub eylemlerine temel bir girişti. Kullanabileceğiniz Github eylemleri hakkında derinlemesine bilgi için tonlarca [kaynak][10] vardır.

## Sonuç   {#Conclusion}
Bu  **GitHub Eylemleri Eğitimi ** ,  **Sürekli Entegrasyon ve Sürekli Dağıtım **  ve  **Github Eylemleri **  hakkında öğrendik. Ayrıca, bir CI/CD iş akışı oluşturmak için  **GitHub Eylemleri **  nasıl kullanabileceğimizi de araştırdık. Kod tabanımızdaki tutarsızlıkları bulmak için GitHub Actions Pazarı'ndan basit bir süper astar iş akışı kullandık. Yaklaşan makalelerde, Github eylemlerini daha derinlemesine keşfedeceğiz. Ayrıca, aşağıdaki “Keşfet” bölümünde belirtilen  **sürüm kontrol sistemi **  ile ilgili diğer blog yayınlarını bulabilirsiniz.
Son olarak, [Containerize.com][11] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [sürüm kontrol yazılımı][12] kategorisiyle iletişim halinde olun. Dahası, bizi sosyal medya hesaplarımızda [Facebook][13], [LinkedIn][14] ve [Twitter][15] 'te takip edebilirsiniz.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [GitLab Sürekli Dağıtım | Nasıl çalışır?][16]
  * [GIT'de dalları anlayın ve öğrenin ve talepleri çekin][2]
  * [Kaynak Kodu Yönetimi Yazılımı | Git nedir?][17]
  * [2021'de Top 5 Açık Kaynak Sürüm Kontrol Sistemleri][18]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
