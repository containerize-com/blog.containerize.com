---
title: GitLab Continuous Deployment | How it Works?
seoTitle: GitLab Continuous Deployment | How it Works?
description: "In this tutorial, we'll build a continuous deployment pipeline with GitLab. GitLab continuous deployment helps the DevOps to perform the automated deployment."
date: Fri, 12 Feb 2021 12:51:28 +0000
author: Assad Mahmood
summary: 'Automated Deployment streamlines your workflow &amp; processes. This GitLab tutorial helps you learn to set up a continuous deployment pipeline using GitLab CI/CD.'
url: /version-control-software/gitlab-continuous-deployment-how-it-works/

categories: ['Version Control Software']

---
## Automated Deployment streamlines your workflow & processes. This GitLab tutorial helps you learn to set up a continuous deployment pipeline using GitLab CI/CD.

{{< figure align=center src="images/Continuous-Deployment-Pipeline.png" alt="GitLab Continuous Deployment">}}  

## Overview

In the last few articles, we learned about the [basics of version control][1] and then we enhanced our knowledge by learning about different [branching models][2] and workflows. The version control system has brought efficiency in the world of development, deployment, and integration. Developers find it super easy to commit the source code without worrying about the builds and tests. The software industry has gained confidence and a competitive edge as this approach has booted up the deployments.

**GitLab continuous deployment** and integration helps in finding issues easily. Moreover, developers can track the bugs and other miss handling in a shorter span of time. This whole automation process gives freedom from the tasks which take place frequently and reduces the manpower and chances of errors. Today in this blog post we’ll explore about continuous deployment pipeline with GitLab CI/CD. So, Let’s get started by covering the following points!

  * **[What is CI & CD][3]**
  * **[What is GitLab Runner][4]**
  * **[.gitlab-ci.yml file][5]**
  * **[Create Basic Sample App][6]**
  * **[Conclusion][7]**

## What is CI & CD {#cicd}

Continuous integration (CI) is one of the DevOps best practices of automating the integration of code changes from multiple contributors into a single software project. This allows developers to frequently merge code changes into a central repository where builds and tests are then run. Continuous Deployment (CD) moves one step further by automatically deploying code to the target environment (production or staging) after each code commits and builds.

Before you start, make sure you have a project in GitLab that you would like to use CI/CD for. And you should have maintainer or owner-level access to the project.

## What is GitLab Runner {#runner}

After understanding **GitLab continuous deployment**, GitLab Runner is a small lightweight program written in Go that runs Continuous Integration (CI) related jobs on your local machine and sends the results to GitLab for it to consider the changes. It is a single executable binary that can be installed on any major OS. 

Before we move forward with the GitLab CI / CD you need to make sure you have the runners available to run your tasks. You can follow the official guide to [install][8] and [register][9] GitLab runner.

## .gitlab-ci.yml file {#yml}

The **.gitlab-ci.yml** is a file where you configure specific instructions for GitLab CI/CD. It is placed in the root of your repository and contains definitions of how your project should be built. Every time we push a commit to our GitLab instance, GitLab would invoke a Runner to build and test the project as instructed inside this file.

## Create a Sample App {#sample}

In the section of this **GitLab tutorial**, we will create a sample app. Assuming that you’ve created a GitLab Repository already, let’s create a sample application and we’ll set up a CI / CD process for the application.

First of all, create package.json file at the root of your project


```
{
  "name": "sample_web_app",
  "version": "1.0.0",
  "description": "Sample Application",
  "author": "Assad",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "dependencies": {
    "express": "^4.16.1"
  }
}
```


Now create an app.js at the root of your project


```
const express = require('express');

const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.listen(8080, 'localhost');
console.log('Running on http://localhost:8080');
```


In the last step of **GitLab continuous deployment,** create a **Dockerfile** and add the following contents to it:


```
FROM node:10

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "node", "app"]
```


Dockerfile contains the build process for this app. It involves creating a node container and installing the dependencies.

Now we need to create a **.gitlab-ci.yml** file. This file would contain the instructions to build our project. Every time we push a commit to our GitLab repository, GitLab would invoke a Runner to build the project. 


```
image: node:latest
stages:
- build

install_dependencies:
stage: build
script:
- npm install
```


We have just one stage build and it has just **npm install** as a script. This is a command you would have to manually run every time a change comes to your project. And, that’s where the GitLab runner comes in and would do this for you automatically every time you make a commit.

Now assuming that you have already installed the GitLab Runner and Also have registered it with your GitLab instance we can test the GitLab CI / CD in action by making a simple commit to the application and pushing it to GitLab.

You can then open your project in GitLab, go to my-project → Pipeline and you will see a tag saying “passed” next to the commit you made. Subsequent commits will also have tags.

## Conclusion {#conclusion}

This brings us to the end of this **GitLab tutorial**. In this article, we learned about the basics of GitLab Continuous Integration, **What is CI & CD**, **What is GitLab Runner**, and Continuous Deployment. Further, we studied what’s the use of runners in the overall CI / CD workflow. We also created a sample project which explains how to set up continuous deployment using GitLab. This GitLab tutorial will really help you if you are looking for **GitLab Continuous Deployment**. However, there are many other resources mentioned in the “Explore” section below that you may check out. In addition, the articles are about **version control systems** that are open source, self-hosted, and extensible.

Finally, [containerize.com][10] is continuously writing blog posts on further open source products and topics. Therefore, please stay in touch with the [][11][Version Control Software][12] category for regular updates. Moreover, you can follow us on our social media accounts [Facebook][13], [LinkedIn][14], and [Twitter][15].

## Explore

You may find the following links relevant:

  * [Automate Software Development Workflows with Github Actions][16]
  * [Understand and Learn Branches and Pull Requests in Git][2]
  * [Source Code Management Software | What is Git?][17]
  * [Top 5 Open Source Version Control Systems In 2021][18]
  * [Automate Business Operations Using Free and Open Source Software][19]

 [1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
 [2]: https://blog.containerize.com/2021/02/04/understand-and-learn-branches-and-pull-requests-in-git/
 [3]: #cicd
 [4]: #runner
 [5]: #yml
 [6]: #status
 [7]: #conclusion
 [8]: https://docs.gitlab.com/runner/install/
 [9]: https://docs.gitlab.com/runner/register/
 [10]: https://www.containerize.com/
 [11]: https://products.containerize.com/discussion-forum/
 [12]: https://products.containerize.com/version-control/
 [13]: https://web.facebook.com/containerize
 [14]: https://www.linkedin.com/company/containerize/
 [15]: https://twitter.com/containerize_co
 [16]: https://blog.containerize.com/2021/02/19/automate-software-development-workflows-with-github-actions/
 [17]: https://blog.containerize.com/2021/01/08/source-code-management-software-what-is-git/
 [18]: https://blog.containerize.com/2020/12/11/top-5-open-source-version-control-systems-in-2021/
 [19]: https://blog.containerize.com/2020/08/27/automate-business-operations-using-open-source-software/