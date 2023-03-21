---
title: "JavaScript veri türleri nelerdir? | Yeni Başlayanlar Kılavuzu" 
seoTitle: "JavaScript veri türleri nelerdir? | Yeni Başlayanlar Kılavuzu" 
description: "JavaScript veri türleri nelerdir? JavaScript Numarası, String, Boolean, Null, tanımsız ve daha fazlasında kullanılan 7 veri türünü öğrenmek için bu Başlangıç ​​Kılavuzu'nu izleyin." 
date: Fri, 17 Feb 2023 08:57:43 +0000
author: muhammadmustafa
summary: "JavaScript'in popülaritesi, uyarlanabilirliği nedeniyle durdurulamaz. Bu JavaScript Yeni Başlayan Kılavuzu'nu takip edin ve JS Stack'teki uzmanlığınızı beslemeye başlayın." 
url: /tr/what-are-javascript-data-types-a-beginners-guide/
categories: ['Programming']
---

## JavaScript'in popülaritesi, uyarlanabilirliği nedeniyle durdurulamaz. Bu JavaScript Yeni Başlayan Kılavuzu'nu takip edin ve JS Stack'teki uzmanlığınızı beslemeye başlayın.

{{< figure align=center src="images/What-are-JavaScript-Data-Types-A-Beginners-Guide-1.png" alt="What are JavaScript Data Types? |JavaScript veri türleri nelerdir? | Yeni Başlayanlar Kılavuzu">}}


## Genel Bakış
Vasat bir seviye ister deneyimli bir geliştirici olursanız olun, geliştirme işleri sırasında gelen sorunlarınızın çözümlerini alacaksınız. [Containerize.com][1] programlama kategorisinde öğretici blog yayınları yazmaya başladı ve**JavaScript Beginner Kılavuzu**ile başlıyoruz. Bu makalenin JavaScript veri türleriyle ilgili olması için başladığımızdan beri.**JavaScript veri türleri nelerdir**ve bunları kaynak kodunda nasıl verimli bir şekilde kullanabileceğinize dair örneklere bakın. Bu nedenle,**JavaScript Veri Türleri**hakkında iyi bir anlayışa sahip olabilmeniz için bu başlangıç ​​kılavuzunu iyice inceleyin.
Aşağıdaki noktayı ele alıyoruz:
  * [Veri türü nedir?][2]
  * [JavaScript veri türleri nelerdir?][3]

## Veri Türleri Açıklandı | Veri türü nedir?   {#What-a-Data-Type}
Veri türü, derleyiciye verilerin nasıl yorumlanacağını veya derleneceğini söylemekle ilgilidir. Veri türlerinin kullanımı kritiktir ve akıllıca kullanılmalıdır. Basit bir deyişle, sayı, String, Boolean ve daha fazlası gibi verilerin formatı ile ilgilidir. Bununla birlikte, iki veri türü kategorisi ilkel veri türleri ve maliyetlendirici olmayan veri türleri vardır. Bir sonraki bölümde yaşayacağımız sekiz ilkel veri türü vardır.

## JavaScript veri türleri nelerdir?   {#What-ARE-Javascript-Data-Types}
Aslında, JavaScript gevşek yazılmış bir dildir, yani değişken türünü açıkça tanımlamanız gerekmez. Bir değişkene herhangi bir değer atayabilirsiniz ve bu değişken String, BigInt, Boolean veya daha fazlası gibi bu değeri depolayacaktır.

{{< figure align=center src="images/web-development.png" alt="JavaScript Yeni Başlayan Kılavuzu">}}


#### İlkel Veri Türleri
İlkel veri türleri değişmez olanlardır ve oluşturulduktan ve başlatılmasından sonra değiştirilemez. Ancak, yeni bir değeri yeniden atayabilirsiniz, ancak mevcut değeri değiştiremezsiniz.
Örneğin:
```
var name = "my name is mustafa";
name = "my name is changed";
console.log(name) // output:  my name is changed
name[0] = "M";
console.log(name) // output: my name is changed
```
Yukarıdaki örnekte, String ilkel bir veri türüdür ve eski değer yeni değerle değiştirilmektedir, ancak mevcut değerdeki değişiklik yansıtılmamaktadır. Yani, “benim adım değişti” olduğunu görebiliriz “benim adım değişti”;

