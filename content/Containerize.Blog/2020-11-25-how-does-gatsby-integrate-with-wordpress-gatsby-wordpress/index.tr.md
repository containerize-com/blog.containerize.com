---
title: "Gatsby WordPress ile nasıl entegre olur? | Gatsby WordPress" 
seoTitle: "Gatsby WordPress ile nasıl entegre olur? | Gatsby WordPress" 
description: "Web sitenizin hızını, ölçeklenebilirliğini ve güvenliğini artırmak için Gatsby WordPress birlikte kullanın. Bu öğreticide, bu açık kaynaklı yazılımları nasıl kullanacağınızı öğreneceksiniz." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "Daha fazla kullanıcı deneyimi ve genel performans getirmek için WordPress ile açık kaynak Gatsby'yi yapılandırın. Bu statik site jeneratörünü nasıl kullanacağınızı öğrenelim." 
url: /tr/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## Daha fazla kullanıcı deneyimi ve genel performans getirmek için WordPress ile açık kaynak Gatsby'yi yapılandırın. Bu statik site jeneratörünü nasıl kullanacağınızı öğrenelim.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="Gatsby WordPress">}}


## Genel Bakış
GATSBYJS, ücretsiz ve açık kaynaklı reaksiyon tabanlı, GraphQL ile çalışan statik site jeneratörüdür. İnanılmaz derecede hızlı sayfa yükleri için yalnızca statik dosyalar kullanan bir web sitesi oluşturmak için güçlü bir ön oluşturma kullanır. WordPress harika bir açık kaynak bloglama platformudur. Sonuç olarak, bir sitenin bir WordPress sitesi olup olmadığını nasıl anlayacağını bilen birçok insan var, böylece onu hackleyebilir ve bilgi çalabilirler. Gatsby WordPress'i birlikte kullanmak size WordPress içerik yönetiminin ve Gatsby'nin hızının aynı gücünü verecektir.
Bu makalede, Gatsby'nin ne olduğuna ve neden CMS yazılımı ile kullanmanız gerektiğine bakacağız. Ardından, inanılmaz bir web sitesi deneyimi oluşturmak için WordPress ve Gatsby'yi birlikte nasıl kullanacağınız konusunda ayrıntılara gireceğiz. Hadi başlayalım!
  *[** Gatsby nedir **?] [1]
  *** [WordPress ve Gatsby kullanmanın artıları ve eksileri] [2] **
  *** [Gatsby ile WordPress ile nasıl kullanılır] [3] **
  *** [Sonuç] [4] **

## Gatsby nedir {#gatsby}
Gatsby statik bir site jeneratörüdür. Bu, Gatsby'nin web sitenizin sunucusuna yüklenen statik HTML dosyalarını oluşturduğu anlamına gelir. Bir ziyaretçi sitenize indiğinde, bu statik dosyalar, WordPress'in genel olarak hizmet ettiği dinamik içerik yerine tarayıcılarına sunulur. Geliştiricilerin yanan hızlı web siteleri ve uygulamaları oluşturmasına yardımcı olan React'e dayanan ücretsiz ve açık kaynaklı bir çerçevedir.

## WordPress ve Gatsby kullanmanın artıları ve eksileri {#proscons}
Gatsby’nin resmi [belgeleri] [5] uyarınca, Gatsby WordPress kombinasyonunun harika ve kimin olmadığını bir masa derlediler. Kolaylık uğruna, bunları burada listeliyorum.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress ve Gatsby için harika
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        WordPress içerik düzenleme deneyimi ile rahat olan içerik ekipleri
{{_LINE_31_}}
{{_LINE_32_}}
        Popüler, açık kaynaklı teknolojiler kullanarak değer veren geliştirme ekipleri
{{_LINE_34_}}
{{_LINE_35_}}
        WordPress'te zaten depolanmış içeriğe sahip sitelerin yeniden tasarlanması
{{_LINE_37_}}
{{_LINE_38_}}
        Veri ve teknoloji yığınlarına sahip olmak isteyen ekipler
{{_LINE_40_}}
{{_LINE_41_}}
        Karmaşık erişim kontrol iş akışları veya içerik modelleme kısıtlamaları
{{_LINE_43_}}
{{_LINE_44_}}
        Güvenliğin önemli olduğu projeler
{{_LINE_46_}}
{{_LINE_47_}}
        Performansın en önemli olduğu yüksek talep projeleri
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress ve Gatsby için harika değil
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        WordPress UI temalarının kullanılmasını gerektiren ekipler
{{_LINE_59_}}
{{_LINE_60_}}
        Tamamen yönetilen bir bulut CMS arayanlar
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
Bu resmi noktaların yanı sıra, Gatsby WordPress'i birlikte kullanmanın bazı artılarını ve eksilerini listelemek istiyorum.
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      Profesyonel
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        Daha hızlı yük hızları - Statik web siteleri dinamikten daha hızlı yüklenir. Sonuç olarak, sayfanızı yükleme hızlarını ve SEO sıralamasını etkiler.
{{_LINE_75_}}
{{_LINE_76_}}
        Daha az sunucu maliyeti - Statik dosyaların özel yazılımlara ihtiyaç duymadığından, daha ucuz bir sunucudan statik HTML sayfaları da sunulabilir.
{{_LINE_78_}}
{{_LINE_79_}}
        Daha güvenli - statik siteler için, parçaların hareketli bileşenleri yoktur, bu nedenle bilgisayar korsanlarının yazılımınızı kullanma şansı yoktur.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      Eksileri
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        Öğrenme eğrisi - Geliştiriciler için ek beceriler gerektirir. Reactjs ve Graphql öğrenmek gibi
{{_LINE_93_}}
{{_LINE_94_}}
        Yalnızca statik içerik - herhangi bir dinamik içerik sunmanız gerekiyorsa. O zaman Gatsby senin için değil. Yalnızca sunucu statik dosyaları olabilir. Bu nedenle, verileri veritabanından getiren herhangi bir yorum sisteminiz olamaz.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## Gatsby ile wordpress ile nasıl kullanılır {#howto}
