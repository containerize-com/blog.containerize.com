---
title: "Como instalar e configurar o servidor WAMP no Windows" 
seoTitle: "Como instalar e configurar o servidor WAMP no Windows" 
description: "Instale o WampServer no Windows e comece rapidamente a desenvolver aplicativos da Web baseados em PHP. O servidor Wamp está disponível para o Windows 32 e 64 bits." 
date: Fri, 28 May 2021 15:30:40 +0000
author: Masood Anwer
summary: "Configure um ambiente de desenvolvimento da Web para criar aplicativos da Web com Apache2, PHP e MySQL. Este artigo ajuda você a instalar o Wamp Server no Windows." 
url: /pt/how-to-install-and-configure-wamp-server-on-windows/
categories: ['Web Server Solution Stack']
---

## Configure um ambiente de desenvolvimento da Web para criar aplicativos da Web com Apache2, PHP e MySQL. Este artigo ajuda você a instalar o Wamp Server no Windows.

{{< figure align=center src="images/wamp-server-blog-post-banner.png" alt="Servidor wamp">}}

Todo desenvolvedor deve ter o software necessário instalado em seu computador antes de escrever o programa. Nos primeiros dias, os desenvolvedores precisavam instalar todos os softwares separadamente e depois configurá -los para trabalhar juntos. ** WampServer ** e outros softwares de pilha de soluções da Web já estão disponíveis, que agrupa todo o software necessário em um pacote. Você só precisa instalar um pacote para colocar seu ambiente de desenvolvimento em funcionamento.
Nesta postagem do blog, abordaremos as seguintes seções.
  *[** O que é WampServer? **] [1]
  *[** Instalação Wamp **] [2]
  *[** Configuração do WAMP **] [3]
  *[** Access PhpMyadmin **] [4]

## O que é WampServer? {#O que}
O WampServer é uma pilha de soluções gratuita para configurar o ambiente de desenvolvimento da Web para aplicativos baseados em PHP. Wamp significa (W - Windows, A - Apache, M - MySQL e P - Php). Além disso, ele também vem com phpmyadmin e administrador para o gerenciamento do banco de dados. O WAMP é uma das ferramentas populares e você pode configurá -lo rapidamente. Além disso, você pode configurar o servidor WAMP no painel de controle. Ele fornece um ambiente completo de desenvolvimento da Web para criar e testar aplicativos. O WampServer consiste em vários componentes que você pode selecionar durante a instalação de acordo com suas necessidades. O WampServer vem com várias versões de PHP. Você pode alterar facilmente a versão PHP conforme os requisitos do seu projeto. Além disso, você pode alterar o DBMS (sistema de gerenciamento de banco de dados) do painel de controle do WampServer.

## WAMP Instalação {#Installation}
Siga o guia passo a passo abaixo para instalar o Wamp Server no Windows.
  *** Baixe o WampServer ** do site oficial

{{< figure align=center src="images/wamp-download.png" alt="">}}

  *Escolha um ** WampServer 32 bits ** ou ** WampServer 64 bits ** Versão do instalador de acordo com o seu sistema operacional.
  *Localize o arquivo ** WAMP download ** e clique duas vezes nele para executar o processo de instalação.
  * Selecione o idioma e pressione o botão OK.
  * Escolha a caixa de seleção Eu aceito a caixa de seleção do Contrato e clique no botão Avançar.
  * Leia as informações importantes sobre a instalação do WampServer e clique no botão Avançar para prosseguir.
  * Selecione uma pasta onde deseja instalar o servidor Wamp e clique no botão Avançar.
  * Você deve selecionar os componentes que deseja instalar, conforme mostrado na captura de tela abaixo. Você pode selecionar todas as versões PHP e alternar durante o desenvolvimento. Além disso, você pode instalar o MySQL e o Mariadb.

{{< figure align=center src="images/wamp-select-components.png" alt="">}}

  * Selecione o atalho para WampServer e clique no botão Avançar.
  * Clique no botão Instalar para instalar o WampServer.
  * Agora, selecione o navegador padrão e o editor de texto padrão para o servidor wamp.
  * Sua instalação está completa. Clique no botão Concluir para sair do Assistente de Instalação do Wamp Server.
  * Abra seu navegador e digite localhost para acessá -lo. Você verá a página abaixo.

