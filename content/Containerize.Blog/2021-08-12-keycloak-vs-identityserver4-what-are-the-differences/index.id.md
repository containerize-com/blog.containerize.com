---
title: "Keycloak vs IdentityServer4 | Apa perbedaannya?" 
seoTitle: "Keycloak vs IdentityServer4 | Apa perbedaannya?" 
description: "Posting blog ini adalah tentang perbandingan dua server identitas open source terkemuka Keycloak vs IdentityServer4. Kedua perangkat lunak itu diselenggarakan sendiri dan berfitur kaya." 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "Keycloak dan IdentityServer4 adalah penyedia identitas open source yang menawarkan tanda tunggal pada layanan untuk mengakses sumber daya. Mari kita bandingkan dua perangkat lunak SSO ini." 
url: /id/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## Keycloak dan IdentityServer4 adalah penyedia identitas open source yang menawarkan tanda tunggal pada layanan untuk akses sumber daya. Mari kita bandingkan dua perangkat lunak SSO ini.

{{< figure align=center src="images/open-source-sso.png" alt="Keycloak vs IdentityServer4">}}


## Ringkasan
Di masa lalu, kami menerbitkan beberapa posting blog tentang topik-topik seperti cara memanfaatkan sistem SSO untuk pertumbuhan bisnis yang lebih baik, dan 5 perangkat lunak masuk tunggal open source pada tahun 2021. Artikel-artikel ini menggambarkan perangkat lunak SSO open source yang banyak digunakan dannya Dampak inti pada bisnis. Namun, manajemen pengguna adalah aspek paling penting dari aplikasi apa pun. Di dunia teknologi modern, cybersecurity adalah topik hangat. Ada banyak aplikasi yang dikunjungi pengguna, masuk, dan keluar. Pengguna dengan beberapa set kredensial lebih rentan dan target mudah cybertacks.
Oleh karena itu, selalu merupakan ide yang baik untuk mengakses sumber daya menggunakan satu set kredensial. Perangkat lunak masuk tunggal memungkinkan pengguna untuk masuk ke beberapa aplikasi menggunakan nama pengguna dan kata sandi tunggal. Pengguna hanya akan masuk satu kali dan dapat mengakses banyak aplikasi tanpa masuk lagi. Pendekatan ini mendapatkan popularitas hari demi hari karena komunitas open source sedang mengembangkan penyedia identitas open source seperti [IdentityServer4] [1] dan [Keycloak] [2]. Dalam posting blog ini, kami akan melalui dua solusi SSO open source teratas dan akan membandingkan fitur dan lingkup karena judulnya menyarankan Keycloak vs IdentityServer4. Poin -poin berikut akan dibahas.
  *** [Pengenalan singkat IdentityServer4] [3] **
  *** [Apa itu Keycloak?] [4] **
  *** [Perbandingan Keycloak & IdentityServer4] [5] **
  *** [Kesimpulan] [6] **

## Pengenalan singkat dari IdentityServer4 {#intro}
[IdentityServer4] [1] adalah perangkat lunak SSO open source berdasarkan OpenID Connect dan OAuth 2.0. Alat gratis ini ditulis dalam .NET Framework (4.5.x) dan .NET Core untuk menyediakan layanan masuk tunggal di beberapa aplikasi. Sebagai server otentikasi, ia menyediakan token JWT yang dapat digunakan untuk mengakses sumber daya digital. Ini menawarkan banyak ketentuan seperti kontrol akses untuk API, kustomisasi antarmuka pengguna, otorisasi API, dan penyedia berbasis klaim. Lebih lanjut, itu fleksibel, dapat diperluas, dan dilengkapi dengan kemampuan hosting sendiri. Selain itu, ini mendukung banyak aliran dan identitas federasi seperti Google, Facebook, Twitter, dan jejaring sosial lainnya.
Semua kode sumber perangkat lunak masuk tunggal gratis ini tersedia di [GitHub] [7]. Oleh karena itu, pengguna dapat melalui semua dokumentasi mengenai penyebaran dan pengembangan.

## Apa itu Keycloak? {#kunci}
[Keycloak] [2] adalah solusi otentikasi lain yang banyak digunakan. Ini menawarkan identitas dan manajemen akses menggunakan OpenID Connect, OAuth2.0, dan SAML 2.0. Perangkat lunak gratis ini menyediakan UI yang ramah pengguna untuk mengelola pengguna, peran, konfigurasi, dan sesi. Selain itu, ia menyediakan integrasi dengan aplikasi pihak ketiga seperti LDAP dan Active Directory. Pengguna dapat memanfaatkan manajemen pengguna terpusat dengan skalabilitas dan ketersediaan yang ditingkatkan. Di atas segalanya, ini menyediakan perpustakaan klien untuk integrasi bersama dengan banyak fitur seperti login sosial, federasi pengguna, manajemen terpusat, kebijakan kata sandi, pengelompokan, dan adaptor. Semua kode sumber dari tanda tunggal gratis ini pada perangkat lunak tersedia di [GitHub] [8]. Oleh karena itu, pengguna dapat melalui semua dokumentasi mengenai penyebaran dan pengembangan.

