---
title: "Top 5 phần mềm đăng nhập một nguồn mở trong năm 2021" 
seoTitle: "Top 5 phần mềm đăng nhập một nguồn mở trong năm 2021" 
description: "Kiểm tra danh sách phần mềm đăng nhập đơn miễn phí cấp doanh nghiệp. Các giải pháp SSO nguồn mở này bao gồm IdentityServer, KeyCloak. CAS, Authelia và WSO2." 
date: Fri, 29 Jan 2021 05:46:42 +0000
author: muhammadmustafa
summary: "Phần mềm đăng nhập một lần cung cấp thông tin đăng nhập trung tâm cho tất cả các hệ thống tài khoản người dùng và CNTT. Nó hiện đại hóa trải nghiệm người dùng bằng cách cung cấp bảo mật và minh bạch." 
url: /vi/top-5-open-source-single-sign-on-software-in-the-year-2021/
categories: ['Single Sign-On']
---

## Phần mềm đăng nhập một lần cung cấp một thông tin đăng nhập trung tâm cho tất cả các tài khoản người dùng và hệ thống CNTT. Nó hiện đại hóa trải nghiệm người dùng bằng cách cung cấp bảo mật và minh bạch.

{{< figure align=center src="images/sso.png" alt="Phần mềm đăng nhập một lần">}}


## Tổng quan
Người dùng trong các tổ chức lớn truy cập tài nguyên kỹ thuật số một cách liền mạch bằng cách sử dụng  **phần mềm đăng nhập đơn (SSO)** . Danh tính và quản lý truy cập bằng phần mềm **SSO**  đã trở thành một phần không thể thiếu trong các hoạt động kinh doanh thông thường. Trong bài đăng trên blog này, chúng tôi sẽ trải qua một số phần mềm đăng nhập đơn nguồn mở phổ biến hàng đầu sau đây.
*  **[IdentityServer][1]**  
*  **[keycloak][2]**  
*  **[CAS][3]**  
*  **[Authelia][4]**  
*  **[WSO2][5]**  
*  **[Kết luận][6]**  

## Bản sắc {#Bản sắc}

[  **IdentityServer** ][7] là một phần mềm đăng nhập đơn miễn phí nguồn mở. Đây là một khung đa nền tảng dựa trên OpenID Connect và OAuth 2. Hơn nữa, phần mềm nguồn mở này cung cấp các khả năng xác thực và ủy quyền trung tâm cho nhiều ứng dụng. Nó hỗ trợ danh tính liên kết, nhiều luồng và ủy quyền API. Hơn nữa, phần mềm tự lưu trữ **này cho phép người dùng đăng nhập với một bộ tên người dùng/mật khẩu trên nhiều ứng dụng. Tuy nhiên,**  IdentityServer**được viết bằng C# và tất cả mã nguồn của nó đều có sẵn trên [GitHub][8] cùng với tài liệu liên quan đến triển khai và phát triển.
Sau đây là các tính năng nổi bật:
  * Nhà cung cấp dựa trên yêu cầu
  * Bệnh viện chéo
  * Tùy chỉnh UI
  * Kiểm soát truy cập cho API
  * Đăng nhập /Đăng xuất một lần
[  **Tìm hiểu thêm về IndentityServer**  ][9]

## KEYCLOAK {#KEYCLOAK}

[  **keycloak** ][10] là một phần mềm miễn phí khác dựa trên OpenID Connect, OAuth2.0 và SAML2.0. Nó cung cấp các khả năng  **sso**  trên các ứng dụng web và dịch vụ web. Trên hết, phần mềm nguồn mở này cung cấp tích hợp với  **LDAP**  và Active Directory. Có một giao diện người dùng logic nơi người dùng có thể quản lý vai trò, quyền và phiên. Hơn nữa, giải pháp miễn phí  **này**  cung cấp các thư viện máy khách cho nhiều ngôn ngữ như Java, JavaScript và C#. **keycloak**  chủ yếu được viết bằng Java với ít đầu vào từ các ngôn ngữ khác như JavaScript và HTML. Mã nguồn của nó có sẵn trên [GitHub][11].
KeyCloak có các tính năng chính sau:
  * Cung cấp bộ điều hợp khách hàng
  * UI thân thiện với người dùng
  * Xác thực dưới dạng dịch vụ
  * Tích hợp với LDAP
  * Tích hợp với Active Directory
[  **Tìm hiểu thêm về keycloak**  ][12]

## CAS {#CAS}

[  **CAS** ][13] là phần mềm SSO nguồn mở với xác thực được ủy quyền. Hơn nữa, nó là đa ngôn ngữ và đưa ra các dịch vụ ủy quyền trung tâm bằng cách sử dụng giao thức dựa trên vé. Phần mềm miễn phí này được xây dựng trên kiến ​​trúc máy khách-máy chủ.  **Dịch vụ xác thực trung tâm (CAS)**  hỗ trợ nhiều giao thức như OpenID, OAuth, OpenID Connect, Rest, WSFedation và SAML. Trên hết, có một hệ thống toàn diện để tích hợp với các ứng dụng của bên thứ ba. Phần mềm **đăng nhập**  này được viết bằng Java. Tuy nhiên, mã nguồn của nó có sẵn trên [GitHub][14] với tất cả các tài liệu liên quan đến phát triển và triển khai.
CAS cung cấp các tính năng quan trọng sau:
  * Đa ngôn ngữ
  * Xác thực đa yếu tố
  * Nhiều cơ chế ủy quyền (ví dụ: ABAC, thời gian/ngày, phần còn lại)
  * UI để quản lý giám sát và số liệu thống kê
  * Quản lý mật khẩu
