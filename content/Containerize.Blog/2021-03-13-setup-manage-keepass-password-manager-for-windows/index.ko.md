---
title: "Windows 용 Suppass Appordore Manager 설정 및 관리 '" 
seoTitle: "Windows 용 Suppass Password Manager를 설정 및 관리합니다" 
description: "Keepass는 인기 있고 안전하며 무료이며 오픈 소스 비밀번호 관리자입니다. 이 안내서는 Windows 사용자가 rewass를 사용하여 비밀번호를 설정하고 관리하는 데 도움이됩니다." 
date: Sat, 13 Mar 2021 07:34:04 +0000
author: bilalahmed
summary: "Keepass는 인기 있고 안전하며 무료이며 오픈 소스 비밀번호 관리자입니다. 이 안내서는 Windows 사용자가 rewass를 사용하여 비밀번호를 설정하고 관리하는 데 도움이됩니다." 
url: /ko/password-management/setup-manage-keepass-password-manager-for-windows/
categories: ['Password Management']
---

## Keepass는 인기 있고 안전하며 무료이며 오픈 소스 비밀번호 관리자입니다. 이 안내서는 Windows 사용자가 rewass를 사용하여 비밀번호를 설정하고 관리하는 데 도움이됩니다.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows.png" alt="Windows 용 Suppass Password Manager를 설정 및 관리합니다">}}


## 개요 {#overview}

다양한 웹 사이트 및 응용 프로그램에 대한 다양한 암호 조합을 기억하는 것은 쉬운 일이 아니며 종이에 적어 두는 동안 쉬운 솔루션처럼 보일 수 있습니다. 그 방법에는 쉽게 잃을 수 있거나 잘못된 사람의 손에 떨어질 수 있기 때문에 그 방법에는 많은 보안이 없습니다.  **Windows 용 keepass password manager**  는 이러한 문제에 대한 솔루션 중 하나입니다.
반면에 비밀번호 관리자는 사용자가 모든 암호를 한 곳에 쉽게 저장하고 필요할 때마다 액세스 할 수 있도록합니다. Keepass는**최고의 오픈 소스 비밀번호 관리자 중 하나입니다. 클라우드 스토리지 옵션. End To End 암호화를 사용하면 암호의 소유자 만 마스터 키로 비밀번호 파일에 액세스하여 보안을 보장합니다. 오픈 소스 비밀번호 관리자로서 KeepAss는 기술 지식을 가진 사용자가 소스 코드를 스스로 검사하여 보안 기능이 누락되지 않았는지 확인할 수 있습니다.
  * [Windows에서 repass 설정][1]
  * [cheepass를 사용하여 비밀번호 관리][2]
  * [결론][3]

## Windows에서 repsups {#setup}

 **다운로드 및 설치** 
KeepAss 소프트웨어를 설치하기 전에 Windows 버전 7, 8 또는 10을 사용하고 있고 최신 버전의 KeepAss Password Manager가 있는지 확인하십시오. Windows의 경우  **cheepass 2.47**  를 클릭하여 Windows 설치 프로그램을 다운로드 할 수 있습니다.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-1-download-1024x495.png" alt="Windows 용 Supass Password Manager를 설정하고 관리합니다">}}

다운로드가 완료되면 설치 프로그램을 실행하면 KeePass 관리자의 최신 업데이트에 대한 자동 점검을 활성화하거나 비활성화하라는 메시지가 표시됩니다. 그렇다고 허가없이 최신 버전을 자동으로 다운로드하거나 설치한다는 의미는 아닙니다. Keepass Server 오픈 소스 소프트웨어는 GNU GPL에 따라 라이센스가 부여됩니다. 설치 후 이제 빈 창이 다음과 같이 표시됩니다.

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open.png" alt="Windows 용 Supass Password Manager를 설정하고 관리합니다">}}

 **새 데이터베이스 만들기** 
이제 비밀번호를 저장하기 위해 데이터베이스를 만들기 시작합니다. 다음 단계는 다음과 같습니다.  **파일** 을 클릭하십시오. 데이터베이스가 생성 될  **New**  를 선택하십시오. 아래 프롬프트가 표시됩니다. **OK를 클릭하십시오.**  

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-open-new-db.png" alt="Windows 용 Suppass Password Manager 설정 및 관리 새 DB 오픈">}}

여기에서는 컴퓨터에  **. kdbx 파일**  (모든 암호가있는)를 저장하라는 메시지가 표시됩니다. 팀을위한 Keepass가 컴퓨터에있는 동일한 폴더에 저장하십시오.

## cheepass를 사용하여 비밀번호를 관리합니다 {#manage}

 **마스터 비밀번호 만들기** 
이제 .kdbx 파일에 액세스 할 수있는 비밀번호가 될 마스터 키를 만들어야합니다. 암호에 대문자, 소문자 알파벳, 특수 문자, 숫자 등이 포함되어 있는지 확인하십시오. Keepass 무료 비밀번호 관리자는 또한 마스터 키가 얼마나 강하거나 약한 지에 대한 지표를 제공합니다.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-master-password.png" alt="Windows 용 Supass Password Manager를 설정하고 관리합니다">}}

 **비밀번호 저장** 