{{< figure align=center src="images/wamp-localhost-1024x520.png" alt="">}}


## WAMP Configuration {#Configuration}
Agora, analisaremos algumas configurações que o ajudam durante o desenvolvimento e teste dos aplicativos da Web. Agora você pode iniciar o WampServer clicando duas vezes no ícone WampServer de atalho na sua área de trabalho.
  *** Serviços **-Você pode ver as opções para iniciar, interromper e reiniciar todos os serviços clicando com a esquerda no ícone WampServer.
  *** Alterar banco de dados **-Clique com o botão direito do mouse no ícone Wamp para abrir a caixa de diálogo Ferramentas. Selecione Ferramentas e clique em "Inverter DBMS MARIADB MYSQL". O Wamp Server reiniciará automaticamente e você poderá ver o banco de dados padrão abrindo localhost no seu navegador.
  *** Altere a versão PHP **-Clique com o botão direito do mouse no ícone Wamp para abrir a caixa de diálogo Ferramentas. Selecione Ferramentas e altere a versão PHP CLI e clique na versão PHP desejada.
  *** Host Virtual ** - Você pode adicionar facilmente um host virtual através da interface da Web do WampServer. Abra o host localizador no seu navegador e clique em "Adicionar um host virtual" na seção Ferramentas. Digite “Nome do host virtual como dev.example.com” e digite o caminho absoluto do projeto. Clique no botão "Inicie a criação do virtualhost". Reinicie o servidor Apache para carregar o host virtual recém -criado.
  *** Altere a porta Apache ** - Por padrão, o servidor da Web Apache é executado na porta 80. Se você deseja usar uma porta diferente para o Apache, poderá fazê -lo no painel de controle do WampServer. Clique com o botão direito do mouse no ícone Wamp para abrir a caixa de diálogo Ferramentas. Selecione Ferramentas e clique em "Use uma porta diferente de 80". Digite um novo número de porta na caixa de diálogo e clique no botão OK.
  *** Alterar porta DBMS ** - Por padrão, o servidor de banco de dados é executado na porta 3306. Se você deseja usar uma porta diferente para o servidor de banco de dados, poderá fazê -lo no painel de controle do WampServer. Clique com o botão direito do mouse no ícone Wamp para abrir a caixa de diálogo Ferramentas. Selecione ferramentas e clique em "Use uma porta que não seja 3306". Digite o novo número da porta na caixa de diálogo e clique no botão OK.
  *** Logs vazios ** - Wamserver fornece funcionalidade para limpar os logs do painel de controle. Você pode esvaziar logs, como log de erros de PHP, log de erros do Apache, log de acesso Apache, log MySQL e log Mariadb. Até você pode limpar todos os logs de uma só vez. Clique com o botão direito do mouse no ícone Wamp para abrir a caixa de diálogo Ferramentas. Selecione Ferramentas e selecione logs vazios, você encontrará todas as opções para remover logs.
  *** Alterar linguagem ** - Você pode linguagem para o painel de controle do WampServer. Clique com o botão direito do mouse no ícone Wamp para abrir a caixa de diálogo Ferramentas. Selecione o idioma e clique no idioma necessário. Você verá o painel de controle no idioma recém -selecionado.

## Access phpMyadmin {#phpmyadmin}
Você pode acessar ** phpmyadmin ** para o gerenciamento de seus bancos de dados, abrindo localhost no seu navegador e clicando no link phpmyadmin na página de boas -vindas do WampServer. Além disso, você pode acessá -lo visitando http: // localhost/phpmyadmin URL.

## Conclusão
Discutimos o WampServer e abordamos o guia completo passo a passo para ** instalar o WampServer ** no Windows. Você pode instalar e configurar facilmente ** WampServer ** seguindo este tutorial e comece a codificar imediatamente. Você pode visitar os links em Seção Explorar para obter mais opções no software de pilha de soluções.
Finalmente, [** containerize.com **] [5] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta categoria [** Web Server Solution **] [6] para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
  *[** Melhores opções de pilha de soluções de servidor de código aberto **] [7]
  *[** Configuração xamp e phpmyadmin como localhost no Windows **] [8]
[1]: #What
[2]: #Installation
[3]: #Configuration
[4]: #phpMyAdmin
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/database-management-software/how-to-setup-xampp-and-phpmyadmin-as-localhost-on-windows/
