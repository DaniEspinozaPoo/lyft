//localStorage["#contacto-form"] = $("#nombre").val();
function ejemplo(){
	
	var num = Math.round(Math.random()*1000);

	alert("su codigo es" + num);
}



$(document).ready(function(){ 
   $('#contacto-form').submit(function(ev){  

		var nom = $('#nombre').val();
		var corr = $('#correo').val();
		var check = $('#test5').is(':checked');
		
		if (!check) {
			// aviso al usuario que debe aceptar los terminos
			$("#mensaje_error").html("Acepte los términos de Lift");
			// evitar que se mande formulario
			return false;
		}

		localStorage.setItem("nombre", nom);
		localStorage.setItem("correo", corr);

		document.getElementById("nombre").value = "";
		document.getElementById("correo").value = "";
   });


});

document.getElementById('correo').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOK');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    //Se muestra un texto a modo de ejemplo, luego va a ser un icono
    if (emailRegex.test(campo.value)) {
      valido.innerText = "válido";
    } else {
      valido.innerText = "incorrecto";
    }
});
 

//var nombre = localStorage.getItem("");
//var email = localStorage.getItem("");




//$('#contacto-form').on('submit', function(e){