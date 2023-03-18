---
title: "2021年のトップ5オープンソースシングルサインオンソフトウェア" 
seoTitle: "2021年のトップ5オープンソースシングルサインオンソフトウェア" 
description: "エンタープライズレベルの無料シングルサインオンソフトウェアのリストを確認してください。これらのオープンソースSSOソリューションには、IdentityServer、keycloakが含まれます。 CAS、Authelia、およびWSO2。" 
date: Fri, 29 Jan 2021 05:46:42 +0000
author: muhammadmustafa
summary: "シングルサインオンソフトウェアは、すべてのユーザーアカウントとITシステムの中央ログインを提供します。セキュリティと透明性を提供することにより、ユーザーエクスペリエンスを近代化します。" 
url: /ja/top-5-open-source-single-sign-on-software-in-the-year-2021/
categories: ['Single Sign-On']
---

## シングルサインオンソフトウェアは、すべてのユーザーアカウントとITシステムの中央ログインを提供します。セキュリティと透明性を提供することにより、ユーザーエクスペリエンスを近代化します。

{{< figure align=center src="images/sso.png" alt="シングルサインオンソフトウェア">}}


## 概要
大規模な組織のユーザーは、**シングルサインオン（SSO）**ソフトウェアを使用してシームレスにデジタルリソースにアクセスします。 ** SSO **ソフトウェアを使用したアイデンティティとアクセス管理は、日常的な事業運営の不可欠な部分になりました。このブログ投稿では、次のトップ5で人気のあるオープンソースシングルサインオンソフトウェアの一部を説明します。
  *** [IdentityServer] [1] **
  *** [keycloak] [2] **
  *** [cas] [3] **
  *** [authelia] [4] **
  *** [WSO2] [5] **
  *** [結論] [6] **

## IdentityServer {#IdentityServer}
[** IdentityServer **] [7]は、オープンソースの無料シングルサインオンソフトウェアです。これは、OpenID ConnectとOAuth 2に基づくクロスプラットフォームフレームワークです。さらに、このオープンソースソフトウェアは、複数のアプリケーションに中央認証と承認機能を提供します。フェデレーションされたアイデンティティ、複数のフロー、およびAPI承認をサポートします。さらに、この**セルフホスティングソフトウェア**を使用すると、ユーザーは多くのアプリにわたってユーザー名/パスワードの単一のセットでログインできます。ただし、** IdentityServer **はC#で記述されており、そのソースコードはすべて[Github] [8]で入手できます。
顕著な特徴は次のとおりです。
  *請求ベースのプロバイダー
  *クロスプラットフォーム
  * UIカスタマイズ
  * APIのアクセス制御
  *シングルサインオン /サインアウト
[** IdentityServerの詳細**] [9]

## keycloak {#keycloak}
[** keycloak **] [10]は、OpenID Connect、OAuth2.0、およびSAML2.0に基づいた別のフリーソフトウェアです。 WebアプリケーションとWebサービス全体で** SSO **機能を提供します。何よりも、このオープンソースソフトウェアは、** ldap **とActive Directoryとの統合を提供します。ユーザーが役割、許可、セッションを管理できる論理的なユーザーインターフェイスがあります。さらに、この**無料ソリューション**は、Java、JavaScript、C#などの多くの言語にクライアントライブラリを提供します。 ** keycloak **は主にJavaで書かれており、JavaScriptやHTMLなどの他の言語からの入力はほとんどありません。そのソースコードは[Github] [11]で利用できます。
keycloakには次の重要な機能があります。
  *クライアントアダプターを提供します
  *ユーザーフレンドリーUI
  *サービスとしての認証
  * LDAPとの統合
  * Active Directoryとの統合
[** keycloakの詳細**] [12]

## CAS {#CAS}
[** CAS **] [13]は、委任された認証を備えたオープンソースSSOソフトウェアです。さらに、それは多言語であり、チケットベースのプロトコルを使用して中央認証サービスを考え出します。このフリーソフトウェアは、クライアントサーバーアーキテクチャに基づいて構築されています。 ** Central Authentication Service（CAS）** OpenID、OAuth、OpenID Connect、REST、WSFEDERATION、SAMLなどの多くのプロトコルをサポートしています。とりわけ、サードパーティアプリと統合するための包括的なシステムがあります。この**シングルサインオン**ソフトウェアはJavaで記述されています。ただし、そのソースコードは[Github] [14]で利用可能で、開発と展開に関するすべてのドキュメントがあります。
CASは次の重要な機能を提供します。
  *多言語
  *マルチファクター認証
  *多くの承認メカニズム（例：ABAC、時間/日付、休息）
  *監視と統計を管理するためのUI
  *パスワード管理
[** CASの詳細**] [15]

## authelia {#authelia}
[** authelia **] [16]は、非常にリッチされたスケーラブルなSSOソフトウェアです。優れたセキュリティを提供し、シングルサインオンおよびログインレギュレーション能力を提供します。この**オープンソースソフトウェア**は、LDAPとActive Directoryのサポートも提供します。さらに、ユーザーを簡単にナビゲートできる直感的なユーザーインターフェイスがあります。さらに、** Google Authenticator ** OTPに基づいた2要素認証を提供します。この**フリーソフトウェア**は、nginxなどの逆プロキシで動作します。ただし、AutheliaはGO Languageで書かれており、すべてのソースコードはすべて[GitHub] [17]で入手できます。
Autheliaは、次の重要な機能を思いつきます。
  * 2f Yubikeyによる認証
  * ID検証
  *ブルートフォース攻撃をブロックします
  *逆プロキシで動作します
  *デュオで通知をプッシュします
** [Autheliaの詳細] [18] **

## WSO2 {#WSO2}
[** WSO2 **] [19]は、広く使用されている別のオープンソースIDおよびアクセス管理システムです。認証を提供するために、ほぼすべての一般的なアイデンティティ標準をサポートします。他のアプリケーションとの統合のためにAPIエンドパイントを公開しています。 ** WSO2 **は、非常にカスタマイズ可能な**ユーザーフレンドリーなインターフェイス**を思いつきます。さらに、このオープンソースソフトウェアは、2要素認証も提供します。ただし、主にJavaで記述されており、そのすべてのソースコードは、[Github] [20]で開発と展開に関するドキュメントで入手できます。
WSO2は次の重要なポイントを提供します。
  * ハイパフォーマンス
  *クラウド統合
  * フレキシブル
  *インバウンド/アウトバウンドプロビジョニング
  * IDプロバイダー
** [WSO2] [21]の詳細をご覧ください**

## 結論{#conclusion}
このブログ投稿で言及されているオープンソース** SSOソフトウェア**のほぼすべては、エンタープライズレベルで広く使用されています。あなたがビジネスのための最良の**シングルサインのソフトウェア**を選択している場合は、この記事を深く説明することをお勧めします。
最後に、[** containerize.com **] [22]は、さらなるオープンソース製品に関する記事を書いています。したがって、定期的な更新については、[シングルサインオン] [23]カテゴリに連絡してください。

## 探検
  *** [IdentityServer] [24] **
  *** [keycloak] [25] **
  *** [cas] [26] **
  *[** authelia **] [27]
  *** [wso2] [28] **
  *** [OpenIdentityPlatform] [29] **
  *** [Freeipa] [30] **
  *** [ビジネスの成長を改善するためにSSOシステムを活用する方法] [31] **
  *** [無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化] [32] **
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
