import React, { useRef } from "react";
import page2c from "../public/Page2c.png";
import page2a from "../public/Page2a.png";
import page2b from "../public/Page2b.png";
import Image from "next/image";
import { delay, motion, useInView } from "framer-motion";
import { Cinzel } from "@next/font/google";

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400", "600"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const FirstPage = () => {
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

    const animatedContainer = {
        initial: { opacity: 0 },
        show: {
            opacity: 10,
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
        <motion.div ref={ref} animate={isInView ? show : hide} className="bg-gray-200 h-dvh relative">
            <motion.div initial="initial" animate={isInView ? "show" : "initial"} variants={animatedContainer}>
                <motion.div variants={animatedChild} className="py-6">
                    <Image src={page2a} alt="img1" className="w-1/6 mx-auto" />
                </motion.div>
                <motion.div variants={animatedChild} className="w-2/3 mx-auto text-center font-semibold text-xs lg:text-sm relative z-10">
                    Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri
                    agar kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang
                    demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
                </motion.div>
                <motion.div variants={animatedChild} className={`text-center font-bold mt-5 ${cinzel.className}`}>
                    “(QS. Ar-rum : 21)”
                </motion.div>
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

export default FirstPage;
