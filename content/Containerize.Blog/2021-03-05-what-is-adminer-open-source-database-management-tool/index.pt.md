---
title: "O que é administrador? | Ferramenta de gerenciamento de banco de dados de código aberto" 
seoTitle: "O que é administrador? | Ferramenta de gerenciamento de banco de dados de código aberto" 
description: "O que é administrador? Um sistema de gerenciamento de banco de dados baseado na Web com uma interface amigável para desenvolvedores. Vamos discutir como gerenciar bancos de dados com um administrador de código aberto." 
date: Fri, 05 Mar 2021 09:23:11 +0000
author: bilalahmed
summary: "O Administrner é um sistema de gerenciamento de banco de dados baseado na Web de código aberto para gerenciar bancos de dados. Vamos aprender a configurar o Administrador no Localhost e revisar seus principais recursos." 
url: /pt/what-is-adminer-open-source-database-management-tool/
categories: ['Database Management Software']
---

## Administrner é um sistema de gerenciamento de banco de dados baseado na Web de código aberto para gerenciar bancos de dados. Vamos aprender a configurar o Administrador no Localhost e revisar seus principais recursos.
{{_LINE_11_}}

## Visão geral
As tarefas relacionadas a dados são muito mais críticas agora do que nunca. A ferramenta de gerenciamento de banco de dados se tornou parte integrante de qualquer negócio. No entanto, existem muitos sistemas de gerenciamento de banco de dados baseados na Web que oferecem soluções para tarefas tão desafiadoras. As empresas estão gerando toneladas de dados diariamente e se tornando difíceis de manter. Além disso, as organizações tendem a simplificar o acesso e o controle de dados. Essas ferramentas gratuitas ajudam a reduzir a redundância de dados, tornam os bancos de dados eficientes e confiáveis. Além disso, publicamos postagens de blog sobre tópicos como [Top Open Open DBMS Software Tools][1] e alguns mais.
Portanto, a comunidade de código aberto desenvolveu um administrador, que é uma ferramenta de gerenciamento de banco de dados gratuita em nível corporativo. Neste tutorial de administrador, abordaremos os seguintes pontos.
  * [O que é administrador?][2]
  * [Características importantes do administrador][3]
  * [Administrador vs phpmyadmin][4]
  * [Gerenciar bancos de dados com administrador][5]
  * [Conclusão][6]

## O que é administrador?   {#o que}
Quando se trata de ferramenta de gerenciamento de banco de dados MySQL leve e fácil de usar, o AleDer obteve ampla popularidade e oferece muitas melhorias em comparação com o PHPMYADMIN. Inicialmente, essa ferramenta de gerenciamento de banco de dados foi desenvolvida por Jakub Vrana em 2007 como uma alternativa ao PHPMyadmin, de modo que tudo o que você precisa fazer é baixar e instalar um único arquivo PHP leve e leve no banco de dados do seu aplicativo.
Como uma ferramenta de gerenciamento de banco de dados de código aberto, ela também é gratuita e está escrita no PHP. O que diferencia este sistema de gerenciamento de banco de dados baseado na Web é um bom design de interface de usuário para uma experiência perfeita para o usuário, além de fortes recursos de segurança para manter os dados seguros de qualquer ataque ou tentativas de hackers maliciosas. Essa ferramenta de gerenciamento de banco de dados é fácil de configurar e requer requisitos simples, como o Ubuntu e a LAMP. Os usuários podem encontrar documentação abrangente sobre desenvolvimento e implantação. Portanto, você pode encontrar arquivos de origem deste sistema de gerenciamento de banco de dados baseado na Web no [GitHub][7].

## Recursos importantes do administrador   {#IMPORTANT}
Alguns recursos básicos, mas importantes, desta ferramenta de gerenciamento de banco de dados incluem:
  * Possui muitas funções de banco de dados, incluindo o banco de dados selecionado, editar tabelas, inserir/editar dados em tabelas e classificar/pesquisar dados em várias colunas
  * Suporta vários bancos de dados, incluindo: MySQL, PostgreSQL, SQLite, MS SQL, Oracle e SimpledB Bathabases e muito mais
  * Está disponível em 43 idiomas, incluindo inglês, árabe, persa, polonês, holandês etc.
  * Você pode editar facilmente objetos de banco de dados, como visualizações, gatilhos, procedimentos armazenados, permissões de usuário e muito mais.
  * O Administrador também fornece medidas de segurança contra injeção de SQL, roubo de sessão, ataques de software de scripts transversais (XSS) e outros ataques.

## Administrner vs phpmyadmin   {#adminer}
Portanto, quando falamos sobre o que é administrador, seria interessante saber a comparação entre o administrador e o phpmyadmin. Quando se trata de escolher entre o Administrador e o PhpMyadmin, o AleDer vem no topo para os recursos flexíveis e o upload de arquivos leves que ele fornece. Da mesma forma, em comparação com a phpmyadmin, ele suporta vários bancos de dados, incluindo MySQL, SQLite e muitos outros. Da mesma forma, é mais intuitivo e mais inteligente que o phpmyadmin quando se trata de adicionar campos adicionais que o administrador faz automaticamente ou manipulação com todos os índices ao mesmo tempo.

