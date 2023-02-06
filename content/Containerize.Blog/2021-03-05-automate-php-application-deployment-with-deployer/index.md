---
title: Automate PHP Application Deployment With Deployer
seoTitle: Automate PHP Application Deployment With Deployer
description: Deploy PHP application with open source deployment tool and automate deployment workflows. Easily release features and rollback to previous version.
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: Automate PHP application deployment process with PHP deployment tool. We will learn how to setup Deployer and use it to deploy PHP application.
url: /deployment-tools/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']

---
## Automate PHP application deployment process with PHP deployment tool. We will learn how to setup Deployer and use it to deploy PHP application.

{{< figure align=center src="images/deployer-blog-post.png" alt="PHP Deployment Tool">}}  

Its a very critical job to deploy application on the server after development. New features and bug fixes are often released by teams. So, it is preferable for teams to eliminate manual work and automate the **software deployment** process. It would allow software teams to concentrate on more important tasks. There are several **open source deployment tool** out there but we will concentrate on **PHP Deployer** in this tutorial. We will cover the following section in this post.

  * [**What is Deployer**][1]
  * [**Installing Deployer**][2]
  * [**Deploy PHP Application**][3]
  * [**Conclusion**][4]

## What is Deployer {#What}

[**Deployer**][5] is a free and open-source **PHP deployment tool**. It allows software teams for automating deployment workflows for PHP-based applications. It’s very simple to install and easy to use. Anyone from beginner to expert level experience can quickly use it for deploying PHP applications. Deployer comes with out-of-the-box recipes/scripts for popular PHP frameworks, CMS, and shopping cart software. Further, you can do **Laravel deployment** with this **open source deployment tool**. The developer can use built-in recipes for their projects and use them for deployment. Further, you can easily create install/deploy script with the **PHP Deployer** wizard. Moreover, this **free deployment tool** offers excellent features such as zero-downtime deployments, rollback to the previous version, SSH, parallel execution, and many more.

## Installing Deployer {#Installing}

  * Deployer depends on PHP. You should ensure that PHP is running on your server. However, you can use below command to install PHP on Ubuntu.


```
sudo apt-get install php
```


  * Run below commands one by one to install Deployer.


```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```


## Deploy PHP Application {#Deploy}

Follow step-by-step guidelines to **deploy PHP application** with Deployer.

  * Create a directory for deployer and navigate to the newly-created directory.


```
sudo mkdir deployer
cd deployer
```


  * Run the below command to generate an installation script


```
dep init
```


  * You will be prompted with the below screen. This is a Deployer wizard to create basic install script.

{{< figure align=center src="images/deployer-1.png" alt="">}}  

  * First, you need to select project type by entering a number. You can enter 0, if you are not sure about project type or just getting familiar with Deployer.
  * Secondly, you need to provide a Git repository path. Its an optional step, you can skip it and add a path later.
  * In the last step, you may share information with the Deployer community by selecting Yes or enter No to skip it.


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


You have to change the following variables for deploying your PHP application.

  * **set(‘application’, ‘my_project’);** – Set application name.
  * **set(‘repository’, ”);** – Set Git repository path like ‘git@github.com:masood/first-app-with-deployer.git’. You must set the deploy key to your GitHub repository. You may search how to create an SSH key at server, if you are not familiar with it.
  * **host(‘project.com’)  
    ->set(‘deploy_path’, ‘~/{{application}}’);** – Set project name and define path where you want to store files for your application. It would look like /var/www/html/deployer.

Finally, run the below command to deploy your PHP application.


```
dep deployer
```


If you find any issues with the new release and want to rollback changes. You can do it by simply running the below command.


```
dep rollback
```


## Conclusion {#Conclusion}

We have discussed about Deployer and how to install it in this tutorial. Further, we have created complete guideline for deploying PHP based application from GitHub repository. Hopefully, this blog post will help you to start **deploy PHP application** with Deployer. Moreover, we will write more about this **PHP deployment tool** in coming tutorials.

Finally, [**containerize.com**][6] is in a consistent process of writing blog posts on further latest open source products. Therefore, stay in touch with this [**Deployment Tools**][7] category for the latest updates.

## Explore

You may find the following links relevant:

  * [**Deployer**][8]
  * [**Jenkins**][9]
  * [**Drone**][10]
  * [**Capistrano**][11]
  * [**Rancher**][12]
  * [**Concourse**][13]
  * [**Ansible**][14]
  * [**GoCD**][15]
  * [**Top 5 Open Source Deployment Tools In 2021**][16]
  * [**Continuous Integration And Continuous Deployment From Source Control Server**][17]

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
 [16]: https://blog.containerize.com/2021/03/12/top-5-open-source-deployment-tools-in-the-year-2021/
 [17]: https://blog.containerize.com/2021/02/22/automate-software-deployment-process-with-jenkins-and-github/