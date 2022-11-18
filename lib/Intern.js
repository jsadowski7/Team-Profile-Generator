// require employee
const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    // Return school from Input
    getSchool () {
        return this.school = school;
    }
    // Override Employee role to Intern
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;
// school
// getSchool()
// getRole() -- overridden to return intern