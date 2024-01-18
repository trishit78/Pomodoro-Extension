
# PRO-MO

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




Happy Coding! 🚀

