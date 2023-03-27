---
title: "Introdução ao desenvolvimento de jogos usando superpowers" 
seoTitle: "Introdução ao desenvolvimento de jogos usando superpowers" 
description: "O SuperPowers é um fabricante de jogos 3D de código aberto com colaboração em tempo real. Este tutorial trata de começar o desenvolvimento de jogos usando superpowers." 
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: "O comportamento e o movimento dos objetos de jogo são controlados por animações. Neste tutorial de desenvolvimento de jogos, aprenderemos a animar os personagens do jogo." 
url: /pt/superpowers-animation-getting-started-with-game-development/
categories: ['Game Development Software']
---

## O comportamento e o movimento dos objetos de jogo são controlados por animações. Neste tutorial de desenvolvimento de jogos, aprenderemos a animar os personagens do jogo.

{{< figure align=center src="images/super.png" alt="Introdução ao desenvolvimento do jogo">}}


## **Visão geral** 
Em nossa série de tutoriais de desenvolvimento de jogos de código aberto, publicamos postagens de blog sobre alguns tópicos populares, como [Tutorial de Desenvolvimento de Jogos | Movimento do jogador em Gdevelo][1], [Tutorial de Desenvolvimento de Jogo HTML5 para programadores de videogames][2], [Como a indústria global de jogos que alavancam o software de código aberto][3] e [o tutorial do GDEV para iniciantes iniciarem o desenvolvimento do jogo][4 ]. Este artigo do tutorial é sobre começar o desenvolvimento de jogos usando o código aberto gratuito [superpowers][5] cobrindo os seguintes pontos.
* **[tipos de animações de jogo][6]** 
* **[Como criar sprites?][7]** 
* **[Trabalhando com cenas][8]** 
* **[Lançando o jogo no host local][9]** 
* **[Conclusão][10]** 
Existem muitos softwares de desenvolvimento de jogos de código aberto para iniciantes disponíveis com recursos de auto-hospedagem. No entanto, [Superpowers][5] é um software de criação de jogo 2D e 3D de plataforma cruzada. Ele fornece bibliotecas e exemplos de jogos embutidos que facilitam o desenvolvimento de jogos para os desenvolvedores de jogos. Este aplicativo gratuito de design de jogos é escrito no TypeScript e toda a documentação está disponível no [GitHub][11] sobre desenvolvimento e implantação. Nesta postagem do blog, exploraremos as superpotências sobre seu uso.

## Tipos de animações de jogo {#types}

As animações são uma parte vital dos videogames. Os personagens dos jogos devem responder às ações do usuário, a animação deve ser suave e abrupta. Trata -se de gerenciar vários quadros e animadores refinam esses quadros para produzir efeitos móveis. Além disso, existem animações 2D e 3D, onde os objetos parecem passar pelo espaço tridimensional. Desenvolvedores de jogos e designers gráficos criam modelos 3D. As animações dependem da natureza do jogo e dos tipos mais comuns são os seguintes.
**Animação de caminhada:**  A animação de caminhada é sobre a criação de um processo de caminhada no qual os personagens animam cada etapa e dão ilustrações ambulantes.
**Animação ociosa:**  Este é um tipo muito importante de animação no qual o personagem não faz nada porque o usuário não pressiona nenhum controlador.
**Run Animation** : Run Animation faz parte de todos os jogos em que o objeto de jogo executa o ciclo de corrida. Este tipo é do tipo mais comum e requer mais atenção do desenvolvedor.
**Lighting Animation** : Nos jogos de luta, vários personagens de jogos lutam um com o outro.
**Animação de Jump** : Esse tipo de animação requer melhores habilidades e conhecimentos. O caractere comprime e libera o corpo para realizar a ilustração do salto.

## Como criar sprites? {#sprites}

Esta seção do guia de fabricação de jogos permite que os usuários criem projetos e comecem a criar sprites para o jogo. Os sprites são imagens não estáticas ou gráficos que não são usados ​​apenas em jogos, mas também fazem parte do web design. Normalmente, estes são desenhados sobre um fundo que está sendo atualizado constantemente.
Antes de seguir em frente, verifique se você configurou superpotências em sua máquina. Você pode seguir este link [tutorial de desenvolvimento de jogos HTML5 para programadores de videogame][2] para configurar esta plataforma de criação de jogos gratuita.
Primeiro, abra o aplicativo no navegador e vamos criar um novo projeto vazio. como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Introdução ao desenvolvimento do jogo">}}

