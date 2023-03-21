---
title: "GITLAB النشر المستمر | كيف تعمل؟" 
seoTitle: "GITLAB النشر المستمر | كيف تعمل؟" 
description: "في هذا البرنامج التعليمي ، سنقوم ببناء خط أنابيب للنشر المستمر مع Gitlab. يساعد النشر المستمر Gitlab DevOps على تنفيذ النشر الآلي." 
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: "يقوم النشر الآلي بتبسيط سير العمل الخاص بك & amp ؛ العمليات. يساعدك هذا البرنامج التعليمي GITLAB على تعلم إعداد خط أنابيب للنشر المستمر باستخدام GITLAB CI/CD." 
url: /ar/gitlab-continuous-deployment-how-it-works/
categories: ['Version Control Software']
---

## النشر التلقائي يبسط سير العمل والعمليات. يساعدك هذا البرنامج التعليمي GITLAB على تعلم إعداد خط أنابيب للنشر المستمر باستخدام GITLAB CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="GITLAB النشر المستمر">}}


## ملخص
في المقالات القليلة الماضية ، تعلمنا عن [أساسيات التحكم في الإصدار][1] ثم قمنا بتحسين معرفتنا من خلال التعرف على مختلف النماذج [2] وسير العمل. جلب نظام التحكم في الإصدار الكفاءة في عالم التنمية والنشر والتكامل. يجد المطورون أنه من السهل جدًا ارتكاب رمز المصدر دون القلق بشأن التصميم والاختبارات. اكتسبت صناعة البرمجيات ثقة وميحة تنافسية لأن هذا النهج قد رفع عمليات النشر.
**GITLAB النشر المستمر ** والتكامل يساعد في العثور على القضايا بسهولة. علاوة على ذلك ، يمكن للمطورين تتبع الأخطاء وغيرها من ملكة جمال التعامل في فترة زمنية أقصر. تعطي عملية الأتمتة بأكملها الحرية من المهام التي تحدث بشكل متكرر وتقلل من القوى العاملة وفرص الأخطاء. اليوم في منشور المدونة هذا ، سنستكشف حول خط أنابيب النشر المستمر مع Gitlab CI/CD. لذلك ، دعنا نبدأ بتغطية النقاط التالية!
  * **[ما هو CI & CD][3]**
  * **[ما هو Gitlab Runner][4]**
  * **[. gitlab-ci.yml file][5]**
  * **[إنشاء تطبيق نموذج أساسي][6]**
  * **[الخلاصة][7]**

## ما هو ci & cd   {#cicd}
يعد التكامل المستمر (CI) أحد أفضل ممارسات DevOps لأتمتة تكامل تغييرات التعليمات البرمجية من العديد من المساهمين إلى مشروع برنامج واحد. يتيح ذلك للمطورين دمج تغييرات رمز في كثير من الأحيان إلى مستودع مركزي حيث يتم إجراء عمليات الإنشاء والاختبارات. ينتقل النشر المستمر (CD) خطوة واحدة إلى الأمام عن طريق نشر التعليمات البرمجية تلقائيًا على البيئة المستهدفة (الإنتاج أو التدريج) بعد ارتكاب كل رمز ويبنيه.
قبل البدء ، تأكد من أن لديك مشروعًا في GitLab ترغب في استخدام CI/CD ل. ويجب أن يكون لديك وصول للمشرف أو المالك إلى المشروع.

## ما هو Gitlab Runner   {#Runner}
بعد فهم **النشر المستمر Gitlab**  ، يعد Gitlab Runner برنامجًا صغيرًا خفيف الوزن مكتوب في GO يعمل على تشغيل الوظائف المستمرة (CI) على جهازك المحلي ويرسل النتائج إلى GitLab للنظر في التغييرات. إنه ثنائي واحد قابل للتنفيذ يمكن تثبيته على أي نظام تشغيل رئيسي.
قبل المضي قدمًا مع Gitlab CI / CD ، تحتاج إلى التأكد من أن لديك المتسابقين متاحين لتشغيل مهامك. يمكنك متابعة الدليل الرسمي لـ [تثبيت][8] و [التسجيل][9] Gitlab Runner.

## .gitlab-ci.yml file   {#yml}
**.*. gitlab-ci.yml ** هو ملف حيث تقوم بتكوين تعليمات محددة لـ Gitlab CI/CD. يتم وضعه في جذر مستودعك ويحتوي على تعريفات لكيفية بناء مشروعك. في كل مرة نضغط فيها على مثيل GITLAB الخاص بنا ، فإن Gitlab سوف تستدعي عداءًا لإنشاء المشروع واختباره حسب تعليمات داخل هذا الملف.

