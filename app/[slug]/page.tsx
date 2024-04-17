import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";

async function getData(slug:string) {
    const res = await fetch(`${CMS_URL}pages?slug=${slug}`)

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function Page({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data[0]){
        notFound();
    }

    return (
        <main className="font-pt_sans flex min-h-screen bg-white">
            <div className="mt-24 bg-secondary-100 w-full max-w-screen-2xl">
                <div
                    className="content bg-white bg-opacity-60 w-full max-w-screen-lg ml-auto -mr-36 -mt-12 mb-24 shadow-lg flex flex-col p-6 pt-12 border-t-8 border-primary-500"
                    dangerouslySetInnerHTML={{__html: data[0].content.rendered}}/>
            </div>
        </main>
    );
}
