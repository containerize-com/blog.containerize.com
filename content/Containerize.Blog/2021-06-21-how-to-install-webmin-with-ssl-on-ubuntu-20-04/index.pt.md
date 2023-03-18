---
title: "Como instalar webmin com SSL no Ubuntu 20.04" 
seoTitle: "Como instalar webmin com SSL no Ubuntu 20.04" 
description: "O Webmin é uma ferramenta de administração de sistemas baseada na Web para sistemas semelhantes ao UNIX. Neste artigo, aprenderemos a instalar o webmin com o SSL no Ubuntu 20.04." 
date: Mon, 21 Jun 2021 04:28:34 +0000
author: Assad Mahmood
summary: "O Webmin é uma ferramenta de administração de sistemas baseada na Web que é uma alternativa simples à administração do sistema da linha de comando. Este artigo orienta como instalar webmin" 
url: /pt/how-to-install-webmin-with-ssl-on-ubuntu-20-04/
categories: ['Web Hosting']
---

{{< figure align=center src="images/how-to-install-webmin.png" alt="Como instalar webmin">}}


## O Webmin é uma ferramenta de administração de sistemas baseada na Web que é uma alternativa simples à administração do sistema de linha de comando. Este artigo orienta como instalar webmin
Com este artigo “Como instalar o webmin com o SSL no Ubuntu 20.04”, estamos iniciando nossa nova série de tutoriais sobre software e ferramentas de hospedagem na web. Com o Webmin, você pode configurar contas de usuário, ativar o compartilhamento de arquivos, definir configurações de Apache e DNS e executar muitas outras tarefas relacionadas à hospedagem da web. Ele permite que você gerencie todo o servidor de hospedagem da web. Ele elimina o problema de editar arquivos de configuração do Linux manualmente. Então, vamos aprender a instalar o webmin com o SSL.
  *** [Introdução ao webmin] [1] **
  *[** Recursos destacados **] [2]
  *[** Sistemas operacionais suportados **] [3]
  *[** Instale o webmin no Ubuntu **] [4]
  *[** Instale o Apache usando o webmin **] [5]
  *[** Conclusão **] [6]

## Introdução ao webmin {#intro}
O Webmin é uma interface baseada na Web para administração do sistema para Linux. Ajuda você a gerenciar seu próprio servidor de hospedagem remotamente de qualquer navegador da Web moderno. Com o Webmin, você pode configurar os internos do sistema operacional, como contas de usuário, Apache, DNS, compartilhamento de arquivos e muito mais. O webmin também permite controlar muitas máquinas através de uma única interface ou login sem costura em outros hosts webmin na mesma sub -rede ou LAN. Webmin, baseado no Perl, é executado como seu próprio processo e o servidor da web. E a melhor parte do webmin é 100% gratuita e de código aberto e tem uma comunidade de desenvolvedores muito próspera.

## Recursos destacados {#Features}
  * Permite que você crie e edite domínios, registros DNS, opções de ligação e vistas.
  * Ajuda a configurar um firewall criando e editando regras usando o IPFW.
  * Vamos configurar scripts para ser executado no horário de inicialização em /etc/init.d ou /etc/rc.local
  * Você pode agendar a transferência de arquivo do servidor para vários servidores
  * Permite que você instale RPMS, Debian e Pacotes Solaris em vários servidores de uma fonte
  * Ele fornece acesso a relatórios como uso de largura de banda, uploads, downloads, visitantes, etc.
  * Você pode criar trabalhos cron programados que são executados em vários servidores simultaneamente
  * Permite executar comandos em vários servidores de uma só vez
  * Permite configurar e editar cotas de disco de usuário ou grupo para sistemas de arquivos locais
  * Inclui sistemas de arquivos de backup e restauração usando o despejo e restauração da família de comandos
  * Usando um gerente de arquivo semelhante ao Windows, você pode visualizar, editar e alterar permissões em arquivos e diretórios em seu servidor
  * Você pode configurar o servidor de protocolo de localização do serviço
  * Visualize, edite e altere permissões em arquivos e diretórios em seu sistema com um gerenciador de arquivos do tipo Windows
  * Ajuda na configuração de túneis SSL para criptografar serviços como POP3 e IMAP, usando o Runnel Run do INETD.

