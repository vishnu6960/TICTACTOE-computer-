let state = ['', '', '', '', '', '', '', '', ''];
var current = 'X';

var winningCombinations = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],[0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]  ];


function step(x) {
  if (state[x] === '') {
    state[x] = current;
    document.getElementsByClassName('col')[x].innerText = current;
    if (winCheck()) {
      // alert(`${current} wins`)
      document.getElementById("decision").innerText = `${current} wins`
      setTimeout(() => {
        reset()
      }, 2000);
      // reset();
    } else if (state.indexOf('') === -1) {
      // alert("It's a draw");
      document.getElementById("decision").innerText = `It's a draw`
      setTimeout(() => {
        reset()
      }, 2000);
      // reset();
    } else {
      current = (current == 'X') ? 'O' : 'X';
      if (current == 'O') {
        computerTurn()
      }
    }
  }
}


function computerTurn() {
  setTimeout(() => {
    let emptyBoxes = state.reduce((acc, cell, index) => {
      if (cell == '') {
        acc.push(index);
      }
      return acc;
    }, []);

    let randomStep = Math.floor(Math.random() * emptyBoxes.length);
    let computerMove = emptyBoxes[randomStep];

    step(computerMove);
  }
  , 500);
}

function winCheck() {
  for (let item of winningCombinations) {
    let [a, b, c] = item;
    if (state[a] !== '' && state[a] == state[b] && state[a] == state[c]) {
      return true;
    }
  }
  return false;
}


function reset() {
  document.getElementById("decision").innerText = ""
  state = ['', '', '', '', '', '', '', '', ''];
  current = 'X';
  let arr = document.getElementsByClassName('col');
  for (let i = 0; i < arr.length; i++) {
    arr[i].innerText = '';
  }
}