const isAduit = function () {
    const nowYear = 2021;
    const userAge = +prompt("Enter your year of birth");
    const age = nowYear - userAge;
    if (age >= 18) {
      alert("Welcomne");
      return age;
    }
    alert("Go growin");
  };
  isAduit(); 
   
  const checkMultiplicity = function () {
    const numb1 = +prompt("Enter number 1");
    const numb2 = +prompt("Enter number 2");
    if (numb1 % numb2 === 0) {
      alert("true");
      return;
    }
    alert("false");
  };
  checkMultiplicity();
  const existenceOfATriangle = function () {
    const a = +prompt("Enter side length a");
    const b = +prompt("Enter side length b");
    const c = +prompt("Enter side length c");
    if (a + b >= c)
      if (a + c >= b)
        if (b + c >= a) {
          alert("True");
        }
    {
      alert("false");
    }
  };
  existenceOfATriangle();
  
  const areaOfARhombus = function () {
      const  a = +prompt('enter side a rombus');
      const  b = +prompt('enter side b rombus');
      const  c = +prompt('enter side c rombus');
      const  d = +prompt('enter side d rombus');
      
      
  }