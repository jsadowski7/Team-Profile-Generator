const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        // Call employee constructor
        super(name, id, email);
        this.github = github;
    }
    // Return GitHub from Input
    getGithub () {
        return this.github = github;
    }
    // Override Employee role to Engineer
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;
