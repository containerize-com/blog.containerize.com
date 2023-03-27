---
title: "كيف يتكامل غاتسبي مع WordPress؟ | غاتسبي وورد" 
seoTitle: "كيف يتكامل غاتسبي مع WordPress؟ | غاتسبي وورد" 
description: "استخدم Gatsby WordPress معًا لتحسين سرعة موقع الويب الخاص بك وقابلية التوسع والأمان. في هذا البرنامج التعليمي ، ستتعلم كيفية استخدام برنامج مفتوح المصدر." 
date: Wed, 25 Nov 2020 10:51:13 +0000
author: Assad Mahmood
summary: "قم بتكوين Gatsby مفتوح المصدر مع WordPress الخاص بك لجلب تجربة مستخدم أكبر والأداء العام. دعنا نتعلم كيفية استخدام مولد الموقع الثابت هذا." 
url: /ar/how-does-gatsby-integrate-with-wordpress-gatsby-wordpress/
categories: ['Blogging']
---

## تكوين Gatsby مفتوح المصدر مع WordPress لجلب تجربة مستخدم أكبر والأداء العام. دعنا نتعلم كيفية استخدام مولد الموقع الثابت هذا.

{{< figure align=center src="images/wordpressGatsby-1024x537.png" alt="غاتسبي وورد">}}


## ملخص
Gatsbyjs هو مولد موقع ثابت مجاني ومفتوح المصدر ، ويتم تشغيله بواسطة GraphQL. يستخدم التكوين المسبق القوي لإنشاء موقع ويب يستخدم ملفات ثابتة فقط لتحميل صفحات سريع بشكل لا يصدق. WordPress هي منصة تدوين رائعة مفتوحة المصدر. نتيجة لذلك ، هناك الكثير من الأشخاص الذين يعرفون كيفية معرفة ما إذا كان الموقع هو موقع WordPress حتى يتمكنوا من اختراقه وسرقة المعلومات. سيمنحك استخدام Gatsby WordPress معًا نفس قوة إدارة محتوى WordPress وسرعة Gatsby.
في هذه المقالة ، سننظر في ماهية Gatsby ولماذا تحتاج إلى استخدامها مع برنامج CMS. بعد ذلك ، سنخوض التفاصيل حول كيفية استخدام WordPress و Gatsby معًا لإنشاء تجربة رائعة على الويب. لنبدأ!
* [ **ما هو غاتسبي** ؟][1]
* **[إيجابيات وسلبيات استخدام WordPress و Gatsby][2]** 
* **[كيفية استخدام Gatsby مع WordPress][3]** 
* **[الخلاصة][4]** 

## ما هو غاتسبي {#gatsby}

غاتسبي هو مولد موقع ثابت. هذا يعني أن Gatsby يقوم بإنشاء ملفات HTML الثابتة التي يتم تحميلها على خادم موقع الويب الخاص بك. عندما يهبط زائر على موقعك ، يتم تقديم هذه الملفات الثابتة إلى متصفحه ، بدلاً من المحتوى الديناميكي الذي يخدم WordPress عمومًا. إنه إطار مجاني ومفتوح المصدر يعتمد على React يساعد المطورين على بناء مواقع ومواقع سريعة الحرق وتطبيقات.

## إيجابيات وسلبيات استخدام WordPress و Gatsby {#proscons}

