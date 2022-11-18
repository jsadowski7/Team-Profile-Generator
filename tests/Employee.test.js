const Employee = require('../lib/Employee');

test('Creates a new Employee object', () => {
    const employee = new Employee('Jake', 90, 'jasadowski7@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

// Gets employee name from getName()
test('Gets Employee name', () => {
    const employee = new Employee('Jake', 90, 'jasadowski7@gmail.com');
  
    expect(employee.getName()).toEqual(expect.any(String));
  });
  
  // Gets employee ID from getId()
  test('Gets Employee ID', () => {
    const employee = new Employee('Jake', 90, 'jasadowski7@gmail.com');
  
    expect(employee.getId()).toEqual(expect.any(Number));
  });
  
  // Gets employee Email from getEmail()
  test('Gets Employee Email', () => {
    const employee = new Employee('Jake', 90, 'jasadowski7@gmail.com');
  
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
  });
  
  test('Gets role of Employee', () => {
    const employee = new Employee('Jake', 90, 'jasadowski7@gmail.com');
  
    expect(employee.getRole()).toEqual("Employee");
  });