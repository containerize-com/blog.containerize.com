---
title: Github Actions Tutorial | Automate Your First WorkFlow
seoTitle: Github Actions Tutorial | Automate Your First WorkFlow
description: 'Follow this Github Actions tutorial to explore that how can we use Github Actions to automate & execute our software development workflows from our repo.'
date: Fri, 19 Feb 2021 10:21:38 +0000
author: Assad Mahmood
summary: 'Github has introduced Github Actions that allow you to set up Continuous Integration &amp; Continuous Deployment using a config file right in your Github repo.'
url: /version-control-software/github-actions-tutorial-automate-your-first-workflow/
categories: ['Version Control Software']

---
## Github has introduced Github Actions that allow you to set up Continuous Integration & Continuous Deployment using a config file right in your Github repo.

{{< figure align=center src="images/github-actions-workflows.png" alt="github actions tutorial">}}  

## Overview

One of the best ways to increase productivity in a software project is to automate anything manual or repetitive. And you might be surprised at how easy automation is to implement when you use an awesome tool like **Github Actions**. Since the last few articles, I’ve been writing about [git][1], [version control][1], and [automation of software development workflows][2], and about [continuous integration and continuous delivery][3]. So hopefully by now, you are well aware of repositories and how to use them. 

In today’s **Github Actions tutorial**, we’ll be exploring Github Actions, and how you can use it for application automation, customization, and to execute your software development workflows right in your repository. So, let’s get started

  * **[Review CI/CD Workflows][4]**
  * **[What are Github Actions][5]**
  * **[Understanding the YAML Syntax][6]**
  * **[Creating your first Workflow][7]**
  * **[Conclusion][8]**

## CI/CD Workflows {#cicd}

CI/CD is a method of frequent deployments of your software development projects to the end-users in different stages with the help of automation. **Continuous Integration & Continuous Deployment** is more of a philosophy and one of the best practices for DevOps teams to implement, for delivering code changes more frequently and reliably. 

**Continuous Integration** is a set of practices that encourages development teams to check in code to version control repositories frequently. And, for every push to the repository, you can create a set of scripts to build and test your application automatically. These scripts help decrease the chances that you introduce errors in your application.

**Continuous Deployment** is a step ahead in your ci/cd workflows. It not only built and tests your application each time a code change is pushed to the codebase, but the application is also deployed continuously to your server.

## What are Github Actions {#github-actions}

In the section of this Github Actions tutorial, we will come to know what are **Github actions**. However, GitHub Actions is an API for cause and effect on GitHub. It makes it easy to automate all your software workflows, now with CI/CD. You can design any workflow, based on any event e.g (push to a branch, pull request, etc), while GitHub manages the execution. However, you do not need to write the actions by yourself. GitHub has an inbuilt marketplace where people can find actions created by other people, and reuse them if it fits their needs. GitHub Actions supports Node.js, Python, Java, Ruby, PHP, Go, Rust, .NET, and more. Build, test, and deploy applications in your language of choice.

## YAML Syntax {#yaml}

Let’s first get familiar with the syntaxes and the terminologies of the **Github Actions**.

  * **Workflow: **Since the GitHub action provides the facility to build end-to-end **continuous integration & continuous deployment** capabilities, this term refers to that point when the flow starts executing by the CI tool.
  * **Job**: This term refers to all the tasks in a single workflow. A workflow contains more than one job and it is required for all of them to complete their execution to prevent failure.
  * **Step: **For a job to complete its execution, it must complete all the steps embedded in it.
  * **Action:** Action is the primary subset of Step and the smallest subset of Workflow. Every step consists of multiple actions that must get executed successfully.

As you can see Workflow, Job, Step, and Action are interdependent, and successful execution of everything is necessary for the successful completion of the ci/cd pipeline.

## Create a Workflow {#workflow}

