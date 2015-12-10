$(document).ready(function(){
  console.log("hi");
  if(localStorage.fire){
    $("#fire").val(localStorage.fire);
    console.log(localStorage.fire);
  }else{
    localStorage.fire = 0;
  }
  $("#fireclick").click( function(){
    clickFire();
  });
  $("#reset").click(function(){
    setFire(0);
  })
});

var setFire = function(num){
  localStorage.fire = num;
  $("#fire").html(num);
};

var setBellow = function(num){
  localStorage.bellow = num;
  $("#bellow").html(num);
};

var clickFire = function(){
  setFire(++localStorage.fire);
};
