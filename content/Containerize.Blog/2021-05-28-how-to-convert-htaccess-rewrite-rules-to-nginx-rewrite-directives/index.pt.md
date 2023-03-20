---
title: "Como converter regras de reescrita htaccess em diretivas de reescrita nginx" 
seoTitle: "Como converter regras de reescrita htaccess em diretivas de reescrita nginx" 
description: "O NGINX não suporta regras de reescrita .htaccess; portanto, os desenvolvedores devem converter essas regras para as diretivas de reescrita nginx. Vamos aprender a realizar essa conversão." 
date: Fri, 28 May 2021 13:54:20 +0000
author: Assad Mahmood
summary: "O NGINX não suporta regras de reescrita HTACCESS, e os desenvolvedores precisam converter essas regras para as diretivas de reescrita nginx. Vamos aprender a fazer essa conversão." 
url: /pt/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
categories: ['Web Server Solution Stack']
---

## nginx não suporta regras de reescrita htaccess, e os desenvolvedores precisam converter essas regras para as diretivas de reescrita nginx. Vamos aprender a fazer essa conversão.

{{< figure align=center src="images/htaccess-rewrite-rules-to-nginx-location-directives.png" alt="Converter.">}}

Em nosso último tutorial, aprendemos [como instalar várias versões PHP com Nginx no Ubuntu][1]. O Apache é um dos servidores da web mais populares, mas ultimamente, o Nginx se estabeleceu como um concorrente da Apache. Mas o NGINX não suporta regras de reescrita htaccess. Portanto, neste artigo, aprenderemos como converter regras de reescrita htaccess em diretivas de reescrita nginx. Vamos começar!
  *** [Nginx Reescrita Regras][2] **
  *[**. HTACCESS Reescrita Regras **][3]
  *[** Converter .htaccess reescreva regras para nginx reescrita diretivas **][4]
  *[** Conclusão **][5]

## nginx Reescrita regras {#nginx}
Reescrever as regras alteram a parte ou toda a URL em uma solicitação de cliente, geralmente para informar os clientes que o recurso que eles estão solicitando agora reside em um local diferente ou para controlar o fluxo de processamento no NGINX. Por exemplo, para encaminhar solicitações para um servidor de aplicativos quando o conteúdo precisa ser gerado dinamicamente. A diretiva Try_Files é frequentemente usada para esse fim.
As duas diretivas para o reescrita nginx de propósito geral são _return_ e _rewrite_, e a diretiva _try_files_ é uma maneira útil de direcionar solicitações para servidores de aplicativos.
A diretiva de retorno é a mais simples das duas diretivas de propósito geral. Você inclui o retorno em um servidor ou contexto de localização.
Por exemplo, aqui está um exemplo muito simples que redireciona os clientes para um novo nome de domínio usando a diretiva _return_
```
server {
    listen 80;
    listen 443 ssl;
    server_name www.old-name.com;
    return 301 $scheme://www.new-name.com$request_uri;
}
```
Mas e se você precisar realizar distinções complicadas entre os URLs, capturar elementos no URL original ou alterar ou adicionar elementos no caminho? Você pode usar a diretiva _rewrite_ nesses casos.
Aqui está uma amostra regra de reescrita nginx que usa a diretiva de reescrita. Ele corresponde aos URLs que começam com a string /músicas e depois inclui o /mídia /ou /Audio /Diretório em algum lugar mais tarde no caminho. Ele substitui esses elementos por / mp3 / e adiciona a extensão de arquivo apropriada, .mp3 ou .ra. As variáveis ​​de US $ 1 e US $ 2 capturam os elementos do caminho que não estão mudando. Como exemplo,/download/cdn-west/media/file1 se torna /download/cdn-west/mp3/file1.mp3. Se houver uma extensão no nome do arquivo (como .flv), a expressão o retira e o substitui por .mp3.
```
server {
    # ...
    rewrite ^(/songs/.*)/media/(\w+)\.?.*$ $1/mp3/$2.mp3 last;
    rewrite ^(/songs/.*)/audio/(\w+)\.?.*$ $1/mp3/$2.ra  last;
    return  403;
    # ...
}
```

## .htaccess reescrita regras {#apache}
O arquivo .htaccess controla várias maneiras pelas quais um site pode ser acessado, bloqueado e redirecionado. Faz isso usando uma série de uma ou mais regras de reescrita .htaccess. Essas reescritas são executadas pelo módulo Mod_rewrite da Apache.
Mod_rewrite fornece uma maneira de modificar as solicitações de URL recebidas, dinamicamente, com base nas regras de expressão regular. Isso permite que você mapeie quaisquer URLs na sua estrutura de URL interna da maneira que desejar. Isso também é usado para limpar seus URLs externos e mapeá-los em URLs internos de aparência feia.
Por exemplo, a regra de reescrita .htaccess reescrita redefine um URL não www para um URL www.
```
RewriteEngine On
RewriteCond %{HTTP_HOST} ^yourdomain.com [NC]
RewriteRule ^(.*)$ http://www.yourdomain.com/$1 [L,R=301]
```

## Convert .htaccess reescreva regras para nginx reescrita diretivas {#convert}
Como mostramos em nosso exemplo acima para redirecionar um URL não www para um URL www, vamos converter a mesma regra de reescrita .htaccess na diretiva de reescrita nginx.
```
server {
    listen      80;
    server_name yourdomain.com;
    return      301 http://www.yourdomain.com$request_uri;
}
 
server {
    listen      80;
    server_name www.yourdomain.com;
    # ...
}
```
Então, aqui criamos dois blocos _Server_ separados, um para _YourDomain.com_ e o outro para _www.yourdomain.com_. E no bloco _server_ para _yourdomain.com_ nós usando a diretiva _return_ para redirecionar URL não-www para WWW URL.
O mesmo redirecionamento que realizamos com a diretiva de retorno também pode ser feito com a diretiva reescrita, mas não é recomendado.
```
server {
    listen      80;
    server_name www.yourdomain.com yourdomain.com;
    if ($http_host = yourdomain.com) {
        rewrite (.*) http://www.yourdomain.com$1;
    }
    # ...
}
```
Por mais de mais clareza, vamos converter regras do WordPress Htaccess na diretiva Nginx Try_Files.
[WordPress.org distribui][6] Um arquivo básico **. Htaccess ** com o seguinte. Reescrito de htaccess que permitem links bonitos:
```
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
```
Aqui está a diretiva Nginx Try_files convertida
```
location / {
    try_files $uri $uri/ /index.php?$args;
}
```

## Conclusão {#conclusion}
Neste tutorial, exploramos as regras de reescrita .htaccess da Apache e como podemos converter essas regras de reescrita .htaccess em diretivas de reescrita nginx. Além disso, exploramos diferentes diretivas NGINX que podem ser usadas para reescrever URLs. Também damos a reescrever regras de reescrita para o NGINX e o Apache. Espero que o tutorial seja útil para você.

## Explore
  * [Como instalar várias versões PHP com nginx no Ubuntu][1]
  * [Como configurar e configurar o nginx como proxy reverso][7]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[2]: #nginx
[3]: #apache
[4]: #convert
[5]: #conclusion
[6]: https://codex.wordpress.org/htaccess
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
