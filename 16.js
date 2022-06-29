// Create object with your profile details and print values using 3 different ways

const user = {
    name: 'Felippe',
    lastName: 'Oliveira',

}

Object.values(user).forEach((value) => console.log(value));
Object.keys(user).forEach((keys) => console.log(user[keys]));
Object.entries(user).forEach(([, value]) => console.log(value));