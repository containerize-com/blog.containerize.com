---
title: "Tutorial de configuração para pilha Lemp no Ubuntu 18.04" 
seoTitle: "Tutorial de configuração para pilha Lemp no Ubuntu 18.04" 
description: "A pilha Lemp é uma pilha de software usada para desenvolver e implantar aplicativos da Web. Aprenda a instalar o nginx, o MySQL e o PHP no Ubuntu 18.04." 
date: Sat, 26 Jun 2021 00:05:53 +0000
author: Masood Anwer
summary: "Instalar & amp; Configure a pilha Lemp para desenvolver e implantar aplicativos da Web. Este guia o ajudará a instalar o NGINX, MYSQL e PHP no Ubuntu 18.04." 
url: /pt/setup-tutorial-for-lemp-stack-on-ubuntu-18-04/
categories: ['Web Server Solution Stack']
---

## Instale e configure a pilha Lemp para desenvolver e implantar aplicativos da Web. Este guia o ajudará a instalar o NGINX, MYSQL e PHP no Ubuntu 18.04.

{{< figure align=center src="images/lemp-banner.png" alt="Instale a pilha Lemp no Ubuntu">}}


## Visão geral   {#Prerequisites}
Neste guia, instalaremos o NGINX, MYSQL e PHP (pilha LEMP) para o desenvolvimento e implantando aplicativos da Web. Também configuraremos um servidor da web para o aplicativo PHP do servidor no Ubuntu Server 18.04. Abordaremos as seguintes seções deste tutorial.
  *[**Pré -requisitos** ][1]
  *[**O que é lemp pilha?** ][2]
  *[**Instalação Lemp** ][3]
  *[**Conclusão** ][4]

## Pré -requisitos   {#Prereebisites}
Antes de instalar o software, você deve atender aos seguintes requisitos.
  * Servidor com sistema operacional Ubuntu
  *Usuário que não é de raiz com **privilégios** 

## O que é pilha Lemp?   {#O que}
**Lemp Stack**  é uma coleção de software que pode ser usada para executar aplicativos da Web baseados em PHP. Lemp significa Linux, Nginx, MySQL e PHP. A pilha Lemp é uma variante da pilha da lâmpada. LAMP e LEMP são pilhas de software populares para desenvolver e implantar aplicativos da Web. Há uma diferença entre essas duas pilhas de software. A lâmpada utiliza o servidor da Web Apache, enquanto o servidor LEMP usa o servidor da web nginx.

## Lemp Instalação   {#Installation}
Nesta seção, focaremos em como instalar o NGINX, MYSQL e PHP no Ubuntu 18.04. Primeiro de tudo, precisamos atualizar os pacotes de servidor executando o comando abaixo.
```
$ sudo apt update
```

### Instalando o Nginx Web Server
  *Execute o comando abaixo para **instalar nginx no ubuntu** .
```
$ sudo apt install nginx
```
  * Depois de terminar com a instalação do NGINX, abra seu navegador da Web e digite o endereço IP do servidor. Ele mostrará a página de boas -vindas padrão do NGINX Web Server.

{{< figure align=center src="images/nginx-home-1.png" alt="Página padrão do servidor da web nginx">}}


### Instalando MySQL
Agora, você precisa instalar o MySQL Database Server para o gerenciamento dos dados do seu aplicativo.
  *Execute o comando abaixo para **instalar o mysql no ubuntu** .
```
$ sudo apt install mysql-server
```
  * Para proteger a instalação do MySQL, execute o seguinte comando.
```
$ sudo mysql_secure_installation
```
  *Você será solicitado que você deseja ativar **Validar o plug -in de senha**  ou não. É melhor não habilitá -lo, digite n e pressione Enter para seguir em seguida.
  * Em seguida, ele fará algumas perguntas, como mostrado abaixo. Você precisa responder a todas as perguntas.
```
Enter current password for root (enter for none):
Set root password? [Y/n]: N
Remove anonymous users? [Y/n]: Y
Disallow root login remotely? [Y/n]: Y
Remove test database and access to it? [Y/n]:  Y
Reload privilege tables now? [Y/n]:  Y
```
  * Agora, o MySQL Server está em funcionamento. Você pode testá -lo com o seguinte comando. Digite a senha da conta Root Ubuntu, não a MySQL, caso solicite uma senha.
```
$ sudo mysql
```
  * Digite o comando abaixo para sair do MySQL.
```
mysql> exit
```

