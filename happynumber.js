let number = 29;

let arrayNumber = [number];

let checkArray = true;

while (parseInt(number) !== 1 && checkArray) {
  let maintainNumber = 0;
  let divideNumber = number;
  while (divideNumber / 10 !== 0) {
    maintainNumber = maintainNumber + (divideNumber % 10) ** 2;
    divideNumber = parseInt(divideNumber / 10);
  }
  number = maintainNumber;
  if (arrayNumber.includes(number)) {
    checkArray = false;
  } else {
    arrayNumber.push(number);
  }
  console.log(arrayNumber);
}

if (parseInt(number) === 1) {
  console.log(arrayNumber[0], " is a happy number");
} else {
  console.log(arrayNumber[0], " is not a happy number");
}
