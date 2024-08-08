import React from "react";
import page2c from "../public/Page2c.png";
import page2a from "../public/Page2a.png";
import page2b from "../public/Page2b.png";
import Image from "next/image";
import { delay, motion } from "framer-motion";

const FirstPage = () => {
    const variasi = {
        initial: { opacity: 0 },
        show: {
            opacity: 100,
            transition: {
                delay: 1.5,
                duration: 1,
                staggerChildren: 1,
            },
        },
    };

    const childVariation = {
        initial: { y: -100, opacity: 0 },
        show: {
            y: 0,
            opacity: 100,
            transition: {
                //                 delay: 2,
                duration: 1,
            },
        },
    };
    return (
        <motion.div variants={variasi} animate="show" initial="initial" className="bg-gray-200 h-screen relative">
            <motion.div variants={childVariation} className="py-6">
                <Image src={page2a} alt="img1" className="w-1/6 mx-auto" />
            </motion.div>
            <motion.div variants={childVariation} className="w-2/3 mx-auto text-center font-semibold text-xs lg:text-sm relative z-10">
                Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan pasangan-pasangan untukmu dari (jenis) dirimu sendiri agar
                kamu merasa tenteram kepadanya. Dia menjadikan di antaramu rasa cinta dan kasih sayang. Sesungguhnya pada yang demikian itu
                benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
            </motion.div>
            <motion.div variants={childVariation} className="text-center font-bold mt-5">
                Ar-Rum · Ayat 21
            </motion.div>
            <div className="py-6">
                <Image src={page2b} alt="img1" className="absolute bottom-0 -translate-y-1/2 w-1/3 left-1/2 -translate-x-1/2 z-0" />
            </div>
            <Image src={page2c} alt="img1" className="absolute w-full z-[12] bottom-0 left-0" />
        </motion.div>
    );
};

export default FirstPage;
