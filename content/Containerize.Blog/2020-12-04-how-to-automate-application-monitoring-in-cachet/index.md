---
title: How To Automate Web Application Monitoring In Cachet
seoTitle: How To Automate Web Application Monitoring In Cachet
description: Cachet helps to monitor all your services and instantly notify subscribers. This article is about integrating third-party plugin to automate monitoring.
date: Fri, 04 Dec 2020 19:42:42 +0000
author: Masood Anwer
summary: Cachet status page enables businesses to get instant notifications about service downtime. We will learn how to automate web application monitoring in Cachet.
url: /status-page/how-to-automate-application-monitoring-in-cachet/

categories: ['Status Page']

---
## Cachet status page enables businesses to get instant notifications about service downtime. We will learn how to automate web application monitoring in Cachet.

{{< figure align=center src="images/cachet-monitor.png" alt="Web Application Monitoring">}}  

Monitoring of applications and services is a very important part of online business. Your website runs 24X7 and you can get it wrong at any moment. You can not know either site is working or not until you visit it. Moreover, customers will have no information about the issue. They may contact your support team for service downtime. Further, this could lead to your customers becoming disappointed. However, you can reduce service downtime by configuring status page system. The status page system will monitor all your services around the clock and send notifications to your team and customers immediately. This will allow you to take quick steps to fix the problem and the clients will keep updated on the progress. In this blog post, you will get learn how to integrate third-party library with **Cachet** for **automate monitoring**.

  * [Requirements][1]
  * [Setup Monitoring Plugin][2]
  * [Creating Linux Service][3]
  * [Conclusion][4]

## Requirements {#Requirements}

  * Install latest version of the Cachet.
  * Familiar with the Linux services.

## Setup Monitoring Plugin {#Plugin}

The following are steps to install and configure the plugin for monitoring on Ubuntu.

  * Download binary from [release page][5]. 
  * Rename the file to cachet-monitor.
  * Make the file executable with the command.


```
sudo chmod +x cachet-monitor
```


  * Put the executable in a PATH directory, so you can access it directly via terminal. So, I suggest you move under **/usr/local/bin**.
  * Create a config.json file by running the following command. 


```
sudo nano config.json
```


  * Copy the below code into it and save the file.


```
{
  "api": {
    "url": "https://demo.cachethq.io/api/v1",
    "token": "9yMHsdioQosnyVK4iCVR",
    "insecure": false
  },
  "date_format": "02/01/2006 15:04:05 MST",
  "monitors": [
    {
      "name": "google",
      "target": "https://google.com",
      "strict": true,
      "method": "POST",
      "component_id": 1,
      "metric_id": 4,
      "template": {
        "investigating": {
          "subject": "{{ .Monitor.Name }} - {{ .SystemName }}",
          "message": "{{ .Monitor.Name }} check **failed** (server time: {{ .now }})\n\n{{ .FailReason }}"
        },
        "fixed": {
          "subject": "I HAVE BEEN FIXED"
        }
      },
      "interval": 1,
      "timeout": 1,
      "threshold": 80,
      "expected_status_code": 200
    }
  ]
}
```


  * Now, test your configuration with this command.


```
cachet-monitor -c config.json
```


  * If everything works well, move to the next section and create a Linux service.

## Creating Linux Service {#Service}

The following are steps to create and start a Linux service to automate the monitoring process.

  * Create a service **cachet-monitor.service** file. 


```
sudo nano cachet-monitor.service
```


  * Copy the below code into it and save the file.


```
[Unit]
Description=Cachet Monitor
After=syslog.target
After=network.target

[Service]
Type=simple
User=root
Group=root
WorkingDirectory=/usr/local/sbin
ExecStart=cachet-monitor -c /root/config.json
Restart=always
Environment=USER=root HOME=/root

[Install]
WantedBy=multi-user.target
```


  * Update systemd configuration by running the command. 


```
sudo systemctl daemon-reload
```


  * Enable cachet-monitor service by running the command, so it can load on system startup. 


```
sudo systemctl enable cachet-monitor.service
```


## Conclusion {#Conclusion}

Cachet a is free and **open source status page** system. However, it does not provide out of the box feature for **web application monitoring**. Instead, it has a powerful Rest API that can be used to perform actions such as incidents, components, groups, and many more. In this article, we have used the third-party plugin to automate application monitoring in Cachet. Above all, you can develop your own plugin or use any other existing plugin to do the job.

Further, [containerize.com][6] is on the way to enhance the stack of open source products in multiple languages and frameworks. For regular updates, please stay tuned to [Status Page][7] category for more interesting articles.

## Explore

You may find the following links relevant:

  * [Best Open Source Status Page Systems][8]
  * [Cachet – Free And Open Source Status Page Software][9]
  * [Top 5 Open Source Status Page Software for 2020][10]

 [1]: #Requirements
 [2]: #Plugin
 [3]: #Service
 [4]: #Conclusion
 [5]: https://github.com/CastawayLabs/cachet-monitor/releases
 [6]: https://www.containerize.com/
 [7]: https://blog.containerize.com/category/status-page
 [8]: https://products.containerize.com/status
 [9]: https://products.containerize.com/status/cachet
 [10]: https://blog.containerize.com/2020/11/20/top-5-open-source-status-page-software-for-2020/