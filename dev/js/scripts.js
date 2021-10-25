import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.to("Cloud 1", {duration: 1, scale:3, y:"-=600"}); 




// mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
//     .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
//     .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%")
//     .from("article div", {duration:1, y:"-=200", alpha:0, rotate:-90})