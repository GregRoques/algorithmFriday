// array =['555-555-5555', '(555)555-5555','555 555 5555', '555 555-555', '1-555-555-5555', '(1)555-555-5555','5555555555','555-five-55-aebdgtxi;;3tt4greqr6seven','5-trumprules-555-5-5-5-5-5-5','2798504trumpforprez23587928579428795458792','1-800-ninjas-are-cool','1900-acdc4life.']

// function convertPhone(phonestr){
//     let finalArray =[];
//     for(i=0;i<phonestr.length;i++){
//         let regEx = /\d/g;
//         let correctPhone= phonestr[i].match(regEx);
//         // console.log(correctPhone[0])

//         if (correctPhone.length <10){
//             // console.log("Invalid Number")
//         }else if (correctPhone.length >= 10){
//             if (correctPhone[0] == 1){
//                 correctPhone.shift();
//                 let tenDigit = correctPhone.slice(0,10);
//                 tenDigit.splice(3,0,'-')
//                 tenDigit.splice(7,0,'-');
//                 let completeNumber = tenDigit.join("");
//                 finalArray.push(completeNumber)
//             }else{
//             let tenDigit = correctPhone.slice(0,10);
//             tenDigit.splice(3,0,'-')
//             tenDigit.splice(7,0,'-');
//             let completeNumber = tenDigit.join("");
//             finalArray.push(completeNumber)
//             }
//         }
//     }
//     console.log(finalArray)
// }
// convertPhone(array)

