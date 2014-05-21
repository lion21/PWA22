/*  
Susan Todd
Project Management App
5-5-2014
PWA-2
*/

(function($){
	console.log("ready");//ready


	$(".masterTooltip").hover(function()   {

		var title=$(this).attr("title");//setting title = current "title"

		$(this).data("tipText", title)
			   .removeAttr("title");

		$('<p class="tooltip"></p>').text(title)
									.appendTo("body")//append the title info to the body
									.fadeIn("slow")  ;

		//close hover, chain the hover out and remove tooltip fn						
	}, function(){

		//hover out and remove from page after use
		$(this).attr("title",  $(this).data("tipText") );

		$(".tooltip").remove();

		//chain mousemove for cursor position
	}).mousemove (function(e){

		var mousex=e.pageX + 20;//getting x-coordinate on pg-horizontal
		var mousey=e.pageY +10;//y co-ordiante-vertical

		$(".tooltip").css({top:mousey, left:mousex})
						 

	});//close tooltip fn


	/*==========Login Button====================*/	
	$("#signInButton").click(function(){

		var user = $("#user").val();
		var pass = $("#pass").val();
		console.log("pass working?");

		//ajax call
		$.ajax({
			url:"xhr/login.php",
			type:"post",
			dataType:"json",
			data:{

				username: user,
				password: pass

			},//put a comma before the success portion
			success:function(response){

				console.log("testing user");

				if(response.error){
					alert(response.error);
				}else{
					window.location.assign('admin.html');
				};//close else		

			}//close success part

		});//close ajax

	});//close signInButton
	

	/*==========Register=========================*/	
	//set up the reg fields w/variables to get the val()
	$("#register").on("click",function() {
		var firstname= $("#first").val();
		var lastname= $("#last").val();
		var username= $("#userName").val();
		var email= $("#email").val();
		var password= $("#password").val();


		$.ajax({

			url: "xhr/register.php",
			type: "post",
			dataType: "json",
			data:{

				 firstname: firstname,
				 lastname:  lastname,
				 username:  userName,
				 email:     email,
				 password:  password

			},  

			//put comma after }

			success:function(response){

				if(response.error){

					alert(response.error)
				}else{

					window.location.assign("admin.html")

				};//close else
			}//close ajax

	});//close ajax fn

	});//close register btn
	/*==========Link to Projects page============*/
	$(".projectsbtn").on("click", function(e){

		e.preventDefault();

		window.location.assign("projects.html")
	});	
	/*==========Add modal=========================*/
	//using delegation for click event

	$(".modalClick").on("click", function(e){

		 e.preventDefault();

		 $("#overlay").fadeIn()
					  .find("#modal")
		              .fadeIn();
	});	//close .modalClick

	$(".close").on("click", function(e){

		 e.preventDefault();						//modal working now

		 $("#overlay").fadeOut()
		              .find("#modal")
		              .fadeOut();//fade the modal out
	});//close  .close fn

	/*==========fade status btn====================*/	
	//use the timing to fade
	$(".mystatus").mouseover(function()  {

		$(this).fadeTo(100 ,.3);//


	} );//close .mystatus

	/*==========Template user id===================*/	
	/*==========add the projects page==============*/	

/*	
   $(".addButton").on("click", function(e){

		e.preventDefault();

		window.loaction.assign("add.html");////what is this window location since it is the modal
    })


   $(".dashboard").on("click", function(e){

		e.preventDefault();

		window.loaction.assign("admin.html");
    });
*/
/*===========Accordian for Projects Page=============*/
/*   $("ul .tabs").each(function() {
	//keeping trak of the active tab
	// context of $(this) = $active  //find anchors
	var $active , $content , $links = $(this).find ("a");

    //if location.hash matches one of the links then make it active
    //if not then use the first tab as the active tab
    $active = $($links.filter( '[href= "  ' + loaction.hash + '  "] ' ) [0]   ||    $link[0] );

    $active.addClass('active');//adding class .active
    $content=$($active[0].hash);


    //hide non-active data
    $links.not($active).each(function()  { 
	   $(this.hash).hide();

    });


//Bind this to  a click event
	$(this).on("click", "a" , function(e){

	   //remove class active after use
	   $active.removeClass("active");

    });

	$content.hide();

       //updating tabs w/ active class 
	   $active=$(this);
	   $content=$(this.hash);

       //make tab active
	   $active.addClass("active");
	   $content.show();

	   //prevent anchor bubbling actions
	   e.preventDefault();
 
	});
 
});//close tabs 


*/
		

})(jQuery); // end private scope


