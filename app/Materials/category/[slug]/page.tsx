import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function Page({params}: { params: { slug: string } }) {

    return (
        <main className="font-pt_sans flex-col bg-white">
            <div className="flex">
                <h1 className="bg-secondary-500 pl-7 py-7 text-white text-7xl font-newsreader lg:ml-auto lg:w-10/12"></h1>
            </div>
            <div
                className="content mx-auto bg-white bg-opacity-60 w-full max-w-screen-xl flex flex-col p-0 pt-12"
            >
                YOURE HERE
            </div>
        </main>
    );
}
