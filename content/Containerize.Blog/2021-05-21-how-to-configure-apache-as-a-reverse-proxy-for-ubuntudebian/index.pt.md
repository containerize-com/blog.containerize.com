---
title: "Como configurar o Apache como um proxy reverso para o Ubuntu/Debian" 
seoTitle: "Como configurar o Apache como um proxy reverso para o Ubuntu/Debian" 
description: "A Apache Reverse Proxy Configuration Step by Step permite que você execute um ou mais servidores de back -end atrás de um servidor proxy com mod_proxy no Ubuntu/Debian Linux." 
date: Fri, 21 May 2021 18:58:46 +0000
author: yasir saeed
summary: "O proxy reverso do Apache permite executar um ou mais servidores de back-end atrás de um servidor proxy. Veja como configurar o proxy reverso do Apache no sistema Ubuntu/Debian." 
url: /pt/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
categories: ['Web Server Solution Stack']
---

O proxy reverso do Apache permite executar um ou mais servidores de back-end atrás de um servidor proxy. Veja como configurar o proxy reverso do Apache no sistema Ubuntu/Debian.

{{< figure align=center src="images/Install-and-Configure-Apache-as-a-Reverse-Proxy-1.png" alt="Instale e configure proxy reverso do Apache">}}


## **Visão geral**
O proxy reverso do Apache permite que todo o tráfego e o encaminhe para executar um ou mais servidores ou contêineres de back -end atrás de um servidor proxy, sem expô -los publicamente. O servidor web back-end pode ser outro servidor HTTP de Apache2 ou de código aberto como o NGINX. O servidor HTTP Apache2 é um dos servidores da web de código aberto mais populares que estão sendo usados ​​hoje.
Existem muitos motivos para instalar e configurar um servidor proxy. Por exemplo, o proxy reverso pode ajudá -lo a adicionar segurança, para balanceamento de carga, restringir o acesso a determinados locais para evitar ataques e muito mais. Este artigo explica como instalar e configurar a configuração do proxy reverso do Apache passo a passo para o servidor HTTPS no Ubuntu/Debian:
  * Instalando o Apache2
  * Configure o Apache2
  * Ativar seus módulos de proxy
  * Ativar o SSL
  * Reinicie o apache2
  * Conclusão

## Etapa 1: Instale o Apache2
A instalação do Apache2 é muito simples e fácil de executar. Para fazer instalações, execute os comandos abaixo simplesmente:
Atualização de sudo apt-get
sudo apt-get install apache2
{{_LINE_25_}}
Depois de instalar o Apache2 no seu sistema, use os seguintes comandos SystemCTL no Debian Linux ou Ubuntu Linux versão Ubuntu para parar, iniciar, ativar e reiniciar o Apache2 para sempre reiniciar quando o servidor inicializar.
sudo systemctl stop apache2.service
sudo systemctl start apache2.service
sudo systemctl Ativar apache2.service
sudo systemctl reiniciar apache2.service
{{_LINE_31_}}
Você pode visualizar o status do servidor da web usando o seguinte comando:
SUDO SYSTEMCTL STATUS APACHE2.SERVICE
{{_LINE_34_}}
Para verificar a configuração do Apache2, abra seu navegador e navegue até o nome do host do servidor ou o endereço IP do sistema e você verá a página de teste padrão do Apache2, como mostrado abaixo. Quando você vê isso, o Apache2 está funcionando como esperado. http: // localhost

{{< figure align=center src="images/apache-reverse-proxy.png" alt="Instale e configure proxy de proxy reverso do Apache para Ubuntu">}}


