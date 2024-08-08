import React, { useEffect, useRef, useState } from "react";
import page1a from "../../public/Page1a.png";
import page1b from "../../public/Page1b.png";
import page1c from "../../public/Page1c.png";
import Image from "next/image";
import { Yesteryear } from "@next/font/google";
import FirstPage from "@/components/FirstPage";

import { easeIn, motion } from "framer-motion";
import SecondPage from "@/components/SecondPage";
import SaveDate from "@/components/SaveDate";
import GaleryFoto from "@/components/GaleryFoto";
import WeddingGift from "@/components/WeddingGift";

const yesteryear = Yesteryear({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const Undangan = () => {
    const [isCoverOpen, setIsCoverOpen] = useState(false);
    const togleCover = (e: any) => {
        setIsCoverOpen(!isCoverOpen);
    };

    const coverIsClosed = {
        opacity: 100,
    };

    const coverIsOpen = {
        opacity: 0,
        transition: {
            duration: 1,
            easeIn,
        },
        transitionEnd: { display: "none" },
    };

    return (
        <div className="max-w-xl mx-auto overflow-hidden">
            <motion.div animate={isCoverOpen ? coverIsOpen : coverIsClosed} className="bg-gray-200 p-0 h-dvh relative z-0 overflow-hidden">
                <Image src={page1a} alt="img1" className="absolute w-full z-10 top-0 left-0" />
                <Image src={page1c} alt="img1" className="absolute w-1/3 z-[11] bottom-0 -translate-y-1/3 right-0" />
                <Image src={page1b} alt="img1" className="absolute w-full z-[12] bottom-0 left-0" />
                <div className="absolute w-full z-20 left-1/2 -translate-x-1/2 top-1/4" id="content">
                    <div className="flex-col flex items-center justify-center">
                        <div className="font-semibold mb-3">THE WEDDING OF</div>
                        <div className={`text-7xl font-bold ${yesteryear.className}`}>Sherly & Dany</div>
                        <div className="font-semibold">28 . 08 . 24</div>
                    </div>
                </div>
                <div className="absolute w-full z-20 left-1/2 -translate-x-1/2 bottom-36" id="content">
                    <div className="flex-col flex items-center justify-center mt-24 bg-white/50 rounded-lg w-1/2 mx-auto shadow-lg shadow-black p-4">
                        <div>Kepada</div>
                        <div className="text-2xl font-semibold">Nama Tamu Undangan</div>
                    </div>
                </div>

                <div onClick={() => setIsCoverOpen(true)} className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 w-1/6 text-center">
                    <div className="font-semibold text-white px-2 py-1 bg-black rounded-full text-sm">
                        <span className="animate-pulse">OPEN</span>
                    </div>
                </div>
            </motion.div>
            {isCoverOpen && (
                <>
                    <FirstPage />
                    <SecondPage />
                    <SaveDate />
                    <GaleryFoto />
                    <WeddingGift />
                </>
            )}
        </div>
    );
};

export default Undangan;
