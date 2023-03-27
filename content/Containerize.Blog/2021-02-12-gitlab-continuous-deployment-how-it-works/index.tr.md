---
title: "GitLab Sürekli Dağıtım | Nasıl çalışır?" 
seoTitle: "GitLab Sürekli Dağıtım | Nasıl çalışır?" 
description: "Bu öğreticide, GitLab ile sürekli bir dağıtım boru hattı oluşturacağız. GitLab sürekli dağıtım, DevOps'un otomatik dağıtım yapmasına yardımcı olur." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "Otomatik dağıtım iş akışınızı kolaylaştırır & amp; süreçler. Bu GitLab öğreticisi, GitLab CI/CD'yi kullanarak sürekli bir dağıtım boru hattı oluşturmayı öğrenmenize yardımcı olur." 
url: /tr/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## Otomatik dağıtım iş akışınızı ve işlemlerinizi kolaylaştırır. Bu GitLab öğreticisi, GitLab CI/CD'yi kullanarak sürekli bir dağıtım boru hattı oluşturmayı öğrenmenize yardımcı olur.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="GitLab sürekli dağıtım">}}


## Genel Bakış
Son birkaç makalede, [sürüm kontrolünün temelleri][1] hakkında öğrendik ve sonra farklı [dallanma modelleri][2] ve iş akışlarını öğrenerek bilgimizi geliştirdik. Sürüm kontrol sistemi, kalkınma, dağıtım ve entegrasyon dünyasında verimlilik getirmiştir. Geliştiriciler, yapılar ve testler hakkında endişelenmeden kaynak kodunu işlemeyi çok kolay buluyorlar. Yazılım endüstrisi, bu yaklaşım dağıtımları önyüklerken güven ve rekabet avantajı kazanmıştır.
**GitLab sürekli dağıtım** ve entegrasyon sorunları kolayca bulmaya yardımcı olur. Dahası, geliştiriciler hataları ve diğer özledim kullanımını daha kısa sürede izleyebilirler. Bu otomasyon süreci, sık sık gerçekleşen ve insan gücünü ve hata şansını azaltan görevlerden özgürlük verir. Bugün bu blog yazısında GitLab CI/CD ile sürekli dağıtım boru hattı hakkında araştıracağız. Öyleyse, aşağıdaki noktaları ele alarak başlayalım!
* **[CI & CD nedir][3]** 
* **[Gitlab Runner nedir][4]** 
* **[. Gitlab-ci.yml dosyası][5]** 
* **[Temel Örnek Uygulama Oluştur][6]** 
* **[Sonuç][7]** 

## CI & CD nedir {#cicd}

Sürekli Entegrasyon (CI), kod değişikliklerinin birden fazla katkıda bulunanlardan entegrasyonunu tek bir yazılım projesine otomatikleştirmenin en iyi uygulamalarından biridir. Bu, geliştiricilerin kod değişikliklerini sık sık yapı ve testlerin yürütüldüğü merkezi bir depoya birleştirmesine olanak tanır. Sürekli dağıtım (CD), her kod taahhüt ettikten ve derlemelerin ardından kod kodunu hedef ortama (üretim veya evreleme) otomatik olarak dağıtarak bir adım daha ileri hareket eder.
Başlamadan önce, GitLab'da CI/CD'yi kullanmak istediğiniz bir projeniz olduğundan emin olun. Ve projeye bakıcı veya sahip düzeyinde erişiminiz olmalıdır.

## Gitlab koşucusu nedir {#runner}

**GitLab sürekli dağıtım** anladıktan sonra, GitLab Runner, yerel makinenizde sürekli entegrasyon (CI) ile ilgili işleri çalıştıran ve değişiklikleri dikkate alması için sonuçları GitLab'a gönderen küçük bir hafif programdır. Herhangi bir büyük işletim sistemine kurulabilen tek bir yürütülebilir ikilidir.
GitLab CI / CD ile ilerlemeden önce, görevlerinizi çalıştırmak için kullanılabilir koşuculara sahip olduğunuzdan emin olmanız gerekir. [Kurulum][8] ve [Register][9] Gitlab Runner'ın resmi kılavuzunu takip edebilirsiniz.

