---
title: "Como desenvolver o plugin de osticket | Ele helpdesk software" 
seoTitle: "Como desenvolver o plugin de osticket | Ele helpdesk software" 
description: "Siga este tutorial para aprender a desenvolver o plug -in de osticket. Este software helpdesk gerencia as comunicações do cliente e automatiza a resolução de problemas." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Crie um plug -in de osticket para adicionar recursos à sua instalação de osticket. Esse sistema de ingressos de código aberto ajuda as empresas a lidar com os clientes com eficiência." 
url: /pt/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Crie um plug -in de osticket para adicionar recursos à sua instalação de osticket. Esse sistema de ingressos de código aberto ajuda as empresas a lidar com os clientes com eficiência.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="software helpdesk">}}


## Visão geral
Bem -vindo a outra postagem interessante do blog na série de [HelpDesk Ticketing Software][1]. Publicamos algumas postagens de blog sobre tópicos como [HelpDesk e sistema de atendimento ao cliente baseado em bilhetes gratuitos e populares][2], [automatizar o sistema de bilhetes usando o WordPress e o Osticket][3] e um pouco mais. No entanto, o Osticket é um sistema helpdesk baseado em bilhetes de código aberto, projetado para os clientes relatarem suas consultas e reclamações para apoiar a equipe. Este sistema de suporte gratuito fornece um módulo de gerenciamento fácil de usar, que converte consultas provenientes de telefone, e-mail e formulários em ingressos baseados na Web. Ele oferece uma ampla gama de recursos e opções que permitem que a equipe de suporte forneça uma incrível experiência de suporte ao cliente para os clientes.
Este sistema de bilheteria de código aberto (OSTicket) é uma estrutura de ticket de suporte totalmente flexível que oferece inúmeras opções para ajudar a adaptar todas as partes da experiência de suporte ao cliente, como mensagens enviadas aos clientes, páginas e notificações. Em seu artigo, aprenderemos o desenvolvimento de plug -in de osticket para aprimorar a funcionalidade de acordo com nossas necessidades. Para fazer isso, abordaremos os seguintes tópicos:
  * [Por que usar plugins?][4]
  * [Requisitos][5]
  * [Como desenvolver o plugin de Osticket?][6]
  * [Conclusão][7]

## Por que usar plugins? {#why}

Neste tópico, aprenderemos como criar um plug -in simples para estender a funcionalidade principal deste  **Software Helpdesk**  (Osticket). Um plug -in é um software, que estende a funcionalidade principal de qualquer aplicativo/software. Além disso, existem muitos softwares de código aberto de nível corporativo que possuem uma enorme pilha de plugins que estendem as funcionalidades. Além disso, esses softwares populares de código aberto incluem WordPress, Joomla e muito mais. Acima de tudo, as comunidades vibrantes e vivas apóiam e desenvolvem plugins conforme as necessidades. No entanto, as estruturas oferecem documentação abrangente sobre o desenvolvimento dos plug -ins. A seguir, alguns motivos para os aplicativos suportar plugins:
  * Permite que desenvolvedores de terceiros criem componentes de software que estendem a funcionalidade de um aplicativo.
  * Os plugins permitem integrar facilmente novos recursos.
  * Também não aumenta o tamanho e a complexidade de um aplicativo.
  * Assim como os desenvolvedores podem manter e gerenciar o código dos plugins separadamente do aplicativo principal.

## Requisitos {#requirements}

Esta seção do  **It HelpDesk Software**  Guia descreve os requisitos necessários para desenvolver o plug -in de osticket.
  * PHP versão 5.6 ou acima
  * Instalação de Osticket
  * Conhecimento básico de PHP

## Como desenvolver o plug -in de Osticket? {#how}

Nesta seção, seguiremos as etapas do desenvolvimento do plug -in deste sistema de bilheteria de código aberto (OSTICKET).
  * Crie o diretório da pasta do plug -in /inclui /plugins. Neste tutorial, criaremos um plug -in de demonstração que integra  **Sistema de Osticket**  com Redmine.
  * Deve ter seguintes arquivos necessários: plugin.php e config.php.
  * O arquivo plugin.php contém descrição geral do plug -in. Use seguinte código de amostra no arquivo plugin.php:
```
<?php

return array(
    'id' =>             'dynabic:redmine', # notrans
    'version' =>        '0.1',
    'name' =>           /* trans */ 'Dynabic Redmine',
    'author' =>         'Bilal Kiani',
    'description' =>    /* trans */ 'Integration with Dynabic.Redmine',
    'url' =>            '',
    'plugin' =>         'redmine.php:DynabicRedminePlugin',
);

?>

```
  * Em seguida, substitua os nomes de ID, nome, nome do autor e plug -in do código acima.
  * Depois disso, precisamos exibir opções de configuração do plug -in no back -end do Osticket. Adicione o seguinte código de amostra no arquivo config.php.
