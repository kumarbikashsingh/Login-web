const story= document.body.querySelector(".story");

const setText=document.body.querySelector("#set-text");

setText.addEventListener("click", ()=>{
    story.textContent="We will put our effort to build the carrier..."
})

const clearText= document.body.querySelector("#clear-text");
clearText.addEventListener("click",()=>{
    story.textContent="";
})
