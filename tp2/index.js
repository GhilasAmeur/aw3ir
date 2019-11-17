
 

document.getElementById("validation").addEventListener("submit", function (e) {
    e.preventDefault();
  //  document.getElementById("erreur").style.display = "none";
 //document.getElementById("resultat").style.display = "none";
  
    //  PARTIE 1 POUR FAIRE AVEC TOUS LES CHAMPS 

    var erreur = "";
    // var erreur1;
    var inputs = document.getElementsByTagName("input")
    for (i = 0; i < inputs.length; i++) {
        if (!inputs[i].value && inputs[i].value.length < 5) {
            var id = inputs[i].id;
            var label = document.querySelector("[for='"+id+"']").textContent
            erreur += "Saisir " + label +"<br/>";
            break; // cest pour arreter la boucle dit que l'erreur est trouver
            //ca vaut dire champ vide
        }
    }
    if (erreur) {
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        document.getElementById("erreur").style.display = "block";
    } else {
      e.preventDefault();
      document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value ;
      document.getElementById("erreur").style.display = "none";
      document.getElementById("resultat").style.display = "block";
    }
    // PARTIE 1 POUR FAIRE AVEC TOUS LES CHAMPS
});














    /*  var nom = document.getElementById("nom") ;
      if(nom.length < 5) {
       erreur1 = "Remplissez 5 caractere svp ";
      }
      if(erreur1){
          erreur1 = document.getElementById("erreur1").innerHTML;
      }*/



    /*
     var nom = document.getElementById("nom") ;
     var prenom = document.getElementById("prenom") ;
     var date = document.getElementById("date") ;
     var adresse = document.getElementById("adresse") ;
     var email = document.getElementById("email") ;

     if(!email.value){
         erreur = "Remplissez le champ Email";
       }
       if(erreur){
           document.getElementById("erreur").innerHTML = erreur;
         }

           if(!adresse.value){
             erreur = "Remplissez le champ adresse";
           }
           if(erreur){
               document.getElementById("erreur").innerHTML = erreur;
             }
             if(!date.value){
                 erreur = "Remplissez le champ date";
               }
               if(erreur){
                   document.getElementById("erreur").innerHTML = erreur;
               }
                

                 if(!prenom.value){
                     erreur = "Remplissez le champ prenom";
                   }
                   if(erreur){
                       document.getElementById("erreur").innerHTML = erreur;
                   }

                   

                   if(!nom.value){
                     erreur = "Remplissez le champ nom";
                   }

                   */




    //alert("Formulaire envoyé !");
// })