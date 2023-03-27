---
title: "KeyCloak vs IdentityServer4 | Sự khác biệt là gì?" 
seoTitle: "KeyCloak vs IdentityServer4 | Sự khác biệt là gì?" 
description: "Bài đăng trên blog này là về so sánh hai máy chủ nhận dạng nguồn mở hàng đầu KeyCloak vs IdentityServer4. Cả hai phần mềm đều tự lưu trữ và làm giàu tính năng." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeyCloak và IdentityServer4 là các nhà cung cấp nhận dạng nguồn mở cung cấp một dấu hiệu đơn trên các dịch vụ để truy cập tài nguyên. Hãy so sánh hai phần mềm SSO này." 
url: /vi/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## KeyCloak và IdentityServer4 là các nhà cung cấp nhận dạng nguồn mở cung cấp một dấu hiệu đơn trên các dịch vụ để truy cập tài nguyên. Hãy để so sánh hai phần mềm SSO này.

{{< figure align=center src="images/open-source-sso.png" alt="KeyCloak vs IdentityServer4">}}


## Tổng quan
Trong quá khứ gần, chúng tôi đã xuất bản một số bài đăng trên blog về các chủ đề như cách tận dụng hệ thống SSO để tăng trưởng kinh doanh tốt hơn và phần mềm đăng nhập đơn nguồn mở top 5 trong năm 2021. Những bài viết này mô tả phần mềm SSO nguồn mở được sử dụng rộng rãi và phần mềm SSO và nó Tác động cốt lõi đến kinh doanh. Tuy nhiên, quản lý người dùng là khía cạnh quan trọng nhất của bất kỳ ứng dụng nào. Trong thế giới công nghệ hiện đại, an ninh mạng là một chủ đề nóng. Có hàng tấn ứng dụng mà người dùng truy cập, đăng nhập và đăng xuất. Người dùng có nhiều bộ thông tin xác thực dễ bị tổn thương hơn và là mục tiêu dễ dàng của các cuộc tấn công mạng.
Do đó, luôn luôn là một ý tưởng tốt để truy cập các tài nguyên bằng một bộ thông tin đăng nhập. Phần mềm đăng nhập một lần cho phép người dùng đăng nhập vào nhiều ứng dụng bằng một tên người dùng và mật khẩu. Người dùng sẽ chỉ đăng nhập một lần và có thể truy cập nhiều ứng dụng mà không cần đăng nhập lại. Cách tiếp cận này đang trở nên phổ biến từng ngày vì cộng đồng nguồn mở đang phát triển các nhà cung cấp nhận dạng nguồn mở như [IdentityServer4][1] và [KeyCloak][2]. Trong bài đăng trên blog này, chúng tôi sẽ đi qua hai giải pháp SSO nguồn mở hàng đầu và sẽ so sánh các tính năng và phạm vi như tiêu đề cho thấy KeyCloak vs IdentityServer4. Các điểm sau đây sẽ được bảo hiểm.
* **[Giới thiệu ngắn gọn về IdentityServer4][3]** 
* **[Keycloak là gì?][4]** 
* **[So sánh KeyCloak & IdentityServer4][5]** 
* **[Kết luận][6]** 

## Giới thiệu ngắn gọn về IdentityServer4 {#intro}

[IdentityServer4][1] là một phần mềm SSO nguồn mở dựa trên OpenID Connect và OAuth 2.0. Công cụ miễn phí này được viết trong .NET Framework (4.5.x) và .NET Core để cung cấp các dịch vụ đăng nhập một lần trên nhiều ứng dụng. Là một máy chủ xác thực, nó cung cấp mã thông báo JWT có thể được sử dụng để truy cập các tài nguyên kỹ thuật số. Nó cung cấp nhiều điều khoản như kiểm soát truy cập cho API, tùy chỉnh giao diện người dùng, ủy quyền API và nhà cung cấp dựa trên yêu cầu. Hơn nữa, nó linh hoạt, có thể mở rộng và đi kèm với khả năng tự lưu trữ. Ngoài ra, nó hỗ trợ nhiều luồng và danh tính được liên kết như Google, Facebook, Twitter và các mạng xã hội khác.
Tất cả mã nguồn của phần mềm đăng nhập đơn miễn phí này đều có sẵn trên [GitHub][7]. Do đó, người dùng có thể đi qua tất cả các tài liệu liên quan đến việc triển khai và phát triển.

