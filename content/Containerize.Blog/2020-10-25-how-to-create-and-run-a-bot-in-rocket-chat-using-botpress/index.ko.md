---
title: "로켓에서 봇을 생성하고 실행하는 방법 Botpress를 사용하여 Chat" 
seoTitle: "로켓에서 봇을 생성하고 실행하는 방법 Botpress를 사용하여 Chat" 
description: "이 안내서는 Botpress를 사용하여 봇을 만드는 방법과 Rocket.chat와의 통합을하는 간단하고 쉬운 단계로 가르쳐줍니다." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "이 튜토리얼에서는 Botpress를 사용하여 봇을 만드는 방법과 Rocket.chat와의 통합을 안내합니다." 
url: /ko/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

##이 튜토리얼에서는 Botpress를 사용하여 봇을 만드는 방법과 Rocket.chat와의 통합 방법을 안내합니다.

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="로켓에서 봇을 생성하고 실행하는 방법 Botpress를 사용하여 Chat">}}

챗봇은 인간 대화를 시뮬레이션하도록 설계된 컴퓨터 프로그램입니다. 소매 웹 사이트 인 Facebook Messenger에서 하나를 만났을 것입니다. 기술적으로 말하면, 봇은 특정 작업을 수행하도록 설계된 자동화 된 프로그램입니다.
Rocket.Chat은 챗봇 및 메시징 자동화 통합을 장려합니다. 따라서 봇 만들기 프로세스를 안내하는 포괄적 인 문서가 있습니다.
이 기사에서는 Botpress를 사용하여 봇을 만드는 방법을 안내해 드리겠습니다. 그리고 로켓을 구성하는 방법 Botpress를 사용하여.
  * [Rocket.Chat][1]
  * [botpress][2]
  * [로켓에서 봇 사용자 만들기][3]
  * [botpress를 사용하여 봇 코딩][4]
  * [결론][5]

### rocket.chat   {#Rocketchat}
Rocket.chat은 인기있는 라이브 채팅 소프트웨어 중 하나입니다. 커뮤니티 에디션으로 무료 라이브 채팅 버전이 있습니다. 뿐만 아니라 개인 내부 채팅 기능이있는 대기업을위한 유료 호스팅 라이브 채팅 버전. 이 라이브 채팅 응용 프로그램은 브라우저에서 실행되지만 자체 서버에도 설치할 수 있습니다. [더 읽기][6]

### botpress   {#botpress}
대화적인 챗봇은 비즈니스가 고객에게 항상 원하는 고 터치 지원을 제공 할 수있게 해주었습니다. Botpress는 내장 된 자연 언어 처리가있는 가장 인기있는 오픈 소스 봇 제작 도구 중 하나입니다. Botpress의 NLU 기술은 Botkit, Dialogflow 및 Microsoft Bot Framework와 같은 분야의 경쟁 업체보다 한 발 앞서 있습니다. [더 읽기][7]

### rocket.chat   {#createbotuser}에서 봇 사용자를 만듭니다.
챗봇과 대화하려면 봇이 로그인 할 수있는 Rocket.chat 서버에 미리 구성된 사용자 계정이 있어야합니다.
계정을 만들려면 관리자 권한이 있어야합니다.
  1. Topbar에서 3 개의 점 (옵션)을 클릭 한 다음**관리**를 클릭하십시오.
  2. 왼쪽 사이드 바에서**사용자**를 선택하십시오
  3. 오른쪽 사이드 바에서`+`(사용자 추가) 버튼을 클릭하십시오.
  4. 나타나는 프로필 창에서 _name_, _username_, _email_ 및 _password_ 필드를 채우십시오.
  5. _mail_ 필드에서 _verified_ 토글을 활성화합니다
  6. _password_ 필드에서 _require password change _ 토글 비활성화
  7.`roble '드롭 다운 메뉴에서`bot'을 선택하고 오른쪽의 _add 역할 _ 버튼을 클릭하십시오.
  8. _join Default Channels_ 및 _send 환영 이메일 _ Checkboxes 비활성화
  9. _save_를 클릭합니다.
