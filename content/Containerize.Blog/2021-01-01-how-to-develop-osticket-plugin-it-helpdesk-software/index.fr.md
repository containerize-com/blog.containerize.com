---
title: "Comment développer un plugin OSTICKET | Il helpdesk logiciel" 
seoTitle: "Comment développer un plugin OSTICKET | Il helpdesk logiciel" 
description: "Suivez ce tutoriel pour apprendre à développer le plugin OSTICKET. Ce logiciel HelpDesk gère les communications des clients et automatise la résolution des problèmes." 
date: Fri, 01 Jan 2021 07:11:49 +0000
author: bilalahmed
summary: "Créez un plugin OSTICKET pour ajouter des fonctionnalités dans votre installation OSTICKET. Ce système de billetterie open source aide les entreprises à gérer efficacement les clients." 
url: /fr/how-to-develop-osticket-plugin-it-helpdesk-software/
categories: ['Help Desk']
---

## Créez un plugin OSTICKET pour ajouter des fonctionnalités dans votre installation OSTICKET. Ce système de billetterie open source aide les entreprises à gérer efficacement les clients.

{{< figure align=center src="images/A-beginners-guide-to-develop-osTickets-plugin.png" alt="il helpdesk logiciel">}}


## Aperçu
Bienvenue dans un autre article de blog intéressant dans la série de [Helpdesk Ticketing Software][1]. Nous avons publié des articles de blog sur des sujets tels que [Système populaire de service d'assistance basé sur la billetterie et le système de service client][2], [Automatiser le système de billetterie à l'aide de WordPress et Osticket][3], et d'autres. Cependant, OSTICKET est un système d'assistance basé sur la billetterie open source conçu pour que les clients signalent leurs requêtes et plaintes pour soutenir le personnel. Ce système de support gratuit fournit un module de gestion de demandes faciles à utiliser qui convertit les demandes provenant du téléphone, des e-mails et des formulaires en billets en ligne. Il offre une large gamme de fonctionnalités et d'options qui permet au personnel de soutien de fournir une expérience de support client incroyable aux clients.
Ce système de billetterie open source (OSTICKET) est un cadre de billets de support entièrement flexible qui offre de nombreuses options pour aider à adapter toutes les parties de l'expérience du support client comme les messages envoyés aux clients, pages et notifications. Dans son article, nous apprendrons le développement du plugin OSTICKET pour améliorer les fonctionnalités en fonction de nos besoins. Pour ce faire, nous couvrirons les sujets suivants:
  * [Pourquoi utiliser des plugins?][4]
  * [Exigences][5]
  * [Comment développer le plugin d'Osticket?][6]
  * [Conclusion][7]

## Pourquoi utiliser des plugins? {#pourquoi}
Dans ce sujet, nous apprendrons à créer un plugin simple pour étendre la fonctionnalité principale de ce logiciel ** It Helpdesk ** (OSTICKET). Un plugin est un logiciel, qui étend la fonctionnalité principale de toute application / logiciel. De plus, il existe de nombreux logiciels open source de niveau d'entreprise qui ont une énorme pile de plugins qui étendent les fonctionnalités. De plus, ces logiciels open source populaires incluent WordPress, Joomla et bien d'autres. Surtout, les communautés dynamiques et vivantes soutiennent et développent des plugins selon les besoins. Cependant, les cadres offrent une documentation complète concernant le développement des plugins. Voici quelques raisons pour lesquelles les applications prennent en charge les plugins:
  * Il permet aux développeurs tiers de créer des composants logiciels qui étendent les fonctionnalités d'une application.
  * Les plugins permettent d'intégrer facilement de nouvelles fonctionnalités.
  * De plus, cela n'augmente pas la taille et la complexité d'une application.
  * Ainsi que les développeurs peuvent conserver et gérer le code des plugins séparément de l'application de base.

## exigences {#Requirements}
Cette section du Guide ** It Helpdesk Software ** décrit les exigences nécessaires pour développer le plugin OSTICKET.
  * PHP version 5.6 ou plus
  * Installation d'Osticket
  * Connaissances PHP de base

## Comment développer le plugin d'Osticket? {#comment}
Dans cette section, nous passerons par les étapes du développement du plugin de ce système de billetterie open source (OSTICKET).
  * Créez le dossier du plugin dans / include / plugins répertoire des plugins. Dans ce tutoriel, nous créerons un plugin de démonstration qui intègre ** le système OSTICKET ** avec Redmin.
  * Il devrait avoir les fichiers nécessaires suivants: plugin.php et config.php.
  * Le fichier plugin.php contient une description générale du plugin. Utilisez un exemple de code suivant dans le fichier plugin.php:
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
  * Puis remplacez les noms de la classe ID, nom, nom de l'auteur et plugin à partir du code ci-dessus.
  * Après cela, nous devons afficher les options de configuration du plugin dans le backend d'Osticket. Ajoutez un exemple de code suivant dans le fichier config.php.
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
  * En conséquence, cela créera des champs de nom d'utilisateur et de mot de passe sur la page de configuration comme indiqué ici:

{{< figure align=center src="images/A-Beginners-Guide-To-Develop-osTickets-Plugin-1024x368.png" alt="Un guide pour débutant pour développer un plugin OSTICKET">}}

  * Ce qui suit est une liste des champs de classe disponibles, ils sont définis dans `[install_root] / include / class.forms.php`:
      * TextBoxfield - zone de texte
      * Textareafield - zone de texte
      * Threadentryfield - Rich Text Area, utilisé pour les fils de discussion
      * DateTimefield - jQuery Datepicker
      * PhoneField - Box de texte optimisé pour les numéros de téléphone
      * Booleanfield - Box
      * ChoiceField - Champ de sélection déroulant
      * SectionBreakfield - Break de section horizontale
  * Après cela, nous devons créer le fichier où la fonctionnalité du plugin sera définie.
  * Le nom du fichier doit être le même que celui défini dans le fichier plugin.php. c'est-à-dire redmine.php.
  * Ce sera la classe dynabicredmineplugin. Consultez l'exemple de code suivant:
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
  * Ce code a obtenu les valeurs de configuration et vous pouvez utiliser ces valeurs dans vos fonctions. Dans ce fichier, vous pouvez ajouter les fonctionnalités de votre plugin comme exigences.

## Conclusion {#conclusion}
Cela nous amène à la fin de ce billet de blog. OSTICKET est un logiciel de gestion de billetterie qui offre une structure de plugins pour les développeurs afin qu'ils puissent ajouter de nouvelles fonctionnalités selon les exigences. Les plugins sont les composants qui étendent la fonctionnalité principale de toute application / logiciel. Dans son article, nous avons discuté du développement des plugins de ce ** Système de support client ** (OSTICKET), qui aide les développeurs à ajouter des fonctionnalités et des améliorations personnalisées en fonction de leurs exigences. Par conséquent, ce billet de blog vous aidera vraiment si vous cherchez à déployer un logiciel ** It Helpdesk ** pour votre entreprise. De plus, il existe d'autres ** logiciels de billetterie d'assistance ** et des articles mentionnés dans la section «Explorer» ci-dessous.
Enfin, [contenerize.com][8] écrit continuellement des articles de blog sur d'autres produits et sujets open source. Par conséquent, veuillez rester en contact avec la catégorie [Logiciel de billetterie d'assistance][1] pour les mises à jour régulières. De plus, vous pouvez nous suivre sur nos comptes de médias sociaux [Facebook][9], [LinkedIn][10] et [Twitter][11].

## Explorer
Vous pouvez trouver les liens suivants pertinents:
  * [Uvdesk][12]
  * [Zammad][13]
  * [Freescout][14]
  * [Aider][15]
  * [MEILLEUR SOFFICATION Open SOURCE ET GRATUIT IT Help Deker][16]
  * [Système populaire de service d'assistance basé sur la billetterie et client][2]
  * [Comment configurer le logiciel d'assistance en ligne à l'aide d'Osticket][17]
  * [Comment mettre en œuvre la multi-tension en osticket][18]
  * [Automatiser le système de billetterie à l'aide de WordPress et OSTICKET][3]
  * [Automatiser les opérations commerciales à l'aide d'un logiciel gratuit et open source][19]

  
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
