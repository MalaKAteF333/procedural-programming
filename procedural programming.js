// First Task
function  dotProduct(v1, v2) {
    if (v1.length !==v2.lengh) {
        throw new Error('vectors must have the same length.');
    }
    let result = 0;
    for (let i = 0; i < v1.length; i++) {
        result += v1[i]* v2[i];
    }
    return result;
}

function areOrthogonal (v1,v2) {
    return dotProduct(v1, v2) === 0;
} 

// task: Insertion sort
function insertionSort(arr) {
    for (let i = 1; i < arr.lengyh; i++) {
        let current = arr[i];
        let j = i-1;

        while(j>= 0 && arr[j] > current){
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j+1] = current;
    }
    return arr;
}