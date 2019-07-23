let Bullets = [];
let Tanks =[];
let count = 0;

function update() {
    if (count === 0) {
        if (Math.random() > 0.7) {
            Tanks.push(new TankModel(Math.random()* canvas.width, 0, DOWN, randomChooseFrom(ENEMY_TANKS)));
        }
    }
    count += 1;
    count %= 60;
    updateBullets();
    updateTanks();
}

function updateTanks() {
    for (let i = 0; i < Tanks.length; i++) {
        if (!Tanks[i].alive) {
            Tanks.splice(i, 1);
        }
    }
    for (let i = 1; i < Tanks.length; i++) {
        Tanks[i].moveTank();
    }
    if (count % 5 === 0) {
        for (let i = 1; i < Tanks.length; i++) {
            const playerTank = Tanks[0];
            const enemyTank = Tanks[i];
            AI(enemyTank, playerTank);
        }
    }
}

function updateBullets() {
    for (let i = 0; i < Bullets.length; i++) {
        if (!Bullets[i].alive) {
            Bullets.splice(i, 1);
        }else{
            Bullets[i].moveBullet();
        }
    }
}

function AI(enemyTank, playerTank) {
    switch (enemyTank.actionList.pop()) {
        case MOVE_UP:
            enemyTank.direction = UP;
            break;
        case MOVE_DOWN:
            enemyTank.direction = DOWN;
            break;
        case MOVE_LEFT:
            enemyTank.direction = LEFT;
            break;
        case MOVE_RIGHT:
            enemyTank.direction = RIGHT;
            break;
        case SHOOT:
            enemyTank.shootBullet();
            break;
        default:
            const random = Math.random();
            if (random < 0.5) {
                enemyTank.actionList.push(randomChooseFrom(ACTIONS));
                enemyTank.actionList.concat([SHOOT, SHOOT, SHOOT, SHOOT]);
            } else if (random < 0.8) {
                if (Math.floor(random * 100) % 2 === 0) {
                    if (enemyTank.x < playerTank.x) {
                        enemyTank.actionList.push(MOVE_RIGHT);
                    } else {
                        enemyTank.actionList.push(MOVE_LEFT);
                    }
                } else {
                    if (enemyTank.y < playerTank.y) {
                        enemyTank.actionList.push(MOVE_DOWN);
                    } else {
                        enemyTank.actionList.push(MOVE_UP);
                    }
                }
            } else if (random < 0.8) {
                enemyTank.actionList.concat([MOVE_UP, DO_NOTHING, SHOOT, MOVE_LEFT, DO_NOTHING, SHOOT, MOVE_DOWN, DO_NOTHING, SHOOT, MOVE_RIGHT, DO_NOTHING, SHOOT]);
            } else {
                enemyTank.actionList.push(SHOOT);
            }
            break;
    }
}