## Keycloak là gì? {#key}

[KeyCloak][2] là một giải pháp xác thực được sử dụng rộng rãi khác. Nó cung cấp danh tính và quản lý truy cập bằng cách sử dụng OpenID Connect, OAuth2.0 và SAML 2.0. Phần mềm miễn phí này cung cấp giao diện người dùng thân thiện với người dùng để quản lý người dùng, vai trò, cấu hình và phiên. Hơn nữa, nó cung cấp tích hợp với các ứng dụng của bên thứ ba như LDAP và Active Directory. Người dùng có thể tận dụng quản lý người dùng tập trung của mình với khả năng mở rộng và tính khả dụng nâng cao. Trên hết, nó cung cấp các thư viện khách cho các tích hợp cùng với nhiều tính năng như đăng nhập xã hội, liên đoàn người dùng, quản lý tập trung, chính sách mật khẩu, phân cụm và bộ điều hợp. Tất cả mã nguồn của dấu hiệu đơn miễn phí này trên phần mềm có sẵn trên [GitHub][8]. Do đó, người dùng có thể đi qua tất cả các tài liệu liên quan đến việc triển khai và phát triển.

## So sánh KeyCloak & IdentityServer4 {#comp}

Trong phần của bài viết KeyCloak vs IdentityServer4 này, chúng tôi sẽ so sánh hai nhà cung cấp nhận dạng nguồn mở này bằng cách xem xét các tính năng và các đặc điểm khác bằng cách bao gồm các điểm sau.
**Đứng cộng đồng** : Cả hai phần mềm SSO miễn phí này đều được công bố tốt trong cộng đồng. Tuy nhiên, KeyCloak có số liệu thống kê tốt hơn về GitHub so với danh tính trình tạo. Keycloak đã bảo đảm 9K Plus Stars và IdentityServer đứng với 3K cộng với các ngôi sao trên GitHub. Theo như tài liệu liên quan, cả hai giải pháp xác thực miễn phí đều đi kèm với tài liệu toàn diện về triển khai và tài liệu.
**Các tính năng** : Đầu tiên, KeyCloak và IdentityServer4 dựa trên OpenID Connect và OAuth2.0. Tuy nhiên, KeyCloak sử dụng một giao thức tiêu chuẩn khác SAML2.0. KeyCloak đi kèm với giao diện người dùng có thể tùy chỉnh và cung cấp tích hợp với LDAP và Active Directory. [IdentityServer4][1] sử dụng OIDC, đây là lớp xác thực trên đỉnh OAuth2 để đạt được SSO. Cả phần mềm SSO miễn phí đều đi kèm với hình ảnh docker và nhà phát triển có thể thiết lập bằng Docker. Ngoài ra, IdentityServer4 có trọng lượng nhẹ so với KeyCloak.
**Tech Stack** : Theo như các công nghệ có liên quan, KeyCloak chủ yếu được viết bằng Java với rất ít đầu vào của các ngôn ngữ khác như JavaScript, HTML, và một số khác. Thứ hai, IdentityServer4 chủ yếu được viết C# với đầu vào của một số ngôn ngữ khác như HTML và SCSS.
**Khả năng mở rộng** : Đây là một trong những đặc điểm chính của bất kỳ phần mềm nguồn mở nào và cả hai nhà phát triển phần mềm SSO này đều thân thiện với nhà phát triển. Các phần mềm này cung cấp tích hợp với các thư viện của bên thứ ba. Hơn nữa, KeyCloak cung cấp các bộ điều hợp máy khách được viết bằng Java và JavaScript.
**Bảo mật:**  KeyCloak và IdentityServer4 đã triển khai các cơ chế bảo mật. Hơn nữa, IdentityServer4 sử dụng mã thông báo của người mang cho mục đích ủy quyền.

