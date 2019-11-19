

//$( document ).ready(function() {
    // ce code est exécuter une fois que toute la page est téléchargée par le navigateur
    // voir plus : https://www.w3schools.com/js/js_htmldom.asp
    // console.log( "DOM ready!" );
     
     // Y mettre le code jQuery pour valider tous les champs du formulaire
 

 function validation(){

    var error = "" ;
    var nom = $("#nom").val();
    var prenom = $("#prenom").val();
    var date_de_naissance = $("#date_de_naissance").val();
    var adresse = $("#adresse").val();
    var mail = $("#mail").val();

    if (nom.length < 5 ) {
        error +="nom";
        
    }
   if(error==""){
      $(".modal-title").text('salut ca va ' + nom);
      $('#myModal').modal("show");

   }
   $('#myModal').modal("show");

   }
//}

   /* if (prenom.length < 5 ) {
        error +="prenom";
    }
    if (date_de_naissance.length < 5 ) {
        error +="date_de_naissance";
    }
    if (adresse.length < 5 ) {
        error +="adresse";
    }
    if (mail.length < 5 ) {
        error +="mail";
    }*/
