function setup(){
  createCanvas(window.innerWidth, window.innerHeight);
  noStroke();
}

var input = "";

function draw(){
  background(255);
}

$(function(){

  $('#pizzaToppings').keyup(function(){
    input = $('#pizzaToppings').val();
    $('#response').html(input);
  });

  $(document).contextmenu(function(){ // No right click
    return false;
  });
});
