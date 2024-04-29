import {notFound, redirect} from "next/navigation";
import {CMS_URL} from "@/constants";

async function getData() {
    const res = await fetch(
        `${CMS_URL}material?per_page=1&material-type=20`,
        {cache: 'no-store'})

    if (!res.ok) {
        notFound();
    }

    return {
        data: await res.json(),
        totalPages: res.headers.get("x-wp-totalpages")
    };
}

export async function GET() {
    const res = await getData();
    console.log(res.data[0].slug);


    redirect(`/material/${res.data[0].slug}`);
}