## Etapa 2: Configure o Apache2 como proxy reverso
O Apache2 é instalado com sucesso e pronto para uso. Agora você pode configurar o Apache2 para funcionar como um proxy reverso do Apache2 Ubuntu. A função **proxyPass  **e **  proxyPassverse  ****  fornece um proxy reverso. Para usar  **proxypass **  e  **proxyPassReverse**  , você deve primeiro saber que onde deseja direcionar o tráfego do site.
O servidor proxy reverso do Apache2 ouvirá todo o tráfego na porta HTTP padrão, que é a porta 80 em uma configuração simples. O servidor de back-end que hospeda o conteúdo do site ouvirá em uma porta personalizada e provavelmente é a porta 8080.
Neste artigo do blog, vamos configurar o Apache2 para ouvir na porta 80 e depois direcionar o tráfego para o servidor back-end que ouve na porta 8080. Execute o comando abaixo para criar um arquivo virtualhost proxy chamado apache2proxy.conf.
sudo nano /etc/apache2/sites-available/apache2proxy.conf
Em seguida, adicione o seguinte bloco de códigos no arquivo apache2proxy.conf e salve -o.
{{_LINE_43_}}
        Servername exemplo.com
        Serveralias www.example.com
        ServerAdmin webmaster@example.com
        ErrorLog $ {apache_log_dir} /error.log
        CustomLog $ {apache_log_dir} /access.log combinado
        Proxyrequests Off
{{_LINE_50_}}
          Ordem negar, permitir
          Permitir de todos
{{_LINE_53_}}
        Proxypass/http://127.0.0.1:8080/
        ProxyPassReverse/http://127.0.0.1:8080/
{{_LINE_56_}}
          Ordem permitir, negar
          Permitir de todos
{{_LINE_59_}}
{{_LINE_60_}}
{{_LINE_61_}}
O arquivo apache2proxy.conf contém o nome do seu servidor, bem como o proxy_pass, onde o tráfego será direcionado quando recebido pelo servidor proxy HTTP.

## Etapa 3: Ativar proxy Apache2
O Apache2 Web Server agora está instalado e configurado com sucesso. O Apache possui muitos módulos agrupados disponíveis. Esses módulos não estão ativados na instalação fresca do Apache2. Primeiro, precisamos ativar os módulos necessários para ativar o módulo Apache MOD_Proxy necessário e vários de seus módulos complementares para suportar diferentes protocolos de rede. Execute os comandos listados abaixo para ativar seus módulos de proxy HTTP.
sudo a2enmod proxy
sudo a2enmod proxy_http
sudo a2enmod proxy_balancer
sudo a2enmod lbmethod_byrequests
{{_LINE_69_}}
Agora ative o site VirtualHost e reinicie o Apache2 para ativar a configuração dos módulos Apache2.
sudo a2ensite apache2proxy.conf
sudo systemctl reiniciar apache2.service
Inicie um navegador da Web de sua escolha e navegue até o nome do host do servidor como exemplo.com. Agora você estará proxado no seu servidor Apache2 na porta padrão, ou seja, 8080.

## Etapa 4: Ativar o SSL   {#Block-07B86D83-DCA0-4924-B991-206719C342EB}
Se você deseja ativar o módulo SSL proxy reverso do Apache reverso, execute o comando abaixo para ativar o proxy reverso do apache https proxy passa:
sudo a2enmod ssl
Isso fornecerá suporte seguro de proxy reverso do Apache para Suporte HTTPS para servidores de back -end.

## Etapa 5: reinicie o apache2   {#bloco-836bb4ff-17ad-4317-8ecb-153104bd28a7}
Para fazer essas alterações em vigor, reinicie o Apache executando o comando abaixo:
sudo systemctl reiniciar apache2.service
Parabéns! Você instalou e configurou com sucesso o proxy reverso do Apache2 no seu sistema Linux.

## **Conclusão:**    {#4A1A}
Neste tutorial, exploramos e discutimos o que é um servidor proxy e um proxy reverso do Apache reverso de configuração passo a passo. Também aprendemos a configurar e configurar o Apache2 como um proxy reverso em um sistema Linux. Em nossos próximos tutoriais, discutiremos tópicos mais interessantes sobre o Apache e outras pilhas de solução de servidores da web.

## Explore
Você também pode gostar dos artigos mais relacionados abaixo:
  * [Como][1][Instale e seguro Phpmyadmin com Nginx no Ubuntu][2]
  * [Como configurar o nginx com o passageiro no servidor de produção da AWS][3]
  * [Configure o suporte HTTP/2 no Nginx no Ubuntu/Debian][4]
  * [Seguro e criptografar nginx com Let's Encrypt no Ubuntu 20.04][5]
  * [Como instalar e configurar o OwnCloud com o Apache no Ubuntu][6]

  
[1]: https://blog.containerize.com/web-server-solution-stack/pt/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[2]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[3]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
