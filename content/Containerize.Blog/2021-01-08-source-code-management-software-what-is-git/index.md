---
title: Source Code Management Software | What is Git?
seoTitle: Source Code Management Software | What is Git?
description: What is Git? Git is a free source code management software that allows you to record, review changes to your source files and manage projects efficiently.
date: Fri, 08 Jan 2021 14:11:16 +0000
author: Assad Mahmood
summary: 'In this article, we will explore What is Git &amp; How Git works? Git is a version control system that is designed to manage source code, track &amp; log versions.'
url: /version-control-software/source-code-management-software-what-is-git/
categories: ['Version Control Software']

---
## In this article, we will explore What is Git & How Git works? Git is a version control system that is designed to manage source code, track & log versions.

{{< figure align=center src="images/version-control-banner.png" alt="source Code Management Software">}}  

## Overview

Imagine you as a software developer working on a project. You have more than one person working on it. And, there is a single file containing the source code. As they all make changes to the code, they will have different versions of the file each time they make a change. So, now how would we manage different versions of the same file? That’s where the source code management software kicks in. It helps you manage and merge different versions of the same file. And even let you track back the change history. And you can always be sure who made the changes to the file and what are those changes.

In this article, we’ll learn about the git version control system. How you can use it to manage your software development source code files or any other files. So let’s get started.

  * **[What is Version Control System][1]**
  * **[What is Git][2]**
  * **[How Git Works][3]**
  * **[Install Git][4]**
  * **[Setting up a Repository][5]**
  * **[Save Changes to Repository][6]**
  * **[Check Repository’s Status][7]**
  * **[Revert or Undo Changes][8]**
  * **[Conclusion][9]**

## What is Version Control System {#version-control}

Version control is a system that records changes to a file or set of files over time so that you can recall specific versions later. If you are a software developer and want to keep versions of the source code file, source code management software is a very useful thing for you. It allows you to revert selected files back to a previous state, revert the entire project back to a previous state, compare changes over time, see who last modified something that might be causing a problem, who introduced an issue and when, and more. Using Version Control means you never have to worry about losing your work.

## What is Git {#git}

Git is a free and open-source version control system designed to handle everything from small to very large projects with speed and efficiency. Unlike older centralized version control systems such as SVN and CVS, Git version control is distributed. Every developer has the full history of their code repository locally. Though, it makes the initial clone a bit slow. But, after that, all the commits and other operations are very fast. Git allows you to have multiple local branches that can be entirely independent of each other. 

## How Git Works {#how}

Using Git you can make changes to your local repository and push it to a hosting tool. Or you can pull other’s changes from the hosting tool to your local machine. Here is a basic overview of how source code management software(Git) works.

  1. Create a “repository” with a git any hosting tool (like Github, Gitlab, or Bitbucket)
  2. Clone the repository to your local machine
  3. Add a file to your local repository
  4. Save (commit) changes to your local repository
  5. “Push” your changes to your master branch on a remote hosting
  6. Make a change to your file with a git hosting tool and commit
  7. “Pull” the changes to your local machine
  8. Create a “branch” (version), make a change, commit the change
  9. Open a “pull request” (propose changes to the master branch)
 10. “Merge” your branch to the master branch

## Install Git {#install}

There are different methods available to install git on your computer. You can install it as a package or via another installer, or download the source code and compile it yourself.

### Installing on Linux

If you want to install the basic Git tools on Linux via a binary installer, you can generally do so through the package management tool that comes with your distribution. For Fedora (or any closely-related RPM-based distribution, such as RHEL or CentOS), you can use “DNF”


```
$ sudo dnf install git-all
```


If you’re on a Debian-based distribution, such as Ubuntu, try “apt”


```
$ sudo apt install git-all
```


### Installing on macOS

There are several ways to install Git on a Mac. The easiest is probably to install the Xcode Command Line Tools. On Mavericks (10.9) or above you can do this simply by trying to run **git** from the Terminal the very first time.


```
$ git --version
```


If you don’t have it installed already, it will prompt you to install it.

## Setting up a Repository {#init}

A Git repository is virtual storage for your code files. It allows you to store different versions of your code, which you can access when needed.

To create a new repo, you’ll use the **git init** command. git init is a one-time command you use during the initial setup of a new repo. Executing this command will create a new .git subdirectory in your current working directory. This will also create a new **master** branch.

{{< figure align=center src="images/git-init-2.gif" alt="What is Git">}}  

## Save Changes to Repository {#commit}

Now that you have a repository initialized, you can commit file version changes to it.

{{< figure align=center src="images/git-add-commit-1.gif" alt="git commit">}}  

## Check Repository’s Status {#status}

The **git status** command displays the state of the working directory and the staging area. It lets you see which changes have been staged, which haven’t, and which files aren’t being tracked by source code management software(Git). The status output does not show you any information regarding the committed project history. For this, you need to use the **git log**.

{{< figure align=center src="images/git-status-2.gif" alt="source Code Management Software">}}  

git log will show you following output


```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500
```


## Revert Your Changes {#revert}

You can use the git revert command to undo a change that you already have committed in your repo. First, use the “git log” command to get the list of commits


```
$ git log
commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

```


Then, decide which commit you want to revert. And, use the git revert command like below


```
$ git revert ce1c0a5fccd9e48631d85286cbf40feaae641d7e
[master df0fc7a] Revert "Second Commit"
 1 file changed, 1 deletion(-)

$ git log
commit df0fc7ae1ff722fb2ea50ba77fc3bd830195d668 (HEAD -> master)
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:35:47 2021 +0500

    Revert "Second Commit"
    
    This reverts commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e.

commit ce1c0a5fccd9e48631d85286cbf40feaae641d7e
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 18:31:09 2021 +0500

    Second Commit

commit ac269df9e5817041cf5cde72e733239b565b0f3f
Author: Assad Mahmood <*****@gmail.com>
Date:   Fri Jan 8 17:55:52 2021 +0500

    First Commit
```


As you can see git revert created a new commit which undoes the changes which were made in the “Second Commit”.

## Conclusion

Now that you have read through the whole article where we discussed what is Git & how Git works, you should be aware of the source code management software. What’s the purpose of it and why do you need it. We explored how the git can help you manage your project’s source code. And, we also learned about how to use different git commands to initialize and repository, save your changes, and how to undo the changes. In our upcoming tutorials, we’ll explore the git more and will share how we can use different commands to better manage your code.

## Explore

You may find the following links relevant:

  * [**Automate Software Development Workflows with Github Actions**][10]
  * **[How to Set Up a Continuous Deployment Pipeline with GitLab CI/CD][11]**
  * **[Understand and Learn Branches and Pull Requests in Git][12]**
  * **[Top 5 Open Source Version Control Systems In 2021][13]**

 [1]: #version-control
 [2]: #git
 [3]: #how
 [4]: #install
 [5]: #init
 [6]: #commit
 [7]: #status
 [8]: #revert
 [9]: #conclusion
 [10]: https://blog.containerize.com/2021/02/19/automate-software-development-workflows-with-github-actions/
 [11]: https://blog.containerize.com/2021/02/12/set-up-a-continuous-deployment-pipeline-with-gitlab-cicd/
 [12]: https://blog.containerize.com/2021/02/04/understand-and-learn-branches-and-pull-requests-in-git/
 [13]: https://blog.containerize.com/2020/12/11/top-5-open-source-version-control-systems-in-2021/