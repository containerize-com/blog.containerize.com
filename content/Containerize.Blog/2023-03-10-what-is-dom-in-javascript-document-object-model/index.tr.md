---
title: "JavaScript'te Dom nedir? | Belge Nesnesi Modeli" 
seoTitle: "JavaScript'te Dom nedir?" 
description: "JavaScript'te Dom nedir? Bu kılavuz, belge nesne modelini, DOM'un özelliklerini, DOM seviyelerini ve DOM öğelerine nasıl erişileceğini gösterecektir." 
date: 2023-03-10T00:00:00+00:00
author: muhammadmustafa
summary: "JavaScript'te Dom nedir? Bu kılavuz, belge nesne modelini, DOM'un özelliklerini, DOM seviyelerini ve DOM öğelerine nasıl erişileceğini gösterecektir." 
url: /tr/what-is-dom-in-javascript-document-object-model/
tags: ["what is DOM", "what is document object model", " DOM levels", "HTML DOM tree", "DOM properties"]
categories: ['Programming']
---

## Bir Web tarayıcısının içindeki bir HTML belgesinin temsili HTML DOM ağacı olarak değerlendirilir. Bir dizi nesne ve bir web sayfasının yapısını tanımlar.

{{< figure align=center src="images/What-is-DOM-in-JavaScript-Document-Object-Model.png" alt="JavaScript'te Dom nedir??">}}


## Genel Bakış
[JavaScript programlama][1] serisindeki başka bir heyecan verici blog yayınına hoş geldiniz. Bu makalede, çok temel ama temel bir web geliştirme kavramına değineceğiz. Evet, JavaScript'teki belge nesnesi modelini kapsayacağız. Geçmişte, JavaScript dilini kullanarak geliştirmeye başlamak için zorunlu JavaScript öğreticileri yayınladık. Bu nedenle, bu önemli konseptle ilgili hiçbir şeyi kaçırmamak için bu blog gönderisini iyice okumanızı öneririz. Bu kılavuza başlayalım ve JavaScript'teki DOM'un**, Dom Properties'i ve programla nasıl etkileşime girebileceğinizi öğrenelim.
Bu JavaScript kılavuzunda aşağıdaki konuları ele alacağız:
* **[Belge nesne modeli nedir (DOM)?][2]**
* **[DOM seviyeleri][3]**
* **[DOM özellikleri nelerdir ve bunlara nasıl erişilir?][4]**

## Belge Nesne Modeli (DOM) nedir?   {#What-is-document-object-model}
Dom anlamına geliyor?**Belge Nesne Modeli (DOM)**, bir web tarayıcısının içindeki bir web sayfasının temsilidir. Basitçe, bir HTML belgesinin öğelerinin bir tarayıcıda hiyerarşik gösterimi, belge nesne modeli olarak bilinir. Gerçekten web tarayıcısı tarafından oluşturulan bir ağaç şeklinde oluşur. Bir ağaç şekli oluşturan birbirine bağlı çeşitli düğümlerden oluşur. Buna ek olarak, DOM öğelerinin kendilerine eklenmiş özellikleri ve olayları vardır.
Aslında DOM, bir web sayfasının mantıksal yapısını formüle eden ve sayfa öğelerine erişmenin yolunu belirleyen bir programlama arayüzüdür. Temel olarak, JavaScript başlık, H1 ve vb. Gibi HTML etiketlerini tanımaz. Bu nedenle, bir HTML belgesi bir web tarayıcısına yüklendikten sonra, JavaScript'in belge öğelerini anlamasını mümkün kılan DOM oluşturulur.

## DOM Seviyeleri   {#Dom-Levels}
Bu bölüm çeşitli Dom seviyelerini gösterecektir. İlk olarak, bir tarayıcıda her zaman üstte olan bir pencere nesnesi vardır ve sonra bir belge düğümü vardır. Aşağıdaki resme bakalım:

{{< figure align=center src="images/DOM.png" alt="DOM seviyeleri">}}

Yukarıdaki resimdeki DOM öğelerini görebilirsiniz. Pencere ve belge üst düzey tarayıcı nesneleridir ve daha sonra kök olarak HTML öğesine sahibiz. Devam ederken, baş ve gövde düğümleri var, başlık düğümü kafa düğümüne aittir ve gövde düğümü, web tarayıcısında oluşturulan ve görünür olan tüm düğümleri içerir. Ayrıca, gövde öğeleri, "Href" özniteliği içeren çapa etiketi gibi görüntüde görebileceğimiz özellikler içerir. Benzer şekilde, diğer DOM düğümleri IMG, Meta ve daha fazlası gibi çeşitli özellikler içerir.

