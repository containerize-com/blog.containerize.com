---
title: "Como configurar e configurar o nginx como proxy reverso" 
seoTitle: "Como configurar e configurar o nginx como proxy reverso" 
description: "Este tutorial é sobre como configurar e configurar o nginx como proxy reverso. O NGINX é considerado um dos servidores da Web de proxy reverso mais populares de código aberto." 
date: Fri, 07 May 2021 07:38:05 +0000
author: yasir saeed
summary: "O NGINX é um servidor da Web de código aberto que também pode atuar como um proxy reverso. Este tutorial ajudará você a aprender a configurar e configurar o NGINX como proxy reverso." 
url: /pt/how-to-setup-and-configure-nginx-as-reverse-proxy/
categories: ['Web Server Solution Stack']
---

## nginx é um servidor da web de código aberto que também pode atuar como um proxy reverso. Este tutorial ajudará você a aprender a configurar e configurar o NGINX como proxy reverso.

{{< figure align=center src="images/nginx-as-reverse-proxy.png" alt="Use o nginx como servidor de proxy reverso">}}


## Visão geral:
Nginx e Apache são dois servidores da Web de código aberto mais ** ** frequentemente usados ​​com PHP. Um proxy ou gateway reverso atua como uma conexão entre o cliente e o servidor. O cliente e o servidor trocam informações para trabalhar de forma contínua e eficiente. Os proxies reversos mais comuns são ** nginx e Apache ** e ambos podem ser configurados na mesma máquina virtual ao hospedar vários sites. Um proxy reverso protege os servidores da Web contra ataques e gateway de conexão aparece para o cliente como um servidor da web comum, onde nenhuma configuração especial de proxy reversa nginx é necessária. O cliente envia uma solicitação enquanto o proxy reverso decide por onde passar as informações solicitadas e, em seguida, entregar o resultado final de saída ao cliente.
Depois de muito apreço por nossa série sobre tutoriais da Redis, recebemos muitos pedidos para iniciar uma série sobre os tutoriais do NGINX. Então, na semana passada, começamos com um tutorial sobre como usar o [Nginx Reverse Proxy Load Balancer][1] para seus aplicativos. Este exemplo simples de configuração de proxy reverso nginx fornece benefícios de desempenho de proxy reverso e nginx reverso. O proxy reverso simples do nginx é o servidor proxy Nginx Nginx de código aberto mais usado na Internet. Neste tutorial, configuraremos e exploraremos como usar o nginx como proxy reverso ** e como configurá -lo como proxy reverso em um único servidor. Então vamos começar!
  * O que é um servidor proxy?
  * Forward vs Reverse Proxy
  * Configurar proxy reverso
  * Quais são as vantagens do proxy reverso do Nginx?
  * Conclusão

## O que é um servidor proxy?
** Um servidor proxy ** atua como um gateway entre você e a Internet. É um servidor intermediário que separa os usuários finais dos sites que eles navegam. Os servidores proxy fornecem diferentes níveis de funcionalidade, segurança e privacidade conforme seu caso de uso ou política da empresa.
Com um servidor proxy, o tráfego da Internet flui através do servidor proxy a caminho do endereço solicitado. A solicitação retorna ao mesmo servidor proxy (principalmente) e, em seguida, o servidor proxy encaminha os dados recebidos do site para você.

## Forward vs Reverse Proxy:

{{< figure align=center src="images/forward-proxy-server-1024x482.png" alt="nginx como servidor de proxy reverso">}}

Geralmente, quando falamos do proxy, na maioria das vezes, queremos dizer o proxy avançado. ** Proxies avançados ** são ótimos para evitar restrições nos países, como o grande firewall da China. O cliente simplesmente se conecta aos recursos bloqueados por meio do proxy avançado. Os proxies avançados podem ocultar as identidades do usuário alterando seu endereço IP. Portanto, basicamente o NGINX como proxy para a frente fica entre o cliente e a Internet, para que o servidor final não esteja ciente do cliente real.

{{< figure align=center src="images/reverse-proxy-server-1024x482.png" alt="nginx como proxy reverso">}}

** Os proxies reversos ** também atuam como intermediários, mas ficam do outro lado da conexão. Os proxies reversos são excelentes em ** balanceamento de carga **, otimização da web e segurança. O proxy reverso é normalmente usado para distribuir a carga entre vários servidores, mostrar perfeitamente conteúdo de sites diferentes ou passar solicitações de processamento para servidores de aplicativos em protocolos que não sejam HTTP.

