export interface Passenger{
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'John Doe'
}

const passenger2: Passenger = {
    name: 'Jane Doe',
    children: ['Child 1', 'Child 2']
}

const printChildren = (passenger: Passenger): number => {
    const howManyChildren = passenger.children?.length || 0;
    console.log(passenger.name + ' has ' + howManyChildren + ' children.');
    return howManyChildren
}

printChildren(passenger1);
printChildren(passenger2);
 