### Instalando o PHP
Abordaremos a instalação do PHP-FPM para o processamento do PHP. PHP-FPM significa gerenciador de processos FastCGI. O NGINX Web Server não possui nenhuma funcionalidade incorporada para o processamento do PHP; portanto, usaremos o PHP-FPM para ele. Além disso, instalaremos o PHP-MYSQL para comunicar o PHP com o MySQL para gerenciamento de dados.
  *Execute o comando abaixo para **instalar php no ubuntu** .
```
$ sudo apt install php-fpm php-mysql
```
  * Agora, você terminou a instalação do PHP e todo o software necessário da pilha LEMP para executar o aplicativo da web.
  * Nesta etapa, criaremos o arquivo de configuração do NGINX para dizer ao NGINX para usar o processador PHP para conteúdo dinâmico. Execute o comando abaixo para criar o arquivo de configuração nginx.
```
$ sudo nano /etc/nginx/sites-available/example.com
```
  * Copie o código no arquivo de configuração nginx e salve -o.
```
server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name example.com;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
```
  * Vamos dar uma breve olhada nessas diretivas e blocos de localização, para que você possa ter informações básicas.
      ***Ouça** : Você pode definir a porta para o nginx. Use a porta 80 para HTTP e 443 para protocolos HTTPS.
      ***raiz** : Defina o diretório raiz do seu projeto. O NGINX o usará para servir o site ou aplicativo da web.
      ***ÍNDICE** : Defina a ordem em que os arquivos devem ser servidos. Quando o arquivo de índice é chamado, o NGINX entregará o arquivo index.php.
      ***Server_name** : Defina o nome de domínio ou o IP público do seu servidor.
      ***Localização /**: Este bloco de localização possui  **Diretiva Try_block**   e corresponde ao URI solicitado. O NGINX retorna o erro 404, se não encontrar o arquivo solicitado.
      ***Localização ~ .php $** : Este bloco de localização lida com o processamento PHP.
      ***Localização ~ /.ht**: nginx não processa **. HTACCESS  **FILE E ESTE LOCALIZAÇÃO LIDE com ele. O nginx não serve o arquivo .htaccess, definindo **  negar todas as**  diretiva.
  * Crie o Symlink para o arquivo de configuração Nginx recém -criado para ativá -lo.
```
$ sudo ln -s /etc/nginx/sites-available/example.com /etc/nginx/sites-enabled/
```
  * Execute o seguinte comando para testar o arquivo de configuração nginx quanto a erros de sintaxe.
```
$ sudo nginx -t
```
  * Reinicie o servidor da web nginx.
```
$ sudo systemctl restart nginx
```

### teste php
  * Para garantir que o Nginx sirva corretamente as páginas PHP, criaremos o arquivo PHP para testar as configurações.
  * Criar arquivo info.php no diretório raiz do servidor da web nginx executando o comando abaixo.
```
$ sudo nano /var/www/html/info.php
```
  * Adicione o código abaixo e salve o arquivo.
```
<?php
phpinfo();
```
  * Abra o seu navegador da Web e o nome do domínio ou o servidor IP do servidor, seguido pelo nome do arquivo php como http: // server \ _ip \ _or_domain/info.php. Você verá a página abaixo.

{{< figure align=center src="images/info-php.png" alt="Página de informações do PHP">}}


## Conclusão   {#conclusion}
Neste tutorial, discutimos sobre como instalar e configurar a pilha **lemp** . Como você pode ver, a configuração de componentes da pilha de software é realmente fácil. Além disso, você pode começar a criar e servir aplicativos da Web em minutos.
Finalmente, [**containerize.com **][5] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta categoria [ **Web Server Solution**  ][6] para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
  *[**Melhor Solução de Solução de Servidor da Web de código aberto** ][7]
  ***[Ferramentas forenses digitais de código aberto mais populares][8]** 
  ***[Fila de mensagens de código aberto 5 (MQ) Software em 2021][9]** 
  ***[Melhor software de armazenamento e compartilhamento de arquivos de código aberto][10]** 
  *[**Como instalar e proteger o phpmyadmin com nginx no ubuntu** ][11]
  *[**Como instalar várias versões PHP com nginx no Ubuntu** ][12]
  *[**Licenses de código aberto mais populares mais populares de código aberto de 2021** ][13]

  
[1]: #Prerequisites
[2]: #What
[3]: #Installation
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/web-server-solution-stack/
[7]: https://products.containerize.com/solution-stack/
[8]: https://blog.containerize.com/digital-forensic-tools/top-5-open-source-digital-forensic-tools-in-2021/
[9]: https://blog.containerize.com/message-queue-software/top-5-open-source-message-queue-software-in-2021/
[10]: https://products.containerize.com/backup-and-sync/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[12]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[13]: https://blog.containerize.com/licenses-standards/top-5-most-popular-osi-approved-open-source-licenses-of-2021/
