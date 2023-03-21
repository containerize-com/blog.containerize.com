---
title: "Como configurar a solução CMDB Ralph no localhost" 
seoTitle: "Como configurar a solução CMDB Ralph no localhost" 
description: "Este tutorial é sobre a criação de Ralph no localhost. O Ralph é uma solução CMDB gratuita que fornece recursos para rastrear ativos e configurações." 
date: Fri, 11 Jun 2021 12:54:21 +0000
author: muhammadmustafa
summary: "A solução de gerenciamento de ativos de TI reduz os custos operacionais e aumenta a eficiência. Este artigo é sobre como configurar o software CMDB Ralph em sua máquina local." 
url: /pt/how-to-set-up-cmdb-solution-ralph-on-localhost/
categories: ['CMDB Software']
---

A solução de gerenciamento de ativos de TI reduz os custos operacionais e aumenta a eficiência. Este artigo é sobre como configurar o software CMDB Ralph em sua máquina local.

{{< figure align=center src="images/ralph.png" alt="Solução CMDB">}}


## **Visão geral**
No momento atual, as organizações estão prosperando para atender ao ritmo da tecnologia empregando enorme infraestrutura de TI. Em seguida, não é menos do que um desafio gerenciar ambientes tão enormes. Requer mão -de -obra e poder tecnológico para realizar tarefas críticas. Às vezes, torna -se um aborrecimento formular processos e procedimentos para lidar com redes complexas de sistemas que incluem impressoras, computadores de mesa, scanners, telefones e outros acessórios de TI. Da mesma forma, as configurações desses nós também são importantes, pois há altas chances de tempo de inatividade de qualquer máquina na rede. Portanto, deve haver uma verificação consistente sobre essas configurações.
No entanto, existem muitos softwares de código aberto e gratuitos disponíveis para acompanhar e registrar os ativos. Este software é conhecido como software de banco de dados de gerenciamento de configuração (CMDB). Recentemente, o [containerize.com][1] publicou uma solução CMDB [Ralph][2] que fornece muitos recursos para melhores ativos e gerenciamento de configurações. Nesta postagem do blog, exploraremos Ralph cobrindo os seguintes pontos.
  ***[Breve Introdução do Gerenciamento de Ativos de Software CMDB Ralph][3]** 
  ***[Recursos de Ralph][4]** 
  ***[Como configurar Ralph no localhost?][5]** 
  ***[Conclusão][6]** 

## breve introdução do CMDB Software Asset Management Ralph   {#Intro}
Ralph é uma solução gratuita de gerenciamento de ativos de código aberto. É uma plataforma cruzada e vem com recursos de auto-hospedagem. Há um ecossistema completo de rastreamento de ativos em tempo real. Portanto, os usuários podem executar análises para relatórios. Ele permite que os usuários registrem detalhes dos ativos sobre seu ciclo de vida. Além disso, este software de gerenciamento de ativos digitais de código aberto fornece espaço para armazenar informações sobre os ativos do data center. Por outro lado, esta solução CMDB também fornece suporte para gerenciamento de software, licença, certificados e outros contratos. A Ralph não apenas suporta o gerenciamento de ativos, mas também fornece disposições para executar ações nesses ativos. No entanto, as ações estão relacionadas à implantação de um host, geração de faturas, rastreamento de domínio ou gerenciamento de inventário.
Esta solução de gerenciamento de ativos de TI cria uma interface repousante. Os desenvolvedores podem integrar muitos aplicativos de terceiros usando os pontos de extremidade da API expostos por esta ferramenta gratuita de código aberto. Além disso, Ralph é escrito em Python junto com a entrada de HTML, CSS e JavaScript. Portanto, existe uma documentação abrangente disponível em relação ao desenvolvimento e implantação. O código -fonte desta solução de gerenciamento de ações está disponível no [Github][7].

## Recursos de Ralph   {#Features}
Ralph oferece muitos recursos. No entanto, mencionaremos alguns dos seguintes recursos importantes.
**extensível** : Este software de gerenciamento de ativos digitais de código aberto é altamente extensível. Os desenvolvedores podem implantá -lo em instalações ou na nuvem conforme suas necessidades.
**Suporte para data centers:**  Ralph também oferece suporte a data warehouses, salas de data center, servidores e racks. Os usuários podem acompanhar todos os componentes, sua rede e configurações.
**API REST** : Este software CMDB gratuito é altamente personalizável. De fato, fornece uma API REST para integrações de terceiros. Os desenvolvedores podem estendê -lo de acordo com seus requisitos.
**Intuitive User Interface:**  Existe uma interface de usuário lógica disponível nesta solução CMDB, onde os usuários podem navegar facilmente. Além disso, o painel administrativo fornece vários widgets que mostram dados em tempo real.
**Interface da linha de comando** : Ralph apresenta uma interface de linha de comando que fornece uma instalação para descobrir endereços MAC para a implantação de hosts.
**Suporte para ativos não físicos** : Esta solução de gerenciamento de equipamentos não apenas fornece suporte para ativos físicos, mas também gerencia recursos não físicos, como domínios, software e licenças.

