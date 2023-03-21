---
title: "PHP Uygulama Dağıtımını Dağıtıcı ile Otomatikleştirin" 
seoTitle: "PHP Uygulama Dağıtımını Dağıtıcı ile Otomatikleştirin" 
description: "PHP uygulamasını açık kaynak dağıtım aracı ile dağıtın ve dağıtım iş akışlarını otomatikleştirin. Özellikleri ve geri dönüşü önceki sürüme kolayca serbest bırakın." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "PHP uygulaması dağıtım işlemini PHP dağıtım aracıyla otomatikleştirin. PHP uygulamasını dağıtmak için dağıtıcıyı nasıl kuracağımızı ve kullanmayı öğreneceğiz." 
url: /tr/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## PHP uygulaması dağıtım işlemini PHP dağıtım aracıyla otomatikleştirin. PHP uygulamasını dağıtmak için dağıtıcıyı nasıl kuracağımızı ve kullanmayı öğreneceğiz.

{{< figure align=center src="images/deployer-blog-post.png" alt="PHP dağıtım aracı">}}

Geliştirmeden sonra sunucuda uygulamayı dağıtmak için çok kritik bir iş. Yeni özellikler ve hata düzeltmeleri genellikle ekipler tarafından yayınlanır. Bu nedenle, ekiplerin manuel çalışmayı ortadan kaldırması ve **yazılım dağıtım  **sürecini otomatikleştirmesi tercih edilir. Yazılım ekiplerinin daha önemli görevlere odaklanmasına izin verecektir. Orada birkaç açık kaynak dağıtım aracı **  vardır, ancak bu öğreticide  **php dağıtıcı**   üzerinde yoğunlaşacağız. Bu yazıdaki aşağıdaki bölümü ele alacağız.
  *[**Dağıtıcı nedir** ][1]
  *[**Dağıtıcı yükleme** ][2]
  *[**PHP uygulaması dağıtım** ][3]
  *[**Sonuç** ][4]

## Dağıtıcı nedir   {#ne}
[**Dağıtıcı **][5] ücretsiz ve açık kaynaklı bir  **PHP dağıtım aracı ** . PHP tabanlı uygulamalar için dağıtım iş akışlarını otomatikleştirmek için yazılım ekiplerine izin verir. Kurulması çok basit ve kullanımı kolay. Yeni başlayandan uzman seviyesi deneyimine kadar herkes PHP uygulamalarını dağıtmak için hızlı bir şekilde kullanabilir. Dağıtıcı, popüler PHP çerçeveleri, CMS ve alışveriş sepeti yazılımı için kullanıma hazır tarifler/komut dosyaları ile birlikte gelir. Ayrıca, bu açık kaynak dağıtım aracı  **ile **  laravel dağıtım  **yapabilirsiniz. Geliştirici, projeleri için yerleşik tarifleri kullanabilir ve dağıtım için kullanabilir. Ayrıca, **  PHP Dağıtıcı  **sihirbazıyla kolayca yükleme/dağıtım komut dosyası oluşturabilirsiniz. Ayrıca, bu **  Ücretsiz Dağıtım Aracı** , sıfır indirme süresi dağıtımları, önceki sürüme geri dönüş, SSH, paralel yürütme ve daha fazlası gibi mükemmel özellikler sunar.

## Dağıtıcı Yükleme   {#Installing}
  * Dağıtıcı PHP'ye bağlıdır. PHP'nin sunucunuzda çalıştığından emin olmalısınız. Ancak, Ubuntu'ya PHP yüklemek için aşağıdaki komutu kullanabilirsiniz.
```
sudo apt-get install php
```
  * Dağıtıcı yüklemek için aşağıdaki komutları tek tek çalıştırın.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## PHP uygulamasını dağıtın   {#deploy}
PHP uygulaması ** dağıtıcı ile dağıtım için adım adım yönergeleri izleyin.
  * Dağıtıcı için bir dizin oluşturun ve yeni oluşturulan dizine gidin.
```
sudo mkdir deployer
cd deployer
```
  * Bir kurulum komut dosyası oluşturmak için aşağıdaki komutu çalıştırın
```
dep init
```
  * Aşağıdaki ekranla istenecektir. Bu, temel yükleme komut dosyası oluşturmak için bir dağıtıcı sihirbazıdır.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * İlk olarak, bir numara girerek proje türünü seçmeniz gerekir. Proje türünden emin değilseniz veya sadece dağıtıcısına aşina olmanız durumunda 0 girebilirsiniz.
  * İkincisi, bir git depo yolu sağlamanız gerekir. İsteğe bağlı bir adım, atlayabilir ve daha sonra bir yol ekleyebilirsiniz.
  * Son adımda, Dağıtıcı Topluluğu ile evet'i seçerek veya atlamak için hayır girerek bilgi paylaşabilirsiniz.
