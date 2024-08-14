import React, { useRef } from "react";
import LightGallery from "lightgallery/react";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-pager.css";

import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoPlay from "lightgallery/plugins/autoplay";
import lgPager from "lightgallery/plugins/pager";
import Image from "next/image";

import galeri1 from "../public/galeri1.jpeg";
import galeri2 from "../public/galeri2.jpeg";
import galeri3 from "../public/galeri3.jpeg";
import galeri4 from "../public/galeri4.jpeg";
import galeri5 from "../public/galeri5.jpeg";
import gambar1 from "../public/gambar1.jpg";
import galeri6 from "../public/galeri6.jpeg";
import galeri7 from "../public/galeri7.jpeg";
import galeri8 from "../public/Page8c.png";
import galeri9 from "../public/Page2b.png";

import { delay, motion, useInView } from "framer-motion";
import { Alex_Brush, Whisper, Yesteryear } from "@next/font/google";
import { AspectRatio } from "./ui/aspect-ratio";

const alex_brush = Alex_Brush({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});
const GaleryFoto = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "100px -50px 0px" });

    const show = {
        opacity: 100,
        transition: {
            duration: 1,
            staggerChildren: 1,
        },
    };
    const hide = {
        opacity: 0,
    };

    const animatedContainer = {
        initial: { opacity: 50 },
        show: {
            opacity: 100,
            transition: {
                duration: 1,
                staggerChildren: 0.5,
            },
        },
    };

    const animatedChild = {
        initial: { scale: 0, opacity: 0 },
        show: {
            opacity: 100,
            scale: 1,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div ref={ref} animate={isInView ? show : hide} className="bg-gray-200 h-dvh relative z-0">
            <Image src={galeri8} alt="wayang" className="absolute z-0 bottom-0 right-0" />
            <Image src={galeri9} alt="wayang" className="absolute z-0 bottom-0 right-0 translate-x-1/2 w-1/2" />
            <motion.div
                initial="initial"
                animate={isInView ? "show" : "initial"}
                variants={animatedContainer}
                className="flex flex-col text-sm lg:text-base">
                <motion.div variants={animatedChild} className={`${alex_brush.className} text-5xl mt-6 mb-3 text-start w-full px-5`}>
                    Galery Foto
                </motion.div>
                <motion.div variants={animatedChild} className="w-3/4 font-light mb-3 text-start px-5">
                    Kami bersyukur, dipertemukan Allah diwaktu terbaik, kini kami menanti hari istimewa kami.
                </motion.div>
                <motion.div className="p-5">
                    <LightGallery
                        speed={500}
                        plugins={[lgZoom, lgThumbnail, lgAutoPlay, lgPager]}
                        elementClassNames="grid grid-cols-3 gap-x-4 gap-y-6"
                        mode="lg-fade">
                        <motion.a variants={animatedChild} href={"galeri1.jpeg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={galeri1} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                        <motion.a variants={animatedChild} href={"galeri3.jpeg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={galeri3} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                        <motion.a variants={animatedChild} href={"galeri2.jpeg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={galeri2} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                        <motion.a variants={animatedChild} href={"galeri4.jpeg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={galeri4} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                        <motion.a variants={animatedChild} href={"galeri5.jpeg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={galeri5} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                        <motion.a variants={animatedChild} href={"galeri6.jpeg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={galeri6} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                        <motion.a variants={animatedChild} href={"galeri7.jpeg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={galeri7} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                        <motion.a variants={animatedChild} href={"gambar1.jpg"}>
                            <AspectRatio ratio={1 / 1} className="rounded-md bg-muted overflow-hidden">
                                <Image alt="foto praweding" src={gambar1} style={{ objectFit: "cover", objectPosition: "bottom" }} fill />
                            </AspectRatio>
                        </motion.a>
                    </LightGallery>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default GaleryFoto;
