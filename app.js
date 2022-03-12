console.log("hola probando desde app js")



//trabajar manipulando el DOM


//javascript vanilla

let tomarTitulo = document.getElementById('idh1')

tomarTitulo.innerHTML = "probando Js Vanilla"

//Jquery
//a todos los elementos... "etiquetas"=> selectores


//llamadas por selectores
$('h2').html('probando Jquery');

//llamadas por ID
$('#idh2').html('Sabado 12/3');


//llamadas por Clases
$('.general1').html("probando muchos textos")

//llamadas por pseudoelementos
$('.contenedor h2:first').html('cambiando titulos h2')




function cambiarTitulo(){

    console.log('probando funcion ')

    $('#tituloForm').html('Complete el formulario')

    $('#tituloForm').hide();

}


