export class Person {
    public name: string;
    private address: string;

    // constructor(name: string, address: string) {
    //     this.name = name;
    //     this.address = address;
    // }

    constructor() {
        this.name = 'John Doe';
        this.address = 'Unknown';
    }
}

const ironman = new Person();

console.log(ironman);