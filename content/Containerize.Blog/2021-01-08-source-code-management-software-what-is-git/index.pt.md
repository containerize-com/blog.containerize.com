---
title: "Software de gerenciamento de código -fonte | O que é Git?" 
seoTitle: "Software de gerenciamento de código -fonte | O que é Git?" 
description: "O que é Git? O GIT é um software de gerenciamento de código -fonte gratuito que permite gravar, revisar alterações em seus arquivos de origem e gerenciar projetos com eficiência." 
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: "Neste artigo, exploraremos o que é Git & amp; Como funciona o git? O Git é um sistema de controle de versão projetado para gerenciar o código -fonte, rastrear & amp; versões de log." 
url: /pt/source-code-management-software-what-is-git/
categories: ['Version Control Software']
---

## Neste artigo, exploraremos o que é Git e como funciona? O GIT é um sistema de controle de versão projetado para gerenciar o código -fonte, rastrear e logar versões.

{{< figure align=center src="images/version-control-banner.png" alt="software de gerenciamento de código fonte">}}


## Visão geral
Imagine você como desenvolvedor de software trabalhando em um projeto. Você tem mais de uma pessoa trabalhando nisso. E há um único arquivo que contém o código -fonte. Como todos fazem alterações no código, eles terão versões diferentes do arquivo cada vez que fazem uma alteração. Então, agora como gerenciaríamos versões diferentes do mesmo arquivo? É aí que o software de gerenciamento de código -fonte entra em ação. Ajuda a gerenciar e a mesclar versões diferentes do mesmo arquivo. E até permita que você rastreie o histórico de mudança. E você sempre pode ter certeza de quem fez as alterações no arquivo e quais são essas alterações.
Neste artigo, aprenderemos sobre o sistema de controle de versão Git. Como você pode usá -lo para gerenciar seus arquivos de código -fonte de desenvolvimento de software ou quaisquer outros arquivos. Então vamos começar.
*  **[O que é sistema de controle de versão][1]**  
*  **[O que é git][2]**  
*  **[Como o git funciona][3]**  
*  **[Instale Git][4]**  
*  **[Configurando um repositório][5]**  
*  **[Salvar alterações no repositório][6]**  
*  **[Verifique o status do repositório][7]**  
*  **[reverter ou desfazer mudanças][8]**  
*  **[Conclusão][9]**  

## O que é sistema de controle de versão {#version-control}

O controle da versão é um sistema que registra alterações em um arquivo ou conjunto de arquivos ao longo do tempo, para que você possa lembrar versões específicas posteriormente. Se você é desenvolvedor de software e deseja manter as versões do arquivo de código -fonte, o software de gerenciamento de código -fonte é uma coisa muito útil para você. Ele permite reverter os arquivos selecionados de volta a um estado anterior, reverter o projeto inteiro de volta a um estado anterior, comparar alterações ao longo do tempo, veja quem modificou algo pela última vez que poderia estar causando um problema, que introduziu um problema e quando e mais. Usar o controle da versão significa que você nunca precisa se preocupar em perder seu trabalho.

## O que é git {#git}

O Git é um sistema de controle de versão gratuito e de código aberto projetado para lidar com tudo, desde projetos pequenos a muito grandes, com velocidade e eficiência. Ao contrário dos sistemas de controle de versão centralizada mais antigos, como SVN e CVS, o controle da versão Git é distribuído. Todo desenvolvedor tem o histórico completo de seu repositório de código localmente. No entanto, isso torna o clone inicial um pouco lento. Mas, depois disso, todos os compromissos e outras operações são muito rápidos. O Git permite que você tenha várias filiais locais que podem ser totalmente independentes uma da outra.

## Como funciona o git {#how}

Usando o Git, você pode fazer alterações no seu repositório local e empurrá -lo para uma ferramenta de hospedagem. Ou você pode extrair as alterações de outros da ferramenta de hospedagem para a sua máquina local. Aqui está uma visão geral básica de como funciona o software de gerenciamento de código -fonte (GIT).
  1. Crie um "repositório" com uma ferramenta de hospedagem Git (como Github, Gitlab ou Bitbucket)
  2. Clone o repositório para sua máquina local
  3. Adicione um arquivo ao seu repositório local
  4. Salvar (comprometer) alterações no seu repositório local
  5. “Empurre” suas alterações em sua filial mestre em uma hospedagem remota
  6. Faça uma alteração no seu arquivo com uma ferramenta de hospedagem Git e cometida
  7. “Puxe” as mudanças na sua máquina local
  8. Crie uma “ramificação” (versão), faça uma mudança, cometer a mudança
  9. Abra uma “solicitação de tração” (proponha alterações no ramo principal)
 10. “Merge” sua filial para o ramo mestre

