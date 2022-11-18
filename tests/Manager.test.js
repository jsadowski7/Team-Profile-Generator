const Manager = require('../lib/Manager');

// Creates a manager object
test('Creates a Manager object', () => {
    const manager = new Manager('Jake', 90, 'jasadowski7@gmail.com');

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// Get role from getRole()
test('Gets role of Employee', () => {
    const manager = new Manager('Jake', 90, 'jasadowski7@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});