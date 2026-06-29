import {CMS_URL} from "@/constants";
import {notFound, redirect} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";
import {Metadata, ResolvingMetadata} from "next";



async function getData(slug: string) {
    const normalizedSlug = slug.toLowerCase();
    if (normalizedSlug === "rsvp") {
        redirect("https://forms.gle/9LSvZHvQtLZmbBK27");
    }

    const res = await fetch(`${CMS_URL}pages?slug=${normalizedSlug}`,{next: {tags: [normalizedSlug]}})

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export async function generateMetadata({params}: { params: { slug: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const normalizedSlug = params.slug.toLowerCase();
    const data = await getData(normalizedSlug);
    if (!data[0]) {
        notFound();
    }

    return {
        title: "Western Dakota Regional Water System - " + data[0].title.rendered,
        description: data[0]?.acf?.description || "Ensuring quality, abundant water to all corners of western South Dakota",
    }
}
export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data[0]) {
        notFound();
    }

    const containerWidth = data[0]?.acf?.page_container_width ? data[0].acf.page_container_width : "LG";

    return (
        <InnerPageContent width={containerWidth} title={data[0].title.rendered} content={data[0].content.rendered}/>
    );
}