## Como configurar Ralph no localhost?   {#configurar}
Nesta seção, passaremos pelo processo de instalação do software de gerenciamento de recursos Ralph na máquina local. É muito fácil configurar e usar.
Antes de passar para a próxima seção, verifique se você instalou os seguintes pré -requisitos.
  * [Docker-Compose][8]
  * [Docker][9]
A maior parte do software de código aberto oferece imagens do Docker para as implantações em várias plataformas. Isso dá facilidade aos desenvolvedores e acelera o processo de desenvolvimento e implantação.
Depois que os pré -requisitos forem instalados, ligue o Docker. Agora, abra o terminal e execute o comando a seguir para fazer um diretório vazio:
```
mkdir ralph<br>cd ralph
```
Depois disso, faça um novo arquivo chamado 'Docker-Compose.yml' e preencha-o com os seguintes dados.
```
version: '3'
services:
  web:
    image: allegro/ralph:latest
    restart: always
    ports:
      - "8000"
    volumes:
      - ralph_media:/var/local/ralph/media
      - ralph_static:/usr/share/ralph/static
    links:
      - db
      - redis
      - nginx
    environment:
        DATABASE_NAME: ralph_ng
        DATABASE_USER: ralph_ng
        DATABASE_PASSWORD: ralph_ng
        DATABASE_HOST: db
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

  nginx:
    image: allegro/ralph-static-nginx:latest
    restart: always
    ports:
      - "80:80"
    volumes:
      - ralph_media:/opt/media

  db:
    image: mysql:5.7
    environment:
      MYSQL_DATABASE: ralph_ng
      MYSQL_ROOT_PASSWORD: ralph_ng
      MYSQL_USER: ralph_ng
      MYSQL_PASSWORD: ralph_ng
    volumes:
      - ralph_dbdata:/var/lib/mysql
    command: mysqld --character-set-server=utf8mb4 --collation-server=utf8mb4_unicode_ci

  redis:
    image: redis:3.0
    restart: always
    ports:
      - "6379"

  inkpy:
    image: allegro/inkpy:latest
    restart: always
    links:
      - redis:redis
    environment:
        REDIS_HOST: redis
        REDIS_PASSWORD: ""
        REDIS_PORT: 6379
        REDIS_DB: 0

volumes:
  ralph_dbdata:
  ralph_media:
  ralph_static:
```
Agora, salve o arquivo e execute o seguinte comando para fazer a compilação:
```
docker-compose build

```
Após uma compilação bem -sucedida, execute o seguinte comando para o banco de dados:
```
docker-compose run –rm web /root/init.sh

```
Se tudo correr bem, execute o seguinte comando para aumentar o contêiner do Docker:
```
docker-compose up -d
```
Depois de executar esse comando, os contêineres do Docker estarão em funcionamento, conforme mostrado na imagem abaixo:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.25.20-1024x509.png" alt="Solução CMDB">}}

Por fim, abra o navegador e acesse o aplicativo neste endereço http://127.0.0.1.
Ele mostrará a página de login, como mostrado na imagem abaixo:

{{< figure align=center src="images/Screenshot-2021-06-11-at-15.20.58-1024x577.png" alt="Solução CMDB">}}


## Conclusão   {#conclusion}
Depois de passar por esta postagem do blog do tutorial do CMDB, uma coisa fica claro que o gerenciamento de ativos é quase impossível sem uma boa solução CMDB. O software de gerenciamento de recursos tem funções específicas no gerenciamento e rastreamento de ativos, configurações e relacionamentos. Existem disposições para rastrear as mudanças que mal são feitas em ativos digitais ou físicos. Essas ferramentas gratuitas são fáceis de configurar, usar e vir com documentação e orientação detalhadas. Finalmente, [**containerize.com **][1] pretende escrever artigos sobre produtos de código aberto adicionais. Portanto, mantenha contato com esta [][10]  **[Software CMDB][11]**   Categoria para as atualizações mais recentes.

## Explore
  ***[Software CMDB][11]** 
  ***[Ralph][2]** 
  *[**Automatize operações comerciais usando software de código aberto e gratuito** ][12]
  ***[Tendências de desenvolvimento de software para procurar em 2021][13]** 

  
[1]: https://www.containerize.com/
[2]: https://products.containerize.com/cmdb-software/ralph/
[3]: #intro
[4]: #features
[5]: #setup
[6]: #Conclusion
[7]: https://github.com/allegro/ralph
[8]: http://docs.docker.com/compose/install/
[9]: https://docs.docker.com/docker-for-mac/install/
[10]: https://products.containerize.com/healthcare-technologies/
[11]: https://products.containerize.com/cmdb-software/
[12]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
[13]: https://blog.containerize.com/blockchain-platforms/software-development-trends-to-look-out-for-in-2021/
