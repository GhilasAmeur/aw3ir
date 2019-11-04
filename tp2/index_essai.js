document.getElementById("validation").addEventListener("submit", function(e){
    //var erreur = document.getElementById("erreur");
   // e.preventDefault();

    var nom = document.getElementById("nom");
    var  erreur = document.getElementById("erreur");
    var inputs = document.getElementById("input");
    if(!nom.value){
       
           e.preventDefault();
            erreur.innerHTML = "Le nom est vide !" ;
      
   }else if(nom.value.length < 5) {
             e.preventDefault();
            var  erreur = document.getElementById("erreur");
            erreur.innerHTML = "Saisi au moins 5 caracteres !" ;
           

   }else{
       alert("formulaire envoyéé !!")
   }
    /* else if(nom.value < 5) {
        erreur = "Saisi au moins 5 caractères !" ;
        console.log("erreur") ;
    }else{
        console.log("Formulaire bien envoyé !!")
    }*/
})