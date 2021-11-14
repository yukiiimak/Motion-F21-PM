import { gsap } from "gsap";
import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(GSDevTools, MotionPathPlugin);
gsap.set("#Circle",{y:"+=15", transformOrigin:"center"});
gsap.set("#Louvre", {y:"-=30", transformOrigin:"center bottom", rotate:80});
gsap.set("#Great-Wall", {y:"-=20", x:"-=3", transformOrigin:"center bottom", rotate:80});  
gsap.set("#Sydney-Opera-House", {y:"-=16", transformOrigin:"center bottom", rotate:80}); 

gsap.set("#preloader",{transformOrigin:"center bottom"});

const mainTL = gsap.timeline();

function TL(){
    const tl =gsap.timeline(); 
    tl.to("#Airplane", {duration:3.2, x:"+=50", y:"-=10", ease:"none"}, "same"); 
    tl.to("#Airplane", {duration:3.2, x:"+=50", y:"+=30", ease:"none"});
    tl.to("#Airplane", {duration:3.2, x:"+=50", y:"-=20", ease:"none"});
    tl.to("#Airplane", {duration:3.2, x:"+=50", y:"+=20", ease:"none"});
    tl.to("#Airplane", {duration:3.2, x:"+=50", ease:"none"});
    tl.to("#Airplane", {duration:3.2, x:"+=83", y:"-=35", ease:"none"});
    return tl; 
}   

function clouds(){
    const tl =gsap.timeline({repeat:-1}); 
    tl.to("#Cloud-1", {duration:14, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-1-2", {duration:14, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-2", {duration:14, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-2-2", {duration:14, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-3", {duration:14, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-3-2", {duration:14, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-4", {duration:14, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-4-2", {duration:14, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-5", {duration:14, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-5-2", {duration:14, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-6", {duration:14, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-6-2", {duration:14, x:"+=585", ease:"none"}, "same");
}

function landmarks(){
    const tl =gsap.timeline(); 
    tl.to ("#Louvre", {duration:7, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.6,0.7]}, rotate:-80}, "turn")
    tl.from ("#Left-Lines", {duration:2, autoAlpha:0}, "turn")
    tl.from ("#Right-Lines", {duration:2, autoAlpha:0, delay:1}, "turn");
    tl.to ("#Great-Wall", {duration:7, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.6,0.7]}, rotate:-80}, "turn-2")
    tl.from ("#Left-Base", {duration:0.1, autoAlpha:0}, "turn-2")
    tl.from ("#Left-Middle-Bottom", {duration:0.1, autoAlpha:0, delay:1}, "turn-2")
    tl.from ("#Left-Middle-Top", {duration:0.1, autoAlpha:0, delay:1.2}, "turn-2")
    tl.from ("#Left-Top", {duration:0.1, autoAlpha:0, delay:1.4}, "turn-2")
    tl.from ("#Right-Base", {duration:0.1, autoAlpha:0, delay:2.2}, "turn-2")
    tl.from ("#Right-Middle", {duration:0.1, autoAlpha:0, delay:2.4}, "turn-2")
    tl.from ("#Right-Top", {duration:0.1, autoAlpha:0, delay:2.6}, "turn-2");
    tl.to ("#Sydney-Opera-House", {duration:7, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.6,0.7]}, rotate:-80}, "turn-3")
    tl.from ("#Shell-1", {duration:0.3, autoAlpha:0}, "turn-3")
    tl.from ("#Shell-2", {duration:0.1, autoAlpha:0, delay:1}, "turn-3")
    tl.from ("#Shell-3", {duration:0.1, autoAlpha:0, delay:1.2}, "turn-3")
    tl.from ("#Shell-4", {duration:0.1, autoAlpha:0, delay:1.4}, "turn-3")
    tl.from ("#Shell-5", {duration:0.1, autoAlpha:0, delay:1.6}, "turn-3")
    tl.from ("#Shell-6", {duration:0.1, autoAlpha:0, delay:1.8}, "turn-3");
    
    // tl.from ("#Sydney-Opera-House", {autoAlpha:0, duration:5, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.3,0.7]}}); 
}

// function heroAnimation(){
//     const tl =gsap.timeline();
//     const heroHeight = document.querySelector("#hero"); 
//     tl.to ("#hero", {duration:5, alpha:0, y:heroHeight.clientHeight}); 
// }


mainTL.add(TL()); 
clouds();
landmarks();
// heroAnimation();

GSDevTools.create();
MotionPathPlugin.create();


// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})