---
title: "نحوه تنظیم سرور نامه با استفاده از پستی در اوبونتو" 
seoTitle: "نحوه تنظیم سرور نامه با استفاده از پستی در اوبونتو" 
description: "ارسال ایمیل از برنامه های وب خود با سرور Mail Source Open. پستی شما را قادر می سازد با استفاده از SMTP & HTTP API ایمیل ارسال کنید و ترافیک ایمیل را نیز کنترل کنید." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "ارسال و دریافت ایمیل با یک سرور پست الکترونیکی منبع باز. این مقاله به شما در نصب و پیکربندی سرور پست الکترونیکی برای شرکت شما کمک می کند." 
url: /fa/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## ارسال و دریافت ایمیل با سرور پست الکترونیکی منبع باز. این مقاله به شما در نصب و پیکربندی سرور پست الکترونیکی برای شرکت شما کمک می کند.

{{< figure align=center src="images/postal-banner.png" alt="سرور پست الکترونیکی منبع باز">}}

ارسال ایمیل در انواع مختلف رویدادها برای برنامه های مدرن ضروری است. هر مشاغل برای ایمیل های خروجی به یک سرور قابل اعتماد ** ****  نیاز دارد. علاوه بر این ، شرکت ها برای ارسال ایمیل های فله برای کمپین های بازاریابی ، خبرنامه ها و بسیاری از کارهای دیگر به سرور پستی نیاز دارند. چندین سرور پست منبع باز  **برای این کار وجود دارد. با این حال ، ما در این پست با جزئیات**   سرور پستی** در مورد جزئیات بحث خواهیم کرد و مباحث زیر را پوشش خواهیم داد.
  * [سرور پستی پستی چیست؟][1]
  * [ویژگی های پستی][2]
  * [نصب پستی][3]
  * [نتیجه گیری][4]

## سرور پستی پستی چیست؟   {#postal}
[**پستی **][5] یک سرور پست الکترونیکی رایگان و  **است. این یک سرور پست الکترونیکی کامل برای وب سایت ها و برنامه های وب است. سرور پستی پستی جایگزینی برای سرور محبوب **  Mail  **مانند SendGrid و MailGun است. **  پستی  **یک پلت فرم تحویل ایمیل منبع باز ، ایمن و مقیاس پذیر است. تمام کد منبع و مستندات در [**  github **][6] موجود است. می توانید آن را بارگیری کنید ، آن را روی سرور خصوصی خود نصب کنید و کنترل کامل آن را حفظ کنید. شما همچنین می توانید آن را مطابق نیازهای تجاری بهبود و تقویت کنید. علاوه بر این ، ** سرور پستی پستی**  از چندین سازمان پشتیبانی می کند.
کاربران می توانند نمودارها و آماری را نشان دهند که حجم نامه های ورودی و خروجی را نشان می دهد. علاوه بر این ، می توانید به صف پیام کامل و ورودی دسترسی داشته باشید. سرور پستی پستی عملکردی را برای وب سایت ها فراهم می کند. شما می توانید برای دریافت اطلاعات زنده در مورد اطلاعات تحویل در زمان واقعی ، WebHooks را تنظیم کنید. همچنین حفظ پیام را ارائه می دهد که به شما امکان می دهد همه پیام های ارسال و دریافت شده را ذخیره و بررسی کنید. تحویل ایمیل در تجارت بسیار مهم است تا اطمینان حاصل شود که کاربران ایمیل را دریافت می کنند. با این حال ، گاهی اوقات ایمیل به کاربر تحویل می دهد و شما باید موضوع را بررسی کنید. سرور پست الکترونیکی و خروجی **** همچنین ورود کامل و ابزاری برای انجام تحقیقات را فراهم می کند.

