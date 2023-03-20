---
title: "Como desenvolver um videogame usando superpotências abertas de sofrimento" 
seoTitle: "Como desenvolver um videogame usando superpotências abertas de sofrimento" 
description: "Como desenvolver um videogame? O SuperPowers é um desenvolvimento de jogos HTML5 de código aberto. É uma plataforma cruzada e permite que os usuários criem jogos 2D e 3D animados." 
date: Wed, 19 May 2021 20:28:01 +0000
author: muhammadmustafa
summary: "Software gratuito de design de videogame para desenvolvimento de videogames com um modo offline. Auto-hospedeiro, crie 2D & amp animado; Jogos 3D com efeitos sonoros e fontes." 
url: /pt/how-to-develop-a-video-game-using-open-sopurce-superpowers/
categories: ['Game Development Software']
---

## Software de design de videogame grátis para desenvolvimento de videogames com um modo offline. Auto-hospedeiro, crie jogos 2D e 3D animados com efeitos sonoros e fontes.

{{< figure align=center src="images/superpowers.png" alt="Como desenvolver um videogame">}}


## Visão geral
No passado, alguns artigos foram publicados na categoria [software de desenvolvimento de jogos][1], que inclui como a indústria global de jogos que alavancam o software de código aberto e o tutorial do GDevelop para iniciantes iniciarem o desenvolvimento de jogos. O desenvolvimento de videogames está muito mais espalhado por todo o mundo, com a crescente demanda por jogos divertidos. No entanto, envolve a idéia, desenvolvimento de design, testes contínuos, lançamentos e feedback. Em outras palavras, envolve designers, arquitetos de software, programadores, testadores e recursos de suporte. Além disso, existem muitos tipos de jogos como jogos de ação, jogos de quebra -cabeça, jogos de corrida, jogos cognitivos e um pouco mais.
Portanto, é necessário um bom guia de desenvolvimento de jogos para começar a começar com qualquer construtor de jogos em 3D. A comunidade de código aberto desenvolveu muitos softwares de desenvolvimento de jogos que oferecem recursos e serviços públicos de nível corporativo para desenvolver jogos 3D e 2D. Este tutorial de desenvolvimento de jogos HTML5 explorará como desenvolver um videogame usando o software gratuito de desenvolvimento de videogames ** superpowers ** cobrindo os seguintes pontos.
  *** [O que são superpowers][2] **
  *** [Como configurar no host local?][3] **
  *** [Painel de superpotências?][4] **
  *** [Conclusão][5] **

## o que são superpowers {#intro}
[Superpowers][6] é um software de código aberto para desenvolvimento de videogames. É flexível, robusto e extensível. No entanto, oferece suporte para animações, modelos 3D e uma ampla gama de exemplos de jogos. Além disso, ele também vem com uma versão offline em que os usuários podem criar jogos sem conectividade à Internet. A publicação de qualquer projeto é incrivelmente fácil e tudo o que acontece com um único clique. Há um painel intuitivo para os usuários em que os usuários podem navegar por vários elementos facilmente. Acima de tudo, há um relatório de erro ao vivo muito legal, onde mostra o erro ao desenvolvedor para evitar qualquer ambiguidade ou bug. O SuperPowers é fácil de configurar e requer mais requisitos fáceis de hospedar em servidores, este construtor de jogos em 3D está escrito no TypeScript e vem com toda a documentação sobre desenvolvimento e implantação. Portanto, todo o código -fonte está disponível no [Github][7].
Superpowers oferece os seguintes pontos -chave:
  * Relatório de erro ao vivo
  * Multilíngue
  * Plataforma cruzada
  * Fonte rica e efeitos sonoros
  * Auto-hospedado

## Como configurar o localhost? {#configurar}
Se você ainda está se perguntando como desenvolver um videogame, nesta parte do artigo, aprenderemos a configurar superpotências no local -host. Nesta seção, este ** Guia de Desenvolvimento de Jogos ** elaborará o processo de configuração do ambiente de desenvolvimento de jogos.
Primeiro de tudo, verifique se você instalou os seguintes pré-requisitos antes de iniciar o desenvolvimento de videogames:
  * Git
  * npm
  * Node.js
Os requisitos acima mencionados são fáceis e conhecidos, por isso não será uma tarefa difícil para iniciantes. Depois que os requisitos acima forem instalados, abra o terminal e execute o seguinte comando para clonar o código -fonte:
```
git clone https://github.com/superpowers/superpowers-core superpowers/core
```
Após um clone de sucesso, vá para o diretório baixado executando o seguinte comando:
```
cd superpowers/core
```
Agora, execute o seguinte comando para clonar o sistema de jogos superpowers:
```
git clone --recursive https://github.com/superpowers/superpowers-game systems/game
```
Depois disso, execute o seguinte comando para fazer a construção:
```
npm run build
```
Após uma compilação bem -sucedida, inicie o servidor executando o seguinte comando:
```
node server start
```

