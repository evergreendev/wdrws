import mainLogo from "@/public/wdrws-white-logo.png";
import Image from "next/image";
import Link from "next/link";
import evergreenLogo from "@/public/evergreen.png";
import facebookLogo from "@/public/facebook-icon.png";
import linkedInLogo from "@/public/linkedin.png";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return <div className="bg-secondary-500 pb-7 text-secondary-100 uppercase">
        <div className="w-full max-w-screen-xl m-auto flex justify-between items-center">
            <div className="flex items-center">
                <div>
                    <Link href="/">
                        <Image className="w-80 p-4" src={mainLogo} alt="Western Dakota Regional Water System"/>
                    </Link>
                    <p className="pl-4 opacity-60">Copyright WDRWS {currentYear}</p>
                </div>
                <Link className="mx-2" href="https://www.facebook.com/westsdwater">
                    <Image className="w-11" src={facebookLogo} alt="Follow Western Dakota Regional Water System on Facebook"/>
                </Link>
                <Link className="mx-2" href="/">
                    <Image className="w-11" src={linkedInLogo} alt="Follow Western Dakota Regional Water System on LinkedIn"/>
                </Link>
            </div>
            <Link className="w-80 block opacity-60 hover:opacity-85 transition-opacity" href="https://evergreenmediarc.com/">
                <p className="text-right">Design</p>
                <Image className="w-full" src={evergreenLogo} alt="Evergreen Media"/>
            </Link>
        </div>
    </div>
}

export default Footer;