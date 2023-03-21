---
title: "JavaScript'te söz nedir? | Javascript öğreticisi" 
seoTitle: "JavaScript'te söz nedir?" 
description: "JavaScript'te söz nedir? Bir vaat, bekleyen, tamamlanmış veya reddedilen gibi eşzamansız bir işlemin sonucunu veren bir kod bloğudur." 
date: 2023-03-03T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript'te söz nedir? Bir vaat, tamamlanmış veya reddedilen gibi eşzamansız bir işlemin sonucunu veren bir kod bloğudur." 
url: /tr/what-is-promise-in-javascript-javascript-tutorial/
categories: ['Programming']
---

## JavaScript vaatleri kavramını öğrenmek için mi mücadele ediyorsunuz? Bu makale nasıl sözün nasıl yaratılacağını, neden JavaScript'te söz verdiğimizi ve daha fazlasını açıklayacaktır.

{{< figure align=center src="images/What-is-Promise-in-JavaScript-Promises-Explained.png" alt="What is Promise in JavaScript? " >}}


## Genel Bakış
[JavaScript veri türleri][1] hakkında daha iyi bir anlayışa sahip olduğunuzu umuyoruz. Şimdi, bu [programlama][2] kategorisindeki başka bir blog yazısı. Bu JavaScript öğreticisinde, JavaScript**'de vaat edenleri**yaşayacağız ve bununla birlikte, eşzamansız operasyonların, vaatlerin kullanımı ve JavaScript'te nasıl vaatlerin oluşturulacağını da göreceğiz. Birincisi, eşzamansız bir süreç/işlem, diğer süreçlere göre bağımsız olarak yürütülen ve herhangi bir tıkanma yaratmayan işlemdir. Bu nedenle, asenkron işlemleri işlemeniz gerekir, aksi takdirde JavaScript kodunuzda anormallikler oluşturabilir. Böylece, vaatleri kullanarak asenkron operasyonları nasıl ele alabileceğimizi keşfedeceğiz.
Bu JavaScript öğreticisinde aşağıdaki noktaları ele alacağız:
* **[JavaScript'te söz nedir? Vaatler açıklandı][3]**
* **[Neden JavaScript'te söz veriyoruz?][4]**
* **[Javascript'te Promise Nasıl Çalışır?][5]**
* **[Bir Söz Nasıl Olur?][6]**

## JavaScript'te söz nedir? Vaatler açıklandı   {#What-IS-In-Javascript-Promises-Açıklanıyor}
Bir vaat, çözüldüğü, reddedildiği veya beklemede olan bir asenkron operasyon havasının değerini temsil eden bir nesnedir. Daha basit bir deyişle, vaatler, eşzamansız bir kod bloğu tarafından henüz üretilmeyen bir değer döndürmek için kullanılır. Aslında, üç**vaat durumu vardır**ve aşağıdaki durumlardan herhangi birinde olabilir:
**Bekleyen**: Söz beklemede olan bir durumda, yani başlangıç ​​aşamasında ve şu anda yürütülüyor.
**yerine getirildi**: Söz çözüldü ve değer iade edildi.
**Reddedildi**: Bu, herhangi bir hatadan kaynaklanan durumdur, bu da vaatin reddedildiği anlamına gelir.
Burada dikkate alınması gereken önemli bir şey, vaat tarafından iade edilen değerin/durumun değişmez olması ve değiştirilemeyeceğidir, bu da vaatlerin olağandışı bir davranış olmadığından emin olduğu anlamına gelir.

## Neden JavaScript'te söz veriyoruz?   {#Neden-we-we-we-in-javascript}
**geri arama cehennemi**farkında değilseniz, ne olduğunu paylaşmama izin verin. İlk olarak, geri arama başka bir işlevin içindeki bir işlevdir. Temel olarak, geri arama işlevi, sonuç aldıktan sonra yürütülen bir işlevde ikinci bir argüman olarak geçirilir. Bu nedenle, birçok senaryoda, bir geri arama işlevini yuva etmeniz ve yuvalama arttıkça, işlenmesi imkansız hale gelir. Dolayısıyla, geri arama işlevlerinin bu uzun yuvalamasına**geri arama cehennemi**diyoruz.
Yani, bir vaat, geri arama cehennem durumundan kaçınmanın bir yoludur. Vaatlerin kullanımı daha iyi okunabilirlik ve iyileştirilmiş hata işleme sağlar. Ayrıca, döndürülen değeri alarak ve bu değeri zincirdeki bir sonraki işleve ileterek eşzamansız işlemleri daha iyi işleyebilirsiniz.

## JavaScript'te Promise Nasıl Çalışır?   {#Javascript-in-javascript}
Şimdi vaatlerin arkasındaki çalışma mekanizmasını anlayalım. Lütfen aşağıda belirtilen şemaya bir göz atın.

{{< figure align=center src="images/what-is-a-promise.png" alt="JavaScript'te Promise Nasıl Çalışır??" >}}

Yukarıda belirtilen iş akışına göre, uygulama ayrıntıları oldukça açıktır. Söz, yaratılışı üzerine infaza başlar ve beklemede olan durumda yanıtı beklemektedir. İki seçenek var ya veri olacak ya da işleme sonunda bir hata olacak. Veri aldıktan sonra. Then () bloğuna girer ve bir hata durumunda .catch () bloğuna girer.

## Bir söz nasıl yaratılır?   {#Nasıl yaratılacak bir vaat}
Şimdiye kadar temel vaat kavramını ele aldık. Şimdi, JavaScript'te nasıl bir söz yaratabileceğimizi keşfedeceğiz. Bir söz yaratmak için aşağıdaki vaat yapıcısını kullanalım.
```
let promise = new Promise(function(resolve, reject) {
  // do some processing.. 
});
```
Promise Constructor, önce iki argüman alan, çözen ve diğer reddedilen bir argüman olarak bir işlevi üstlenir. Başarı durumunda çözüm () yöntemini çağırır ve hata veya reddetme durumunda Redge () bloğuna girer.
Biraz derinlemesine gidelim ve vaat yaratmayı biraz daha keşfedelim.
```
let data = "";

let dataValue = new Promise(function (resolve, reject) {
    if (data) {
        resolve("There is some data.");
    } else {
        reject("There is no data");
    }
});

console.log(dataValue);
```
Yukarıdaki kod snippet'inde, Resolve () bloğunda API çağrıları yapabilirsiniz.
Şimdi, bir JavaScript vaadinin yürütme modelini görelim.
```
let promiseExecution = new Promise((res, rej) => {
  console.log('synchronous execution');
  if (true) {
    res('Success');
  } else {
    rej('Error');
  }
})

promiseExecution.then((data) => {
  console.log('It is executing asynchronously: ' + data);
}).catch((err) => {
  console.log('It is executing asynchronously: ' + err);
}).finally(() => {
  console.log('promise is completed');
});

console.log('Hello Word');
```
Aşağıda yukarıdaki kod snippet'inin çıkışı:
```
synchronous execution
Hello Word
It is executing asynchronously: Success
promise is completed
```
Yani, vaat içindeki kod, "senkronize yürütme" basılması için senkronize olarak çalışır. Daha sonra,. Then () bloğu eşzamansız olarak çalışır ve sonuç üretilene kadar bekler, ancak program yürütme durmaz, bu yüzden "merhaba Word" yazdırılır ve vaatte bulunulmuştur. Bundan sonra. Then () blok vaat ettiği değerleri yürütür ve döndürür. JavaScript vaatlerinin hikayesi bu. Yine, JavaScript tek dişli olduğundan, eşzamansız işlemleri engellemeyen bir şekilde işlemek için vaatler kullanılır.

## Çözüm
Bu**JavaScript öğreticisinin sonu. Umarım JavaScript vaatleri hakkında iyi bir fikriniz vardır. JavaScript'te söz verdik**, neden JavaScript'te söz veriyoruz,**JavaScript'te nasıl vaat**ve bir söz nasıl yaratılacağı. Ayrıca, ileri kullanım ve hükümleri ile ilgili bu konuyu daha fazla ele alacağız. Bu nedenle, kendinizi bir röportaj oturumuna hazırlıyorsanız bu makaleyi gözden geçirin.

## Bizimle iletişime geçin
Son olarak, [Containerize.com][7] çeşitli heyecan verici konularda devam eden JavaScript öğreticileri sunmaktadır. [Facebook][8], [LinkedIn][9] ve [Twitter][10] dahil olmak üzere sosyal medya platformlarımızda bizi takip ederek döngüde kalabilirsiniz.

## Bir soru sor
[Forum][11] 'de sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
**JavaScript'te örnekle vaatler nelerdir?**
JavaScript'te vaatlerin ne olduğunu bilmek için lütfen bunu [link][3] izleyin.

## Ayrıca bakınız
  * [JavaScript veri türleri nelerdir? | Bir Başlayan Kılavuz][1]
  * [Kubernetes Multi-Tenacy ve Konteyner Tabanlı Mimari][12]
  * [Sunucusuz bilgi işlem nedir? | Sunucusuz Mimari][13]
  * [Multitenancy nedir? | Neden çok kiracı bir yaklaşım?][14]
  * [JavaScript veri türleri nelerdir? | Bir Başlayan Kılavuz][15]

  
[1]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-promise-in-JavaScript-Promises-Explained
[4]: #Why-we-use-promise-in-JavaScript
[5]: #How-promise-works-in-JavaScript
[6]: #How-to-create-a-promise
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/kubernetes-multi-tenancy-container-based-architecture/
[13]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[14]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[15]: https://blog.containerize.com/programming/what-are-javascript-data-types-a-beginners-guide/
