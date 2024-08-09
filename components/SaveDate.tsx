import React, { useRef } from "react";
import page4a from "../public/Page4a.png";
import page8c from "../public/Page8c.png";
import page6a from "../public/Page6a.png";
import page3c from "../public/Page3c.png";
import Image from "next/image";
import { delay, motion, useInView } from "framer-motion";
import { Alex_Brush, Aref_Ruqaa_Ink, Charmonman, Cinzel, Whisper, Yesteryear } from "@next/font/google";
import CountdownTimer from "./CountdownTimer ";
import { Button } from "./ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { CalendarCheck, MapPinPlus } from "lucide-react";
import Link from "next/link";

const ruqaa = Aref_Ruqaa_Ink({
    subsets: ["latin"],
    weight: ["700"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const alex_brush = Alex_Brush({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const SaveDate = () => {
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
        <motion.div animate={isInView ? show : hide} ref={ref} className="bg-gray-200 relative z-0 py-12">
            <Image src={page8c} alt="wayang" className="absolute z-10 bottom-0 left-0" />
            <Image src={page6a} alt="wayang" className="absolute z-10 top-0 opacity-50" />
            <motion.div
                initial="initial"
                animate={isInView ? "show" : "initial"}
                variants={animatedContainer}
                className="flex flex-col items-center justify-center h-full text-center text-sm lg:text-base relative z-20">
                <motion.div variants={animatedChild} className={`${alex_brush.className} text-5xl mb-3`}>
                    Save The Date
                </motion.div>
                <motion.div variants={animatedChild} className="w-3/4 font-light mb-3">
                    Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara
                    pernikahan kami :
                </motion.div>
                <motion.div variants={animatedChild} className="w-1/2 mb-3">
                    <Image src={page4a} alt="foto_serli" className="mx-auto w-1/3" />
                </motion.div>
                <motion.div variants={animatedChild} className={`${ruqaa.className} text-3xl font-semibold mb-3`}>
                    Akad Nikah
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold">
                    Rabu, 28 Agustus 2024
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold">
                    Pukul 07:00 wib
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold mb-10">
                    Tempat : Masjid Ibrahim ( Pagak )
                </motion.div>
                <motion.div variants={animatedChild} className={`${ruqaa.className} text-3xl font-semibold mb-3`}>
                    Resepsi
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold">
                    Rabu, 28 Agustus 2024
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold">
                    Pukul 14:00 wib - selesai
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold mb-3">
                    Tempat : Dsn. Pagak RT/RW : 02/01 <br /> Ds. Bangle Kec. Ngadiluwih <br /> Kab. Kediri
                </motion.div>
                <motion.div variants={animatedChild} className="w-1/2 mb-3">
                    <Image src={page4a} alt="foto_serli" className="mx-auto w-1/3" />
                </motion.div>
                <motion.div variants={animatedChild}>
                    <CountdownTimer />
                </motion.div>
                <motion.div variants={animatedChild}>
                    <Button className="rounded-xl" asChild>
                        <a target="_blank" href="https://maps.app.goo.gl/GgyEeoWkujHGrPKp8">
                            <MapPinPlus className="mr-2 h-4 w-4" /> Lokasi Acara
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SaveDate;