Gatsby'yi yüklemeden önce, web sitenize [Nodejs] [6] ve [NPM] [7] yüklemeniz gerekir.

### Adım 1 - Gatsby'yi yükle
```
npm install -g gatsby-cli
```
Bu komut yükleyiciyi otomatik olarak çalıştırır. Gatsby'yi yüklemeden önce tüm bağımlılıkları indirir ve yükler. Bu tamamlandıktan sonra, ilk Gatsby web sitenizi oluşturmaya başlayabilirsiniz.
```
gatsby new gatsby-site
```
Bu, Gatsby’nin başlangıç ​​şablonunu indirecek ve/Gatsby-WordPress dizine yerleştirecek. Kurulum tamamlandıktan sonra, sitenin geliştirme sürümünü açabilirsiniz
```
gatsby develop
```
Şimdi, web tarayıcınızda _http: // localhost: 8000_ girin ve varsayılan şablonunuz açılmalıdır.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="Gatsby Başlangıç ​​Şablonu">}}


### Adım 2 - Gatsby'yi WordPress'e bağlayın
Gatsby WordPress kılavuzunun bu bölümünde, bu statik site jeneratörünü WordPress ile bağlayacağız. Temel bir statik web siteniz var, ancak WordPress ile entegre etmeniz gerekiyor. Bu, Gatsby sitenizi WordPress blogunuzun adresine yönlendirerek, geliştirme sunucusunu çalıştırdığınızda en son verileri çekmesini sağlar. Bağlandıktan sonra Gatsby, mevcut şablonunuza dayalı statik bir web sitesi oluşturacaktır.
Gatsby kaynak WordPress eklentisini NPM deposundan yükleyin.
```
npm install gatsby-source-wordpress
```

### Adım 3 - Gatsby'yi yapılandırın
Aşağıdaki kodu _gatsby-config.js_ dosyanıza koyun
```
module.exports = {
  ...
  plugins: [
    ...,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        // your WordPress source
        baseurl:  `wpexample.com`,
aliases: -  `wpexample.com`,
        protocol: `https`,
        // is it hosted on wordpress.com, or self-hosted?
        hostingWPCOM: false,
        // does your site use the Advanced Custom Fields Plugin?
        useACF: false
      }
    },
  ]
}
```
WordPress web sitenize işaret etmek için bu kodu güncelleyin. Web siteniz yerel olarak barındırılıyorsa, BaseURL'den sonra web sitenizin URL'si yerine _localhost: 8888/wordpress_ kullanabilirsiniz. Dosyayı kaydettikten sonra, sayfa şablonlarınızı oluşturmanız gerekir.

### Adım 4 - Sayfa şablonları oluşturun
Bina Sayfa Şablonları Bu Site Jeneratörünün WordPress web sitenizdeki her sayfa için bir gönderi oluşturmasını sağlar. Kaynak eklentisi, bu sayfalar için WordPress'ten ihtiyacınız olan verileri çeker, ancak tasarım şablonunu oluşturmanız gerekir.
_Gatsby-node.js_ dosyanızda aşağıdaki kodu ekleyin
```
const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
      allWordpressPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `)
  const postTemplate = path.resolve(`./src/templates/post.js`)
  result.data.allWordpressPost.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(postTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })
}
```
Tüm verileri aradıktan sonra, Gatsby her yazı için bir sayfa oluşturur. Geliştirme komutunu kullanarak, oluşturulan URL'yi kullanarak her yeni sayfaya gidebilirsiniz.

## Sonuç {#Conclusion}
Bu Gatsby WordPress öğreticisinde, WordPress'ten bir Gatsby web sitesi nasıl oluşturulacağını ele aldık. Bu iki açık kaynak yazılımının artıları ve eksileri olduğunu öğrendik. Ayrıca Gatsby geliştirme ortamına nasıl kurulacağını ve başlayacağını da ele aldık.
Son olarak, [Containerize.com] [8] diğer açık kaynaklı ürünler üzerine makaleler yazıyor. Bu nedenle, düzenli haberler ve güncellemeler için lütfen açık kaynak [bloglama] [9] platform kategorisiyle iletişim halinde olun.
[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
