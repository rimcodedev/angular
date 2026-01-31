export class Person {
    // public name: string;
    // private address: string;

    constructor(public name: string, public lastname: string, public address: string = '') {
        // this.name = name;
        // this.address = address;
    }

    // constructor() {
    //     this.name = 'John Doe';
    //     this.address = 'Unknown';
    // }
}

// export class Hero extends Person {
//     constructor(public alterEgo: string, public age: number, public realName: string = '') {
//         super(realName, 'New York City');
//     }   
// }

export class Hero {
    constructor(public alterEgo: string, public age: number, public realName: string, public person: Person) {
    }   
}

const tony = new Person('Tony', 'Stark', '10880 Malibu Point, Malibu, CA');
const ironman = new Hero('Ironman', 45, 'Tony', tony);
// const ironman = new Person('Tony Stark', '10880 Malibu Point, Malibu, CA');
// const thor = new Hero('Thor', 1500, 'Thor Odinson');

console.log(ironman);