```
<?php
namespace Deployer;

require 'recipe/common.php';

// Project name
set('application', 'my_project');

// Project repository
set('repository', '');

// [Optional] Allocate tty for git clone. Default value is false.
set('git_tty', true); 

// Shared files/dirs between deploys 
set('shared_files', []);
set('shared_dirs', []);

// Writable dirs by web server 
set('writable_dirs', []);
set('allow_anonymous_stats', false);

// Hosts

host('project.com')
    ->set('deploy_path', '~/{{application}}');    
    

// Tasks

desc('Deploy your project');
task('deploy', [
    'deploy:info',
    'deploy:prepare',
    'deploy:lock',
    'deploy:release',
    'deploy:update_code',
    'deploy:shared',
    'deploy:writable',
    'deploy:vendors',
    'deploy:clear_paths',
    'deploy:symlink',
    'deploy:unlock',
    'cleanup',
    'success'
]);

// [Optional] If deploy fails automatically unlock.
after('deploy:failed', 'deploy:unlock');
```
PHP uygulamanızı dağıtmak için aşağıdaki değişkenleri değiştirmeniz gerekir.
  ***set ("uygulama", "my_project");**  - Uygulama adını ayarlayın.
  ***set ("depo", ");** -" Git@github.com: masood/first-app-with-deployer.git "gibi git depo yolunu ayarlayın. Dağıtım tuşunu GitHub deponuza ayarlamanız gerekir. Eğer aşina değilseniz sunucuda nasıl bir SSH anahtarı oluşturulacağınızı araştırabilirsiniz.
  *** Host ("Project.com")
    -> set ("dağıtım_patası", "~/{{Application}}’); ** -Proje adını ayarlayın ve uygulamanız için dosyaları depolamak istediğiniz yolu tanımlayın. /Var/www/html/dağıtıcı gibi görünür.
Son olarak, PHP uygulamanızı dağıtmak için aşağıdaki komutu çalıştırın.
```
dep deployer
```
Yeni sürümle ilgili herhangi bir sorun bulursanız ve değişiklikleri geri almak istiyorsanız. Sadece aşağıdaki komutu çalıştırarak yapabilirsiniz.
```
dep rollback
```

## Sonuç   {#Conclusion}
Dağıtıcı ve bu öğreticiye nasıl yükleneceğimiz hakkında tartıştık. Ayrıca, GitHub deposundan PHP tabanlı uygulamayı dağıtmak için tam bir kılavuz oluşturduk. Umarım, bu blog yazısı **dağıtıcı ile PHP uygulaması  **dağıtım başlatmanıza yardımcı olacaktır. Dahası, bu **  PHP Dağıtım Aracı**  hakkında daha fazla bilgi yazacağız.
Son olarak, [**Containerize.com **][6], en son açık kaynaklı ürünler hakkında blog yazıları yazma sürecindedir. Bu nedenle, en son güncellemeler için bu [ **dağıtım araçları**  ][7] kategorisiyle iletişim halinde olun.

## Keşfetmek
Aşağıdaki bağlantıları alakalı bulabilirsiniz:
  *[**Dağıtıcı** ][8]
  *[**Jenkins** ][9]
  *[**drone** ][10]
  *[**Capistrano** ][11]
  *[**Rancher** ][12]
  *[**Concourse** ][13]
  *[**Ansible** ][14]
  *[**GOCD** ][15]
  *[**2021'de Top 5 Açık Kaynak Dağıtım Aracı** ][16]
  *[**Kaynak Kontrol Sunucusundan Sürekli Entegrasyon ve Sürekli Dağıtım** ][17]

  
[1]: #What
[2]: #Installing
[3]: #Deploy
[4]: #Conclusion
[5]: https://deployer.org/
[6]: https://containerize.com
[7]: https://blog.containerize.com/category/deployment-tools/
[8]: https://products.containerize.com/deployment-tools/deployer
[9]: https://products.containerize.com/deployment-tools/jenkins/
[10]: https://products.containerize.com/deployment-tools/drone/
[11]: https://products.containerize.com/deployment-tools/capistrano/
[12]: https://products.containerize.com/deployment-tools/rancher/
[13]: https://products.containerize.com/deployment-tools/concourse/
[14]: https://products.containerize.com/deployment-tools/ansible/
[15]: https://products.containerize.com/deployment-tools/gocd/
[16]: https://blog.containerize.com/deployment-tools/top-5-open-source-deployment-tools-in-the-year-2021/
[17]: https://blog.containerize.com/deployment-tools/automate-software-deployment-process-with-jenkins-and-github/
