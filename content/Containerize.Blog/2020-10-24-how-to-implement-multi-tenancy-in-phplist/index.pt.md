---
title: "Como configurar o aplicativo multi-inquilino no phplist" 
seoTitle: "Como configurar o aplicativo multi-inquilino no phplist" 
description: "O PHPLIST é um software de newsletter de código aberto e de código aberto. Configure um aplicativo com vários inquilinos e execute várias instâncias de um aplicativo em um ambiente compartilhado." 
date: Sat, 24 Oct 2020 03:25:27 +0000
author: Masood Anwer
summary: "Tutorial para desenvolver um aplicativo multi-inquilino no PHPLIST. O recurso multi-inquilino usa uma única instalação para vários hosts para reduzir os custos de hospedagem." 
url: /pt/how-to-implement-multi-tenancy-in-phplist/
categories: ['Newsletters']
---

## Tutorial para desenvolver um aplicativo multi-tenont no phplist. O recurso multi-inquilino usa uma única instalação para vários hosts para reduzir os custos de hospedagem.

{{< figure align=center src="images/Multi-tenancy-phplist.png" alt="Aplicativo multi-inquilino phplist">}}

Neste artigo, abordaremos ** o que é multi-cinema ** e como podemos configurar ** aplicativo multi-inquilino ** no phplist.

## O que é phplist?
Ao decidir a estratégia de marketing, o email marketing é uma parte essencial de todas as empresas digitais on -line. O PHPLIST permite que as empresas atinjam um grande público. O PHPLIST é amplamente utilizado ** Software de Newsletter de código aberto ** para gerenciar listas e enviar boletins informativos. Ajuda as empresas a criar, agendar, enviar e analisar as campanhas de boletim. O PHPLIST suporta recursos como análise, segmentação, processamento de rejeição, plugins, APIs e muito mais.

## O que é multi-tenancidade?
A multi-ingestão é uma arquitetura na qual muitos clientes/sites são representados por uma única instância de um aplicativo de software. Na multi-ingestão, o site é considerado um inquilino. Cada inquilino possui recursos específicos, como configuração, temas, SMTP.
Um aspecto importante da computação em nuvem é a multiestância. A arquitetura ** de vários inquilinos ** ajuda as empresas a alcançar um ROI melhor diminuindo os custos de manutenção e as atualizações rápidas de inquilinos. Além disso, os aplicativos projetados na arquitetura de multi-inquilinos podem ser escaláveis ​​facilmente.
Podemos implementar a multiestância usando as seguintes abordagens.
  * Banco de dados compartilhado para todos os inquilinos.
  * Separe o banco de dados para cada inquilino.
Usaremos um banco de dados separado para cada abordagem de inquilino para implementar a multiestação no phplist.
  * [Manipular o fluxo de solicitação][1]
  * [Configurar banco de dados para inquilino][2]
  * [Configure o nginx para inquilino][3]

## Handle Solicite Flow {#Request}
  * Faça um backup do seu arquivo config.php e você pode encontrá -lo no diretório de configuração.
  * Crie um novo arquivo config.php e adicione o código a seguir para lidar com sites/inquilinos.
```
switch ($_SERVER['SERVER_NAME'])
{   
    case "example.com":
      include_once("config.example.com.php");
    break;
    
    default:
    die ("server not used to run phplist"); 
}
```
Substitua o exemplo.com pelo seu nome de domínio. Você também precisa criar um arquivo de configuração para cada inquilino. Copie o arquivo de backup do config.php e salve -o com um novo nome como config.example.com.php.

## banco de dados de configuração para inquilino {#database}
  * Faça um backup do banco de dados phplist existente. Use -o para criar um banco de dados para o novo inquilino.
  * Open config.example.com.php File. Altere as credenciais do banco de dados e quaisquer outras configurações de acordo com o seu ambiente.

## Configure nginx para inquilino {#nginx}
  *Vá para o diretório nginx ** cd/etc/nginx/sites que estão disponíveis **.
  * Copie o arquivo Config.php padrão e salve -o com o nome do seu site, como exemplo.com.
  *Aberto exemplo.com Configuração com ** sudo nano exemplo.com **.
  * Altere o caminho raiz, o server_name e quaisquer outras configurações.
  *Teste configurações com ** sudo nginx -t **
  *Finalmente, crie o Symlink executando ** sudo ln -s /etc/nginx/sites-available/example.com/etc/nginx/sites-enabled/**
  *Reinicie o servidor da web nginx executando ** sudo systemctl reinicie nginx **, para que ele possa carregar o arquivo de configuração recém -criado.

## Conclusão
O software multi-literário tem algumas vantagens em comparação com o aplicativo de redação única, como reduzir custos de manutenção, uso eficaz de recursos e atualizações fáceis de instalar. Se você for construir o software SaaS (software como serviço), poderá seguir a arquitetura multi-literária e aproveitar seu verdadeiro poder.

## Explore
Você pode encontrar os seguintes links relevantes:
  * [PhPlist - Newsletter de código aberto e software de marketing por e -mail][4]
  * [Como criar e enviar boletim informativo usando phplist][5]
  * [Como configurar e processar saltos no phplist][6]
  * [Guia para iniciantes para desenvolver plugin phplist][7]
  * [Configurar o gerenciamento avançado de rejeição e as regras de rejeição em phplist][8]

  
[1]: #request
[2]: #database
[3]: #nginx
[4]: https://products.containerize.com/newsletter/phplist
[5]: https://blog.containerize.com/newsletter/how-to-create-and-send-newsletter-using-phplist/
[6]: https://blog.containerize.com/newsletter/how-to-setup-and-process-bounces-in-phplist/
[7]: https://blog.containerize.com/newsletter/beginners-guide-to-develop-phplist-plugin/
[8]: https://blog.containerize.com/newsletter/setup-advanced-bounce-management-and-bounce-rules-in-phplist/
