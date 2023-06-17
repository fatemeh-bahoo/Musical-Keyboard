$("button").click(function() {
    makeSound($(this).html());
    buttonAnimation($(this).html());
}); 

$("body").keydown(function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
})

function makeSound(key) {
  var audio;
  switch (key) {
    case "d":
      audio = new Audio('sounds/do.mp3');
    break;
    case "r":
      audio = new Audio('sounds/re.mp3');
    break;
    case "m":
      audio = new Audio('sounds/mi.mp3');
    break;
    case "f":
      audio = new Audio('sounds/fa.mp3');
    break;
    case "s":
      audio = new Audio('sounds/sol.mp3');
    break;
    case "l":
      audio = new Audio('sounds/la.mp3');
    break;
    case "t":
      audio = new Audio('sounds/ti.mp3');
    break;
     
    default: console.log($(this).html());
      break;
  }
  audio.play();
}

function buttonAnimation(currentKey) {
  var activeButton = $("." + currentKey);
  activeButton.addClass("pressed");
  
setTimeout(function() {
  activeButton.removeClass("pressed");
}, 100);
}