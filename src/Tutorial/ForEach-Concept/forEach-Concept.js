document.writeln("<h1>"+"Hello Bikash"+"</h1>");

let employeeDatails=[
    {name: "Rajaram" ,age: 34, salary:8000},
    {name: "Raviraj" ,age: 24, salary:4000},
    {name: "Ramraj" ,age: 30, salary:5000},
    {name: "Raghavraj" ,age: 28, salary:6000},
    {name: "Rameshraj" ,age: 25, salary:9000}
];

document.writeln(employeeDatails);
console.log(employeeDatails);

// concept of forEach() method.
//let arr= employeeDatails.forEach(callbackFrunction(currentValue, index, array){...},thisValue)

let arr=employeeDatails.forEach((employeeDatails,index)=>{
    let empName=`index ${index} my name is ${employeeDatails.name} and i am employed`;
    console.log(empName);
});

//we can access name with index only not all...!
let arena=employeeDatails.forEach(( {name} ,index)=>{
    let jak=`index ${index}` +': '+ name;
    console.log(jak);
});

//We can use all three param 
let par=employeeDatails.forEach((employeeDatails,index,array)=>{
    let als=`"Index: ${index}  Employee Name: ${employeeDatails.name} Salary: ${employeeDatails.salary} Employee age: ${employeeDatails.age}`
    console.log(als);
});

//Ierate all elements of array five times.
console.log("--------------------------------")
let pros=employeeDatails.forEach((employe, index, array)=>{
    let als=employe;
    console.log(als);
});

//See some easy example.
console.log("\n-----welcome to easy approach---");
let arr1=[22,33,44,55];
let data=arr1.forEach((ar,ind,arra)=>{
    //eteration depends on length of array.
    console.log(`It is an arrays value: ${ar} index: ${ind}`);
});

arr1.forEach((ar,ind,arra)=>{
    //Its print array value once.
    console.log(`${ind} array value: ${arra}`);

    //It eterate multiple times, depends on length.
    // console.log(arra);x  
});


//-----------------------------------
console.log("__________________");
let arr2 =[10,20,30];
arr2.forEach(locate);
// console.log(indd);

function locate(as,indd,arrr){
    console.log(as);
    console.log(indd);
    console.log(arrr);
}
// --------------------------

let source=[20,30,40,50];
let newElement1 = 0;
let asaa=source.forEach((soura)=>{
    newElement1+= soura;
});
console.log("Total new value: "+ newElement1);
