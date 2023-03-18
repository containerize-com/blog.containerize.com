---
title: "Como configurar o nginx com o passageiro no servidor de produção da AWS" 
seoTitle: "Como configurar o nginx com o passageiro no servidor de produção da AWS" 
description: "Esta postagem do blog descreve as etapas para a instalação do NGINX com o passageiro através do sistema operacional Ubuntu 20.04 LTS seguindo o método APT." 
date: Fri, 07 May 2021 15:19:29 +0000
author: yasir saeed
summary: "Esta postagem do blog descreve as etapas para a instalação do NGINX com o passageiro através do sistema operacional Ubuntu 20.04 LTS seguindo o método APT." 
url: /pt/how-to-setup-nginx-with-passenger-on-aws-production-server/
categories: ['Web Server Solution Stack']
---

Esta postagem do blog descreve as etapas para a instalação do NGINX com o passageiro através do sistema operacional Ubuntu 20.04 LTS seguindo o método APT.

{{< figure align=center src="images/Nginx-With-Passenger-on-AWS-Production-Server.png" alt="Configure o nginx com passageiro no servidor de produção da AWS">}}


## **Visão geral**:
Você precisa instalar e configurar ** nginx com o passageiro na AWS Production ** Server antes de implantar seu aplicativo no servidor de produção.
** Passageiro de phusion de código aberto ** fornece muitas opções de personalização e recursos. Passageiros Alguns recursos são usados ​​para melhorar as características de desempenho do aplicativo. Parte da personalização influencia o comportamento de manuseio de aplicativos ou conexão etc. Duas opções de configuração para o passageiro são necessárias para ser configurada no Nginx, nomeado como passageiro _enabled e passageiro \ _root. Este processo de instalação configurará essas duas opções automaticamente.
Neste artigo do blog, abordaremos algumas das etapas de configuração essenciais para a instalação do servidor de aplicativos da Web no sistema operacional do Ubuntu seguindo o método ** APT **. Você poderá implantar e administrar aplicativos da Web escritos em Node.js, Python e Ruby após a leitura e seguindo o guia abaixo.
  *** O que é nginx e passageiro? **
  *** Instale os pacotes de nginx e passageiros **
  *** Ativar o módulo Nginx do passageiro e reiniciar nginx **
  *** Validar instalações **
  *** Atualizações do sistema e do passageiro **
  *** Os melhores servidores da web de código aberto **
  *** Conclusão **

## 1. O que é nginx e passageiro? {#Etapa-4: -Update-regularmente}
** [O que é o servidor nginx?] [1] ** nginx é um software de servidor web de código aberto e de código aberto para servir como um proxy reverso, balanceador de carga HTTP, streaming de mídia, cache http e proxy de email para IMAP, POP3 , e SMTP. É altamente escalável, projetado para o máximo desempenho e estabilidade. O NGINX é o servidor Web assíncrono, não-thread e orientado a eventos, de alto desempenho, que permite o processamento de várias solicitações de clientes ao mesmo tempo. Foi escrito por Igor Sysoev, lançado em 2004 sob os termos da licença BSD de 2 cláusulas. ** O nginx executa 2,5 vezes mais rápido ** do que o Apache e consumiu menos memória de acordo com um teste de referência.
** [O que é o passageiro?] [2] ** Passageiro de phusing também conhecido como mod \ _rails e mod \ _rack, é um servidor da web gratuito e servidor de aplicativos da web de código aberto. Ele foi projetado para ser rápido, robusto, rico em recursos e leve que se integra ao Apache e Nginx. Também melhora a segurança, a confiabilidade e a escalabilidade para aplicativos. Ele permite que os administradores obtenham informações sobre operações de aplicativos da Web, desempenho do servidor. O servidor de aplicativos de passageiros é executado e gerencia automaticamente seus aplicativos da Web facilmente. Também pode servir vários aplicativos ** ao mesmo tempo em que são multi-inquilinos e independentes. Ele pode lidar com solicitações HTTP, gerencia processos e recursos e permite tarefas de administração, monitoramento e diagnóstico de problemas. O Phusion Passenger é um servidor de aplicativos gratuito com suporte para implantar e administrar meteoros, Ruby on Rails nginx Passenger, JavaScript, Python e Node.js Applications.

## 2. Instale os pacotes nginx e passageiros: {#Etapa-1: -Install-Passenger-Packages}
Agora é hora de instalar passageiros e nginx. Você poderá implantar facilmente um dos servidores populares da Web após este guia. Abaixo, os comandos listados instalarão o passageiro e o NGINX através do repositório apt de Phusion. Se você já teve o NGINX instalado, esses comandos atualizarão o NGINX para a versão de Phusion com o passageiro compilado:
```
# Install Ubuntu PGP key and add HTTPS support for APT
sudo apt-get install -y dirmngr gnupg
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7
sudo apt-get install -y apt-transport-https ca-certificates

# Add and update phusionpassenger APT repository
sudo sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger xenial main > /etc/apt/sources.list.d/passenger.list'
sudo apt-get update

# Install Passenger with Nginx
sudo apt-get install -y nginx-extras passenger
```

