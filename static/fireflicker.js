var clicks = 0;
var interval = 500;
$(document).ready(function(){
  //Assigning localstorage variables

  if(!localStorage.fire) localStorage.fire = 0;
  setFire(localStorage.fire);
  if(!localStorage.bellow) localStorage.bellow = 0;
  setBellow(localStorage.bellow);

  //Assigning Button Listeners
  initButtons();

  beginFiring(interval);
});

var initButtons = function(){
  $("#fireclick").click( function(){
    clickFire();
  });

  $("#reset").click(function(){
    reset();
  })
}

var reset = function(){
  for(var item in localStorage){
    localStorage[item] = 0;
  }
}

var beginFiring = function(num){
  window.setInterval(function(){
    $("#bellow").html(Number(localStorage.bellow) + clicks + " flames per second");
    clicks = 0;
    setFire(Number(localStorage.fire) + Number(localStorage.bellow));
  }, num);
};

var setFire = function(num){
  localStorage.fire = num;
  $("#fire").html(num);
};

var setBellow = function(num){
  localStorage.bellow = num;
  $("#bellow").html(num + " flames per second");
};

var clickFire = function(){
  setFire(++localStorage.fire);
  clicks++;
};