## Sistemas operacionais suportados {#support}
Como diferentes sistemas operacionais do tipo UNIX e distribuições Linux usam locais diferentes para seus vários arquivos de configuração, o Webmin pode suportar apenas sistemas para os quais foi configurado. Os seguintes sistemas operacionais são suportados pela versão 1.979 do webmin:
  * Almalinux Linux
  * Alfacore linux
  * Amazon Linux
  * Aplinux
  * Asianux
  * Servidor Asianux
  * Bigblock
  * BSDI
  * CAIXA MAGICA
  * Caldera OpenLinux
  * Caldera OpenLinux eServer
  * CAOS Linux
  * Cendio lbs linux
  * Centos Linux
  * Hypervisor Citrix
  * CloudLinux
  * CloudRouter Linux
  * Linux cobalto
  * Linux de tecnologia coerente
  * Conectiva Linux
  * Corel Linux
  * Corvus Latinux
  * Cygwin
  * Darwin
  * Debian Linux
  * DEC/COMPAQ OSF/1
  * Devuan Linux
  * Dragonfly BSD
  * Endian Firewall Linux
  * Fedora Linux
  * FreeBSD
  * Linux genérico
  * Gentoo Linux
  * Gralinux
  * Haansoft Linux
  * Hp/ux
  * IBM AIX
  * Imunix linux
  * Lanthan Linux
  * Linux Mint
  * Linuxppc
  * Lycoris Desktop/LX
  * Mac OS X
  * Macos Catalina
  * Macos High Sierra
  * Macos Mojave
  * Macos Sierra
  * Mageia Linux
  * Mandrake Linux
  * Mandrake Linux Corporate Server
  * Mandriva Linux
  * Mandriva Linux Enterprise Server
  * MEPIS Linux
  * Principalmente Linuque
  * MSC Linux
  * Neoshine Linux
  * Netbsd
  * OpenBSD
  * Opendarwin
  * OpenMamba Linux
  * Openna Linux
  * OpenSuse Linux Tumbleweed
  * Oracle Enterprise Linux
  * Oracle Linux
  * Oracle VM
  * Os x
  * Pardus Linux
  * PCLinuxos Linux
  * PlayStation Linux
  * Linux Raspbian
  * Redhat Enterprise Linux
  * Redhat Linux
  * Redhat Linux Desktop
  * Rocky Linux
  * Sangoma Linux
  * Linux Sci
  * Linux científico
  * SCO OpenServer
  * SCO Unixware
  * Linux seguro
  * SGI IRIX
  * Slackware Linux
  * SLAMD64 Linux
  * Smartos
  * Sol Linux
  * Springdale Linux
  * StartCom Linux
  * Sistema de desktop Sun Java
  * Sun Solaris
  * SUSE Linux
  * SUSE OpenExchange Linux
  * SUSE SLES Linux
  * Sinologia DSM
  * Tao Linux
  * Tawie Server Linux
  * THIZLINUX Desktop
  * Thizserver
  * Tinysofa Linux
  * Confiança
  * Confiança se
  * Turbolinux
  * Ubuntu Linux
  * United Linux
  * Ute Linux
  * Virtuozzo Linux
  * Linux anão branco
  * Whitebox Linux
  * Wind River Linux
  * Janelas
  * X/OS Linux
  * Xandros Linux
  * XCP-NG Linux
  * Xenserver Linux
  * Linux de cachorro amarelo
  * Yoper Linux
Os sistemas mais apoiados no momento são Solaris, Linux (Redhat em particular) e FreeBSD.

## Instale o webmin no Ubuntu {#install}
Para instalar o webmin, você precisará ter acesso a um usuário com ** root ** privilégios. Recomenda-se que você configure um usuário sem raios com o ** sudo ** Acesso.
Primeiro ssh em seu servidor usando o seguinte comando
```
ssh user@server_IP_address
```
Para instalar o webmin via _apt-get_, você deve primeiro adicionar o repositório do webmin ao seu arquivo _sources.list_. No seu servidor, abra o arquivo _sources.list_ em seu editor de texto favorito. Usaremos o VIM neste tutorial:
```
sudo vi /etc/apt/sources.list
```
Depois que o arquivo é aberto, adicione as seguintes linhas no final do arquivo.
```
deb http://download.webmin.com/download/repository sarge contrib
deb http://webmin.mirror.somersettechsolutions.co.uk/repository sarge contrib
```
Agora adicione a chave GPG do webmin ao APT, para que o repositório de origem que você adicionou será confiável. Este comando fará isso:
```
wget -q http://www.webmin.com/jcameron-key.asc -O- | sudo apt-key add -
```
Antes de instalar o webmin, você deve atualizar as listas de pacotes do APT-GET:
```
sudo apt-get update
```
Agora execute este comando apt-get para instalar o webmin:
```
sudo apt-get install webmin 
```
Digite y para confirmar a instalação. Após a conclusão da instalação, o serviço Webmin será iniciado automaticamente. E a interface da Web será executada na porta 10000. Você pode acessar a interface usando o seguinte URL.
```
https://server_IP_address:10000
```
Você será solicitado com um aviso que diz que o certificado SSL do seu servidor não é confiável. Isso ocorre porque o webmin gera e instala automaticamente um certificado SSL após a instalação e o certificado não foi emitido por uma autoridade de certificado confiável pelo seu computador. É bom prosseguir. Instrua seu navegador da web a confiar no certificado.
Neste ponto, você verá a tela de login do webmin:

{{< figure align=center src="images/webmin-login-screen.png" alt="Instale o webmin">}}

Quando você faz login pela primeira vez no webmin, você será levado para a página ** do sistema **. Ele fornece uma visão geral dos recursos do seu sistema e outras informações diversas.

{{< figure align=center src="images/install-webmin-system-info.png" alt="Instale as informações do sistema de webmin">}}


## Instale o Apache usando o webmin {#install-apache}
O webmin vem com uma grande variedade de módulos que gerenciam diferentes pacotes de software. Para instalar o Apache usando o webmin, siga as instruções abaixo
** Etapa 1 **: No menu de navegação, clique em ** Módulos não utilizados ** para expandir a categoria e clique em ** Apache WebServer **.
Se você não tiver o Apache instalado no seu servidor, o módulo o notificará e fornecerá uma maneira de instalar o Apache.
** Etapa 2 **: Use o ** clique aqui ** Link (na última frase) para instalar o Apache via Apt-Get através do Webmin.
Após a conclusão da instalação do Apache, seu servidor estará executando o servidor Apache padrão.

## Conclusão {#conclusion}
Este artigo discute brevemente inúmeras coisas que o webmin pode fazer, o webmin é uma das melhores ferramentas para gerenciar seus servidores Linux/Unix. Neste tutorial, também aprendemos a instalar o webmin no Ubuntu, bem como discutimos como instalar o Apache no seu servidor usando o webmin.

## Explore
  * [Como instalar várias versões PHP com nginx no Ubuntu] [7]
  * [Como configurar e configurar o nginx como proxy reverso] [8]
[1]: #intro
[2]: #features
[3]: #support
[4]: #install
[5]: #install-apache
[6]: #conclusion
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-install-multiple-php-versions-with-nginx-on-ubuntu/
[8]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-and-configure-nginx-as-reverse-proxy/
