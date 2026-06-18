import {WP_REST_API_Post} from "wp-types";
import Link from "next/link";
import Image from "next/image";

function getMonth(date: string) {
    const arr = date.split("-");
    const monthDict = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ]

    return {
        month: monthDict[parseInt(arr[1]) - 1],
        year: arr[0]
    };
}


const PostList = async (items: WP_REST_API_Post[], category: string) => {
    const seenMonth = new Set<string>();

    return await Promise.all(items.map(async (item) => {
        const month = getMonth(item.date);
        const shouldPrintMonth = !seenMonth.has(month.month + month.year);

        const formattedDate = new Date(item.date).toLocaleDateString();

        const outsideLink = (item?.acf as any)?.['outside_link'];
        const newsPreviewLine = (item?.acf as any)?.['news_preview_line'];

        seenMonth.add(month.month + month.year);

        const featuredImg = item._embedded?.['wp:featuredmedia']?.[0] as any;

        return <>
            {
                category === "news" && shouldPrintMonth &&
                <h2 className="font-bold text-3xl mt-8">{month.month + " " + month.year}</h2>
            }
            <Link
                className="max-w-screen-md flex flex-wrap sm:flex-nowrap hover:bg-slate-100 text-xl my-4 border-green-500 font-newsreader"
                href={outsideLink ? outsideLink :`/${category}/${item.slug}`} key={item.slug}>
                {
                    featuredImg && (
                    <div className="w-full sm:w-36 sm:min-w-[9rem] aspect-[4/3] bg-white p-2 sm:mr-4 mb-3 sm:mb-0 flex-shrink-0 flex items-center justify-center">
                        <Image 
                            className="w-full h-full object-contain"
                            src={featuredImg.source_url} 
                            alt=""
                            width={featuredImg.media_details.width}
                            height={featuredImg.media_details.height}
                        />
                    </div>
                )}
                <div className="p-3 sm:p-4 flex-grow flex-col flex">
                    <div className="my-auto underline text-xl sm:text-2xl leading-tight" dangerouslySetInnerHTML={{__html: item.title.rendered + " | " + formattedDate}}/>
                    {newsPreviewLine && 
                        <div className="mt-2 text-base sm:text-lg leading-snug no-underline" dangerouslySetInnerHTML={{__html: newsPreviewLine}}/>
                    }
                </div>
            </Link>
        </>

    }));
}

export default PostList
