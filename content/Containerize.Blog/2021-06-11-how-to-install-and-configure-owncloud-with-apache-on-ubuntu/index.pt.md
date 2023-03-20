---
title: "Como instalar e configurar o OwnCloud com o Apache no Ubuntu" 
seoTitle: "Como instalar e configurar o OwnCloud com o Apache no Ubuntu" 
description: "O OwnCloud é um software cliente-servidor de código aberto para criar serviços de hospedagem de arquivos. Neste tutorial, aprenderemos a instalar e configurar o OwnCloud no Ubuntu" 
date: Fri, 11 Jun 2021 18:59:44 +0000
author: yasir saeed
summary: "O OwnCloud é uma coleção de código-fonte aberto de software cliente-servidor para criar servidores de hospedagem de arquivos. Este tutorial é sobre como configurar o OwnCloud no Ubuntu." 
url: /pt/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## O OwnCloud é uma coleção de fontes de código aberto do software cliente-servidor para criar servidores de hospedagem de arquivos. Este tutorial é sobre como configurar o OwnCloud no Ubuntu.

{{< figure align=center src="images/Install-and-Configure-ownCloud-with-Apache-on-Ubuntu.png" alt="">}}


## **Visão geral**
O OwnCloud é um aplicativo Web de código aberto robusto gratuito e popular, escrito no PHP usado para sincronização de dados e compartilhamento de arquivos. Ele também permite gerenciar facilmente arquivos de dados, contatos, calendários, listas e muito mais. É uma ótima alternativa para as plataformas de nuvem mais populares, como Google Drive, Dropbox, iCloud e outros serviços de armazenamento em nuvem por aí. Mas, diferentemente dos outros serviços de armazenamento em nuvem, o OwnCloud Hosted é gratuito para criar a própria nuvem de host.
O OwnCloud é um software de nuvem privada de código aberto que fornece acesso a dados usando a interface da Web para criar uma nuvem privada. Ele permite que você crie seu próprio servidor de compartilhamento de arquivos, onde você pode visualizar e sincronizar eventos, arquivos, fotos, gravações, tarefas, livros com livros, semelhantes ao Dropbox e Google Drive. Ele também fornece opções para sincronizar e compartilhar dados entre os dispositivos, todos sob seu controle. Instale e configure o OwnCloud suporta seus dados sincronizados para clientes de desktop, bem como dispositivos de aplicativos móveis. Além disso, você pode implementar facilmente restrições de acesso ao usuário e grupo em arquivos por usuário usando o OwnCloud no Ubuntu. O OwnCloud Open Open Storage Storage Server é um aplicativo de plataforma cruzada e pode ser instalado em todos os sistemas operacionais populares.
Este tutorial ajudará você a configurar o OwnCloud e configurar o OwnCloud nos sistemas Ubuntu LTS.
  * Instale o servidor de lâmpadas
  * Download OwnCloud
  * Crie banco de dados e usuário do MySQL
  * Instale o OwnCloud
  * Quais são as melhores alternativas para o próprio cloud?
  * Conclusão

## Etapa 1: Instale o servidor de lâmpadas
Para configurar o próprio servidor em nuvem e como criar uma nuvem privada, primeiro precisamos configurar um servidor de lâmpadas em execução. Se você já instalou e executando a pilha de lâmpadas, pule esta etapa use os comandos de seguidores para configurar a lâmpada no seu sistema Ubuntu.

### Instale o php
Você pode instalar o PHP 5.6 ou versão superior no seu sistema Ubuntu ou Debian, executando comandos:
SUDO APT-GET Instale Python-Software-Properties
sudo add-aprop-repository ppa: ondrej/php
Atualização de sudo apt-get
sudo apt -get upgrade -y
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_31_}}

### Instale o Apache2
O Apache é o software de servidor Web de código aberto mais amplamente usado. Em seguida, instale o servidor da Web Apache no Ubuntu para configurar seu próprio servidor em nuvem executando:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_35_}}

### Instale o MySQL
O sistema de gerenciamento de banco de dados relacional de código aberto do MySQL é um componente da pilha de software de aplicativos da Web da LAMP e de outros. Agora instalando o MySQL no Ubuntu, executando abaixo:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_39_}}

## Etapa 2: Baixe OwnCloud no Ubuntu
Depois de configurar com êxito o servidor de lâmpadas no seu sistema Ubuntu, vamos baixar a solução mais recente de armazenamento em nuvem privada OUDCLOUD em seu [site oficial][1].
CD /TMP
wget https://download.owncloud.org/community/owncloud-10.4.0.tar.bz2
{{_LINE_44_}}
Após o download do OwnCloud Server Software concluído, agora extraia o arquivo baixado no documento do site Raiz e configure as permissões apropriadas em arquivos e diretórios executando para instalar o OwnCloud no Ubuntu.
CD/var/www/html
sudo tar xjf /tmp/owncloud-10.4.0.tar.bz2
sudo chown -r www-data: www-data próprio
sudo chmod -R 755 OwnCloud
{{_LINE_50_}}
Agora, remova o arquivo de arquivo e reinicie o Apache Server.
sudo rm -f /tmp/owncloud-10.4.0.tar.bz2
sudo systemctl reiniciar apache2

