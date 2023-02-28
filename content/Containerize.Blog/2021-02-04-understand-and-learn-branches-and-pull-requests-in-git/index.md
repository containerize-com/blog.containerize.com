---
title: Understand and Learn Branches and Pull Requests in Git
seoTitle: Understand and Learn Branches and Pull Requests in Git
description: "Git is one of the most popular version control systems. In this articl ewe'll understand how to use git branches and pull requests."
date: Thu, 04 Feb 2021 08:07:10 +0000
author: Assad Mahmood
summary: "Git Branch is the fundamental component of the git version control system. We'll explore different Branching Models in this Tutorial"
url: /version-control-software/understand-and-learn-branches-and-pull-requests-in-git/

categories: ['Version Control Software']

---
## Git Branch is the fundamental component of the git version control system. We’ll explore different Branching Models in this Tutorial

{{< figure align=center src="images/git-branches-pull-requests.png" alt="git pull requests branches">}}  

In our [last article][1], we learned about the basics of git and version control systems. We went through step by step and learned how to set up a git repository. Also, we learned how to add changes to a branch and revert them in case you want to undo your changes. Now that we understand the basics of version control systems, specifically, git. So, in this blog post, we’ll move on to discuss how to use git branches and pull requests. We’ll learn about different workflows. So, Let’s get started!

  * **[What are Git Branches][2]**
  * **[Create / Modify Git Branches][3]**
  * **[What is a Pull Request][4]**
  * **[Popular Git Branching Models][5]**
  * [**Conclusion**][6]

## What are Git Branches {#branch}

{{< figure align=center src="images/Screenshot-2021-02-04-at-11.27.20-AM-1024x293.png" alt="git branches">}}  

Let’s talk about branches and why do we need branches and what are branching strategies we can use to work efficiently with our code. As the name suggests a **branch** represents an independent line of development from a root. 

When you create a repository you basically create a branch as well, which we can call a master (or default) branch. We can commit changes to our master branch. But in case you need to work on a feature and don’t want to separate your code from the master branch. So, that’s where branches help you. They let you branch out and then merge later on. 

## Create / Modify Git Branches {#create}


```
git branch
```


command lets you create, list, rename and delete branches. It doesn’t let you switch between branches, for this, we have to use the git checkout command. Or if you want to merge your changes back to a branch then you have to use the **git merge** command.

It’s important to understand that branches are just pointers to commits. When you create a branch, all Git needs to do is create a new pointer, it doesn’t change the repository in any other way. 

Use the following command to create a branch


```
git branch <branch-name>
```


Once you’ve finished working on a branch and have merged it into the main code base, you’re free to delete the branch without losing any history using the following command


```
git branch -d <branch-name>
```


## What is a Pull Request {#pull}

A pull request is a way to submit a contribution to a software project using a version control system such as Git. Developers use pull requests to propose changes to a codebase. Once a pull request is opened, you can discuss and review the potential changes with collaborators and add follow-up commits before your changes are merged into the base branch.

When a developer opens a pull request, all he is doing is requesting to another developer, pulls a branch from his repository into their repository. This means that he needs to provide 4 input values to create a pull request: the source repository, the source branch, the destination repository, and the destination branch.

## Popular Branching Models {#model}

There are a number o branching workflows that are in use by the developer community worldwide. But, we’ll discuss the three most popular branching models one by one

### Git Flow

Gitflow Workflow is a Git workflow that helps with continuous software development and implementing DevOps practices. The Git Flow is the most known workflow on this list. It was created by [Vincent Driessen in 2010][7] and it is based on two main branches with an infinite lifetime, along with other supporting branches like features-\*, hotfixes-\* which then merge into the develop branch as individual items are completed.

  * **master** – this branch contains production code. All development code is merged into the master branch once ready to be pushed to production.
  * **develop** – this branch contains pre-production code. When the features are finished then they are merged into develop.

Gitflow is ideally suited for projects that have a scheduled release cycle. Though, the Git history becomes unreadable.

### GitHub Flow

The GitHub Flow is a lightweight workflow. It was created by [GitHub][8] in 2011 and mainly focuses on the Agile model, where you don’t wait for a release cycle. Instead, you push changes to production on a daily basis as the features get complete. 

GitHub Flow follows following principals: 

  * Anything in the “master” branch is deployable.
  * To work on something new, create a separate branch of off master with some description name e.g “image-uploading”
  * Commit to that branch locally and regularly push your work to the same-named branch on the server.
  * When you need feedback or help, or you think the branch is ready for merging, open a [pull request][4]
  * After its reviewed and signed off on the feature, you can merge it into the master
  * Once it is merged and pushed to ‘master’, it can be deployed to production.

### GitLab Flow

The GitLab Flow is a workflow created by GitLab in 2014. GitLab Flow is a simpler alternative to GitFlow and combines feature driven development and feature branches with issue tracking. The major difference between GitLab Flow and GitHub flow is the use of environment branches. 

Developers create a **develop** branch and make that the default, while GitLab Flow works with the ‘main’ branch right away. GitLab Flow incorporates multiple pre-production branches. And, those can be used to test the stuff at different levels. e.g from test branch to acceptance and then from acceptance to production.

## Conclusion {#conclusion}

In this article, we learned about the git branches and pull requests. We studied the importance of pull requests and how they can be used in various git workflows. We also explored different Git branching models briefly.

 [1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
 [2]: #branch
 [3]: #create
 [4]: #pull
 [5]: #model
 [6]: #conclusion
 [7]: https://nvie.com/posts/a-successful-git-branching-model/
 [8]: http://scottchacon.com/2011/08/31/github-flow.html