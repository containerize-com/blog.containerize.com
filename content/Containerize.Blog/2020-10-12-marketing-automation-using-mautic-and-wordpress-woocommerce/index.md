---
title: Marketing Automation with Mautic and WooCommerce Integration
seoTitle: Marketing Automation with Mautic and WooCommerce Integration
description: Mautic and WooCommerce Integration allow sending contact information from WordPress sites to Mautic. That helps to market products through the Mautic app.
date: Mon, 12 Oct 2020 06:09:14 +0000
author: bilalahmed
summary: "Boast sales using Mautic and WordPress WooCommerce together. Automate marketing process by fetching customers' data from WordPress to Mautic."
url: /blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/

categories: ['Blogging', 'Marketing Automation']

---
## Boast sales using Mautic and WordPress WooCommerce together. Automate marketing process by fetching customers’ data from WordPress to Mautic.

{{< figure align=center src="images/banner-mauticWP-1200x628-1-1024x536.png" alt="Marketing Automation Using Mautic-WooCommerce Integration">}}  

## Overview:

Mautic-WooCommerce integration provides an easy way to get all the contacts in Mautic app. Then using these contacts, you can create marketing campaigns according to your requirements. Mautic is a great marketing tool which gives you full control on your marketing campaigns.

Mautic is an open-source and free marketing automation solution. It is used to create marketing campaigns, segments, forms, reports and much more.

WooCommerce is an open-source e-commerce plugin for WordPress. It is the mostly used E-commerce solution around the world at this point. There are hundreds of add-ons available for WooCommerce which can be used according to your needs.

There is a plugin available for Mautic and WordPress that provides marketing automation solution. Please follow these steps to integrate WooCommerce with Mautic using the plugin [Integration with Mautic for WooCommerce – Open Source Marketing Automation.][1]

This blog will cover following sections:

  * [WordPress plugin configuration][2]
  * [Mautic configuration][3]
  * [Final thoughts][4]

## WordPress Plugin Configuration {#wordpress}

  1. Go to plugins.
  2. Click on “Add New”.
  3. Search for “**Integration with Mautic for WooCommerce**“.
  4. Once you find the plugin, click on “Install Now”.
  5. After installation, click on “Activate”.
  6. Then go to WooCommerce -> Mautic -> Connect tab.
  7. Fill out the form with following data:
      * Base URL.
      * Client ID.
      * Secret ID.
  8. All those fields will come after configuring on Mautic app, which is explained in next section.

{{< figure align=center src="images/woocommerce-1024x665.png" alt="Mautic and WordPress Integration">}}  

## Mautic configuration: {#mautic}

  1. From your Mautic site, go to Settings.
  2. Go to Configurations.
  3. Enable API from API Settings.
  4. Go to API Credentials.
  5. Click “New”, enter any name you like and the full URL of your WordPress site i.e [http://yourWordpressSite.com/wp-admin/admin.php][5]
  6. Hit Save and Close.
  7. It will create public and private keys.
  8. Go to your WordPress site and find the Mautic plugin you installed earlier.
  9. Enter public and secret keys which you created from your Mautic site.
 10. Select either OAuth1 or OAuth2 (the same as you selected in Mautic) and set Send Registered Users to Yes.
 11. Save and publish the plugin.
 12. After that you’ll be able to authorize your WordPress site.
 13. WordPress will re-direct to Mautic instance to authorization.
 14. Click “Authorize” and that’s it.
 15. You will start getting contacts into your Mautic site.

{{< figure align=center src="images/mautic-1024x622.png" alt="Mautic and WordPress Integration steps">}}  

## Final Thoughts: {#final}

Mautic-WooCommerce integration together can help you achieve your marketing goals. This integration is one of the best solution for ecommerce marketing automation. With WordPress you can easily get a lot of customers and then with Mautic you can create unlimited campaigns to target those customers and keep them updated regarding your products/services, which will definitely boast the sales.

## Explore:

You may find following links relevant:

  * [Wodpress][6]
  * [Mautic][7]
  * [How To Setup Mautic – Facebook Integration][8]
  * [Drupal Mautic Integration To Automate Lead Nurturing][9]
  * [Marketing Automation using Mautic and WordPress WooCommerce][10]
  * [How to Setup Marketing Campaigns in Mautic][11]

 [1]: https://href.li/?https://wordpress.org/plugins/enhanced-woocommerce-mautic-integration/
 [2]: #wordpress
 [3]: #mautic
 [4]: #final
 [5]: https://href.li/?http://yourWordpressSite.com/wp-admin/admin.php
 [6]: https://products.containerize.com/blogging/wordpress
 [7]: https://products.containerize.com/marketing-automation/mautic
 [8]: https://blog.containerize.com/marketing-automation/how-to-setup-mautic-facebook-integration/

 [9]: https://blog.containerize.com/content-management/drupal-tutorial-automate-lead-growth-with-drupal-mautic/
 [10]: https://blog.containerize.com/blogging/marketing-automation-using-mautic-and-wordpress-woocommerce/

 [11]: https://blog.containerize.com/marketing-automation/how-to-setup-marketing-campaigns-using-mautic-campaign-builder/
