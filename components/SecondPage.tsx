import React, { useRef } from "react";
import page3a from "../public/Page3a.png";
import page3b from "../public/Page3b.png";
import page3d from "../public/Page3d.png";
import page3c from "../public/Page3c.png";
import Image from "next/image";
import { delay, easeIn, easeOut, motion, useInView } from "framer-motion";
import { Alex_Brush, Charmonman, Cinzel, Whisper, Yesteryear } from "@next/font/google";

const alex_brush = Alex_Brush({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const charmonman = Charmonman({
    subsets: ["latin"],
    weight: ["400", "700"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const SecondPage = () => {
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
        <motion.div ref={ref} animate={isInView ? show : hide} className="bg-gray-200 h-dvh relative z-0">
            <motion.div animate={isInView ? show : opacitynol}>
                <Image src={page3d} alt="wayang kiri" className="absolute z-10 bottom-0 left-0 w-1/4" />
                <Image src={page3c} alt="wayang kanan" className="absolute z-10 bottom-0 right-0 w-1/4" />
            </motion.div>
            <motion.div
                initial="initial"
                animate={isInView ? "show" : "initial"}
                variants={animatedContainer}
                className="flex flex-col items-center justify-center h-full text-center text-sm lg:text-base">
                <motion.div variants={animatedChild} className={`${alex_brush.className} text-5xl mt-6 mb-3`}>
                    Bride & groom
                </motion.div>
                <motion.div variants={animatedChild} className="w-3/4 font-light mb-3">
                    Maha suci Allah yang telah menciptakan mahluk-Nya berpasang pasangan, Ya Allah rahmatilah <br /> pernikahan kami:
                </motion.div>
                <motion.div variants={animatedChild} className="w-1/2">
                    <Image src={page3a} alt="foto_serli" />
                </motion.div>
                <motion.div variants={animatedChild} className={`${charmonman.className} text-2xl mt-2`}>
                    Sherly Pungki Purita
                </motion.div>
                <motion.div variants={animatedChild} className="font-light">
                    Putri Pertama
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold mb-3">
                    Bpk. Sahrul Mukarom & Ibu Sudartin
                </motion.div>
                <motion.div variants={animatedChild} className="font-light mb-3">
                    dengan
                </motion.div>
                <motion.div variants={animatedChild} className="w-1/2">
                    <Image src={page3b} alt="foto_serli" />
                </motion.div>
                <motion.div variants={animatedChild} className={`${charmonman.className} text-2xl mt-2`}>
                    Dany Rizky Syaifuloh
                </motion.div>
                <motion.div variants={animatedChild}>Putra Kedua</motion.div>
                <motion.div variants={animatedChild}>Bpk. Syaifudin & Ibu Zumrotus Solekah (Almh)</motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SecondPage;
