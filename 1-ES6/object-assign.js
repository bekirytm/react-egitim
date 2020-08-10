//Object Assign
// Objeleri birbirleri üzerine kopyalamayı sağlar. (İki objeyi birleştirir.)


// const data = {
//     name : "Bekir"
// };
//
//
// const data2= {
//     surname : "Yetim",
//     age: 22
// };
//
// const data3 = {
//     city: "İzmir"
// };
//
// const result = Object.assign(data, data2, data3);
// console.log(result);


// ************ ÖNEMLİ ***************** Object.assign({},data);
//Tuhaf Durum
const data = { name : "bekir"};

const data2 = Object.assign({},data);
data2.name = "Ahmet";

//Bu durumda ikisi de ahmet olur.
console.log(data);
console.log(data2);




//************** ÖNEMLİ ************************* İç içe obje durumunda

//İç içe objelerde Object.assign çalışmaz bu durumda da JSON.PARSE(JSON.stringify(data));

const newInfo = {
    info: {
        name: "Veli",
        surname: "Yılmaz"
    }
}
const newInfo2 = JSON.parse(JSON.stringify(newInfo));

newInfo2.info.name = "Selim";
console.log(newInfo);
console.log(newInfo2);












