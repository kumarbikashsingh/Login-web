const array=[
    {name:"Brijes", state:"Bihar", empId:10},
    {name:"Anup", state:"Bengaluru", empId:20},
    {name:"Manu", state:"Bhopal", empId:30},
    {name:"Bhanu", state:"Bhojpur", empId:40},
    {name:"Janu", state:"Bhojpur", empId:50}
];

const arrayData = [
    {empId: 10, salary: 3000},
    {empId: 20, salary: 5000},
    {empId: 30,salary: 3500},
    {empId: 40, salary: 5500},
    {empId: 50, salary: 5550}
]

const arrayOne=[
    {name:"Brijes", state:"Bihar", empId:10},
    {name:"Anup", state:"Bengaluru", empId:20}
];

//1. Ref: array => output = ["Brijes", "Anup","Manu",...]
//2. Ref :array => output = ["Brijes_Bihar", "Anup_Bengaluru","Manu_Bengaluru",...]
//3. Ref :array => output = ["Brijes_Bihar_10", "Anup_Bengaluru","Manu_Bhopal_30",...]
//4. Ref :array | arrayData => output = [ {name:"Brijes", state:"Bihar", empId:10, salary: 30000} ....]
//5. Ref :array | arrayData => output = ["Brijes_30000", "Anup_50000"...]
/** */
function hello(){
    //Find the name of Employee..
    let newCon=[];
    for(let i=0;i<array.length;i++){
        newCon.push(array[i].name);
    }
    console.log(newCon);
    
    //Find the Employee Name with place
    let EmpWithPlace=[];
    for(let j=0;j<array.length;j++){
        EmpWithPlace.push(`${array[j].name}_${array[j].state}`);
    }
    console.log('Employee Name with palce: ',EmpWithPlace);

    //Find the Employee Name,Place with id
        let EmpWithPlaceId=[];
        for(let j=0;j<array.length;j++){
            EmpWithPlaceId.push(`${array[j].name}_${array[j].state}_${array[j].empId}`);
        }
        console.log('Employee Name with palce: ',EmpWithPlaceId);

    //Add the employee Salary and print them.

        let copyData=[...array];
        let updatedData=[];
        for(let j=0;j<copyData.length;j++){
            for(let k=0;k<arrayData.length;k++){

                if(copyData[j].empId===arrayData[k].empId){
                    // let empSalary= Object.assign(empEmpty, array);
                    // updatedData[j]={...copyData, ...copyData.salary};
                    updatedData[j]={...copyData[j], ...copyData[j].salary};
                    updatedData[j].salary=arrayData[k].salary;
                }
            }
        }
        console.log(updatedData);
        console.log(array);

        //Find the Employee Name with salary
        let empWithSal=[];
        for(let i=0;i<updatedData.length;i++){
            empWithSal.push(`${updatedData[i].name}_${updatedData[i].salary}`);
        }
        console.log("Employee Salary with name: ",empWithSal);
        // console.log(array)
}
hello();


/** 
function salo(){
    //Get the element of employee
    let nameOfEmp=array.map(element=>{
        return element.name;
    });
    console.log(nameOfEmp); // LGM
    //------------------------------------------------

    //Get the Employee name with state.
    let stateOfEmp=array.map(elem=>{
        return `${elem.name}_${elem.state}`
    });
    console.log(stateOfEmp);  // LGM

    //Get the employee name_State_Id
    let empNameStateId=array.map(emp=>{return `${emp.name}_${emp.state}_${emp.empId}`});
    // let empNameStateId=array.map(emp =>  `${emp.name}_${emp.state}_${emp.empId}` );
    console.log(empNameStateId); // LGM

    //Add the employee Salary by another array
    let addEmpSalary=array.map((element,index)=>{
        let temp=arrayData.find(salar=>salar.empId===element.empId);
        // this is not right way to do it 
        // you are modifing exsting array here; once this is done 
        // existing array will have salary added you can check
        // const container =Object.assign({},element);
        const container ={...element};
        if(temp){
            container.salary=temp.salary;
        }
        return container;
    })
    console.log(addEmpSalary);
    console.log(array); // it should have salary added !
    
    //Find the employee name with salary:
    // Below one you need to refector it
    let empNameSalary=addEmpSalary.map(element=>{
        return `${element.name}_${element.salary}`
    })
    console.log(empNameSalary);
}
salo();
*/
