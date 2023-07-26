//Use the mouse to move the paddle from left to right. Keep the ball in the air. If it touches the ground, you lose.

/* VARIABLES */
let paddle, ball;
let score = 0;

/* PRELOAD LOADS FILES */
function preload() {

}

/* SETUP RUNS ONCE */
function setup() {
    createCanvas(400, 400);
    background(0, 0, 0);

    //Create paddle 
    paddle = new Sprite(200, 380, 100, 20);
    paddle.color = color(0, 255, 0);
    paddle.rotationLock = true;

    //Create ball
    ball = new Sprite(100, 50, 20);
    ball.color = color(255, 255, 0);
    ball.direction = 'down';
    ball.speed = 5;
    ball.bounciness = 1;
    ball.friction = 0;

    //Create walls
    walls = new Group();
    walls.w = 10;
    walls.h = 400;
    walls.collider = "static";
    walls.visible = false;

    // left and right walls
    new walls.Sprite(0, height / 2);
    new walls.Sprite(width, height / 2);

    //top wall
    let wallTop = new walls.Sprite(width / 2, 0);
    wallTop.rotation = 90;
}

/* DRAW LOOP REPEATS */
function draw() {
    background(0, 0, 0);

    //Move the paddle
    paddle.moveTowards(mouse.x, 380, 1);

    //When ball collides with paddle bounce off and increase score
    if (ball.collides(paddle)) {
        ball.speed = 8;
        score = score + 1;
        ball.direction = ball.direction + random(-10, 10);
    }

    if (score > 3) {
        ball.speed = score + 3;
    }


    //When ball hits ground you lose
    if (ball.y > 390) {
        ball.y = 430
        ball.speed = 0;

        // Draw you lose to screen
        fill(255, 0, 0);
        textSize(50);
        text('You lose!', 100, 200);
    }

    //Draw the score
    fill(228, 228, 228);
    textAlign(LEFT);
    textSize(20);
    text('Score = ' + score, 10, 30);


}	