---
title: "Como implementar multi-tenância em mautic" 
seoTitle: "Como implementar multi-tenância em mautic" 
description: "Mautic é uma solução de automação de marketing de código aberto. A implementação de multi-ingestão em mautic reduz os custos, melhora a eficiência e a segurança." 
date: Fri, 11 Dec 2020 11:34:25 +0000
author: bilalahmed
summary: "Economize custos e maximize o uso de recursos implementando a multi-cinema em Mautic. A multi-ingestão ajuda nas personalizações de código, atualizações de aplicativos, melhoria de produtividade e manutenção fácil." 
url: /pt/how-to-implement-multi-tenancy-in-mautic/
categories: ['Marketing Automation']
---

## Economize custos e maximize o uso de recursos implementando multi-tenância no Mautic. A multi-ingestão ajuda nas personalizações de código, atualizações de aplicativos, melhoria de produtividade e manutenção fácil.

{{< figure align=center src="images/Mautic-multitenancy.png" alt="Como implementar multi-tenância em mautic">}}

A Mautic é uma solução de automação de marketing gratuita e de código aberto que oferece controle completo sobre seus e -mails de marketing, páginas de destino, fluxos de trabalho e medidas para suas atividades de marketing. Abordaremos as seguintes seções neste tutorial:
  * [O que é multi-ingestão][1]
  * [O que é Mautic][2]
  * [Implemente a multi-ingestão em Mautic][3]
  * [Conclusão][4]

## O que é multi-ingestão {#multi-tenancy}

Na arquitetura de software com vários inquilinos, uma única instância de um aplicativo de software serve a vários inquilinos. Cada dados do inquilino são isolados de outro inquilino compartilhando a mesma instância do aplicativo. Esses inquilinos são logicamente isolados, mas fisicamente integrados. Isso garante segurança de dados e privacidade para todos os inquilinos. Criar vários inquilinos a partir de uma única instância de aplicativo requer muito menos memória. Os inquilinos compartilham recursos e diminuem os custos da manutenção de software, infraestrutura e operações de data center. Os custos tendem a ser mais baixos do que os de uma infraestrutura de um inquilino.

## O que é mautico {#mautic}

[Mautic][5] é um software de marketing de código aberto e gratuito. Automatize tarefas de marketing repetitivo, como campanhas de marketing, geração de leads, segmentação de contato, etc. usando a Mautic. Possui recursos surpreendentes, incluindo geração de leads, construção de campanhas, segmentação de contatos, construtor de e -mails, testes A/B, construtor de páginas, nutrição de chumbo e muito mais. A Mautic também suporta integração com todas as plataformas sociais populares, p. Facebook, Twitter, LinkedIn. Todos esses recursos incríveis ajudam você a aumentar a experiência geral do cliente e melhorar a automação de marketing para o seu negócio.

## Implementar multi-cinemas em Mautic {#implement}

  * Crie um novo banco de dados vazio nomeado como "main_db".
  * Em seguida, crie a tabela chamada "inquilino", que manterá detalhes sobre todos os inquilinos.
  * Terá 3 campos, incluindo o site \ _name, URL e DB \ _Name, como mostrado na figura

{{< figure align=center src="images/How-to-implement-multi-tenancy-in-mautic-database.png-1024x131.jpg" alt="Como implementar multi-tenância em mautic">}}

  * Depois disso, o arquivo mautico/app/paths.php aberto e adicione este código:
```
$host = $_SERVER["HTTP_HOST"];
$dbName = "main_db";
$conn =  mysqli_connect($servername , $username , $password, $dbName);
$sql = "SELECT * from `tenant` where url = {$host}";
$result = mysqli_query($conn, $sql);
$Arr = mysqli_fetch_array($result,MYSQLI_ASSOC);
$tenant = $Arr["site_name"];
$local_config = "%kernel.root_dir%/config/local_".$siteName.".php";
```
  * Isso selecionará o arquivo de configuração correspondente com base no caminho da URL.
  * Em seguida, copie o banco de dados da instalação mautica atual e use -o para novo inquilino.
  * Depois disso, crie uma cópia de Mautic/App/config/local.php e renomeie -a para [site_name] .php.
  * Finalmente, atualize o nome do banco de dados, host, senha e usuário de acordo com o novo banco de dados.

## Conclusão {#conclusion}

A Mautic é uma solução de automação de marketing livre, rica e orientada para a qualidade. Ele permite criar campanhas de marketing, segmentos, formas, relatórios e muito mais. A implementação de multi-ingestão em mautic reduz os custos, melhora a eficiência, a escalabilidade e a segurança. Crie facilmente centenas de inquilinos a partir de apenas uma instalação.

## Explore
Para saber mais sobre Mautic e Facebook, visite:
  * [Mautic | Plataforma de tecnologia de marketing de conteúdo de código aberto][5]
  * [Como configurar campanhas Mautic usando o construtor de campanhas][6]
  * [Integração mautica do Drupal para automatizar a nutrição de chumbo][7]
  * [Automação de marketing com integração Mautic e WooCommerce][8]
  * [Integre Mautic & Joomla para automação de marketing digital][9]



 [1]: #multi-tenancy
 [2]: #mautic
 [3]: #implement
 [4]: #conclusion
 [5]: https://products.containerize.com/marketing-automation/mautic
 [6]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
 [7]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
 [8]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/
 [9]: https://blog.containerize.com/content-management/integrate-mautic-with-joomla-for-marketing-automation/
