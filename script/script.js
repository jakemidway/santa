var hamburger = document.querySelector('#hamburger');
var menu = document.querySelector('.menu'); 

var flagForHam = true;

function showNav(){
	if(flagForHam == true){
		menu.setAttribute('id','showMeMenu');
		flagForHam = false;
	}else{
		menu.setAttribute('id','menu');
		flagForHam = true;
	}
	console.log(flagForHam);
}
var btnMenu = document.querySelector('#menu');
var menu = document.querySelector('.main-menu');

var flagMenu = true;


function showNav(){

	if(flagMenu == true){
		menu.setAttribute('class', 'show-menu');
		flagMenu = false
	}else{
		menu.setAttribute('class', 'main-menu');
		flagMenu = true;
	}
	console.log("ok");
}




btnMenu.onclick = showNav;