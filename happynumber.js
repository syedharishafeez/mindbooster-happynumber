let number = 29;

let comingNumber = number;

let arrayNumber = [number];

let checkArray = true;

while (parseInt(comingNumber) !== 1 && checkArray) {
  let maintainNumber = 0;
  let divideNumber = comingNumber;
  while (divideNumber / 10 !== 0) {
    maintainNumber = maintainNumber + (divideNumber % 10) ** 2;
    divideNumber = parseInt(divideNumber / 10);
  }
  comingNumber = maintainNumber;
  if (arrayNumber.includes(comingNumber)) {
    checkArray = false;
  } else {
    arrayNumber.push(comingNumber);
  }
  console.log(arrayNumber);
}

if (parseInt(comingNumber) === 1) {
  console.log(number, " is a happy number");
} else {
  console.log(number, " is not a happy number");
}
