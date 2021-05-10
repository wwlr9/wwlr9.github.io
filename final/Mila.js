  $(document).ready(function() {


$("#flames").click(function(){
  $("#ceiling").hide();
  $("#fire").show();
  $("#nextbegin").show();
});
$("#nextbegin").click(function(){
  $("#begin").hide();
  $("#family").show();
});
$("#nextfamily").click(function(){
  $("#family").hide();
  $("#accident").show();
  $("#fire").hide();
  $("#chip").show();
});
$("#nextaccident").click(function(){
  $("#accident").hide();
  $("#episode").show();
});

$("#nextkylo").click(function(){
  $("#nextkylo2").show();
});

$("#him").click(function(){
  $("#kylo").show();
  $("#nextkylolove").show();
});

$("#nextkylolove").click(function(){
  $("#kylolove").hide();
  $("#friend").show();
});

$("#nextfriend").click(function(){
  $("#friend").hide();
  $("#together").show();
});

$("#nexttogether").click(function(){
  $("#saving1").show();
  $("#saving2").show();
  $("#nexttogether").hide();
});

$("#saving1").click(function(){
  $("#t1").hide();
  $("#saving1").hide();
  $("#saving2").hide();

  $("#s1").show();
});

$("#thatchip").click(function(){
  $("#hug").hide();
  $("#chipbackground").show();
  $("#nexts1").show();

});

$("#nexts1").click(function(){
  $("#s11").show();
  $("#s1").hide();
});

$("#nexts11").click(function(){
  $("#s11").hide();
  $("#news2").show();
});

$("#newnexts2").click(function(){
  $("#saving3").show();
});



$("#newnexts11").click(function(){
  $("#saving3").show();
});


$("#girl").click(function(){
  $("#hug").show();
  $("#kylo").hide();
});

$("#saving2").click(function(){
  $("#t1").hide();
  $("#saving1").hide();
  $("#saving2").hide();
  $("#s2").show();

});

$("#nexts2").click(function(){
  $("#news1").show();

  $("#saving1").hide();
  $("#saving2").hide();
  $("#s2").hide();

});

$("#newthatchip").click(function(){
  $("#kylo").hide();
  $("#hug").hide();
  $("#chipbackground").show();
  $("#newnexts1").show();
});

$("#newnexts1").click(function(){
  $("#news1").hide();
  $("#newnexts1").hide();
  $("#news11").show();
});
$("#newnexts11").click(function(){
  $("#newsaving3").show();
});

$("#nexttrap").click(function(){
  $("#trap").hide();
  $("#sfire").hide();

  $("#ceiling2").show();
  $("#darkness").show();
});

$("#righthand").click(function(){
  $("#save2").show();
  $("#nextdarkness").show();
  $("#ceiling2").hide();

});

$("#nextdarkness").click(function(){
  $("#band").show();
  $("#darkness").hide();
});

$("#redband").click(function(){
  $("#save2").hide();
  $("#save3").show();
  $("#nextband").show();
  $(".saving3box").css('background-color','white');
  $("#band").css('color','black');
});

$("#nextband").click(function(){
  $("#band").hide();
  $("#thanks").show();
});

$("#nextthanks").click(function(){
  $("#agitate").show();
  $("#thanks").hide();
});

$("#nextagitate").click(function(){
  $("#blood").show();
  $("#d1").show();
  $("#d2").show();
  $("#agitate").hide();
  $("#save3").hide();
  $(".saving3box").hide();
});

$("#room").click(function(){
  $("#R").show();
  $("#floor").show();
  $("#vent").hide();
  $("#hurt").hide();
});

$("#floor").click(function(){
  $("#hurt").show();
  $("#R").hide();
  $("#nextsneak").show();
  $("#vent").hide();
  });

$("#nextsneak").click(function(){
  $("#R").show();
  $("#return").show();
  $("#sneak").hide();
  $("#hurt").hide();
  });

$("#nextreturn").click(function(){
  $("#return").hide();
  $("#finaldecision").show();
  });

$("#nextfinal").click(function(){
  $("#R").hide();
  $(".roombox").hide();
  $("#final").show();
  $("#f1").show();
  $("#f2").show();
  $("#HE").show();
  $("#BE").show();
  });

$("#hold").click(function(){
  $("#Kroom").hide();
  $("#forgive").show();
  $("#nexthe1").show();
  });

$("#nexthe1").click(function(){
  $("#he1").hide();
  $("#he2").show();
  });

$("#Kview").click(function(){
  $("#k1").show();
  $("#he2").hide();
  });

$("#rh").click(function(){
    $("#hold2").show();
    $("#nextk1").show();
    $("#forgive").hide();
    });

$("#nextk1").click(function(){
      $("#k2").show();

      $("#k1").hide();
      });

$("#nextk1").click(function(){
      $("#k3").show();

      $("#k2").hide();
      });
  })