## DOM özellikleri nelerdir ve bunlara nasıl erişilir?   {#What-Eare-Dom-Properties-ve-How-to-acess-them}
Şimdiye kadar, JavaScript ve DOM seviyelerinde DOM'un ne olduğuna bir cevap bulduk ve DOM düğümlerinden de geçtik. Bu bölümde DOM özelliklerinden geçeceğiz ve onlarla nasıl etkileşim kurabileceğimizi göreceğiz. Her DOM öğesinin kendisine bağlı bir değeri vardır, "P" etiketi metin özelliği vardır, IMG etiketinin görüntü vardır vb. JavaScript yöntemleri düğümlerin değerlerine erişmek için kullanılır. Ayrıca, DOM öğelerine olay dinleyicilerini ekleyebilir/kaldırabilirsiniz.
Aşağıdaki**DOM özelliklerini bulabilirsiniz**:
**Innerhtml**: Bu özellik, bir DOM düğümünün HTML içeriğini ayarlamak veya almak için kullanılır.
```
let htmlContent = document.getElementById("customID").innerHTML;
```
**InnerText**: Bir HTML öğesinin metinsel içeriğine erişmek veya ayarlamak için bu DOM özelliğini kullanın.
```
let textualContent = document.getElementById("customID").innerText;
```
**ParentElement**: Bu özelliği öğenin ana düğümüne erişmek için kullanabilirsiniz.
```
let parentNode = document.getElementById("customID").parentElement.nodeName;
```
**Stil**: Bir öğenin stil özelliğini güncelleyin.
```
let styleAttr = document.getElementById("customID").style.color = "red";
```
**Başlık**: Dom'un başlık öğesini güncellemek için bu özelliği kullanın.
```
document.getElementById("customID").title= "this is a web page";
```
 JavaScript DOM ile etkileşim kurmak için kullanabileceğimiz bazı yöntemler aşağıdadır:
**addeventListener ()**: Bu DOM yöntemi, bir öğeye bir olay işleyicisi eklemek için kullanılır.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getAttribute ()**: Bu DOM yöntemi, bir öğeye bir olay işleyicisi eklemek için kullanılır.
```
document.getElementById("customID").addEventListener("click", customFunction);
```
**getElementById ()**: Verilen "ID" ile belirli bir öğeyi almanın yöntemi.
```
let element = document.getElementById("myID");
```
**QuerySelector ()**: Bir CSS seçicisiyle eşleştirilen ilk alt öğeyi almak için bu yöntemi kullanın.
```
document.getElementById("myID").querySelector(".first").innerHTML = "change the value";
```
**toString ()**: Bir öğeyi bir dizeye dönüştürmek için bu yöntemi kullanabilirsiniz.
Aynı şekilde, keşfedebileceğiniz birçok yöntem ve özellik vardır.

## Çözüm
Bu javasxcript öğreticisini burada JavaScript'te**DOM**ne olduğunu iyi anlayacağınız umuduyla bitiriyoruz. Ayrıca**Dom, Dom seviyeleri, HTML DOM Tree ve Dom Özellikleri**geçtik. Bu blog yazısı, Javascrit kavramlarını güçlü bir şekilde kavramak isteyen yeni başlayanlar için çok önemlidir. Ayrıca, "Ayrıca bkz." Bölümünde bulabileceğiniz başka ilgili makaleler de vardır.

## Bizimle iletişime geçin
Son olarak, [Containerize.com][5] çeşitli heyecan verici konularda devam eden JavaScript öğreticileri sunmaktadır. [Facebook][6], [LinkedIn][7] ve [Twitter][8] dahil olmak üzere sosyal medya platformlarımızda bizi takip ederek döngüde kalabilirsiniz.

## Bir soru sor
[Forum][9] 'da sorularınızı veya sorgularınızı bize bildirebilirsiniz.

## SSS
**JavaScript'te DOM ne kullanılır?**
Bu soruya ayrıntılı bir cevap almak için bu [link][2] ziyaret edebilirsiniz.

## Ayrıca bakınız
  * [JavaScript'te söz nedir? | JavaScript öğreticisi][10]
  * [Sunucusuz bilgi işlem nedir? | Sunucusuz Mimari][11]
  * [Multitenancy nedir? | Neden çok kiracı bir yaklaşım?][12]
  * [Üretken AI nedir | Üretken yapay zeka][13]
  * [JavaScript'te eşzamansız ne bekliyor? | Bir JavaScript Kılavuzu][14]
  * [Vscode'da chatgpt nasıl kullanılır | VSCODE Uzatma Kodu GPT][15]
  * [Openai Chatbot GPT-3 Nedir | Chatgpt bir AI devrimi][16]
  * [Yapay Zekaya Giriş | AI nedir?][17]

  
[1]: https://blog.containerize.com/categories/programming/
[2]: #What-is-Document-Object-Model
[3]: #DOM-levels
[4]: #What-are-DOM-properties-and-how-to-access-them
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
