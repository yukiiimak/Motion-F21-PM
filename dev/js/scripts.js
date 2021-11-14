import { gsap } from "gsap";
// import { GSDevTools } from "gsap/GSDevTools";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";

gsap.registerPlugin(MotionPathPlugin);
gsap.set("#Circle",{y:"+=15", transformOrigin:"center"});
gsap.set("#Louvre", {y:"-=30", transformOrigin:"center bottom", rotate:80});
gsap.set("#Great-Wall", {y:"-=20", x:"-=3", transformOrigin:"center bottom", rotate:121});  
gsap.set("#Sydney-Opera-House", {y:"-=16", transformOrigin:"center bottom", rotate:152}); 

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
    tl.to("#Cloud-1", {duration:16, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-1-2", {duration:16, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-2", {duration:16, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-2-2", {duration:16, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-3", {duration:16, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-3-2", {duration:16, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-4", {duration:16, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-4-2", {duration:16, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-5", {duration:16, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-5-2", {duration:16, x:"+=585", ease:"none"}, "same");
    tl.to("#Cloud-6", {duration:16, x:"-=585", ease:"none"}, "same")
    .from("#Cloud-6-2", {duration:16, x:"+=585", ease:"none"}, "same");
}

function landmarks(){
    const tl =gsap.timeline(); 
    tl.to ("#Louvre", {duration:7, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.6,0.7]}, rotate:-80}, "turn")
    tl.from ("#Left-Lines", {duration:3, autoAlpha:0}, "turn")
    tl.from ("#Right-Lines", {duration:3, autoAlpha:0, delay:1}, "turn");
    tl.to ("#Great-Wall", {duration:7, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.6,0.7]}, rotate:-121}, "turn-2")
    tl.from ("#Left-Base", {duration:1.2, autoAlpha:0}, "turn-2")
    tl.from ("#Left-Middle-Bottom", {duration:0.1, autoAlpha:0, delay:1}, "turn-2")
    tl.from ("#Left-Middle-Top", {duration:0.1, autoAlpha:0, delay:1.2}, "turn-2")
    tl.from ("#Left-Top", {duration:0.1, autoAlpha:0, delay:1.4}, "turn-2")
    tl.from ("#Right-Base", {duration:0.1, autoAlpha:0, delay:2.2}, "turn-2")
    tl.from ("#Right-Middle", {duration:0.1, autoAlpha:0, delay:2.4}, "turn-2")
    tl.from ("#Right-Top", {duration:0.1, autoAlpha:0, delay:2.6}, "turn-2");
    tl.to ("#Sydney-Opera-House", {duration:7, motionPath:{path:"#Circle", align:"#Circle", alignOrigin:[0.6,0.7]}, rotate:-152}, "turn-3")
    tl.from ("#Shell-1", {duration:2, autoAlpha:0}, "turn-3")
    tl.from ("#Shell-2", {duration:0.2, autoAlpha:0, delay:1}, "turn-3")
    tl.from ("#Shell-3", {duration:0.2, autoAlpha:0, delay:1.2}, "turn-3")
    tl.from ("#Shell-4", {duration:0.2, autoAlpha:0, delay:1.4}, "turn-3")
    tl.from ("#Shell-5", {duration:0.2, autoAlpha:0, delay:1.6}, "turn-3")
    tl.from ("#Shell-6", {duration:0.2, autoAlpha:0, delay:1.8}, "turn-3");
    tl.to ("#preloader", {duration:2, alpha:0, onComplete:backToTop}); 
}

function backToTop(){
    window.scrollTo(0,0)
    gsap.set("#preloader", {display:"none"})
}

function heroAnimation(){
    const tl = gsap.timeline();
    tl.from("#hero article", {duration:2, alpha:0, scale:2})
    .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
    .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
    .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})
    return tl; 
}


mainTL.add(TL())
.add(clouds())
.add(landmarks())
.add(heroAnimation());

// GSDevTools.create();
MotionPathPlugin.create();