// 1) Створити масив з 20 чисел та:
//     a) відсортувати його від меншого до більшого.

// let numbers = [23, 1, 56, 3, 78, 98, 45, 7, 90, 32, 19, 41, 95, 76, 86, 53, 97, 776, 890, 54];
//
// let numbers1 = numbers.sort((a, b) => {
//
//     return a - b;
// });
//
// console.log(numbers1);

// b) відсортувати його від більшого до меншого.

// let numbers = [23, 1, 56, 3, 78, 98, 45, 7, 90, 32, 19, 41, 95, 76, 86, 53, 97, 776, 890, 54];
//
// let numbers1 = numbers.sort((a, b) => {
//
//     return b - a;
// });
// console.log(numbers1);


// c) Відфілтрувати числа які є кратними 3.


// let numbers = [23, 1, 56, 3, 78, 98, 45, 7, 90, 32, 19, 41, 95, 76, 86, 53, 97, 776, 890, 54];
//
// let numbers1 = numbers.filter((value) => {
//
//
//     return value % 3 === 0;
// });
//
// console.log(numbers1);


// d) Відфілтрувати числа які є більшими за 10.

// let numbers = [23, 1, 56, 3, 78, 98, 45, 7, 90, 32, 19, 41, 95, 76, 86, 53, 97, 776, 890, 54];
//
// let numbers1 = numbers.filter((value) => {
//
//
//     return value > 10;
// });
//
// console.log(numbers1);


// e) Проітерувати його forEach та вивести кожеш елмент за допомогою document.write

// let numbers = [23, 1, 56, 3, 78, 98, 45, 7, 90, 32, 19, 41, 95, 76, 86, 53, 97, 776, 890, 54];
// numbers.forEach((valye, index) => {
// document.write(valye);
// document.write('<br>');
// });
//


// f) За допомогою map збільшити кожен елемент в масиві в три рази.

// let numbers = [23, 1, 56, 3, 78, 98, 45, 7, 90, 32, 19, 41, 95, 76, 86, 53, 97, 776, 890, 54];
// let num = numbers.map((number) => number * 3);
// console.log(num);


// g) Порахувати загальну суму всіх елментів у масиві (reduce)

// let numbers = [23, 1, 56, 3, 78, 98, 45, 7, 90, 32, 19, 41, 95, 76, 86, 53, 97, 776, 890, 54];
// let number = numbers.reduce((acc, currentValue) => acc + currentValue);
// console.log(number);


// 2) Створити масив з 20 стрічок та:
//     a) Відсортувати його в алфавітному порядку
//
// let nameString = ['Anya', 'Alex', 'Karina', 'Anton', 'Roman', 'Liza', 'Kira', 'Vasya', 'Ihor', 'Vika', 'Dima', 'Denus', 'Oleg', 'Tolya', 'Vova', 'Olga', 'Tanya', 'Sonya', 'Bodya', 'Katya'];
//
// let namesString = nameString.sort();
//
// console.log(namesString);


// b) Відсортувати в зворотньому порядку

// let name = ['Anya', 'Alex', 'Karina', 'Anton', 'Roman', 'Liza', 'Kira', 'Vasya', 'Ihor', 'Vika', 'Dima', 'Denus', 'Oleg', 'Tolya', 'Vova', 'Olga', 'Tanya', 'Sonya', 'Bodya', 'Katya'];
//
// let names = name.sort((a, b) => {
//     if (a < b) {
//         return 1
//     }
//
//         return -1
// });
//
// console.log(names);


// c) Отримати в новому масиві тільки ті слова, довжина яких більша за 4 букви (filter)

// let string = ['Anya', 'Alex', 'Karina', 'Anton', 'Roman', 'Liza', 'Kira', 'Vasya', 'Ihor', 'Vika', 'Dima', 'Denus', 'Oleg', 'Tolya', 'Vova', 'Olga', 'Tanya', 'Sonya', 'Bodya', 'Katya'];
//
// let strings = string.filter(name => name.length > 4);
//
// console.log(strings);


