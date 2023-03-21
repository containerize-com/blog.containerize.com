---
title: "Como configurar o servidor de correio usando o postal no Ubuntu" 
seoTitle: "Como configurar o servidor de correio usando o postal no Ubuntu" 
description: "Envie e -mails de seus aplicativos da web com o servidor de correio de código aberto. O Postal permite enviar e -mails usando a API SMTP e HTTP e monitorar o tráfego de email também." 
date: Fri, 18 Jun 2021 12:00:53 +0000
author: Masood Anwer
summary: "Envie e receba e -mails com um servidor de correio de código aberto. Este artigo o ajudará a instalar e configurar o servidor de correio postal da sua empresa." 
url: /pt/how-to-setup-mail-server-using-postal-on-ubuntu/
categories: ['Transactional Email']
---

## Envie e receba e -mails com um servidor de correio de código aberto. Este artigo o ajudará a instalar e configurar o servidor de correio postal da sua empresa.

{{< figure align=center src="images/postal-banner.png" alt="Servidor de correio de código aberto">}}

O envio de e -mails em diferentes tipos de eventos é necessário para aplicações modernas. Toda empresa precisa de um servidor de email confiável **para e -mails de saída. Além disso, as empresas precisam de um servidor de email para enviar e -mails em massa para campanhas de marketing, boletins e muitas outras tarefas. Existem vários  **servidor de correio de código aberto **  disponíveis para isso. No entanto, discutiremos o  **servidor postal**   em detalhes nesta postagem e cobriremos os seguintes tópicos.
  * [O que é servidor de correio postal?][1]
  * [Recursos do Postal][2]
  * [Instalação postal][3]
  * [Conclusão][4]

## O que é servidor de correio postal?   {#Postal}
[**Postal **][5] é um servidor de correio gratuito e  **de código aberto ** . É um servidor de email completo para sites e aplicativos da Web. O servidor de correio postal é uma alternativa ao popular servidor  **de e -mail existente **  como sendGrid e Mailgun.  **Postal **  é uma plataforma de entrega de e -mail de código aberto robusto, seguro e escalável. Todo o código -fonte e a documentação estão disponíveis em [ **github ** ][6]. Você pode baixar, instalá -lo no seu servidor privado e manter o controle total sobre ele. Você também pode melhorar e aprimorá -lo de acordo com as necessidades de negócios. Além disso,  **servidor de correio postal**   suporta várias organizações.
Os usuários podem visualizar gráficos e estatísticas mostrando o volume de e -mails de entrada e saída. Além disso, você pode acessar a fila de mensagens de saída e entrada completa. O servidor de correio postal fornece funcionalidade para webhooks. Você pode configurar webhooks para receber informações ao vivo sobre informações de entrega em tempo real. Ele também oferece retenção de mensagens que permite armazenar e examinar todas as mensagens enviadas e recebidas. A entrega de email é muito importante no negócio para garantir que os usuários recebam o email. No entanto, às vezes o email entrega ao usuário e você deve investigar o problema. O servidor de email ** **de entrada e saída**   também fornece log e ferramentas completas para fazer a investigação.

## Recursos do Postal   {#Features}
O servidor de correio postal oferece muitos recursos. No entanto, discutiremos os seguintes recursos -chave neste artigo.
**Emails de envio** : O servidor de correio postal fornece duas técnicas para e -mails de saída, incluindo API HTTP e SMTP. Você pode usar facilmente a API HTTP para integração com aplicativos da Web. Você também pode usar um servidor SMTP para integração com aplicativos e sistemas existentes.
**E -mails recebidos **:  **O e -mail recebido **  pode ser encaminhado para o HTTP Endpoint,  **SMTP Server**   e outros endereços de email usando o servidor de correio postal.
**Verificação de spam e vírus** : O spamassassin e o clamav podem ser integrados ao postal para digitalizar automaticamente as mensagens recebidas e de saída à medida que passam pelos servidores de email. Esse recurso também é desligado por padrão.
**Clique e abra rastreamento** : As aberturas e cliques de e -mail podem ser rastreados com postal. O Postal verá suas mensagens de saída e substituirá qualquer link por um novo link que viaje pelo seu servidor web postal. Quando o usuário clica no link, registra a ação postal e os redireciona instantaneamente para o URL original. No entanto, isso não é ativado por padrão.
**Pools IP** : Postal permite enviar mensagens de uma variedade de endereços IP. Isso permite que você atribua vários endereços IP a diferentes servidores de email ou envie de diferentes IPs, dependendo do remetente ou endereços de destinatários.

## Instalação postal   {#Installation}
Siga o guia passo a passo abaixo para instalar o software Postal **Mail Server**  no Ubuntu 18.04.
  * Primeiro, você precisa conectar seu servidor vis ssh. Execute o seguinte comando para atualizar o sistema com os pacotes mais recentes disponíveis.
