// const bod=document.getElementsByTagName('body')[0];
const bod = document.body;

console.log(bod)

const boxes=document.querySelectorAll(".box");

boxes.forEach(
    box=>{
        const currentColor=window.getComputedStyle(box).backgroundColor;
        box.addEventListener('click', function(){
            bod.style.backgroundColor=currentColor
        })
    }
)