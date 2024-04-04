import Image, {StaticImageData} from "next/image";
import Link from "next/link";

type props = {
    colorScheme: "yellow" | "blue",
    wide?: boolean,
    src: string | StaticImageData,
    text: string,
    link: string,
    linkStyles?: string
}

const ImageCard = ({colorScheme, src, text, link, linkStyles, wide}: props) => {
    return <Link href={link} className={`font-avenir font-bold border-t-[20px] overflow-hidden
    ${colorScheme === "yellow" ? "border-primary-500" : "border-secondary-500"}
    relative
    block
    ${linkStyles} group`}>
        <Image
            className={`group-hover:scale-105 transition-all duration-1000
            `}
            src={src} alt=""/>
        <div className={`uppercase
        ${wide ? "md:pl-44" : "pl-9"}
            absolute
            bottom-0
            left-0
            right-0
            p-2
            bg-opacity-70 bg-black 
            ${colorScheme === "yellow" ? "text-primary-500" : " text-white"}`}>
            {text}
        </div>
    </Link>
}

export default ImageCard;