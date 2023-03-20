---
title: "Como ativar a compactação GZIP no WordPress | GZIP WordPress" 
seoTitle: "Como ativar a compactação GZIP no WordPress | GZIP WordPress" 
description: "Deseja ativar a compactação GZIP no WordPress para acelerar seu site? Nesta postagem do blog, aprenderemos como ativar a compactação no WordPress." 
date: Sat, 12 Dec 2020 11:51:16 +0000
author: Assad Mahmood
summary: "A velocidade da página e os tempos de carregamento são os principais fatores para uma melhor classificação nos mecanismos de pesquisa. A compactação GZIP pode fazer isso acontecer e fornecer uma vantagem competitiva." 
url: /pt/how-to-enable-gzip-compression-in-wordpress-gzip-wordpress/
categories: ['Blogging']
---

## A velocidade da página e os tempos de carregamento são os principais fatores para uma melhor classificação nos mecanismos de pesquisa. A compactação GZIP pode fazer isso acontecer e fornecer uma vantagem competitiva.

{{< figure align=center src="images/Asset-1.png" alt="Ativar compressão GZIP">}}


## Visão geral
Como o Google e outros mecanismos de pesquisa estão considerando a experiência do usuário de um site (UX) um fator crítico em seus algoritmos de classificação. Tornou -se mais importante melhorar e otimizar seu site para as melhores classificações. Entre os fatores mais importantes a serem prestados, estão a velocidade da página e os tempos de carregamento. E a maneira mais rápida e fácil de melhorar a velocidade e o desempenho do local é ativar a compactação do GZIP em seu site. Há uma chance de que seu host da web permita automaticamente a compactação GZIP para você. Caso contrário, você precisa executar essa tarefa crucial.
Neste artigo, mostraremos exatamente como ativar facilmente a compactação GZIP no WordPress. Vamos começar!
  *[** O que é compressão gzip **?][1]
  *[** Como funciona a compressão GZIP? **][2]
  *** [Como verificar se a compactação gzip está ativada?][3] **
  *** [Ativar compressão GZIP em WordPress][4] **
  *** [Conclusão][5] **

## O que é compactação gzip? {#o que}
O GZIP é um formato de arquivo ** e um aplicativo de software ** usado para compactação e descompressão do arquivo. Servidores da Web ou outro software Use a compactação GZIP para comprimir arquivos de dados antes de serem enviados aos navegadores dos usuários. Isso reduz o tempo de download do arquivo, o que torna seu site mais rápido. Todos os navegadores modernos suportam a compressão GZIP.
Também é importante observar que a compactação GZIP deve estar ativada no seu servidor da web antes que você possa ativar a compactação de arquivos e pasta. Logo, veremos como verificar se o seu servidor da web possui GZIP ativado.

## Como funciona a compactação GZIP? {#trabalhar}
O GZIP, o método de compactação mais popular, é usado por servidores e navegadores da Web para compactar e descomprimir o conteúdo, conforme transmitido pela Internet. É usado principalmente em arquivos de código e texto, o GZIP pode reduzir o tamanho de arquivos JavaScript, CSS e HTML em até 90%. Por padrão, a compactação GZIP não comprime imagens ou vídeos. Para isso, você precisará otimizar as imagens para a web no seu site WordPress. É por isso que a maioria das ferramentas de teste de velocidade do site, como o Google PageSpeed ​​Insights, recomendo permitir a compactação GZIP.
Quando um servidor da Web recebe uma solicitação de uma página da web, o servidor da web verifica o cabeçalho da solicitação para verificar se o navegador suporta o GZIP. Nesse caso, o servidor gera a marcação para a página antes de aplicar o GZIP. O GZIP converte a marcação HTML em dados compactados que são entregues ao usuário final. Quando o usuário final recebe os dados compactados, seu navegador os descomprima.

## ** Como verificar se a compactação gzip está ativada? ** {#Verify}
Seu host pode ativar a compactação no WordPress por padrão. No entanto, esse nem sempre é o caso. Você pode determinar se já possui compactação GZIP ativada usando o Chrome 'DevTools.
Abra seu site em um navegador Chrome, clique com o botão direito do mouse em qualquer lugar da página e selecione ** Inspecionar ** para ** abrir as ferramentas do desenvolvedor **.
Em seguida, navegue até a guia ** Rede ** e clique no URL principal do site na seção "Nome". Selecione a guia ** Cabeçalhos ** e, em seguida, role para baixo para encontrar os cabeçalhos ** de resposta ** seção:

{{< figure align=center src="images/gzip-determine.gif" alt="Verifique a codificação do conteúdo">}}

Lá, você verá se a compactação GZIP está ou não ativada.

## Ativar compactação GZIP no WordPress {#enable}
Se você determinou que a compactação do ** WordPress GZIP ainda não está ativada **, existem vários métodos que você pode usar para executá -lo. A maneira mais fácil é usar alguns plugins do WordPress, como [WP Rocket][6], [WP Super Cache][7] ou [W3 Total Cache][8]. No entanto, você pode fazer isso manualmente no nível do servidor por arquivo .htaccess ou atualizando sua configuração nginx.

