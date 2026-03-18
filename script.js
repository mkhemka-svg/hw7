const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// ===== LOAD SPRITES =====
const fireboyImg = new Image();
fireboyImg.src = "assets/fireboy_sheet.png";

const watergirlImg = new Image();
watergirlImg.src = "assets/watergirl_sheet.png";

// ===== PLAYER CLASS =====
class Player {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.width = 40;
    this.height = 50;

    this.velY = 0;
    this.speed = 4;
    this.jumpPower = -12;

    this.color = color;
    this.onGround = false;
  }

  draw() {
    if (this.color === "fire") {
      ctx.drawImage(fireboyImg, 0, 200, 200, 200, this.x, this.y, 50, 50);
    } else {
      ctx.drawImage(watergirlImg, 0, 100, 200, 200, this.x, this.y, 50, 50);
    }
  }

  update() {
    this.velY += 0.5; // gravity
    this.y += this.velY;

    this.onGround = false;

    // COLLISION WITH PLATFORMS
    platforms.forEach(p => {
      if (
        this.x < p.x + p.w &&
        this.x + this.width > p.x &&
        this.y < p.y + p.h &&
        this.y + this.height > p.y
      ) {
        this.y = p.y - this.height;
        this.velY = 0;
        this.onGround = true;
      }
    });

    // HAZARDS
    hazards.forEach(h => {
      if (
        this.x < h.x + h.w &&
        this.x + this.width > h.x &&
        this.y < h.y + h.h &&
        this.y + this.height > h.y
      ) {
        if (h.type !== this.color) {
          alert(this.color + " died!");
          location.reload();
        }
      }
    });

    // GEMS
    gems.forEach(g => {
      if (!g.collected &&
        this.x < g.x + 20 &&
        this.x + this.width > g.x &&
        this.y < g.y + 20 &&
        this.y + this.height > g.y
      ) {
        if (g.type === this.color) {
          g.collected = true;
        }
      }
    });

    // DOORS
    doors.forEach(d => {
      if (
        this.x < d.x + 40 &&
        this.x + this.width > d.x &&
        this.y < d.y + 60 &&
        this.y + this.height > d.y
      ) {
        if (d.type === this.color) {
          d.open = true;
        }
      }
    });
  }
}

// ===== OBJECTS =====
const fireboy = new Player(100, 300, "fire");
const watergirl = new Player(200, 300, "water");

const platforms = [
  {x: 0, y: 550, w: 1000, h: 50},
  {x: 200, y: 450, w: 200, h: 20},
  {x: 500, y: 350, w: 200, h: 20}
];

const hazards = [
  {x: 300, y: 530, w: 100, h: 20, type: "water"},
  {x: 600, y: 530, w: 100, h: 20, type: "fire"}
];

const gems = [
  {x: 250, y: 420, type: "fire", collected: false},
  {x: 550, y: 320, type: "water", collected: false}
];

const doors = [
  {x: 900, y: 490, type: "fire", open: false},
  {x: 850, y: 490, type: "water", open: false}
];

// ===== CONTROLS =====
const keys = {};

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);

// ===== GAME LOOP =====
function update() {
  // FIREBOY (arrow keys)
  if (keys["ArrowLeft"]) fireboy.x -= fireboy.speed;
  if (keys["ArrowRight"]) fireboy.x += fireboy.speed;
  if (keys["ArrowUp"] && fireboy.onGround) fireboy.velY = fireboy.jumpPower;

  // WATERGIRL (WASD)
  if (keys["a"]) watergirl.x -= watergirl.speed;
  if (keys["d"]) watergirl.x += watergirl.speed;
  if (keys["w"] && watergirl.onGround) watergirl.velY = watergirl.jumpPower;

  fireboy.update();
  watergirl.update();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // platforms
  ctx.fillStyle = "gray";
  platforms.forEach(p => ctx.fillRect(p.x, p.y, p.w, p.h));

  // hazards
  hazards.forEach(h => {
    ctx.fillStyle = h.type === "fire" ? "red" : "blue";
    ctx.fillRect(h.x, h.y, h.w, h.h);
  });

  // gems
  gems.forEach(g => {
    if (!g.collected) {
      ctx.fillStyle = g.type === "fire" ? "orange" : "cyan";
      ctx.fillRect(g.x, g.y, 15, 15);
    }
  });

  // doors
  doors.forEach(d => {
    ctx.fillStyle = d.open ? "green" : (d.type === "fire" ? "red" : "blue");
    ctx.fillRect(d.x, d.y, 40, 60);
  });

  fireboy.draw();
  watergirl.draw();
}

// ===== WIN CONDITION =====
function checkWin() {
  if (doors.every(d => d.open)) {
    alert("You win!");
    location.reload();
  }
}

// ===== LOOP =====
function gameLoop() {
  update();
  draw();
  checkWin();
  requestAnimationFrame(gameLoop);
}

gameLoop();