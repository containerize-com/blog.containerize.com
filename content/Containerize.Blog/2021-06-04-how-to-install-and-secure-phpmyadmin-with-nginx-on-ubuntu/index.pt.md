---
title: "Como instalar e proteger Phpmyadmin com Nginx no Ubuntu" 
seoTitle: "Como instalar e proteger Phpmyadmin com Nginx no Ubuntu" 
description: "O PHPMYADMIN é um software de gerenciamento de banco de dados de código aberto escrito no PHP. Vamos aprender a instalar o phpmyadmin com o nginx e administrar o mysql através do phpmyadmin" 
date: Fri, 04 Jun 2021 13:25:15 +0000
author: yasir saeed
summary: "O PHPMYADMIN é uma ferramenta de gerenciamento de banco de dados de interface gráfica de código aberto da Web escrito no PHP. Neste tutorial, aprenderemos a instalar o PHPMyadmin com o NGINX." 
url: /pt/how-to-install-and-secure-phpmyadmin-with-nginx-on-ubuntu/
categories: ['Web Server Solution Stack']
---

## phpmyadmin é uma ferramenta de gerenciamento de banco de dados de interface gráfica de código aberto escrito no PHP. Neste tutorial, aprenderemos a instalar o PHPMyadmin com o NGINX.

{{< figure align=center src="images/install_phpmyadmin_with_nginx_on_ubuntu.png" alt="Como instalar e proteger Phpmyadmin com Nginx no Ubuntu">}}


## **Visão geral**
O PHPMyadmin é uma ferramenta de gerenciamento de banco de dados de código aberto e gratuito que oferece aos usuários uma interface da Web para gerenciar servidores MySQL ou MariaDB por meio de uma interface intuitiva. Este é um dos softwares amplamente suportados oferecidos pela maioria dos provedores de hospedagem populares para permitir que os administradores da Web criassem o banco de dados em phpmyadmin e gerenciem bancos de dados, executem estatamentos SQL, importar e exportar dados facilmente. Você poderá acessar seus bancos de dados MYSQL ou MARIADB no PHPMyadmin com Nginx através de uma interface gráfica facilmente, executando ao lado de um ambiente de desenvolvimento PHP.
Neste guia, descreveremos as etapas como instalar e proteger o phpmyadmin com o nginx no Ubuntu 20.04. Você precisará instalar e configurar o PHPMyadmin no servidor Ubuntu para deixá -lo funcionar com bancos de dados e tabelas MySQL facilmente. Então, vamos aprender a instalar e proteger o phpmyadmin com o nginx no Ubuntu 20.04 / 20.10:
  * Pré -requisitos
  * Instale o phpmyadmin
  * Configurar banco de dados
  * Criar link simbólico
  * Acessando PhpMyadmin
  * Crie MySQL SuperUser
  * Phpmyadmin seguro
  * Conclusão

## Etapa 1: Pré-requisitos {#id-preequisite}
Para seguir este guia, você precisará do Ubuntu 20.04 Server em execução no computador local ou em um servidor remoto com pré -requisitos.
  * Você deve acessar o servidor como usuário sem raios com privilégios sudo e ativado pelo UFW Firewall.
  * Supõe -se que você já tenha instalado NGINX, MySQL e PHP no Ubuntu.
  * Como o phpmyadmin usa credenciais MySQL para autenticar, então você também deve instalar certificados SSL/TLS para permitir o tráfego criptografado entre o servidor e o cliente.
Com isso fora do caminho, vamos começar a instalar e proteger o PhpMyadmin para conectar -se ao MySQL Server para acessar o banco de dados através da interface da Web.

## Etapa 2: Instale PhpMyadmin {#Id-1-Install-PhpMyadmin}
Certifique -se de instalar com sucesso todos os pré -requisitos no seu sistema antes de instalar o PHPMyadmin no Ubuntu 20.04. Comece atualizando a lista de pacotes:
```
sudo apt update 
```
Agora, execute o seguinte comando para instalar o pacote phpmyadmin a partir dos repositórios do Ubuntu padrão no Ubuntu 20.04 / 20.10:
```
sudo apt install phpmyadmin

```
Pressione ** y ** e ** Digite ** quando solicitado a continuar. Se você for solicitado a escolher um servidor da web, pois não há opção para ** nginx ** como abaixo, pressione ** guia ** para selecionar OK e depois ** ENTER ** para continuar sem selecionar um servidor da Web.

