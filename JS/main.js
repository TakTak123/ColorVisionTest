const boxCount = 10;
let main_color_rgb = new Array(3);

function changeMainColor() { //問題の色を変更．
  "use strict";

  let main_color_box = document.getElementById("main_box");

  for (let i = 0; i < 3; i++) {
    main_color_rgb[i] = Math.floor(Math.random() * 256);
  }
  let text = "RGB(" + main_color_rgb + ")";
  main_color_box.style.backgroundColor = "rgb(" + main_color_rgb + ")"; 
  main_color_box.dataset.color = main_color_rgb; //datasetに色情報を追加．

  document.getElementById("main_color_text").innerText = text;
}

function changeColor(id) { //選択肢の色を変更．基本的にchangeMainColor()と同じだが，色はmainColorを基準にわずかに変更している．
  "use strict";

  let color_box = document.getElementById(id);
  let color_rgb = new Array(3);
  let color_rgb_text;

  for (let i = 0; i < 3; i++) {
    color_rgb[i] = main_color_rgb[i] + Math.floor(Math.random() * 2 + 10);
    if (color_rgb[i] > 255) {
      color_rgb[i] = 255;
    }
  }
  if (("box" + Math.ceil(Math.random() * boxCount)) === id) { //1つだけ問題と同じ色に設定
    for (let i = 0; i < 3; i++) {
      color_rgb[i] = main_color_rgb[i]
    }
  }
  color_rgb_text = "RGB(" + color_rgb + ")";
  color_box.style.backgroundColor = "rgb(" + color_rgb + ")"; 
  color_box.dataset.color = color_rgb;

}

function createColorBox() {
  "use strict";

  let container = document.getElementsByClassName("container");

  for (let i = 0; i < boxCount; i++) {
    let color_box = document.createElement("div");
    color_box.classList.add("box");
    color_box.setAttribute("id", "box" + String(i));
    container[0].appendChild(color_box); //getElementByClassName()は配列が返ってくる．
    // document.body.appendChild(color_box);
    color_box.addEventListener("click", function() { //正解か判定
      let main_color_box = document.getElementById("main_box");
      if (this.dataset.color === main_color_box.dataset.color) {
        document.getElementById("judge").innerText = "Correct!"
      }
      else {
        document.getElementById("judge").innerText = "Not Correct..."
      }
    }, false) 
    changeColor(color_box.id);
  }
}

changeMainColor();
createColorBox();
