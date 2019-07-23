function moveSelection(evt) {
    switch (evt.keyCode) {
        case 38:
            Tanks[0].direction = UP;
            Tanks[0].moveTank();
            break;
        case 40:
            Tanks[0].direction = DOWN;
            Tanks[0].moveTank();
            break;
        case 37:
            Tanks[0].direction = LEFT;
            Tanks[0].moveTank();
            break;
        case 39:
            Tanks[0].direction = RIGHT;
            Tanks[0].moveTank();
            break;
        case 32:
            Tanks[0].shootBullet();
            break;
    }
}