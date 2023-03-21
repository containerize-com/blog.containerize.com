---
title: "Cách cài đặt webmin với SSL trên Ubuntu 20.04" 
seoTitle: "Cách cài đặt webmin với SSL trên Ubuntu 20.04" 
description: "Webmin là một công cụ quản trị hệ thống dựa trên web cho các hệ thống giống như UNIX. Trong bài viết này, chúng tôi sẽ tìm hiểu cách cài đặt webmin với SSL trên Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "Webmin là một công cụ quản trị hệ thống dựa trên web là một giải pháp thay thế đơn giản cho quản trị hệ thống dòng lệnh. Bài viết này hướng dẫn cách cài đặt webmin" 
url: /vi/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Cách cài đặt webmin">}}


## Webmin là một công cụ quản trị hệ thống dựa trên web là một giải pháp thay thế đơn giản cho quản trị hệ thống dòng lệnh. Bài viết này hướng dẫn cách cài đặt webmin
Với bài viết này, Cách thức cài đặt webmin với SSL trên Ubuntu 20.04, chúng tôi đang bắt đầu loạt hướng dẫn mới về phần mềm và công cụ lưu trữ web. Với webmin, bạn có thể thiết lập tài khoản người dùng, bật chia sẻ tệp, cấu hình cài đặt Apache và DNS và thực hiện nhiều tác vụ liên quan đến lưu trữ web. Nó cho phép bạn quản lý toàn bộ máy chủ lưu trữ web. Nó loại bỏ các rắc rối của việc chỉnh sửa các tệp cấu hình Linux theo cách thủ công. Vì vậy, hãy để Lừa học cách cài đặt webmin với SSL.
  * **[Giới thiệu về webmin][1]**
  *[ **Các tính năng được tô sáng** ][2]
  *[ **Hệ điều hành được hỗ trợ** ][3]
  *[ **Cài đặt webmin trên Ubuntu** ][4]
  *[ **Cài đặt Apache bằng webmin** ][5]
  *[ **Kết luận** ][6]

## Giới thiệu về webmin   {#Intro}
Webmin là một giao diện dựa trên web để quản trị hệ thống cho Linux. Nó giúp bạn quản lý máy chủ lưu trữ của riêng bạn từ xa từ bất kỳ trình duyệt web hiện đại nào. Với webmin, bạn có thể định cấu hình các bên trong hệ điều hành như tài khoản người dùng, Apache, DNS, chia sẻ tệp và nhiều hơn nữa. Webmin cũng cho phép điều khiển nhiều máy thông qua một giao diện duy nhất hoặc đăng nhập liền mạch trên các máy chủ webmin khác trên cùng một mạng con hoặc mạng LAN. Webmin, dựa trên Perl, chạy như quá trình riêng và máy chủ web. Và phần tốt nhất về webmin là nguồn mở và miễn phí 100% và có một cộng đồng nhà phát triển rất thịnh vượng.

## Các tính năng được tô sáng   {#Features}
  * Cho phép bạn tạo và chỉnh sửa miền, bản ghi DNS, tùy chọn liên kết và chế độ xem.
  * Giúp cấu hình tường lửa bằng cách tạo và chỉnh sửa các quy tắc bằng IPFW.
  * Hãy để bạn thiết lập các tập lệnh để chạy vào thời điểm khởi động từ /etc/init.d hoặc /etc/rc.local
  * Bạn có thể lên lịch truyền tệp từ máy chủ sang nhiều máy chủ
  * Cho phép bạn cài đặt các gói RPM, Debian và Solaris trên nhiều máy chủ từ một nguồn
  * Nó cung cấp quyền truy cập vào các báo cáo như sử dụng băng thông, tải lên, tải xuống, khách truy cập, v.v.
  * Bạn có thể tạo đồng thời các công việc theo lịch trình chạy trên nhiều máy chủ
  * Cho phép bạn chạy các lệnh trên nhiều máy chủ cùng một lúc
  * Cho phép bạn thiết lập và chỉnh sửa hạn ngạch người dùng hoặc nhóm cho hệ thống tập tin cục bộ
  * Bao gồm sao lưu và khôi phục hệ thống tập tin bằng cách sử dụng kết xuất và khôi phục gia đình lệnh
  * Sử dụng trình quản lý tệp tương tự như Windows, bạn có thể xem, chỉnh sửa và thay đổi quyền trên các tệp và thư mục trên máy chủ của bạn
  * Bạn có thể định cấu hình máy chủ giao thức vị trí dịch vụ
  * Xem, chỉnh sửa và thay đổi quyền trên các tệp và thư mục trên hệ thống của bạn với trình quản lý tệp giống như Windows
  * Nó giúp thiết lập các đường hầm SSL để mã hóa các dịch vụ như POP3 và IMAP, sử dụng Stunnel Run từ InetD.

