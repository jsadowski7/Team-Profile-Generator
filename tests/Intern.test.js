const Intern = require('../lib/Intern');

// Creates an intern object
test('Creates an Intern object', () => {
    const intern = new Intern('Jake', 90, 'jasadowski7@gmail.com', 'UT');

    expect(intern.school).toEqual(expect.any(String));
});

// Gets school from getSchool()
test('Gets Employee School', () => {
    const intern =  new Intern('Jake', 90, 'jasadowski7@gmail.com', 'UT');

    expect(inter.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Gets role from getRole()
test('Gets role of Employee', () => {
    const intern =  new Intern('Jake', 90, 'jasadowski7@gmail.com', 'UT');

    expect(intern.getRole()).toEqual("Intern");
});