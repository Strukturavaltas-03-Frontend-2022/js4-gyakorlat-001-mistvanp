// 1. Írj egy függvényt, `convertToUppercase()` néven, mely paraméterként kap egy tömböt. A függvény visszatérési érték egy Promise.  
// Amennyiben a tömb minden eleme string, és sikeresen nagybetűssé alakíthatók a Promise resolved lesz és visszaad egy új tömböt, ami az eredeti tömb összes elemét nagybetűssé alakítva tartalmazza.  
// Ellenkező esetben a Promise rejected lesz, a visszatérési érték a következő string: 'Error: Not all items in the array are strings!'
'use strict';


const convertToUppercase = (array) => {
    return new Promise((resolve, reject) => {
      let convertedArray = [];
      try {
        array.forEach((el) => {
          convertedArray.push(el.toUpperCase());
        });
        resolve(convertedArray);
      } catch (error) {
        const customError = "Error: Not all items in the array are strings!";
        reject(new Error(customError));
      }
    });
  };
  
  export default convertToUppercase;