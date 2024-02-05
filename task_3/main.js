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

college[0]["age"] = 24;

console.log(college[2]["name"]);