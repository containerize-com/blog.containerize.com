---
title: "Como implementar o cache do navegador com a configuração NGINX" 
seoTitle: "Como implementar o cache do navegador com a configuração NGINX" 
description: "Quanto mais rápido um site carrega, maior a probabilidade de um visitante ficar. Neste tutorial, implementaremos o armazenamento em cache do navegador com a configuração do NGINX." 
date: Thu, 03 Jun 2021 11:46:56 +0000
author: Assad Mahmood
summary: "Quanto mais rápido um site carrega, maior a probabilidade de um visitante ficar. Este artigo o orienta sobre como implementar o armazenamento em cache do navegador com as configurações NGINX." 
url: /pt/how-to-implement-browser-caching-with-nginx-configuration/
categories: ['Uncategorized', 'Web Server Solution Stack']
---

## Quanto mais rápido um site carrega, maior a probabilidade de um visitante ficar. Este artigo o orienta sobre como implementar o armazenamento em cache do navegador com as configurações NGINX.

{{< figure align=center src="images/how-to-implement-browser-caching-with-nginx-configuration-1.png" alt="Como implementar o cache do BROWSR com a configuração NGINX">}}

Em nossa série de tutoriais do NGINX, abordamos [como usar o nginx como balanceador de carga][1], [configurar o nginx como proxy reverso][2], [use várias versões PHP com nginx][3] e [convertem htaccess rewrite Regras para as diretivas de reescrita nginx][4]. No artigo de hoje, estamos cobrindo um tópico muito importante que ajuda as empresas a melhorar a experiência de seu usuário, aproveitando o cache do navegador. Neste tutorial, o guiaremos sobre como implementar cache de navegador com a configuração do NGINX usando o módulo de cabeçalho do NGINX. Vamos começar!
* **[Cache de navegador de alavancagem][5]** 
* [ **módulo de cabeçalho nginx** ][6]
* [ **E-TAGE E IF-NONE-MATCH** ][7]
* [ **Cache de navegador de alavancagem com configuração nginx** ][8]
* [ **Conclusão** ][9]

## Cache do navegador de alavancagem {#browser-caching}

Quanto mais rápido um site carrega, maior a probabilidade de um visitante permanecer no site. Os sites com muitas imagens e conteúdo interativo são carregados em segundo plano, tornam o site abrir uma tarefa complexa. Consiste em solicitar muitos arquivos diferentes do servidor um por um. Minimizar a quantidade dessas solicitações é uma maneira de acelerar seu site.
Um método para melhorar o desempenho do site é o cache do navegador de lençamentos. O cache do navegador desempenha um papel enorme no mecanismo de cache para aumentar a velocidade da página. Arquivos estáticos como CSS, JS, JPEG, PNG, etc. usados ​​para o site, podem ser salvos no computador do visitante para acesso futuro. Sempre que o visitante encontrar uma nova página em seu site, os arquivos acima podem ser acessados ​​no computador do visitante, em vez do servidor fornecido, o que aumentará tremendamente a velocidade de carga da página.

## Módulo de cabeçalho do Nginx {#header-module}

Os módulos _ngx \ _http \ _headers_module_ permitem adicionar os campos "_expires_" e "_cache-control_" campos e campos arbitrários, para um cabeçalho de resposta. Podemos usar o módulo de cabeçalho para definir esses cabeçalhos HTTP. O módulo de cabeçalho é um módulo NGINX do núcleo, o que significa que não precisa ser instalado separadamente para ser usado.
Exemplo de configuração se parece com o seguinte:
```
expires    24h;
expires    modified +24h;
expires    @24h;
expires    0;
expires    -1;
expires    epoch;
expires    $expires;
add_header Cache-Control private;
```

## E-Tag e se não {#etage}

