//$(function(){
//	$(".hand_left ul li").click(function(){
//		$(this).addClass("on").siblings().removeClass("on");
//	var len=$(".hand_left ul li").index(this);
//	var and=$(".hand_right div:lt("+len+")").height();
//	});
//});
//}); 
//
//$(function(){
//	$(".hand_left>ul>li").click(){
//		$(this).addClass("focus").siblings().removeClass("focus");
//	}
//})


//*********hand_left盒子固定***********//
$(function(){
	var list = $(".hand_left .us");
	var rightDivs = $("#hand_right div");
	var top=$(".hand_left").offset().top-80;
	$(window).scroll(function(){
		var scroll=$(window).scrollTop();
		if(scroll>=top){
			$(".hand_left").css({"position":"fixed","top":70})
		}else if(scroll<top){
			$(".hand_left").css({"position":"relative","top":70})
		}
		rightDivs.each(function(){
			
			var park=$(this).offset().top-50;
			  if(scroll>park){
			  	var index = $(this).index();
			  	list.removeAttr("id","focus").eq(index).attr("id","focus");
			  }
			  console.log(park) 
		})
		
	})	
	
	list.click(function(){
		var index=$(this).index();
		list.removeAttr("id","focus").eq(index).attr("id","focus");
	})
})
