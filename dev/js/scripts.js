import { gsap } from "gsap";

const mainTL = gsap.timeline();

function airplanemove(){
    const tl =gsap.timeline(); 
    tl.to("#Airplane", {duration:1, scale:3, x:"-=600"}); 
    return tl; 
}   

mainTL.add(airplanemove()); 



// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})