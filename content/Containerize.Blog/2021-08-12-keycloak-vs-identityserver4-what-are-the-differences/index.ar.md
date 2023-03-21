---
title: "keycloak vs IdentityServer4 | ما هي الاختلافات؟" 
seoTitle: "keycloak vs IdentityServer4 | ما هي الاختلافات؟" 
description: "يدور منشور المدونة هذا حول مقارنة خوادم الهوية المفتوحة المصدر الرائدة keycloak vs IdentityServer4. كلا البرنامجين مستضافة ذاتيا وغنيين." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "keycloak و IdentityServer4 هما من مقدمي الهوية مفتوح المصدر الذين يقدمون خدمات واحدة على خدمات الوصول إلى الموارد. دعنا نقارن هذين برنامج SSO." 
url: /ar/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## keycloak و IdentityServer4 هما مقدمي هوية مفتوح المصدر يقدمون خدمات واحدة على خدمات الوصول إلى الموارد. دعنا نقارن هذين برنامج SSO.

{{< figure align=center src="images/open-source-sso.png" alt="keycloak vs IdentityServer4">}}


## ملخص
في الماضي القريب ، قمنا بنشر بعض منشورات المدونة حول مواضيع مثل كيفية الاستفادة من نظام SSO لتحسين نمو الأعمال ، وبرامج أفضل 5 برنامج SOLING ON OPEN OPEN الآثار الأساسية على الأعمال. ومع ذلك ، فإن إدارة المستخدم هي الجانب الأكثر أهمية في أي تطبيق. في عالم التكنولوجيا الحديث ، يعد الأمن السيبراني موضوعًا ساخنًا. هناك الكثير من التطبيقات التي يزورها المستخدمون وتسجيل الدخول وتسجيل الخروج. المستخدم الذي لديه مجموعات متعددة من بيانات الاعتماد أكثر عرضة للضعف وهدف سهل من الهجمات الإلكترونية.
لذلك ، من الجيد دائمًا الوصول إلى الموارد باستخدام مجموعة واحدة من بيانات الاعتماد. يمكّن برنامج تسجيل الدخول المفرد المستخدمين من تسجيل الدخول إلى تطبيقات متعددة باستخدام اسم مستخدم واحد وكلمة مرور. سيقوم المستخدمون بتسجيل الدخول مرة واحدة فقط ويمكنهم الوصول إلى العديد من التطبيقات دون تسجيل الدخول مرة أخرى. يكتسب هذا النهج شعبية يومًا بعد يوم حيث يقوم مجتمع المصادر المفتوحة بتطوير مقدمي هوية المصدر المفتوح مثل [IdentityServer4][1] و [keycloak][2]. في منشور المدونة هذا ، سنذهب إلى أفضل حللين مفتوح المصدر SSO وسنقارنة الميزات والنطاقات لأن العنوان يشير إلى keycloak vs IdentityServer4. سيتم تغطية النقاط التالية.
  * **[مقدمة موجزة لـ IdentityServer4][3]**
  * **[ما هو keycloak؟][4]**
  * **[مقارنة بين keycloak & IdentityServer4][5]**
  * **[الخلاصة][6]**

## مقدمة موجزة لـ IdentityServer4   {#Intro}
[IdentityServer4][1] هو برنامج SSO مفتوح المصدر يعتمد على OpenID Connect و OAUTH 2.0. تتم كتابة هذه الأداة المجانية في .NET Framework (4.5.x) و .NET Core لتوفير خدمات تسجيل واحدة عبر تطبيقات متعددة. كخادم مصادقة ، يوفر رمز JWT يمكن استخدامه للوصول إلى الموارد الرقمية. يقدم العديد من الأحكام مثل التحكم في الوصول إلى واجهة برمجة التطبيقات ، وتخصيص واجهة المستخدم ، وترخيص واجهة برمجة التطبيقات ، والمزود القائم على المطالبة. علاوة على ذلك ، فهي مرنة وقابلة للتمديد ، وتأتي مع قدرات الاستضافة الذاتية. بالإضافة إلى ذلك ، فإنه يدعم تدفقات متعددة وهويات اتحادية مثل Google و Facebook و Twitter والشبكات الاجتماعية الأخرى.
تتوفر جميع الكود المصدري لهذا البرنامج المجاني المفرد على [github][7]. لذلك ، يمكن للمستخدمين المرور بجميع الوثائق المتعلقة بالنشر والتطوير.

