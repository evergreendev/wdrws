import Image from "next/image";
import {ReactElement} from "react";

type props = {
    title: string,
    content: string|ReactElement|ReactElement[],
    isContent?: boolean,
    width: "SM"|"MD"|"LG"|"XL"|"2XL"
    featuredImg?: any
}

const InnerPageContent = ({width,title,content, isContent=true, featuredImg}: props) => {
    const widthDict = {
        Default: "max-w-screen-xl",
        SM: "max-w-screen-sm",
        MD: "max-w-screen-md",
        LG: "max-w-screen-lg",
        XL: "max-w-screen-xl",
        "2XL": "max-w-screen-2xl"
    }

    return <main className="font-pt_sans flex-col bg-slate-100 overflow-auto min-h-[68vh]">
        <div className="flex">
            <h1 className="bg-secondary-500 pl-7 py-7 text-white text-4xl lg:text-6xl font-newsreader lg:ml-auto w-full lg:w-10/12">
                <span className="max-w-screen-xl block" dangerouslySetInnerHTML={{__html: title}}/>
            </h1>
        </div>

        <div
            className={`${isContent ? "content" : ""} mx-auto my-3 bg-white bg-opacity-60 w-full ${widthDict[width]} shadow-lg flex flex-col p-6 pt-12 text-xl`}>
            {
                featuredImg ?
                    <Image style={{maxWidth: featuredImg.media_details.width + "px"}} className={`w-full mb-6 sm:mr-8`}
                           src={featuredImg.source_url} alt=""
                           width={featuredImg.media_details.width} height={featuredImg.media_details.height}/> : ""
            }

            {
                typeof content === "string" ?
                    <div dangerouslySetInnerHTML={{__html: content}}/> :
                    <div>
                        {content}
                    </div>
            }

        </div>
    </main>
}

export default InnerPageContent;