## إنشاء نموذج تطبيق   {#Sample}
في قسم البرنامج التعليمي **GITLAB**  ، سنقوم بإنشاء تطبيق نموذج. على افتراض أنك قمت بإنشاء مستودع gitlab بالفعل ، دعنا ننشئ تطبيقًا عينة وسنقوم بإعداد عملية CI / CD للتطبيق.
بادئ ذي بدء ، قم بإنشاء ملف package.json بجذر مشروعك
```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```
الآن قم بإنشاء app.js بجذر مشروعك
```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```
في الخطوة الأخيرة من **GITLAB النشر المستمر ،  **قم بإنشاء **  Dockerfile**  وأضف المحتويات التالية:
```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```
يحتوي Dockerfile على عملية الإنشاء لهذا التطبيق. يتضمن إنشاء حاوية عقدة وتثبيت التبعيات.
الآن نحتاج إلى إنشاء ملف **. gitlab-ci.yml **. سيحتوي هذا الملف على الإرشادات اللازمة لإنشاء مشروعنا. في كل مرة نضغط فيها على مستودع GitLab الخاص بنا ، فإن Gitlab سوف تستدعي عداءًا لبناء المشروع.
```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```
لدينا بناء مرحلة واحدة فقط ولديه تثبيت **npm**  كنص نصي. هذا أمر سيتعين عليك تشغيله يدويًا في كل مرة يأتي فيها التغيير إلى مشروعك. وهذا هو المكان الذي يأتي فيه عداء Gitlab وسيقوم بذلك من أجلك تلقائيًا في كل مرة تقوم فيها بالالتزام.
الآن على افتراض أنك قمت بالفعل بتثبيت عداء Gitlab وقمت أيضًا بتسجيله مع مثيل GitLab الخاص بك ، يمكننا اختبار Gitlab CI / CD في العمل من خلال التزام بسيط بالتطبيق ودفعه إلى Gitlab.
يمكنك بعد ذلك فتح مشروعك في Gitlab ، والانتقال إلى خط الأنابيب الخاص بـ My-Project → وسترى علامة تقول "تم تمريرها" بجوار الالتزام الذي قمت به. سيكون لها ارتباطات لاحقة أيضا علامات.

## الخاتمة   {#conclusion}
هذا يقودنا إلى نهاية هذا البرنامج التعليمي **gitlab **. في هذه المقالة ، تعلمنا عن أساسيات التكامل المستمر gitlab ،  **ما هو CI & CD **  ،  **ما هو Gitlab Runner **  ، والنشر المستمر. علاوة على ذلك ، درسنا ما هو استخدام المتسابقين في سير عمل CI / CD الكلي. أنشأنا أيضًا مشروعًا عينة يشرح كيفية إعداد النشر المستمر باستخدام GitLab. سيساعدك هذا البرنامج التعليمي GITLAB حقًا إذا كنت تبحث عن  **GITLAB CONFILEMNUSE ** . ومع ذلك ، هناك العديد من الموارد الأخرى المذكورة في قسم "استكشاف" أدناه والتي يمكنك التحقق منها. بالإضافة إلى ذلك ، فإن المقالات تدور حول  **أنظمة التحكم في الإصدار**   التي هي مفتوحة المصدر ومستضافة ذاتيًا وقابلة للتمديد.
أخيرًا ، [Containerize.com][10] يكتب باستمرار منشورات المدونة على منتجات ومواضيع مفتوحة المصدر. لذلك ، يرجى البقاء على اتصال مع [][11][برنامج التحكم في الإصدار][12] فئة للتحديثات العادية. علاوة على ذلك ، يمكنك متابعتنا على حسابات وسائل التواصل الاجتماعي لدينا [Facebook][13] و [LinkedIn][14] و [Twitter][15].

## يستكشف
قد تجد الروابط التالية ذات الصلة:
  * [أتمتة سير عمل تطوير البرمجيات مع إجراءات github][16]
  * [فهم وتعلم الفروع وسحب الطلبات في GIT][2]
  * [برنامج إدارة الكود المصدر | ما هو git؟][17]
  * [أفضل 5 أنظمة التحكم في الإصدار المفتوح المصدر في عام 2021][18]
  * [أتمتة العمليات التجارية باستخدام برنامج مجاني ومفتوح المصدر][19]

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: #cicd
[4]: #runner
[5]: #yml
[6]: #status
[7]: #conclusion
[8]: https://docs.gitlab.com/runner/install/
[9]: https://docs.gitlab.com/runner/register/
[10]: https://www.containerize.com/
[11]: https://products.containerize.com/discussion-forum/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
