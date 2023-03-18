---
title: "Como proteger o nginx com Let's Encrypt no Ubuntu 20.04" 
seoTitle: "Como proteger o nginx com Let's Encrypt no Ubuntu 20.04" 
description: "Como configurar, criptografar e proteger o nginx com o Let's Encrypt no Ubuntu. Vamos criptografar o cliente para gerar certificados para configurar automaticamente o nginx." 
date: Mon, 19 Apr 2021 06:27:22 +0000
author: yasir saeed
summary: "Os sites incluem criptografia SSL/TLS para que seu domínio atraia visitantes. Este artigo explica o uso do utilitário CERTBOT para obter certificados TLS/SSL para NGINX." 
url: /pt/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
categories: ['Web Server Solution Stack']
---

Os sites ## incluem criptografia SSL/TLS para que seu domínio atraia visitantes. Este artigo explica o uso do utilitário CERTBOT para obter certificados TLS/SSL para NGINX.

{{< figure align=center src="images/nginxletsencrypt.png" alt="Seguro nginx com let's criprypt no ubuntu">}}


## **Visão geral**
Qualquer site que busca atrair visitantes precisa incluir a criptografia TLS/SSL para seu domínio. Os certificados gratuitos SSL garantem que uma conexão segura entre o servidor da Web gosta de criptografar e proteger o NGINX e os navegadores de aplicativos. Let's Encrypt é uma autoridade de certificação gratuita, automatizada e aberta que permite configurar essa proteção para o NGINX SSL LetSencrypt. Vamos criptografar os certificados SSL gratuitos são confiáveis ​​por todos os principais navegadores e válidos para os próximos 90 dias a partir da data de emissão.
Esta postagem do blog explica a maneira mais simples de criptografar e proteger o Nginx executando o servidor web no Ubuntu 20.04 / 18.04, obtendo certificados Nginx HTTPS LetSencrypt usando o utilitário Nginx CertBot e configure seus certificados para renová -lo automaticamente. Vamos começar e configurar as configurações do Ubuntu Nginx.
  * Dependências e pré -requisitos
  * Instalando o utilitário CertBot
  * Confirmando a configuração do Nginx
  * Permitindo https através do firewall
  * Obter um certificado SSL
  * Conclusão

## First Things First: Dependências e Pré -requisitos {#Prereebisites}
Para seguir este artigo, você precisará seguir dependências e pré -requisitos para instalar o LetSencrypt Ubuntu Nginx Utilities:
  * Um usuário não raiz ou raiz sem raios ou raízes habilitado para sudo em máquinas locais/remotas.
  * Um sistema executando o Ubuntu 20.04 ou Ubuntu 18.04
  * Acesso a um terminal de linha de comando
  * Sudo ou privilégios de raiz em máquinas locais/remotas
  * Nginx instalado e configurado
  * Um nome de domínio registrado apontando para IP público
  * Um bloco de servidor configurado para esse nome de domínio
  * O firewall está configurado para aceitar conexões nas portas 80 e 443.

## Etapa 1-Instalando o certbot {#Etapa-1 —- Instalando-CertBot}
A primeira etapa para proteger o nginx e criptografar o nginx com o Let's Encrypt é instalar o pacote Nginx CertBot totalmente com alimentação e fácil de usar para obter e renovar o Let's Crypt SSL em seu servidor. Para fazer isso, comece abrindo um terminal no Ubuntu e atualizando o repositório local. Digite Y e digite se solicitado.
```
sudo apt update
sudo apt install certbot python3-certbot-nginx

```
Agora, vamos verificar algumas das configurações seguras do Nginx.

## Etapa 2-confirmando a configuração do Nginx {#Etapa-2 -—- confirmando-nginx-39-Sconfiguration}
Conforme explicado na seção dependências e pré -requisitos, você já deve ter um domínio registrado e o CERTBOT precisa encontrar o bloco de servidor nginx correto para que esse domínio configure automaticamente o SSL. Como exemplo, esta postagem do blog usa o blog de domínio.containerize.com e o bloco de servidores para o seu domínio em /etc/nginx/sites-available/blog.containerize.com com a diretiva server_name já definida corretamente.
Para confirmar, abra o arquivo de configuração do seu domínio usando o Nano ou seu editor de texto favorito:
```
sudo nano /etc/nginx/sites-available/blog.containerize.com

```
Encontre a linha Diretiva Server_name existente em file /etc/nginx/sites-available/blog.containerize.com. Deve ser assim:
```
...
server_name blog.containerize.com www.blog.containerize.com;
...
```
Agora verifique a sintaxe dos seus arquivos de configuração nginx e recarregue o servidor nginx para carregar as novas definições de configuração:
```
sudo nginx -t
sudo systemctl reload nginx

```
O CertBot Utility agora pode encontrar a diretiva de bloco de servidor nginx correta para proteger o nginx e atualizá -lo automaticamente. Na próxima etapa, vamos atualizar o firewall para permitir o tráfego HTTPS.

