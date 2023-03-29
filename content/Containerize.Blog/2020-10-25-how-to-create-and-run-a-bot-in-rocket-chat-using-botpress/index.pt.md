---
title: "Como criar e executar um bot no foguete.chat usando o Botpress" 
seoTitle: "Como criar e executar um bot no foguete.chat usando o Botpress" 
description: "Este guia ensina a você com etapas simples e fáceis de criar botas usando o Botpress e sua integração com o Rocket.Chat." 
date: Sun, 25 Oct 2020 15:01:25 +0000
author: Assad Mahmood
summary: "Neste tutorial, guiaremos você sobre como criar um bot usando o Botpress e sua integração com Rocket.Chat" 
url: /pt/how-to-create-and-run-a-bot-in-rocket-chat-using-botpress/
categories: ['Live Chat']
---

## Neste tutorial, guiaremos você sobre como criar um bot usando o Botpress e sua integração com Rocket.Chat

{{< figure align=center src="images/How-to-Create-and-Run-a-Bot-in-Rocket.Chat-using-Botpress.png" alt="Como criar e executar um bot no foguete.chat usando o Botpress">}}

Um chatbot é um programa de computador projetado para simular conversas humanas. Você provavelmente encontrou um no Facebook Messenger, um site de varejo. Tecnicamente falando, os bots são programas automatizados projetados para executar uma tarefa específica.
Rocket.Chat incentiva as integrações de automação de chatbot e mensagens. Portanto, possui documentação abrangente para guiá-lo no processo de fabricação de bot.
Neste artigo, o guiaremos como criar um bot usando o Botpress. E, como configurar o Rocket.Chat com a Botpress.
  * [Rocket.chat][1]
  * [Botpress][2]
  * [Crie um usuário bot no Rocket.chat][3]
  * [Core seu bot usando Botpress][4]
  * [Conclusão][5]


### Rocket.chat {#rocketchat}

Rocket.Chat está entre o popular software de bate -papo ao vivo em parte um projeto de bate -papo ao vivo de código aberto. Ele tem uma versão grátis de bate -papo ao vivo como uma edição da comunidade. Além disso, uma versão paga de bate -papo ao vivo hospedado para grandes empresas com recursos de bate -papo interno privados. Este aplicativo de bate -papo ao vivo é executado no navegador, mas também pode ser instalado em seu próprio servidor. [Leia mais][6]


### Bottpress {#botpress}

Os chatbots de conversação tornaram isso possível para as empresas darem a seus clientes o sempre disponível suporte de toque alto que desejarem. A Botpress é uma das ferramentas de criação de bot de código aberto mais populares com processamento de linguagem natural embutido. A tecnologia NLU da Botpress o torna um passo à frente de seus concorrentes no campo, como Botkit, Dialogflow e Microsoft Bot Framework. [Leia mais][7]


### Crie um usuário bot no Rocket.chat {#createbotuser}

Para conversar com o seu chatbot, deve haver uma conta de usuário pré-configurada no servidor Rocket.Chat que o bot pode fazer login.
Para criar a conta, você precisa ter privilégios de administrador:
  1. Na barra superior, clique nos três pontos (opções) e clique em  **Administração**  
  2. Selecione  **Usuários**  na barra lateral esquerda
  3. Clique no botão `+` (Adicionar usuário) na barra lateral direita
  4. Na janela de perfil que aparece, preencha _name_, _username_, _email_ e _password_ campos
  5. Ativar _verified_ alternar no campo _email_
  6. Desativar _Require senha alterar_ alternar no campo _password_
  7. Selecione `bot 'no menu suspenso` add função` e clique no botão _add role_ à direita
  8. Desativar _JOIN canais padrão e _send Welcome email_ caixas de seleção
  9. Clique em _save_
Uma vez salvo, o bot será configurado com o nome de usuário e a senha definidos na etapa 4. Você pode usar as variáveis ​​ambientais “Rocketchat \ _User” e “Rocketchat \ _Password” para fazer login no servidor Rocket.chat com este nome de usuário e senha.


### Codifique seu bot usando o Botpress {#codebot}

O Botpress é um pacote Node.js e funciona com o Node e o NPM.
A maneira mais rápida de começar com o Botpress é o uso do repositório [Botpress-Kick-Starter][8] que já está integrado ao Rocket.Chat via [conector de Channel Botpress][9].
Navegue até a pasta onde deseja trabalhar com o bot e prossiga com as seguintes etapas:
 **Instale o pacote BotPress** 
```
npm init -y
npm install botpress@10.40.0
```
 **Crie um bot** 
```
mkdir bot
cd bot
../node_modules/.bin/botpress init
```
O comando "Botpress init" inicia um assistente que o ajudará a criar a configuração inicial. Você deve ver algo o seguinte:
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
 **Instale o conector do botão e as dependências de bot** 
```
npm install
npm install botpress-channel-rocketchat
```
Configure o bot
Abra a pasta "Config" e crie o arquivo "Channel-rocketchat.json" com o seguinte conteúdo:
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
 **Execute o bot** 
```
npm start
```
 **Fale com o seu bot** 
No servidor, faça o login como um usuário regular (não o usuário do bot), vá para a sala geral e converse com seu bot recém -criado.


### Conclusão {#conclusion}

Neste artigo, aprendemos a criar um bot na Botpress. E, como configurá -lo com Rocket.chat. A Botpress facilita muito a criação de fluxos de trabalho automatizados inovadores. E a integração com o Rocket.Chat permite controlá -los de maneira conversacional.



 [1]: #rocketchat
 [2]: #botpress
 [3]: #createbotuser
 [4]: #codebot
 [5]: #conclusion
 [6]: https://products.containerize.com/live-chat/rocketchat
 [7]: https://products.containerize.com/live-chat/botpress
 [8]: https://github.com/RocketChat/botpress-kick-starter
 [9]: https://github.com/RocketChat/botpress-channel-rocketchat