```
sudo apt-get update
```

### Instale o servidor de banco de dados MARIADB
  * Execute o comando para instalar o mariadb.
```
sudo apt install mariadb-server libmysqlclient-dev
```
  * Depois de terminar com a instalação. Agora, você precisa protegê -lo executando o comando abaixo.
```
mysql_secure_installation
```
  * Em seguida, ele fará algumas perguntas, como mostrado abaixo. Você precisa responder a todas as perguntas.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Conecte -se ao servidor mariadb com o seguinte comando.
```
mysql -u root -p
```
  * Crie um banco de dados para o postal.
```
CREATE DATABASE postal CHARSET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
  * Em seguida, crie um usuário de banco de dados chamado "PostalUser" com nova senha.
```
CREATE USER 'postaluser'@'localhost' IDENTIFIED BY 'new_password_here';
```
  * Depois disso, conceda ao usuário acesso total ao banco de dados "Postaluser".
```
GRANT ALL ON postal.* TO 'postaluser'@'localhost' WITH GRANT OPTION;
```
  * Em seguida, lave os privilégios e saia do shell mariadb com o seguinte comando.
```
FLUSH PRIVILEGES;
EXIT;
```

### Instale o Ruby
  * Primeiro, adicione o PPA de terceiros para instalar o Ruby. Execute os seguintes comandos.
```
sudo apt-get install software-properties-common
sudo apt-add-repository ppa:brightbox/ruby-ng
```
  * Atualize os pacotes do Ubuntu.
```
sudo apt update
```
  * Instale o Ruby executando o comando abaixo.
```
sudo apt install ruby2.3 ruby2.3-dev build-essential
```

### Instale o RabbitMQ
  * O Erlang é necessário para instalar o RabbitMQ, então você também precisa instalá -lo. Adicione a chave do repositório Erlang ao Ubuntu com o comando abaixo.
```
wget -O- https://packages.erlang-solutions.com/ubuntu/erlang_solutions.asc | sudo apt-key add -
```
  * Em seguida, adicione o repositório Erlang com o seguinte comando.
```
echo "deb https://packages.erlang-solutions.com/ubuntu bionic contrib" | sudo tee /etc/apt/sources.list.d/erlang.list
```
  * Execute os seguintes comandos para instalar o erlang.
```
sudo apt-get update
sudo apt-get install erlang
```
  * Depois de terminar a instalação do Erlang, você poderá instalar o RabbitMQ. Adicione o repositório RabbitMQ ao Ubuntu.
```
sudo sh -c 'echo "deb https://dl.bintray.com/rabbitmq/debian $(lsb_release -sc) main" >> /etc/apt/sources.list.d/rabbitmq.list'
```
  * Adicione a tecla RabbitMQ GPG com o seguinte comando.
```
wget -O- https://dl.bintray.com/rabbitmq/Keys/rabbitmq-release-signing-key.asc | sudo apt-key add -
wget -O- https://www.rabbitmq.com/rabbitmq-release-signing-key.asc | sudo apt-key add -
```
  * Execute os comandos abaixo para instalar o pacote RabbitMQ.
```
sudo apt update
sudo apt install rabbitmq-server
```
  * Execute o comando abaixo para ativar o RabbitMQ, para que ele sempre inicie quando o sistema inicializa.
```
sudo systemctl enable rabbitmq-server
```
  * Em seguida, você precisará criar o RabbitMQ VHOST e o usuário para o postal. Execute o seguinte comando nele.
```
sudo rabbitmqctl add_vhost /postal
sudo rabbitmqctl add_user postal type_password_here
sudo rabbitmqctl set_permissions -p /postal postal ".*" ".*" ".*"
```

### Instale o NodeJS
  * Adicione o repositório NodeJS com o seguinte comando.
```
curl -sL https://deb.nodesource.com/setup_10.x | bash
```
  * Em seguida, execute o comando abaixo para instalar o NodeJS.
```
sudo apt-get install nodejs
```

### Instale o servidor de correio postal
  * Primeiro, você precisa criar um usuário para servidor de correio postal. Crie -o com o seguinte comando.
```
sudo useradd -r -m -d /opt/postal -s /bin/bash postal
```
  * Em seguida, permita que Ruby ouça nas portas da web.
```
sudo setcap 'cap_net_bind_service=+ep' /usr/bin/ruby2.3
```
  * Instale todas as gemas necessárias com os seguintes comandos.
```
sudo gem install bundler
sudo gem install procodile
sudo gem install nokogiri -v '1.7.2'
```
  * Crie uma estrutura de diretório para o postal.
```
sudo mkdir -p /opt/postal/app
```
  * Em seguida, faça o download da versão mais recente do Postal.
```
sudo wget https://postal.atech.media/packages/stable/latest.tgz
```
  * Extraia o arquivo baixado com o seguinte comando.
```
sudo tar xvf latest.tgz -C /opt/postal/app
```
  * Em seguida, altere a propriedade do diretório postal.
```
sudo chown -R postal:postal /opt/postal
```
  * Crie um link simulado para o binário postal executando o comando abaixo.
```
sudo ln -s /opt/postal/app/bin/postal /usr/bin/postal
```
  * Instale todas as dependências necessárias.
```
sudo postal bundle /opt/postal/vendor/bundle
```
  * Execute o comando abaixo para inicializar as configurações postais.
```
sudo postal initialize-config
```
  * Em seguida, execute o seguinte comando para abrir o arquivo de configuração postal.
```
sudo nano /opt/postal/config/postal.yml
```
  * Faça as alterações indicadas em negrito e salve o arquivo.
```
web:
  host: <strong>postal.example.com</strong>
  # The protocol that requests to the management interface should happen on
  protocol: https

