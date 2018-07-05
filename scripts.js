let scale = 10;
let height = 106;
let width = 17;

function setup() {
    createCanvas(106 * scale + 3, 17 * scale + 3);
    
}
function draw() {
    stroke(51);
    strokeWeight(1);
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            rect(i * scale, j * scale, scale + 2, scale + 2);
        }
    }

}

//let isLightSquare = formula(x, y);
function mouseClicked() {
    
    rect(Math.floor(Math.floor(mouseX) / scale), Math.floor(Math.floor(mouseY) / scale), scale, scale);
    fill(51);
}


function formula(x, y) {
    if ((Math.floor(y / 17) * Math.pow(2, (-17 * Math.floor(x) - (Math.floor(y) % 17)))) > (1 / 2)) {
        return true;
    } else {
        return false;
    }
}
