const employee = require("./lib/employee");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const emailValidator = require('email-validator');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRender");
let team = [];
let canAddManager = true;
// start of questions
const questions = {
    Manager: [
        {
            type: "input",
            name: "name",
            message: "Who is the manager?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the manager's name." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Enter manager's ID",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter manager's ID" }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Enter manager's email address",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Please enter the email address.' }
            },
        },
        {
            type: "input",
            name: "officeNumber",
            message: "Enter the manager's office number",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the manager's office number." }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"]
        }
    ],

    Engineer: [
        {
            type: "input",
            name: "name",
            message: "Enter the engineer's name",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the engineer's name." }
            },
        },

        {
            type: "input",
            name: "id",
            message: "Enter the engineer's id",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter engineer's id." }
            },
        },

        {
            type: "input",
            name: "email",
            message: "Enter the engineer's email address",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Enter an email address please.' }
            },
        },

        {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Please enter the Engineer's GitHub." }
            },
        },

        {
            type: "list",
            name: "addNew",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"]
        }
    ],



    Intern: [
        {
            type: "input",
            name: "name",
            message: "Enter the intern's name",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter intern's name please." }
            },
        },
        {
            type: "input",
            name: "id",
            message: "Enter the intern's id",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter intern's id please." }
            },
        },
        {
            type: "input",
            name: "email",
            message: "Enter the intern's email address",
            validate: (value) => {
                if (emailValidator.validate(value)) {
                    return true
                } else { return 'Enter a valid email address please.' }
            },
        },
        {
            type: "input",
            name: "school",
            message: "Which school is the intern attending?",
            validate: (value) => {
                if (value) {
                    return true
                } else { return "Enter the name of the school please" }
            },
        },
        {
            type: "list",
            name: "addNew",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"]
        }
    ]
};



// Has you categorize the employees role
const selectEmployeeType = [
    {
        type: "list",
        name: "employeeType",
        message: "Please choose the role for the employee",
        choices: ["Manager", "Engineer", "Intern"],
    }
];





function addNewMember() {
    inquirer.prompt(selectEmployeeType)
        .then(answer => {


            // console.log(answer.employeeType);

            if (answer.employeeType === "Manager") {
                if (canAddManager) {
                    inquirer.prompt(questions.Manager)
                        .then(answer => {
                            const manager = new Manager
                                (
                                    answer.name,
                                    answer.id,
                                    answer.email,
                                    answer.officeNumber
                                );
                            team.push(manager);
                            canAddManager = false;
                            if (answer.addNew === "yes") {
                                addNewMember();
                            } else {
                                generate();
                            }
                        });
                } else {
                    console.log("A manager has already been inputed!")
                    addNewMember();
                }


            } else if (answer.employeeType === "Engineer") {
                inquirer.prompt(questions.Engineer)
                    .then(answer => {
                        const engineer = new Engineer
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.github
                            );
                        team.push(engineer);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });

            } else if (answer.employeeType === "Intern") {
                inquirer.prompt(questions.Intern)
                    .then(answer => {
                        const intern = new Intern
                            (
                                answer.name,
                                answer.id,
                                answer.email,
                                answer.school
                            );
                        team.push(intern);
                        if (answer.addNew === "yes") {
                            addNewMember();
                        } else {
                            generate();
                        };
                    });
            };
        });
};

addNewMember();
    fs.writeFileSync(outputPath, render(team), "utf-8");
    process.exit(0);
}
