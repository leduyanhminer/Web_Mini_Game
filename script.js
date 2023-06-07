const kytu = ['1', '2', '3', '4', '5', '6', '7', '8', '9', 'T', 'J', 'Q', 'K']
const type = ['C', 'D', 'H', 'S']
const card = ["firstcard", "secondcard", "flopone", "floptwo", "flopthree", "turn", "river", "thirdcard", "fourthcard"]
let check_card = []
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
function bet() {
  for (let i = 5; i <= 8; ++i) {
    const card_i = document.getElementById(card[i]);
    card_i.src = `/images/${kytu[check_card[i][0]]}${type[check_card[i][1]]}.png`
    card_i.style.opacity = 1;
  }
}