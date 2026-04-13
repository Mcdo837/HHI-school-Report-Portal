const side_menu = document.querySelector(".menu-menu");
const links_container = document.querySelector(".links-container");
let num = 0;
function show_menu(){
    
      side_menu.style.display = "flex";
      document.querySelector('.menu').src = "SVG's/close.jpg";
      num++;
      if(num > 1){
        hide_menu();
        num = 0;
      }
      //Iam A Genious
    }
function hide_menu(){
    side_menu.style.display = "none";
    document.querySelector(".menu").src = "SVG's/menu.jpg"
   }

//holdbutton menu
const button = document.getElementById('holdButton');
const redirectUrl = 'other pages/control-center.html'; // change to your URL
const holdDuration = 5000; // 10 seconds in ms

let holdTimer = null;
let isHolding = false;

function startHold() {
  if (isHolding) return; // prevent multiple timers
  isHolding = true;
  holdTimer = setTimeout(() => {
    // Redirect like an <a> tag would
    window.location.href = redirectUrl;
  }, holdDuration);
}

function cancelHold() {
  if (!isHolding) return;
  isHolding = false;
  clearTimeout(holdTimer);
}

// Mouse events for desktop
button.addEventListener('mousedown', startHold);
button.addEventListener('mouseup', cancelHold);
button.addEventListener('mouseleave', cancelHold); // cancel if mouse leaves button

// Touch events for mobile
button.addEventListener('touchstart', (e) => {
  e.preventDefault(); // prevents mouse events from also firing
  startHold();
});
button.addEventListener('touchend', cancelHold);
button.addEventListener('touchcancel', cancelHold);   