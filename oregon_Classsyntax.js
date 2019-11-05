
(function () {
    console.log('hey')
    // let Traveler = function (name) {
    //     this.name = name;
    //     this.food = 1;
    //     this.isHealthy = true;
    // }
    class Traveler {
        constructor(name) {
            this.name = name;
            this.food = 1;
            this.isHealthy = true;
        }
        hunt() {
            this.food = this.food + 2
        }
        eat() {
            if (this.food > 0) {
                this.food--
                // this.food-=1
                // this.food=this.food-1

            }
            else {
                this.isHealthy = false;
            }

        }
    }
    // let Wagon = function (capacity) {
    //     this.capacity = capacity;
    //     this.passenger = [];
    // }

    class Wagon {
        constructor(capacity){
            this.capacity = capacity;
            this.passenger = [];
        }
        getAvailableSeatCount  () {
            return this.capacity - this.passenger.length;
        }
        join (Traveler) {
            if (this.capacity > this.passenger.length) {
                this.passenger.push(Traveler);
            }
            else {
                console.log("Don't add")
            }
        }
        shouldQuarantine  () {
            for (let i = 0; i < this.passenger.length; i++) {
                if (this.passenger[i].isHealthy === false) {
                    return true
                }
            }
            return false
        
        }
        totalFood  () {
            let foodCount = 0
            for (let i = 0; i < this.passenger.length; i++) {
                foodCount = foodCount + this.passenger[i].food
            }
            return foodCount
        }
    }
    // Traveler.prototype.eat = function () {
    //     if (this.food > 0) {
    //         this.food--
    //         // this.food-=1
    //         // this.food=this.food-1

    //     }
    //     else {
    //         this.isHealthy = false;
    //     }








// function Dog (name, breed, isGoodBoy) {
//     this.name = name;
//     this.breed = breed;
//     this.isGoodBoy = isGoodBoy;
// }
// Dog.prototype.sit = function () {
//         // sitting code here
// }
// function GuardDog (name, breed, isGoodBoy, attackWord) {
//     Dog.call(this, name, breed, isGoodBoy);
//     this.attackWord = attackWord;
// }
// GuardDog.prototype = Object.create(Dog.prototype);
// GuardDog.prototype.constructor = GuardDog;
// GuardDog.prototype.bark = function () {
//     // barking code here
// }
// function Doctor(name) {
//     Traveler.call(this, name)
// }
class Doctor extends Traveler {
    constructor(name) {
        super(name);

    }
    heal () {
        Traveler.isHealthy = true;
    }

}


// function Hunter(name) {
//     Traveler.call(this, name)
//     this.food = 2
class Hunter extends Traveler {
    constructor(name) {
        super(name);
        this.food = 2
    }
    hunt  () {
        this.food = this.food + 5
    }
    eat  () {
        if (this.food > 1) {
            this.food = this.food - 2
        } else {
            this.food = 0
            this.isHealthy = false
    
        }
    }
    eat  () {
        if (this.food > 1) {
            this.food = this.food - 2
        } else {
            this.food = 0
            this.isHealthy = false
    
        }
}
giveFood  (Traveler, numOfFoodUnits) {
    if (numOfFoodUnits > this.food) {
    } else {
        this.food = this.food - numOfFoodUnits
        Traveler.food = Traveler.food + numOfFoodUnits
    }
}

}
// Create a wagon that can hold 4 people
let wagon = new Wagon(4);
// Create five travelers
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let drsmith = new Doctor('Dr. Smith');
let sarahunter = new Hunter('Sara');
let maude = new Traveler('Maude');
console.log(`#1: There should be 4 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(henrietta);
console.log(`#2: There should be 3 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
wagon.join(juan);
wagon.join(drsmith);
wagon.join(sarahunter);
wagon.join(maude); // There isn't room for her!
console.log(`#3: There should be 0 available seats. Actual: ${wagon.getAvailableSeatCount()}`);
console.log(`#4: There should be 5 total food. Actual: ${wagon.totalFood()}`);
sarahunter.hunt(); // gets 5 more food
drsmith.hunt();
console.log(`#5: There should be 12 total food. Actual: ${wagon.totalFood()}`);
henrietta.eat();
sarahunter.eat();
drsmith.eat();
juan.eat();
juan.eat(); // juan is now hungry (sick)
console.log(`#6: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#7: There should be 7 total food. Actual: ${wagon.totalFood()}`);
drsmith.heal(juan);
console.log(wagon)
console.log(`#8: Quarantine should be false. Actual: ${wagon.shouldQuarantine()}`);
sarahunter.giveFood(juan, 4);
sarahunter.eat(); // She only has 1, so she eats it and is now sick
console.log(`#9: Quarantine should be true. Actual: ${wagon.shouldQuarantine()}`);
console.log(`#10: There should be 6 total food. Actual: ${wagon.totalFood()}`);

}) ()
