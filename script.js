$(document).ready(function(){
    $(".red-btn").click(function(){
        $("p:first").addClass("red");
      });

    $(".slidetoggle").click(function(){
        $(".toggle").slideToggle();
    });

    $("#hide").click(function(){
        $(".hide-show").hide();
    });

    $("#show").click(function(){
        $(".hide-show").show();
    });

    $(".toggle-btn").click(function(){
        $(".toggle-p").toggle();
    });

    $(".slide-down-btn").click(function(){
        $(".up-down-p").slideUp();
    });

    $(".slide-up-btn").click(function(){
        $(".up-down-p").slideDown();
    });

    $(".fade-out-btn").click(function(){
        $(".fade-p").fadeOut();
    });

    $(".fade-in-btn").click(function(){
        $(".fade-p").fadeIn();
    });

    $(".before-btn").click(function(){
        $(".before-p").before("<p>I just showed up before this paragraph!</p>");
    });

    $(".after-btn").click(function(){
        $(".after-p").after("<p>I just showed up after this paragraph!</p>");
    });

    $(".append-btn").click(function(){
        $(".append-p").append("<b>I am appended text!</b>");
    });

    $(".html-btn").click(function(){
        $("h1").html("Hiya!</b>");
    });

    $(".attr-btn").click(function(){
        $("img").attr("width", "200");
    });
    
    $(".val-btn").click(function(){
        $("input:text").val("My Name....(Ha Ha Ha!)");
    });

    $(".txt-btn").click(function(){
        $("p").text("Adios, Amigo!");
        $("h1").text("Adios, Amigo!");
        $("button").text("Adios, Amigo!");
    });

  });