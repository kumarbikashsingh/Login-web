// This program is not running well
//# Create the child block in the parent after chick event.
const parent=document.body.querySelector(".parent");

const addChild=document.body.querySelector("#add-child");
parent.addEventListener("click",()=>{
    // Only add a child if we don't already have one in addition to the text node "parent"
    if(parent.childNodes.length>1){
        return;
    }
    const child= document.createElement("div");
    child.classList.add("child");
    child.textContent="child";
    parent.appendChild(child);
});

const removeChild= document.body.querySelector("#remove-child");
removeChild.addEventListener("click",()=>{
    const child=document.body.querySelector(".child");
    parent.removeChild(child);
})