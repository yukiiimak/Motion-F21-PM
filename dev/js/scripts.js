import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin);

const mainTL = gsap.timeline();

function TL(){
    const tl =gsap.timeline(); 
    tl.to("#Airplane", {duration:2.5, x:"+=50", y:"-=10", ease:"none"}, "same"); 
    tl.to("#Airplane", {duration:2.5, x:"+=50", y:"+=30", ease:"none"});
    tl.to("#Airplane", {duration:2.5, x:"+=50", y:"-=20", ease:"none"});
    tl.to("#Airplane", {duration:2.5, x:"+=50", y:"+=20", ease:"none"});
    tl.to("#Airplane", {duration:2.5, x:"+=50", ease:"none"});
    tl.to("#Airplane", {duration:2.5, x:"+=83", y:"-=35", ease:"none"});
    return tl; 
}   

function clouds(){
    const tl =gsap.timeline({repeat:-1}); 
    tl.to("#Cloud-1", {duration:10, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-1-2", {duration:10, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-2", {duration:10, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-2-2", {duration:10, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-3", {duration:10, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-3-2", {duration:10, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-4", {duration:10, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-4-2", {duration:10, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-5", {duration:10, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-5-2", {duration:10, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-6", {duration:10, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-6-2", {duration:10, x:"+=585", ease:"none"}, "same");
}

clouds();


mainTL.add(TL()); 

GSDevTools.create();



// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})