import React, { useEffect, useRef, useState } from "react";
import page1a from "../../public/Page1a.png";
import page1b from "../../public/Page1b.png";
import page6a from "../../public/Page6a.png";
import galeri12 from "../../public/galeri12.jpeg";
import Image from "next/image";
import { Rouge_Script, Yesteryear } from "@next/font/google";
import FirstPage from "@/components/FirstPage";

import { easeIn, motion } from "framer-motion";
import SecondPage from "@/components/SecondPage";
import SaveDate from "@/components/SaveDate";
import GaleryFoto from "@/components/GaleryFoto";
import WeddingGift from "@/components/WeddingGift";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GaleryFotos from "@/components/GaleryFotos";

const yesteryear = Rouge_Script({
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
            duration: 0.5,
            easeIn,
        },
        transitionEnd: { display: "none" },
    };

    return (
        <div className="max-w-md mx-auto overflow-hidden font-sans">
            <motion.div animate={isCoverOpen ? coverIsOpen : coverIsClosed} className="bg-stone-200 p-0 h-dvh relative z-0 overflow-hidden">
                <Image src={page1a} alt="img1" className="absolute w-full z-10 top-0 left-0" />
                <Image src={page6a} alt="img1" className="absolute w-full right-0 bottom-0 opacity-20" />
                <Image src={page1b} alt="img1" className="absolute w-full z-[12] bottom-0 left-0 opacity-80" />
                <div className="flex flex-col relative z-20 items-center justify-center gap-12 h-full" id="content">
                    <div className="w-1/2">
                        <AspectRatio ratio={4 / 6} className="rounded-full border-2 border-orange-900 bg-muted overflow-hidden mx-auto">
                            <Image src={galeri12} alt="img" style={{ objectFit: "cover", objectPosition: "bottom" }} />
                        </AspectRatio>
                    </div>
                    <div className="flex-col flex items-center justify-center">
                        <div className="font-semibold mb-3">THE WEDDING OF</div>
                        <div className={`text-6xl font-bold ${yesteryear.className} mb-3`}>Sherly & Dany</div>
                        <div className="font-semibold">28 . 08 . 24</div>
                    </div>
                    <div onClick={() => setIsCoverOpen(true)}>
                        <div className="font-semibold text-white px-4 py-1.5 bg-orange-800 rounded-lg text-sm border border-yellow-900">
                            <span>Buka Undangan</span>
                        </div>
                    </div>
                </div>
            </motion.div>
            {isCoverOpen && (
                <>
                    <FirstPage />
                    <SecondPage />
                    <SaveDate />
                    <GaleryFoto />
                    <GaleryFotos />
                    <WeddingGift />
                </>
            )}
        </div>
    );
};

export default Undangan;