[  **Tìm hiểu thêm về CAS**  ][15]

## Authelia {#Authelia}

[  **Authelia** ][16] là phần mềm SSO rất phong phú và có thể mở rộng. Nó cung cấp bảo mật tuyệt vời và cung cấp khả năng đăng nhập và quy định đăng nhập một lần. Phần mềm nguồn mở  **này**  cũng cung cấp hỗ trợ cho LDAP và Active Directory. Ngoài ra, có một giao diện người dùng trực quan cho phép người dùng điều hướng dễ dàng. Hơn nữa, nó cung cấp xác thực hai yếu tố dựa trên  **Google Authenticator**  OTP. Phần mềm **miễn phí này**  hoạt động với proxy ngược như nginx. Tuy nhiên, Authelia được viết bằng ngôn ngữ GO và tất cả mã nguồn của nó đều có sẵn trên [GitHub][17].
Authelia đưa ra các tính năng chính sau:
  * 2F Xác thực với Yubikey
  * Xác minh danh tính
  * Khối các cuộc tấn công của lực lượng vũ phu
  * Hoạt động với các proxy ngược
  * Đẩy thông báo với Duo
 **[Tìm hiểu thêm về Authelia][18]** 

## WSO2 {#WSO2}

[  **WSO2** ][19] là một hệ thống quản lý truy cập và nhận dạng nguồn mở được sử dụng rộng rãi khác. Nó hỗ trợ hầu hết tất cả các tiêu chuẩn nhận dạng phổ biến để cung cấp xác thực. Nó đã phơi bày các pint API End để tích hợp với các ứng dụng khác. **WSO2**  đưa ra giao diện thân thiện với người dùng****có khả năng tùy biến cao. Hơn nữa, phần mềm nguồn mở này cũng cung cấp xác thực hai yếu tố. Tuy nhiên, nó chủ yếu được viết bằng Java và tất cả các mã nguồn của nó có sẵn trên [GitHub][20] với tài liệu liên quan đến phát triển và triển khai.
WSO2 cung cấp các điểm chính sau:
  * Hiệu suất cao
  * Tích hợp đám mây
  * Linh hoạt
  * Cung cấp trong nước/bên ngoài
  * Nhà cung cấp danh tính
 **[Tìm hiểu thêm về WSO2][21]** 

## Phần kết luận {#Phần kết luận}

Hầu như tất cả các phần mềm nguồn mở  **sso** được đề cập trong bài đăng trên blog này được sử dụng rộng rãi ở cấp độ doanh nghiệp. Nếu bạn đang trong quá trình chọn một dấu hiệu **tốt nhất trên phần mềm**  cho doanh nghiệp thì chúng tôi khuyên bạn nên xem bài viết này sâu sắc.
Cuối cùng, [  **containerize.com**  ][22] đang viết các bài viết trên các sản phẩm nguồn mở hơn nữa. Do đó, vui lòng giữ liên lạc với danh mục [một lần đăng nhập][23] để cập nhật thường xuyên.

## Khám phá
*  **[IdentityServer][24]**  
*  **[keycloak][25]**  
*  **[CAS][26]**  
* [  **Authelia**  ][27]
*  **[WSO2][28]**  
*  **[OpenIdentityPlatform][29]**  
*  **[freeipa][30]**  
*  **[Cách tận dụng hệ thống SSO để tăng trưởng kinh doanh tốt hơn][31]**  
*  **[Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][32]**  



 [1]: #IdentityServer
 [2]: #KeyCloak
 [3]: #CAS
 [4]: #Authelia
 [5]: #WSO2
 [6]: #Conclusion
 [7]: https://products.containerize.com/single-sign-on/identity-server
 [8]: https://github.com/IdentityServer
 [9]: https://identityserver.io/
 [10]: https://products.containerize.com/single-sign-on/keycloak
 [11]: https://github.com/keycloak/keycloak
 [12]: https://www.keycloak.org/
 [13]: https://products.containerize.com/single-sign-on/cas
 [14]: https://github.com/apereo/cas
 [15]: https://apereo.github.io/cas/6.3.x/index.html
 [16]: https://products.containerize.com/single-sign-on/authelia
 [17]: https://github.com/authelia/authelia
 [18]: https://www.authelia.com/
 [19]: https://products.containerize.com/single-sign-on/wso2
 [20]: https://github.com/wso2/product-is
 [21]: http://wso2.github.io/
 [22]: https://www.containerize.com/
 [23]: https://products.containerize.com/single-sign-on/
 [24]: https://products.containerize.com/single-sign-on/identity-server/
 [25]: https://products.containerize.com/single-sign-on/keycloak/
 [26]: https://products.containerize.com/single-sign-on/cas/
 [27]: https://products.containerize.com/single-sign-on/authelia/
 [28]: https://products.containerize.com/single-sign-on/wso2/
 [29]: https://products.containerize.com/single-sign-on/openidentityplatform/
 [30]: https://products.containerize.com/single-sign-on/freeipa/
 [31]: https://blog.containerize.com/single-sign-on/how-to-leverage-sso-solution-for-better-business-growth/
 [32]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
