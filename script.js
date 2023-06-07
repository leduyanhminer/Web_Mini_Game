const kytu = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
const type = ['C', 'D', 'H', 'S']
const card = ["firstcard", "secondcard", "flopone", "floptwo", "flopthree", "turn", "river", "thirdcard", "fourthcard"]
let check_card = []
let my_money = 15
let opp_money = 15
let counter = 0
let betButton = document.getElementById("betbutton");
let newButtonsContainer = document.getElementById("newButtonsContainer");
let betMoney = document.getElementById("value");
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
}

// lenh bet
function bet(bet_money) {
  console.log(bet_money);
  if(my_money<bet_money) return 0;
  my_money -= bet_money;
  betMoney = bet_money;
  for (let i = 5; i <= 8; ++i) {
    const card_i = document.getElementById(card[i]);
    card_i.src = `/images/${kytu[check_card[i][0]]}${type[check_card[i][1]]}.png`
    card_i.style.opacity = 1;
  }
}

betButton.addEventListener("click", function() {
  if(counter === 0){
    for(let i = 1; i <= 3; ++i){
      let newButton = document.createElement("button");
      newButton.textContent = i;
      newButton.classList.add("detailBetButton");
      newButton.style.top = `630px`;
        newButton.style.left = `${1000+70*i}px`;
      newButton.addEventListener("click", function(){
        bet(i);
        newButtonsContainer.innerHTML = "";
        counter = 0;
      });
      newButtonsContainer.appendChild(newButton);

    }
  counter = 1;
  }
  else{
    newButtonsContainer.innerHTML = "";
    counter = 0;
  }
});