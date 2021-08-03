//adding <button class='show'> </button> before all the elments with (.box) class
function insertBefore(el, referenceNode) {
  referenceNode.parentNode.insertBefore(el, referenceNode);
}
var ref = document.querySelector(".box");
var newEl = document.createElement('button');
newEl.className += "show";
ref.parentNode.insertBefore(newEl, ref);


// show answer click event
var show = document.getElementsByClassName("show");
var i;
for (i = 0; i < show.length; i++) {
  show[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var box = this.nextElementSibling;
    if (box.style.display === "block") {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
  });
}
