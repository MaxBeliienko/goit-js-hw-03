function filterArray(numbers, value) {
    let resultArray = [];
    let oneElement;
    for (let index = 0; index < numbers.length; index++) {
        oneElement = numbers[index];
        if (oneElement > value) {
            resultArray.push(oneElement);
        }
    }
    return resultArray;
}


console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]