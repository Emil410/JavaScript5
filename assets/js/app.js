const names = [
    {
        name: 'Emil',
        gender: 'male'
    },
    {
        name: 'Yunus',
        gender: 'male'
    },
    {
        name: 'Zaur',
        gender: 'male'
    },
    {
        name: 'Revan',
        gender: 'male'
    },
    {
        name: 'Elvin',
        gender: 'male'
    },
    {
        name: 'Guler',
        gender: 'female'
    },
    {
        name: 'Gunel',
        gender: 'female'
    },
    {
        name: 'Gullu',
        gender: 'female'
    },
    {
        name: 'Nergiz',
        gender: 'female'
    },
    {
        name: 'Leman',
        gender: 'female'
    }
];
const surnames = [
    'Gasanov',
    'Xankisiyev',
    'Muradov',
    'Huseynkhanov',
    'Meherremov',
]
const randomPerson = names[Math.floor(Math.random() * names.length)];
const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
let fullName = randomPerson.name + ' ' + randomSurname;
if (randomPerson.gender == 'female') {
    fullName += 'a';
}
const result = {
    "Porson's Name": fullName
};
console.log(result);