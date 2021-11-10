import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin);
gsap.set("#Circle",{y:"+=15", transformOrigin:"center"});
gsap.set("#Louvre", {y:"-30", transformOrigin:"bottom"}); 
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

function landmarks(){
    const tl =gsap.timeline(); 
    tl.to ("#Louvre", {duration:4, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.3,0.8]}}, "same")
    tl.to ("#Great-Wall", {autoAlpha:1, duration:4, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.4,0.7]}})
    tl.to ("#Sydney-Opera-House", {autoAlpha:1, duration:4, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.3,0.7]}}); 
}

function heroAnimation(){
    const tl =gsap.timeline();
    const heroHeight = document.querySelector("#hero"); 
    tl.to ("#hero", {duration:5, alpha:0, y:heroHeight.clientHeight}); 
}


landmarks();
clouds();
heroAnimation();
mainTL.add(TL()); 

GSDevTools.create();
MotionPathPlugin.create();


// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})