const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call employee constructor
        super(name, id, email);
        this.github = github;
    }

}
// require employee
// github -- github username
// getGithub()
// getRole() -- overridden to return engineer