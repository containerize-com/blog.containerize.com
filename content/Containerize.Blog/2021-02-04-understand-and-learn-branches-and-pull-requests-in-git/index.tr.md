---
title: "GIT'de dalları anlayın ve öğrenin ve istekleri çekin" 
seoTitle: "GIT'de dalları anlayın ve öğrenin ve istekleri çekin" 
description: "Git en popüler sürüm kontrol sistemlerinden biridir. Bu articl dişi, Git dallarının nasıl kullanılacağını ve istekleri nasıl kullanacağınızı anlayacağız." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Git dalı, GIT sürüm kontrol sisteminin temel bileşenidir. Bu öğreticide farklı dallanma modellerini keşfedeceğiz" 
url: /tr/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## git dalı, git sürüm kontrol sisteminin temel bileşenidir. Bu öğreticide farklı dallanma modellerini keşfedeceğiz

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Git çekme talepleri dalları">}}

[Son makalemiz][1] 'de GIT ve sürüm kontrol sistemlerinin temellerini öğrendik. Adım adım attık ve bir git deposunun nasıl kurulacağını öğrendik. Ayrıca, bir şubeye nasıl değişiklik ekleyeceğinizi ve değişikliklerinizi geri almak isterseniz bunları geri döndürmeyi öğrendik. Artık sürüm kontrol sistemlerinin temellerini, özellikle de Git'i anladığımıza göre. Bu blog yazısında, GIT dallarının nasıl kullanılacağını ve istekleri nasıl kullanacağınızı tartışacağız. Farklı iş akışlarını öğreneceğiz. Öyleyse başlayalım!
* **[git dalları nedir][2]** 
* **[Git dallarını oluştur / değiştir][3]** 
* **[Çekme isteği nedir][4]** 
* **[Popüler Git dallanma modelleri][5]** 
* [ **Sonuç** ][6]

## Git şubeleri nelerdir {#branch}


{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="Git Şubeleri">}}

Şubeler ve neden dallara ve kodumuzla verimli çalışmak için kullanabileceğimiz dallanma stratejilerine ihtiyacımız var. Adından da anlaşılacağı gibi **dal** bir kökten bağımsız bir gelişim hattını temsil eder.
Bir depo oluşturduğunuzda, temel olarak bir şube oluşturursunuz, bu da bir master (veya varsayılan) şube diyebiliriz. Master şubemizde değişiklikler yapabiliriz. Ancak bir özellik üzerinde çalışmanız ve kodunuzu ana şubeden ayırmak istemiyorsanız. Yani, şubeler size yardımcı olur. Dalmanıza ve daha sonra birleşmenize izin verdiler.

## Git dallarını oluştur / değiştir {#create}

```
git branch
```
Komut, şubeleri oluşturmanıza, listelemenize, yeniden adlandırmanıza ve silmenize olanak tanır. Şubeler arasında geçiş yapmanıza izin vermez, bunun için GIT ödeme komutunu kullanmalıyız. Veya değişikliklerinizi bir şubeye geri birleştirmek istiyorsanız, **git birleştirme** komutunu kullanmanız gerekir.
Şubelerin sadece taahhütlere işaret edenler olduğunu anlamak önemlidir. Bir dal oluşturduğunuzda, Git'in yapması gereken tek şey yeni bir işaretçi oluşturmaktır, depoyu başka bir şekilde değiştirmez.
Bir dal oluşturmak için aşağıdaki komutu kullanın
```
git branch <branch-name>
```
Bir şube üzerinde çalışmayı bitirdikten ve ana kod tabanıyla birleştirdikten sonra, aşağıdaki komutu kullanarak herhangi bir geçmişi kaybetmeden şubeyi silmekte özgürsünüz
```
git branch -d <branch-name>
```

## Çekme isteği nedir {#pull}