```
<?php
require_once INCLUDE_DIR . 'class.plugin.php';
class DynabicRedminePluginConfig extends PluginConfig {

    // Provide compatibility function for versions of osTicket prior to
    // translation support (v1.9.4)
    function translate() {
        if (!method_exists('Plugin', 'translate')) {
            return array(
                function($x) { return $x; },
                function($x, $y, $n) { return $n != 1 ? $y : $x; },
            );
        }
        return Plugin::translate('dynabic-redmine');
    }

    function getOptions() {
        list($__, $_N) = self::translate();        
        return array(
            'dynabicRedmineCredentials' => new SectionBreakField(array(
                'label' => $__('Redmine Credentials')
            )),
            'dynabic-Redmine-username' => new TextboxField(array(
                'label' => $__('Username'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
            'dynabic-Redmine-password' => new PasswordField(array(
                'label' => $__('Password'),
                'configuration' => array('size'=>60, 'length'=>100),                
            )),
        );
    }
}
```
  * Como resultado, isso criará campos de nome de usuário e senha na página Config, como mostrado aqui:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Um guia para iniciantes para desenvolver o plugin de osticket">}}

  * A seguir, é apresentada uma lista de campos de classe que estão disponíveis, eles são definidos em `[install_root]/incluir/class.forms.php`:
      * TextBoxfield - caixa de texto
      * TextARafield - Área de texto
      * ThreadEntryfield - área de texto rica, usada para tópicos de discussão
      * DateTimefield - JQuery DatePicker
      * Campo de texto - caixa de texto otimizada para números de telefone
      * Booleanfield - Caixa de seleção
      * ChoiceField-Selecionar campo suspenso
      * Seção Breakfield - quebra de seção horizontal
  * Depois disso, precisamos criar o arquivo em que a funcionalidade do plug -in será definida.
  * O nome do arquivo deve ser o mesmo definido no arquivo plugin.php. ou seja, redmine.php.
  * Isso deve segurar a classe dynabicredmineplugin. Confira o seguinte código de amostra:
```
class DynabicRedminePlugin extends Plugin {
    var $config_class = "DynabicRedminePluginConfig";
	 /**
     * The Redmine WSDL endpoint.
     */

    function bootstrap() {
        $config = $this->getConfig();
        # ----- Dynabic.Redmine credentials ---------------------
        $dynabicRedmine = json_decode($config->get('dynabicRedmine-enabled'));
		define('Redmine_USERNAME', $config->get('dynabic-Redmine-username'));
		define('Redmine_PASSWORD', $config->get('dynabic-Redmine-password'));
    }
```
  * Este código buscou os valores de configuração e você pode usar esses valores em suas funções. Neste arquivo, você pode adicionar a funcionalidade do seu plug -in como seus requisitos.

## Conclusão {#conclusion}

Isso nos leva ao final deste post do blog. Osticket é um software de gerenciamento de bilhetes que oferece estrutura de plug -ins para desenvolvedores para que eles possam adicionar novas funcionalidades conforme os requisitos. Os plugins são os componentes que estendem a funcionalidade principal de qualquer aplicativo/software. Em seu artigo, discutimos o desenvolvimento de plug -in deste sistema de suporte ao cliente  **(Osticket), que ajuda os desenvolvedores a adicionar recursos e aprimoramentos personalizados de acordo com seus requisitos. Portanto, esta postagem do blog realmente o ajudará se você deseja implantar um software** de helpdesk **para o seu negócio. Além disso, existem outros**  Software de ingressos para Helpdesk**e artigos mencionados na seção "Explorar" abaixo.
Finalmente, [contenderize.com][8] está escrevendo continuamente postagens de blog sobre produtos e tópicos de código aberto. Portanto, mantenha contato com a categoria [HelpDesk Ticketing Software][1] para atualizações regulares. Além disso, você pode nos seguir em nossas contas de mídia social [Facebook][9], [LinkedIn][10] e [Twitter][11].

## Explore
Você pode encontrar os seguintes links relevantes:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Ajuda][15]
  * [Melhor código aberto e software de suporte de suporte de TI gratuito][16]
  * [Helpdesk e sistema de atendimento ao cliente baseado em bilhetes gratuitos e gratuitos][2]
  * [Como configurar o software de suporte técnico on -line usando osticket][17]
  * [Como implementar a multiestância no Osticket][18]
  * [Automatize o sistema de bilhetes usando o WordPress e Osticket][3]
  * [Automatize operações comerciais usando software de código aberto e gratuito][19]



[1]: https://products.containerize.com/video-editing-software
[2]: https://products.containerize.com/helpdesk/osticket
[3]: https://blog.containerize.com/blogging/automate-ticketing-system-using-wordpress-and-osticket/
[4]: #why
[5]: #requirements
[6]: #how
[7]: #conclusion
[8]: https://www.containerize.com/
[9]: https://web.facebook.com/containerize
[10]: https://www.linkedin.com/company/containerize/
[11]: https://twitter.com/containerize_co
[12]: https://products.containerize.com/helpdesk/uvdesk/
[13]: https://products.containerize.com/helpdesk/zammad/
[14]: https://products.containerize.com/helpdesk/freescout/
[15]: https://products.containerize.com/helpdesk/helpy/
[16]: https://products.containerize.com/helpdesk/
[17]: https://blog.containerize.com/helpdesk/how-to-set-up-help-desk-system-using-osticket/
[18]: https://blog.containerize.com/helpdesk/how-to-implement-multi-tenancy-in-osticket/
[19]: https://blog.containerize.com/blogging/automate-business-operations-using-open-source-software/
