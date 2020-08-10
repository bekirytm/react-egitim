//SPREAD Operatör

const data = [1,2,3,4,5];

const newData = [0, ...data];
console.log(newData);



const obje = {
    name: "Bekir",
    surname: "Yetim"
}

const obje2 = {
    age: "22",
    ...obje
}
console.log(obje2);