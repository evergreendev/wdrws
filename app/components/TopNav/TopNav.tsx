import Image from "next/image";
import facebookIcon from "@/public/facebook-icon.png";
import linkedInIcon from "@/public/linkedin.png";
import Link from "next/link";
import Search from "@/app/components/Search";
import logo from "@/public/main-logo.png";

const TopBar = () => {
    return <div className="bg-secondary-500 flex justify-center">
        <div className="flex justify-end items-end py-4 w-full max-w-screen-2xl">
            <Search/>
            <div className="mx-20 flex">
                <Link className="mx-3" href="https://www.facebook.com/westsdwater">
                    <Image className="size-6" src={facebookIcon} alt="Follow Us On Facebook"/>
                </Link>
                <Link href="">
                    <Image className="size-6" src={linkedInIcon} alt="Follow Us On LinkedIn"/>
                </Link>
            </div>
            <Link href="/contact" className="text-white uppercase font-pt_sans text-lg font-bold hover:text-blue-200 transition-colors">Contact</Link>
        </div>
    </div>
}
const TopNav = () => {
    return <nav>
        <TopBar/>
        <div className="bg-primary-500 pt-4 pb-10 px-16">
            <div className="w-full max-w-screen-2xl m-auto">
                <Link className="w-96 block" href="/">
                    <Image src={logo} alt="Western Dakota Regional Water System"/>
                </Link>
            </div>

        </div>
    </nav>
}

export default TopNav;