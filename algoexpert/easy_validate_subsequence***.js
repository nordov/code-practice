function isValidSubsequence(arr, sequence) {

    if (sequence.length >  arr.length) return false;
    if (sequence.length === 0) return true;    

    let sequenceIndex = 0;
    let arrayIndex = 0;

    while (arrayIndex < array.length){

        if (arr[arrayIndex] === sequence[sequenceIndex]){
            if (sequenceIndex === sequence.length -1) return true;
            sequenceIndex++;
        }

        arrayIndex++;
    }

    return false;
    
}