Vamos supor que temos alguns arquivos de teste com diferentes extensões, por exemplo, test.html, test.jpg, test.css e test.js. Por padrão, todos os arquivos terão o mesmo comportamento de cache padrão. Para verificar os cabeçalhos de resposta de um arquivo usando o seguinte comando para solicitar um arquivo do nosso servidor nginx local e mostra os cabeçalhos de resposta:
```
curl -I http://localhost/test.html
```
```
Output: Nginx response headers
HTTP/1.1 200 OK
Server: nginx/1.14.1
Date: Fri, 03 March 2021 18:23:09 GMT
Content-Type: text/html
Content-Length: 1024
Last-Modified: Fri, 03 March 2021 18:23:09 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
Accept-Ranges: bytes
```
Na segunda a última linha, você encontrará o cabeçalho _etag_, que contém um identificador exclusivo para esta revisão específica do arquivo solicitado. Se você executar o último comando _curl_ repetidamente, encontrará exatamente o mesmo valor ETAG.
Ao usar um navegador da Web, o valor _etag_ é armazenado e enviado de volta ao servidor com o cabeçalho da solicitação _IF-Match_ quando o usuário atualizar a página ou o mesmo arquivo é exigido pelo navegador por qualquer motivo.
Podemos simular isso na linha de comando com o seguinte comando.
```
curl -I -H 'If-None-Match: "501c3b6f-401"' http://localhost/test.html
```
Observe o identificador exclusivo, ele deve corresponder ao valor de resposta que obtemos da nossa chamada anterior _curl_. A resposta será diferente desta vez:
```
Output: Nginx response headers
<strong>HTTP/1.1 304 Not Modified</strong>
Server: nginx/1.14.1
Date: Thu, 04 Feb 2021 18:24:05 GMT
Last-Modified: Thu, 04 Feb 2021 18:22:39 GMT
Connection: keep-alive
<strong>ETag: "501c3b6f-401"</strong>
```
Desta vez, o nginx responderá com **304 não modificado** . Ele não enviará o arquivo pela rede novamente; Em vez disso, dirá ao navegador que pode reutilizar o arquivo que já baixou localmente. Isso é útil, pois reduz o tráfego de rede. Mas o navegador ainda precisa fazer uma chamada HTTP para obter uma resposta do servidor, que ainda leva algum tempo.

## Cache do navegador de alavancagem com a configuração Nginx {#nginx-configuration}

Em nosso exemplo anterior, explicamos como o E-Tag e o IF-None-Match ajudam a reduzir o tráfego da rede. Mas o problema com o `etag` é que o navegador sempre envia uma solicitação ao servidor perguntando se ele pode reutilizar seu arquivo em cache. E isso ainda leva tempo para fazer a solicitação e receber a resposta.
Agora, com a ajuda do módulo de cabeçalho do NGINX, faremos com que o navegador contenha alguns arquivos localmente sem pedir explicitamente ao servidor.
Adicione as três linhas a seguir no seu arquivo de configuração nginx para cache conteúdo estático no nginx
```
expires 30d;
add_header Pragma "public";
add_header Cache-Control "public";
```
A primeira linha instrui o nginx a armazenar conteúdo de cache no navegador do cliente por 30 dias (30D). Após esse período, qualquer nova solicitação do usuário resultará na re-validação do cache e na atualização do navegador do cliente.
Você pode colocar as linhas acima em blocos _location_, _server_ ou _http_.
```
location /static/ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}
```
Quando você os coloca no bloco de localização, apenas o conteúdo servido por esse local será armazenado em cache. No caso acima, apenas solicitações para / estático / serão armazenadas em cache.
Se você deseja armazenar em cache os tipos de arquivo específicos, pode fazê -lo usando o bloco de localização.
```
location ~* \.(js|jpg|gif|png|css)$ {
 expires 30d;
 add_header Pragma "public";
 add_header Cache-Control "public";
}

```
No exemplo acima, estamos armazenando em cache vários tipos de arquivos, como JS, JPG, CSS, etc.
Da mesma forma, você pode colocar a configuração do cache no bloco _server_ antes de qualquer bloco de localização. Nesse caso, todas as respostas deste servidor serão armazenadas em cache. Ou você pode colocá -lo no bloco _HTTP_, neste caso, todas as solicitações de servidor suportadas pelo arquivo de configuração do NGINX serão armazenadas em cache.

## Conclusão {#conclusion}

O módulo de cabeçalhos do NGINX pode ser usado para adicionar cabeçalhos arbitrários à resposta, mas definir adequadamente os cabeçalhos de controle de cache é um de seus aplicativos mais úteis. Ajuda você a melhorar o desempenho do site, especialmente para os usuários em redes com maior latência, como redes de transportadoras móveis. Neste tutorial, aprendemos a aproveitar o armazenamento em cache do navegador com a configuração do NGINX. Espero que isso ajude você a melhorar a experiência do seu usuário em seu site.

## Explore
  * [Como instalar várias versões PHP com Nginx no Ubuntu][3]
  * [Como configurar e configurar o nginx como proxy reverso][2]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-convert-htaccess-rewrite-rules-to-nginx-rewrite-directives/
[5]: #browser-caching
[6]: #header-module
[7]: #etag
[8]: #nginx-configuration
[9]: #conclusion
