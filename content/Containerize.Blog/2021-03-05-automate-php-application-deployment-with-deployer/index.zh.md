---
title: "自动化PHP应用程序与Deployer的部署" 
seoTitle: "自动化PHP应用程序与Deployer的部署" 
description: "使用开源部署工具部署PHP应用程序，并自动化部署工作流程。轻松发布功能并回滚至以前的版本。" 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "使用PHP部署工具自动化PHP应用程序部署过程。我们将学习如何设置Deployer并使用它来部署PHP应用程序。" 
url: /zh/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## 使用PHP部署工具自动化PHP应用程序部署过程。我们将学习如何设置Deployer并使用它来部署PHP应用程序。

{{< figure align=center src="images/deployer-blog-post.png" alt="PHP部署工具">}}

开发后，在服务器上部署应用程序是非常关键的工作。新功能和错误修复程序通常由团队发布。因此，团队最好消除手动工作并自动化**软件部署**流程。它将允许软件团队专注于更重要的任务。那里有几种**开源部署工具**，但我们将集中精力于本教程中的** php Deployer **。我们将介绍本文中的以下部分。
  *[**什么是Deployer **][1]
  *[**安装Deployer **][2]
  *[**部署PHP应用程序**][3]
  *[**结论**][4]

## 什么是deployer {#what}
[** Deployer **][5]是一种免费的开源** PHP部署工具**。它允许软件团队自动化基于PHP应用程序的部署工作流程。安装非常简单，易于使用。从初学者到专家级别的任何人都可以快速将其用于部署PHP应用程序。 Deployer带有开箱即用的食谱/脚本，可用于流行的PHP框架，CMS和购物车软件。此外，您可以使用此**开源部署工具**进行** laravel部署**。开发人员可以将内置食谱用于其项目，并将其用于部署。此外，您可以轻松地使用** php Deployer **向导创建安装/部署脚本。此外，此**免费部署工具**提供了出色的功能，例如零下降时间部署，回滚前版本，SSH，并行执行等。

## 安装deployer {#installing}
  *部署者取决于PHP。您应该确保PHP在服务器上运行。但是，您可以使用下面的命令在Ubuntu上安装PHP。
```
sudo apt-get install php
```
  *在下面运行以下命令以安装Deployer。
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## 部署PHP应用程序{#deploy}
请按照分步指南进行**与Deployer部署PHP应用程序**。
  *为部署创建一个目录，并导航到新创建的目录。
```
sudo mkdir deployer
cd deployer
```
  *运行以下命令以生成安装脚本
```
dep init
```
  *将在下面的屏幕上提示您。这是一个Deployer向导，可以创建基本安装脚本。

{{< figure align=center src="images/deployer-1.png" alt="">}}

  *首先，您需要通过输入数字选择项目类型。如果您不确定项目类型或仅熟悉Deployer，则可以输入0。
  *其次，您需要提供GIT存储库路径。这是一个可选的步骤，您可以跳过它并稍后添加路径。
  *在最后一步中，您可以通过选择“是”或“跳过”来与Deployer社区共享信息。
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
您必须更改以下变量以部署PHP应用程序。
  *** set（'应用程序'，'my_project'）; **  - 设置应用程序名称。
  ***设置（'repository'，”）; **  - 设置git存储库路径，例如'git@github.com：masood/first-app-with-deployer.git.git’。您必须将部署密钥设置为GitHub存储库。如果您不熟悉，则可以搜索如何在服务器上创建SSH键。
  ***主持人（'project.com'）
     - > set（'devoly_path'，‘〜/{{application}}'）; **  - 设置项目名称并定义要为应用程序存储文件的路径。它看起来像/var/www/html/deployer。
最后，运行以下命令以部署您的PHP应用程序。
```
dep deployer
```
如果您发现新版本的任何问题，并且想要回滚更改。您可以通过简单地运行以下命令来做到这一点。
```
dep rollback
```

## 结论{#conclusion}
我们已经讨论了有关Deployer以及如何在本教程中安装它的信息。此外，我们为从GITHUB存储库中部署基于PHP的应用程序创建了完整的指南。希望这篇博客文章将帮助您与Deployer启动**部署PHP应用程序**。此外，我们将在即将到来的教程中撰写有关此** PHP部署工具**的更多信息。
最后，[** containerize.com **][6]正处于撰写有关更多最新开源产品的博客文章的一致过程。因此，与此[**部署工具**][7]类别保持联系，以进行最新更新。

## 探索
您可能会发现以下链接相关：
  *[** Deployer **][8]
  *[** Jenkins **][9]
  *[**无人机**][10]
  *[** Capistrano **][11]
  *[**牧场主**][12]
  *[**大厅**][13]
  *[** Ansible **][14]
  *[** gocd **][15]
  *[** 2021年前5个开源部署工具**][16]
  *[**连续集成和来自源控制服务器的连续部署**][17]

  
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
