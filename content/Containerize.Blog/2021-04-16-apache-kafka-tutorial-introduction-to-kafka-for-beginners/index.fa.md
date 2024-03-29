---
title: "آموزش Apache Kafka -معرفی به کافکا برای مبتدیان" 
seoTitle: "آموزش Apache Kafka -معرفی به کافکا برای مبتدیان" 
description: "Apache Kafka یک پلت فرم پخش رویداد توزیع شده با منبع باز است. این آموزش یک راهنمای مبتدی برای درک زمین Apache Kafka است." 
date: Fri, 16 Apr 2021 11:14:12 +0000
author: Assad Mahmood
summary: "Apache Kafka یک پلت فرم پخش رویداد توزیع شده با منبع باز است. این آموزش از منظر یک مبتدی مقدمه ای برای کافکا به شما می دهد." 
url: /fa/message-queue-software/apache-kafka-tutorial-introduction-to-kafka-for-beginners/
categories: ['Message Queue Software']
---

## Apache Kafka یک پلت فرم پخش رویداد توزیع شده با منبع باز است. این آموزش از منظر یک مبتدی مقدمه ای برای کافکا به شما می دهد.

{{< figure align=center src="images/apache-kafka-open-source.png" alt="آموزش منبع باز Apache Kafka">}}

اخیراً مقاله ای در مورد "Kafka vs Redis Pub-Sub" نوشتیم که در مورد تفاوت های بین کافکا و Redis Pub-Sub توضیح می دهد. در آن مقاله به زودی در مورد خود کارگزار پیام کافکا توضیح دادیم. بنابراین ، اکنون این مقاله به شما بینش بیشتری در مورد پلت فرم پخش رویداد توزیع شده منبع باز Apache Kafka می دهد و تمام معرفی لازم را برای شروع کار با صف پیام توزیع شده Kafka به شما می دهد. بنابراین ، بیایید شروع کنیم.
  * [مقدمه ای برای آپاچی کافکا][1]
  * [سیستم پیام رسانی چیست؟][2]
  * [اصطلاحات اساسی][3]
  * [مراحل نصب][4]
  * [ایجاد یک موضوع][5]
  * [نوشتن پیام به موضوع][6]
  * [پیام های موضوع را بخوانید][7]
  * [نتیجه گیری][8]

## آشنایی با آپاچی کافکا {#intro}

کارگزار پیام منبع باز Apache Kafka در LinkedIn آغاز شد و بعداً به یک پروژه منبع باز Apache تبدیل شد. نرم افزار کارگزار پیام Kafka در Scala و Java توسعه یافته است. Apache Kafka Broker یک سیستم پیام رسانی به اشتراک گذاری است که به تبادل داده ها بین برنامه ها ، سرورها و پردازنده ها نیز اجازه می دهد. سریع ، مقیاس پذیر و با طراحی توزیع می شود. این امکان دارد میلیون ها داده یا پیام در ثانیه را اداره کند. این سیستم به عنوان واسطه بین سیستم منبع (تولید کننده) و سیستم هدف (مصرف کننده) کار می کند. سازمان هایی مانند Netflix ، Uber و هزاران شرکت از این قبیل از جریان واقعی Apache Kafka استفاده می کنند. در مقایسه با سایر سیستم های پیام رسانی ، نرم افزار صف پیام Kafka دارای توان بهتر ، پارتیشن بندی داخلی ، تکثیر و تحمل گسل ذاتی است. این امر باعث می شود برنامه های پردازش پیام در مقیاس بزرگ مناسب باشد.

## سیستم پیام رسانی چیست؟ {#messaging}