## .gitlab-ci.yml dosyası {#yml}

**. Gitlab-ci.yml**, GitLab CI/CD için belirli talimatları yapılandırdığınız bir dosyadır. Deponuzun köküne yerleştirilir ve projenizin nasıl inşa edilmesi gerektiğine dair tanımlar içerir. Gitlab örneğimize her taahhütte bulunduğumuzda, GITLAB bir koşucuyu bu dosya içinde talimat verildiği gibi projeyi inşa etmek ve test etmek için çağırır.

## Örnek bir uygulama oluştur {#sample}

Bu **Gitlab öğreticisi** bölümünde örnek bir uygulama oluşturacağız. Zaten bir GITLAB deposu oluşturduğunuzu varsayarsak, örnek bir uygulama oluşturalım ve uygulama için bir CI / CD işlemi oluşturacağız.
Her şeyden önce, projenizin kökünde package.json dosyası oluştur
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
Şimdi projenizin kökünde bir App.js oluşturun
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
**GitLab sürekli dağıtımının son adımında,**bir** dockerfile**oluşturun ve aşağıdaki içeriği ekleyin:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
DockerFile bu uygulama için oluşturma işlemini içerir. Bir düğüm kabı oluşturmayı ve bağımlılıkların kurulmasını içerir.
Şimdi bir **. Gitlab-ci.yml** dosyası oluşturmamız gerekiyor. Bu dosya projemizi oluşturmak için talimatları içerecektir. Gitlab depomuza her taahhütte bulunduğumuzda, Gitlab bir koşucuyu projeyi inşa etmek için çağırırdı.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
Sadece bir aşamalı yapımız var ve komut dosyası olarak **npm yükleme** var. Bu, projenize her değişiklik geldiğinde manuel olarak çalıştırmanız gereken bir komuttur. Ve Gitlab Runner'ın devreye girdiği yer burası ve her bir taahhütte bulunduğunuzda bunu otomatik olarak yapar.
Şimdi GitLab Runner'ı zaten yüklediğinizi ve GitLab örneğinizle kaydettiğinizi varsayarsak, GitLab CI / CD'sini uygulamaya basit bir taahhütte bulunarak ve GitLab'a iterek çalıştırabiliriz.
Daha sonra projenizi GitLab'da açabilir, proje → boru hattına gidebilir ve yaptığınız taahhütün yanında “geçti” diyen bir etiket göreceksiniz. Sonraki taahhütlerde de etiketler olacaktır.

## Çözüm {#conclusion}

Bu bizi bu **Gitlab öğreticisinin sonuna getiriyor**. Bu makalede, GitLab sürekli entegrasyonunun temellerini öğrendik, **CI & CD** , **Gitlab Runner** ve sürekli dağıtım nedir. Ayrıca, genel CI / CD iş akışında koşucuların kullanımının ne olduğunu inceledik. Ayrıca GitLab kullanarak sürekli dağıtımın nasıl kurulacağını açıklayan örnek bir proje oluşturduk. **Gitlab sürekli dağıtım** arıyorsanız bu GitLab öğreticisi size gerçekten yardımcı olacaktır. Ancak, aşağıdaki “Keşfet” bölümünde belirtilen başka birçok kaynak vardır. Ayrıca, makaleler açık kaynaklı, kendi kendine barındırılan ve genişletilebilir**sürüm kontrol sistemleri** hakkında.
Son olarak, [Containerize.com][10] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Bu nedenle, düzenli güncellemeler için lütfen [][11][sürüm kontrol yazılımı][12] kategorisiyle iletişime geçin. Dahası, bizi sosyal medya hesaplarımızda [Facebook][13], [LinkedIn][14] ve [Twitter][15] 'te takip edebilirsiniz.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  * [Github eylemleriyle yazılım geliştirme iş akışlarını otomatikleştirin][16]
  * [GIT'de dalları anlayın ve öğrenin ve talepleri çekin][2]
  * [Kaynak Kodu Yönetimi Yazılımı | Git nedir?][17]
  * [2021'de Top 5 Açık Kaynak Sürüm Kontrol Sistemleri][18]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][19]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
