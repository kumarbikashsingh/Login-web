//What happend if we return <this> in Object-Method.
const user={
    username: "Ram",
    lastname: "Raj",
    id: 5566,
     getBack :function(){
        return this;
    }
};
console.log(user.getBack());

//How to call First name and last Name.

const user1={
    userFstName: "Bikash",
    userLstName: "Singh",
    userId:561,
    userAdd:"Bengaluru",

    userFunction:function(){
        return "Return by Object method: "+this.userFstName+" "+this.userLstName;
    }
};
console.log(user1.userFunction());

//How to call <this> in Fuction.
//If we console, what will be return.
function user3(){
    console.log("This is a function: "+ this);
    //If you use comma after this mince it return array of window object like: "abc", this.
    //If you use 'plus(+) Operator after this then it return "window array obj"
}
user3();

//Most casses this will return window Object.
const user4= () => this;
console.log("Arrow function this: ",user4());
//If you use only user4 then it will return <this>.
//And If you use <user4()> method then it will return [object window],if you use '+' Operator.
// If you use comma(,) then it will return window Object.

//<this> key is not applicable for arrow function.
const user5={
    userName: "Bikash",
    userLastName:"Singh",
    userReId:549,
    userArrowFun: ()=>{this.userName+" "+ this.userLstName}
};
console.log(user5.userArrowFun());
//output: Undefined.

//Using strict Mode
"use strict mode";
function show1(){
    console.log(this);
}
show1();

//See How to use this in event-listener
document.getElementById("ide").addEventListener("click", function(){
    console.log("This is an eventlistner: ",this);
})