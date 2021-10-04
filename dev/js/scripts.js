import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#hero article", {duration:2, alpha:0, scale:2})
    .from("h1", {duration:2, x:"+=500", alpha:0}, "-=50%")
    .from("h2", {duration:2, x:"-=500", alpha:0}, "-=50%");