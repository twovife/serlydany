import React, { useRef } from "react";
import page7a from "../public/Page7a.png";
import page7b from "../public/Page7b.png";
import page6a from "../public/Page6a.png";
import page2c from "../public/Page2c.png";
import galeri12 from "../public/galeri12.jpeg";
import page2b from "../public/Page2b.png";
import mandiri from "../public/mandiri.webp";
import Image from "next/image";
import { delay, motion, useInView } from "framer-motion";
import { Alex_Brush, Whisper, Yesteryear } from "@next/font/google";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { GiftIcon } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";

const yesteryear = Alex_Brush({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const WeddingGift = () => {
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
        <>
            <motion.div ref={ref} animate={isInView ? show : hide} className="bg-gray-200 h-dvh relative z-0 overflow-hidden">
                {/* <Image src={page6a} alt="wayang" className="absolute z-10 bottom-0 left-0 opacity-40 h-full object-fill" /> */}
                <Image src={page7b} alt="wayang" className="absolute z-10 -bottom-10 right-0" />
                <Image src={page7a} alt="wayang" className="absolute z-[0] -bottom-10 left-0 h-2/3 w-auto" />
                <motion.div className="p-5 relative z-20">
                    <div className="rounded-lg bg-white/20 p-2 shadow-lg text-center">
                        <motion.div
                            initial="initial"
                            animate={isInView ? "show" : "initial"}
                            variants={animatedContainer}
                            className="flex flex-col text-sm lg:text-base">
                            <motion.div variants={animatedChild} className={`${yesteryear.className} text-5xl mt-6 mb-3 w-full px-5`}>
                                Wedding Gift
                            </motion.div>
                            <motion.div variants={animatedChild} className="w-3/4 font-light mb-3 mx-auto px-5">
                                Doa restu anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih
                                anda, <br /> Anda dapat memberi kado secara cashless
                            </motion.div>
                        </motion.div>
                        <Dialog>
                            <DialogTrigger>
                                <Button className="ml-5">
                                    <GiftIcon className="mr-2" />
                                    Send a Gift
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="w-[90vw] h-[90vh] lg:max-w-sm">
                                <DialogHeader>
                                    <DialogTitle>MANDIRI</DialogTitle>
                                    <DialogDescription>
                                        <div className="flex gap-2 justify-center items-center">
                                            <div className="flex-1">
                                                <Image src={mandiri} alt="logo mandiri" />
                                            </div>
                                            <div className="flex-[3] w-full">
                                                <div>An.SHERLY PUNGKI PURITA</div>
                                                <div>1710006898343</div>
                                            </div>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </motion.div>
            </motion.div>
        </>
    );
};

export default WeddingGift;
