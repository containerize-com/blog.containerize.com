---
title: "Tutorial de desenvolvimento de jogos | Movimento de jogadores em gdevelo" 
seoTitle: "Tutorial de desenvolvimento de jogos | Movimento de jogadores em gdevelo" 
description: "Siga este tutorial de desenvolvimento de jogos para aprender sobre as funções básicas do jogo. O GDevelop é um software de criação de jogos gratuito para construir e publicar jogos." 
date: Fri, 28 May 2021 13:13:45 +0000
author: muhammadmustafa
summary: "Mover objetos na tela é uma parte crucial de qualquer jogo. Neste guia de desenvolvimento de jogos, aprenderemos a controlar e mover objetos de jogo no Gdevelo." 
url: /pt/game-development-tutorial-player-movement-in-gdevelop/
categories: ['Game Development Software']
---

## Mover objetos na tela é uma parte crucial de qualquer jogo. Neste guia de desenvolvimento de jogos, aprenderemos a controlar e mover objetos de jogo no Gdevelo.

{{< figure align=center src="images/Game-Development-Tutorial.png" alt="Tutorial de desenvolvimento de jogos">}}


## **Visão geral**
A comunidade de código aberto está surgindo com a passagem de cada minuto. Existem jogos de plataforma cruzada, jogos para celular e jogos de mesa. Vários tipos de jogos incluem jogos de ação, jogos de aventura, jogos de interpretação de papéis, jogos esportivos, jogos de quebra-cabeça, jogos de simulação e muito mais. Portanto, todos esses diferentes tipos de jogos deram um imenso impulso ao tráfego, pois usuários de todas as faixas etárias tendem a jogar esses jogos.
Além disso, a pandemia trouxe uma grande mudança no estilo de vida de pessoas que vivem ao redor do mundo. As pessoas agora têm mais tempo. Todas as atividades offline ficaram online. Portanto, eles tendem a optar por software on -line para executar tarefas profissionais e videogames em caso de entretenimento. Por todos esses motivos, esse setor ganhou sustentabilidade e o apoio de usuários e desenvolvedores. No passado recente, escrevemos sobre tópicos como o [tutorial de desenvolvimento de jogos HTML5 para programadores de videogames][1], [como a indústria global de jogos que alavancam o software de código aberto][2] e [o tutorial do GDEV para iniciantes iniciarem o desenvolvimento do jogo][3]. Neste tutorial de desenvolvimento de jogos, abordaremos os seguintes pontos.
  *** [apresenta a exploração do gdevelo][4] **
  *** [Trabalhando em um jogo][5] **
  *** [Conclusão][6] **

## apresenta exploração de gdevelo {#Features}
[Gdevelo][7] é uma plataforma de construção de jogos de código aberto. É altamente extensível e oferece uma interface lógica em que os usuários podem navegar facilmente. Este software livre está escrito em C ++, TypeScript e JavaScript. Além disso, há uma documentação abrangente disponível em relação ao desenvolvimento e implantação. Todo o código -fonte está disponível no GitHub. Além disso, existem muitos recursos que tornam este jogo que torna o software proeminente. Vamos ver alguns dos principais recursos.
** Plataforma cruzada **: Esta plataforma de criação de jogos é multiplataforma e pode ser implantada em quase todos os sistemas operacionais populares, como MacOS, Linux e Windows.
** Opções de exportação **: O GDevelop permite que os usuários exportem jogos desenvolvidos com apenas um clique para Android, iOS e Web. Os proprietários de jogos podem exibir anúncios em vídeo em seus jogos e isso pode ser possível com o apoio do AdMob.
** Rich Game Objects **: Este fabricante de jogos de código aberto fornece uma ampla gama de objetos de jogo, como sprites com animações, explosões de incêndio e outros efeitos com a ajuda de emissores de partículas. Texto formatado, vídeos incorporados e formas personalizadas estão disponíveis para trazer efeitos atraentes para os jogos.
** Comportamentos versáteis **: Neste artigo básico de desenvolvimento de jogos, mostraremos como podemos adicionar comportamentos diferentes aos objetos do jogo. Existem vários comportamentos disponíveis que estão prontos para uso e os usuários podem se desenvolver ainda mais conforme os requisitos. Tudo acontece em questão de alguns cliques no mouse.
** Interface avançada **: Neste tutorial de design de jogo, veremos a interface do usuário deste mecanismo de jogo 3D. Os usuários podem arrastar e soltar vários elementos e objetos do jogo.

