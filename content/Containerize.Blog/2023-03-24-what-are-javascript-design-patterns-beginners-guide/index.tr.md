---
title: "JavaScript tasarım modelleri nelerdir? | Yeni başlayanların kılavuzu" 
seoTitle: "JavaScript Tasarım Desenleri" 
description: "Bu JavaScript Yeni Başlayanlar Kılavuzu JavaScript tasarım kalıplarını açıklar. En iyi kod kalıplarını benimseyerek gelişiminizi bir sonraki seviyeye taşıyın." 
date: 2023-03-24T00:00:00+00:00
author: muhammadmustafa
summary: "Bu JavaScript Yeni Başlayanlar Kılavuzu JavaScript tasarım kalıplarını açıklar. En iyi kod kalıplarını benimseyerek gelişiminizi bir sonraki seviyeye taşıyın." 
url: /tr/what-are-javascript-design-patterns-beginners-guide/
tags: ["JavaScript Design Patterns", "learning JavaScript design patterns", "factory pattern JavaScript", "observer pattern JavaScript", "singleton pattern javascript", "module design pattern"]
categories: ['Programming']
---

## Geliştiriciler, JavaScript tasarım kalıplarını öğrenme konusunda olumlu niyet gösterir. JS tasarım desenleri, kaynak kodunuza verimli ve korunabilir hale getirmek için bir tasarım sağlar.

{{< figure align=center src="images/what-are-javascript-design-patterns-beginners-guide.png" alt="JavaScript Tasarım Desenleri">}}


## Genel Bakış
Çok sayıda JavaScript programcısı **JavaScript Tasarım Desenleri** hakkında belirsizdir ve bu boşluk doldurulmalıdır. Bu [JavaScript öğreticileri][1] serisinde, modül tasarım deseni, gözlemci deseni ve daha fazlası gibi en yaygın kullanılan JavaScript tasarım modellerini kapsayacak bu blog gönderisini yazıyoruz. Buna ek olarak, zihninizde bir belirsizlik kalmaması için kod örneklerini kullanmayı göstermeye çalışacağız. JavaScript'te bir kariyer yapıyorsanız bu konu çok önemlidir. Bu nedenle, bu makale boyunca bağlı kalın ve bu blog yazısının sonunda, JS tasarım modelleri hakkında güçlü bir anlayışa sahip olmalısınız.
Aşağıdaki noktalar bu JavaScript Yeni Başlayan Kılavuzunda ele alınacaktır:
* **[JavaScript tasarım kalıpları nelerdir?][2]** 
* **[Modül Tasarım Deseni][3]** 
* **[Fabrika Deseni JavaScript][4]** 
* **[singleton desen javascript][5]** 
* **[Gözlemci Deseni JavaScript][6]** 

## JavaScript tasarım modelleri nelerdir? {#What-are-JavaScript-design-patterns}

JavaScript tasarım kalıpları, kaynak kodunu yazarken tekrar tekrar ortaya çıkan ortak sorunlara verimli çözümler sağlayan şablonlar şeklinde çözümlerdir. Daha basit bir deyişle, tasarım desenleri, korunabilir ve yönetilebilir javasciprt kodunu yazmak için önceden tanımlanmış stiller/siparişlerdir.
Küçük kuruluşlarda, çoğu geliştirici tasarım kalıplarına dikkat etmez, ancak büyük ölçekli iş yazılımı oluştururken kritik bir konu haline gelir. Temel olarak, kendi yazma tarzı olan kurumsal düzeyde yazılım için çalışan bir dizi geliştirici vardır. Bu nedenle, tekrarlanan sorunları önlemek, yeniden kullanılabilir kod blokları oluşturmak ve uygulama geliştirmeyi hızlandırmak için bir tasarım deseni tercih edersiniz.

## Modül Tasarım Deseni {#Module-design-pattern}

Bu, geliştiricilerin tercih ettiği en yaygın ve go-to tasarım modelidir. Bu tasarım desenine göre, uygulama kodu blokları modüller şeklinde birbirinden ayrı olarak konur. Bu JavaScript tasarım deseni izolasyon ve kapsülleme sağlar. Ayrıca, modülün dışından erişemeyeceğiniz genel/özel işlevler ve öznitelikler yapabilirsiniz. Her şeyden önce, modüler tasarım desenindeki modüller her zaman bir nesneyi döndürür.
Enterprise düzeyinde zengin özellikli bir iş uygulaması oluşturmanız durumunda bu tasarım modelini kullanabilirsiniz. Böylece, bağımsızlık getirmesi için her özelliğin ayrı bir modül oluşturabilirsiniz.
Aşağıdaki kod snippet, modüler tasarım desenini göstermektedir:
```
const student = (function () {
  // Private
  let name = "mustafa";
  let program = "computer science";
  const getStudentName = () => name;
  const getStudentProgram = () => program;

  // Public
  return {
    name,
    program,
    getName: () => getStudentName(),
    getStudentProgram: () => getStudentProgram(),
  };
})();

student.name;
student.program;
student.getStudentProgram();
```

## Fabrika deseni javascript {#Factory-pattern-JavaScript}

