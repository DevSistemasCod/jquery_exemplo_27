$(document).ready(function(){
  $("#flip").click(function(){
    $("#painel").slideDown(5000);
  });
  $("#stop").click(function(){
    $("#painel").stop();
  });
});
