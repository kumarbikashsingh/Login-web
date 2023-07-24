//Importent concept 
//To remove the matching element's from the main Array.Without using 'Splice'.
const array=[
  {name:"Brijes", state:"Bihar", empId:10, salary: 3000},
  {name:"Anupo", state:"Bengaluru", empId:20, salary: 5000},
  {name:"Manu", state:"Bhopal", empId:30, salary: 3500},
  {name:"Bhanu", state:"Bhojpur", empId:40, salary: 5500},
  {name:"sdfg", state:"Bhojpur", empId:50, salary: 5550}
];

let common=[
  {name:"Bhanu", state:"Bhojpur", empId:40, salary: 5500},
  {name:"Manu", state:"Bhopal", empId:30, salary: 3500},
  {name:"sdfg", state:"Bhojpur", empId:50, salary: 5550}
  ];
  
let newArray=[];
  for(let i=0;i<array.length;i++){
      // let match = 0;
      // for(let j=0;j<common.length;j++){
      //     if(array[i].empId===common[j].empId){
      //         match ++;
      //     }
      // }
      // if (match == 0) {
      //     newArray.push(array[i].empId);
      // }
      if (!common.find(ele => ele.empId === array[i].empId)) {
          newArray.push(array[i]);
      }
  }
  console.log(newArray);

// let aa=0
// for(let a=length;a>0;a--){
//     // newArray.push(array[a].empId);
//     for(let b=0;b<array1.length;b++){
//         if(array[a].empId==array1[b].empId){
//             newArray=array.splice(a);
//         }
//     }
// }
// console.log(newArray);


    // -------That is the wrong techenique to use it.----------
    // let myArray = [
//     {name: 'deepak', place: 'bangalore'}, 
//     {name: 'chirag', place: 'bangalore'}, 
//     {name: 'alok', place: 'berhampur'}, 
//     {name: 'chandan', place: 'mumbai'}
//   ];
//   let toRemove = [
//     {name: 'deepak', place: 'bangalore'},
//     {name: 'alok', place: 'berhampur'}
//   ];
  
//   for( var i=myArray.length - 1; i>=0; i--){
//       for( var j=0; j<toRemove.length; j++){
//           if(myArray[i] && (myArray[i].name === toRemove[j].name)){
//               myArray.splice(i, 1);
//           }
//       }
//   }
  
//   alert(JSON.stringify(myArray));