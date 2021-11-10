import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin);
gsap.set("#Circle",{y:"+=10", transformOrigin:"center"});
gsap.set("#Louvre", {y:"-=25", transformOrigin:"bottom"});
gsap.set("#Sydney-Opera-House", {y:"-16", transformOrigin:"bottom"}); 
gsap.set("#Great-Wall", {y:"-=20", x:"-=3", transformOrigin:"bottom"}); 

gsap.set("#preloader",{transformOrigin:"center bottom"});

const mainTL = gsap.timeline();

function TL(){
    const tl =gsap.timeline(); 
    tl.to("#Airplane", {duration:2, x:"+=50", y:"-=10", ease:"none"}, "same"); 
    tl.to("#Airplane", {duration:2, x:"+=50", y:"+=30", ease:"none"});
    tl.to("#Airplane", {duration:2, x:"+=50", y:"-=20", ease:"none"});
    tl.to("#Airplane", {duration:2, x:"+=50", y:"+=20", ease:"none"});
    tl.to("#Airplane", {duration:2, x:"+=50", ease:"none"});
    tl.to("#Airplane", {duration:2, x:"+=83", y:"-=35", ease:"none"});
    return tl; 
}   

function clouds(){
    const tl =gsap.timeline({repeat:-1}); 
    tl.to("#Cloud-1", {duration:8, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-1-2", {duration:8, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-2", {duration:8, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-2-2", {duration:8, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-3", {duration:8, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-3-2", {duration:8, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-4", {duration:8, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-4-2", {duration:8, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-5", {duration:8, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-5-2", {duration:8, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-6", {duration:8, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-6-2", {duration:8, x:"+=585", ease:"none"}, "same");
}

// function landmarks(){
//     const tl =gsap.timeline(); 
//     tl.to ("#Louvre", {duration:10, motionPath:{path:"#Circle"}, rotation:360, ease:"none"}, "same"); 
//     return tl; 
// }


// landmarks();
clouds();
mainTL.add(TL()); 

GSDevTools.create();
MotionPathPlugin.create();


// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})