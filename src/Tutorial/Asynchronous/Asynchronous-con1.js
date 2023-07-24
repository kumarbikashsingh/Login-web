/* 
//1st concept of Asynchronous.
console.log("This is first statement");
setTimeout(function(){
    console.log("This is set time out function of Statement")
},3000);

console.log("This is last statement");
*/
//Callback function to handle an Asynchronous function.
//Declared a function.
// function fatchData(callback){
//     // console.log(arguments);
//     setTimeout(()=>{
//         const data ={a: 'Ravi', b: 'Sai', c:'Jai'};
//         callback(data);
//     },3000);
// }

// fatchData(function(data){
//     console.log(data);
// });
// console.log('This is last statement.');

fetch('https://jsonplaceholder.typicode.com/posts')
   .then(res => res.json()).then(data => {
    console.log("response Data : ", data)
   }).catch(err => {
   console.log(err)
})