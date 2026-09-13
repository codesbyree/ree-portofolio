import { gsap } from "gsap";

import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(MotionPathPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, SplitText);

export { gsap, MotionPathPlugin, ScrambleTextPlugin, ScrollTrigger, ScrollSmoother, SplitText };
