//Modül Kullanımı

// Modülü dışarı aktarma:
export const topla = (a,b) => a + b;        //Tek satırda return edebiliriz.


export const cikar = (a,b) => {
    return a-b;
};


// Default modül
export default (a) => {
    return a * a;
}

//Yazdığımız bir modülü default yapabiliriz.
// export default topla;