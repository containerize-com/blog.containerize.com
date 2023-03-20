---
title: "Как создать и запустить бота в Rocket.chat с помощью botpress" 
seoTitle: "Как создать и запустить бота в Rocket.chat с помощью botpress" 
description: "Это руководство учит вас простым и простым шагам, как создавать бота с помощью Botpress, и его интеграция с Rocket.chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "В этом уроке мы дадим вам, как создать бота с помощью Botpress, и его интеграция с Rocket.chat" 
url: /ru/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## В этом уроке мы рассмотрим вас о том, как создать бота с помощью Botpress, и это интеграция с Rocket.chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Как создать и запустить бота в Rocket.chat с помощью botpress">}}

Чатбот - это компьютерная программа, предназначенная для имитации человеческого разговора. Вы, вероятно, столкнулись с одним на Facebook Messenger, на веб -сайте. Технически говоря, боты - это автоматизированные программы, предназначенные для выполнения конкретной задачи.
Rocket.chat поощряет интеграцию автоматизации чат и обмена сообщениями. Поэтому имеет комплексную документацию, чтобы провести вас через процесс изготовления ботов.
В этой статье мы проведем вас через то, как создать бота с помощью Botpress. И как настроить Rocket.chat с помощью Botpress.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Создать пользователя бота в Rocket.chat][3]
  * [Код вашего бота с помощью Botpress][4]
  * [Заключение][5]

### Rocket.chat {#rocketchat}
Rocket.chat является одним из популярных программного обеспечения для живого чата, отчасти, с открытым исходным живым чатом. У него есть бесплатная версия в чате в качестве издания сообщества. А также платная версия для живого чата для крупных компаний с частными функциями внутреннего чата. Это приложение в чате работает в браузере, но также может быть установлено на вашем собственном сервере. [Подробнее][6]

### botpress {#botpress}
Разговорные чат -боты сделали это возможным для предприятий, чтобы предоставить своим клиентам всегда доступную поддержку высокой сенсорной связи, которую они хотят. Botpress является одним из самых популярных инструментов создания ботов с открытым исходным кодом со встроенной обработкой естественного языка. Технология Botpress NLU делает ее на шаг впереди своих конкурентов в этой области, таких как Botkit, Dialogflow и Microsoft Bot Framework. [Подробнее][7]

### Создать пользователя бота в Rocket.chat {#createbotuser}
Чтобы поговорить с вашим чат-ботом, на сервере Rocket.chat должна быть учетная запись пользователя.
Для создания учетной записи вам нужны привилегии администратора:
  1. В Topbar нажмите на три точки (параметры), а затем нажмите ** Администрирование **
  2. Выберите ** Пользователи ** на левой боковой панели
  3. Нажмите кнопку `+` (добавить пользователь) в правой боковой панели
  4. В появившемся окне профиля заполните _name_, _username_, _email_ и _password_ fields
  5. Включить _VERIDIFIFIT_ Переключить по полю _EMAIL_
  6. Отключить _require пароль изменение_ переключать в поле _password_
  7. Выберите «Бот» в выпадающем меню «Добавить» и нажмите кнопку _Add ROLE_ вправо
  8. Отключить _join каналы по умолчанию_ и _send приветствовать флажки по электронной почте_
  9. Нажмите _save_
После сохранения бот будет настроен с помощью имени пользователя и пароля, установленного на шаге 4. Вы можете использовать переменные «Rocketchat \ _user» и «Rocketchat \ _Password», чтобы войти на сервер Rocket.chat с помощью этой пары имени пользователя и паролей.

### код вашего бота с помощью botpress {#codebot}
Botpress является пакетом Node.js и работает с узлом и NPM.
Самый быстрый способ начать с Botpress-это использование репозитория [Botpress-kick-Starter][8], который уже интегрирован с Rocket.chat через [Botpress-Channel Connector][9].
Перейдите в папку, где вы хотите работать с ботом, и выполните следующие действия:
** Установить пакет Botpress **
```
npm init -y
npm install botpress@10.40.0
```
** Создать бота **
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
Команда «Botpress Init» запускает мастер, который поможет вам создать начальную конфигурацию. Вы должны увидеть что -то следующим образом:
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
** Установите зависимости разъема Botpress и бота **
```
npm install
npm install botpress-channel-rocketchat
```
Настройте бот
Откройте папку «конфигурации» и создайте файл «channel-rocketchat.json» со следующим контентом:
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
** запустить бот **
```
npm start
```
** Поговорите со своим ботом **
На сервере входите в систему как обычного пользователя (не пользователя бота), перейдите в общую комнату и поговорите со своим недавно созданным ботом.

### Заключение {#conclusion}
В этой статье мы узнали, как создать бота в Botpress. И как настроить его с помощью Rocket.chat. Botpress позволяет пользователям очень легко создавать инновационные автоматизированные рабочие процессы. И интеграция с Rocket.chat позволяет вам контролировать их в разговорной форме.

  
[1]: #rocketchat
[2]: #botpress
[3]: #createbotuser
[4]: #codebot
[5]: #conclusion
[6]: https://products.containerize.com/live-chat/rocketchat
[7]: https://products.containerize.com/live-chat/botpress
[8]: https://github.com/RocketChat/botpress-kick-starter
[9]: https://github.com/RocketChat/botpress-channel-rocketchat
