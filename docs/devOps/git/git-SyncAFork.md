---
id: git-SyncAFork
title: Sync A Fork
sidebar_label: Synk A Fork
---

## First Clone Fork

**Clone** the **forked repository** in *your local PC* as below

```sh
git clone https://github.com/YOUR-USERNAME/YOUR-FORKED-PROJECT.git

cd YOUR-FORKED-PROJECT
```

## Adding Original Project Repository to Local Remotes

Add **Upstream**(*Original Project Repository*) to your list of remotes as below

```sh
git remote add upstream https://github.com/UPSTREAM-USER/ORIGINAL-PROJECT.git

# 'To Verify'
git remote -v
```

Whenever *to update* **fork** with the **latest upstream changes**, first ***fetch*** the *upstream repository's branches* and latest commits to bring them *into forked repository*:

```sh
# Fetch from upstream remote
git fetch upstream

# View all branches, including those from upstream
git branch -va
```

**Checkout** *forked master* branch and **merge** the *upstream repository's master* branch:

```shell
git checkout master
git merge upstream/master
```

If there are no unique commits on the local master branch, git will simply perform a fast-forward. However, if you have been making changes on master you may have to deal with conflicts. When doing so, be careful to respect the changes made upstream.

Now, your local master branch is up-to-date with everything modified upstream
