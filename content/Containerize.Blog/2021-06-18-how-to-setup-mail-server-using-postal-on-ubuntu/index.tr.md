---
title: "Ubuntu'da posta kullanarak posta sunucusunu nasıl ayarlanır" 
seoTitle: "Ubuntu'da posta kullanarak posta sunucusunu nasıl ayarlanır" 
description: "Açık kaynaklı posta sunucusuyla web uygulamalarınızdan e -posta gönderin. Posta, SMTP ve HTTP API'sini kullanarak e -posta göndermenizi ve e -posta trafiğini de izlemenizi sağlar." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Açık kaynaklı posta sunucusu ile e -posta gönderin ve alın. Bu makale, şirketiniz için Posta Posta Sunucusunu kurma ve yapılandırmanıza yardımcı olacaktır." 
url: /tr/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Açık kaynaklı bir posta sunucusuyla e -posta gönderin ve alın. Bu makale, şirketiniz için Posta Posta Sunucusunu kurma ve yapılandırmanıza yardımcı olacaktır.

{{< figure align=center src="images/postal-banner.png" alt="Açık Kaynak Posta Sunucusu">}}

Modern uygulamalar için farklı olay türlerine e -posta göndermek gereklidir. Giden e -postalar için her işletmenin güvenilir bir ** posta sunucusuna ** ihtiyacı vardır. Ayrıca, şirketler pazarlama kampanyaları, bültenler ve diğer birçok görev için toplu e -postalar göndermek için bir posta sunucusuna ihtiyaç duyar. Bunun için birkaç açık kaynak posta sunucusu ** vardır. Ancak, ** posta sunucusunu ** bu yazıda ayrıntılı olarak tartışacağız ve aşağıdaki konuları ele alacağız.
  * [Posta Posta Sunucusu nedir?][1]
  * [Posta'nın özellikleri][2]
  * [Posta kurulumu][3]
  * [Sonuç][4]

## Posta Posta Sunucusu nedir? {#Posta}
[** Posta **][5] ücretsiz ve ** açık kaynaklı bir posta sunucusu **. Web siteleri ve web uygulamaları için tam özellikli bir posta sunucusudur. Posta Posta Sunucusu, SendGrid ve MailGun gibi mevcut popüler ** posta sunucusuna ** bir alternatiftir. ** Posta ** sağlam, güvenli ve ölçeklenebilir bir açık kaynak e -posta dağıtım platformudur. Tüm kaynak kodu ve belgeler [** GitHub **][6] 'da mevcuttur. İndirebilir, özel sunucunuza yükleyebilir ve üzerinde tam kontrolü koruyabilirsiniz. Ayrıca, iş ihtiyaçlarına göre geliştirebilir ve geliştirebilirsiniz. Ayrıca, ** Posta Posta Sunucusu ** birden fazla kuruluşu destekler.
Kullanıcılar, gelen ve giden postaların hacmini gösteren grafikleri ve istatistikleri görüntüleyebilir. Ayrıca, giden ve gelen mesaj kuyruğuna tam olarak erişebilirsiniz. Posta Posta Sunucusu Webhooks için işlevsellik sağlar. Teslimat bilgileri hakkında canlı bilgi almak için WebHooks'u gerçek zamanlı olarak ayarlayabilirsiniz. Ayrıca, tüm gönderme ve alınan mesajları depolamanıza ve incelemenize olanak tanıyan mesaj tutma sunar. Kullanıcıların e -postayı almasını sağlamak için e -posta teslimi işletmede çok önemlidir. Ancak, bazen e -posta kullanıcıya teslim edilir ve sorunu araştırmanız gerekir. ** Gelen ve Giden Posta Sunucusu ** ayrıca soruşturmayı yapmak için eksiksiz bir günlük ve araçlar sağlar.

## Posta'nın özellikleri {#features}
Posta Posta Sunucusu birçok özellik sunar. Ancak, bu makalede aşağıdaki temel özellikleri tartışacağız.
** E -posta Gönderme **: Posta Posta Sunucusu, HTTP API ve SMTP gibi giden e -postalar için iki teknik sağlar. Web uygulamalarıyla entegrasyon için HTTP API'sını kolayca kullanabilirsiniz. Mevcut uygulamalar ve sistemlerle entegrasyon için bir SMTP sunucusu da kullanabilirsiniz.
** Gelen e -postalar **: ** Gelen posta ** Posta Posta Sunucusunu kullanarak HTTP Bitiş Noktası, ** SMTP Sunucusu ** ve diğer e -posta adreslerine iletilebilir.
** Spam ve virüs kontrolü **: Spamasssin ve Clamav, posta sunucularından geçerken gelen ve giden mesajları otomatik olarak taramak için posta ile entegre edilebilir. Bu özellik varsayılan olarak da kapalıdır.
** Tıklayın ve İzlemeyi Aç **: E -posta açılışları ve tıklamalar posta ile izlenebilir. Posta, giden mesajlarınızı tarayacak ve bağlantıları posta web sunucunuzdan geçen yeni bir bağlantı ile değiştirecektir. Kullanıcı bağlantıyı tıkladığında, posta eylemi kaydeder ve bunları anında orijinal URL'ye yönlendirir. Ancak, bu varsayılan olarak etkinleştirilmez.
** IP Havuzları **: Posta, çeşitli IP adreslerinden mesaj göndermenizi sağlar. Bu, gönderen veya alıcı adreslerine bağlı olarak farklı posta sunucularına birden fazla IP adresi atamanıza veya farklı IP'lerden göndermenize olanak tanır.

## Posta Kurulumu {#installation}
Ubuntu 18.04'e Posta ** Posta Sunucusu Yazılımı ** yüklemek için aşağıdaki adım adım kılavuzu izleyin.
  * İlk olarak, sunucunuzu Vis SSH bağlamanız gerekir. Sistemi güncellemek için aşağıdaki komutu en son mevcut paketlerle çalıştırın.
```
sudo apt-get update
```

### Mariadb Veritabanı Sunucusunu Yükle
  * Mariadb yükleme komutunu çalıştırın.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Kurulumu bitirdikten sonra. Şimdi, aşağıdaki komutu çalıştırarak güvence altına almanız gerekir.
```
mysql_secure_installation
```
  * Sonra, size aşağıda gösterildiği gibi birkaç soru soracaktır. Tüm soruları cevaplamanız gerekiyor.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * MariaDB sunucusuna aşağıdaki komutla bağlanın.
```
mysql -u root -p
```
  * Posta için bir veritabanı oluşturun.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Ardından, yeni şifreli "Postaluser" adlı bir veritabanı kullanıcısı oluşturun.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Bundan sonra, kullanıcıya "Postaluser" veritabanına tam erişim sağlayın.
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Ardından, ayrıcalıkları yıkayın ve MariaDB kabuğundan çıkış aşağıdaki komutla.
```
FLUSH PRIVILEGES;
EXIT;
```

### Ruby'yi kurun
  * İlk olarak, Ruby'yi kurmak için üçüncü taraf PPA ekleyin. Aşağıdaki komutları çalıştırın.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Ubuntu paketlerini güncelleyin.
```
sudo apt update
```
  * Aşağıdaki komutu çalıştırarak Ruby'yi yükleyin.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Rabbitmq'i yükle
  * Erlang'ın Rabbitmq'i kurmanız gerekir, bu yüzden de yüklemeniz gerekir. Aşağıdaki komutla Ubuntu'ya Erlang Depo Tuşunu ekleyin.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Ardından, Erlang deposunu aşağıdaki komutla ekleyin.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Erlang'ı yüklemek için aşağıdaki komutları çalıştırın.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Erlang kurulumunu bitirdikten sonra Rabbitmq'i yüklemeye devam edebilirsiniz. Ubuntu'ya Rabbitmq deposu ekleyin.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Rabbitmq GPG tuşunu aşağıdaki komutla ekleyin.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Rabbitmq paketini yüklemek için aşağıdaki komutları çalıştırın.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Rabbitmq'i etkinleştirmek için aşağıdaki komutu çalıştırın, böylece sistem önyükleme yaparken her zaman başlar.
```
sudo systemctl enable rabbitmq-server
```
  * Ardından, posta için RabbitMQ VHost ve kullanıcı oluşturmanız gerekecektir. Aşağıdaki komutu çalıştırın.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Nodejs'i yükleyin
  * Aşağıdaki komutla NodeJS depo ekleyin.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Ardından, Nodejs yüklemek için aşağıdaki komutu çalıştırın.
```
sudo apt-get install nodejs
```

### Posta Posta Sunucusunu Yükle
  * İlk olarak, posta posta sunucusu için bir kullanıcı oluşturmanız gerekir. Aşağıdaki komutla oluşturun.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Ardından, Ruby'nin web bağlantı noktalarını dinlemesine izin verin.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Gerekli tüm mücevherleri aşağıdaki komutlarla yükleyin.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Posta için bir dizin yapısı oluşturun.
```
sudo mkdir -p /opt/postal/app
```
  * Ardından, Postal'ın en son sürümünü indirin.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * İndirilen dosyayı aşağıdaki komutla çıkarın.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Ardından, posta dizininin sahipliğini değiştirin.
```
sudo chown -R postal:postal /opt/postal
```
  * Aşağıdaki komutu çalıştırarak posta ikili için bir sembolü oluşturun.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Gerekli tüm bağımlılıkları yükleyin.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Posta yapılandırmalarını başlatmak için aşağıdaki komutu çalıştırın.
```
sudo postal initialize-config
```
  * Ardından, posta yapılandırma dosyasını açmak için aşağıdaki komutu çalıştırın.
```
sudo nano /opt/postal/config/postal.yml
```
  * Bold ile belirtilen değişiklikleri yapın ve dosyayı kaydedin.
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
  * Veritabanını başlatma komutunu çalıştırın.
```
sudo postal initialize
```
  * Posta için bir yönetici kullanıcısı oluşturun.
```
sudo postal make-user
```
  * Ardından, aşağıdaki gösterildiği gibi kullanıcı hesabı detayını vermeniz gerekecektir.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  * Son olarak, posta uygulamasının durumunu başlatmak ve kontrol etmek için aşağıdaki komutu çalıştırın.
```
sudo -u postal postal start
sudo -u postal postal status
```

### nginx'i yükle
  * Nginx web sunucusunu yüklemek için aşağıdaki komutu çalıştırın.
```
sudo apt install nginx
```
  * Ardından, Postal Nginx Config'i sanal-konakçı olarak kullanmak için kopyalayın.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Kendine imza atan bir SSL sertifikası oluşturun.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Bundan sonra, soruları cevaplamanız gerekecek.
  * Nginx varsayılan sanal ana bilgisayar dosyasını açın.
  * Server_name değerini değiştirin ve dosyayı kaydedin.
  * Son olarak, aşağıdaki komutu çalıştırarak Nginx web sunucusunu yeniden başlatın.
```
sudo systemctl restart nginx
```
  * Son olarak, tarayıcınızı açın ve https://postal.example.com URL'sini yazın. Giriş sayfasına yönlendirileceksiniz.

## Sonuç {#Conclusion}
Posta Posta Sunucusunun tanıtımını ve birincil özelliklerini büyük derinlemesine inceledik. Ayrıca bu ** posta aktarım aracısı ** ayarlamak için adım adım talimatlar ekledik. Dahası, kurulum hakkında bir fikir verdik. Posta posta sunucusu kurmak basit bir işlemdir. Umarım bu makalenin işletmeniz için bir posta sunucusu kurma ve yapılandırmada gerçekten yardımcı olduğunu umuyorum.
Son olarak, [** Containerize.com **][7], en son açık kaynaklı ürünler hakkında blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [** işlem e -posta **][8] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  *[** Üst İşlemsel E -posta Yazılımı **][9]
  *[** Potal - Açık Kaynak Posta Sunucusu **][5]
  *[** 2020'de işletmeler için en iyi açık kaynaklı posta sunucusu yazılımı **][10]

  
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
