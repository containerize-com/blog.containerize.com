---
title: "keycloak vs IdentityServer4 |違いは何ですか？" 
seoTitle: "keycloak vs IdentityServer4 |違いは何ですか？" 
description: "このブログ投稿は、2つの主要なオープンソースIdentityサーバーKeycloak vs IdentityServer4の比較に関するものです。どちらのソフトウェアも自己ホストされており、リッチな機能があります。" 
date: Thu, 12 Aug 2021 10:47:02 +0000
author: muhammadmustafa
summary: "KeycloakとIdentityServer4は、リソースにアクセスするためのシングルサインオンサービスを提供するオープンソースIDプロバイダーです。これら2つのSSOソフトウェアを比較しましょう。" 
url: /ja/keycloak-vs-identityserver4-what-are-the-differences/
categories: ['Single Sign-On']
---

## keycloakとdewerver4は、リソースにアクセスするためのシングルサインオンサービスを提供するオープンソースのアイデンティティプロバイダーです。これら2つのSSOソフトウェアを比較しましょう。

{{< figure align=center src="images/open-source-sso.png" alt="keycloak vs IdentityServer4">}}


## 概要
近い過去には、SSOシステムを活用する方法を活用する方法など、2021年のトップ5のオープンソースシングルサインオンソフトウェアなどのトピックに関するいくつかのブログ投稿を公開しました。コアはビジネスに影響を与えます。ただし、ユーザー管理はあらゆるアプリケーションの最も重要な側面です。テクノロジーの現代の世界では、サイバーセキュリティはホットな話題です。ユーザーがアクセス、ログイン、ログアウトするアプリケーションがたくさんあります。複数のセットの資格情報を持つユーザーは、より脆弱であり、サイバー攻撃の簡単なターゲットです。
したがって、単一の資格情報セットを使用してリソースにアクセスすることを常にお勧めします。シングルサインオンソフトウェアを使用すると、ユーザーは単一のユーザー名とパスワードを使用して複数のアプリケーションにログインできます。ユーザーは一度のみログインし、再びログインすることなく多くのアプリケーションにアクセスできます。このアプローチは、オープンソースコミュニティが[IdentityServer4][1]や[keycloak][2]などのオープンソースのアイデンティティプロバイダーを開発しているため、日々人気を獲得しています。このブログ投稿では、上位2つのオープンソースSSOソリューションを通過し、タイトルがKeycloak vs IdentityServer4を示唆しているように、機能とスコープを比較します。次のポイントについて説明します。
* **[IdentityServer4の簡単な紹介][3]** 
* **[keycloakとは？][4]** 
* **[keycloak＆identityserver4][5]** の比較
* **[結論][6]** 

## IdentityServer4の簡単な紹介 {#intro}

[IdentityServer4][1]は、OpenID ConnectとOAuth 2.0に基づくオープンソースSSOソフトウェアです。この無料ツールは、.NETフレームワーク（4.5.x）および.NETコアで記述され、複数のアプリケーションでシングルサインオンサービスを提供します。認証サーバーとして、デジタルリソースへのアクセスに使用できるJWTトークンを提供します。 APIのアクセス制御、ユーザーインターフェイスのカスタマイズ、API認証、クレームベースのプロバイダーなど、多くの規定を提供します。さらに、柔軟性があり、拡張可能であり、自己ホスティング機能が備わっています。さらに、Google、Facebook、Twitter、その他のソーシャルネットワークなど、複数のフローとフェデレートアイデンティティをサポートしています。
この無料のシングルサインオンソフトウェアのすべてのソースコードは、[github][7]で利用できます。したがって、ユーザーは展開と開発に関するすべてのドキュメントを実行できます。

## keycloakとは何ですか？ {#key}

[keycloak][2]は、広く使用されている別の認証ソリューションです。 OpenID Connect、OAuth2.0、およびSAML 2.0を使用して、IDとアクセス管理を提供します。このフリーソフトウェアは、ユーザー、役割、構成、セッションを管理するためのユーザーフレンドリーなUIを提供します。さらに、LDAPやActive Directoryなどのサードパーティアプリケーションとの統合を提供します。ユーザーは、スケーラビリティと可用性を向上させて、集中化されたユーザー管理を活用できます。とりわけ、ソーシャルログイン、ユーザーフェデレーション、集中管理、パスワードポリシー、クラスタリング、アダプターなど、多くの機能とともに統合用のクライアントライブラリを提供します。この無料シングルサインオンソフトウェアのすべてのソースコードは、[github][8]で利用できます。したがって、ユーザーは展開と開発に関するすべてのドキュメントを実行できます。