// d) Змінити кожне слово в масиві додавши на початок 'Sam says *ваше слово*'
//
// let string = ['Anya', 'Alex', 'Karina', 'Anton', 'Roman', 'Liza', 'Kira', 'Vasya', 'Ihor', 'Vika', 'Dima', 'Denus', 'Oleg', 'Tolya', 'Vova', 'Olga', 'Tanya', 'Sonya', 'Bodya', 'Katya'];
// let str = string.map((value) => 'Sam says' + value);
// console.log(str);


// 3) Все робити тільки за допомогою методів масивів!
//     Дано масив :


const users = [
    {name: 'vasya', age: 31, isMarried: false},
    {name: 'petya', age: 30, isMarried: true},
    {name: 'kolya', age: 29, isMarried: true},
    {name: 'olya', age: 28, isMarried: false},
    {name: 'max', age: 30, isMarried: true},
    {name: 'anya', age: 31, isMarried: false},
    {name: 'oleg', age: 28, isMarried: false},
    {name: 'andrey', age: 29, isMarried: true},
    {name: 'masha', age: 30, isMarried: true},
    {name: 'olya', age: 31, isMarried: false},
    {name: 'max', age: 31, isMarried: true}
];


// a) відсортувати його за  віком (зростання , а потім окремо спадання)

// let user = users.sort( (a, b) => {
//     return a.age - b.age;
//
// });
// console.log(user);


// let user = users.sort((a, b) => {
//     return b.age - a.age;
// });
// console.log(user);


// b) відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let user = users.sort((a, b) => a.name.length - b.name.length);
// console.log(user);


//
// let user = users.sort((a, b) => b.name.length - a.name.length);
// console.log(user);


// c) пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// d) відсортувати його за індентифікатором


// let user = users.map((x, i) => ({...x, id : i + 1}));
// console.log(user);
// console.log(users);
//
// console.log(user.sort((a, b) => a.id - b.id));


// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce)

// const usersMarried = users.reduce((acc, user) =>
//     user.isMarried ? [...acc, {...user, hasHouse: true}] : acc, []);
// console.log(usersMarried);
// console.log(users);


// РОБОТА В АУДИТОРІЇ

const cars = [
    {
        producer: "subaru",
        model: "wrx",
        year: 2010,
        color: "blue",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 400
    },
    {
        producer: "subaru",
        model: "legacy",
        year: 2007,
        color: "silver",
        type: "sedan",
        engine: "ez30",
        volume: 3,
        power: 250
    },
    {
        producer: "subaru",
        model: "tribeca",
        year: 2011,
        color: "white",
        type: "jeep",
        engine: "ej20",
        volume: 2,
        power: 300
    },
    {
        producer: "subaru",
        model: "leone",
        year: 1998,
        color: "yellow",
        type: "sedan",
        engine: "ez20x",
        volume: 2,
        power: 140
    },
    {
        producer: "subaru",
        model: "impreza",
        year: 2014,
        color: "red",
        type: "sedan",
        engine: "ej204x",
        volume: 2,
        power: 200
    },
    {
        producer: "subaru",
        model: "outback",
        year: 2014,
        color: "red",
        type: "hachback",
        engine: "ej204",
        volume: 2,
        power: 165
    },
    {producer: "bmw", model: "115", year: 2013, color: "red", type: "hachback", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "315", year: 2010, color: "white", type: "sedan", engine: "f15", volume: 1.5, power: 120},
    {producer: "bmw", model: "650", year: 2009, color: "black", type: "coupe", engine: "f60", volume: 6, power: 350},
    {producer: "bmw", model: "320", year: 2012, color: "red", type: "sedan", engine: "f20", volume: 2, power: 180},
    {
        producer: "mercedes",
        model: "e200",
        year: 1990,
        color: "silver",
        type: "sedan",
        engine: "eng200",
        volume: 2,
        power: 180
    },
    {
        producer: "mercedes",
        model: "e63",
        year: 2017,
        color: "yellow",
        type: "sedan",
        engine: "amg63",
        volume: 3,
        power: 400
    },
    {
        producer: "mercedes",
        model: "c250",
        year: 2017,
        color: "red",
        type: "sedan",
        engine: "eng25",
        volume: 2.5,
        power: 230
    }
];


// Відфільтрувати масив за наступними крітеріями :
//     - двигун більше 3х літрів

// let car = cars.filter((a, b) => {
//     return a.volume > 3;
// });
//
// console.log(car);


// - двигун = 2л

