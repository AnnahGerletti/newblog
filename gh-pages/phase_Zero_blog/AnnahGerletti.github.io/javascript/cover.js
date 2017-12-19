function unhide(unhide,hide){
  var div= document.getElementById(unhide);
  div.style.display='inline';
  div.classList.remove("fadeout");
  div.classList.add("fadein"); //fadein -> css class
  div= document.getElementById(hide);
  div.style.display='none';
  div.classList.remove("fadein");
  div.classList.add("fadeout");  // css class
}
