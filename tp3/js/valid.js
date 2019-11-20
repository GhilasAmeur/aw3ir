$(document).ready(function(){
    
    var nom = $("#nom").val() ;

// le code précédent se trouve ici

$champ.keyup(function(){
    alert('Animation terminée !');
    if($(this).val().length < 5){ // si la chaîne de caractères est inférieure à 5
        $(this).css({ // on rend le champ rouge
            borderColor : 'red',
	    color : 'red'
        });
     }
     else{
         $(this).css({ // si tout est bon, on le rend vert
	     borderColor : 'green',
	     color : 'green'
	 });
     }
});





});
