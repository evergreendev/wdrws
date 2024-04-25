import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";

async function getData(slug: string) {
    const res = await fetch(`${CMS_URL}pages?slug=${slug}`,{next: {tags: [slug]}})

    if (!res.ok) {
        console.log("slug")
        notFound();
    }

    return res.json();
}

export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data[0]) {
        console.log("slug empty")
        notFound();
    }

    return (
        <main className="font-pt_sans flex-col bg-white">
            <div className="flex">
                <h1 className="bg-secondary-500 pl-7 py-7 text-white text-7xl font-newsreader lg:ml-auto lg:w-10/12">{data[0].title.rendered}</h1>
            </div>
            <div
                className="content mx-auto bg-white bg-opacity-60 w-full max-w-screen-xl shadow-lg flex flex-col p-6 pt-12"
                    dangerouslySetInnerHTML={{__html: data[0].content.rendered}}/>
        </main>
    );
}