## trabalhando em um jogo {#working}
Esta seção do tutorial de desenvolvimento de jogos elabora o desenvolvimento básico de jogos com o GDevelop. Antes de ir além, verifique se você instalou o GDevelop localmente em sua máquina.
Você pode visitar este tutorial [Tutorial do Gdevelo para iniciantes para iniciar o desenvolvimento do jogo][3] para obter o conhecimento da criação deste editor de jogo no localhost.
Agora, abra o editor e crie um novo projeto. Neste tutorial, criaremos uma pasta no Google Drive para salvar arquivos de jogos. Agora clique no "Criar um novo projeto", ele abrirá uma nova caixa de diálogo, selecione a opção "jogo vazio" para começar a criar um novo jogo.

{{< figure align=center src="images/Screenshot-2021-05-28-at-12.44.34-1024x579.png" alt="Tutorial de desenvolvimento de jogos">}}

Na barra de menus do projeto do lado esquerdo, clique em "Salvar como" para salvar o jogo.
Em primeiro lugar, vamos adicionar uma cena. Para isso, clique na opção "Cenas" e renomeie -a, por exemplo, "primeira cena" neste tutorial mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-05-28-at-13.07.19-1024x576.png" alt=" Plataforma de construção de jogos">}}

Depois de criar a cena, abra -o e adicione um objeto. Para adicionar um objeto, clique em "Adicionar um novo objeto" aparecendo no painel lateral direito. Eventualmente, ele abrirá uma nova caixa de diálogo contendo ativos diferentes. No entanto, vamos selecionar o objeto "Red Ship", acertar "Adicionar ao jogo" e fechar a caixa de diálogo.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.16.32-1024x578.png" alt=" Guia de desenvolvimento de jogos">}}

Em seguida, você verá um objeto aparecendo no painel lateral esquerdo. Arraste -o para a tela principal e pressione o botão que aparece no canto superior esquerdo para lançar o jogo. Portanto, ele abrirá o jogo em uma nova janela, como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-05-28-at-14.25.41-1-1024x557.png" alt="Tutorial de desenvolvimento de jogos">}}

Até agora, você não pode brincar com esse objeto, pois não há comportamento adicionado a ele. Então, vamos adicionar um comportamento a esse objeto. Para isso, clique no objeto do navio e pressione "Editar objeto". Ele abrirá uma nova caixa de diálogo, navegará até a guia Comportamentos, selecionará "Movimento de cima para baixo" e pressionará "Aplicar". Agora, visualize o jogo e você verá que poderá mover o objeto de navio na tela usando as teclas de seta do teclado. Agora, você notará que o objeto do navio sai da tela. Portanto, para resolver esse problema, vamos editar o objeto e navegar até os comportamentos. Clique em "Adicione um comportamento ao objeto". Agora, navegue para “pesquisar novos comportamentos” e procure o comportamento “permanecer na tela” na barra de pesquisa, como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.02.19-1024x576.png" alt="Gdevelo">}}

Em seguida, selecione -o e instale -o no projeto e pressione Aplicar. Mais uma coisa é ajustar o ponto central do objeto. Então, vamos novamente para as propriedades do objeto e "editar pontos" aparecendo na parte inferior. Você pousará na tela a seguir.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.13.08-1024x579.png" alt="Tutorial de design de jogos">}}

Portanto, arraste a marca que aparece no canto superior esquerdo para o centro do objeto e feche e aplique. Agora, se você relançar o jogo, verá as mudanças.

{{< figure align=center src="images/Screenshot-2021-05-28-at-16.18.02-1024x578.png" alt="Tutorial de desenvolvimento de jogos">}}


## Conclusão {#conclusion}
Este é o fim deste tutorial de desenvolvimento de jogos. Felizmente, esta postagem do blog seria útil para os desenvolvedores de jogos. Este tutorial tornou possível trabalhar com os objetos do jogo e adicionar comportamentos. No futuro, o CONTERIZE.COM publicará postagens de blog e artigos tutoriais sobre o software de design de videogame de código aberto. Portanto, mantenha -se conectado com esta categoria [software de desenvolvimento de jogos][8] em [containerize.com][9] para atualizações regulares.

## Explore
  * [Gdevelo][7]
  * [Godot][10]
  * [Superpowers][11]
  * [Creator Cocos][12]
  * [Panda3d][13]

  
[1]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[2]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[3]: https://blog.containerize.com/game-development-software/pt/game-development-tutorial-player-movement-in-gdevelop/
[4]: #features
[5]: #working
[6]: #Conclusion
[7]: https://products.containerize.com/game-development-software/gdevelop/
[8]: https://products.containerize.com/game-development-software/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/game-development-software/godot/
[11]: https://products.containerize.com/game-development-software/superpowers/
[12]: https://products.containerize.com/game-development-software/cocos-creator/
[13]: https://products.containerize.com/game-development-software/panda3d/