وفقًا للوثائق الرسمية لـ Gatsby [5] ، قاموا بتجميع طاولة ، حيث يكون مزيج Gatsby WordPress رائعًا ولمنه ليس كذلك. من أجل السهولة ، أنا أدرج تلك هنا.
{{_LINE_23_}}
{{_LINE_24_}}
{{_LINE_25_}}
      WordPress و Gatsby رائع ل
{{_LINE_27_}}
{{_LINE_28_}}
{{_LINE_29_}}
        فرق المحتوى المريحة مع تجربة تحرير محتوى WordPress
{{_LINE_31_}}
{{_LINE_32_}}
        فرق التطوير التي تقدر استخدام تقنيات الشهيرة مفتوحة المصدر
{{_LINE_34_}}
{{_LINE_35_}}
        إعادة تصميم المواقع مع المحتوى المخزنة بالفعل في WordPress
{{_LINE_37_}}
{{_LINE_38_}}
        الفرق التي ترغب في امتلاك بياناتها ومكدس التكنولوجيا
{{_LINE_40_}}
{{_LINE_41_}}
        سير عمل التحكم المعقدة في الوصول أو قيود نمذجة المحتوى
{{_LINE_43_}}
{{_LINE_44_}}
        المشاريع التي يكون الأمن مهمًا
{{_LINE_46_}}
{{_LINE_47_}}
        مشاريع الطلب المرتفع حيث يكون الأداء أمرًا بالغ الأهمية
{{_LINE_49_}}
{{_LINE_50_}}
{{_LINE_51_}}
{{_LINE_52_}}
{{_LINE_53_}}
      WordPress و Gatsby ليسوا رائعين ل
{{_LINE_55_}}
{{_LINE_56_}}
{{_LINE_57_}}
        الفرق التي تتطلب استخدام موضوعات واجهة المستخدم WordPress
{{_LINE_59_}}
{{_LINE_60_}}
        أولئك الذين يبحثون عن سحابة سحابة بالكامل
{{_LINE_62_}}
{{_LINE_63_}}
{{_LINE_64_}}
{{_LINE_65_}}
إلى جانب هذه النقاط الرسمية ، أرغب في إدراج بعض إيجابيات وسلبيات استخدام Gatsby WordPress معًا
{{_LINE_67_}}
{{_LINE_68_}}
{{_LINE_69_}}
      إيجابيات
{{_LINE_71_}}
{{_LINE_72_}}
{{_LINE_73_}}
        سرعات تحميل أسرع - مواقع الويب الثابتة يتم تحميلها بشكل أسرع من الديناميكية. نتيجة لذلك ، فإنه يؤثر على صفحتك تعمل على تحميل سرعات وتصنيف كبار المسئولين الاقتصاديين.
{{_LINE_75_}}
{{_LINE_76_}}
        تكاليف خادم أقل - نظرًا لأن الملفات الثابتة لا تحتاج إلى برامج خاصة ، وبالتالي يمكن تقديم صفحات HTML الثابتة من خوادم أرخص أيضًا.
{{_LINE_78_}}
{{_LINE_79_}}
        أكثر أمانًا - بالنسبة للمواقع الثابتة ، لا توجد مكونات متحركة من الأجزاء وبالتالي لا توجد فرصة للمتسللين لاستغلال برنامجك.
{{_LINE_81_}}
{{_LINE_82_}}
{{_LINE_83_}}
{{_LINE_84_}}
{{_LINE_85_}}
{{_LINE_86_}}
{{_LINE_87_}}
      سلبيات
{{_LINE_89_}}
{{_LINE_90_}}
{{_LINE_91_}}
        منحنى التعلم - يتطلب مهارات إضافية للمطورين. مثل التعلم ReactJs و GraphQL
{{_LINE_93_}}
{{_LINE_94_}}
        فقط المحتوى الثابت - إذا كنت بحاجة إلى تقديم أي محتوى ديناميكي. ثم غاتسبي ليس لك. لا يمكن إلا للملفات الثابتة الخادم. وبالتالي ، لا يمكنك الحصول على أي نظام تعليق يجلب البيانات من قاعدة البيانات.
{{_LINE_96_}}
{{_LINE_97_}}
{{_LINE_98_}}
{{_LINE_99_}}

## كيفية استخدام Gatsby مع WordPress {#howto}

قبل أن تتمكن من تثبيت Gatsby ، تحتاج إلى تثبيت [Nodejs][6] و [NPM][7] في بيئة موقع الويب الخاص بك.

