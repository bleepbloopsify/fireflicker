var clicks = 0;
var stoves = 0;
var campfires = 0;
var furnaces = 0;
var brickovens = 0;
var reactors = 0;
var volcanos = 0;

var interval = 500;
$(document).ready(function(){
  //Assigning localstorage variables

  if(!localStorage.fire) localStorage.fire = 0;
  setFire(localStorage.fire);
  if(!localStorage.bellow) localStorage.bellow = 0;
  setBellow(localStorage.bellow);
  //Assigning Button Listeners
  initButtons();
  expandFire();
  beginFiring(interval);
  clickUpgrade();
});

var initButtons = function(){
  $("#favicon").click( function(){
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
    // $("#favicon").css({
    //     'width': Number((localStorage.fire + 100)  * 1.001) + "px",
    //     'height': Number((localStorage.fire + 100) * 1.001) + "px"
    // });
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

var expandFire = function() {
  $('#favicon').click(function () {
    $(this).css({
        'width': $(this).width()  * 1.001,
        'height': $(this).height() * 1.001
    });
  })
};

var clickUpgrade = function() {
  possible = ["stove", "campfire", "furnace", "brickoven", "reactor", "volcano"];
  upgrades = $("#upgrades").children().click(function(){
    var price = possible.indexOf(this.id) + 1;
    if (localStorage.fire >= price * 100){
      setBellow(Number(localStorage.bellow) + price * 10);
      setFire(Number(localStorage.fire) - price * 100);
      console.log(parseInt(this.innerHTML));
    }
  });
};
