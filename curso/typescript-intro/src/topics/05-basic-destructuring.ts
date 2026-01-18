interface AudioPlayer {
    audioVolumne: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details { 
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolumne: 90,
    songDuration: 36,
    song: 'My way',
    details: {
        author: 'Beyoncé',
        year: 2013
    }
};

const song = 'New Song'

const { song:another_song, songDuration:duration, details } = audioPlayer;
const { author:authorName } = details;


// console.log('Song:', another_song);
// console.log('Author:', authorName);

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
// const trunks = dbz[3] || 'No hay personaje 3';
const [p1, p2, trunks='Not found']: string[] = ['Goku', 'Vegeta', 'Trunks'];

console.log('Personaje 3:', dbz[2] || 'No hay personaje 3');
console.log('Personaje 3:', trunks);

export {};
