---
title: "Como instalar o compartilhamento de arquivos Pydo e a plataforma de sincronização no Ubuntu" 
seoTitle: "Como instalar o compartilhamento de arquivos Pydo e a plataforma de sincronização no Ubuntu" 
description: "O PyDIO é um software de compartilhamento de documentos colaborativos e auto -hospedado. Vamos revisar como instalar a ferramenta de compartilhamento e sincronização de arquivos PyDIO." 
date: Fri, 02 Jul 2021 22:46:01 +0000
author: yasir saeed
summary: "O PyDIO é uma plataforma de compartilhamento de arquivos baseada em nuvem e sincronização para acessar todos os dados em qualquer lugar e em qualquer dispositivo. Este tutorial é sobre como instalar o Pydo no Ubuntu." 
url: /pt/how-to-install-pydio-file-sharing-and-sync-platform-on-ubuntu/
categories: ['Backup and Sync Software', 'Web Server Solution Stack']
---

## Pydo é uma plataforma de compartilhamento de arquivos baseada em nuvem e sincronização para acessar todos os dados em qualquer lugar e em qualquer dispositivo. Este tutorial é sobre como instalar o Pydo no Ubuntu.

{{< figure align=center src="images/How-to-Install-Pydio-File-Sharing-and-Sync-Platform-on-Ubuntu.png" alt="Como instalar o compartilhamento de arquivos Pydo e a plataforma de sincronização no Ubuntu">}}


## **Visão geral**
As células Pydo é um software de compartilhamento e sincronização de arquivos de código aberto. Ele fornece um único ponto de acesso a todo o seu armazenamento de dados e é uma alternativa ao OwnCloud e NextCloud que fornecem serviços de armazenamento, compartilhamento de arquivos e sincronização. O Pydo é uma plataforma corporativa de compartilhamento de arquivos de código aberto semelhante ao Dropbox e outras plataformas de armazenamento. Ajuda você a conectar com segurança todos os seus arquivos e dispositivos em uma plataforma.
As células Pydio são uma plataforma de sincronização e colaboração de arquivos baseada em nuvem. Este software de código aberto é executado em sua infraestrutura pessoal de TI e ajuda sua equipe a proteger e monitorar seus dados comerciais. Você pode sincronizar seus dados e acessá -los de qualquer lugar usando um aplicativo móvel, software de desktop ou um navegador da Web usando células Pydo. O melhor aplicativo de compartilhamento de arquivos Pydo Cells é baseado em uma arquitetura de micro-serviço e é escrito usando a linguagem de programação de Golang.
Este tutorial ajudará você a instalar e configurar o software de compartilhamento de arquivos Pydo Host Hosted e a plataforma de sincronização nos sistemas Ubuntu LTS.
  * Começando
  * Instale o servidor de lâmpadas
  * Instale Pydo no Ubuntu
  * Crie banco de dados Pydo e usuário
  * Acesse Pydo no seu navegador
  * Conclusão

## Etapa 1: Introdução
Antes das instalações, você precisa garantir que seu sistema esteja executando os pacotes mais recentes. Use o comando abaixo para atualizar seu servidor Ubuntu 20.04.
```
sudo apt-get update -y
sudo apt-get upgrade -y
```
Após a atualização, é sempre recomendável reiniciar seu servidor para que as novas alterações entrem em vigor.
```
sudo reboot
```

## Etapa 2: Instale o servidor de lâmpadas
Para configurar o servidor de compartilhamento de arquivos Enterprise Pydo Secure Enterprise e como criar uma nuvem privada de código aberto, primeiro precisamos configurar um servidor de lâmpada em execução. Se você já instalou e executando a pilha de lâmpadas, pule esta etapa use os comandos de seguidores para configurar a lâmpada no seu sistema Ubuntu.

### Instale o php
Você pode instalar o PHP no seu sistema Ubuntu ou Debian, executando comandos:
SUDO APT-GET Instale Python-Software-Properties
sudo add-aprop-repository ppa: ondrej/php
sudo apt-get install -y php php-gd php-curl php-zip php-dom php-xml php-simplexml php-mbstring
{{_LINE_34_}}

### Instale o Apache2
O Apache é o software de servidor Web de código aberto mais amplamente usado. Em seguida, instale o servidor da Web Apache no Ubuntu executando:
sudo apt-get install -y apache2 libapache2-mod-php
{{_LINE_38_}}

### Instale o MySQL
O sistema de gerenciamento de banco de dados relacional de código aberto do MySQL é um componente da pilha de software de aplicativos da Web da LAMP e de outros. Agora instalando o MySQL no Ubuntu, executando abaixo:
sudo apt-get install -y mysql-server php-mysql
{{_LINE_42_}}
Depois que a instalação estiver concluída, abra **php.ini**  arquivo de configuração para editar. Use seu editor de arquivos preferido.
Faça alterações no arquivo php.ini como abaixo. Abra dois arquivos e faça as alterações como mostrado
```
sudo vim /etc/php/7.4/apache2/php.ini
```
Faça as seguintes alterações
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```
Salve e feche o arquivo e prossiga para editar o outro arquivo php.ini
```
sudo vim /etc/php/7.4/cli/php.ini
```
```
upload_max_filesize = 1G
post_max_size = 1G
output_buffering = off
```

## Etapa 3: Instale Pydo no Ubuntu
Primeiro, você precisa adicionar o melhor repositório de software de compartilhamento de arquivos gratuito do PyDIO ao seu servidor Ubuntu 20.04 porque ainda não está disponível. Adicione também o sistema de compartilhamento de arquivos PyDio Best Arquivos para a chave pública de negócios e vá em frente para atualizar seu repositório do sistema.
```
echo "deb https://download.pydio.com/pub/linux/debian/ bionic main" | sudo tee /etc/apt/sources.list.d/pydio.list
wget -qO - https://download.pydio.com/pub/linux/debian/key/pubkey | sudo apt-key add -
sudo apt update

