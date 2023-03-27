---
title: "Como monitorar o servidor da web nginx com nginx amplificar" 
seoTitle: "Como monitorar o servidor da web nginx com nginx amplificar" 
description: "O nginx Amplify é um agente de monitoramento gratuito para aplicativos NGINX Web Server e PHP. Este artigo é sobre como monitorar o servidor da web nginx com o nginx amplificar" 
date: Fri, 04 Jun 2021 19:08:47 +0000
author: Masood Anwer
summary: "Monitore NGINX, Aplicativos PHP, sistema operacional com nginx amplificar e melhorar a configuração. Este artigo o orienta a configurar e configurar o nginx amplificar." 
url: /pt/how-to-monitor-nginx-web-server-with-nginx-amplify/
categories: ['Web Server Solution Stack']
---

## monitor nginx, aplicativos PHP, sistema operacional com nginx amplie e melhore a configuração. Este artigo o orienta a configurar e configurar o nginx amplificar.

{{< figure align=center src="images/nginx-post.png" alt="Monitore o servidor web nginx com nginx amplifique">}}


## Visão geral {#Install}

**Monitoramento do servidor da web**é muito importante para sites de alto tráfego. O** Agente de Monitoramento**registrará métricas essenciais sobre o servidor da Web regularmente. Essas métricas críticas podem ser usadas para otimizar a configuração do NGINX. Isso o ajudará a melhorar o desempenho do seu servidor e aplicativo da Web.
Nesta postagem do blog, abordaremos as seguintes seções para o **Nginx Monitoring** Ferramenta de código aberto.
  * [Nginx Web Server][1]
  * [Nginx amplify][2]
  * [Instale o nginx amplify][3]
  * [Monitoramento de métricas][4]

## Nginx Web Server {#Nginx}

[Nginx][5] é um servidor da web de código aberto e gratuito. É simples, leve e fácil de configurar do que o Apache. O NGINX Web Server também funciona como proxy reverso, balanceador de carga, proxy de email e cache http. Funciona para protocolos HTTP, HTTPS, SMTP, POP3 e IMAP. O NGINX é um servidor Web de alta velocidade, confiável e com eficiência de memória que melhora o desempenho de seus aplicativos. Além disso, cresceu em popularidade e agora é considerado o servidor da web mais popular. Além disso, o NGINX é adequado para qualquer tipo de site, incluindo sites e aplicativos de alto tráfego. Ele pode ser instalado e configurado em quase todos os sistemas operacionais.

### Instale o nginx
  * Execute os comandos abaixo para instalar o NGINX Web Server.
```
sudo apt update
sudo apt install nginx
```
  * Depois de terminar com a instalação, abra seu navegador e digite “http: // ip \ _of \ _your_server”. Você verá a página de boas -vindas abaixo.

{{< figure align=center src="images/nginx-home.png" alt="Bem vindo ao nginx!">}}


## Nginx amplificar {#Amplify}

O nginx Amplify é uma ferramenta de monitoramento gratuita para código aberto nginx, nginx plus e php-fpm. É uma ferramenta baseada em SaaS para o monitoramento e aplicativos do NGINX Server. Os usuários podem acompanhar facilmente os ativos de infraestrutura, monitorar o desempenho e ajustar a configuração. Ele fornece informações abrangentes que os usuários podem utilizar para otimizar o servidor da Web e a configuração do aplicativo. Ele atua como um agente no servidor que hospeda os aplicativos NGINX e PHP. O nginx Amplify é um leve, empurre logs e monitorando os dados para amplificar os servidores sem comprometer o desempenho. Você pode visualizar métricas no painel Amplify. O agente está disponível para todos os sistemas operacionais principais, como RHEL, CENTOS, UBUNTU, DEBIAN, FEDORA e FREEBSD. O nginx Amplify possui três componentes principais, como o agente nginx Amplify, o nginx amplificar a interface da web e o nginx amplificar o back -end.
* **nginx Amplify Agent** - ele opera no sistema que está sendo monitorado. Toda a comunicação é criptografada usando SSL/TLS.
* **NGINX Amplify Web UI** - A interface do usuário da Web mostra as métricas para servidores da Web, aplicativos e sistemas operacionais.
* **NGINX Amplify Backend** - É um componente essencial que é implementado como SaaS e é responsável por coletar métricas, manter um banco de dados, executar um mecanismo de análise e fornecer uma API principal.

## Instale o nginx amplifique {#Install}

Siga abaixo o guia passo a passo para a instalação do nginx amplificar no Ubuntu.
  * Primeiro, você precisa criar uma conta no nginx [site][6].
  * Após o login, você verá a tela abaixo no site Nginx Amplify. Agora, conecte -se ao seu servidor via SSH e use os comandos fornecidos nas etapas abaixo.

