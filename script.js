var section = document.getElementById("section")

//  Iniciando com a requisição ao carregar a página:

function loadDb(){
console.log('estou dentro do loadDb')
// Usable variables:
  
  let result;
  var paramsQty = 4
  var auxUsers = []
// Objects:

function usersDb(
    name, username, email)
    {
    this.name = name,
    this.username = username,
    this.email = email
  }


    const arrayUsers =  fetch(
        "https://spreadsheets.google.com/feeds/cells/1-80ccEX-eT_W9lFoD4gpirBtjCk5s0gzw6Pa83uHCXY/1/public/full?alt=json"
      )
        .then(function(res){ 
          return res.json()})
        .then(function(jsonRes){
          result = jsonRes.feed.entry.map((row)=> row.content["$t"])  
       
// Variables which depends from the response:
var users = []
var objSize = Object
.keys(result)
.length


objSize = objSize/paramsQty






// Including the api response into the object:
for(i=0 ; i < objSize ; i++){
    count = i*paramsQty
   users[i] = new usersDb(
      result[count],
      result[count+1],
      result[count+2]
   )}


// Function which print users' users on the screen:
function printUsers(qty){
    while (   
      document
      .getElementById('section')
      .firstChild) {
      document
      .getElementById('section').
      removeChild(
      document
      .getElementById('section')
      .firstChild);
    }
    for(i=0 ; i < qty ; i++){


          auxUsers = auxUsers +`<div class="card" style=" margin: 20px; ">
          <header class="card-header">
            <p class="card-header-title">
            ${users[i].name}
            </p>
            <a href="#" class="card-header-icon" aria-label="more options">
              <span class="icon">
                <i class="fas fa-angle-down" aria-hidden="true"></i>
              </span>
            </a>
          </header>
          <div class="card-content">
            <div class="content">
            ${users[i].username}
              <br>
              ${users[i].email}
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Save</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
          </footer>
          </div>`
      
    }
}
  printUsers(users.length)

  section.innerHTML =  auxUsers;

})}