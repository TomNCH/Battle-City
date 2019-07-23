canvas = document.getElementById('myCanvas');
ctx = canvas.getContext('2d');
let img = document.getElementById('image');

function randomChooseFrom(array) {
    return array[Math.floor(Math.random() * array.length)]
}

function main() {
    Tanks.push(new TankModel(canvas.width/2, 500, UP, PLAYER_TANK));
    document.getElementById('start').play();
    function play() {
        update();
        draw();
        requestAnimationFrame(play);
    }

    play();
}

function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    for (let i = 0; i < Tanks.length; i++) {
        Tanks[i].drawTank();
    }
    for (let i = 0; i < Bullets.length; i++) {
        Bullets[i].drawBullet();
    }
}

