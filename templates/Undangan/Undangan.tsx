import React, { useEffect, useState } from "react";
import page1a from "../../public/Page1a.png";
import page1b from "../../public/Page1b.png";
import page1c from "../../public/Page1c.png";
import galeri12 from "../../public/galeri12.jpeg";
import Image from "next/image";
import { Charmonman, Cinzel, Rouge_Script, Yesteryear } from "@next/font/google";
import FirstPage from "@/components/FirstPage";

import { easeIn, motion } from "framer-motion";
import SecondPage from "@/components/SecondPage";
import SaveDate from "@/components/SaveDate";
import GaleryFoto from "@/components/GaleryFoto";
import WeddingGift from "@/components/WeddingGift";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import GaleryFotos from "@/components/GaleryFotos";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import MainPage from "@/components/MainPage";
import LastPage from "@/components/LastPage";
import { PauseCircle, PlayCircle } from "lucide-react";

const charmonman = Charmonman({
    subsets: ["latin"],
    weight: ["400", "700"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const cinzel = Cinzel({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const Undangan = () => {
    const [isCoverOpen, setIsCoverOpen] = useState(false);

    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        const newAudio = new Audio("/lagu.mp3");

        newAudio.preload = "auto";
        newAudio.onloadeddata = () => {
            setAudio(newAudio);
        };
        //         console.log("audio is playing");
        return () => {
            if (audio) {
                audio.pause();
            }
        };
    }, []);

    useEffect(() => {
        //         console.log(audio);

        if (audio) {
            if (isPlaying) {
                audio.play().catch((error) => {
                    console.error("Autoplay prevented:", error);
                });
            } else {
                audio.pause();
            }
        }
    }, [audio, isPlaying]);

    const openCover = (e: any) => {
        setIsCoverOpen(true);
        setIsPlaying(true);
    };

    const toogler = (e: any) => {
        setIsPlaying(!isPlaying);
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

    const router = useRouter();
    const toParam = router.query?.to;

    return (
        <div className="max-w-md mx-auto overflow-hidden font-sans relative">
            <motion.div
                animate={isCoverOpen ? coverIsOpen : coverIsClosed}
                className="bg-stone-200 p-0 h-dvh relative z-0 overflow-hidden ">
                <Image src={page1a} alt="image1" className="absolute top-0 left-0 w-full h-auto z-10" />

                <Image src={page1b} alt="image1" className="absolute bottom-0 left-0 w-full h-auto z-10" />
                <div className="flex-col flex h-full relative z-20">
                    <div className="flex-[2] flex items-end justify-center">
                        <h1 className={`${charmonman.className} text-5xl font-semibold`}>Sherly & Dany</h1>
                    </div>
                    <div className="flex-[5] flex items-center">
                        <div className={`${cinzel.className} flex-1 text-center -translate-y-1/2`}>
                            <div className="font-light">Dear</div>
                            <div className="font-bold text-lg mb-3 font-sans">{toParam || "nama"}</div>
                            <Button onClick={openCover} className="bg-orange-800" size={"sm"}>
                                <EnvelopeOpenIcon className="mr-1" />
                                Buka Undangan
                            </Button>
                        </div>
                        <div className="flex-1">
                            <Image src={page1c} alt="image1" className="absolute bottom-24 right-0 w-auto h-1/2 z-[9]" />
                        </div>
                    </div>
                </div>
            </motion.div>

            {isCoverOpen && (
                <>
                    <MainPage />
                    <FirstPage />
                    <SecondPage />
                    <SaveDate />
                    <GaleryFoto />
                    <GaleryFotos />
                    <WeddingGift />
                    <LastPage />
                </>
            )}
            <Button className="fixed bottom-10 z-50 p-0 animate-bounce" size="icon" onClick={toogler}>
                {isPlaying ? <PauseCircle /> : <PlayCircle />}
            </Button>
        </div>
    );
};

export default Undangan;
