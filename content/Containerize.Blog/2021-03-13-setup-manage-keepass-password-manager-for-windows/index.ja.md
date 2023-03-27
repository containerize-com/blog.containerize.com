---
title: "WindowsのKeepAss Password Managerをセットアップして管理する" 
seoTitle: "WindowsのKeepAss Password Managerをセットアップおよび管理します" 
description: "Keepassは、人気があり、安全で、無料で、オープンソースのパスワードマネージャーです。このガイドは、WindowsユーザーがKeepAssを使用してパスワードを設定および管理するのに役立ちます。" 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepassは、人気があり、安全で、無料で、オープンソースのパスワードマネージャーです。このガイドは、WindowsユーザーがKeepAssを使用してパスワードを設定および管理するのに役立ちます。" 
url: /ja/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## Keepassは、人気があり、安全で、無料で、オープンソースのパスワードマネージャーです。このガイドは、WindowsユーザーがKeepAssを使用してパスワードを設定および管理するのに役立ちます。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="WindowsのKeepAss Password Managerをセットアップおよび管理します">}}


## 概要 {#overview}

さまざまなWebサイトやアプリケーションのさまざまなパスワードの組み合わせをすべて覚えておくのは簡単な作業ではありません。その方法にはあまりセキュリティがありません。簡単に失うことができるか、間違った人の手に陥る可能性があるためです。  **KeepAss Password Manager**  Windowsのための問題は、これらの問題の解決策の1つです。
一方、パスワードマネージャーは、ユーザーがすべてのパスワードを1つの場所に簡単に保存し、必要なときにいつでもアクセスできるようにします。 KeepAssは  **最高のオープンソースパスワードマネージャーの1つです**  は、無料でダウンロードできるだけでなく、パスワードファイルをUSBに保存したり、ドロップボックス、Googleドライブなどにアップロードしたりできます。クラウドストレージオプション。エンドツーエンドの暗号化を使用すると、パスワードの所有者のみがマスターキーを使用してパスワードファイルにアクセスできます。これにより、セキュリティが保証されます。オープンソースのパスワードマネージャーのKeepAssは、技術的な知識を持つユーザーがソースコードを自分で検査して、セキュリティ機能が欠落していないことを確認することもできます。
  * [WindowsのセットアップKeepass][1]
  * [KeepAssを使用してパスワードを管理][2]
  * [結論][3]

## WindowsのセットアップKeepass {#setup}

 **ダウンロード＆インストール** 
KeepAssソフトウェアをインストールする前に、Windowsバージョン7、8、または10を使用していることを確認し、KeepAss Password Managerの最新バージョンを用意してください。 Windowsの[Windowsインストーラー]をダウンロードして、[Windowsの[keepass 2.47]]をクリックしてクリックできます。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="WindowsのKeepAss Password Managerをセットアップおよび管理します">}}

ダウンロードが完了したら、インストーラーを実行すると、Keepass Managerの最新の更新の自動チェックを有効または無効にするように求められます。これは、許可なく最新のバージョンを自動的にダウンロードまたはインストールするという意味ではありません。 Keepass Serverオープンソースソフトウェアは、GNU GPLの下でライセンスされています。インストール後、次のように空白のウィンドウが表示されます。

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="WindowsのKeepAss Password Managerをセットアップおよび管理します">}}

 **新しいデータベースを作成** 
次に、パスワードを保存するデータベースの作成を開始します。手順は次のとおりです。  **ファイル** をクリックします。 [データベースが作成される  **new**  を選択します。以下のプロンプトが表示されます。 **okをクリックします。**  

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="Windowsを開くWindowsのKeepass Password Managerをセットアップして管理する">}}

ここでは、コンピューターに  **。kdbxファイル**  （すべてのパスワードがあります）を保存するように求められます。チーム用のKeepAssがコンピューターにあるのと同じフォルダーに保存してください。

## KeepAssを使用してパスワードを管理します {#manage}

 **マスターパスワードを作成** 
これで、.kdbxファイルにアクセスできるパスワードとなるマスターキーを作成する必要があります。パスワードに大文字、小文字、特殊文字、数字などの組み合わせが含まれていることを確認してください。パスワードデータベースのセキュリティを決定するため、強力でアクセスできないマスターキーを作成することが非常に重要です。 KeepAss無料のパスワードマネージャーは、マスターキーの強さまたは弱いことに関するインジケータも提供します。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="WindowsのKeepAss Password Managerをセットアップおよび管理します">}}

 **パスワードを保存** 