## ویژگی های پستی   {#features}
سرور پستی پستی ویژگی های زیادی را ارائه می دهد. با این حال ، ما در مورد ویژگی های اصلی زیر در این مقاله بحث خواهیم کرد.
**ارسال ایمیل**: سرور پست الکترونیکی دو تکنیک برای ایمیل های خروجی از جمله HTTP API و SMTP ارائه می دهد. به راحتی می توانید از HTTP API برای ادغام با برنامه های وب استفاده کنید. همچنین می توانید از سرور SMTP برای ادغام با برنامه ها و سیستم های موجود استفاده کنید.
**ایمیل های دریافتی **: **نامه ورودی  **را می توان به نقطه پایانی HTTP ،**   سرور SMTP** و سایر آدرس های ایمیل با استفاده از سرور پست الکترونیکی ارسال کرد.
**بررسی هرزنامه و ویروس**: spamassassin و clamav می توانند با پستی ادغام شوند تا به طور خودکار پیام های ورودی و خروجی را هنگام عبور از سرورهای پستی اسکن کنند. این ویژگی به طور پیش فرض خاموش است.
**کلیک کنید و ردیابی را باز کنید**: دهانه ها و کلیک های ایمیل را می توان با پستی ردیابی کرد. پستی پیام های خروجی شما را اسکن می کند و هرگونه پیوند را با پیوند جدیدی که از طریق سرور وب پستی شما سفر می کند جایگزین می کند. هنگامی که کاربر روی پیوند کلیک می کند ، پستی عمل را ضبط می کند و فوراً آنها را به URL اصلی هدایت می کند. با این حال ، این به طور پیش فرض فعال نمی شود.
**استخر IP**: پستی به شما امکان می دهد تا از انواع آدرس های IP پیام ارسال کنید. این به شما امکان می دهد چندین آدرس IP را به سرورهای مختلف پستی اختصاص دهید یا بسته به ارسال کننده یا آدرس گیرنده از IP های مختلف ارسال کنید.

## نصب پستی   {#نصب}
برای نصب نرم افزار پستی  **سرور پستی**  در Ubuntu 18.04 ، راهنمای مرحله به مرحله زیر را دنبال کنید.
  * ابتدا باید سرور خود را در VIS SSH متصل کنید. دستور زیر را برای به روزرسانی سیستم با آخرین بسته های موجود اجرا کنید.
```
sudo apt-get update
```

## # سرور پایگاه داده MARIADB را نصب کنید
  * دستور نصب MariaDB را اجرا کنید.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * پس از انجام کار با نصب. اکنون ، باید با اجرای دستور زیر آن را تأمین کنید.
```
mysql_secure_installation
```
  * در مرحله بعد ، همانطور که در زیر آمده است ، چند سؤال از شما می پرسد. شما باید به تمام سوالات پاسخ دهید.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * با دستور زیر به سرور Mariadb وصل شوید.
```
mysql -u root -p
```
  * یک پایگاه داده برای پستی ایجاد کنید.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * در مرحله بعد ، یک کاربر پایگاه داده به نام "PostalUser" با رمز عبور جدید ایجاد کنید.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * پس از آن ، به کاربر دسترسی کامل به پایگاه داده "Postaluser" اعطا کنید.
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * در مرحله بعد ، امتیازات را شستشو داده و با دستور زیر از پوسته Mariadb خارج شوید.
```
FLUSH PRIVILEGES;
EXIT;
```

## # روبی را نصب کنید
  * اول ، PPA شخص ثالث را برای نصب یاقوت اضافه کنید. دستورات زیر را اجرا کنید.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * بسته های اوبونتو را به روز کنید.
```
sudo apt update
```
  * Ruby را با اجرای دستور زیر نصب کنید.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

## # نصب RabbitMQ
  * Erlang برای نصب RabbitMQ لازم است ، بنابراین ، شما باید آن را نیز نصب کنید. کلید مخزن Erlang را با دستور زیر به اوبونتو اضافه کنید.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * در مرحله بعد ، مخزن Erlang را با دستور زیر اضافه کنید.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * دستورات زیر را برای نصب Erlang اجرا کنید.
```
sudo apt-get update
sudo apt-get install erlang
```
  * پس از اتمام نصب Erlang ، می توانید به نصب RabbitMQ ادامه دهید. مخزن RabbitMQ را به اوبونتو اضافه کنید.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * کلید RabbitMQ GPG را با دستور زیر اضافه کنید.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * برای نصب بسته RabbitMQ ، دستورات زیر را اجرا کنید.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * برای فعال کردن RabbitMQ در زیر فرمان اجرا کنید ، بنابراین همیشه وقتی سیستم بوت می شود شروع می شود.
```
sudo systemctl enable rabbitmq-server
```
  * در مرحله بعد ، شما نیاز به ایجاد RabbitMQ Vhost و کاربر برای پستی دارید. دستور زیر را به آن اجرا کنید.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