마스터 키를 만들면 비밀번호 저장을 시작할 수있는 데이터베이스가 열립니다. Keepass는 기본적으로 2 개의 비밀번호 항목을 제공하며 삭제하고 직접 추가 할 수 있습니다.

{{< figure align=center src="images/Setup-and-Manage-KeePass-Password-Manager-For-Windows-save-pw.png" alt="Windows 용 Suppass Password Manager를 설정 및 관리합니다">}}

새 항목을 만들려면 노란색 키 아이콘을 클릭하여 새 비밀번호 항목을 생성하십시오. 새 화면이 비밀번호를 입력하고 반복 하고이 비밀번호를 사용할 URL, 사용자 이름 등을 제공해야합니다. 비밀번호를 입력하는 동안 점으로 숨겨지며 오른쪽의  **3 개의 도트 아이콘**  을 클릭하여 공개 할 수 있습니다.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-new-entry.png" alt="Windows 용 Suppass Password Manager를 설정 및 관리합니다">}}

 **cheepass를 사용하여 로그인** 
데이터베이스에 저장된 비밀번호로 로그인하려면 :
* 비밀번호 항목을 마우스 오른쪽 버튼으로 클릭하고  **사용자 이름을 복사하십시오**  이제이 사용자 이름을 웹 사이트 필드에 사용자 이름으로 붙여 넣습니다.
* 이제 KeepAss Password Manager에서 동일한 항목을 마우스 오른쪽 버튼으로 클릭하고  **비밀번호 복사**  를 선택하고 비밀번호 필드가있는 웹 사이트에 다시 붙여 넣습니다.
  * 12 초 후에 Keepass에 의해 암호가 클립 보드에서 제거되므로 복사 및 붙여 넣기에 빠르게 있어야합니다. 이 시간 제약 조건은 Keepass Password Safe Manager를 통해 변경할 수 있습니다.

{{< figure align=center src="images/Setup-Manage-KeePass-Password-Manager-For-Windows-copy.png" alt="Windows 용 Suppass Password Manager를 설정 및 관리합니다">}}

 **고려해야 할 기타 비밀번호 관리자 옵션 :**  
시장에는 수십 개의 다른 오픈 소스 암호 관리자가 있습니다. 안전하고 인기있는 자체 호스팅 및 오픈 소스 비밀번호 관리자를 사용하여 고유하고 복잡한 암호를 저장하여 계정 자격 증명을 안전하게 유지할 수 있습니다. 아래에는 몇몇 최고 비밀번호 관리자가 있습니다.
* [  **padloc**  ][4]는 가족 및 팀을위한 간단하고 안전한 미니멀리스트 암호 관리자 및 데이터 관리로 설계되었습니다.
* [  **passbolt**  ][5]는 민첩한 팀과 DevOps 팀의 요구를 위해 설계된 자체 주최하기 쉬운 암호 관리자입니다.
* [  **Password Safe**  ][6]는 안전하고 간단하며 이해하기 쉬운 인터페이스를 갖춘 오픈 소스 암호 관리자 프로그램입니다.
* [  **Bitwarden**  ][7]는 안전하고 무료로 다운로드 할 수있는 오픈 소스 통합 암호 관리 솔루션입니다.
* [  **psono**  ][8]는 팀의 자체 주최 자격 증명 및 비밀번호 관리자입니다. 최대 보안을 위해 다층 암호화를 제공합니다.

## 결론 {#conclusion}

Keepass는 비밀번호를 쉽고 안전하며 휴대 한 방법입니다. 이를 통해 비밀번호를 사용자 정의하고 안전한 조합을 생성하며 사용자 이름으로 다른 웹 사이트에 대한 여러 비밀번호 항목을 저장할 수 있습니다. 최상의 비밀번호 관리자를 사용하면 End to End 암호화 메커니즘을 사용하고 SH-256 HASH 기능에 의존하여 최대 보안을 위해 안전합니다.
또한, [  **containerize.com** ][9]는 여러 언어와 프레임 워크로 오픈 소스 제품의 스택을 향상시키기위한 길에 있습니다. 정기적으로 업데이트하려면 **[비밀번호 관리][10]**  카테고리를 계속 지켜봐 주시기 바랍니다.

## 탐구하다
이 기사에서는 Windows 용 KeepAss Password Manager를 설정하고 관리하는 방법에 대해 논의했습니다. 다음 링크를 찾을 수 있습니다.
*  **[2021 년 상위 5 개 오픈 소스 비밀번호 관리자][11]**  
*  **[최고의 오픈 소스 비밀번호 관리 소프트웨어][12]**  
*  **[Keepass | 보안, 휴대용 및 오픈 소스 비밀번호 관리자][13]**  



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