## Configure o nginx como proxy reverso:
Quando o NGINX proxies uma solicitação, ele envia a solicitação para um servidor proxado especificado, busca a resposta e a envia de volta ao cliente. É possível solicitações de proxy para um servidor HTTP ou um servidor não http usando um protocolo especificado. Os protocolos suportados incluem ** FastCGI, UWSGI, SCGI e Memcached **.
Para passar uma solicitação para um servidor proxado HTTP, a diretiva ** proxy_pass ** é especificada dentro de um local ** **. Por exemplo:
```
location /path/to/location/ {
    proxy_pass http://www.backendserver.com/link/;
}
```
Este exemplo de proxy reverso do NGINX resulta na aprovação de todas as solicitações processadas neste local para o servidor proxado no endereço especificado. Este endereço pode ser especificado como um nome de domínio ou um endereço IP. O endereço também pode incluir uma porta:
```
location ~ \.php {
    proxy_pass http://127.0.0.1:8000;
}
```
Você pode até passar cabeçalhos modificados ou personalizados para o servidor proxado no nginx ** proxy \ _set \ _header ** host abaixo no exemplo.
```
location /path/to/location/ {
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
    proxy_pass http://localhost:8000;
}
```
O NGINX também suporta buffer, o que ajuda a melhorar o desempenho. Com o buffer ativado, o NGINX armazenará a resposta que recebe do servidor proxado, desde que o cliente precise baixar.
Em vez de procurar todas as solicitações para um único servidor, você também pode ** configurar vários servidores de back -end ** e deixar a carga de equilíbrio nginx entre esses servidores proxiados. Já cobrimos isso em nosso tutorial sobre [Balanceamento de carga Nginx][1].

## Quais são as vantagens do proxy reverso do Nginx?
A seguir, os benefícios da configuração do Nginx Reverse Proxy Server:
  *Nginx é um dos servidores da web de código aberto mais populares ** que também é a ferramenta de proxy mais popular. A configuração de proxy reversa nginx é muito simples de implementar, pois fornece ao usuário segurança de alta ponta contra ataques de servidor DDoS e DOS Web.
  *Ajuda a criar uma carga equilibrada entre sites de tráfego alto e servidores de back -end como ** Dropbox, Netflix e Zynga **.
  * Ele fornece mecanismo de cache para um servidor de back-end mais lento e sites de tráfego alto para configurar o host virtual de proxy reverso nginx. Não é necessário configurar um novo processo para cada solicitação da Web do lado do cliente.
  * Ele também atua como um servidor proxy reverso para vários protocolos, como HTTP, HTTPS, TCP, UDP, SMTP, IMAP e POP3 etc.
  *O nginx pode ** lidar com mais de 10000 conexões ** com uma pegada de baixa memória e pode operar vários servidores da Web em um único endereço IP.
  * Também ajuda a armazenar em cache o conteúdo das páginas e a executar a criptografia SSL para diminuir a carga do servidor host da web. O NGINX é um dos melhores servidores da Web para melhorar o desempenho do conteúdo estático, comprimindo -o e aumentando o tempo de carregamento.
  * É uma excelente ferramenta para um ambiente de vários servidores e também pode ser útil para diferentes tarefas, como manter um único servidor anônimo.

## Conclusão:
Neste tutorial de proxy reverso ** nginx **, exploramos o que é um servidor de proxy nginx e configurando o proxy reverso do Nginx. Diferença entre o servidor de proxy direto vs reverso nginx. Também aprendemos pelo exemplo como configurar o nginx como proxy reverso. Agora você entende completo como instalar ** NGINX Reverse Proxy Configuração passo a passo **. O tutorial acima ajuda você a começar com um proxy reverso configurado. Em nossos próximos tutoriais, discutiremos tópicos mais interessantes sobre o NGINX.
_O que é o seu servidor de proxy _ reverse mais favorito que é fácil, dinâmico e completo?. Você tem alguma dúvida sobre a fonte principal _open _Reverse prox__y, ** Carregue o balanceador de aplicações HTTP e TCP ** baseado em?, Por favor [entre em contato][2].

## Explore
Você pode encontrar os artigos mais relacionados abaixo
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian][3]
  * [Segure o nginx com Let's Encrypt no Ubuntu 20.04][4]
  * [Como usar o nginx como balanceador de carga para o seu aplicativo][1]
  * [Como instalar e proteger o phpmyadmin com nginx no Ubuntu][5]
  * [Configure o suporte HTTP/2 no Nginx no Ubuntu/Debian][6]
  * [Instale várias versões PHP com Nginx no Ubuntu][7]
  * [Configure o nginx com o passageiro no servidor de produção da AWS][8]

  
[1]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
