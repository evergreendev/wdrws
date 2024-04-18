import {revalidateTag} from "next/cache";
import {redirect} from "next/navigation";

export async function GET(request: Request, {params}: {params: {slug: string}}) {
    revalidateTag(params.slug);

    redirect("/"+params.slug);
}