## Gerenciar bancos de dados com administrador   {#Manage}
Na seção deste tutorial de administrador, examinaremos como podemos gerenciar bancos de dados com o Administrador.
**Requisitos de sistema**
Para que o Administrador seja executado em seu sistema, é importante que você tenha os seguintes requisitos configurados em seu servidor:
  * PHP versão 5, 7 ou 8
  * Um driver de banco de dados como MySQL, SQLite, PostgreSQL etc
**Instalação**
Se você tiver esses dois requisitos de sistema verificados, basta fazer o download do arquivo de [][8] e iniciar o upload do arquivo php no seu servidor. Para o servidor xampp, renomeie o arquivo baixado como "adminner.php" e coloque esse arquivo na pasta Htdocs.
**Acesso interface do usuário** 
Depois de passar por isso, o que é administrador? Agora acesse este aplicativo a partir de http: your-ip-address/renderner.php, como mostrado:
{{_LINE_42_}}
**Conecte-se ao servidor**
Faça login nessa ferramenta gratuita de gerenciamento de banco de dados usando o nome de usuário e a senha do seu servidor. Agora, se você deseja acessar apenas um banco de dados, digite seu nome. Você pode deixar esse campo em branco para acessar todos os bancos de dados que já existem no servidor.
**Gerenciar bancos de dados** 
Após o login, você verá uma lista de todos os bancos de dados atuais. Clique em qualquer banco de dados para gerenciá -lo.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-2-1024x449.png" alt="Gerenciar bancos de dados com ferramenta de gerenciamento de banco de dados de administrador">}}

Na próxima tela, você verá a lista de todas as tabelas de bancos de dados selecionados. A partir daqui, você pode exportar o banco de dados ou suas tabelas, adicionar ou editar tabela/colunas, alterar os dados por meio de consultas SQL e muito mais como mostrado aqui:

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-5-1024x534.png" alt="Ferramenta de gerenciamento de banco de dados">}}

**Crie novo banco de dados** 
Para criar um novo banco de dados, clique em "Criar banco de dados", digite o nome do banco de dados e clique em "Salvar".

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-3-1024x370.png" alt="Ferramenta de gerenciamento de banco de dados">}}

**Inserir/atualizar registros** 
Adicionar novos registros a uma tabela é bem simples. Clique no link do novo item que o redirecionará para a tela Inserir. Aqui você poderá adicionar novos dados para todas as colunas da tabela, juntamente com o tipo de dados, portanto, adicionar novos dados é um processo rápido.

{{< figure align=center src="images/Manage-Databases-with-Adminer-Database-Management-Tool-4-1024x462.png" alt="Administrador vs phpmyadmin">}}


## Conclusão   {#conclusion}
Isso nos leva ao final deste tutorial de administrador. Passamos por alguns tópicos importantes, como o que é administrador, administrador versus phpmyadmin e outros aspectos desse sistema de gerenciamento de banco de dados baseado na Web de código aberto. Felizmente, esta postagem do blog o ajudará certamente se você deseja instalar uma ferramenta de gerenciamento de banco de dados de código aberto. É uma interface intuitiva, inteligente e fácil de usar a torna uma ferramenta de gerenciamento de banco de dados muito popular. Além disso, ele suporta muitos bancos de dados, incluindo MYSQL, SQLITE, MONGODB e muito mais, juntamente com medidas de segurança para proteger e evitar eventos de hackers maliciosos. Em suma, essa ferramenta de gerenciamento de banco de dados não é apenas de código aberto, mas também gratuito.
Finalmente, [contenderize.com][9] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Portanto, mantenha contato com a categoria [Gerenciamento de banco de dados][10] para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][11], [LinkedIn][12] e [Twitter][13].

## Explore
Para saber mais sobre as ferramentas gratuitas de gerenciamento de banco de dados baseadas na Web, verifique as seguintes páginas:
  * [Administrador | Sistema de gerenciamento de banco de dados baseado na Web gratuito][14]
  * [Topo de código aberto DBMS Software Tools][1]
  * [Top 5 Ferramentas de gerenciamento de banco de dados de código aberto em 2021][15]
  * [Automatize operações comerciais usando software de código aberto e gratuito][16]

  
[1]: https://products.containerize.com/database-management
[2]: #what
[3]: #important
[4]: #adminer
[5]: #manage
[6]: #conclusion
[7]: https://github.com/vrana/adminer
[8]: https://www.adminer.org/
[9]: https://www.containerize.com/
[10]: https://products.containerize.com/database-management/
[11]: https://web.facebook.com/containerize
[12]: https://www.linkedin.com/company/containerize/
[13]: https://twitter.com/containerize_co
[14]: https://products.containerize.com/database-management/adminer
[15]: https://blog.containerize.com/2021/01/16/top-5-open-source-database-management-tools-in-2021/
[16]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
