import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";

gsap.registerPlugin(GSDevTools);

const mainTL = gsap.timeline();

function airplanemove(){
    const tl =gsap.timeline(); 
    tl.to("#Airplane", {duration:2, x:"+=50", y:"-=10"}); 
    tl.to("#Airplane", {duration:2, x:"+=50", y:"+=30"});
    tl.to("#Airplane", {duration:2, x:"+=50", y:"-=20"});
    tl.to("#Airplane", {duration:2, x:"+=50", y:"+=20"});
    tl.to("#Airplane", {duration:2, x:"+=50"});
    tl.to("#Airplane", {duration:2, x:"+=50", y:"-=10"});
    return tl; 
}   

function cloudsmove(){
    const tl =gsap.timeline (); 
    tl.to("Cloud-1", {duration:1, y:"-=100"});
    return tl; 
}

mainTL.add(airplanemove()); 
mainTL.add(cloudsmove());

GSDevTools.create();



// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})