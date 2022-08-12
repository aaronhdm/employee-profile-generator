const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Manager = require('./manager');
const DIST_DIR = path.resolve(__dirname, "dist");
const distPath = path.join(DIST_DIR, "index.html");

let teamMembers = [];

const buildTeam = () => {
    if (!fs.existsSync(DIST_DIR)) {
      fs.mkdirSync(DIST_DIR);
    }
  const generateHTML = require('./generateHtml')
  fs.writeFile(distPath, generateHTML(teamMembers), "utf-8", (err) => {
    if (err) {
      console.log(err);
    }
  })
  }

const appMenu = () => {
  createManager();
};

const createManager = () => {
  askManagerQuestions()
  .then((answers) => {
    const manager = new Manager(answers.name, answers.id, answers.email, answers.office)
    teamMembers.push(manager);
    console.log(`Welcome ${answers.name}!`)
    buildTeam();
  })
  .catch((err) => console.error(err));
};

const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
    validate: (answer) => {
      if (answer) {
        return true;
      }
      return "Please enter your name!";
    }
  },
  {
    type: "input",
    message: "What is your ID number?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email"
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "office"
  },
]

const askManagerQuestions = () => {
  return inquirer.prompt(managerQuestions);
}

appMenu();