// const a = {
//     name: 'Brijes', state: 'Bihar', empId: 10, salary: 3000,
//     color: ['r','b', 'g']
// }



// const b = {...a, name: "Jhon", color: [...a.color]};
// console.log("b :", b)
// b.state = "Bhopal"
// b.color[1] = 'c'
// console.log("b :", b)

// console.log("a : ", a)

const a = [
    {name: 'Bikash',state: 'Bhopal',empId: 10,salary: 3000, local: {
      lang: 'EN'}
},
]
   
const b = [...a, {name: 'ADAM',state: 'KTK',empId: 10,salary: 3000, local: {lang: 'KTK'}
}]


// console.log("b :", b)
b[0] = {...b[0], local:{ lang: "SN"}}

console.log("b :", b);

console.log("a : ", a);


//----------------------------------------
const abc=[
  {
      name: "Raja", 
      add: "Bhopal", 
      email: "raja123@gmail.com", 
      mobile: 9403827364, 
      food: ["mango","apple","Orange","Papaya"]
  }
  ];

const cba=[...abc];
cba[0]={...cba[0], mobile: 6958471232};
console.log(cba);

const ct={...cba[0], food:[...cba[0].food]}
ct.food[3]="Orange";
console.log(ct);
console.log(cba);

console.log("\nMain Array: ",abc)