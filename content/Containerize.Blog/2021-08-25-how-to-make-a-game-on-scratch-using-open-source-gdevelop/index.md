---
title: How To Make A Game On Scratch Using Open Source GDevelop
seoTitle: How To Make A Game On Scratch Using Open Source GDevelop
description: How to make a game from scratch? Gdevelop offers a logical UI filled with many components and behaviors to build video games for Web, Desktop, IOS, and Android.
date: Wed, 25 Aug 2021 11:20:52 +0000
author: muhammadmustafa
summary: This game development tutorial explains the basics of building a truck racing game. You can install it or use its online app to build an exciting video game.
url: /how-to-make-a-game-on-scratch-using-open-source-gdevelop/

categories: ['Game Development Software']

---
## This game development tutorial explains the basics of building a truck racing game. You can install it or use its online app to build an exciting video game.

{{< figure align=center src="images/gdevelop-game.png" alt="How to make a game on scratch">}}  

## **Overview**

In the near past, we published many blog posts on open source free game development software such as [Top 5 Free Game Development Software In The Year 2021][1], [Getting Started With Game Development Using Superpowers][2], [Game Development Tutorial | Player Movement In GDevelop][3], [HTML5 Game Development Tutorial For Video Game Programmers][4], [How Global Gaming Industry Leveraging Open Source Software][5], and [GDevelop Tutorial For Beginners To Start Game Development][6]. The latest advancements in the age of the internet have brought new trends in the video gaming industry. An open source game building platform provides a complete ecosystem to develop games independently and developers then mature that platform as per needs. In this blog post, we will learn how to make a game on scratch using [Gdevelop][7] by covering the following points.

  * **[Why we should use GDevelop?][8]**
  * **[Setting up the project][9]** 
  * **[How to prepare background and object?][10]**
  * **[Adding behviors to the object][11]** 
  * **[Running the game][12]** 
  * **[Conclusion][13]** 

## Why we should use GDevelop? {#why}

[Gdevelop][7] is an open source gaming software. It comes with self-hosting capabilities and is cross-platform in nature. You can download and install it, or you can use its online version to play with it. Users do not need to gain any programming knowledge to use this game builder. Above all, it offers a drag & drop user interface that comes up with pre-built game behaviors, templates, and objects. This free game development software is highly configurable and offers integrations with third-party libraries. For further information about this free tool, you may check this link to learn further regarding its features and the setting up process. 

## Setting up the project {#setting}

In this section, we will create our project for building a truck racing game with some basic functionalities. Follow this [link][6] if you want to set up on your local machine or you can use the online version by going to this [link][14].

So, you will find the following screen once you click on “Create A New Project” and then click “Empty game”.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.20.28-1024x578.png" alt="How to make a game on scratch">}}  

You can see the menu bar on the left-hand side of the window. Now, click on the “Scenes” and then double click on “Click to add a scene” button. After that, you will land on the game screen where you can create game objects, backgrounds, and behaviors. Moving forward, click on “Add a new object” placed on the right-hand side panel and you will see the following window.

{{< figure align=center src="images/Screenshot-2021-08-24-at-23.46.43-1024x580.png" alt="gdevelop tutorial">}}  

## How to prepare background and object? {#prepare}

In the search bar, look for the truck object and double click it and press “Add to the game” once it comes in the results. Repeat this step for the two wheels and a platform object. Now, right-click on the GreenFloor object and edit.

{{< figure align=center src="images/Screenshot-2021-08-25-at-00.07.21-1024x580.png" alt="game development tutorial">}}  

## Adding behviors to the object {#add}

Next, drag and drop the GreenFloor to the game screen and adjust its height and width according to your wish. Drag the truck object and drop it on the game screen and then the wheel objects. Moving forward, right-click on the truck body and hit “Edit object TruckBody”, click on Behaviors, click “Add a behavior to the object” and click “Physics engine 2.0” and you will see the following window.

{{< figure align=center src="images/Screenshot-2021-08-25-at-02.54.06-1024x579.png" alt="How To Make A Game On Scratch">}}  

In this window, you can modify the configurations such as density, width, and height. Now, repeat the same process for the GreenFloor object but keep the type “static” and hit “Apply” button. Again, edit the TruckBody object, hit “Edit points”, hit “Edd points” and then insert the name of your front wheel (i.e. FW in this tutorial). A point will be created on the object, just drag that point to the wheel location. Repeat this process for the back wheel also and make the X and Y to 0 as shown in the image below. 

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.18.15-1024x557.png" alt="game development tutorial">}}  

