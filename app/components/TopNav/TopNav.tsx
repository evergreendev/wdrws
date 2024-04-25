import Image from "next/image";
import facebookIcon from "@/public/facebook-icon.png";
import linkedInIcon from "@/public/linkedin.png";
import Link from "next/link";
import Search from "@/app/components/Search";
import logo from "@/public/wdrws-dark-logo.png";
import logoWhite from "@/public/wdrws-white-logo.png";
import menuItems from "@/app/components/common/menuItems";
import slugify from "slugify";
import HamburgerMenu from "@/app/components/TopNav/HamburgerMenu";

const TopBar = () => {
    return <div className="bg-secondary-500 flex justify-center">
        <div className="flex justify-end items-end py-4 w-full max-w-screen-2xl">
            <Link className="w-36 block mr-auto ml-2 sm:hidden" href="/">
                <Image src={logoWhite} alt="Western Dakota Regional Water System"/>
            </Link>
            <div className="ml-2">
                <Search/>
            </div>
            <div className="mx-20 hidden sm:flex">
                <Link className="mx-3" href="https://www.facebook.com/westsdwater">
                    <Image className="size-6" src={facebookIcon} alt="Follow Us On Facebook"/>
                </Link>
                <Link href="">
                    <Image className="size-6" src={linkedInIcon} alt="Follow Us On LinkedIn"/>
                </Link>
            </div>
            <Link href="/contact"
                  className="hidden sm:block text-white uppercase font-pt_sans text-lg font-bold hover:text-blue-200 transition-colors">Contact</Link>
            <HamburgerMenu items={menuItems}/>
        </div>
    </div>
}
const TopNav = () => {
    return <nav className="sticky top-0 sm:static z-40">
        <TopBar/>
        <div className="bg-primary-500 pt-4 pb-10 px-16 hidden sm:block">
            <div className="w-full max-w-screen-2xl m-auto flex items-center">
                <Link className="w-80 block" href="/">
                    <Image src={logo} alt="Western Dakota Regional Water System"/>
                </Link>
                <ul className="
                z-40
                mt-8
                font-pt_sans
                text-center
                font-bold
                text-dark-gray uppercase justify-between text-xl flex w-full gap-2 max-w-screen-md ml-auto pb-7">
                        {menuItems.map(item => {
                            return <li key={item.title} className="relative group w-48 z-50">
                                <Link className="w-full block hover:bg-primary-300" href={item.url || slugify(item.title, {lower:true})}>
                                    {item.title}
                                </Link>
                                {
                                    item.subMenu
                                        ? <ul className="shadow-md z-50 absolute w-48 border-white border-t-2 bottom-0 translate-y-full origin-top-left bg-primary-500 hidden group-hover:block">
                                            {item.subMenu.map(subItem => {
                                                return <li className="text-light-gray hover:bg-primary-300"
                                                           key={item.title + "-" + subItem.title}>
                                                    <Link className="p-2 block" href={`/${subItem.url || slugify(subItem.title, {lower:true})}`}>
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