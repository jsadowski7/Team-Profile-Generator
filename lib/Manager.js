// require employee
const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    // Override Employee role to Manager
    getRole () {
        return "Manager";
    }
}

module.exports = Manager;

