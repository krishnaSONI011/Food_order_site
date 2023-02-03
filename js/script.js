//for menu toggle through button---
let menu =document.querySelector("#menubtn");
let element =document.querySelector("#nav_links");

menu.onclick= () =>{
    let leftValue = window.getComputedStyle(element,null).getPropertyValue("left");
    if(leftValue ==="-500px"){
        element.style.left ="0px";
    }
    else{
        element.style.left ="-500px";
    }
}
//-----------------------------------------------------

//for random specials menu category 
