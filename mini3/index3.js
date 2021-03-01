// $(document).ready(function(){alert("hello");})
// make an alert in jQuery

$(document).ready(function(){
// alert("hello");
$("#prince").draggable();
$("#sun").click(function(){
  $("#suntext").show();
});
// hover,click,dblclick
$("#beautiful").draggable();
$("#beautiful2").draggable();
$("#escape").draggable();
$("#escape2").draggable();
$("#miracle").draggable();
$("#stronglove").draggable();

$("#sun").click(function(){
  $("#r1").toggle();
  $("#r2").toggle();
  $("#r3").toggle();
  $("#r4").toggle();
  $("#r5").toggle();
  $("#r6").toggle();
  $("#r7").toggle();
});
// click b2,r1 disappear/show

// $("#sun").hover(function(){
//   $(this).hide();
// });
// hover on sun, sun disappears

// $("#escape").click(function(){
//   $("#r2").toggle();
// });

// $("#escape").hover(function(){
//   $("#escape2").append("无法逃离");
// });

// $("#escape2").hover(function(){
//   $("#r2").css("background-color","white");
//   $("#r2").addClass("classA");
// });

})
