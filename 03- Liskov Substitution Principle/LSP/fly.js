class Bird {
    makeSound() {
        console.log("Bird is making a sound");
    }
}

class Sparrow extends Bird {
    makeSound() {
        console.log("Sparrow chirps");
    }
}

class Parrot extends Bird {
    makeSound() {
        console.log("Parrot talks");
    }
}

function playSound(bird) {
    bird.makeSound();
}

playSound(new Sparrow());
playSound(new Parrot());