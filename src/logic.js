export function drawCards(number) {
  const num = number / 2;
  let res = [];
  for (let i = 0; i < num; i++) {
    let newNum = Math.floor(Math.random() * 52) + 1;
    res.push(newNum);
  }
  return res;
}

export function shuffleCards(cards) {
  let cardsList = [...cards, ...cards];
  for (let i = cardsList.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    [cardsList[i], cardsList[j]] = [cardsList[j], cardsList[i]];
  }
  return cardsList;
}
