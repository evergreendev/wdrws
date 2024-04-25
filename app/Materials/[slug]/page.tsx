import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";

async function getData(slug: string) {
    const res = await fetch(`${CMS_URL}material?slug=${slug}`,{next: {tags: [slug]}})

    if (!res.ok) {
        console.log("cat slug not found")
        notFound();
    }

    return res.json();
}

export default async function Page({params}: { params: { slug: string } }) {


    return (
        <main className="font-pt_sans flex-col bg-white">
            <div className="flex">
                <h1 className="bg-secondary-500 pl-7 py-7 text-white text-7xl font-newsreader lg:ml-auto lg:w-10/12">t</h1>
            </div>
            <div>This is it</div>
        </main>
    );
}
