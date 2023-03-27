---
title: "Tutorial de Ações do Github | Automatize seu primeiro fluxo de trabalho" 
seoTitle: "Tutorial de Ações do Github | Automatize seu primeiro fluxo de trabalho" 
description: "Siga este tutorial de ações do GitHub para explorar que como podemos usar as ações do GitHub para automatizar e executar nossos fluxos de trabalho de desenvolvimento de software em nosso repositório." 
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: "O GitHub introduziu ações do GitHub que permitem configurar integração contínua & amp; Implantação contínua usando um arquivo de configuração corretamente no seu repo GitHub." 
url: /pt/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']
---

## O Github introduziu ações do GitHub que permitem configurar integração contínua e implantação contínua usando um arquivo de configuração diretamente no seu repositório do GitHub.

{{< figure align=center src="images/github-actions-workflows.png" alt="tutorial de ações do github">}}


## Visão geral
Uma das melhores maneiras de aumentar a produtividade em um projeto de software é automatizar qualquer coisa manual ou repetitiva. E você pode se surpreender com o quão fácil é implementar quando você usa uma ferramenta incrível como **Github Actions** . Desde os últimos artigos, escrevi sobre [Git][1], [controle da versão][1] e [automação de fluxos de trabalho de desenvolvimento de software][2], e sobre [integração contínua e entrega contínua][3 ]. Portanto, espero que você esteja bem ciente dos repositórios e como usá -los.
No tutorial de Ações **do Github de hoje** , exploraremos as ações do GitHub e como você pode usá -lo para automação de aplicativos, personalização e executar seus fluxos de trabalho de desenvolvimento de software diretamente em seu repositório. Então vamos começar
* **[Revise os fluxos de trabalho do IC/CD][4]** 
* **[O que são ações do github][5]** 
* **[Compreendendo a sintaxe YAML][6]** 
* **[Criando seu primeiro fluxo de trabalho][7]** 
* **[Conclusão][8]** 

## CI/CD Fluxos de trabalho {#cicd}

O CI/CD é um método de implantações frequentes de seus projetos de desenvolvimento de software para os usuários finais em diferentes estágios com a ajuda da automação. **Integração contínua e implantação contínua** é mais uma filosofia e uma das melhores práticas para as equipes do DevOps implementarem, para fornecer mudanças de código com mais frequência e confiabilidade.
**Integração contínua** é um conjunto de práticas que incentiva as equipes de desenvolvimento a verificar com frequência os repositórios de controle de código. E, para cada pressão para o repositório, você pode criar um conjunto de scripts para criar e testar seu aplicativo automaticamente. Esses scripts ajudam a diminuir as chances de você introduzir erros em seu aplicativo.
**A implantação contínua** está um passo à frente nos seus fluxos de trabalho CI/CD. Ele não apenas criou e testa seu aplicativo sempre que uma alteração de código é empurrada para a base de código, mas o aplicativo também é implantado continuamente no seu servidor.

## O que são ações do github {#github-actions}

Na seção deste tutorial de ações do GitHub, saberemos o que são **ações do github** . No entanto, as ações do GitHub são uma API por causa e efeito no GitHub. Facilita automatizar todos os seus fluxos de trabalho de software, agora com CI/CD. Você pode projetar qualquer fluxo de trabalho, com base em qualquer evento, por exemplo (empurre para uma ramificação, solicitação de tração, etc.), enquanto o Github gerencia a execução. No entanto, você não precisa escrever as ações sozinho. O Github possui um mercado embutido onde as pessoas podem encontrar ações criadas por outras pessoas e reutilizá -las se atender às suas necessidades. As ações do GitHub suportam Node.js, Python, Java, Ruby, Php, Go, Rust, .NET e muito mais. Crie, teste e implante aplicativos em seu idioma de escolha.

## Sintaxe YAML {#yaml}

