import {WP_REST_API_Search_Result} from "wp-types";
import {CMS_URL} from "@/constants";

export function generateUrlFromSearchResult(result: WP_REST_API_Search_Result) {
    const cmsWithoutProtocol = CMS_URL.replace("/wp-json/wp/v2","").replace("http://", "").replace("https://", "");

    return `/${result.url.replace(cmsWithoutProtocol, "").replace("http://", "").replace("https://", "")}`;
}