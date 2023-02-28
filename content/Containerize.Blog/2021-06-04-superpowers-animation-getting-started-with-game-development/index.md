---
title: Getting Started With Game Development Using Superpowers
seoTitle: Getting Started With Game Development Using Superpowers
description: Superpowers is an open source 3D game maker with real time collaboration. This tutorial is about getting started with game development using Superpowers.
date: Fri, 04 Jun 2021 11:36:14 +0000
author: muhammadmustafa
summary: The behavior and movement of game objects are controlled by animations. In this game development tutorial, we will learn how to animate game characters.
url: /game-development-software/superpowers-animation-getting-started-with-game-development/

categories: ['Game Development Software']

---
## The behavior and movement of game objects are controlled by animations. In this game development tutorial, we will learn how to animate game characters.

{{< figure align=center src="images/super.png" alt="Getting Started With Game Development">}}  

## **Overview**

In our tutorial series of open source game development, we have published blog posts on some popular topics such as [Game Development Tutorial | Player Movement In GDevelop][1], [HTML5 Game Development Tutorial For Video Game Programmers][2], [How Global Gaming Industry Leveraging Open Source Software][3], and [GDevelop Tutorial For Beginners To Start Game Development][4]. This tutorial article is about getting started with game development using free open source [Superpowers][5] by covering the following points. 

  * **[Types Of Game Animations][6]** 
  * **[How To Create Sprites?][7]**
  * **[Working With Scenes][8]** 
  * **[Launching The Game On Localhost][9]**
  * **[Conclusion][10]** 

There are many open source game development software for beginners available that come with self-hosting capabilities. However, [Superpowers][5] is a cross-platform 2d & 3D game creation software. It provides built-in libraries and game examples that make game development easy for game developers. This free game design app is written in TypeScript and all the documentation is available at [Github][11] regarding development and deployment. In this blog post, we will explore Superpowers regarding their usage. 

## Types Of Game Animations {#types}

Animations are a vital part of video games. Characters in the games must respond to the user’s actions, animation should be smooth and abrupt. It is about managing multiple frames and animators refine those frames to produce moving effects. Moreover, there are 2D & 3D animations where objects appear to move through three-dimensional space. Game developers and graphic designers create 3D models. Animations depend on the nature of the game and the most common types are as follows.

**Walk Animation:** Walk animation is about the creation of a walking process in which characters animate each step and give walking illustrations. 

**Idle Animation:** This is a very important type of animation in which the character does not do anything because the user does not press any controller. 

**Run Animation**: Run animation is part of every game in which the game object performs the run cycle. This type is the most common type and requires more attention from the developer.

**Fighting Animation**: In fighting games, multiple game characters fight with one another. 

**Jump Animation**: This type of animation requires better skills and expertise. Character compresses and releases the body to perform jump illustration. 

## How To Create Sprites? {#sprites}

This section of the game making guide lets users create projects and start creating sprites for the game. Sprites are non-static images or graphics that are not only used in games but also part of web design. These are normally drawn over a background that is being refreshed constantly. 

Before moving on, make sure you have set up Superpowers on your machine. You can follow this link [HTML5 Game Development Tutorial For Video Game Programmers][2] to set up this free game creation platform.

First, open the application into the browser, and let’s create a new empty project. as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.32.59-1024x576.png" alt="Getting Started With Game Development">}}  

You will land in the project space after creating the new empty project. There are menu options at the left-hand side panel. So, click on the “+” button to open the asset dialog box. Select the Sprite option and hit create.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.35.50-1024x576.png" alt="game making guide">}}  

Now, upload the image on which we will add behavior. You can do it by clicking the button placed on the top right corner. This panel is about the object’s configuration.

Next, you can set the grid size as per your choice. There are two portions of the canvas. The upper part shows the full sheet where the lower part shows the selected part on which we are intended to apply animation. You can do it by pressing the button “Setup” at the right-hand side panel as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-06-04-at-12.47.52-1-1024x545.png" alt="game development tutorial">}}  

After that, let’s create animations. We can do that by clicking the “New” button in the animation tab. You can see the image below. 

{{< figure align=center src="images/Screenshot-2021-06-04-at-13.12.21-1024x578.png" alt="game development software for beginners">}}  

## Working With Scenes {#scenes}

In this section, we will add a scene to our game. For that, again open the assets dialog box and select “Scene” and press the create button. Now create an actor by clicking the star button available on the top right corner as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.07.34-1024x580.png" alt="how to make a game on scratch for beginners">}}  

After that, create a new component by clicking the “New Component” button placed on the right-hand side panel. Select “Sprite Renderer” and hit create. Then, drag the created Sprite from the left-hand side panel and drop it under the Sprite Renderer section. Moreover, create another actor named “Camera” and likewise, create a new component named camera. 

You can change the camera mode so change it to the “Orthographic” mode as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-06-04-at-14.29.01-1024x580.png" alt="getting started with game development,">}}  

On the bottom left corner, navigate to the settings option and open it. Under the “Sprite” and “Tile Map” sections, insert 16 against “pixel per unit”. Then in the “default camera mode”, select 2D under the “Scene” section. Further, under the “Tile Map” section, Default width 36, Default height 28, and Tile set grid size 16. There is no need to save it, rather everything is on autosave.

## Launching The Game On Localhost {#local}

So, we are close to launching the Superpowers animation of our first game. However, again go to the settings tab and drag the scene from the left-hand side panel and drop it against “Startup Scene” as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.29.34-1024x578.png" alt="how to make a game on scratch for beginners">}}  

Now, click “Player” and under the “Sprite renderer” component, select animation against the “Animation” attribute. Finally, launch the application by clicking the button placed at the top left corner. The new tab will show the moving objects on the screen.

{{< figure align=center src="images/Screenshot-2021-06-04-at-15.42.14-1024x576.png" alt="getting started with game development">}}  

## Conclusion {#Conclusion}

This is the end of the tutorial in which we learned how to make a game on scratch for beginners. Therefore, getting started with game development becomes easy when there is detailed documentation of game development software available. Finally, [**containerize.com**][12] is in a consistent process of writing articles on further open source topics and products. Therefore, please stay in touch with this [Game Development Software][13] category for regular updates.

## Explore

  * [GDevelop][14]
  * [Godot][15]
  * [Superpowers][5]
  * [Cocos Creator][16]
  * [Panda3D][17]
  * [PlayCanvas][18]

 [1]: https://blog.containerize.com/2021/05/28/game-development-tutorial-player-movement-in-gdevelop/
 [2]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
 [3]: https://blog.containerize.com/2021/05/07/how-global-gaming-industry-leveraging-open-source-software/
 [4]: https://blog.containerize.com/2021/05/05/gdevelop-tutorial-for-beginners-to-start-game-development/
 [5]: https://products.containerize.com/game-development-software/superpowers/
 [6]: #types
 [7]: #sprites
 [8]: #scenes
 [9]: #local
 [10]: #Conclusion
 [11]: https://github.com/superpowers/superpowers-core
 [12]: https://www.containerize.com/
 [13]: https://products.containerize.com/game-development-software/
 [14]: https://products.containerize.com/game-development-software/gdevelop/
 [15]: https://products.containerize.com/game-development-software/godot/
 [16]: https://products.containerize.com/game-development-software/cocos-creator/
 [17]: https://products.containerize.com/game-development-software/panda3d/
 [18]: https://products.containerize.com/game-development-software/playcanvas/