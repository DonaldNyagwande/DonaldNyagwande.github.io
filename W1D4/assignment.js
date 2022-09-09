//Question 1 Define a function max() that takes two numbers as arguments and returns the largest of them
console.log("hello");
var x,y;
function max(x,y){
    if (x>y){
       return  x;
    }else {
         return y;
    }
    
}

//Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them
function maxOfThree(x,y,z){
    if(x>y&&x>z){
        return x;
    }else if(y>x&&y>z){
        return y;
    }else{
        return z;
    }
}

//Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
function isVowel(x){
    switch(x){
        case 'a':console.log("It has  vowel a");
        break;
        case 'e':console.log("Its  has  vowel b");
        break;
        case 'i':console.log("It has vowel i");
        break;
        case 'o':console.log("it has vowel o");
        break;
        case 'u':console.log("it has vowel u");
        break;
        default:console.log("not a vowel");
    }
}
//Define a function sum() and a function multiply() that sums and multiplies
// (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) 
//should return 10, and multiply([1,2,3,4]) should return 24.

function sum(x=[]){
    let total =0;
    for(let i=0;i<x.length;i++){
         total =total+x[i];
    }
    return total;
}
var multiple =1;
function multiply(q=[]){
    for(let i=1;i<q.length;i++){
         multiple =multiple*q[i];
    }
    return multiple;
}

//Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should
// return the string "ratset gaj".

function reverse(x){
    let result='';
    for(let d=x.length-1;d>=0;d--)
        result+=x[d];
        return result;
    
}
console.log(reverse("jag testar"));

function findLongWord(w)
{
    let longestWord="";
    for(let i=0;i<w.length;i++)
    {
        if(w[i].length>longestWord.length)
                longestWord=w[i];
    }
    return longestWord;
}
function filterLongWords(array, x){
    let result = [];
    array.forEach(value => { if(value.length > x){
        result.push(value);
    }
    });
    return result;
}

console.log(filterLongWords(["hi","hola","hello","bonjour"],4));


//     Modify the jsfiddle on the map/filter/reduce slide ( https://jsfiddle.net/keithlevi/e6kqvx2f/9/ ) as follows:

// a) multiply each element by 10; 

// b) return array with all elements equal to 3; 

// c) return the product of all elements;

const a = [1,3,5,3,3]; 
const b = a.map(function(elem, i, array) {
return elem + 3;
})
document.writeln(b.toString() + "<br/>");
const c = a.filter(function(elem, i, array){
return elem !== 3;});
document.writeln(c.toString() + "<br/>");
const d = a.reduce(function(prevValue, elem, i, array){
return prevValue + elem;
});
document.writeln(d+ "<br/>");

const d2 = a.find(function(elem) {return elem > 1;}); //3
const d3 = a.findIndex(function(elem) {return elem > 1;}); //1
document.writeln(d2+ "<br/>");
document.writeln(d3);



//anonymos
(function(){
console.log("this is anonymos function")
})


//shortest,
function shortest(arr=[]){
    let min=arr[0];
    let count=0;
for(let i=1; i<arr.length; i++){
        if(arr[i].length<min.length){
            count=i;
            min=arr[i];
        }
} 
return min; 
    }
console.log(shortest(["hello","z","bye"]));



function myFunctionTest(expectedVal, testfn)
{
   if(JSON.stringify(testfn())==JSON.stringify(expectedVal))
        return "TEST SUCCEEDED";
    else
        return "TEST FAILED. Expected "+JSON.stringify(expectedVal)+" found "+ JSON.stringify(testfn());
}

console.log("Expected output of max(20,10) is 20 and  " +
   myFunctionTest(20, function(){return max( 20, 10);} ));

console.log("Expected output of maxOfThree(5,4,44) is 44 and  " +
myFunctionTest(44, function(){return maxOfThree(5,4,44);} ));


console.log("Expected output of isVowel('b') is false and  " +
myFunctionTest(false, function(){return isVowel('b');} ));


console.log("Expected output of sum([1,2,3,4]) is 10 and  " +
myFunctionTest(10, function(){return sum([1,2,3,4]);} ));


console.log("Expected output of multiply([1,2,3,4]) is 24 and  " +
myFunctionTest(24, function(){return multiply([1,2,3,4]);} ));


console.log("Expected output of reverse(abc) is cba and  " +
myFunctionTest("cba", function(){return reverse("abc");} ));


console.log("Expected output of findLongestWord([\"hi\",\"hola\",\"hello\",\"bonjour\"]) is \"bonjour\" and  " +
   myFunctionTest("bonjour", function(){return findLongWord(["hi","hola","hello","bonjour"]);} )); 


console.log("Expected output of filterLongWords([\"apple\",\"orange\",\"bee\",\"hon\"],4) is [\"apple\",\"orange\"]] and  " +
   myFunctionTest(["apple","orange"], function(){return filterLongWords(["apple","orange","bee","hon"],4);} ));
