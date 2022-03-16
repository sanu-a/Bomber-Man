const bombs = [];
let gamePoints = 0;
let canPlay = true;

function updateGamePoints() {
  const gamePointsElement = document.getElementById("gamePoints");
  gamePointsElement.innerHTML = "Game Point is " + gamePoints;
}

function refresh() {
  location.reload();
}

function addGrid() {
  const app = document.getElementById("app");
  for (let i = 0; i < 9; i++) {
    const row = document.createElement("div");
    for (let j = 0; j < 9; j++) {
      const index = i * 9 + j;
      const col = document.createElement("div");
      col.setAttribute("index", index);

      col.style.border = "1px solid black";
      col.style.display = "inline-block";
      col.style.height = "60px";
      col.style.width = "60px";
      col.style.textAlign = "center";
      col.style.verticalAlign = "middle";

      col.addEventListener("click", () => {
        if (canPlay) {
          if (bombs.includes(index)) {
            col.style.background = "red";
            setTimeout(() => {
              alert("Game over");
            }, 500);
            canPlay = false;
          } else if (!col.style.background) {
            col.style.background = "green";
            gamePoints++;
            updateGamePoints();
          }
        }
      });

      row.appendChild(col);
    }
    app.appendChild(row);
  }
}

function generateBombs() {
  while (bombs.length < 10) {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 81 && !bombs.includes(randomNumber)) {
      bombs.push(randomNumber);
    }
  }
}

addGrid();
generateBombs();
