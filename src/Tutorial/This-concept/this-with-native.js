//We can use this concept in call().
const userDetailsA1={
    name: "Ramkishor",
    sarname: "Shahu",
    userMeth: function(){
        return(this.name +" "+ this.sarname);
    }
}
const userDetailsA2={
    name: "Rinku",
    sarname: "Nayan"
}
console.log(userDetailsA1.userMeth.call(userDetailsA2));

//Another way
const userDetailsB1={
    name: "Aman",
    sarname:"Ray",
    userId:456,
    callBy: function(city, cuntary){
        return (this.name+' '+ this.sarname+' '+city+' '+cuntary);
    }
};
const userDetailsB2={
    name: "Wilson",
    sarname:"Jobs"
};
console.log(userDetailsB1.callBy.call(userDetailsB2, "Delhi", "The India"));

// We can use this concept with apply() method.
// Difference is we can pass parrent object param by caller as in array.
const userDetailsC1={
    name: "Helwas",
    sername: "tony",
    userId:345,
    usercalls:function(city, cuntary){
        return (this.name+" "+ this.sername+" "+ city+" "+cuntary);
    }
};
const userDetailsC2={
    name: "Hilery",
    sername: "Arya"
};
console.log(userDetailsC1.usercalls.apply(userDetailsC2,["Bengaluru", "India"]));

//Using <bind()> method with this concept.
const userDetailsD1={
    name:"Arena",
    sername: "Josi",
    callby: function(city, cuntary){
        return(this.name+' '+this.sername+' '+city+' '+cuntary);
    }
};
const userDetailsD2={
    name: "Raja",
    sername: "Ram"
}

let userD=userDetailsD1.callby.bind(userDetailsD2,"Maharastra","India");
console.log(userD());