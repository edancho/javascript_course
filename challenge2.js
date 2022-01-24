const fs = require('fs');

function edan() {
    return (fs.readFileSync('PC2input.txt', 'UTF8'));
}
const data = edan();
let commands = data.split("\n")

function position(startX, startY) {
    let xPos = startX;
    let yPos = startY;
    for (i = 0; i < commands.length - 1; i++) {
        let currentpos = commands[i]
        let motion = currentpos.split(" ")
        switch (motion[0]) {
            case "forward":
                xPos += parseInt(motion[1])
                break;
            case "up":
                yPos += parseInt(motion[1])
                break;
            case "down":
                yPos -= motion[1]
                break;
            default:
                console.log(currentpos)
                console.log("Something went wrong! Oh no!")
        }
    }
    console.log(xPos, yPos)
}

function secondPos(startX, startY) {
    let magnitude = 0;
    let slope = 0;
    let xPos2 = startX;
    let yPos2 = startY;
    for (i = 0; i < commands.length - 1; i++) {
        let currentpos = commands[i];
        let motion = currentpos.split(" ");
        switch (motion[0]) {
            case "forward":
                xPos2 += parseInt(motion[1]);
                yPos2 += motion[1] * slope;
                break;
            case "up":
                slope += parseInt(motion[1])
                break;
            case "down":
                slope -= motion[1]
                break;
            default:
                console.log("Oh no, something went wrong!");

        }
    }
    console.log(xPos2, yPos2)
    console.log(xPos2*yPos2)
}
position(0, 0);
secondPos(0, 0);