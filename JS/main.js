const boxCount = 10;
let mainColorRGB = new Array(3);


function changeMainColor() { //問題の色を変更．
  "use strict";

  let mainColorBox = document.getElementById("mainBox");

  for (let i = 0; i < 3; i++) {
    mainColorRGB[i] = Math.floor(Math.random() * 256);
  }
  let text = "RGB(" + mainColorRGB + ")";
  mainColorBox.style.backgroundColor = "rgb(" + mainColorRGB + ")"; 
  mainColorBox.dataset.color = mainColorRGB; //datasetに色情報を追加．

  document.getElementById("mainColorText").innerText = text;
}

function changeColor(id) { //選択肢の色を変更．基本的にchangeMainColor()と同じだが，色はmainColorを基準にわずかに変更している．
  "use strict";

  let colorBox = document.getElementById(id);
  let colorRGB = new Array(3);
  let textColorRGB;

  for (let i = 0; i < 3; i++) {
    colorRGB[i] = mainColorRGB[i] + Math.floor(Math.random() * 2 + 10);
    if (colorRGB[i] > 255) {
      colorRGB[i] = 255;
    }
  }
  if (("box" + Math.ceil(Math.random() * boxCount)) === id) { //1つだけ問題と同じ色に設定
    for (let i = 0; i < 3; i++) {
      colorRGB[i] = mainColorRGB[i]
    }
  }
  textColorRGB = "RGB(" + colorRGB + ")";
  colorBox.style.backgroundColor = "rgb(" + colorRGB + ")"; 
  colorBox.dataset.color = colorRGB;

}

function createColorBox() {
  "use strict";

  let container = document.getElementsByClassName("container");

  for (let i = 0; i < boxCount; i++) {
    let colorBox = document.createElement("div");
    colorBox.classList.add("box");
    colorBox.setAttribute("id", "box" + String(i));
    container[0].appendChild(colorBox); //getElementByClassName()は配列が返ってくる．
    // document.body.appendChild(colorBox);
    colorBox.addEventListener("click", function() { //正解か判定
      let mainColorBox = document.getElementById("mainBox");
      if (this.dataset.color === mainColorBox.dataset.color) {
        document.getElementById("judge").innerText = "Correct!"
      }
      else {
        document.getElementById("judge").innerText = "Not Correct..."
      }
    }, false) 
    changeColor(colorBox.id);
  }
}

changeMainColor();
createColorBox();
