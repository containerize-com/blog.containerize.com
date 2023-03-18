---
title: How to create an AI-based FAQ Bot for your business using Botpress
seoTitle: How to create an AI-based FAQ Bot for your business using Botpress
description: "In this blog post, we'll learn how to automate your customer queries using an AI-based faq bot using Botpress on your website."
date: Fri, 01 Jan 2021 12:38:51 +0000
author: Assad Mahmood
summary: "Businesses need better customer support platforms to efficiently resolve their queries. In this tutorial, we'll learn how to create an AI-based FAQ bot using Botpress"
url: /how-to-create-an-ai-based-faq-bot-for-your-business-using-botpress/

categories: ['Live Chat']

---
## Businesses need better customer support platforms to efficiently resolve their queries. In this tutorial, we’ll learn how to create an AI-based FAQ bot using Botpress

{{< figure align=center src="images/botpress-banner.png" alt="FAQ Bot for your business using Botpress">}}  

FAQ automation consists of improving your client’s experience online by using Chatbots to answer frequently asked questions. With the advancements in artificial intelligence and machine learning, the demand for AI-based conversational chatbots has gained a lot of popularity and demand. And this is mostly because all the business wants to enhance their customer experience even when the business is offline. Conversational chatbots have made this possible for businesses to give their customers the always available high-touch support they want. The purpose of this blog post is to help you set up an AI-based FAQ bot using Botpress.

In this article, we’ll learn about the NLU module of the Botpress and how the Natural Language Understanding / Processing works and can help businesses to achieve high customer satisfaction level. Let’s get started!

  * **[What is Natural Language Processing][1]**
  * [**Determine your Use Case**][2]
  * [**Install Botpress**][3]
  * [**Create a new Bot**][4]
  * [**Train Your Q&A Bot**][5]
  * [**Conclusion**][6]

## What is Natural Language Processing {#nlu}

Natural language processing (NLP) is a branch of artificial intelligence that helps computers understand, interpret, and manipulate human language. NLP helps computers communicate with humans in their own language. And, makes it possible for computers to read a text, hear speech, interpret it, measure sentiment.

The basic task of NLP includes tokenization and parsing, stemming, part-of-speech tagging, language detection, and identification of semantic relationships.

NLU is the module of Botpress which processes every incoming message and performs Intent Classification, Language Identification, Entity Extraction, and Slot Tagging.

## Determine Your Use Case {#case}

If you want to create a FAQ AI chatbot you need to have a use case for your business. For the sake of this tutorial, we want our users to ask any random question related to the Pricing of our product and our business timing. 

## Install Botpress {#install}

To install Botpress, head over to their [website][7], click on ‘Download Free’, and select your platform. For this tutorial, I’m using the Mac version. Once the download is complete you can extract the zip file and run the following command on your terminal by going into the right folder.


```
./bp
```


{{< figure align=center src="images/Screenshot-2021-01-01-at-4.43.39-PM.png" alt="botpress start">}}  

## Create a new Bot {#create}

Now, we want to actually create our first bot by click on **Create Bot** and then selecting **New Bot**. I’m going to call our bot the FAQ Bot, and then as a Bot Template, I will select **Empty Bot** before clicking on **Create bot**.

{{< figure align=center src="images/create-bot.gif" alt="create-new-bot">}}  

Now we will edit this bot in Botpress Studio Editor.

{{< figure align=center src="images/bot-press-edit-in-studio.gif" alt="botpress edit in studio">}}  

Now, In the Studio, you have a number of menus along the left sidebar. But for the sake of simplicity, we’ll just stick to the Q&A Section.

Click on the “Q&A” icon and add possible / frequently asked questions and their appropriate answers.

{{< figure align=center src="images/bot-press-q-and-a.gif" alt="botpress q&a">}}  

## Train your FAQ Bot {#train}

Once you are done now you’ll have to train your FAQ Bot by clicking on the “Train Chatbot” button at the bottom right corner of the Q&A section.

{{< figure align=center src="images/train-bot.gif" alt="botpress train bot">}}  

After the training is done you can test your FAQ bot by using the built-in Emulator tool.

{{< figure align=center src="images/test-faq-bot.gif" alt="test your faq bot">}}  

Now, that you have your FAQ bot ready you can deploy this bot on your website by following the [official embedding][8] guide of Botpress.

## Conclusion {#conclusion}

In this blog post, we learned and understand natural language processing. We also get our hands-on with the Bot creation process. We trained a simple FAQ bot that helps your customers to know about your business timings and payment plans. The purpose of the tutorial was to help beginners quickly get started with an AI-based FAQ bot using Botpress.

 [1]: #nlu
 [2]: #case
 [3]: #install
 [4]: #create
 [5]: #train
 [6]: #conclusion
 [7]: https://botpress.com/download
 [8]: https://botpress.com/docs/channels/web