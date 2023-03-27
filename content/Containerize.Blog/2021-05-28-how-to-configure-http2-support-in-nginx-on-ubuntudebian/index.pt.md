---
title: "Como configurar o suporte HTTP/2 no Nginx no Ubuntu/Debian" 
seoTitle: "Como configurar o suporte HTTP/2 no Nginx no Ubuntu/Debian" 
description: "HTTP2 ou H2 é um protocolo binário e uma versão aprimorada do protocolo HTTP que permite aumentar a velocidade das páginas do site após o suporte a HTTP2 HTTP2 do Nginx" 
date: Fri, 28 May 2021 18:59:02 +0000
author: yasir saeed
summary: "HTTP/2 é um protocolo multiplexado robusto para melhorar a velocidade e a segurança da carga da página. Neste tutorial, aprenderemos como configurar o NGINX com suporte HTTP/2." 
url: /pt/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
categories: ['Web Server Solution Stack']
---

## http/2 é um protocolo multiplexado robusto para melhorar a velocidade e a segurança da carga da página. Neste tutorial, aprenderemos como configurar o NGINX com suporte HTTP/2.

{{< figure align=center src="images/nginx-enable-http2.png" alt="Nginx Ative o suporte HTTP2 no Ubuntu e Debian">}}


## **Visão geral** 
O NGINX é um servidor web de código aberto rápido e confiável. Ele ganhou popularidade devido à sua baixa pegada de memória, balanceamento de carga, alta escalabilidade, cache, suporte para a maioria dos protocolos e proxy reverso. Agora, vamos falar sobre como o NGINX ativa o protocolo HTTP2.
Um dos protocolos suportados pelo NGINX é o HTTP/2, publicado em maio de 2015. A principal vantagem do HTTP/2 é a alta velocidade de transferência para sites ricos em conteúdo, reduz a carga no servidor da Web e pode iniciar várias solicitações paralelas paralelas em uma única conexão TCP. O nginx Ativar HTTP2 é uma versão aprimorada do protocolo HTTP. Antes de começarmos, precisaremos de alguns servidores Ubuntu ou Debian com o certificado SSL. Neste tutorial, o guiaremos passo a passo sobre como o NGINX Ativar http2 no Ubuntu.
  * Atualizando os pacotes e instalando o nginx
  * Suporte HTTP/2
  * Adicionando o nome do servidor
  * Adicionando os certificados SSL
  * Removendo as cifras
  * Redirecionar todas as solicitações HTTP para HTTPS
  * Reinicie o nginx
  * Conclusão

## Etapa 1: Atualizando os pacotes e instalando o nginx {#4597}

A primeira etapa é atualizar e atualizar os repositórios no sistema de embalagem APT. O uso da atualização baixará os pacotes de versão mais recente e a atualização instalará a versão mais recente dos pacotes da lista. Execute o comando APT abaixo para atualizar e atualizar os pacotes.
```
sudo apt-get update && apt-get upgrade
```
A próxima etapa é instalar a versão mais recente do pacote nginx. O suporte ao protocolo HTTP/2 foi introduzido no NGINX versão 1.9.5 e acima. Portanto, teremos que instalar a versão mais recente do pacote nginx. Execute o comando APT Use APT Install para instalar os pacotes nginx:
```
sudo apt-get install nginx
```
Você será solicitado a confirmar o processo de instalação passo a passo. Selecione a opção Sim e finalize o processo de instalação. Após o término do processo de instalação, a próxima etapa é verificar a versão do pacote, se instalamos a versão correta ou não. Você pode verificar a versão do Nginx Web Server, digitando comando:
```
sudo nginx -v
```
A saída do comando de verificação da versão acima deve ser semelhante ao seguinte:
```
nginx version: nginx/1.10.0 (Ubuntu)
```

## Etapa 2: Ativando suporte HTTP/2 {#f4d2}

Depois de instalar o pacote Nginx, precisamos ativar o HTTP2 NGINX. O usuário precisa alterar a porta de escuta de 80 para 443. Vamos abrir o arquivo de configuração do NGINX:
```
sudo nano /etc/nginx/sites-available/domain-name.com
```
Você pode ver que o valor por padrão nginx está definido para ouvir é a porta 80.
Ouça 80 default_server;
Ouça [::]: 80 default_server;
Como você pode ver, há duas variáveis ​​diferentes de escuta. A primeira variável de escuta é para todas asconções IPv4 e a segunda é para conexões IPv6. Habilitaremos a criptografia para ambas as variáveis. Altere o número da porta de escuta para 443 e adicione a conexão SSL para o protocolo HTTPS, como mostrado abaixo:
Ouça 443 SSL HTTP2 default_server;
Ouça [::]: 443 ssl http2 default_server;
Observe que, além do SSL, também adicionamos HTTP2. O NGINX agora pode usar navegadores que suportam o protocolo HTTP/2.

## Etapa 3: Adicionando o nome do servidor {#a745}

