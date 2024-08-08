import React, { useRef } from "react";
import page7a from "../public/Page7a.png";
import page7b from "../public/Page7b.png";
import page3d from "../public/Page3d.png";
import page3c from "../public/Page3c.png";
import Image from "next/image";
import { delay, motion, useInView } from "framer-motion";
import { Yesteryear } from "@next/font/google";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

const yesteryear = Yesteryear({
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
        <motion.div ref={ref} animate={isInView ? show : hide} className="bg-gray-200 h-screen relative z-0">
            <Image src={page7a} alt="wayang" className="absolute z-10 bottom-0 left-0 w-1/2" />
            <Image src={page7b} alt="wayang" className="absolute z-10 bottom-0 right-0 w-3/4" />
            <motion.div
                initial="initial"
                animate={isInView ? "show" : "initial"}
                variants={animatedContainer}
                className="flex flex-col text-sm lg:text-base">
                <motion.div variants={animatedChild} className={`${yesteryear.className} text-5xl mt-6 mb-3 text-start w-full px-5`}>
                    Wedding Gift
                </motion.div>
                <motion.div variants={animatedChild} className="w-3/4 font-light mb-3 text-start px-5">
                    Doa restu anda merupakan karunia yang sangat berarti bagi kami, dan jika memberi adalah ungkapan tanda kasih anda,{" "}
                    <br /> Anda dapat memberi kado secara cashless
                </motion.div>
            </motion.div>
            <Dialog>
                <DialogTrigger>
                    <Button className="ml-5">Transfer</Button>
                </DialogTrigger>
                <DialogContent className="w-[90vw] h-[90vh]">
                    <DialogHeader>
                        <DialogTitle>Terimakasih</DialogTitle>
                        <DialogDescription>Nomor Rekening disini</DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </motion.div>
    );
};

export default WeddingGift;
