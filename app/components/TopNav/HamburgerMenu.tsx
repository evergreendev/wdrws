'use client'
import menuItems, {menuItem} from "@/app/components/common/menuItems";
import {useEffect, useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleXmark, faBars} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import slugify from "slugify";
import {usePathname} from "next/navigation";

const HamburgerMenu = ({items}: { items: menuItem[] }) => {
    const [isOpen, setIsOpen] = useState(false);

    const pathname = usePathname();

    useEffect(() => {
        setIsOpen(false);
    },[pathname]);

    return <div className="sm:hidden">
        <button className="z-50 relative p-1 ml-12" onClick={() => {
            setIsOpen(!isOpen)
        }}>
            {
                isOpen ?
                    <FontAwesomeIcon size="lg" icon={faCircleXmark} color="white" /> :
                    <FontAwesomeIcon size="lg" icon={faBars} color="white"/>
            }
        </button>
        <div className={`fixed inset-0 bg-primary-300 z-40 
        ${isOpen ?  "translate-x-0" : "-translate-x-full"  }
        transition-transform`} >
            {
                <ul className="
                mt-8
                ml-7
                font-pt_sans
                text-left
                font-bold
                text-dark-gray uppercase justify-between text-xl flex-col w-full gap-2 max-w-screen-md pb-7">
                    {menuItems.map(item => {
                        return <li key={item.title} className="relative group w-48">
                            <Link className="w-full block hover:bg-primary-300" href={`/${item.url || slugify(item.title, {lower:true})}`}>
                                {item.title}
                            </Link>
                            {
                                item.subMenu
                                    ?
                                    <ul className=" w-48 border-t-2 ml-2">
                                        {item.subMenu.map(subItem => {
                                            return <li className="text-light-gray hover:bg-primary-300"
                                                       key={item.title + "-" + subItem.title}>
                                                <Link className="p-2 block"
                                                      href={`/${subItem.url || slugify(subItem.title, {lower:true})}`}>
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
            }
        </div>
    </div>
}

export default HamburgerMenu;