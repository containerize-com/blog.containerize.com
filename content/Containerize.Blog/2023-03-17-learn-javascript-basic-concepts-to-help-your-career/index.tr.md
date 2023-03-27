---
title: "Kariyerinize yardımcı olacak JavaScript temel kavramları öğrenin" 
seoTitle: "JavaScript Temel Kavramlar" 
description: "JavaScript temel kavramlarını öğrenmek için bu JavaScript öğreticisini izleyin. Kapsamlar, kaldırma ve kapanışlar JavaScript'te çok temel ama zorunlu kavramlardır." 
date: 2023-03-17T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript temel kavramlarını öğrenmek için bu JavaScript öğreticisini izleyin. Kapsamlar, kaldırma ve kapanışlar JavaScript'te çok temel ama zorunlu kavramlardır." 
url: /tr/learn-javascript-basic-concepts-to-help-your-career/
tags: ["JavaScript Basic Concepts", "what is hoisting in JavaScript", "JavaScript closures", "scopes in JavaScript", "JavaScript fundamental"]
categories: ['Programming']
---

## Bir geliştiricinin bilmesi gereken bazı temel JavaScript temellerini öğrenelim. Bu yorumlanmış programlama dili, kurumsal düzey uygulamalar geliştirmek için yaygın olarak kullanılmaktadır.

{{< figure align=center src="images/Learn-JavaScript-Basic-Concepts-to-Help-Your-Career.png" alt="JavaScript Temel Kavramlar">}}


