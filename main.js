// ! Nav Menu For Mobile
let menuICon= document.querySelector(".menu-icon ")
let menuNav= document.querySelector("nav ul")
menuICon.addEventListener("click",function(){
if(menuNav.className==""){
    menuNav.classList.add("slide-out") 
}
else{
    menuNav.classList.toggle("slide-out")  
    menuNav.classList.toggle("slide-in")  
}
})

// ! Handler 
let rightHandler= document.querySelector(".handler.right")
let leftHandler= document.querySelector(".handler.left")
let slider= document.querySelector(".slider")
let sliderCS= window.getComputedStyle(slider)
let sliderIndex=parseInt(sliderCS.getPropertyValue("--slider-index"))
   

function handler(){
    rightHandler.addEventListener("click",()=>{
        slider.style.setProperty("--slider-index", sliderIndex-=1)
        if(sliderIndex=== -3){
        slider.style.setProperty("--slider-index", sliderIndex =0)
        }
    })
    leftHandler.addEventListener("click",()=>{
        slider.style.setProperty("--slider-index", sliderIndex+=1)
        if(sliderIndex > 0){
            slider.style.setProperty("--slider-index", sliderIndex =0)
                
            }
    })
    
}
handler()
console.log("helo")
