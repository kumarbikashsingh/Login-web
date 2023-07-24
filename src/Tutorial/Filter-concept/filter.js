//Filter the Prime Number from the array Object (by Mozila)
const arr=[1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,17,18,19,20,21];
const primeNumber=function(num){
    for(let i=2;i<num;i++){
        if(num%i==0){
            return false
        }
    }
    return num>1;
}
console.log(arr.filter(primeNumber));

//Find the duplicate id from the JSON
const empId=[
    {id:15},
    {id:NaN},
    {id:5},
    {id:21},
    {id:-1},
    {id:null},
    {id:"undefined"},
    {id:3.50},
    {id:0}
];

let qtyInvalidId=0;
let invalidId="";

function validId(ide){
    if(Number.isFinite(ide.id) && ide.id!=0 && ide.id>0){
        return true;
    }
    
    else{
       ` ${invalidId+=ide.id+"\t"} ` ;
        qtyInvalidId++;
    return false;
    }
    
}
const arrById= empId.filter(validId);
//Showing expected id's.
console.log(arrById);

console.log("Invalid id's are : "+invalidId);
console.log("Number of invalid id's: "+qtyInvalidId);

//find the array element by filter() method using char.
const fruits=["Apple","Orange","Banana","Graps", "Mango"];

function findByChar(arr1, query){
    return arr1.filter((el)=>
    el.includes(query));
    //If Search String char in lower case=> el.inLowerCase().includes(query.inLowerCase())
}
console.log(findByChar(fruits,"a"));

//Find the element of Non-Array-Element by using filter.

const objectOf={
    length:3,
    0:"a",
    1:"b",
    2:"c",
    3:"d",
    4:"e"
}
console.log(Array.prototype.filter.call(objectOf, (x)=> x <= "e"));
//Output: ['a','b','c']

/*
Here: Length is predefine which is 3.
In condition you will give x value Less-Then-Equals to e 
but it do-not effect the length.
It's show only expected result based on length.
 */

//Modifing, appending and deleteing initail array.
let someFruits=["Mango","Apple","Banana", "Orange","Liche"];
let modifiedFruits=someFruits.filter((fruit,index, arr)=>{
    arr[index+2] += "sweet";
    return fruit.length>6;
});
console.log(modifiedFruits);
//Out put: ["Mango","Apple"]
/* [Index + number] are endicate mumber of array item's,
which is satisfied the condition, if not satisfay then 
false and ignore by command.*/

//Appending new Array
 someName=["Ram","Shaym","Gobindam","Swarupam","Nagendram"];
const appandedWord=someName.filter((word, index, arr)=>{
    arr.push("New");
    return word.length<6;
});
console.log(appandedWord);
console.log(someName);
//The Disadvantages is new add 5 times.

// Delecting concept

let foodProducts =["Bhujia", "Sev", "Samosh","Tea", "Chandrakla","Piza"]
const updatedProduct=foodProducts.filter((calab,index,arr)=>{
    arr.pop();
    return calab.length<6;
});
console.log("Deleted Products: "+updatedProduct);
// console.log(foodProducts);

//Try to learn from another website.
let alpad=["Hello","How","Are", "you"];
function fin(al,ph){
    return al.filter(aa=>aa.includes(ph));
}
console.log(fin(alpad,"o"));

