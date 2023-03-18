---
title: "Como instalar várias versões PHP com Nginx no Ubuntu" 
seoTitle: "Como instalar várias versões PHP com Nginx no Ubuntu" 
description: "O artigo explica como instalar várias versões do PHP com o nginx no Ubuntu. Vamos passar por instruções passo a passo sobre como instalar o PHP com o NGINX." 
date: Fri, 21 May 2021 09:49:12 +0000
author: Assad Mahmood
summary: "Se você deseja usar várias versões do PHP com o NGINX, neste artigo o guiaremos passo a passo sobre como instalar o PHP com o NGINX no Ubuntu." 
url: /pt/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

{{< figure align=center src="images/php-with-nginx-multiple-versions.png" alt="PHP com nginx múltiplas versões PHP">}}


## Se você deseja usar várias versões do PHP com o NGINX, neste artigo, o guiaremos passo a passo sobre como instalar o PHP com o nginx no Ubuntu.
Este artigo está em continuação de nossa série sobre tutoriais sobre o NGINX. Até agora, abordamos como usar o NGINX como balanceador de carga, como usar o NGINX como proxy reverso. E agora este tutorial abrange outra pergunta exigente "Como usar várias versões do PHP com o NGINX". Neste tutorial, o guiaremos passo a passo sobre como instalar o PHP no Ubuntu, como configurar o PHP com o nginx e, finalmente, como você pode instalar várias versões do PHP com o nginx. Então vamos começar!
  * [Instale nginx] [1]
  * [Instale várias versões PHP] [2]
  * [Crie vários sites com PHP] [3]
  * [Configure o nginx para executar versões diferentes para sites] [4]
  * [Conclusão] [5]

## install nginx {#nginx}
O nginx (pronunciado como "Engine-X") é um servidor da Web de código aberto que é frequentemente usado como proxy reverso ou cache HTTP. Está disponível para Linux gratuitamente.
Para instalar o nginx, use o seguinte comando:
```
sudo apt update
sudo apt install nginx
```
Depois que a instalação é concluída, você pode abrir "http: // localhost" no seu navegador e você terá tudo configurado.

{{< figure align=center src="images/php-with-nginx-install.png" alt="Instale o PHP com Nginx">}}


## Instale várias versões PHP {#php}
** PHP ** (sigla recursiva para ** PHP: pré-processador de hipertexto **) é uma linguagem de script de uso geral e de código aberto, amplamente utilizado e mais adequado para o desenvolvimento de sites e aplicativos baseados na Web. É uma linguagem de script do lado do servidor que pode ser incorporada no HTML.
Atualmente, existem três versões suportadas de ** php **, isto é ** php 5.6 **, ** 7.0, ** e ** 8.0 **. Significado ** Php 5.3 **, ** 5.4, ** e ** 5.5 ** Chegaram ao fim da vida; Eles não são mais suportados com atualizações de segurança. Então, vamos primeiro instalar o PHP 7.0 e o PHP 7.2 com o PHP-FPM.
Na verdade, antes de se movermos com a instalação, permite que o PHP-FPM. ** PHP-FPM ** (um acrônimo de ** Gerenciador de processos FastCGI **) é uma implementação FastCGI de PHP alternativo extremamente popular (processador de hipertexto). O PHP-FPM inclui vários recursos que podem ser benéficos para sites que recebem tráfego em grandes volumes com frequência.
Para instalar o PHP 7.0 e 7.2 primeiro, você precisará adicionar repositório PHP ao seu servidor para instalar várias versões do PHP. Você pode adicionar repositório Ondrej PHP com o seguinte comando:
```
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:ondrej/php
sudo apt-get update -y
```
Depois que o repositório estiver atualizado, instale o PHP 7.0, PHP 7.2 e PHP-FPM com o seguinte comando:
```
apt-get install php7.0 php7.0-fpm php7.2 php7.2-fpm -y
```
Depois que a instalação for concluída, verifique o status do PHP-FPM com o seguinte comando:
```
systemctl status php7.0-fpm
systemctl status php7.2-fpm
```

## Crie vários sites com php {#web}
A página padrão é colocada em/var/www/html/local. Você pode colocar suas páginas estáticas aqui ou usar host virtual e colocá -lo em outro local
```
mkdir /var/www/html/site1.containerize.com
mkdir /var/www/html/site2.containerize.com
```
Em seguida, crie um arquivo de amostra Index.php para o site1:
```
vi /var/www/html/site1.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site1</title>
</head>
<body>
    <h1>Hello, Nginx! Site1</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Agora crie um arquivo de amostra Index.php para o site2:
```
vi /var/www/html/site2.containerize.com/index.php
```
```
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>Hello, Nginx! Site2</title>
</head>
<body>
    <h1>Hello, Nginx! Site2</h1>
    <p>We have just configured our Nginx web server on Ubuntu Server!</p>
<?php
phpinfo();
?>
</body>
</html>
```
Em seguida, mude a propriedade de ambos os sites para www-dados:
```
chown -R www-data:www-data /var/www/html/site1.containerize.com
chown -R www-data:www-data /var/www/html/site2.containerize.com
```

## Configure nginx {#configure}
Em seguida, você precisará criar um arquivo de host virtual nginx para o domain site1.containerize.com que usa o PHP 7.0. E outro para site2.containerize.com que usa o PHP 7.2.
```
vi /etc/nginx/sites-available/site1.containerize.com.conf
```
Adicione as seguintes linhas:
```
server {
   listen 80;
   root /var/www/html/site1.containerize.com/;
   index index.php;
   server_name site1.containerize.com;
   location / {
      try_files $uri $uri/ =404;
   }
   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.0-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Agora crie o segundo arquivo para site2.containerize.com
```
vi /etc/nginx/sites-available/site2.containerize.com.conf
```
```
server {
   listen 80;

   root /var/www/html/site2.containerize.com/;
   index index.php;

   server_name site2.containerize.com;

   location / {
      try_files $uri $uri/ =404;
   }

   location ~ \.php$ {
      try_files $uri =404;
      fastcgi_split_path_info ^(.+\.php)(/.+)$;
      fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
      fastcgi_index index.php;
      fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
      include fastcgi_params;
   }
}
```
Em seguida, habilite os dois arquivos do host virtual com o seguinte comando:
```
ln -s /etc/nginx/sites-available/site1.containerize.com.conf /etc/nginx/sites-enabled/
ln -s /etc/nginx/sites-available/site2.containerize.com.conf /etc/nginx/sites-enabled/
```
Por fim, reinicie o serviço Nginx e Php-FPM para aplicar todas as alterações de configuração:
```
systemctl restart nginx
systemctl restart php7.0-fpm
systemctl restart php7.2-fpm
```

## Conclusão {#conclusion}
Neste tutorial, exploramos como várias versões PHP no Ubuntu. Aprendemos a instalar o nginx. Em seguida, exploramos como configurar dois sites diferentes no NGINX. E, finalmente, aprendemos a configurar dois sites diferentes com versões diferentes do PHP com o NGINX. Espero que o tutorial tenha ajudado você.

## Explore
  * [Como configurar e configurar o nginx como proxy reverso] [6]
  * [Como usar o NGINX como balanceador de carga para o seu aplicativo] [7]
[1]: #nginx
[2]: #php
[3]: #web
[4]: #configure
[5]: #conclusion
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
