'use client';
import Image from "next/image";
import header from "@/public/wdrws-annual-meeting.jpg";
import {useEffect, useState} from "react";

const Modal = () => {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    useEffect(() => {
        window.setTimeout(() => {
            toggleModal();
        }, 2000)
    }, []);


    return(
        <div className={`absolute inset-0 z-50 ${showModal ? "" : "hidden"}`}>
            <div className={`w-full p-8 bg-slate-100 max-w-screen-md z-20 absolute left-1/2 top-1/4 -translate-y-1/2 -translate-x-1/2`}>
                <button onClick={toggleModal} className={`rounded-full absolute top-1 right-1 font-bold bg-blue-500 hover:bg-blue-900 size-8 text-white`}>
                    x
                </button>
                <Image src={header} alt="WDRWS Annual Meeting 2024" className="w-full"/>
                <a className="mt-8 font-bold bg-primary-700 p-4 block text-center rounded text-xl" href="https://www.eventbrite.com/e/western-dakota-regional-water-system-annual-meeting-tickets-912759286597">Register now for the 2024 Annual Meeting on September 5, 2024! </a>
            </div>
            <div onClick={toggleModal} className="bg-black opacity-50 absolute inset-0"/>
        </div>
    );
}

export default Modal;