#### Primer olmayan veri türleri
Önleyici olmayan veri türleri, ilkel veri türlerinin karşısındaki basit kelimelerle değiştirilebilir.
Örneğin:
```
var arr = [1,2,3];
arr[0] = 11;
console.log(arr) // output: [11,2,3]
```
Ek olarak, ilkel veri türleri değerle karşılaştırılır ve cezalandırıcı olmayan veri türleri her zaman referansla karşılaştırılır.
Örneğin:
```
// Primitive Data Type

var first_name = "mustafa";
var last_name = "mustafa";
first_name === last_name  // true

// Non-Primitive Data Type

var arr = [1,2];
var arr2 = [1,2];
arr === arr2 // false
// BUT
var arr = [1,2];
var arr2 = [1,2];
arr = arr2;
arr === arr2 // true
```
Şimdi, veri türlerini tek tek gözden geçirelim. 6 ilkel veri türü ve 1 maliyetli olmayan veri türü vardır.
**İlkel veri türleri şunları içerir:**
***String**: Bu veri türü, alıntılarla çevrili bir dizi karakterden oluşan metin verilerini temsil eder.
***Sayı**: Ondalık/desim olmayan verileri, özellikle tamsayı veya şamandırayı temsil eder.
***Boolean**: Doğru veya yanlış mantıksal değerlerin temsili.
***Sembol**: Sembol benzersiz değerleri tutmak için kullanılır.
***tanımsız**: herhangi bir değeri olmayan veya intihalize edilmemiş bir değişken olmayan bir değişken.
***NULL**: Herhangi bir değerin olmaması boş olarak kabul edilir.
**Önemli olmayan veri türü şunları içerir:**
**Nesne**: Anahtar değer çiftlerinden oluşan veri koleksiyonunu saklamak için kullanılır.

## Çözüm
Bu**JavaScript Yeni Başlayan Kılavuzu**. Biz geçtik**JavaScript veri türleri nelerdir**? Ayrıca, kısaca veri türünün ne olduğunu araştırdık. JavaScript'te sorunlu olmayan ve**ilkel veri türlerini**daha iyi anlamanız gerekir. Bir iş görüşmesi için hazırlık yapmak istiyorsanız bu blog yazısı size gerçekten yardımcı olacaktır.
Son olarak, [Containerize.com][1] sürekli olarak açık kaynaklı ürünler ve konular üzerine blog yayınları yazıyor. Dahası, bizi sosyal medya hesaplarımızda [Facebook][4], [LinkedIn][5] ve [Twitter][6] 'dan takip edebilirsiniz.

## Bir soru sor
[Forum][7] 'de sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
**8 JavaScript veri türü nelerdir?**
8 JavaScript veri türünü bilmek için lütfen bu [link][3] ziyaret edin.

## Ayrıca bakınız
  * [Ücretsiz ve Açık Kaynak Popüler JavaScript Çerçeveleri][8]
  * [Ücretsiz ve açık kaynaklı yazılım kullanarak iş operasyonlarını otomatikleştirin][9]
  * [2022'de öğrenilecek ilk 10 açık kaynak teknolojisi][10]

  
[1]: https://www.containerize.com/
[2]: #What-is-a-data-type
[3]: #What-are-JavaScript-Data-Types
[4]: https://web.facebook.com/containerize
[5]: https://www.linkedin.com/company/containerize/
[6]: https://twitter.com/containerize_co
[7]: https://forum.containerize.com/
[8]: //blog.containerize.com/2022/02/02/free-open-source-popular-javascript-frameworks/
[9]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[10]: //blog.containerize.com/2022/01/31/top-10-open-source-trending-technologies-of-2022/
