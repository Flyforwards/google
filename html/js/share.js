window.onload=function(){
	
	Loop();
	function Loop(){
		var whheight=$(window).height(),
	    hheight=$("header").height(),
	    fheight=$("footer").height();
	   
	var myScroll = new IScroll('#contents', {
		      vsScrollbar:false,
		      hsScrollbar:false,
              scrollbars:false
});
           //console.log( whheight, hheight,fheight);
	$("#contents").height(whheight-hheight-fheight-10);
	myScroll.refresh();
	
	}
	
	
	var userInfo1=window.localStorage;
	var loginId=userInfo1.getItem("loginuser");
	
//查看我关注的人
 viewP();
function viewP(){
	$.ajax({
		type:"get",
		data:{"loginsuserid":loginId},
		url:"http://localhost:8080/Proxy/FootBall/attention/json/queryall/followed.do",
		async:true,
		success:function(d){
		
		var data=JSON.parse(d);
	    var arr=data.data.userlist;
	    $.each(arr, function(index,val) {    
	    	  
	    	  
	
	    	  
	    });

			
		}
	});
	
}
	
	
//关注某人
 Visitedp();
function Visitedp(){
	$.ajax({
		type:"get",
		url:"http://localhost:8080/Proxy/FootBall/attention/json/follow.do",
		data:{"loginsuserid":loginId ,"tagetuserid":"654321"},
		async:true,
		success:function(d){
			var data=JSON.parse(d);
			console.log(data);
		}
	});
	
	
	
	
}
	
	
	
	
	
	
	
	
	
	
	
	
	
}
