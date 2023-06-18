
const table = document.createElement("table");
document.body.appendChild(table)

function drawCheesBoard() {
  for (let i = 1; i <= 8; i++) {
    const tr = document.createElement("tr");
    for (let j = 1; j <= 8; j++) {
      let color = (i + j) % 2 == 0 ? "white" : "black";
      tr.innerHTML += `<td id="id${i}${j}" class="horse ${color}"></td>`;
    }
    table.appendChild(tr);
  }
}

drawCheesBoard(8, 8);

const horses = [...document.querySelectorAll(".horse")];

function setHorse() {
  let randNum = Math.floor(Math.random() * 64);
  horses[randNum].innerHTML = `<img src="images/black-head-horse-side-view-with-horsehair (1).png">`;
}

setHorse()


function getHorseSteps() {
  const horsePos = document.querySelector("img").parentNode.id;
  let i = +horsePos.split("")[2];
  let j = +horsePos.split("")[3];
  if (i - 2 > 0 && j + 1 <= 8) {
    let a = document.querySelector(`#id${i - 2}${j + 1}`);
    a.style.cssText = "background-color:green;";
  }
  if (i - 2 > 0 && j - 1 > 0) {
    let a = document.querySelector(`#id${i - 2}${j - 1}`);
    a.style.cssText = "background-color:green;";
  }
  if (i - 1 > 0 && j - 2 > 0) {
    let a = document.querySelector(`#id${i - 1}${j - 2}`);
    a.style.cssText = "background-color:green;";
  }
  if (i - 1 > 0 && j + 2 <= 8) {
    let a = document.querySelector(`#id${i - 1}${j + 2}`);
    a.style.cssText = "background-color:green;";
  }
  if (i + 1 <= 8 && j - 2 > 0) {
    let a = document.querySelector(`#id${i + 1}${j - 2}`);
    a.style.cssText = "background-color:green;";
  }
  if (i + 1 <= 8 && j + 2 <= 8) {
    let a = document.querySelector(`#id${i + 1}${j + 2}`);
    a.style.cssText = "background-color:green;";
  }
  if (i + 2 <= 8 && j - 1 > 0) {
    let a = document.querySelector(`#id${i + 2}${j - 1}`);
    a.style.cssText = "background-color:green;";
  }
  if (i + 2 <= 8 && j + 1 <= 8) {
    let a = document.querySelector(`#id${i + 2}${j + 1}`);
    a.style.cssText = "background-color:green;";
  }
}

const horsePos = document.querySelector("img")
horsePos.addEventListener('click',() =>{
    getHorseSteps();
})
