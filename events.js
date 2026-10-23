let button=document.getElementById("btn")
button.addEventListener("click",()=>{
   document.querySelector(".box").innerHTML="you are clicked"
})
   /* onmouseenter ,onmouseleave , onclick,ondblclick */
   button.addEventListener("contextmenu",()=> {alert("you right clicked")
    })
    