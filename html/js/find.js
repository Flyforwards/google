window.onload=function(){

	
		var whheight=$(window).height(),
	    hheight=$("header").height(),
	    sheight=$(".search").height(),
	    fheight=$("footer").height();
	   
      myScroll = new IScroll('#container', {
      	      scrollbarClass: 'myScrollbar',
              scrollbars:false,
              tap:true,
              zoom:true,
              onRefresh:function(){
              	alert(123);
              }
            
});         
           //console.log( whheight, hheight,fheight);
	$("#container").height(whheight-hheight-fheight-sheight-10);
	myScroll.refresh();
    
            
                          	

 var userInfo1=window.localStorage;
       var loginId=userInfo1.getItem("loginuser");
	   var num=$(".tit").val();
	  

//初始化 
$.ajax({
				type: "get",
				url: "http://localhost:8080/Proxy/FootBall/user/json/queryall.do",
				async: true,
				data: {
					"loginsuserid": loginId,
					"page.pageNo":1,
					"keyword":num
				},
				success: function(d) {
					var data = JSON.parse(d);
					var arr=data.data.userlist;
                          $.each(arr, function(index,val) {    
                          	   console.log(val);
                          	   var oMain=$("<div>").addClass("main");
                          	  var oLeft=$("<div>").addClass("slide_left").appendTo(oMain);
                          	   $("<img>").attr("src","http://101.200.173.217:8080/FootBall/"+val.avatarpath).appendTo(oLeft);
                          	   var oRight=$("<div>").addClass("slide_right").appendTo(oMain);
                          	   $("<p>").html(val.nickname).appendTo(oRight);
                          	   $("<p>").html(val.signnature).appendTo(oRight);
                          	   $("<span>").html("+关注").appendTo(oRight);
                          	   $("#scroller").append(oMain);
                          	  myScroll.refresh();
                          });
				}
			});
	

	
//ajax 数据调用

     
  $(".btn").on("tap",function(e){  
  	 e.preventDefault();
 		
  	 $("#scroller").empty();
  	  Sear();
  	
    	})
	function Sear(){
		$.ajax({
				type: "get",
				url: "http://localhost:8080/Proxy/FootBall/user/json/queryall.do",
				async: true,
				data: {
					"loginsuserid": loginId,
					
					"keyword":num
				},
				success: function(d) {
					var data = JSON.parse(d);
					var arr=data.data.userlist;
                          $.each(arr, function(index,val) { 
                          
                          	
                          	
                          	
                          	if(index<10){
                          		console.log(val);
                          	   var oMain=$("<div>").addClass("main");
                          	  var oLeft=$("<div>").addClass("slide_left").appendTo(oMain);
                          	   $("<img>").attr("src","http://101.200.173.217:8080/FootBall/"+val.avatarpath).appendTo(oLeft);
                          	   var oRight=$("<div>").addClass("slide_right").appendTo(oMain);
                          	   $("<p>").html(val.nickname).appendTo(oRight);
                          	   $("<p>").html(val.signnature).appendTo(oRight);
                          	   $("<span>").html("+关注").appendTo(oRight);
                          	   $("#scroller").append(oMain);
                          	  myScroll.refresh();
                          	  
                          	}
                          	 
                          });
				}
			});
	

	}

}

	

	
	















