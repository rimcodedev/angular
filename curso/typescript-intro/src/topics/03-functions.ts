function addNumbers(a: number, b: number) {
    return a + b;
}

const addNumberArrow = (a: number, b: number): string => {
    return `${a + b}`;
}

function multiply(firstNumber: number, secondNumber?: number, base: number=2): number {
    return firstNumber * base;
}

// const result: number= addNumbers(5, 10);
// const resultArrow:string = addNumberArrow(1, 10);
// const resultMultiply: number = multiply(5);

// console.log({result, resultArrow, resultMultiply});

interface Character {
    name: string;
    health: number;
    showHp: () => void;
}


const healCharacter = (character: Character, amount: number): void => {
    character.health += amount;

}  

const strider: Character = {
    name: 'Strider',
    health: 60, 
    showHp() {
        console.log(`Puntos de vida ${this.health}`);
    }   
};

healCharacter(strider, 20);
healCharacter(strider, 30);
strider.showHp();


export {};