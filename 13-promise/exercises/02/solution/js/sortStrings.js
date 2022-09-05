// 2. Írj egy másik függvényt `sortStrings()` néven, mely paraméterként egy tömböt kap. A függvény visszatérési érték egy Promise.  
// A Promise resolved lesz, amennyiben a tömb minden eleme string, a resolved value az ABC szerinti rendezett tömb.  
// Ha nem minden elem string, akkor a Promise rejected lesz, az Error objektum üzenet szövege:     
// 'Error: Not all items in the array are strings!'   
// Ha a sorba rendezés során hiba történik akkor is rejected lesz a Promise, az Error objektum üzenet szövege ebben az esetben:  
// 'Error: Something went wrong with sorting words.'
'use strict';


const sortStrings = (array) => {
    return new Promise((resolve, reject) => {
      try {
        if (array.every((el) => typeof el === "string")) resolve(array.sort());
        else {
          const customError1 = "Error: Not all items in the array are strings!";
          reject(new Error(customError1));
        }
      } catch (error) {
        const customError2 = "Error: Something went wrong with sorting words!";
        reject(new Error(customError2));
      }
    });
  };
  
  export default sortStrings;









export default sortStrings;
