import {CMS_URL} from "@/constants";
import {notFound} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";

async function getData(slug: string) {
    const res = await fetch(`${CMS_URL}news?slug=${slug}&_embed=true`, {next: {tags: [slug]}})

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data[0]) {
        notFound();
    }

    const featuredImg = data[0]?._embedded?.['wp:featuredmedia']?.[0];

    return (
        <InnerPageContent width="max-w-screen-md" title={data[0].title.rendered} content={data[0].content.rendered} featuredImg={featuredImg}/>
    );
}
