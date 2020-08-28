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
                <div class="card">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img src="${users[i].photo}" alt="Placeholder image">
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title name">${users[i].name}</p>
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
            </div>
            `+ auxUsers }
          
        }
    
    
    }
    
      printUsers(users.length)
      
    
      section.innerHTML =  auxUsers;

    })}