---
title: "Como otimizar seu site usando compactação GZIP no Nginx" 
seoTitle: "Como otimizar seu site usando compactação GZIP no Nginx" 
description: "Neste artigo, discutiremos um método para otimizar as velocidades de transferência do site, reduzindo os tamanhos dos arquivos por meio da compactação GZIP no Nginx." 
date: Fri, 11 Jun 2021 12:46:52 +0000
author: Assad Mahmood
summary: "Este tutorial o orienta sobre como otimizar o desempenho do seu site e torná -lo rápido, reduzindo os tamanhos dos arquivos usando a compactação GZIP no Nginx." 
url: /pt/how-to-optimize-your-website-using-gzip-compression-in-nginx/
categories: ['Web Server Solution Stack']
---

## Este tutorial o orienta sobre como otimizar o desempenho do seu site e torná -lo rápido, reduzindo os tamanhos dos arquivos usando a compactação GZIP no Nginx.

{{< figure align=center src="images/enable-gzip-compression-in-nginx.png" alt="Como ativar a compressão GZIP em nginx">}}

Este artigo está em continuação de nossa série de tutoriais sobre o NGINX. Até agora, abordamos como usar o NGINX como balanceador de carga, como usar o NGINX como proxy reverso. E agora este tutorial abrange outra pergunta exigente "Como otimizar seu site usando a compactação GZIP no Nginx". Neste tutorial, o guiaremos passo a passo sobre como ativar a compactação GZIP no Nginx. Então vamos começar!
  * [Otimização do site com compactação][1]
  * [O que é compressão gzip?][2]
  * [Como funciona a compressão GZIP?][3]
  * [Ativar compressão GZIP em nginx][4]
  * [Verifique a compressão GZIP][5]
  * [Conclusão][6]

Otimização do site com compactação  {#Optimize}
O desempenho de um site depende de vários fatores. Um dos fatores depende parcialmente é o tamanho de todos os arquivos que o navegador de um usuário deve baixar do seu servidor. Reduzir ou comprimir o tamanho desses arquivos transmitidos pode tornar seu site carregar mais rápido para o usuário. Também pode reduzir a conta do seu site, caso você pague pelo uso da largura de banda em conexões medidas. Portanto, a compactação pode desempenhar um papel muito vital na otimização do seu site.
Como o Google e outros mecanismos de pesquisa estão considerando a experiência do usuário de um site (UX) um fator crítico em seus algoritmos de classificação. Tornou -se mais importante melhorar e otimizar seu site para as melhores classificações. Entre os fatores mais importantes a serem prestados, estão a velocidade da página e os tempos de carregamento. E a maneira mais rápida e fácil de melhorar a velocidade e o desempenho do seu site é ativar a compactação GZIP em seu site.

## O que é compactação gzip?   {#What-Gzip}
GZIP é um formato de arquivo **e aplicativo de software**  usado para compactação e descompressão de arquivos. Servidores da Web ou outro software Use a compactação GZIP para comprimir arquivos de dados antes de serem enviados aos navegadores dos usuários. Isso reduz o tempo de download do arquivo, o que torna seu site mais rápido. Todos os navegadores modernos suportam a compressão GZIP.
Também é importante observar que a compactação GZIP deve estar ativada no seu servidor da web antes que você possa ativar a compactação de arquivos e pasta. Logo, veremos como ativar a compactação GZIP no Nginx.

## Como funciona a compactação GZIP?   {#How-Gzip}
O GZIP, o método de compactação mais popular, é usado por servidores e navegadores da Web para compactar e descomprimir o conteúdo, conforme transmitido pela Internet. É usado principalmente em arquivos de código e texto, o GZIP pode reduzir o tamanho de arquivos JavaScript, CSS e HTML em até 90%.
Por padrão, a compactação GZIP não comprime imagens ou vídeos. É por isso que a maioria das ferramentas de teste de velocidade do site, como o Google PageSpeed ​​Insights, recomendo permitir a compactação GZIP.
Quando um servidor da Web recebe uma solicitação de uma página da web, o servidor da web verifica o cabeçalho da solicitação para verificar se o navegador suporta o GZIP. Nesse caso, o servidor gera a marcação para a página antes de aplicar o GZIP. O GZIP converte a marcação HTML em dados compactados que são entregues ao usuário final. Quando o usuário final recebe os dados compactados, seu navegador os descomprima.

## Ativar compactação gzip em nginx   {#enable-gzip}
Para alterar a configuração do Nginx GZIP, abra o principal arquivo de configuração do NGINX em "_VI_" ou seu editor de texto favorito:
```
sudo vi /etc/nginx/nginx.conf
```
Encontre a seção de configurações _gzip_, que se parece com a seguinte:
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

# gzip_vary on;
# gzip_proxied any;
# gzip_comp_level 6;
# gzip_buffers 16 8k;
# gzip_http_version 1.1;
# gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
. . .
```
Como você pode ver, o GZIP é ativado por padrão com _gzip ON; _, mas há outras configurações de GZIP comentadas.
Podemos ativar a configuração _GZIP_TYPES_ para ativar a compactação nos tipos de arquivo que queremos compactar. Por exemplo
```
. . .
##
# `gzip` Settings
#
#
gzip on;
gzip_disable "msie6";

gzip_vary on;
gzip_proxied any;
gzip_comp_level 6;
gzip_buffers 16 8k;
gzip_http_version 1.1;
gzip_min_length 256;
gzip_types
  application/atom+xml
  application/geo+json
  application/javascript
  application/x-javascript
  application/json
  application/ld+json
  application/manifest+json
  application/rdf+xml
  application/rss+xml
  application/xhtml+xml
  application/xml
  font/eot
  font/otf
  font/ttf
  image/svg+xml
  text/css
  text/javascript
  text/plain
  text/xml;
. . .
```
Agora reinicie o Nginx para levar novas configurações em vigor.

## Verifique a compactação gzip   {#Verify}
Agora que ativamos a compactação GZIP, vamos verificar.
```
curl -H "Accept-Encoding: gzip" -I http://localhost/test.html

```
A resposta permanecerá a mesma, já que a compressão já foi ativada para esse FileType:
```
Output
HTTP/1.1 200 OK
Server: nginx/1.18.0 (Ubuntu)
Date: Mon, 08 Feb 2021 11:03:41 GMT
Content-Type: text/html
Last-Modified: Mon, 08 Feb 2021 11:03:41 GMT
Connection: keep-alive
ETag: W/"6222dc8d-500"
<strong>Content-Encoding: gzip</strong>
```

## Conclusão   {#conclusion}
Neste artigo, aprendemos que você pode usar o módulo Nginx GZIP para acelerar as transferências de arquivos. Mostramos você passo a passo como ativar a compactação GZIP no NGINX usando o módulo GZIP. A documentação oficial para [GZIP Module][7] lista outras diretivas de configuração que você pode querer dar uma olhada. Espero que este tutorial o ajude a otimizar o desempenho e a velocidade do seu site.

## Explore
  * [Como instalar várias versões PHP com Nginx no Ubuntu][8]
  * [Como configurar e configurar o nginx como proxy reverso][9]

  
[1]: #optimize
[2]: #what-gzip
[3]: #how-gzip
[4]: #enable-gzip
[5]: #verify-gzip
[6]: #conclusion
[7]: https://nginx.org/en/docs/http/ngx_http_gzip_module.html
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