{{< figure align=center src="images/Screenshot-2021-05-20-at-19.29.50-1024x154.png" alt="Tutorial de desenvolvimento de jogos html5">}}

Agora abra o navegador e acesse o aplicativo no seguinte link:
```
<a href="http://localhost:4237/">http://localhost:4237/</a>
```

## Painel de superpowers? {#características}
Ao atingir o URL acima, você verá a seguinte página inicial. Existem opções para modificar ou criar um novo projeto de plataforma vazio ou 2D.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.41.27-1024x577.png" alt="Desenvolvimento de videogames">}}

Avançando na questão de como desenvolver um videogame, você verá a tela a seguir após criar um jogo de plataforma 2D. Você pode ver as opções no lado esquerdo da janela, como criar cenas, definir o ladrilho, o mapa do jogo e o jogador. Há uma opção de codificação ao vivo na qual você pode codificar o comportamento do usuário.

{{< figure align=center src="images/Screenshot-2021-05-20-at-21.57.47-1024x578.png" alt="Desenvolvimento de videogames">}}

Além disso, há uma barra de configuração no lado esquerdo, onde você pode definir as animações, renderizar, fazer upload ou baixar a imagem. No lado esquerdo, há uma opção para adicionar mais ativos ao seu projeto, conforme mostrado na imagem abaixo. Inclui um modelo 3D Modelo Cúbico, opção Fint se quiser modificar a fonte. Além disso, os usuários podem adicionar mais cenas, scripts, shaders e sprites. Além disso, este construtor de jogos 3D de código aberto também permite adicionar vários efeitos sonoros aos jogos para atrair jogadores com os melhores efeitos sonoros possíveis do jogo. Por último, mas não menos importante, também permite adicionar mapas de ladrilhos e conjuntos de ladrilhos.

{{< figure align=center src="images/Screenshot-2021-05-20-at-22.12.25-1024x579.png" alt="Design de videogame">}}

Da mesma forma, depois de passar por este artigo de jogo, você pode explorá -lo ainda mais e usar todos os recursos. Além disso, você poderá entender como ir em frente usando o Superpowers Video Game Builder. Há suporte on -line disponível para este software de desenvolvimento de jogos.

## ** CONCLUSÃO ** {#conclusion}
Isso termina este guia de desenvolvimento de jogos HTML5. Felizmente, esta postagem do blog o ajudará se você deseja iniciar o desenvolvimento de videogames. Exploramos o que são superpotências, como desenvolver um videogame, que é um construtor de jogos 3D de código aberto e também passamos por seu procedimento de instalação no host local. Existem muitos aplicativos de design de videogame de código aberto ** que permitem que os usuários criem jogos do zero. Os programadores de videogame usam princípios essenciais de design de jogos para criar jogos de alta qualidade. Você aprenderá mais sobre a criação de jogos 2D e 3D em nossos próximos artigos em [blog.containerize.com][8]. Existem outros construtores de jogos em 3D de código aberto e auto-hospedados e artigos relevantes mencionados na seção "Explorar" abaixo.
Finalmente, o CONTERIZE.COM está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Portanto, mantenha contato com a categoria [videogame][9][][10] para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][11], [LinkedIn][12] e [Twitter][13].

## Explore
Você pode encontrar os seguintes links relevantes:
  * [][14][gdevelo][14]
  * [][14][Godot][15]
  * [][14][Superpowers][6]
  * [][14][Cocos Creator][16]
  * [][14][panda3d][17]
  *** [Introdução ao desenvolvimento de jogos usando superpowers][18] **
  *** [Tutorial de desenvolvimento de jogos | Movimento do jogador em Gdevelo][19] **
  *[** Como fazer um jogo no Scratch usando Gdevelo de código aberto **][20]
  *** [Como a indústria global de jogos que alavancam o software de código aberto][21] **
  *** [Tutorial do GDEVOLV para iniciantes para iniciar o desenvolvimento do jogo][22] **
  *[** Top 5 Software de desenvolvimento de jogos gratuitos no ano 2021 **][23]

  
[1]: https://blog.containerize.com/category/game-development-software/
[2]: #intro
[3]: #setup
[4]: #features
[5]: #Conclusion
[6]: https://products.containerize.com/game-development-software/superpowers/
[7]: https://github.com/superpowers/superpowers-core
[8]: https://blog.containerize.com/
[9]: https://products.containerize.com/game-development-software/
[10]: https://products.containerize.com/business-intelligence/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[19]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[20]: https://blog.containerize.com/game-development-software/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
[21]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[22]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[23]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
