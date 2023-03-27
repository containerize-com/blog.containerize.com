---
title: "Tự động hóa việc triển khai ứng dụng PHP với triển khai" 
seoTitle: "Tự động hóa việc triển khai ứng dụng PHP với triển khai" 
description: "Triển khai ứng dụng PHP với công cụ triển khai nguồn mở và tự động hóa quy trình công việc triển khai. Dễ dàng phát hành các tính năng và rollback cho phiên bản trước." 
date: Fri, 05 Mar 2021 22:07:03 +0000
author: Masood Anwer
summary: "Tự động hóa quy trình triển khai ứng dụng PHP với công cụ triển khai PHP. Chúng tôi sẽ tìm hiểu cách thiết lập triển khai và sử dụng nó để triển khai ứng dụng PHP." 
url: /vi/automate-php-application-deployment-with-deployer/
categories: ['Deployment Tools']
---

## Tự động hóa quy trình triển khai ứng dụng PHP với công cụ triển khai PHP. Chúng tôi sẽ tìm hiểu cách thiết lập triển khai và sử dụng nó để triển khai ứng dụng PHP.

{{< figure align=center src="images/deployer-blog-post.png" alt="Công cụ triển khai PHP">}}

Đây là một công việc rất quan trọng để triển khai ứng dụng trên máy chủ sau khi phát triển. Các tính năng mới và sửa lỗi thường được các nhóm phát hành. Vì vậy, tốt hơn là các nhóm tốt hơn là loại bỏ công việc thủ công và tự động hóa quá trình triển khai phần mềm*  ***. Nó sẽ cho phép các nhóm phần mềm tập trung vào các nhiệm vụ quan trọng hơn. Có một số công cụ triển khai nguồn mở** ngoài kia nhưng chúng tôi sẽ tập trung vào **Triển khai PHP**  trong hướng dẫn này. Chúng tôi sẽ bao gồm phần sau trong bài này.
* [  **Trình triển khai**  ][1]
* [  **Cài đặt triển khai**  ][2]
* [  **Triển khai ứng dụng PHP**  ][3]
* [  **Kết luận**  ][4]

## Trình triển khai là gì {#What}

. Nó cho phép các nhóm phần mềm để tự động hóa quy trình công việc triển khai cho các ứng dụng dựa trên PHP. Nó rất đơn giản để cài đặt và dễ sử dụng. Bất cứ ai từ người mới bắt đầu đến trải nghiệm cấp độ chuyên gia đều có thể nhanh chóng sử dụng nó để triển khai các ứng dụng PHP. Trình triển khai đi kèm với các công thức/tập lệnh vượt trội cho các khung PHP phổ biến, CMS và phần mềm giỏ hàng. Hơn nữa, bạn có thể thực hiện  **triển khai Laravel** với công cụ triển khai nguồn mở này  **. Nhà phát triển có thể sử dụng các công thức nấu ăn tích hợp cho các dự án của họ và sử dụng chúng để triển khai. Hơn nữa, bạn có thể dễ dàng tạo tập lệnh cài đặt/triển khai với trình hướng dẫn triển khai**  PHP **. Hơn nữa, công cụ triển khai miễn phí**  này**cung cấp các tính năng tuyệt vời như triển khai thời gian xuống, rollback sang phiên bản trước, SSH, thực hiện song song và nhiều hơn nữa.

## Cài đặt triển khai {#Installing}

  * Trình triển khai phụ thuộc vào PHP. Bạn nên đảm bảo rằng PHP đang chạy trên máy chủ của bạn. Tuy nhiên, bạn có thể sử dụng lệnh bên dưới để cài đặt PHP trên Ubuntu.
```
sudo apt-get install php
```
  * Chạy bên dưới các lệnh từng người một để cài đặt triển khai.
```
curl -LO https://Deployer.org/Deployer.phar
sudo mv Deployer.phar /usr/local/bin/dep
sudo chmod +x /usr/local/bin/dep
```

## Triển khai ứng dụng PHP {#Deploy}

Thực hiện theo các hướng dẫn từng bước tới  **Triển khai ứng dụng PHP**  với Trình triển khai.
  * Tạo một thư mục cho người triển khai và điều hướng đến thư mục mới được tạo.
```
sudo mkdir deployer
cd deployer
```
  * Chạy lệnh bên dưới để tạo tập lệnh cài đặt
```
dep init
```
  * Bạn sẽ được nhắc với màn hình dưới đây. Đây là một trình hướng dẫn triển khai để tạo tập lệnh cài đặt cơ bản.

{{< figure align=center src="images/deployer-1.png" alt="">}}

  * Đầu tiên, bạn cần chọn loại dự án bằng cách nhập một số. Bạn có thể nhập 0, nếu bạn không chắc chắn về loại dự án hoặc chỉ làm quen với người triển khai.
  * Thứ hai, bạn cần cung cấp đường dẫn kho Git. Đó là một bước tùy chọn, bạn có thể bỏ qua nó và thêm một đường dẫn sau.
  * Trong bước cuối cùng, bạn có thể chia sẻ thông tin với cộng đồng triển khai bằng cách chọn Có hoặc nhập không để bỏ qua.
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
Bạn phải thay đổi các biến sau để triển khai ứng dụng PHP của mình.
*  **Đặt (‘Ứng dụng,‘ My_Project,);**  - Đặt tên ứng dụng.
***Đặt (‘Kho lưu trữ ,, Bạn phải đặt khóa triển khai cho kho lưu trữ GitHub của bạn. Bạn có thể tìm kiếm cách tạo khóa SSH tại máy chủ, nếu bạn không quen với nó.
***Máy chủ (‘Project.com,)
    -> Đặt (‘Triển khai_Path,‘ ~/{{Ứng dụng}} Nó sẽ trông giống như/var/www/html/triển khai.
Cuối cùng, chạy lệnh dưới đây để triển khai ứng dụng PHP của bạn.
```
dep deployer
```
Nếu bạn tìm thấy bất kỳ vấn đề nào với bản phát hành mới và muốn quay lại thay đổi. Bạn có thể làm điều đó bằng cách chỉ chạy lệnh bên dưới.
```
dep rollback
```

## Phần kết luận {#Phần kết luận}

Chúng tôi đã thảo luận về việc triển khai và cách cài đặt nó trong hướng dẫn này. Hơn nữa, chúng tôi đã tạo hướng dẫn đầy đủ để triển khai ứng dụng dựa trên PHP từ kho lưu trữ GitHub. Hy vọng, bài đăng trên blog này sẽ giúp bạn bắt đầu  **Triển khai ứng dụng PHP** với Trình triển khai. Hơn nữa, chúng tôi sẽ viết thêm về công cụ triển khai **PHP này**  trong các hướng dẫn sắp tới.
Cuối cùng, [  **containerize.com** ][6] đang trong một quá trình viết bài đăng trên blog nhất quán trên các sản phẩm nguồn mở mới nhất. Do đó, hãy giữ liên lạc với các công cụ triển khai [ ****này**  ][7] cho các bản cập nhật mới nhất.

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
* [  **Triển khai**  ][8]
* [  **Jenkins**  ][9]
* [  **drone**  ][10]
* [  **Capistrano**  ][11]
* [  **Rancher**  ][12]
* [  **Concference**  ][13]
* [  **Ansible**  ][14]
* [  **GOCD**  ][15]
* [  **Top 5 công cụ triển khai nguồn mở vào năm 2021**  ][16]
* [  **Tích hợp liên tục và triển khai liên tục từ Máy chủ điều khiển nguồn**  ][17]



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
