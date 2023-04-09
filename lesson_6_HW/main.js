//! Задание 1 

//function sum (a, b) {
//    return a + b;
//  }
//console.log(sum(3, 27))

//! Задание 2

// function capitalizeFirstLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1)
// }
// const myName = "arstan"
// const capitalizedString = capitalizeFirstLetter(myName)
// console.log(capitalizedString)


//! Задание 3 

// function plusOne(arr) {
//     let newArray = []
//     for (let i = 0; i < arr.length; i++) {
//         newArray.push(arr[i] + 1)
//     }
//     return newArray
// }
// let num = [1, 2, 3, 4, 5]
// let newNumbers = plusOne(num)
// console.log(newNumbers)

  
//! Задание 4

// function countChar(str, cnt) {
//     let count = 0
//     for (let i = 0; i < str.length; i++) {
//       if (str.charAt(i) === cnt) {
//         count++
//       }
//     }
//     return count;
// }
// console.log(countChar("lol is lol", "l"))
// console.log(countChar("prikooooolno", "o"))



//! Задание 5
  
// function sumDivisibleByThree(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 === 0) {
//         sum += arr[i];
//         }
//     }
//     return sum;
// }

// const nums = [3, 4, 6, 4, 15]
// console.log(sumDivisibleByThree(nums))





//! Задание 6

// const getDublicateLetterString = function (str){
//     let returnedString = ''

//     for(let i = 0; i < str.length; i++) {
//         returnedString += str[i] + str[i]
//     }

//     return returnedString
// }

// const str = 'arstan'

// const result = getDublicateLetterString(str)

// console.log(result)



//! Задание 7

// function replaceNegativeNumbers(arr) {
//    let result = []
//    for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       result.push(0)
//     } else {
//        result.push(arr[i])
//     }
//    }
//    return result
// }
// const arr = [-2,-5,4,6,7,-9,-3]
// const newArr = replaceNegativeNumbers(arr)
// console.log(newArr)





//! Задание 8

// function trueOrFalse(arr) {
//     let result = []
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > 9) {
//             result.push('false')
//         } else {
//            result.push('true')
//         }
//         }
//         return result
// }
// const arr = [1,11,2,45,6,78,5,44]
// const newArr = trueOrFalse(arr)
// console.log(newArr)





//! Задание 9

// function squareArray(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i] ** 2);
//     }
//     return result;
// }
// const arr = [2,4,6,8,3]
// const newArr = squareArray(arr)
// console.log(newArr)




//! Задание 10

// Не понял

//! Задание 11

// function isAnagram(str1, str2) {
//     let obj1 = {}
//     let obj2 = {}

//     for (let i = 0; i < str1.length; i++) {
//       if (obj1[str1[i]]) {
//         obj1[str1[i]]++
//       } else {
//         obj1[str1[i]] = 1
//       }
//     }

//     for (let i = 0; i < str2.length; i++) {
//       if (obj2[str2[i]]) {
//         obj2[str2[i]]++
//       } else {
//         obj2[str2[i]] = 1
//       }
//     }

//     for (let key in obj1) {
//       if (obj1[key] !== obj2[key]) {
//         return false
//       }
//     }
  
//     return true
//   }

//   console.log(isAnagram('listen', 'silent'))
//   console.log(isAnagram('hello', 'world'))



//! Задание 12

// function commonElements(arr1, arr2) {
//     let common = []
  
//     for (let i = 0; i < arr1.length; i++) {
//       if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
//         common.push(arr1[i])
//       }
//     }
  
//     return common
//   }
//   let arr1 = [1, 2, 3, 4, 5]
//   let arr2 = [2, 4, 6, 8]
//   console.log(commonElements(arr1, arr2))


//! Задание 13

// function replaceVowels(str) {
//     return str.replace(/[aeiou]/gi, '*')
// }
// console.log(replaceVowels('My name is Anton'))

//! Задание 14 

// function reverseStrings(arr) {
//    const reversedArr = [];
 
//    for (let i = 0; i < arr.length; i++) {
//      const reversedString = arr[i].split("").reverse().join("");
//      reversedArr.push(reversedString);
//    }
 
//    return reversedArr;
// }
// const strings = ["nice", "day", "ashwaganda"]
// const reversedStrings = reverseStrings(strings)

// console.log(reversedStrings)