main_db:
  # Specify the connection details for your MySQL database
  host: localhost
  username: postal
  password: <strong>password</strong>
  database: postal

message_db:
  # Specify the connection details for your MySQL server that will be house the
  # message databases for mail servers.
  host: localhost
  username: postal
  password: <strong>password</strong>
  prefix: postal

rabbitmq:
  # Specify the connection details for your RabbitMQ server.
  host: 127.0.0.1
  username: postal
  password: <strong>password</strong>
  vhost: /postal
  
dns:
  # Specifies the DNS record that you have configured. Refer to the documentation at
  # https://github.com/atech/postal/wiki/Domains-&-DNS-Configuration for further
  # information about these.
  mx_records:
    - <strong>mx.postal.example.com</strong>
  smtp_server_hostname: <strong>postal.example.com</strong>
  spf_include: <strong>spf.postal.example.com</strong>
  return_path: <strong>rp.postal.example.com</strong>
  route_domain: <strong>routes.postal.example.com</strong>
  track_domain: <strong>track.postal.example.com</strong>
```
  * Execute o comando para inicializar o banco de dados.
```
sudo postal initialize
```
  * Crie um usuário administrador para postal.
```
sudo postal make-user
```
  * Em seguida, você precisará fornecer detalhes da conta do usuário, conforme mostrar abaixo.
```
Postal User Creator
Enter the information required to create a new Postal user.
This tool is usually only used to create your initial admin user.

E-Mail Address      : admin@example.com
First Name          : Admin
Last Name           : Postal
Initial Password:   : *********

User has been created with e-mail address admin@example.com
```
  * Finalmente, execute o seguinte comando para iniciar e verificar o status do aplicativo postal.
```
sudo -u postal postal start
sudo -u postal postal status
```

### Instale o nginx
  * Execute o comando abaixo para instalar o NGINX Web Server.
```
sudo apt install nginx
```
  * Em seguida, copie a configuração postal nginx para usá-la como host virtual.
```
sudo cp /opt/postal/app/resource/nginx.cfg /etc/nginx/sites-available/default
```
  * Crie um certificado SSL autoassinado.
```
sudo mkdir /etc/nginx/ssl/
sudo openssl req -x509 -newkey rsa:4096 -keyout /etc/nginx/ssl/postal.key -out /etc/nginx/ssl/postal.cert -days 365 -node
```
  * Depois disso, você precisará responder às perguntas.
  * Abra o arquivo de host virtual padrão NGINX.
  * Altere o valor de server_name e salve o arquivo.
  * Finalmente, reinicie o servidor da web nginx executando o comando abaixo.
```
sudo systemctl restart nginx
```
  * Finalmente, abra seu navegador e digite o URL https://postal.example.com. Você será redirecionado para a página de login.

## Conclusão   {#conclusion}
Passamos pela introdução e recursos primários do servidor de correio postal em grande profundidade. Também incluímos instruções passo a passo para configurar este **agente de transferência de correio** . Além disso, damos algumas dicas sobre a configuração. Configurar um servidor de correio postal é um processo simples. Espero que este artigo seja realmente útil na configuração e configuração de um servidor de correio postal para o seu negócio.
Finalmente, [**containerize.com **][7] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta categoria [ **e -mail transacional**  ][8] para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
  *[**Software de email transacional principal** ][9]
  *[**Potal - servidor de correio de código aberto** ][5]
  *[**5 Melhor software de servidor de correio de código aberto para empresas em 2020** ][10]

  
[1]: #Postal
[2]: #Features
[3]: #Installation
[4]: #Conclusion
[5]: https://products.containerize.com/transactional-email/postal/
[6]: https://github.com/postalhq/postal
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/transactional-email/
[9]: https://products.containerize.com/transactional-email/
[10]: https://blog.containerize.com/transactional-email/top-5-open-source-mail-transfer-agents-for-linux-in-2020/
