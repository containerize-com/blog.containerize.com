---
title: "JavaScript'te eşzamansız ne bekliyor? | Bir JavaScript Kılavuzu" 
seoTitle: "JavaScript'te eşzamansız ne bekliyor?" 
description: "JavaScript'te eşzamansız ne bekliyor? Async & Beait Anahtar Kelimeler, eşzamansız işlemleri JavaScript'teki geleneksel vaatlerden daha iyi çalıştırmak için kullanılır." 
date: 2023-03-08T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript'te eşzamansız ne bekliyor? Async & Beait Anahtar Kelimeler, eşzamansız işlemleri JavaScript'teki geleneksel vaatlerden daha iyi çalıştırmak için kullanılır." 
url: /tr/what-is-async-await-in-javascript-a-javascript-guide/
tags: ["What is Async Await in JavaScript", "JavaScript Async Await, async await", " javascript async await tutorial", "async await syntax", "try catch async await javascript"]
categories: ['Programming']
---

## ES2017, vaatlerin etrafında bir sargı olan JavaScript Async/Await'i tanıttı. Async/Await, vaat tabanlı API'leri modern ve en basit şekilde tüketmek için kullanılır.

{{< figure align=center src="images/what-is-async-await-in-javascript-a-javascript-guide.png" alt="JavaScript'te eşzamansız ne bekliyor??">}}