저장되면 봇은 4 단계에서 사용자 이름과 비밀번호 세트로 구성됩니다. "rocketchat \ _user"및 "rocketchat \ _password"환경 변수를 사용 하여이 사용자 이름과 비밀번호 쌍으로 Rocket.chat 서버에 로그인 할 수 있습니다.

### botpress   {#codebot}을 사용하여 봇 코드 코드
Botpress는 Node.js 패키지이며 Node 및 NPM과 함께 작동합니다.
Botpress로 시작하는 가장 빠른 방법은 [Botpress-Kick-Starter][8] 저장소를 사용하는 것입니다.
봇으로 작업하려는 폴더로 이동하여 다음 단계를 진행하십시오.
* * Botpress 패키지 설치**
```
npm init -y
npm install botpress@10.40.0
```
* * 봇 만들기**
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
"Botpress Init"명령은 초기 구성을 만드는 데 도움이되는 마법사를 시작합니다. 다음과 같이 무언가를 볼 수 있습니다.
```
$ ../node_modules/.bin/botpress init

---------------
Hey there 👋, thanks for using Botpress!
We'll walk you through the creation of your new bot.
For more information or help, please visit https://botpress.io/docs
---------------
name: (bot) botpress-bot
botpress version: (10.40.0)
description: Test bot for docs
author: Anton Zolotukhin

=============================
Template: Basic (default)
Author: Botpress, Inc.
Description: A basic bot for your website
Channels: web
=============================

-> Copying .welcome
-> Copying botfile.js
-> Copying config/channel-web.json
-> Copying config/nlu.json
-> Copying generated/content/builtin_text.json
-> Copying generated/flows/main.flow.json
-> Copying generated/flows/main.ui.json
-> Copying generated/intents/forget.json
-> Copying generated/intents/forget.utterances.txt
-> Copying generated/intents/hello.json
-> Copying generated/intents/hello.utterances.txt
-> Copying generated/intents/none.json
-> Copying generated/intents/none.utterances.txt
-> Copying index.js
-> Copying package.json
-> Copying README.md
-> Copying src/actions.js
-> Copying src/content/.empty
-> Copying src/custom.js
-> Copying src/index.js
-> Copying src/renderers.js
-> Copying .gitignore

🎉  Your bot was initialized succesfully!

Next steps:
1) Install bot dependencies by running npm install (or yarn install)
2) Start the bot by running npm start (or yarn start)

Enjoy Botpress!
```
* * Botpress 커넥터 및 봇 의존성 설치**
```
npm install
npm install botpress-channel-rocketchat
```
봇을 구성하십시오
"config"폴더를 열고 다음 내용으로 "Channel-Rocketchat.json"파일을 만듭니다.
```
{
    "ROCKETCHAT_USER": <BOTPRESS USER NAME>,
    "ROCKETCHAT_PASSWORD": <BOTPRESS USER PASS>,
    "ROCKETCHAT_URL": <ROCKETCHAT HOST>,
    "ROCKETCHAT_USE_SSL": <SSL USAGE>,
    "ROCKETCHAT_ROOM": <ROCKETCHAT CHANNEL>,
    "scope": ""
}
```
* * 봇 실행**
```
npm start
```
* * 봇과 대화**
서버에서 일반 사용자 (봇 사용자가 아닌)로 로그인하고 General Room으로 가서 새로 만든 봇과 대화하십시오.

### 결론   {#conclusion}
이 기사에서는 Botpress에서 봇을 만드는 방법을 배웠습니다. 그리고 Rocket.chat로 구성하는 방법. Botpress를 사용하면 사용자가 혁신적인 자동화 된 워크 플로를 쉽게 구축 할 수 있습니다. 그리고 로켓과의 통합을 사용하면 대화 방식으로 제어 할 수 있습니다.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
