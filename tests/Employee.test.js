const Employee = require('../lib/Employee');

test('Creates a new Employee object', () => {
    const employee = new Employee('Jake', 90, 'jasadowski7@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});
