---
title: Synfig Tutorial | An Open Source 2D Animation Software
seoTitle: Synfig Tutorial | An Open Source 2D Animation Software
description: Creating 2D animations with Synfig is a free, seamless, and fast process. In this guide, you will find all the information you need to get started.
date: Tue, 29 Jun 2021 08:08:53 +0000
author: yasir saeed
summary: Creating 2D animations with Synfig is a free, seamless, and fast process. In this guide, you will find all the information you need to get started.
url: /animation-software/synfig-tutorial-an-open-source-2d-animation-software/
aliases: 
    -  /2021/06/29/synfig-tutorial-an-open-source-2d-animation-software/
categories: ['Animation Software']

---
## Creating 2D animations with Synfig is a free, seamless, and fast process. In this guide, you will find all the information you need to get started.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}  

  * [What is Synfig?][1]
  * [How to Install Synfig?][2]
  * [Application Interface Overview][3]
  * [How to Create a Basic Animation with Synfig?][4]
  * [Conclusion][5]

## What is Synfig? {#what}

Synfig is one of the best 2D animation software that has been designed for solo artists or small teams to manage their animation workflows and projects. As an open source animation software, Synfig employs a “tweenless” animation system that not only cuts the time that it takes for an animation to process, but it also gives animators the ability to add drawing frame wise.

When it comes to using Synfig, it really is a light, fast processing animation software that can be a great addition to the illustrating pipeline of any artist working solo or in a small team. Furthermore, the Synfig community is an active place to find not only tutorials on using the software application, but resources to help you find solutions in case you run into a roadblock.

You can easily use Synfig on multiple operating systems including Windows, Mac OS, and Linux. Please keep in mind that while using Synfig, your system should have:

  * At least 2GB RAM or more
  * A Dual Core CPU at 2 GHZ or more

Synfig has been used for animating quite a lot of popular projects including Morevna: Demo project, The Deadline by Morevna, The Polar Detective Prologue by Cyan Los and many other commercial projects. This goes to show the scope of Synyfig as it can be used for both commercial and personal projects as well. Whether you’re new to the animation world or are advanced in your career, Synfig can make a nice edition to your skillset and help you develop a tight grasp on creating amazing 2D animations. If you are looking to find out more about other animation software programs then you can check out other guides and tutorials that we have made for you.

## How to Install Synfig? {#how-to-install}

In order to install Synfig 2D animation software on a Linux device, you can directly download the installer file from Synfig’s main homepage. You will get an option to download the 32-bit or 64-bit image file, choose according to your system.

Once downloaded, open your command line and type in the following commands:


```
sudo apt-get update
```



```
sudo apt-get install synfigstudio
```


Now you must be able to access Synfig studio easily.

## Application Interface Overview {#application-interface}

As we have mentioned above, Synfig studio is an open source animation software that allows users to create seamless, quick processing, tweenless 2D animations. In order to understand the tools and features, here is a quick overview of the Synfig studio when you first start using it.

{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-1-1024x649.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}  

  * **Canvas:** The Canvas is the grey checkered pattern in the middle where you can sketch out your animation and apply effects, layers, frames, and edits. Here you will find the canvas surrounded by buttons on the right to **lock/unlock** keyframes, switch to **animation mode,** a little black triangle on the upper left corner called the **caret** , and the timeline in case you have defined a non-zero animation.
  * **Tools:** the toolbox is one of the major components of Synfig where you will find all the tools you will need to manipulate objects. From brush sizes, colors, applying gradients, erasing animations, applying texts and more, you will find all that you need to create animations and edit them in the Tools box panel in the upper left side.
  * **Time Track Panel:** when creating an animation, timing is key, and with the time track panel you are able to adjust the keyframes, and every waypoint (the graphic symbols that appear on the time track panel to indicate the adjustment of any parameter) that is involved.
  * **Parameter panel:** here you will find all the detailed options and settings for active elements on your animation like color, width, opacity, and more. It is one of the core components of Synfig.

Now lets move onto creating an animation with Synfig Studios.

## How to Create a Basic Animation with Synfig? {#create-animation}

In this portion of the post we’ll give you a step by step tutorial on how to create a basic animation with Synfig Studio. Let’s begin.

<ol type="1">
  <li>
    To begin with, it is recommended you start off with resetting the configurations of your Synfig studio application, by going to Workspace > Default. This will ensure that your installation of Synfig Studio has no preset configurations or settings.{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-02.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}
  </li>
  <li>
    Lets start by creating a circle, by going to the <strong>toolbox </strong>and selecting a <strong>circle.</strong> {{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-03.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}
  </li>
  <li>
    You will find all the options in the <strong>Tool Options Panel </strong>for the <strong>Circle Creation</strong> options. Now press and drag the mouse on the Canvas window to create a circle.{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-04.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}
  </li>
  <li>
    You will find that on the main canvas a circle has been drawn, and a new layer has been created as well. Every object drawn on the canvas is a new layer that is added each time a new addition is formed. {{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-05.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}
  </li>
  <li>
    Repeat the same steps to create as many objects or sketches you want.{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-06.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}
  </li>
  <li>
    One way to edit the layers of your animation is by clicking on the colored handles on the objects you’ve created.{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-07.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}
  </li>
  <li>
    Similarly, if you want to change the parameter of any object, simply click on the layer, go to the parameter panel on the bottom left corner, and double the click the parameter you want to change. In this case we’re changing the feather parameter of the circle to 15. {{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-08.png" alt="Synfig Tutorial An Open Source 2D Animation Software">}}
  </li>
  <li>
    On the bottom right corner, you also have options to delete, edit or switch up any layer.{{< figure align=center src="images/Synfig-Tutorial-An-Open-Source-2D-Animation-Software-09.png" alt="Synfig Tutorial  An Open Source 2D Animation Software">}}
  </li>
</ol>

And there you have a basic tutorial on how to create an animation in Synfig Studio.

## Conclusion {#conclusion}

Using Synfig 2D animation software is pretty straightforward and easy if you already use animation software for your work. Even if you are new to the animation industry, understanding the interface is an easy task. We hope you found this tutorial helpful and can create 2D animations for different academic, commercial or personal projects to create a portfolio.

_What are your most favorite open source animation software?. Do you have any questions about animation software?, Please_ [get in touch][6].

## Explore

You may find following links relevant:

  * [Best Open Source Animation Software][7]
  * [Synfig | Free and Open Source Vector Based 2D Animation Suite][8]
  * [How To Create Animations With Pencil2D Animation Software][9]
  * [Beginner’s Guide To Start Free Image Editing Using Digikam][10]

 [1]: #what
 [2]: #how-to-install
 [3]: #application-interfae
 [4]: #create-animation
 [5]: #conclusion
 [6]: mailto:yasir.saeed@aspose.com
 [7]: https://products.containerize.com/animation-software/
 [8]: https://products.containerize.com/animation-software/synfig/
 [9]: https://blog.containerize.com/2021/06/21/how-to-create-animations-with-pencil2d-animation-software/
 [10]: https://blog.containerize.com/2021/05/28/beginners-guide-to-start-free-image-editing-using-digikam/