import Image from "next/image";
import Link from "next/link";
import Search from "@/app/components/Search";
import logo from "@/public/wdrws-dark-logo.png";
import logoWhite from "@/public/wdrws-white-logo.png";
import menuItems from "@/app/components/common/menuItems";
import slugify from "slugify";
import HamburgerMenu from "@/app/components/TopNav/HamburgerMenu";

const TopBar = () => {
    return <div className="bg-secondary-500 flex justify-center">
        <div className="flex justify-end items-end py-4 w-full max-w-screen-xl">
            <Link className="w-36 block mr-auto ml-2 sm:hidden" href="/">
                <Image src={logoWhite} alt="Western Dakota Regional Water System"/>
            </Link>
            <div className="ml-2">
                <Search/>
            </div>
            <div className="mx-4 hidden sm:flex">
{/*                <Link className="mx-3" href="https://www.facebook.com/westsdwater">
                    <Image className="size-6" src={facebookIcon} alt="Follow Us On Facebook"/>
                </Link>*/}
            </div>

            <div className="hidden sm:flex">
                <Link href="/contact?reason=send-me-info"
                      className="text-white bg-[#0e5485] font-pt_sans text-base hover:bg-blue-900 transition-colors px-4 py-1.5 mx-1 rounded-lg bg-secondary-700 hover:bg-secondary-800">Send Me Info</Link>
                <Link href="/contact?reason=request-presentation"
                      className="text-white bg-[#0e5485] font-pt_sans text-base hover:bg-blue-900 transition-colors px-4 py-1.5 mx-1 rounded-lg bg-secondary-700 hover:bg-secondary-800">Request Presentation</Link>
                <Link href="/contact?reason=will-i-be-impacted"
                      className="text-white bg-[#0e5485] font-pt_sans text-base hover:bg-blue-900 transition-colors px-4 py-1.5 mx-1 rounded-lg bg-secondary-700 hover:bg-secondary-800">Will I Be Impacted?</Link>
                <Link href="/contact?reason=general-comments"
                      className="text-white bg-[#0e5485] font-pt_sans text-base hover:bg-blue-900 transition-colors px-4 py-1.5 mx-1 rounded-lg bg-secondary-700 hover:bg-secondary-800">General Comments</Link>
            </div>

            <Link href="/contact"
                  className="text-black bg-primary-500 font-pt_sans text-base transition-colors px-4 py-1.5 mx-1 rounded-lg bg-secondary-700 hover:bg-secondary-800">Contact</Link>
            <Link href="/membership"
                  className="hidden sm:block uppercase font-pt_sans text-lg font-bold hover:text-white transition-colors px-4 py-2 mx-2 rounded bg-white text-black hover:bg-green-400">Join Now</Link>
            <HamburgerMenu/>
        </div>
    </div>
}
const TopNav = () => {
    return <nav className="sticky top-0 sm:static z-40">
        <TopBar/>
        <div className="bg-primary-500 px-16 hidden sm:block">
            <div className="w-full max-w-screen-xl m-auto flex items-center py-2">
                <Link className="w-40 block" href="/">
                    <Image src={logo} alt="Western Dakota Regional Water System"/>
                </Link>
                <ul className="
                z-40
                font-pt_sans
                text-center
                font-bold
                text-dark-gray uppercase justify-between text-xl flex w-full gap-2 max-w-screen-md ml-auto">
                    {menuItems.map(item => {
                        return <li key={item.title} className="relative group z-50">
                            <Link className="w-full block hover:bg-primary-300"
                                  href={item.url === "#" ? "#" : `${item.url || "/" + slugify(item.title, {lower: true})}`}>
                                {item.title}
                            </Link>
                            {
                                item.subMenu
                                    ?
                                    <ul className="shadow-md z-50 absolute w-48 border-white border-t-2 bottom-0 right-1/2 translate-x-1/2 translate-y-full origin-top-left bg-primary-500 hidden group-hover:block">
                                        {item.subMenu.map(subItem => {
                                            return <li className="text-light-gray hover:bg-primary-300"
                                                       key={item.title + "-" + subItem.title}>
                                                <Link className="p-2 block"
                                                      href={`${subItem.url || "/" + slugify(subItem.title, {lower: true})}`}>
                                                    {subItem.title}
                                                </Link>
                                            </li>
                                        })}
                                    </ul>
                                    : ""
                            }
                        </li>
                    })}
                </ul>
            </div>
        </div>
    </nav>
}

export default TopNav;