یک سیستم پیام رسانی یک تبادل ساده از پیام ها بین دو یا چند نفر ، دستگاه و غیره است. این مسئولیت انتقال داده ها از یک برنامه به برنامه دیگر است ، بنابراین برنامه ها می توانند روی داده ها تمرکز کنند ، اما نگران نحوه اشتراک آن نیستند.
یک نوع سیستم پیام رسانی "به سیستم پیام رسانی به نقطه" است. در این سیستم پیام ها هنگام ارسال توسط تولید کننده در یک صف ذخیره می شوند. فقط یک مصرف کننده می تواند در هر زمان معین پیام مصرف کند. و پس از مصرف پیام ، از صف حذف می شود. یکی از نمونه های این سیستم سیستم پردازش سفارش است. جایی که فقط یک فرآیند می تواند سفارش را ارائه دهد.
نوع دیگری از سیستم پیام رسانی سیستم پیام رسانی میخانه است که به یک فرستنده اجازه می دهد تا پیام و گیرنده را برای خواندن آن پیام ارسال کند. در پیام رسانی Apache Kafka ، یک فرستنده به عنوان تولید کننده شناخته می شود که پیام ها را منتشر می کند ، و یک گیرنده به عنوان یک مصرف کننده شناخته می شود که با عضویت در آن ، آن پیام را مصرف می کند. نمونه ای از این سیستم تلویزیون کابلی شما است که کانال های زیادی را منتشر می کند ، و هر کس می تواند در انتخاب کانال های خود مشترک شود و هر زمان که کانال های مشترک آنها در دسترس باشد ، آنها را بدست آورد.

## شرایط اساسی {#terms}

قبل از صحبت بیشتر در مورد بهترین صف پیام آپاچی کافکا ، باید برخی از اصطلاحات را درک کنید.
* **مباحث** : جریانی از پیام های متعلق به یک دسته خاص ، موضوع نامیده می شود.
* **پارتیشن** : مباحث ممکن است پارتیشن های زیادی داشته باشند ، بنابراین می توانند داده های دلخواه خود را کنترل کنند.
* **جبران پارتیشن** : هر پیام تقسیم شده دارای شناسه دنباله ای منحصر به فرد به نام "افست" است.
* **ماکت های پارتیشن** : ماکت ها پشتیبان یک پارتیشن هستند. از آنها برای جلوگیری از از دست دادن داده استفاده می شود.
* **کارگزاران** : مسئولیت حفظ داده های منتشر شده را بر عهده دارند.
* **خوشه Kafka** : داشتن کافکا بیش از یک کارگزار Cluster Cluster نامیده می شود.
* **تولید کنندگان** : ناشران پیام های یک یا چند موضوع هستند.
* **مصرف کنندگان** : خواننده داده های کارگزاران هستند. آنها در چندین موضوع مشترک هستند و هر زمان که پیامی در موضوع وجود داشته باشد ، مصرف می کنند.
* **رهبر** : آیا این گره مسئول همه خوانده شده ها است و برای هر پارتیشن مشخص می نویسد.
* **پیرو** : گره ای که از دستورالعمل های رهبر پیروی می کند ، پیروان نامیده می شوند.

## مراحل نصب {#steps}


### مرحله 1 - تأیید نصب جاوا
امیدوارم که قبلاً جاوا را روی دستگاه خود نصب کرده اید ، بنابراین فقط با استفاده از دستور زیر آن را تأیید کرده اید.
```
$ java -version
```
اگر جاوا با موفقیت روی دستگاه شما نصب شده است ، می توانید نسخه جاوا نصب شده را مشاهده کنید. اگر نه ، ابتدا باید جاوا را نصب کنید.

### مرحله 2 - نصب چارچوب Zookeeper
به لینک زیر مراجعه کنید و آخرین نسخه Zookeeper را بارگیری کنید.
{{_LINE_46_}}
پس از اتمام کار با نصب و پیکربندی می توانید Zookeeper را با دستور زیر شروع کنید
```
$ bin/zkServer.sh start
```
و سپس از دستور زیر برای اتصال به Zookeeper از CLI استفاده کنید
```
$ bin/zkCli.sh -server 127.0.0.1:2181
```
پس از اتصال ، باید چنین چیزی را ببینید
```
Connecting to localhost:2181
log4j:WARN No appenders could be found for logger (org.apache.zookeeper.ZooKeeper).
log4j:WARN Please initialize the log4j system properly.
Welcome to ZooKeeper!
JLine support is enabled
[zkshell: 0]
```

