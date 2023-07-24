/*The basic of concept of map*/
let arr= [1,2,3,4,5,6];
let map1= arr.map(function (val, index){
    return {key:index, value:val*val};
});
console.log("Return's the squire of array: "+map1);


//Add the 'a' char in all char of str(String)
let str= "Bikash";
let ma = Array.prototype.map.call(str, function(item){
    return item+"a";
});
console.log("If you want to add charector of a in every array element: "+ ma);

//Return the squire of array element.
console.log("-------Just check---------");
console.log([2,4,5,6,7,8].map((val)=>{return "Squire of all Array element: "+ val* val}));

//--------------------------------------------
console.log(ma);
document.writeln(ma);

//----------------------
let ar=[2,3,4,5,6];
function alg(arena){
    return arena;
}
console.log("-------Just check---------");
let al = ar.map((alg, sksk)=>{return alg +" index of "+ sksk});
console.log(al);
document.writeln(al);

let ag=ar.map((num)=>document.writeln(num));

//--------------------------------------------
let ab=[2,3,4,5,6,9,7,8];

let zb=ab.map((aa)=>{ return aa*2});

let ap=zb.map((zb)=> {return zb});

console.log(ap);
//--------------------------------------------

let ba=[1,2,3,4,5,6];

let ca=ba.map((ac)=>{ return ac});
console.log(ca);

//------------------------------------
//Another Concept '.call()'.

const name1 ="Raja";
const map2 =Array.prototype.map;
const newChar=map2.call(name1,newarr=>{
    return newarr//`${newarr}`;
});
console.log(newChar);
//------------------------------------
const name2="Shidhu";
const stringToArray=Array.prototype.map.call(name2,sbsr =>{
    return sbsr;
});
console.log(stringToArray);
//---------------------------------------------
const userName=[
    {name: "Smeeth", age: 50, place: "Bengaluru"},
    {name: "Angilina", age: 60, place: "Hyderabad"},
    {name: "Jion", age: 70, place: "Pune"},
    {name: "Smeeth", age: 80, place: "Mumbai"}
];

const als= userName.map((details)=>{
    const newUser={};
    newUser[details.name]=details.place;
    newUser.bonash = details.name.length*10;
    newUser.userEge=details.age;
    
    console.log(newUser);
    
});

