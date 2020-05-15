
function isPalindrome (str) {
  return str === str.split('').reverse().join('');
}

function createHash (str) {
  let hash = {};

  for (let i = 0; i < str.length; i++) {
    if (!hash[str[i]]) {
      hash[str[i]] = [i];
    } else {
      hash[str[i]].push(i);
    }
  }

  return hash;
}
// console.log(createHash('bababd'));  

function longestPalindrome (str) {
  let hash = createHash(str);
  let longest = '';

  for (let i = 0; i < Object.keys(hash).length; i++) { 
  let arr = Object.values(hash)[i];
  if (arr.length > 1) {
    for (let j = 0; j < arr.length; j++) {
      for (let k = 1; k < arr.length; k++) {
          let sub = str.substr(arr[j], arr[k+1]);
          if (sub.length > longest.length && isPalindrome(sub)) {
            longest = sub;
          }
        }
      }
    }
  }
  return longest;
}


console.log(longestPalindrome('dbabab')); // => 'babab'