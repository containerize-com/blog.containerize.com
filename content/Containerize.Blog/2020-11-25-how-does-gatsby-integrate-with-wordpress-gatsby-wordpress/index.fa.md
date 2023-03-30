---
title: "چگونه گتسبی با وردپرس ادغام می شود؟ | گتسبی وردپرس" 
seoTitle: "چگونه گتسبی با وردپرس ادغام می شود؟ | گتسبی وردپرس" 
description: "برای بهبود سرعت ، مقیاس پذیری و امنیت وب سایت خود از Gatsby WordPress استفاده کنید. در این آموزش ، یاد می گیرید که چگونه از این نرم افزار منبع باز استفاده کنید." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "منبع باز گتسبی را با وردپرس خود پیکربندی کنید تا تجربه کاربری بیشتر و عملکرد کلی را به همراه داشته باشید. بیایید یاد بگیریم که چگونه از این ژنراتور سایت استاتیک استفاده کنیم." 
url: /fa/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## تنظیمات منبع باز گتسبی را با وردپرس خود پیکربندی کنید تا تجربه کاربر و عملکرد کلی بیشتری داشته باشید. بیایید یاد بگیریم که چگونه از این ژنراتور سایت استاتیک استفاده کنیم.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="گتسبی وردپرس">}}


## بررسی اجمالی
GatsbyJS یک ژنراتور سایت استاتیک مبتنی بر React مبتنی بر منبع آزاد و باز است. از قبل از پیکربندی قدرتمند برای ساختن وب سایتی که فقط از فایلهای استاتیک برای بارهای صفحه فوق العاده سریع استفاده می کند ، استفاده می کند. WordPress یک پلت فرم عالی برای وبلاگ نویسی منبع باز است. در نتیجه ، افراد زیادی هستند که می دانند چگونه می توانند بفهمند آیا یک سایت یک سایت وردپرس است تا بتوانند آن را هک کرده و اطلاعات را سرقت کنند. استفاده از گتسبی وردپرس در کنار هم همان قدرت مدیریت محتوای وردپرس و سرعت گتسبی را به شما می دهد.
در این مقاله ، ما خواهیم دید که گتسبی چیست و چرا شما باید از آن با نرم افزار CMS استفاده کنید. سپس ، ما در مورد نحوه استفاده از WordPress و Gatsby با هم برای ایجاد یک تجربه وب سایت شگفت انگیز خواهیم پرداخت. بیا شروع کنیم!
* [ **گتسبی** چیست؟][1]
* **[جوانب مثبت و منفی استفاده از وردپرس و گتسبی][2]** 
**[نحوه استفاده از گتسبی با وردپرس][3]**
* **[نتیجه گیری][4]** 

## گتسبی چیست {#gatsby}

گتسبی یک مولد سایت استاتیک است. این بدان معنی است که گتسبی پرونده های HTML استاتیک را که در سرور وب سایت شما بارگذاری می شوند ، تولید می کند. هنگامی که یک بازدید کننده در سایت شما قرار می گیرد ، این پرونده های استاتیک به جای محتوای پویا وردپرس به طور کلی در خدمت مرورگر آنها هستند. این یک چارچوب منبع آزاد و آزاد است که بر اساس React است که به توسعه دهندگان کمک می کند تا وب سایت ها و برنامه های سریع و سریع را بسازند.

## جوانب مثبت و منفی استفاده از وردپرس و گتسبی {#proscons}

طبق رسمی [اسناد] گتسبی ، آنها یک جدول را گردآوری کرده اند ، که ترکیب گتسبی وردپرس عالی است و برای چه کسی نیست. به خاطر سهولت ، من در اینجا لیست می کنم.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      وردپرس و گتسبی برای
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        تیم های محتوا که با تجربه ویرایش محتوای وردپرس راحت هستند
{{_LINE_31_}}
{{_LINE_32_}}
        تیم های توسعه ای که با استفاده از فناوری های محبوب و منبع باز ارزش قائل هستند
{{_LINE_34_}}
{{_LINE_35_}}
        طراحی مجدد سایت ها با محتوایی که قبلاً در وردپرس ذخیره شده اند
{{_LINE_37_}}
{{_LINE_38_}}
        تیم هایی که می خواهند داده و پشته فناوری خود را در اختیار داشته باشند
{{_LINE_40_}}
{{_LINE_41_}}
        جریان کار کنترل دسترسی پیچیده یا محدودیت های مدل سازی محتوا
{{_LINE_43_}}
{{_LINE_44_}}
        پروژه هایی که در آن امنیت مهم است
{{_LINE_46_}}
{{_LINE_47_}}
        پروژه های تقاضای زیاد که در آن عملکرد مهم است
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      وردپرس و گتسبی برای آن عالی نیست
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        تیم هایی که نیاز به استفاده از مضامین UI وردپرس دارند
{{_LINE_59_}}
{{_LINE_60_}}
        کسانی که به دنبال یک CMS Cloud کاملاً مدیریت شده هستند
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
علاوه بر این نکات رسمی ، من می خواهم برخی از جوانب مثبت و منفی استفاده از گتسبی وردپرس را با هم ذکر کنم
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      طرفداران
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        سرعت بار سریعتر - وب سایت های استاتیک سریعتر از پویا بارگیری می شوند. در نتیجه ، بر سرعت و رتبه بندی SEO بر صفحه شما تأثیر می گذارد.
{{_LINE_75_}}
{{_LINE_76_}}
        هزینه های سرور کمتری - از آنجا که پرونده های استاتیک نیازی به نرم افزارهای خاصی ندارند ، از این رو می توان صفحات HTML استاتیک را نیز از سرورهای ارزان قیمت نیز تهیه کرد.
{{_LINE_78_}}
{{_LINE_79_}}
        امن تر - برای سایت های استاتیک ، هیچ مؤلفه ای از قطعات وجود ندارد ، بنابراین هیچ فرصتی برای هکرها برای سوء استفاده از نرم افزار شما وجود ندارد.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      منفی
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        منحنی یادگیری - برای توسعه دهندگان به مهارت های اضافی نیاز دارد. مانند یادگیری Reactjs و GraphQL
{{_LINE_93_}}
{{_LINE_94_}}
        فقط محتوای استاتیک - در صورت نیاز به خدمت به هر محتوای پویا. سپس گتسبی برای شما مناسب نیست. این فقط می تواند پرونده های استاتیک سرور باشد. از این رو ، شما نمی توانید هیچ سیستم اظهارنظر داشته باشید که داده ها را از پایگاه داده دریافت کند.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## نحوه استفاده از گتسبی با وردپرس {#howto}