After that, edit both the wheel objects and adjust their points. Further, again go to the edit option of wheels, hit the “Behavior” tab, select “Physics engine 2.0” and set the values of Type, Radius, and Density as shown in the image below.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.30.30-1024x704.png" alt="game design software">}}  

Now, click on the “New Scene” tab, hit “Add new events”, hit “Add condition”, search for “At the beginning of the scene” and hit “ok”. Then, hit “Add action” search for “Camera center x position” and set the following configurations.

{{< figure align=center src="images/Screenshot-2021-08-25-at-03.39.54-1024x553.png" alt="free game development software">}}  

Now, copy the action but make sure the copied action is set to “Y”. Add another action named “Change camera zoom”, set it to 0.4, and drag this action to the top. Add another action, search for the “Add a wheel joint” and set the configurations for both the wheels as shown below.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.32.37-1024x550.png" alt="game development guide">}}  

After that, add a new condition, search for “key pressed” and set it to Left. Now, add action, select the first wheel, search for Linear Velocity x”, Modification sign to “Subtract” and set the value 50. Repeat this step for the Right key but make sure the Modification sign in Add as shown below.

{{< figure align=center src="images/Screenshot-2021-08-25-at-04.38.34-1024x547.png" alt="game development tutorial">}}  



## Running the game {#run}

Once all the steps are completed. It is time to run the game by pressing the button placed on the top left corner. It will launch the game into the new window.

{{< figure align=center src="images/Screenshot-2021-08-25-at-05.15.59-1024x543.png" alt="How To Make A Game On Scratch">}}  

## Conclusion {#Conclusion}

This is the end of this blog post and you have surely come to know that how to make a game on scratch. However, there are many free **game design software** available in the market as this industry is gaining popularity and demand. There are several reasons behind it such as open source software are scalable, configurable, cost-effective, and easy to maintain. In addition, the demand for cross-platform game builders is increasing as developers find it comfortable to build a game that runs on all popular platforms such as Android, IOS, Web, and Desktop. On the other hand, the advent of pandemic has changed the lives of people and they now prefer to stay indoors. So, people tend to play video games in their leisure time.

Finally, [containerize.com][15] is all set to enhance its tutorial base with some more interesting **game development tutorials**. Please stay connected with this [Game Development Software][16] category for regular updates.

## Explore

  * **[GDevelop][7]**
  * **[Godot][17]**
  * **[Superpowers][18]**
  * **[Cocos Creator][19]**
  * **[Panda3D][20]**
  * **[PlayCanvas][21]**
  * **[Getting Started With Game Development Using Superpowers][2]**
  * **[Game Development Tutorial | Player Movement In GDevelop][3]**
  * **[HTML5 Game Development Tutorial For Video Game Programmers][4]**
  * **[How Global Gaming Industry Leveraging Open Source Software][5]**
  * **[GDevelop Tutorial For Beginners To Start Game Development][6]**
  * [**Top 5 Free Game Development Software In The Year 2021**][1]

 [1]: https://blog.containerize.com/game-development-software/top-5-free-game-development-software-in-the-year-2021/

 [2]: https://blog.containerize.com/game-development-software/superpowers-animation-getting-started-with-game-development/

 [3]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/

 [4]: https://blog.containerize.com/2021/05/19/html5-game-development-tutorial-for-video-game-programmers/
 [5]: https://blog.containerize.com/game-development-software/how-global-gaming-market-leveraging-open-source-software/
 [6]: https://blog.containerize.com/game-development-software/game-development-tutorial-player-movement-in-gdevelop/
 [7]: https://products.containerize.com/game-development-software/gdevelop/
 [8]: #why
 [9]: #setting
 [10]: #prepare
 [11]: #add
 [12]: #run
 [13]: #Conclusion
 [14]: https://editor.gdevelop-app.com/
 [15]: https://www.containerize.com/
 [16]: https://products.containerize.com/game-development-software/
 [17]: https://products.containerize.com/game-development-software/godot/
 [18]: https://products.containerize.com/game-development-software/superpowers/
 [19]: https://products.containerize.com/game-development-software/cocos-creator/
 [20]: https://products.containerize.com/game-development-software/panda3d/
 [21]: https://products.containerize.com/game-development-software/playcanvas/