Çekme isteği, GIT gibi bir sürüm kontrol sistemi kullanarak bir yazılım projesine katkı göndermenin bir yoludur. Geliştiriciler, bir kod tabanında değişiklik önermek için çekme isteklerini kullanır. Bir çekme isteği açıldıktan sonra, işbirlikçileriyle potansiyel değişiklikleri tartışabilir ve gözden geçirebilir ve değişiklikleriniz temel şubeye birleştirilmeden önce takip taahhütleri ekleyebilirsiniz.
Bir geliştirici bir çekme isteği açtığında, yaptığı tek şey başka bir geliştiriciye talep etmek, deposundan bir şubeyi depolarına çeker. Bu, bir çekme isteği oluşturmak için 4 giriş değeri sağlaması gerektiği anlamına gelir: kaynak deposu, kaynak dalı, hedef depo ve hedef şube.

## Popüler dallanma modelleri {#model}

Dünya çapında geliştirici topluluğu tarafından kullanılan bir sayı o dallanma iş akışları vardır. Ancak, en popüler üç dallanma modelini tek tek tartışacağız

### git akışı
GitFlow iş akışı, sürekli yazılım geliştirme ve DevOps uygulamalarının uygulanmasına yardımcı olan bir git iş akışıdır. Git akışı bu listede en bilinen iş akışıdır. [2010 yılında Vincent Driessen][7] tarafından yaratıldı ve sonsuz ömür boyu olan iki ana dala dayanıyor ve özellikler-\*, hotfixes-\* gibi diğer destekleyici dallarla birlikte, daha sonra bireysel olarak geliştirme dalına birleşiyor öğeler tamamlandı.
* **Master** - Bu şube üretim kodu içerir. Tüm geliştirme kodu, üretime itilmeye hazır bir kez ana dalda birleştirilir.
* **Geliştirme** -Bu dal yapım öncesi kodu içerir. Özellikler bittiğinde, gelişmekle birleştirilirler.
GitFlow, planlanmış bir sürüm döngüsü olan projeler için idealdir. Yine de, git tarihi okunamaz hale geliyor.

### Github akışı
Github akışı hafif bir iş akışıdır. [GitHub][8] tarafından 2011 yılında oluşturuldu ve esas olarak bir serbest bırakma döngüsünü beklemediğiniz Çevik modeline odaklanıyor. Bunun yerine, özellikler tamamlandıkça değişiklikleri günlük olarak itersiniz.
Github akışı aşağıdaki müdürleri takip eder:
  * “Master” şubesindeki herhangi bir şey dağıtılabilir.
  * Yeni bir şey üzerinde çalışmak için, bazı açıklama adlarıyla ayrı bir OFF Master dalı oluşturun, örneğin “görüntü yükleme”
  * Bu şubeyi yerel ve düzenli olarak çalışmanızı sunucudaki aynı adlandırılan şubeye itin.
  * Geri bildirim veya yardıma ihtiyacınız olduğunda veya şubenin birleşmeye hazır olduğunu düşündüğünüzde, bir [Çekme İsteği][4]
  * Gözden geçirildikten ve özelliği imzaladıktan sonra, bunu ustaca birleştirebilirsiniz
  * Birleştirildikten ve "usta" a itildikten sonra üretime dağıtılabilir.

### Gitlab akışı
GitLab akışı, GitLab tarafından 2014 yılında oluşturulan bir iş akışıdır. GitLab akışı, GitFlow'a daha basit bir alternatiftir ve özellik odaklı geliştirme ve özellik dallarını sorun izleme ile birleştirir. GitLab akışı ve github akışı arasındaki en büyük fark, çevre dallarının kullanılmasıdır.
Geliştiriciler bir **geliştirme** dalı oluşturur ve bunu varsayılan hale getirirken, GitLab akışı hemen 'ana' şube ile çalışır. GitLab akışı, üretim öncesi birden fazla dal içerir. Ve bunlar, eşyaları farklı seviyelerde test etmek için kullanılabilir. Örneğin test dalından kabul ve daha sonra kabulden üretime.

## Çözüm {#conclusion}

Bu makalede, git dallarını ve çekme isteklerini öğrendik. Çekme isteklerinin önemini ve bunların çeşitli git iş akışlarında nasıl kullanılabileceğini inceledik. Ayrıca farklı git dallanma modellerini kısaca araştırdık.



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
