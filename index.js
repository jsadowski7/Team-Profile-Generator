// Link to HTML page creation
const generateHTML = require('./src/generateHTML');

// Team Profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// Node Modules
const fs = require('fs');
const inquirer = require('inquirer');
const { off } = require('process');

const teamArray = [];

// Manager Prompts from Inquirer
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Who is the Team Manger?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Manager ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the Manager's ID.");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Manager's Email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's email!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Manager's office number.",
            validate: nameInput => {
                if (isNan(nameInput)) {
                    console.log("Please enter the Manager's office number!");
                    return false;
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const { name, id, email, officeNumber } = managerInput;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
    })
};
