const box_count = 9;
let main_color_rgb = new Array(3);

function createColorBox() {
  "use strict";

  let container = document.getElementsByClassName("container");

  for (let i = 0; i < box_count; i++) {
    let color_box = document.createElement("div");
    // color_box.parentNode.insert
    color_box.classList.add("box");
    color_box.setAttribute("id", "box" + String(i));
    container[0].appendChild(color_box); //getElementByClassName()は配列が返ってくる．

    color_box.addEventListener("click", function() { //正解か判定して，メッセージ表示．
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

  selectCorrectBox();
}

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

  for (let i = 0; i < 3; i++) { //問題の色を基準にわずかに色をずらす．
    color_rgb[i] = main_color_rgb[i] + Math.floor(Math.random()*2 + 6) * (-1)*Math.floor(Math.random()*2); 

    if (color_rgb[i] > 255) { //0~255を超える場合は矯正．
      color_rgb[i] = 255;
    }
    if (color_rgb[i] < 0) {
      color_rgb[i] = 0;
    }
  }

  color_rgb_text = "RGB(" + color_rgb + ")";
  color_box.style.backgroundColor = "rgb(" + color_rgb + ")"; 
  color_box.dataset.color = color_rgb;
}

function selectCorrectBox() { //正解のボックスを一つだけ選択する．
  "use strict";

  let correct_box_id = "box" + String(Math.floor(Math.random()*box_count));
  let correct_box = document.getElementById(correct_box_id);
  correct_box.style.backgroundColor = "rgb(" + main_color_rgb + ")";
  correct_box.dataset.color = main_color_rgb;
}


changeMainColor();
createColorBox();

document.getElementsByTagName("button")[0].addEventListener("click", function() { //ボタン押されたら色を変更．
  changeMainColor();
  for (let i = 0; i < box_count; i++) {
    changeColor("box" + i);
  }
  changeColor();
  selectCorrectBox();
})

