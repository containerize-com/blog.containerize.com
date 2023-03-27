---
title: "كل ما تحتاج لمعرفته حول المصادقة ثنائية العوامل (2FA)" 
seoTitle: "كل ما تحتاج لمعرفته حول المصادقة ثنائية العوامل (2FA)" 
description: "تشرح هذه المقالة المصادقة (2FA) بالتفصيل وكيفية تنفيذها في .NET5 باستخدام IdentityServer4 و Twilio." 
date: Fri, 12 Mar 2021 13:14:33 +0000
author: Hammad Abbasi
summary: "تشرح هذه المقالة المصادقة ثنائية العوامل بالتفصيل وكيفية تنفيذها في .NET 5 باستخدام أطر هوية مثل IdentityServer4 ومزود SMS (Twilio). & nbsp ؛" 
url: /ar/everything-you-need-to-know-about-two-factor-authentication-2fa/
categories: ['Single Sign-On']
---

## تشرح هذه المقالة المصادقة ثنائية العوامل بالتفصيل وكيفية تنفيذها في .NET 5 باستخدام أطر الهوية مثل IdentityServer4 ومزود الرسائل القصيرة (Twilio).
{{_LINE_11_}}
أنه يحتوي على الأقسام التالية:
  * [ما هي المصادقة ثنائية العوامل؟ ][1]
  * [كيف يعمل 2FA؟][2]
  * [2FA ومصادقة متعددة العوامل][3]
  * [عيوب استخدام 2FA][4]
  * [تنفيذ 2FA في .NET5][5]
أولاً ، دعونا نفهم ماهية 2FA ولماذا يجب أن يكون جزءًا لا يتجزأ من كل تطبيق ويب حديث.

## ما هي المصادقة ثنائية العوامل؟ {#2FA}

يتضمن أحد العوامل في هذا السياق طريقة يمكنك إقناع تطبيق أو خدمة بأنك مالك الحساب. يستخدم اسم المستخدم/كلمة المرور على نطاق واسع كعامل المصادقة الأكثر شيوعًا. ومع ذلك ، نظرًا للعديد من مشكلات الأمان المرتبطة به وانتهاكات البيانات الواسعة النطاق الأخيرة-أصبحت المصادقة الواحدة أقل أمانًا.
المصادقة ثنائية العوامل هي طبقة إضافية من الأمان ، والتي تلعب دورها قبل أن تتمكن من الوصول إلى حسابك. قيد الإضافة لعملية تسجيل الدخول القياسية-يقدم خطوة إضافية للتحقق من هوية المستخدم عن طريق إرسال رمز (إلى بريدك الإلكتروني أو كرسالة نصية). وبهذه الطريقة ، تم إثبات هويتك وعندها فقط يتم منح الوصول.

## كيف يعمل 2FA؟ {#2fawork}

في 2FA ، لا تزال كلمة المرور أول عامل مصادقة لك - لذلك عندما تقوم بتسجيل الدخول إلى حسابك ، فإنها ستعيد توجيهك إلى صفحة أخرى يجب عليك التحقق منها لملكية الحساب. يمكن القيام بذلك باستخدام طرق مختلفة:
  1. يرسل التطبيق رمز التحقق غالبًا ما يسمى OTP (كلمات مرور لمرة واحدة) إلى عنوان بريدك الإلكتروني.
  2. يتم تسليم الكود كرسالة نصية على هاتفك.
  3. تقوم بتثبيت تطبيق Authenticator على الهاتف المحمول والتي يمكنك من خلالها تفويض طلبات تسجيل الدخول.
ملاحظة: يتم إنشاء رموز التحقق هذه بشكل عشوائي ويتم انتهاء صلاحيتها بمجرد استخدامها. أيضًا ، فهي قصيرة العمر - لذلك هناك نافذة قصيرة قبل أن تتمكن من استخدام الرمز (هذا يمنع المتسلل من الغاشم في رموز التحقق).

