let skills:string[] =  ['Bash', 'Counter', 'Healing', 'Damage', true, 123];

interface Character {
    name: string;
    hp: number;
    skills: string[];
    homeTown?: string;
}   

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter', 'Healing']
};

strider.homeTown = 'Rivendell';

console.table(strider);

export {}