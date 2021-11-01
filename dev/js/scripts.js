import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin);

const mainTL = gsap.timeline();

function TL(){
    const tl =gsap.timeline(); 
    tl.to("#Airplane", {duration:1.5, x:"+=50", y:"-=10", ease:"none"}, "same"); 
    tl.to("#Airplane", {duration:1.5, x:"+=50", y:"+=30", ease:"none"});
    tl.to("#Airplane", {duration:1.5, x:"+=50", y:"-=20", ease:"none"});
    tl.to("#Airplane", {duration:1.5, x:"+=50", y:"+=20", ease:"none"});
    tl.to("#Airplane", {duration:1.5, x:"+=50", ease:"none"});
    tl.to("#Airplane", {duration:1.5, x:"+=83", y:"-=35", ease:"none"});

    tl.to("#Cloud-1", {duration:5, x:"-=90"}, "same");
    tl.to("#Cloud-2", {duration:7, x:"-=145"}, "same");
    tl.to("#Cloud-3", {duration:9, x:"-=160"}, "same");
    tl.to("#Cloud-4", {duration:11, x:"-=220"}, "same");
    tl.to("#Cloud-5", {duration:13, x:"-=280"}, "same");
    tl.to("#Cloud-6", {duration:15, x:"-=300"}, "same");

    tl.from("Cloud-1-2", {duration:2, x:"-100"})
    return tl; 
}   


mainTL.add(TL()); 

GSDevTools.create();



// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})