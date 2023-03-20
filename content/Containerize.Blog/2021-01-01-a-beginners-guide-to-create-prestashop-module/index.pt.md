---
title: "Um guia para iniciantes para criar o Módulo Prestashop" 
seoTitle: "Um guia para iniciantes para criar o Módulo Prestashop" 
description: "O Prestashop é um software de comércio eletrônico eficiente e econômico de código aberto para configurar a loja on -line. Os complementos do Prestashop ajudam os proprietários de armazenamento a expandir a funcionalidade." 
date: Fri, 01 Jan 2021 21:45:49 +0000
author: Masood Anwer
summary: "Os módulos Prestashop são pequenos programas que permitem melhorar a funcionalidade da sua loja. Aprenderemos como construir um módulo básico neste tutorial." 
url: /pt/a-beginners-guide-to-create-prestashop-module/
categories: ['Shopping Cart Software']
---

## Os módulos PrestaShop são pequenos programas que permitem melhorar a funcionalidade da sua loja. Aprenderemos como construir um módulo básico neste tutorial.

{{< figure align=center src="images/prestashop-module.png" alt="Módulo Prestashop">}}

** Prestashop ** é um software de comércio eletrônico 100% livre e de código aberto. Isso permite que os proprietários de lojas configurem facilmente sua presença on -line e ampliem negócios em larga escala. O Prestashop vem com recursos padrão e você pode precisar de mais funcionalidade para os requisitos de negócios ocasionalmente. O Marketplace para Prestashop é um local fantástico para encontrar recursos de complementos que podem ser usados ​​para expandir a funcionalidade da loja. Além disso, você pode encontrar módulos gratuitos e pagos no Marketplace. No entanto, você também pode criar módulo personalizado a partir do zero.
Discutiremos os tópicos abaixo em detalhes para ** Criar módulo Prestashop **.
  * [Requisitos][1]
  * [Básicos do desenvolvimento do módulo][2]
  * [Crie nosso módulo Prestashop][3]
  * [Conclusão][4]

## requisitos {#req}
  * Instale o PrestaShop 1.6 ou maior.
  * Familiarizado com o Prestashop.
  * Compreensão do PHP.

## básicos do desenvolvimento do módulo {#basics}
Antes de começar a codificar, é realmente importante saber sobre os conceitos principais para o desenvolvimento do módulo de Prestashop **. Isso permitirá que você construa rapidamente e gerencie seu módulo.
** Configuração ** - A configuração permite salvar dados no banco de dados da loja sem exigir uma tabela específica do módulo. A tabela de configuração contém uma lista de propriedades do valor -chave que podem ser acessadas de qualquer lugar.
** GAYS ** - Os ganchos são uma maneira de conectar quaisquer eventos de PrestaShop específicos com seu código. Você pode usar ganchos para colocar seu código nas páginas e para ações específicas, como enviar e -mails em determinado evento.
** Widgets ** - Os desenvolvedores de módulos usam widgets para exibir conteúdo quando necessário.
** Doutrina ** - A doutrina é ORM permite gerenciar seus dados de banco de dados por meio de objetos. Isso fornece uma camada abstrata que permite executar ações de inserção/atualização com chamada simples.

## Crie nosso módulo Prestashop {#Create}
  *Criar diretório de módulos chamado ** MyFirstModule ** IN ** Módulos ** Diretório da sua instalação de Prestashop. Coloque todos os arquivos no diretório do seu módulo.
  *Crie arquivo principal com nome ** myfirstmodule.php ** e copie o seguinte código nele.
```
<?php
if (!defined('_PS_VERSION_'))
  exit;

class MyFirstModule extends Module
{
  public function __construct()
  {
    $this->name = 'myfirstmodule';
    $this->tab = 'front_office_features';
    $this->version = '1.0.0';
    $this->author = 'Masood Anwer';
    $this->need_instance = 0;
    $this->ps_versions_compliancy = array('min' => '1.6', 'max' => _PS_VERSION_); 
    $this->bootstrap = true;

    parent::__construct();

    $this->displayName = $this->l('My First module');
    $this->description = $this->l('My first example module.');

    $this->confirmUninstall = $this->l('Are you sure you want to uninstall?');

    if (!Configuration::get('MYFIRSTMODULE_NAME'))   
      $this->warning = $this->l('No name provided');
  }
}
```
  *Criar ** Métodos Install () ** e ** Uninstall () **. Adicione os seguintes métodos no arquivo ** myfirstmodule.php **.
```
public function install()
{
  if (!parent::install()
       OR !$this->registerHook('rightColumn')
       OR !$this->registerHook('leftColumn'))
            return false;
    return true;
}
public function uninstall()
{
  if (!parent::uninstall())
    return false;
  return true;
}
```
  * Ligue para métodos especiais para ativar nossos ganchos registrados. Usaremos esses métodos para exibir "Hello World!" texto para as barras laterais. Adicione o seguinte código no arquivo ** myfirstmodule.php **.
```
public function hookLeftColumn($params)
{
  echo "Hello World!";
}

public function hookRightColumn($params)
{
   return $this->hookLeftColumn($params);
}
```
  *Finalmente, abra a seção de administrador, upload e ** Instale o Módulo Prestashop **.

## Conclusão {#conclusion}
Discutimos conceitos principais para a construção do ** Módulo de Prestashop ** neste tutorial. Além disso, desenvolvemos módulo básico que pode ser usado como ponto de partida para mais módulos avançados. [CONTERIZE.COM][5] está trabalhando constantemente em novas postagens do blog do tutorial. Para as atualizações mais recentes, mantenha contato com a categoria [Software de carrinho de compras][6].

## Explore
Você pode encontrar os seguintes links úteis, além do ** Tutorial de criação do Módulo de Prestashop **.
  * [Prestashop - Software de carrinho de compras gratuito][7]
  * [5 Top 5 Software de carrinho de compras de código aberto em 2020][8]

  
[1]: #Req
[2]: #Basics
[3]: #Create
[4]: #Conclusion
[5]: https://containerize.com
[6]: https://blog.containerize.com/category/shopping-cart-software/
[7]: https://products.containerize.com/ecommerce/prestashop
[8]: https://blog.containerize.com/2020/11/27/top-5-open-source-shopping-cart-software-in-2020/
