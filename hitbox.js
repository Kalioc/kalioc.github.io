var info = document.getElementById("info");
var rAF = window.requestAnimationFrame;
var cAF = window.cancelAnimationFrame;
var b1 = document.getElementById("A");
var b2 = document.getElementById("B");
var b3 = document.getElementById("X");
var b4 = document.getElementById("Y");
var b5 = document.getElementById("LB");
var b6 = document.getElementById("RB");
var b7 = document.getElementById("LT");
var b8 = document.getElementById("RT");
var d1 = document.getElementById("U");
var d2 = document.getElementById("D");
var d3 = document.getElementById("L");
var d4 = document.getElementById("R");

window.addEventListener("gamepadconnected", (e) =>
{ 
    var gamepad = navigator.getGamepads()[0];
    gameloop();
});

window.addEventListener("gamepaddisconnected", (e) => 
{ 
    var gamepad = navigator.getGamepads()[0];
    cAF();
});

function gameloop() 
{
    var gamepad = navigator.getGamepads()[0];

    // A button
    if((gamepad.buttons[0].pressed)) { b1.src = "buttons/greenPressed.png"; }
    else b1.src = "buttons/green.png";

    // B button
    if((gamepad.buttons[1].pressed)) { b2.src = "buttons/greyPressed.png"; }
    else b2.src = "buttons/grey.png";

    // X button
    if((gamepad.buttons[2].pressed)) { b3.src = "buttons/bluePressed.png"; }
    else b3.src = "buttons/blue.png";

    // Y button
    if((gamepad.buttons[3].pressed)) { b4.src = "buttons/yellowPressed.png"; }
    else b4.src = "buttons/yellow.png";

    // LB button
    if((gamepad.buttons[4].pressed)) { b5.src = "buttons/greyPressed.png"; }
    else b5.src = "buttons/grey.png";

    // RB button
    if((gamepad.buttons[5].pressed)) { b6.src = "buttons/redPressed.png"; }
    else b6.src = "buttons/red.png";

    // LT button
    if((gamepad.buttons[6].pressed)) { b7.src = "buttons/greyPressed.png"; }
    else b7.src = "buttons/grey.png";

    // RT button
    if((gamepad.buttons[7].pressed)) { b8.src = "buttons/greyPressed.png"; }
    else b8.src = "buttons/grey.png";

    // Up button
    if((gamepad.buttons[12].pressed)) { d1.src = "buttons/greyPressed.png"; }
    else d1.src = "buttons/grey.png";

    // Down button
    if((gamepad.buttons[13].pressed)) { d2.src = "buttons/greyPressed.png"; }
    else d2.src = "buttons/grey.png";

    // Left button
    if((gamepad.buttons[14].pressed)) { d3.src = "buttons/greyPressed.png"; }
    else d3.src = "buttons/grey.png";

    // Up button
    if((gamepad.buttons[15].pressed)) { d4.src = "buttons/greyPressed.png"; }
    else d4.src = "buttons/grey.png";


    rAF(gameloop);
}
// 0=A, 1=B, 2=X, 3=Y, 4=LB, 5=RB, 6=LT, 7=RT, 8=SELECT, 9=START, 10=R3?, 11=L3?, 12=UP, 13=DOWN, 14=LEFT, 15=RIGHT, 16=HOME