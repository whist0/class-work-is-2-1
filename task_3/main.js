// let person = {
//     name: "Tom",
//     age: 18,
//     hobbies: ["Кушать", "Спать", "Смотреть кино", "Читать книги"],
//     contacts: {
//         phone: [839424023, 832942394],
//         email: ["tom@gmail.com", "tomerwg@gmail.com"],
//         social: "www.gitbub.com"
//     }
// }

// console.log(`Имя - ${person["name"]}. Возраст - ${person["age"]}`)
// console.log(person["hobbies"][2])
// console.log(person["contacts"]["email"][1])

let college = [
    {name: "Tom", age: 23, group: "ИС-2-2"},
    {name: "Bob", age: 15, group: "ИС-2-1"},
    {name: "Stan", age: 23, group: "ИС-2-2"},
    {name: "Harry", age: 17, group: "ИС-4-1"},
];

let count = 2
let studentAge = college[0]["age"];
let studentName = college[0]["name"];

if (studentAge >= 18) {
    console.log(`Студент ${studentName} совершеннолетний. Ему ${studentAge} лет`)
} 
else if (studentAge < 18) {
    console.log(`Студент ${studentName} не совершеннолетний. Ему ${studentAge} лет`)
}