## Hệ điều hành được hỗ trợ   {#support}
Bởi vì các hệ điều hành và phân phối Linux giống như UNIX khác nhau sử dụng các vị trí khác nhau cho các tệp cấu hình khác nhau, WebMin chỉ có thể hỗ trợ các hệ thống mà nó đã được cấu hình. Các hệ điều hành sau đây được hỗ trợ bởi phiên bản 1.979 của webmin:
  * Almalinux Linux
  * Linux Alphacore
  * Amazon Linux
  * Aplinux
  * Asianux
  * Máy chủ Asianux
  * BigBlock
  * BSDI
  * Caixa Magica
  * Caldera Openlinux
  * Caldera openlinux eserver
  * Cao Linux
  * Cendio LBS Linux
  * Centos Linux
  * Huy hiệu Citrix
  * Cloudlinux
  * Cloudrouter Linux
  * Cobalt Linux
  * Linux công nghệ kết hợp
  * Conectiva Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * Dec/Compaq OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Tường lửa Endian Linux
  * Fedora Linux
  * FreeBsd
  * Linux chung
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * HP/UX
  * IBM aix
  * Immunix Linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Lycoris Desktop/LX
  * Mac OS X
  * MacOS Catalina
  * MacOS High Sierra
  * MacOS Mojave
  * MacOS Sierra
  * Mageia Linux
  * Mandrake Linux
  * Máy chủ công ty Mandrake Linux
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * Mepis Linux
  * Chủ yếu là
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * OpenSuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * HĐH X.
  * Pardus Linux
  * PCLINUXOS Linux
  * PlayStation Linux
  * Linux Raspbian
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Linux Rocky
  * Sangoma Linux
  * Sci Linux
  * Linux khoa học
  * SCO OpenServer
  * SCO Unixware
  * Linux an toàn
  * SGI IRIX
  * Linux Slackware
  * Slamd64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * Bắt đầu linux
  * Hệ thống máy tính để bàn Sun Java
  * Mặt trời mặt trời
  * SUSE Linux
  * Suse Openexchange Linux
  * SUSE SLES Linux
  * Synology DSM
  * Tao Linux
  * Máy chủ Tawie Linux
  * Máy tính để bàn Thizlinux
  * ThizServer
  * Tinysofa Linux
  * Trustix
  * Trustix SE
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * Linux lùn trắng
  * WhiteBox Linux
  * Wind River Linux
  * Các cửa sổ
  * X/OS Linux
  * Xandros Linux
  * XCP-NG Linux
  * XenServer Linux
  * Linux con chó màu vàng
  * Yoper Linux
Các hệ thống được hỗ trợ tốt nhất tại thời điểm này là Solaris, Linux (đặc biệt là Redhat) và FreeBSD.

