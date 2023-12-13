let students = [
    {
        name: 'John',
        subjects: ['maths', 'english', 'cad'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 73, art: 95},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, english: 88, maths: 97, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

let bestScore = 0;
const biggest = students.reduce((best, curr) => {
//bestScore = 0;
//best= {};
    if (curr.results.english > bestScore) {
        best = curr;
        best.results.english = curr.results.english;
        bestScore = curr.results.english;
        //console.log(curr.results.english, best)
        console.log(curr.name);
    } 
return {name:best.name, max:bestScore};
}, {});

console.log(biggest);



/*
//USING FOR LOOP + FUNCTION
const bestEnglish = (students) => {
let bestScore =0;
best=0;
for (let curr of students) {
    if (curr.results.english > bestScore) {
        best = curr;
        bestScore = curr.results.english;
    }
}
return {name:best.name, max:best.results.english}
}
const biggest = bestEnglish(students)

console.log(biggest);

*/
