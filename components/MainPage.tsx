import React from "react";
import page1a from "../public/Page1a.png";
import page1b from "../public/Page1b.png";
import page6a from "../public/Page6a.png";
import galeri12 from "../public/galeri12.jpeg";
import Image from "next/image";
import { delay, motion } from "framer-motion";
import { AspectRatio } from "./ui/aspect-ratio";
import { Charmonman, Cinzel, Rouge_Script } from "@next/font/google";

const charmonman = Charmonman({
    subsets: ["latin"],
    weight: ["400", "700"], // Anda bisa menyesuaikan sesuai kebutuhan
});
const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const MainPage = () => {
    const variasi = {
        initial: { opacity: 50 },
        show: {
            opacity: 100,
            transition: {
                delay: 1,
                duration: 1,
                staggerChildren: 1,
            },
        },
    };

    const childVariation = {
        initial: { scale: 0, opacity: 0 },
        show: {
            scale: 1,
            opacity: 100,
            transition: {
                //                 delay: 2,
                duration: 2,
            },
        },
    };
    return (
        <motion.div variants={variasi} animate="show" initial="initial" className="bg-gray-200 h-dvh relative overflow-hidden">
            <Image src={page1a} alt="img1" className="absolute w-full z-10 top-0 left-0" />
            <Image src={page6a} alt="img1" className="absolute w-full right-0 bottom-0 opacity-20" />
            <Image src={page1b} alt="img1" className="absolute w-full z-[12] -bottom-12 left-0 opacity-80" />
            <motion.div variants={variasi} className="flex flex-col relative z-20 items-center justify-center gap-6 h-full" id="content">
                <motion.div variants={childVariation} className="w-1/3">
                    <AspectRatio ratio={4 / 6} className="rounded-full border-2 border-orange-900 bg-muted overflow-hidden mx-auto">
                        <Image src={galeri12} alt="img" style={{ objectFit: "fill", objectPosition: "bottom" }} fill />
                    </AspectRatio>
                </motion.div>
                <motion.div variants={childVariation} className="flex-col flex items-center justify-center">
                    <div className={`${cinzel.className} font-semibold mb-3`}>THE WEDDING OF</div>
                    <div className={`text-4xl font-bold ${charmonman.className} mb-3`}>Sherly & Dany</div>
                    <div className={`${cinzel.className} font-semibold mb-3`}>28 . 08 . 24</div>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default MainPage;
