//This concept 
/* 
function abc(c, d){
    return this.a + this.b + c + d;
}
const e={a:2, b:3};


console.log('Using <.call()> method: '+abc.call(e,1,2));

//.apply() method's always carring <array> as 2nd Argument.And 1st Callback function/Object.
console.log("Using <.apply()> method: "+abc.apply(e, [8,10]));

//.bind() method's always carrring 1st argument Object/Callback function. and 2nd Array or normal.
const bundle= abc.bind('Using <.bind()> method: '+e,[4,7]); //Not execute.
console.log(bundle);

*/
const o ={a:"I",b:"am",c:"?"};
console.log(o.a);

function gh(a,b){
    console.log(arguments);
    console.log(a+b);
}
gh(10,20);
