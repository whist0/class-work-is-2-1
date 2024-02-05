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
    {
        name: "Harry",
    age: 18,
    group: "ИС-2-1",
    studID: 321221,
    typeLearning: "Очная",
    task: ["Физ-ра", "МДК-02-02", "МДК-04-01"],
    cash: 5500,
    isStudent: true
    },

    {
        name: "Yana",
    age: 18,
    group: "СА-2-1",
    studID: 323421,
    typeLearning: "Заочная",
    task: ["ОБЖ", "Уголовное право", "Информатика"],
    cash: 0,
    isStudent: true
    },

    {
        name: "Tatyana",
    age: 38,
    isKurator: true,
    kuratorGroup: "ИС-2-1",
    kafedra: "Инф.технологии",
    predmet: ["Мат. моделирование", "ЭВМ", "Математика"],
    isStudent: false,
    },

    {
        name: "Oksana",
    age: 40,
    isKurator: true,
    kuratorGroup: "ИС-3-1",
    kafedra: "Инф.технологии",
    predmet: ["Мат. моделирование", "ЭВМ", "Математика"],
    isStudent: false,
    },
]

if (college[0]["isStudent"] === true) {
    console.log(`Студент ${college[0]["name"]}`)
    if (college[0]["age"] >= 18) {
        console.log(`Студент ${college[0]["name"]} совершеннолетний.`)
    }
    else {
        console.log(`Студент ${college[0]["name"]} не совершеннолетний.`)
    }
    if (college[0]["cash"] >= 4500) {
        console.log(`Студент ${college[0]["name"]} получает повышенную стипендию.`)
    }
    else if (college[0]["cash"] <= 4500 && college[0]["cash"] >= 1) {
        console.log(`Студент ${college[0]["name"]} получает обычную стипендию.`)
    }
    else if  ( college[0]["cash"] == 0 ) {
        console.log(`Студент ${college[0]["name"]} не получает стипендию.`)

}

else if (college[0]["isStudent"] === false) {
    console.log(`Вы выбрали студента ${college[0]["name"]}`)
    if (college[0]["isKurator"] === true) {
        console.log(`Преподаватель ${college[0]["name"]} куратор группы ${college[0]["name"]}`)
    }
}