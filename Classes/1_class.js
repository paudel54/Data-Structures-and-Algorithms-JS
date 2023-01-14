//class name  inital is made capital
class Cookie {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }

    setColor(color) {
        this.color = color;
    }
}

//what we generate new from class , also called instatiation. 
let cookieOne = new Cookie('green');
let cookieTwo = new Cookie('blue');

console.log(cookieOne);
console.log(cookieTwo);

cookieOne.setColor('pink');

console.log(cookieOne);

//understand class as the new built colony house with same home blueprints.

//understand instantion as making after changes like painting to house, some modificaion to kitcten etc