## هل يمكننا استدعاء 2FA كمصادقة متعددة العوامل؟ {#MFA}

لا تقتصر طرق المصادقة على عاملين. تقوم العديد من التطبيقات والخدمات بتحريك مستخدميها إلى ما بعد 2FA واستخدام المصادقة متعددة العوامل.
غالبًا ما يتم استخدام 2FA و MFA (مصادقة متعددة العوامل) بالتبادل. و مع ذلك، هناك إختلاف. في المصادقة متعددة العوامل يتم استخدام عاملين أو أكثر.
يمكنه التحقق من عنوان IP الخاص بالمستخدم ، والموقع الجغرافي ومعلومات الجهاز قيد الإضافة لعوامل أخرى مثل كلمة المرور و OTP للتحقق من هوية المستخدم.
لذلك ، يمكننا القول أن 2FA هي مجموعة فرعية من MFA. في 2FA ، لن يكون هناك عاملان فقط في حين يمكن للعامل متعدد الاستفادة من عاملين أو أكثر. يجعل MFA من الصعب على المتسللين لأنه يضيف طبقات متعددة من الأمان في عملية المصادقة التقليدية.

## هل هناك أي عيوب باستخدام 2FA؟ {#mfa-cons}

على غرار العديد من حلول "الأمن والخصوصية" الموجودة في التطبيقات الحديثة. كما أنه يأتي بسعر - إزعاج ، حيث توجد خطوة إضافية قد تسبب الاحتكاك في تجربة المستخدم.
ومع ذلك ، يتم تبنيها من قبل العديد من التطبيقات والخدمات بحيث أصبحت هذه المفاضلة مقبولة.

## كيف يمكنني تنفيذ مصادقة 2FA؟ {#implementing2fa}

في هذا القسم ، سوف نتعلم كيفية تنفيذ 2FA في .NET5 باستخدام IdentityServer4 و Twilio.
لذلك دعونا ننشئ حسابًا تجريبيًا على Twilio:
  1. الاشتراك على
  2. تحقق من حسابك من خلال توفير رقم هاتف صالح.
بمجرد التحقق من حسابك ، يمكنك بعد ذلك استخدام لوحة معلومات وحدة التحكم الخاصة بهم.

{{< figure align=center src="images/Twilio-dashboard-console-1024x561.png" alt="Twilio Dashboard">}}

  1. انسخ حسابك SID و Auth Token من لوحة القيادة.
  1. انتقل إلى شراء رقم ستستخدمه لإرسال الرسائل القصيرة/
ملاحظة: يعطي Twilio رصيدًا 15 دولارًا في جميع الحسابات التجريبية التي ستستخدمها لشراء رقم الهاتف.

{{< figure align=center src="images/Twilio-phone-number-search-1024x513.png" alt="Twilio - بحث رقم الهاتف">}}

