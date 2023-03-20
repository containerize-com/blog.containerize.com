---
title: "Como fazer um jogo no Scratch usando o Gdevelo de código aberto" 
seoTitle: "Como fazer um jogo no Scratch usando o Gdevelo de código aberto" 
description: "Como fazer um jogo do zero? O GDevelop oferece uma interface lógica de interface do usuário cheia de muitos componentes e comportamentos para criar videogames para web, desktop, iOS e Android." 
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: "Este tutorial de desenvolvimento de jogos explica o básico da construção de um jogo de corrida de caminhões. Você pode instalá -lo ou usar seu aplicativo online para criar um videogame emocionante." 
url: /pt/how-to-make-a-game-on-scratch-using-open-source-gdevelop/
categories: ['Game Development Software']
---

## Este tutorial de desenvolvimento de jogos explica o básico da construção de um jogo de corrida de caminhões. Você pode instalá -lo ou usar seu aplicativo online para criar um videogame emocionante.

{{< figure align=center src="images/gdevelop-game.png" alt="Como fazer um jogo no arranhão">}}


## **Visão geral**
No passado, publicamos muitas postagens de blog em software de desenvolvimento de jogos gratuitos de código aberto, como [5 principais softwares de desenvolvimento de jogos gratuitos no ano 2021][1], [começando com o desenvolvimento de jogos usando superpowers][2], [jogo Tutorial de desenvolvimento | Movimento do jogador em Gdevelo][3], [Tutorial de Desenvolvimento de Jogo HTML5 para programadores de videogames][4], [Como a indústria global de jogos que alavancam o software de código aberto][5] e [o tutorial do GDEV para iniciantes iniciarem o desenvolvimento do jogo][6 ]. Os últimos avanços na era da Internet trouxeram novas tendências na indústria de videogames. Uma plataforma de construção de jogos de código aberto fornece um ecossistema completo para desenvolver jogos de forma independente e os desenvolvedores amadurecem essa plataforma conforme as necessidades. Nesta postagem do blog, aprenderemos a fazer um jogo no Scratch usando [GDevelo][7] cobrindo os seguintes pontos.
  *** [Por que devemos usar o GDevelop?][8] **
  *** [Configurando o projeto][9] **
  *** [Como preparar o fundo e o objeto?][10] **
  *** [Adicionando Behviors ao objeto][11] **
  *** [executando o jogo][12] **
  *** [Conclusão][13] **

## por que devemos usar o GDEVEND? {#por que}
[Gdevelo][7] é um software de jogo de código aberto. Ele vem com recursos de auto-hospedagem e é de natureza cruzada de natureza. Você pode baixá -lo e instalá -lo, ou pode usar sua versão online para jogar com ele. Os usuários não precisam obter nenhum conhecimento de programação para usar este construtor de jogos. Acima de tudo, ele oferece uma interface de usuário de arrastar e soltar que apresenta comportamentos, modelos e objetos pré-criados. Este software de desenvolvimento de jogos gratuito é altamente configurável e oferece integrações com bibliotecas de terceiros. Para obter mais informações sobre essa ferramenta gratuita, você pode verificar este link para saber mais sobre seus recursos e o processo de configuração.

## Configurando o projeto {#Setting}
Nesta seção, criaremos nosso projeto para a construção de um jogo de corrida de caminhões com algumas funcionalidades básicas. Siga este [link][6] se você deseja configurar sua máquina local ou poderá usar a versão online indo para este [link][14].
Portanto, você encontrará a tela a seguir depois de clicar em "Criar um novo projeto" e clique em "Stayp Game".

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="Como fazer um jogo no arranhão">}}

Você pode ver a barra de menus no lado esquerdo da janela. Agora, clique nas "cenas" e clique duas vezes em "Clique para adicionar uma cena". Depois disso, você pousará na tela do jogo, onde poderá criar objetos, origens e comportamentos de jogo. Avançando, clique em "Adicionar um novo objeto" colocado no painel lateral direito e você verá a seguinte janela.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="Tutorial do GDevelop">}}


## Como preparar plano de fundo e objeto? {#preparar}
Na barra de pesquisa, procure o objeto do caminhão e clique duas vezes nele e pressione "Adicionar ao jogo" quando ele ocorrer nos resultados. Repita esta etapa para as duas rodas e um objeto de plataforma. Agora, clique com o botão direito do mouse no objeto GreenFloor e edite.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="Tutorial de desenvolvimento de jogos">}}


## Adicionando behviors ao objeto {#add}
Em seguida, arraste e solte o piso verde para a tela do jogo e ajuste sua altura e largura de acordo com o seu desejo. Arraste o objeto do caminhão e solte -o na tela do jogo e depois os objetos da roda. Avançando, clique com o botão direito do mouse no corpo do caminhão e clique em "Editar Objeto Truckbody", clique em comportamentos, clique em "Adicionar um comportamento ao objeto" e clique em "Física mecanismo 2.0" e você verá a seguinte janela.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="Como fazer um jogo no arranhão">}}

