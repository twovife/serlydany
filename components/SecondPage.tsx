import React, { useRef } from "react";
import page3a from "../public/Page3a.png";
import page3b from "../public/Page3b.png";
import page3d from "../public/Page3d.png";
import page3c from "../public/Page3c.png";
import Image from "next/image";
import { delay, motion, useInView } from "framer-motion";
import { Yesteryear } from "@next/font/google";

const yesteryear = Yesteryear({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const SecondPage = () => {
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
        initial: { y: 100 },
        show: {
            y: 0,
            transition: {
                duration: 1,
                staggerChildren: 0.2,
            },
        },
    };

    const animatedChild = {
        initial: { y: 50, opacity: 0 },
        show: {
            opacity: 100,
            y: 0,
            transition: {
                duration: 0.1,
            },
        },
    };

    return (
        <motion.div ref={ref} animate={isInView ? show : hide} className="bg-gray-200 h-screen relative z-0">
            <Image src={page3d} alt="wayang" className="absolute z-10 bottom-0 left-0 w-1/4" />
            <Image src={page3c} alt="wayang" className="absolute z-10 bottom-0 right-0 w-1/4" />
            <motion.div
                initial="initial"
                animate={isInView ? "show" : "initial"}
                variants={animatedContainer}
                className="flex flex-col items-center justify-center h-full text-center text-sm lg:text-base">
                <motion.div variants={animatedChild} className={`${yesteryear.className} text-5xl mt-6 mb-3`}>
                    Bride & groom
                </motion.div>
                <motion.div variants={animatedChild} className="w-3/4 font-light mb-3">
                    Maha suci Allah yang telah menciptakan mahluk-Nya berpasang pasangan, Ya Allah rahmatilah <br /> pernikahan kami:
                </motion.div>
                <motion.div variants={animatedChild} className="w-1/2">
                    <Image src={page3a} alt="foto_serli" />
                </motion.div>
                <motion.div variants={animatedChild} className={`${yesteryear.className} text-3xl mt-2`}>
                    Sherly Pungki Puspitasari
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
                <motion.div variants={animatedChild} className={`${yesteryear.className} text-3xl mt-2`}>
                    Dany Rizky Syaifuloh
                </motion.div>
                <motion.div variants={animatedChild}>Putra Kedua</motion.div>
                <motion.div variants={animatedChild}>Bpk. Syaifudin & Ibu Zumrotus Solekah (Almh)</motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SecondPage;