## KeycloakとIdentityServer4の比較 {#comp}

このKeyCloak vs IdentityServer4の記事のセクションでは、次のポイントをカバーして機能やその他の特性を調べて、これら2つのオープンソースIDプロバイダーを比較します。
**コミュニティスタンディング**：これらの無料のSSOソフトウェアは両方とも、コミュニティでよく表されています。ただし、keycloakには、IdentityServer4と比較してGitHubの統計が優れています。 Keycloakは、GitHubに3Kプラススターを備えた9KプラススターとIDサーバースタンドを確保しました。ドキュメントに関する限り、両方の無料認証ソリューションには、展開とドキュメントに関する包括的なドキュメントが付属しています。
**機能**：まず、keycloakとIdentityServer4は、OpenID ConnectとOAuth2.0に基づいています。ただし、KeyCloakは別の標準プロトコルSAML2.0を使用しています。 KeyCloakには、カスタマイズ可能で、LDAPとActive Directoryとの統合を提供するユーザーインターフェイスが付属しています。 [IdentityServer4][1]はOIDCを使用します。OIDCは、OAUTH2の上部にある認証レイヤーであり、SSOを実現します。無料のSSOソフトウェアにはDocker画像が付属しており、開発者はDockerを使用してセットアップできます。さらに、IdentityServer4は、keycloakと比較して軽量です。
**Tech Stack** ：テクノロジーに関する限り、KeyCloakは主にJavaScript、HTMLなどの他の言語の入力がほとんどなく、Javaで書かれています。第二に、IdentityServer4は、主にHTMLやSCSSなどの他の言語の入力を含むC#と書かれています。
**拡張性**：これは、オープンソースソフトウェアとこれらのSSOソフトウェア開発者に優しいものの主な特徴の1つです。これらのソフトウェアは、サードパーティライブラリとの統合を提供します。さらに、KeyCloakはJavaとJavaScriptで書かれたクライアントアダプターを提供しています。
**セキュリティ:** keycloakとitfentyServer4がセキュリティメカニズムを実装しています。さらに、IdentityServer4は、承認目的でBearer Tokensを使用します。

## 結論 {#結論}

これは、このkeycloak vs IdentityServer4ブログ投稿の終わりです。無料のSSOシステムの両方のいくつかの顕著な側面を経験し、いくつかの重要な機能について詳しく説明しました。したがって、無料のシングルサインオンソフトウェアが優れていることについて、自分で結論を出すことができます。この記事は、あなたのビジネスに適した製品に適した選択をするのに確実に役立ちます。さらに、ユースケースをよく知っている場合、意思決定は簡単な作業になります。さらに、要件に適したソフトウェアを常に選択します。
これらのSSOソフトウェアはどちらも、リソースへのアクセスを容易にして組織に容易になります。組織は、優れたシングルサインオンソフトウェアをインストールすることにより、リソースの可用性を確認します。 USRESは、複数のセットの資格情報を携帯する必要はありません。むしろ、1つの資格情報を使用して、一度ログインすることができ、その後、再びログインせずに複数のWebサイトにアクセスできます。システム全体に自信、セキュリティ、透明性を与えます
最後に、 **[containerize.com][9]**は、さらにオープンソース製品について書いています。これに連絡してください[****][10]**[シングルサインオン][11]**定期的な更新のカテゴリ。さらに、ソーシャルメディアアカウント[Facebook][12]、[LinkedIn][13]、および[Twitter][14]でフォローできます。

## 探検
次のリンクが関連する場合があります。
* **[IdentityServer][15]** 
* **[keycloak][16]** 
* **[cas][17]** 
* **[authelia][18]** 
* **[WSO2][19]** 
* **[OpenIdentityPlatform][20]** 
* **[Freeipa][21]** 
* **[2021年のトップ5オープンソースシングルサインオンソフトウェア][22]** 
* **[ビジネスの成長を改善するためにSSOシステムを活用する方法][23]** 
* **[無料およびオープンソースソフトウェアを使用してビジネスオペレーションを自動化][24]** 



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
