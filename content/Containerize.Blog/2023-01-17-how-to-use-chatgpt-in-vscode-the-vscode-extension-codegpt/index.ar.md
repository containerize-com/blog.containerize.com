---
title: "كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT" 
seoTitle: "كيفية استخدام chatgpt في vscode | رمز امتداد VSCODE GPT" 
description: "دع الذكاء الاصطناعي يكتب وتحسين رمز المصدر باستخدام Openai API. يتم تشغيل رمز امتداد VSCODE GPT بواسطة GPT-3 وهو نموذج NLP مفتوح المصدر." 
date: Tue, 17 Jan 2023 10:26:29 +0000
author: muhammadmustafa
summary: "ستقدم هذه المقالة chatgpt لـ VScode. يعتمد رمز مولد كود Openai GPT على نموذج GPT-3 الذي يعمل بالذكاء المفتوح المصدر." 
url: /ar/how-to-use-chatgpt-in-vscode-the-vscode-extension-codegpt/
categories: ['Artificial intelligence']
---

## **ستقدم هذه المقالة chatgpt لـ VScode. يعتمد رمز مولد كود Openai GPT على نموذج GPT-3 الذي يعمل بالذكاء المفتوح المصدر.**

{{< figure align=center src="images/How-to-use-ChatGPT-in-VSCode-The-VSCode-Extension-CodeGPT-1.png" alt="رمز امتداد VSCODE GPT">}}


## ملخص
أعتقد أنك مبتدئ أو مبرمج المستوى ذي الخبرة وأنت تعمل في مشروع تطوير. لذا ، ماذا لو [مدعوم من الذكاء الاصطناعي][1]**رمز امتداد VSCODE GPT**يساعدك في كتابة رمز المصدر في أي لغة برمجة؟ على سبيل المثال ، إذا طلبت منظمة العفو الدولية كتابة الرمز لعنصر إدخال HTML وإرجاع AI "". مدهش؟
نعم ، إنه ليس مذهلاً فحسب ، بل إن الشيء المثير للتفكير هو أن تنشئ الرمز المصدري لبرنامجنا. حسنًا ، سوف يعرض منشور المدونة هذا [Openai][2]**مولد الرمز**المسماة [Code GPT][3] ، والذي يتم تشغيله بواسطة [مفتوح المصدر][4]**GPT-3**. سنذهب من خلال التثبيت ، وإعداد عمليات رمز امتداد VSCODE هذا GPT. بالإضافة إلى ذلك ، سوف نستكشف أيضًا ما يقدمه للمطورين والمجتمع. ومع ذلك ، إذا كنت قد تخطيت منشور المدونة الأخير على**[chatgpt][5]**، فعليك زيارة هذا [الرابط][6] للحصول على نظرة عامة مفصلة عن هذا**AI chatbot.**
سوف نغطي النقاط التالية:
* [**ما هو الكود GPT؟**][7]
* [**كيفية تثبيت رمز امتداد VSCODE GPT؟**][8]
* [**استرداد مفتاح Openai API وتكوين رمز GPT**][9]
* [**ابدأ باستخدام رمز GPT-مولد رمز Openai الذي يعمل بنظام AI**][10]

## ما هو الكود GPT؟   {#what-is-codegpt}
[Code GPT][3] هو امتداد**Visual Studio Code**يتيح لك إنشاء قصاصات رمز من نص عادي داخل المحرر. يعتمد هذا**Openai Code Generator**على API Openai لمعالجة وتوليد استجابات اللغة الطبيعية. ومع ذلك ، تم تصميم Code GPT على رأس GPT-3 وهو نموذج تم تدريبه مسبقًا ، لذلك تتم معالجة كل طلب من CODE GPT بواسطة GPT-3 وهذا النموذج ذكي بما يكفي لتبني حالات متعددة. بالإضافة إلى ذلك ، يتيح لك هذا التمديد**VSCODE**الانكسار ويحسن قصاصات الرمز مع توليد الكود. في الواقع ، تمنحك البيئة بأكملها الشعور الدقيق بأنك تستخدم [chatgpt][11] في محرر رمز Visual Studio.

## كيفية تثبيت رمز امتداد VSCODE GPT؟   {#fool-install-the-vscode-extension-codegpt}
في هذا القسم ، سوف نمر بخطوات تثبيت**VSCODE تمديد رمز GPT.**لهذا الغرض ، تأكد من تثبيت رمز Visual Studio على جهازك. يمكنك تثبيت هذا الامتداد من**[vscode marketplace][12]**بسهولة.
افتح محرر VSCode ، انتقل إلى "extensions" واكتب رمز GPT في شريط البحث. سيكون هناك العديد من الامتدادات مع الاسم codegpt ولكن عليك تثبيت الامتداد كما هو موضح في الصورة أدناه:

{{< figure align=center src="images/codegpt-installation-1024x640.png" alt="رمز GPT تثبيت">}}

يرجى تحديث VSCode إلى أحدث إصدار في حالة حصولك على خطأ التوافق. علاوة على ذلك ، فإن امتداد VSCODE هذا تحت تطور ثابت ، لذا لا يمكن حذف فرصة السلوك غير الطبيعي.

## استرداد مفتاح Openai API وتكوين رمز GPT   {#Retrieve-Openai-APi-Key-Configure-Codegpt-}
بمجرد الانتهاء من التثبيت ، فإن الخطوة التالية هي الحصول على مفتاح API من Openai [موقع][13]. تحتاج إلى مفتاح API لتمكين ميزات امتداد**رمز GPT**. للحصول على واجهة برمجة التطبيقات ، تفضل بزيارة هذا [الرابط][13] ، وإنشاء حساب إذا لم يتم إنشاؤه بالفعل.