## Perbandingan Keycloak & IdentityServer4 {#Comp}
Di bagian artikel Keycloak vs IdentityServer4 ini, kami akan membandingkan dua penyedia identitas open source ini dengan melihat ke dalam fitur dan karakteristik lainnya dengan mencakup poin -poin berikut.
** Berdiri Komunitas **: Kedua perangkat lunak SSO gratis ini telah diungkapkan dengan baik di komunitas. Namun, Keycloak memiliki statistik yang lebih baik di GitHub dibandingkan dengan IdentityServer4. Keycloak telah mengamankan 9K plus bintang dan stand IdentityServer dengan 3K plus bintang di GitHub. Sejauh menyangkut dokumentasi, kedua solusi otentikasi gratis datang dengan dokumentasi komprehensif mengenai penyebaran dan dokumentasi.
** Fitur **: Pertama, Keycloak dan IdentityServer4 didasarkan pada OpenID Connect dan OAuth2.0. Namun, Keycloak menggunakan protokol standar lain SAML2.0. Keycloak hadir dengan antarmuka pengguna yang dapat disesuaikan dan memberikan integrasi dengan LDAP dan Active Directory. [IdentityServer4] [1] menggunakan OIDC, yang merupakan lapisan otentikasi di atas OAuth2 untuk mencapai SSO. Kedua perangkat lunak SSO gratis dilengkapi dengan gambar Docker dan pengembang dapat mengatur menggunakan Docker. Selain itu, IdentityServer4 ringan dibandingkan dengan Keycloak.
** Tech Stack **: Sejauh menyangkut teknologi, Keycloak terutama ditulis di Java dengan sedikit masukan bahasa lain seperti JavaScript, HTML, dan beberapa lagi. Kedua, IdentityServer4 terutama ditulis C# dengan input beberapa bahasa lain seperti HTML, dan SCSS.
** Extensibility **: Ini adalah salah satu karakteristik utama dari setiap perangkat lunak open source dan baik ramah pengembang perangkat lunak SSO ini. Perangkat lunak ini memberikan integrasi dengan perpustakaan pihak ketiga. Selain itu, Keycloak menawarkan adaptor klien yang ditulis dalam Java dan JavaScript.
** Keamanan: ** Keycloak dan IdentityServer4 telah menerapkan mekanisme keamanan. Lebih lanjut, IdentityServer4 menggunakan token pembawa untuk tujuan otorisasi.

## kesimpulan {#conclusion}
Ini adalah akhir dari posting blog Keycloak vs IdentityServer4 ini. Kami melewati beberapa aspek terkemuka dari kedua sistem SSO gratis dan menguraikan beberapa fitur utama. Oleh karena itu, Anda dapat menarik kesimpulan sendiri tentang perangkat lunak masuk tunggal gratis mana yang lebih baik. Artikel ini pasti akan membantu Anda membuat pilihan yang tepat untuk produk yang tepat untuk bisnis Anda. Selain itu, jika Anda sangat menyadari kasus penggunaan Anda maka pengambilan keputusan menjadi tugas yang mudah. Selanjutnya, Anda selalu memilih perangkat lunak yang cocok dengan kebutuhan Anda.
Kedua perangkat lunak SSO ini memberikan kemudahan bagi organisasi dengan kemudahan mengakses sumber daya. Organisasi memastikan ketersediaan sumber daya dengan memasang perangkat lunak masuk tunggal yang baik. USRES tidak perlu membawa beberapa set kredensial; Sebaliknya mereka dapat menggunakan satu set kredensial, masuk hanya satu kali dan setelah itu, mereka dapat mengakses beberapa situs web tanpa masuk lagi. Ini memberikan kepercayaan diri, keamanan, dan transparansi ke seluruh sistem
Akhirnya, ** [containerize.com] [9] ** telah menulis pada produk open source lebih lanjut. Harap tetap berhubungan dengan ini [****] [10] ** [Sign-on] [11] ** Kategori untuk pembaruan rutin. Selain itu, Anda dapat mengikuti kami di akun media sosial kami [Facebook] [12], [LinkedIn] [13], dan [Twitter] [14].

## Mengeksplorasi
Anda mungkin menemukan tautan berikut yang relevan:
  *** [IdentityServer] [15] **
  *** [Keycloak] [16] **
  *** [cas] [17] **
  *** [authelia] [18] **
  *** [wso2] [19] **
  *** [OpenIdentityPlatform] [20] **
  *** [freeipa] [21] **
  *** [Top 5 Open Source Single Sign-On Software Pada tahun 2021] [22] **
  *** [Cara memanfaatkan sistem SSO untuk pertumbuhan bisnis yang lebih baik] [23] **
  *** [Otomatis Operasi Bisnis Menggunakan Perangkat Lunak Sumber Gratis dan Terbuka] [24] **
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