マスターキーを作成した後、データベースが開き、パスワードの保存を開始できます。 Keepassはデフォルトとして2つのパスワードエントリを提供します。それらを削除して独自の追加を開始できます。

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="WindowsのKeepAss Password Managerをセットアップおよび管理します">}}

新しいエントリを作成するには、黄色のキーアイコンをクリックして新しいパスワードエントリを生成します。パスワードを入力し、繰り返し、このパスワードが使用されるURL、ユーザー名などを提供するために必要な新しい画面が開きます。パスワードを入力すると、ドットで隠され、右側の  **3つのドットアイコン**  をクリックすることで明らかにできます。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="WindowsのKeepAss Password Managerをセットアップおよび管理します">}}

 **KeepAssを使用してログイン** 
データベースに保存されたパスワードでログインするには：
* パスワードエントリを右クリックして、[ユーザー名のコピー]を選択します**このユーザー名をウェブサイトのフィールドに貼り付けて、ユーザー名を貼り付けます。
* 次に、KeepAss Password Managerの同じエントリを右クリックし、[パスワード**をコピーして[パスワード]フィールドのWebサイトに貼り付けます。
  * 12秒後にKeepassによってパスワードがクリップボードから削除されるため、コピーと貼り付けで速くする必要があることに注意してください。今回の制約は、Keepass Password Safe Managerを介して変更できます。

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="WindowsのKeepAss Password Managerをセットアップおよび管理します">}}

 **考慮すべきその他のパスワードマネージャーオプション:**  
市場には他にも数十のオープンソースパスワードマネージャーがあります。安全で人気のある自己ホスト、オープンソースのパスワードマネージャーを使用して、ユニークで複雑なパスワードを保存することにより、アカウントの資格を安全に保つことができます。以下にリストされているのは、いくつかのトップパスワードマネージャーです。
* [  **Padloc**  ][4]は、家族やチームのシンプルで安全なミニマリストのパスワードマネージャーおよびデータ管理として設計されています。
* [  **PassBolt**  ][5]は、アジャイルチームとDevOpsチームのニーズに合わせて設計された自己ホストの簡単なパスワードマネージャーです。
* [  **パスワードSAFE**  ][6]は、安全でシンプルで理解しやすいインターフェイスを備えたオープンソースパスワードマネージャープログラムです。
* [  **Bitwarden**  ][7]は、安全で無料でダウンロードでき、オープンソース統合パスワード管理ソリューションです。
* [  **Psono**  ][8]は、チームの自己ホストの資格情報とパスワードマネージャーです。最大のセキュリティのために多層暗号化を提供します。

## 結論 {#conclusion}

Keepassは、パスワードを管理する簡単で安全でポータブルな方法です。パスワードをカスタマイズし、セキュアな組み合わせを生成し、ユーザー名を使用してさまざまなWebサイトの複数のパスワードエントリを保存できます。 Best Password Managerの使用KeepAssも使用することは、エンドツーエンド暗号化メカニズムを使用し、SH-256ハッシュ機能に最大限のセキュリティに依存するため、安全です。
さらに、[  **containerize.com** ][9]は、複数の言語とフレームワークでオープンソース製品のスタックを強化する途中です。定期的な更新については、より興味深い記事については、 **[パスワード管理][10]**  カテゴリをご覧ください。

## 探検
この記事では、WindowsのKeepAss Password Managerをセットアップおよび管理する方法について説明しました。次のリンクが関連する場合があります。
*  **[2021年のトップ5オープンソースパスワードマネージャー][11]**  
*  **[最高のオープンソースパスワード管理ソフトウェア][12]**  
*  **[KeepAss |セキュア、ポータブル＆オープンソースのパスワードマネージャー][13]**  



 [1]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#setup
 [2]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#manage
 [3]: https://blog.containerize.com/wp-admin/post.php?post=3863&action=edit#conclusion
 [4]: https://padloc.app/
 [5]: https://products.containerize.com/password-management/passbolt/
 [6]: https://products.containerize.com/password-management/password-safe/
 [7]: https://products.containerize.com/password-management/bitwarden/
 [8]: https://products.containerize.com/password-management/psono/
 [9]: https://www.containerize.com/
 [10]: https://blog.containerize.com/category/password-management/
 [11]: https://blog.containerize.com/password-management/top-5-open-source-password-managers-in-2021/
 [12]: https://products.containerize.com/password-management/
 [13]: https://products.containerize.com/password-management/keepass
