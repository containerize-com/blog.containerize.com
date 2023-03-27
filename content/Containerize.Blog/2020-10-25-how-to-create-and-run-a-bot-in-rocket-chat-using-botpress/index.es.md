---
title: "Cómo crear y ejecutar un bot en Rocket.Chat usando botpress" 
seoTitle: "Cómo crear y ejecutar un bot en Rocket.Chat usando botpress" 
description: "Esta guía le enseña con pasos sencillos y sencillos que cómo crear BOT usando botpress y su integración con Rocket.Chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "En este tutorial, lo guiaremos sobre cómo crear un bot usando botpress y su integración con Rocket.Chat" 
url: /es/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## En este tutorial, lo guiaremos sobre cómo crear un bot usando botpress y su integración con Rocket.Chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Cómo crear y ejecutar un bot en Rocket.Chat usando botpress">}}

Un chatbot es un programa de computadora diseñado para simular la conversación humana. Probablemente haya encontrado uno en Facebook Messenger, un sitio web minorista. Técnicamente hablando, los bots son programas automatizados diseñados para realizar una tarea específica.
Rocket.Chat fomenta las integraciones de chatbot y automatización de mensajería. Por lo tanto, tiene una documentación integral para guiarlo a través del proceso de fabricación de BOT.
En este artículo, lo guiaremos a través de cómo crear un bot usando botpress. Y cómo configurar cohete.chat con botpress.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Crear un usuario de BOT en Rocket.Chat][3]
  * [Codifique su bot con botpress][4]
  * [Conclusión][5]


### Rocket.chat {#rocketchat}

Rocket.chat se encuentra entre el popular software de chat en vivo en parte un proyecto de chat en vivo de código abierto. Tiene una versión gratuita de chat en vivo como edición comunitaria. Además, una versión de chat en vivo alojada pagada para grandes empresas con características de chat internas privadas. Esta aplicación de chat en vivo se ejecuta en el navegador, pero también se puede instalar en su propio servidor. [Leer más][6]


### Botpress {#botpress}

Los chatbots conversacionales han hecho esto posible para las empresas para dar a sus clientes el soporte táctil siempre disponible que desean. BotPress es una de las herramientas de creación BOT de código abierto más popular con procesamiento de lenguaje natural incorporado. La tecnología NLU de Botpress lo hace un paso por delante de sus competidores en el campo como Botkit, Dialogflow y Microsoft Bot Framework. [Leer más][7]


### Crear un usuario de Bot en Rocket.Chat {#createbotuser}

Para hablar con su chatbot, debe haber una cuenta de usuario preconfigurada en el servidor Rocket.Chat al que el bot puede iniciar sesión.
Para crear la cuenta, necesita tener privilegios de administración:
  1. En la barra superior, haga clic en los tres puntos (opciones) y luego haga clic en  **Administración**  
  2. Seleccione  **Usuarios**  en la barra lateral izquierda
  3. Haga clic en el botón `+` (Agregar usuario) en la barra lateral derecha
  4. En la ventana de perfil que aparece, complete _name_, _username_, _email_ y _password_ campos
  5. Habilitar _verifiD_ Toggle en el campo _email_
  6. Deshabilitar _ Requerir contraseña Change_ Toggle en el campo _password_
  7. Seleccione `Bot` en el menú desplegable` Agregar rol 'y haga clic en _add role_ botón a la derecha
  8. Deshabilitar _JOY CANALES DE CHANELS_ESTORIO_
  9. Haga clic en _save_
Una vez guardado, el BOT se configurará con el nombre de usuario y la contraseña establecidos en el paso 4. Puede usar las variables ambientales "Rocketchat \ _user" y "Rocketchat \ _Password" para iniciar sesión en Rocket.Chat Server con este nombre de usuario y contraseña.


### Codifique su bot con botpress {#codebot}

BotPress es un paquete Node.js y funciona con Node y NPM.
La forma más rápida de comenzar con BotPress es usar el repositorio [BotPress-Kick-Starter][8] que ya está integrado con Rocket.Chat a través de [conector de canal botpress][9].
Navegue a la carpeta donde desea trabajar con el bot y continúe con los siguientes pasos:
 **Instalar paquete botpress** 
```
npm init -y
npm install botpress@10.40.0
```
 **Crea un bot** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
El comando "BotPress Init" lanza un asistente que lo ayudará a crear la configuración inicial. Deberías ver algo de la siguiente manera:
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
 **Instale el conector BotPress y las dependencias de BOT** 
```
npm install
npm install botpress-channel-rocketchat
```
Configurar el bot
Abra la carpeta "Config" y cree el archivo "Channel-Rocketchat.json" con el siguiente contenido:
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
 **Ejecute el bot** 
```
npm start
```
 **Habla con tu bot** 
En el servidor, inicie sesión como usuario normal (no como usuario de BOT), vaya a la sala general y hable con su bot recién creado.


### Conclusión {#conclusion}

En este artículo, hemos aprendido a crear un bot en Botpress. Y cómo configurarlo con Rocket.Chat. BotPress hace que sea muy fácil para los usuarios crear flujos de trabajo automatizados innovadores. Y, la integración con Rocket.Chat le permite controlarlos de manera conversacional.



 [1]: #rocketchat
 [2]: #botpress
 [3]: #createbotuser
 [4]: #codebot
 [5]: #conclusion
 [6]: https://products.containerize.com/live-chat/rocketchat
 [7]: https://products.containerize.com/live-chat/botpress
 [8]: https://github.com/RocketChat/botpress-kick-starter
 [9]: https://github.com/RocketChat/botpress-channel-rocketchat