## Etapa 3: Crie banco de dados e usuário do OwnCloud
Após extrair código, agora vamos criar um banco de dados MySQL e uma conta de usuário para configurar o OwnCloud Personal Cloud Storage Server. Use o seguinte conjunto de comandos para fazer login no MySQL Server para criar banco de dados e usuário do OwnCloud.
Mysql -u Root -p
Digite a senha:
MySQL> Criar banco de dados OwnCloud;
mysql> conceda tudo no própriocloud.
mysql> privilégios de descarga;
mysql> desistir
{{_LINE_62_}}
Em seguida, precisamos instalar o OwnCloud no Ubuntu na interface da web para criar uma nuvem privada.

## Etapa 4: Instale o OwnCloud no Ubuntu
Agora acesse o diretório de painel do servidor pessoal do OwnLoud Best Cloud em um navegador da Web. Altere o host local para o endereço IP do servidor ou o nome de domínio.
http: // localhost/owncloud/
{{_LINE_67_}}
Você deve ver a página de login de Open Source OwnCloud. Digite novas credenciais de nome de usuário e senha do Admin para criar uma conta de administrador e fornecer a localização da pasta de dados. Se tudo está bem, então você deve obter a página da web como esta.
{{_LINE_69_}}

{{< figure align=center src="images/owncloud-setup-1.png" alt="Instale o OwnCloud com o Apache no Ubuntu">}}

{{_LINE_71_}}
Agora deslize sua página para baixo. No formulário abaixo, você precisa inserir o nome de usuário e a senha para gerenciar o melhor painel de OwnCloud do servidor de nuvem pessoal. Forneça também o banco de dados, juntamente com o nome de usuário e a senha para conectar o OwnCloud Server com o servidor de banco de dados, o local da pasta de dados e clique em ** Concluir Configuração **.
{{_LINE_73_}}

{{< figure align=center src="images/owncloud-setup-2.png" alt="Configure o OwnCloud no Ubuntu">}}

{{_LINE_75_}}
Depois de concluir a configuração, você receberá o painel de administração. Onde você pode criar usuários, grupos e atribuí -los permissões, etc.
{{_LINE_77_}}

{{< figure align=center src="images/owncloud-after-login.png" alt="Instale o OwnCloud Painel">}}

{{_LINE_79_}}
Sim! Terminamos o Guia de instalação do OwnCloud para criar armazenamento em nuvem pessoal. Agora você sabe como instalar completamente o OwnCloud no Ubuntu para criar uma nuvem privada passo a passo semelhante ao Dropbox ou Google Drive.

## ** Quais são as melhores alternativas para o própriocloud? ** {#4A1A}
A seguir, as alternativas e os concorrentes do Own -Host
  *** SEAFIL
  *** NextCloud ** é grátis e a plataforma de armazenamento em nuvem de código aberto
  *** Resilio Sync ** é o aplicativo de sincronização de arquivos de código -fonte a ponto de código aberto
  *** células Pydo ** é o software de compartilhamento e sincronização de arquivos de código aberto
  *** Sincronização ** é APLICAÇÃO DE SINCRONIZAÇÃO DE ARQUIVO DE PEER-PEERA FREE E ABERTA

## ** CONCLUSÃO: ** {#Block-DD1258F4-E0C5-4AC9-BE18-7DD2A700F09E}
Parabéns! Você instalou e configurou com sucesso o OwnCloud para criar sua própria nuvem privada com o Apache na máquina Ubuntu. Agora, seus dados nunca estão nas mãos de terceiros e podem ser gerenciados em particular no armazenamento virtual do servidor Ubuntu. Muitas empresas estão optando por criar seus servidores do próprio cloud com muitas informações vitais devido a muitos problemas com a privacidade dos dados. Em nossos próximos tutoriais, discutiremos tópicos mais interessantes das pilhas de solução de servidores da web.
Você pode se juntar a nós no [Twitter][2], [LinkedIn][3] e nossa página [Facebook][4]. Qual solução de armazenamento baseada em nuvem você usa online?. Se você tiver alguma dúvida, por favor [entre em contato][5].

## Explore:
Também temos vários outros artigos relacionados ao gerenciamento diário do seu servidor.
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian][6]
  * [Como instalar e proteger o phpmyadmin com nginx no Ubuntu][7]
  * [Seguro e criptografar nginx com Let's Encrypt no Ubuntu 20.04][8]
  * [Configure o suporte HTTP/2 no Nginx no Ubuntu/Debian][9]
  * [Configure o nginx com o passageiro no servidor de produção da AWS][10]

  
[1]: https://owncloud.org/install/
[2]: https://twitter.com/containerize_co
[3]: https://www.linkedin.com/company/containerize/
[4]: http://facebook.com/containerize
[5]: mailto:yasir.saeed@aspose.com
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
