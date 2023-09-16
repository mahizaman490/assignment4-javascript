//problem 1
function cubeNumber(number) {
    if (typeof number === 'number' && number > 0) {
        return number ** 3;
    } else {
        return "Input must be a positive number.";
    }
}





//problem 2
function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Both inputs must be strings.";
    }

    return string1.includes(string2);
}





//problem 3
function sortMaker(arr) {
    if (arr.length !== 2 || !Array.isArray(arr)) {
        return "Invalid input";
    }

    const [num1, num2] = arr;

    if (typeof num1 !== 'number' || typeof num2 !== 'number' || num1 < 0 || num2 < 0) {
        return "Invalid input";
    }

    if (num1 === num2) {
        return "equal";
    }

    return [Math.max(num1, num2), Math.min(num1, num2)];
}



//problem 4
function findAddress(obj) {
    var street = obj.street !== undefined ? obj.street : '__';
    var house = obj.house !== undefined ? obj.house : '__';
    var society = obj.society !== undefined ? obj.society : '__';

    return street + ',' + house + ',' + society;
}





//problem 5
function canPay(changeArray, totalDue) {
    if (changeArray.length === 0) {
        return "you did not give money.";
    }

    let sumOfNotes = 0;
    for (let i = 0; i < changeArray.length; i++) {
        sumOfNotes += changeArray[i];
    }

    return sumOfNotes >= totalDue;
}
 
// problem1

function cubeNum(number){
if(typeof number === 'number' && number > 0){
        return number ** 3
}else{
    return 'invallid number'
}
}

//problm2

function matchFinder(string1,string2){
    if(string1===string1.includes(string2)){
        return true;
    }else if(string1 !== string1.includes(string2)){
        return false;
    }else if ( typeof string1 !== "string" || typeof string2 !== "string" ){
        return "not a vallid input"
    }
}


//problem 3

// function sortMaker(arr){
// for(let i = 0; i<arr.length; i++){
//  if(){

// }

// }
// }
// var arr1 = [1,2]
// sortMaker(arr1)

//problem4
function findAddress(obj){
 if(obj.street!==undefined && obj.house !==undefined && obj.society!== undefined){
return obj.street + obj.house + obj.society;
 }else if(obj.street==undefined && obj.house !==undefined && obj.society!== undefined){
    return ' __ ' + obj.house + obj.society;
 }else if (obj.street==undefined && obj.house ==undefined && obj.society!== undefined){
    return ' __ ' + ' __ ' + obj.society;
 }else if(obj.street==undefined){
    return ' __ ' 
 }else if(obj.house==undefined){
    return '__  '+ ' __' 
 }else if(obj.society==undefined){
    return '__  '+ '  __ ' + ' __ '
 }

}



//problem5
function canPay(arr,number){
    var sum = 0;
for(var i = 0; i < arr.length; i++){
    let element = arr[i];
    sum = sum+=arr[i];
    if(sum>=number){
        return true ;
    }else if(sum<number){
        return false ;
    }else if(arr == undefined || arr == ['']){
        return 'you did not give money' 

    }
}

}