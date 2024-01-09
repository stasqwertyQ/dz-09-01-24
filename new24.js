// task 1

function getBoundaryElements(array) {

    const firstElement = array[0];
    const SecondElement = array[array.length - 1];


    return [firstElement, SecondElement];
}

const inputArray = [1, 2, 3, 4, 5];
const result = getBoundaryElements(inputArray);
console.log(result);



//TASK 2



function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return true; 
        }
    }
    return false;
}


const array1 = [10, 20, 30, 40, 50];
console.log(includes(array1, 30)); 

const array2 = [10, 20, 30, 40, 50];
console.log(includes(array2, 17));