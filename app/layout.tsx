import type {Metadata} from "next";
import "./globals.css";
import {lato, newsreader, pt_sans} from "@/app/fonts";
import TopNav from "@/app/components/TopNav";
import Footer from "@/app/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google"


export const metadata: Metadata = {
    title: "Western Dakota Regional Water System",
    description: "Ensuring quality, abundant water to all corners of western South Dakota",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <GoogleAnalytics gaId={"G-LSRWS849HZ"}/>
        <GoogleAnalytics gaId={"G-5JRPP98J4S"}/>
        <body className={`${newsreader.variable} ${lato.variable} ${pt_sans.variable} overflow-x-hidden wp-embed-responsive`}>
        <TopNav/>
        {children}
        <Footer/>
        {/*<Modal/>*/}
        </body>
        </html>
    );
}
