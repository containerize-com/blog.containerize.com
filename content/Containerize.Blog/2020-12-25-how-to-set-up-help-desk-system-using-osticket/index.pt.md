---
title: "Como configurar o software de suporte técnico on -line usando osticket" 
seoTitle: "Como configurar o software de suporte técnico on -line usando osticket" 
description: "Gerencie todas as suas solicitações de suporte em um só lugar usando o Oticket Help Desk. Converta consultas criadas por e-mail, telefone e formulários em ingressos baseados na Web." 
date: Fri, 25 Dec 2020 05:46:51 +0000
author: bilalahmed
summary: "Gerencie todas as suas solicitações de suporte em um só lugar usando osticket. Converta consultas criadas por e-mail, telefone e formulários em ingressos simples na Web." 
url: /pt/how-to-set-up-help-desk-system-using-osticket/
categories: ['Help Desk']
---

## Gerencie todas as suas solicitações de suporte em um só lugar usando o Oticket. Converta consultas criadas por e-mail, telefone e formulários em ingressos simples na Web.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket.png" alt="Como configurar o software de suporte técnico on -line usando osticket">}}

OSTICKET é uma solução de software de suporte técnico on -line de código aberto. Osticket helpdesk é uma alternativa gratuita a sistemas de suporte ao cliente de alto custo e complexos. É simples, leve, confiável, baseado na Web e fácil de configurar e usar. A melhor parte é que é totalmente gratuito. Abordaremos as seguintes seções neste tutorial:
  * [O que é osticket?][1]
  * [Prós e contras do Osticket][2]
  * [Como configurar osticket?][3]
  * [Conclusão][4]

## O que é osticket?   {#osticket}
OSTICKET fornece um painel de controle amigável e um componente de relatório em tempo real. Os usuários podem simplesmente fazer login e criar os ingressos em algumas etapas fáceis. Eles podem criar ingressos através do seu site, email ou telefone. Os ingressos recebidos serão salvos e atribuídos aos agentes. Os agentes receberão notificações por e -mail e responderão às consultas para ajudar a resolver seus problemas. Clientes e agentes podem discutir detalhes e progredir na seção de comentários. Os clientes podem acompanhar suas solicitações e progredir através do portal de clientes interno fornecido por este software de suporte técnico on-line.

## prós e contras do Osticket   {#Pros}

## ## Pros
  * OSTICKET é extremamente amigável para usuários finais e agentes de suporte.
  * Filmado com recursos ricos, o Osticket tem tudo o que você precisa sem ser excessivamente complicado.
  * Osticket é totalmente gratuito e o software de gerenciamento de ingressos de código aberto.
  * É leve, seguro, confiável e fácil de instalar software de gerenciamento de suporte técnico.
  * É flexível executar em todos os servidores populares da Web, incluindo Apache, Nginx, LightTPD e IIS, etc.

## ## Contras
  * OSTICKET não fornece detalhes de análise de ingressos e estatísticas, como outros sistemas de suporte técnico pago.
  * A interface do usuário é muito simples e básica quando comparada a outros sistemas de suporte.

## Como instalar o Osticket?   {#como}
Siga estas etapas para instalar o Osticket com o Nginx no Ubuntu 18.04 LTS.
  * Crie um novo diretório para osticket.
```
sudo mkdir -p /var/www/osticket/
cd /var/www/osticket/
```
  * Faça o download da configuração mais recente do Osticket usando os seguintes comandos.
```
sudo apt-get install wget unzip
sudo wget https://github.com/osTicket/osTicket/releases/download/v1.14.1/osTicket-v1.14.1.zip
sudo unzip osTicket-v1.14.1.zip
```
  * Depois disso, crie o arquivo de configuração do arquivo de amostra usando esses comandos.
```
sudo su -
cd upload/
cp ost-sampleconfig.php ost-config.php
```
  * Em seguida, altere a propriedade do diretório da web de Osticket para o usuário e grupo 'www-dados'.
