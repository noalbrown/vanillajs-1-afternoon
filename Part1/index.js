// console.log('Hello')

const ticTacToe = [];

function play(click) {
  const player = document.getElementById('player')
  const clickedElement = document.getElementById(click);
  if (player.innertext === 'X') {
    player.innertext = 'O';
    clickedElement.innerText = 'X';
    ticTacToe[click] = 'X';
  } else {
    player.innertext = 'X'
    clickedElement.innerText = 'O';
    ticTacToe[click] = 'O';
  }
  console.log(ticTacToe);

  const topL = ticTacToe[0];
  const topC = ticTacToe[1];
  const topR = ticTacToe[2];
  const midL = ticTacToe[3];
  const midC = ticTacToe[4];
  const midR = ticTacToe[5];
  const botL = ticTacToe[6];
  const botC = ticTacToe[7];
  const botR = ticTacToe[8];

  if (topL !== undefined && topL === topC && topL === topR) {
    alert(`${topL} is the winner`);
    return;
  }
  if (midL !== undefined && midL === midC && midL === midR) {
    alert(`${midL} is the winner`);
    return;
  }
  if (botL !== undefined && botL === botC && botL === botR) {
    alert(`${botL} is the winner`);
    return;
  }
  if (topL !== undefined && topL === midL && topL === botL) {
    alert(`${topL} is the winner`);
    return;
  }
  if (topC !== undefined && topC === midC && topC === botC) {
    alert(`${topC} is the winner`);
    return;
  }
  if (topR !== undefined && topR === midR && topR === botR) {
    alert(`${topR} is the winner`);
    return;
  }
  if (topL !== undefined && topL === midC && topL === botR) {
    alert(`${topL} is the winner`);
    return;
  }
  if (botL !== undefined && botL === midC && botL === topR) {
    alert(`${botL} is the winner`);
    return;
  }

  let ticTacToeFull = true;
  for (let i = 0; i <= 8; i++) {
    if (ticTacToe[i] === undefined) {
      ticTacToeFull = false;
    }
  }
  if (ticTacToeFull === true) {
    alert("Cat's game, there is no winner");
  }
}


// function afterTheWinnerIsRevealed() {
//   document.getElementById('click').reset();
// }