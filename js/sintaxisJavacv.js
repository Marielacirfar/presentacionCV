
console.log ("Hola mundo");
let num1=2;
let num2=3;
let resultado= num1+num2;

console.log("El resultado de num1 y num2 es: "+resultado);


document.getElementById('boton').onclick = function (){

console.log ("Capturamos el evnto click");

document.getElementById("demo").innerHTML="Estamos probando evento en JS";

}

document.addEventListener('click', function(){

console.log("Hola mundo");
document.getElementById("demo").innerHTML="Estamos probando evento en JS";

});
document.getElementById('boton_color').addEventListener('click', function(){

	document.body.style.backgroundColor = '#FF0000';

}
);
document.getElementById('boton_defoul').addEventListener('click', function(){

	document.body.style.backgroundColor = 'lightgray';
	
}
);
document.getElementById('mail').addEventListener('click', function(){

	document.body.style.backgroundColor = 'lightgray';
	
}
);






