$(document).on( "pageinit", "#home", function() {
		alert("fdsfads");
		
	
	
	
	
		var user_kind ;
		
			    $("#Login_btn").click(function() {
        		$.mobile.changePage("chosse_sevices.html", { transition: "slideup", changeHash: false });
    });
	
        
        ;
	
	    $("input").focusin(function() {
		$(this).css("background-color", "#FFFFCC");
	});
			
	$("input").focusout(function() {
		$(this).css("background-color", "white");
	});
		
	$("#register_button").onclick(function () {
		alert("0.1");
		var fname = $("#fname").val();
		alert("0.111");
		var lname = $("#lname").val();
		var phone = $("#phone").val();
		var pwd = $("#pwd").val();
		var job = $("#job").val();
		//alert(job) ;
		alert("1");
		if(user_kind == 1) {
			alert("2");
			$.ajax({
						  url: 'http://localhost:8888/sabaak-server/get_all_laboor.php/regsiterNewClient/'+$fname+'/'+$lname+'/'+$phone+'/'+$pwd+',
						  type: 'POST',
						  //data: 'Long='+lng+'&Lat='+lat+'&laboor_id=1',
						  success: function(data) {
							  window.location = "index.html";
						  },
						  error: function(e) {
							alert("the phone number is alreaady regsitred with us");
						  }
						});
			
		}else if(user_kind == 2){
			alert("3");
			$.ajax({
						  url: 'http://localhost:8888/sabaak-server/get_all_laboor.php/regsiterNewLaboor',
						  type: 'POST',
						  //data: 'Long='+lng+'&Lat='+lat+'&laboor_id=1',
						  success: function(data) {
							  window.location = "index.html#";
						  },
						  error: function(e) {
							alert("the phone number is alreaady regsitred with us");
						  }
						});
			
		}else{
			alert("4");
		}
		
	});
		
	$("#customer_select").click(function() {
		user_kind = 1;
		document.getElementById("job").disabled=true;
	});
		
	$("#laboor_select").click(function() {
		
		user_kind = 2;
		document.getElementById("job").disabled=false;
	});
		
	});