## Phần kết luận {#Phần kết luận}

Đây là kết thúc của bài đăng trên blog KeyCloak vs IdentityServer4 này. Chúng tôi đã trải qua một số khía cạnh nổi bật của cả hai hệ thống SSO miễn phí và được xây dựng trên một số tính năng chính. Do đó, bạn có thể tự mình đưa ra kết luận về phần mềm đăng nhập đơn miễn phí nào tốt hơn. Bài viết này chắc chắn sẽ giúp bạn đưa ra lựa chọn đúng cho sản phẩm phù hợp cho doanh nghiệp của bạn. Hơn nữa, nếu bạn nhận thức rõ về các trường hợp sử dụng của mình thì việc ra quyết định trở thành một nhiệm vụ dễ dàng. Hơn nữa, bạn luôn chọn phần mềm phù hợp với yêu cầu của bạn.
Cả hai phần mềm SSO này đều cung cấp dễ dàng cho tổ chức với sự dễ dàng truy cập tài nguyên. Các tổ chức đảm bảo tính khả dụng của các tài nguyên bằng cách cài đặt phần mềm đăng nhập một lần tốt. Usres không cần phải mang nhiều bộ thông tin đăng nhập; Thay vào đó, họ có thể sử dụng một bộ thông tin đăng nhập, đăng nhập chỉ một lần và sau đó, họ có thể truy cập nhiều trang web mà không cần đăng nhập lại. Nó mang lại sự tự tin, bảo mật và minh bạch cho toàn bộ hệ thống
Cuối cùng, **[Containererize.com][9]**đã viết trên các sản phẩm nguồn mở tiếp theo. Vui lòng giữ liên lạc với [****][10]**[Đăng nhập một lần][11]**Danh mục để cập nhật thông thường. Hơn nữa, bạn có thể theo dõi chúng tôi trên các tài khoản truyền thông xã hội của chúng tôi [Facebook][12], [LinkedIn][13] và [Twitter][14].

## Khám phá
Bạn có thể tìm thấy các liên kết sau có liên quan:
* **[IdentityServer][15]** 
* **[keycloak][16]** 
* **[CAS][17]** 
* **[Authelia][18]** 
* **[WSO2][19]** 
* **[OpenIdentityPlatform][20]** 
* **[freeipa][21]** 
* **[Top 5 phần mềm đăng nhập đơn nguồn mở trong năm 2021][22]** 
* **[Cách tận dụng hệ thống SSO để tăng trưởng kinh doanh tốt hơn][23]** 
* **[Tự động hóa hoạt động kinh doanh bằng phần mềm nguồn mở và miễn phí][24]** 



[1]: https://products.containerize.com/single-sign-on/identity-server/
[2]: https://products.containerize.com/single-sign-on/keycloak/
[3]: #intro
[4]: #key
[5]: #comp
[6]: #Conclusion
[7]: https://github.com/IdentityServer
[8]: https://github.com/keycloak/keycloak
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/video-conferencing/
[11]: https://products.containerize.com/single-sign-on/
[12]: https://web.facebook.com/containerize
[13]: https://www.linkedin.com/company/containerize/
[14]: https://twitter.com/containerize_co
[15]: https://products.containerize.com/single-sign-on/identity-server
[16]: https://products.containerize.com/single-sign-on/keycloak
[17]: https://products.containerize.com/single-sign-on/cas
[18]: https://products.containerize.com/single-sign-on/authelia
[19]: https://products.containerize.com/single-sign-on/wso2
[20]: https://products.containerize.com/single-sign-on/openidentityplatform
[21]: https://products.containerize.com/single-sign-on/freeipa
[22]: https://blog.containerize.com/single-sign-on/top-5-open-source-single-sign-on-software-in-the-year-2021/
[23]: https://blog.containerize.com/single-sign-on/how-to-leverage-sso-solution-for-better-business-growth/
[24]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