## 3. Ativar o módulo Nginx do passageiro e reiniciar nginx: {#Step-2: -enable-o-passageiro-nginx-module e re-referestart-nginx}
Edit /etc/nginx/nginx.conf e descomposição incluem /etc/nginx/Passenger.conf;. Por exemplo, você pode ver isso:
```
# include /etc/nginx/passenger.conf;
```
Remova os caracteres '#', assim:
```
include /etc/nginx/passenger.conf;
```
Se você não vir uma versão comentada de incluir /etc/nginx/Passenger.conf; Inside nginx.conf, então você precisa inseri -lo sozinho. Insira -o em /etc/nginx/nginx.conf dentro do bloco HTTP.
http {
    incluir /etc/nginx/Passenger.conf;
    ...
}
Quando você terminar esta etapa, ** reinicie nginx **:
```
$ sudo service nginx restart
```

## 4. Validar instalações: {#Etapa-3: -Check-Installation}
Após a instalação, valide a instalação no terminal executando comando `sudo/usr/bin/passageiro-config validate-insalt ':
```
sudo /usr/bin/passenger-config validate-install
```
Todas as verificações devem passar. Se algum dos cheques não passar, siga as sugestões na tela.
Por fim, verifique se o NGINX iniciou os processos do núcleo do passageiro. Execute `sudo/usr/sbin/passageiro-memory-stats`. Você deve ver processos NGINX e processos de passageiros. Por exemplo, como abaixo:
```
sudo /usr/sbin/passenger-memory-stats
```
Se você não vê processos nginx ou processos de passageiros, provavelmente terá algum tipo de problema de instalação ou problema de configuração. Consulte o [guia de solução de problemas] [3].

## 5. Atualizações do sistema e do passageiro: {#Etapa-4: -Update-regularmente}
Atualizações do NGINX, atualizações de passageiros e atualizações do sistema são entregues através do ** gerenciador de pacotes ** regularmente. Você deve executar o seguinte comando regularmente para mantê -los atualizados:
Atualização de sudo apt-get
Atualização de sudo apt-get
Você não precisa reiniciar a Web ou o aplicativo após uma atualização e também não precisa modificar nenhum arquivo de configuração após uma atualização. Tudo isso é atendido automaticamente para você pelo APT.

## 6. ** Os melhores servidores da web de código aberto **: {#Etapa-4: -Update-regularmente}
** O que é um servidor da web de código aberto? ** Um software de servidor web de código aberto é um software de domínio público projetado para fornecer páginas da Web pela Internet World Wide Web. Basicamente, processa solicitações via protocolo de rede HTTP para distribuir informações na World Wide Web.
Mais de 80% dos aplicativos e sites da Web são alimentados por servidores da Web de código aberto. Aqui listei alguns dos servidores da web de código aberto mais populares ** e você pode implantar facilmente um desses servidores populares da Web.
  *** Apache HTTP Server **
  *** Lighttpd Web Server **
  *** OpenLitESPEED Web Server **
  *** Apache Tomcat Web Server **
  *** Caddy Web Server **

## [] [4] Conclusão: {##a próxima etapa}
Parabéns, você instalou e configurou com sucesso o NGINX com o passageiro no ** AWS Production Server ** para o seu aplicativo da web. Dê uma olhada nos vários guias na [Biblioteca de Passageiros] [5] para dominar totalmente o servidor de aplicativos de passageiros. Você pode estar particularmente interessado no guia [Automatando a implantação] [6] do seu aplicativo Ruby através do ** Capistrano **, que ensina como implantar automaticamente atualizações futuras de aplicativos sem tanto trabalho manual. Agora você está pronto para implantar seu aplicativo da Web nas instâncias de produção da AWS.
_Que servidor web gratuito e servidor de aplicativos da web de código aberto, você prefere ** Desenvolvimento da Web ou Hospedagem ** Necessidades_?. Você tem alguma dúvida sobre o servidor da web gratuito e o servidor de aplicativos da web de código aberto?, Por favor [entre em contato] [7].

## Explore
Você pode encontrar as seguintes postagens relevantes do blog:
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian] [8]
  * [Instale e seguro Phpmyadmin com Nginx no Ubuntu] [9]
  * [Configurar suporte HTTP/2 no Nginx no Ubuntu/Debian] [10]
  * [Seguro e criptografar Nginx com Let's Encrypt no Ubuntu 20.04] [11]
  * [Como instalar e configurar o OwnCloud com o Apache no Ubuntu] [12]
[1]: http://nginx.com/
[2]: https://www.phusionpassenger.com/
[3]: https://www.phusionpassenger.com/library/admin/nginx/troubleshooting/
[4]: https://www.phusionpassenger.com/library/walkthroughs/deploy/ruby/aws/nginx/oss/xenial/install_passenger.html#next-step
[5]: https://www.phusionpassenger.com/library/#guides
[6]: https://www.phusionpassenger.com/library/deploy/nginx/automating_app_updates/ruby/
[7]: mailto:yasir.saeed@aspose.com
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[9]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[10]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[11]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[12]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
