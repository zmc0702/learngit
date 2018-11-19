  function iFrameHeight(){
	var ifm=document.getElementById("midFraim");
	var subweb = document.frames ? document.frames["midFraim"].document : ifm.contentDocument;
     if(ifm != null && subweb != null){
     	ifm.style.height = "auto";
     	ifm .style.height = subweb.body.scrollHeight+"px";
     }
     return false;
}
  function changeIframe(){
  	    var ifm=document.getElementById("midFraim");
    	var imgku = document.getElementById("imgku");
    	var srcs = imgku.getElementsByTagName("a");
    	for(var i=0;i<srcs.length;i++){	
     			srcs[i].onclick=function(){
					var hrefs = this.href;

					ifm.setAttribute("src",hrefs)
					iFrameHeight();
				}
           }
}
addLoadEvent(iFrameHeight)
addLoadEvent(changeIframe)
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