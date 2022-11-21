// Function to generate html card for Manager
const generateManager = function (manager) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">
                <h2>${manager.name}</h2>
                <h3>Manager</h3><i class = "material-icons">content_paste</i>
            </div>
            
            <div class = "card-body">
                <p class = "id">ID: ${manger.id}</p>
                <p class = "email">Email: <a href = "mailto:${manager.email}">${manager.email}</a></p>
                <p class = "office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
        `;
};

// Function to generate html card for Engineer
const generateEngineer = function (engineer) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">
                <h2>${engineer.name}</h2>
                <h3>Manager</h3><i class = "material-icons">laptop_mac</i>
            </div>
            
            <div class = "card-body">
                <p class = "id">ID: ${engineer.id}</p>
                <p class = "email">Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></p>
                <p class = "github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
        `;
};

// Function to generate html for Intern
const generateIntern = function (intern) {
    return `
    <div class = "col-4 mt-4">
        <div class = "card h-100">
            <div class = "card-header">
                <h2>${intern.name}</h2>
                <h3>Manager</h3><i class = "material-icons">content_paste</i>
            </div>
            
            <div class = "card-body">
                <p class = "id">ID: ${intern.id}</p>
                <p class = "email">Email: <a href = "mailto:${intern.email}">${intern.email}</a></p>
                <p class="school">School: ${intern.school}</p>
            </div>
        </div>
        `;
};

// Push html to page
generateHTML = (data) => {
    // Array for cards
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        // Call Manager Function
        if (role === 'Manager') {
            const managerCard = generateManager(employee);
            pageArray.push(managerCard);
        }

        // Call Engineer Function
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);
            pageArray.push(engineerCard);
        }

        // Call Intern Function
        if (role === 'Intern') {
            const internCard = generateIntern(employee);
            pageArray.push(internCard);
        }
    }

    const employeeCards = pageArray.join('');
    
    // Return generated page
    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;
}

// Generate HTML page
const generateTeamPage = function (employeeCards) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header>
            <nav class="navbar" id="navbar">
                <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span> 
            </nav>
        </header>
        <main>
            <div class="container">
                <div class="row justify-content-center" id="team-cards">
                    <!-- Team Cards -->
                    ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
  `;
};

// Export to Index
module.exports = generateHTML;