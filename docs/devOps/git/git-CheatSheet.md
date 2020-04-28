---
id: git-CheatSheet
title: GIT Cheat Sheet
sidebar_label: GIT Cheat Sheet
---

## Git Configuration

Configure **user information** for **all local repositories**.

| Command | Description |
| :-- | :-- |
| `git config --global user.name <name>` | Sets the name you want attached to your commit transactions. |
| `git config --global user.email <email>` | Sets the email you want attached to your commit transactions. |
| `git config --global alias.<alias-name> <git-command>` | Create shortcut for a Git command. E.g. alias.glog “log --graph --oneline” will set `git glog` equivalent to `git log --graph --oneline`. |
| `git config --global color.ui auto` | Enables helpful colorization of command line output. |
| `git config --system core.editor <editor>` | System-level configuration is applied across an entire machine. Set text editor used by commands for all users on the machine. arg should be the command that launches the desired editor (e.g., vi).|
| `git config --global --edit` | Open the global configuration file in a text editor for manual editing. |

## Creating a Repository

**Initializing** and **Cloning** repositories.

| Command | Description |
| :-- | :-- |
| `git init <project-name>` | Create a new local repository from scratch. If **project name** is provided, Git will create a new directory named **project name** and will initialize a repository inside it.   |
| `git remote add origin <url>` | Turn an existing directory into a Git repository. |
| `git clone <url>` | Clone repo located at onto local machine. Original repo can be located on the **local filesystem** or on a remote machine via **HTTP** or **SSH**. |

## Working with Branches

**Isolating** *work in branches*, *changing context*, and *integrating changes*.

| Command | Description |
| :-- | :-- |
| `git branch [-av]` | List all of the ***local branches*** in your repository. With **-av** list all of the **remote** and **local branches** in your repository. A *(star) will appear next to the currently active branch.  |
| `git branch <branch-name>` | Create a new branch with the name **branch-name**. Created branch is referencing on the **current branch - HEAD**. |
| `git checkout <branch-name>` | **Switches HEAD branch** to the specified *existing* branch and **check it out** into your working directory. |
| `git checkout -b <branch-name>` | Create a new branch with the name **branch-name** and **switches HEAD branch** to the **branch-name**. It also **check it out** into your working directory.|
| `git merge <from branch>` | Merge specified **from branch** into the your **current branch - HEAD** branch. |
| `git branch -d [branch-name]` | Remove selected branch, if it is already merged into any other. To *force* deletion use **-D** instead of **-d**. |

### Delete All Remote Branches

:::info
Deleting all remote branches except some specified branches such as **master,release**
:::

```bash
user@pc:~$ REMOTE="origin" && MASTER="master" && RELEASE="release"

# List branches to delete
user@pc:~$ git branch -r |  grep "^  ${REMOTE}/" | sed "s|^  ${REMOTE}/|:|" | grep -v "^:HEAD" | grep -v "^:${MASTER}$" | grep -v "^:${RELEASE}$" | xargs echo
```

:::caution
Warning! The following script causes **deletion** of **remote branches**!
:::

```bash
user@pc:~$ git branch -r |  grep "^  ${REMOTE}/" | sed "s|^  ${REMOTE}/|:|" | grep -v "^:HEAD" | grep -v "^:${MASTER}$" | grep -v "^:${RELEASE}$" | xargs git push ${REMOTE}
```

## Make a Change

Working with the **Git Staging Area** and **Snapshots**.

| Command | Description |
| :-- | :-- |
| `git add <file>` | Add the reference named **file** to the **Staging Area** for the next commit. Use ***.(dot)*** will add **all** ***modified*** and ***untracked*** files to the **Staging Area**, it's ready for commit|
| `git add -p <file>` | Patch mode allows you to stage parts of a changed file, instead of the entire file. This allows you to make concise, well-crafted commits that make for an easier to read history. |
| `git commit -m "<message>"` | Create a new **commit** from changes added to the **Staging Area** *previously*. With `-m`, use **message** as the *commit message* instead of launching a text editor. |
| `git commit -am "<commit message>"` | Commit all local changes in **tracked files**. In other words, it add files that have been modified and deleted to *Staging Area* automatically, but new files(untracked) you have not told Git about are not affected. |

