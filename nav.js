$(document).ready(function() {
  $("#navbar_icon").click(function() {
    if($(".navbar").css("left") < "0px") {
      $(".navbar").animate({left: "0px"}, 300);
      $(this).animate({left: "0px"}, 200);
      $('.content').css("margin-left", "200px");
      $("body").css("overflow-x","hidden");
			$(".navbar").css("overflow-y","hidden");
    } else {
      $(".navbar").animate({left: "-145px"}, 300);
      $(this).animate({left: "75px"}, 100);
      $('.content').css("margin-left", "50px");
      $("body").css("overflow-x","hidden");
    }
  });
})
