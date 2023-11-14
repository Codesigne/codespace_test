var dairy = ["cheese", "sour cream", "milk", "yogurt", "ice cream", "milkshake"];

// (function logDairy(params) {
//     // for (const param of Object.keys(params)) {
//     for (const param of params) {
//         console.log(param);
//     }
// })(dairy);
function logDairy(params = []) {
    // for (const param of Object.keys(params)) {
    for (const param of dairy) {
        console.log(param);
    }
}

// logDairy(dairy);

const animal = {
    canJump: true,
};

const bird = Object.create(animal);

bird.canFly = true;

bird.hasFeathers = true;

function birdCan(params = []) {
    for (const param of Object.keys(bird)) {
        console.log(param + ": " + bird[param]);
    }
}
// console.group("bird can");
// birdCan(bird);
// console.groupEnd("bird can");

function animalCan(params = []) {
    for (const param in bird) {
        console.log(param + ": " + bird[param]);
    }
    // for (const param in animal) {
    //     console.log(param + ": " + animal[param]);
    // }
}
// console.group("animal");
animalCan();
// console.groupEnd("animal");
