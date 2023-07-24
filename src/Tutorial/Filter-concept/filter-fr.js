/* */
//Find the paticular element by <includes> method
const array=[
    {name:"Brijes", state:"Bihar", empId:4698},
    {name:"Anup", state:"Bengaluru", empId:3128},
    {name:"Manu", state:"Bhopal", empId:2653},
    {name:"Bhanu", state:"Bhojpur", empId:6211},
    {name:"Janu", state:"Bhojpur", empId:7211}
];
console.log(array);
function includeAll(all, one){
    const abc=all.filter(abcd=>
        abcd.name.includes(one)||
        abcd.state.includes(one)||
        abcd.empId.toString().includes(one.toString())
        );
    return abc;
}
console.log(includeAll(array,1));

const array1=[
    {name:"Bhanu", state:"Bhojpur", empId:6211},
    {name:"Janu", state:"Bhojpur", empId:7211}
];

const ass=array.filter(aaa=> {return array1.indexOf(aaa)===-1});
console.log(ass);

/*Note:
If you search array objects item which is NUMBER then 
1st convert number to String and then event value must be convert
into string [Ex is top line No: 13].
*/


/**
//Emplement all those posibilities.
const person=[
    {name: "Raja", age:23},
    {name: "Manoj", age:28},
    {name: "Bhola", age:25},
    {name: "Molu", age:30},
    {name: "Chotu", age:20}
];
 
//Find the the top 3 oldest peaple from this arry Object.
console.log(person.filter((ann)=>ann.age>25));

//Find a peaple from the person object who is older 25 but yonger 30;
console.log(person.filter((ann)=>ann.age>25&&ann.age<30));

//Find the 1st element of array.
console.log(person.indexOf(0));

//Last index of element
//Find the last element of Array.
*/

/* 
//Filtering the elements based on position.
const team=[
    {name:"Justin", position:"Tester",cuntry:"USA"},
    {name:"Shuman", position:"Developer",cuntry:"India"},
    {name:"Hemant", position:"Tester",cuntry:"Nitharland"},
    {name:"Montina", position:"Developer", cuntry:"Rasiya"},
    {name:"Anil", position:"Developer", cuntry:"India"},
    {name:"Ana", position:"President", cuntry:"SauthAshiya"},
    {name:"Welson", position:"Director", cuntry:"USA"},
    {name:"", position:"Ceo", cuntry:"SauthAshiya"}
];
//Find the person of team who is not Developer?
console.log(team.filter((team)=>team.position!=="Developer"));
//Here you can access based on <cuntry, Position, Name,...> as you requriment.
*/

// //Accessing the Index position.
// let winner= ["Amol","Umesh","Niraj","Aniket"];

// /*//Based on index position we declared .
// let Gold=winner.filter((arr,index)=>index==0);
// let Silver =winner.filter((arr,inde)=>inde==1);
// let Brong =winner.filter((arr,ind)=>ind==2);
// let Luser =winner.filter((arr,ind)=>ind==3);
// console.log(`Gold Winner : ${Gold}, Silver Winner: ${Silver}, Brong Winner: ${Brong}, Luser: ${Luser}`);
// //Output=> Gold Winner : Amol, Silver Winner: Umesh, Brong Winner: Niraj, Luser: Aniket
// */

// /**///By Function we are accessing element of an array.
// function winnerDis(name, index, array){  // (item, index, array)
//     let isNextIndex= index+1 < array.length ? true: false

//     if (index+1 < array.length) {
//         isNextIndex = true
//     } else {
//         isNextIndex = false;
//     }

//     if(isNextIndex){
//         console.log(`The Number:${index+1} is  winner ${name}.`);
//     }
//     else{
//         console.log(`Sorry, ${name} is not one of the winner`)
//     }
// }
// winner.filter(winnerDis);