{{< figure align=center src="images/openai-key-1024x630.png" alt="Oepnai API">}}

في الصورة أعلاه ، يمكنك رؤية زر "إنشاء مفتاح سري جديد". انقر فوق هذا الزر وسوف تحصل على المفتاح ، لا تبقيه في مكان آمن. الآن ، الخطوة الأخيرة هي وضع هذا المفتاح السري في إعدادات**VSCode Extension Code GPT.**لتحقيق ذلك ، أداء الخطوات التالية:
  * اضغط على "Command+Shift+P"
  * اكتب رمز GPT وحدد "CodeGPT: SET API Key"
  * أخيرًا ، أدخل المفتاح واضغط على "أدخل" كما هو موضح في الصورة أدناه:

{{< figure align=center src="images/openai-API-1024x606.png" alt="chatgpt ل vscode">}}

بمجرد الانتهاء من كل شيء بنجاح ، سينتهي بك الأمر إلى وجود**Code GPT Extension**مثبت في رمز Visual Studio الخاص بك. في القسم التالي ، سنعمق أكثر لاستكشاف الميزات التي يقدمها امتداد VSCODE هذا.

## ابدأ باستخدام رمز GPT-مولد رمز Openai الذي يعمل بنظام AI   {#start-using-codegpt ---
حتى الآن ، قمنا بإعداد امتداد Code GPT في Visual Studio Code. للاستفادة من رمز امتداد VSCODE**GPT**، اضغط على "command+shift+p" حدد "اسأل codegpt" واكتب سؤالك في حقل الإدخال مثل "كتابة رمز لعنصر الإدخال في HTML" وستحصل على الاستجابة في الشريط الجانبي كما هو موضح في الصورة أدناه:

{{< figure align=center src="images/chatgpt-for-vscode-1024x522.png" alt="chatgpt ل vscode">}}

بالإضافة إلى ذلك ، يمكنك تحديد قطعة من التعليمات البرمجية واطلب CodeGPT لشرح قطعة التعليمات البرمجية المحددة. على سبيل المثال ، لقد حددنا مقتطف الكود ، وسألنا تمديد VSCODE "شرح مقتطف الرمز" ويظهر الاستجابة في اللوحة الجانبية كما هو موضح في الصورة أدناه.

{{< figure align=center src="images/VSCode-Extension-Code-GPT-1024x398.png" alt="مولد رمز Openapi ،">}}

في الأساس ، يتم إنشاء هذا الاستجابة وإعادتها بواسطة نموذج GPT-3 مفتوح المصدر**. وبالمثل ، فقد رأيت مدى روعة امتداد VSCode هذا وهو أشبه بالدردشة لـ VSCode.

## تغليف
في الختام ، قمنا بإثراء محرر رمز Visual Studio مع مولد رمز Openai الذي يعمل به AI. علاوة على ذلك ، قد تطلب**رمز امتداد VSCODE GPT**لشرح جزء محدد من رمز المصدر. قبل كل شيء ، يمكنك العثور على مشكلات مرتبطة بمقتطف رمز محدد يمكن أن يجلب تحسينًا يقترحه امتداد VSCODE هذا. أخيرًا ، هناك بعض المقالات ذات الصلة للغاية المدرجة في قسم "انظر أيضًا".
أخيرًا ، [Containerize.com][4] يكتب باستمرار منشورات المدونة على منتجات ومواضيع أخرى مفتوحة المصدر. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][14] و [LinkedIn][15] و [Twitter][16].

## طرح سؤال
يمكنك إخبارنا بأسئلتك أو استفساراتك في [المنتدى][17].

## الأسئلة الشائعة
* * ما هو الكود GPT المستخدم ل؟**
[الكود GPT][3] هو توليد رمز مصطنع قائم على الذكاء وتمديد التحسين. تم تصميم هذا على رأس GPT-3 مفتوح المصدر مدعوم من Openai. لمزيد من التفاصيل ، تفضل بزيارة هذا الرابط.
* * كيفية دمج الكود GPT مع VSCODE؟**
يرجى زيارة هذا [الرابط][9] لتثبيت امتداد VSCODE الذي يعمل بنيوكي الذكاء الاصطناعى.

## أنظر أيضا
  * [ما هو Openai chatbot GPT-3 | chatgpt ثورة منظمة العفو الدولية][6]
  * [أتمتة العمليات التجارية باستخدام برنامج مجاني ومفتوح المصدر][18]

  
[1]: https://blog.containerize.com/category/artificial-intelligence/
[2]: https://openai.com/
[3]: https://marketplace.visualstudio.com/items?itemName=timkmecl.codegpt3
[4]: https://www.containerize.com/
[5]: https://en.wikipedia.org/wiki/GPT-3
[6]: https://blog.containerize.com/artificial-intelligence/what-is-openai-chatbot-gpt-3-chatgpt-an-ai-revolution/
[7]: #What-is-CodeGPT
[8]: #How-to-install-the-VSCode-extension-CodeGPT
[9]: #Retrieve-OpenAI-API-Key-configure-CodeGPT-
[10]: #Start-using-CodeGPT---an-AI-Powered-OpenAI-Code-Generator
[11]: https://openai.com/blog/chatgpt/
[12]: https://marketplace.visualstudio.com/vscode
[13]: https://beta.openai.com/account/api-keys
[14]: https://web.facebook.com/containerize
[15]: https://www.linkedin.com/company/containerize/
[16]: https://twitter.com/containerize_co
[17]: https://forum.containerize.com/
[18]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