Vamos primeiro nos familiarizar com as sintaxes e as terminologias das ações **github** .
* **Fluxo de trabalho:**  Como a ação do GitHub fornece a instalação para criar recursos de integração contínua e integração contínua de ponta a ponta**, esse termo refere-se a esse ponto quando o fluxo começa a executar pela ferramenta CI.
* **Job** : Este termo refere -se a todas as tarefas em um único fluxo de trabalho. Um fluxo de trabalho contém mais de um trabalho e é necessário que todos eles concluam sua execução para impedir a falha.
* **Etapa:**  Para que um trabalho conclua sua execução, ele deve completar todas as etapas incorporadas nele.
* **Ação:**  Ação é o principal subconjunto da etapa e o menor subconjunto de fluxo de trabalho. Cada passo consiste em várias ações que devem ser executadas com sucesso.
Como você pode ver, o fluxo de trabalho, o trabalho, a etapa e a ação são interdependentes e a execução bem -sucedida de tudo é necessária para a conclusão bem -sucedida do pipeline CI/CD.

## Crie um fluxo de trabalho {#workflow}

Em um projeto de desenvolvimento de software, uma das equipes de desenvolvimento de problemas enfrentam é o formato do código -fonte e a aplicação das melhores práticas. Esse problema é mais óbvio para as equipes maiores. Pois envolvem mais desenvolvedores e todos têm seu próprio estilo de escrever códigos. Portanto, o uso de pacotes Linter é muito comum nas equipes. Mas agora, com as ações do **Github** , você pode realmente aplicar o linhador toda vez que alguém empurra o código para o repositório do GitHub.
Neste tutorial de ações do GitHub, você adicionará um fluxo de trabalho que fia vários idiomas de codificação usando a ação [Github Super-Linter][9]. O fluxo de trabalho usa o Super-Linter para validar seu código-fonte toda vez que um novo compromisso é empurrado para o seu repositório.
No seu repositório no Github, crie um novo arquivo no diretório**.
```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```
Para executar seu fluxo de trabalho, comprometa e empurre alterações no seu repositório do GitHub. Este evento de push acionará o fluxo de trabalho do Superling. E agora você pode ver os resultados do seu fluxo de trabalho entrando na guia da ação

{{< figure align=center src="images/actions-tab.png" alt="Tutorial de ações do github">}}

Na barra lateral esquerda, clique no fluxo de trabalho que você deseja ver.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Ações do GitHub Fluxo de trabalho">}}

O fluxo de trabalho do Super-Linter que você acabou de adicionar execuções sempre que o código é empurrado para o seu repositório para ajudá-lo a encontrar problemas em seu código. Seu repositório pode ter vários fluxos de trabalho que desencadeiam diferentes trabalhos com base em diferentes eventos. As ações do GitHub podem ajudá -lo a automatizar quase todos os aspectos dos processos de desenvolvimento de aplicativos. Esta foi apenas uma introdução básica às ações do GitHub. Existem toneladas de [recursos][10] disponíveis para um conhecimento profundo das ações do GitHub, que você pode usar.

## Conclusão {#conclusion}

Neste **tutorial de ações do github**, aprendemos sobre **integração contínua e implantação contínua** e **O que são ações do github** . E também exploramos como podemos usar as ações**Github** para criar um fluxo de trabalho CI/CD. Utilizamos um fluxo de trabalho de super-linter simples no mercado de ações do GitHub, para descobrir quaisquer inconsistências em nossa base de código. Nos próximos artigos, exploraremos as ações do GitHub em mais profundidade. Além disso, você pode encontrar outras postagens do blog relacionadas ao sistema de controle de versão**mencionado na seção "Explorar" abaixo.
Finalmente, [contendeRize.com][11] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Portanto, mantenha contato com a categoria [Software de controle de versão][12] para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][13], [LinkedIn][14] e [Twitter][15].

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Implantação contínua do GitLab | Como funciona?][16]
  * [Entenda e aprenda ramos e puxe solicitações no Git][2]
  * [Software de gerenciamento de código -fonte | O que é git?][17]
  * [Top 5 sistemas de controle de versão de código aberto em 2021][18]



[1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
[2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/
[3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[4]: #cicd
[5]: #github-actions
[6]: #yaml
[7]: #workflow
[8]: #conclusion
[9]: https://github.com/github/super-linter
[10]: https://docs.github.com/en/actions/learn-github-actions
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/version-control/
[13]: https://web.facebook.com/containerize
[14]: https://www.linkedin.com/company/containerize/
[15]: https://twitter.com/containerize_co
[16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
[17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/
[18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
