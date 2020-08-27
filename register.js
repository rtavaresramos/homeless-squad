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
var paramsQty = 8

// Objects:

  function usersDb(
    date, name,  photo, learn,teach, linkedin,github, editUrl)
      {
      this.date = date,
      this.name = name,
      this.photo = photo,
      this.learn = learn,
      this.teach = teach,
      this.linkedin = linkedin,
      this.github = github,
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
        result[count+4],
        result[count+5],
        result[count+6],
        result[count+7],
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
var paramsQty = 8

// Objects:

function usersDb(
  date, name,  photo, learn,teach, linkedin,github, editUrl)
    {
    this.date = date,
    this.name = name,
    this.photo = photo,
    this.learn = learn,
    this.teach = teach,
    this.linkedin = linkedin,
    this.github = github,
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
      result[count+4],
      result[count+5],
      result[count+6],
      result[count+7],
   )}
  
setTimeout(() => {
  
  document.getElementById('edit-modal').style.display = 'flex'

}, 750);


  let newURL = `${users[e].editUrl.substring(0,29)}/u/0/${users[e].editUrl.substring(30,91)}formResponse${users[e].editUrl.substring(99)}`
  
  
  document.getElementById('edit-modal').innerHTML = `<div class="column is-three-fifths is-offset-one-fifth" >
  <iframe name="hidden_iframe" id="hidden_iframe" onload="if(submitted) {window.location='./#user-${e}'}" style="display:none;"      
 ></iframe> 
    <form onsubmit="handleForm()" 
    action="${ newURL }"
    target="hidden_iframe"
    method="POST"
    id="mG61Hd">
    <div class="field">
        <label class="label">Nome</label>
        <div class="control">
        <input class="input" type="text" placeholder="Exemplo: José Nascimento" value="${users[e].name}" name="entry.1696280753" required>
        </div>
    </div>
    
    <div class="field">
        <label class="label">Link para sua foto</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Exemplo: 'https://site/imagem.png'" value="${users[e].photo}" name="entry.954027946" required>
        <span class="icon is-small is-left">
            <i class="fas fa-user"></i>
        </span>
    </div>
    
    <div class="field">
        <label class="label">O que posso aprender?</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Exemplo:  HTML, CSS, Javascript, Git ..." value="${users[e].learn}" name="entry.829195258" required>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        </div>
    </div>
    <div class="field">
        <label class="label">O que posso ensinar?</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Exemplo: HTML, CSS, Javascript, Git ... " value="${users[e].teach}" name="entry.301341602" required>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        </div>
    </div>
    <div class="field">
        <label class="label">Linkedin</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Exemplo:  'https://linkedin/usuario'" value="${users[e].linkedin}" name="entry.515328309" required>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
        </span>
        </div>
    </div>
    <div class="field">
        <label class="label">Github</label>
        <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" placeholder="Exemplo:  'https://linkedin/usuario'" value="${users[e].github}" name="entry.1366875622" required>
        <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
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
  </form>
</div>
  `

})}

function loadDb(){
// Usable variables:
  
  let result;
  var paramsQty = 8
  var auxUsers = []
// Objects:

function usersDb(
  date, name,  photo, learn,teach, linkedin,github, editUrl)
    {
    this.date = date,
    this.name = name,
    this.photo = photo,
    this.learn = learn,
    this.teach = teach,
    this.linkedin = linkedin,
    this.github = github,
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
    result[count+4],
    result[count+5],
    result[count+6],
    result[count+7],
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

      
          if(users[i].name!='Deleted'){
            
            auxUsers = `
            <div class="container column is-one-third">
            <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img src="${users[i].photo}" alt="Placeholder image">
            </figure>
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content">
                <p class="title ">${users[i].name}</p>
                <a href="${users[i].linkedin}" target="_blank"><i class="mx-1 fab fa-linkedin fa-2x"></i></a>
                <a href="${users[i].github}" target="_blank"><i class="mx-1 fab fa-github fa-2x"></i></a>
              </div>
            </div>
            <p class="title is-4">
            O que posso aprender?
            </p>
            <div class="content">
            ${users[i].learn}
            </div>
            <p class="title is-4">
            O que posso ensinar?
            </p>
            <div class="content">
            ${users[i].teach}
            </div>
          </div>
          <footer class="card-footer">
          <a href="#user-${i}" class="card-footer-item" 
          onclick="handleEditForms(${i})" >Editar</a>
          <a href="#user-${i}" 
          onclick="handleDeleteUser(${i})" class="card-footer-item">Deletar</a>
        </footer>
        </div>
        </div>
        `+ auxUsers }
      
    }


}

  printUsers(users.length)
  

  section.innerHTML =  auxUsers;

})}