### مرحله 3 - نصب Apache Kafka
آخرین نسخه کارگزار بهترین پیام Kafka را بارگیری کنید و آن را از URL زیر استخراج کنید
{{_LINE_55_}}
```
$ tar -xzf kafka_2.13-2.7.0.tgz
$ cd kafka_2.13-2.7.0
```
دستورات زیر را اجرا کنید تا کلیه خدمات به ترتیب صحیح شروع کنید:
```
# Start the ZooKeeper service
# Note: Soon, ZooKeeper will no longer be required by Apache Kafka.
$ bin/zookeeper-server-start.sh config/zookeeper.properties
```
یک جلسه ترمینال دیگر را باز کنید و اجرا کنید:
```
# Start the Kafka broker service
$ bin/kafka-server-start.sh config/server.properties
```

## یک موضوع ایجاد کنید {#create}

برای نوشتن پیام ها یا رویدادهای خود در موضوعات ، ابتدا باید یک موضوع ایجاد کنید. برای ایجاد یک موضوع ترمینال خود را باز کنید و دستور زیر را اجرا کنید:
```
$ bin/kafka-topics.sh --create --topic weather-updates --bootstrap-server localhost:9092
```
اکنون ما موضوعی را با نام "Updates" ایجاد کرده ایم که در آن اطلاعات مربوط به آب و هوا را منتشر خواهیم کرد و مصرف کنندگان آن پیام ها را مصرف می کنند.
```
$ bin/kafka-topics.sh --describe --topic weather-updates --bootstrap-server localhost:9092
Topic:weather-updates  PartitionCount:1    ReplicationFactor:1 Configs:
    Topic: quickstart-events Partition: 0    Leader: 0   Replicas: 0 Isr: 0

```

## پیام را به موضوع بنویسید {#write}

مشتری تولید کننده کنسول را اجرا کنید تا چند رویداد را در موضوع خود بنویسید. به طور پیش فرض ، هر خطی که وارد می کنید منجر به یک رویداد جداگانه برای موضوع می شود.
```
$ bin/kafka-console-producer.sh --topic weather-updates --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```

## پیام های موضوع را بخوانید {#read}

یک جلسه ترمینال دیگر را باز کنید و مشتری مصرف کننده کنسول را اجرا کنید تا رویدادهایی را که اخیراً ایجاد کرده اید بخوانید:
```
$ bin/kafka-console-consumer.sh --topic weather-updates --from-beginning --bootstrap-server localhost:9092
Weather for New York is Cloudy
Weather for Houston is Rainy
```
احساس راحتی کنید که آزمایش کنید: به عنوان مثال ، برای نوشتن رویدادهای اضافی به ترمینال تولید کننده (مرحله قبلی) خود برگردید و ببینید که چگونه وقایع بلافاصله در ترمینال مصرف کننده شما ظاهر می شوند.

## نتیجه {#conclusion}

در این آموزش ما در مورد اصول استفاده از Apache Kafka آموخته ایم. ما سرویس صف kafka را نصب کردیم و سپس آن را پیکربندی کردیم. ما همچنین یاد گرفتیم که چگونه می توان موضوعاتی را در کافکا ایجاد کرد ، پیام به موضوعات و نحوه خواندن پیام ها از موضوعات ارسال کرد. امیدوارم این مقاله برای شما مفید باشد. بیایید در مقاله بعدی ملاقات کنیم.
_ پلت فرم پخش رویداد توزیع شده منبع باز از چه چیزی استفاده می کنید؟ آیا سوالی دارید؟ ، لطفا_ [در تماس باشید][9].

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  * [بهترین نرم افزار صف پیام رایگان و منبع آزاد (MQ)][10]
  * [kafka vs redis pub-sub ، تفاوت هایی که باید بدانید][11]
  * [مقدمه ای برای Redis Pub/Sub و چگونه کار می کند؟][12]



[1]: #intro
[2]: #messaging
[3]: #terms
[4]: #steps
[5]: #create
[6]: #write
[7]: #read
[8]: #conclusion
[9]: mailto:yasir.saeed@aspose.com
[10]: https://products.containerize.com/message-queue-software/
[11]: https://blog.containerize.com/database-management-software/kafka-vs-redis-pub-sub-differences-which-you-should-know/
[12]: https://blog.containerize.com/database-management-software/introduction-to-redis-pubsub-and-how-does-it-work/
