;( function( $, window, document, undefined ) {

/*--------------SIDEBAR--------*/

  $(function() {
  	

   $(".body-wrapper").removeClass("push"); 
   $(".user-infobar").removeClass("push-margin");
	/*$(".main-content,header,.masthead,.focal-point img").removeClass("push"); */
	$(".sidebar").hide();

    return $(".toggle").click(function() {
    	$(".body-wrapper").toggleClass("push");   
    	$(".user-infobar").toggleClass("push-margin");
     /* $(".main-content,header,.masthead, .focal-point img").toggleClass("push"); */  
      $(".sidebar").toggle();   
	  });
    
    /*if($(window).width() >= 993 && $(".body-wrapper").hasClass("push")){
     $(".user-infobar").toggleClass("push"); 
	//dohere
    } else{ $(".user-infobar").removeClass("push"); }*/

  });

//ON LOAD
  $(document).ready(function(){
	if (typeof $.fn.prettyPhoto == "function") {
		$("a[rel^='prettyPhoto[gal1]']").prettyPhoto({
				social_tools:false,
				overlay_gallery: false
		});
	}
	$("#responsive_headline").fitText();
	$("#responsive_headline2").fitText(1.2);
	$("#responsive_headline3").fitText(1.1, { minFontSize: '50px', maxFontSize: '75px' });
});
//Focuspoint
$('.focuspoint').focusPoint();

})( jQuery, window, document );


