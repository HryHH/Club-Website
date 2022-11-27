var searchBox=document.getElementById("search-bar");
var Icon=document.getElementsByClassName("submit")[0];
Icon.onclick=function(){
    searchBox.classList.toggle("active");
}

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 800) {
    $('.bottomMenu').fadeIn();
  } else {
    $('.bottomMenu').fadeOut();
  }
});