```
Agora é hora de instalar o PYDIO EFSS e o software de compartilhamento de documentos. Execute o comando como mostrado
```
sudo apt install -y pydio pydio-all
```
Ativar módulo de reescrita Apache usando os comandos mostrados abaixo e reinicie e ative o Apache2
```
sudo a2enmod rewrite
sudo systemctl restart apache2
sudo systemctl enable apache2
```
Confirme que o serviço Apache está em execução usando o comando abaixo:
```
sudo systemctl status apache2
```
A saída deve ser como mostrado se a instalação foi realizada corretamente, mostrando que o serviço Apache2 está em execução.

## Etapa 4: Crie banco de dados e usuário do PyDio
Após extrair código, agora vamos criar um banco de dados MySQL e uma conta de usuário para configurar o PyDIO. Use o seguinte conjunto de comandos para fazer o login no MySQL Server para criar o AjaxPlorer ShareSync ou PyDIO Database e User.
Mysql -u Root -p
Digite a senha:
MySQL> Criar banco de dados pydo;
mysql> conceda tudo em pydo.* a 'pydo'@'localhost' identificado por '_password_';
mysql> privilégios de descarga;
mysql> desistir
{{_LINE_69_}}
Em seguida, precisamos instalar o Pydo no Ubuntu na interface da web para criar uma nuvem privada.

## Etapa 5: Acesse Pydo no seu navegador
Abra seu navegador e digite o URL _HTTP: /// pydo_. Você deve ver uma página como mostrado
O software de compartilhamento de arquivos e arquivos de negócios do PyDio Private Cloud agora está instalado e configurado, é hora de acessar sua interface da Web.
Abra o seu navegador e digite URL http: // your-server -ip / pydo. Você será redirecionado para a página seguinte:

{{< figure align=center src="images/Pydio-Installer.png" alt="Instalador Pydo">}}

Confirme todos os controles e clique no botão **Continue para a instalação do Pydo** . Você deve ver a seguinte página:

{{< figure align=center src="images/Pydio-setup-wizard.png" alt="Assistente de configuração de Pydo">}}

Selecione seu idioma e clique em **Iniciar assistente** . Você deve ver a seguinte página:

{{< figure align=center src="images/Starting-the-setting.png" alt="Inicie as configurações do Pydo">}}

Digite o nome do programa e a mensagem de boas -vindas. Em seguida, clique no botão **Avançar** . Você deve ver a seguinte página:

{{< figure align=center src="images/Enter-the-application-name.png" alt="Digite o aplicativo Pydo">}}

Em seguida, digite sua conta de administrador e clique no botão **Avançar** . Você deve ver a seguinte página:

{{< figure align=center src="images/MySQL-database-settings.png" alt="Configurações do banco de dados MySQL">}}

Em seguida, digite os detalhes do seu banco de dados, como nome do banco de dados, nome de usuário e senha. Em seguida, clique no botão **de teste de db de teste** . Você deve ver a seguinte página:

{{< figure align=center src="images/Pydio-Advanced-Options.png" alt="Opções avançadas do Pydo">}}

Em seguida, clique no botão **Instale o PyDio** . Depois que a instalação for concluída com sucesso. Você será redirecionado para a página seguinte:

{{< figure align=center src="images/Pydio-Login.png" alt="Login de Pydo">}}

Em seguida, digite seu nome de usuário e senha para o administrador. Em seguida, clique no botão [Enter]. Você deve ver a seguinte página:

Sim! Está feito. Agora você sabe como instalar completamente a sincronização de arquivos Pydo Host Hosted e o software de compartilhamento de arquivos de código aberto no Ubuntu para criar uma nuvem privada passo a passo semelhante ao Dropbox ou Google Drive.

## **Conclusão:**    {#4A1A}
Neste tutorial, você instalou com sucesso o compartilhamento de arquivos seguros de código aberto do Pydo Cells no seu sistema Ubuntu. Você pode usar este artigo para criar uma infraestrutura em nuvem para armazenar, proteger e compartilhar seus arquivos na nuvem auto-hospedada. Use o compartilhamento de documentos colaborativos do Pydo e o melhor aplicativo gratuito de compartilhamento de arquivos para obter mais controle de seus dados e garantir uma colaboração eficiente em sua organização de negócios. Em nossos próximos tutoriais, discutiremos tópicos mais interessantes de soluções de armazenamento em nuvem de código aberto e ferramentas de colaboração de compartilhamento de arquivos.
Você pode se juntar a nós no [Twitter][1], [LinkedIn][2] e nossa página [Facebook][3]. Qual plataforma de compartilhamento de código Open _File _File você usa on-line?. Se você tiver alguma dúvida, por favor [entre em contato][4].

## Explore:
Também temos vários outros artigos relacionados ao gerenciamento diário do seu servidor.
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian][5]
  * [Como instalar e proteger o phpmyadmin com nginx no Ubuntu][6]
  * [Seguro e criptografar nginx com Let's Encrypt no Ubuntu 20.04][7]
  * [Configurar suporte HTTP/2 no Nginx no Ubuntu/Debian][8]
  * [Configure o nginx com o passageiro no servidor de produção da AWS][9]

  
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