## ما هو keycloak؟   {#مفتاح}
[keycloak][2] هو حل مصادقة آخر يستخدم على نطاق واسع. يوفر إدارة الهوية والوصول باستخدام OpenID Connect و OAUTH2.0 و SAML 2.0. يوفر هذا البرنامج المجاني واجهة مستخدم سهلة الاستخدام لإدارة المستخدمين والأدوار والتكوينات والجلسات. علاوة على ذلك ، فإنه يوفر عمليات تكامل مع تطبيقات الطرف الثالث مثل LDAP و Active Directory. يمكن للمستخدمين الاستفادة من إدارة المستخدم المركزية الخاصة بهم من خلال تعزيز قابلية التوسع وتوافرها. قبل كل شيء ، يوفر مكتبات العملاء للتكامل إلى جانب العديد من الميزات مثل تسجيل الدخول الاجتماعي ، واتحاد المستخدم ، والإدارة المركزية ، وسياسات كلمة المرور ، والتجميع ، والمحولات. يتوفر جميع الكود المصدري لهذا البرنامج المفرد المجاني على [github][8]. لذلك ، يمكن للمستخدمين المرور بجميع الوثائق المتعلقة بالنشر والتطوير.

## مقارنة keycloak & IdentityServer4   {#comp}
في قسم مقالة KeyCloak vs IdentityServer4 ، سنقارن هذين مزودي الهوية مفتوح المصدر من خلال النظر في الميزات والخصائص الأخرى من خلال تغطية النقاط التالية.
**يقف المجتمع**: كلا هذين برامج SSO المجانية مصممة بشكل جيد في المجتمع. ومع ذلك ، لدى KeyCloak إحصائيات أفضل على GitHub بالمقارنة مع IdentityServer4. حصل KeyCloak على 9K Plus Stars و HistiteServer يقف مع 3K Plus Stars على Github. بقدر ما يتعلق الأمر بالوثائق ، يأتي كلا حلول المصادقة المجانية مع وثائق شاملة فيما يتعلق بالنشر والوثائق.
**الميزات**: أولاً ، تعتمد keycloak و IdentityServer4 على OpenID Connect و OAUTH2.0. ومع ذلك ، يستخدم KeyCloak بروتوكول قياسي آخر SAML2.0. يأتي KeyCloak مع واجهة مستخدم قابلة للتخصيص وتوفر عمليات تكامل مع LDAP و Active Directory. [IdentityServer4][1] يستخدم OIDC ، وهي طبقة مصادقة أعلى OAUTH2 لتحقيق SSO. يأتي كل من برنامج SSO المجاني مع صور Docker ويمكن للمطورين إعدادها باستخدام Docker. بالإضافة إلى ذلك ، فإن IdentityServer4 خفيفة الوزن بالمقارنة مع keycloak.
**Tech Stack**: فيما يتعلق بالتقنيات ، تتم كتابة KeyCloak بشكل أساسي في Java مع القليل من المدخلات للغات الأخرى مثل JavaScript و HTML وغيرها. ثانياً ، يتم كتابة IdentityServer4 بشكل رئيسي C# مع إدخال بعض اللغات الأخرى مثل HTML ، و SCSS.
**تمديد**: إنها واحدة من الخصائص الرئيسية لأي برنامج مفتوح المصدر وكلا من هذه البرامج SSO ودية. توفر هذه البرامج التكامل مع مكتبات الطرف الثالث. علاوة على ذلك ، تقدم KeyCloak محولات العملاء المكتوبة في Java و JavaScript.
**الأمان:** نفذت keycloak و IdentityServer4 آليات أمنية. علاوة على ذلك ، يستخدم IdentityServer4 رموز حامل لأغراض التفويض.

