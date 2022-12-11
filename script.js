gsap.from(".johnDoeText", {x:-80, duration:3, opacity:0,})
gsap.from(".workText", {opacity:0, duretion:6, stagger:1, repeat:-1})

gsap.from(".mainJohn", {x:200, duration:3})
gsap.to(".alittleMeTextH4", {rotation: 360,  duration: 1, repeat: -1, repeatDelay:5})
gsap.from(".amazingImg", {opacity:0.1, duration:2, stagger:1, repeat:-1})

const arrayWork = ["Web Designer", "Photographer", "3D Artist"];
const workText = document.querySelector(".workText");
console.log(workText)

function changeWork() {
    for(let i=0; i<=arrayWork.length; i++){
        workText.textContent(i);
        if (i==arrayWork.length){
            i=0;
        }
    }
}

changeWork();