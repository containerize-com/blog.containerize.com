---
title: "Como criar um site de e-learning com o Moodle LMS" 
seoTitle: "Como criar um site de e-learning com o Moodle LMS" 
description: "O Moodle LMS é uma solução de e-learning gratuita e de código aberto para criar uma plataforma de aprendizado on-line. Confira o guia para se familiarizar com ele." 
date: Fri, 11 Jun 2021 22:35:00 +0000
author: Masood Anwer
summary: "Crie uma plataforma de aprendizado on-line com plataforma de e-learning de código aberto. Este artigo explica como usar o Moodle LMS para criar um site de ensino a distância." 
url: /pt/how-to-create-e-learning-platform-with-moodle-lms/
categories: ['Learning Management System']
---

## Construa uma plataforma de aprendizado on-line com plataforma de e-learning de código aberto. Este artigo explica como usar o Moodle LMS para criar um site de ensino a distância.

{{< figure align=center src="images/moodle-banner.png" alt="Moodle LMS">}}

Ficamos aflitos pelo Covid 19 por mais de um ano. Cada parte do mundo foi colocada sob bloqueio. Tem um impacto negativo na vida e nas empresas das pessoas em todo o mundo. Mais importante, tem um grande impacto em nosso sistema educacional. As instituições educacionais precisam fazer a transição para a aprendizagem on -line para que os alunos possam continuar sua educação a partir do conforto de suas próprias casas. Sem uma plataforma de e-learning sólida e segura, o aprendizado on-line é impossível. Neste artigo, examinaremos o projeto **Moodle Open Source** , que permite que professores e alunos se comuniquem e aprendam em qualquer lugar.
Abordaremos as seguintes seções deste artigo para **criar site de e-learning** usando o Moodle.
  * [Pré -requisitos][1]
  * [O que é Moodle?][2]
  * [Recursos do Moodle][3]
  * [Instalação do Moodle][4]
  * [Conclusão][5]

## Pré -requisitos {#Pré -requisitos}

Se você ainda não o fez, deve instalar e configurar o ambiente da lâmpada em seu servidor.

## O que é Moodle? {#What}

[ **Moodle**][6] é uma solução de e-learning gratuita e de código aberto. Moodle significa o ambiente de aprendizado dinâmico orientado a objetos modular. Foi criado para oferecer aos educadores, administradores e alunos uma plataforma de e-learning para criar e fornecer ambientes de aprendizado individualizados. Além disso, o Moodle é um **lms adequados para escolas** , universidades e cursos de treinamento profissional em empresas. É uma das soluções populares **de aprendizado à distância** para criar um site LMS. Além disso, o Moodle oferece aos professores e alunos com ferramentas ricas e ambientes de aprendizado colaborativo. O Moodle possui um aplicativo móvel para telefones e tablets para iPhone, Android e Windows. O aplicativo móvel pode ser usado em qualquer local em todo o mundo. Este **LMS auto-hospedado** é escrito em PHP e armazena dados nos bancos de dados MySQL/PostGresql. Ele vem com uma extensa documentação de usuário e desenvolvedor. Todo o código -fonte está disponível em [**github** ][7]. A licença para esta solução de e-learning de código aberto**é GPLV3+.

## Características do Moodle {#Features}

Moodle vem com muitos recursos. No entanto, neste artigo, analisaremos alguns dos seguintes recursos importantes.
**Ferramentas e atividades colaborativas** : Fóruns, wikis, glossários, atividades de banco de dados e outras ferramentas permitem que os usuários colaborem e aprendam juntos. Um grupo de elementos em um curso de Moodle é referido como uma atividade. Uma atividade é tipicamente algo que um aluno faz no qual ele interage com outros alunos e/ou com o professor.
**Rastrear progresso** : Educadores e alunos podem acompanhar seu progresso e conclusão usando uma variedade de ferramentas para rastrear atividades ou materiais específicos, bem como no nível do curso. Existem várias maneiras de rastrear o progresso dos alunos no Moodle, como notas, competências, conclusão de atividades, conclusão do curso, crachás, relatórios de cursos e análise.
**Gerenciamento de plugins** : Os plugins permitem estender a funcionalidade fundamental do Moodle, adicionando novos recursos. Os usuários podem adicionar plugins para uma variedade de tarefas, como atividades adicionais, novos tipos de perguntas de teste, novos relatórios, conectores do sistema e muito mais. Uma interface de administrador pode ser usada para instalar e desativar plugins.
**Gerenciamento do curso** : Crie e gerencie cursos que atendam a uma variedade de necessidades. Aulas lideradas por instrutores, aulas de ritmo próprio, aulas combinadas e aulas completamente on-line são todas as opções.
**Pares e auto-avaliação** : workshops e pesquisas são atividades internas que incentivam os alunos a visualizar, classificar e revisar seu próprio trabalho e de outros colegas de classe como um grupo.

## Instalação do Moodle {#Moodle}

