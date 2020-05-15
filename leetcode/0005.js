var longestPalindrome = function (s) {

    if (s.length < 2) return s;

    const ispalindrome = function(subString){

        let revString = subString.split('').reverse().join('');

        return subString === revString;
    }

    let biggestPalindrome = s[0];
    let startIndex = 0;
    let endIndex = 0;

    while (startIndex < s.length){

        endIndex = startIndex + biggestPalindrome.length;

        while (endIndex <= s.length){
            if (s[startIndex] === s[endIndex])
                if (ispalindrome(s.slice(startIndex, endIndex + 1)) && s.slice(startIndex, endIndex + 1).length > biggestPalindrome.length)
                    biggestPalindrome = s.slice(startIndex, endIndex + 1);

            
            debugger;
            endIndex++;
        }

        startIndex++;
    }

    return biggestPalindrome;

};

// console.log(longestPalindrome("babad"));    // bab
// console.log(longestPalindrome("cbbd"));     // "bb"
// console.log(longestPalindrome("cbbdddd"));     // "dddd"
console.log(longestPalindrome("vaomxdtiuwqlwhgutkhxxhccsgvyoaccuicgybnqnslogtqhblegfudagpxfvjdacsxgevvepuwthdtybgflsxjdmmfumyqgpxatvdypjmlapccaxwkuxkilqqgpihyepkilhlfkdrbsefinitdcaghqmhylnixidrygdnzmgubeybczjceiybowglkywrpkfcwpsjbkcpnvfbxnpuqzhotzspgebptnhwevbkcueyzecdrjpbpxemagnwmtwikmkpqluwmvyswvxghajknjxfazshsvjkstkezdlbnkwxawlwkqnxghjzyigkvqpapvsntojnxlmtywdrommoltpbvxwqyijpkirvndwpgufgjelqvwffpuycqfwenhzrbzbdtupyutgccdjyvhptnuhxdwbmdcbpfvxvtfryszhaakwshrjseonfvjrrdefyxefqfvadlwmedpvnozobftnnsutegrtxhwitrwdpfienhdbvvykoynrsbpmzjtotjxbvemgoxreiveakmmbbvbmfbbnyfxwrueswdlxvuelbkrdxlutyukppkzjnmfmclqpkwzyylwlzsvriwomchzzqwqglpflaepoxcnnewzstvegyaowwhgvcwjhbbstvzhhvghigoazbjiikglbqlxlccrwqvyqxpbtpoqjliziwmdkzfsrqtqdkeniulsavsfqsjwnvpprvczcujihoqeanobhlsvbzmgflhykndfydbxatskf"));     