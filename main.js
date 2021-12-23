var i = 0;
var txt = 'Hello, World!bI\'m Sarah.'; /* The text */
var speed = 70; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
      if (txt.charAt(i) === 'b') {
        document.getElementById("typewriter").innerHTML += '<br/>';
      } else {
        document.getElementById("typewriter").innerHTML += txt.charAt(i);
      }
    
    i++;
    setTimeout(typeWriter, speed);
  }
}
