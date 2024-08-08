import React, { useRef } from "react";
import page4a from "../public/Page4a.png";
import page8c from "../public/Page8c.png";
import page6a from "../public/Page6a.png";
import page3c from "../public/Page3c.png";
import Image from "next/image";
import { delay, motion, useInView } from "framer-motion";
import { Yesteryear } from "@next/font/google";
import CountdownTimer from "./CountdownTimer ";
import { Button } from "./ui/button";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
import { CalendarCheck } from "lucide-react";
import Link from "next/link";

const yesteryear = Yesteryear({
    subsets: ["latin"],
    weight: ["400"], // Anda bisa menyesuaikan sesuai kebutuhan
});

const SaveDate = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "0px -50px 0px" });

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
        <motion.div animate={isInView ? show : hide} ref={ref} className="bg-gray-200 h-screen relative z-0">
            <Image src={page8c} alt="wayang" className="absolute z-10 bottom-0 left-0" />
            <Image src={page6a} alt="wayang" className="absolute z-10 top-0 opacity-50" />
            <motion.div
                initial="initial"
                animate={isInView ? "show" : "initial"}
                variants={animatedContainer}
                className="flex flex-col items-center justify-center h-full text-center text-sm lg:text-base relative z-20">
                <motion.div variants={animatedChild} className={`${yesteryear.className} text-5xl mt-6 mb-3`}>
                    Save The Date
                </motion.div>
                <motion.div variants={animatedChild} className="w-3/4 font-light mb-3">
                    Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu/Saudara/i serta Kerabat sekalian untuk menghadiri acara
                    pernikahan kami :
                </motion.div>
                <motion.div variants={animatedChild} className="w-1/2 mb-3">
                    <Image src={page4a} alt="foto_serli" className="mx-auto w-1/3" />
                </motion.div>
                <motion.div variants={animatedChild} className={`text-3xl font-semibold mb-3`}>
                    Akad Nikah
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold">
                    Rabu, 28 Agustus 2024
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold mb-10">
                    Tempat : Masjid Ibrahim ( Pagak )
                </motion.div>
                <motion.div variants={animatedChild} className={`text-3xl font-semibold mb-3`}>
                    Resepsi
                </motion.div>
                <motion.div variants={animatedChild} className="font-semibold">
                    Rabu, 28 Agustus 2024
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
                    <Button asChild>
                        <a
                            target="_blank"
                            href="https://calendar.google.com/calendar/render?action=TEMPLATE&dates=20240828%2F20240829&details=Kedatangan%20anda%20adalah%20hadiah%20terindah%20yang%20kami%20nantikan&location=4X3H%2B7X8%20Banggle%2C%20Kabupaten%20Kediri%2C%20Jawa%20Timur&text=PERNIKAHAN%20SERLY%20%26%20DANY">
                            <CalendarCheck className="mr-2 h-4 w-4" /> Simpan Tanggal Dan Lokasi
                        </a>
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default SaveDate;