## Instale o git {#install}

Existem diferentes métodos disponíveis para instalar o git no seu computador. Você pode instalá -lo como um pacote ou através de outro instalador ou baixar o código -fonte e compilá -lo você mesmo.

### Instalando no Linux
Se você deseja instalar as ferramentas básicas do Git no Linux por meio de um instalador binário, geralmente pode fazê -lo através da ferramenta de gerenciamento de pacotes que acompanha sua distribuição. Para o Fedora (ou qualquer distribuição baseada em RPM intimamente relacionada, como RHEL ou CENTOS), você pode usar "DNF"
```
$ sudo dnf install git-all
```
Se você está em uma distribuição baseada no Debian, como o Ubuntu, tente "apt"
```
$ sudo apt install git-all
```

### Instalando no macOS
Existem várias maneiras de instalar o Git em um Mac. O mais fácil é provavelmente instalar as ferramentas de linha de comando Xcode. Em Mavericks (10.9) ou acima, você pode fazer isso simplesmente tentando executar  **git**  do terminal pela primeira vez.
```
$ git --version
```
Se você ainda não o tiver instalado, ele solicitará que você o instale.

## Configurando um repositório {#init}

Um repositório Git é o armazenamento virtual para seus arquivos de código. Ele permite armazenar versões diferentes do seu código, que você pode acessar quando necessário.
Para criar um novo repositório, você usará o comando  **git init** . O GIT INT é um comando único que você usa durante a configuração inicial de um novo repo. A execução deste comando criará um novo subdiretório .git em seu diretório de trabalho atual. Isso também criará uma nova ramificação **mestre**  .

{{< figure align=center src="images/git-init-2.gif" alt="O que é git">}}


## Salvar alterações no repositório {#commit}

Agora que você possui um repositório inicializado, pode confirmar alterações na versão de arquivo.

{{< figure align=center src="images/git-add-commit-1.gif" alt="Git Commit">}}


## Verifique o status do repositório {#status}

O comando  **git status** exibe o estado do diretório de trabalho e a área de estadiamento. Ele permite que você veja quais alterações foram realizadas, que não foram e quais arquivos não estão sendo rastreados pelo software de gerenciamento de código -fonte (GIT). A saída de status não mostra nenhuma informação sobre o histórico de projetos comprometidos. Para isso, você precisa usar o log **git**  .

{{< figure align=center src="images/git-status-2.gif" alt="software de gerenciamento de código fonte">}}

O Git Log mostrará a você seguindo a saída
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```

## Reverte suas mudanças {#revert}

Você pode usar o comando git revert para desfazer uma alteração que você já cometeu no seu repositório. Primeiro, use o comando "Git Log" para obter a lista de compromissos
```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```
Em seguida, decida qual compromisso você deseja reverter. E use o comando Git revert como abaixo
```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```
Como você pode ver, o Git Revert criou um novo compromisso que desfaz as alterações que foram feitas no "Segundo Commits".

## Conclusão
Agora que você leu o artigo inteiro, onde discutimos o que é Git e como funciona, você deve estar ciente do software de gerenciamento de código -fonte. Qual é o objetivo e por que você precisa. Exploramos como o Git pode ajudá -lo a gerenciar o código -fonte do seu projeto. E também aprendemos sobre como usar diferentes comandos GIT para inicializar e repositório, salvar suas alterações e como desfazer as alterações. Em nossos próximos tutoriais, exploraremos mais o Git e compartilharemos como podemos usar comandos diferentes para gerenciar melhor seu código.

## Explore
Você pode encontrar os seguintes links relevantes:
* [  **Automatize os fluxos de trabalho de desenvolvimento de software com ações do GitHub**  ][10]
*  **[Como configurar um pipeline de implantação contínua com GitLab CI/CD][11]**  
*  **[Entenda e aprenda ramos e puxe solicitações em git][12]**  
*  **[Top 5 sistemas de controle de versão de código aberto em 2021][13]**  



 [1]: #version-control
 [2]: #git
 [3]: #how
 [4]: #install
 [5]: #init
 [6]: #commit
 [7]: #status
 [8]: #revert
 [9]: #conclusion
 [10]: https://blog.containerize.com/version-control-software/github-actions-tutorial-automate-your-first-workflow/
 [11]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
 [12]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
 [13]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
