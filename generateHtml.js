function generateManager(manager){
    return `
  <div  class="custom-card  m-2">
    <div class="card flex-sm-row" style="width: 18rem;">
      <div class="card-body bg-primary">
        <h2 class="card-title text-light">${manager.name}</h2>
        <h4 class="card-subtitle mb-2 text-light"><i class="fa-solid fa-mug-hot"></i> Manager</h4>
        <ul class="list-group list-group-flush py-2">
          <li class="list-group-item">ID: ${manager.id}</li>
          <li class="list-group-item">email: <a href = "mailto: ${manager.email}"> ${manager.email} </a></li>
          <li class="list-group-item">Office: ${manager.office}</li>
        </ul>
      </div>
    </div>
  </div>
    `
};

function generateHTML(team) {
    let resultArr = []
    const managerArr = team.filter(isManager);
    const managerRes = managerArr.map(generateManager);
    resultArr.push(managerRes);
    return resultArr.join("\n")
};

function isManager(teamMember) {
    return (teamMember.getRole() === "Manager")
}

module.exports = team => {

  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>TEAM</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <script src="https://kit.fontawesome.com/4888969aff.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./style.css">
  </head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading bg-danger text-light">
                <h1 class="text-center">MICROSOFT TEAM</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${generateHTML(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
};