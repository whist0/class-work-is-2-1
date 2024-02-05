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
    predmet: ["Основы проектной деятельности", "ИТ", "Информатика"],
    isStudent: false,
    },
]

let count = 1
let studentAge = college[count]["age"]
let peopleName = college[count]["name"]
let studentCash = college[count]["cash"]
let isStudent = college[count]["isStudent"]
let isKurator = college[count]["isKurator"]
let isKuratorGroup = college[count]["kuratorGroup"]

if (isStudent === true) {
    console.log(`Вы выбрали студента ${peopleName}`)
    if (studentAge >= 18) {
        console.log(`Студент ${peopleName} совершеннолетний. Ему ${studentAge} лет`)
    }
    else {
        console.log(`Студент ${peopleName} не совершеннолетний. Ему ${studentAge} лет`)
    }
    if (studentCash >= 4500) {
        console.log(`Студент ${peopleName} получает повышенную стипендию. ${studentCash} руб.`)
    }
    else if (studentCash <= 4500 && studentCash >= 1) {
        console.log(`Студент ${peopleName} получает обычную стипендию. ${studentCash} руб.`)
    }
    else if  ( studentCash == 0 ) {
        console.log(`Студент ${peopleName} не получает стипендию.`)

}

else if (isStudent === false) {
    console.log(`Вы выбрали студента ${peopleName}`)
    if (isKurator === true) {
        console.log(`Преподаватель ${peopleName} куратор группы ${isKuratorGroup}`)
    }
}
}