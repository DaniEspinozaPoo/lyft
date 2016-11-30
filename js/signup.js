$('#formulario-bandera').on('submit', function(e){
	// primero traemos el numero
	var numero = $('#mobile-number').val();
	
	// vemos si numero cumple o no los requisitos
	if (numero.length >= 9) {
		localStorage.setItem('number', numero);
		var codigo_generado = 'LAB-' + Math.round(Math.random() * 1000);
		// mostrar el codigo generado

		// guardarlo en localStorage
		
	} else if(numero.length < 9){
		$('#error-msg').attr('class', '')
		// avisarle al usuario de su error

		return false;
	}
})

$(document).ready(function(){ 
   $('#mobile-number').submit(function(ev){  

		var num = $('#mobile-number').val();

		localStorage.setItem("number", num);
		

		document.getElementById("number").value = "";
	
   });

   
});

function soloNumeros(e){
	var key = window.Event ? e.which : e.keyCode
	return (key >= 48 && key <= 57)
}