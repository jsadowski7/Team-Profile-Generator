const Engineer = require("../lib/Engineer");

test('Creates an Engineer object', () => {
    const engineer = new Engineer('Jake', 90, 'jasadowski7@gmail.com', 'jsadowski7');

    expect(engineer.github).toEqual(expect.any(String));
});

// Get github from getGithub()
test('Get GitHub value', () => {
    const engineer = new Engineer('Jake', 90, 'jasadowski7@gmail.com', 'jsadowski7');

    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Get Role from getRole()
test('Get Role of Employee', () => {
    const engineer = new Engineer('Jake', 90, 'jasadowski7@gmail.com', 'jsadowski7');

    expect(engineer.getRole()).toEqual("Engineer");
});