## Update & Share Changes

Retrieving updates from another repository and updating local repos

| Command | Description |
| :-- | :-- |
| `git remote add <name> <url>` | Create a new connection to a remote repository. After adding a remote, you can use **name** as a shortcut for **url** in other commands. |
| `git fetch <remote> <branch>` | Fetches a specific **branch**, from the repository. Leave off **branch** to fetch all remote refs. |
| `git pull <remote>` | Fetch the specified remote’s copy of current branch and immediately merge it into the local copy. |
| `git pull --rebase <remote>` | Fetch the remote’s copy of current branch and rebases it into the local copy. Uses git rebase instead of merge to integrate the branches. |
| `git push <remote> <branch>` | Push the branch to **remote**, along with necessary commits and objects. Creates named branch in the remote repo if it doesn’t exist. |
| `git push <remote> --force` | Forces the git push even if it results in a non-fast-forward merge. Do not use the --force flag unless you’re absolutely sure you know what you’re doing. |
| `git push <remote> --all` | Push all of your local branches to the specified remote. |
| `git push --tags` | Tags aren’t automatically pushed when you push a branch or use the --all flag. The --tags flag sends all of your local tags to the remote repository. |

## Fixing Errors & Mistakes on Commits & Branches

**Erase(*reset*)** **mistakes** and **craft replacement** *history*. **Rewriting** *branches*, **updating** & **reverting** *commits* and **clearing** *history*.

| Command | Description |
| :-- | :-- |
| `git revert [commit sha]` | Create ***new commit*** that **undoes all of the changes made in** , then apply it to the ***current branch - HEAD***. |
| `git reset <file>` | Remove **file** from the ***Staging Area***, but *leave the working directory unchanged*. This ***Unstages a file without overwriting any changes***. |
| `git reset` | Reset ***Staging Area*** to match **most recent commit**, but *leave the working directory unchanged*. |
| `git reset --hard` | Reset **Staging Area** and **Working Directory** to *match most recent commit* and ***overwrites all changes*** *in the working directory*. `git reset --hard` which is a **synonym** for `git reset --hard HEAD` clears the mess from the index file and the working tree. |
| `git reset [commit sha]` | Move the ***current branch - HEAD*** tip ***backward*** to **[commit sha]**, reset the ***Staging Area*** to *match*, but **leave** the ***working directory unchanged***. |
| `git reset --hard [commit sha]` | Same as previous, but *resets* both the ***Staging Area*** & ***Working Directory*** to match. **Deletes** ***uncommitted changes***, and ***all commits*** after **[commit sha]**. |
| `git reset --keep [commit sha]` | Reset your **current branch - HEAD** pointer to a previous *[commit sha]* and ***preserve uncommitted local changes*** |
| `git rebase <base>` | Rebase the current branch onto **base**.**base** can be a commit ID, branch name, a tag, or a relative reference to HEAD. |
| `git rebase -i <base>` | Interactively rebase current branch onto **base**. Launches editor to enter commands for how each commit will be transferred to the new base. |
| `git clean -n` | Shows which files would be removed from working directory. Use the -f flag in place of the -n flag to execute the clean. |
| `git commit --amend` | Replace the last commit with the staged changes and last commit combined. Use with nothing staged to edit the last commit’s message. |

## Tracking Path Changes

*Versioning* **file removes** and **path changes**.

| Command | Description |
| :-- | :-- |
| `git rm <file>` | Delete the file from project and stage the removal for commit |
| `git mv <existing-path> <new-path>` | Change an existing file path and stage the move |

