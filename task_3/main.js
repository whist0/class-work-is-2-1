// let students  = ["Андрей", "Иван", "Стас"];
// students[50] = "Индекс 50";
// console.log(students);

// let college = [ ["Андрей", "Иван", "Стас"], [205, 111, 304] ];
// college[1][1] = 112;
// let kab = college[1][1];
// console.log(kab);

let number = [1, 2, 3, 4];

const countLength = 5;

if (number.length === countLength) {
    console.log("ok");
} 
else if (number.length < countLength) {
    let result = countLength - number.length;
    console.log(`Длина вашего массива: ${number.length}. Длину массива нужно увеличить до ${countLength}. Прибавьте к массиву значение ${result}`);
}