### Editando o arquivo .htaccess
Uma das maneiras mais comuns de ativar a compactação do WordPress GZIP é ** editar seu arquivo _.htaccess_ **. No entanto, isso envolve o risco de quebrar alguma coisa. Este é um arquivo de servidor sensível e um movimento errado pode causar muitos problemas.
Para reduzir o risco, certifique -se de ** salvar uma cópia do arquivo original ** antes de fazer alterações. O arquivo _.htaccess_ deve estar na pasta ** root do seu site **. Depois de abrir _.htaccess_, adicione o seguinte código abaixo das seções marcadas pelas tags `# BEGIN WordPress` e`# End WordPress`
```
# Compress HTML, CSS, JavaScript, Text, XML and fonts
AddOutputFilterByType DEFLATE application/javascript
AddOutputFilterByType DEFLATE application/rss+xml
AddOutputFilterByType DEFLATE application/vnd.ms-fontobject
AddOutputFilterByType DEFLATE application/x-font
AddOutputFilterByType DEFLATE application/x-font-opentype
AddOutputFilterByType DEFLATE application/x-font-otf
AddOutputFilterByType DEFLATE application/x-font-truetype
AddOutputFilterByType DEFLATE application/x-font-ttf
AddOutputFilterByType DEFLATE application/x-javascript
AddOutputFilterByType DEFLATE application/xhtml+xml
AddOutputFilterByType DEFLATE application/xml
AddOutputFilterByType DEFLATE font/opentype
AddOutputFilterByType DEFLATE font/otf
AddOutputFilterByType DEFLATE font/ttf
AddOutputFilterByType DEFLATE image/svg+xml
AddOutputFilterByType DEFLATE image/x-icon
AddOutputFilterByType DEFLATE text/css
AddOutputFilterByType DEFLATE text/html
AddOutputFilterByType DEFLATE text/javascript
AddOutputFilterByType DEFLATE text/plain
AddOutputFilterByType DEFLATE text/xml

# Remove browser bugs (only needed for really old browsers)
BrowserMatch ^Mozilla/4 gzip-only-text/html
BrowserMatch ^Mozilla/4.0[678] no-gzip
BrowserMatch bMSIE !no-gzip !gzip-only-text/html
Header append Vary User-Agent
```
** Salve o arquivo ** e envie -o no servidor do seu site. Quando terminar, verifique se o GZIP é ativado usando o Devtools do Chrome, conforme explicado acima.

## Ativar compactação GZIP em nginx
Para ** Ativar compactação **, inclua a diretiva ** gzip ** com o parâmetro on on. ** gzip ** ligado; Por padrão, ** nginx ** comprime respostas apenas com texto MIME TIPO/HTML. Para compactar as respostas com outros tipos de MIME, inclua a diretiva GZIP_TYPES e liste os tipos adicionais.
Você pode ativar a compactação GZIP no WordPress ** Abrindo seu arquivo _nginx.conf_ ** e adicionando o seguinte código:
```
gzip on;
gzip_disable "MSIE [1-6].(?!.*SV1)";
gzip_vary on;
gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;
```

## Conclusão {#conclusion}
Este é o fim deste tutorial do GZIP WordPress. Existem muitas maneiras de otimizar seu site para velocidade e desempenho. Neste tutorial do GZIP WordPress, passamos pelo que é compactação GZIP, a importância da compactação GZIP e suas etapas de instalação. Além disso, existem muitos links relevantes mencionados na seção "Explorar" abaixo.
Finalmente, [contenderize.com][9] está escrevendo artigos sobre produtos de código aberto adicionais. Portanto, mantenha contato com a categoria [blogging][10] para notícias e atualizações regulares.

## Explore
  * [Matomo][11]
  * [Plausível][12]
  * [WordPress][13]
  * [Jekyll][14]
  * [Como dockerize WordPress com Docker Compose][15]
  * [Como as ferramentas gratuitas de análise de negócios ajudam sua empresa][16]
  * [Top 5 Ferramentas de inteligência de negócios de código aberto de 2021][17]
  * [Como instalar o plug -in no WordPress | Fórum de Vanilla][18]
  * [Aumente seus leads com a integração do WordPress de Civicrm gratuita][19]

  
[1]: #what
[2]: #work
[3]: #verify
[4]: #enable
[5]: #conclusion
[6]: https://wp-rocket.me/
[7]: https://wordpress.org/plugins/wp-super-cache/
[8]: https://wordpress.org/plugins/w3-total-cache/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/blogging/
[11]: https://products.containerize.com/business-intelligence/matomo
[12]: https://products.containerize.com/business-intelligence/plausible
[13]: https://products.containerize.com/blogging/wordpress/
[14]: https://products.containerize.com/blogging/jekyll/
[15]: https://blog.containerize.com/blogging/how-to-dockerize-wordpress-docker-wordpress/
[16]: https://blog.containerize.com/2021/03/12/how-free-business-analytics-tools-assist-your-business/
[17]: https://blog.containerize.com/business-intelligence-software/top-5-open-source-business-intelligence-solutions-of-2021/
[18]: https://blog.containerize.com/blogging/how-to-a-install-plugin-in-wordpress-vanilla-forum/
[19]: https://blog.containerize.com/blogging/civicrm-wordpress-integration-wordpress-tutorial/
