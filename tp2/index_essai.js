document.getElementById("validation").addEventListener("submit", function(e){
  
    //var erreur = document.getElementById("erreur");
   // e.preventDefault();


   // ca marche bien pour le nom 
  /*  var nom = document.getElementById("nom");
    var  erreur = document.getElementById("erreur");
  

    if(!nom.value){
       
           e.preventDefault();
            erreur.innerHTML = "Le nom est vide !" ;
      
   }else if(nom.value.length < 5) {
             e.preventDefault();
            var  erreur = document.getElementById("erreur");
            erreur.innerHTML = "Saisi au moins 5 caracteres !" ;
           

   }else{
       alert("formulaire envoyéé !!")
   } ca marche bien pour le nom fini ici */

   

   //boucle for pour tous les champs commence ici recuperer les inputs  !! 

var nom = document.getElementById("nom");
var prenom = document.getElementById("prenom");
var date = document.getElementById("date");
var adresse = document.getElementById("adresse");
var email = document.getElementById("email");
var erreur ;

if(!nom.value | nom.value.length<5){
    
    erreur = "Renseignez un nom qui contient au moins 5 caractères !";

}
if(!prenom.value | prenom.value.length<5){
    
    erreur = "Renseignez un prénom qui contient au moins 5 caractères !";

}
if(!date.value | date.value.length<5){
    
    erreur = "Renseignez une date valide";

}
if(!adresse.value | adresse.value.length<5){
    
    erreur = "Renseignez une adresse valide !";

}
if(!email.value | email.value.length<5){
    
    erreur = "Renseignez un Email valide !";

}
if(erreur){
    e.preventDefault();
    document.getElementById("erreur").innerHTML = erreur ;
}else{
    e.preventDefault();
    document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value ;
}
})