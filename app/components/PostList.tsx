import {WP_REST_API_Attachment, WP_REST_API_Post} from "wp-types";
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
        console.log("month", month);
        const shouldPrintMonth = !seenMonth.has(month.month + month.year);

        seenMonth.add(month.month + month.year);

        if (item._embedded?.['wp:featuredmedia']?.[0]) {
            const featuredImg: WP_REST_API_Attachment = item._embedded['wp:featuredmedia'][0] as WP_REST_API_Attachment;
            return (
                <>
                    {
                        category === "news" && shouldPrintMonth &&
                        <h2 className="font-bold text-2xl">{month.month + " " + month.year}</h2>
                    }
                    <Link
                        className="max-w-screen-md mx-auto flex shadow-sm flex-wrap sm:flex-nowrap bg-secondary-100 bg-opacity-50 hover:bg-opacity-60 text-3xl my-8 border-green-500 font-newsreader font-bold sm:pr-0"
                        href={`/${category}/${item.slug}`} key={item.slug}>
                        <Image className="w-full sm:w-72 sm:min-w-72 sm:min-h-60 mb-6 sm:mr-2 sm:mb-0 object-cover"
                               src={featuredImg.source_url} alt=""
                               width={featuredImg.media_details.width as number}
                               height={featuredImg.media_details.height as number}/>
                        <div className="p-2 flex-grow flex-col flex">
                            <div className="my-auto" dangerouslySetInnerHTML={{__html: item.title.rendered}}/>
                            <p className="mt-4 ml-auto font-avenir text-2xl bg-primary-500 flex px-6 py-1 rounded text-right">Learn
                                More</p>
                        </div>
                    </Link>
                </>
            )
        }

        return <>
            {
                category === "news" && shouldPrintMonth &&
                <h2 className="font-bold text-2xl">{month.month + " " + month.year}</h2>
            }
            <Link
                className="max-w-screen-md mx-auto flex shadow-sm flex-wrap sm:flex-nowrap bg-secondary-100 bg-opacity-50 hover:bg-opacity-60 text-3xl my-8 border-green-500 font-newsreader font-bold sm:pr-0"
                href={`/${category}/${item.slug}`} key={item.slug}>
                <div className="p-2 flex-grow flex-col flex">
                    <div className="my-auto" dangerouslySetInnerHTML={{__html: item.title.rendered}}/>
                    <p className="mt-4 ml-auto font-avenir text-2xl bg-primary-500 flex px-6 py-1 rounded text-right">Learn
                        More</p>
                </div>
            </Link>
        </>

    }));
}

export default PostList