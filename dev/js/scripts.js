import { gsap } from "gsap";

const mainTL = gsap.timeline();

mainTL.from("#hero article",{duration:2,alpha:0, scale:2});
