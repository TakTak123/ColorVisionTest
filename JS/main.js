const btnCount = 10;
const colorBtn = new Array(btnCount);

function createColorBtn() {
  "use strict"; 
  
  for (let i = 0; i < btnCount; i++) {
    colorBtn[i] = document.createElement("div");
    colorBtn[i].classList.add("box");
    colorBtn[i].setAttribute("id", String(i))
    document.body.appendChild(colorBtn[i]);
  
    colorBtn[i].addEventListener("click", function() {
        SetColor(i);
    } ,false);
  }
}

function setColor(index) {
  "use strict";
  colorBtn[index].style.backgroundColor = "#123456";
}

createColorBtn();