## Genel Bakış
JavaScript, dinamik web tabanlı uygulamalar geliştirmek için kullanılan bir komut dosyası dilidir. Statik web siteleri oluşturmak için HTML ve CSS kullanıyoruz. Önceki blog yazımızda, [Belge Nesne Modeli][1] 'i ele aldık ve şimdi diğer önemli  **JavaScript Temel Kavramları**  ele alacağız**. Web geliştiricileri, zengin özellikleri ve çerçeveleri nedeniyle bu komut dosyası dilini tercih etme eğilimindedir. Ayrıca, JavaScript'i öğrenerek ön uç ve arka uçta geliştirme yapabilirsiniz. Ancak, yalnızca web uygulamaları geliştiremezsiniz, aynı zamanda mobil uygulamalar da geliştiremezsiniz. Bu JavaScript öğreticisi, kendinizi bir röportaj oturumuna hazırlıyorsanız size yardımcı olacaktır. Bununla birlikte, bu kılavuz bilgi kovanıza daha fazla eklemek için okumaya değer.
Bu makalede aşağıdaki noktaları ele alacağız:
*  **[JavaScript'te çekilen nedir][2]**  
*  **[JavaScript'teki Scopes][3]**  
*  **[JavaScript Kapanışları][4]**  

## JavaScript'te neyin kaldırılması {#What-is-hoisting-in-JavaScript}

Mevcut kapsamın üstünde işlev veya değişken beyan alma olgusu kaldırma olarak bilinir. Bu çok kritik bir kavramdır ve çoğu JavaScript geliştiricisi bunun farkında değildir. Bununla birlikte, burada dikkat edilmesi gereken önemli bir şey, fonksiyon/değişken başlatma değil, sadece işlev/değişken bildirimlerinin üste alınmasıdır.
Bir örnek alalım ve aşağıdaki kod snippet'ini görelim;
```
printResults();
function printResults(){
    console.log("hello programmers")
}
// output: hello programmers

```
Yukarıdaki kod örneğinde, işlev çağrısını işlev bildiriminden önce yaptık, ancak kod başarılı bir şekilde yürütülse ve bu JavaScript kaldırma nedeniyle. Temel olarak, derleme süresi boyunca, JavaScript tercümanı kodu tarar, tüm işlevleri/değişkenleri toplar ve bunları sözcüksel ortam adı verilen belleğe koyar. Aynı şey değişkenler için de olur.
```
name = "mustafa";
console.log(name);
var name;

```
Benzer şekilde, ad değişkeni başlatma beyanından önce yapıldı ve kod herhangi bir hata olmadan çalışır. Yine, derleme süresi boyunca, JS tercümanı değişken bildirimini bulmak için sözcüksel ortama baktı ve böylece kodu yürüttü.
Dolayısıyla, Let ve Const anahtar kelimeleriyle değişkenleri beyan ederseniz, JavaScript onları biraz farklı bir şekilde kaldıracaktır.
```
name = "mustafa";
console.log(name);
let name;
// Uncaught ReferenceError: Cannot access 'name' before initialization

```
Yukarıdaki kod snippet'teki hata oluştu. Bunun nedeni, bu değişkeni kaldırırken başlatmanın yapılmamasıdır. Uzun lafın kısası, tüm bildirimler "tanımsız" ile başlatılırken, "let" veya "const" ile ilan edilen değişkenler kaldırma sırasında başlatılmamıştır.

## JavaScript'teki kapsamlar {#Scopes-in-JavaScript}

Kapsam, bir geliştiricinin bilmesi gereken JavaScript temel kavramlarından biridir. Bununla birlikte, JavaScript Scopes ile çalışmak basit değildir ve biraz farklıdır. Bu nedenle, JavaScript'te üç tür kapsam vardır ve bunlar aşağıdaki gibidir:
 **Blok seviyesi** : "Let" veya "const" ile bildirilen değişkenler blok seviyesi kapsamını içerir.
```
if(true){
  let a = 1;
}
// a is not accessible outside the curly braces.
```
"A" değişkenine kıvırcık parantezlerin dışında {} erişilemez çünkü blok düzeyinde kapsamı vardır.
 **Fonksiyon seviyesi** : JavaScript işlevinin içinde bildirilen değişkenler yerel kapsamı vardır.
```
function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is not accessible outside the function.
```
Burada dikkat edilmesi gereken önemli bir şey, "let" "const" ve "var" ile ilan edilen değişkenlerin işlev gövdesi içinde işlev kapsamına sahip olmasıdır.
 **Global-Level** : İşlev dışında ilan edilen değişkenler küresel değişkenler haline gelir. "Let", "const" veya "var" anahtar kelimeleri kullanarak onları ilan etmiş olsanız da. Ayrıca, bir değişken, aşağıdaki kod snippet'inde gösterildiği gibi herhangi bir anahtar kelime kullanmadan bildirilirse global bir değişken haline gelir:
```
function innerFunc(){
        last_name = "ashraf";
        console.log("hello "+last_name);
    }
// last_name is accessible outside the function too and is of global scope
```

## JavaScript kapanışları {#JavaScript-Closures}

Bu, kapsamlar ve veri kapsülleme hakkındaki JavaScript bilginizi güçlendiren bir başka önemli kavramdır. En basit biçimde, bir işlevin içindeki bir işlev kapanma olarak bilinir. İç işlevi kapatma olarak adlandırabilirsiniz. Bu iç işlevin üç tür kapsamı vardır:
 * Kendi blok seviyesi kapsamı vardır.
 * Ebeveynin değişkenlerine erişimi vardır.
 * Küresel kapsamdaki değişkenlere de kapanış içinde erişilebilir.
 Bakalım nasıl bir kapanış oluşturulur:
```
 function myFunction(){
    let first_name = "mustafa";
    function innerFunc(){
        let last_name = "ashraf";
        console.log("hello "+first_name+" "+last_name);
    }
    return innerFunc()
}
myFunction()
// output: hello mustafa ashraf
```
First_name değişkenine InnerFunc adlı işlevin içinde erişilebilir, ancak üst işlevin Last_Name değişkenine erişimi olamaz. Bu davranış, programcıların kapsam zincirinde özel değişkenler oluşturmasını sağlar.

## Çözüm
Bu JavaScript kılavuzunu burada bitiriyoruz ve umarız  **JavaScript Temel Kavramları** hakkında daha iyi bir anlayışa sahip olursunuz. Dahası, **JavaScript kapanışlarından, JavaScript'teki Scopes**  ve kaldırma işleminden de geçtik. Yeni başlayanlar için zorunlu olan birçok önemli kavram vardır. Dolayısıyla, JavaScript konseptlerinizi geliştirmek veya yenilemek için gelişiyorsanız bu makale size yardımcı olacaktır. Ayrıca, "Ayrıca bakınız" bölümünde belirtilen blog yayınlarından geçebilirsiniz.

## Bizimle iletişime geçin
Son olarak, [Containerize.com][5] çeşitli heyecan verici konularda devam eden JavaScript öğreticileri sunmaktadır. [Facebook][6], [LinkedIn][7] ve [Twitter][8] dahil olmak üzere sosyal medya platformlarımızda bizi takip ederek döngüde kalabilirsiniz.

## Bir soru sor
[Forum][9] 'da sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
 **JavaScript'te öğrenilecek önemli kavramlar nelerdir?** 
JavaScript temel kavramlarını bilmek için lütfen bu JavaScript Beginner'ın [Guide][2] 'yi takip edin.

## Ayrıca bakınız
  * [JavaScript'te DOM nedir? | Belge Nesne Modeli][1]
  * [JavaScript'te söz nedir? | JavaScript öğreticisi][10]
  * [Sunucusuz bilgi işlem nedir? | Sunucusuz Mimari][11]
  * [Multitenancy nedir? | Neden çok kiracı bir yaklaşım?][12]
  * [Üretken AI nedir | Üretken yapay zeka][13]
  * [JavaScript'te eşzamansız ne bekliyor? | Bir JavaScript Kılavuzu][14]
  * [Vscode'da chatgpt nasıl kullanılır | VSCODE Uzantı Kodu GPT][15]
  * [Openai Chatbot GPT-3 Nedir | Chatgpt bir AI devrimi][16]
  * [Yapay Zekaya Giriş | AI nedir?][17]
  * [JavaScript'te eşzamansız ne bekliyor? | Bir JavaScript Kılavuzu][18]



 [1]: https://blog.containerize.com/what-is-dom-in-javascript-document-object-model/
 [2]: #What-is-hoisting-in-JavaScript
 [3]: #Scopes-in-JavaScript
 [4]: #JavaScript-Closures
 [5]: https://www.containerize.com/
 [6]: https://web.facebook.com/containerize
 [7]: https://www.linkedin.com/company/containerize/
 [8]: https://twitter.com/containerize_co
 [9]: https://forum.containerize.com/
 [10]: https://blog.containerize.com/what-is-promise-in-javascript-javascript-tutorial/
 [11]: https://blog.containerize.com/programming/what-is-serverless-computing-serverless-architecture/
 [12]: https://blog.containerize.com/programming/what-is-multitenancy-why-a-multi-tenant-approach-2/
 [13]: https://blog.containerize.com/artificial-intelligence/what-is-generative-ai-generative-artificial-intelligence/
 [14]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
 [15]: https://blog.containerize.com/artificial-intelligence/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
 [16]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
 [17]: https://blog.containerize.com/artificial-intelligence/an-introduction-to-artificial-intelligence-what-is-ai/
 [18]: https://blog.containerize.com/what-is-async-await-in-javascript-a-javascript-guide/