## Cài đặt webmin trên ubuntu   {#install}
Để cài đặt webmin, bạn sẽ cần có quyền truy cập vào người dùng với các đặc quyền **root **. Bạn nên thiết lập một người dùng không root với quyền truy cập ** sudo** .
Đầu tiên SSH vào máy chủ của bạn bằng lệnh sau
```
ssh user@server_IP_address
```
Để cài đặt webmin qua _APT-get_, trước tiên bạn phải thêm lưu trữ webmin vào tệp _source.list_ của bạn. Trên máy chủ của bạn, hãy mở tệp _source.list_ trong trình soạn thảo văn bản yêu thích của bạn. Chúng tôi sẽ sử dụng VIM trong hướng dẫn này:
```
sudo vi /etc/apt/sources.list
```
Khi tệp được mở, hãy thêm các dòng sau ở cuối tệp.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Bây giờ thêm khóa GPG webmin vào APT, vì vậy kho lưu trữ nguồn bạn đã thêm sẽ được tin cậy. Lệnh này sẽ làm điều đó:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Trước khi cài đặt webmin, bạn phải cập nhật danh sách gói APT-Get,:
```
sudo apt-get update
```
Bây giờ hãy chạy lệnh apt-get này để cài đặt webmin:
```
sudo apt-get install webmin 
```
Nhập y để xác nhận cài đặt. Sau khi cài đặt hoàn tất, dịch vụ webmin sẽ tự động bắt đầu. Và giao diện web sẽ chạy trên cổng 10000. Bạn có thể truy cập giao diện bằng URL sau.
```
https://server_IP_address:10000
```
Bạn sẽ được nhắc với một cảnh báo cho biết chứng chỉ SSL máy chủ của bạn không được tin cậy. Điều này là do webmin tự động tạo và cài đặt chứng chỉ SSL sau khi cài đặt và chứng chỉ không được cấp bởi cơ quan chứng chỉ được máy tính của bạn tin tưởng. Nó là tốt để tiến hành. Hướng dẫn trình duyệt web của bạn tin tưởng chứng chỉ.
Tại thời điểm này, bạn sẽ thấy màn hình đăng nhập webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Cài đặt webmin">}}

Khi bạn lần đầu tiên đăng nhập vào webmin, bạn sẽ được đưa vào trang  **Thông tin hệ thống** . Nó cung cấp cho bạn một cái nhìn tổng quan về tài nguyên hệ thống của bạn và các thông tin linh tinh khác.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Cài đặt thông tin hệ thống webmin">}}


## Cài đặt Apache bằng webmin   {#install-apache}
Webmin đi kèm với một loạt các mô -đun quản lý các gói phần mềm khác nhau. Để cài đặt Apache bằng WebMin, hãy làm theo các hướng dẫn bên dưới
**Bước 1 **: Trong menu điều hướng, nhấp vào **Các mô-đun không sử dụng  **để mở rộng danh mục, sau đó nhấp vào**   Apache Webserver**.
Nếu bạn chưa cài đặt Apache trên máy chủ, mô -đun sẽ thông báo cho bạn và cung cấp cho bạn cách cài đặt Apache.
**Bước 2 **: Sử dụng  **Bấm vào đây**  Liên kết (trong câu cuối) để cài đặt Apache thông qua APT-Get thông qua webmin.
Sau khi cài đặt Apache hoàn tất, máy chủ của bạn sẽ chạy máy chủ Apache mặc định.

## Kết luận   {#conclusion}
Bài viết này thảo luận ngắn gọn nhiều điều mà webmin có thể làm, webmin là một trong những công cụ tốt nhất để quản lý các máy chủ Linux/UNIX của bạn. Trong hướng dẫn này, chúng tôi cũng đã học cách cài đặt webmin trên Ubuntu, vì chúng tôi đã thảo luận về cách cài đặt Apache trên máy chủ của bạn bằng WebMin.

## Khám phá
  * [Cách cài đặt nhiều phiên bản PHP với NGINX trên Ubuntu][7]
  * [Cách thiết lập và định cấu hình Nginx dưới dạng proxy ngược][8]

  
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
