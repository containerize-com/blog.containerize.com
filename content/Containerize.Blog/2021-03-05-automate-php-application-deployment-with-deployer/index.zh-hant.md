---
title: "自動化PHP應用程序與Deployer的部署" 
seoTitle: "自動化PHP應用程序與Deployer的部署" 
description: "使用開源部署工具部署PHP應用程序，並自動化部署工作流程。輕鬆發布功能並回滾至以前的版本。" 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "使用PHP部署工具自動化PHP應用程序部署過程。我們將學習如何設置Deployer並使用它來部署PHP應用程序。" 
url: /zh-hant/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

##使用PHP部署工具自動化PHP應用程序部署過程。我們將學習如何設置Deployer並使用它來部署PHP應用程序。

{{< figure align=center src="images/deployer-blog-post.png" alt="PHP部署工具">}}

開發後，在服務器上部署應用程序是非常關鍵的工作。新功能和錯誤修復程序通常由團隊發布。因此，團隊最好消除手動工作並自動化**軟件部署**流程。它將允許軟件團隊專注於更重要的任務。那裡有幾種**開源部署工具**，但我們將集中精力於本教程中的 **php Deployer** 。我們將介紹本文中的以下部分。
  *[**什麼是Deployer**][1]
  *[**安裝Deployer**][2]
  *[**部署PHP應用程序**][3]
  *[**結論**][4]

##什麼是deployer   {#what}
[**Deployer **][5]是一種免費的開源**  PHP部署工具**。它允許軟件團隊自動化基於PHP應用程序的部署工作流程。安裝非常簡單，易於使用。從初學者到專家級別的任何人都可以快速將其用於部署PHP應用程序。 Deployer帶有開箱即用的食譜/腳本，可用於流行的PHP框架，CMS和購物車軟件。此外，您可以使用此**開源部署工具**進行 **laravel部署** 。開發人員可以將內置食譜用於其項目，並將其用於部署。此外，您可以輕鬆地使用 **php Deployer** 嚮導創建安裝/部署腳本。此外，此**免費部署工具**提供了出色的功能，例如零下降時間部署，回滾前版本，SSH，並行執行等。

##安裝deployer   {#installing}
  *部署者取決於PHP。您應該確保PHP在服務器上運行。但是，您可以使用下面的命令在Ubuntu上安裝PHP。
```
sudo apt-get install php
```
  *在下面運行以下命令以安裝Deployer。
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

##部署PHP應用程序 {#deploy}
請按照分步指南進行**與Deployer部署PHP應用程序**。
  *為部署創建一個目錄，並導航到新創建的目錄。
```
sudo mkdir deployer
cd deployer
```
  *運行以下命令以生成安裝腳本
```
dep init
```
  *將在下面的屏幕上提示您。這是一個Deployer嚮導，可以創建基本安裝腳本。

{{< figure align=center src="images/deployer-1.png" alt="">}}

  *首先，您需要通過輸入數字選擇項目類型。如果您不確定項目類型或僅熟悉Deployer，則可以輸入0。
  *其次，您需要提供GIT存儲庫路徑。這是一個可選的步驟，您可以跳過它並稍後添加路徑。
  *在最後一步中，您可以通過選擇“是”或“跳過”來與Deployer社區共享信息。
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
您必須更改以下變量以部署PHP應用程序。
  * **set（'應用程序'，'my_project'）;**   - 設置應用程序名稱。
  ***設置（'repository'，”）;**  - 設置git存儲庫路徑，例如'git@github.com：masood/first-app-with-deployer.git.git’。您必須將部署密鑰設置為GitHub存儲庫。如果您不熟悉，則可以搜索如何在服務器上創建SSH鍵。
 ***主持人（'project.com'）
     - > set（'devoly_path'，‘〜/{{application}}'）;**  - 設置項目名稱並定義要為應用程序存儲文件的路徑。它看起來像/var/www/html/deployer。
最後，運行以下命令以部署您的PHP應用程序。
```
dep deployer
```
如果您發現新版本的任何問題，並且想要回滾更改。您可以通過簡單地運行以下命令來做到這一點。
```
dep rollback
```

##結論 {#conclusion}
我們已經討論了有關Deployer以及如何在本教程中安裝它的信息。此外，我們為從GITHUB存儲庫中部署基於PHP的應用程序創建了完整的指南。希望這篇博客文章將幫助您與Deployer啟動**部署PHP應用程序**。此外，我們將在即將到來的教程中撰寫有關此 **PHP部署工具** 的更多信息。
最後，[ **containerize.com** ][6]正處於撰寫有關更多最新開源產品的博客文章的一致過程。因此，與此[**部署工具**][7]類別保持聯繫，以進行最新更新。

## 探索
您可能會發現以下鏈接相關：
  *[ **Deployer** ][8]
  *[ **Jenkins** ][9]
  *[**無人機**][10]
  *[ **Capistrano** ][11]
  *[**牧場主**][12]
  *[**大廳**][13]
  *[ **Ansible** ][14]
  *[ **gocd** ][15]
  *[ **2021年前5個開源部署工具** ][16]
  *[**連續集成和來自源控制服務器的連續部署**][17]

  
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
