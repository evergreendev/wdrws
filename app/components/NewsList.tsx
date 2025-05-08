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
                className="max-w-screen-md flex flex-wrap sm:flex-nowrap hover:bg-opacity-60 text-xl my-2 border-green-500 font-newsreader sm:pr-0"
                href={outsideLink ? outsideLink :`/${category}/${item.slug}`} key={item.slug}>
                {
                    featuredImg && (
                    <div className="w-20 h-20 min-w-20 mr-2 flex-shrink-0">
                        <Image 
                            className="w-full h-full object-cover"
                            src={featuredImg.source_url} 
                            alt=""
                            width={featuredImg.media_details.width}
                            height={featuredImg.media_details.height}
                        />
                    </div>
                )}
                <div className="p-2 flex-grow flex-col flex">
                    <div className="my-auto underline" dangerouslySetInnerHTML={{__html: item.title.rendered + " | " + formattedDate}}/>
                    {newsPreviewLine && 
                        <div className="mt-1 text-base no-underline" dangerouslySetInnerHTML={{__html: newsPreviewLine}}/>
                    }
                </div>
            </Link>
        </>

    }));
}

export default PostList
