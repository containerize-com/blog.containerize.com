---
title: "Entender e aprender ramos e puxar solicitações no Git" 
seoTitle: "Entender e aprender ramos e puxar solicitações no Git" 
description: "O Git é um dos sistemas de controle de versão mais populares. Neste Articl Ewe, entenderá como usar ramos git e puxar solicitações." 
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "O GIT Branch é o componente fundamental do sistema de controle de versão Git. Vamos explorar diferentes modelos de ramificação neste tutorial" 
url: /pt/understand-and-learn-branches-and-pull-requests-in-git/
categories: ['Version Control Software']
---

## Git Branch é o componente fundamental do sistema de controle de versão Git. Vamos explorar diferentes modelos de ramificação neste tutorial

{{< figure align=center src="images/git-branches-pull-requests.png" alt="Git Pull Solicys Branches">}}

Em nosso [último artigo][1], aprendemos sobre o básico dos sistemas Git e de controle de versão. Passamos passo a passo e aprendemos a configurar um repositório Git. Além disso, aprendemos a adicionar alterações a uma ramificação e revertê -las, caso você queira desfazer suas alterações. Agora que entendemos o básico dos sistemas de controle de versão, especificamente, Git. Portanto, nesta postagem do blog, seguiremos em frente para discutir como usar as filiais Git e puxar solicitações. Aprenderemos sobre diferentes fluxos de trabalho. Então vamos começar!
  ***[O que são ramos git][2]** 
  ***[Criar / modificar ramos git][3]** 
  ***[O que é uma solicitação de tração][4]** 
  ***[Modelos populares de ramificação Git][5]** 
  *[**Conclusão** ][6]

## O que são ramificações git   {#branch}

{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="git ramificações">}}

Vamos falar sobre filiais e por que precisamos de filiais e quais são as estratégias de ramificação que podemos usar para trabalhar com eficiência com nosso código. Como o nome sugere um ramo  ****  representa uma linha independente de desenvolvimento de uma raiz.
Ao criar um repositório, você também cria uma ramificação, que podemos chamar de uma filial mestre (ou padrão). Podemos cometer mudanças em nosso ramo mestre. Mas, caso você precise trabalhar em um recurso e não deseja separar seu código da filial principal. Então, é aí que os ramos o ajudam. Eles deixaram você se ramificar e depois se fundir mais tarde.

## Criar / modificar ramificações git   {#create}
```
git branch
```
O comando permite criar, listar, renomear e excluir ramificações. Ele não permite que você alterne entre ramificações, para isso, precisamos usar o comando Git Checkout. Ou se você deseja mesclar suas alterações de volta a uma ramificação, você deve usar o comando **git mescle** .
É importante entender que os ramos são apenas indicadores de compromisso. Quando você cria uma filial, tudo o que o Git precisa fazer é criar um novo ponteiro, ele não altera o repositório de nenhuma outra maneira.
Use o seguinte comando para criar uma filial
```
git branch <branch-name>
```
Depois de terminar de trabalhar em uma filial e mesclá -la na base de código principal, você é livre para excluir a filial sem perder qualquer histórico usando o seguinte comando
```
git branch -d <branch-name>
```

## O que é uma solicitação de tração   {#pull}
Uma solicitação de tração é uma maneira de enviar uma contribuição a um projeto de software usando um sistema de controle de versão como o Git. Os desenvolvedores usam solicitações de tração para propor alterações a uma base de código. Depois que uma solicitação de tração é aberta, você pode discutir e revisar as possíveis alterações com os colaboradores e adicionar cometidos de acompanhamento antes que suas alterações sejam mescladas na filial base.
Quando um desenvolvedor abre uma solicitação de tração, tudo o que está fazendo é solicitar a outro desenvolvedor, puxa uma filial de seu repositório para o repositório. Isso significa que ele precisa fornecer 4 valores de entrada para criar uma solicitação de tração: o repositório de origem, a filial de origem, o repositório de destino e a filial de destino.

## modelos de ramificação populares   {#model}
Existem vários fluxos de trabalho ramificados que estão em uso pela comunidade de desenvolvedores em todo o mundo. Mas discutiremos os três modelos de ramificação mais populares, um por um

## # Git Flow
O GITFlow Workflow é um fluxo de trabalho Git que ajuda no desenvolvimento contínuo de software e na implementação de práticas do DevOps. O fluxo Git é o fluxo de trabalho mais conhecido nesta lista. Foi criado por [Vincent Driessen em 2010][7] e é baseado em dois ramos principais com uma vida infinita, juntamente com outros ramos de apoio, como recursos-\*, hotfixes-\* que se fundem no ramo de desenvolvimento como individual Os itens são concluídos.
  ***Master**  - Esta filial contém código de produção. Todo o código de desenvolvimento é mesclado no ramo mestre, uma vez pronto para ser empurrado para a produção.
  ***Desenvolver** -Esta filial contém código de pré-produção. Quando os recursos são concluídos, eles são fundidos para desenvolver.
O GITFlow é ideal para projetos que possuem um ciclo de lançamento programado. No entanto, a história do Git se torna ilegível.

## # Github Flow
O fluxo do GitHub é um fluxo de trabalho leve. Foi criado por [Github][8] em 2011 e se concentra principalmente no modelo ágil, onde você não espera por um ciclo de lançamento. Em vez disso, você pressiona diariamente as alterações à produção à medida que os recursos são concluídos.
O fluxo do GitHub segue a seguir os diretores:
  * Qualquer coisa na filial "mestre" é implantável.
  * Para trabalhar em algo novo, crie um ramo separado do mestre off com algum nome de descrição, por exemplo, "
  * Comprometa-se com essa ramificação local e regularmente, empurre seu trabalho para a ramificação do mesmo nome no servidor.
  * Quando você precisar de feedback ou ajuda, ou acha que a filial está pronta para a fusão, abra uma [solicitação de tração][4]
  * Depois de ser revisado e assinado no recurso, você pode mesclá -lo no mestre
  * Uma vez mesclado e empurrado para o 'Master', ele pode ser implantado na produção.

## # GitLab Flow
O fluxo GitLab é um fluxo de trabalho criado pelo GitLab em 2014. O fluxo do GitLab é uma alternativa mais simples ao GITFlow e combina o desenvolvimento de recursos e ramos com ramificações com rastreamento de problemas. A principal diferença entre o fluxo GitLab e o fluxo do GitHub é o uso de ramificações do ambiente.
Os desenvolvedores criam uma ramificação **desenvolver**  e fazem com que o padrão, enquanto o fluxo do GitLab funciona com a ramificação "principal" imediatamente. O fluxo GitLab incorpora vários ramos de pré-produção. E eles podem ser usados ​​para testar as coisas em diferentes níveis. por exemplo, da filial de teste à aceitação e depois da aceitação à produção.

## Conclusão   {#conclusion}
Neste artigo, aprendemos sobre as ramificações do Git e solicita solicitações. Estudamos a importância das solicitações de tração e como elas podem ser usadas em vários fluxos de trabalho do Git. Também exploramos diferentes modelos de ramificação Git.

  
[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: #branch
[3]: #create
[4]: #pull
[5]: #model
[6]: #conclusion
[7]: https://nvie.com/posts/a-successful-git-branching-model/
[8]: http://scottchacon.com/2011/08/31/github-flow.html
