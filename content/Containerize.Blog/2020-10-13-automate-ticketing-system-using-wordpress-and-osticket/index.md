---
title: Automate ticketing system using WordPress and osTicket
seoTitle: Automate ticketing system using WordPress and osTicket
description: osTicket-WordPress integration provides a way for customers to generate support tickets from WordPress site and manage them from osTicket dashboard.
date: Tue, 13 Oct 2020 07:58:41 +0000
author: bilalahmed
summary: Automate the helpdesk process with seamless WordPress and osTicket integration. Transform customers’ inquires through web-based forms into support tickets.
url: /blogging/automate-ticketing-system-using-wordpress-and-osticket/
aliases: 
    -  /2020/10/13/automate-ticketing-system-using-wordpress-and-osticket/
categories: ['Blogging', 'Help Desk']

---
## Automate the helpdesk process with seamless WordPress and osTicket integration. Transform customers’ inquires through web-based forms into support tickets.

{{< figure align=center src="images/integrate-osticket-with-wordpress-banner-1024x536.png" alt="OsTicket-Wordpress Integration to Automate Ticketing System">}}  

Your customers can have queries regarding your products/services. They will send their queries through different forms on your WordPress site. osTicket-Wordpress integration helps to convert those queries into tickets. It sends out data via API to osTicket helpdesk system.

osTicket is an open-source and free Helpdesk ticketing system. Customers can create tickets regarding their queries on osTicket. This helpdesk system makes it very easy for any organization to manage the queries coming from their customers. Admin can create departments and teams, and assign tickets to different agents according to the nature of tickets created. This free open-source system will keep track of the issues. It allows both customers and agents to comment on the ticket to discuss the progress. We will cover following sections in this blog post:

  * [Integration Process][1]
  * [WordPress Plugin Installation][2]
  * [Authentication Procedure][3]
  * [Conclusion][4]

## Integration Process: {#integration}

osTicket and WordPress Integration requires a contact form on WordPress site with following fields

  1. Help Topic
  2. Email
  3. Full Name
  4. Subject
  5. Message

Contact form must send emails, because this plugin hooks the wp_mail function to get the forms’ data.

## WordPress Plugin Installation: {#wordpress}

  1. Go to admin dashboard of your WordPress site.
  2. Next go to plugins section.
  3. Then install this [plugin][5].
  4. After that activate the plugin.
  5. And go to “Setting” -> “Osticket Connector”.
  6. Then enter URL of your OsTicket site i.e [http://your.domain/api/tickets.json][6]
  7. Enter API key created from OsTicket admin panel (Explained in next section).
  8. In the end fill out all the fields to map data from your contact form to OsTicket’s ticket fields.

{{< figure align=center src="images/wordpress-osticket-1024x776.png" alt="OsTicket-Wordpress Integration to Automate Ticketing System">}}  

## Authentication Procedure: {#auth}

API authentication is performed via API keys configured within the admin panel of osTicket. API keys are generated and linked to a source IP address that is verified against the source IP of HTTP API requests. To create API key

  1. Go to Admin panel of OsTicket.
  2. Click on “Manage”.
  3. Go to sub menu “Api Keys”.
  4. Click on “Add New API Key”.
  5. Set “Status” to active.
  6. Check the checkbox “Can Create Ticket”.
  7. Enter ip address of your WordPress site and hit “Add Key”.

{{< figure align=center src="images/osticket-1024x729.png" alt="OsTicket-Wordpress Integration to Automate Ticketing System">}}  

## Conclusion: {#conclusion}

osTicket-Wordpress integration will automate the ticketing process. Hence it will make life easier for the support team. Inquiries on the WordPress website will automatically convert into support tickets on osTicket. So that the support team can manage all the customers’ queries more easily and efficiently. Support agents will be notified by email notifications. Therefore, agents can resolve customers’ queries on time. The comment section on osTicket helps both customers and support agents to communicate effectively and timely. It also makes it easier for managers to keep track of the progress for each ticket.

## Explore:

To learn more about osTicket and WordPress please check out these pages:

  * [OsTicket – Free Open Source Helpdesk Ticketing System][7]
  * [WordPress – Free Open Source and most widely used CMS and Blogging Tool][8]
  * [How To Set Up Online Help Desk Software Using osTicket][9]

 [1]: #integration
 [2]: #wordpress
 [3]: #auth
 [4]: #conclusion
 [5]: https://href.li/?https://wordpress.org/plugins/scand-osticket-connector/
 [6]: https://href.li/?http://your.domain/api/tickets.json
 [7]: https://href.li/?https://products.containerize.com/helpdesk/osticket
 [8]: https://href.li/?https://products.containerize.com/blogging/wordpress
 [9]: https://blog.containerize.com/2020/12/25/how-to-set-up-help-desk-system-using-osticket/