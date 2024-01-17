
# PRO-MO
<p>

[![Open Source Love svg1](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![Visitors](https://api.visitorbadge.io/api/visitors?path=trishit78%2FPomodoro-Extension%20&countColor=%23263759&style=flat)
![GitHub forks](https://img.shields.io/github/forks/trishit78/Pomodoro-Extension)
![GitHub Repo stars](https://img.shields.io/github/stars/trishit78/Pomodoro-Extension)
![GitHub contributors](https://img.shields.io/github/contributors/trishit78/Pomodoro-Extension)
![GitHub last commit](https://img.shields.io/github/last-commit/trishit78/Pomodoro-Extension)

![GitHub repo size](https://img.shields.io/github/repo-size/trishit78/Pomodoro-Extension)

![Github](https://img.shields.io/github/license/trishit78/Pomodoro-Extension)
![GitHub issues](https://img.shields.io/github/issues/trishit78/Pomodoro-Extension)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/trishit78/Pomodoro-Extension)
![GitHub pull requests](https://img.shields.io/github/issues-pr/trishit78/Pomodoro-Extension)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed/trishit78/Pomodoro-Extension)

 </p>
Created the ultimate productivity tool for software engineers, a Pomodoro extension, which helps individuals increase productivity through deep work.



## Demo



![video1552723449](https://github.com/trishit78/Pomodoro-Extension/assets/90523629/f10bf1bd-a36e-4265-98d2-e337ae9f4ae7)



## Run Locally

To check the Chrome extension you can run it locally 

Clone the project

```bash
  git clone https://github.com/trishit78/Pomodoro-Extension.git
```


**Create a Branch**: Create a new branch for your feature or bug fix.

   ```bash
   git checkout -b your-branch-name
   ```
**Test Locally**: Test locally to ensure they work as expected.

```bash
    npm i
   ```

```bash
    npm run build-extension
   ```
   For MAC/Linux users:
```bash
   npm run build-extension-shell
   ```
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


in the project folder, a dist folder will be created,
Now go to the Chrome browser, click on the top right (three-dotted button), go to Extensions ->Manage Extensions 
<div align="center">
<img src="https://github.com/trishit78/Pomodoro-Extension/assets/90523629/48f54b67-832c-4f89-83fd-2f902f713b29" width="60%"></div>
<br>
<div align="center">
<img src="https://github.com/trishit78/Pomodoro-Extension/assets/90523629/d8ba4035-d3e0-496f-ad74-ffed58007972" width="60%"></div>
<br>

Click on load unpacked, select the dist folder, and the Chrome extension is ready to use

<div align="center">
<img src="https://github.com/trishit78/Pomodoro-Extension/assets/90523629/1c7adffa-929d-4b31-a5c0-faa3ad2d9e0e" width="60%"></div>
<br>

## Codebase

#### Technologies

let's talk about the architecture of this repo:

- **Frontend**: We used React JS as the main tech stack for this project.

Here is a list of all the technologies we use:

- **Bootstrap**: Implementing Buttons
- **Material UI**: Adding task Buttons


#### Folder structure

```sh
Pomodoro-Extension/
├── packages
│   ├── dist             # Extension build folder
│   ├── node modules     # extra files
│   ├── public    
│   ├── src              # project folder
│   │   ├── assets      # svg files
│   │   ├── components
│   │   │   ├── navbar   
│   │   │   ├── pages 
│   │   ├── contexts

other files
│   ├── App.jsx   
│   ├── App.css    
│   ├── Content.js    
│   ├── firebase.js     
│   ├── index.css       
│   ├── main.jsx        
│   ├── manifest.json     
│   └── index.html       
└── README.md         
```
## Features

- Sign In and Sign up pages
- Add Task feature (including Pomodoro timer)
- Motivational quotes button
- Music button for background music to stay focused
- Blocks the websites that can be distracting
- Drag and Drop feature to set the tasks according to the priority

## Reporting Issues

If you find a bug, have a suggestion, or want to discuss something related to the project, please open an issue on the GitHub repository. Be sure to include a clear description and, if applicable, steps to reproduce the issue.

## Communication

Feel free to reach out to us through GitHub issues, discussions, or our [community forum]([link-to-forum](https://github.com/trishit78)) for any questions or ideas. We're excited to collaborate with you!

## Contributors ✨

Thanks goes to these wonderful people 💜
<table>
  <tr>
    <td align="center"><a href="https://github.com/trishit78"><img src="https://avatars.githubusercontent.com/u/90523629?v=4" width="100px;" alt=""/><br /><sub><b>Trishit Bhowmik</b></sub></a><br /><a href="#maintenance-Tlazypanda" title="Maintenance">🚧✍️🖥️</a></td>
    <td align="center"><a href="https://github.com/anurag472"><img src="https://avatars.githubusercontent.com/u/96650783?v=4" width="100px;" alt=""/><br /><sub><b>anurag472</b></sub></a><br /><a title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/arghadipmanna101"><img src="https://avatars.githubusercontent.com/u/130065095?v=4" width="100px;" alt=""/><br /><sub><b>Arghadip Manna</b></sub></a><br /> <a  title="Code">💻</a></td>
  </tr>
  </table>

## Contributor's Guide 🙌
Thank you for considering contributing to this project! Your involvement makes this project better. Feel free to explore new features, fix bugs, or improve the overall design.

Remember, every contribution, no matter how small, is highly valued. Let's build something amazing together! 🌟

Happy Coding! 🚀