## الخاتمة   {#conclusion}
هذه هي نهاية مدونة KeyCloak vs IdentityServer4. مررنا ببعض الجوانب البارزة لكل من أنظمة SSO المجانية وتوضيح بعض الميزات الرئيسية. لذلك ، يمكنك استنتاج نفسك حول برنامج تسجيل الدخول المفرد المجاني. ستساعدك هذه المقالة بالتأكيد في اتخاذ القرار الصحيح للمنتج المناسب لعملك. علاوة على ذلك ، إذا كنت على دراية جيدة بحالات الاستخدام الخاصة بك ، يصبح اتخاذ القرار مهمة سهلة. علاوة على ذلك ، يمكنك دائمًا اختيار البرامج التي تتناسب بشكل جيد مع متطلباتك.
يوفر كل من برامج SSO هذه سهولة للمؤسسة مع سهولة الوصول إلى الموارد. تتأكد المؤسسات من توافر الموارد من خلال تثبيت برنامج واحد جيد تسجيل الدخول. لا تحتاج usres إلى حمل مجموعات متعددة من أوراق الاعتماد ؛ بدلاً من ذلك ، يمكنهم استخدام مجموعة واحدة من بيانات الاعتماد ، وتسجيل الدخول مرة واحدة فقط وبعد ذلك ، يمكنهم الوصول إلى مواقع ويب متعددة دون تسجيل الدخول مرة أخرى. إنه يعطي الثقة والأمان والشفافية للنظام بأكمله
أخيرًا ،  **[Containerize.com][9]**  كتبت على المزيد من المنتجات مفتوحة المصدر. يرجى البقاء على اتصال مع هذا [****][10] **[Single Sign-On][11]**  فئة للتحديثات العادية. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][12] و [LinkedIn][13] و [Twitter][14].

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * **[IdentityServer][15]**
  * **[keycloak][16]**
  * **[CAS][17]**
  * **[Authelia][18]**
  * **[WSO2][19]**
  * **[OpenIdentityPlatform][20]**
  * **[Freeipa][21]**
  * **[Top 5 Open Source Single Sign-On Software في عام 2021][22]**
  * **[كيفية الاستفادة من نظام SSO لنمو أفضل للأعمال][23]**
  * **[أتمتة العمليات التجارية باستخدام برنامج مجاني ومفتوح المصدر][24]**

  
[1]: https://products.containerize.com/single-sign-on/identity-server/
[2]: https://products.containerize.com/single-sign-on/keycloak/
[3]: #intro
[4]: #key
[5]: #comp
[6]: #Conclusion
[7]: https://github.com/IdentityServer
[8]: https://github.com/keycloak/keycloak
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/video-conferencing/
[11]: https://products.containerize.com/single-sign-on/
[12]: https://web.facebook.com/containerize
[13]: https://www.linkedin.com/company/containerize/
[14]: https://twitter.com/containerize_co
[15]: https://products.containerize.com/single-sign-on/identity-server
[16]: https://products.containerize.com/single-sign-on/keycloak
[17]: https://products.containerize.com/single-sign-on/cas
[18]: https://products.containerize.com/single-sign-on/authelia
[19]: https://products.containerize.com/single-sign-on/wso2
[20]: https://products.containerize.com/single-sign-on/openidentityplatform
[21]: https://products.containerize.com/single-sign-on/freeipa
[22]: https://blog.containerize.com/single-sign-on/top-5-open-source-single-sign-on-software-in-the-year-2021/
[23]: https://blog.containerize.com/single-sign-on/how-to-leverage-sso-solution-for-better-business-growth/
[24]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