Nesta janela, você pode modificar as configurações como densidade, largura e altura. Agora, repita o mesmo processo para o objeto GreenFloor, mas mantenha o tipo "estático" e pressione o botão "Aplicar". Novamente, edite o objeto do caminhão, atinge “Editar Pontos”, acertar “EDD Points” e, em seguida, insira o nome da roda dianteira (ou seja, FW neste tutorial). Um ponto será criado no objeto, basta arrastar esse ponto para a localização da roda. Repita esse processo para a roda traseira também e faça o X e Y a 0, como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="Tutorial de desenvolvimento de jogos">}}

Depois disso, edite os objetos da roda e ajuste seus pontos. Além disso, vá para a opção de edição das rodas, pressione a guia "Comportamento", selecione "Physics Engine 2.0" e defina os valores do tipo, raio e densidade, conforme mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="software de design de jogos">}}

Agora, clique na guia "New Scene", pressione "Adicionar novos eventos", pressionar "Adicionar Condição", pesquisar "no início da cena" e pressionar "OK". Em seguida, pressione “Adicionar ação” Pesquise por “Center Center X Position” e defina as seguintes configurações.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="software de desenvolvimento de jogos grátis">}}

Agora, copie a ação, mas verifique se a ação copiada está definida como "Y". Adicione outra ação chamada "Alterar o zoom da câmera", defina -a para 0,4 e arraste essa ação para o topo. Adicione outra ação, procure o "Adicione uma junta de roda" e defina as configurações para as duas rodas, como mostrado abaixo.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="Guia de desenvolvimento de jogos">}}

Depois disso, adicione uma nova condição, pesquise "tecla pressionada" e defina -a para a esquerda. Agora, adicione ação, selecione a primeira roda, procure a velocidade linear x ”, sinal de modificação para“ subtrair ”e defina o valor 50. Repita esta etapa para a tecla correta, mas verifique se o sinal de modificação Add como mostrado abaixo.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="Tutorial de desenvolvimento de jogos">}}


## executando o jogo {#run}
Depois que todas as etapas forem concluídas. É hora de executar o jogo pressionando o botão colocado no canto superior esquerdo. Ele lançará o jogo na nova janela.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="Como fazer um jogo no arranhão">}}


## Conclusão {#conclusion}
Este é o fim desta postagem do blog e você certamente sabe como fazer um jogo no Scratch. No entanto, existem muitos softwares gratuitos de design de jogos ** disponíveis no mercado, pois esse setor está ganhando popularidade e demanda. Existem várias razões por trás disso, como software de código aberto, são escaláveis, configuráveis, econômicas e fáceis de manter. Além disso, a demanda por construtores de jogos de plataforma cruzada está aumentando à medida que os desenvolvedores acham confortável construir um jogo que seja executado em todas as plataformas populares como Android, iOS, Web e Desktop. Por outro lado, o advento da pandemia mudou a vida das pessoas e agora eles preferem ficar dentro de casa. Então, as pessoas tendem a jogar videogames em seu tempo de lazer.
Finalmente, [contenderize.com][15] está pronto para aprimorar sua base de tutoriais com alguns tutoriais de desenvolvimento de jogos mais interessantes **. Fique conectado com esta categoria [Software de desenvolvimento de jogos][16] para atualizações regulares.

## Explore
  *** [gdevelo][7] **
  *** [GODOT][17] **
  *** [superpowers][18] **
  *** [Cocos Creator][19] **
  *** [panda3d][20] **
  *** [PlayCanvas][21] **
  *** [Começando com o desenvolvimento de jogos usando superpowers][2] **
  *** [Tutorial de desenvolvimento de jogos | Movimento do jogador em Gdevelo][3] **
  *** [tutorial de desenvolvimento de jogos html5 para programadores de videogame][4] **
  *** [Como a indústria global de jogos que alavancam o software de código aberto][5] **
  *** [Tutorial do GDevelop para iniciantes iniciarem o desenvolvimento do jogo][6] **
  *[** Top 5 Software de desenvolvimento de jogos gratuitos no ano 2021 **][1]

  
[1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/
[2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/
[3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: #why
[9]: #setting
[10]: #prepare
[11]: #add
[12]: #run
[13]: #Conclusion
[14]: https://editor.gdevelop-app.com/
[15]: https://www.containerize.com/
[16]: https://products.containerize.com/game-development-software/
[17]: https://products.containerize.com/game-development-software/godot/
[18]: https://products.containerize.com/game-development-software/superpowers/
[19]: https://products.containerize.com/game-development-software/cocos-creator/
[20]: https://products.containerize.com/game-development-software/panda3d/
[21]: https://products.containerize.com/game-development-software/playcanvas/
