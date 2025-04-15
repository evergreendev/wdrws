import mainLogo from "@/public/wdrws-white-logo.png";
import Image from "next/image";
import Link from "next/link";
import evergreenLogo from "@/public/evergreen.png";
import facebookLogo from "@/public/facebook-icon.png";
import { Linkedin, Facebook } from 'lucide-react';


const Footer = () => {
    const currentYear = new Date().getFullYear();
    return <div className="bg-secondary-500 pb-7 text-secondary-100 uppercase">
            <div className="w-full max-w-screen-xl m-auto flex flex-wrap justify-around lg:justify-between items-center px-2 gap-y-5">
                <div className="flex flex-wrap items-center gap-y-5 justify-center">
                    <div>
                        <Link href="/">
                            <Image className="w-80 p-4" src={mainLogo} alt="Western Dakota Regional Water System"/>
                        </Link>
                        <p className="pl-4 opacity-60">Copyright WDRWS {currentYear}</p>
                    </div>
                    <Link className="mx-2" href="https://www.facebook.com/westsdwater">
                        <Facebook size={34}/>
                    </Link>
                    <Link className="mx-2" href="https://www.linkedin.com/company/wdrws">
                        <Linkedin size={34}/>
                    </Link>
                </div>
                <div className="text-center lg:text-left">
                    <p className="font-bold text-base">Kristin Conzet, Executive Director</p>
                    <p className="mt-2 text-sm">
                        <a href="tel:6055197333">605-519-7333</a>
                    </p>
                    <p className="mt-1 text-sm">PO Box 484</p>
                    <p className="text-sm">Rapid City, South Dakota 57709</p>
                </div>
                <div className="w-40 block mt-8 max-w-[50%] hover:opacity-85 transition-opacity"
                      >
                    <p className="text-right text-xs">Design</p>
                    <Image className="w-full" src={evergreenLogo} alt="Evergreen Media"/>
                </div>
            </div>
        </div>

}

export default Footer;