In a software development project, one of the problems development teams face is the format of the source code and the best practices enforcement. This problem is more obvious for the larger teams. As they involve more developers and everyone has their own style of writing codes. So the use of linter packages is very common across the teams. But now with **GitHub Actions**, you can actually enforce the linter every time someone pushes the code to the Github repo.

In this Github Actions tutorial, you’ll add a workflow that lints multiple coding languages using the [GitHub Super-Linter][9] action. The workflow uses Super-Linter to validate your source code every time a new commit is pushed to your repository.

From your repository on GitHub, create a new file in the **.github/workflows** directory named **superlinter.yml** and copy the following contents into it


```
name: Super-Linter

# Run this workflow every time a new commit pushed to your repository
on: push

jobs:
  # Set the job key. The key is displayed as the job name
  # when a job name is not provided
  super-lint:
    # Name the Job
    name: Lint code base
    # Set the type of machine to run on
    runs-on: ubuntu-latest

    steps:
      # Checks out a copy of your repository on the ubuntu-latest machine
      - name: Checkout code
        uses: actions/checkout@v2

      # Runs the Super-Linter action
      - name: Run Super-Linter
        uses: github/super-linter@v3
        env:
          DEFAULT_BRANCH: main
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
```


To run your workflow, commit and push changes to your Github repository. This push event will trigger superlinter workflow. And, now you can view your workflow’s results by going into the Action’s tab

{{< figure align=center src="images/actions-tab.png" alt="Github Actions tutorial">}}  

In the left sidebar, click the workflow you want to see.

{{< figure align=center src="images/superlinter-workflow-sidebar-1024x211.png" alt="Github Actions Workflow">}}  

The super-linter workflow you just added runs every time code is pushed to your repository to help you find issues in your code. Your repository can have multiple workflows that trigger different jobs based on different events. GitHub Actions can help you automate nearly every aspect of your application development processes. This was just a basic introduction to the Github Actions. There are tons of [resources][10] available for in-depth knowledge of Github Actions, which you can use. 

## Conclusion {#conclusion}

In this **Github Actions tutorial**, we have learned about **Continuous Integration & Continuous Deployment** and **What are Github Actions**. And, we also explored how we can use **Github Actions** to build a CI/CD workflow. We used a simple super-linter workflow from the Github Actions Marketplace, to find out any inconsistencies in our codebase. In upcoming articles, we’ll explore the Github Actions in more depth. In addition, you can find other blog posts related to the **version control system** mentioned in the “Explore” section below. 

Finally, [containerize.com][11] is continuously writing blog posts on further open source products and topics. Therefore, please stay in touch with the [Version Control Software][12] category for regular updates. Moreover, you can follow us on our social media accounts [Facebook][13], [LinkedIn][14], and [Twitter][15].

## Explore

You may find the following links relevant:

  * [GitLab Continuous Deployment | How it Works?][16]
  * [Understand and Learn Branches and Pull Requests in Git][2]
  * [Source Code Management Software | What is Git?][17]
  * [Top 5 Open Source Version Control Systems In 2021][18]

 [1]: https://blog.containerize.com/2021/01/08/guide-to-version-control-and-source-code-management-using-git/
 [2]: https://blog.containerize.com/version-control-software/understand-and-learn-branches-and-pull-requests-in-git/

 [3]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/
 [4]: #cicd
 [5]: #github-actions
 [6]: #yaml
 [7]: #workflow
 [8]: #conclusion
 [9]: https://github.com/github/super-linter
 [10]: https://docs.github.com/en/actions/learn-github-actions
 [11]: https://www.containerize.com/
 [12]: https://products.containerize.com/version-control/
 [13]: https://web.facebook.com/containerize
 [14]: https://www.linkedin.com/company/containerize/
 [15]: https://twitter.com/containerize_co
 [16]: https://blog.containerize.com/version-control-software/gitlab-continuous-deployment-how-it-works/

 [17]: https://blog.containerize.com/version-control-software/source-code-management-software-what-is-git/

 [18]: https://blog.containerize.com/version-control-software/top-5-open-source-version-control-systems-in-2021/