## Observing Repository

**Browse** and **Examine** the *evolution of project files* with **status**, **log**, **diff** and **object information** commands.

| Command | Description |
| :-- | :-- |
| `git status` | List which files are **Staged**, **Unstaged**, **New**, **Modified** and **Untracked** in your *current branch - HEAD*. |
| `git diff` | Show *unstaged changes* between your **index** and **working directory**. |
| `git diff HEAD` | Show differences between **working directory** and **last commit**. |
| `git diff --cached` | Show differences between **staged changes** and **last commit**. |
| `git diff --staged` | Show differences of what is staged but not yet commited. |
| `git diff commit1 commit2` | Show differences between two commit ids.  |
| `git diff branchB...branchA` | Show the differences of what is ***in*** **branchA** that is is ***not in*** **branchB** |
| `git log` | Display the entire commit history using the default format. For customization see additional options. |
| `git log -<limit>` | Limit number of commits by **limit**. E.g. `git log -5` will limit to 5 commits. |
| `git log --oneline` | Condense each commit to a single line. |
| `git log -p [file/directory]` | Show change history for file/directory including diffs .|
| `git log --stat` | Include which files were altered and the relative number of lines that were added or deleted from each of them. |
| `git log --author= ”<pattern>”` | Search for commits by a particular author. |
| `git log --grep=”<pattern>”` | Search for commits with a commit message that matches **pattern**.|
| `git log <since>..<until>` | Show commits that occur between **since** and **until**. Args can be a commit ID, branch name, HEAD, or any other kind of revision reference. |
| `git log -- <file>` | Only display commits that have the specified file. |
| `git log --graph --decorate` | --graph flag draws a text based graph of commits on left side of commit msgs. --decorate adds names of branches or tags of commits shown. |
| `git blame <file>` | List the who changed what and when in **file** |
| `git show [commit]:[file]` |  Show metadata and content changes of the any object in Git in human-readable format. Show specified commit id and/or file data with **[commit]:[file]**   |
| `git reflog` | Show a log of changes to the local repository’s HEAD. Add --relative-date flag to show date info or --all to show all refs. |

## Tagging Known Commits

Git has the ability to **tag** specific points in a repository’s history as being important. Git supports two types of tags: **lightweight** and **annotated**. ***A lightweight tag*** is very much like a branch that doesn’t change — it’s just a pointer to a specific commit. ***Annotated tags***, however, are stored as full objects in the Git database.

* **Lightweight Tag :** This is basically the commit checksum stored in a file — no other information is kept. To create a lightweight tag, don’t supply any of the `-a`, `-s`, or `-m` options, just provide a tag name:
* **Annotated Tag :** The easiest way is to specify `-a` when you run the `tag` command. The `-m` specifies a tagging message, which is stored with the tag.

| Command | Description |
| :-- | :-- |
| `git tag` | List all tags |
| `git tag <name> [commit sha]` | Create a **tag** reference named **name** for current commit. Add **commit sha** to tag a specific commit instead of current one. |
| `git tag -a <name> [commit sha]` | Create a **tag object**(*annotated*) reference named **name** for current commit. Add **commit sha** to tag a specific commit instead of current one. |
| `git tag -d <name>` | Remove a **tag** reference named **name** from a local repository. |

## Temporary Commits

**Temporarily store** *tracked* and *modified* files in order to *change branches*.

| Command | Description |
| :-- | :-- |
| `git stash` | Save modified and staged changes |
| `git stash list` | list stack-order of stashed file changes |
| `git stash pop` | write working from top of stash stack |
| `git stash drop` | discard the changes from top of stash stack |

## Best Practices

* **COMMIT RELATED CHANGES**
  * A commit should be a wrapper for related changes. For example, fixing two different bugs should produce two separate commits. Small commits make it easier for other developers to understand the changes and roll them back if something went wrong.
