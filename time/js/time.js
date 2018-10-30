//*******画刻度***/
		function rotation(){
			var hands=document.getElementById("hand");		  	   
		    var divs=new Array();
		    var j=0;
		  for(var i=0;i<30;i++){
		    //*********添加 div  	 	
		    var div=document.createElement("div");
		    	div.setAttribute("class","box4");		    	
		    	divs[i]=hands.appendChild(div);
	            div.style.transform="rotate("+j+"deg)";
		    	div.style.msTransform="rotate("+j+"deg)";
		    	div.style.webkitTansform="rotate("+j+"deg)";
		    	j+=6;
		   }		  		
	   }
	   //*****画数字***//
		function rotation2(){
			var hands=document.getElementById("shuzi");		  	   
		    var divs=new Array();
		    
		    
		  for(var i=1,j=120;i<13;i++){
		    //*********添加 div  
		    var div=document.createElement("div");
		    	div.setAttribute("class","box5");	
		        divs[i]=hands.appendChild(div);
	            divs[i].style.transform="rotate("+j+"deg)";
				divs[i].style.transFormOrigin="163px 10px";
				divs[i].style.msTransform="rotate("+j+"deg)";
				divs[i].style.msTransformOrigin="163px 10px"
				divs[i].style.webkitTransform="rotate("+j+"deg)";
				divs[i].style.webkitTransformOrigin="163px 10px";
		    	   j+=30;
		    divs[i].innerText=i;
		  }
	  }
		//******指针函数***///
	function gather(){		
		var  myDate=new Date();
		var h=myDate.getHours()*30+90;
		var f=myDate.getMinutes()*6+90;
		var m=myDate.getSeconds()*6+90;
		
		//*****时针***/
		
		var shis=document.getElementById("shi");			
		shis.style.transform="rotate("+h+"deg)";
		shis.style.transFormOrigin="143px 5px";
		shis.style.msTransform="rotate("+h+"deg)";
		shis.style.msTransformOrigin="143px 5px"
		shis.style.webkitTransform="rotate("+h+"deg)";
		shis.style.webkitTransformOrigin="143px 5px";		
		
		//******分针**////
		
		var fens=document.getElementById("fen");			
		fens.style.transform="rotate("+f+"deg)";
		fens.style.transFormOrigin="158px 3px";
		fens.style.msTransform="rotate("+f+"deg)";
		fens.style.msTransformOrigin="158px 3px"
		fens.style.webkitTransform="rotate("+f+"deg)";
		fens.style.webkitTransformOrigin="158px 3px";
		
		
		//*****秒针***//
		
		var miaos=document.getElementById("miao");			
		miaos.style.transform="rotate("+m+"deg)";
		miaos.style.transFormOrigin="168px 2px";
		miaos.style.msTransform="rotate("+m+"deg)";
		miaos.style.msTransformOrigin="168px 2px"
		miaos.style.webkitTransform="rotate("+m+"deg)";
		miaos.style.webkitTransformOrigin="168px 2px";			
	}
	    setInterval(gather,1000);
	   addLoadEvent(rotation);
	   addLoadEvent(rotation2);
	   
function addLoadEvent(func) {
	var oldonload = window.onload;
	if (typeof window.onload != 'function') {
		window.onload=func;
	} else {
		window.onload = function() {
			oldonload();
			func();
		}
	}
}