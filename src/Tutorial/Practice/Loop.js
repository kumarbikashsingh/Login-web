let a=['a','b','c','d','e','f']
let b=['a','e'];
let c=[];
for(let i=0;i<a.length;i++){
    for(let j=1;j<b.length;j++){
        if(b[j]!==a[i]){
            c.push(a[i]);
        }
    }
}
console.log(c);