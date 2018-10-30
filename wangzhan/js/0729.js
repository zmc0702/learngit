$(function(){
	$("#navigation ul li:has(ul)").hover(function(){
		$(this).childer("ul").stop(true,true).slideDown(400);
	},function(){
		$(this).children("ul").stop(true,true).slideUp("fast");
	});
})
//****函数比较**********//
/*1.方法名不同
2.方法名相同,但是参数个数不同
3.方法名相同,但是参数类型不同
4.方法名相同,参数顺序不同
5.方法与返回值无关
*/


//*********列表展开**************//
$(function(){
	$(".module_up_down").click(function(){
		$self=$(this);
		$self.prev().slideToggle(600,function(){
			if($self.prev().is(":visited")){
				//sss$self.prev().show();
				$("img",$self).prop("src","img/comment_icon.png")
			}else{
				//$self.prev().hide();
				$("img",$self).prop("src","img/arrows.png");
			}
		})
	})	
})
//***************左侧动态循环滚动************//

$(function(){
	  var $this = $(".scrollNews");
	  var scrollTimer;
$this.hover(function(){
	clearInterval(scrollTimer);
},function(){
	scrollTimer = setInterval(function(){
		scrollNews($this);
	},2000);
}).trigger("mouseleave");//****trigger下面省略*******//
/*var scrollTimer = setInterval(function(){
	scrollNews($this);
},2000);*/
});
function scrollNews(obj){
	var $self = obj.find("ul:first");
	var lineHeight = $self.find("li:first").height();
	$self.find("li:first").slideUp(1000,function(){
		$self.find("li:first").show().appendTo($self)
	})
	/*$self.animate({"marginTop":-lineHeight+"px"},600,function(){
		$self.css({marginTop:0}).find("li:first").appendTo($self);
	})*/
}
//*****添加超链接显示*****************//
$(function(){
	var x =10;
	var y = 20;
	$("a.tooltip").mouseover(function(e){
		this.myTitle = this.title;
		this.title = "";
		var tooltip = "<div id='tooltip'>"+this.myTitle+"</div>";
		$("body").append(tooltip);
		$("#tooltip").css({
			              "top":(e.pageY+y)+"px",
			              "left":(e.pageX+x)+"px"
		}).show("fast");
	}).mouseout(function(){
		this.title = this.myTitle;
		$("#tooltip").remove();
	}).mousemove(function(e){
		$("#tooltip").css({
			              "top":(e.pageY+y)+"px",
			              "left":(e.pageX+x)+"px"
		});
	});
});
//******************产品分类点击****************//
$(function(){
	$(".m-treeview>li>span").click(function(){
		var $ul = $(this).siblings("ul");
		if($ul.is(":visible")){
			$(this).parent().prop("class","m-collapsed");
			$ul.hide();
		}else{
			$(this).parent().prop("class","m-expanded");
			$ul.show();
		}
		return false;
	})
})
//*********右侧广告效果****************//
$(function(){
	var index = 0;
	$(".num li").mouseover(function(){
		index = $(".num li").index(this);
		showImg(index);
	}).eq(0).mouseover();
})
function showImg(index){
	var adHeight = $(".content_right .ad").height();
	$(".slider").stop(true,false).animate({top:-adHeight*index},1000);
	$(".num li").removeClass("on").eq(index).addClass("on");
}
$(function(){
	var len = $(".num>li").length;
	var index = 0;
	var adTimer;
	$(".num li").mouseover(function(){
		index = $(".num li").index(this);
		showImg(index);
	}).eq(0).mouseover();
	$(".ad").hover(function(){
		         clearInterval(adTimer);
	},function(){
		adTimer = setInterval(function(){
			showImg(index)
			index++;
			if(index==len){
				index=0;
			}
		},3000);
	}).trigger("mouseleave")
})
//***************右侧产品滚动效果***********//
$(function(){
	var page = 1;
	var i = 4;
	var len = $(".prolist_content ul li").length;
	var page_count = Math.ceil(len/i);
	var none_unit_width = $(".prolist").width();
	var $parent = $(".prolist_content");
	//向右
	$(".goright").click(function(){
		if(!$parent.is(":animated")){
			if(page==page_count){
				$parent.animate({left:0},800);
				page=1;
			}else{
				$parent.animate({left:'-='+none_unit_width},800);
				page++;
			}
		}
	});
	//向左
	$(".goleft").click(function(){
		if(!$parent.is(":animated")){
			if(page==1){
				$parent.animate({left:'-='+none_unit_width*(page_count-1)},800);
				page=page_count;
			}else{
				$parent.animate({left:'+='+none_unit_width},800);
				page--;
			}
		}
	});
});
//**********放大镜效果*/*//
$(function(){
	$(".content_right .prolist ul li").each(function(index){
		var position = $(this).offset();//offset
		var li_left = position.left;
		var li_top = position.top;
		var img_width= $(this).find("a>img").width();
		var img_height = $(this).find("a>img").height();
		var spanHtml = "<span id='span'></span>";
		$("#span").css({
			position:'absolute',
			'top':"+li_top+"+"px",
			'left':"+li_left+"+"px",
			'width':"+img_width+"+"px",
			'height':"+img_height+"+"px",
		});
		$(spanHtml).hover(function(){
			$(this).addClass("imageOver");
		},function(){
			$(this).removeClass("imageOver");
		}).appendTo($(this).find("a"));
	})
})
/*$(function(){
	var position = $(".prolist_content ul>li>a>img").offset();
	var left=position.left+10;
	var top=position.top+10;
	$(".prolist_content ul>li>a>img").mouseover(function(e){
		var tooTip = "<span id='tooTip'><img src='"+this.src+"' /></span>"
	    $(this).parent().append(tooTip);
	    $("#tooTip").css({position:"absolute",
	    'top':(e.pageY+top)+"px",'left':(e.pageX+left)+"px",

	    }).show("fast");
	}).mouseout(function(){
		$("#tooTip").remove();
	}).mousemove(function(e){
		$("#tooTip").css({
			position:"absolute",
			'top':(e.pageY+top)+"px",
			'left':(e.pageX+left)+"px"
		});
	});
});*/
