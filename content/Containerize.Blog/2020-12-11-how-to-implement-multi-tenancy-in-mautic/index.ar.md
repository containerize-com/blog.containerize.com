---
title: "كيفية تنفيذ متعددة في Mautic" 
seoTitle: "كيفية تنفيذ متعددة في Mautic" 
description: "Mautic هو حل أتمتة التسويق مفتوح المصدر. إن تنفيذ التدريب المتعدد في Mautic يقلل من التكاليف ، ويحسن الكفاءة والأمن." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "وفر التكاليف وزيادة استخدام الموارد من خلال تنفيذ مستأجورة متعددة في Mautic. يساعد المستأجر المتعدد في تخصيصات التعليمات البرمجية ، وتحديثات التطبيق ، وتحسين الإنتاجية وسهولة الصيانة." 
url: /ar/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## توفير التكاليف وزيادة استخدام الموارد من خلال تنفيذ مستأجر متعدد في Mautic. يساعد المستأجر المتعدد في تخصيصات التعليمات البرمجية ، وتحديثات التطبيق ، وتحسين الإنتاجية وسهولة الصيانة.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="كيفية تنفيذ متعددة في Mautic">}}

Mautic هو حل أتمتة التسويق المجاني والمفتوح المصدر يمنحك تحكمًا كاملاً في رسائل البريد الإلكتروني التسويقية الخاصة بك ، صفحات المقصودة ، سير العمل ، ومقاييس أنشطتك التسويقية. سنغطي الأقسام التالية في هذا البرنامج التعليمي:
  * [ما هو متعدد المستأجرين][1]
  * [ما هو mautic][2]
  * [تنفيذ متعدد المستأجرين في Mautic][3]
  * [الخلاصة][4]

## ما هو متعدد المستشاري   {#multi-enancy}
في بنية البرامج متعددة المستأجرين ، يخدم مثيل واحد لتطبيق البرنامج العديد من المستأجرين. يتم عزل كل بيانات مستأجر عن مشاركة المستأجر الأخرى في نفس مثيل التطبيق. هؤلاء المستأجرين معزولون منطقيا ، ولكن متكامل جسديا. هذا يضمن أمن البيانات والخصوصية لجميع المستأجرين. يتطلب إنشاء مستأجرين متعددين من مثيل تطبيق واحد ذاكرة أقل بكثير. يشارك المستأجرون الموارد وخفض تكاليف صيانة البرامج والبنية التحتية وعمليات مركز البيانات. التكاليف تميل إلى أن تكون أقل من تلك الموجودة في بنية تحتية مستأجرة.

## ما هو mautic   {#Mautic}
[Mautic][5] هو برنامج تسويق مجاني ومفتوح المصدر. أتمتة مهام التسويق المتكررة مثل حملات التسويق ، وتوليد الرصاص ، وتجزئة الاتصال ، وما إلى ذلك باستخدام Mautic. إنه يحتوي على ميزات مذهلة بما في ذلك توليد الرصاص ، وبناء الحملات ، وتجزئة الاتصال ، وباني البريد الإلكتروني ، واختبار A/B ، وباني الصفحة ، ورعاية الرصاص والمزيد. يدعم Mautic أيضًا التكامل مع جميع المنصات الاجتماعية الشهيرة على سبيل المثال Facebook ، Twitter ، LinkedIn. كل هذه الميزات المذهلة تساعدك على زيادة تجربة العملاء بشكل عام وتحسين أتمتة التسويق لعملك.

## تنفيذ Multi-Tenancy في Mautic   {#Implement}
  * قم بإنشاء قاعدة بيانات فارغة جديدة باسم "main_db".
  * ثم قم بإنشاء جدول يسمى "المستأجر" والذي سيحمل تفاصيل حول جميع المستأجرين.
  * سيكون لها 3 حقول بما في ذلك الموقع \ _name و url و db \ _name كما هو موضح في الشكل

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="كيفية تنفيذ متعددة في Mautic">}}

  * بعد ذلك ، فتح ملف mautic/app/paths.php وأضف هذا الرمز:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * سيحدد هذا ملف التكوين المقابل على أساس مسار URL.
  * ثم انسخ قاعدة بيانات التثبيت الحالي mautic واستخدمها للمستأجر الجديد.
  * بعد ذلك ، قم بإنشاء نسخة من mautic/app/config/local.php وقم بإعادة تسميتها إلى [site_name] .php.
  * أخيرًا قم بتحديث اسم قاعدة البيانات والمضيف وكلمة المرور والمستخدم وفقًا لقاعدة البيانات الجديدة.

## الخاتمة   {#conclusion}
Mautic هو حل أتمتة التسويق المجاني ، الغني بالمنحى ، والموجهة نحو الجودة. يسمح لك بإنشاء حملات تسويقية وأجزاء ونماذج وتقارير وأكثر من ذلك بكثير. إن تنفيذ المستأجر المتعدد في Mautic يقلل من التكاليف ، ويحسن الكفاءة وقابلية التوسع والأمان. قم بسهولة بإنشاء مئات المستأجرين من تثبيت واحد فقط.

## يستكشف
لمعرفة المزيد عن Mautic و Facebook ، يرجى زيارة:
  * [Mautic | منصة تكنولوجيا تسويق المحتوى مفتوحة المصدر][5]
  * [كيفية إعداد حملات mautic باستخدام منشئ الحملة][6]
  * [تكامل Drupal Mautic لأتمتة رعاية الرصاص][7]
  * [أتمتة التسويق مع تكامل Mautic و WooCommerce][8]
  * [دمج Mautic & Joomla لأتمتة التسويق الرقمي][9]

  
[1]: #multi-tenancy
[2]: #mautic
[3]: #implement
[4]: #conclusion
[5]: https://products.containerize.com/marketing-automation/mautic
[6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
[7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
[8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
[9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
