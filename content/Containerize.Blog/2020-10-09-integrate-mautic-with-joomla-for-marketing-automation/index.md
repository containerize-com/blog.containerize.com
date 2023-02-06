---
title: 'Integrate Mautic & Joomla For Digital Marketing Automation'
seoTitle: 'Integrate Mautic & Joomla For Digital Marketing Automation'
description: Mautic and Joomla Integration can help your business with digital marketing automation. It helps to market products through Mautic campaigns.
date: Fri, 09 Oct 2020 15:16:25 +0000
author: bilalahmed
summary: Mautic and Joomla Integration can help your business with digital marketing automation. It helps to market products through online Mautic campaigns.
url: /content-management/integrate-mautic-with-joomla-for-marketing-automation/
categories: ['Content Management', 'Marketing Automation']

---
## Mautic and Joomla Integration can help your business with digital marketing automation. It helps to market products through online Mautic campaigns.

{{< figure align=center src="images/banner-mautic-1200x628-1-1024x536.png" alt="Mautic and Joomla Integration">}}  

## How This Integration Can Help Your Business:

Mautic and Joomla Integration will allow you to market your products/services in very easy but efficient way. Mautic a free open-source marketing solution gives you a great control over the marketing campaigns and its very simple to continue the drip campaign according to the situation. For example: It gives you the information that if the customer has read the email or visited your product pages. Using that information you can setup campaigns to decide whether to continue sending out next emails for that customer or not. This integration will help in digital marketing automation. This blog post will guide you with following sections:

  * [Overview][1]
  * [Joomla plugin installation][2]
  * [Mautic configuration][3]
  * [Conclusion][4]

## Overview: {#overview}

Mautic is an open-source marketing automation system. It is a free marketing software. You can use it to create unlimited campaigns to send out marketing emails to targeted customers.

Joomla is also a free open-source content management system for developing websites. It is very easy to setup your business websites on Joomla. It has thousands of extensions which can be used according to your requirements.

## Joomla Plugin Installation: {#plugin}

  * Download the [plugin][5].
  * Then go to extensions -> manage -> install.
  * Enter Mautic URL.
  * It will insert 1 px gif image loaded from your Mautic instance.
  * Embed forms in Joomla content using following code snippet: {mautic type=”form” ID}
  * Then you can create the form in you Mautic app and get the ID from URL.
  * Dynamic content can also be added using following code snippt: {mautic type=”content” slot=”slot_name”}Default content here.{/mautic}
  * slot_name is the identifier of the slot that you specified when adding a “Request dynamic content” decision to your campaign.

After installation you need to create and embed forms on your Joomla site. These forms will send out the contacts information over to Mautic. Once you are done configuring plugin on Joomla, next step will be to configure it on Mautic.

## Mautic configuration: {#mautic}

  * Go to your Mautic site, move to Settings.
  * Click on Configuration.
  * From API Settings, Enable API.
  * To connect Mautic with Joomla you must have SSL certificate on your sites.
  * Next you need to go to API Credentials.
  * If your website does NOT have an SSL (so you go to **http**://yourjoomlasite.com), select OAuth1.  If you DO have an SSL on your site (so you go to **https**://yourjoomlasite.com), select OAuth2.
  * Click New, provide a name (can be anything you want) and the full URL of your Joomla! site ([https://yourjoomlasite.com][6])
  * Click Save and Close.
  * Here you can get public and private keys.
  * Go to your Joomla site and find the Mautic plugin you installed earlier.
  * Enter public and secret keys which you created from your Mautic site.
  * Select either OAuth1 or OAuth2 (the same as you selected in Mautic) and set Send Registered Users to Yes.
  * Save and publish the plugin.
  * After that you’ll be able to authorize your Joomla site.
  * Joomla will re-direct to Mautic instance to authorization.
  * Click “Authorize” and that’s it.
  * You will start getting contacts into your Mautic site.

{{< figure align=center src="images/Mautic-and-Joomla-integration-1024x591.png" alt="Mautic and Joomla integration">}}  

## Conclusion: {#conclusion}

In this article we have discussed how Mautic and Joomla together can help in digital marketing automation. This open-source free marketing solution will allow you to group all the contacts coming from Joomla site and create marketing campaigns using them. Mautic allows you to create segments, so that you can run different campaigns on different segments according to your needs. Please check [Joomla][7] and [Mautic][8] blogs for detailed overview. 

## Explore:

You may find following links relevant:

  * [Joomla][7]
  * [Mautic][8]
  * [How To Setup Mautic – Facebook Integration][9]
  * [Drupal Mautic Integration To Automate Lead Nurturing][10]
  * [Marketing Automation using Mautic and WordPress WooCommerce][11]
  * [How to Setup Marketing Campaigns in Mautic][12]

 [1]: #overview
 [2]: #plugin
 [3]: #mautic
 [4]: #conclusion
 [5]: https://href.li/?https://extensions.joomla.org/extension/mautic/
 [6]: https://href.li/?https://yourjoomlasite.com
 [7]: https://products.containerize.com/content-management/joomla
 [8]: https://products.containerize.com/marketing-automation/mautic
 [9]: https://blog.containerize.com/2020/12/04/how-to-setup-mautic-facebook-integration/
 [10]: https://blog.containerize.com/2020/10/14/mautic-and-drupal-integration-to-automate-lead-nurturing/
 [11]: https://blog.containerize.com/2020/10/12/marketing-automation-using-mautic-and-wordpress-woocommerce/
 [12]: https://blog.containerize.com/2020/11/27/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/