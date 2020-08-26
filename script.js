var section = document.getElementById("section")

//  Iniciando com a requisição ao carregar a página:
function handleForm(){
  setTimeout(() => {
    window.location='/'
  }, 750);
}
function closeModal(){
  document.getElementById('edit-modal').style.display = 'none'
}
function handleDeleteUser(e){
// Usable variables:
  
let result;
var paramsQty = 5

// Objects:

  function usersDb(
    date, name,  username, email, editUrl)
      {
      this.date = date,
      this.name = name,
      this.username = username,
      this.email = email,
      this.editUrl = editUrl
    }
  
  
      fetch(
          "https://spreadsheets.google.com/feeds/cells/1WxMXjI2m_fEQ0zZ7pTpLwcJGEixCrM3N7r7s-q4skgE/1/public/full?alt=json"
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
        result[count+2],
        result[count+3],
        result[count+4]
     )}
  

  document.getElementById('edit-modal').style.display = 'flex'
  document.getElementById('edit-modal').style.opacity = 0


  let newURL = `${users[e].editUrl.substring(0,29)}/u/0/${users[e].editUrl.substring(30,91)}formResponse${users[e].editUrl.substring(99)}`
  
  
  document.getElementById('edit-modal').innerHTML = `<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"      
  onload="if(submitted) {window.location='./#user-${e}'}"></iframe> 
    <form name='shouldDeletForms' id="formId" onsubmit="handleForm()" 
    action="${ newURL }"
    target="hidden_iframe"
    method="POST"
    id="mG61Hd">
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
        <input class="input" type="text" placeholder="Exemplo: José Nascimento" name="entry.1696280753" value="Deleted" required>
        </div>
    </div>
    
    <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Exemplo: jsnasc" name="entry.954027946" value="Deleted" required>
        <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
        </span>
        </div>
    </div>
    
    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Exemplo: joaonasc@email.com" name="entry.829195258" value="Deleted" required>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
        </span>
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
        <button type="submit" class="button is-link">Salvar</button>
        </div>
        <div class="control">
        <button class="button is-link is-light" onclick="closeModal(e)" >Cancelar</button>
        </div>
    </div>
  </form>`

document.shouldDeletForms.submit()
handleForm()

})}
function handleEditForms(e){
// Usable variables:
  
let result;
var paramsQty = 5

// Objects:

  function usersDb(
    date, name,  username, email, editUrl)
      {
      this.date = date,
      this.name = name,
      this.username = username,
      this.email = email,
      this.editUrl = editUrl
    }
  
  
      fetch(
          "https://spreadsheets.google.com/feeds/cells/1WxMXjI2m_fEQ0zZ7pTpLwcJGEixCrM3N7r7s-q4skgE/1/public/full?alt=json"
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
        result[count+2],
        result[count+3],
        result[count+4]
     )}
  
setTimeout(() => {
  
  document.getElementById('edit-modal').style.display = 'flex'

}, 750);


  let newURL = `${users[e].editUrl.substring(0,29)}/u/0/${users[e].editUrl.substring(30,91)}formResponse${users[e].editUrl.substring(99)}`
  
  
  document.getElementById('edit-modal').innerHTML = `<iframe name="hidden_iframe" id="hidden_iframe" style="display:none;"      
  onload="if(submitted) {window.location='./#user-${e}'}"></iframe> 
    <form onsubmit="handleForm()" 
    action="${ newURL }"
    target="hidden_iframe"
    method="POST"
    id="mG61Hd">
    <div class="field">
        <label class="label">Name</label>
        <div class="control">
        <input class="input" type="text" placeholder="Exemplo: José Nascimento" name="entry.1696280753" value=" ${users[e].name}" required>
        </div>
    </div>
    
    <div class="field">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Exemplo: jsnasc" name="entry.954027946" value=" ${users[e].username}" required>
        <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-check"></i>
        </span>
        </div>
    </div>
    
    <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" placeholder="Exemplo: joaonasc@email.com" name="entry.829195258" value=" ${users[e].email}" required>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-small is-right">
            <i class="fas fa-exclamation-triangle"></i>
        </span>
        </div>
    </div>

    <div class="field is-grouped">
        <div class="control">
        <button type="submit" class="button is-link">Salvar</button>
        </div>
        <div class="control">
        <button class="button is-link is-light" onclick="closeModal(e)" >Cancelar</button>
        </div>
    </div>
  </form>`

})}

function loadDb(){
// Usable variables:
  
  let result;
  var paramsQty = 5
  var auxUsers = []
// Objects:

function usersDb(
  date, name,  username, email, editUrl)
    {
    this.date = date,
    this.name = name,
    this.username = username,
    this.email = email,
    this.editUrl = editUrl
  }

fetch(
        "https://spreadsheets.google.com/feeds/cells/1WxMXjI2m_fEQ0zZ7pTpLwcJGEixCrM3N7r7s-q4skgE/1/public/full?alt=json"
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
      result[count+2],
      result[count+3],
      result[count+4]
   )}


// Function which print users' users on the screen:

function printUsers(qty){
  // Function which handle the edit forms url


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
    for(i=1 ; i < qty ; i++){

      
          if(users[i].name!='Deleted'){auxUsers =  `<div id="user-${i}" class="card" style=" margin: 20px; ">
          <header class="card-header">
            <p class="card-header-title">
            ${users[i].name}
            </p>
            <span class="mt-2">#${i}</span>
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
            <a href="#user-${i}" class="card-footer-item" 
            onclick="handleEditForms(${i})" >Editar</a>
            <a href="#user-${i}" 
            onclick="handleDeleteUser(${i})" class="card-footer-item">Deletar</a>
          </footer>
          </div>` + auxUsers }
      
    }


}

  printUsers(users.length)
  

  section.innerHTML =  auxUsers;

  // document.getElementById('download').addEventListener('click', ()=>{
  //   let pdfFile = document.getElementById('section')
  //   var opt = {
  //     margin: 0,
  //     filename: 'myfile.pdf',
  //     image: { type: 'jpeg', quality: 0.98 },
  //     html2canvas: { scale: 2 },
  //     jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
  //   };
  //   html2pdf().from(pdfFile).set(opt).save()
  // })

})}
