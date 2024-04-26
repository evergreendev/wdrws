import {WP_REST_API_Attachment, WP_REST_API_Post} from "wp-types";
import Link from "next/link";
import Image from "next/image";

const PostList = async (items:  WP_REST_API_Post[], category: string)=> {
    return await Promise.all(items.map(async (item) => {
        if (item._embedded?.['wp:featuredmedia']?.[0]) {
            const featuredImg: WP_REST_API_Attachment = item._embedded['wp:featuredmedia'][0] as WP_REST_API_Attachment;
            return <Link
                className="flex flex-wrap sm:flex-nowrap bg-green-400 bg-opacity-50 hover:bg-opacity-60 text-3xl border-r-8 my-3 border-green-500 font-newsreader font-bold sm:pr-3"
                href={`/${category}/${item.slug}`} key={item.slug}>
                <Image className="w-full sm:w-48 mb-6 sm:mr-8 sm:mb-0 object-cover" src={featuredImg.source_url} alt=""
                       width={featuredImg.media_details.width as number} height={featuredImg.media_details.height as number}/>
                <div className="p-3 my-auto">
                    <div dangerouslySetInnerHTML={{__html: item.title.rendered}}/>
                    <p className="font-avenir text-xl">Learn More</p>
                </div>
            </Link>
        }

        return <Link
            className="flex bg-green-400 bg-opacity-50 hover:bg-opacity-60 p-6 items-center text-3xl border-r-8 my-3 border-green-500 font-newsreader font-bold"
            href={`/${category}/${item.slug}`} key={item.slug}>
            <div>
                <div dangerouslySetInnerHTML={{__html: item.title.rendered}}/>
                <p className="font-avenir text-xl">Learn More</p>
            </div>
        </Link>
    }));
}

export default PostList