---
title: "Botpress kullanarak işletmeniz için AI tabanlı bir SSS botu nasıl oluşturulur" 
seoTitle: "Botpress kullanarak işletmeniz için AI tabanlı bir SSS botu nasıl oluşturulur" 
description: "Bu blog yazısında, web sitenizde BotPress kullanarak AI tabanlı bir SSS botu kullanarak müşteri sorgularınızı nasıl otomatikleştireceğinizi öğreneceğiz." 
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "İşletmeler, sorularını verimli bir şekilde çözmek için daha iyi müşteri destek platformlarına ihtiyaç duyarlar. Bu öğreticide, Botpress kullanarak AI tabanlı bir SSS botunun nasıl oluşturulacağını öğreneceğiz" 
url: /tr/how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/
categories: ['Live Chat']
---

## İşletmeler, sorularını verimli bir şekilde çözmek için daha iyi müşteri destek platformlarına ihtiyaç duyar. Bu öğreticide, BotPress kullanarak AI tabanlı bir SSS botunun nasıl oluşturulacağını öğreneceğiz

{{< figure align=center src="images/botpress-banner.png" alt="Botpress kullanarak işletmeniz için SSS botu">}}

SSS otomasyonu, sık sorulan soruları cevaplamak için chatbots kullanarak müşterinizin çevrimiçi deneyimini geliştirmekten oluşur. Yapay zeka ve makine öğrenimindeki gelişmelerle, yapay zeka tabanlı konuşma sohbet botlarına olan talep çok fazla popülerlik ve talep kazanmıştır. Ve bunun nedeni, çoğunlukla tüm işletmelerin işletme çevrimdışı olsa bile müşteri deneyimlerini geliştirmek istemesidir. Konuşma sohbet botları, işletmelerin müşterilerine istedikleri her zaman mevcut yüksek dokunuş desteğini vermelerini mümkün kıldı. Bu blog gönderisinin amacı, BotPress kullanarak AI tabanlı bir SSS botu oluşturmanıza yardımcı olmaktır.
Bu makalede, Botpress'in NLU modülü ve doğal dil anlayışının nasıl çalıştığını ve işletmelerin yüksek müşteri memnuniyeti seviyesine ulaşmalarına yardımcı olabileceğini öğreneceğiz. Başlayalım!
  *** [Doğal dil işleme nedir][1] **
  *[** Kullanım durumunuzu belirleyin **][2]
  *[** botpress'i yükleyin **][3]
  *[** Yeni bir bot oluştur **][4]
  *[** Soru -Cevap botunuzu eğitin **][5]
  *[** Sonuç **][6]

## Doğal dil işleme nedir {#nlu}
Doğal Dil İşleme (NLP), bilgisayarların insan dilini anlamasına, yorumlamasına ve manipüle etmesine yardımcı olan yapay zekanın bir dalıdır. NLP, bilgisayarların insanlarla kendi dillerinde iletişim kurmasına yardımcı olur. Ve bilgisayarların bir metin okumasını, konuşma duymasını, yorumlamasını, duyguyu ölçmesini mümkün kılar.
NLP'nin temel görevi, tokenleştirme ve ayrıştırma, sapma, konuşma parçası etiketleme, dil tespiti ve anlamsal ilişkilerin tanımlanmasını içerir.
NLU, gelen her mesajı işleyen ve niyet sınıflandırması, dil tanımlama, varlık çıkarma ve yuva etiketleme gerçekleştiren botpress modülüdür.

## Kullanım durumunuzu belirleyin {#case}
Bir SSS AI chatbot oluşturmak istiyorsanız, işletmeniz için bir kullanım durumuna sahip olmanız gerekir. Bu öğretici uğruna, kullanıcılarımızın ürünümüzün fiyatlandırması ve iş zamanlamamızla ilgili rastgele herhangi bir soru sormasını istiyoruz.

## botpress {#install}
Botpress'i yüklemek için [web sitesi][7] 'e gidin, "Ücretsiz İndir" i tıklayın ve platformunuzu seçin. Bu öğretici için MAC sürümünü kullanıyorum. İndirme tamamlandıktan sonra Zip dosyasını çıkarabilir ve doğru klasöre girerek terminalinize aşağıdaki komutu çalıştırabilirsiniz.
```
./bp
```

{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="Botpress Start">}}


## yeni bir bot oluştur {#create}
Şimdi, ilk botumuzu tıklayarak ** bot oluştur ** ve ardından ** yeni bot ** seçerek oluşturmak istiyoruz. Botumuzu SSS botu olarak adlandıracağım ve sonra bir bot şablonu olarak ** BOT BOT ** tıklamadan önce ** boş bot ** seçeceğim **.

{{< figure align=center src="images/create-bot.gif" alt="Yarat-New-Bot">}}

Şimdi bu botu Botpress Studio Editor'da düzenleyeceğiz.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="Stüdyoda Botpress Düzenle">}}

Şimdi, stüdyoda, sol kenar çubuğu boyunca birkaç menü var. Ancak basitlik uğruna, Soru -Cevap bölümüne bağlı kalacağız.
“Soru -Cevap” simgesine tıklayın ve olası / sık sorulan soruları ve uygun cevaplarını ekleyin.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="Botpress Soru -Cevap">}}


## SSS botunuzu eğitin {#train}
Şimdi işiniz bittiğinde, Soru -Cevap bölümünün sağ alt köşesindeki “Chatbot Tren” düğmesini tıklayarak SSS botunuzu eğitmeniz gerekir.

{{< figure align=center src="images/train-bot.gif" alt="Botpress tren botu">}}

Eğitim yapıldıktan sonra SSS botunuzu yerleşik emülatör aracını kullanarak test edebilirsiniz.

{{< figure align=center src="images/test-faq-bot.gif" alt="SSS botunuzu test edin">}}

Şimdi, SSS botunuza hazır olduğunuzda, [resmi gömme][8] Botpress kılavuzunu izleyerek bu botu web sitenizde dağıtabilirsiniz.

## Sonuç {#Conclusion}
Bu blog yazısında doğal dil işlemeyi öğrendik ve anladık. Ayrıca bot oluşturma süreciyle uygulamalı olarak alıyoruz. Müşterilerinizin iş zamanlamalarınızı ve ödeme planlarınızı bilmelerine yardımcı olan basit bir SSS botu eğittik. Eğiticinin amacı, yeni başlayanların Botpress kullanarak AI tabanlı bir SSS botuna hızla başlamasına yardımcı olmaktı.

  
[1]: #nlu
[2]: #case
[3]: #install
[4]: #create
[5]: #train
[6]: #conclusion
[7]: https://botpress.com/download
[8]: https://botpress.com/docs/channels/web
