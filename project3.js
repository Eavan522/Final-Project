// display second navigation
$(document).ready(function() {
$(".nav1").hover(function() {
    $(".nav2").css("display", "block");
},function() {
    $(".nav2").css("display", "none");
});
});

// pet3
// top icon
function to1p() {
    let currentPosition, timer
  timer = setInterval(function () {
    currentPosition = document.documentElement.scrollTop || document.body.scrollTop
    currentPosition -= 10
    if (currentPosition > 0) {
      window.scrollTo(0, currentPosition)
    } else {
      window.scrollTo(0, 0)
      clearInterval(timer)
    }
  }, 1) 
}


