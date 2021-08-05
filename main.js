//$( "<p>Test</p>" ).insertBefore( ".box" );

let find = document.querySelectorAll(".box");
for (let i = 0; i < find.length; i++) {
find[i].insertAdjacentHTML('beforebegin', "<button class='show'>Show Answer</button>");
find[i].insertAdjacentHTML('afterend', "<hr style='border-color: #0000001a;margin:10px'>");
}

// show answer click event
let show = document.getElementsByClassName("show");
let i;
for (i = 0; i < show.length; i++) {
  show[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let box = this.nextElementSibling;
    if (box.style.display === "block") {
      box.style.display = "none";
    } else {
      box.style.display = "block";
    }
  });
}
