const userList = []
//Math.floor(100000000 + Math.random() * 900000000);
Math.floor(10 + Math.random() * 55)

for (let i = 0; i < 20; i++) {
  userList.push({

    name: "Jhon" + Math.floor(10 + Math.random() * 55),
    email: "abc" + Math.floor(10 + Math.random() * 55) + "@abc.com",
    password: "name" + Math.floor(10 + Math.random() * 55),
    mobileNumber: Math.floor(1000000000 + Math.random() * 9000000000)

  })
}

// You should write your code from here.

const tables  = document.getElementById("userlist");
//-----------------------------------
// console.log(userList);
// console.log(userList[0]);
// const length= userList.length;
// console.log("length: ",length);
// function userData(){
//   for(let i=0;i<length;i++){
//     console.log(userList[i]);
//   }
// }
/* userData();

  //---------------------------
  function userTable(tbody){
    let tr, td;
    tbody=document.getElementById("matchData");
    
    for(let i=0;i<=userData.length;i++){
      tr=tbody.insertRow(tbody.rows.length);

      td=tr.insertCell(tr.cells.length);
      td.setAttribute("align", "center");
      td.innerHTML =userData[i].name;

      td=tr.insertCell(tr.cells.length);
      td.setAttribute("align","center");
      td.innerHTML=userData[i].email;

      td=tr.insertCell(tr.cells.length);
      td.setAttribute("align","center");
      tr.innerHTML = userData[i].password;

      td=tr.insertCell(tr.cells.length);
      td.setAttribute("align","center");
      tr.innerHTML=userData[i].mobileNumber;

    }
  }
  userTable();
  */

  const newUserList = userList.map((abcd)=>{
    let a=abcd.name;
    let num = "";
    let str = "";
    for(let i=0; i<a.length; i++){
      if(a[i]%1==0){
        num+=a[i];
    }
    else{
        str+=a[i];
    }
  }
  let newName= num.concat(str);
    return ({...abcd,name:newName})
  }
  // ,{xyz:"bik"}
  );
  console.log(newUserList);

  let table=document.getElementById("matchData");

  function helloUser(list){
    let tr="";
    list.forEach(x=>{
      tr+='<tr>',
      tr+='<td>' + x.name +'</td>'+'<td>' + x.email +'</td>'+'<td>' + x.password +'</td>'+'<td>' + x.mobileNumber +'</td>'
      tr+='</tr>'
    })
    table.innerHTML = tr;
  };

  helloUser(userList);

      /*If you inser employee details in table by map.

    userList.map((x) => {
      return( 
        tr+='<tr>', 
          tr+=
          '<td>'+x.name+'</td>'+
          '<td>'+x.email+'</td>'+
          '<td>'+x.password+'</td>'+
          '<td>'+x.mobileNumber+'</td>',
          tr+='</tr>'
      );
  */

  /* function Insert_Data() {
  //   let tables = document.getElementById("matchData");
  //   let rows = tables.querySelectorAll('tr');
  //   console.log(rows)
  //   for (let i = 1; i < rows.length; i++) {
  //     rows[i].children[0].textContent = table[i-1].name
  //     rows[i].children[1].textContent = table[i-1].email
  //     rows[i].children[2].textContent = table[i-1].password
  //     rows[i].children[2].textContent = table[i-1].mobileNumber
  //   }
  // }
  // Insert_Data();

//   function dataUse(){
//     let length=userList.length;

//   for(let i=0;i<length;i++){
//     let size1=Object.keys(userList[i]).length;
    
//     // console.log(size1);
//     for(let j=0;j<size1;j++){
//       console.log(j);
//     }
//   }
// }
 dataUse();*/
const userDetail=document.getElementById("abs");

function serchUserByName(){
   
  // if(userDetail.value!=null){
  //   let valueOfUser= userList.filter((abcde)=>
  //   { 
  //     return abcde.name==userDetail.value || 
  //     abcde.email==userDetail.value ||
  //     abcde.mobileNumber==userDetail.value||
  //     abcde.password==userDetail.value;
  //   });

  //   /**
  //    * 
  //    let valueOfUser= userList.filter((abcde)=> abcde.name==userDetail.value);
  //    */

  //   helloUser(valueOfUser);
  //   // console.log(valueOfUser);
  // }
  // else{
  //   console.log("Not loaded...")
  // }
  includesChar(userList,userDetail.value);
}
/*
//It's Lendhy process.
 helloUser(userList);
let hello=userList.filter((user6)=>{
  return user6.name=='Jhon43'});
  console.log(hello);

function byEmail(){
let serchUserById = userList.filter((aaa)=> aaa.email==userDetail.value);
helloUser(serchUserById);
// console.log(serchUserById);
}

function byMobile(){
  let serchUserByMob=userList.filter((mmm)=>mmm.mobileNumber==userDetail.value);
  helloUser(serchUserByMob);
  // console.log(serchUserByMob);
}

function byPassword(){
  let serchUserByPwd=userList.filter((ppp)=>ppp.password==userDetail.value);
  helloUser(serchUserByPwd);
}
*/
function includesChar(alpha,query){

  let ab=alpha.filter((alp)=>
  alp.name.includes(query)||
  alp.email.includes(query)||
  alp.password.includes(query)||
  alp.mobileNumber.toString().includes(query.toString())
  );
  helloUser(ab);
}
includesChar(userList,userDetail.value);

