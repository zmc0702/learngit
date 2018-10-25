function loadXMLDoc(){
	var xmlhttp;
	if(window.XMLHttpRequest){
		// IE7+,Firefox,Chrome,Opera,Safari 浏览器执行代码
		xmlhttp = new XMLHttpRequest();
	}else{
		//IE6,IE5 浏览器执行代码
		xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange = function(){
		if(xmlhtttp.readystate == 4 && xmlhttp.status == 200){
			document.getElementById("ID").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("GET","../img/background.jpg",true);
	xmlhttp.send();
}
function addLoadEvent(func){
	var oldonload = window.onload;
	if(type window.onload != "function"){
		window.onload = func;
	}else{
		window.onload = function(){
			oldonload();
			func();
		}
	}
}

function insertAfter(newElement,targetElement){
	var parent = targetElement.parentNode;
	if(parent.lastChild == targetElement){
		parent.appendChild(newElement);
	}else{
		parent.insertBefore(newElement,targetElement.nextSibling);
	}
}

function addClass(element,value){
	if(!element.className){
		element.className = value;
	}else{
		newClassName = element.className;
		newClassName += "";
		newClassName += value;
		element.className = newClassName;
	}
}
//****************Home*****
function highlightPage(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	
}
$("header.nav.a")