## Etapa 3-permitindo HTTPS através do firewall {#Etapa-3-3
Conforme recomendado neste artigo Pré -requisitos, você precisará ajustar as configurações para permitir o tráfego HTTPS. Para garantir que seu firewall esteja ativado e ativo, execute o comando abaixo:
```
sudo ufw status

```
A saída deve dizer que o UFW está ativo e fornecer uma lista de regras definidas. Ele mostra apenas o tráfego HTTP é permitido para o servidor da Web. Para permitir o tráfego criptografado, você pode adicionar o perfil HTTPS NGINX ou usar o Nginx completo e excluir a regra HTTP nginx existente. Permita o tráfego HTTPS nginx digitando o comando:
```
sudo ufw allow 'Nginx Full'
sudo ufw delete allow 'Nginx HTTP'

```
Verifique a regra HTTPS que permite o tráfego HTTPS digitando o comando de status da UFW:
```
sudo ufw status

```
Em seguida, vamos executar o certbot e buscar nossos certificados.

## Etapa 4-Obtendo um certificado SSL {#Etapa-4 -—- obtenção-an-ssl certificada}
O plug -in do NGINX para o CERTBOT cuidará da reconfiguração do NGINX e recarregará sua configuração quando necessário. Portanto, apenas você precisa gerar certificados com o plug -in nginx executando o seguinte comando:
```
sudo certbot --nginx -d blog.containerize.com -d www.blog.containerize.com

```
Se esta é a sua primeira vez que executa o utilitário CertBot, o CERTBOT solicita que você definir suas configurações HTTPS. Você será solicitado a inserir um endereço de e -mail e concordar com os termos de serviço. Após o hit Enter, a configuração será atualizada e o NGINX recarregará as novas configurações. Por fim, o CERTBOT será exibido com uma mensagem informando que um certificado foi gerado com sucesso e onde seus certificados são armazenados.
Seus certificados são baixados, instalados e carregados com o Certificado SSL NGINX LetSencrypt. Tente recarregar seu site usando https: // e observe o indicador de segurança do seu navegador. Deve indicar que o site está devidamente protegido, geralmente com um ícone de bloqueio. Se você testar seu servidor usando o teste do servidor SSL Labs, ele receberá uma nota A para Nginx e deixará o Devencrypt.
Vamos terminar testando o processo de renovação.

## Etapa 5-Verificando o certBOT Auto-renovável {#Etapa-5 -5 -—- Verificando o CertBot-Auto-Renowal}
Como os certificados Let's Crypt expirarem todos os noventa (90) dias e o NGINX SSL LetSencrypt incentive os usuários a configurar e o trabalho de renovação automática. Primeiro, abra o arquivo de configuração Crontab para o usuário atual:
```
sudo crontab -e
```
Adicione uma tarefa de Cron que executa o comando CERTBOT, o CertBot Renow Nginx renova o certificado se ele detectar que o certificado expirará dentro de 30 dias. Agende -o para executar diariamente em um horário especificado, por exemplo, 05:00
```
sudo certbot renew --dry-run

```
O trabalho de Cron também deve incluir o atributo –quiet, como no comando acima. Isso instrui o Certificado SSL Renove Nginx a não incluir nenhuma saída após executar a tarefa. Ativar renovação automática de certificado. Depois de adicionar o trabalho Cron, salve as alterações e saia do arquivo.

## Conclusão {#conclusion}
Neste artigo, aprendemos como instalar o NGINX LetSencrypt SSL. Baixamos certificados SSL para seu domínio e configuramos o NGINX para usar esses certificados. Além disso, você deve ter permitido ao CERTBOT renovar os certificados automaticamente para o SSL Nginx LetSencrypt. Em nossos próximos tutoriais, discutiremos sobre tópicos mais interessantes sobre como proteger um servidor da Web com a tecnologia de segurança padrão que permite a comunicação criptografada entre um navegador da Web e um servidor da Web.
Você pode se juntar a nós no [Twitter] [1], [LinkedIn] [2] e nossa página [Facebook] [3]. Que protocolo criptográfico você usa para fornecer segurança de comunicações em uma rede de computadores?. Se você tiver alguma dúvida, por favor [entre em contato] [4].

## Explore
Você pode encontrar os seguintes links relevantes para monitorar o desempenho do servidor e garantir sua confiabilidade e segurança:
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian] [5]
  * [Como instalar e proteger o phpmyadmin com nginx no Ubuntu] [6]
  * [Configure o suporte HTTP/2 no Nginx no Ubuntu/Debian] [7]
  * [Configure o nginx com o passageiro no servidor de produção da AWS] [8]
  * [Como instalar e configurar o OwnCloud com o Apache no Ubuntu] [9]
[1]: https://twitter.com/containerize_co
[2]: https://www.linkedin.com/company/containerize/
[3]: http://facebook.com/containerize
[4]: mailto:yasir.saeed@aspose.com
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[9]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