{{< figure align=center src="images/amplify-1.png" alt="Instale o nginx amplifique">}}

  * Execute o comando abaixo para baixar o agente.
```
$ sudo wget https://github.com/nginxinc/nginx-amplify-agent/raw/master/packages/install.sh
```
  * Execute o seguinte comando para instalar o nginx amplificar no servidor. Substitua xxxxx pela tecla API real. Você pode encontrá -lo no painel nginx Amplify.
```
$ API_KEY='XXXXXXXX' sh ./install.sh
```
  * Depois de terminar a instalação, você pode verificar o status com o seguinte comando.
```
$ sudo service amplify-agent status
```
  * Agora, você precisa configurar o nginx amplificar o agente para visualizar as métricas.

{{< figure align=center src="images/amplify-2-1.png" alt="Configuração de monitoramento nginx">}}

  * Crie um novo arquivo com a configuração Stub_status.
```
$ sudo nano /etc/nginx/conf.d/stub_status.conf
```
  * Copie o código abaixo e salve o arquivo.
```
server {
  listen 127.0.0.1:80;
  server_name 127.0.0.1;
    location /nginx_status {
    stub_status on;
    allow 127.0.0.1;
    deny all;
  }
 }
```
  * Reinicie o servidor da web nginx para ativar o módulo Stub_status.
```
$ sudo service nginx restart
```
  * Agora, abra o arquivo de configuração do nginx com o seguinte comando.
```
$ sudo nano /etc/nginx/nginx.conf
```
  * Adicione o código abaixo e salve -o.
```
error_log /var/log/nginx/error.log warn;
access_log /var/log/nginx/access.log main_ext;
log_format main_ext '$remote_addr - $remote_user [$time_local] "$request" ' '$status $body_bytes_sent "$http_referer" ' '"$http_user_agent" "$http_x_forwarded_for" ' '"$host" sn="$server_name" ' 'rt=$request_time ' 'ua="$upstream_addr" us="$upstream_status" ' 'ut="$upstream_response_time" ul="$upstream_response_length" ' 'cs=$upstream_cache_status' ;
```
  * Reinicie o serviço nginx para aplicar todas as alterações.
```
$ sudo service nginx restart
```
  * Em seguida, navegue para amplificar o painel e clique no botão "Acabamento". Você deve ver a página a seguir.

{{< figure align=center src="images/amplify-after-finish-1024x503.png" alt="Monitoramento do servidor da web">}}

* Você pode ver as estatísticas em formato mais fácil e legível clicando na guia **Visão geral** . Parece que será mostrado abaixo.

{{< figure align=center src="images/amplify-overview.png" alt="Estatísticas de monitoramento nginx">}}


## Monitoramento de métricas {#Monitoring}

Nginx Amplify Agent coleta os seguintes tipos de dados:
* **METRICS NGINX** -Ele coleta várias métricas relacionadas ao Nginx do Stub_Status, registram arquivos e do estado do processo.
* **Métricas do sistema** - O nginx amplifica monitora uma variedade de métricas do sistema, como uso da CPU, uso de memória, tráfego de rede e muito mais.
* **métricas php-fpm** -Se identificar um processo mestre de php-fpm em execução, ele obtém métricas do status do pool php-fpm.
* **METRICS MYSQL** - O conjunto de variáveis ​​de status global do MySQL pode ser usado pelo agente para coletar métricas.
* **Metadados nginx** - O agente reúne dados sobre instâncias nginx, como dados de pacotes, informações de criação, caminho binário, configurações de configuração de criação e muito mais.
* **Metadados do sistema** - O agente coleta dados no sistema operacional, incluindo nome do host, tempo de atividade, sabor do sistema operacional e outros detalhes.

## Conclusão
Passamos pelo NGINX Web Server e o NGINX Amplify Advanced Monitoring Agent em detalhes. O nginx Amplify é bastante simples de configurar e configurar. Além disso, analisamos o qual as métricas críticas nginx Amplify podem rastrear para **monitorar o nginx** . Essas métricas importantes podem ser usadas para melhorar a configuração do seu servidor e aplicativos NGINX.
Finalmente, [contendeRize.com][7] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta categoria [Web Server Solution Stack][8] para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Como usar o Nginx como balanceador de carga para o seu aplicativo][9]
  * [Como configurar e configurar o nginx como proxy reverso][10]



[1]: #Nginx
[2]: #Amplify
[3]: #Install
[4]: #Monitoring
[5]: https://products.containerize.com/solution-stack/nginx
[6]: https://amplify.nginx.com/signup/
[7]: https://containerize.com
[8]: https://blog.containerize.com/category/web-server-solution-stack/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-use-nginx-as-load-balancer-for-your-application/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
