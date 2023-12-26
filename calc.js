console.log("Hello")
const [num1,operator,num2] =process.argv.slice(2);
switch (operator) {
    case "+":
      console.log(parseInt(num1) + parseInt(num2)) ;
      break;
    case "-":
        console.log(parseInt(num1) - parseInt(num2)) ;
        break;

    case "*":
        console.log(parseInt(num1) * parseInt(num2)) ;
        break;
    case "/":
        console.log(parseInt(num1) / parseInt(num2)) ;
        break;
    default:
      console.log("Invalid operator");
  }
