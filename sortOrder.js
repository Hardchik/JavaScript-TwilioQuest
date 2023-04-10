var firstValue = process.argv[2];
var secondValue = process.argv[3];

// Your comparison code (if statements) go here
firstValue = firstValue.toLowerCase()
secondValue = secondValue.toLowerCase()

if(firstValue > secondValue) {console.log('1')}
else if(firstValue === secondValue) {console.log('0')}
else if(firstValue < secondValue) {console.log('-1')}