قبل از نصب Gatsby ، باید [NodeJs][6] و [NPM][7] را در محیط وب سایت خود نصب کنید.

### مرحله 1 - گتسبی را نصب کنید
```
npm install -g gatsby-cli
```
این دستور نصب را به طور خودکار اجرا می کند. قبل از نصب گتسبی ، تمام وابستگی ها را بارگیری و نصب می کند. پس از اتمام این کار ، می توانید اولین وب سایت Gatsby خود را شروع کنید.
```
gatsby new gatsby-site
```
با این کار الگوی استارت گتسبی بارگیری می شود و آن را در دایرکتوری/گتسبی-واردپرس قرار می دهد. پس از اتمام نصب ، می توانید نسخه توسعه سایت را باز کنید
```
gatsby develop
```
اکنون ، در مرورگر وب خود ، _http: // localhost: 8000_ را وارد کنید و الگوی پیش فرض شما باید باز شود.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="الگوی استارت گتسبی">}}


### مرحله 2 - گتسبی را به وردپرس وصل کنید
در این بخش از راهنمای گتسبی وردپرس ، ما این ژنراتور سایت استاتیک را با وردپرس وصل خواهیم کرد. شما یک وب سایت استاتیک اساسی دارید ، اما باید آن را با وردپرس ادغام کنید. این سایت گتسبی شما را به آدرس وبلاگ وردپرس خود نشان می دهد و این امکان را می دهد تا هنگام اجرای سرور توسعه ، آخرین داده ها را بکشید. پس از اتصال ، گتسبی بر اساس الگوی فعلی شما یک وب سایت استاتیک ایجاد می کند.
افزونه Gatsby Source WordPress را از مخزن NPM نصب کنید.
```
npm install gatsby-source-wordpress
```

### مرحله 3 - پیکربندی گتسبی
کد زیر را در پرونده _gatsby-config.js_ خود قرار دهید
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
این کد را به روز کنید تا به وب سایت وردپرس خود اشاره کنید. اگر وب سایت شما به صورت محلی میزبانی شده است ، پس از BaseUrl می توانید به جای URL وب سایت خود از _localhost: 8888/wordpress_ استفاده کنید. پس از ذخیره پرونده ، باید الگوهای صفحه خود را بسازید.

### مرحله 4 - ساخت الگوهای صفحه
الگوهای صفحه ساختمان این ژنراتور سایت را قادر می سازد تا برای هر صفحه در وب سایت وردپرس خود پستی ایجاد کند. افزونه منبع داده های مورد نیاز خود را از وردپرس برای این صفحات می کشد ، اما شما باید الگوی طراحی را ایجاد کنید.
در پرونده _gatsby-node.js_ خود ، کد زیر را اضافه کنید
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
پس از تماس با تمام داده ها ، گتسبی برای هر پست صفحه ای تولید می کند. با استفاده از دستور توسعه ، می توانید با استفاده از URL تولید شده به هر صفحه جدید بروید.

## نتیجه {#conclusion}

در این آموزش گتسبی وردپرس ، ما نحوه تولید یک وب سایت گتسبی را از وردپرس پوشش دادیم. ما یاد گرفتیم که جوانب مثبت و منفی این دو نرم افزار منبع باز چیست. ما همچنین نحوه نصب و شروع کار با محیط توسعه گتسبی را پوشش دادیم.
سرانجام ، [Containerize.com][8] در حال نوشتن مقالاتی در مورد محصولات منبع باز بیشتر است. بنابراین ، لطفاً برای اخبار و به روزرسانی های منظم با منبع باز [وبلاگ نویسی][9] در تماس باشید.



[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/