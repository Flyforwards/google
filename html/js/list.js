window.onload = function() {
	
	//初始布局
	var whheight = $(window).height(),
			hheight = $("header").height(),
			fheight = $("footer").height(),
			mheight = $(".main").height();
function Loop(){
	///alert(1);	
		myScroll = new IScroll('#contents', {
	         mouseWheel: true,
			
			resizeScrollbars: true,
			 snap:true
		});
		$("#contents").height(whheight - hheight - fheight - mheight);
		myScroll.refresh();
		myScroll.scrollTo(0,0,0);
	
}
	
	
	
	
//ajax初始化加载
    Initial();


//////tab切换
        var flag=0;
        var flag1=0;
	$(".main div").on("tap", function(e) {
		e.preventDefault();
		var index = $(this).index();
	
	
		$(this).css({
			"border-bottom": "4px solid blue"
		}).siblings().css({
			"border-bottom": "0"
		});
		$("#contents").children().children().eq(index).stop().show();
		$("#contents").children().children().eq(index).siblings().hide();
		Loop();
        
	
	
	//alert(index);
		       //第2页加载
		if (index == 1) {
			flag++;
			if(flag==1){
		        LiveBall();
		      
			}
		}
    
              //第三页加载
		if (index == 2) {
			flag1++;
			if(flag1==1){
		
			 beauGirl();
			
			
			}

		}

	})



	//初始化加载
function Initial(){
	$.ajax({
		type: "get",
		url: "http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
		async: true,
		data: {
			"category": 1
		},
		success: function(d) {
			var data = JSON.parse(d);
			var arr = data.data.tweetlist;
			$.each(arr, function(index, val) {
				//console.log(index);
				//console.log(val);
				var oDiv = $("<div>").appendTo($("#scroller"));
				//alert(oDiv);
				var oImg = $("<img>").attr("src", "http://101.200.173.217:8080/FootBall/" + val.defaultFilePath + "/" + val.thumbnailname).appendTo(oDiv);
                
				var oP = $("<p>").html(val.content).appendTo(oDiv);
				oImg[0].onload=function(){
					Loop();	
				}
				

			});

		}
	});
	

}
	

//第二页加载

function LiveBall(){
	
		$.ajax({
				type: "get",
				url: "http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
				async: true,
				data: {
					"category": 2
				},
				success: function(d) {
					var data = JSON.parse(d);
					var arr = data.data.tweetlist;
					$.each(arr, function(index, val) {
						//console.log(index);
						//console.log(val);
						var oDiv = $("<div>").appendTo($(".ball_live"));
						//alert(oDiv);
						var oImg = $("<img>").attr("src", "http://101.200.173.217:8080/FootBall/" + val.defaultFilePath + "/" + val.thumbnailname).appendTo(oDiv);
                      
						var oP = $("<p>").html(val.content).appendTo(oDiv);
				   oImg[0].onload=function(){
				   	 Loop();
				   }
						
				
					
					  

					});

				}
			});
		
	}

	
	//第三页加载函数
	function  beauGirl(){
		
		$.ajax({
				type: "get",
				url: "http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
				async: true,
				data: {
					"category": 3
				},
				success: function(d) {
					var data = JSON.parse(d);
					var arr = data.data.tweetlist;
					$.each(arr, function(index, val) {
						var oDiv = $("<div>").appendTo($(".ball_girl"));
						//alert(oDiv);
						var oImg = $("<img>").attr("src", "http://101.200.173.217:8080/FootBall/" + val.defaultFilePath + "/" + val.thumbnailname).appendTo(oDiv);
						var oP = $("<p>").html(val.content).appendTo(oDiv);
						$("p").css({
							    "text-align": "center",
							    "color":"#000",
							    "font-size": "14px",
							    "border": "1px solid #999",
							    "border-top": "0",
							    "line-height": "28px"
								})
						oImg[0].onload=function(){
							 Loop();
						}
					    
					});

				}
			});
		
	
		
		
	}
	
	
	
	










}