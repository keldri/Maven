;( function( $, window, document, undefined ) {

function init_tabs() {
			
		//Does element exist
		if (!$('.tabs-bar ul').length){
		//if not, exit.
			return;
			}	

		//reveal initial content area
		 $('.tab-content:not(:first)').hide();

		// listen for click on tabs
		$('.tabs-bar ul li a').click(function(){
		
		//if not current tab...
		      if (!$(this).hasClass('current')) {
		
		 //change the current indicator
			      $(this).addClass('current').parent('li').siblings('li').find('a.current').removeClass('current');

		//Show target hide others  
				 $( $(this).attr('href')).show().siblings('.tab-content').hide();
				 $('tab_content-wrap').scrollTo();	
			   }		
		    
	   //no follow
			 this.blur();
				 return false;		
			});
		}

		$(document).ready(function(){
			init_tabs();		
		});
})( jQuery, window, document );