يمكنك اختيار أي رقم طالما أنه يدعم "إمكانيات الرسائل القصيرة". (لاحظ رقم هاتفك الذي سنستخدمه لتكوينه لاحقًا في مشروعنا).
5. باستخدام حساب تجريبي ، يسمح لك Twilio فقط بإرسال الرسائل القصيرة إلى معرفات المتصل التي يمكنك إدارتها باستخدام الرابط أدناه:
هذا كل ما تحتاجه لتكوينه باستخدام Twilio Dashboard.
دعنا نقوم بإنشاء تطبيق ويب ASP.NET Core (حدد قالب المشروع على النحو التالي والهدف .NET5.

{{< figure align=center src="images/2021-03-10-16_32_20-Window-1024x607.png" alt="Visual Studio - مشروع جديد">}}

سنقوم الآن بدمج IdentityServer4 ، حزم Twilio من Nuget.
  1. `تثبيت package IdentityServer4 -version 4.1.1`
  2. `تثبيت الحزمة التواف
يتوفر واجهة المستخدم السريعة Quick Quick على:
يمكنك تضمينه في مشروعك عن طريق تشغيل الأمر أدناه في Developer Shell:
`iex ((new-object system.net.webclient) .DownloadString ('https://raw.githubusercontent.com/identityserver/identityserver4.quickstart.ui/main/getmain.ps1'))` `
إذا تم تثبيته بشكل صحيح - سترى مجلد QuickStart في مشروعك:

{{< figure align=center src="images/2021-03-10-16_40_47-Window.png" alt="مشروع هرمي">}}

دعنا نبني هذا المشروع وتشغيله. يجب أن تكون قادرًا على رؤية صفحة الترحيب كما هو موضح أدناه:

{{< figure align=center src="images/2021-03-10-16_43_36-Window-1024x346.png" alt="">}}

يستخدم هذا القالب مخزن البيانات في الذاكرة ، لذا يمكنك إضافة مستخدمي الاختبار في ملف config.cs

{{< figure align=center src="images/2021-03-10-16_49_15-Window.png" alt="config.cs فئة">}}

افتح startup.cs وأضف خدمات IdentityServer4 التالية في طريقة التكوينات:
```
  services.AddIdentityServer()
        .AddInMemoryIdentityResources(Config.GetIdentityResources())
        .AddTestUsers(Config.GetUsers())
        .AddInMemoryClients(Config.GetClients())
        .AddDeveloperSigningCredential();

```
أضف الآن IdentityServer في خط أنابيب الطلب:
```
app.UseIdentityServer();
```
قم بتشغيل المشروع وانتقل إلى **_/حساب/تسجيل الدخول _** 

{{< figure align=center src="images/2021-03-10-17_48_09-Window-1024x586.png" alt="IdentityServer4 - تسجيل الدخول">}}

تسجيل الدخول مع بيانات الاعتماد كما تمت إضافته في **config.cs** 
بمجرد تكوين IdentityServer وتشغيله. يمكننا بعد ذلك إضافة دعم 2FA باستخدام Twilio.
دعنا نضيف الفصل التالي:
```
  public class TwilioSettings
    {
        public string Sid { get; set; }
        public string Token { get; set; }
        public string From { get; set; }
     }

```
سيتم استخدام فئة التكوين هذه لحقن الإعدادات باستخدام حقن التبعية.
  1. قم بالربط الأيمن على المشروع وأضف أسرار المستخدم بتكوين Twilio (SID ، Token ، Fonenumber)
  2. حقن الإعدادات في Configurservice Method of Startup.cs
```
 var twilioSettings = Configuration.GetSection("TwilioSettings");
 services.Configure<TwilioSettings>(twilioSettings);

```
تم تكوين startup.cs. يمكننا الآن الانتقال إلى إضافة خدمة جديدة تسمى AuthMessagesender والتي ستكون مسؤولة عن إرسال الرسائل القصيرة باستخدام Twilio.
دعنا ننشئ واجهة ستنفذ AuthMessagesender.
```
public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
```
سنقوم بحقن هذا في startup.cs.
```
services.AddTransient <ISmsSender, AuthMessageSender>();

```
رمز إرسال الرسائل القصيرة بسيطة جدا. نقوم ببساطة بإنشاء عميل twilio ونستدعي طريقة messageresource.createasync لإرسال الرسائل القصيرة.
```
public Task SendSmsAsync(string number, string message)
{
              var sid = _twilioSettings.Value.Sid;
            var token = _twilioSettings.Value.Token;
            var from = _twilioSettings.Value.From;
            TwilioClient.Init(sid, token);
            MessageResource.CreateAsync(new PhoneNumber(number),
                from: new PhoneNumber(from),
                body: message);
            return Task.FromResult(0);
}

```
سنقوم بتعديل طريقة تسجيل الدخول للتحقق مما إذا كان المستخدم قد قام بتمكين 2FA حتى نتمكن من إعادة توجيهها للتحقق من الكود.
أضف VerifyCode.cshtml في QuickStart/Views:

{{< figure align=center src="images/2021-03-10-15_47_52-Window-1024x497.png" alt="2FA في العمل">}}

تعديل طريقة الحساب/تسجيل الدخول لإنشاء وإرسال رمز التحقق بعد التحقق من بيانات الاعتماد. لا نريد إكمال طلب تسجيل الدخول في هذه اللحظة.
لذلك ، ستتم إزالة استدعاء طريقة httpcontext.signinasync ، وبدلاً من ذلك سنقوم ببساطة بإنشاء رمز التحقق العشوائي وتخزينه (حاليًا نستخدم المتجر داخل الذاكرة).
```
[HttpPost]

[ValidateAntiForgeryToken]
public async Task<IActionResult> Login(LoginInputModel model, string button)

```

{{< figure align=center src="images/code-1024x521.png" alt="رمز لقطة الشاشة">}}

وبعد ذلك ، سنعيد توجيه المستخدم إلى صفحة "VerifyCode" حيث سيتم تنفيذ التحقق من التعليمات البرمجية وسيتم إكمال سير عمل تسجيل الدخول.
في إجراء VerifyCode ، نقوم ببساطة بإحضار معلومات المستخدم والرمز من الذاكرة ومطابقة الرمز المقدم.

{{< figure align=center src="images/2021-03-11-09_13_15-Window-1024x647.png" alt="رمز لقطة الشاشة">}}

إذا تم مطابقة الرمز ، فنحن ببساطة نكمدون طلب المصادقة من خلال استدعاء طريقة signinasync وإعادة توجيه المستخدم إلى الصفحة المصرح بها.
دعنا ندير المشروع
الخطوة -1: يوفر المستخدم بيانات الاعتماد.

{{< figure align=center src="images/2021-03-11-09_23_50-Window-1024x613.png" alt="2fademo - تسجيل الدخول">}}

الخطوة الثانية: يتم التحقق من بيانات الاعتماد ويتم إرسال رمز التحقق:

{{< figure align=center src="images/ssScreenshot_2021-03-11-09-21-38-65-1-1024x394.jpg" alt="2fademo - الرسائل القصيرة">}}

الخطوة 3: يتحقق المستخدم من الرمز الصحيح.

{{< figure align=center src="images/2021-03-11-09_21_25-Window-1024x471.png" alt="2fademo - VerifyCode">}}

تم التحقق من رمز الخطوة 4 وتم الانتهاء من مصادقة 2FA.

{{< figure align=center src="images/2021-03-11-09_21_32-Window-1024x462.png" alt="2fademo - صفحة معتمدة">}}


### خاتمة:
في هذه المقالة ، تعلمنا عن 2FA وتنفيذها في .NET5 باستخدام IdentityServer4 و Twilio. يمكنك تنزيل رمز العينة المستخدمة في هذه المقالة من هذا [repo][6].
من المؤكد أن استخدام SMS لـ 2FA يعزز أمانك ولكنه لا يزال عرضة لـ [هجمات مبادلة SIM][7]. لذلك ، يشجع باحثو الأمن 2FA على استخدام أساليب أخرى مثل تطبيقات المصادقة ومفاتيح الأمان ([Yubikey][8]) والتي لا يمكن اعتراضها على شبكة الهاتف. سوف نتعلم المزيد عن ذلك في مقال قادم - ترقبوا!



[1]: #2FA
[2]: #2fawork
[3]: #MFA
[4]: #mfa-cons
[5]: #implementing2fa
[6]: https://github.com/csehammad/2FAUsingIdentityServer4
[7]: https://www.cnet.com/how-to/sim-swap-fraud-how-to-prevent-your-phone-number-from-being-stolen/
[8]: https://www.yubico.com/