Siga o guia passo a passo abaixo para instalar o Moodle LMS no Ubuntu 18.04.
  * Primeiro, execute os comandos abaixo para alterar o download direto e baixar o Moodle.
```
cd /var/www/
sudo git clone -b MOODLE_38_STABLE git://git.moodle.org/moodle.git moodle
```
  * Execute os seguintes comandos Crie diretório de dados e defina permissões.
```
sudo mkdir -p /var/www/moodledata
sudo chown -R www-data:www-data /var/www/
sudo chmod -R 755 /var/www/
sudo chown www-data:www-data /var/www/moodledata
```
  * Crie arquivo de configuração nginx para o site do Moodle.
```
sudo nano /etc/nginx/sites-available/moodle
```
  * Adicione o código abaixo e salve o arquivo.
```
server {
   listen 80;
   listen [::]:80;
   root /var/www/moodle;
   index  index.php index.html index.htm;
   server_name  example.com;

   client_max_body_size 100M;
   autoindex off;
   location / {
       try_files $uri $uri/ =404;
   }

   location /dataroot/ {
     internal;
     alias /var/www/moodledata/;
   }

   location ~ [^/].php(/|$) {
       include snippets/fastcgi-php.conf;
       fastcgi_pass unix:/run/php/php7.4-fpm.sock;
       fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
       include fastcgi_params;
   }
}
```
  * Crie o Symlink para ativar o site recém -criado.
```
sudo ln -s /etc/nginx/sites-available/moodle /etc/nginx/sites-enabled/
```
  * Reinicie o servidor da web nginx.
```
sudo systemctl restart nginx
```
  * Em seguida, abra seu navegador e digite http://example.com. Substitua “Exempli.com” pelo nome de domínio real ou IP do seu servidor.
  * Agora, você pode ver o assistente de instalação. Selecione um idioma e clique no botão Next.

{{< figure align=center src="images/moodle-install-1-1024x408.png" alt="Moodle - Escolha um idioma">}}

  * Você precisa revisar e garantir que o URL do site, o diretório raiz do Moodle e os caminhos do diretório de dados estejam corretos. Você também pode alterar o caminho do “diretório de dados” e ele deve estar fora do diretório de código do Moodle Code for Security. Clique no botão Avançar.

{{< figure align=center src="images/moodle-install-2-1024x529.png" alt="Moodle - Definir caminho do diretório de dados">}}

  * Escolha um driver de banco de dados nesta etapa. No entanto, você pode usar o já selecionado e clicar no botão Next.

{{< figure align=center src="images/moodle-install-3-1024x413.png" alt="Moodle - escolha driver de banco de dados">}}

  * Forneça configurações de banco de dados, como host de banco de dados, nome do banco de dados, usuário do banco de dados, senha do banco de dados e prefixo da tabela. Clique no botão Avançar.

{{< figure align=center src="images/moodle-install-4.png" alt="Moodle - Configurações de banco de dados">}}

  * Clique no botão Confirmar para concordar com os termos e condições.
  * Você pode ver uma lista das extensões PHP necessárias. No entanto, você terá que instalar qualquer complemento ausente. Clique no botão Continuar para mover a próxima etapa.
  * Nesse ponto, você precisa preencher os dados do administrador para criar uma conta. Clique no botão "Atualizar perfil".
  * Forneça informações para o seu site, como nome completo do site, nome curto para o site, resumo da página frontal, fuso horário padrão e e-mail sem resposta. Clique no botão "Salvar alterações".
  * Preencha o registro do seu site fornecendo informações como nome do site, idioma, região, endereço de e -mail etc.

## Conclusão {#Conclusão}

Aprendemos sobre o Moodle e seus principais recursos neste artigo. Também analisamos uma abordagem passo a passo para configurar **Moodle LMS**para **Criar site de e-learning** . Você pode revisar a [**documentação oficial** do Moodle [8] para se sentir mais confortável com várias funções, como cursos, registro de estudantes, rastreamento de progresso e assim por diante. Espero que você tenha achado este post útil na criação de um site LMS.
Finalmente, [ **containerize.com**][9] está em um processo consistente de escrever postagens no blog sobre mais os mais recentes produtos de código aberto. Portanto, mantenha contato com esta categoria [**Sistema de gerenciamento de aprendizado** ][10] para as atualizações mais recentes.

## Explore
Você pode encontrar os seguintes links relevantes:
* [ **Ferramentas LMS de código aberto** ][11]
* [ **Moodle-sistema de e-learning** ][12]



[1]: #Prerequisites
[2]: #What
[3]: #Features
[4]: #Moodle
[5]: #Conclusion
[6]: https://moodle.org/
[7]: https://github.com/moodle/moodle
[8]: https://docs.moodle.org/
[9]: https://containerize.com
[10]: https://blog.containerize.com/category/learning-management-system/
[11]: https://products.containerize.com/lms/
[12]: https://products.containerize.com/lms/moodle/
