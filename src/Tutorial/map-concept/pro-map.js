/*differnt concept of map we can achive then*/
const myArray1=[
    {name: "Smith", age: 40, add: "Bengaluru"},
    {name: "Suman", age: 40, add: "Hyderabad"},
    {name: "Shairav", age: 40, add: "Pune"},
    {name: "Shekhar", age: 40, add: "Mumbai"},
    {name: "Shuvi", age: 40, add: "chenai"}
];

const filteredNumbers = myArray1.map((num, index) => {
    return "index: "+index +", "+num.name+" "+num.age+" "+num.add;
 
});
console.log(filteredNumbers);

