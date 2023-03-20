---
title: "Tutorial jhipster | Introdução com o software RAD" 
seoTitle: "Tutorial jhipster | Introdução com o software RAD" 
description: "Um tutorial Jhipster passo a passo para iniciantes para começar. Siga este artigo para configurar o primeiro aplicativo com o Software Jhipster Rad de código aberto." 
date: Wed, 28 Oct 2020 10:42:37 +0000
author: muhammadmustafa
summary: "Vamos mergulhar em um gerador de código -fonte. Ele oferece recursos prontos para a caixa para gerar aplicativos responsivos baseados na Web com API REST bem documentada." 
url: /pt/jhipster-tutorial-getting-started-with-rad-software/
categories: ['Rapid Application Development']
---

## Vamos mergulhar em um gerador de código -fonte. Ele oferece recursos prontos para a caixa para gerar aplicativos responsivos baseados na Web com API REST bem documentada.

{{< figure align=center src="images/How-to-set-up-and-create-a-basic-application-with-Jhipster.png" alt="tutorial jhipster">}}


## Visão geral:
Recentemente, publicamos uma [postagem do blog][1] sobre a importância do [RAD Software][2] nos tempos atuais. A tecnologia está evoluindo em um ritmo muito alto. Os requisitos e as necessidades de negócios estão mudando dia a dia. Há uma corrida para desenvolver soluções em um período mais curto. Por outro lado, toda empresa deseja capturar o mercado lançando o produto o mais rápido possível. Portanto, a comunidade de código aberto desenvolveu muitos softwares baseados no desenvolvimento de software ** **. Esses softwares de desenvolvimento de aplicativos rápidos gratuitos facilitam os usuários com recursos rápidos de desenvolvimento de prototipagem. Ele permite criar e iniciar a versão inicial do seu produto e, portanto, você pode desenvolver mais lançamentos com a entrada de feedback do usuário. Além disso, esses softwares foram projetados para absorver qualquer alteração em qualquer estágio do projeto.
Enquanto isso, as equipes de desenvolvimento de software aceleram seus processos de desenvolvimento e garantem as entregas anteriores. De fato, é econômico, economizando tempo e dá satisfação aos desenvolvedores e usuários. O rápido desenvolvimento de aplicativos é flexível o suficiente para que você não precise ter prazos planejados e rigorosos. Você constrói o que seus consumidores finais precisam. Neste tutorial Jhipster, veremos como configurar [Jhipster][3] e criaremos nosso primeiro aplicativo com ele cobrindo os seguintes pontos:
  * [O que é Jhipster e como instalá -lo?][4]
  * [Como gerar e executar um aplicativo básico?][5]
  * [Explore o painel administrador do aplicativo gerado][6]
  * [Conclusão][7]

## O que é jhipster e como instalá -lo? {#instalar}
[Jhipster][3] é um software RAD de código aberto usado para gerar aplicativos da Web corporativos. Este construtor de aplicativos de código aberto oferece uma estrutura de inicialização de spring baseada em Java nos tecnologias populares e populares do lado do servidor, como Angular, Vue.js e React.js. Este gerador de código -fonte inclui arquitetura robusta de microsserviço com vários mecanismos de autenticação de usuário, como OAuth.20, JWTS e autenticação de sessão HTTP. Além disso, ele fornece uma versão online na qual os usuários podem explorar todos os recursos. Esta ferramenta de prototipagem ** de código aberto ** está escrito em JavaScript com um pouco de entrada do TypeScript. Portanto, a documentação abrangente está disponível em relação ao desenvolvimento e implantação. Os desenvolvedores podem encontrar o código -fonte no [github][8] repo. Há suporte completo para executar testes usando estruturas de testes populares, como gatling e transferidor. Além disso, é robusto, seguro, de plataforma cruzada e suporta integrações de terceiros.
Neste tutorial ** jhipster, ** exploraremos o Jhipster sobre sua configuração e uso. [Jhipster][3] é gratuito e construído sobre o modelo de desenvolvimento de aplicativos rápido. Ele fornece um ecossistema amigável ao desenvolvedor que é bastante promissor e apresenta poderosas ferramentas rápidas de desenvolvimento de aplicativos da Web.
Vamos ver como podemos instalar este construtor de aplicativos de código aberto. Primeiro, instalaremos os seguintes pré -requisitos.
  * [Java 11 JDK][9]
  * [Node.js 10.20.1+][10]
Depois que a instalação for concluída, abra o terminal e execute o seguinte comando.
`npm install -g gerador -jhipster`
Este comando pode levar alguns minutos e, após a conclusão bem -sucedida, o Jhipster será instalado em sua máquina.
Você pode verificar o seguinte comando para verificar a instalação.
`jhipster -version`

{{< figure align=center src="images/install-1024x564.png" alt="Instalação Jhipster">}}


