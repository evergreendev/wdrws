import {notFound, redirect} from "next/navigation";
import {CMS_URL} from "@/constants";

export async function GET(request: Request, {params}: {params: {slug: string}}) {
    const res = await fetch(`${CMS_URL}pages?slug=${params.slug}`);

    const data = await res.json();

    if (!data[0]) notFound();

    redirect(`https://cms.wdrws.org/wp-admin/post.php?post=${data[0].id}&action=edit`);
}