Bu tasarım desenine göre, **yeni** operatörüyle yapıcıyı çağırmak yerine bir arayüz kullanarak nesneler oluşturursunuz. Aslında, bir tür nesne belirleriz ve fabrika bir örnek oluşturur ve bizi kullanım için geri gönderir. Ayrıca, bu JavaScript tasarım deseni nesne oluşturma üzerinde tam kontrol sağlar. Ayrıca, basit ve karmaşık nesneleri işlemek için bu tasarım desenini seçebilirsiniz ve fabrika desenini ayrışma için kullanmak da akıllıca olacaktır.
Daha fazla araştırma için bir kod snippet yazalım.
```
// sandwich.js
const Sandwich = function({name }) {
  this.name = name || "";
};
module.exports = Sandwich;
```
```
// burger.js
const Burger = function({name }) {
    this.name = name || "";
};
module.exports = Burger;
```
```
// gadFoodFactory.js
const Sandwich = require("./sandwich");
const Burger = require("./burger");
const food = { Burger, Sandwich };
module.exports = {
    createFood(type, attributes) {
        const GadFoodType = food[type];
        return new GadFoodType(attributes);
    }
};
```
```
// index.js
const gadFoodFactory = require("./gadFoodFactory");
const mySandwich = gadFoodFactory.createFood("Sandwich", {
    name: "Chicken"
});
const myBurger = gadFoodFactory.createFood("Burger", {
    name: "Grilled",
});
console.log(mySandwich);
console.log(myBurger);
```

## Singleton desen javascript {#Singleton-pattern-JavaScript}

Bu tasarım deseni, bir sınıfın tek bir nesneye dayandırılmasını kısıtlayan çok popülerdir. JavaScript Framework Angular'daki hizmet, hizmetin yalnızca bir örneğini oluşturduğu ve bu nesnenin tüm modüller için erişilebilir olduğu bu modeli takip eder. Ayrıca, tek nesneye bağlı tüm müşteri aynı kaynakları ve erişim seviyelerini paylaşır.
** singleton deseninin gösterimi aşağıdaki gibidir:
```
let singletonPattern = new (function () {

  let name = "mustafa";

  this.printName = function() {
      console.log(name);
  }
})();

singletonPattern.printName();

// output: mustafa
```

## Gözlemci deseni JavaScript {#Observer-pattern-JavaScript}

Gözlemci deseni ölçeklenebilir iş uygulamaları oluşturmada oldukça yararlıdır. Bu kod modelinde bir bildirim mekanizması dahildir. Bir değişiklik olduğunda, diğer bağımlı abonelikleri bildiren bir olayı tetikler. Böylece, bu model en son durumu modüllerdeki diğer nesnelere yayınlar. Aslında, her şey abonelerdeki değişimi otomatik olarak bilgilendirmekle ilgilidir.
Aşağıdaki kod örnekleri gözlemci modelini takip eder:
```
function ObserverFunc() {
this.observerArray = [];
}

ObserverFunc.prototype.subscribe = function (ele) {
this.observerArray.push(ele);
}

ObserverFunc.prototype.unsubscribe = function (element) {
const elementIndex = this.observerArray.indexOf(element);
if (elementIndex &gt; -1) {
this.observerArray.splice(elementIndex, 1);
}
}

ObserverFunc.prototype.notifyAll = function (element) {
this.observerArray.forEach(function (observerElement) {
observerElement(element);
});
}
```

## Çözüm
Hepsi **JavaScript tasarım kalıpları** için. Umarız bu **JavaScript Öğreticisi** ve tasarım kalıpları kavramlarını öğrendiğinizi umuyoruz. Modül tasarım desenleri, singleton, gözlemci ve fabrika tasarım desenleri gibi en sık kullanılan kod modellerini ele aldık. Bu makale, kod snippet'lerinin yardımıyla net bir resim verecektir. Buna ek olarak, aşağıdaki “Ayrıca Bkz.” Bölümünde bulabileceğiniz çok alakalı başka blog yayınları da vardır.

## Bizimle iletişime geçin
Son olarak, [Containerize.com][7] yeni konularda JavaScript yayınları yazma sürecindedir. [Facebook][8], [LinkedIn][9] ve [Twitter][10] dahil olmak üzere sosyal medya platformlarımızda bizi takip ederek döngüde kalabilirsiniz.

## Bir soru sor
[Forum][11] 'de sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
**JavaScript'teki en popüler tasarım modelleri nelerdir?**
Modül deseni, gözlemci, fabrika ve singleton desenleri JavaScript programlamasında yaygın olarak kullanılmaktadır. Daha fazla keşfetmek için lütfen bunu [bağlantı][2] takip edin.

## Ayrıca bakınız
 * [Kariyerinize yardımcı olacak JavaScript Temel Kavramları Öğrenin][12]
 * [Yapay Zekaya Giriş | AI nedir?][13]
 * [Chatgpt'i Google sayfalarıyla nasıl entegre eder][14]
 * [Vscode'da chatgpt nasıl kullanılır | VSCODE Uzatma Kodu GPT][15]
 * [Openai Chatbot GPT-3 Nedir | Chatgpt bir AI devrimi][16]
 * [Google Dokümanlar Chatgpt ile Entegrasyon | Openai GPT-3][17]
 * [En iyi 5 açık kaynaklı AI çerçevesi nedir][18]
 * [Üretken AI nedir | Üretken yapay zeka][19]



[1]: https://blog.containerize.com/categories/programming/
[2]: #What-are-JavaScript-design-patterns
[3]: #Module-design-pattern
[4]: #Factory-pattern-JavaScript
[5]: #Singleton-pattern-JavaScript
[6]: #Observer-pattern-JavaScript
[7]: https://www.containerize.com/
[8]: https://web.facebook.com/containerize
[9]: https://www.linkedin.com/company/containerize/
[10]: https://twitter.com/containerize_co
[11]: https://forum.containerize.com/
[12]: https://blog.containerize.com/learn-javascript-basic-concepts-to-help-your-career/
[13]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
[14]: https://blog.containerize.com/artificial-intelligence/integrate-chatgpt-with-google-sheets/
[15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
[16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[17]: https://blog.containerize.com/artificial-intelligence/google-docs-integration-with-chatgpt/
[18]: https://blog.containerize.com/artificial-intelligence/top-5-open-source-ai-frameworks/
[19]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
