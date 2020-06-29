let number = 29;

let stringNumber = "" + number;

let comingNumber;

let arrayNumber = [stringNumber];

let firstTime = true;

let checkArray = true;

while (firstTime || (parseInt(comingNumber) !== 1 && checkArray)) {
  let maintainNumber = 0;
  if (firstTime) {
    comingNumber = stringNumber;
    firstTime = false;
  }
  for (let i = 0; i < comingNumber.length; i++) {
    maintainNumber += parseInt(comingNumber[i]) ** 2;
    // console.log("maintainNumber = ", maintainNumber);
  }
  comingNumber = "" + maintainNumber;
  if (arrayNumber.includes(comingNumber)) {
    checkArray = false;
  } else {
    arrayNumber.push(comingNumber);
  }
}

if (parseInt(comingNumber) === 1) {
  console.log(number, " is a happy number");
} else {
  console.log(number, " is not a happy number");
}