## Genel Bakış
Önceki blog yazımızda [JavaScript vaatleri][1] ele aldık ve JavaScript vaatlerinin arkasındaki kavramı net bir şekilde anlamak istiyorsanız ziyaret etmelisiniz. Bu [JavaScript Öğreticileri][2] serisinde, JavaScript Async/Await'in modern özelliklerini gösterecek başka bir JavaScript kılavuzuyla buradayız. Bu blog yazısı, JavaScript vaatleri hakkında önceden bilgi sahibi olanlar içindir. Ayrıca, JavaScript**'de eşzamanlı/bekleyen ne olduğunu ve async/beklememiz gerektiğinde denemeye çalışacağız. Buna ek olarak, işleme hatalarını eşzamanlı/beklemeyle de karşılayacağız. Bu nedenle, bu konsepti işaretlemek için bu**JavaScript Async/Bekleyin Eğitici**tam olarak okuyun.
Bu JavaScript Async Bekleyen Eğitici'de aşağıdaki bölümlerden geçeceğiz:
***[JavaScript'te Donenc/Weak Nedir | Async Sözdizimi Bekliyor][3]**
***[Async/Beklenir Ne Zaman Kullanılır?][4]**
***[Async/Await ile Hata İşleme][5]**

## JavaScript'te eşzamanlı/bekle | Async Sözdizimi {#What-Is-asyncawait-in-javascript-async-await-synTax}
ECMAScript 2017, JavaScript ve Async/Await'in yeni özellikleri, bu özellikler arasında en yaygın olarak kullanılanlardan biridir. Async/Await vaatlerin üzerine inşa edilmiştir ve aslında JavaScript vaatlerini yerine getirmenin modern bir yoludur.
JavaScript kodunda Async/Anahtar Kelimeleri Nasıl Kullanacağımızı Bakalım:
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().then(function(){
  console.log(data); // results printed.
})
```
İşlevin başlangıcındaki Async anahtar kelime, bu işlevin bir söz vereceği anlamına gelir. Bu nedenle, vaat çözünceye kadar işlevin yürütülmesini duraklatmak için her zaman async fonksiyonunun gövdesinde anahtar kelime her zaman kullanılır. Burada dikkat edilmesi gereken önemli şey, düzenli bir işlevin gövdesinde anahtar kelime kullanamayacağınızdır. Ancak, sadece Async anahtar kelimesiyle bildirilen asenkron işlevlerle beklemeyi kullanabilirsiniz.

## Async/Ne zaman kullanılır? {#Kullanımdan ne zaman-asyncawait}
Şimdiye kadar, JavaScript**'de eşzamansız ne bekleyen**cevabınız var. Bu sadece geleneksel JavaScript vaatlerinin etrafında bir sargı olduğundan, vaatleri daha temiz ve okunabilir bir şekilde oluşturmak ve işlemek için bu yeni yolu daha iyi kullanırsınız. Buna ek olarak, birden fazla vaatten kurtulabilirsiniz. Bekleyen anahtar kelime,. Then () ifadesini tek bir satıra kapsar.

## Async/Await ile Hata İşleme {##ASYNCAWAIT ile#Hata Handling}
İşletme düzeyinde yazılım geliştirme söz konusu olduğunda hata işleme kritik bir görevdir. Async/bekle yaklaşımında hataları yakalamanın birçok yolu vardır.

{{< figure align=center src="images/async-await.png" alt="Async yakalamayı deneyin JavaScript">}}

**Async yakalamayı deneyin JavaScript**: Bu hata işleme yaklaşımıyla yeni bir şey yok. Ancak, aşağıdaki kod snippet'inde gösterildiği gibi bir async işlevinin içinde bir deneme/yakalama bloğu kullanabilirsiniz:
```
async function getValues() {
  try{
    let promise = new Promise(function(resolve, reject) {
     // processing.. 
    });

    let data = await promise; // waits until the promise fulfills
   
    return data;
  } catch(err){
    // you may handle errors the way you want..
  }
 
}
```
Try/Catch bloğunu kullanarak, eşzamanlı bir işlevin gövdesindeki istisnaları yakalayabilirsiniz.
Oysa, işlev çağrısının sonunda .catch () bloğunu ekleyebileceğiniz hataları ele almaya başka bir yaklaşım daha vardır. Async/Await bir söz verdiğinden.
```
async function getValues() {

  let promise = new Promise(function(resolve, reject) {
   // processing.. 
  });

  let data = await promise; // waits until the promise fulfills
   
  return data;
 
}
getValues().catch(err){
 // catch the errors 
}
```

## Çözüm
Bu**JavaScript Async Bekliyor öğretici**sona eriyoruz. Umarım JavaScript'te**neyi bekleyen**hakkında daha iyi bir anlayışa sahip olursunuz**. Ayrıca, kaynak kodunu daha az karmaşık hale getiren JavaScript Async Sözdizimi'nden geçtik. Bu JavaScript özelliği, zengin kullanımı ve performansı nedeniyle yaygın olarak kullanılmaktadır. Önümüzdeki günlerde, JS kavramları üzerinde güçlü bir komut alabilmeniz için JavaScript özellikleri ve kavramları üzerine daha fazla yazacağız. Dahası, "Ayrıca bakınız" bölümünde bahsedilen başka ilginç makaleler de vardır.

## Bizimle iletişime geçin
Son olarak, [Containerize.com][6] çeşitli heyecan verici konularda devam eden JavaScript öğreticileri sunmaktadır. [Facebook][7], [LinkedIn][8] ve [Twitter][9] dahil olmak üzere sosyal medya platformlarımızda bizi takip ederek güncel kalabilirsiniz.

## Bir soru sor
[Forum][10] 'da sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
**JavaScript'te örnekle eşzamansız ne bekliyor?**
Async bekliyor kavramını anlamak için bunu [link][3] ziyaret edebilirsiniz.
**Async Nedir Bekliyor vs Söz?**
 * Async/Await, kaynak kodunu daha net ve okunabilir hale getirir ve vaat zincirinin kaynak kodunu bir karışıklık haline getirebileceği vaatlere kıyasla.
 * Hata işleme her iki yaklaşımda da oldukça benzerdir.
 * Async'de hata ayıklama daha az zordur.
 * Bekleyen, çözülmüş veya reddedilen devletleri korumak. Oysa Async/Weait ya çözülür veya reddedilir.

## Ayrıca bakınız
  * [JavaScript'te söz nedir? | JavaScript öğreticisi][1]
  * [Sunucusuz bilgi işlem nedir? | Sunucusuz Mimari][11]
  * [Multitenancy nedir? | Neden çok kiracı bir yaklaşım?][12]
  * [Üretken AI nedir | Üretken yapay zeka][13]
  * [Chatgpt'i Google sayfalarıyla nasıl entegre eder][14]
  * [Vscode'da chatgpt nasıl kullanılır | VSCODE Uzatma Kodu GPT][15]
  * [Openai Chatbot GPT-3 Nedir | Chatgpt bir AI devrimi][16]
  * [Yapay Zekaya Giriş | AI nedir?][17]

  
[1]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
[2]: https://blog.containerize.com/categories/programming/
[3]: #What-is-AsyncAwait-in-JavaScript-Async-Await-Syntax
[4]: #When-to-use-AsyncAwait
[5]: #Error-handling-with-AsyncAwait
[6]: https://www.containerize.com/
[7]: https://web.facebook.com/containerize
[8]: https://www.linkedin.com/company/containerize/
[9]: https://twitter.com/containerize_co
[10]: https://forum.containerize.com/
[11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
[12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
[13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
