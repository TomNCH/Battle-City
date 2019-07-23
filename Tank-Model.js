let TankModel = function (x, y, direction, type) {
    this.x = x;
    this.y = y;
    this.direction = direction;
    this.type = type;
    this.alive = true;
    this.hp = "";
    this.armor = "";
    this.speed = "";
    this.actionList = [];
    this.bullet = {
        damage: null,
        speed: null
    };

    switch (this.type) {
        case PLAYER_TANK:
            this.hp = 100;
            this.armor = 10;
            this.speed = 5;
            this.bullet.damage = 50;
            this.bullet.speed = 15;
            break;
        case NORMAL_TANK:
            this.hp = 100;
            this.armor = 5;
            this.speed = 2;
            this.bullet.damage = 40;
            this.bullet.speed = 10;
            break;
        case SWIFT_TANK:
            this.hp = 100;
            this.armor = 8;
            this.speed = 3;
            this.bullet.damage = 30;
            this.bullet.speed = 20;
            break;
        case HEAVY_TANK:
            this.hp = 100;
            this.armor = 15;
            this.speed = 1;
            this.bullet.damage = 70;
            this.bullet.speed = 7;
            break;
    }

    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext("2d");


    this.shootBullet = function () {
        if (this.alive) {
            let bullet = new Bullet_Model(this.x, this.y, this.direction, this.bullet.damage, this.bullet.speed, this.type);
            Bullets.push(bullet);
            if (this.type === PLAYER_TANK){
                document.getElementById('shoot').play();
            }
        }
    };

    this.takeDamage = function (bullet) {
        this.hp -= (bullet.damage - this.armor);
        console.log(this.hp);
        if (this.hp <= 0){
            this.hp = 0;
            this.alive = false;
            document.getElementById('explosion').play();
        }
    };


    this.drawTank = function () {
        if (this.alive) {
            switch (this.type) {
                case PLAYER_TANK:
                    this.ctx.drawImage(image, 32 * (this.direction), 0, 32, 32, this.x, this.y, 32, 32);
                    break;
                case NORMAL_TANK:
                    this.ctx.drawImage(image, 32 * (this.direction), 32, 32, 32, this.x, this.y, 32, 32);
                    break;
                case SWIFT_TANK:
                    this.ctx.drawImage(image, 32 * (4 + this.direction), 32, 32, 32, this.x, this.y, 32, 32);
                    break;
                case HEAVY_TANK:
                    this.ctx.drawImage(image, 32 * (8 + this.direction), 32 * 2, 32, 32, this.x, this.y, 32, 32);
                    break;
                default:
                    break;
            }
        }
    };
    this.moveTank = function () {
        if (this.alive) {
            switch (this.direction) {
                case UP:
                    this.y -= this.speed;
                    this.drawTank();
                    break;
                case DOWN:
                    this.y += this.speed;
                    this.drawTank();
                    break;
                case LEFT:
                    this.x -= this.speed;
                    this.drawTank();
                    break;
                case RIGHT:
                    this.x += this.speed;
                    this.drawTank();
                    break;
            }
        }
    };
};