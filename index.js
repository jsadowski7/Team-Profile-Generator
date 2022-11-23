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
                if (isNaN(nameInput)) {
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

// Employee Prompts
const addEmployee = () => {
    console.log(`
    Adding employees to the team...
    `);

    return inquirer.prompt ([
        {
           type: 'list',
           name: 'role',
           message: "Please choose your Employees role",
           choices: ['Engineer', 'Intern'] 
        },
        {
            type: 'input',
            name: 'name',
            message: "What is the name of the Employee?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an employees name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the employee's ID!");
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's email!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's Github username.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's Github username!");
                    return false;
                }
            } 
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school.",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter the intern's school!")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add more Team Members?",
            default: false
        }
    ])
    .then(employeeData => {
        // Data for Employee Types
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            return teamArray;
        }
    })
};

// Generate HTML Page using 'fs'
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // IF there is an err
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your Team Profile has successfully been created.")
        }
    })
};

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    });