// let car = cars.filter((a, b) => {
//     return a.volume === 2;
// });
//
// console.log(car);


// - виробник мерс


// let car = cars.filter((a, b) => {
//     return a.producer === 'mercedes';
// });
//
// console.log(car);


// - двигун більше 3х літрів + виробник мерседес

// let car = cars.filter((a, b) => {
//     return a.producer === 'mercedes' && a.volume === 2;
// });
//
// console.log(car);


// - двигун більше 3х літрів + виробник субару

// let car = cars.filter((a, b) => {
//     return a.producer === 'subaru' && a.volume > 3;
// });
//
// console.log(car);

//
// - сили більше ніж 300

// let car = cars.filter((a, b) => {
//     return a.power > 300;
// });
//
// console.log(car);


// - сили більше ніж 300 + виробник субару

// let car = cars.filter((a, b) => {
//     return a.power > 300 && a.producer === 'subaru';
// });
//
// console.log(car);


// - мотор серіі ej

// let car = cars.filter((a, b) => {
//     return a.engine.startsWith('ej');
// });
//
// console.log(car);






// - двигун меньше 3х літрів + виробник мерседес

// let car = cars.filter((a, b) => {
//     return a.volume < 3 && a.producer === 'mercedes';
// });
//
// console.log(car);


// - двигун більше 2л + сили більше 250

// let car = cars.filter((a, b) => {
//     return a.volume > 2 && a.power > 250;
// });
//
// console.log(car);


// - сили більше 250  + виробник бмв

//
// let car = cars.filter((a, b) => {
//     return a.power > 250 && a.producer === 'bmw';
// });
//
// console.log(car);


//
// - взять слдующий массив

const usersWithAddress = [
    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
];

// -- Відсортувати їх по ID

// let userId = usersWithAddress.sort( (a, b) => {
//     return a.id - b.id;
// });
// console.log(userId);


// -- Відсортувати їх по ID в зворотньому порядку

// let userId = usersWithAddress.sort( (a, b) => {
//     return b.id - a.id;
// });
// console.log(userId);


// -- Відсортувати по віку

// let userAge = usersWithAddress.sort( (a, b) => {
//     return a.age - b.age;
// });
// console.log(userAge);


// -- Відсортувати по віку в зворотньому порядку

// let userAge = usersWithAddress.sort( (a, b) => {
//     return b.age - a.age;
// });
// console.log(userAge);


// -- Відсорутвати по імені

// let userName = usersWithAddress.sort((a, b) => {
//    if (a.name > b.name) {
//        return 1
//    }
//         return -1
// });
//
// console.log(userName);

//
// -- Відсорутвати по назві вулиці

// let userStreet = usersWithAddress.sort((a, b) => {
//     if (a.address.street < b.address.street) {
//         return -1
//     }
//     return 1
// });
//
// console.log(userStreet);


// -- Відсорутвати по номеру будинку



// let userNumber = usersWithAddress.sort((a, b) => {
//        return a.address.number - b.address.number;
// });
//
// console.log(userNumber);



// -- Залишити тільки тих, хто молодший ніж 30 (filter)


// let userNumber = usersWithAddress.filter((a, b) => {
//     return a.age < 30;
// });
// console.log(userNumber);



// -- Залишити тільки одружених


// let userMarried = usersWithAddress.filter((a, b) => {
//     return a.isMarried === true;
// });
// console.log(userMarried);


// -- Залишити тільки одружених, які молодні за 30


// let userMarried = usersWithAddress.filter((a, b) => {
//     return a.isMarried === true && a.age < 30;
// });
// console.log(userMarried);


// -- Залишити лише тих, в кого парні номери будинків.

// let userNumber = usersWithAddress.filter((a, b) => {
//     return a.address.number % 2 === 0;
// });
// console.log(userNumber);


// -- Порахувати загальний вік всіх людей. (reduce)
// let initialValue = 0;
// let userNumber = usersWithAddress.reduce((acc, currentValue) => acc + currentValue.age,
//     initialValue
// );
// console.log(userNumber);


// -- Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)

// const usersMarried = usersWithAddress.reduce((acc, user) =>
//         user.isMarried && user.age > 30 ? [...acc, {...user, child: true}] : acc, []);
// console.log(usersMarried);





