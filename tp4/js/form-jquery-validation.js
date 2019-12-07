/*$( document ).ready(function() {
   $( "#datepicker-wdt" ).datepicker({dateFormat: 'dd/mm/yy', maxDate:new Date()});
    //$( "#datepicker-wdt" ).datepicker("show");
  
    });
  
  function validation(){
     console.log('validation marche bien');
        $('#myModal').modal("show");
  
  
     var error = "";
     var nom=$("#nom").val(); 
     var prenom=$("#prenom").val(); 
     var date_de_naissance=$("#datepicker-wdt").val(); 
     var adresse=$("#adresse").val(); 
     var mail=$("#mail").val(); 
  
  
        if(nom.length < 5) {
           error += "nom, ";
        }
        if(prenom.length < 5) {
           error += "prenom, ";
        }
        if(date_de_naissance.length < 5) {
           error += "date_de_naissance, ";
        }
        if(adresse.length < 5) {
           error += "adresse, ";
        }
        if(mail.length < 5) {
           error += "mail, ";
        }
  
  if(error == ""){
        $(".modal-title").text('Bienvenue ' + nom);
        $(".modal-body").html('vous êtes nés le '  + date_de_naissance+ ' et vous habitez : ' + '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + adresse + '&zoom=14&size=150x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"> </img> </br>' + adresse);
  }
  else{
        $(".modal-title").text('Message Modal');
        $(".modal-body").html('les champs '+error + ' doivent être remplis');
  }
  
     $('#myModal').modal("show");
  
  }
  */
$(document).ready(function () {
   // $("#datepicker-wdt").datepicker({ dateFormat: 'dd/mm/yy', maxDate: new Date() });
   //$( "#datepicker-wdt" ).datepicker("show");
   $("#gps").on("click", function(){
      getLocation();
   })
});

function validation() {
   console.log('validation marche bien');
  // $('#myModal').modal("show");


   var error = "";
   var nom = $("#name").val();
   var prenom = $("#firstname").val();
   var date_de_naissance = $("#birth").val();
   var adresse = $("#adresse").val();
   var mail = $("#mail").val();


   if (nom.length < 5) {
      error += "nom, ";
   }
   if (prenom.length < 5) {
      error += "prenom, ";
   }
   if (date_de_naissance.length < 5) {
      error += "date_de_naissance, ";
   }
   if (adresse.length < 5) {
      error += "adresse, ";
   }
   if (mail.length < 5) {
      error += "mail, ";
   }

   if (error == "") {
     // $(".modal-title").text('Bienvenue ' + nom);
    
      //$(".modal-body").html('vous êtes nés le '  + date_de_naissance+ ' et vous habitez : ' + '<img src="https://maps.googleapis.com/maps/api/staticmap?markers=' + adresse + '&zoom=14&size=150x150&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg"> </img> </br>' + adresse);
      contactStore.add(nom,prenom,date_de_naissance, adresse, mail);

      var list = contactStore.getList()
     // console.log(list);
      //console.log(list.length);
      $(function () {
        // var myArray = ["one", "two", "three", "four", "five"];
         $.each(list, function (index, value) {
             console.log(value);
         });
     });
      
      //for(var i = 0;i<list.length;i++){
        // console.log('Index = '+ i +' |valeur = '+list[i])
        //list.forEach(function(item){
           //console.log(list);

        //});
     // }
   }
   else {
     // $(".modal-title").text('Message Modal');
    //  $(".modal-body").html('les champs ' + error + ' doivent être remplis');
   }

  // $('#myModal').modal("show");

   
  

}

/*var form = document.getElementById("myForm");
form.addEventListener("button", function (event) {
   event.preventDefault();

  // sendData();
 });*/