Você chegará ao espaço do projeto depois de criar o novo projeto vazio. Existem opções de menu no painel lateral esquerdo. Portanto, clique no botão "+" para abrir a caixa de diálogo Ativo. Selecione a opção Sprite e pressione Criar.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="Guia de fabricação de jogos">}}

Agora, faça o upload da imagem na qual adicionaremos comportamento. Você pode fazer isso clicando no botão colocado no canto superior direito. Este painel é sobre a configuração do objeto.
Em seguida, você pode definir o tamanho da grade conforme sua escolha. Existem duas partes da tela. A parte superior mostra a folha completa, onde a parte inferior mostra a parte selecionada na qual pretendemos aplicar a animação. Você pode fazer isso pressionando o botão "Configuração" no painel lateral direito, como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="Tutorial de desenvolvimento de jogos">}}

Depois disso, vamos criar animações. Podemos fazer isso clicando no botão "novo" na guia Animação. Você pode ver a imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="software de desenvolvimento de jogos para iniciantes">}}


## Trabalhando com cenas {#scenes}

Nesta seção, adicionaremos uma cena ao nosso jogo. Para isso, abra novamente a caixa de diálogo Ativos e selecione "Cena" e pressione o botão Criar. Agora crie um ator clicando no botão de estrela disponível no canto superior direito, conforme mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="como fazer um jogo no arranhão para iniciantes">}}

Depois disso, crie um novo componente clicando no botão "Novo componente" colocado no painel lateral direito. Selecione “Renderizador Sprite” e pressione Criar. Em seguida, arraste o sprite criado do painel lateral esquerdo e solte-o na seção Sprite Renderer. Além disso, crie outro ator chamado "Câmera" e, da mesma forma, crie um novo componente chamado Câmera.
Você pode alterar o modo de câmera, então altere -o para o modo "ortográfico", conforme mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="Introdução ao desenvolvimento de jogos,">}}

No canto inferior esquerdo, navegue até a opção Configurações e abra -a. Nas seções "sprite" e "mapa de ladrilhos", insira 16 contra "pixel por unidade". Em seguida, no "modo de câmera padrão", selecione 2D na seção "Cena". Além disso, na seção "Mapa de ladrilhos", a largura padrão 36, a altura padrão 28 e o tamanho da grade de ladrilhos 16. Não há necessidade de salvá -lo, mas tudo está no AutoSave.

## Lançando o jogo no host local {#local}

Então, estamos perto de lançar a animação das superpotências do nosso primeiro jogo. No entanto, vá para a guia Configurações e arraste a cena do painel lateral esquerdo e solte-o contra a "cena de inicialização", como mostrado na imagem abaixo.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="como fazer um jogo no arranhão para iniciantes">}}

Agora, clique em "Player" e no componente "renderizador Sprite", selecione animação contra o atributo "animação". Por fim, inicie o aplicativo clicando no botão colocado no canto superior esquerdo. A nova guia mostrará os objetos em movimento na tela.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="Introdução ao desenvolvimento do jogo">}}


## Conclusão {#Conclusão}

Este é o fim do tutorial em que aprendemos a fazer um jogo no Scratch para iniciantes. Portanto, começar o desenvolvimento de jogos se torna fácil quando há documentação detalhada do software de desenvolvimento de jogos disponíveis. Finalmente, [ **containerize.com** ][12] está em um processo consistente de escrever artigos sobre tópicos e produtos de código aberto adicionais. Portanto, mantenha contato com esta categoria [software de desenvolvimento de jogos][13] para atualizações regulares.

## Explore
  * [Gdevelo][14]
  * [Godot][15]
  * [Superpowers][5]
  * [Creator Cocos][16]
  * [Panda3d][17]
  * [PlayCanvas][18]



[1]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
[3]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
[4]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
[5]: https://products.containerize.com/game-development-software/superpowers/
[6]: #types
[7]: #sprites
[8]: #scenes
[9]: #local
[10]: #Conclusion
[11]: https://github.com/superpowers/superpowers-core
[12]: https://www.containerize.com/
[13]: https://products.containerize.com/game-development-software/
[14]: https://products.containerize.com/game-development-software/gdevelop/
[15]: https://products.containerize.com/game-development-software/godot/
[16]: https://products.containerize.com/game-development-software/cocos-creator/
[17]: https://products.containerize.com/game-development-software/panda3d/
[18]: https://products.containerize.com/game-development-software/playcanvas/
