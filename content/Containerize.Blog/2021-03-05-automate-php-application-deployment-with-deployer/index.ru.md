---
title: "Автоматизировать развертывание приложений PHP с помощью Deployer" 
seoTitle: "Автоматизировать развертывание приложений PHP с помощью Deployer" 
description: "Разверните приложение PHP с инструментом развертывания с открытым исходным кодом и автоматизируйте рабочие процессы развертывания. Легко выпустить функции и откат на предыдущую версию." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Автоматизируйте процесс развертывания приложений PHP с помощью инструмента развертывания PHP. Мы узнаем, как настроить развертывание и использовать его для развертывания приложения PHP." 
url: /ru/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Автоматизируйте процесс развертывания приложений PHP с помощью инструмента развертывания PHP. Мы узнаем, как настроить развертывание и использовать его для развертывания приложения PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Инструмент развертывания PHP">}}

Это очень важная задача для развертывания приложения на сервере после разработки. Новые функции и исправления ошибок часто выпускаются командами. Таким образом, для команд предпочтительнее устранить ручную работу и автоматизировать процесс развертывания программного обеспечения  **. Это позволило бы программным командам сконцентрироваться на более важных задачах. Есть несколько** инструмент развертывания с открытым исходным кодом **, но мы сосредоточимся на**  PHP Deployer**в этом уроке. Мы рассмотрим следующий раздел в этом посте.
* [  **Что является развертывателем**  ][1]
* [  **Установка развертывателя**  ][2]
* [  **Развернуть PHP -приложение**  ][3]
* [  **Заключение**  ][4]

## Что является развертывателем {#What}

[  **Deployer** ][5]-это бесплатный и открытый инструмент для развертывания PHP  **. Это позволяет программным командам для автоматизации рабочих процессов развертывания для PHP-приложений. Это очень просто в установке и простой в использовании. Любой, от начинающего до экспертного опыта, может быстро использовать его для развертывания PHP -приложений. Deployer поставляется с рецептами/сценариями с ящиками для популярных PHP-платформ, CMS и программного обеспечения для корзины для покупок. Кроме того, вы можете сделать**  развертывание Laravel  **с помощью этого**  инструмента развертывания с открытым исходным кодом  **. Разработчик может использовать встроенные рецепты для своих проектов и использовать их для развертывания. Кроме того, вы можете легко создать сценарий установки/развертывания с помощью Wizard**  PHP **. Кроме того, этот**  бесплатный инструмент развертывания**предлагает отличные функции, такие как развертывание с нулевым временем, откат на предыдущую версию, SSH, параллельное выполнение и многое другое.

## Установка развертывателя {#Installing}

  * Развертыватель зависит от PHP. Вы должны убедиться, что PHP работает на вашем сервере. Тем не менее, вы можете использовать ниже команду для установки PHP на Ubuntu.
```
sudo apt-get install php
```
  * Запустите ниже команды один за другим, чтобы установить развертывание.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## Развернуть приложение PHP {#Deploy}

Следуйте пошаговым рекомендациям, чтобы  **развернуть приложение PHP**  с помощью Deployer.
  * Создайте каталог для развертывателя и перейдите в недавно созданный каталог.
```
sudo mkdir deployer
cd deployer
```
  * Запустите приведенную ниже команду для создания сценария установки
```
dep init
```
  * Вам будет предложено на экране ниже. Это мастер развертывания для создания базового сценария установки.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Во -первых, вам нужно выбрать тип проекта, введя номер. Вы можете ввести 0, если вы не уверены в типе проекта или просто знакомы с Deployer.
  * Во -вторых, вам необходимо предоставить путь репозитория GIT. Это необязательный шаг, вы можете пропустить его и добавить путь позже.
  * На последнем этапе вы можете поделиться информацией с сообществом развертывателя, выбрав «Да» или введите «Нет», чтобы пропустить ее.
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
Вы должны изменить следующие переменные для развертывания вашего приложения PHP.
*  **set (‘Application’, ‘my_project’);**  - Установите имя приложения.
*  **set («Repository’, ”);**  -установить путь репозитория GIT, как‘ git@github.com: masood/first-apply-floyer.git ». Вы должны установить ключ развертывания в репозиторий GitHub. Вы можете найти, как создать ключ SSH на сервере, если вы не знакомы с ним.
***Хост (‘Project.com ')
    -> set (‘deploy_path’, ‘~/{{Application}}’);**-установить имя проекта и определить путь, где вы хотите сохранить файлы для вашего приложения. Это будет выглядеть как/var/www/html/deployer.
Наконец, запустите приведенную ниже команду, чтобы развернуть приложение PHP.
```
dep deployer
```
Если вы найдете какие -либо проблемы с новым релизом и хотите отказаться от изменений. Вы можете сделать это, просто запустив ниже команду.
```
dep rollback
```

## Заключение {#Заключение}

Мы обсуждали о развертывателе и о том, как его установить в этом уроке. Кроме того, мы создали полное руководство по развертыванию приложения на основе PHP из репозитория GitHub. Надеемся, что этот пост в блоге поможет вам начать  **развернуть приложение PHP** с помощью Deployer. Более того, мы напишем больше об этом **инструменте развертывания PHP**  в предстоящих учебных пособиях.
Наконец, [  **Containerize.com** ][6] находится в постоянном процессе написания постов в блоге на дальнейших последних продуктах с открытым исходным кодом. Поэтому оставайтесь на связи с этой категорией [ **Инструменты развертывания**  ][7] для последних обновлений.

## Исследовать
Вы можете найти следующие ссылки актуальными:
* [  **Deployer**  ][8]
* [  **Дженкинс**  ][9]
* [  **Drone**  ][10]
* [  **capistrano**  ][11]
* [  **ранчо**  ][12]
* [  **Зал**  ][13]
* [  **ansible**  ][14]
* [  **gocd**  ][15]
* [  **5 лучших инструментов развертывания с открытым исходным кодом в 2021 году**  ][16]
* [  **Непрерывная интеграция и непрерывное развертывание с сервера управления источником**  ][17]



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
