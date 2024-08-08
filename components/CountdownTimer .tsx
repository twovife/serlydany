"use client";
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
    const targetTime = new Date("2024-08-28T08:00:00.000Z");
    const [duration, setDuration] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const interval = setInterval(() => {
            updateDate();
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    function updateDate() {
        const now = new Date().getTime();
        const timeleft = targetTime.getTime() - now;

        let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

        setDuration({
            days,
            hours,
            minutes,
            seconds,
        });
    }

    return (
        <div className="flex justify-center gap-3 mx-auto mb-3">
            <div className="flex flex-col text-center bg-black text-gray-100 p-3 sm:p-3 lg:p-5 rounded-lg">
                <p className="text-xl lg:text-3xl font-semibold">{`${duration.days < 0 ? 0 : duration.days}`}</p>
                <p>Hari</p>
            </div>

            <div className="flex flex-col text-center bg-black text-gray-100 p-3 sm:p-3 lg:p-5 rounded-lg">
                <p className="text-xl lg:text-3xl font-semibold">{`${duration.hours < 0 ? 0 : duration.hours}`}</p>
                <p>Jam</p>
            </div>

            <div className="flex flex-col text-center bg-black text-gray-100 p-3 sm:p-3 lg:p-5 rounded-lg">
                <p className="text-xl lg:text-3xl font-semibold">{`${duration.minutes < 0 ? 0 : duration.minutes}`}</p>
                <p>Menit</p>
            </div>

            <div className="flex flex-col text-center bg-white text-black p-3 sm:p-3 lg:p-5 lg:border-black-400 border-2 rounded-lg">
                <p className="text-xl lg:text-3xl font-medium">{`${duration.seconds < 0 ? 0 : duration.seconds}`}</p>
                <p>Detik</p>
            </div>

            {/* Similar blocks for hours, minutes, and seconds */}
        </div>
    );
};

export default CountdownTimer;