{{< figure align=center src="images/mysql-setup.png" alt="Instale e seguro Phpmyadmin para Nginx no Ubuntu 20.04">}}


## Etapa 2: Configurar banco de dados {#id-1-Install-phpmyadmin}
Em seguida, selecione ** Sim ** e pressione ** Enter ** para instalar e configurar o banco de dados usando a ferramenta DBConfig-Common:

{{< figure align=center src="images/phpmyadmin-install2.png" alt="Como configurar mysql com phpmyadmin">}}

A senha do aplicativo MySQL é usada internamente pelo PHPMYADMIN para se comunicar com o banco de dados MySQL. Digite uma nova senha para o PHPMyAdmin DBMS se registrar como o novo banco de dados, selecione OK e pressione Enter para continuar.

{{< figure align=center src="images/phpmyadmin-install3.png" alt="Como configurar mysql para phpmyadmin">}}

Você será solicitado a confirmar a senha, digitar a mesma senha, selecione ** OK ** e pressione ** ENTER **. Parabéns! O PHPMyadmin foi instalado com sucesso em seu sistema.

## Etapa 4: Crie um link simbólico {#id-2-criate-simbolic-link}
Existem várias maneiras de configurar o Nginx para servir arquivos PhpMyadmin. Se o bloco de servidor do seu domínio já estiver configurado para atender às solicitações PHP, você deverá criar um link simbólico a partir dos arquivos de instalação phpmyadmin nginx/usr/share/phpmyadmin para o diretório raiz do documento de domínio. O local padrão da raiz do documento nginx no Ubuntu 20.04/20.10 deve ser/var/www/html/e pode ser diferente, dependendo da sua configuração INS. Sua raiz do documento pode estar localizada, por exemplo, em /var/www/example.com/public_html.
Em seguida, criaremos um link simbólico a partir do diretório phpmyadmin/usr/share/phpmyadmin para o seu documento Root. Aqui, assumiremos que nossa raiz do documento é/var/www/html/e simplesmente adicionaremos phpmyadmin ao final disso. Isso nos permitirá acessar phpmyadmin em url exemplo.com/phpmyadmin
```
sudo ln -s /usr/share/phpmyadmin /var/www/html/phpmyadmin
```

## Etapa 5: Acessando PhpMyadmin {#Id-3-Test-PhpMyadmin}
Agora você deve poder acessar a interface da web phpmyadmin, visitando o nome do host/domínio do servidor ou o endereço IP público seguido por domain.com/phpmyadmin no seu navegador favorito. Por exemplo, http://example.com/phpmyadmin ou http://192.168.1.10/phpmyadmin
{{_LINE_48_}}
Nos servidores do Ubuntu em execução com o MySQL 5.7 e, posteriormente, você não poderá fazer login no banco de dados PHPMYAdmin gratuito usando a conta raiz padrão do MySQL e receberá um erro como _ "Acesso negado para o usuário 'root'@'localHost'" _. Em vez disso, você deve criar uma nova conta do SuperUser apenas para PhpMyadmin. Em seguida, criaremos a conta raiz do MySQL para fazer login no PHPMyadmin.

## Etapa 6: Crie MySQL SuperUser {#Id-4-Create-Mysql-Superuser}
No terminal, inicie o login no MySQL usando a senha do MySQL Root que você pode ter criado uma senha root ao instalar o banco de dados PhpMyAdmin MySQL pela primeira vez.
```
sudo mysql -u root -p
```
Depois de fazer login no MySQL, adicione um novo superusuário do MySQL com o nome de usuário de sua escolha. Neste exemplo, estamos chamando de Yasiradmin. [Clique aqui para gerar uma senha forte] [2] e substitua o novo \ _password \ _here abaixo por ela.
```
CREATE USER 'yasiradmin'@'localhost' IDENTIFIED BY 'new_password_here';
```
Agora conceda privilégios de superusuário ao nosso novo usuário Yasiradmin.
```
GRANT ALL PRIVILEGES ON *.* TO 'yasiradmin'@'localhost';
```
Agora saia da sessão do MySQL. Agora você deve poder acessar o PHPMyadmin usando essas novas credenciais de superusuário.

{{< figure align=center src="images/image.png" alt="Como fazer login phpmyadmin no ubuntu 20.04">}}

É altamente recomendável que você configure alguma segurança adicional para a phpmyadmin para proteger o phpmyadmin nginx. Você deve ser capaz de alterar e acessar o URL do phpmyadmin a algo como URL obscuro.

