var fimg = [
  'π', 'π',
  'π', 'π',
  'π', 'π',
  'π', 'π',
  'π', 'π',
  'π', 'π',
  'π', 'π',
  'π', 'π'
];

var flag = 0;

var choiceCard = new Array();
var divValue = new Array();
var gameTrue = [false, false, false, false, false, false, false, false];
var divColor = new Array();


window.onload = document.querySelector('.bt').addEventListener("click", function () {
  document.querySelector('.game-bt').style.visibility = "hidden";
  var dp = document.querySelector('.game-display');
  var cardNum = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
  var ranNum = new Array();
  while (ranNum.length != cardNum.length) {
    let num = Math.floor(Math.random() * 16);
    if (ranNum.indexOf(num) == -1) {
      ranNum.push(num);
    }
  }

  console.log(ranNum);
  var divNum = 1;
  var ran = 0;
  for (var i = 0; i < 4; i++) {
    var lineDiv = document.createElement("div");
    lineDiv.setAttribute('class', 'line-div');
    for (var j = 0; j < 4; j++) {
      var cardDiv = document.createElement("div");
      cardDiv.setAttribute('class', "card-div" + divNum + " card-div");
      cardDiv.setAttribute('title', "card-div" + divNum);
      cardDiv.innerHTML = fimg[ranNum[ran]];
      cardDiv.setAttribute('data-idx', (cardNum[ranNum[ran++]]));
      cardDiv.setAttribute('onclick', "doClick(this)");
      lineDiv.append(cardDiv);
      divNum++;
    }
    dp.append(lineDiv);
  }

});
var click = 0;


function doClick(n) {
  if (flag == 0) {
    if(n.dataset.idx == 99){
      alert("μ΄λ―Έ λ€μ§ν μΉ΄λμλλ€!");
      return;
    }
    click++;
    choiceCard.push(n.dataset.idx);
    divValue.push(n.title);
    divColor.push(n);
    n.style.opacity = 1;
    n.style.background = "#FFD9EC";
    if (choiceCard.length == 2) {
      console.log("λκ° ν΄λ¦­ν¨");
      if (divValue[0] == divValue[1]) {
        console.log("κ°μ μΉ΄λ λλ² ν΄λ¦­ κΈμ§");
        cardflip();
        alert("κ°μ μΉ΄λ λλ²μ΄μ ν΄λ¦­ κΈμ§!");
        return;
      } else {
        cardCheck(n);
        return;
      }
    }
  } else {
    cardflip();
    console.log("μ¬μμ f5")
    alert("F5λ₯Ό λλ₯΄μΈμ");
    return;
  }

}

var check = 0;
var end = 0;
function cardCheck(n) {

  if (choiceCard[0] == choiceCard[1] && choiceCard[0] != 99) {
    console.log("κ°μ")
    // console.log(end++);
    gameTrue[check++] = true;
    divColor[0].dataset.idx = 99;
    divColor[1].dataset.idx = 99;
    console.log(divColor, "    ---",n);
    n.dataset.idx = 99;
    if (gameTrue[0] == true && gameTrue[1] == true && gameTrue[2] == true && gameTrue[3] == true &&
      gameTrue[4] == true && gameTrue[5] == true && gameTrue[6] == true && gameTrue[7] == true) {
      end = 0;
      flag = 1;
      document.querySelector('.game-over').style.visibility = "visible";
      document.querySelector('#click-cnt').innerHTML = "μ΄ ν΄λ¦­ μ : "+click;
      click = 0;
      return;
    }
    console.log(divColor);
    divColor[0].style.background = "#B2CCFF";
    divColor[1].style.background = "#B2CCFF";
    divValue = [];
    choiceCard = [];
    divColor = [];
    return;
  } else {
    console.log("λ¬λΌ : ", divColor)
    setTimeout(cardflip,300);
    return;
  }
}

function cardflip(){
  divColor[0].style.opacity = 0;
  divColor[1].style.opacity = 0;
  divColor[1].style.background = "white";
  divColor[0].style.background = "white";
  divValue = [];
  choiceCard = [];
  divColor = [];
  return;
}



