---
title: "Como instalar o NextCloud com o Apache no servidor Ubuntu" 
seoTitle: "Como instalar o NextCloud com o Apache no servidor Ubuntu" 
description: "O NextCloud é uma solução de armazenamento em nuvem auto-hospedada em código aberto escrito no PHP. Este artigo mostrará como instalar o NextCloud com o Apache no Ubuntu." 
date: Fri, 18 Jun 2021 13:53:31 +0000
author: yasir saeed
summary: "O NextCloud é o software de sincronização e colaboração de arquivos de código aberto auto-hospedado. Este tutorial mostrará como instalar o NextCloud com o Apache no Ubuntu." 
url: /pt/how-to-install-nextcloud-with-apache-on-ubuntu-server/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## NextCloud é um software de sincronização e colaboração de arquivos de código aberto auto-hospedado. Este tutorial mostrará como instalar o NextCloud com o Apache no Ubuntu.

{{< figure align=center src="images/install-nextcloud-ubuntu.png" alt="Como instalar o NextCloud com o Apache no Ubuntn">}}


## **Visão geral** 
**[NextCloud][1] **é uma solução de armazenamento em nuvem auto-hospedada gratuita e segura** escrita na linguagem de programação PHP. Ele fornece acesso a dados usando interface da Web e funcionalmente semelhante ao Dropbox. Soluções proprietárias de armazenamento em nuvem como Dropbox e Google Drive são convenientes, mas podem ser usadas para coletar dados pessoais porque seus arquivos são armazenados em seus sistemas. Se você precisar de uma solução de sincronização e compartilhamento de arquivos seguros, seguros e compatíveis, poderá alternar para o Open Bocal NextCloud Server. A configuração NextCloud pode ser instalada em seus servidores domésticos privados ou em um servidor privado virtual.
O NextCloud Open Source fornece **Criptografia de ponta a ponta** , significa que os arquivos podem ser criptografados no dispositivo cliente antes de ser carregado no servidor. Ele também pode ser integrado a uma suíte de escritório on -line como Collobora, OnlyOffice NextCloud, para que você possa criar e editar seus arquivos Doc, PPT e XLS diretamente do NextCloud Client. Você pode compartilhar e sincronizar um ou mais arquivos e pastas no seu computador com o seu NextCloud Server após o download do NextCloud. Download do NextCloud Desktop e clientes móveis fornecem opções para sincronizar e compartilhar em todos os dispositivos sob seu controle. Coloque os arquivos de dados em seus diretórios compartilhados locais e esses arquivos são imediatamente sincronizados com o servidor e com outros dispositivos usando o cliente Sync Sync do NextCloud, aplicativos iOS ou Android.
Este tutorial ajudará você a instalar o NextCloud no Ubuntu 20.04 LTS Linux Operating System com o Apache.
* **Instale pré -requisitos (pilha de lâmpadas)** 
* **Baixe o NextCloud Archive no Ubuntu** 
* **Crie banco de dados MySQL** 
* **Run NextCloud Web Installer** 
  * **Empacotando** 

## Etapa 1: Instale pré -requisitos (pilha de lâmpadas)
A primeira coisa para instalar o NextCloud no Ubuntu é que você deve ter execução **LAMPERVER LAMP** no seu sistema Ubuntu LTS. Faça login no seu sistema e acesse a janela do terminal. Se você já possui a pilha de lâmpadas****Pule esta etapa, use os seguintes comandos para instalar as dependências necessárias.

### Instale o php
Vamos começar com a instalação do PHP versão 5.6 ou versão superior no seu servidor Ubuntu:
Atualização de sudo apt-get
sudo apt-get install -y php php-gd php-curl php-zip php-xml php-mbstring
Você pode verificar a versão PHP usando o seguinte comando:
php -v
{{_LINE_29_}}

### Instale o Apache2
Em seguida, instale o Apache com o comando:
sudo apt-get install -y apache2 libapache2-mod-php
sudo systemctl reiniciar apache2
{{_LINE_34_}}

### Instale o MySQL
Com as dependências fora do caminho, a próxima etapa a ser resolvida é garantir o servidor de banco de dados MySQL. Instale o MySQL Database Server em execução:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_38_}}

