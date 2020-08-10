import kareAl,{ topla as add, cikar as c } from './myModule';

//topla yerine farklı bir isim vermek istersek (as) kullanılır.

// console.log(topla(1,2));
// console.log(cikar(101,1));

// AS ile isim değiştirdik.

console.log(add(1,2));
console.log(c(101,1));

// console.log(kareAl(5,2));



// *************** Önemli ********
// Çok fazla modül varsa hepsini yazmak zorunda değiliz.
import * as myModule from './myModule';

console.log(myModule.topla(5,6));
console.log(myModule.default(7));