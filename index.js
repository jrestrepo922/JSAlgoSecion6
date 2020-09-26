//---- Coding Exercise 3--------//

 function sameFrequency(int1, int2){
     
    // turn the objects into a string so they can be converted into an object
    let int1Str = int1.toString();
    let int2Str = int2.toString(); 
    if(int1Str.length !== int2Str.length) return false; 
    let int1Obj = {}
    for(let num of int1Str){
        int1Obj[num] ? int1Obj[num]+= 1 : int1Obj[num] = 1
    }
    // { 1: 1, 8: 1, 2: 1}
    for(let num of int2Str){
        
        if(int1Obj[num]){
            int1Obj[num] -= 1
        } else {
            return false; 
        }
    }
    return true
 }






// let output = sameFrequency(1858, 1858)




//--- Coding Exercise 4 -------// 
// function areThereDuplicates(...args){

//     let frequencyCounter = {};
//     for(let ele of args){
//         frequencyCounter[ele] = (frequencyCounter[ele] || 0) + 1
//     }
//     for(let key in frequencyCounter){
//         if(frequencyCounter[key] > 1) return true;
//     }
//     return false; 
// }

function areThereDuplicates(...args){
    let argSet = new Set(args)
    if(argSet.size !== args.length) return true
    return false; 
}

// let output = areThereDuplicates('a', 'b', 'c', 'a')



//--Coding Exercise 5-----///





function averagePair(arr, target){
    if(arr.length === 0) return false; 
    let start = 0;
    let end = arr.length - 1;
    while(start < end){
        let middleEle = (arr[start] + arr[end]) / 2
        if(middleEle > target){
            end--
        } else if( middleEle < target){
            start++
        } else {
            return true
        }
    }
    return false
}





// let output = averagePair([], 3)









//-----Coding Exercise 6 ------------// 
// function isSubsequence(str1, str2){
//     let i = 0 
//     for(let char of str2){  
//         console.log(char, str1[i])      
//         if(char === str1[i]){
//             i++
//         }
//         if(str1.length === i) return true; 
//     }
//     return false 
// }




// let output = isSubsequence('abc', 'acb')









//---------------Coding Exercise 9 -------// 
// function findLongestSubtring(s){
//     let i = 0; 
//     let j = 0; 
//     let count = 0; 
//     let set = new Set();
//     let n = s.length
//     while(i < n && j < n){
//         let char = s[j];
//         if(!set.has(char)){
//             set.add(char);
//             j++;
//             count = Math.max(count, j - i);
//         } else {
//             set.delete(s[i]);
//             i++
//         }

//     }
//     return count;
// }

// let output = findLongestSubtring('aaa') 

let answer = document.querySelector("#answer")
answer.innerText = `${output}`