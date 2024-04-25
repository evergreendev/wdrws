import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import Link from "next/link";
import Image from "next/image";

async function getData() {

    /*TODO add pagination*/
    const res = await fetch(
        `${CMS_URL}news?_embed=true`,
        {cache: 'no-store'})

    if (!res.ok) {
        notFound();
    }

    return {
        data: await res.json(),
        totalPages: res.headers.get("x-wp-totalpages")
    };
}

export default async function Page() {
    const data = await getData();

    if (!data.data[0]) {
        notFound();
    }

    const items = data.data.map(async (item: any) => {

        if (item._embedded['wp:featuredmedia']) {
            const featuredImg = item._embedded['wp:featuredmedia'][0];
            return <Link
                className="flex flex-wrap sm:flex-nowrap bg-green-400 bg-opacity-50 hover:bg-opacity-60 items-center text-4xl border-r-8 my-3 border-green-500 font-newsreader font-bold sm:pr-3"
                href={`/news/${item.slug}`} key={item.slug}>
                <Image className="w-full sm:w-96 mb-6 sm:mr-8 sm:mb-0" src={featuredImg.source_url} alt=""
                       width={featuredImg.media_details.width} height={featuredImg.media_details.height}/>
                <div className="p-3">
                    {item.title.rendered}
                    <p className="font-avenir text-xl">Learn More</p>
                </div>
            </Link>
        }

        return <Link
            className="flex bg-green-400 bg-opacity-50 hover:bg-opacity-60 p-6 items-center text-4xl border-r-8 my-3 border-green-500 font-newsreader font-bold"
            href={`/material/${item.slug}`} key={item.slug}>
            <div>
                {item.title.rendered}
                <p className="font-avenir text-xl">Learn More</p>
            </div>
        </Link>
    })

    return (
        <main className="font-pt_sans flex-col bg-white">
            <div className="flex">
                <h1 className="bg-secondary-500 pl-7 py-7 text-white text-7xl font-newsreader lg:ml-auto w-full lg:w-10/12">News</h1>
            </div>
            <div
                className="content mx-auto bg-white bg-opacity-60 w-full max-w-screen-xl flex flex-col p-0 pt-12"
            >
                {items}
            </div>
        </main>
    );
}
