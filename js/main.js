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

		}, function(){

			//hover out and remove from page after use
			$(this).attr("title", $(this).data("tipText") );
			$(".tooltip").remove();

		}).mousemove (function(e){

			var mousex=e.pageX + 20;//setting x-coordinate on pg-horizontal
			var mousey=e.pageY +10;//y co-ordiante-vertical
			$(".tooltip").css({top:mousey,
							   left:mousex})
						 

	});//close tooltip fn
	/*==========Login Button=========================*/	
	$("#signInButton").click(function(){

		var user = $("#user").val();
		var pass = $("#pass").val();
		console.log("pass working?");

	});
	

	/*==========Register=========================*/	
	/*==========Link to Projects page=========================*/
	$(".projectsbtn").on("click", function(e){

		e.preventDefault();
		window.loaction.assign(".projects.html")
	});	
	/*==========Add modal=========================*/
	$(".modalClick").on("click", function(e){
		 e.preventDefault();
		 $("#overlay").fadeIn()
		 .find("#modal")
		 .fadeIn();
	});	

	$(".close").on("click", function(e){
		 e.preventDefault();
		 $("#overlay").fadeOut()
		 .find("#modal")
		 .fadeOut();
	});
	/*==========fade status btn========================*/	
	/*==========Template user id=========================*/	

	/*==========add the projects page========================*/	
$(".addbtn").on("click", function(e){
		e.preventDefault();
		window.loaction.assign("add.html");
})


$(".dashboard").on("click", function(e){
		e.preventDefault();
		window.loaction.assign("admin.html");
});

/*===========Accordian for Projects Page=============*/
$("ul .tabs").each(function() {
	//keeping trak of the active tab
	// context of $(this) = $active  //find anchors
	var $active , $content , $links = $(this).find ("a");

//if location.hash matches one of the links then make it active
//if not then use the first tab as the active tab
$active = $($links.filter( '[href= "  ' + loaction.hash + '  "] ' ) [0]   ||     $link[0] );

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
		
//Crystal, I have tried to figure out what did not get closed , I know its a bracket somewhere. I will figure it out next week and get my images in place then too.
//Heres hoping my git hub works this week.
	
})(jQuery); // end private scope


