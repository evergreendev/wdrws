import {CMS_URL} from "@/constants";
import {notFound, redirect} from "next/navigation";
import InnerPageContent from "@/app/components/InnerPageContent";
import {Metadata, ResolvingMetadata} from "next";

async function getData(slug: string) {
    const res = await fetch(`${CMS_URL}news?slug=${slug}&_embed=true`, {next: {tags: [slug]}})

    if (!res.ok) {
        notFound();
    }

    return res.json();
}

export async function generateMetadata({params}: { params: { slug: string } }, parent: ResolvingMetadata): Promise<Metadata> {
    const data = await getData(params.slug);
    if (!data[0]) {
        notFound();
    }
    if ((data[0]?.acf as any)?.['outside_link']) {
        redirect((data[0]?.acf as any)?.['outside_link']);
    }


    return {
        title: "Western Dakotata Regional Water System - " + data[0].title.rendered,
        description: data[0]?.acf?.description || "Ensuring quality, abundant water to all corners of western South Dakota",
    }
}

export default async function Page({params}: { params: { slug: string } }) {
    const data = await getData(params.slug);

    if (!data[0]) {
        notFound();
    }

    const containerWidth = data[0]?.acf?.page_container_width ? data[0].acf.page_container_width : "SM";

    const featuredImg = data[0]?._embedded?.['wp:featuredmedia']?.[0];

    return (
        <InnerPageContent width={containerWidth === "Default" ? "SM" : containerWidth} title={data[0].title.rendered} content={data[0].content.rendered} featuredImg={featuredImg}/>
    );
}
