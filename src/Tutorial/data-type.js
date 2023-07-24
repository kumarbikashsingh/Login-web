// var a = [1,2,3,4,5];
// console.log("a = ",a);
// var b = a;
// b[1] = 10;
// console.log("a = ",a);

// var c =  [...a]; // const c = [...a];
// console.log("c :", c);
// c[1] = 2;

// console.log("c :", c);
// console.log("a = ",a);




// scope
// block scopeing
// var check  = true

// function abc () {
//     console.log("num : ", num); // undefined
//     var num = 10;
//     console.log("Num : ", num); // 10
//     console.log("name ", name); // undefined
//     console.log("name ", innerName); // undefined
//     var num = 20;

//     // block scoping
//     if (check) {
//         var name = "Bikash";
//         let str = "Block scoping string";
        
//         console.log(innerStr);
//         if (check) {
//             var innerName = "Inner Name"
//             const innerStr = "block inner"
//         }
//     }

//     console.log("name ", name); // Bikash
//     console.log("str ", str); // Error
// }

// abc();
// console.log("out side of fuction num :", num) // undefined
// ------------------------------------
function aba(){
    const arr= [1,2,3,4,5];
    arr[0]=10;
    console.log(arr);
    for(let i=0;i<5;i++){
        console.log(arr[i]);
    }
    arr[2]=12;
    console.log(arr);

    console.log("new Array(arr)");
    //If we add 
    //We are creatng the Array and stored in new Array with the Helpe of Array Constructor and new.
    
    const arr1=new Array(arr);
    console.log(arr1);

    //We can create a new Array with the help of [...<three dot with array reference>]
    console.log("[...arr]");
    const arr2=[...arr];
    console.log(arr2);
}
//arr[2]=30; 
// Becouse it is block scope and we can't access out side the block
// console.log(arr);//error
aba();

