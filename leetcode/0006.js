// var convert = function (s, numRows) {

//     if (numRows < 2 || s.length < numRows) return s;

//     const buildMatrix = function(rows){

//         let arr = [];
       
//         while (rows--){
//             arr.push([]);
//         }

//         return arr;
//     }

//     const putTogether = function(matrix){

//         let phrase = [];

//         matrix.forEach(el => {
//             phrase.push(el.join('').trim());
//         });

//         return phrase.join('');
//     }

//     let dir = true;     // True goes down and false goes up
//     let matrix = buildMatrix(numRows);
//     let i = 0;
//     let j = 0;
//     let index = 0;
    
//     while (s.charAt(index)){
//         let letter = s.charAt(index);
//         index++;
//         if (dir){ //is going down
//             if (i < (numRows-1)){
//                 matrix[i][j] = letter;
//                 i++;
//             } else { // i is in the last row, lets switch columns
//                 matrix[i][j] = letter;
//                 dir = false;
//                 j++;
//                 matrix[i][j] = "";
//                 i--;
//             }
//         } else { //is going up
//             if (i > 0){
//                 matrix[i][j] = letter;
//                 i--;
//             } else { // i is back at the top, switch columns again
//                 matrix[i][j] = letter;
//                 dir = true;
//                 j++;
//                 matrix[i][j] = "";
//                 i++;
//             }
//         }
//     };

//     return putTogether(matrix);
// };

var convert = function (s, numRows) {

    if (numRows < 2 || s.length < numRows) return s;

    const buildMatrix = function(rows){

        let arr = [];

        while (rows--){
            arr.push([]);
        }

        return arr;
    }

    const putTogether = function(matrix){

        let phrase = [];

        matrix.forEach(el => {
            phrase.push(el.join('').trim());
        });

        return phrase.join('');
    }

    let i = 0;
    let j = 0;
    let index = 0;

    while s.charAt(index){
        
    }


}

console.log(convert("PAYPAL", 3));
// console.log(convert("AB", 1));