```
sudo chown -R www-data:www-data /var/www/osticket/

```
  * Depois disso, crie um novo arquivo de configuração do host virtual.
```
sudo vim /etc/nginx/sites-available/osticket.conf

```
  * Em seguida, cole o código de configuração nele.
```
server {
listen 80;
server_name 13.52.217.10;   ## change server_name as per your domain name.
root /var/www/osticket/upload;

access_log /var/log/nginx/access.log;
error_log /var/log/nginx/error.log;
index index.php index.html index.htm;


# Enable gzip
gzip on;
gzip_min_length 1000;
gzip_types text/plain application/x-javascript text/xml text/css application/xml;

set $path_info "";

location ~ /include {
deny all;
return 403;
}

if ($request_uri ~ "^/api(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/api/(?:tickets|tasks).*$ {
try_files $uri $uri/ /api/http.php?$query_string;
}

if ($request_uri ~ "^/scp/.*\.php(/[^\?]+)") {
set $path_info $1;
}

location ~ ^/scp/ajax.php/.*$ {
try_files $uri $uri/ /scp/ajax.php?$query_string;
}

location / {
try_files $uri $uri/ index.php;
}

location ~ \.php$ {
fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
include fastcgi_params;
include snippets/fastcgi-php.conf;
fastcgi_pass unix:/run/php/php7.2-fpm.sock;
}
}
```
  * Altere o nome do servidor conforme seu nome de domínio. Salve o arquivo e saia.
  * Agora vincule este arquivo de host virtual à pasta habilitada para sites usando o seguinte comando
```
ln -s /etc/nginx/sites-available/osticket.conf /etc/nginx/sites-enabled/

```
  * Teste para quaisquer erros de configuração usando o seguinte comando
```
nginx -t
```
  * Agora reinicie o serviço nginx usando o seguinte comando
```
sudo systemctl restart nginx

```
  * Agora insira seu nome de domínio em qualquer navegador da web para iniciar o assistente de instalação, como mostrado na figura a seguir

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-2.png" alt="Como configurar o software de suporte técnico on -line usando osticket">}}

  * Ative as extensões necessárias do php.ini e clique em "Continuar".
  *Preencha todas as informações necessárias e clique em "**Instalar agora"**  Botão.

{{< figure align=center src="images/How-To-Set-Up-Help-Desk-System-Using-osTicket-3.png" alt="Como configurar o software de suporte técnico on -line usando osticket">}}

  * Nas configurações do banco de dados, digite DBName, nome de usuário e senha.
  * Finalmente clique no botão "Instalar agora"
  * Após a conclusão da instalação, ele mostrará a página com a mensagem de sucesso.
  * Em seguida, altere a permissão do OST-Config.php para remover o acesso de gravação executando o seguinte comando:
```
cd /var/www/osticket/upload/
chmod 0644 include/ost-config.php
```

## Conclusão   {#conclusion}
Osticket é mais adequado para empresas com baixo orçamento ou aquelas que desejam um sistema de suporte simples e não complexo. É simples, leve, leve, confiável, de código aberto e software de suporte on -line totalmente gratuito. O que faz do Osticket uma ótima alternativa aos sistemas de suporte ao cliente de maior custo. Para saber mais sobre os recursos de oticket e o guia de instalação, consulte o seguinte tutorial.

## Explore
[Melhor código aberto e software de suporte de TI gratuito][5]
[Helpdesk e sistema de atendimento ao cliente gratuito baseado em bilhetes gratuitos][6]
[Um guia para iniciantes para desenvolver o plugin de Osticket][7]
[Como implementar a multiestância em osticket][8]
[Automatize o sistema de ticketing usando o WordPress e o Osticket][9]

  
[1]: #osticket
[2]: #pros
[3]: #how
[4]: #conclusion
[5]: https://products.containerize.com/helpdesk/
[6]: https://products.containerize.com/helpdesk/osticket
[7]: https://blog.containerize.com/helpdesk/how-to-develop-osticket-plugin-it-helpdesk-software/
[8]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[9]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
