import Image, {StaticImageData} from "next/image";
import Link from "next/link";

type props = {
    url?: string,
    borderClass: string,
    textClass: string
    src: string | StaticImageData,
    header: string,
    subHeader: string,
    text: string,
    items: { title: string, url: string, src: string | StaticImageData }[],
    styles?: string
}

const ColCard = ({url, borderClass, textClass, src, header, subHeader, text, items, styles}: props) => {

    return <div className={`bg-white shadow-md font-pt_sans font-bold border-t-[10px] ${borderClass} ${styles}`}>
        <h2 className={`text-4xl font-bold ${textClass} p-5 font-pt_sans uppercase`}>{header}</h2>
        {
            url
                ? <Link href={url} className="hover:bg-secondary-100 transition-colors block">
                    <Image src={src} alt="" className="w-full"/>
                    <div className="min-h-40">
                        <h3 className={`${textClass} font-bold p-5 pb-0 text-4xl`}>{subHeader}</h3>
                        <p className="p-5 pt-0 text-gray">{text}</p>
                    </div>
                </Link>
                : <>
                    <Image src={src} alt="" className="w-full"/>
                    <div className="min-h-40">
                        <h3 className={`${textClass} font-bold p-5 pb-0 text-4xl`}>{subHeader}</h3>
                        <p className="p-5 pt-0 text-gray">{text}</p>
                    </div>
                </>
        }

        <div className="p-5">
            {items.map(item => {
                return (<Link href={item.url}
                              className="mb-4 hover:bg-secondary-100 transition-colors flex items-center text-gray"
                              key={item.title}>
                    <Image className="size-16" src={item.src} alt=""/>
                    <p className="ml-4">{item.title}</p>
                </Link>);
            })}
        </div>
    </div>
}

export default ColCard;