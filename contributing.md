## How to Contribute

- Take a look at the Existing [Issues] or create your own!
- Fork the Repo and create a Branch for any Issue that you are working upon.
- Create a Pull Request which will be promptly reviewed and suggestions would be added to improve it.
- Add Screenshots to help us know what this is all about.

## How to make a Pull Request

**1.** Fork the repository by clicking on the Fork symbol at the top right corner.

**2.** Clone the forked repository.

```
   git clone https://github.com/<Your name>/Pomodoro-Extension.git
```

**3.** Navigate to the project directory.

```
   cd Pomodoro-Extension
```

**4.** Create a new branch:

```
   git checkout -b Pomodoro-Extension
```

**5.** Make changes in source code.

**6.** Stage your changes and commit

```
   git add .
   git commit -m "<your_commit_message>"
```

**7.** Push your local commits to the remote repo.

```
   git push origin Pomodoro-Extension
```

**8.** Create a [PR](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request)

**Note** If anyone contributes to this repository, then the changes will not be reflected in your local repository. For that:

**9.** Setup a reference(remote) to the original repository to get all the changes from the remote.

```
   git remote add upstream https://github.com/<Your name>/Pomodoro-Extension
.git
```

**10.** Check the remotes for this repository.

```
   git remote -v
```

**11.** Fetching from the remote repository will bring in its branches and their respective commits.

```
   git fetch upstream
```

**12.** Make sure that you're on your master branch.

```
   git checkout master
```

**13.** Now that we have fetched the upstream repository, we want to merge its changes into our local branch. This will bring that branch into sync with the upstream, without losing our local changes.

```
   git merge upstream/master
```

Work in Progress pull requests are also welcome to get feedback early on, or if there is something blocking you from working further.


## Contributor's Guide 🙌
Thank you for considering contributing to this project! Your involvement makes this project better. Feel free to explore new features, fix bugs, or improve the overall design.

Remember, every contribution, no matter how small, is highly valued. Let's build something amazing together! 🌟