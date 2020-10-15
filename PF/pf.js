// titlle fadeIn
$("#title h1").fadeIn(1500);
setTimeout (function() {
  $("#title h2").fadeIn(1500);
},1000)

// titlle marker
if (window.matchMedia("(min-width:500px)").matches) {
  setTimeout (function() {
    $(".none").addClass("marker-anime").css("display", "block");
  },1500)
  
  setTimeout (function() {
    $(".none2").addClass("marker-anime2").css("display", "block");
  },1500)
} else {
    $(".none, .none2").css("display", "none");
}



// feature open
$("#open1").click(function() {
  $("#feature").css("display", "block");
  $("#hide1").css("display", "flex");
});

$("#open2").click(function() {
  $("#feature").css("display", "block");
  $("#hide2").css("display", "flex");
});

$("#open3").click(function() {
  $("#feature").css("display", "block");
  $("#hide3").css("display", "flex");
});

$("#open4").click(function() {
  $("#feature").css("display", "block");
  $("#hide4").css("display", "flex");
});

$("#open5").click(function() {
  $("#feature").css("display", "block");
  $("#hide5").css("display", "flex");
});

$("#open6").click(function() {
  $("#feature").css("display", "block");
  $("#hide6").css("display", "flex");
});

// feature close
$("#close").click(function() {
  $("#feature, .hide").css("display", "none");
});

// scroll
$("#scroll1").click(function() {
  $("html,body").animate({scrollTop:$('#works').offset().top}, 500, "linear");
});

$("#scroll2").click(function() {
  $("html,body").animate({scrollTop:$('#about').offset().top}, 500, "linear");
});

$("#scroll3").click(function() {
  $("html,body").animate({scrollTop:$('#skill').offset().top}, 500, "linear");
});

$("#scroll4").click(function() {
  $("html,body").animate({scrollTop:$('#contact').offset().top}, 500, "linear");
});

$("#top").click(function() {
  $("html,body").animate({scrollTop:$('#container').offset().top}, 500, "linear");
});

// scroll fadein
$(window).scroll(function (){
  $(".txts, .scroll-fadein").each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css("opacity", 1).css("translate", (0, 0));
          }
      });
  });

$(window).scroll(function (){
  $(".txts, .scroll-fadein").each(function(){
      var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
            $(this).css("opacity", 1).css("translate", (0, 0));
          }
      });
  });

