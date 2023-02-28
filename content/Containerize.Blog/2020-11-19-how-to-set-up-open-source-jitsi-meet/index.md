---
title: A Step By Step Guide To Set up Open Source Jitsi Meet
seoTitle: A Step By Step Guide To Set up Open Source Jitsi Meet
description: Learn how to set up Jitsi Meet. It is an open source video conferencing software designed to meet remote communication needs and offers powerful features
date: Thu, 19 Nov 2020 09:32:35 +0000
author: muhammadmustafa
summary: "Jitsi Meet brings remote people together to conduct effective meetings. Let's learn how to set up this video conferencing software and explore its features"
url: /video-conferencing-software/how-to-set-up-open-source-jitsi-meet/

categories: ['Video Conferencing Software']

---
## Jitsi Meet brings remote people together to conduct effective meetings. Let’s learn how to set up this video conferencing software and explore its features

{{< figure align=center src="images/jitsi-bannerF.png" alt="video conferencing software">}}  

## Overview

We recently published a [blog post][1] that talks about the impact of [video conferencing software][2] on the corporate sector. However, in this article, we will cover the following points.

  * [A brief introduction of Jitsi Meet][3] 
  * [How to set up Jitsi Meet?][4]
  * [Jitsi Meet features exploration][5] 
  * [Conclusion][6] 

## A brief introduction of Jitsi Meet {#intro}

[Jitsi Meet][7] is a completely free open source, secure and scalable video collaboration software. It provides several popular features such as multiparty video conferencing with full encryption, support for Etherpad, and video/audio recording. This WebRTC compatible software allows you to invite as many users as you want into a video meeting. 

The rise of virtual meetings started in recent times and people believe that communication through video/audio calls is more effective and collaborative. Above all, this category of software not only works on laptops/desktops but also enables participants to attend face to face secured video meetings through their mobile phone. 

## How to set up Jitsi Meet? {#setup}

In this section, we will get into the installation process of Jitsi Meet. First, make sure you have installed the following pre-requisite.

  * [Docker][8]

Once Docker is installed, download the zip file of the source code from this [link][9].

Open the terminal and run the following command 

`cd docker-jitsi-meet`

After that, run the following command to create a `.env`

`cp env.example .env`

Now, run the following command to create the required directories.

`mkdir -p ~/.jitsi-meet-cfg/{web/letsencrypt,transcripts,prosody/config,prosody/prosody-plugins-custom,jicofo,jvb,jigasi,jibri}` 

Finally, run this command to spin up the Docker image and access the application at this URL in the browser.

`docker-compose up -d`

## Jitsi Meet features exploration {#features}

This free video chat software offers many rich features. This is the home page that will be shown first.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.15.55_-1024x585.jpg" alt="video conferencing ">}}  

Type the caption of the meeting and hit “Go” and you will land to the following video stream window.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.30.25_-1024x585.jpg" alt="open source software  ">}}  

You can invite people into the meeting by sharing the link shown in the popup window. Moreover, you can embed the video stream anywhere by getting the code. 

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.10_-1024x584.jpg" alt="open source software  ">}}  

It gives you option to share your screen with other participants.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.28_.jpg" alt="Video chat ">}}  

From the top right corner, you can see the details of your video connection.

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.18.51_.jpg" alt="Free Video chat">}}  

Jitsi Meet offers integrated chat with emojis. 

{{< figure align=center src="images/Screenshot-2020-11-14-at-19.19.57_.jpg" alt="Video meeting software ">}}  

## Conclusion {#con}

In this article, we went through a stunning remote communication software and its installation process. Moreover, it is high time to opt for the best solutions to sync the business needs with evolving technologies. In the end, [containerize.com][10] has been working to extend the list of video conferencing software. Therefore, please stay connected with the [video conferencing software][2] category for regular updates.

## Relevant Product Pages

You may find the following links relevant:

  * [Jitsi Meet][7]
  * [BigBlueButton][11]
  * [OpenVidu][12]
  * [Element][13]
  * [Wire][14]

 [1]: https://blog.containerize.com/video-conferencing-software/video-conferencing-apps-how-it-benefits-your-business/
 [2]: https://products.containerize.com/video-conferencing/
 [3]: #intro
 [4]: #setup
 [5]: #features
 [6]: #con
 [7]: https://products.containerize.com/video-conferencing/jitsi
 [8]: https://www.docker.com/products/docker-desktop
 [9]: https://github.com/jitsi/docker-jitsi-meet/releases/tag/stable-5142
 [10]: https://www.containerize.com/
 [11]: https://products.containerize.com/video-conferencing/bigbluebutton
 [12]: https://products.containerize.com/video-conferencing/openvidu
 [13]: https://products.containerize.com/video-conferencing/element
 [14]: https://products.containerize.com/video-conferencing/wire