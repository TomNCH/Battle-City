// Tank type
const PLAYER_TANK = 0;
const NORMAL_TANK = 1;
const SWIFT_TANK = 2;
const HEAVY_TANK = 3;
const ENEMY_TANKS = [NORMAL_TANK, SWIFT_TANK, HEAVY_TANK];


//bullet type


// Direction
const UP = 0;
const DOWN = 1;
const LEFT = 2;
const RIGHT = 3;


const TANK_EXPLOSION = 0;
const BULLET_EXPLOSION = 1;

// Action type
const MOVE_UP = 0;
const MOVE_DOWN = 1;
const MOVE_LEFT = 2;
const MOVE_RIGHT = 3;
const SHOOT = 5;

const ACTIONS = [MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT, SHOOT];

let AllTank = [[500, 500, UP, PLAYER_TANK, 100, 10, 5],
                [100, 0 , DOWN, NORMAL_TANK, 100, 10, 5],
                [200, 0 , DOWN, SWIFT_TANK, 100, 5, 10],
                [300, 0 , DOWN, HEAVY_TANK, 100, 15, 2]];