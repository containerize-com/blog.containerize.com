---
title: "Apache vs nginx | O que é Apache? | O que é nginx?" 
seoTitle: "Apache vs nginx | O que é Apache? | O que é nginx?" 
description: "Este artigo é sobre comparação Apache vs Nginx. Ambos os servidores da Web são de código aberto, configuráveis ​​e lidam com mais da metade do tráfego da Internet do mundo." 
date: Fri, 26 Feb 2021 10:57:10 +0000
author: bilalahmed
summary: "O Apache usa uma abordagem orientada ao processo e o NGINX usa abordagem orientada a eventos para processar solicitações de usuário. Vamos explorar a diferença entre Apache e Nginx." 
url: /pt/apache-vs-nginx-what-is-apache-what-is-nginx/
categories: ['Web Server Solution Stack']
---

## Apache usa uma abordagem de processo e o NGINX usa a abordagem orientada a eventos para processar solicitações de usuário. Vamos explorar a diferença entre Apache e Nginx.

{{< figure align=center src="images/Apache-vs-NGINX-–-Detailed-Comparison-in-2021.png" alt="Apache vs nginx">}}


## Visão geral
Embora o Apache e o Nginx compartilhem muitas qualidades, eles não devem ser considerados totalmente intercambiáveis. Ambos os servidores da Web de código aberto são diferentes um do outro e devem ser selecionados de acordo com as necessidades de seus aplicativos da Web. Neste artigo, discutiremos ** Apache vs Nginx ** Comparação em detalhes.
  * [O que é Apache?] [1]
  * [O que é nginx?] [2]
  * [Apache vs Nginx Comparish] [3]
  * [É nginx melhor que Apache] [4]
  * [Conclusão] [5]
  * [Explore] [6]

## O que é Apache? {#whatisapache}
O Apache Web Server é um dos servidores mais populares da Internet e serve mais de 27% dos sites. O Apache é principalmente a primeira escolha dos desenvolvedores devido à sua flexibilidade, poder, bem como suporte generalizado e documentação detalhada. Ele suporta módulos dinamicamente carregáveis ​​que permitem que os desenvolvedores estendam facilmente sua funcionalidade.

## O que é nginx? {#whatisnginx}
Este artigo é sobre comparação Apache vs Nginx. Ambos os servidores da Web são de código aberto, configuráveis ​​e lidam com mais da metade do tráfego da Internet do mundo.

## Apache vs nginx Comparação {#apachevsnginx}
Nesta seção, vamos comparar o Apache e o Nginx com base no suporte, documentação, tipo de conteúdo e estrutura de configuração.

#### Arquitetura
O Apache inicia vários processos de servidor para compartilhar a carga de trabalho no momento da inicialização. Há um processo pai e muitos processos filhos. Cada processo filho é responsável por criar threads de servidor que lidam com solicitações recebidas. O Apache usa o módulo de multipocessamento para atribuir processos filhos para aceitar solicitações e vincular portas de rede. Pelo contrário, o Nginx apresenta uma arquitetura orientada a eventos. O NGINX possui um processo mestre que controla a ligação da porta e a leitura de configuração. O processo principal cria subprocessos de acordo com um modelo de processo previsível, diferentemente do Apache, que permite que o servidor nginx use os recursos com mais eficiência. Para cada nova solicitação, o NGINX inicia um evento e cria um descritor de arquivo que ocupa apenas uma pequena memória de processo. Isso torna o Nginx mais escalável que o Apache. O Apache consome muito mais memória de processo para cada conexão.

Módulos ####
Tanto o Apache quanto o Nginx têm a capacidade de modular para estender ou modificar sua funcionalidade principal. A implementação para módulos é diferente para Apache e Nginx e a principal diferença é a carga de módulos. No caso do Apache, os módulos são carregados dinamicamente apenas quando há necessidade deles. Pelo contrário, os módulos Nginx são integrados ao núcleo e são carregados na inicialização, mesmo que você não precise deles. Nesse sentido, o Apache é uma plataforma mais personalizável para desenvolvedores em comparação com o NGINX. Isso é uma limitação para os usuários no que diz respeito à flexibilidade, mas na nota positiva, significa melhor segurança, pois os módulos dinâmicos podem representar preocupações de segurança.