O próximo passo é alterar o servidor \ _name para que o nome do servidor esteja associado ao nome do domínio. O usuário só precisa alterar o nome do servidor no arquivo de configuração. Localize a entrada do servidor \ _name no arquivo de configuração e altere _ para o seu domínio real, assim:
```
server_name example.com www.example.com;
```
Salve o arquivo de configuração do servidor editando no editor de texto. Você pode verificar a configuração do nginx para obter erros de sintaxe com comando:
```
sudo nginx -t
```
Se a sintaxe estiver livre de erros, você verá a saída abaixo:
nginx: o arquivo de configuração /etc/nginx/nginx.conf sintaxe está ok
nginx: arquivo de configuração /etc/nginx/nginx.conf teste é bem -sucedido

## Etapa 4: Adicionando os certificados SSL {#37c0}

A próxima etapa é ativar a configuração do NGINX HTTPS para usar seu certificado SSL. Você pode gerar um certificado auto -assinado ou [instalar um certificado gratuito de Let's Encrypt][1]. Se você não tiver um certificado SSL, siga este tutorial. Adicione seus certificados SSL dentro do diretório de configuração do NGINX semelhante a:
```
sudo mkdir /etc/nginx/ssl
```
Copie seu certificado e a chave privada para este local e também substitua o exemplo.com pelo seu nome de domínio real:
sudo cp /path/to/your/certificate.crt /etc/nginx/ssl/example.com.crt
sudo cp /path/to/your/private.key /etc/nginx/sssl/example.com.key
Agora abra o arquivo de configuração do servidor nginx mais uma vez. Adicione e configure novas linhas SSL dentro do bloco do servidor nginx com a localização de seus certificados para ativar a configuração NGINX SSL:
sudo nano /etc/nginx/sites-available/domain-name.com
ssl_certificate /etc/nginx/sssl/example.com.crt;
ssl_certificate_key /etc/nginx/ssl/example.com.key;
Salve o arquivo nginx do arquivo e saia do editor de texto.

## Etapa 5: Removendo as cifras {#d291}

A cifra é um algoritmo usado na criptografia para criptografia e descriptografia de dados. As suítes cifras são um monte de algoritmos criptográficos usados ​​para proteger conexões de rede. O HTTP/2 possui uma enorme lista negra de cifras inseguras que precisam ser removidas. Aqui usaremos um conjunto popular de cifra, aprovado pelo Internet Giants Cloudflare.
Abra o seguinte arquivo de configuração nginx /etc/nginx/nginx.conf e adicione as linhas abaixo logo após **ssl \ _prefer \ _server_ciphers em.** Essas linhas incluem a lista dos mais recentes cifras que os navegadores http2 entendem.
```
ssl_ciphers EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+
AES256:EECDH+3DES:RSA+3DES:!MD5;
```
Você pode definir gzip para desligar e adicionar proxy \ _max \ _temp \ _file \ _size 0; Para evitar err \ _http2 \ _protocol_error nginx Erro.

## Etapa 6: Redirecionar todas as solicitações HTTP para HTTPS {#b387}

Agora, devemos informar ao NGINX HTTP2 Proxy o que deve servir o conteúdo através do HTTPS somente se o servidor receber uma solicitação HTTP. Por fim, ignorando as linhas comentadas, o seu arquivo de configuração nginx /etc/nginx/sites-available/domain-name.com deve se parecer com isso:
Servidor {Ouça 443 SSL HTTP2 default_server; Ouça [::]: 443 ssl http2 default_server; root/var/www/html; index.html index.htm index.nginx-debian.html; server_name exemplo.com; location/{Try_files $ uri $ uri/= 404 ; } ssl_certificate /etc/nginx/ssl/example.com.crt ;ssl_certificate_key /etc/nginx/sssl/example.com.key ;sl_dhparam /etc/nginx/ss/dhparam.pem; Ouça [::]: 80; server_name exemplo.com; Retornar 301 https: // $ server_name $ request_uri;}
Salve o arquivo /etc/nginx/sites-available/domain-name.com e depois saia. Verifique as configurações para obter erros de sintaxe:
```
sudo nginx -t
```

## Etapa 7: reinicie o nginx {#e687}

Para aplicar todas as alterações, reinicie o servidor proxy reverso do NGINX HTTP2 e verifique o status da configuração.
sudo systemctl reiniciar nginx
SUDO Systemctl Status nginx

## **Conclusão:**  {#4a1a}

Parabéns, você aprendeu com sucesso como configurar o suporte a HTTP2 do Nginx Config no servidor Ubuntu. Suas configurações nginx HTTP2 agora estão servindo páginas HTTP/2 e também limpou a diferença entre os protocolos HTTP/1 e HTTP/2. Se você ainda enfrentar quaisquer problemas de configuração, informe -nos na seção de comentários.
Você tem alguma dúvida sobre o protocolo multiplexado HTTP2? _, Por favor [entre em contato][2].

## Explore
Você também pode gostar dos artigos abaixo:
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian][3]
  * [Como][3][Instale e seguro Phpmyadmin com Nginx no Ubuntu][4]
  * [Como configurar o nginx com o passageiro no servidor de produção da AWS][5]
  * [Seguro e criptografar nginx com Let's Encrypt no Ubuntu 20.04][1]
  * [Como instalar e configurar o OwnCloud com o Apache no Ubuntu][6]



[1]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[2]: mailto:yasir.saeed@aspose.com
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