## Etapa 2: Faça o download do NextCloud Archive no Ubuntu
No momento da redação deste artigo, a versão mais recente do NextCloud é 22.0.0beta5. Depois de configurar com êxito o servidor de lâmpadas em seu sistema, vamos baixar o NextCloud em seu [site oficial][2].
CD /TMP
wget https://download.nextcloud.com/server/releases/nextCloud-22.0.0beta5.zip
{{_LINE_43_}}
Depois que o Download do NextCloud Server for concluído, extrair o arquivo baixado no site do site Raiz e configurar a propriedade do diretório NextCloud para www-dados em arquivos e diretórios.
CD/var/www/html
sudo unzip /tmp/nextcloud-22.0.0beta5.zip
sudo chown -r www-data: www-data nextcloud
sudo chmod -r 755 nextcloud
{{_LINE_49_}}
Agora, remova o arquivo de arquivo baixado.
sudo rm -f /tmp/nextcloud-22.0.0beta5.zip
{{_LINE_52_}}

## Etapa 3: Crie um banco de dados MySQL
Depois de extrair o código -fonte, vamos criar um banco de dados MySQL NextCloud e uma conta de usuário para configurar o NextCloud. Use o seguinte conjunto de comando para fazer login no MySQL Server, crie o NextCloud Database, o usuário e a saída do console MySQL.
Mysql -u Root -p
Digite a senha:
MySQL> Criar banco de dados NextCloud;
mysql> conceda tudo no nextcloud.
mysql> privilégios de descarga;
mysql> desistir
{{_LINE_61_}}

## Etapa 4: Execute o NextCloud Web Installer
Neste ponto, o NextCloud Instale o Ubuntu 20.04 com sucesso e configurado. Agora, abra o diretório de configuração NextCloud no navegador da web, como abaixo, e digite o URL http://your-domain.com. Altere o host local para o endereço IP do servidor ou o nome de domínio. Você verá a seguinte tela:
http: // localhost/nextcloud/ou http: // your_domain_name/nextCloud/
{{_LINE_65_}}
Digite novas credenciais de administrador para criar uma conta de administrador e fornecer a localização da pasta de dados.
{{_LINE_67_}}

{{< figure align=center src="images/install-nextcloud-2.png" alt="Como instalar o NextCloud com o Apache no Ubuntu Linux Server">}}

{{_LINE_69_}}
Agora deslize sua página para baixo e insira o nome do banco de dados, nome de usuário do banco de dados, senha e clique no botão **Concluir Configuração** .
{{_LINE_71_}}

{{< figure align=center src="images/nextcloud-server.png" alt="Como instalar o NextCloud Ubuntu 20.04 com Apache">}}

{{_LINE_73_}}
Depois que a instalação for concluída, você verá o painel do NextCloud Admin na tela a seguir. Aqui você pode criar um usuário, grupos, atribuí -los permissões, etc.
{{_LINE_75_}}

{{< figure align=center src="images/create_cloud_nextcloud.png" alt="Instalando o NextCloud no Ubuntu com Apache">}}

{{_LINE_77_}}
Parabéns, você tem uma solução em nuvem no local de trabalho do NextCloud no seu sistema Ubuntu LTS. Agora você pode começar a personalizar seu servidor em nuvem para atender perfeitamente às suas necessidades.

## **Empacotando:**  {#4a1a}

Parabéns! Você foi configurado e instalado com êxito no NextCloud no Ubuntu Server com o Apache**. Você aprendeu a criar uma nuvem privada. O NextCloud Ubuntu Server é uma incrível plataforma de colaboração em nuvem que pode atender às necessidades de armazenamento em nuvem privadas ou híbridas de qualquer pessoa. Agora você sabe como instalar o NextCloud no Ubuntu e seus dados são seguros e seguros em sua nuvem auto-hospedada. Em nossos próximos tutoriais, discutiremos sobre tópicos mais interessantes relacionados às pilhas de solução de servidores da web.
_O que solução de armazenamento auto-hospedada baseada em nuvem você prefere?. Se você tiver alguma dúvida, por favor [entre em contato][3] ._

## Explore:
Você pode gostar dos seguintes artigos relacionados ao gerenciamento diário do seu servidor.
  * [Como instalar e configurar o OwnCloud com o Apache no Ubuntu][4]
  * [Como configurar o Apache como um proxy reverso para o Ubuntu ou Debian][5]
  * [Instale e seguro Phpmyadmin com Nginx no Ubuntu][6]
  * [Seguro e criptografar nginx com Let's Encrypt no Ubuntu 20.04][7]
  * [Configurar suporte HTTP/2 no Nginx no Ubuntu/Debian][8]
  * [Configure o nginx com o passageiro no servidor de produção da AWS][9]



[1]: https://nextcloud.com/
[2]: https://nextcloud.com/install/
[3]: mailto:yasir.saeed@aspose.com
[4]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
