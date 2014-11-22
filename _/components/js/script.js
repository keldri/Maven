/*$(window).scroll(function () {
    $('.sections').each(function () {
        var w = $(window).scrollTop();
        var t = $(this).offset().top - 100;
        if (w > t) {
           $("header").css('background-color', '#020d28');
		} 
    });
});*/



(function() {
  
  $(function() {
    
    var collapseMyMenu, expandMyMenu;

    expandMyMenu = function() {$("#menu-close").show();
      $("nav.sidebar ul a span.expanded-element").show();
      $("h1.logo").hide();
     

      return $("nav.sidebar").removeClass("sidebar-menu-collapsed").addClass("sidebar-menu-expanded");
    };
    collapseMyMenu = function() {$("#menu-close").hide();
 		$("nav.sidebar ul a span.expanded-element").hide(); 
 		$("h1.logo").show();
      return $("nav.sidebar").removeClass("sidebar-menu-expanded").addClass("sidebar-menu-collapsed");
    };
    $("#menu-close").hide();
    $("nav.sidebar ul a span.expanded-element").hide(); 
    $("#menu-close").click(function (e) {
        collapseMyMenu();
      });
    return $("#menu-toggle").click(function(e) {
      if ($("nav.sidebar").hasClass("sidebar-menu-collapsed")) {
        expandMyMenu();
        
      } 
    });
    
  });
}).call(this);