### الخطوة 1 - تثبيت Gatsby
```
npm install -g gatsby-cli
```
يقوم هذا الأمر بتشغيل المثبت تلقائيًا. يقوم بتنزيل وتثبيت جميع التبعيات قبل تثبيت Gatsby. بمجرد اكتمال ذلك ، يمكنك البدء في إنشاء موقع Gatsby الأول.
```
gatsby new gatsby-site
```
سيؤدي ذلك إلى تنزيل قالب بداية Gatsby ووضعه في الدليل/Gatsby-Wordpress. بمجرد اكتمال التثبيت ، يمكنك فتح إصدار تطوير الموقع
```
gatsby develop
```
الآن ، في متصفح الويب الخاص بك ، أدخل _http: // localhost: 8000_ ويجب فتح القالب الافتراضي الخاص بك.

{{< figure align=center src="images/gatsby-starter-1024x681.jpg" alt="قالب جاتسبي بداية">}}


### الخطوة 2 - قم بتوصيل Gatsby بـ WordPress
في هذا القسم من دليل Gatsby WordPress ، سنقوم بتوصيل مولد الموقع الثابت مع WordPress. لديك موقع ويب ثابت أساسي ، ولكن تحتاج إلى دمجه مع WordPress. يشير هذا إلى موقع Gatsby الخاص بك إلى عنوان مدونة WordPress الخاصة بك ، مما يتيح له سحب أحدث البيانات عند تشغيل خادم التطوير. بمجرد الاتصال ، ستقوم Gatsby ببناء موقع ويب ثابت بناءً على القالب الحالي.
قم بتثبيت المكون الإضافي لـ Gatsby Source WordPress من مستودع NPM.
```
npm install gatsby-source-wordpress
```

### الخطوة 3 - تكوين Gatsby
ضع الكود التالي في ملف _gatsby-config.js_
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
قم بتحديث هذا الرمز للإشارة إلى موقع WordPress الخاص بك. إذا تم استضافة موقع الويب الخاص بك محليًا ، فيمكنك بعد Baseurl استخدام _localhost: 8888/WordPress_ بدلاً من عنوان URL لموقع الويب الخاص بك. بعد حفظ الملف ، ستحتاج إلى إنشاء قوالب صفحتك.

### الخطوة 4 - قوالب صفحة الإنشاء
تمكين بناء قوالب صفحات هذا الموقع من إنشاء منشور لكل صفحة على موقع WordPress الخاص بك. سيقوم المكون الإضافي المصدر بسحب البيانات التي تحتاجها من WordPress لهذه الصفحات ، ولكن سيتعين عليك إنشاء قالب التصميم.
في ملف _gatsby-node.js_ ، أضف الرمز التالي
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
بعد استدعاء جميع البيانات ، سيقوم Gatsby بإنشاء صفحة لكل منشور. باستخدام أمر تطوير ، يمكنك الانتقال إلى كل صفحة جديدة باستخدام عنوان URL الذي تم إنشاؤه.

## خاتمة {#conclusion}

في هذا البرنامج التعليمي Gatsby WordPress ، قمنا بتغطية كيفية إنشاء موقع Gatsby من WordPress. لقد تعلمنا ما هي إيجابيات وسلبيات هذين البرنامجين مفتوح المصدر. قمنا أيضًا بتغطية كيفية التثبيت والبدء في بيئة تطوير Gatsby.
أخيرًا ، [Containerize.com][8] يكتب مقالات حول منتجات أخرى مفتوحة المصدر. لذلك ، يرجى البقاء على اتصال مع فئة النظام الأساسي المفتوح المصدر [9] للأخبار والتحديثات العادية.



[1]: #gatsby
[2]: #proscons
[3]: #howto
[4]: #conclusion
[5]: https://www.gatsbyjs.com/guides/wordpress/
[6]: https://nodejs.org/en/
[7]: https://www.npmjs.com/
[8]: https://www.containerize.com/
[9]: https://products.containerize.com/blogging/
