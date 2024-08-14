import React, { useRef } from "react";
import galeri12 from "../public/galeri12.jpeg";
import page2b from "../public/Page2b.png";
import page2c from "../public/Page2c.png";
import Image from "next/image";
import { delay, easeIn, motion, useInView } from "framer-motion";
import { AspectRatio } from "./ui/aspect-ratio";
import { Alex_Brush, Charmonman, Cinzel, Rouge_Script } from "@next/font/google";

const alex_brush = Alex_Brush({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});
const charmonman = Charmonman({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const LastPage = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "400px 0px -50px 0px" });

    const show = {
        opacity: 100,
        transition: {
            duration: 1,
            staggerChildren: 1,
        },
    };
    const hide = {
        opacity: 50,
    };

    const opacitynol = {
        opacity: 0,
    };
    const opacityNolShoww = {
        opacity: 100,
        transition: {
            duration: 1,
            easeIn,
        },
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
            scale: 1,
            opacity: 100,
            transition: {
                duration: 1,
            },
        },
    };

    return (
        <motion.div animate={isInView ? show : hide} ref={ref} className="bg-gray-200 h-dvh relative py-12">
            <motion.div initial="initial" animate={isInView ? "show" : "initial"} variants={animatedContainer}>
                <motion.div className="w-1/3 mx-auto mb-3" variants={animatedChild} ref={ref}>
                    <AspectRatio ratio={4 / 6} className="rounded-full border-2 border-orange-900 bg-muted overflow-hidden mx-auto">
                        <Image src={galeri12} alt="img" style={{ objectFit: "contain", objectPosition: "bottom" }} fill />
                    </AspectRatio>
                </motion.div>
                <motion.div variants={animatedChild} className="w-2/3 mx-auto text-center text-xs lg:text-sm relative z-10">
                    Merupakan suatu kehormatan dan kebahagiaan bagi kami, apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa
                    restu. Atas kehadiran dan doa restunya, kami mengucapkan terima kasih.
                </motion.div>
                <motion.div variants={animatedChild} className="text-center my-6">
                    Kami yang berbahagia,
                </motion.div>
                <div className={`text-4xl font-bold ${charmonman.className} mb-3 text-center relative z-40`}>Sherly & Dany</div>
                <div className="py-6">
                    <Image
                        src={page2b}
                        alt="img1"
                        className="absolute bottom-0 -translate-y-1/2 w-1/3 left-1/2 -translate-x-1/2 z-0 opacity-40"
                    />
                </div>
                <Image src={page2c} alt="img1" className="absolute w-full z-[12] bottom-0 left-0" />
            </motion.div>
        </motion.div>
    );
};

export default LastPage;
