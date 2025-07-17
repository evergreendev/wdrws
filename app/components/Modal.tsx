'use client';
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
                <h2 className="text-2xl font-bold mt-4 text-center mb-4">Annual Meeting</h2>
                <p>A discussion on a proposed pipeline to provide water to western South Dakota.</p>
                <a className="mt-4 font-bold bg-primary-700 p-4 block text-center rounded text-xl" href="https://bit.ly/4eOQIBU">Register now!</a>
            </div>
            <div onClick={toggleModal} className="bg-black opacity-50 absolute inset-0"/>
        </div>
    );
}


export default Modal;
