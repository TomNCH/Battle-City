function Bullet_Model(x, y, direction, damage, speed, type) {
    this.x = x;
    this.y = y;
    this.type = type;
    this.direction = direction;
    this.damage = damage;
    this.speed = speed;
    this.alive = true;
    this.xOffset = 0;
    this.yOffset = 0;
    this.canvas = document.getElementById('myCanvas');
    this.ctx = this.canvas.getContext("2d");

    switch (this.direction) {
        case UP:
            this.xOffset = 12;
            break;
        case DOWN:
            this.xOffset = 12;
            break;
        case LEFT:
            this.yOffset = 12;
            break;
        case RIGHT:
            this.yOffset = 12;
            break;
        default:
            break;
    }
    this.coordinateX = this.x + this.xOffset;
    this.coordinateY= this.y + this.yOffset;

    this.drawBullet = function() {
        if (this.alive) {
            this.ctx.drawImage(image, 6 * (this.direction) + 80, 96, 6, 6, this.coordinateX, this.coordinateY, 6, 6);
        }
    };

    this.moveBullet = function () {
        if (this.alive) {
            switch (this.direction) {
                case UP:
                    if (this.coordinateY - this.speed <= 0) {
                        this.coordinateY = 0;
                        this.alive = false;
                    }else{
                        this.checkCollision();
                    }
                    this.coordinateY -= this.speed;
                    break;
                case DOWN:
                    if (this.coordinateY + this.speed >= this.canvas.height) {
                        this.coordinateY = this.canvas.height;
                        this.alive = false;
                    }else{
                        this.checkCollision();
                    }
                    this.coordinateY += this.speed;
                    break;
                case LEFT:
                    if (this.coordinateX - this.speed <= 0) {
                        this.coordinateX = 0;
                        this.alive = false;
                    }else{
                        this.checkCollision();
                    }
                    this.coordinateX -= this.speed;
                    break;
                case RIGHT:
                    if (this.coordinateX + this.speed >= this.canvas.width) {
                        this.coordinateX = this.canvas.width;
                        this.alive = false;
                    }else{
                        this.checkCollision();
                    }
                    this.coordinateX += this.speed;
                    break;
            }
        }
    };
    
    this.checkCollision = function () {
        if (this.type === PLAYER_TANK) {
            for (let i = 1; i < Tanks.length; i++) {
                if (this.coordinateX > Tanks[i].x && this.coordinateX < Tanks[i].x + 32
                    && this.coordinateY > Tanks[i].y && this.coordinateY < Tanks[i].y + 32) {
                    this.alive = false;
                    Tanks[i].takeDamage(this);
                }
            }
        }else if (this.coordinateX > Tanks[0].x && this.coordinateX < Tanks[0].x + 32
            && this.coordinateY > Tanks[0].y && this.coordinateY < Tanks[0].y + 32){
            this.alive = false;
            Tanks[0].takeDamage(this);
        }
    }
}