#### Suporte e documentação
O Apache é o vencedor claro aqui se o compararmos com base no apoio e documentação, porque está no mercado há tanto tempo. Há uma grande biblioteca de documentação disponível para o servidor Apache. Comparativamente, o NGINX também está se tornando popular devido à sua utilização de alto desempenho e recursos e, portanto, seu apoio e documentação estão crescendo rapidamente.

#### estático vs conteúdo dinâmico
O Apache serve por conta própria estática e dinâmica. Por outro lado, o NGINX não tem a capacidade de servir conteúdo dinâmico, por isso passa essas solicitações para o software de terceiros. Os servidores Apache lidam com o conteúdo estático usando seus métodos convencionais baseados em arquivos.

#### Arquivo vs interpretação baseada em URI
O Apache Server tem a capacidade de interpretar uma solicitação como um recurso físico no sistema de arquivos ou como um local de URI. Por outro lado, o NGINX foi projetado para funcionar como um servidor da Web e um servidor proxy também. Devido à arquitetura necessária para essas duas funções, funciona principalmente com URIs, traduzindo para o sistema de arquivos quando necessário. O NGINX não especifica a configuração para um diretório do sistema de arquivos e, em vez disso, ele analisa o próprio URI.

#### Configuração
O Apache fornece a capacidade de os desenvolvedores definirem a configuração no nível do diretório usando o arquivo referido como .htaccess. Mas, no caso do NGINX, não existe esse mecanismo para definir a configuração no nível do diretório. O Apache fornece mais flexibilidade do que o NGINX em termos de configurações.

## nginx é melhor que o apache? {#nginx}
O NGINX é mais rápido que o Apache para servir o conteúdo estático. Portanto, se o seu aplicativo da Web serve muito conteúdo estático, o SIM NGINX será melhor e mais rápido que o Apache. No que diz respeito ao conteúdo dinâmico, os dois servidores da Web quase oferecem o mesmo desempenho, para que não haja vencedor claro aqui. Tanto o Apache quanto o Nginx são executados em quase todos os sistemas operacionais, mas o desempenho do NGINX no Windows não é tão bom em comparação com o Apache. Se o seu sistema operacional for um sistema semelhante ao UNIX e seu aplicativo da Web for crítico de desempenho, então sim, o nginx será melhor que o Apache.

## Conclusão {#conclusion}
Apache e Nginx são capazes à sua maneira. Discutimos a comparação Apache vs Nginx, o que é o Apache, o que é Nginx em detalhes e a diferença entre Apache e Nginx. A seleção de um desses dois servidores da Web mais populares depende totalmente dos requisitos de seus aplicativos da Web. A seleção depende de suas expectativas com desempenho, utilização de recursos, velocidade, escalabilidade e suporte de um servidor da Web. Ambos têm seus próprios benefícios. Não existe um servidor web de tamanho único, portanto, use a solução que melhor se adapta aos seus objetivos e expectativas.
Finalmente, [contenderize.com] [7] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Portanto, mantenha contato com a categoria [Open Open Servers Web] [8] para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook] [9], [LinkedIn] [10] e [Twitter] [11].

## Explore {#Explore}
Você pode encontrar os seguintes links relevantes:
  * [5 Top 5 Solução de servidor da Web de código aberto Stacks em 2021] [12]
  * [Configuração xampp e phpmyadmin como localhost no Windows] [13]
  * [Xampp | Pilha de solução de servidor web de código aberto e de código aberto] [14]
  * [Nginx | Servidor web leve e de alto desempenho] ​​[15]
  * [Tutorial de configuração para pilha Lemp no Ubuntu 18.04] [16]
[1]: #whatisapache
[2]: #whatisnginx
[3]: #apachevsnginx
[4]: #nginx
[5]: #conclusion
[6]: #explore
[7]: https://www.containerize.com/
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://blog.containerize.com/2021/01/08/top-5-open-source-web-server-solution-stacks-in-2021/
[13]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
[14]: https://products.containerize.com/solution-stack/xampp
[15]: https://products.containerize.com/solution-stack/nginx
[16]: https://blog.containerize.com/web-server-solution-stack/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
