
const isAdult = function (userAge) {
    const nowYear = 2021;
    const age = nowYear - userAge;
    if (isNaN(userAge)){
        return null ;
    }
    return age >= 18;
  };
  isAdult(); 
   
  const checkMultiplicity = function (numb1, numb2) {
    if (isNaN(numb1 - numb2 )){
        return null ;
    }
      return numb1 % numb2 === 0;
  };
  checkMultiplicity();
  const existenceOfATriangle = function (a, b ,c) {
    if (isNaN(a - b - c)){
        return null ;
    }  
          return a + b >= c && a + c >= b && b + c >= a
  };
//   existenceOfATriangle();
  
//   const areaOfARhombus = function () {
//       const  a = +prompt('enter side a rombus');
     
      
      
//   }