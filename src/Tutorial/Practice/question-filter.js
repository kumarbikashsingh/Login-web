const array=[
    {name:"Brijes", state:"Bihar", empId:10, salary: 3000},
    {name:"Anup", state:"Bengaluru", empId:20, salary: 5000},
    {name:"Manu", state:"Bhopal", empId:30, salary: 3500},
    {name:"Bhanu", state:"Bhojpur", empId:40, salary: 5500},
    {name:"Janu", state:"Bhojpur", empId:50, salary: 5550}
];


const arrayOne=[
    {name:"Brijes", state:"Bihar", empId:10},
    {name:"Anup", state:"Bengaluru", empId:20}
];

//1. Ref: array filter which has salary > 3500 output 
console.log(array.filter(product=>product.salary>3500));

//1. Ref: array filter which has salary > 3500 and empId divisble 20 output
console.log(array.filter(product=>product.salary>3500&&product.salary/20));

//1. Ref: array filter where state is Bhojpur
console.log(array.filter(product=>product.state==="Bhojpur"));

//1. Ref: array filter in which name has atleast 2 vowel
console.log(array.filter(product=>{
   return product.name.includes('A','E','I','O','U');
}));

console.log(array);