## Como gerar e executar um aplicativo básico? {#correr}
Na seção deste tutorial ** jhipster **, aprenderemos como gerar nosso primeiro aplicativo usando este software RAD de código aberto.
Volte para a janela do terminal, execute os seguintes comandos:
`mkdir 1Stappcd 1STAPP/`
Depois de fazer diretórios, execute o seguinte comando mencionado abaixo:
`jhipster`
Este comando iniciará o processo. Responda a todas as perguntas sobre as preferências de tecnologia do aplicativo, como tecnologias de front -end e back -end, banco de dados, estrutura de teste e muito mais, como você pode ver na imagem abaixo.

{{< figure align=center src="images/qst-1024x474.png" alt="tutorial jhipster">}}

Depois de responder a todas as perguntas, este gerador de código -fonte gerará arquivos de código na sua pasta.
Agora, execute o aplicativo gerado com o seguinte comando:
`./mvnw`
NOTA: Este comando funcionará se você escolheu o Maven como automação de construção para o back -end.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.02.31-1024x196.png" alt="tutorial jhipster">}}

Acesse seu aplicativo no navegador em http: // localhost: 8080/.

## Explore o painel de administração do aplicativo gerado {#Dashboard}
Depois de atingir http: // localhost: 8080/No seu navegador, você verá a tela a seguir.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.56.41-1024x488.png" alt="gerador de código">}}

Você pode usar as credenciais mencionadas para fazer login como admin. O Jhipster fornece duas funções de usuário padrão. Após um login bem -sucedido, você terá as seguintes disposições mostradas na imagem.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.12-1024x532.png" alt="Software RAD de código aberto">}}

O JHipster fornece gerenciamento completo de usuários, onde você pode gerenciar seus usuários, como pode ver na imagem abaixo.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.25-1024x451.png" alt="JHIPSTER DOUSER Management">}}

A opção de saúde fornece informações sobre seu espaço e banco de dados em disco.

{{< figure align=center src="images/Screenshot-2020-10-27-at-16.10.54-1024x344.png" alt="tutorial jhipster">}}

Existe um sistema completo de registro disponível no painel de administrador Jhipster.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.38-1024x583.png" alt="Software RAD de código aberto">}}

O painel administrativo deste construtor de aplicativos de código aberto também fornece pontos de extremidade de restos de funcionalidades internas e personalizadas.

{{< figure align=center src="images/Screenshot-2020-10-27-at-15.57.48-1024x582.png" alt="Jhipster de código aberto">}}


## Conclusão {#con}
Este é o fim deste tutorial Jhipster. Existem muitas plataformas RAD de código aberto que fornecem ** Desenvolvimento de aplicativos instantâneos **. Há uma comunidade muito vibrante que está sempre viva para responder aos problemas e suas soluções. A metodologia RAD está ganhando fama devido a muitos fatores. Em primeiro lugar, não há necessidade de ter um entendimento completo dos requisitos. Em segundo lugar, o consumidor final está envolvido ao longo do ciclo de vida do desenvolvimento de software. Em terceiro lugar, o fator de risco é muito menor, pois todas as partes interessadas estão a bordo. No entanto, o software RAD é adaptável, amigável ao desenvolvedor e flexível às mudanças. Economiza muito tempo, pois os geradores de código salvam um imenso tempo de reescrever os scripts repetitivos. Este artigo ** [JHIPSTER][3] Tutorial ** destacou algumas idéias importantes. É leve e fácil de configurar com alguns comandos de shell simples.
Sinta -se à vontade para instalar este construtor de aplicativos de código aberto hoje se estiver procurando seriamente uma plataforma de desenvolvimento de aplicativos rápida de código aberto. Finalmente, [contendeRize.com][11] está pronto para aprimorar sua base de tutoriais com alguns tutoriais mais interessantes. Fique conectado com esta categoria [Rapid Application Development][2] para atualizações regulares.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Plataforma Cuba][12]
  * [QuickApp][13]
  * [Jhipster][3]
  * [Li3][14]
  * [Apache ISIS][15]
  * [Top 5 Software de desenvolvimento de aplicativos rápido gratuito em 2021][16]
  * [Software de desenvolvimento de aplicativos rápido para negócios | Rad][17]
  * [Coisas para revisar antes de optar por software de código aberto em 2021][18]

  
[1]: https://blog.containerize.com/2020/10/23/how-rad-software-can-help-you-to-grow-business-to-next-level/
[2]: https://products.containerize.com/rad
[3]: https://products.containerize.com/rad/jhipster
[4]: #install
[5]: #run
[6]: #dashboard
[7]: #con
[8]: https://github.com/jhipster/generator-jhipster
[9]: https://www.oracle.com/java/technologies/javase-jdk11-downloads.html
[10]: https://nodejs.org/en/
[11]: https://www.containerize.com/
[12]: https://products.containerize.com/rad/cuba
[13]: https://products.containerize.com/rad/quickapp
[14]: https://products.containerize.com/rad/li3
[15]: https://products.containerize.com/rad/apache-isis
[16]: https://blog.containerize.com/rapid-application-development/top-5-free-rapid-application-development-software-in-2021/
[17]: https://blog.containerize.com/rapid-application-development/rapid-application-development-software-for-business-rad/
[18]: https://blog.containerize.com/cmdb-software/things-to-review-before-opting-open-source-software-in-2021/
