
   
     /*/ Le script qui devra calculer et afficher le nombre de mots et de caractères
     var nombreCaractere = $(this).val().length;
     // var nombreCaractere = $("#message").val().length;
     var msg = nombreCaractere + ' Caractere(s)';
     $('#compteur').text(msg); */
     $(document).ready(function(e) {
 
        $('#name').keyup(function() {
          var nombreCaractere = $(this).val().length;
          var msg =  nombreCaractere + ' Car ';
          $('#compteur').text(msg);
         // if (nombreCaractere > 200) { $('#compteur').addClass("mauvais"); } else { $('#compteur').removeClass("mauvais"); }
       
        
       
     
     
        $('#firstname').keyup(function() {
          var nombreCaractere = $(this).val().length;
          var msg =  nombreCaractere + ' Car ';
          $('#compteur1').text(msg);
         // if (nombreCaractere > 200) { $('#compteur').addClass("mauvais"); } else { $('#compteur').removeClass("mauvais"); }
       
        });
       
      });
   
   
    
   
  });