* **COMMIT OFTEN**
  * Committing often keeps your commits small and, again, helps you commit only related changes. Moreover, it allows you to share your code more frequently with others. That way it‘s easier for everyone to integrate changes regularly and avoid having merge conflicts. Having few large commits and sharing them rarely, in contrast, makes it hard to solve conflicts.
* **DO NOT COMMIT HALF-DONE WO**RK
  * You should only commit code when it‘s completed. This doesn‘t mean you have to complete a whole, large feature before committing. Quite the contrary: split the feature‘s implementation into logical chunks and remember to commit early and often. But don‘t commit just to have something in the repository before leaving the office at the end of the day. If you‘re tempted to commit just because you need a clean working copy (to check out a branch, pull in changes, etc.) consider using Git‘s «Stash» feature instead.
* **TEST CODE BEFORE YOU COMMIT**
  * Resist the temptation to commit something that you «think» is completed. Test it thoroughly to make sure it really is completed and has no side effects (as far as one can tell). While committing half-baked things in your local repository only requires you to forgive yourself, having your code tested is even more important when it comes to pushing/sharing your code with others.
* **WRITE GOOD COMMIT MESSAGES**
  * Begin your message with a short summary of your changes (up to 50 characters as a guideline). Separate it from the following body by including a blank line. The body of your message should provide detailed answers to the following questions:
    * What was the motivation for the change?
    * How does it differ from the previous implementation?
  * Use the imperative, present tense («change», not «changed» or «changes») to be consistent with generated messages from commands like git merge.
* **VERSION CONTROL IS NOT A BACKUP SYSTEM**
  * Having your files backed up on a remote server is a nice side effect of having a version control system. But you should not use your VCS like it was a backup system. When doing version control, you should pay attention to committing semantically (see «related changes») - you shouldn‘t just cram in files.
* **USE BRANCHES**
  * Branching is one of Git‘s most powerful features - and this is not by accident: quick and easy branching was a central requirement from day one. Branches are the perfect tool to help you avoid mixing up different lines of development. You should use branches extensively in your development workflows: for new features, bug fixes, ideas…

### GIT ZOO of Working Areas

Working with GIT

![GIT DIAGRAM](https://gist.githubusercontent.com/BarisGece/2c6b754f43768e23476ecfe25407079c/raw/8aedd49f4f87b1ae6aacbeee838c521097f93fcb/gitDiagram.png)

![GIT ZOO of Working Areas](https://gist.githubusercontent.com/BarisGece/2c6b754f43768e23476ecfe25407079c/raw/8aedd49f4f87b1ae6aacbeee838c521097f93fcb/gitZOOofWorkingAreas.png)

### Feature Branch - GitHub Flow

Working with Feature Branch

![Feature Branch - GitHub Flow](https://gist.githubusercontent.com/BarisGece/2c6b754f43768e23476ecfe25407079c/raw/8aedd49f4f87b1ae6aacbeee838c521097f93fcb/gitFeatureBranch_GitHub-Flow.png)

## Glossary

* **git**: an open source, distributed version-control system
* **GitHub**: a platform for hosting and collaborating on Git repositories
* **commit**: a Git object, a snapshot of your entire repository compressed into a SHA
* **branch**: a lightweight movable pointer to a commit
* **clone**: a local version of a repository, including all commits and branches
* **remote**: a common repository on GitHub that all team member use to exchange their changes
* **fork**: a copy of a repository on GitHub owned by a different user
* **pull** request: a place to compare and discuss the differences introduced on a branch with reviews, comments, integrated tests, and more
* **HEAD**: representing or placing where your current **working directory** is now, the HEAD pointer can be moved to different branches, tags, or commits when using git checkout

## Notes

* [GIT for TEAMs](http://gitforteams.com/)
* [GitHub Cheat Sheet](https://github.com/tiimgreen/github-cheat-sheet)
* [git - complete list of all commands](https://git-scm.com/docs/git#_git_commands)