## # nodejs را نصب کنید
  * مخزن Nodejs را با دستور زیر اضافه کنید.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * بعد ، دستور زیر را برای نصب NodeJS اجرا کنید.
```
sudo apt-get install nodejs
```

## # سرور پست الکترونیکی را نصب کنید
  * ابتدا باید یک کاربر برای سرور پستی پستی ایجاد کنید. آن را با دستور زیر ایجاد کنید.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * در مرحله بعد ، به روبی اجازه دهید تا در پورت های وب گوش کند.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * تمام سنگهای مورد نیاز را با دستورات زیر نصب کنید.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * یک ساختار دایرکتوری برای پستی ایجاد کنید.
```
sudo mkdir -p /opt/postal/app
```
  * بعد ، آخرین نسخه پستی را بارگیری کنید.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * فایل بارگیری شده را با دستور زیر استخراج کنید.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * بعد ، مالکیت فهرست پستی را تغییر دهید.
```
sudo chown -R postal:postal /opt/postal
```
  * با اجرای دستور زیر ، یک Symlink برای دودویی پستی ایجاد کنید.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * تمام وابستگی های مورد نیاز را نصب کنید.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * دستور زیر را برای تنظیم تنظیمات پستی اجرا کنید.
```
sudo postal initialize-config
```
  * در مرحله بعد ، دستور زیر را برای باز کردن پرونده پیکربندی پستی اجرا کنید.
```
sudo nano /opt/postal/config/postal.yml
```
  * تغییرات نشان داده شده را به صورت جسورانه انجام داده و پرونده را ذخیره کنید.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * دستور را برای اولیه سازی پایگاه داده اجرا کنید.
```
sudo postal initialize
```
  * یک کاربر سرپرست برای پستی ایجاد کنید.
```
sudo postal make-user
```
  * در مرحله بعد ، شما باید جزئیات حساب کاربری را به صورت زیر ارائه دهید.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   :*********

User has been created with e-mail address admin@example.com
```
  * در آخر ، دستور زیر را برای شروع و بررسی وضعیت برنامه پستی اجرا کنید.
```
sudo -u postal postal start
sudo -u postal postal status
```

## # نصب nginx
  * دستور زیر را برای نصب سرور وب NGINX اجرا کنید.
```
sudo apt install nginx
```
  * در مرحله بعد ، پیکربندی nginx پستی را کپی کنید تا از آن به عنوان میزبان مجازی استفاده کنید.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * یک گواهی SSL خود امضا شده ایجاد کنید.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * پس از آن ، شما باید به سوالات پاسخ دهید.
  * پرونده میزبان مجازی پیش فرض NGINX را باز کنید.
  * مقدار server_name را تغییر داده و پرونده را ذخیره کنید.
  * سرانجام ، با اجرای دستور زیر ، سرور وب Nginx را مجدداً راه اندازی کنید.
```
sudo systemctl restart nginx
```
  * سرانجام ، مرورگر خود را باز کنید و URL https://postal.example.com را تایپ کنید. شما به صفحه ورود هدایت خواهید شد.

## نتیجه گیری   {#conclusion}
ما در عمق بسیار خوبی به معرفی و ویژگی های اصلی سرور پست الکترونیکی رفته ایم. ما همچنین دستورالعمل های گام به گام را برای تنظیم این عامل انتقال نامه **** درج کرده ایم. علاوه بر این ، ما بینشی در مورد تنظیمات ارائه داده ایم. تنظیم سرور پستی پستی یک فرآیند ساده است. امیدوارم که این مقاله در تنظیم و پیکربندی سرور پستی پستی برای تجارت شما مفید باشد.
سرانجام ، [**Containerize.com **][7] در یک فرآیند مداوم نوشتن پست های وبلاگ در آخرین محصولات منبع باز است. بنابراین ، برای آخرین به روزرسانی ها با این [**  ایمیل معامله ای**][8] در تماس باشید.

## کاوش کنید
ممکن است پیوندهای زیر مربوطه را پیدا کنید:
  *[ **نرم افزار ایمیل معامله ای برتر** ][9]
  *[ **Potal - سرور پست الکترونیکی منبع باز** ][5]
  *[ **5 بهترین نرم افزار سرور پست الکترونیکی منبع باز برای مشاغل در سال 2020** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