## Etapa 7: PhpMyadmin seguro {#Id-6-SECURE-PHPMYADMIN-RECOMERNDED}
Em seguida, queremos configurar a autenticação no Nginx para fornecer uma camada adicional de segurança. Agora, instalaremos o Apache2-Utils, que podem gerar o arquivo .htpasswd que funciona com os servidores NGINX e APACHE2.
```
sudo apt install apache2-utils
```
Depois de instalado, podemos gerar o arquivo .htpasswd. Mude o nome de usuário de sua escolha. [Gere uma senha] [3] e mantenha -a segura.
```
sudo htpasswd -c /etc/nginx/.htpasswd username
```
Agora haverá um arquivo .htpasswd contendo seu nome de usuário e senha criptografada. Você pode verificar isso com o comando abaixo:
```
cat /etc/nginx/.htpasswd
```
Você deve ver algo como nome de usuário: $ abent1sdfsdf4435sdtsklfwmmg1sfdsdgg4
Agora precisamos adicionar 2 diretivas ao nosso arquivo de configuração nginx. A localização do arquivo de configuração pode variar dependendo de suas instalações, embora o caminho do arquivo padrão seja geralmente em/etc/nginx/sites que estão disponíveis/padrão. Se você configurar vários domínios, seu arquivo de configuração poderá estar localizado em algum lugar como /etc/nginx/sites-available/example.com
Neste exemplo, assumiremos que o arquivo de configuração nginx está em/etc/nginx/sites que estão disponíveis/padrão. Abra o arquivo para editá -lo.
```
sudo nano /etc/nginx/sites-available/default
```
Role para baixo e procure os blocos de localização e cole em um novo bloco embaixo deles com o nome da sua pasta Phpmyadmin obscurecida, neste exemplo Aspose_hidden.
```
location /aspose_hidden {
        auth_basic "Restricted Access";
        auth_basic_user_file /etc/nginx/.htpasswd;
}
```
Salvar arquivo e saída (pressione Ctrl + X, pressione Y e pressione Enter). Verifique se o arquivo de configuração nginx é válido; caso contrário, o servidor poderá travar no comando Reiniciar executando.
```
sudo nginx -t
```
Se válido, recarregue a configuração nginx.
```
sudo service nginx reload
```
Agora, ao visitar exemplo.com/aspose_hidden, você deve receber uma janela de autenticação.

{{< figure align=center src="images/auth3.png" alt="Como garantir phpmyadmin">}}

Vocês todos terminam as instalações do PHPMYADMIN no servidor Ubuntu.

## Conclusão: {#id-what-next}
Parabéns, você instalou com sucesso o PHPMyadmin com o NGINX para o Ubuntu 20.04 / 20.10 Server e agora pode administrar o MySQL através do PHPMyadmin. Agora, você pode começar a criar bancos de dados, usuários, tabelas do MySQL, executar consultas MySQL e várias outras operações.
Se você tiver dúvidas, sinta -se à vontade para me dizer abaixo na seção de comentários.

## Explore
Você também pode gostar dos artigos mais relacionados abaixo:
  * [Como configurar o Apache como um proxy reverso para o Ubuntu/Debian] [4]
  * [Como proteger e criptografar Nginx com Let's Encrypt no Ubuntu 20.04] [5]
  * [Como configurar o suporte HTTP/2 no Nginx no Ubuntu/Debian] [6]
  * [Como configurar o nginx com o passageiro no servidor de produção da AWS] [7]
  * [Como instalar e configurar o OwnCloud com o Apache no Ubuntu] [8]
[1]: https://devanswers.co/installing-phpmyadmin-nginx-ubuntu-16-04-17-04/mysql-setup/
[2]: https://passgen.co/
[3]: https://passgen.co/?pw=10&a=1
[4]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-apache-as-a-reverse-proxy-for-ubuntudebian/
[5]: https://blog.containerize.com/web-server-solution-stack/how-to-secure-nginx-with-letsencrypt-on-ubuntu-20-04/
[6]: https://blog.containerize.com/web-server-solution-stack/how-to-configure-http2-support-in-nginx-on-ubuntudebian/
[7]: https://blog.containerize.com/web-server-solution-stack/how-to-setup-nginx-with-passenger-on-aws-production-server/
[8]: https://blog.containerize.com/backup-and-sync-software/how-to-install-and-configure-owncloud-with-apache-on-ubuntu/
