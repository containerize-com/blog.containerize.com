---
title: How To Setup Mautic – Facebook Integration
seoTitle: How To Setup Mautic – Facebook Integration
description: 'Mautic - Facebook Integration can help synchronize your Facebook leads into Mautic system without any difficulty and then use them in marketing campaigns.'
date: Fri, 04 Dec 2020 09:51:26 +0000
author: bilalahmed
summary: Fetch Facebook leads to Mautic, add contacts into a segment and run email campaigns. Also use these contacts to create custom audience for Facebook ads.
url: /marketing-automation/how-to-setup-mautic-facebook-integration/
aliases: 
    -  /2020/12/04/how-to-setup-mautic-facebook-integration/
categories: ['Marketing Automation']

---
## Fetch Facebook leads to Mautic, add contacts into a segment and run email campaigns. Also use these contacts to create custom audience for Facebook ads.

{{< figure align=center src="images/How-to-set-up-Mautic-Facebook-Integration.png" alt="How to set up Mautic - Facebook Integration">}}  

Mautic is a marketing automation software and gives complete control over marketing emails, landing pages and workflows for marketing activities.  Mautic’s drip campaigns help to engage target audience and keep them updated about your products. Mautic Facebook integration provides a way for new leads to be added to Mautic. With this Mautic – Facebook integration, leads from your Facebook campaign will be automatically added to Mautic. 

We will cover following sections in this tutorial:

  * [Configure Facebook developer account][1]
  * [Configure Facebook developer’s app][2]
  * [Mautic plugin configuration][3]
  * [Conclusion][4]

## Configure Facebook developer account {#account}

  * Go to [Facebook for Developers][5]
  * Register your account if you don’t have one.
  * To register a new account, go to <https://developers.facebook.com/> and click on “Get Started” from top right corner.
  * After that, select your Facebook account and hit “Continue”.
  * Then from popup window, click on “Developer” button.

{{< figure align=center src="images/Mautic-Facebook-Integration-Register-Developer-Account-1024x582.png" alt="Mautic - Facebook Integration - Register Developer Account">}}  

## Configure Facebook developer’s app {#app}

  * Click on “Create First App”

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Create-First-APP.png" alt="Mautic – Facebook Integration - Create First APP">}}  

  * Click on “Manage Business Integrations” and hit “Continue”.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Choose-Purpose.png" alt="Mautic – Facebook Integration - Choose Purpose">}}  

  * In next window, enter app name and select App Purpose. Click on “Create App” button.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Fill-Form-to-Create-App.png" alt="Mautic – Facebook Integration - Fill Form to Create App">}}  

  * Next step is to setup Facebook Login. From Products page, click on “Set up” button under “Facebook Login” box.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-SetUp-FB-Login-1024x563.png" alt="Mautic – Facebook Integration - SetUp FB Login">}}  

  * From left menu, click on “settings” under Products -> Facebook Login.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Login-1024x621.png" alt="Mautic – Facebook Integration - Configure FB Login">}}  

  * Enter your Mautic Website URL. Set “Client OAuth Login” and “Web OAuth Login” to “Yes”.
  * Now go to Settings -> Basic Settings. From bottom of page, click “+ Add Platform” button. After that a popup window will open. Enter your website URL and save the changes.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Add-Website-as-Platform-1024x179.png" alt="Mautic – Facebook Integration - Add Website as Platform">}}  

## Mautic Plugin Configuration {#configuration}

  * Go to Mautic dashboard.
  * Then move to “Settings” from top right corner.
  * Click on “Plugins”.
  * After that, open “Facebook” plugin settings.
  * Then enter client id and client secret. Get these keys from Facebook developers app that you just created following above steps.

{{< figure align=center src="images/Mautic-–-Facebook-Integration-Configure-FB-Plugin-on-Mautic.png" alt="Mautic – Facebook Integration - Configure FB Plugin on Mautic">}}  

  * Hit “Authorize App” button.
  * After that, a new Facebook authorization window will open. Follow the prompts to complete app authorization. 
  * After successful authorization, move to “Contact Mapping” tab from Mautic’s Facebook plugin.
  * Here you can map your contact fields to Facebook fields.
  * Finally, publish the settings and you are good to go.

## Conclusion {#conclusion}

Mautic – Facebook integration can help synchronize your Facebook leads into Mautic system without any difficulty. In Mautic app, you can add all these leads into a segment. You can run email marketing campaigns on them. This can really help your business to grow, market and sell products/services to a much bigger target audience. 

## Explore

To learn more about Mautic and FaceBook, please visit:

  * [Mautic | Open Source Content Marketing Technology Platform][6]
  * [How to Setup Mautic Campaigns Using Campaign Builder][7]
  * [Drupal Mautic Integration To Automate Lead Nurturing][8]
  * [Marketing Automation with Mautic and WooCommerce Integration][9]
  * [Integrate Mautic & Joomla For Digital Marketing Automation][10]

 [1]: #account
 [2]: #app
 [3]: #configuration
 [4]: #conclusion
 [5]: https://developers.facebook.com/docs/apps#register
 [6]: https://products.containerize.com/marketing-automation/mautic
 [7]: https://blog.containerize.com/2020/11/27/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
 [8]: https://blog.containerize.com/2020/10/14/mautic-and-drupal-integration-to-automate-lead-nurturing/
 [9]: https://blog.containerize.com/2020/10/12/marketing-automation-using-mautic-and-wordpress-woocommerce/
 [10]: https://blog.containerize.com/2020/10/09/integrate-mautic-with-joomla-for-marketing-automation/