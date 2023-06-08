const kytu = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
const type = ['C', 'D', 'H', 'S']
const card = ["firstcard", "secondcard", "flopone", "floptwo", "flopthree", "turn", "river", "thirdcard", "fourthcard"]
let check_card = []
let my_money = 15
let opp_money = 15
let counter = 2
let check_bet = 1;
let betButton = document.getElementById("betbutton");
let newButtonsContainer = document.getElementById("newButtonsContainer");
let betMoney = document.getElementById("value");
let littleChip = document.getElementById("littlechip");

// sinh ngau nhien la bai
function randomCard() {
  const so = Math.floor(Math.random() * 13);
  const kieu = Math.floor(Math.random() * 4);
  let check = 1;
  for (let i = 0; i < check_card.length; ++i) {
    if (so === check_card[i][0] && kieu === check_card[i][1]) { check = 0; break; }
  }
  if (check === 1) {
    check_card.push([so, kieu]); return 0;
  }
  return randomCard();
}

// hand bai moi
function newHand() {
  if(check_bet === 0) return;
  console.log('new')
  newButtonsContainer.innerHTML = "";
  counter = 0;
  check_card = [];
  for (let i = 0; i <= 8; i++) {
    randomCard();
  }
  for (let i = 0; i <= 4; ++i) {
    const card_i = document.getElementById(card[i]);
    card_i.src = `/images/${kytu[check_card[i][0]]}${type[check_card[i][1]]}.png`
    card_i.style.opacity = 1;
  }
  for (let i = 5; i <= 8; ++i) {
    const card_i = document.getElementById(card[i]);
    card_i.src = `/images/off_face.png`
    card_i.style.opacity = 1;
  }
  check_bet = 0;
  littleChip.src = "";
  betMoney.innerText = "";
}

// lenh bet
function bet(bet_money) {
  console.log(bet_money);
  if(my_money<bet_money) return 0;
  littleChip.src = "/images/chip_poker.png";
  betMoney.innerText = `${bet_money}`;
  my_money -= bet_money;
  updateMyMoney();
  if(my_money === 0) window.location.href = "gameover.html";
  for (let i = 5; i <= 8; ++i) {
    const card_i = document.getElementById(card[i]);
    card_i.src = `/images/${kytu[check_card[i][0]]}${type[check_card[i][1]]}.png`
    card_i.style.opacity = 1;
  }
  check_bet = 1;
}



betButton.addEventListener("click", function() {
  if(counter === 0){
    for(let i = 1; i <= Math.min(3,my_money); ++i){
      let newButton = document.createElement("button");
      newButton.textContent = i;
      newButton.classList.add("detailBetButton");
      newButton.style.top = `630px`;
      newButton.style.left = `${1000+70*i}px`;
      newButton.addEventListener("click", function(){
        bet(i);
        newButtonsContainer.innerHTML = "";
        counter = 2;
      });
      newButtonsContainer.appendChild(newButton);
    }
  counter = 1;
  }
  else if(counter === 1){
    newButtonsContainer.innerHTML = "";
    counter = 2;
  }
});

// cap nhat so tien hien tai cua player
function updateMyMoney() {
  let myMoney = document.getElementById("myTotalMoney");
  myMoney.innerText = my_money;
}

